import { act, useMemo, useSyncExternalStore } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import SlideshowViewer from "./SlideshowViewer";
import type { SlideshowConfig } from "@/lib/types";

// Next's app router mirrors window.history.replaceState into useSearchParams.
// Reproduce that here so the viewer sees its own URL writes, as it does in
// the browser.
const locationStore = vi.hoisted(() => {
  const listeners = new Set<() => void>();
  return {
    subscribe(listener: () => void) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    notify() {
      listeners.forEach((listener) => listener());
    },
  };
});

vi.mock("next/navigation", () => ({
  useSearchParams() {
    const search = useSyncExternalStore(
      locationStore.subscribe,
      () => window.location.search,
    );
    return useMemo(() => new URLSearchParams(search), [search]);
  },
}));

const Blank = () => null;

const config: SlideshowConfig = {
  id: "demo",
  title: "Demo",
  description: "Demo deck",
  date: "2026-10-05",
  slides: [Blank, Blank, { component: Blank, builds: 3 }, Blank, Blank],
};
const TOTAL_STEPS = 7;

const originalReplaceState = window.history.replaceState;
let container: HTMLDivElement;
let root: Root;

function counterText() {
  return [...container.querySelectorAll("span")]
    .map((span) => span.textContent?.trim())
    .find((text) => text && /^\d+ \/ \d+$/.test(text));
}

function currentUrl() {
  return window.location.pathname + window.location.search;
}

async function renderAt(url: string, deck: SlideshowConfig = config) {
  originalReplaceState.call(window.history, null, "", url);
  await act(async () => {
    root.render(<SlideshowViewer config={deck} />);
  });
}

async function press(key: string) {
  await act(async () => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key }));
  });
}

