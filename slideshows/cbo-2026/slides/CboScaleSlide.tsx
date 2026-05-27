import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function CboScaleSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The scale of what CBO does</SlideTitle>
      </SlideHeader>

      <div className="mt-12 grid grid-cols-[0.9fr_1.1fr] gap-10 items-center">
        <div className="space-y-6">
          <div className="content-card p-8 text-center">
            <div className="stat-number text-5xl leading-tight text-pe-teal">
              Tens of thousands
            </div>
            <div className="text-xl font-semibold text-gray-800 mt-3">
              projection and estimate cells annually
            </div>
            <div className="text-base text-gray-500 mt-2 leading-snug">
              Baseline series-years + bill-year-category estimate cells
            </div>
          </div>

          <div className="content-card p-8 text-center">
            <div className="stat-number text-7xl text-pe-teal">~1,000</div>
            <div className="text-xl font-semibold text-gray-800 mt-3">
              public cost estimates annually
            </div>
            <div className="text-base text-gray-500 mt-2 leading-snug">
              600–800 non-suspension estimates + about 400 suspension estimates
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-2xl text-gray-800 leading-relaxed">
            Each cell reflects extraordinary craft: behavioral models,
            microsimulation, private data, decades of institutional knowledge,
            and layered quality control.
          </p>

          <p className="text-xl text-gray-600 leading-relaxed">
            Together, they are some of the most carefully produced quantitative
            information in the federal government.
          </p>
        </div>
      </div>
    </Slide>
  );
}
