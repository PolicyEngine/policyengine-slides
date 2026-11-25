'use client';

// Strings defined in this file (all on the chart; the title and "Our literature band" come from text.ts):
//   Y_TITLE  "Elasticity of taxable income, high-income US taxpayers" (value-axis title, above the axis)
//   X_TITLE  "Each dot marks one AI model’s average point estimate over 15 runs, from lowest to highest" (under the dots)
//   band     "<text.beliefs.bandLabel>: 0.25 to 0.50" (range read from the data) and BAND_SOURCE
//            "We drew on Gruber and Saez (2002) and Saez, Slemrod and Giertz (2012)" (the band is ours; these papers informed it)
//   models   "Claude Opus 5", "GPT-5.6 Sol", "Qwen 3.7 Max" (the display names policyengine.org/ai-beliefs gives these
//            data ids, read 22 Nov 2026), below or to the right of their dots
//   ticks    0.2 to 0.6
//   aria     the chart's aria-label, built from the data (not shown on screen)
import { Frame } from '../deck';
import { beliefs } from '../text';
import data from './BeliefsSlide.data.json';

/**
 * Each of the 31 AI models' pooled central estimate of the elasticity of taxable income of top earners, one dot per
 * model, sorted from lowest to highest, over our rough literature band, 0.25 to 0.5. The slide is the title and this
 * chart alone; text.beliefs.footnotes holds the sources. Data: BeliefsSlide.data.json (its `source` field).
 */

const [LO, HI] = data.literatureRange as [number, number];
// Sorted by estimate; ties keep the data file's order, so each labelled name sits on its own dot.
const models = [...data.models].sort((a, b) => a.center - b.center);
const inside = models.filter((m) => m.center >= LO && m.center <= HI).length;
// text.beliefs.chartCaption says "28 of 31"; the data drawn must agree.
if (models.length !== 31 || inside !== 28) {
  throw new Error(`beliefs chart: expected 28 of 31 centers in range, found ${inside} of ${models.length}`);
}

// The viewBox matches the chart's box under a one-line title at 1440 x 810 (1312 x ~484 px: the body less this
// slide's 0.5vh of padding above and below), so a unit is a pixel there; in the bare view the box is 1312 x ~457 and
// the chart draws at about 0.94.
const WIDTH = 1312;
const HEIGHT = 484;
const LEFT = 64;
const DOTS_RIGHT = 175; // room right of the last dot for its label
const TOP = 50;
const BOTTOM = 52;
const MIN = 0.2;
const MAX = 0.6;
const TICKS = [0.2, 0.3, 0.4, 0.5, 0.6];
const plotBottom = HEIGHT - BOTTOM;
const COL = (WIDTH - LEFT - DOTS_RIGHT) / models.length;
const R = 9;
const y = (v: number) => plotBottom - ((v - MIN) / (MAX - MIN)) * (plotBottom - TOP);
const x = (i: number) => LEFT + i * COL + COL / 2;
const fmt = (v: number) => v.toFixed(2);

const Y_TITLE = 'Elasticity of taxable income, high-income US taxpayers';
const X_TITLE = 'Each dot marks one AI model’s average point estimate over 15 runs, from lowest to highest';
const BAND_LABEL = `${beliefs.bandLabel}: ${fmt(LO)} to ${fmt(HI)}`;
const BAND_SOURCE = 'We drew on Gruber and Saez (2002) and Saez, Slemrod and Giertz (2012)';
const ARIA = `${models.length} AI models' central estimates of the elasticity of taxable income for high-income US taxpayers, from ${fmt(models[0].center)} to ${fmt(models[models.length - 1].center)}; ${inside} of ${models.length} fall inside our literature band, ${fmt(LO)} to ${fmt(HI)}.`;

/**
 * Models named on the chart: the lowest, one in the middle and the highest. `place` sets where the name sits:
 * below the dot (with a short leader) or to its right.
 */
const LABELLED: { model: string; name: string; place: 'below' | 'belowStart' | 'right' }[] = [
  { model: 'claude-opus-5', name: 'Claude Opus 5', place: 'belowStart' },
  { model: 'gpt-5.6-sol', name: 'GPT-5.6 Sol', place: 'below' },
  { model: 'qwen-3.7-max', name: 'Qwen 3.7 Max', place: 'right' },
];
const labelled = LABELLED.map(({ model, name, place }) => {
  const i = models.findIndex((m) => m.model === model);
  if (i < 0) throw new Error(`beliefs chart: no model ${model} in the data`);
  return { model, name, place, i, cx: x(i), cy: y(models[i].center) };
});

