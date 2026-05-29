import Slide from '@/components/core/Slide';
import Image from '@/components/core/BasePathImage';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function PolicyAnalysisSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>AI summarizing the policy impact itself</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-[0.95fr,1.05fr] gap-8 mt-4">
        <div className="space-y-4">
          <div className="content-card p-5">
            <div className="slide-tag mb-2">What we built</div>
            <p className="text-base text-gray-700 leading-relaxed">
              The user models a reform; the microsimulation produces the
              numbers; the model passes structured outputs &mdash; budget
              impact, distributional tables, poverty effects &mdash; to an
              LLM with a tightly scoped prompt. Out comes a first-pass
              policy brief with narrative, framing, and embedded charts.
            </p>
          </div>

          <div className="content-card p-5">
            <div className="slide-tag mb-2">Why it works</div>
            <p className="text-base text-gray-700 leading-relaxed">
              The numbers are already structured and quantitative. The
              LLM&apos;s job is{' '}
              <span className="font-semibold">explanation, not computation</span>.
              Pass clean data, get narrative back &mdash; the sweet spot for
              LLMs in a quantitative workflow.
            </p>
          </div>

          <div className="accent-block">
            <p className="text-base text-gray-700 leading-relaxed">
              Deterministic software computes. The LLM explains. Each does
              what it&apos;s good at.
            </p>
          </div>
        </div>

        <div className="content-card overflow-hidden rounded-xl border border-gray-200 bg-white">
          <Image
            src="/screenshots/policy-analysis-report.png"
            alt="AI-generated policy analysis report in PolicyEngine"
            width={1600}
            height={915}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </Slide>
  );
}
