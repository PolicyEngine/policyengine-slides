import FamilyChart, { SERIES } from './FamilyChart';
import Frame from './Frame';
import styles from './deck.module.css';
import {
  alaska,
  childCareBill,
  family,
  headlineEarnings,
  highest,
  lowest,
  modelVersion,
  spreadAt,
  usd,
} from '../content';

export default function OneFamilySlide() {
  return (
    <Frame title={`One family ends up with ${usd(lowest.net_resources)} in ${lowest.name} and ${usd(highest.net_resources)} in ${highest.name}`}>
      <div className={`flex h-full flex-col ${styles.flow}`}>
        <div className="flex flex-wrap gap-x-[3vh] gap-y-[0.4vh]" style={{ fontSize: '1em' }}>
          {SERIES.map((series) => (
            <span key={series.key} className="inline-flex items-center gap-[0.8vh]">
              <span
                className="inline-block shrink-0 rounded-sm"
                style={{ width: '1em', height: '1em', background: series.color }}
              />
              {series.label}
            </span>
          ))}
        </div>
        <div className={`min-h-0 flex-1 py-[0.6vh] ${styles.chart} ${styles.familyChart}`}>
          <FamilyChart />
        </div>
        <div className="space-y-[0.3vh] text-gray-700" style={{ fontSize: '0.74em' }}>
          <p>
            One parent, {family.parent_age}, earns {usd(headlineEarnings)} working full time and has
            children aged {family.child_ages[0]} and {family.child_ages[1]},{' '}
            {usd(family.rent_per_month)} monthly rent and a {usd(family.child_care_per_month)}{' '}
            monthly child care bill. They apply for each program as a new applicant, in each
            state&rsquo;s largest county, under 2026 rules. We model each state&rsquo;s eligibility
            rules, not waiting lists or enrollment freezes. PolicyEngine US {modelVersion}.
          </p>
          <p>
            We add earnings and benefits, then subtract taxes net of credits and the{' '}
            {usd(childCareBill)} child care bill, to get net resources. We leave out health coverage. The gap between the
            highest and lowest state runs {usd(spreadAt(30_000).spread)} at $30,000 of earnings and{' '}
            {usd(spreadAt(60_000).spread)}
            {' at $60,000. Indiana lowered its limit for new applicants on April 5, so its subsidy covers four months. We model South Dakota’s program from August 2026, so its subsidy covers five months. '}
            Alaska pays each person a {usd(alaska.dividend)} dividend and {usd(alaska.energyRelief)} of energy relief,{' '}
            {usd(alaska.payments)} for this family.
          </p>
        </div>
      </div>
    </Frame>
  );
}
