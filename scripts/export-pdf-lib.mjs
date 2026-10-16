/**
 * Pure helpers for scripts/export-pdf.mjs, kept separate so Vitest can cover
 * them without launching Chrome or a server.
 */

export const USAGE = `Usage: bun run export <slideshow-id> [output.pdf] [options]

  --url <origin>  Capture a deployed site, e.g. https://www.policyengine.org.
                  Without it, the script builds the site locally and captures
                  that build, so unmerged changes export too.
  --size <WxH>    Viewport in CSS pixels, and the PDF page size (default
                  1920x1080). A deck laid out for a laptop fills the page
                  better at 1440x810.
  --scale <n>     Device pixel ratio of the screenshots, 1 to 4 (default 1).
                  Use 2 with a smaller --size to keep text sharp.

Environment:
  CHROME_PATH                   Chrome or Chromium binary (found automatically)
  EXPORT_WAIT_MS                time each slide stays still after it mounts,
                                before the capture, in milliseconds (default
                                8000, at most 60000)
  EXPORT_CONCURRENCY            slides captured at once (default 3)
  NEXT_PUBLIC_PRIVATE_PASSWORD  password for private decks`;

const VALUE_OPTIONS = {
  "--url": "an origin, e.g. https://www.policyengine.org",
  "--size": "a viewport such as 1440x810",
  "--scale": "a number from 1 to 4",
};

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
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "-h" || arg === "--help") return { help: true };
    if (!arg.startsWith("--")) {
      positional.push(arg);
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
 * URL of one step in export mode, which hides the navigation bar. `settle`
 * (0 included) holds the page's load event until the slide has mounted and
 * then stayed still that many milliseconds. A password (even an empty one)
 * rides in the fragment, which unlocks a private deck and never reaches the
 * server.
 */
export function stepUrl(origin, id, step, { settle = null, password = null } = {}) {
  const url = new URL(`/slides/${encodeURIComponent(id)}`, origin);
  url.searchParams.set("slide", String(step));
  url.searchParams.set("export", "1");
  if (settle !== null) url.searchParams.set("settle", String(settle));
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
 * Read what a capture needs from the DOM that `chrome --dump-dom` prints at
 * the moment of capture:
 * - `total`: the deck's step count, from the viewer's `data-total-steps`;
 * - `step`: the step the viewer shows, from `data-current-step`;
 * - `settled`: whether the export hold ended by release, which <html> marks
 *   with `data-export-settled` (a hold cut off by a timeout leaves no mark);
 * - `gated`: whether the page shows the private-deck password form;
 * - `title`: the page title.
 */
export function parseDeckDom(dom) {
  const number = (name) => {
    const match = dom.match(new RegExp(`${name}="(\\d+)"`));
    return match ? parseInt(match[1], 10) : null;
  };
  const total = number("data-total-steps");
  const html = dom.match(/<html\b[^>]*>/);
  const title = dom.match(/<title[^>]*>([^<]*)<\/title>/);
  return {
    total: total && total > 0 ? total : null,
    step: number("data-current-step"),
    settled: html ? /\sdata-export-settled(?:=|\s|>|$)/.test(html[0]) : false,
    gated: /<input[^>]*type="password"/.test(dom),
    title: title ? decodeEntities(title[1]).trim() || null : null,
  };
}

/**
 * Throw unless a capture's DOM shows step `step`, settled. A slide that never
 * mounted, or one that Chrome's --timeout cut off, fails here instead of
 * becoming a page of the PDF.
 */
export function checkCapture(dom, step) {
  const { step: shown, settled, gated } = parseDeckDom(dom);
  if (gated) throw new Error("the page showed the password form");
  if (shown !== step) {
    throw new Error(
      shown === null ? "the slide had not mounted" : `the page showed step ${shown + 1}`,
    );
  }
  if (!settled) throw new Error("the slide had not settled when Chrome captured it");
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

/** PDF whitespace: NUL, tab, line feed, form feed, carriage return, space. */
const PDF_SPACE = new Set(["\0", "\t", "\n", "\f", "\r", " "]);

/**
 * Index just past the `<<` that opens the dictionary whose `>>` ends at
 * `close` (exclusive), or -1. `text` holds no strings, so every `<<` and `>>`
 * in it is a dictionary bracket; nested dictionaries are skipped.
 */
function dictionaryStart(text, close) {
  let depth = 0;
  for (let i = close - 3; i >= 1; i--) {
    if (text[i] === ">" && text[i - 1] === ">") {
      depth++;
      i--;
    } else if (text[i] === "<" && text[i - 1] === "<") {
      if (depth === 0) return i + 1;
      depth--;
      i--;
    }
  }
  return -1;
}

/** A dictionary's text with its nested dictionaries removed. */
function topLevel(dict) {
  let flat = dict;
  for (let prev = null; prev !== flat; ) {
    prev = flat;
    flat = flat.replace(/<<[^<>]*>>/g, " ");
  }
  return flat;
}

/**
 * The stream data length a dictionary declares: a direct integer, or an
 * indirect reference resolved against `text`. Null when neither works.
 */
function streamLength(dict, text) {
  const match = /\/Length\s+(\d+)(?:\s+(\d+)\s+R)?(?![\d.])/.exec(topLevel(dict));
  if (!match) return null;
  if (match[2] === undefined) return parseInt(match[1], 10);
  const object = new RegExp(`(?:^|[^0-9])${match[1]}\\s+${match[2]}\\s+obj\\s*(\\d+)\\s*endobj`);
  const resolved = object.exec(text);
  return resolved ? parseInt(resolved[1], 10) : null;
}

/**
 * The parts of a PDF that are not strings (literal or hex), stream data or
 * comments, so a search for keywords cannot match text inside them.
 *
 * A stream is the keyword `stream` right after a dictionary's `>>`, followed
 * by an end of line. Its data is skipped by the dictionary's top-level
 * /Length, resolving an indirect reference when the object is in the file.
 * Data that does not end with `endstream` at that length throws. Only when the
 * length cannot be read does the scan fall back to the next `endstream`, and
 * a stream with none throws.
 */
export function pdfSyntax(bytes) {
  const text = Buffer.from(bytes).toString("latin1");
  let out = "";
  let i = 0;
  while (i < text.length) {
    const c = text[i];
    if (c === "(") {
      // A literal string: balanced parentheses, with backslash escapes.
      let depth = 1;
      i++;
      while (i < text.length && depth > 0) {
        if (text[i] === "\\") i += 2;
        else {
          if (text[i] === "(") depth++;
          else if (text[i] === ")") depth--;
          i++;
        }
      }
      out += "()";
    } else if (c === "<" && text[i + 1] !== "<") {
      // A hex string, which holds only hex digits and whitespace.
      const close = text.indexOf(">", i + 1);
      i = close === -1 ? text.length : close + 1;
      out += "()";
    } else if (c === "<") {
      out += "<<";
      i += 2;
    } else if (c === ">" && text[i + 1] === ">") {
      out += ">>";
      i += 2;
    } else if (c === "%") {
      while (i < text.length && text[i] !== "\n" && text[i] !== "\r") i++;
    } else if (text.startsWith("stream", i) && /[\r\n]/.test(text[i + 6] || "")) {
      let close = out.length;
      while (close > 0 && PDF_SPACE.has(out[close - 1])) close--;
      if (out.slice(close - 2, close) !== ">>") {
        out += c;
        i++;
        continue;
      }
      // Data starts after the end of line that follows the keyword.
      let data = i + "stream".length;
      if (text[data] === "\r") data++;
      if (text[data] === "\n") data++;
      const from = dictionaryStart(out, close);
      const length = from === -1 ? null : streamLength(out.slice(from, close - 2), text);
      let end;
      if (length !== null) {
        end = data + length;
        while (end < text.length && PDF_SPACE.has(text[end])) end++;
        if (!text.startsWith("endstream", end)) {
          throw new Error(`Malformed PDF: a stream at byte ${i} does not end at its /Length`);
        }
      } else {
        end = text.indexOf("endstream", data);
        if (end === -1) throw new Error(`Malformed PDF: a stream at byte ${i} has no endstream`);
      }
      out += "stream endstream";
      i = end + "endstream".length;
    } else {
      out += c;
      i++;
    }
  }
  return out;
}

/**
 * Count the pages of a PDF from its bytes: the `/Type /Page` objects (not the
 * `/Type /Pages` tree nodes) outside strings, streams and comments. Chrome
 * writes page objects uncompressed; a PDF that packs them into object streams
 * counts 0, and a malformed stream throws, so either way the export reports a
 * failure rather than a success.
 */
export function countPdfPages(bytes) {
  return (pdfSyntax(bytes).match(/\/Type\s*\/Page(?![A-Za-z])/g) || []).length;
}

/**
 * Map `items` through async `fn` with at most `limit` running at once, keeping
 * input order. After the first failure it starts no more items, waits for the
 * running items to settle, then rejects with that first error.
 */
export async function mapLimit(items, limit, fn) {
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
        }
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  if (failed) throw firstError;
  return results;
}