beforeEach(() => {
  (globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
  window.history.replaceState = function (...args) {
    originalReplaceState.apply(window.history, args);
    locationStore.notify();
  };
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(async () => {
  await act(async () => root.unmount());
  container.remove();
  window.history.replaceState = originalReplaceState;
});

describe("SlideshowViewer deep links", () => {
  it("opens at the step in the slide param and keeps it in the URL", async () => {
    await renderAt("/slides/demo?slide=5");
    expect(counterText()).toBe(`6 / ${TOTAL_STEPS}`);
    expect(currentUrl()).toBe("/slides/demo?slide=5");
  });

  it("opens at the first step without a slide param", async () => {
    await renderAt("/slides/demo");
    expect(counterText()).toBe(`1 / ${TOTAL_STEPS}`);
    expect(currentUrl()).toBe("/slides/demo");
  });

  it("clamps a slide param past the last step", async () => {
    await renderAt("/slides/demo?slide=99");
    expect(counterText()).toBe(`${TOTAL_STEPS} / ${TOTAL_STEPS}`);
    expect(currentUrl()).toBe(`/slides/demo?slide=${TOTAL_STEPS - 1}`);
  });

  it("updates the URL on arrow keys after a deep link", async () => {
    await renderAt("/slides/demo?slide=2");
    await press("ArrowRight");
    expect(counterText()).toBe(`4 / ${TOTAL_STEPS}`);
    expect(currentUrl()).toBe("/slides/demo?slide=3");
    await press("ArrowLeft");
    await press("ArrowLeft");
    expect(counterText()).toBe(`2 / ${TOTAL_STEPS}`);
    expect(currentUrl()).toBe("/slides/demo?slide=1");
  });

  it("jumps to the ends on Home and End", async () => {
    await renderAt("/slides/demo?slide=3");
    await press("End");
    expect(counterText()).toBe(`${TOTAL_STEPS} / ${TOTAL_STEPS}`);
    expect(currentUrl()).toBe(`/slides/demo?slide=${TOTAL_STEPS - 1}`);
    await press("Home");
    expect(counterText()).toBe(`1 / ${TOTAL_STEPS}`);
    expect(currentUrl()).toBe("/slides/demo");
  });
});

describe("SlideshowViewer clicker keys", () => {
  const clickerDeck = { ...config, clickerKeys: true };

  it("moves forward on PageDown and back on PageUp", async () => {
    await renderAt("/slides/demo?slide=2", clickerDeck);
    await press("PageDown");
    expect(counterText()).toBe(`4 / ${TOTAL_STEPS}`);
    await press("PageUp");
    await press("PageUp");
    expect(counterText()).toBe(`2 / ${TOTAL_STEPS}`);
  });

  it("stops at the ends", async () => {
    await renderAt("/slides/demo", clickerDeck);
    await press("PageUp");
    expect(counterText()).toBe(`1 / ${TOTAL_STEPS}`);
    await press("End");
    await press("PageDown");
    expect(counterText()).toBe(`${TOTAL_STEPS} / ${TOTAL_STEPS}`);
  });

  it.each(["PageDown", "PageUp"])("keeps %s from scrolling the page in a deck with the option", async (key) => {
    await renderAt("/slides/demo?slide=2", clickerDeck);
    const event = new KeyboardEvent("keydown", { key, cancelable: true });
    await act(async () => {
      window.dispatchEvent(event);
    });
    expect(event.defaultPrevented).toBe(true);
  });

  it("follows the option when the config changes", async () => {
    await renderAt("/slides/demo");
    await renderAt(currentUrl(), clickerDeck);
    await press("PageDown");
    expect(counterText()).toBe(`2 / ${TOTAL_STEPS}`);
    await renderAt(currentUrl());
    await press("PageDown");
    expect(counterText()).toBe(`2 / ${TOTAL_STEPS}`);
  });

  it.each(["PageDown", "PageUp"])("leaves %s to the browser in a deck without the option", async (key) => {
    await renderAt("/slides/demo?slide=2");
    const event = new KeyboardEvent("keydown", { key, cancelable: true });
    await act(async () => {
      window.dispatchEvent(event);
    });
    expect(event.defaultPrevented).toBe(false);
    expect(counterText()).toBe(`3 / ${TOTAL_STEPS}`);
  });
});

describe("SlideshowViewer mounting", () => {
  const numbered = (n: number) =>
    function NumberedSlide() {
      return <p data-slide={n} />;
    };
  const deck = { ...config, slides: [0, 1, 2, 3, 4].map(numbered) };
  const mounted = () =>
    [...container.querySelectorAll<HTMLElement>("[data-slide]")].map((slide) => [
      slide.dataset.slide,
      slide.parentElement?.style.display,
    ]);

  it("keeps each neighbor mounted and hidden, and unmounts a slide two or more away", async () => {
    await renderAt("/slides/demo?slide=2", deck);
    expect(mounted()).toEqual([["1", "none"], ["2", "block"], ["3", "none"]]);
    const neighbor = container.querySelector("[data-slide='3']");
    await press("End");
    expect(mounted()).toEqual([["3", "none"], ["4", "block"]]);
    expect(container.querySelector("[data-slide='3']")).toBe(neighbor);
  });
});

describe("SlideshowViewer exportBuilds", () => {
  const seen: (number | undefined)[] = [];
  const Probe = ({ buildStep }: { buildStep?: number }) => {
    seen.push(buildStep);
    return null;
  };
  const deck: SlideshowConfig = {
    ...config,
    slides: [Blank, { component: Probe, builds: 2, exportBuilds: 1 }, Blank],
  };
  const totalSteps = () => container.querySelector("main")?.getAttribute("data-total-steps");
  const currentStep = () => container.querySelector("main")?.getAttribute("data-current-step");

  beforeEach(() => {
    seen.length = 0;
  });

  it("runs every build live", async () => {
    await renderAt("/slides/demo?slide=2", deck);
    expect(totalSteps()).toBe("4");
    expect(seen.at(-1)).toBe(2);
    expect(counterText()).toBe("3 / 4");
    await press("ArrowRight");
    expect(counterText()).toBe("4 / 4");
  });

  it("captures one page for the slide in an export", async () => {
    await renderAt("/slides/demo?slide=1&export=1", deck);
    expect(totalSteps()).toBe("3");
    expect(currentStep()).toBe("1");
    expect(seen.at(-1)).toBe(1);
  });

  it("moves to the next slide on the next export step", async () => {
    await renderAt("/slides/demo?slide=2&export=1", deck);
    expect(totalSteps()).toBe("3");
    expect(currentStep()).toBe("2");
    expect(seen).toEqual([]);
  });
});
