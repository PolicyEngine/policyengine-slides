/**
 * Export a slideshow to PDF.
 *
 * Usage:  bun run export <slideshow-id> [output-path]
 * Example: bun run export abundance-dmv ~/Desktop/abundance-dmv.pdf
 *
 * Requires puppeteer:  bun add -d puppeteer
 *
 * What it does:
 *   1. Builds the project (bun run build)
 *   2. Starts a prod server on a free port
 *   3. Opens the slideshow in headless Chrome
 *   4. Reads the "X / Y" counter to detect total steps
 *   5. Arrow-keys through each step, fixing basePath image bug + hiding nav
 *   6. Screenshots each step → combines into a single PDF
 *   7. Tears everything down
 */

import puppeteer from "puppeteer";
import { spawn } from "child_process";
import { createServer } from "net";

const [id, outputArg] = process.argv.slice(2);
if (!id) {
  console.error("Usage: bun run export <slideshow-id> [output-path]");
  console.error('Example: bun run export abundance-dmv ~/Desktop/slides.pdf');
  process.exit(1);
}
const OUTPUT = outputArg || `${id}.pdf`;

// ── helpers ──────────────────────────────────────────────────────────

/** Find a free port. */
function getFreePort() {
  return new Promise((resolve, reject) => {
    const srv = createServer();
    srv.listen(0, () => {
      const port = srv.address().port;
      srv.close(() => resolve(port));
    });
    srv.on("error", reject);
  });
}

/** Start `next start -p <port>` and wait until it responds. */
async function startServer(port) {
  const proc = spawn("npx", ["next", "start", "-p", String(port)], {
    cwd: process.cwd(),
    stdio: "pipe",
  });
  // Wait for server to be ready
  const ready = new Promise((resolve, reject) => {
    const timeout = setTimeout(
      () => reject(new Error("Server failed to start within 30s")),
      30_000,
    );
    proc.stdout.on("data", (d) => {
      const line = d.toString();
      if (line.includes("Ready") || line.includes("started")) {
        clearTimeout(timeout);
        resolve();
      }
    });
    proc.stderr.on("data", (d) => {
      const line = d.toString();
      if (line.includes("Ready") || line.includes("started")) {
        clearTimeout(timeout);
        resolve();
      }
    });
    proc.on("error", (e) => {
      clearTimeout(timeout);
      reject(e);
    });
  });
  await ready;
  return proc;
}

/** Fix images whose src is missing the /slides/ basePath prefix. */
async function fixImages(page) {
  await page.evaluate(() => {
    document.querySelectorAll("img").forEach((img) => {
      const src = img.getAttribute("src") || "";
      if (src.startsWith("/") && !src.startsWith("/slides/")) {
        img.src = "/slides" + src;
      }
    });
  });
  // Wait for them to load
  await page.evaluate(() =>
    Promise.all(
      Array.from(document.querySelectorAll("img")).map((img) => {
        if (img.complete && img.naturalWidth > 0) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
          setTimeout(resolve, 3000);
        });
      }),
    ),
  );
  await new Promise((r) => setTimeout(r, 300));
}

/** Hide the bottom navigation bar. */
async function hideNav(page) {
  await page.evaluate(() => {
    const nav = document.querySelector(".fixed.bottom-0");
    if (nav) nav.style.display = "none";
  });
}

/** Read total steps from the "X / Y" counter in the nav bar. */
async function getTotalSteps(page) {
  return page.evaluate(() => {
    const spans = Array.from(document.querySelectorAll("span"));
    for (const span of spans) {
      const match = span.textContent?.match(/(\d+)\s*\/\s*(\d+)/);
      if (match) return parseInt(match[2], 10);
    }
    return null;
  });
}

// ── main ─────────────────────────────────────────────────────────────

async function main() {
  // 1. Build
  console.log("Building project...");
  const build = spawn("npx", ["next", "build"], {
    cwd: process.cwd(),
    stdio: "inherit",
  });
  await new Promise((resolve, reject) => {
    build.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(`Build failed (exit ${code})`)),
    );
  });

  // 2. Start prod server
  const port = await getFreePort();
  console.log(`Starting prod server on port ${port}...`);
  const server = await startServer(port);

  let browser;
  try {
    // 3. Open slideshow
    const url = `http://localhost:${port}/slides/${id}`;
    console.log(`Opening ${url}`);
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30_000 });
    await new Promise((r) => setTimeout(r, 3000));

    // 4. Detect total steps
    let totalSteps = await getTotalSteps(page);
    if (!totalSteps) {
      console.error(
        "Could not detect slide count from DOM. Is the slideshow ID correct?",
      );
      process.exit(1);
    }
    console.log(`Detected ${totalSteps} steps`);

    // 5. Capture each step
    const screenshots = [];
    for (let i = 1; i <= totalSteps; i++) {
      console.log(`Capturing step ${i}/${totalSteps}...`);
      if (i > 1) {
        await page.keyboard.press("ArrowRight");
        await new Promise((r) => setTimeout(r, 800));
      }
      await fixImages(page);
      await hideNav(page);
      await new Promise((r) => setTimeout(r, 200));
      const shot = await page.screenshot({ type: "png", encoding: "base64" });
      screenshots.push(shot);
    }

    // 6. Combine into PDF
    console.log("Building PDF...");
    const html = `<!DOCTYPE html>
<html><head><style>
  @page { size: 1920px 1080px; margin: 0; }
  body { margin: 0; padding: 0; }
  img { width: 1920px; height: 1080px; display: block; page-break-after: always; }
  img:last-child { page-break-after: auto; }
</style></head><body>
${screenshots.map((s) => `<img src="data:image/png;base64,${s}" />`).join("\n")}
</body></html>`;

    await page.setContent(html, { waitUntil: "load" });
    await page.pdf({
      path: OUTPUT,
      width: "1920px",
      height: "1080px",
      printBackground: true,
    });

    console.log(`PDF saved to ${OUTPUT}`);
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
