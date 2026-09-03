import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import CodeBlock from '@/components/content/CodeBlock';

const anatomy = [
  {
    label: 'Source verification',
    detail:
      'Every module pins the statute it encodes: the corpus path and the SHA-256 of the juris XML it was read from.',
  },
  {
    label: 'Rules',
    detail:
      'A parameter is a value from the print; a derived rule is a formula over other rules. Each carries its type, period, unit, entity, and the section it comes from.',
  },
  {
    label: 'Proof atoms',
    detail:
      'Every amount and every effective date cites the corpus document and quotes the sentence that justifies it. The validator refuses a rule without proof.',
  },
  {
    label: 'Versions',
    detail:
      'Dated formulas. Kindergeld reads 255 from 2025 and 259 from 2026, both traced to the amending act, BGBl. 2024 I Nr. 449.',
  },
];

// Verbatim from TheAxiomFoundation/rulespec-de, de/statutes/estg/66.yaml,
// trimmed to two of the module's five rules and one proof atom.
const code = `format: rulespec/v1
module:
  source_verification:
    corpus_citation_path: de/statute/estg/66
    source_sha256: 2ac3c9ff2d11aa23e6850d0a8e81abd6…
rules:
- name: monthly_kindergeld_per_child
  kind: parameter
  dtype: Money
  period: Month
  unit: EUR
  source: § 66 Abs. 1 EStG
  metadata:
    proof:
      atoms:
      - path: versions[0].formula
        kind: amount
        source:
          corpus_citation_path: de/statute/bgbl-2024-i-449/steuerfortentwicklungsgesetz/document-1
          excerpt: In § 66 Absatz 1 wird die Angabe „250 Euro“ durch die Angabe „255 Euro“ ersetzt.
  versions:
  - effective_from: '2025-01-01'
    formula: '255'
  - effective_from: '2026-01-01'
    formula: '259'
- name: kindergeld_after_child_allowance_increase
  kind: derived
  entity: Person
  dtype: Money
  period: Month
  unit: EUR
  source: § 66 Abs. 3 Sätze 1 und 2 EStG
  versions:
  - effective_from: '2026-01-01'
    formula: floor((kindergeld_before_whole_euro_rounding / whole_euro_rounding_multiple) + 0.5) * whole_euro_rounding_multiple`;

export default function RuleSpecSlide() {
  return (
    <Slide>
      <SlideHeader>
        <div className="flex items-baseline justify-between">
          <SlideTitle>RuleSpec: the statute, as data</SlideTitle>
          <span className="font-mono text-lg text-pe-teal">
            rulespec-de/de/statutes/estg/66.yaml
          </span>
        </div>
      </SlideHeader>

      <div className="mt-1 grid grid-cols-[0.8fr_1.2fr] gap-6 items-start">
        <div className="space-y-3">
          {anatomy.map((a) => (
            <div key={a.label} className="content-card p-4">
              <div className="slide-tag mb-2" style={{ fontSize: '0.7rem' }}>
                {a.label}
              </div>
              <p className="text-sm text-gray-700 leading-snug">{a.detail}</p>
            </div>
          ))}
        </div>

        <CodeBlock title="yaml · EStG § 66 Kindergeld">
          <pre className="text-[9.5px] leading-[11.5px] whitespace-pre overflow-hidden">
            {code}
          </pre>
        </CodeBlock>
      </div>
    </Slide>
  );
}
