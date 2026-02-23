import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideContent from '@/components/content/SlideContent';

export default function StateMapDemoSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Demo: State EITC/CTC tools</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p className="font-semibold text-pe-dark">
              Interactive state-level tax credit analysis tools
            </p>

            <div className="space-y-4 ml-6">
              <div>
                <p className="font-semibold text-pe-teal">State EITC/CTC map</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Compare state-level earned income and child tax credits</li>
                  <li>Visualize credit generosity across all 50 states</li>
                  <li>Filter by program type and eligibility criteria</li>
                </ul>
              </div>

              <div className="pt-2">
                <p className="font-semibold text-pe-teal">Rhode Island CTC calculator</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Interactive child tax credit calculator</li>
                  <li>Model household-specific impacts</li>
                  <li>Explore reform scenarios</li>
                </ul>
              </div>
            </div>

            <p className="text-pe-teal font-semibold pt-4">
              Live demo →
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
