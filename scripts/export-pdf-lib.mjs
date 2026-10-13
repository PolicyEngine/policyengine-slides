/**
 * Pure helpers for scripts/export-pdf.mjs, kept separate so Vitest can cover
 * them without launching Chrome or a server.
 */

export const USAGE = `Usage: bun run export <slideshow-id> [output.pdf] [--url <origin>]

  Without --url, builds the site locally and captures that build, so private
  decks and unmerged changes export too.
  With --url, captures a deployed site, e.g. --url https://www.policyengine.org

Environment:
  CHROME_PATH        Chrome or Chromium binary (found automatically if unset)
  EXPORT_WAIT_MS     virtual time each slide gets to render (default 10000)
  EXPORT_CONCURRENCY slides captured at once (default 3)`;

/** Parse `<id> [output] [--url <origin>]` in any order. */
export function parseArgs(argv) {
  const positional = [];
  let url = null;
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--url") {
      url = argv[i + 1];
      if (!url || url.startsWith("--")) {
        throw new Error("--url needs an origin, e.g. https://www.policyengine.org");
      }
      i++;
    } else if (arg.startsWith("--url=")) {
      url = arg.slice("--url=".length);
    } else if (arg === "-h" || arg === "--help") {
      return { help: true };
    } else if (arg.startsWith("--")) {
      throw new Error(`Unknown option ${arg}`);
    } else {
      positional.push(arg);
    }
  }
  const [id, output] = positional;
  if (!id) throw new Error("Missing slideshow id");
  if (positional.length > 2) {
    throw new Error(`Unexpected argument ${positional[2]}`);
  }
  return {
    help: false,
    id,
    output: output || `${id}.pdf`,
    url: url ? url.replace(/\/+$/, "") : null,
  };
}

/** URL of one step in export mode, which hides the navigation bar. */
export function stepUrl(origin, id, step) {
  const url = new URL(`/slides/${encodeURIComponent(id)}`, origin);
  url.searchParams.set("slide", String(step));
  url.searchParams.set("export", "1");
  return url.toString();
}

/**
 * Read the deck's step count from the DOM that `chrome --dump-dom` prints.
 * `gated` is true when the page shows the private-deck password form instead.
 */
export function parseDeckDom(dom) {
  const match = dom.match(/data-total-steps="(\d+)"/);
  const total = match ? parseInt(match[1], 10) : null;
  const gated = /<input[^>]*type="password"/.test(dom);
  return { total: total && total > 0 ? total : null, gated };
}

/** Zero-padded file name for a step's screenshot, so names sort in order. */
export function shotName(step, total) {
  const width = String(Math.max(total - 1, 0)).length;
  return `step-${String(step).padStart(width, "0")}.jpg`;
}

/**
 * HTML that Chrome prints to a PDF with one 1920 × 1080 page per screenshot.
 * At 96 px per inch, each page is 1440 × 810 points: 16:9, like the slides.
 */
export function deckHtml(fileNames) {
  const images = fileNames
    .map((name) => `<img src="${encodeURI(name)}" alt="">`)
    .join("\n");
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
  @page { size: 1920px 1080px; margin: 0; }
  html, body { margin: 0; padding: 0; }
  img { width: 1920px; height: 1080px; display: block; break-after: page; }
  img:last-child { break-after: auto; }
</style></head><body>
${images}
</body></html>
`;
}

/** Map `items` through async `fn` with at most `limit` running at once. */
export async function mapLimit(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i], i);
    }
  }
  const workers = Array.from(
    { length: Math.max(1, Math.min(limit, items.length)) },
    worker,
  );
  await Promise.all(workers);
  return results;
}
