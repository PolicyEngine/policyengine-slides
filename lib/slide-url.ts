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
