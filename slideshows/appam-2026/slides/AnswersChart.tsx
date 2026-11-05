import { modelAnswers, usd } from '../content';

const WIDTH = 1500;
const LEFT = 290;
const RIGHT = 110;
const TOP = 78;
const ROW = 50;
const BOTTOM = 44;
const STEP = 2_500;
const RADIUS = 11;

const answers = modelAnswers.shownSnap;
const reference = modelAnswers.referenceSnap;
const without = modelAnswers.referenceSnapWithoutSubsidy;

const axisMax = Math.ceil(Math.max(...answers.map((row) => row.snap), without) / STEP) * STEP;
const ticks = Array.from({ length: axisMax / STEP + 1 }, (_, i) => i * STEP);
const height = TOP + answers.length * ROW + BOTTOM;
const x = (value: number) => LEFT + (value / axisMax) * (WIDTH - LEFT - RIGHT);

export default function AnswersChart({ reveal }: { reveal: boolean }) {
  const hidden = { visibility: reveal ? ('visible' as const) : ('hidden' as const) };
  const axisBottom = TOP + answers.length * ROW;
  const fill = reveal ? 'var(--pe-amber)' : 'var(--color-gray-500)';
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${height}`}
      role="img"
      aria-label={
        reveal
          ? `Each model's SNAP answer, with PolicyEngine's ${usd(reference)} and ${usd(without)} without the subsidy`
          : "Each model's SNAP answer"
      }
      className="h-full w-full"
    >
      {ticks.map((tick) => (
        <g key={tick}>
          <line x1={x(tick)} x2={x(tick)} y1={TOP - 8} y2={axisBottom} stroke="var(--color-gray-200)" strokeWidth="1" />
          <text x={x(tick)} y={axisBottom + 30} textAnchor="middle" fontSize="23" fill="var(--color-gray-600)">
            {usd(tick)}
          </text>
        </g>
      ))}
      {answers.map((row, i) => {
        const y = TOP + i * ROW + ROW / 2;
        return (
          <g key={row.model}>
            <title>{`${row.name}: ${usd(row.snap)}`}</title>
            <text x={LEFT - 24} y={y + 8} textAnchor="end" fontSize="25" fill="var(--color-gray-800)">
              {row.name}
            </text>
            <line x1={LEFT} x2={WIDTH - RIGHT} y1={y} y2={y} stroke="var(--color-gray-100)" strokeWidth="1" />
          </g>
        );
      })}
      <g style={hidden}>
        <line x1={x(reference)} x2={x(reference)} y1={TOP - 16} y2={axisBottom} stroke="var(--color-teal-600)" strokeWidth="3" />
        <text x={x(reference) + 8} y={TOP - 24} fontSize="25" fontWeight="600" fill="var(--color-gray-800)">
          We compute {usd(reference)}
        </text>
        <line
          x1={x(without)}
          x2={x(without)}
          y1={TOP - 16}
          y2={axisBottom}
          stroke="var(--color-gray-600)"
          strokeWidth="2"
          strokeDasharray="7 6"
        />
        <text x={x(without) + 8} y={TOP - 24} fontSize="23" fill="var(--color-gray-700)">
          {usd(without)} without the subsidy
        </text>
      </g>
      {answers.map((row, i) => {
        const y = TOP + i * ROW + ROW / 2;
        return (
          <g key={row.model}>
            <circle cx={x(row.snap)} cy={y} r={RADIUS} fill={fill} stroke="white" strokeWidth="2" />
            <text x={x(row.snap) + RADIUS + 9} y={y + 8} fontSize="24" fontWeight="600" fill="var(--color-gray-800)">
              {usd(row.snap)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
