import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const points = [
  'Traces net income as earnings rise for one household.',
  'Surfaces benefit cliffs and phase-out notches from the full rules graph.',
  'Uses the same computation tree the main app cites for each line.',
];

export default function CliffWatchDemoSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Rules demo: Cliff-Watch</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Mapping marginal-rate cliffs across tax-benefit interactions.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[0.9fr_1.1fr] gap-8 mt-6 h-[calc(100vh-300px)]">
        <div className="flex flex-col gap-5">
          <div className="content-card p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">
              What it shows
            </h3>
            <div className="space-y-3 text-lg text-gray-700">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-pe-teal flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="accent-block">
            <p className="text-lg text-gray-700 leading-relaxed">
              Cliff-Watch makes rules depth visible as a product: the
              marginal-rate surface is the same engine running underneath
              aggregate analyses.
            </p>
          </div>
        </div>

        <div className="content-card overflow-hidden border border-gray-200 flex items-center justify-center bg-gray-50">
          <iframe
            src="https://www.policyengine.org/us/cliff-watch"
            className="w-full h-full"
            title="Cliff-Watch"
          />
        </div>
      </div>
    </Slide>
  );
}
