import { Fragment } from "react";
import {
  IconArrowsExchange,
  IconBriefcase,
  IconBuildingBank,
  IconBuildingFactory2,
  IconChartLine,
  IconCrane,
  IconEngine,
  IconHome,
  IconLock,
  IconPoint,
  IconReceiptTax,
  IconScale,
  IconShip,
  IconShoppingCart,
  IconTag,
  IconWallet,
  IconWorld,
  type Icon,
} from "@tabler/icons-react";
import {
  bankRate,
  incomeTax,
  cutLinks,
  groupFlows,
  groupLinkCount,
  modelModules,
  moduleGroups,
  mortgagePassThrough,
  multiplierRows,
} from "../content";
import MathText from "@/slideshows/l0-ima-2026/components/MathText";
import styles from "./deck.module.css";

// HTML, CSS and SVG figures, no chart library. Every value comes from
// content.ts; this file only adds an icon to each row label.

/** A line of maths, rendered with KaTeX by the repo's existing component. */
export function Maths({ tex }: { tex: string }) {
  return <MathText tex={tex} className={styles.maths} />;
}

const plotMax = 1.1;
const pct = (value: number) => `${(Math.min(value, plotMax) / plotMax) * 100}%`;

const multiplierIcons: Record<string, Icon> = {
  "Government consumption": IconBuildingBank,
  "Income tax, basic rate +1p": IconReceiptTax,
  "VAT +1pp": IconTag,
  "Government investment": IconCrane,
};

// A row whose values sit closer than this on the axis draws small dots with
// the quarter above each, in place of numbered dots that would overlap.
const closeWithin = 0.07;
const quarterTone = [styles.dotQ1, styles.dotQ4, styles.dotQ12];

function MultiplierLegend() {
  return (
    <div className={styles.legend}>
      <span>
        <i className={`${styles.legendDot} ${styles.dotQ1}`} />
        After 1 quarter
      </span>
      <span>
        <i className={`${styles.legendDot} ${styles.dotQ4}`} />
        After 4
      </span>
      <span>
        <i className={`${styles.legendDot} ${styles.dotQ12}`} />
        After 12
      </span>
      <span>
        <i className={styles.legendTick} />
        The OBR&apos;s multiplier
      </span>
    </div>
  );
}

/** GDP per pound at q1, q4 and q12 against the OBR's published multiplier. */
export function MultiplierPlot() {
  const ticks = [0, 0.25, 0.5, 0.75, 1];
  const groups = [
    { title: "Default setup", rows: multiplierRows.filter((row) => !row.optIn) },
    { title: "Opt-in switches", rows: multiplierRows.filter((row) => row.optIn) },
  ];
  return (
    <div className={styles.dotPlot}>
      {groups.map((group, index) => {
        // The opt-in rows arrive at the slide's second build step.
        const step = index === 0 ? undefined : 2;
        return (
        <Fragment key={group.title}>
          <p className={styles.dotGroup} data-step={step}>
            {group.title}
          </p>
          {index === 0 ? (
            <>
              <MultiplierLegend />
              <p className={styles.dotHead}>After 1 / 4 / 12 quarters</p>
            </>
          ) : (
            <>
              <span className={styles.dotRule} data-step={step} />
              <span className={styles.dotRule} data-step={step} />
            </>
          )}
          {group.rows.map((row) => {
            const low = Math.min(row.q1, row.q4, row.q12);
            const high = Math.max(row.q1, row.q4, row.q12);
            const RowIcon = multiplierIcons[row.label] ?? IconPoint;
            const points = [
              { quarter: 1, value: row.q1 },
              { quarter: 4, value: row.q4 },
              { quarter: 12, value: row.q12 },
            ];
            const sorted = points.map((point) => point.value).sort((a, b) => a - b);
            const close = sorted[1] - sorted[0] < closeWithin || sorted[2] - sorted[1] < closeWithin;
            return (
              <Fragment key={`${row.label}-${row.setting}`}>
                <div className={styles.dotLabel} data-step={step}>
                  <RowIcon stroke={1.8} aria-hidden="true" />
                  <div>
                    <h2>{row.label}</h2>
                    <p>
                      {row.size}
                      {row.setting && (
                        <span className={`${styles.chip} ${styles.chipMid}`}>{row.setting}</span>
                      )}
                    </p>
                  </div>
                </div>
                <div className={styles.track} data-step={step}>
                  <div
                    className={styles.trackLine}
                    style={{ left: pct(low), width: `calc(${pct(high)} - ${pct(low)})` }}
                  />
                  <div className={styles.benchmark} style={{ left: pct(row.obr) }}>
                    <span>OBR</span>
                  </div>
                  {points.map((point, index) => (
                    <div
                      key={point.quarter}
                      className={`${styles.dot} ${quarterTone[index]} ${close ? styles.dotSmall : ""} ${close && index === 1 ? styles.dotRaised : ""}`}
                      style={{ left: pct(point.value) }}
                    >
                      {close ? <span>{point.quarter}</span> : point.quarter}
                    </div>
                  ))}
                </div>
                <div className={styles.dotValue} data-step={step}>
                  {row.display}
                  <span>OBR {row.obrLabel}</span>
                </div>
              </Fragment>
            );
          })}
        </Fragment>
        );
      })}
      <p className={styles.axisLabel}>GDP change per £1</p>
      <div className={styles.axis}>
        {ticks.map((tick) => (
          <span key={tick} style={{ left: pct(tick) }}>
            {tick.toFixed(2)}
          </span>
        ))}
      </div>
      <div />
    </div>
  );
}

