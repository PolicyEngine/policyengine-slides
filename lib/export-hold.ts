/**
 * Export mode holds the page's `load` event open, because a headless browser
 * captures the page at `load` and a live embed needs real time to render.
 *
 * EXPORT_HOLD_SCRIPT runs inline in <head>, so it runs before `load` can
 * fire. On a URL with `export=1` and `settle=<ms>` (a whole number, 0
 * included) it opens a document in a hidden iframe; a frame that is still
 * loading keeps its parent's `load` from firing. The viewer calls
 * `releaseExportHold(ms)` once the slide is mounted, and the hold ends `ms`
 * later. A hold that a release ends marks <html> with `data-export-settled`,
 * so a capture can tell a settled slide from one cut off by a timeout. If
 * nothing releases it, the hold ends unmarked after MAX_HOLD_MS.
 */

/** Longest settle time a URL can ask for. */
export const MAX_SETTLE_MS = 60_000;

/** How long the hold lasts when the viewer never mounts to release it. */
export const MAX_HOLD_MS = 120_000;

export const EXPORT_HOLD_SCRIPT = `(function () {
  var query = new URLSearchParams(location.search);
  if (query.get("export") !== "1" || !/^[0-9]+$/.test(query.get("settle") || "")) return;
  var frame = document.createElement("iframe");
  frame.hidden = true;
  frame.setAttribute("aria-hidden", "true");
  frame.tabIndex = -1;
  document.head.appendChild(frame);
  var doc = frame.contentDocument;
  if (!doc) return;
  doc.open();
  var ended = false;
  var released = false;
  function end(settled) {
    if (ended) return;
    ended = true;
    if (settled) document.documentElement.setAttribute("data-export-settled", "");
    try { doc.close(); } catch (e) {}
    frame.remove();
  }
  var fallback = setTimeout(function () { end(false); }, ${MAX_HOLD_MS});
  window.__slideshowExportHold = {
    release: function (ms) {
      if (released) return;
      released = true;
      clearTimeout(fallback);
      setTimeout(function () { end(true); }, ms);
    },
  };
})();`;

declare global {
  interface Window {
    __slideshowExportHold?: { release: (ms: number) => void };
  }
}

/** End the export hold `ms` from now. Does nothing when no hold is open. */
export function releaseExportHold(ms: number): void {
  window.__slideshowExportHold?.release(ms);
}
