import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const dimensions = [
  { label: 'Bills', value: '~10k' },
  { label: 'Public cells', value: '1m+' },
  { label: 'Years', value: '10' },
  { label: 'Policy states', value: 'Many' },
];

export default function CrossScaleSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What if you cross them?</SlideTitle>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-[0.9fr_1.1fr] gap-10 items-center">
        <div className="content-card p-10 text-center">
          <div className="stat-number text-7xl text-pe-teal">&gt;100b</div>
          <p className="text-2xl font-semibold text-gray-800 mt-4">
            bill-statistic-year cells
          </p>
          <p className="text-base text-gray-500 leading-snug mt-4">
            10k bills x 1m public statistical cells x 10 years.
          </p>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-4 gap-3">
            {dimensions.map((dimension) => (
              <div key={dimension.label} className="content-card p-4 text-center">
                <div className="font-mono text-3xl font-bold text-pe-teal">
                  {dimension.value}
                </div>
                <div className="text-xs uppercase tracking-wide text-gray-500 mt-1">
                  {dimension.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-2xl text-gray-800 leading-relaxed">
            The hard question is not whether we can write down more numbers. It
            is which cells deserve estimates, which deserve uncertainty bands,
            and which should be marked out of domain.
          </p>

          <div className="accent-block">
            <p className="text-xl text-gray-800 leading-relaxed">
              This is where AI changes the shape of the work: routing, checking,
              backtesting, and surfacing the cells where human judgment matters.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
