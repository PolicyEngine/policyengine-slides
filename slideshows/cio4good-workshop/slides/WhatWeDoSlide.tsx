import Slide from '@/components/core/Slide';
import Image from '@/components/core/BasePathImage';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function WhatWeDoSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>PolicyEngine: open-source tax and benefit simulation</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-[1.1fr,0.9fr] gap-8 mt-4">
        <div className="space-y-5">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">What it does</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Anyone can model &ldquo;what if we expanded the child tax credit?&rdquo; and see
              household-level impacts in seconds &mdash; budget cost, poverty effects,
              who wins and loses. No coding required.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">How we build it</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Hundreds of tax and benefit rules encoded as open-source Python,
              with YAML parameters citing specific statutes and regulations.
              Each rule is versioned, tested, and traceable back to the law.
            </p>
          </div>

          <div className="rounded-xl p-5" style={{ background: 'linear-gradient(180deg, #f5fffc 0%, #ebfffb 100%)' }}>
            <p className="text-base text-gray-700 leading-relaxed">
              <strong className="text-gray-800">The coding challenge:</strong> every state has
              different rules, different eligibility thresholds, different formulas.
              Encoding them is labor-intensive, detail-sensitive work &mdash; exactly
              the kind of work where AI might help.
            </p>
          </div>
        </div>

        <div className="content-card overflow-hidden">
          <Image
            src="/screenshots/pe-winners-losers.png"
            alt="PolicyEngine distributional analysis showing winners and losers by income decile"
            width={1600}
            height={1200}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>
      </div>
    </Slide>
  );
}
