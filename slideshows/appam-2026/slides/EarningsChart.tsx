import { cliffs, sweep, sweepEarnings, usd } from '../content';

const WIDTH = 1200;
const HEIGHT = 600;
const LEFT = 76;
const RIGHT = 24;
const TOP = 14;
const BOTTOM = 40;
const Y_MIN = 20_000;
const Y_MAX = 90_000;
const X_TICKS = [20_000, 40_000, 60_000, 80_000, 100_000];
const Y_TICKS = [20_000, 40_000, 60_000, 80_000];
// A cliff past this point labels above its peak, away from the chart's edge and the lines below it.
const LAST_LABEL_BELOW = 90_000;
const LABEL_SIZE = 23;
// Inter's semibold glyphs average about 0.6 em, and two labels need room between them.
const labelWidth = (name: string) => name.length * 0.6 * LABEL_SIZE + 20;

const SERIES_COLORS: Record<string, string> = {
  ID: 'var(--pe-amber)',
  MD: 'var(--chart-4)',
  MO: 'var(--color-teal-600)',
};

const xMin = sweepEarnings[0];
const xMax = sweepEarnings[sweepEarnings.length - 1];
const x = (value: number) => LEFT + ((value - xMin) / (xMax - xMin)) * (WIDTH - LEFT - RIGHT);
const y = (value: number) =>
  TOP + (1 - (value - Y_MIN) / (Y_MAX - Y_MIN)) * (HEIGHT - TOP - BOTTOM);

function linePath(values: number[]) {
  return values
    .map((value, i) => `${i === 0 ? 'M' : 'L'}${x(sweepEarnings[i]).toFixed(1)},${y(value).toFixed(1)}`)
    .join('');
}

export default function EarningsChart() {
  const states = sweep as Record<string, number[]>;
  const highlighted = new Set(cliffs.map((cliff) => cliff.code));
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role="img"
      aria-label={`Net resources by earnings for every state, with ${cliffs.map((cliff) => cliff.name).join(", ")} highlighted`}
      className="h-full w-full"
    >
      {Y_TICKS.map((tick) => (
        <g key={tick}>
          <line x1={LEFT} x2={WIDTH - RIGHT} y1={y(tick)} y2={y(tick)} stroke="var(--color-gray-200)" strokeWidth="1" />
          <text x={LEFT - 12} y={y(tick) + 7} textAnchor="end" fontSize="20" fill="var(--color-gray-600)">
            ${tick / 1000}K
          </text>
        </g>
      ))}
      {X_TICKS.map((tick) => (
        <text
          key={tick}
          x={x(tick)}
          y={HEIGHT - 10}
          textAnchor={tick === xMax ? 'end' : 'middle'}
          fontSize="20"
          fill="var(--color-gray-600)"
        >
          ${tick / 1000}K
        </text>
      ))}
      {Object.entries(states)
        .filter(([code]) => !highlighted.has(code))
        .map(([code, values]) => (
          <path key={code} d={linePath(values)} fill="none" stroke="var(--color-gray-300)" strokeWidth="1">
            <title>{code}</title>
          </path>
        ))}
      {cliffs.map((cliff) => {
        const values = states[cliff.code];
        const below = cliff.after <= LAST_LABEL_BELOW;
        // Below the lines, a label sits right of its drop unless the next drop leaves no room.
        const next = Math.min(
          ...cliffs.map((other) => other.after).filter((after) => after > cliff.after && after <= LAST_LABEL_BELOW),
        );
        const crowded = below && x(next) - x(cliff.after) < labelWidth(cliff.name);
        return (
          <g key={cliff.code}>
            <path
              d={linePath(values)}
              fill="none"
              stroke={SERIES_COLORS[cliff.code]}
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              <title>{`A new applicant in ${cliff.name} has ${usd(cliff.drop)} less in net resources at ${usd(cliff.after)} than at ${usd(cliff.before)} of earnings`}</title>
            </path>
            <text
              x={!below ? x(cliff.before) - 4 : crowded ? x(cliff.before) - 10 : x(cliff.after) + 10}
              y={below ? y(cliff.net_after) + 30 : y(cliff.net_before) - 14}
              textAnchor={below && !crowded ? 'start' : 'end'}
              fontSize={LABEL_SIZE}
              fontWeight="600"
              fill="var(--color-gray-800)"
              stroke="white"
              strokeWidth="5"
              paintOrder="stroke"
            >
              {cliff.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
