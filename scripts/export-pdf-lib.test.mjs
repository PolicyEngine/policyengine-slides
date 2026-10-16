// @vitest-environment node
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "fs";
import { createServer } from "net";
import { tmpdir } from "os";
import path from "path";
import { pathToFileURL } from "url";
import { describe, it, expect } from "vitest";
import { EXPORT_HOLD_SCRIPT } from "../lib/export-hold";
import { findChrome, redact, runChrome, runningChromeCount } from "./export-pdf-chrome.mjs";
import {
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

describe("parseArgs", () => {
  it("defaults to <id>.pdf, a local build and a 1920x1080 page", () => {
    expect(parseArgs(["bls-taxsim-2026"])).toEqual({
      help: false,
      id: "bls-taxsim-2026",
      output: "bls-taxsim-2026.pdf",
      url: null,
      size: { width: 1920, height: 1080 },
      scale: 1,
    });
  });

  it("takes an output path and options in any order", () => {
    const expected = {
      help: false,
      id: "deck",
      output: "out/deck.pdf",
      url: "https://www.policyengine.org",
      size: { width: 1440, height: 810 },
      scale: 2,
    };
    expect(
      parseArgs([
        "deck",
        "out/deck.pdf",
        "--url",
        "https://www.policyengine.org/",
        "--size",
        "1440x810",
        "--scale",
        "2",
      ]),
    ).toEqual(expected);
    expect(
      parseArgs([
        "--scale=2",
        "--url=https://www.policyengine.org",
        "deck",
        "--size=1440x810",
        "out/deck.pdf",
      ]),
    ).toEqual(expected);
  });

  it("rejects a missing id, a bare option and unknown options", () => {
    expect(() => parseArgs([])).toThrow(/Missing slideshow id/);
    expect(() => parseArgs(["deck", "--url"])).toThrow(/--url needs an origin/);
    expect(() => parseArgs(["deck", "--size", "--scale", "2"])).toThrow(
      /--size needs a viewport/,
    );
    expect(() => parseArgs(["deck", "--wait", "5"])).toThrow(/Unknown option/);
    expect(() => parseArgs(["deck", "a.pdf", "b.pdf"])).toThrow(/Unexpected/);
  });

  it("rejects sizes and scales Chrome cannot render", () => {
    for (const size of ["1440", "1440x", "0x0", "100x100", "9000x9000", "axb"]) {
      expect(() => parseArgs(["deck", "--size", size])).toThrow(/--size needs/);
    }
    for (const scale of ["0", "0.5", "5", "two"]) {
      expect(() => parseArgs(["deck", "--scale", scale])).toThrow(/--scale needs/);
    }
    expect(parseArgs(["deck", "--scale", "1.5"]).scale).toBe(1.5);
  });

  it("returns help for -h", () => {
    expect(parseArgs(["-h"])).toEqual({ help: true });
  });
});

describe("parseIntSetting", () => {
  const range = { min: 1, max: 16 };

  it("takes the fallback when unset or empty", () => {
    expect(parseIntSetting("N", undefined, 3, range)).toBe(3);
    expect(parseIntSetting("N", "", 3, range)).toBe(3);
  });

  it("reads a whole number in range", () => {
    expect(parseIntSetting("N", "1", 3, range)).toBe(1);
    expect(parseIntSetting("N", "16", 3, range)).toBe(16);
  });

  it("rejects everything else, so a typo cannot skip the work", () => {
    for (const value of ["abc", "0", "17", "-2", "2.5", "3x", " 3", "1e1", "NaN"]) {
      expect(() => parseIntSetting("N", value, 3, range)).toThrow(
        /N must be a whole number from 1 to 16/,
      );
    }
  });
});

describe("stepUrl", () => {
  it("puts the step and export mode in the query", () => {
    expect(stepUrl("http://localhost:4000", "bls-taxsim-2026", 0)).toBe(
      "http://localhost:4000/slides/bls-taxsim-2026?slide=0&export=1",
    );
    expect(stepUrl("https://www.policyengine.org", "deck", 35)).toBe(
      "https://www.policyengine.org/slides/deck?slide=35&export=1",
    );
  });

  it("adds the settle time when given, 0 included", () => {
    expect(stepUrl("http://localhost:4000", "deck", 2, { settle: 8000 })).toBe(
      "http://localhost:4000/slides/deck?slide=2&export=1&settle=8000",
    );
    expect(stepUrl("http://localhost:4000", "deck", 2, { settle: 0 })).toBe(
      "http://localhost:4000/slides/deck?slide=2&export=1&settle=0",
    );
  });

  it("carries a password only in the fragment, and round-trips it", () => {
    for (const password of ["", "plain", "a&b=c", "sp ace+plus", "ünï/çode#?%"]) {
      const url = new URL(
        stepUrl("http://localhost:4000", "deck", 3, { settle: 500, password }),
      );
      expect(url.search).toBe("?slide=3&export=1&settle=500");
      expect(new URLSearchParams(url.hash.slice(1)).get("password")).toBe(password);
    }
    expect(new URL(stepUrl("http://localhost:4000", "deck", 3)).hash).toBe("");
  });
});

describe("parseDeckDom", () => {
  it("reads the step count, shown step and title from the viewer", () => {
    const dom =
      "<html lang=\"en\" data-export-settled=\"\"><head><title>Taxes &amp; benefits | PolicyEngine</title></head>" +
      '<main class="relative cursor-pointer" data-total-steps="36" data-current-step="4">';
    expect(parseDeckDom(dom)).toEqual({
      total: 36,
      step: 4,
      settled: true,
      gated: false,
      title: "Taxes & benefits | PolicyEngine",
    });
  });

  it("flags the password gate, a missing count and an unsettled page", () => {
    const dom =
      '<html lang="en"><body><form><input type="password" placeholder="Password"></form>';
    expect(parseDeckDom(dom)).toEqual({
      total: null,
      step: null,
      settled: false,
      gated: true,
      title: null,
    });
  });

  it("treats a zero count as missing", () => {
    expect(parseDeckDom('<main data-total-steps="0">').total).toBeNull();
  });

  it("reads the settled mark only from <html>", () => {
    const elsewhere = '<html lang="en"><body><p data-export-settled="">text</p>';
    expect(parseDeckDom(elsewhere).settled).toBe(false);
    expect(parseDeckDom("<html data-export-settled><body>").settled).toBe(true);
  });
});

describe("checkCapture", () => {
  const page = ({ settled = true, step = 3, gate = false } = {}) =>
    `<html lang="en"${settled ? ' data-export-settled=""' : ""}><body>` +
    (gate
      ? '<input type="password">'
      : `<main data-total-steps="9"${step === null ? "" : ` data-current-step="${step}"`}>`);

  it("accepts the requested step, settled", () => {
    expect(() => checkCapture(page(), 3)).not.toThrow();
  });

  it("rejects a page that is not the requested step, settled", () => {
    expect(() => checkCapture(page({ step: 2 }), 3)).toThrow(/showed step 3/);
    expect(() => checkCapture(page({ step: null }), 3)).toThrow(/had not mounted/);
    expect(() => checkCapture(page({ settled: false }), 3)).toThrow(/had not settled/);
    expect(() => checkCapture(page({ gate: true }), 3)).toThrow(/password form/);
    expect(() => checkCapture("", 3)).toThrow(/had not mounted/);
  });
});

describe("shotName", () => {
  it("pads to the widest step so names sort in slide order", () => {
    const names = Array.from({ length: 120 }, (_, i) => shotName(i, 120));
    expect([...names].sort()).toEqual(names);
    expect(names[0]).toBe("step-000.jpg");
    expect(shotName(4, 9)).toBe("step-4.jpg");
    expect(shotName(0, 1)).toBe("step-0.jpg");
  });
});

describe("deckHtml", () => {
  const html = deckHtml(["step-0.jpg", "step-1.jpg", "step-2.jpg"], {
    width: 1440,
    height: 810,
  });

  it("lists the screenshots in order at the viewport size", () => {
    expect(html).toContain("@page { size: 1440px 810px; margin: 0; }");
    expect(html).toContain("img { width: 1440px; height: 810px;");
    expect(html).toContain("<title>Slides</title>");
    const srcs = [...html.matchAll(/<img src="([^"]+)"/g)].map((m) => m[1]);
    expect(srcs).toEqual(["step-0.jpg", "step-1.jpg", "step-2.jpg"]);
  });

  it("breaks the page after every screenshot but the last", () => {
    expect(html).toMatch(/img \{[^}]*break-after: page;/);
    expect(html).toMatch(/img:last-child \{ break-after: auto; \}/);
  });

  it("escapes the title that becomes the PDF's document title", () => {
    const titled = deckHtml(["step-0.jpg"], {
      width: 1920,
      height: 1080,
      title: "Taxes & <benefits>",
    });
    expect(titled).toContain("<title>Taxes &amp; &lt;benefits&gt;</title>");
  });
});

describe("countPdfPages", () => {
  // A complete PDF ends with %%EOF; fragments here get one appended.
  const count = (text) => countPdfPages(Buffer.from(`${text}\n%%EOF\n`, "latin1"));

  it("counts page objects and ignores the page tree", () => {
    const pdf =
      "1 0 obj <</Type /Pages /Kids [2 0 R 3 0 R] /Count 2>> endobj\n" +
      "2 0 obj <</Type /Page /Parent 1 0 R>> endobj\n" +
      "3 0 obj <</Type/Page/Parent 1 0 R>> endobj\n";
    expect(count(pdf)).toBe(2);
    expect(count("%PDF-1.4\n")).toBe(0);
  });

  // A stream object whose dictionary declares the true length of `data`.
  const stream = (data, extra = "") =>
    `5 0 obj <</Length ${Buffer.byteLength(data, "latin1")}${extra}>>\nstream\n${data}\nendstream\nendobj\n`;
  const page = "2 0 obj <</Type /Page /Parent 1 0 R>> endobj\n";

  it("ignores the keyword inside strings, streams and comments", () => {
    expect(count(page + "4 0 obj <</Title (/Type /Page)>> endobj\n")).toBe(1);
    expect(count(page + "4 0 obj <</Title (a (nested /Type /Page) b)>> endobj\n")).toBe(1);
    expect(count(page + "4 0 obj <</Title (esc\\) /Type /Page \\( still in)>> endobj\n")).toBe(1);
    expect(count(page + stream("/Type /Page /Type /Page"))).toBe(1);
    expect(count(page + "% /Type /Page in a comment\n")).toBe(1);
  });

  it("skips stream data by its /Length, even when the data says endstream", () => {
    expect(count(page + stream("endstream\n/Type /Page\n"))).toBe(1);
    expect(count(page + stream("x", " /Filter /FlateDecode /DecodeParms <</Columns 4>>"))).toBe(1);
    expect(
      count(page + "5 0 obj <</Length 3>>\r\nstream\r\nabc\r\nendstream\r\nendobj\r\n"),
    ).toBe(1);
  });

  it("reads `stream` as a keyword only after a dictionary", () => {
    expect(count("4 0 obj <</Name /stream>> endobj\n" + page)).toBe(1);
    expect(count("4 0 obj [/stream (stream)] endobj\n" + page)).toBe(1);
  });

  it("resolves an indirect /Length, whatever its object number", () => {
    for (const ref of ["6 0 R", "16 0 R", "123 0 R"]) {
      const id = ref.split(" ")[0];
      const data = "x endstream\n/Type /Page\n";
      const pdf =
        page +
        `5 0 obj <</Length ${ref}>>\nstream\n${data}\nendstream\nendobj\n` +
        `${id} 0 obj ${data.length} endobj\n`;
      expect(count(pdf)).toBe(1);
    }
  });

  it("falls back to the next endstream when an indirect /Length is not in the file", () => {
    const pdf = page + "5 0 obj <</Length 16 0 R>>\nstream\nabc /Type /Page\nendstream\nendobj\n";
    expect(count(pdf)).toBe(1);
  });

  it("reads only the stream dictionary's own /Length", () => {
    const data = "endstream /Type /Page\n";
    for (const decoy of ["/X <</Length 0>>", "/Foo [/Length 0]", "/Foo [<</Length 0>>]", "/B <</C [/Length 0]>>"]) {
      const pdf = page + `5 0 obj <<${decoy} /Length ${data.length}>>\nstream\n${data}\nendstream\nendobj\n`;
      expect(count(pdf)).toBe(1);
    }
  });

  it("takes the last definition of an indirect /Length, as an incremental update does", () => {
    const data = "x endstream\n/Type /Page\n";
    const pdf =
      "16 0 obj 0 endobj\n" +
      page +
      `5 0 obj <</Length 16 0 R>>\nstream\n${data}\nendstream\nendobj\n` +
      `16 0 obj ${data.length} endobj\n`;
    expect(count(pdf)).toBe(1);
  });

  it("skips hex strings, so their brackets cannot pass for a dictionary's", () => {
    const data = "endstream /Type /Page";
    for (const extra of [" /ID <AB>", " /K <>", " /A <</B <CD>>>"]) {
      const pdf = page + `5 0 obj <</Length ${data.length}${extra}>>\nstream\n${data}\nendstream\nendobj\n`;
      expect(count(pdf)).toBe(1);
    }
    expect(count(page + "4 0 obj <</ID [<2F54797065202F50616765>]>> endobj\n")).toBe(1);
  });

  it("finds the keyword after any PDF whitespace, NUL included", () => {
    const data = "/Type /Page /Type /Page";
    for (const gap of [" ".repeat(63), " ".repeat(200), "\0", "\r\n\t\f"]) {
      const pdf = page + `5 0 obj <</Length ${data.length}>>${gap}stream\n${data}\nendstream\nendobj\n`;
      expect(count(pdf)).toBe(1);
    }
  });

  it("throws on a stream that does not end where it should", () => {
    expect(() => count(page + "5 0 obj <</Length 3>>\nstream\nabcdef\nendstream\n")).toThrow(
      /does not end at its \/Length/,
    );
    expect(() => count(page + "5 0 obj <</Length 6 0 R>>\nstream\nabc /Type /Page\n")).toThrow(
      /has no endstream/,
    );
    expect(() => count(page + "5 0 obj <</Length 300>>\nstream\nabc\nendstream\n")).toThrow(
      /does not end at its \/Length/,
    );
    expect(() => count(page + "4 0 obj <</Title (no end>> endobj\n")).toThrow(/literal string has no end/);
    expect(() => count(page + "4 0 obj <</ID <ABCD")).toThrow(/hex string has no end/);
    // A bare `stream` after a token other than `>>` is not a stream.
    expect(count("4 0 obj 1 endobj" + " ".repeat(70) + "stream\n" + page + "endstream\n")).toBe(1);
  });

  it("counts a page that follows a string or stream", () => {
    const pdf =
      "4 0 obj <</Title (x)>> endobj\n" +
      "5 0 obj <</Length 3>>\nstream\nabc\nendstream\nendobj\n" +
      "2 0 obj <</Type /Page /Parent 1 0 R>> endobj\n";
    expect(count(pdf)).toBe(1);
  });
});

describe("countPdfPages on a truncated file", () => {
  it("throws unless the file ends with %%EOF", () => {
    const pdf = "2 0 obj <</Type /Page /Parent 1 0 R>> endobj\n";
    expect(() => countPdfPages(Buffer.from(pdf, "latin1"))).toThrow(/does not end with %%EOF/);
    expect(countPdfPages(Buffer.from(`${pdf}%%EOF`, "latin1"))).toBe(1);
    expect(countPdfPages(Buffer.from(`${pdf}%%EOF\r\n`, "latin1"))).toBe(1);
  });
});

describe("redact", () => {
  it("drops URL fragments and password values", () => {
    const url = "http://localhost:4000/slides/deck?slide=2&export=1#password=s3cr%26t%20pw";
    expect(redact(url)).toBe("http://localhost:4000/slides/deck?slide=2&export=1");
    expect(redact(`Chrome timed out: ${url} (retrying)`)).toBe(
      "Chrome timed out: http://localhost:4000/slides/deck?slide=2&export=1 (retrying)",
    );
    expect(redact("bad password=hunter2 here")).toBe("bad password=… here");
    expect(redact("no secrets here")).toBe("no secrets here");
  });
});

describe("mapLimit", () => {
  it("keeps input order and never exceeds the limit", async () => {
    let running = 0;
    let peak = 0;
    const out = await mapLimit([5, 1, 4, 2, 3], 2, async (n) => {
      running++;
      peak = Math.max(peak, running);
      await new Promise((r) => setTimeout(r, n));
      running--;
      return n * 10;
    });
    expect(out).toEqual([50, 10, 40, 20, 30]);
    expect(peak).toBe(2);
  });

  it("handles an empty list", async () => {
    expect(await mapLimit([], 3, async (x) => x)).toEqual([]);
  });

  it("rejects a limit that would run nothing", async () => {
    for (const limit of [0, -1, 1.5, NaN, Infinity, "3"]) {
      await expect(mapLimit([1, 2], limit, async (x) => x)).rejects.toThrow(
        /whole number limit/,
      );
    }
  });

  it("after a failure starts nothing new, waits for running items, and reports the first error", async () => {
    const started = [];
    const finished = [];
    const run = mapLimit([0, 1, 2, 3, 4, 5], 2, async (n) => {
      started.push(n);
      await new Promise((r) => setTimeout(r, n === 0 ? 5 : 30));
      if (n === 0) throw new Error("first");
      finished.push(n);
      if (n === 1) throw new Error("second");
    });
    await expect(run).rejects.toThrow("first");
    // Items 0 and 1 were running when 0 failed. Nothing after them started,
    // and item 1 ran to its end before mapLimit settled.
    expect(started).toEqual([0, 1]);
    expect(finished).toEqual([1]);
  });
});

// Chrome prints the page it is given; this checks the one property the unit
// tests cannot: one PDF page per screenshot, at the requested page size.
const chrome = findChrome();
// A CI runner's Chrome may lack a usable sandbox; the page printed here is a
// local file this test wrote.
const ciFlags = process.env.CI ? ["--no-sandbox"] : [];
// A 1 × 1 white PNG.
const PIXEL = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVR4nGP4//8/AAX+Av4N70a4AAAAAElFTkSuQmCC",
  "base64",
);

