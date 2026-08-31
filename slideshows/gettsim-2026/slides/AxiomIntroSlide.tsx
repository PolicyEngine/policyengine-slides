import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const requirements = [
  {
    title: 'Accuracy at every step',
    detail:
      'Every parameter, formula, citation, and test produced along the way — not only the final answer.',
  },
  {
    title: 'Cross-validation against other sources',
    detail:
      'TAXSIM, agency tables, peer modelers — multiple ground truths beyond our own.',
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

const verbs = [
  {
    verb: 'Encode',
    detail:
      'Statute to RuleSpec. Every value cites its authority; every clause carries its effective dates.',
  },
  {
    verb: 'Verify',
    detail:
      'A deterministic gauntlet, then oracles that cross-check against external engines and datasets — PolicyEngine, TAXSIM, EUROMOD, SNAP quality-control data — so the model that wrote the rules never grades its own work.',
  },
  {
    verb: 'Publish',
    detail:
      'Source document, encoding, validation record, and computation graph in one place.',
  },
];

export default function AxiomIntroSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>
          The Axiom Foundation: encode, verify, publish
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
            The world&apos;s rules, encoded
          </p>

          <div className="flex flex-col gap-4">
            {verbs.map((v, i) => (
              <div
                key={v.verb}
                className={
                  i > 0 ? 'pt-4 border-t border-white/15' : undefined
                }
              >
                <h3 className="text-lg font-bold text-pe-teal mb-1">
                  {v.verb}
                </h3>
                <p className="text-base leading-snug text-white/90">
                  {v.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-white/15">
            <p className="text-sm font-mono text-white/60">axiom.org</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