// The income-tax path as a line over time: quarter 1 is 2025Q1 (the scenario
// runs 2025Q1–2027Q4), so the 12 points are the quarters of 2025 to 2027.
const pathPlot = { width: 640, height: 250, left: 52, right: 14, top: 14, bottom: 46 };
const pathYears = [2025, 2026, 2027];
const pathGrid = [0, -200, -400, -600];
const pathMarked = [0, 3, 7, 11];

/**
 * UK GDP below baseline, quarter by quarter, for the income-tax scenario. A
 * time series: the line draws left to right, and four quarters carry their
 * value.
 */
export function IncomeTaxPath() {
  const { width, height, left, right, top, bottom } = pathPlot;
  const values = incomeTax.gdpPath;
  const floor = pathGrid[pathGrid.length - 1];
  const x = (index: number) => left + ((width - left - right) * (index + 0.5)) / values.length;
  const y = (value: number) => top + ((height - top - bottom) * value) / floor;
  const line = values.map((value, index) => `${index ? "L" : "M"}${x(index)} ${y(value)}`).join(" ");
  return (
    <svg
      className={styles.pathPlot}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="UK GDP below baseline by quarter, 2025 to 2027"
    >
      {pathGrid.map((value) => (
        <g key={value}>
          <line x1={left} x2={width - right} y1={y(value)} y2={y(value)} className={styles.pathGrid} />
          <text x={left - 8} y={y(value)} className={styles.pathTick} textAnchor="end">
            {value === 0 ? "0" : `−${Math.abs(value)}`}
          </text>
        </g>
      ))}
      <path
        d={`${line} L${x(values.length - 1)} ${y(0)} L${x(0)} ${y(0)} Z`}
        className={styles.pathArea}
      />
      <path d={line} pathLength={1} className={styles.pathLine} />
      {pathMarked.map((index, order) => (
        <g key={index} className={styles.pathPoint} style={{ animationDelay: `${500 + order * 350}ms` }}>
          <circle cx={x(index)} cy={y(values[index])} r="4.5" />
          <text
            x={x(index) + (index === 0 ? 8 : 0)}
            y={y(values[index]) + 19}
            textAnchor={index === 0 ? "start" : index === 11 ? "end" : "middle"}
          >
            −{Math.abs(values[index])}
          </text>
        </g>
      ))}
      {values.map((_, index) => (
        <text key={index} x={x(index)} y={height - bottom + 15} className={styles.pathTick} textAnchor="middle">
          Q{(index % 4) + 1}
        </text>
      ))}
      {pathYears.map((year, index) => (
        <g key={year}>
          <line
            x1={x(index * 4) - 14}
            x2={x(index * 4 + 3) + 14}
            y1={height - bottom + 24}
            y2={height - bottom + 24}
            className={styles.pathGrid}
          />
          <text x={(x(index * 4) + x(index * 4 + 3)) / 2} y={height - 6} className={styles.pathYear} textAnchor="middle">
            {year}
          </text>
        </g>
      ))}
    </svg>
  );
}

/**
 * Peak fall in GDP for a 1pp Bank Rate rise held four quarters: our two runs
 * as bars, the Bank of England's estimate as one range.
 */
export function BankRateBars() {
  const [held, follows, low, high] = bankRate;
  const width = (value: number) => `${(value / high.value) * 78}%`;
  return (
    <div className={styles.hbars}>
      <p className={styles.hbarLabel}>
        <IconLock stroke={1.8} aria-hidden="true" />
        {held.label}
      </p>
      <div className={styles.hbarTrack}>
        <div className={styles.hbar} style={{ width: width(held.value) }} />
        <span className={styles.hbarValue}>{held.display}</span>
      </div>
      <p className={styles.hbarLabel}>
        <IconHome stroke={1.8} aria-hidden="true" />
        <span>
          {follows.label}
          <small>{mortgagePassThrough}</small>
        </span>
      </p>
      <div className={styles.hbarTrack}>
        <div className={styles.hbar} style={{ width: width(follows.value) }} />
        <span className={styles.hbarValue}>{follows.display}</span>
      </div>
      <p className={styles.hbarLabel}>
        <IconBuildingBank stroke={1.8} aria-hidden="true" />
        Bank of England estimate
      </p>
      <div className={styles.hbarTrack}>
        <div
          className={`${styles.hbar} ${styles.hbarRange}`}
          style={{ marginLeft: width(low.value), width: width(high.value - low.value) }}
        />
        <span className={styles.hbarValue}>
          {low.display} to {high.display}
        </span>
      </div>
    </div>
  );
}

