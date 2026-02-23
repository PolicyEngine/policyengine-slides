import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideContent from '@/components/content/SlideContent';

export default function DemoRoadmapSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>What we'll show you</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-6">
            <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg">
              <span className="text-3xl font-bold text-pe-teal">1</span>
              <div>
                <p className="text-2xl font-semibold">ACA calculator</p>
                <p className="text-lg text-gray-600">Health coverage decisions — Daphne</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg">
              <span className="text-3xl font-bold text-pe-teal">2</span>
              <div>
                <p className="text-2xl font-semibold">DC household</p>
                <p className="text-lg text-gray-600">Full tax & benefit analysis for a family</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg">
              <span className="text-3xl font-bold text-pe-teal">3</span>
              <div>
                <p className="text-2xl font-semibold">Economy-wide reform analysis</p>
                <p className="text-lg text-gray-600">Budget, poverty, and inequality impacts</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 bg-teal-50 rounded-lg border-2 border-pe-teal">
              <span className="text-3xl font-bold text-pe-teal">4</span>
              <div>
                <p className="text-2xl font-semibold">OBBBA deep dive</p>
                <p className="text-lg text-gray-600">20,000 households, one scroll</p>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
