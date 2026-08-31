import Image from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const GROUP_FORECASTS = [
  { group: 'Economists', unconditional: '2.5%', rapid: '3.3%' },
  { group: 'AI experts', unconditional: '2.5%', rapid: '3.7%' },
  { group: 'Superforecasters', unconditional: '2.5%', rapid: '3.7%' },
];

export default function ForecastUncertaintySlide() {
  return (
    <Slide>
      <div className="flex h-full flex-col">
        <SlideHeader>
          <SlideTitle>Condition on rapid AI, and the range opens up</SlideTitle>
          <p className="mt-2 text-xl text-gray-600">
            Unconditional expert medians cluster at 2.5%; rapid-capability
            scenarios move them to 3.3–3.7% by 2030.
          </p>
        </SlideHeader>

        <div className="grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_390px] gap-8">
          <div className="content-card min-h-0 overflow-hidden border border-gray-200 bg-white">
            <Image
              src="/images/iariw-2026/forecast-disagreement.png"
              alt="Professional forecaster consensus beside published AI-era growth estimates spanning 0.07 to 30 percentage points per year"
              width={3840}
              height={2160}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          <div className="flex min-h-0 flex-col justify-center">
            <div>
              <p className="slide-tag">2030 real GDP growth</p>
              <p className="mt-2 text-sm text-gray-500">
                Unconditional → rapid-capability scenario
              </p>
            </div>

            <div className="mt-4 border-y border-gray-200">
              {GROUP_FORECASTS.map((forecast, index) => (
                <div
                  key={forecast.group}
                  className={`grid grid-cols-[1fr_auto] items-baseline gap-4 py-3 ${
                    index > 0 ? 'border-t border-gray-200' : ''
                  }`}
                >
                  <p className="text-base font-medium text-gray-800">
                    {forecast.group}
                  </p>
                  <p className="font-display text-2xl font-bold tracking-tight text-pe-teal">
                    {forecast.unconditional}{' '}
                    <span className="font-normal text-gray-400">→</span>{' '}
                    {forecast.rapid}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-base leading-snug text-gray-700">
              Economists assigned a <span className="font-semibold">14%</span>{' '}
              mean probability to the rapid scenario. In it, their 2030
              median labor-force participation falls{' '}
              <span className="font-semibold">61.0% &rarr; 59.3%</span>, while
              the top-10% wealth share rises{' '}
              <span className="font-semibold">73.2% &rarr; 75.0%</span>.
            </p>

            <p className="mt-4 border-l-4 border-pe-teal pl-4 text-sm leading-snug text-gray-600">
              The scenarios describe AI capability progress, not adoption.
            </p>
          </div>
        </div>

        <p className="mt-3 text-sm leading-snug text-gray-500">
          Karger et al.; Forecasting Research Institute; Chicago Fed WP
          2026-07. Yale Budget Lab modeled selected survey inputs; it did not
          field the survey. Chart also draws on Philadelphia Fed SPF and the
          cited AI-era estimates.
        </p>
      </div>
    </Slide>
  );
}
