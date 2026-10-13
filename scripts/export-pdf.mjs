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
 *   3. Screenshots every step at ?slide=N&export=1, which hides the nav bar
 *      and mounts only that slide.
 *   4. Prints a page of the screenshots to a PDF with `chrome --print-to-pdf`,
 *      one page per step at the viewport size, and checks the page count.
 *
 * Chrome runs only through its command line. The script never opens a
 * DevTools connection (no puppeteer, no remote debugging), so it also works
 * where an administrator has disabled remote debugging.
 *
 * Captures run with Chrome's site isolation off, so that live cross-site
 * embeds render (see `render` below). Pass --site-isolation to keep it on
 * when you capture a site you do not control.
 */

import { spawn, spawnSync } from "child_process";
import { mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from "fs";
import { createServer } from "net";
import { tmpdir } from "os";
import path from "path";
import { pathToFileURL } from "url";
import { findChrome, killAllChrome, runChrome } from "./export-pdf-chrome.mjs";
import {
  USAGE,
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
let server = null;
let stopping = false;

function cleanup() {
  stopping = true;
  killAllChrome();
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

function build() {
  console.log("Building...");
  const result = spawnSync(nextBin, ["build"], { stdio: "inherit" });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`Build failed (exit ${result.status})`);
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
    waitMs = parseIntSetting("EXPORT_WAIT_MS", process.env.EXPORT_WAIT_MS, 10_000, {
      min: 0,
      max: 600_000,
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
    build();
    origin = await startServer(await getFreePort());
  }
  work = mkdtempSync(path.join(tmpdir(), `export-${args.id}-`));

  const render = {
    // The watchdog covers a whole capture, including a Chrome that hangs.
    timeoutMs: waitMs + 60_000,
    extraFlags: [
      `--window-size=${args.size.width},${args.size.height}`,
      `--force-device-scale-factor=${args.scale}`,
      // Time the page gets to render after it loads.
      `--virtual-time-budget=${waitMs}`,
      // Cap on the initial page load, so a stalled request cannot hold it.
      `--timeout=${waitMs + 30_000}`,
      // The virtual time budget covers only the page's own process. With
      // site isolation on, a cross-site embed (a live app in an iframe) runs
      // in another process and is still blank when the budget ends.
      ...(args.siteIsolation
        ? []
        : [
            "--disable-site-isolation-trials",
            "--disable-features=IsolateOrigins,site-per-process",
          ]),
    ],
  };

  // 1. Count the steps, unlocking the deck if it is private.
  console.log(`Reading ${stepUrl(origin, args.id, 0)}`);
  let password = null;
  let deck = parseDeckDom(
    await runChrome(binary, ["--dump-dom", stepUrl(origin, args.id, 0)], render),
  );
  if (deck.gated) {
    password = process.env.NEXT_PUBLIC_PRIVATE_PASSWORD ?? "";
    deck = parseDeckDom(
      await runChrome(
        binary,
        ["--dump-dom", stepUrl(origin, args.id, 0, password)],
        render,
      ),
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

  // 2. Screenshot each step. A failure stops the other captures.
  const names = Array.from({ length: total }, (_, i) => shotName(i, total));
  let done = 0;
  await mapLimit(
    names,
    concurrency,
    async (name, step) => {
      const file = path.join(work, name);
      for (let attempt = 1; ; attempt++) {
        try {
          await runChrome(
            binary,
            [`--screenshot=${file}`, stepUrl(origin, args.id, step, password)],
            render,
          );
          if (statSync(file).size === 0) throw new Error("empty screenshot");
          break;
        } catch (e) {
          if (stopping || attempt === ATTEMPTS) {
            throw new Error(`Step ${step + 1}: ${e.message}`);
          }
          console.log(`  step ${step + 1} attempt ${attempt} failed (${e.message}); retrying`);
        }
      }
      done++;
      console.log(`Captured ${done}/${total}`);
    },
    {
      onFailure: () => {
        stopping = true;
        killAllChrome();
      },
    },
  );

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
