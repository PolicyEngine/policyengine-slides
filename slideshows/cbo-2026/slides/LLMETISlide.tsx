import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const SSRN_URL =
  'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5410643';

const findings = [
  {
    label: 'Lab replication',
    detail:
      'Replicating Pfeil et al. (2024) with LLM personas in place of human subjects.',
  },
  {
    label: 'Factorial survey',
    detail:
      'Taxpayer personas crossed with tax shocks to estimate response heterogeneity.',
  },
  {
    label: 'Implied ETI',
    detail:
      'The elasticity recovered from LLM-as-subject experiments is in the range of the empirical literature, with heightened responsiveness suggesting limited recognition of real-world frictions.',
  },
];

export default function LLMETISlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>One level deeper: LLMs as experimental subjects</SlideTitle>
      </SlideHeader>

      <div className="mt-6 grid grid-cols-[1.05fr_0.95fr] gap-8 items-start">
        <div className="space-y-5">
          <p className="text-xl text-gray-800 leading-relaxed">
            Joint work with{' '}
            <span className="font-semibold text-pe-dark">Jason DeBacker</span>:
            instead of asking an LLM what it{' '}
            <em>believes</em> the elasticity of taxable income is, we put it
            in the seat of a human subject and observe how the persona
            responds to tax shocks.
          </p>

          <div className="space-y-3">
            {findings.map((f) => (
              <div key={f.label} className="content-card p-4">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  {f.label}
                </div>
                <p className="text-sm text-gray-700 leading-snug">{f.detail}</p>
              </div>
            ))}
          </div>

          <a
            href={SSRN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto inline-flex items-center justify-between gap-3 bg-pe-teal text-white px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow no-underline w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="text-xs uppercase tracking-widest opacity-80">
                What can LLMs tell us about the ETI?
              </div>
              <div className="text-base font-semibold">
                Open on SSRN &nbsp;&rarr;
              </div>
            </div>
            <div className="font-mono text-xs opacity-80">5410643</div>
          </a>
        </div>

        <div
          className="rounded-xl p-7 text-white flex flex-col gap-5"
          style={{
            background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)',
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-pe-teal">
            What this could unlock
          </p>

          <p className="text-xl leading-relaxed font-light text-white">
            Social science experiments at{' '}
            <span className="font-medium text-pe-teal">
              orders-of-magnitude scale
            </span>{' '}
            &mdash; with LLMs inhabiting personas across the population, not
            just the convenience samples real experiments can afford.
          </p>

          <p className="text-base leading-relaxed text-white/90">
            More sample size. More statistical precision. The ability to
            study heterogeneity in places empirical work has trouble reaching
            &mdash; rural vs. urban, low-income vs. high-income, gig vs.
            salaried.
          </p>

          <div className="mt-auto pt-4 border-t border-white/15">
            <p className="text-sm italic leading-relaxed text-white/80">
              Treated as one signal among many. Not the empirical truth
              &mdash; but a way to sharpen the questions the empirical work
              is trying to answer.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
