import { programLines, usd } from '../content';

const WIDTH = 1240;
const HEIGHT = 560;
const LEFT = 330;
const RIGHT = 240;
const AXIS_MIN = -3_000;
const AXIS_MAX = 19_000;
const ROW_TOP = 8;
const ROW_PITCH = 124;
const TICK_HEIGHT = 84;
const TICK_WIDTH = 4;
const AXIS_TICKS = [0, 5_000, 10_000, 15_000];
const MAX_NAMED_STATES = 3;

const LABELS: Record<string, string[]> = {
  child_care_subsidy: ['Child care', 'subsidy'],
  snap: ['SNAP'],
  state_taxes: ['State credits', 'minus state taxes'],
  federal_taxes: ['Federal credits', 'minus federal taxes'],
};

const x = (value: number) =>
  LEFT + ((value - AXIS_MIN) / (AXIS_MAX - AXIS_MIN)) * (WIDTH - LEFT - RIGHT);

export function endLabel(values: { code: string; value: number }[], value: number) {
  const tied = values.filter((entry) => entry.value === value);
  if (tied.length <= MAX_NAMED_STATES) {
    return `${tied.map((entry) => entry.code).join(', ')} ${usd(value)}`;
  }
  const states = tied.filter((entry) => entry.code !== 'DC').length;
  return `${states} states${states < tied.length ? ' and DC' : ''} ${usd(value)}`;
}

export default function LineRugs() {
  const axisY = ROW_TOP + ROW_PITCH * programLines.length;
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role="img"
      aria-label="Each state's dollars on four lines of net resources, on one scale"
      className="h-full w-full"
    >
      {AXIS_TICKS.map((tick) => (
        <g key={tick}>
          <line x1={x(tick)} x2={x(tick)} y1={ROW_TOP} y2={axisY} stroke="var(--color-gray-200)" strokeWidth="1" />
          <text x={x(tick)} y={axisY + 28} textAnchor="middle" fontSize="20" fill="var(--color-gray-600)">
            {tick === 0 ? '$0' : `$${tick / 1000}K`}
          </text>
        </g>
      ))}
      {programLines.map((line, row) => {
        const top = ROW_TOP + row * ROW_PITCH;
        const low = line.values[0];
        const high = line.values[line.values.length - 1];
        const labelLines = LABELS[line.key];
        return (
          <g key={line.key}>
            {labelLines.map((text, i) => (
              <text
                key={text}
                x={0}
                y={top + TICK_HEIGHT / 2 + 8 + (i - (labelLines.length - 1) / 2) * 27}
                fontSize="23"
                fontWeight="600"
                fill="var(--color-gray-800)"
              >
                {text}
              </text>
            ))}
            {line.values.map((entry) => (
              <rect
                key={entry.code}
                x={x(entry.value) - TICK_WIDTH / 2}
                y={top}
                width={TICK_WIDTH}
                height={TICK_HEIGHT}
                fill="var(--color-teal-600)"
                opacity="0.4"
              >
                <title>{`${entry.code}: ${usd(entry.value)}`}</title>
              </rect>
            ))}
            <text x={x(low.value) - 12} y={top + TICK_HEIGHT / 2 + 7} textAnchor="end" fontSize="20" fill="var(--color-gray-700)">
              {endLabel(line.values, low.value)}
            </text>
            <text x={x(high.value) + 12} y={top + TICK_HEIGHT / 2 + 7} textAnchor="start" fontSize="20" fill="var(--color-gray-700)">
              {endLabel(line.values, high.value)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
