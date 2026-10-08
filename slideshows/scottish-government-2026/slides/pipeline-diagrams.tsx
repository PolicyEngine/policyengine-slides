import {
  IconArrowRight,
  IconChartBar,
  IconHome,
  IconUsers,
} from "@tabler/icons-react";
import styles from "./deck.module.css";

// Adapted from the donor-fusion and pipeline diagrams in l0-ima-2026,
// with UK sources and an audience-facing explanation of Scotland's population.
export function OverviewDiagram() {
  const steps = [
    { title: "Start with households", text: "Survey information on people living in Scotland", Icon: IconUsers },
    { title: "Fill the gaps", text: "Add information on income, wealth and spending", Icon: IconHome },
    { title: "Represent Scotland", text: "Match the population to official Scottish totals", Icon: IconChartBar },
  ];
  return (
    <div className={styles.overviewDiagram} aria-label="Survey households, missing information, then a population calibrated to Scottish statistics">
      {steps.map(({ title, text, Icon }, index) => (
        <div key={title} className={styles.overviewStep}>
          <span className={styles.stepNumber}>0{index + 1}</span>
          <Icon size={48} stroke={1.5} className="text-pe-teal" aria-hidden="true" />
          <h2>{title}</h2>
          <p>{text}</p>
          {index < steps.length - 1 && <IconArrowRight className={styles.stepArrow} size={28} aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

export function ImputationDiagram() {
  const donors = [
    ["Tax records", "Detailed income · Survey of Personal Incomes"],
    ["Wealth survey", "Assets and debts · Wealth and Assets Survey"],
    ["Spending survey", "Household spending · Living Costs and Food Survey"],
  ];
  return (
    <div className={styles.imputationDiagram}>
      <div className={styles.donorStack}>
        <p className={styles.diagramLabel}>Information from other sources</p>
        {donors.map(([title, text]) => (
          <div key={title} className={styles.donorCard}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <IconArrowRight size={36} className="text-pe-teal" aria-hidden="true" />
      <div className={styles.householdCard}>
        <div className="flex items-center gap-4">
          <IconHome size={42} stroke={1.5} className="text-pe-teal" aria-hidden="true" />
          <div>
            <h2>Households living in Scotland</h2>
            <p>Family Resources Survey</p>
          </div>
        </div>
        <div className={styles.householdFields}>
          <div><strong>Income</strong><span>Survey information</span></div>
          <div><strong>Family structure</strong><span>Survey information</span></div>
          <div className={styles.addedField}><strong>Wealth</strong><span>Estimated from donor data</span></div>
          <div className={styles.addedField}><strong>Spending</strong><span>Estimated from donor data</span></div>
        </div>
        <p className={styles.matchingNote}>Learn from households with similar age, income and family characteristics.</p>
      </div>
    </div>
  );
}

export function CalibrationDiagram() {
  return (
    <div>
      <div className={styles.calibrationDiagram}>
        <div className={styles.weightCard}>
          <h2>Survey households</h2>
          <div className={styles.weightIcons} aria-label="Illustrative household records with starting weights">
            {[1, 2, 3].map((number) => <IconHome key={number} size={44} stroke={1.5} aria-hidden="true" />)}
          </div>
          <p>A sample of Scotland&apos;s population</p>
        </div>
        <IconArrowRight size={28} className="text-pe-teal" aria-hidden="true" />
        <div className={styles.officialTotals}>
          <p className={styles.diagramLabel}>Calibrate to Scottish statistics</p>
          <h2>Adjust how much each household counts</h2>
          <p>Population · income · benefits · housing</p>
        </div>
        <IconArrowRight size={28} className="text-pe-teal" aria-hidden="true" />
        <div className={styles.weightCard}>
          <h2>Weighted population</h2>
          <div className={styles.weightIcons} aria-label="Illustrative records reweighted to represent different numbers of households">
            {[64, 28, 48].map((size) => <IconHome key={size} size={size} stroke={1.5} aria-hidden="true" />)}
          </div>
          <p>Some households count more; others count less</p>
        </div>
      </div>
      <p className={styles.diagramCaption}>Larger icons represent more households. Sizes are illustrative.</p>
    </div>
  );
}