describe.skipIf(!chrome)("printing with Chrome", () => {
  it("writes one page per screenshot at the viewport size", async () => {
    const dir = mkdtempSync(path.join(tmpdir(), "export-pdf-test-"));
    try {
      const names = Array.from({ length: 5 }, (_, i) => shotName(i, 5));
      for (const name of names) writeFileSync(path.join(dir, name), PIXEL);
      const page = path.join(dir, "deck.html");
      writeFileSync(page, deckHtml(names, { width: 1440, height: 810, title: "Test" }));
      const pdf = path.join(dir, "deck.pdf");
      await runChrome(
        chrome,
        ["--no-pdf-header-footer", `--print-to-pdf=${pdf}`, pathToFileURL(page).href],
        { timeoutMs: 90_000, extraFlags: ciFlags },
      );
      const bytes = readFileSync(pdf);
      expect(countPdfPages(bytes)).toBe(5);
      // 1440 × 810 px at 96 px per inch is 1080 × 607.5 pt.
      const box = /\/MediaBox\s*\[\s*0\s+0\s+([\d.]+)\s+([\d.]+)\s*\]/.exec(
        bytes.toString("latin1"),
      );
      expect(Number(box[1])).toBeCloseTo(1080, 0);
      expect(Math.abs(Number(box[2]) - 607.5)).toBeLessThan(1);
      expect(runningChromeCount()).toBe(0);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  }, 120_000);

  // A page with the export hold in its head. `release` stands in for the
  // viewer: 300 ms in, it marks the page mounted and releases the hold with
  // that settle time (null: never). At load the page records when load fired
  // in its own clock, and whether a hold was opened.
  const holdPage = (release) => `<!doctype html><html><head><meta charset="utf-8">
<script>${EXPORT_HOLD_SCRIPT}</script></head><body><p id="state">parsed</p><script>
var t0 = performance.now();
addEventListener("load", function () {
  document.body.insertAdjacentHTML("beforeend",
    '<p id="load">' + Math.round(performance.now() - t0) + "</p>" +
    '<p id="hold">' + (window.__slideshowExportHold ? "opened" : "none") + "</p>");
});
${release === null ? "" : `setTimeout(function () {
  document.getElementById("state").textContent = "mounted";
  if (window.__slideshowExportHold) window.__slideshowExportHold.release(${release});
}, 300);`}
</script></body></html>`;

  const dump = async (html, query, timeout) => {
    const dir = mkdtempSync(path.join(tmpdir(), "export-hold-test-"));
    try {
      const page = path.join(dir, "page.html");
      writeFileSync(page, html);
      return await runChrome(
        chrome,
        [`--timeout=${timeout}`, "--dump-dom", `${pathToFileURL(page).href}${query}`],
        { timeoutMs: 120_000, extraFlags: ciFlags },
      );
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  };
  const loadedAt = (dom) => {
    const match = /<p id="load">(\d+)<\/p>/.exec(dom);
    return match ? Number(match[1]) : null;
  };
  const holdState = (dom) => /<p id="hold">(\w+)<\/p>/.exec(dom)?.[1];

  it("holds load until the settle time after the release, and marks the page settled", async () => {
    const dom = await dump(holdPage(1500), "?export=1&settle=1500", 20_000);
    expect(dom).toContain('<p id="state">mounted</p>');
    expect(holdState(dom)).toBe("opened");
    expect(parseDeckDom(dom).settled).toBe(true);
    expect(dom).not.toContain("<iframe");
    // Released 300 ms in, then 1500 ms of settle. Chrome's timeout does not
    // set the settled mark, so a release that did nothing fails above.
    expect(loadedAt(dom)).toBeGreaterThanOrEqual(1800);
  }, 150_000);

  it("holds load until the release with settle=0", async () => {
    const dom = await dump(holdPage(0), "?export=1&settle=0", 20_000);
    expect(holdState(dom)).toBe("opened");
    expect(parseDeckDom(dom).settled).toBe(true);
    expect(dom).not.toContain("<iframe");
    expect(loadedAt(dom)).toBeGreaterThanOrEqual(300);
  }, 150_000);

  it("opens no hold without export=1 and a whole-number settle", async () => {
    for (const query of ["", "?settle=1500", "?export=1", "?export=0&settle=1500", "?export=1&settle=abc", "?export=1&settle=-5"]) {
      const dom = await dump(holdPage(1500), query, 60_000);
      expect(holdState(dom)).toBe("none");
      expect(parseDeckDom(dom).settled).toBe(false);
      expect(loadedAt(dom)).not.toBeNull();
    }
  }, 300_000);

  it("lets Chrome's --timeout end a hold that is never released, unmarked", async () => {
    // Nothing releases this hold, so alone it would last MAX_HOLD_MS (two
    // minutes). When --timeout runs out, Chrome stops the page load, which
    // fires load; the page is not marked settled, so a capture rejects it.
    const dom = await dump(holdPage(null), "?export=1&settle=5000", 2_000);
    expect(dom).toContain('<p id="state">parsed</p>');
    expect(holdState(dom)).toBe("opened");
    expect(parseDeckDom(dom).settled).toBe(false);
    expect(loadedAt(dom)).toBeGreaterThanOrEqual(1000);
    expect(loadedAt(dom)).toBeLessThan(60_000);
  }, 150_000);

  it("stops a Chrome that outlives the watchdog, stops tracking it, and keeps the password out of the error", async () => {
    // A server that accepts the connection and never answers, so the page
    // load cannot finish.
    const sockets = new Set();
    const silent = createServer((socket) => {
      sockets.add(socket);
      socket.on("close", () => sockets.delete(socket));
    });
    await new Promise((resolve) => silent.listen(0, "127.0.0.1", resolve));
    try {
      const password = "s3cr&t pw";
      const url = `http://127.0.0.1:${silent.address().port}/#password=${encodeURIComponent(password)}`;
      const hang = runChrome(chrome, ["--dump-dom", url], {
        timeoutMs: 2_000,
        extraFlags: ciFlags,
      });
      const error = await hang.then(
        () => null,
        (e) => e,
      );
      expect(error?.message).toMatch(/Chrome timed out after 2000 ms/);
      // The error names the page but never the password, raw or encoded.
      expect(error.message).toContain(`127.0.0.1:${silent.address().port}/`);
      expect(error.message).not.toContain(password);
      expect(error.message).not.toContain(encodeURIComponent(password));
      expect(runningChromeCount()).toBe(0);
    } finally {
      for (const socket of sockets) socket.destroy();
      await new Promise((resolve) => silent.close(resolve));
    }
  }, 60_000);
});
