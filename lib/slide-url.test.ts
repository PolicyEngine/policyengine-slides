import { describe, it, expect } from "vitest";
import {
  buildSlideUrl,
  exportSettleMs,
  isExportMode,
  parseSlideParam,
  passwordFromHash,
} from "./slide-url";

describe("buildSlideUrl", () => {
  it("preserves basePath when on step 0", () => {
    const result = buildSlideUrl(
      "http://localhost:3000/slides/abundance-dmv",
      0,
    );
    expect(result).toBe("/slides/abundance-dmv");
  });

  it("preserves basePath when on a later step", () => {
    const result = buildSlideUrl(
      "http://localhost:3000/slides/abundance-dmv",
      5,
    );
    expect(result).toBe("/slides/abundance-dmv?slide=5");
  });

  it("removes slide param when returning to step 0", () => {
    const result = buildSlideUrl(
      "http://localhost:3000/slides/abundance-dmv?slide=3",
      0,
    );
    expect(result).toBe("/slides/abundance-dmv");
  });

  it("updates existing slide param", () => {
    const result = buildSlideUrl(
      "http://localhost:3000/slides/abundance-dmv?slide=2",
      7,
    );
    expect(result).toBe("/slides/abundance-dmv?slide=7");
  });

  it("works without basePath", () => {
    const result = buildSlideUrl(
      "http://localhost:3000/abundance-dmv",
      3,
    );
    expect(result).toBe("/abundance-dmv?slide=3");
  });

  it("works on production domain", () => {
    const result = buildSlideUrl(
      "https://policyengine.org/slides/abundance-dmv?slide=1",
      4,
    );
    expect(result).toBe("/slides/abundance-dmv?slide=4");
  });
});

describe("isExportMode", () => {
  it("is on when export=1", () => {
    expect(isExportMode(new URLSearchParams("slide=4&export=1"))).toBe(true);
  });

  it("is off without the param or with any other value", () => {
    expect(isExportMode(new URLSearchParams("slide=4"))).toBe(false);
    expect(isExportMode(new URLSearchParams("export=0"))).toBe(false);
    expect(isExportMode(new URLSearchParams("export=true"))).toBe(false);
  });

  it("survives buildSlideUrl, so the address bar keeps export mode", () => {
    const url = buildSlideUrl(
      "http://localhost:3000/slides/abundance-dmv?slide=2&export=1",
      5,
    );
    expect(isExportMode(new URL(url, "http://localhost").searchParams)).toBe(
      true,
    );
  });
});

describe("passwordFromHash", () => {
  it("reads and decodes the password from the fragment", () => {
    expect(passwordFromHash("#password=abc")).toBe("abc");
    expect(passwordFromHash("#password=a%26b%20c%23d")).toBe("a&b c#d");
    expect(passwordFromHash("password=abc")).toBe("abc");
  });

  it("round-trips any password that encodeURIComponent wrote", () => {
    for (const password of ["", "plain", "a&b=c", "sp ace+plus", "ünï/çode#?%"]) {
      const hash = `#password=${encodeURIComponent(password)}`;
      expect(passwordFromHash(hash)).toBe(password);
    }
  });

  it("returns null without a password key", () => {
    expect(passwordFromHash("")).toBeNull();
    expect(passwordFromHash("#")).toBeNull();
    expect(passwordFromHash("#section-2")).toBeNull();
  });

  it("drops out of the address bar once the viewer rewrites the URL", () => {
    const shown = buildSlideUrl(
      "http://localhost:3000/slides/deck?slide=2&export=1#password=abc",
      2,
    );
    expect(shown).toBe("/slides/deck?slide=2&export=1");
  });
});

describe("exportSettleMs", () => {
  const read = (query: string) => exportSettleMs(new URLSearchParams(query), 60_000);

  it("reads a whole number of milliseconds", () => {
    expect(read("export=1&settle=8000")).toBe(8000);
    expect(read("settle=0")).toBe(0);
  });

  it("stays within 0 and the maximum for any input", () => {
    expect(read("settle=999999999")).toBe(60_000);
    for (const value of ["", "-5", "1.5", "abc", "1e9", " 8000", "8000ms", "Infinity"]) {
      expect(read(`settle=${encodeURIComponent(value)}`)).toBe(0);
    }
    expect(read("export=1")).toBe(0);
  });
});

describe("parseSlideParam", () => {
  it("returns the step for a valid param", () => {
    expect(parseSlideParam("5", 10)).toBe(5);
  });

  it("returns the first step when the param is missing", () => {
    expect(parseSlideParam(null, 10)).toBe(0);
  });

  it("returns the first step for a non-numeric param", () => {
    expect(parseSlideParam("abc", 10)).toBe(0);
  });

  it("clamps a negative param to the first step", () => {
    expect(parseSlideParam("-3", 10)).toBe(0);
  });

  it("clamps a param past the end to the last step", () => {
    expect(parseSlideParam("99", 10)).toBe(9);
  });
});
