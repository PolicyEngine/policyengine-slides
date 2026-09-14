import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';
import { DASHBOARD_DISPLAY_URL } from '../dashboardUrl';

/** No-network fallback for the live demo: a completed statewide run
 * (New York, combined federal-state package: American Family Act, Tax Cuts
 * for Workers Act, larger Empire State Child Credit, 50% state EITC match,
 * dependent exemption ended) captured 9/14 on the final build. The same
 * report is cached at ?r=19, so it also opens instantly live if the iframe
 * misbehaves. Local layout instead of the shared ScreenshotSlide: the
 * capture is taller than 16:9, so it gets a height cap and vertical
 * centering to fit 720p without spilling past the footer. */
export default function DashboardScreenshotSlide() {
  return (
    <Slide center>
      <SlideHeader>
        <div className="flex items-baseline justify-between">
          <SlideTitle>A finished statewide run</SlideTitle>
          <span className="font-mono text-lg text-pe-teal">
            {DASHBOARD_DISPLAY_URL}
          </span>
        </div>
      </SlideHeader>
      <div className="mt-4 flex flex-col items-center">
        <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-lg">
          <Image
            src="/screenshots/cpid-webinar-2026/dashboard-results.png"
            alt="Statewide results: New York, combined federal-state package - child poverty down 44.0%, 344,288 children lifted, $11.30B annual cost"
            width={1600}
            height={970}
            className="w-auto max-h-[460px]"
          />
        </div>
        <p className="mt-3 text-base text-gray-600 text-center max-w-5xl">
          New York, 2026, a combined federal-state package: child poverty
          falls 44%, lifting 344,288 children, at $11.3B a year across both
          levels of government.
        </p>
      </div>
    </Slide>
  );
}
