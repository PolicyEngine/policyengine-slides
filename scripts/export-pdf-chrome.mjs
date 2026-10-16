/**
 * Headless Chrome, driven only through its command line. Every process it
 * starts is tracked, so a caller can stop them all on failure or on a signal.
 */

import { spawn, spawnSync } from "child_process";
import { existsSync } from "fs";

const BASE_FLAGS = [
  "--headless",
  "--disable-gpu",
  "--hide-scrollbars",
  "--no-first-run",
  "--no-default-browser-check",
];

const running = new Set();

/**
 * Remove what must not reach a log: URL fragments (where a deck password
 * rides) and any `password=` value.
 */
export function redact(text) {
  return String(text)
    .replace(/(\b[a-z][a-z0-9+.-]*:\/\/[^\s#]*)#\S*/gi, "$1")
    .replace(/(password=)[^\s&]*/gi, "$1…");
}

/** Path of a Chrome or Chromium binary, or null when none is installed. */
export function findChrome() {
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
  return null;
}

/**
 * Run headless Chrome with `args` and resolve with its stdout. `timeoutMs` is
 * a watchdog on the whole process: Chrome is killed and the call rejects when
 * it runs out.
 */
export function runChrome(binary, args, { timeoutMs, extraFlags = [] }) {
  const flags = [...BASE_FLAGS, ...extraFlags];
  // Chrome refuses to start its sandbox as root, e.g. in some CI containers.
  if (process.getuid?.() === 0) flags.push("--no-sandbox");
  return new Promise((resolve, reject) => {
    const proc = spawn(binary, [...flags, ...args], {
      stdio: ["ignore", "pipe", "pipe"],
    });
    running.add(proc);
    let stdout = "";
    let stderr = "";
    let timedOut = false;
    proc.stdout.on("data", (d) => (stdout += d));
    proc.stderr.on("data", (d) => (stderr += d));
    const timer = setTimeout(() => {
      timedOut = true;
      proc.kill("SIGKILL");
    }, timeoutMs);
    const settle = (fn, value) => {
      clearTimeout(timer);
      running.delete(proc);
      fn(value);
    };
    proc.on("error", (e) => settle(reject, e));
    proc.on("close", (code, signal) => {
      const target = redact(args.at(-1));
      if (timedOut) {
        settle(reject, new Error(`Chrome timed out after ${timeoutMs} ms: ${target}`));
      } else if (code === 0) {
        settle(resolve, stdout);
      } else {
        const reason = signal ? `was stopped by ${signal}` : `exited ${code}`;
        const detail = redact(stderr.trim().split("\n").at(-1));
        settle(reject, new Error(`Chrome ${reason} on ${target}: ${detail}`));
      }
    });
  });
}

/** Stop every Chrome this module started that is still running. */
export function killAllChrome() {
  for (const proc of running) proc.kill("SIGKILL");
}

/** How many Chrome processes this module started are still running. */
export function runningChromeCount() {
  return running.size;
}
