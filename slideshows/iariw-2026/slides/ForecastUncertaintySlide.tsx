import Image from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export function ForecastSpfSlide() {
  return (
    <Slide>
      <div className="flex flex-col h-full">
        <SlideHeader>
          <SlideTitle>And if the baseline itself moves?</SlideTitle>
          <p className="text-xl text-gray-600 mt-2">
            Professional forecasters don&apos;t think it will.
          </p>
        </SlideHeader>

        <div className="flex-1 min-h-0 content-card overflow-hidden border border-gray-200 bg-white">
          <Image
            src="/images/iariw-2026/forecast-spf-only.png"
            alt="SPF 10-year US real GDP growth forecasts 1992-2026: the interquartile range narrows to 0.2pp, half its 1990s level"
            width={2400}
            height={2160}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        <div className="mt-4 flex items-baseline justify-between gap-8">
          <p className="text-lg text-gray-700 leading-snug">
            The Survey of Professional Forecasters disagrees less than ever
            about long-run growth: the 10-year interquartile range is down to
            0.2pp, half its 1990s level.
          </p>
          <p className="text-sm text-gray-500 whitespace-nowrap">
            Philadelphia Fed SPF
          </p>
        </div>
      </div>
    </Slide>
  );
}

export function ForecastAiRangeSlide() {
  return (
    <Slide>
      <div className="flex flex-col h-full">
        <SlideHeader>
          <SlideTitle>Asked about AI specifically, the range explodes</SlideTitle>
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

        <div className="mt-4 flex items-baseline justify-between gap-8">
          <p className="text-lg text-gray-700 leading-snug">
            Published estimates of AI&apos;s growth effect span +0.07pp to
            +30pp of annual growth &mdash; a range three orders of magnitude
            wider than the baseline disagreement. The expert survey behind the
            Budget Lab&apos;s fiscal scenarios shows the same shape: median
            economists near trend unconditionally, materially higher
            conditional on rapid AI progress.
          </p>
          <p className="text-sm text-gray-500 whitespace-nowrap">
            Philadelphia Fed SPF; AI Frontiers; Karger et al. (2026)
          </p>
        </div>

        <p className="mt-3 text-xl text-pe-teal font-medium leading-snug">
          If not just GDP but unemployment, wage inequality, and the capital
          income share move, policymakers will need even better tools &mdash;
          and AI can help, if we arm it in turn. After the break: what those
          tools can improve in policymaking.
        </p>
      </div>
    </Slide>
  );
}
