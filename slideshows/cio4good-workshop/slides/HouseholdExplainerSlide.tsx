import Slide from '@/components/core/Slide';
import Image from '@/components/core/BasePathImage';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function HouseholdExplainerSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Going deeper: explaining eligibility to real users</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Shipped 2024 &mdash; same pattern, more context
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[0.95fr,1.05fr] gap-8 mt-4">
        <div className="space-y-5">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">The problem</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              A user sees &ldquo;your household would receive $4,200 in SNAP
              benefits.&rdquo; The natural next question: <em>why?</em> What rules
              apply? What would change the result?
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">What we built</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Pass the intermediate calculations &mdash; income tests, deductions,
              phase-outs &mdash; to an LLM with enough context to walk through the
              math step by step, citing the statute along the way.
            </p>
          </div>

          <div
            className="rounded-xl p-5 text-white"
            style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}
          >
            <p className="text-base text-white/85 leading-relaxed">
              <strong className="text-white">Same pattern as the analysis reports:</strong>{' '}
              deterministic software does the computation, the LLM explains it.
              But now with richer context and a different audience &mdash; families,
              not policy analysts.
            </p>
          </div>
        </div>

        <div className="content-card overflow-hidden rounded-xl border border-gray-200">
          <Image
            src="/screenshots/household-ai-explainer.gif"
            alt="AI-powered household benefit explainer"
            width={1000}
            height={548}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>
      </div>
    </Slide>
  );
}
