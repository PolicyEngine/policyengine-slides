'use client';

import { useMemo, useRef, useState } from 'react';

export interface Series {
  label: string;
  color: string;
  dash?: string;
  width?: number;
  /** y values aligned with the chart's shared x array. */
  y: number[];
}

interface LineChartProps {
  x: number[];
  series: Series[];
  xLabel: string;
  yLabel: string;
  xTicks: number[];
  yTicks: number[];
  xFormat?: (v: number) => string;
  yFormat?: (v: number) => string;
  /** Format for the hover readout; defaults to yFormat. */
  readoutFormat?: (v: number) => string;
  height?: number;
  /** Draw a horizontal reference line at this y value. */
  zeroLine?: number;
}

const W = 1000;
const PAD = { left: 84, right: 24, top: 16, bottom: 56 };

const dollars0 = (v: number) => `$${Math.round(v).toLocaleString('en-US')}`;
const dollars2 = (v: number) =>
  `${v < 0 ? '−' : ''}$${Math.abs(v).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/**
 * A minimal interactive line chart. Every point it draws comes from the data it
 * is given (PolicyEngine outputs exported by the pilot's prelim/2026-10-07
 * scripts); it computes nothing itself. Hovering shows each
 * series' value at the nearest x in the data.
 */
export default function LineChart({
  x,
  series,
  xLabel,
  yLabel,
  xTicks,
  yTicks,
  xFormat = dollars0,
  yFormat = dollars0,
  readoutFormat = dollars2,
  height = 440,
  zeroLine,
}: LineChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const H = height;
  const xMin = Math.min(...xTicks, x[0]);
  const xMax = Math.max(...xTicks, x[x.length - 1]);
  const yMin = Math.min(...yTicks);
  const yMax = Math.max(...yTicks);
  const sx = (v: number) => PAD.left + ((v - xMin) / (xMax - xMin)) * (W - PAD.left - PAD.right);
  const sy = (v: number) => H - PAD.bottom - ((v - yMin) / (yMax - yMin)) * (H - PAD.top - PAD.bottom);

  const paths = useMemo(
    () =>
      series.map((s) =>
        s.y
          .map((v, i) => `${i === 0 ? 'M' : 'L'}${sx(x[i]).toFixed(1)},${sy(Math.min(Math.max(v, yMin), yMax)).toFixed(1)}`)
          .join(''),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [series, x, H, yMin, yMax, xMin, xMax],
  );

  function onMove(e: React.MouseEvent<SVGSVGElement>) {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * W;
    const value = xMin + ((px - PAD.left) / (W - PAD.left - PAD.right)) * (xMax - xMin);
    let best = 0;
    for (let i = 1; i < x.length; i++) if (Math.abs(x[i] - value) < Math.abs(x[best] - value)) best = i;
    setHover(best);
  }

  return (
    <div className="relative w-full max-w-[1150px]">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto select-none"
        onMouseMove={onMove}
        onMouseLeave={() => setHover(null)}
        role="img"
        aria-label={`${yLabel} by ${xLabel}`}
      >
        {yTicks.map((t) => (
          <g key={`y${t}`}>
            <line x1={PAD.left} x2={W - PAD.right} y1={sy(t)} y2={sy(t)} stroke="var(--color-gray-200)" strokeWidth={1} />
            <text x={PAD.left - 10} y={sy(t) + 5} textAnchor="end" fontSize={15} fill="var(--color-gray-600)">
              {yFormat(t)}
            </text>
          </g>
        ))}
        {zeroLine !== undefined && (
          <line x1={PAD.left} x2={W - PAD.right} y1={sy(zeroLine)} y2={sy(zeroLine)} stroke="var(--color-gray-500)" strokeWidth={1.5} />
        )}
        {xTicks.map((t) => (
          <text key={`x${t}`} x={sx(t)} y={H - PAD.bottom + 24} textAnchor="middle" fontSize={15} fill="var(--color-gray-600)">
            {xFormat(t)}
          </text>
        ))}
        <text x={(PAD.left + W - PAD.right) / 2} y={H - 8} textAnchor="middle" fontSize={16} fill="var(--color-gray-700)">
          {xLabel}
        </text>
        <text transform={`translate(18 ${(PAD.top + H - PAD.bottom) / 2}) rotate(-90)`} textAnchor="middle" fontSize={16} fill="var(--color-gray-700)">
          {yLabel}
        </text>
        {series.map((s, i) => (
          <path key={s.label} d={paths[i]} fill="none" stroke={s.color} strokeWidth={s.width ?? 2.5} strokeDasharray={s.dash} strokeLinejoin="round" />
        ))}
        {hover !== null && (
          <g>
            <line x1={sx(x[hover])} x2={sx(x[hover])} y1={PAD.top} y2={H - PAD.bottom} stroke="var(--color-gray-400)" strokeDasharray="4 4" />
            {series.map((s) => (
              <circle key={s.label} cx={sx(x[hover])} cy={sy(Math.min(Math.max(s.y[hover], yMin), yMax))} r={5} fill={s.color} stroke="white" strokeWidth={1.5} />
            ))}
          </g>
        )}
      </svg>
      <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-1 text-base text-gray-700">
        {series.map((s) => (
          <span key={s.label} className="flex items-center gap-2">
            <svg width="28" height="10" aria-hidden>
              <line x1="0" x2="28" y1="5" y2="5" stroke={s.color} strokeWidth={s.width ?? 2.5} strokeDasharray={s.dash} />
            </svg>
            {s.label}
            {hover !== null && <span className="font-semibold tabular-nums">{readoutFormat(s.y[hover])}</span>}
          </span>
        ))}
        {hover !== null && (
          <span className="ml-auto text-gray-500 tabular-nums">
            {xLabel}: {dollars0(x[hover])}
          </span>
        )}
      </div>
    </div>
  );
}
