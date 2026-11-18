import { Fragment } from "react";
import {
  bankRate,
  incomeTax,
  multiplierRows,
  scorecardRows,
  type ScoreRow,
} from "../content";
import styles from "./deck.module.css";

// HTML and CSS figures, no chart library. Every value comes from content.ts.

const statusChip: Record<ScoreRow["status"], { label: string; className: string }> = {
  good: { label: "Good", className: styles.chipGood },
  fair: { label: "Fair", className: styles.chipGood },
  poor: { label: "Poor", className: styles.chipMid },
  trivial: { label: "Trivial identity", className: styles.chipBad },
};

/** Free-running scorecard: the 11 computed headline variables. */
export function ScorecardTable() {
  const half = Math.ceil(scorecardRows.length / 2);
  const columns = [scorecardRows.slice(0, half), scorecardRows.slice(half)];
  return (
    <div className="grid grid-cols-2 gap-12">
      {columns.map((rows, index) => (
        <table key={index} className={styles.table}>
          <thead>
            <tr>
              <th>Variable</th>
              <th className={styles.num}>Error, 3 years</th>
              <th>Band</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.variable}>
                <td>{row.variable}</td>
                <td className={styles.num}>{row.error}</td>
                <td>
                  <span className={`${styles.chip} ${statusChip[row.status].className}`}>
                    {statusChip[row.status].label}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}

const plotMax = 1.1;
const pct = (value: number) => `${(Math.min(value, plotMax) / plotMax) * 100}%`;

/** GDP per pound at q1, q4 and q12 against the OBR's published multiplier. */
export function MultiplierPlot() {
  const ticks = [0, 0.25, 0.5, 0.75, 1];
  return (
    <div>
      <div className={styles.dotPlot}>
        {multiplierRows.map((row) => {
          const low = Math.min(row.q1, row.q4, row.q12);
          const high = Math.max(row.q1, row.q4, row.q12);
          return (
            <Fragment key={`${row.label}-${row.setting}`}>
              <div className={styles.dotLabel}>
                <h2>{row.label}</h2>
                <p>{row.setting}</p>
              </div>
              <div className={styles.track}>
                <div
                  className={styles.trackLine}
                  style={{ left: pct(low), width: `calc(${pct(high)} - ${pct(low)})` }}
                />
                <div className={styles.benchmark} style={{ left: pct(row.obr) }} />
                <div className={`${styles.dot} ${styles.dotQ1}`} style={{ left: pct(row.q1) }}>
                  1
                </div>
                <div className={`${styles.dot} ${styles.dotQ4}`} style={{ left: pct(row.q4) }}>
                  4
                </div>
                <div className={`${styles.dot} ${styles.dotQ12}`} style={{ left: pct(row.q12) }}>
                  12
                </div>
              </div>
              <div className={styles.dotValue}>
                {row.display}
                <br />
                <span className="text-pe-amber">OBR {row.obrLabel}</span>
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
          <i className={styles.legendDot} style={{ background: "var(--color-teal-200)" }} />
          Quarter 1
        </span>
        <span>
          <i className={styles.legendDot} style={{ background: "var(--color-teal-400)" }} />
          Quarter 4
        </span>
        <span>
          <i className={styles.legendDot} style={{ background: "var(--color-teal-700)" }} />
          Quarter 12
        </span>
        <span>
          <i className={styles.legendTick} />
          OBR published multiplier (impact)
        </span>
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
              style={{ height: `${(Math.abs(value) / max) * 85}%` }}
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

/** Peak fall in GDP for a 1pp Bank Rate rise held four quarters. */
export function BankRateBars() {
  const max = Math.max(...bankRate.map((row) => row.value));
  return (
    <div className={styles.hbars}>
      {bankRate.map((row) => (
        <Fragment key={row.label}>
          <p className={styles.hbarLabel}>{row.label}</p>
          <div className={styles.hbarTrack}>
            <div
              className={`${styles.hbar} ${row.kind === "benchmark" ? styles.hbarBenchmark : ""}`}
              style={{ width: `${(row.value / max) * 80}%` }}
            />
            <span className={styles.hbarValue}>{row.display}</span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
