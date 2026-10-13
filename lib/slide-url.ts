/**
 * Parse the `slide` search param into a step index within [0, totalSteps - 1].
 * A missing or malformed value falls back to the first step.
 */
export function parseSlideParam(
  value: string | null,
  totalSteps: number,
): number {
  const step = parseInt(value ?? "", 10);
  if (Number.isNaN(step)) return 0;
  return Math.max(0, Math.min(step, totalSteps - 1));
}

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
