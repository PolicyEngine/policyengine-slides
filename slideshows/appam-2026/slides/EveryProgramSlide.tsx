import Frame from './Frame';
import { modelAnswers, policyBench, usd } from '../content';
import styles from './deck.module.css';

function range(low: number, high: number) {
  return low === high ? usd(low) : `${usd(low)} to ${usd(high)}`;
}

export default function EveryProgramSlide() {
  const { cards, households, models } = policyBench;
  return (
    <Frame title="Most SNAP and state credit answers land more than 10% from PolicyEngine’s, and few payroll tax answers do">
      <div className={`flex h-full items-center gap-[4vh] ${styles.flow}`}>
        <div className="min-w-0 flex-[5]">
          <h2 className="mb-[1vh] font-semibold text-pe-dark">This family, the seven newest versions, five calls each</h2>
          <table className="w-full border-collapse" style={{ fontSize: '0.86em' }}>
            <thead>
              <tr className="border-b border-gray-300 text-left align-bottom">
                <th className="py-[0.6vh] pr-3 font-semibold">Line</th>
                <th className="py-[0.6vh] pr-3 text-right font-semibold">PolicyEngine</th>
                <th className="py-[0.6vh] pr-3 text-right font-semibold">Models, low to high</th>
                <th className="py-[0.6vh] text-right font-semibold">Within 10%</th>
              </tr>
            </thead>
            <tbody>
              {modelAnswers.table.map((line) => (
                <tr key={line.key} className="border-b border-gray-100 align-top">
                  <td className="py-[0.6vh] pr-3">{line.label}</td>
                  <td className="whitespace-nowrap py-[0.6vh] pr-3 text-right tabular-nums">{usd(line.reference)}</td>
                  <td className="whitespace-nowrap py-[0.6vh] pr-3 text-right tabular-nums">{range(line.low, line.high)}</td>
                  <td className="whitespace-nowrap py-[0.6vh] text-right tabular-nums">
                    {line.within_ten_percent} of {line.answers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="min-w-0 flex-[4]">
          <h2 className="mb-[1vh] font-semibold text-pe-dark">
            {households} households, all {models} models on PolicyBench
          </h2>
          <p className="mb-[1vh] text-gray-700" style={{ fontSize: '0.86em' }}>
            Share of answers more than 10% from PolicyEngine&rsquo;s, among households with a positive amount
          </p>
          <ul className="space-y-[0.9vh]" style={{ fontSize: '0.86em' }}>
            {cards.map((card) => (
              <li key={card.key}>
                <div className="flex items-baseline justify-between gap-3">
                  <span>{card.label}</span>
                  <span className="whitespace-nowrap font-semibold tabular-nums">
                    {card.positive_wrong_by_more_than_10.toFixed(1)}%
                  </span>
                </div>
                <div className="h-[0.9vh] min-h-[6px] rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${card.positive_wrong_by_more_than_10}%`, background: 'var(--color-teal-600)' }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-[1.4vh] text-gray-700" style={{ fontSize: '0.74em' }}>
            PolicyBench grades against PolicyEngine, on public households it samples with household weights from an eligible
            subset of our data.{' '}
            <a className="pointer-events-auto" style={{ textDecoration: 'underline' }} href="https://policybench.org">
              policybench.org
            </a>
          </p>
        </div>
      </div>
    </Frame>
  );
}
