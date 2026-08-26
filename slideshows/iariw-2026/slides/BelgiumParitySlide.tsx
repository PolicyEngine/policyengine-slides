import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const stats = [
  { value: '23/23', label: 'in-scope BE_2025 policies conformant' },
  { value: '156', label: 'household comparisons across 33 suites' },
  { value: '0', label: 'unexplained mismatches' },
];

export default function BelgiumParitySlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Belgian income tax, validated against EUROMOD</SlideTitle>
      </SlideHeader>

      <div className="mt-4 grid grid-cols-3 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="stat-number">{s.value}</div>
            <p className="text-lg text-gray-600 mt-2 leading-snug">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-8 items-start">
        <div className="content-card p-7">
          <div className="slide-tag mb-4">Every disagreement dispositioned</div>
          <p className="text-xl text-gray-700 leading-relaxed">
            The suites raised 40 raw disagreements. 33 traced to upstream
            engine differences and are filed as findings for the EUROMOD
            team&apos;s review on the public EC-JRC tracker; 7 are explained
            residuals.
          </p>
          <p className="text-lg text-gray-500 italic mt-4">
            EUROMOD is the reference we are glad exists &mdash; the
            cross-checks flow both directions.
          </p>
        </div>

        <div
          className="content-card p-7"
          style={{ borderLeftColor: 'var(--pe-amber)' }}
        >
          <div className="slide-tag mb-4" style={{ color: 'var(--pe-amber)' }}>
            Worked example
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            The Belgian PIT arc &mdash; couples, pensions, self-employment,
            and replacement-income pipelines &mdash; is merged on main.
            Dependants and child benefits are encoded, held at the
            signed-corpus release frontier.
          </p>
        </div>
      </div>

      <p className="mt-8 text-base text-gray-500">
        rulespec-be and the oracle harness are public at{' '}
        <span className="font-mono">github.com/TheAxiomFoundation</span>{' '}
        &middot; scoreboard at{' '}
        <span className="font-mono">axiom.org/oracles</span>
      </p>
    </Slide>
  );
}
