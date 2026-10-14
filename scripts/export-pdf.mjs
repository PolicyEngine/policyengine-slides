/**
 * Export a slideshow to PDF.
 *
 * Usage:
 *   bun run export <slideshow-id> [output.pdf]                 build locally, then capture
 *   bun run export <slideshow-id> [output.pdf] --url <origin>  capture a deployed site
 *   ... --size 1440x810 --scale 2                              viewport and pixel ratio
 *
 * Examples:
 *   bun run export abundance-dmv ~/Desktop/abundance-dmv.pdf
 *   bun run export bls-taxsim-2026 bls.pdf --url https://www.policyengine.org
 *   bun run export bls-taxsim-2026 bls.pdf --size 1440x810 --scale 2
 *
 * What it does:
 *   1. Without --url, runs `next build` and serves the build on a free port.
 *   2. Reads the step count from the viewer's data-total-steps attribute,
 *      using `chrome --dump-dom`. A private deck is unlocked with
 *      NEXT_PUBLIC_PRIVATE_PASSWORD, passed in the URL fragment.
 *   3. Screenshots every step at ?slide=N&export=1&settle=<ms>. Export mode
 *      hides the nav bar, mounts only that slide, and holds the page's load
 *      event until the slide has been in the DOM for <ms> of real time, so
 *      live embeds have that long to render before Chrome captures at load.
 *      Each capture also dumps the DOM, and a capture that does not show the
 *      requested step, settled, fails and is retried.
 *   4. Prints a page of the screenshots to a PDF with `chrome --print-to-pdf`,
 *      one page per step at the viewport size, and checks the page count.
 *
 * Chrome runs only through its command line. The script never opens a
 * DevTools connection (no puppeteer, no remote debugging), so it also works
 * where an administrator has disabled remote debugging.
 */

