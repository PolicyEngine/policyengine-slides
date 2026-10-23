"use client";

import { useSlideshowContextSafe } from "@/components/core/SlideshowContext";
import styles from "./deck.module.css";

// A walkthrough of microsimulation in six build steps, after the UK event
// 2025 deck (model-scope, slide 2): one household under current law, the
// reform, behaviour, more households, weights, then weighted totals. The
// households and figures are illustrative, not survey records or estimates.
export const MICROSIM_STEPS = 6;

type Column = {
  key: string;
  label: string;
  note?: string;
  step: number;
  kind: "household" | "baseline" | "reform" | "weight";
};

const columns: Column[] = [
  { key: "earnings", label: "Earnings", step: 1, kind: "household" },
  { key: "children", label: "Children", step: 1, kind: "household" },
  { key: "baseline", label: "Net tax", note: "Current law", step: 1, kind: "baseline" },
  { key: "static", label: "Net tax", note: "Reform", step: 2, kind: "reform" },
  { key: "earningsChange", label: "Change in earnings", step: 3, kind: "reform" },
  { key: "behaviour", label: "Net tax", note: "With behaviour", step: 3, kind: "reform" },
  { key: "change", label: "Change in net tax", step: 3, kind: "reform" },
  { key: "weight", label: "Weight", note: "Households like it", step: 5, kind: "weight" },
];

const households: { step: number; cells: Record<string, string> }[] = [
  {
    step: 1,
    cells: {
      earnings: "£100,000", children: "0", baseline: "£31,440", static: "£30,690",
      earningsChange: "−£100", behaviour: "£30,650", change: "−£790", weight: "0.4m",
    },
  },
  {
    step: 4,
    cells: {
      earnings: "£45,000", children: "2", baseline: "£6,740", static: "£6,090",
      earningsChange: "+£200", behaviour: "£6,150", change: "−£590", weight: "1.1m",
    },
  },
  {
    step: 4,
    cells: {
      earnings: "£20,000", children: "1", baseline: "−£9,330", static: "−£9,400",
      earningsChange: "£0", behaviour: "−£9,400", change: "−£70", weight: "0.3m",
    },
  },
];

const totals: Record<string, string> = {
  earnings: "Total", children: "", baseline: "£300bn", static: "£286bn",
  earningsChange: "+£2bn", behaviour: "£287bn", change: "−£13bn", weight: "29.4m",
};

const groups = [
  { label: "Households", step: 4, span: "1 / 3" },
  { label: "Policies", step: 2, span: "3 / 5" },
  { label: "Behaviour", step: 3, span: "5 / 8" },
];

const captions = [
  "Start with one household and calculate its taxes and benefits under current law.",
  "Apply the reform: the same household, recalculated under the new rules.",
  "Add behaviour: if people work a little more or less, their taxes change again.",
  "Repeat for every household in the data, each with its own circumstances.",
  "Weight each household by how many similar households it stands for.",
  "Add up: the weighted totals give the cost, and the rows give who gains and loses.",
];

export function MicrosimWalkthrough() {
  const ctx = useSlideshowContextSafe();
  const step = ctx?.buildStep ?? MICROSIM_STEPS;
  const shown = (from: number) => (step >= from ? "" : styles.msHidden);
  return (
    <div className={styles.microsim}>
      <div className={styles.msGroups}>
        {groups.map((g) => (
          <span key={g.label} className={`${styles.msGroup} ${shown(g.step)}`} style={{ gridColumn: g.span, gridRow: 1 }}>
            {g.label}
          </span>
        ))}
      </div>
      <div className={styles.msTable} role="table" aria-label="Illustrative microsimulation">
        <div className={styles.msRow} role="row">
          {columns.map((c) => (
            <div key={c.key} role="columnheader" className={`${styles.msHead} ${styles[`msHead_${c.kind}`]} ${shown(c.step)}`}>
              <span>{c.label}</span>
              {c.note && <em>{c.note}</em>}
            </div>
          ))}
        </div>
        {households.map((h, i) => (
          <div key={i} className={`${styles.msRow} ${shown(h.step)}`} role="row">
            {columns.map((c) => (
              <div
                key={c.key}
                role="cell"
                className={`${styles.msCell} ${styles[`msCell_${c.kind}`]} ${c.key === "change" ? styles.msChange : ""} ${shown(c.step)}`}
              >
                {h.cells[c.key]}
              </div>
            ))}
          </div>
        ))}
        <div className={`${styles.msRow} ${shown(4)}`} role="row">
          {columns.map((c) => (
            <div key={c.key} role="cell" className={`${styles.msCell} ${styles.msEllipsis} ${shown(c.step)}`}>
              …
            </div>
          ))}
        </div>
        <div className={`${styles.msRow} ${styles.msTotal} ${shown(6)}`} role="row">
          {columns.map((c) => (
            <div
              key={c.key}
              role="cell"
              className={`${styles.msCell} ${c.key === "change" ? styles.msChange : ""} ${shown(c.step)}`}
            >
              {totals[c.key]}
            </div>
          ))}
        </div>
      </div>
      <p className={styles.msCaption}>
        <span>{Math.min(step, MICROSIM_STEPS)}</span>
        {captions[Math.min(step, MICROSIM_STEPS) - 1]}
      </p>
      <p className={styles.msNote}>
        Illustrative households and figures, not survey records or PolicyEngine
        estimates. Net tax is taxes paid minus benefits received.
      </p>
    </div>
  );
}
