import Frame from './Frame';
import { coverage } from '../content';
import styles from './deck.module.css';

const millionsRounded = (value: number) => (value / 1_000_000).toFixed(1);

export default function DataSlide() {
  const { default_file: national, local_area_file: local } = coverage;
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
    <Frame title="We build Microcosm, our microdata, from surveys and official totals">
      <div className={`flex h-full items-center ${styles.flow}`}>
        <dl className={`grid grid-cols-2 gap-x-[5vh] gap-y-[3vh] ${styles.flow}`}>
          {data.map((entry) => (
            <div key={entry.lead}>
              <dt className="font-semibold text-pe-dark">{entry.lead}</dt>
              <dd>{entry.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Frame>
  );
}
