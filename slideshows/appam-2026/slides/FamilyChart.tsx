import { childCareBill, crossSection, highest, lowest, median, StateRow, usd } from '../content';

const WIDTH = 1790;
const HEIGHT = 540;
const LEFT = 76;
const TOP = 44;
const BOTTOM = 34;
const AXIS_MAX = 60_000;
const BAR_WIDTH = 24;
const SURFACE_GAP = 2;
const CORNER = 4;
const TICKS = [0, 20_000, 40_000, 60_000];
// Lifts the lowest state's label clear of its neighbours, which rise to about $36,000.
const LOW_CALLOUT_LEVEL = 38_000;

const plotHeight = HEIGHT - TOP - BOTTOM;
const band = (WIDTH - LEFT) / crossSection.length;
const baseline = TOP + plotHeight;
const toHeight = (value: number) => (value / AXIS_MAX) * plotHeight;

export const SERIES = [
  {
    key: 'base',
    label: `Earnings after taxes and credits, minus the ${usd(childCareBill)} child care bill`,
    color: 'var(--color-gray-300)',
    value: (row: StateRow) => row.base,
  },
  {
    key: 'subsidy',
    label: 'Child care subsidy',
    color: 'var(--color-teal-600)',
    value: (row: StateRow) => row.child_care_subsidy,
  },
  {
    key: 'snap',
    label: 'SNAP',
    color: 'var(--pe-amber)',
    value: (row: StateRow) => row.snap,
  },
  {
    key: 'other',
    label: 'WIC and state payments',
    color: 'var(--chart-4)',
    value: (row: StateRow) => row.wic + row.tanf + row.other_benefits,
  },
];

function roundedTop(x: number, y: number, width: number, height: number) {
  const r = Math.min(CORNER, height);
  return `M${x},${y + height}V${y + r}Q${x},${y} ${x + r},${y}H${x + width - r}Q${x + width},${y} ${x + width},${y + r}V${y + height}Z`;
}

function describe(row: StateRow) {
  const lines = SERIES.map((series) => `${series.label}: ${usd(series.value(row))}`);
  return `${row.name}, ${row.county}: ${usd(row.net_resources)}\n${lines.join('\n')}`;
}

function Column({ row, index }: { row: StateRow; index: number }) {
  const x = LEFT + index * band + (band - BAR_WIDTH) / 2;
  const segments = SERIES.map((series) => ({ ...series, amount: series.value(row) })).filter(
    (segment) => segment.amount > 0,
  );
  const heights = segments.map((segment) => toHeight(segment.amount));
  return (
    <g>
      <title>{describe(row)}</title>
      <rect x={LEFT + index * band} y={TOP} width={band} height={plotHeight} fill="transparent" />
      {segments.map((segment, i) => {
        const top = baseline - heights.slice(0, i + 1).reduce((sum, height) => sum + height, 0);
        const drawn = Math.max(heights[i] - SURFACE_GAP, 1);
        const y = top + SURFACE_GAP;
        return i === segments.length - 1 ? (
          <path key={segment.key} d={roundedTop(x, y, BAR_WIDTH, drawn)} fill={segment.color} />
        ) : (
          <rect key={segment.key} x={x} y={y} width={BAR_WIDTH} height={drawn} fill={segment.color} />
        );
      })}
      <text x={x + BAR_WIDTH / 2} y={HEIGHT - 8} textAnchor="middle" fontSize="20" fill="var(--color-gray-600)">
        {row.code}
      </text>
    </g>
  );
}

function Callout({
  row,
  anchor,
  note,
  raisedTo,
}: {
  row: StateRow;
  anchor: 'start' | 'middle' | 'end';
  note?: string;
  raisedTo?: number;
}) {
  const index = crossSection.indexOf(row);
  const center = LEFT + index * band + band / 2;
  const x = anchor === 'start' ? center - BAR_WIDTH / 2 : anchor === 'end' ? center + BAR_WIDTH / 2 : center;
  const barTop = baseline - toHeight(row.net_resources);
  const y = baseline - toHeight(raisedTo ?? row.net_resources) - 12;
  return (
    <g>
      {raisedTo && (
        <line x1={center} x2={center} y1={y + 8} y2={barTop} stroke="var(--color-gray-600)" strokeWidth="1" />
      )}
      <text x={x} y={y} textAnchor={anchor} fontSize="25" fontWeight="600" fill="var(--color-gray-800)">
        {note ? `${note}, ${row.name}` : row.name} {usd(row.net_resources)}
      </text>
    </g>
  );
}

export default function FamilyChart() {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role="img"
      aria-label={`Net resources by state, from ${usd(lowest.net_resources)} in ${lowest.name} to ${usd(highest.net_resources)} in ${highest.name}`}
      className="h-full w-full"
    >
      {TICKS.map((tick) => {
        const y = baseline - toHeight(tick);
        return (
          <g key={tick}>
            <line x1={LEFT} x2={WIDTH} y1={y} y2={y} stroke="var(--color-gray-200)" strokeWidth="1" />
            <text x={LEFT - 12} y={y + 7} textAnchor="end" fontSize="20" fill="var(--color-gray-600)">
              {tick === 0 ? '$0' : `$${tick / 1000}K`}
            </text>
          </g>
        );
      })}
      {crossSection.map((row, index) => (
        <Column key={row.code} row={row} index={index} />
      ))}
      <Callout row={lowest} anchor="start" raisedTo={LOW_CALLOUT_LEVEL} />
      <Callout row={median} anchor="middle" note="Median" />
      <Callout row={highest} anchor="end" />
    </svg>
  );
}
