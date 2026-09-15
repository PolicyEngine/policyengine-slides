import LiveAppSlide from '@/slideshows/iariw-2026/slides/LiveAppSlide';
import { DASHBOARD_IFRAME_URL, DASHBOARD_DISPLAY_URL } from '../dashboardUrl';

/** David's live demo: one cached report (?r=19, the NY federal-state
 * package) walked end to end. URL constants live in ../dashboardUrl.ts. */
export default function DashboardLiveSlide() {
  return (
    <LiveAppSlide title="Live demo" url={DASHBOARD_IFRAME_URL} displayUrl={DASHBOARD_DISPLAY_URL} sideWidth="0.5fr">
      <div className="content-card px-5 py-4">
        <p className="text-base font-semibold text-gray-800 mb-2">Demo path (David)</p>
        <ol className="list-decimal pl-5 space-y-1.5 text-base text-gray-700">
          <li>Open the New York package report</li>
          <li>The reform, provision by provision</li>
          <li>Household view: one family across the earnings range</li>
          <li>Statewide view: poverty, budget, distribution, districts</li>
          <li>Copy the shareable link</li>
        </ol>
      </div>
      <div className="content-card px-5 py-4">
        <p className="text-base text-gray-500">
          The report is cached — it opens instantly at ?r=19.
        </p>
      </div>
    </LiveAppSlide>
  );
}
