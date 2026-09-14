/** Single source for the dashboard URL across the deck (live-demo iframe,
 * screenshot fallback, end slide). Points at the public
 * policyengine.org mount — which goes live when dashboard PR #116 and
 * app-v2 PR #1205 merge on launch morning. Until then the iframe slide
 * 404s; the sigma Vercel host keeps working as a backup:
 * child-poverty-impact-dashboard-sigma.vercel.app */
export const DASHBOARD_URL =
  'https://policyengine.org/us/child-poverty-impact-dashboard';
export const DASHBOARD_DISPLAY_URL =
  'policyengine.org/us/child-poverty-impact-dashboard';
