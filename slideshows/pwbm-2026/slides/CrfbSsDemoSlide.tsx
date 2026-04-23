import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const points = [
  'Scores Social Security taxation-of-benefits reforms on the same household stack.',
  'Elasticity toggles let users compare static and behavioral cost and distributional estimates.',
  'Published for CRFB with the full reform definition and data pinned to the release bundle.',
];

export default function CrfbSsDemoSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Theory demo: CRFB Social Security TOB</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Built for the Committee for a Responsible Federal Budget — elasticity
          as an optional layer on top of the rules engine.
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
              The same engine powers CRFB-authored analyses, the PolicyEngine
              web app, and third-party benefit tools — without forking the
              rules.
            </p>
          </div>
        </div>

        <div className="content-card overflow-hidden border border-gray-200 flex items-center justify-center bg-gray-50">
          <iframe
            src="https://www.policyengine.org/us/taxation-of-benefits-reforms"
            className="w-full h-full"
            title="CRFB Social Security TOB impacts"
          />
        </div>
      </div>
    </Slide>
  );
}
