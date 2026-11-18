import { Fragment } from "react";
import {
  IconArrowsExchange,
  IconBriefcase,
  IconBuildingBank,
  IconBuildingFactory2,
  IconChartLine,
  IconCoins,
  IconCrane,
  IconEngine,
  IconHome,
  IconHomeDollar,
  IconLock,
  IconPoint,
  IconReceiptTax,
  IconScale,
  IconShip,
  IconShoppingCart,
  IconTag,
  IconTrendingUp,
  IconUserOff,
  IconWallet,
  IconWorld,
  type Icon,
} from "@tabler/icons-react";
import {
  bankRate,
  incomeTax,
  moduleLinkCount,
  moduleLinks,
  mortgagePassThrough,
  multiplierRows,
  scorecardRows,
  type ScoreRow,
} from "../content";
import MathText from "@/slideshows/l0-ima-2026/components/MathText";
import styles from "./deck.module.css";

// HTML, CSS and SVG figures, no chart library. Every value comes from
// content.ts; this file only adds an icon to each row label.

/** A line of maths, rendered with KaTeX by the repo's existing component. */
export function Maths({ tex }: { tex: string }) {
  return <MathText tex={tex} className={styles.maths} />;
}

const statusChip: Record<ScoreRow["status"], { label: string; className: string }> = {
  good: { label: "Good", className: styles.chipGood },
  fair: { label: "Fair", className: styles.chipGood },
  poor: { label: "Poor", className: styles.chipMid },
  trivial: { label: "Trivial identity", className: styles.chipBad },
};

const scoreIcons: Record<string, Icon> = {
  "Real GDP": IconChartLine,
  Consumption: IconShoppingCart,
  "Business investment": IconBuildingFactory2,
  "Household income": IconWallet,
  "Real household income": IconHomeDollar,
  "Current account": IconArrowsExchange,
  "Trade balance": IconShip,
  Employment: IconBriefcase,
  "Unemployment rate": IconUserOff,
  "RPI inflation": IconTrendingUp,
  "Company profits": IconCoins,
};

