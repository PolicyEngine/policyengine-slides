'use client';

// Strings defined in this file: "40%", "60%", "80%", "100%" (axis tick labels), the joining words of the chart's
// aria-label ("alone", "with the tool") and "Source:"; everything else comes from text.pbNonzero.
import type { CSSProperties } from 'react';
import { Frame } from '../deck';
import { pbNonzero } from '../text';

/**
 * PolicyBench on the 187 nonzero dollar amounts, as one slide in two builds: the three models alone (rings), then with a
 * tool that runs PolicyEngine (filled dots joined to the rings). The slide stays mounted between the builds, and build 1
 * already lays out everything build 2 shows, hidden, so nothing moves: live, the tool's dots fade in and each bar
 * grows out of its ring. Under the chart, build 2 prints two lines of small type: the lead's second sentence (the pilot
 * gave the models a tool that runs PolicyEngine, which also computes the reference answers) and a link to the pilot's
 * note. The lead's first sentence, the overall scores and the footnotes in text.pbNonzero are not rendered.
 */

const W = 1400;
const LEFT = 300;
const RIGHT = 70;
const TOP = 76;
const ROW = 100;
const R = 15;
const MIN = 40;
const MAX = 100;
const TICKS = [40, 60, 80, 100];
const AXIS_BOTTOM = TOP + pbNonzero.rows.length * ROW;
const H = AXIS_BOTTOM + 90;
const x = (v: number) => LEFT + ((v - MIN) / (MAX - MIN)) * (W - LEFT - RIGHT);

const reveal = (on: boolean, delay = 0): CSSProperties => ({
  opacity: on ? 1 : 0,
  transition: 'opacity 450ms ease',
  transitionDelay: on ? `${delay}ms` : '0ms',
});

function Chart({ withTool }: { withTool: boolean }) {
  const label = pbNonzero.rows
    .map((r) => `${r.model}: ${r.alone} alone${withTool ? `, ${r.withTool} with the tool` : ''}`)
    .join('. ');
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${pbNonzero.axis}. ${label}.`} className="h-full w-full">
      <g>
        <circle cx={LEFT + R} cy={30} r={R - 3} fill="white" stroke="var(--pe-teal)" strokeWidth="5" />
        <text x={LEFT + R * 2 + 12} y={39} fontSize="26" fill="var(--color-gray-700)">
          {pbNonzero.legend.alone}
        </text>
        <g style={reveal(withTool)} aria-hidden={!withTool}>
          <circle cx={LEFT + 170} cy={30} r={R - 3} fill="var(--pe-teal)" />
          <text x={LEFT + 170 + R + 12} y={39} fontSize="26" fill="var(--color-gray-700)">
            {pbNonzero.legend.withTool}
          </text>
        </g>
      </g>

      {TICKS.map((tick) => (
        <g key={tick}>
          <line x1={x(tick)} x2={x(tick)} y1={TOP - 8} y2={AXIS_BOTTOM} stroke="var(--color-gray-200)" strokeWidth="1.5" />
          <text x={x(tick)} y={AXIS_BOTTOM + 34} textAnchor="middle" fontSize="25" fill="var(--color-gray-600)">
            {`${tick}%`}
          </text>
        </g>
      ))}
      <line x1={LEFT} x2={W - RIGHT} y1={AXIS_BOTTOM} y2={AXIS_BOTTOM} stroke="var(--color-gray-300)" strokeWidth="1.5" />
      <text x={(LEFT + W - RIGHT) / 2} y={AXIS_BOTTOM + 80} textAnchor="middle" fontSize="25" fill="var(--color-gray-700)">
        {pbNonzero.axis}
      </text>

      {pbNonzero.rows.map((row, i) => {
        const y = TOP + i * ROW + ROW / 2;
        const a = x(parseFloat(row.alone));
        const b = x(parseFloat(row.withTool));
        const length = b - a - 2 * R;
        return (
          <g key={row.model}>
            <text x={LEFT - 28} y={y + 10} textAnchor="end" fontSize="31" fontWeight="600" fill="var(--color-gray-800)">
              {row.model}
            </text>
            {/* The bar grows from the ring to the tool's dot: one dash as long as the bar, offset by its length on build 1. */}
            <line
              x1={a + R}
              x2={b - R}
              y1={y}
              y2={y}
              stroke="var(--pe-teal)"
              strokeOpacity="0.45"
              strokeWidth="7"
              strokeDasharray={`${length} ${length}`}
              style={{ strokeDashoffset: withTool ? 0 : length, transition: 'stroke-dashoffset 700ms ease' }}
            />
            <circle cx={a} cy={y} r={R} fill="white" stroke="var(--pe-teal)" strokeWidth="5" />
            <text x={a} y={y - 26} textAnchor="middle" fontSize="27" fontWeight="700" fill="var(--color-gray-700)">
              {row.alone}
            </text>
            <g style={reveal(withTool, 450)} aria-hidden={!withTool}>
              <circle cx={b} cy={y} r={R} fill="var(--pe-teal)" />
              <text x={b} y={y - 26} textAnchor="middle" fontSize="27" fontWeight="800" fill="var(--pe-teal)">
                {row.withTool}
              </text>
            </g>
          </g>
        );
      })}
    </svg>
  );
}

export default function PolicyBenchNonzeroSlide({ buildStep }: { buildStep?: number }) {
  const withTool = (buildStep ?? 1) >= 2;
  return (
    <Frame title={pbNonzero.title}>
      <div className="flex h-full flex-col">
        <div className="flex min-h-0 flex-1 items-center justify-center">
          <Chart withTool={withTool} />
        </div>
        <p
          className="pt-[1vh] text-center leading-snug text-gray-500"
          style={{ fontSize: 'clamp(11px, 1.7vh, 19px)', ...reveal(withTool) }}
          aria-hidden={!withTool}
          inert={!withTool}
        >
          <span className="block">{pbNonzero.lead[1]}</span>
          <span className="block">
            Source:{' '}
            {/* pointer-events-auto keeps a click on the link from also advancing the deck. On build 1 the paragraph is
                inert, so the hidden link takes no click, focus or key. */}
            <a
              href={pbNonzero.source.href}
              className={`underline ${withTool ? 'pointer-events-auto' : 'pointer-events-none'}`}
              tabIndex={withTool ? undefined : -1}
            >
              {pbNonzero.source.label}
            </a>
          </span>
        </p>
      </div>
    </Frame>
  );
}
