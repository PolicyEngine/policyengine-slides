import { usd, waterfall } from '../content';

const WIDTH = 1500;
const HEIGHT = 500;
const LEFT = 76;
const TOP = 40;
const BOTTOM = 76;
const AXIS_MAX = 70_000;
const TICKS = [0, 20_000, 40_000, 60_000];
const BAR_WIDTH = 72;
const CORNER = 4;

const plotHeight = HEIGHT - TOP - BOTTOM;
const baseline = TOP + plotHeight;
const band = (WIDTH - LEFT) / waterfall.length;
const y = (value: number) => baseline - (value / AXIS_MAX) * plotHeight;

export const WATERFALL_COLORS = {
  total: 'var(--color-gray-600)',
  adds: 'var(--color-teal-600)',
  subtracts: 'var(--pe-amber)',
};

function signed(value: number) {
  if (value === 0) return '$0';
  return value > 0 ? `+${usd(value)}` : usd(value);
}

export default function WaterfallChart() {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role="img"
      aria-label={`From ${usd(waterfall[0].value)} of earnings to ${usd(waterfall[waterfall.length - 1].value)} of net resources, line by line`}
      className="h-full w-full"
    >
      {TICKS.map((tick) => (
        <g key={tick}>
          <line x1={LEFT} x2={WIDTH} y1={y(tick)} y2={y(tick)} stroke="var(--color-gray-200)" strokeWidth="1" />
          <text x={LEFT - 12} y={y(tick) + 7} textAnchor="end" fontSize="20" fill="var(--color-gray-600)">
            {tick === 0 ? '$0' : `$${tick / 1000}K`}
          </text>
        </g>
      ))}
      {waterfall.map((step, i) => {
        const x = LEFT + i * band + (band - BAR_WIDTH) / 2;
        const top = y(Math.max(step.from, step.to));
        const height = Math.max(y(Math.min(step.from, step.to)) - top, 2);
        const fill = step.kind === 'total' ? WATERFALL_COLORS.total : step.value >= 0 ? WATERFALL_COLORS.adds : WATERFALL_COLORS.subtracts;
        const next = waterfall[i + 1];
        return (
          <g key={step.key}>
            <title>{`${step.label.join(' ')}: ${signed(step.value)}. Running total ${usd(step.to)}`}</title>
            {next && (
              <line x1={x + BAR_WIDTH} x2={x + band} y1={y(step.to)} y2={y(step.to)} stroke="var(--color-gray-400)" strokeWidth="1" />
            )}
            <rect x={x} y={top} width={BAR_WIDTH} height={height} rx={Math.min(CORNER, height / 2)} fill={fill} />
            <text x={x + BAR_WIDTH / 2} y={top - 10} textAnchor="middle" fontSize="23" fontWeight="600" fill="var(--color-gray-800)">
              {step.kind === 'total' || i === 0 ? usd(step.value) : signed(step.value)}
            </text>
            {step.label.map((line, row) => (
              <text
                key={line}
                x={x + BAR_WIDTH / 2}
                y={baseline + 28 + row * 24}
                textAnchor="middle"
                fontSize="20"
                fill="var(--color-gray-700)"
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}
