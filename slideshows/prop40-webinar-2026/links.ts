/** Every address the deck shows, in one place.
 *
 * The calculator: app-v2's apps.json lists the embed source as
 * /us/california-wealth-tax/embed, which redirects to the app's basePath,
 * /us/california-wealth-tax. On October 29, 2026 neither the policyengine.org
 * mount nor the Vercel host sent X-Frame-Options or a frame-ancestors CSP, so
 * the live-demo slide frames the public address. If that mount fails during
 * the webinar, CALCULATOR_FALLBACK_URL serves the same build. */
export const CALCULATOR_URL = 'https://www.policyengine.org/us/california-wealth-tax';
export const CALCULATOR_DISPLAY_URL = 'policyengine.org/us/california-wealth-tax';
export const CALCULATOR_IFRAME_URL = CALCULATOR_URL;
export const CALCULATOR_FALLBACK_URL =
  'https://california-wealth-tax.vercel.app/us/california-wealth-tax';

export const REPO_URL = 'https://github.com/PolicyEngine/california-wealth-tax';
export const REPO_DISPLAY_URL = 'github.com/PolicyEngine/california-wealth-tax';

/** The working paper (draft of October 23, 2026), served with the calculator. */
export const PAPER_URL = 'https://www.policyengine.org/us/california-wealth-tax/papers/web/';
export const PAPER_DISPLAY_URL = 'policyengine.org/us/california-wealth-tax/papers/web';

/** Fernando Hoces de la Guardia's Open Policy Analysis report. */
export const OPA_URL = 'https://fhoces.github.io/opa-prop40/';
export const OPA_DISPLAY_URL = 'fhoces.github.io/opa-prop40';

/** The 2026 ballot measures dashboard, on policyengine.org since October 30,
 * 2026 (app-v2 PR #1415). */
export const BALLOT_MEASURES_URL = 'https://www.policyengine.org/us/ballot-measures-2026';
export const BALLOT_MEASURES_DISPLAY_URL = 'policyengine.org/us/ballot-measures-2026';