/** Rows of the free-running scorecard, picked by variable name. */
export function ScorecardTable({ variables }: { variables: string[] }) {
  const rows = scorecardRows.filter((row) => variables.includes(row.variable));
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Variable</th>
          <th className={styles.num}>Error, 3 years</th>
          <th>Band</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          const RowIcon = scoreIcons[row.variable] ?? IconPoint;
          return (
            <tr key={row.variable}>
              <td>
                <span className={styles.rowLabel}>
                  <RowIcon stroke={1.8} aria-hidden="true" />
                  {row.variable}
                </span>
              </td>
              <td className={styles.num}>{row.error}</td>
              <td>
                <span className={`${styles.chip} ${statusChip[row.status].className}`}>
                  {statusChip[row.status].label}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const plotMax = 1.1;
const pct = (value: number) => `${(Math.min(value, plotMax) / plotMax) * 100}%`;

const multiplierIcons: Record<string, Icon> = {
  "Government consumption": IconBuildingBank,
  "Income tax, basic rate +1p": IconReceiptTax,
  "VAT +1pp": IconTag,
  "Government investment": IconCrane,
};

/** GDP per pound at q1, q4 and q12 against the OBR's published multiplier. */
export function MultiplierPlot() {
  const ticks = [0, 0.25, 0.5, 0.75, 1];
  return (
    <div>
      <div className={styles.dotPlot}>
        {multiplierRows.map((row) => {
          const low = Math.min(row.q1, row.q4, row.q12);
          const high = Math.max(row.q1, row.q4, row.q12);
          // Where the three dots would sit on top of each other, stack them
          // so each quarter's number can be read.
          const tight = high - low < 0.1;
          const RowIcon = multiplierIcons[row.label] ?? IconPoint;
          const dots = [
            { quarter: 1, value: row.q1, tone: styles.dotQ1, shift: styles.dotUp },
            { quarter: 4, value: row.q4, tone: styles.dotQ4, shift: "" },
            { quarter: 12, value: row.q12, tone: styles.dotQ12, shift: styles.dotDown },
          ];
          return (
            <Fragment key={`${row.label}-${row.setting}`}>
              <div className={styles.dotLabel}>
                <RowIcon stroke={1.8} aria-hidden="true" />
                <div>
                  <h2>{row.label}</h2>
                  <p>{row.shock}</p>
                  <p>{row.setting}</p>
                </div>
              </div>
              <div className={styles.track}>
                {!tight && (
                  <div
                    className={styles.trackLine}
                    style={{ left: pct(low), width: `calc(${pct(high)} - ${pct(low)})` }}
                  />
                )}
                <div className={styles.benchmark} style={{ left: pct(row.obr) }} />
                {dots.map((dot) => (
                  <div
                    key={dot.quarter}
                    className={`${styles.dot} ${dot.tone} ${tight ? `${styles.dotSmall} ${dot.shift}` : ""}`}
                    style={{ left: pct(dot.value) }}
                  >
                    {dot.quarter}
                  </div>
                ))}
              </div>
              <div className={styles.dotValue}>
                {row.display}
                <br />
                <span>OBR {row.obrLabel}</span>
              </div>
            </Fragment>
          );
        })}
        <div />
        <div className={styles.axis}>
          {ticks.map((tick) => (
            <span key={tick} style={{ left: pct(tick) }}>
              {tick.toFixed(2)}
            </span>
          ))}
        </div>
        <div />
      </div>
      <div className={styles.legend}>
        <span>
          <i className={`${styles.legendDot} ${styles.legendQ1}`} />
          After 1 quarter
        </span>
        <span>
          <i className={`${styles.legendDot} ${styles.legendQ4}`} />
          After 4
        </span>
        <span>
          <i className={`${styles.legendDot} ${styles.legendQ12}`} />
          After 12
        </span>
        <span>
          <i className={styles.legendTick} />
          OBR&apos;s published impact multiplier
        </span>
        <span>GDP change per £1 of shock</span>
      </div>
    </div>
  );
}

/** Real GDP change per quarter for the income-tax shock (bars hang down). */
export function IncomeTaxBars() {
  const max = Math.max(...incomeTax.gdpPath.map((value) => Math.abs(value)));
  return (
    <div>
      <div className={styles.bars}>
        {incomeTax.gdpPath.map((value, index) => (
          <div key={index} className={styles.barCol}>
            <div
              className={styles.bar}
              style={{ height: `${(Math.abs(value) / max) * 80}%` }}
            />
            <span className={styles.barValue}>{value.toLocaleString("en-GB")}</span>
          </div>
        ))}
      </div>
      <div className={styles.barAxis}>
        {incomeTax.gdpPath.map((_, index) => (
          <span key={index}>q{index + 1}</span>
        ))}
      </div>
    </div>
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

export const moduleIcons: Record<string, Icon> = {
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

// The module network: a 1000 x 270 canvas, nodes placed so that no arrow
// runs through a node it doesn't belong to.
const canvas = { width: 1000, height: 270 };
const node = { width: 172, height: 50 };
const nodeAt: Record<string, [number, number]> = {
  Exports: [100, 32],
  Imports: [300, 32],
  Consumption: [500, 32],
  "North Sea oil": [700, 32],
  "Labour market": [900, 32],
  "Public sector": [100, 135],
  "GDP and output": [330, 135],
  "Prices and wages": [670, 135],
  "Balance of payments": [900, 135],
  "Finance and balance sheets": [330, 238],
  "Income accounts": [560, 238],
  "Investment and inventories": [900, 238],
};

/** The point where the line from one node's centre to another's leaves it. */
function edgePoint(from: [number, number], to: [number, number], gap: number) {
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const reach = Math.min(
    dx === 0 ? Infinity : (node.width / 2 + gap) / Math.abs(dx),
    dy === 0 ? Infinity : (node.height / 2 + gap) / Math.abs(dy),
  );
  return [from[0] + dx * reach, from[1] + dy * reach];
}

/** How the modules connect: arrow weight is the number of linking equations. */
export function ModuleNetwork() {
  return (
    <div className={styles.network}>
      <svg viewBox={`0 0 ${canvas.width} ${canvas.height}`} aria-hidden="true">
        <defs>
          <marker
            id="nef-arrow"
            className={styles.arrowHead}
            markerUnits="userSpaceOnUse"
            markerWidth="12"
            markerHeight="12"
            refX="10"
            refY="6"
            orient="auto"
          >
            <path d="M0 1 L11 6 L0 11 Z" />
          </marker>
          <marker
            id="nef-arrow-cut"
            className={styles.arrowHeadCut}
            markerUnits="userSpaceOnUse"
            markerWidth="12"
            markerHeight="12"
            refX="10"
            refY="6"
            orient="auto"
          >
            <path d="M0 1 L11 6 L0 11 Z" />
          </marker>
        </defs>
        {moduleLinks.map((link) => {
          const from = nodeAt[link.from];
          const to = nodeAt[link.to];
          if (!from || !to) return null;
          const count = moduleLinkCount(link.from, link.to);
          const [x1, y1] = edgePoint(from, to, 2);
          const [x2, y2] = edgePoint(to, from, 5);
          const at = link.labelAt ?? 0.5;
          const mx = x1 + (x2 - x1) * at;
          const my = y1 + (y2 - y1) * at;
          return (
            <g key={`${link.from}-${link.to}`}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className={link.cut ? styles.linkCut : styles.link}
                strokeWidth={1.2 + count * 0.28}
                markerEnd={link.cut ? "url(#nef-arrow-cut)" : "url(#nef-arrow)"}
              />
              <circle cx={mx} cy={my} r="9.5" className={styles.linkBadge} />
              <text x={mx} y={my} className={styles.linkCount}>
                {count}
              </text>
            </g>
          );
        })}
      </svg>
      {Object.entries(nodeAt).map(([name, [x, y]]) => {
        const NodeIcon = moduleIcons[name] ?? IconPoint;
        return (
          <div
            key={name}
            className={styles.networkNode}
            style={{
              left: `${((x - node.width / 2) / canvas.width) * 100}%`,
              top: `${((y - node.height / 2) / canvas.height) * 100}%`,
              width: `${(node.width / canvas.width) * 100}%`,
              height: `${(node.height / canvas.height) * 100}%`,
            }}
          >
            <NodeIcon stroke={1.8} aria-hidden="true" />
            {name}
          </div>
        );
      })}
    </div>
  );
}
