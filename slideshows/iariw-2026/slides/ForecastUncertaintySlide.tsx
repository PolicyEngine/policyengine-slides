import Image from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function ForecastUncertaintySlide() {
  return (
    <Slide>
      <div className="flex flex-col h-full">
        <SlideHeader>
          <SlideTitle>
            Forecasters agree with each other &mdash; and the AI literature
            does not
          </SlideTitle>
        </SlideHeader>

        <div className="flex-1 min-h-0 content-card overflow-hidden border border-gray-200 bg-white">
          <Image
            src="/images/iariw-2026/forecast-disagreement.png"
            alt="Two-panel chart: SPF 10-year US real GDP growth forecasts 1992-2026 narrowing to a 0.2pp interquartile range, beside published AI-era growth-boost estimates spanning +0.07pp to +30pp per year on a log scale"
            width={3840}
            height={2160}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-8">
          <p className="text-lg text-gray-700 leading-snug">
            The professional 10-year consensus has never been tighter (IQR
            0.2pp, half its 1990s level), while published AI-era growth
            estimates span +0.07pp to +30pp per year.
          </p>
          <p className="text-sm text-gray-500 whitespace-nowrap">
            Philadelphia Fed SPF; AI Frontiers compilation
          </p>
        </div>

        <p className="mt-4 text-xl text-pe-teal font-medium leading-snug">
          When credible forecasts of the era span orders of magnitude, evidence
          infrastructure&apos;s job shifts from defending one number to letting
          a ministry recompute the present.
        </p>
      </div>
    </Slide>
  );
}
