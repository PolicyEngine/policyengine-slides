import { Fragment, type CSSProperties } from "react";
import {
  energyRegions,
  pipelineStages,
  propertyLanes,
  propertyMergedSteps,
  propertyWaterfall,
  type PropertyStep,
  scotlandEnergyDeciles,
  scotlandTargets,
} from "../content";
import styles from "./deck.module.css";

// The pipeline layout follows l0-ima-2026's PipelineDiagram, with the sources
// that feed each stage drawn above it.
export function PipelineGraph() {
  const last = pipelineStages.length - 1;
  return (
    <div className={styles.pipeline}>
      <div className={styles.pipelineHeader}>
        <span className="text-pe-teal">One set of households, built up step by step</span>
        <span className="text-pe-amber">Weighted to UK totals</span>
      </div>
      <div className={styles.pipelineGrid}>
        {pipelineStages.map((stage) => (
          <div key={`${stage.title}-sources`} className={styles.sourceBox}>
            {stage.sources.map((source) => (
              <p key={source}>{source}</p>
            ))}
          </div>
        ))}
        {pipelineStages.map((stage) => (
          <div key={`${stage.title}-feed`} className={styles.feed} aria-hidden="true" />
        ))}
        {pipelineStages.map((stage, index) => (
          <div
            key={stage.title}
            className={`${styles.stageBox} ${index === last ? styles.stageBoxLast : ""}`}
          >
            <span className={styles.stageNumber}>{index + 1}</span>
            <h2>{stage.title}</h2>
            <p>{stage.adds}</p>
          </div>
        ))}
      </div>
      <div className={styles.pipelineFooter}>
        <strong>One weighted set of households</strong>{" "}
        carried through every stage, then into PolicyEngine&apos;s tax-benefit model
      </div>
    </div>
  );
}

const count = (n: number) => (n === 0 ? "–" : n.toLocaleString("en-GB"));

export function TargetTable() {
  const totals = scotlandTargets.reduce(
    (sum, row) => ({
      scotland: sum.scotland + row.scotland,
      councils: sum.councils + row.councils,
      constituencies: sum.constituencies + row.constituencies,
    }),
    { scotland: 0, councils: 0, constituencies: 0 },
  );
  const all = totals.scotland + totals.councils + totals.constituencies;
  return (
    <div className={styles.targetTable}>
      <div className={`${styles.targetRow} ${styles.targetHead}`}>
        <div>Target family</div>
        <div>Source</div>
        <div className="text-right">Scotland</div>
        <div className="text-right">Councils</div>
        <div className="text-right">Constituencies</div>
        <div className="text-right">Rows</div>
      </div>
      {scotlandTargets.map((row) => (
        <div key={row.family} className={styles.targetRow}>
          <div className="font-semibold text-pe-dark">{row.family}</div>
          <div className="text-gray-600">{row.publisher}</div>
          {[row.scotland, row.councils, row.constituencies].map((n, i) => (
            <div key={i} className={`text-right tabular-nums ${n === 0 ? "text-gray-300" : ""}`}>
              {count(n)}
            </div>
          ))}
          <div className="text-right font-medium tabular-nums">
            {count(row.scotland + row.councils + row.constituencies)}
          </div>
        </div>
      ))}
      <div className={`${styles.targetRow} ${styles.targetTotal}`}>
        <div>Total</div>
        <div />
        <div className="text-right tabular-nums">{count(totals.scotland)}</div>
        <div className="text-right tabular-nums">{count(totals.councils)}</div>
        <div className="text-right tabular-nums">{count(totals.constituencies)}</div>
        <div className="text-right tabular-nums text-pe-teal">{count(all)}</div>
      </div>
    </div>
  );
}

// A waterfall from rent received down to what the FRS asks for. Each total is
// what a source counts; each deduction column says what the next total leaves
// out, and a deduction can follow another. Heights share one £0–50bn axis.
const WATERFALL_MAX = 50;

