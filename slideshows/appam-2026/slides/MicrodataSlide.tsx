import CodeBlock from '@/components/content/CodeBlock';
import { instrument, modelVersion } from '../content';
import Frame from './Frame';
import InstrumentRugs from './InstrumentRugs';

const PYTHON = `people = pd.read_csv("your_survey.csv")
# Keep state alone: drop county and finer geography.

for fips in STATE_FIPS.values():  # all 51
    people["state_fips__2024"] = fips
    data = Dataset.from_dataframe(people, 2024)
    sim = Microsimulation(dataset=data)
    snap = sim.calculate("is_snap_eligible", "2024-01")`;

export default function MicrodataSlide() {
  return (
    <Frame title="Build simulated eligibility measures on your own microdata">
      <div className="flex h-full items-center gap-[4vh]">
        <div className="min-w-0 flex-[5] space-y-[2.4vh]">
          <p>Hold your sample fixed and change the state. Differences between runs come from the rules in each state.</p>
          <CodeBlock title="One run per state">
            <pre className="overflow-hidden" style={{ fontSize: 'clamp(11px, 1.75vh, 22px)' }}>
              {PYTHON}
            </pre>
          </CodeBlock>
          <p style={{ fontSize: '0.9em' }}>
            Our TAXSIM-compatible interface at{' '}
            <a style={{ textDecoration: 'underline' }} href="https://www.policyengine.org/us/taxsim">
              policyengine.org/us/taxsim
            </a>{' '}
            runs TAXSIM-format files through PolicyEngine for tax years 2021 onward, and through TAXSIM35 for earlier
            years.
          </p>
        </div>
        <div className="flex h-full min-w-0 flex-[6] flex-col">
          <div className="min-h-0 flex-1">
            <InstrumentRugs />
          </div>
          <p className="text-gray-600" style={{ fontSize: '0.74em' }}>
            Each mark shows one of 51 jurisdictions. We draw {instrument.households.toLocaleString('en-US')} households with children by
            weight from Populace US, our default microdata, and run the same families under each state’s{' '}
            {instrument.year} rules, using PolicyEngine US {modelVersion}. We measure SNAP eligibility in January as a
            share of Supplemental Poverty Measure (SPM) units with children, and Medicaid or CHIP eligibility as a share
            of children under 19.
          </p>
        </div>
      </div>
    </Frame>
  );
}
