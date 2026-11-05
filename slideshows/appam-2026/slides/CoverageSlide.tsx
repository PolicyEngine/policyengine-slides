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
      body: `We fit household weights in the national file against ${national.targets.toLocaleString('en-US')} targets, including IRS SOI and Census population totals.`,
    },
    {
      lead: 'Measurement errors',
      body: 'We use SSA payment totals to rescale four Social Security benefit inputs in the national file. When we draw SNAP and Medicaid take-up, we keep everyone who reports them.',
    },
    {
      lead: 'Missing gaps',
      body: 'For the national file, we use IRS PUF records to impute 65 tax-detail variables into copies of CPS ASEC households, and add inputs from SCF 2022, SIPP 2023 and CPS ORG 2024.',
    },
    {
      lead: 'Geographic fidelity',
      body: `For the local-area file behind our state results, we transfer inputs from a finished ASEC and PUF donor to ${millionsRounded(local.households_by_spine.acs_2024_1yr)} million 2024 ACS records, draw each record’s county and district within its PUMA, and fit ${local.targets.toLocaleString('en-US')} targets by state and congressional district.`,
    },
  ];
  return (
    <Frame title="We model federal and state taxes and benefits and build microdata from surveys and official totals">
      <div className={`flex h-full items-start gap-[5vh] pt-[1vh] ${styles.flow}`}>
        <div className="min-w-0 flex-[3]">
          <h2 className="mb-[1.4vh] font-semibold text-pe-dark">Policies</h2>
          <ul className="space-y-[1.8vh]">
            {policies.map((policy) => (
              <li key={policy}>{policy}</li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 flex-[5]">
          <h2 className="mb-[1.4vh] font-semibold text-pe-dark">Data</h2>
          <dl className="space-y-[1vh]" style={{ fontSize: '0.94em' }}>
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
