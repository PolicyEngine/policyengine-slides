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
  it("defaults the output to <id>.pdf and builds locally", () => {
    expect(parseArgs(["bls-taxsim-2026"])).toEqual({
      help: false,
      id: "bls-taxsim-2026",
      output: "bls-taxsim-2026.pdf",
      url: null,
    });
  });

  it("takes an output path and --url in either order", () => {
    const expected = {
      help: false,
      id: "deck",
      output: "out/deck.pdf",
      url: "https://www.policyengine.org",
    };
    expect(
      parseArgs(["deck", "out/deck.pdf", "--url", "https://www.policyengine.org/"]),
    ).toEqual(expected);
    expect(
      parseArgs(["--url=https://www.policyengine.org", "deck", "out/deck.pdf"]),
    ).toEqual(expected);
  });

  it("rejects a missing id, a bare --url and unknown options", () => {
    expect(() => parseArgs([])).toThrow(/Missing slideshow id/);
    expect(() => parseArgs(["deck", "--url"])).toThrow(/--url needs an origin/);
    expect(() => parseArgs(["deck", "--wait", "5"])).toThrow(/Unknown option/);
    expect(() => parseArgs(["deck", "a.pdf", "b.pdf"])).toThrow(/Unexpected/);
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
  it("reads the step count from the viewer", () => {
    const dom = '<main class="relative cursor-pointer" data-total-steps="36">';
    expect(parseDeckDom(dom)).toEqual({ total: 36, gated: false });
  });

  it("flags the password gate and a missing count", () => {
    const dom = '<form><input type="password" placeholder="Password"></form>';
    expect(parseDeckDom(dom)).toEqual({ total: null, gated: true });
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
  it("lays out one 16:9 page per screenshot, in order", () => {
    const html = deckHtml(["step-0.jpg", "step-1.jpg", "step-2.jpg"]);
    expect(html).toContain("@page { size: 1920px 1080px; margin: 0; }");
    const srcs = [...html.matchAll(/<img src="([^"]+)"/g)].map((m) => m[1]);
    expect(srcs).toEqual(["step-0.jpg", "step-1.jpg", "step-2.jpg"]);
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
