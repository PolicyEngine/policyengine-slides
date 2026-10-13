// @vitest-environment node
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "fs";
import { createServer } from "net";
import { tmpdir } from "os";
import path from "path";
import { pathToFileURL } from "url";
import { describe, it, expect } from "vitest";
import { findChrome, runChrome, runningChromeCount } from "./export-pdf-chrome.mjs";
import {
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
      siteIsolation: false,
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
      siteIsolation: true,
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
        "--site-isolation",
      ]),
    ).toEqual(expected);
    expect(
      parseArgs([
        "--scale=2",
        "--site-isolation",
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

  it("carries a password only in the fragment, and round-trips it", () => {
    for (const password of ["", "plain", "a&b=c", "sp ace+plus", "ünï/çode#?%"]) {
      const url = new URL(stepUrl("http://localhost:4000", "deck", 3, password));
      expect(url.search).toBe("?slide=3&export=1");
      expect(new URLSearchParams(url.hash.slice(1)).get("password")).toBe(password);
    }
    expect(new URL(stepUrl("http://localhost:4000", "deck", 3)).hash).toBe("");
  });
});

describe("parseDeckDom", () => {
  it("reads the step count and title from the viewer", () => {
    const dom =
      "<head><title>Taxes &amp; benefits | PolicyEngine</title></head>" +
      '<main class="relative cursor-pointer" data-total-steps="36">';
    expect(parseDeckDom(dom)).toEqual({
      total: 36,
      gated: false,
      title: "Taxes & benefits | PolicyEngine",
    });
  });

  it("flags the password gate and a missing count", () => {
    const dom = '<form><input type="password" placeholder="Password"></form>';
    expect(parseDeckDom(dom)).toEqual({ total: null, gated: true, title: null });
  });

  it("treats a zero count as missing", () => {
    expect(parseDeckDom('<main data-total-steps="0">').total).toBeNull();
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
  it("counts page objects and ignores the page tree", () => {
    const pdf =
      "1 0 obj <</Type /Pages /Kids [2 0 R 3 0 R] /Count 2>> endobj\n" +
      "2 0 obj <</Type /Page /Parent 1 0 R>> endobj\n" +
      "3 0 obj <</Type/Page/Parent 1 0 R>> endobj\n";
    expect(countPdfPages(Buffer.from(pdf, "latin1"))).toBe(2);
    expect(countPdfPages(Buffer.from("%PDF-1.4\n", "latin1"))).toBe(0);
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

  it("stops a Chrome that outlives the watchdog and stops tracking it", async () => {
    // A server that accepts the connection and never answers, so the page
    // load cannot finish.
    const sockets = new Set();
    const silent = createServer((socket) => {
      sockets.add(socket);
      socket.on("close", () => sockets.delete(socket));
    });
    await new Promise((resolve) => silent.listen(0, "127.0.0.1", resolve));
    try {
      const url = `http://127.0.0.1:${silent.address().port}/`;
      const hang = runChrome(chrome, ["--dump-dom", url], {
        timeoutMs: 2_000,
        extraFlags: ciFlags,
      });
      await expect(hang).rejects.toThrow(/Chrome timed out after 2000 ms/);
      expect(runningChromeCount()).toBe(0);
    } finally {
      for (const socket of sockets) socket.destroy();
      await new Promise((resolve) => silent.close(resolve));
    }
  }, 60_000);
});
