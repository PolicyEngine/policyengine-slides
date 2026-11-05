import Frame from './Frame';
import LineRugs from './LineRugs';
import { headlineEarnings, interaction, usd } from '../content';
import styles from './deck.module.css';

const rows = [
  { label: 'Child care subsidy', value: interaction.subsidy },
  { label: 'SNAP', value: interaction.snapChange },
  { label: 'Net resources', value: interaction.netChange },
];

function signed(value: number) {
  return value > 0 ? `+${usd(value)}` : usd(value);
}

export default function WhichLinesSlide() {
  return (
    <Frame title="States differ most on child care subsidies, then SNAP and state taxes">
      <div className={`flex h-full gap-[4vh] ${styles.flow}`}>
        <div className="flex min-w-0 flex-1 flex-col">
          <p className="mb-[1vh] text-gray-700" style={{ fontSize: '0.85em' }}>
            Each mark shows one of 51 jurisdictions, for the family earning {usd(headlineEarnings)}. Overlapping marks
            darken.
          </p>
          <div className={`min-h-0 flex-1 ${styles.chart} ${styles.lineChart}`}>
            <LineRugs />
          </div>
        </div>
        <div className="flex w-[30%] flex-col justify-center">
          <h2 className="mb-[1.5vh] font-semibold text-pe-dark" style={{ fontSize: '1.15em' }}>
            Texas, with and without the subsidy
          </h2>
          <dl>
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-baseline justify-between py-[1vh] ${i === rows.length - 1 ? 'border-t-2 border-gray-300 font-semibold' : ''}`}
              >
                <dt>{row.label}</dt>
                <dd className="whitespace-nowrap tabular-nums" style={{ fontSize: '1.2em' }}>
                  {signed(row.value)}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-[1.5vh]">
            Congress lets SNAP households deduct their care costs, so this family deducts less when Texas pays for care.
          </p>
        </div>
      </div>
    </Frame>
  );
}
