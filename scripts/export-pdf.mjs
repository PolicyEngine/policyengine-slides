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
 *   1. Without --url, builds into .next-export with NEXT_PUBLIC_EXPORT_BUILD=1
 *      (private decks skip the password gate) and serves it on a free port.
 *   2. Reads the step count from the viewer's data-total-steps attribute,
 *      using `chrome --dump-dom`.
 *   3. Screenshots every step at ?slide=N&export=1, which hides the nav bar.
 *   4. Prints a page of the screenshots to a PDF with `chrome --print-to-pdf`,
 *      one page per step at the viewport size.
 *
 * Chrome runs only through its command line. The script never opens a
 * DevTools connection (no puppeteer, no remote debugging), so it also works
 * where an administrator has disabled remote debugging.
 */

import { spawn, spawnSync } from "child_process";
import { existsSync, mkdtempSync, rmSync, statSync, writeFileSync } from "fs";
import { createServer } from "net";
import { tmpdir } from "os";
import path from "path";
import { pathToFileURL } from "url";
import {
  USAGE,
  deckHtml,
  mapLimit,
  parseArgs,
  parseDeckDom,
  shotName,
  stepUrl,
} from "./export-pdf-lib.mjs";

const WAIT_MS = parseInt(process.env.EXPORT_WAIT_MS || "10000", 10);
const CONCURRENCY = parseInt(process.env.EXPORT_CONCURRENCY || "3", 10);
const DIST_DIR = ".next-export";

// ── Chrome ───────────────────────────────────────────────────────────

function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const candidates = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
  ];
  for (const candidate of candidates) {
    if (existsSync(candidate)) return candidate;
  }
  for (const name of [
    "google-chrome",
    "google-chrome-stable",
    "chromium",
    "chromium-browser",
  ]) {
    const found = spawnSync("which", [name], { encoding: "utf8" });
    if (found.status === 0 && found.stdout.trim()) return found.stdout.trim();
  }
  throw new Error("Chrome not found. Set CHROME_PATH to a Chrome or Chromium binary.");
}

/** Run headless Chrome with `args`; resolve with stdout. */
function chrome(binary, args, { timeoutMs = WAIT_MS + 60_000 } = {}) {
  const flags = [
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-first-run",
    "--no-default-browser-check",
  ];
  // Chrome refuses to start its sandbox as root, e.g. in some CI containers.
  if (process.getuid?.() === 0) flags.push("--no-sandbox");
  return new Promise((resolve, reject) => {
    const proc = spawn(binary, [...flags, ...args], {
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    proc.stdout.on("data", (d) => (stdout += d));
    proc.stderr.on("data", (d) => (stderr += d));
    const timer = setTimeout(() => {
      proc.kill("SIGKILL");
      reject(new Error(`Chrome timed out after ${timeoutMs} ms: ${args.at(-1)}`));
    }, timeoutMs);
    proc.on("error", (e) => {
      clearTimeout(timer);
      reject(e);
    });
    proc.on("close", (code) => {
      clearTimeout(timer);
      if (code === 0) resolve(stdout);
      else reject(new Error(`Chrome exited ${code}: ${stderr.trim().split("\n").at(-1)}`));
    });
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
const exportEnv = {
  ...process.env,
  SLIDES_DIST_DIR: DIST_DIR,
  NEXT_PUBLIC_EXPORT_BUILD: "1",
};

function build() {
  console.log(`Building into ${DIST_DIR}...`);
  const result = spawnSync(nextBin, ["build"], { stdio: "inherit", env: exportEnv });
  if (result.status !== 0) throw new Error(`Build failed (exit ${result.status})`);
}

async function startServer(port) {
  const proc = spawn(nextBin, ["start", "-p", String(port)], {
    stdio: "ignore",
    env: exportEnv,
  });
  const origin = `http://localhost:${port}`;
  const deadline = Date.now() + 60_000;
  while (Date.now() < deadline) {
    if (proc.exitCode !== null) throw new Error(`Server exited ${proc.exitCode}`);
    try {
      const res = await fetch(`${origin}/slides`);
      if (res.status < 500) return { proc, origin };
    } catch {
      // not listening yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  proc.kill();
  throw new Error("Server did not respond within 60 s");
}

// ── main ─────────────────────────────────────────────────────────────

async function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (e) {
    console.error(`${e.message}\n\n${USAGE}`);
    process.exit(1);
  }
  if (args.help) {
    console.log(USAGE);
    return;
  }

  const binary = findChrome();
  const output = path.resolve(args.output);
  const work = mkdtempSync(path.join(tmpdir(), `export-${args.id}-`));
  let server = null;

  try {
    let origin = args.url;
    if (!origin) {
      build();
      server = await startServer(await getFreePort());
      origin = server.origin;
    }

    // Chrome's virtual time budget covers only the page's own process. With
    // site isolation on, a cross-site embed (a live app in an iframe) runs in
    // another process and is still blank when the budget ends, so keep
    // embeds in the page's process while capturing.
    const render = [
      `--window-size=${args.size.width},${args.size.height}`,
      `--force-device-scale-factor=${args.scale}`,
      `--virtual-time-budget=${WAIT_MS}`,
      "--disable-site-isolation-trials",
      "--disable-features=IsolateOrigins,site-per-process",
    ];

    // 1. Count the steps.
    const firstUrl = stepUrl(origin, args.id, 0);
    console.log(`Reading ${firstUrl}`);
    const { total, gated, title } = parseDeckDom(
      await chrome(binary, [...render, "--dump-dom", firstUrl]),
    );
    if (gated) {
      throw new Error(
        "This deck is private. Export it from a local build by leaving out --url.",
      );
    }
    if (!total) {
      throw new Error(
        "No data-total-steps on the page. Is the slideshow id right, and does the site include export mode?",
      );
    }
    console.log(`${total} steps`);

    // 2. Screenshot each step.
    const names = Array.from({ length: total }, (_, i) => shotName(i, total));
    let done = 0;
    await mapLimit(names, CONCURRENCY, async (name, step) => {
      const file = path.join(work, name);
      for (let attempt = 1; ; attempt++) {
        try {
          await chrome(binary, [
            ...render,
            `--screenshot=${file}`,
            stepUrl(origin, args.id, step),
          ]);
          if (statSync(file).size === 0) throw new Error("empty screenshot");
          break;
        } catch (e) {
          if (attempt === 3) throw new Error(`Step ${step + 1}: ${e.message}`);
          console.log(`  step ${step + 1} attempt ${attempt} failed (${e.message}); retrying`);
        }
      }
      done++;
      console.log(`Captured ${done}/${total}`);
    });

    // 3. Print the screenshots to a PDF.
    const page = path.join(work, "deck.html");
    writeFileSync(page, deckHtml(names, { ...args.size, title }));
    await chrome(binary, [
      "--no-pdf-header-footer",
      `--print-to-pdf=${output}`,
      pathToFileURL(page).href,
    ]);
    console.log(`PDF saved to ${output}`);
  } finally {
    if (server) server.proc.kill();
    rmSync(work, { recursive: true, force: true });
  }
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
