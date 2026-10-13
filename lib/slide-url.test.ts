import { describe, it, expect } from "vitest";
import { buildSlideUrl, isExportMode } from "./slide-url";

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
