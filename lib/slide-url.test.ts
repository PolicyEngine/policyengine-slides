import { describe, it, expect } from "vitest";
import { buildSlideUrl, isExportMode, passwordFromHash } from "./slide-url";

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

