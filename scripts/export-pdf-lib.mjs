/**
 * Pure helpers for scripts/export-pdf.mjs, kept separate so Vitest can cover
 * them without launching Chrome or a server.
 */

export const USAGE = `Usage: bun run export <slideshow-id> [output.pdf] [options]

  --url <origin>    Capture a deployed site, e.g. https://www.policyengine.org.
                    Without it, the script builds the site locally and captures
                    that build, so unmerged changes export too.
  --size <WxH>      Viewport in CSS pixels, and the PDF page size (default
                    1920x1080). A deck laid out for a laptop fills the page
                    better at 1440x810.
  --scale <n>       Device pixel ratio of the screenshots, 1 to 4 (default 1).
                    Use 2 with a smaller --size to keep text sharp.
  --site-isolation  Keep Chrome's site isolation on. Cross-site embeds may then
                    come out blank. Use it for a site you do not control.

Environment:
  CHROME_PATH                   Chrome or Chromium binary (found automatically)
  EXPORT_WAIT_MS                virtual time each slide gets to render, in
                                milliseconds (default 10000)
  EXPORT_CONCURRENCY            slides captured at once (default 3)
  NEXT_PUBLIC_PRIVATE_PASSWORD  password for private decks`;

const VALUE_OPTIONS = {
  "--url": "an origin, e.g. https://www.policyengine.org",
  "--size": "a viewport such as 1440x810",
  "--scale": "a number from 1 to 4",
};

const FLAG_OPTIONS = ["--site-isolation"];

function parseSize(value) {
  const match = /^(\d+)x(\d+)$/.exec(value);
  const width = match ? parseInt(match[1], 10) : 0;
  const height = match ? parseInt(match[2], 10) : 0;
  if (width < 320 || height < 180 || width > 7680 || height > 4320) {
    throw new Error(`--size needs ${VALUE_OPTIONS["--size"]}, got ${value}`);
  }
  return { width, height };
}

function parseScale(value) {
  const scale = Number(value);
  if (!Number.isFinite(scale) || scale < 1 || scale > 4) {
    throw new Error(`--scale needs ${VALUE_OPTIONS["--scale"]}, got ${value}`);
  }
  return scale;
}

/** Parse `<id> [output]` plus the options in USAGE, in any order. */
export function parseArgs(argv) {
  const positional = [];
  const options = {};
  const flags = new Set();
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "-h" || arg === "--help") return { help: true };
    if (!arg.startsWith("--")) {
      positional.push(arg);
      continue;
    }
    if (FLAG_OPTIONS.includes(arg)) {
      flags.add(arg);
      continue;
    }
    const eq = arg.indexOf("=");
    const name = eq === -1 ? arg : arg.slice(0, eq);
    if (!(name in VALUE_OPTIONS)) throw new Error(`Unknown option ${name}`);
    const value = eq === -1 ? argv[++i] : arg.slice(eq + 1);
    if (!value || value.startsWith("--")) {
      throw new Error(`${name} needs ${VALUE_OPTIONS[name]}`);
    }
    options[name] = value;
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
    url: options["--url"] ? options["--url"].replace(/\/+$/, "") : null,
    size: parseSize(options["--size"] || "1920x1080"),
    scale: parseScale(options["--scale"] || "1"),
    siteIsolation: flags.has("--site-isolation"),
  };
}

/**
 * Read a whole number setting from the environment. An unset or empty value
 * takes `fallback`; anything that is not an integer in [min, max] throws.
 */
export function parseIntSetting(name, value, fallback, { min, max }) {
  if (value === undefined || value === "") return fallback;
  const parsed = /^\d+$/.test(value) ? parseInt(value, 10) : NaN;
  if (!Number.isInteger(parsed) || parsed < min || parsed > max) {
    throw new Error(`${name} must be a whole number from ${min} to ${max}, got ${value}`);
  }
  return parsed;
}

/**
 * URL of one step in export mode, which hides the navigation bar. A password
 * (even an empty one) rides in the fragment, which unlocks a private deck and
 * never reaches the server.
 */
export function stepUrl(origin, id, step, password = null) {
  const url = new URL(`/slides/${encodeURIComponent(id)}`, origin);
  url.searchParams.set("slide", String(step));
  url.searchParams.set("export", "1");
  if (password !== null) url.hash = `password=${encodeURIComponent(password)}`;
  return url.toString();
}

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', "#39": "'", "#x27": "'" };

function decodeEntities(text) {
  return text.replace(/&(amp|lt|gt|quot|#39|#x27);/g, (_, name) => ENTITIES[name]);
}

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Read the deck's step count and page title from the DOM that
 * `chrome --dump-dom` prints. `gated` is true when the page still shows the
 * private-deck password form.
 */
export function parseDeckDom(dom) {
  const match = dom.match(/data-total-steps="(\d+)"/);
  const total = match ? parseInt(match[1], 10) : null;
  const gated = /<input[^>]*type="password"/.test(dom);
  const title = dom.match(/<title[^>]*>([^<]*)<\/title>/);
  return {
    total: total && total > 0 ? total : null,
    gated,
    title: title ? decodeEntities(title[1]).trim() || null : null,
  };
}

/** Zero-padded file name for a step's screenshot, so names sort in order. */
export function shotName(step, total) {
  const width = String(Math.max(total - 1, 0)).length;
  return `step-${String(step).padStart(width, "0")}.jpg`;
}

/**
 * HTML that Chrome prints to a PDF with one page per screenshot. Each page is
 * `width` × `height` CSS pixels, the viewport the screenshots were taken at;
 * at 96 px per inch, 1920 × 1080 comes out as 1440 × 810 points. `title`
 * becomes the PDF's document title.
 */
export function deckHtml(fileNames, { width, height, title }) {
  const images = fileNames
    .map((name) => `<img src="${encodeURI(name)}" alt="">`)
    .join("\n");
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>${escapeHtml(title || "Slides")}</title><style>
  @page { size: ${width}px ${height}px; margin: 0; }
  html, body { margin: 0; padding: 0; }
  img { width: ${width}px; height: ${height}px; display: block; break-after: page; }
  img:last-child { break-after: auto; }
</style></head><body>
${images}
</body></html>
`;
}

/**
 * Count the pages of a PDF from its bytes. It counts page objects, which
 * Chrome writes uncompressed (`/Type /Page`, as opposed to the `/Type /Pages`
 * tree nodes).
 */
export function countPdfPages(bytes) {
  const text = Buffer.from(bytes).toString("latin1");
  return (text.match(/\/Type\s*\/Page(?![a-zA-Z])/g) || []).length;
}

/**
 * Map `items` through async `fn` with at most `limit` running at once, keeping
 * input order. After the first failure it starts no more items, calls
 * `onFailure` once (so the caller can cancel what is still running), waits for
 * the running items to settle, then rejects with that first error.
 */
export async function mapLimit(items, limit, fn, { onFailure } = {}) {
  if (!Number.isInteger(limit) || limit < 1) {
    throw new Error(`mapLimit needs a whole number limit of at least 1, got ${limit}`);
  }
  const results = new Array(items.length);
  let next = 0;
  let failed = false;
  let firstError;
  async function worker() {
    while (!failed && next < items.length) {
      const i = next++;
      try {
        results[i] = await fn(items[i], i);
      } catch (error) {
        if (!failed) {
          failed = true;
          firstError = error;
          onFailure?.(error);
        }
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  if (failed) throw firstError;
  return results;
}
