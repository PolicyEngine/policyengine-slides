import Image from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const FORECAST_METRICS = [
  {
    value: '2.1%',
    label: 'Median annual real GDP growth over the next decade',
  },
  {
    value: '1.8–2.5%',
    label: 'Full range in 2026Q1 (n=25)',
  },
  {
    value: '0.2pp',
    label: 'Interquartile range',
  },
];

export default function BaselineForecastSlide() {
  return (
    <Slide>
      <div className="flex h-full flex-col">
        <SlideHeader>
          <SlideTitle>
            Professional forecasters do not expect the baseline to move
          </SlideTitle>
          <p className="mt-2 text-xl text-gray-600">
            Their current 10-year outlook still centers on 2.1% annual real
            GDP growth.
          </p>
        </SlideHeader>

        <div className="grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_320px] items-stretch gap-8">
          <div className="content-card min-h-0 overflow-hidden border border-gray-200 bg-white">
            <Image
              src="/images/iariw-2026/forecast-professional-baseline.png"
              alt="Professional forecasters' 10-year real GDP growth forecasts from 1992 to 2026, with a 2026Q1 median of 2.1 percent"
              width={2400}
              height={1345}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          <div className="flex flex-col justify-center border-y border-gray-200 py-2">
            {FORECAST_METRICS.map((metric, index) => (
              <div
                key={metric.value}
                className={`py-5 ${index > 0 ? 'border-t border-gray-200' : ''}`}
              >
                <p className="font-display text-4xl font-bold tracking-tight text-pe-teal">
                  {metric.value}
                </p>
                <p className="mt-1 text-base leading-snug text-gray-700">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-baseline justify-between gap-8">
          <p className="text-lg leading-snug text-gray-700">
            The consensus has returned to 2.1%, while disagreement has
            narrowed relative to the 1990s.
          </p>
          <p className="shrink-0 text-sm text-gray-500">
            Philadelphia Fed SPF, RGDP10 individual responses, 2026Q1
          </p>
        </div>
      </div>
    </Slide>
  );
}
