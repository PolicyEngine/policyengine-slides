import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const buildPieces = [
  {
    n: '1',
    title: 'Rules',
    detail:
      'Encoded policy. Federal and state tax-and-benefit law as machine-readable parameters and tested formulas.',
  },
  {
    n: '2',
    title: 'Data',
    detail:
      'Calibrated microdata. Multiple surveys fused with machine learning; reweighted to match administrative totals.',
  },
  {
    n: '3',
    title: 'Theory',
    detail:
      'Behavioral responses. Labor supply, capital gains realization, take-up — adjustable, with explicit elasticity ranges.',
  },
];

export default function ProjectionApparatusSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The apparatus, in four pieces</SlideTitle>
      </SlideHeader>

      <div className="mt-8 space-y-6">
        {/* Build the model (3 pieces) */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
            1&ndash;3 &middot; Build the model
          </p>
          <div className="grid grid-cols-3 gap-5">
            {buildPieces.map((p) => (
              <div key={p.title} className="content-card p-6">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-3xl font-bold text-pe-teal leading-none">
                    {p.n}
                  </span>
                  <h3 className="text-xl font-bold text-pe-dark">{p.title}</h3>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  {p.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Analysis (the 4th) */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
            4 &middot; Use the model
          </p>
          <div
            className="content-card p-6"
            style={{ borderLeftColor: 'var(--pe-amber)' }}
          >
            <div className="grid grid-cols-[60px_1fr] gap-4 items-start">
              <span className="font-mono text-3xl font-bold leading-none" style={{ color: 'var(--pe-amber)' }}>
                4
              </span>
              <div>
                <h3 className="text-xl font-bold text-pe-dark mb-1">
                  Analysis
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Interpretation and context. What the numbers mean,
                  what&apos;s outside the model&apos;s domain, and the
                  judgment that turns results into useful counsel.
                  PolicyEngine often stops at the model results; CBO adds
                  much more context. Both are valid &mdash; and both can
                  benefit from AI.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 italic text-center max-w-4xl mx-auto pt-1">
          The rest of the talk walks through each piece &mdash; what we have,
          how AI is changing it, and where it&apos;s heading.
        </p>
      </div>
    </Slide>
  );
}
