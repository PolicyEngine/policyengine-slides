// Charts for the analysis slides, drawn as SVG from dashboardData.ts. They
// follow the dashboard's own charts: bars stacked by measure in the
// dashboard's colours (gains above zero, losses below), with the net as a
// line of dots, and the same years and measure names.
import { dashboard } from "../dashboardData";
import styles from "./deck.module.css";

type Measure = (typeof dashboard.measures)[number];
const measures: readonly Measure[] = dashboard.measures;

const MINUS = "−";
export const signed = (value: number, format: (v: number) => string) =>
  `${value < 0 ? MINUS : value > 0 ? "+" : ""}${format(Math.abs(value))}`;
export const bn = (v: number) => `£${v.toFixed(1)}bn`;
export const pounds = (v: number) => `£${Math.round(v).toLocaleString("en-GB")}`;
export const pct = (v: number, digits = 1) => `${v.toFixed(digits)}%`;
export const fiscalYear = (year: number) => `${year}-${String((year + 1) % 100).padStart(2, "0")}`;

function ticks(min: number, max: number, count = 5) {
  const span = max - min;
  const raw = span / count;
  const magnitude = 10 ** Math.floor(Math.log10(raw));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * magnitude).find((s) => span / s <= count) ?? raw;
  const start = Math.floor(min / step) * step;
  const end = Math.ceil(max / step) * step;
  const out: number[] = [];
  for (let t = start; t <= end + step / 1e6; t += step) out.push(Number(t.toFixed(10)));
  return out;
}

type Column = {
  label: string;
  values: Record<string, number>;
  net: number;
  highlight?: boolean;
};

const W = 1000;
const H = 520;
const M = { top: 40, right: 20, bottom: 56, left: 92 };

/** Bars stacked by measure, gains up and losses down, with the net as dots. */
export function StackedChart({
  columns,
  axisLabel,
  xLabel,
  tickFormat,
  netLabel,
  height = H,
}: {
  columns: Column[];
  axisLabel: string;
  xLabel?: string;
  tickFormat: (v: number) => string;
  netLabel?: (v: number) => string;
  height?: number;
}) {
  const totals = columns.map((c) => {
    const vals = Object.values(c.values);
    return {
      up: vals.filter((v) => v > 0).reduce((a, b) => a + b, 0),
      down: vals.filter((v) => v < 0).reduce((a, b) => a + b, 0),
    };
  });
  const lo = Math.min(0, ...totals.map((t) => t.down), ...columns.map((c) => c.net));
  const hi = Math.max(0, ...totals.map((t) => t.up), ...columns.map((c) => c.net));
  const grid = ticks(lo, hi);
  const yMin = grid[0];
  const yMax = grid[grid.length - 1];
  const plotH = height - M.top - M.bottom;
  const plotW = W - M.left - M.right;
  const y = (v: number) => M.top + ((yMax - v) / (yMax - yMin)) * plotH;
  const band = plotW / columns.length;
  const barW = Math.min(band * 0.62, 120);
  const cx = (i: number) => M.left + band * i + band / 2;

  return (
    <svg viewBox={`0 0 ${W} ${height}`} className={styles.svgChart} role="img" aria-label={axisLabel}>
      {columns.map((c, i) =>
        c.highlight ? (
          <rect key={`hl-${c.label}`} x={M.left + band * i} y={M.top} width={band} height={plotH} className={styles.highlight} />
        ) : null,
      )}
      {grid.map((t) => (
        <g key={t}>
          <line x1={M.left} x2={W - M.right} y1={y(t)} y2={y(t)} className={t === 0 ? styles.zeroLine : styles.gridLine} />
          <text x={M.left - 12} y={y(t)} className={styles.tickY}>
            {t === 0 ? tickFormat(0) : signed(t, tickFormat)}
          </text>
        </g>
      ))}
      {columns.map((c, i) => {
        let up = 0;
        let down = 0;
        return (
          <g key={c.label}>
            {measures.map((m) => {
              const v = c.values[m.id] ?? 0;
              if (v === 0) return null;
              const from = v > 0 ? up : down;
              const to = from + v;
              if (v > 0) up = to;
              else down = to;
              return (
                <rect
                  key={m.id}
                  x={cx(i) - barW / 2}
                  width={barW}
                  y={y(Math.max(from, to))}
                  height={Math.max(0.5, Math.abs(y(from) - y(to)))}
                  fill={m.color}
                >
                  <title>{`${m.name}: ${signed(v, tickFormat)}`}</title>
                </rect>
              );
            })}
            <text x={cx(i)} y={height - M.bottom + 30} className={`${styles.tickX} ${c.highlight ? styles.tickStrong : ""}`}>
              {c.label}
            </text>
          </g>
        );
      })}
      <polyline
        points={columns.map((c, i) => `${cx(i)},${y(c.net)}`).join(" ")}
        className={styles.netLine}
      />
      {columns.map((c, i) => (
        <g key={`net-${c.label}`}>
          <circle cx={cx(i)} cy={y(c.net)} r={7} className={styles.netDot} />
          {netLabel && (
            <text x={cx(i)} y={y(c.net) + (c.net < 0 ? 34 : -18)} className={styles.netValue}>
              {netLabel(c.net)}
            </text>
          )}
        </g>
      ))}
      <text transform={`translate(22 ${M.top + plotH / 2}) rotate(-90)`} className={styles.axisLabel}>
        {axisLabel}
      </text>
      {xLabel && (
        <text x={M.left + plotW / 2} y={height - 4} className={styles.axisLabel}>
          {xLabel}
        </text>
      )}
    </svg>
  );
}