// Each column's span on the axis, and the level its connector starts from:
// a deduction hangs from the level the previous column ended at.
const waterfallColumns = propertyWaterfall.reduce<
  { step: (typeof propertyWaterfall)[number]; bottom: number; top: number; connector: number | null }[]
>((columns, step, index) => {
  const last = columns[index - 1];
  const previous = last ? (last.step.kind === "deduction" ? last.bottom : last.top) : 0;
  const deduction = step.kind === "deduction";
  return [
    ...columns,
    {
      step,
      bottom: deduction ? previous - step.value : 0,
      top: deduction ? previous : step.value,
      connector: last ? previous : null,
    },
  ];
}, []);

export function PropertyWaterfall() {
  const pct = (value: number) => `${(value / WATERFALL_MAX) * 100}%`;
  return (
    <div className={styles.waterfall}>
      <div className={styles.wfPlot}>
        {[0, 10, 20, 30, 40, 50].map((tick) => (
          <div key={tick} className={styles.wfGrid} style={{ bottom: pct(tick) }}>
            <span>£{tick}bn</span>
          </div>
        ))}
        <div className={styles.wfColumns}>
          {waterfallColumns.map(({ step, bottom, top, connector }) => (
            <div key={step.label} className={styles.wfColumn}>
              {connector !== null && (
                <span className={styles.wfConnector} style={{ bottom: pct(connector) }} aria-hidden="true" />
              )}
              <div
                className={`${styles.wfBar} ${styles[`wfBar_${step.kind}`]} ${step.label === "Mortgage interest" ? styles.wfBarInterest : ""}`}
                style={{ bottom: pct(bottom), height: pct(top - bottom) }}
                title={`${step.label}: ${step.valueLabel}`}
              >
                {step.kind === "deduction" && (
                  <span
                    className={`${styles.wfInside} ${step.value / WATERFALL_MAX < 0.15 ? styles.wfBelow : ""}`}
                  >
                    {step.valueLabel}
                  </span>
                )}
              </div>
              {step.kind !== "deduction" && (
                <span className={styles.wfValue} style={{ bottom: pct(top) }}>
                  {step.valueLabel}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.wfCaptions}>
        {propertyWaterfall.map((step) => (
          <div key={step.label} className={step.kind === "deduction" ? styles.wfCaptionDeduction : ""}>
            <h2>
              {step.kind === "deduction" ? "− " : ""}
              {step.label}
            </h2>
            <p>{step.note}</p>
            {step.source && <span className={styles.flowSource}>{step.source}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

const share = (value: number) => `${Math.round(value * 100)}%`;

export function RegionEligibilityChart() {
  return (
    <figure className={styles.chart}>
      <figcaption>
        <h2>Households eligible, by region</h2>
        <div className={styles.legend}>
          <span><i className={styles.swatchPassported} />On a means-tested benefit</span>
          <span><i className={styles.swatchIncome} />Income test alone</span>
        </div>
      </figcaption>
      <div className={styles.regionRows}>
        {energyRegions.map((r) => {
          const incomeOnly = r.eligible - r.passported;
          const scotland = r.region === "Scotland";
          return (
            <div
              key={r.region}
              className={`${styles.regionRow} ${scotland ? styles.regionScotland : ""}`}
              title={`${r.region}: ${share(r.eligible)} eligible (${share(r.passported)} on a benefit, ${share(incomeOnly)} income test alone)`}
            >
              <span className={styles.regionLabel}>{r.region}</span>
              <span className={styles.regionTrack}>
                <span className={styles.barPassported} style={{ width: `${r.passported * 100}%` }} />
                <span className={styles.barIncome} style={{ width: `${incomeOnly * 100}%` }} />
                <span className={styles.regionValue}>{share(r.eligible)}</span>
              </span>
            </div>
          );
        })}
      </div>
    </figure>
  );
}

export function ScotlandDecileChart() {
  const max = Math.max(...scotlandEnergyDeciles.map((d) => d.averageGain));
  return (
    <figure className={styles.chart}>
      <figcaption>
        <h2>Scotland: average gain per household</h2>
        <p className={styles.chartNote}>Includes households that receive nothing</p>
      </figcaption>
      <div className={styles.decilePlot}>
        {scotlandEnergyDeciles.map((d) => (
          <div
            key={d.decile}
            className={styles.decileColumn}
            title={`Decile ${d.decile}: £${d.averageGain} on average; ${share(d.shareReceiving)} of households receive support`}
          >
            <span className={styles.decileValue}>£{d.averageGain}</span>
            <span className={styles.decileBar} style={{ height: `${(d.averageGain / max) * 100}%` }} />
          </div>
        ))}
      </div>
      <div className={styles.decileAxis}>
        {scotlandEnergyDeciles.map((d) => (
          <span key={d.decile}>{d.decile}</span>
        ))}
      </div>
      <p className={styles.axisCaption}>
        Income decile within Scotland, after housing costs (1 = lowest)
      </p>
    </figure>
  );
}

function StepBox({
  step,
  number,
  className = "",
  style,
}: {
  step: PropertyStep;
  number: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`${styles.flowStep} ${className}`} style={style}>
      <div className={styles.flowStepHead}>
        <span className={styles.flowNumber}>{number}</span>
        <h2>{step.title}</h2>
      </div>
      <p>{step.text}</p>
      <span className={styles.flowSource}>{step.source}</span>
    </div>
  );
}

// Two lanes (survey landlords above, tax-record copies below) merge into the
// steps every landlord goes through. Grid rows: lane label, survey lane, gap,
// copies lane, lane label; the two lanes share one height so the merge
// connector meets the merged steps at their centre.
export function PropertyFlow() {
  const [frs, addBack] = propertyLanes.survey.steps;
  const [copy, draw] = propertyLanes.copies.steps;
  const merged = (column: number) => ({ gridColumn: column, gridRow: "2 / 5" });
  return (
    <div className={styles.flow}>
      <p className={styles.laneLabel} style={{ gridColumn: "1 / 4", gridRow: 1 }}>
        {propertyLanes.survey.label}
      </p>
      <StepBox step={frs} number={1} style={{ gridColumn: 1, gridRow: 2 }} />
      <span className={styles.flowArrow} style={{ gridColumn: 2, gridRow: 2 }} aria-hidden="true" />
      <StepBox step={addBack} number={4} style={{ gridColumn: 3, gridRow: 2 }} />
      <span className={styles.flowDown} style={{ gridColumn: 1, gridRow: 3 }} aria-hidden="true" />
      <StepBox step={copy} number={2} className={styles.flowStepCopy} style={{ gridColumn: 1, gridRow: 4 }} />
      <span className={styles.flowArrow} style={{ gridColumn: 2, gridRow: 4 }} aria-hidden="true" />
      <StepBox step={draw} number={3} className={styles.flowStepCopy} style={{ gridColumn: 3, gridRow: 4 }} />
      <p className={styles.laneLabel} style={{ gridColumn: "1 / 4", gridRow: 5 }}>
        {propertyLanes.copies.label}
      </p>
      <span className={styles.mergeTop} style={{ gridColumn: 4, gridRow: 2 }} aria-hidden="true" />
      <span className={styles.mergeMid} style={{ gridColumn: 4, gridRow: 3 }} aria-hidden="true">
        <i />
      </span>
      <span className={styles.mergeBottom} style={{ gridColumn: 4, gridRow: 4 }} aria-hidden="true" />
      {propertyMergedSteps.map((step, index) => (
        <Fragment key={step.title}>
          {index > 0 && (
            <span className={`${styles.flowArrow} self-center`} style={merged(4 + index * 2)} aria-hidden="true" />
          )}
          <StepBox
            step={step}
            number={5 + index}
            className={`self-center ${index === propertyMergedSteps.length - 1 ? styles.flowStepModel : ""}`}
            style={merged(5 + index * 2)}
          />
        </Fragment>
      ))}
    </div>
  );
}
