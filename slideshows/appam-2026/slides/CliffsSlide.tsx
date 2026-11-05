import EarningsChart from './EarningsChart';
import Frame from './Frame';
import {
  cliffs,
  enrolledExit,
  largestCliff,
  medianRateAt,
  percent,
  subsidyDrivenCliffs,
  sweepEarnings,
  usd,
} from '../content';
import styles from './deck.module.css';

export default function CliffsSlide() {
  return (
    <Frame title={`This family’s net resources fall up to ${usd(largestCliff.drop)} at a benefit cliff, at earnings that vary by state`}>
      <div className={`flex h-full gap-[4vh] ${styles.flow}`}>
        <div className="flex min-w-0 flex-1 flex-col">
          <p className="mb-[0.5vh] text-gray-700" style={{ fontSize: '0.85em' }}>
            A new applicant&rsquo;s net resources by earnings from {usd(sweepEarnings[0])} to{' '}
            {usd(sweepEarnings[sweepEarnings.length - 1])}, one line per state and DC, 2026
          </p>
          <div className={`min-h-0 flex-1 ${styles.chart} ${styles.earningsChart}`}>
            <EarningsChart />
          </div>
        </div>
        <div className="flex w-[32%] flex-col justify-center gap-[2.5vh]">
          <div>
            <h2 className="mb-[1vh] font-semibold text-pe-dark" style={{ fontSize: '1.1em' }}>
              $500 more in earnings puts a new applicant over the subsidy limit
            </h2>
            <ul className="space-y-[0.7vh]">
              {cliffs.map((cliff) => (
                <li key={cliff.code} className="flex items-baseline justify-between gap-4">
                  <span>
                    {cliff.name}, {usd(cliff.before)} to {usd(cliff.after)}
                  </span>
                  <span className="whitespace-nowrap font-semibold tabular-nums">{usd(-cliff.drop)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-[1vh] text-gray-700" style={{ fontSize: '0.85em' }}>
              In {subsidyDrivenCliffs} of 51 jurisdictions, the family’s largest drop comes from the subsidy. We estimate
              that a family already in the program keeps the subsidy to about{' '}
              {usd(enrolledExit('MD').before)} in Maryland and {usd(enrolledExit('IA').before)} in Iowa. Since May 2025,
              Maryland has put applicants who qualify, like this family, on a waiting list.
            </p>
          </div>
          <div>
            <h2 className="mb-[1vh] font-semibold text-pe-dark" style={{ fontSize: '1.1em' }}>
              Median total effective marginal tax rate on $500 more in earnings, across 51 jurisdictions
            </h2>
            <ul className="space-y-[0.7vh]">
              {[30_000, 60_000].map((earnings) => (
                <li key={earnings} className="flex items-baseline justify-between gap-4">
                  <span>At {usd(earnings)}</span>
                  <span className="whitespace-nowrap font-semibold tabular-nums">{percent(medianRateAt(earnings))}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Frame>
  );
}
