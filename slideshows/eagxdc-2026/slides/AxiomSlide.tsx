import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const axiomPoints = [
  'Encode the world\'s rules as machine-readable, open-source code',
  'Infrastructure many organizations consume — analysis, delivery, AI',
  'AI does the encoding; deterministic software does the computation',
];

const usesByConsumer = [
  {
    label: 'Analysis',
    body: 'PolicyEngine and other modeling shops calling a single canonical encoding instead of re-implementing each statute.',
  },
  {
    label: 'Government delivery',
    body: 'Benefit eligibility engines, tax administration, and compliance systems running on machine-readable rules — the long-term vision.',
  },
  {
    label: 'Commercial applications',
    body: 'Tax software, fintech, payroll, and healthcare admin building on the open substrate. Open source, but consumable by for-profit firms.',
  },
  {
    label: 'AI grounding',
    body: 'Any agent reasoning about benefits, taxes, immigration, or healthcare can call the same canonical encoding the analysts use.',
  },
];

export default function AxiomSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Axiom Foundation: rules as open public infrastructure</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Open-source, nonprofit-built, consumed by everyone — including
          governments and for-profit firms.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-7 mt-5">
        <div
          className="rounded-xl p-7 text-white flex flex-col"
          style={{
            background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)',
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-pe-teal mb-4">
            Axiom Foundation
          </p>
          <div className="space-y-3">
            {axiomPoints.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-pe-teal font-bold mt-0.5 flex-shrink-0">
                  →
                </span>
                <p className="text-base text-white/90 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-5 border-t border-white/15">
            <p className="text-sm font-mono text-white/60">
              axiom-foundation.org
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {usesByConsumer.map((u) => (
            <div key={u.label} className="content-card p-4">
              <div className="text-xs uppercase tracking-[0.16em] font-bold text-pe-teal mb-1">
                {u.label}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{u.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="accent-block mt-6 max-w-5xl">
        <p className="text-lg text-gray-700 leading-relaxed">
          PolicyEngine is one consumer of this substrate, focused on analysis
          and individual understanding. Axiom expands the surface area: any
          system that needs to act on the law.
        </p>
      </div>
    </Slide>
  );
}
