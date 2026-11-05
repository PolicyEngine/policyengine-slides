import Frame from './Frame';
import { family, headlineEarnings, massachusettsRow, usd } from '../content';
import styles from './deck.module.css';

const facts = [
  `One parent, ${family.parent_age}, earns ${usd(headlineEarnings)} working full time`,
  `Children aged ${family.child_ages[0]} and ${family.child_ages[1]}`,
  `${usd(family.rent_per_month)} monthly rent`,
  `${usd(family.child_care_per_month)} a month for child care, before any subsidy`,
  `${massachusettsRow.county}, Massachusetts, in 2026`,
  'Assume Massachusetts approves a child care subsidy for all twelve months',
];

export default function QuestionSlide() {
  return (
    <Frame title="How much SNAP does this family get in a year?">
      <div className={`flex h-full items-center ${styles.flow}`}>
        <ul className="w-full space-y-[2.4vh]" style={{ fontSize: '1.5em' }}>
          {facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>
    </Frame>
  );
}
