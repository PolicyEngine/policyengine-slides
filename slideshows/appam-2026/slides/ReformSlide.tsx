import CodeBlock from '@/components/content/CodeBlock';
import { massachusetts, millions, modelVersion, percent } from '../content';
import Frame from './Frame';
import styles from './deck.module.css';

const PYTHON = `reform = Reform.from_dict({
    "gov.states.ma.tax.income.credits"
    ".child_and_family.amount": {
        "2026-01-01.2100-12-31": 880
    }
}, country_id="us")
# Use Massachusetts rows from the local-area file
baseline = Microsimulation(dataset=massachusetts)
reformed = Microsimulation(dataset=massachusetts, reform=reform)`;

const results = [
  { value: millions(massachusetts.cost), label: 'less state revenue in 2026' },
  { value: percent(massachusetts.gainingShare), label: 'of households would gain, and none would lose' },
];

export default function ReformSlide() {
  return (
    <Frame title={`We estimate Massachusetts would forgo ${millions(massachusetts.cost)} if lawmakers doubled its child and family credit`}>
      <div className={`flex h-full flex-col justify-center gap-[2vh] ${styles.flow}`}>
        <div className={`flex items-stretch gap-[4vh] ${styles.flow}`}>
          <div className="min-w-0 flex-[5]">
            <p className="mb-[1.2vh]">Change any parameter, then compare the two runs for any state.</p>
            <CodeBlock title={`$${massachusetts.current} to $${massachusetts.reformed} per dependent`}>
              <pre className="overflow-hidden" style={{ fontSize: 'clamp(11px, 1.75vh, 22px)' }}>
                {PYTHON}
              </pre>
            </CodeBlock>
          </div>
          <div className="flex min-w-0 flex-[4] flex-col justify-center gap-[2.6vh]">
            {results.map((result) => (
              <div key={result.label} className="content-card p-[2.4vh]">
                <p className="font-bold leading-tight text-pe-dark" style={{ fontSize: '1.7em' }}>
                  {result.value}
                </p>
                <p>{result.label}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-600" style={{ fontSize: '0.74em' }}>
          We use Microcosm’s local-area file with PolicyEngine US {modelVersion} for 2026 state estimates, assuming no
          behavioral responses. The file holds {massachusetts.records.toLocaleString('en-US')} Massachusetts household
          records, an effective sample of about {massachusetts.effectiveHouseholds} households, or{' '}
          {massachusetts.effectiveHouseholdsWithChildren} among those with children.
        </p>
      </div>
    </Frame>
  );
}
