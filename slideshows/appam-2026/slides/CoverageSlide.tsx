import Frame from './Frame';
import { coverage } from '../content';
import styles from './deck.module.css';

const millionsRounded = (value: number) => (value / 1_000_000).toFixed(1);

export default function CoverageSlide() {
  const { default_file: national, local_area_file: local, policyengine_us: model } = coverage;
  const policies = [
    `We model federal income and payroll taxes and credits, and every state income tax, in ${model.jurisdictions_with_income_tax} jurisdictions.`,
    'We model TANF and child care subsidies in all 50 states and DC, plus SNAP, WIC, SSI, school meals and ACA premium tax credits.',
    'We also model Medicaid and CHIP eligibility, and local taxes such as New York City’s income tax and Philadelphia’s wage tax.',
  ];
  const data = [
    {
      lead: 'Sampling errors',
      body: `We reweight ${national.households.toLocaleString('en-US')} households to ${national.targets.toLocaleString('en-US')} targets from the IRS, Census, USDA, CMS, SSA and others.`,
    },
    {
      lead: 'Measurement errors',
      body: 'People underreport SNAP and Medicaid in the CPS, so we keep everyone who reports them and assign take-up among the rest to match USDA and CMS counts.',
    },
    {
      lead: 'Missing gaps',
      body: 'We impute what the CPS doesn’t ask, such as tax detail from the IRS Public Use File, wealth from the SCF and tips from the SIPP.',
    },
    {
      lead: 'Geographic fidelity',
      body: `For state results, we add ${millionsRounded(local.households_by_spine.acs_2024_1yr)} million ACS households, draw each one’s county and district within its PUMA, and fit ${local.targets.toLocaleString('en-US')} targets by state and congressional district.`,
    },
  ];
  return (
    <Frame title="We model federal and state taxes and benefits and build microdata to match official totals">
      <div className={`flex h-full items-center gap-[5vh] ${styles.flow}`}>
        <div className="min-w-0 flex-[4]">
          <h2 className="mb-[1.4vh] font-semibold text-pe-dark">Policies</h2>
          <ul className="space-y-[1.8vh]">
            {policies.map((policy) => (
              <li key={policy}>{policy}</li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 flex-[5]">
          <h2 className="mb-[1.4vh] font-semibold text-pe-dark">Data</h2>
          <dl className="space-y-[1.4vh]">
            {data.map((entry) => (
              <div key={entry.lead}>
                <dt className="font-semibold">{entry.lead}</dt>
                <dd>{entry.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Frame>
  );
}