import { spawn } from "child_process";
import { mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from "fs";
import { createServer } from "net";
import { tmpdir } from "os";
import path from "path";
import { pathToFileURL } from "url";
import { findChrome, killAllChrome, runChrome } from "./export-pdf-chrome.mjs";
import {
  USAGE,
  checkCapture,
  countPdfPages,
  deckHtml,
  mapLimit,
  parseArgs,
  parseDeckDom,
  parseIntSetting,
  shotName,
  stepUrl,
} from "./export-pdf-lib.mjs";

const ATTEMPTS = 3;

// ── Cleanup ──────────────────────────────────────────────────────────
// Everything the script starts or writes is registered here, so a failure
// or a signal stops Chrome and the server and removes the screenshots
// (which can show a private deck).

let work = null;
let builder = null;
let server = null;
let stopping = false;

function cleanup() {
  stopping = true;
  killAllChrome();
  if (builder) {
    builder.kill();
    builder = null;
  }
  if (server) {
    server.kill();
    server = null;
  }
  if (work) {
    rmSync(work, { recursive: true, force: true });
    work = null;
  }
}

for (const [signal, code] of [
  ["SIGINT", 130],
  ["SIGTERM", 143],
]) {
  process.once(signal, () => {
    cleanup();
    process.exit(code);
  });
}

// ── Local build and server ───────────────────────────────────────────

function getFreePort() {
  return new Promise((resolve, reject) => {
    const srv = createServer();
    srv.listen(0, () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
    srv.on("error", reject);
  });
}

const nextBin = path.join(process.cwd(), "node_modules", ".bin", "next");

/** Run `next build`, without blocking, so a signal can still stop it. */
function build() {
  console.log("Building...");
  return new Promise((resolve, reject) => {
    const proc = spawn(nextBin, ["build"], { stdio: "inherit" });
    builder = proc;
    proc.on("error", (e) => {
      builder = null;
      reject(e);
    });
    proc.on("close", (code, signal) => {
      builder = null;
      if (code === 0) resolve();
      else reject(new Error(`Build failed (${signal ? `stopped by ${signal}` : `exit ${code}`})`));
    });
  });
}

/** Start `next start` on `port` and resolve with its origin once it answers. */
async function startServer(port) {
  const proc = spawn(nextBin, ["start", "-p", String(port)], { stdio: "ignore" });
  server = proc;
  let spawnError = null;
  proc.on("error", (e) => (spawnError = e));
  const origin = `http://localhost:${port}`;
  const deadline = Date.now() + 60_000;
  while (Date.now() < deadline) {
    if (spawnError) throw spawnError;
    if (proc.exitCode !== null) throw new Error(`Server exited ${proc.exitCode}`);
    try {
      const remaining = Math.max(1, deadline - Date.now());
      const res = await fetch(`${origin}/slides`, {
        signal: AbortSignal.timeout(Math.min(5_000, remaining)),
      });
      if (res.status < 500) return origin;
    } catch {
      // not listening yet, or this request timed out
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("Server did not respond within 60 s");
}

// ── main ─────────────────────────────────────────────────────────────

async function main() {
  let args;
  let waitMs;
  let concurrency;
  try {
    args = parseArgs(process.argv.slice(2));
    waitMs = parseIntSetting("EXPORT_WAIT_MS", process.env.EXPORT_WAIT_MS, 8_000, {
      min: 0,
      max: 60_000,
    });
    concurrency = parseIntSetting(
      "EXPORT_CONCURRENCY",
      process.env.EXPORT_CONCURRENCY,
      3,
      { min: 1, max: 16 },
    );
  } catch (e) {
    console.error(`${e.message}\n\n${USAGE}`);
    process.exit(1);
  }
  if (args.help) {
    console.log(USAGE);
    return;
  }

  const binary = findChrome();
  if (!binary) {
    throw new Error("Chrome not found. Set CHROME_PATH to a Chrome or Chromium binary.");
  }
  const output = path.resolve(args.output);

  let origin = args.url;
  if (!origin) {
    await build();
    origin = await startServer(await getFreePort());
  }
  work = mkdtempSync(path.join(tmpdir(), `export-${args.id}-`));

  // Chrome captures when the page's load event fires, and export mode holds
  // that event until the slide has settled. When --timeout runs out, Chrome
  // stops the page load and captures the page as it stands. The watchdog
  // covers the whole process, including a Chrome that hangs.
  const render = {
    timeoutMs: waitMs + 120_000,
    extraFlags: [
      `--window-size=${args.size.width},${args.size.height}`,
      `--force-device-scale-factor=${args.scale}`,
      `--timeout=${waitMs + 30_000}`,
    ],
  };
  const at = (step, password = null) =>
    stepUrl(origin, args.id, step, { settle: waitMs, password });

  // 1. Count the steps, unlocking the deck if it is private.
  console.log(`Reading ${at(0)}`);
  let password = null;
  let deck = parseDeckDom(await runChrome(binary, ["--dump-dom", at(0)], render));
  if (deck.gated) {
    password = process.env.NEXT_PUBLIC_PRIVATE_PASSWORD ?? "";
    deck = parseDeckDom(
      await runChrome(binary, ["--dump-dom", at(0, password)], render),
    );
    if (deck.gated) {
      throw new Error(
        "This deck is private. Set NEXT_PUBLIC_PRIVATE_PASSWORD to its password.",
      );
    }
  }
  const { total, title } = deck;
  if (!total) {
    throw new Error(
      "No data-total-steps on the page. Is the slideshow id right, and does the site include export mode?",
    );
  }
  console.log(`${total} steps`);

  // 2. Screenshot each step. A step that fails in the parallel pass is
  // retried afterwards on its own with twice the time, since a busy machine
  // can make several Chromes at once outrun the watchdog.
  const names = Array.from({ length: total }, (_, i) => shotName(i, total));
  const capture = async (step, options) => {
    const file = path.join(work, names[step]);
    rmSync(file, { force: true });
    // One Chrome run writes the screenshot and prints the DOM it captured.
    const dom = await runChrome(
      binary,
      ["--dump-dom", `--screenshot=${file}`, at(step, password)],
      options,
    );
    checkCapture(dom, step);
    if (statSync(file).size === 0) throw new Error("empty screenshot");
  };
  let done = 0;
  const retry = [];
  await mapLimit(names, concurrency, async (_, step) => {
    try {
      await capture(step, render);
      console.log(`Captured ${++done}/${total}`);
    } catch (e) {
      if (stopping) throw e;
      console.log(`  step ${step + 1} failed (${e.message}); will retry alone`);
      retry.push(step);
    }
  });
  const patient = {
    timeoutMs: render.timeoutMs * 2,
    extraFlags: render.extraFlags.map((flag) =>
      flag.startsWith("--timeout=") ? `--timeout=${(waitMs + 30_000) * 2}` : flag,
    ),
  };
  for (const step of retry.sort((a, b) => a - b)) {
    for (let attempt = 2; ; attempt++) {
      try {
        await capture(step, patient);
        console.log(`Captured ${++done}/${total} (step ${step + 1}, attempt ${attempt})`);
        break;
      } catch (e) {
        if (stopping || attempt === ATTEMPTS) {
          throw new Error(`Step ${step + 1}: ${e.message}`);
        }
        console.log(`  step ${step + 1} attempt ${attempt} failed (${e.message}); retrying`);
      }
    }
  }

  // 3. Print the screenshots to a PDF and check that every step has a page.
  const page = path.join(work, "deck.html");
  writeFileSync(page, deckHtml(names, { ...args.size, title }));
  await runChrome(
    binary,
    ["--no-pdf-header-footer", `--print-to-pdf=${output}`, pathToFileURL(page).href],
    { timeoutMs: 120_000 },
  );
  const pages = countPdfPages(readFileSync(output));
  if (pages !== total) {
    throw new Error(`The PDF has ${pages} pages for ${total} steps: ${output}`);
  }
  console.log(`PDF saved to ${output} (${pages} pages)`);
}

main()
  .then(() => cleanup())
  .catch((e) => {
    cleanup();
    console.error(e.message || e);
    process.exit(1);
  });