const moduleIcons: Record<string, Icon> = {
  "GDP and output": IconChartLine,
  Consumption: IconShoppingCart,
  "Investment and inventories": IconBuildingFactory2,
  "Labour market": IconBriefcase,
  Exports: IconShip,
  Imports: IconArrowsExchange,
  "Balance of payments": IconWorld,
  "North Sea oil": IconEngine,
  "Prices and wages": IconTag,
  "Income accounts": IconWallet,
  "Public sector": IconBuildingBank,
  "Finance and balance sheets": IconScale,
};

// The module map: one canvas, in units of a thousandth of its width. Group
// boxes, module tiles and arrows are all placed from these constants, so the
// figure keeps its proportions at any size.
const map = { width: 1000, height: 338 };
type Box = { x: number; y: number; w: number; h: number };

const groupBox: Record<string, Box> = {
  Demand: { x: 0, y: 0, w: 600, h: 184 },
  "Supply and prices": { x: 720, y: 0, w: 280, h: 184 },
  "Income and sectors": { x: 0, y: 252, w: 1000, h: 86 },
};

const row = (y: number, h: number, x: number, w: number, names: string[], gap = 8) => {
  const width = (w - gap * (names.length - 1)) / names.length;
  return names.map((name, index): [string, Box] => [
    name,
    { x: x + index * (width + gap), y, w: width, h },
  ]);
};

const tileBox: Record<string, Box> = Object.fromEntries([
  ...row(30, 46, 10, 580, ["Consumption", "Investment and inventories", "Exports", "Imports"]),
  ...row(128, 46, 10, 580, ["GDP and output"]),
  ...row(30, 44, 730, 260, ["Labour market"]),
  ...row(80, 44, 730, 260, ["Prices and wages"]),
  ...row(130, 44, 730, 260, ["North Sea oil"]),
  ...row(280, 48, 10, 980, [
    "Income accounts",
    "Public sector",
    "Balance of payments",
    "Finance and balance sheets",
  ]),
]);

// The key sits in the gap between the two pairs of vertical arrows.
const keyBox: Box = { x: 478, y: 186, w: 220, h: 64 };

// Where each arrow between two groups runs, and where its label sits.
type Route = {
  from: [number, number];
  to: [number, number];
  label: [number, number];
  anchor: "start" | "middle" | "end";
};

const routes: Record<string, Route> = {
  "Demand>Supply and prices": { from: [604, 66], to: [716, 66], label: [660, 46], anchor: "middle" },
  "Supply and prices>Demand": { from: [716, 118], to: [604, 118], label: [660, 142], anchor: "middle" },
  "Demand>Income and sectors": { from: [260, 188], to: [260, 248], label: [238, 215], anchor: "end" },
  "Income and sectors>Demand": { from: [330, 248], to: [330, 188], label: [352, 215], anchor: "start" },
  "Supply and prices>Income and sectors": {
    from: [800, 188],
    to: [800, 248],
    label: [778, 215],
    anchor: "end",
  },
  "Income and sectors>Supply and prices": {
    from: [870, 248],
    to: [870, 188],
    label: [892, 215],
    anchor: "start",
  },
};

// One colour and one build step for the flows out of each group; the dashed
// links come last.
const flowStyle: Record<string, { step: number; className: string; key: string }> = {
  Demand: { step: 2, className: styles.flowOutput, key: "Out of demand: output" },
  "Supply and prices": { step: 3, className: styles.flowPrices, key: "Out of supply and prices" },
  "Income and sectors": { step: 4, className: styles.flowIncomes, key: "Out of income and sectors" },
};
const cutStep = 5;
// The dashed links' label sits between the second and third of them.
const cutLabelAt: [number, number] = [300, 104];

/** A straight arrow: where its shaft ends, and its head as a triangle. */
function arrow([x1, y1]: [number, number], [x2, y2]: [number, number], width: number) {
  const length = Math.hypot(x2 - x1, y2 - y1);
  const ux = (x2 - x1) / length;
  const uy = (y2 - y1) / length;
  const head = 8 + width;
  const wing = 4 + width * 0.9;
  const bx = x2 - ux * head;
  const by = y2 - uy * head;
  return {
    end: [bx + ux, by + uy],
    head: `M${bx - uy * wing} ${by + ux * wing} L${x2} ${y2} L${bx + uy * wing} ${by - ux * wing} Z`,
  };
}

