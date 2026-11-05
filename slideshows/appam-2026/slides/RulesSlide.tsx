import CoverageEmbed from './CoverageEmbed';
import Frame from './Frame';
import { coverage } from '../content';
import styles from './deck.module.css';

export default function RulesSlide() {
  const { policyengine_us: model } = coverage;
  const rules = [
    `We model federal income and payroll taxes and credits, and every state income tax, in ${model.jurisdictions_with_income_tax} jurisdictions.`,
    'We model TANF and child care subsidies in all 50 states and DC, plus SNAP, WIC, SSI, school meals and ACA premium tax credits.',
    'We also model Medicaid and CHIP eligibility, and local taxes such as New York City’s income tax and Philadelphia’s wage tax.',
  ];
  return (
    <Frame title="We model federal, state and local tax and benefit rules">
      <div className={`flex h-full flex-col justify-center gap-[3vh] ${styles.flow}`}>
        <ul className="space-y-[1.2vh]">
          {rules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
        <figure className="m-0" style={{ maxWidth: '125vh' }}>
          <CoverageEmbed alt="PolicyEngine’s coverage tracker: 109 total programs, 87 complete, 18 partial and 4 in progress, reflecting policyengine-us 2.72.3" />
          <figcaption className="mt-[1vh]">
            Explore our coverage tracker at{' '}
            <a
              className="pointer-events-auto"
              style={{ textDecoration: 'underline' }}
              href="https://www.policyengine.org/us/model/rules/coverage"
            >
              policyengine.org/us/model/rules/coverage
            </a>
            .
          </figcaption>
        </figure>
      </div>
    </Frame>
  );
}
