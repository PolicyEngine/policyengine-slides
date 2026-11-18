import { describe, expect, it } from "vitest";
import { counterLabel, flattenSlides, getSlideBuilds, type SlideConfig } from "./types";
import { slideshows } from "./slideshows";

const Blank = () => null;

describe("exportBuilds", () => {
  const slides: SlideConfig[] = [
    Blank,
    { component: Blank, builds: 3 },
    { component: Blank, builds: 2, exportBuilds: 1 },
    { component: Blank },
  ];

  it("counts builds live", () => {
    expect(slides.map((slide) => getSlideBuilds(slide))).toEqual([1, 3, 2, 1]);
    expect(flattenSlides(slides)).toHaveLength(7);
  });

  it("counts exportBuilds in an export and falls back to builds", () => {
    expect(slides.map((slide) => getSlideBuilds(slide, { exportMode: true }))).toEqual([1, 3, 1, 1]);
    expect(flattenSlides(slides, { exportMode: true })).toEqual([
      { slideIndex: 0, buildStep: 1 },
      { slideIndex: 1, buildStep: 1 },
      { slideIndex: 1, buildStep: 2 },
      { slideIndex: 1, buildStep: 3 },
      { slideIndex: 2, buildStep: 1 },
      { slideIndex: 3, buildStep: 1 },
    ]);
  });

  it("leaves every deck that doesn't set it unchanged", () => {
    const setsIt = (slide: SlideConfig) => typeof slide === "object" && "exportBuilds" in slide;
    for (const deck of slideshows.filter((deck) => !deck.slides.some(setsIt))) {
      expect(flattenSlides(deck.slides, { exportMode: true })).toEqual(flattenSlides(deck.slides));
    }
  });
});

describe("counterLabel", () => {
  const steps = flattenSlides([
    Blank,
    { component: Blank, builds: 3 },
    Blank,
  ]);

  it("counts steps by default", () => {
    expect(counterLabel(steps, 0)).toBe("1 / 5");
    expect(counterLabel(steps, 2)).toBe("3 / 5");
    expect(counterLabel(steps, 4, "steps")).toBe("5 / 5");
  });

  it("counts slides when asked, so builds don't move it", () => {
    expect([0, 1, 2, 3, 4].map((step) => counterLabel(steps, step, "slides"))).toEqual([
      "1 / 3",
      "2 / 3",
      "2 / 3",
      "2 / 3",
      "3 / 3",
    ]);
  });
});