const LABEL_SIZE = 23;
const DROP = 56; // baseline of a "below" name under its dot's center

function ModelLabel({ name, place, cx, cy }: (typeof labelled)[number]) {
  const text = { fontSize: LABEL_SIZE, fontWeight: 600, fill: 'var(--pe-dark)' } as const;
  if (place === 'right') {
    return (
      <text x={cx + R + 9} y={cy + 8} {...text}>
        {name}
      </text>
    );
  }
  return (
    <g>
      <line x1={cx} x2={cx} y1={cy + R + 3} y2={cy + DROP - LABEL_SIZE + 2} stroke="var(--color-gray-500)" strokeWidth="1.5" />
      <text x={place === 'below' ? cx : cx - R - 2} y={cy + DROP} textAnchor={place === 'below' ? 'middle' : 'start'} {...text}>
        {name}
      </text>
    </g>
  );
}

function BeliefsChart() {
  const named = new Set(labelled.map((l) => l.i));
  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label={ARIA} preserveAspectRatio="xMinYMid meet" className="h-full w-full">
      {/* Value axis: title above, ticks to the left */}
      <text x={0} y={28} fontSize="24" fontWeight="600" fill="var(--color-gray-700)">
        {Y_TITLE}
      </text>
      <line x1={LEFT} x2={LEFT} y1={TOP} y2={plotBottom} stroke="var(--color-gray-400)" strokeWidth="2" />
      {TICKS.map((tick) => (
        <g key={tick}>
          <line x1={LEFT - 7} x2={LEFT} y1={y(tick)} y2={y(tick)} stroke="var(--color-gray-400)" strokeWidth="2" />
          <text x={LEFT - 13} y={y(tick) + 8} textAnchor="end" fontSize="24" fill="var(--color-gray-600)">
            {tick.toFixed(1)}
          </text>
        </g>
      ))}

      {/* Literature band, named in its empty lower-right corner */}
      <rect x={LEFT} y={y(HI)} width={WIDTH - LEFT} height={y(LO) - y(HI)} fill="var(--pe-teal)" opacity="0.13" />
      <line x1={LEFT} x2={WIDTH} y1={y(HI)} y2={y(HI)} stroke="var(--pe-teal)" strokeWidth="2" strokeDasharray="6 5" />
      <line x1={LEFT} x2={WIDTH} y1={y(LO)} y2={y(LO)} stroke="var(--pe-teal)" strokeWidth="2" strokeDasharray="6 5" />
      <text x={WIDTH - 16} y={y(LO) - 56} textAnchor="end" fontSize="26" fontWeight="700" fill="var(--pe-teal-dark)">
        {BAND_LABEL}
      </text>
      <text x={WIDTH - 16} y={y(LO) - 20} textAnchor="end" fontSize="21" fill="var(--pe-teal-dark)">
        {BAND_SOURCE}
      </text>

      {/* One dot per model, lowest on the left; amber outside the band; named ones ringed */}
      {models.map((m, i) => {
        const inRange = m.center >= LO && m.center <= HI;
        return (
          <circle
            key={m.model}
            cx={x(i)}
            cy={y(m.center)}
            r={R}
            fill={inRange ? 'var(--pe-teal)' : 'var(--pe-amber)'}
            stroke={named.has(i) ? 'var(--pe-dark)' : 'white'}
            strokeWidth={named.has(i) ? 2.5 : 1.5}
          />
        );
      })}
      {labelled.map((l) => (
        <ModelLabel key={l.model} {...l} />
      ))}

      <line x1={LEFT} x2={WIDTH} y1={plotBottom} y2={plotBottom} stroke="var(--color-gray-400)" strokeWidth="2" />
      <text x={(LEFT + WIDTH) / 2} y={plotBottom + 38} textAnchor="middle" fontSize="24" fill="var(--color-gray-700)">
        {X_TITLE}
      </text>
    </svg>
  );
}

export default function BeliefsSlide() {
  return (
    <Frame title={beliefs.title}>
      <div className="h-full min-h-0 py-[0.5vh]">
        <BeliefsChart />
      </div>
    </Frame>
  );
}
