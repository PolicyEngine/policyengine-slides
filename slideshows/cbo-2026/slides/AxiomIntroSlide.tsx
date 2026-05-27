import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const requirements = [
  {
    title: 'Accuracy at every step',
    detail:
      'Not just the final answer — every parameter, formula, citation, and test produced along the way.',
  },
  {
    title: 'Cross-validation against other sources',
    detail:
      'TAXSIM, agency tables, peer modelers — multiple ground truths, not just our own.',
  },
  {
    title: 'Deterministic quality gates',
    detail:
      'Tests, lint, type checks, structural rules that the agents must pass — not opinions about quality.',
  },
  {
    title: 'Human review at the right boundary',
    detail:
      'Not every prompt. The final PR, the assumptions, the edge cases worth a second pair of eyes.',
  },
  {
    title: 'A canvas wide enough for the work',
    detail:
      'A queue that can hold thousands of policies and run them in parallel without losing context.',
  },
];

export default function AxiomIntroSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>
          What if AI could encode policy autonomously? What would we need?
        </SlideTitle>
      </SlideHeader>

      <div className="mt-6 grid grid-cols-[1.1fr_0.9fr] gap-8 items-start">
        <div className="space-y-3">
          {requirements.map((r, i) => (
            <div
              key={r.title}
              className="content-card p-4 grid grid-cols-[40px_1fr] gap-3 items-start"
            >
              <div className="font-mono text-2xl font-bold text-pe-teal leading-none pt-1">
                {i + 1}
              </div>
              <div>
                <h3 className="text-base font-bold text-pe-dark mb-1">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-700 leading-snug">{r.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl p-7 text-white flex flex-col gap-5"
          style={{
            background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)',
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-pe-teal">
            Six months ago, we started exploring this
          </p>

          <p className="text-xl leading-relaxed font-light text-white">
            A new paradigm for encoded law:{' '}
            <span className="font-medium text-pe-teal">
              start with the statute itself
            </span>{' '}
            &mdash; not a stylized version with just enough detail to do
            microsimulation.
          </p>

          <p className="text-lg leading-relaxed text-white/90">
            Every section, every cross-reference, every definition &mdash;
            encoded faithfully, citation by citation. A foundation any
            downstream system can build on.
          </p>

          <div className="mt-auto pt-4 border-t border-white/15">
            <p className="text-sm font-mono text-white/60">
              axiom-foundation.org
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
