import CodeBlock from '@/components/content/CodeBlock';
import Frame from './Frame';
import { axiomEngineVersion, axiomRuns, usd } from '../content';

const RULESPEC = `- name: earned_income_deduction_rate
  kind: parameter
  metadata:
    proof:
      atoms:
        - kind: amount
          source:
            corpus_citation_path:
              us-ga/manual/dfcs/snap/3612
            excerpt: "20% earned income deduction"
        - kind: effective_period
          source:
            excerpt: "Effective Date: December 2019"
  versions:
    - effective_from: '2019-12-01'
      formula: 0.20`;

const earnings = axiomRuns.monthlyEarnings.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

const runs = [
  {
    family: `Earns ${earnings} a month and reports on time`,
    result: `Deduction of ${usd(axiomRuns.onTime)} a month`,
  },
  { family: 'Same family, reports late', result: `Deduction of ${usd(axiomRuns.late)}` },
  { family: 'Same family, November 2019', result: 'Engine refuses: no value at 2019-11-01' },
];

export default function AxiomSlide() {
  return (
    <Frame title="The Axiom Foundation encodes rules with their source text and dates">
      <div className="flex h-full items-center gap-[4vh]">
        <CodeBlock title="rulespec-us: us-ga/policies/dfcs/snap/3612.yaml" className="min-w-0 flex-[3]">
          <pre className="overflow-hidden" style={{ fontSize: 'clamp(12px, 1.8vh, 22px)' }}>
            {RULESPEC}
          </pre>
        </CodeBlock>
        <div className="flex-[2]">
          <p className="mb-[2vh]">
            Georgia&rsquo;s Division of Family and Children Services allows a 20% earned income
            deduction in section 3612 of its SNAP manual. Axiom encodes that rule in RuleSpec and
            records the manual&rsquo;s words and date beside each value.
          </p>
          <h2 className="mb-[1vh] font-semibold text-pe-dark" style={{ fontSize: '1.05em' }}>
            Axiom Rules Engine {axiomEngineVersion}, running the rule
          </h2>
          <dl className="space-y-[1.2vh]">
            {runs.map((run) => (
              <div key={run.family}>
                <dt className="text-gray-700" style={{ fontSize: '0.88em' }}>
                  {run.family}
                </dt>
                <dd className="font-semibold">{run.result}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Frame>
  );
}
