import { describe, it, expect } from "vitest";
import { buildSlideUrl } from "./slide-url";

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
