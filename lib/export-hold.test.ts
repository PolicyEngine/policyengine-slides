import { afterEach, describe, expect, it, vi } from "vitest";
import { EXPORT_HOLD_SCRIPT, MAX_HOLD_MS, releaseExportHold } from "./export-hold";

// Runs the generated script, as the browser does from <head>, at `query`.
function runAt(query: string) {
  window.history.replaceState(null, "", `/slides/deck${query}`);
  new Function(EXPORT_HOLD_SCRIPT)();
}

const holdFrames = () => document.head.querySelectorAll("iframe[hidden]").length;

afterEach(() => {
  delete window.__slideshowExportHold;
  document.head.querySelectorAll("iframe").forEach((frame) => frame.remove());
  document.documentElement.removeAttribute("data-export-settled");
  vi.useRealTimers();
});

describe("EXPORT_HOLD_SCRIPT", () => {
  it("opens a hold for export=1 with a whole-number settle, 0 included", () => {
    for (const query of ["?export=1&settle=8000", "?slide=3&export=1&settle=0"]) {
      runAt(query);
      expect(window.__slideshowExportHold).toBeDefined();
      expect(holdFrames()).toBe(1);
      delete window.__slideshowExportHold;
      document.head.querySelectorAll("iframe").forEach((frame) => frame.remove());
    }
  });

  it("does nothing for any other URL", () => {
    for (const query of [
      "",
      "?slide=3",
      "?settle=8000",
      "?export=1",
      "?export=0&settle=8000",
      "?export=true&settle=8000",
      "?export=1&settle=",
      "?export=1&settle=abc",
      "?export=1&settle=-5",
      "?export=1&settle=1.5",
      "?export=1&settle=1e3",
      "?export=1&settle=%208000",
    ]) {
      runAt(query);
      expect(window.__slideshowExportHold).toBeUndefined();
      expect(holdFrames()).toBe(0);
    }
  });

  it("ends the hold the settle time after a release, marking the page settled", () => {
    vi.useFakeTimers();
    runAt("?export=1&settle=8000");
    releaseExportHold(1500);
    vi.advanceTimersByTime(1499);
    expect(holdFrames()).toBe(1);
    expect(document.documentElement.hasAttribute("data-export-settled")).toBe(false);
    vi.advanceTimersByTime(1);
    expect(holdFrames()).toBe(0);
    expect(document.documentElement.hasAttribute("data-export-settled")).toBe(true);
  });

  it("takes only the first release", () => {
    vi.useFakeTimers();
    runAt("?export=1&settle=8000");
    releaseExportHold(1000);
    releaseExportHold(0);
    vi.advanceTimersByTime(999);
    expect(holdFrames()).toBe(1);
    vi.advanceTimersByTime(1);
    expect(holdFrames()).toBe(0);
  });

  it("ends an unreleased hold after MAX_HOLD_MS without marking the page", () => {
    vi.useFakeTimers();
    runAt("?export=1&settle=8000");
    vi.advanceTimersByTime(MAX_HOLD_MS - 1);
    expect(holdFrames()).toBe(1);
    vi.advanceTimersByTime(1);
    expect(holdFrames()).toBe(0);
    expect(document.documentElement.hasAttribute("data-export-settled")).toBe(false);
  });

  it("lets a release after the fallback do nothing", () => {
    vi.useFakeTimers();
    runAt("?export=1&settle=8000");
    vi.advanceTimersByTime(MAX_HOLD_MS);
    releaseExportHold(0);
    vi.advanceTimersByTime(1);
    expect(document.documentElement.hasAttribute("data-export-settled")).toBe(false);
  });
});

describe("releaseExportHold", () => {
  it("does nothing when no hold is open", () => {
    expect(() => releaseExportHold(0)).not.toThrow();
  });
});
