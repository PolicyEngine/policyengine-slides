import LiveAppSlide from '@/slideshows/iariw-2026/slides/LiveAppSlide';
import { DASHBOARD_IFRAME_URL, DASHBOARD_DISPLAY_URL } from '../dashboardUrl';

/** David's live demo: one cached report (?r=19, the NY federal-state
 * package) walked end to end. URL constants live in ../dashboardUrl.ts. */
export default function DashboardLiveSlide() {
  return (
    <LiveAppSlide title="Live demo" url={DASHBOARD_IFRAME_URL} displayUrl={DASHBOARD_DISPLAY_URL} sideWidth="0.5fr">
      <div className="content-card px-5 py-4">
        <p className="text-base text-gray-500">
          The report is cached — it opens instantly at ?r=19.
        </p>
      </div>
    </LiveAppSlide>
  );
}
