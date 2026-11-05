import { instrument, percent } from '../content';
import { endLabel } from './LineRugs';

const WIDTH = 900;
const HEIGHT = 390;
const LEFT = 12;
const RIGHT = 12;
const AXIS_MAX = 0.8;
const ROW_TOP = 40;
const ROW_PITCH = 160;
const TICK_HEIGHT = 72;
const TICK_WIDTH = 4;
const LABEL_RISE = 14;
const AXIS_TICKS = [0, 0.2, 0.4, 0.6, 0.8];

const x = (share: number) => LEFT + (share / AXIS_MAX) * (WIDTH - LEFT - RIGHT);

export default function InstrumentRugs() {
  const axisY = ROW_TOP + ROW_PITCH * instrument.lines.length - (ROW_PITCH - TICK_HEIGHT) + 8;
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role="img"
      aria-label="Each state's simulated SNAP and child Medicaid or CHIP eligibility for one fixed sample"
      className="h-full w-full"
    >
      {AXIS_TICKS.map((tick, i) => (
        <g key={tick}>
          <line x1={x(tick)} x2={x(tick)} y1={ROW_TOP} y2={axisY} stroke="var(--color-gray-200)" strokeWidth="1" />
          <text
            x={x(tick)}
            y={axisY + 28}
            textAnchor={i === 0 ? 'start' : i === AXIS_TICKS.length - 1 ? 'end' : 'middle'}
            fontSize="20"
            fill="var(--color-gray-600)"
          >
            {`${tick * 100}%`}
          </text>
        </g>
      ))}
      {instrument.lines.map((line, row) => {
        const top = ROW_TOP + row * ROW_PITCH;
        const low = line.values[0];
        const high = line.values[line.values.length - 1];
        return (
          <g key={line.key}>
            <text x={LEFT} y={top - LABEL_RISE} fontSize="23" fontWeight="600" fill="var(--color-gray-800)">
              {line.label}
            </text>
            {line.values.map((entry) => (
              <rect
                key={entry.code}
                x={x(entry.value) - TICK_WIDTH / 2}
                y={top}
                width={TICK_WIDTH}
                height={TICK_HEIGHT}
                fill="var(--color-teal-600)"
                opacity="0.7"
              >
                <title>{`${entry.code}: ${percent(entry.value)}`}</title>
              </rect>
            ))}
            <text x={x(low.value) - 12} y={top + TICK_HEIGHT / 2 + 7} textAnchor="end" fontSize="20" fill="var(--color-gray-700)">
              {endLabel(line.values, low.value, percent)}
            </text>
            <text x={x(high.value) + 12} y={top + TICK_HEIGHT / 2 + 7} textAnchor="start" fontSize="20" fill="var(--color-gray-700)">
              {endLabel(line.values, high.value, percent)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