/** The dashboard's grouped legend: raise revenue, cost revenue, net. */
export function MeasureLegend({ netName = "Net change", only }: { netName?: string; only?: string[] }) {
  const shown = measures.filter((m) => !only || only.includes(m.id));
  const groups = [
    { title: "Raise revenue", items: shown.filter((m) => m.kind === "raise") },
    { title: "Cost revenue", items: shown.filter((m) => m.kind === "cost") },
  ];
  return (
    <div className={styles.legend}>
      {groups.map((g) => (
        <div key={g.title} className={styles.legendGroup}>
          <p className={styles.legendTitle}>{g.title}</p>
          <ul>
            {g.items.map((m) => (
              <li key={m.id}>
                <i style={{ background: m.color }} />
                {m.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className={styles.legendNet}>
        <i className={styles.legendNetMark} />
        {netName}
      </p>
    </div>
  );
}

/** One example household's change in net income across its income range. */
export function HouseholdCurve({
  points,
  xMax,
  yMax,
}: {
  points: readonly (readonly [number, number])[];
  xMax: number;
  yMax: number;
}) {
  const w = 640;
  const h = 200;
  const m = { top: 14, right: 40, bottom: 36, left: 96 };
  const x = (v: number) => m.left + (v / xMax) * (w - m.left - m.right);
  const y = (v: number) => m.top + ((yMax - v) / yMax) * (h - m.top - m.bottom);
  const step: string[] = [];
  points.forEach(([px, py], i) => {
    if (i > 0) step.push(`${x(px)},${y(points[i - 1][1])}`);
    step.push(`${x(px)},${y(py)}`);
  });
  const area = `${x(0)},${y(0)} ${step.join(" ")} ${x(points[points.length - 1][0])},${y(0)}`;
  const yTicks = [0, yMax / 2, yMax];
  const xTicks = [0, xMax / 2, xMax];
  const flat = points.every(([, v]) => Math.abs(v) < 0.005);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={styles.miniChart} role="img" aria-label="Change in net income across incomes">
      {yTicks.map((t) => (
        <g key={t}>
          <line x1={m.left} x2={w - m.right} y1={y(t)} y2={y(t)} className={t === 0 ? styles.zeroLine : styles.gridLine} />
          <text x={m.left - 8} y={y(t)} className={styles.tickYSmall}>
            {t === 0 ? "£0" : `+£${t}`}
          </text>
        </g>
      ))}
      <polygon points={area} className={styles.gainArea} />
      {flat && (
        <text x={(w + m.left) / 2} y={y(yMax / 2)} className={styles.flatNote}>
          No change at any income
        </text>
      )}
      <polyline points={step.join(" ")} className={styles.gainLine} />
      {xTicks.map((t) => (
        <text key={t} x={x(t)} y={h - 10} className={styles.tickXSmall}>
          {t === 0 ? "£0" : `£${t / 1000}k`}
        </text>
      ))}
    </svg>
  );
}

/** Outturn (solid grey) and the baseline projection (dashed teal) over time. */
export function TimeSeries({
  outturn,
  projection,
  format,
  yMin,
  yMax,
  axisLabel,
}: {
  outturn: readonly (readonly [string, number])[];
  projection: readonly (readonly [string, number])[];
  format: (v: number) => string;
  yMin: number;
  yMax: number;
  axisLabel: string;
}) {
  const w = 620;
  const h = 360;
  const m = { top: 16, right: 40, bottom: 44, left: 76 };
  const years = [...new Set([...outturn, ...projection].map(([yr]) => yr))].sort();
  const x = (yr: string) => m.left + (years.indexOf(yr) / (years.length - 1)) * (w - m.left - m.right);
  const y = (v: number) => m.top + ((yMax - v) / (yMax - yMin)) * (h - m.top - m.bottom);
  const grid = ticks(yMin, yMax, 4);
  const line = (pts: readonly (readonly [string, number])[]) => pts.map(([yr, v]) => `${x(yr)},${y(v)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={styles.lsChart} role="img" aria-label={axisLabel}>
      {grid.map((t) => (
        <g key={t}>
          <line x1={m.left} x2={w - m.right} y1={y(t)} y2={y(t)} className={styles.gridLine} />
          <text x={m.left - 10} y={y(t)} className={styles.tickYSmall}>
            {format(t)}
          </text>
        </g>
      ))}
      <polyline points={line(outturn)} className={styles.outturnLine} />
      <polyline points={line(projection)} className={styles.projectionLine} />
      {outturn.map(([yr, v]) => (
        <circle key={`o-${yr}`} cx={x(yr)} cy={y(v)} r={4} className={styles.outturnDot} />
      ))}
      {projection.map(([yr, v]) => (
        <circle key={`p-${yr}`} cx={x(yr)} cy={y(v)} r={4} className={styles.projectionDot} />
      ))}
      {years.map((yr, i) =>
        i % 2 === 0 ? (
          <text key={yr} x={x(yr)} y={h - 16} className={styles.tickXSmall}>
            {yr}
          </text>
        ) : null,
      )}
      <text transform={`translate(16 ${(h - m.bottom + m.top) / 2}) rotate(-90)`} className={styles.axisLabelSmall}>
        {axisLabel}
      </text>
    </svg>
  );
}

/** Real growth by income decile: rises in teal, falls in amber. */
export function DecileGrowth({ values }: { values: readonly number[] }) {
  const w = 620;
  const h = 360;
  const m = { top: 16, right: 16, bottom: 56, left: 64 };
  const pctValues = values.map((v) => v * 100);
  const grid = ticks(Math.min(0, ...pctValues), Math.max(0, ...pctValues), 4);
  const yMin = grid[0];
  const yMax = grid[grid.length - 1];
  const band = (w - m.left - m.right) / values.length;
  const y = (v: number) => m.top + ((yMax - v) / (yMax - yMin)) * (h - m.top - m.bottom);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={styles.lsChart} role="img" aria-label="Real change by income decile">
      {grid.map((t) => (
        <g key={t}>
          <line x1={m.left} x2={w - m.right} y1={y(t)} y2={y(t)} className={t === 0 ? styles.zeroLine : styles.gridLine} />
          <text x={m.left - 10} y={y(t)} className={styles.tickYSmall}>
            {t === 0 ? "0%" : signed(t, (v) => `${v}%`)}
          </text>
        </g>
      ))}
      {pctValues.map((v, i) => (
        <g key={i}>
          <rect
            x={m.left + band * i + band * 0.2}
            width={band * 0.6}
            y={y(Math.max(0, v))}
            height={Math.max(0.5, Math.abs(y(0) - y(v)))}
            className={v < 0 ? styles.fallBar : styles.riseBar}
          >
            <title>{`Decile ${i + 1}: ${signed(v, (a) => pct(a))}`}</title>
          </rect>
          <text x={m.left + band * i + band / 2} y={h - 34} className={styles.tickXSmall}>
            {i + 1}
          </text>
        </g>
      ))}
      <text x={(w + m.left) / 2} y={h - 6} className={styles.axisLabelSmall}>
        Income decile (1 = lowest)
      </text>
    </svg>
  );
}
