// The forecast chart and its title alone. Row names and values are read out of the chart's alt text (text.forecast.alt);
// the legend and axis title come from text.forecast; the ticks are numbers only. text.forecastLesson is not rendered.
import { Frame } from '../deck';
import { forecast } from '../text';

const alt = forecast.alt;

const MINUS = '−';

type Row = { group: string; registered: number; reported: number; registeredLabel: string; reportedLabel: string };

/** Read the three rows ("All people: plus 0.22 registered, plus 0.07 reported." and so on) out of the alt text. */
function readRows(text: string): Row[] {
  const pattern = /([A-Z][A-Za-z0-9 ]*?): (plus|minus) (\d+(?:\.\d+)?)(?: registered)?(?:,| and) (plus|minus) (\d+(?:\.\d+)?)/g;
  const rows = [...text.matchAll(pattern)].map(([, group, s1, v1, s2, v2]) => ({
    group,
    registered: (s1 === 'minus' ? -1 : 1) * Number(v1),
    reported: (s2 === 'minus' ? -1 : 1) * Number(v2),
    registeredLabel: `${s1 === 'minus' ? MINUS : '+'}${v1}`,
    reportedLabel: `${s2 === 'minus' ? MINUS : '+'}${v2}`,
  }));
  if (rows.length !== 3) throw new Error(`forecast chart: expected 3 rows in the alt text, found ${rows.length}`);
  return rows;
}

const rows = readRows(alt);

const WIDTH = 1400;
const LEFT = 330;
const RIGHT = 60;
const TOP = 78;
const ROW = 92;
const MIN = -0.6;
const MAX = 1.0;
const TICKS = [-0.5, 0, 0.5, 1.0];
const axisBottom = TOP + rows.length * ROW;
const HEIGHT = axisBottom + 92;
const x = (v: number) => LEFT + ((v - MIN) / (MAX - MIN)) * (WIDTH - LEFT - RIGHT);
const tickLabel = (v: number) => (v === 0 ? '0' : `${v > 0 ? '+' : MINUS}${Math.abs(v).toFixed(1)}`);

function ForecastChart() {
  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label={alt} preserveAspectRatio="xMinYMid meet" className="h-full w-full">
      {/* Legend */}
      <circle cx={LEFT + 12} cy={30} r={12} fill="var(--pe-teal)" />
      <text x={LEFT + 34} y={39} fontSize="26" fill="var(--color-gray-800)">
        {forecast.registered}
      </text>
      <line x1={LEFT + 262} x2={LEFT + 262} y1={15} y2={45} stroke="var(--color-gray-600)" strokeWidth="5" strokeLinecap="round" />
      <text x={LEFT + 282} y={39} fontSize="26" fill="var(--color-gray-800)">
        {forecast.reported}
      </text>

      {/* Grid and zero line */}
      {TICKS.map((tick) => (
        <g key={tick}>
          <line
            x1={x(tick)}
            x2={x(tick)}
            y1={TOP}
            y2={axisBottom}
            stroke={tick === 0 ? 'var(--color-gray-500)' : 'var(--color-gray-200)'}
            strokeWidth={tick === 0 ? 2.5 : 1.5}
          />
          <text x={x(tick)} y={axisBottom + 34} textAnchor="middle" fontSize="27" fill="var(--color-gray-600)">
            {tickLabel(tick)}
          </text>
        </g>
      ))}
      <text x={LEFT + (WIDTH - LEFT - RIGHT) / 2} y={axisBottom + 78} textAnchor="middle" fontSize="27" fill="var(--color-gray-700)">
        {forecast.axis}
      </text>

      {/* Rows */}
      {rows.map((row, i) => {
        const y = TOP + i * ROW + ROW / 2;
        return (
          <g key={row.group}>
            <line x1={LEFT} x2={WIDTH - RIGHT} y1={y} y2={y} stroke="var(--color-gray-100)" strokeWidth="1.5" />
            <text x={LEFT - 28} y={y + 9} textAnchor="end" fontSize="28" fontWeight="600" fill="var(--color-gray-800)">
              {row.group}
            </text>
            <line x1={x(row.reported)} x2={x(row.registered)} y1={y} y2={y} stroke="var(--color-gray-300)" strokeWidth="4" />
            <line
              x1={x(row.reported)}
              x2={x(row.reported)}
              y1={y - 18}
              y2={y + 18}
              stroke="var(--color-gray-600)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx={x(row.registered)} cy={y} r={13} fill="var(--pe-teal)" stroke="white" strokeWidth="2" />
            <text x={x(row.registered)} y={y - 24} textAnchor="middle" fontSize="25" fontWeight="700" fill="var(--pe-teal-dark)">
              {row.registeredLabel}
            </text>
            <text x={x(row.reported)} y={y + 45} textAnchor="middle" fontSize="25" fontWeight="600" fill="var(--color-gray-600)">
              {row.reportedLabel}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function ForecastSlide() {
  return (
    <Frame title={forecast.title}>
      <div className="h-full">
        <ForecastChart />
      </div>
    </Frame>
  );
}
