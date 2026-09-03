import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const stats = [
  { value: '2', label: 'oracles: EUROMOD DE_2025 and an independent German simulator' },
  { value: '7', label: 'provisions encoded with tests, so far' },
  { value: '13', label: 'instruments queued for the 2025 surface' },
];

const encoded = [
  'EStG §66 (Kindergeld)',
  'SGB V §241 (health insurance rate)',
  'RBEG 2021 §8 (Regelbedarf levels)',
  'MinUhV §1 (minimum maintenance)',
  'SV-Bezugsgrößenverordnung 2025 §§1, 2, 4',
];

const queued = [
  'EStG tariff, splitting, Günstigerprüfung',
  'Solidaritätszuschlag',
  'KV, PV, RV, AV contributions',
  'Minijob and Midijob',
  'Kindergeld and Kinderzuschlag',
  'Bürgergeld, Wohngeld, Elterngeld',
  'Unterhaltsvorschuss',
];

export default function GermanyLaneSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Germany: the dual-oracle lane</SlideTitle>
      </SlideHeader>

      <div className="mt-2 grid grid-cols-3 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="stat-number">{s.value}</div>
            <p className="text-lg text-gray-600 mt-2 leading-snug">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-[1.15fr_0.85fr_0.85fr] gap-6 items-stretch">
        <div className="content-card p-6">
          <div className="slide-tag mb-3">The discipline</div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Encode the statute, never an oracle&apos;s behaviour. Every rule
            is checked per case against both models at the rules in force on
            30 June 2025. Where the two oracles disagree, the printed law
            adjudicates and the divergence is filed upstream to the losing
            model&apos;s tracker.
          </p>
          <p className="text-base text-gray-500 italic mt-3">
            Values carry their amending act: Kindergeld reads &euro;255 from
            1 January 2025 by BGBl. 2024 I Nr. 449, cited to the juris XML.
          </p>
        </div>

        <div className="content-card p-6">
          <div className="slide-tag mb-3">Encoded</div>
          <ul className="space-y-2">
            {encoded.map((e) => (
              <li key={e} className="text-base text-gray-700 leading-snug">
                {e}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="content-card p-6"
          style={{ borderLeftColor: 'var(--pe-amber)' }}
        >
          <div className="slide-tag mb-3" style={{ color: 'var(--pe-amber)' }}>
            Queued
          </div>
          <ul className="space-y-2">
            {queued.map((q) => (
              <li key={q} className="text-base text-gray-700 leading-snug">
                {q}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-6 text-base text-gray-500">
        Listed <span className="font-mono">experimental</span> and hidden from
        the app until the first instruments pass both oracles. Public at{' '}
        <span className="font-mono">github.com/TheAxiomFoundation/rulespec-de</span>
      </p>
    </Slide>
  );
}