const place = (box: Box) => ({
  left: `${(box.x / map.width) * 100}%`,
  top: `${(box.y / map.height) * 100}%`,
  width: `${(box.w / map.width) * 100}%`,
  height: `${(box.h / map.height) * 100}%`,
});

/**
 * The 12 modules in three groups, with one arrow for each flow between two
 * groups (weight and number: the equations that carry it; colour: the group
 * it leaves) and dashed arrows for the spending links that don't reach GDP
 * in the OBR's file. The arrows arrive one colour per build step.
 */
export function ModuleMap() {
  const modules = new Map(modelModules.map((module) => [module.name, module]));
  return (
    <div className={styles.moduleMap}>
      {moduleGroups.map((group) => (
        <div key={group.name} className={styles.groupBox} style={place(groupBox[group.name])}>
          <b>{group.name}</b>
          {group.modules.reduce((sum, name) => sum + (modules.get(name)?.equations ?? 0), 0)}{" "}
          equations
        </div>
      ))}
      <svg viewBox={`0 0 ${map.width} ${map.height}`} aria-hidden="true">
        {cutLinks.map((link, index) => {
          const from = tileBox[link.from];
          const to = tileBox[link.to];
          const x = from.x + from.w / 2;
          return (
            <g key={link.from} data-step={cutStep} style={{ animationDelay: `${index * 120}ms` }}>
              <line x1={x} y1={from.y + from.h + 3} x2={x} y2={to.y - 9} className={styles.linkCut} />
              <path
                d={`M${x - 5} ${to.y - 10} L${x} ${to.y - 2} L${x + 5} ${to.y - 10} Z`}
                className={styles.linkCutHead}
              />
            </g>
          );
        })}
        <text className={styles.cutLabel} textAnchor="middle" data-step={cutStep}>
          <tspan x={cutLabelAt[0]} y={cutLabelAt[1] - 6}>
            Doesn&apos;t reach GDP
          </tspan>
          <tspan x={cutLabelAt[0]} y={cutLabelAt[1] + 6}>
            in the OBR&apos;s file
          </tspan>
        </text>
        {groupFlows.map((flow, index) => {
          const route = routes[`${flow.from}>${flow.to}`];
          if (!route) return null;
          const count = groupLinkCount(flow.from, flow.to);
          const cx = (route.from[0] + route.to[0]) / 2;
          const cy = (route.from[1] + route.to[1]) / 2;
          const top = route.label[1] - (flow.label.length - 1) * 6.5;
          const { step, className } = flowStyle[flow.from];
          const shape = arrow(route.from, route.to, 2.5 + count * 0.2);
          // The two arrows of a step draw one after the other.
          const delay = (index % 2) * 500;
          return (
            <g key={`${flow.from}-${flow.to}`} className={className}>
              <line
                x1={route.from[0]}
                y1={route.from[1]}
                x2={shape.end[0]}
                y2={shape.end[1]}
                pathLength={1}
                strokeWidth={2.5 + count * 0.2}
                className={styles.flowLine}
                data-step={step}
                style={{ animationDelay: `${delay}ms` }}
              />
              <g data-step={step} style={{ animationDelay: `${delay + 550}ms` }}>
                <path d={shape.head} className={styles.flowHead} />
                <circle cx={cx} cy={cy} r="10" className={styles.linkBadge} />
                <text x={cx} y={cy} className={styles.flowCount}>
                  {count}
                </text>
                <text className={styles.flowLabel} textAnchor={route.anchor}>
                  {flow.label.map((line, row) => (
                    <tspan key={line} x={route.label[0]} y={top + row * 13}>
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
      <ul className={styles.mapKey} style={place(keyBox)}>
        {Object.values(flowStyle).map(({ step, className, key }) => (
          <li key={key} className={className} data-step={step}>
            <i className={styles.keyLine} />
            {key}
          </li>
        ))}
        <li data-step={2}>
          <span className={styles.keyBadge}>19</span>
          Equations linking the groups; thicker, more
        </li>
        <li>
          <span className={`${styles.chip} ${styles.chipMid}`}>Amber</span>
          An input in the OBR&apos;s file
        </li>
      </ul>
      {modelModules.map((module) => {
        const TileIcon = moduleIcons[module.name] ?? IconPoint;
        return (
          <div key={module.name} className={styles.moduleTile} style={place(tileBox[module.name])}>
            <TileIcon stroke={1.8} aria-hidden="true" />
            <h2>{module.name}</h2>
            <span className={styles.moduleCount}>{module.equations}</span>
            {module.exogenous && (
              <span className={`${styles.chip} ${styles.chipMid}`}>{module.exogenous}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
