import EarningsChart from './EarningsChart';
import Frame from './Frame';
import { cliffs, largestCliff, medianRateAt, percent, subsidyDrivenCliffs, usd } from '../content';

export default function CliffsSlide() {
  return (
    <Frame title={`This family loses up to ${usd(largestCliff.drop)} at a benefit cliff, at earnings that vary by state`}>
      <div className="flex h-full gap-[4vh]">
        <div className="flex min-w-0 flex-1 flex-col">
          <p className="mb-[0.5vh] text-gray-700" style={{ fontSize: '0.85em' }}>
            Net resources by earnings, one line per state, 2026
          </p>
          <div className="min-h-0 flex-1">
            <EarningsChart />
          </div>
        </div>
        <div className="flex w-[32%] flex-col justify-center gap-[2.5vh]">
          <div>
            <h2 className="mb-[1vh] font-semibold text-pe-dark" style={{ fontSize: '1.1em' }}>
              The family crosses the subsidy limit after a $500 raise
            </h2>
            <ul className="space-y-[0.7vh]">
              {cliffs.map((cliff) => (
                <li key={cliff.code} className="flex items-baseline justify-between gap-4">
                  <span>
                    {cliff.name}, {usd(cliff.after)}
                  </span>
                  <span className="font-semibold tabular-nums">{usd(-cliff.drop)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-[1vh] text-gray-700" style={{ fontSize: '0.85em' }}>
              In {subsidyDrivenCliffs} of 51 jurisdictions, the family’s largest drop comes from losing the subsidy.
            </p>
          </div>
          <div>
            <h2 className="mb-[1vh] font-semibold text-pe-dark" style={{ fontSize: '1.1em' }}>
              Total effective marginal tax rate, median state
            </h2>
            <ul className="space-y-[0.7vh]">
              {[30_000, 60_000].map((earnings) => (
                <li key={earnings} className="flex items-baseline justify-between gap-4">
                  <span>At {usd(earnings)}</span>
                  <span className="font-semibold tabular-nums">{percent(medianRateAt(earnings))}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Frame>
  );
}
