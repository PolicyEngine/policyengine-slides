import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function CboScaleSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The scale of what CBO does</SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-[0.9fr_1.1fr] gap-10 items-center">
        <div className="space-y-6">
          <div className="content-card p-8 text-center">
            <div className="stat-number text-7xl text-pe-teal">~2,500</div>
            <div className="text-xl font-semibold text-gray-800 mt-3">
              distinct predictions per year
            </div>
            <div className="text-base text-gray-500 mt-2 leading-snug">
              Baseline budget + economic projections + cost estimates
            </div>
          </div>

          <div className="content-card p-8 text-center">
            <div className="stat-number text-7xl text-pe-teal">600–800</div>
            <div className="text-xl font-semibold text-gray-800 mt-3">
              bills scored annually
            </div>
            <div className="text-base text-gray-500 mt-2 leading-snug">
              Out of ~10,000 introduced per Congress
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-2xl text-gray-800 leading-relaxed">
            Each prediction requires extraordinary craft: behavioral models,
            microsimulation, private data, decades of institutional knowledge.
          </p>

          <div className="accent-block">
            <p className="text-xl text-gray-800 leading-relaxed">
              And it represents well under{' '}
              <span className="font-semibold text-pe-teal">0.1%</span> of the
              data points the federal government will actually publish this
              year.
            </p>
          </div>

          <p className="text-base text-gray-500 italic leading-relaxed">
            BLS alone maintains ~2,500 series. Census ACS covers 40,000+
            geographies. The federal statistical system produces millions of
            data points annually.
          </p>
        </div>
      </div>
    </Slide>
  );
}
