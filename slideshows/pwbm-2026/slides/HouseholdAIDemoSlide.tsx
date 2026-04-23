import Slide from '@/components/core/Slide';
import Image from '@/components/core/BasePathImage';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const points = [
  'The deterministic model computes the numbers and intermediate tests.',
  'The LLM answers the natural follow-up question: why did this household qualify?',
  'That keeps the rule engine authoritative while making the result legible.',
];

export default function HouseholdAIDemoSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The calculator-plus-LLM pattern is already live</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Compute with code. Explain with a model.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[0.9fr_1.1fr] gap-8 mt-6 h-[calc(100vh-300px)]">
        <div className="space-y-5">
          <div className="content-card p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">
              Household explainer
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

          <div
            className="rounded-2xl p-6 text-white"
            style={{ background: 'linear-gradient(135deg, #1d4044 0%, #17343a 100%)' }}
          >
            <p className="text-2xl leading-relaxed text-white/90">
              This is the right AI boundary for policy work: let the model explain,
              but not invent the calculation.
            </p>
          </div>
        </div>

        <div className="content-card overflow-hidden rounded-2xl border border-gray-200">
          <Image
            src="/screenshots/household-ai-explainer.gif"
            alt="AI-powered household benefit explainer"
            width={1200}
            height={700}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>
      </div>
    </Slide>
  );
}
