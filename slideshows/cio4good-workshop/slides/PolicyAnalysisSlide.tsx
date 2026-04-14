import Slide from '@/components/core/Slide';
import Image from '@/components/core/BasePathImage';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function PolicyAnalysisSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>First production feature: AI-generated policy analysis</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Shipped one month after GPT-4 launched &mdash; March 2023
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[0.95fr,1.05fr] gap-8 mt-4">
        <div className="space-y-5">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">What we built</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              The user models a reform. The system passes the microsimulation
              results &mdash; budget impact, distributional tables, poverty
              metrics &mdash; to GPT-4 with a structured prompt. GPT-4 generates
              a first-pass research report with narrative and embedded charts.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">Why it worked</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              The model output was already structured and quantitative. The LLM&apos;s
              job was explanation, not computation. That&apos;s the sweet spot for
              early LLM features: <strong>pass clean data, get narrative back</strong>.
            </p>
          </div>

          <div className="rounded-xl p-5" style={{ background: 'linear-gradient(180deg, #f5fffc 0%, #ebfffb 100%)' }}>
            <p className="text-base text-gray-700 leading-relaxed">
              <strong className="text-gray-800">The pattern:</strong> deterministic software
              computes the numbers. The LLM explains them. Each does what it&apos;s good at.
            </p>
          </div>
        </div>

        <div className="content-card overflow-hidden rounded-xl border border-gray-200">
          <Image
            src="/screenshots/policy-analysis-report.png"
            alt="AI-generated policy analysis report in PolicyEngine"
            width={1600}
            height={915}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>
      </div>
    </Slide>
  );
}
