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
