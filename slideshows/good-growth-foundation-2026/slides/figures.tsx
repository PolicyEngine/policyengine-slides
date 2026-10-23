import {
  energyDeciles,
  energyRegions,
  pipelineStages,
  targetGroups,
} from "../content";
import styles from "./deck.module.css";

// The pipeline layout follows the Scottish Government deck's PipelineGraph,
// with the sources that feed each stage drawn above it.
export function PipelineGraph() {
  const last = pipelineStages.length - 1;
  return (
    <div className={styles.pipeline}>
      <div className={styles.pipelineHeader}>
        <span className="text-pe-teal">Microcosm UK: one set of households, built up step by step</span>
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
          return (
            <div
              key={r.region}
              className={styles.regionRow}
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

export function DecileChart() {
  const max = Math.max(...energyDeciles.map((d) => d.averageGain));
  return (
    <figure className={styles.chart}>
      <figcaption>
        <h2>Average gain per household, by income decile</h2>
        <p className={styles.chartNote}>Includes households that get nothing.</p>
      </figcaption>
      <div className={styles.decilePlot}>
        {energyDeciles.map((d) => (
          <div
            key={d.decile}
            className={styles.decileColumn}
            title={`Decile ${d.decile}: £${d.averageGain} on average; ${share(d.shareReceiving)} of households receive the discount`}
          >
            <span className={styles.decileValue}>£{d.averageGain}</span>
            <span className={styles.decileBar} style={{ height: `${(d.averageGain / max) * 100}%` }} />
          </div>
        ))}
      </div>
      <div className={styles.decileAxis}>
        {energyDeciles.map((d) => (
          <span key={d.decile}>{d.decile}</span>
        ))}
      </div>
      <p className={styles.axisCaption}>
        Income decile of people in Great Britain, after housing costs (1 = lowest)
      </p>
    </figure>
  );
}

const count = (n: number) => (n === 0 ? "–" : n.toLocaleString("en-GB"));

// UK calibration targets: what each group binds at and who publishes it, with
// the rows bound by the national dataset and by the local-area dataset.
export function TargetTable() {
  const national = targetGroups.reduce((sum, row) => sum + row.national, 0);
  const local = targetGroups.reduce((sum, row) => sum + row.local, 0);
  return (
    <div className={styles.targetTable}>
      <div className={`${styles.targetRow} ${styles.targetHead}`}>
        <div>Targets</div>
        <div>Binds at</div>
        <div>Source</div>
        <div className="text-right">National dataset</div>
        <div className="text-right">Local-area dataset</div>
      </div>
      {targetGroups.map((row) => (
        <div key={row.targets} className={styles.targetRow}>
          <div className="font-semibold text-pe-dark">{row.targets}</div>
          <div>{row.level}</div>
          <div className="text-gray-600">{row.source}</div>
          <div className={`text-right tabular-nums ${row.national === 0 ? "text-gray-300" : ""}`}>
            {count(row.national)}
          </div>
          <div className="text-right tabular-nums">{count(row.local)}</div>
        </div>
      ))}
      <div className={`${styles.targetRow} ${styles.targetTotal}`}>
        <div>Total</div>
        <div />
        <div />
        <div className="text-right tabular-nums">{count(national)}</div>
        <div className="text-right tabular-nums">{count(local)}</div>
      </div>
    </div>
  );
}
