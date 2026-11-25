'use client';

// Strings defined in this file: "0%", "25%", "50%", "75%", "100%" (axis ticks) and each row's share with "%";
// everything else comes from text.surveys.
// A row may carry a second, smaller line (`sub`): the EU row says its 53% is a country average.
import { Frame } from '../deck';
import { surveys } from '../text';

/**
 * How much of what governments record the main household surveys capture: four points, US, UK and EU, each as a share
 * of its comparison benchmark, with a line at 100%. text.surveys.footnotes holds the sources; the slide does not
 * render them.
 */
const W = 1400;
const LEFT = 560;
const RIGHT = 90;
const TOP = 80;
const ROW = 96;
const R = 16;
const TICKS = [0, 25, 50, 75, 100];
const AXIS_BOTTOM = TOP + surveys.rows.length * ROW;
const H = AXIS_BOTTOM + 96;
const x = (v: number) => LEFT + (v / 100) * (W - LEFT - RIGHT);

function Chart() {
  const label = surveys.rows.map((r) => `${r.label}${'sub' in r ? ` (${r.sub})` : ''}: ${r.share}%`).join('. ');
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${surveys.axis}. ${label}.`} className="h-full w-full">
      {TICKS.map((tick) => (
        <g key={tick}>
          {tick < 100 && <line x1={x(tick)} x2={x(tick)} y1={TOP - 10} y2={AXIS_BOTTOM} stroke="var(--color-gray-200)" strokeWidth="1.5" />}
          <text x={x(tick)} y={AXIS_BOTTOM + 36} textAnchor="middle" fontSize="27" fill="var(--color-gray-600)">
            {`${tick}%`}
          </text>
        </g>
      ))}
      <line x1={LEFT} x2={W - RIGHT} y1={AXIS_BOTTOM} y2={AXIS_BOTTOM} stroke="var(--color-gray-300)" strokeWidth="1.5" />
      <line x1={x(100)} x2={x(100)} y1={TOP - 34} y2={AXIS_BOTTOM} stroke="var(--color-gray-800)" strokeWidth="3" />
      <text x={x(100)} y={TOP - 46} textAnchor="middle" fontSize="27" fontWeight="700" fill="var(--color-gray-800)">
        {surveys.line}
      </text>
      <text x={(LEFT + W - RIGHT) / 2} y={AXIS_BOTTOM + 84} textAnchor="middle" fontSize="27" fill="var(--color-gray-700)">
        {surveys.axis}
      </text>
      {surveys.rows.map((row, i) => {
        const y = TOP + i * ROW + ROW / 2;
        return (
          <g key={row.label}>
            <text x={LEFT - 28} y={'sub' in row ? y - 6 : y + 11} textAnchor="end" fontSize="32" fontWeight="600" fill="var(--color-gray-800)">
              {row.label}
            </text>
            {'sub' in row && (
              <text x={LEFT - 28} y={y + 30} textAnchor="end" fontSize="27" fill="var(--color-gray-600)">
                {row.sub}
              </text>
            )}
            <line x1={x(row.share) + R} x2={x(100)} y1={y} y2={y} stroke="var(--color-gray-300)" strokeWidth="6" strokeDasharray="2 10" strokeLinecap="round" />
            <circle cx={x(row.share)} cy={y} r={R} fill="var(--pe-teal)" />
            <text x={x(row.share) - R - 14} y={y + 11} textAnchor="end" fontSize="32" fontWeight="800" fill="var(--pe-teal)" stroke="white" strokeWidth="8" strokeLinejoin="round" paintOrder="stroke">
              {`${row.share}%`}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function SurveysSlide() {
  return (
    <Frame title={surveys.title}>
      <div className="flex h-full items-center">
        <Chart />
      </div>
    </Frame>
  );
}
