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
      <div className={`flex h-full items-center ${styles.flow}`}>
        <ul className="space-y-[2.4vh]" style={{ maxWidth: '130vh' }}>
          {rules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </div>
    </Frame>
  );
}
