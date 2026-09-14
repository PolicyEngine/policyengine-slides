/** Single source for the dashboard URL across the deck (live-demo iframe,
 * screenshot fallback, end slide). Swap BOTH constants the morning of 9/15
 * once the policyengine.org mount is merged (dashboard PR #116 + app-v2
 * PR #1205) — the canonical URL becomes
 * policyengine.org/us/child-poverty-impact-dashboard. One edit keeps every
 * slide in sync. */
export const DASHBOARD_URL = 'https://child-poverty-impact-dashboard-sigma.vercel.app';
export const DASHBOARD_DISPLAY_URL = 'child-poverty-impact-dashboard-sigma.vercel.app';
