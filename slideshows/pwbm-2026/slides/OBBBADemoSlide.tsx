import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const points = [
  'Each dot is a real CPS-ASEC household run through the full tax-benefit stack.',
  'Hover or filter to inspect gains and losses by income, state, or household type.',
  'The same dataset underwrites aggregate, distributional, and district-level outputs.',
];

export default function OBBBADemoSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Data demo: OBBBA household-by-household</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          One microdata pass powers aggregate, distributional, and
          household-level views of the One Big Beautiful Bill Act.
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
              Household-level outputs are the most direct test of data
              fidelity: a weighted average can absorb errors that a single
              household lays bare.
            </p>
          </div>
        </div>

        <div className="content-card overflow-hidden border border-gray-200 flex items-center justify-center bg-gray-50">
          <iframe
            src="https://www.policyengine.org/us/obbba-household-by-household"
            className="w-full h-full"
            title="OBBBA household-by-household"
          />
        </div>
      </div>
    </Slide>
  );
}
