import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideContent from '@/components/content/SlideContent';

export default function ACAIntroSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <div className="flex items-center gap-4">
            <span className="slide-tag">Demo 1</span>
            <SlideTitle>Open enrollment is happening now</SlideTitle>
          </div>
        </SlideHeader>

        <SlideContent size="md">
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-pe-teal">Jan 15, 2026</p>
                <p className="text-xl text-gray-600 mt-2">ACA open enrollment deadline</p>
              </div>

              <div className="space-y-4">
                <p className="text-xl">Key questions for families:</p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-pe-teal">•</span>
                    <span>Which metal tier makes sense for my income?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pe-teal">•</span>
                    <span>How much premium subsidy am I eligible for?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pe-teal">•</span>
                    <span>Should I contribute more to my HSA?</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-teal-50 rounded-lg border-2 border-pe-teal">
                <p className="text-2xl font-semibold text-pe-dark">PolicyEngine ACA calculator</p>
                <p className="text-lg text-gray-600 mt-3">
                  Helps individuals understand their coverage options and costs based on household income and composition
                </p>
              </div>

              <div className="accent-block">
                <p className="text-pe-dark font-medium text-lg">
                  Daphne will walk us through a real scenario
                </p>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
