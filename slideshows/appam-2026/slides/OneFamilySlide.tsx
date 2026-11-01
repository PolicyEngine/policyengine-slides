import FamilyChart, { SERIES } from './FamilyChart';
import Frame from './Frame';
import {
  family,
  headlineEarnings,
  highest,
  lowest,
  modelCommit,
  modelVersion,
  spreadAt,
  usd,
} from '../content';

export default function OneFamilySlide() {
  return (
    <Frame title={`One family ends up with ${usd(lowest.net_resources)} in ${lowest.name} and ${usd(highest.net_resources)} in ${highest.name}`}>
      <div className="flex h-full flex-col">
        <div className="flex flex-wrap gap-x-[3vh] gap-y-[0.4vh]" style={{ fontSize: '0.8em' }}>
          {SERIES.map((series) => (
            <span key={series.key} className="inline-flex items-center gap-[0.8vh]">
              <span
                className="inline-block rounded-sm"
                style={{ width: '1em', height: '1em', background: series.color }}
              />
              {series.label}
            </span>
          ))}
        </div>
        <div className="min-h-0 flex-1 py-[0.6vh]">
          <FamilyChart />
        </div>
        <div className="space-y-[0.3vh] text-gray-700" style={{ fontSize: '0.74em' }}>
          <p>
            One parent, {family.parent_age}, earns {usd(headlineEarnings)} working full time and has
            children aged {family.child_ages[0]} and {family.child_ages[1]},{' '}
            {usd(family.rent_per_month)} monthly rent and a {usd(family.child_care_per_month)}{' '}
            monthly child care bill. They apply for each program as a new applicant, in each
            state&rsquo;s largest county, under 2026 rules. PolicyEngine US {modelVersion} (
            {modelCommit}).
          </p>
          <p>
            We add earnings and benefits, then subtract taxes net of credits and the child care the
            family pays, to get net resources. We leave out health coverage. The gap between the
            highest and lowest state runs {usd(spreadAt(30_000).spread)} at $30,000 of earnings and{' '}
            {usd(spreadAt(60_000).spread)}
            {' at $60,000. The model starts South Dakota’s program in August 2026, so its subsidy covers five months.'}
          </p>
        </div>
      </div>
    </Frame>
  );
}
