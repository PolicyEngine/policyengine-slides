/**
 * Build the URL to display in the address bar for the current slide step.
 * Preserves the existing pathname (including basePath) and only modifies
 * the `slide` search param.
 */
export function buildSlideUrl(
  currentHref: string,
  currentStep: number,
): string {
  const url = new URL(currentHref);
  if (currentStep > 0) {
    url.searchParams.set("slide", String(currentStep));
  } else {
    url.searchParams.delete("slide");
  }
  return url.pathname + url.search;
}

/**
 * Export mode (`?export=1`) renders slides without the navigation bar, so a
 * headless browser can capture each step as it will appear in a PDF.
 */
export function isExportMode(params: Pick<URLSearchParams, "get">): boolean {
  return params.get("export") === "1";
}

/**
 * Milliseconds an export capture asks the page to stay still after the slide
 * mounts (`settle=<ms>`), as a whole number from 0 to `max`. Anything else
 * reads as 0; EXPORT_HOLD_SCRIPT opens no hold for those values.
 */
export function exportSettleMs(
  params: Pick<URLSearchParams, "get">,
  max: number,
): number {
  const raw = params.get("settle") ?? "";
  if (!/^\d+$/.test(raw)) return 0;
  return Math.min(parseInt(raw, 10), max);
}

/**
 * Read a deck password from a URL fragment such as `#password=abc`. Browsers
 * never send the fragment to the server. Returns null when the fragment has
 * no `password` key, and "" for an empty one.
 */
export function passwordFromHash(hash: string): string | null {
  return new URLSearchParams(hash.replace(/^#/, "")).get("password");
}
