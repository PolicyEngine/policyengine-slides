import { describe, it, expect } from "vitest";
import {
  parseArgs,
  stepUrl,
  parseDeckDom,
  shotName,
  deckHtml,
  mapLimit,
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

describe("stepUrl", () => {
  it("puts the step and export mode in the query", () => {
    expect(stepUrl("http://localhost:4000", "bls-taxsim-2026", 0)).toBe(
      "http://localhost:4000/slides/bls-taxsim-2026?slide=0&export=1",
    );
    expect(stepUrl("https://www.policyengine.org", "deck", 35)).toBe(
      "https://www.policyengine.org/slides/deck?slide=35&export=1",
    );
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
  it("lays out one page per screenshot at the viewport size, in order", () => {
    const html = deckHtml(["step-0.jpg", "step-1.jpg", "step-2.jpg"], {
      width: 1440,
      height: 810,
    });
    expect(html).toContain("@page { size: 1440px 810px; margin: 0; }");
    expect(html).toContain("img { width: 1440px; height: 810px;");
    expect(html).toContain("<title>Slides</title>");
    const srcs = [...html.matchAll(/<img src="([^"]+)"/g)].map((m) => m[1]);
    expect(srcs).toEqual(["step-0.jpg", "step-1.jpg", "step-2.jpg"]);
  });
});

describe("deckHtml title", () => {
  it("escapes the title that becomes the PDF's document title", () => {
    const html = deckHtml(["step-0.jpg"], {
      width: 1920,
      height: 1080,
      title: "Taxes & <benefits>",
    });
    expect(html).toContain("<title>Taxes &amp; &lt;benefits&gt;</title>");
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
});
