import ScreenshotSlide from '@/slideshows/iariw-2026/slides/ScreenshotSlide';
import { DASHBOARD_DISPLAY_URL } from '../dashboardUrl';

/** No-network fallback for the live demo: a completed statewide run
 * (New York, restore the 2021 expanded CTC) captured 9/11 on the final
 * build. The same report is cached at ?r=15, so it also opens instantly
 * live if the iframe misbehaves. */
export default function DashboardScreenshotSlide() {
  return (
    <ScreenshotSlide
      title="A finished statewide run"
      src="/screenshots/cpid-webinar-2026/dashboard-results.png"
      alt="Statewide results: New York, 2021 expanded CTC restored - child poverty down 20.6%, 161,658 children lifted, \$4.55B annual cost"
      caption="New York, 2026, restoring the 2021 expanded Child Tax Credit: child poverty falls 20.6%, lifting 161,658 children, at \$4.55B a year."
      url={DASHBOARD_DISPLAY_URL}
    />
  );
}
