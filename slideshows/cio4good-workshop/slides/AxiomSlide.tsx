import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function AxiomSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>When the ambition outgrows the org</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8 mt-6">
        <div className="flex flex-col gap-5">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">The realization</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              AI encoding worked so well that we asked: what if we did this for{' '}
              <em>every</em> policy? Not just tax and benefits — every rule that
              affects how society works.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mt-3">
              That ambition didn&apos;t fit inside a policy research nonprofit.
              It needed its own mission, its own scope, its own leadership.
            </p>
          </div>

          <div
            className="rounded-xl p-6 text-white"
            style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-3">
              Axiom Foundation
            </p>
            <div className="space-y-3">
              {[
                'Encode the world\'s rules as machine-readable, open-source code',
                'Infrastructure that many organizations consume — not just PolicyEngine',
                'AI does the encoding; deterministic software does the computation',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[var(--pe-teal)] font-bold mt-0.5 flex-shrink-0">&#8594;</span>
                  <p className="text-base text-white/85 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-xl p-6" style={{ background: 'linear-gradient(180deg, #f5fffc 0%, #ebfffb 100%)' }}>
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">The CIO lesson</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              AI didn&apos;t just make us faster at our existing mission. It expanded
              what we thought was possible, which forced us to rethink our entire
              organizational structure.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mt-3">
              If AI is working well for you, expect this: the scope of what
              you can accomplish will outgrow your current org design. That&apos;s
              a feature, not a bug.
            </p>
          </div>

          <div className="pl-5 border-l-4 border-[var(--pe-teal)]">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-gray-800">Have you updated your ambitions</strong> to
              match what&apos;s possible? That question from the opening isn&apos;t
              hypothetical — we had to answer it, and it changed everything.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
