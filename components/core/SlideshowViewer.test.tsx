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

async function renderAt(url: string) {
  originalReplaceState.call(window.history, null, "", url);
  await act(async () => {
    root.render(<SlideshowViewer config={config} />);
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
