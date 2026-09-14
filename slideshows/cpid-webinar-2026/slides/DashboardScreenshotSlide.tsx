import ScreenshotSlide from '@/slideshows/iariw-2026/slides/ScreenshotSlide';
import { DASHBOARD_DISPLAY_URL } from '../dashboardUrl';

/** No-network fallback for the live demo: a completed statewide run
 * (New York, combined federal-state package: American Family Act, Tax Cuts
 * for Workers Act, larger Empire State Child Credit, 50% state EITC match,
 * dependent exemption ended) captured 9/14 on the final build. The same
 * report is cached at ?r=19, so it also opens instantly live if the iframe
 * misbehaves. */
export default function DashboardScreenshotSlide() {
  return (
    <ScreenshotSlide
      title="A finished statewide run"
      src="/screenshots/cpid-webinar-2026/dashboard-results.png"
      alt="Statewide results: New York, combined federal-state package - child poverty down 44.0%, 344,288 children lifted, \$11.30B annual cost"
      caption="New York, 2026, a combined federal-state package: child poverty falls 44%, lifting 344,288 children, at \$11.3B a year across both levels of government."
      url={DASHBOARD_DISPLAY_URL}
    />
  );
}
