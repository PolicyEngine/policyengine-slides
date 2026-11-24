// Content for "Who bears the AI shock?", the paper presented at the 2026
// Franco-German Fiscal Policy Seminar, "AI and the Future of Public
// Finances: Opportunities, Risks, and Policy Choices", Federal Ministry of
// Finance, Berlin, 1–2 December 2026.
//
// Every number is the merged paper's: PolicyEngine/uk-ai-study main at
// c42be9f (24 November 2026), paper/main.tex with paper/values_generated.tex,
// tax year 2027–28 (results commit fc8fda7). Unmerged revisions (PR #26,
// the state-enumeration rerun with calibrated spells) are not used. Each
// block names the paper table or section it comes from.

import {
  IconArrowsSplit,
  IconCalculator,
  IconChartBar,
  IconCoins,
  IconDatabase,
  IconHourglass,
  IconReceiptTax,
  IconScale,
  IconTrendingUp,
  IconUserMinus,
  IconUsers,
  IconWallet,
  type Icon,
} from "@tabler/icons-react";

export type PartKey = "question" | "method" | "central" | "comparisons" | "sensitivity";

export const parts: { key: PartKey; short: string; title: string }[] = [
  { key: "question", short: "Question", title: "The question" },
  { key: "method", short: "Method", title: "Data and method" },
  { key: "central", short: "Central case", title: "The central case" },
  { key: "comparisons", short: "Who and how", title: "Who loses the job, and how" },
  { key: "sensitivity", short: "What moves it", title: "What moves the cost, and policy" },
];

export const sources = {
  paper: {
    label: "github.com/PolicyEngine/uk-ai-study",
    href: "https://github.com/PolicyEngine/uk-ai-study",
  },
  post: {
    label: "policyengine.org/uk/research/uk-ai-study",
    href: "https://www.policyengine.org/uk/research/uk-ai-study",
  },
};

// Abstract and Section 1.
export const inBrief: { icon: Icon; title: string; value: string; text: string }[] = [
  {
    icon: IconUsers,
    title: "Who loses the job",
    value: "£1.9–11.3bn",
    text: "Exchequer cost a year of displacing 7% of employees (2.04m), across four displacement rules",
  },
  {
    icon: IconArrowsSplit,
    title: "How the loss arrives",
    value: "0.3 vs 2.4pp",
    text: "Rise in absolute poverty: wage cuts against job loss of the same size, though wage cuts cost £12bn more",
  },
  {
    icon: IconScale,
    title: "What sets the sign",
    value: "3.7%",
    text: "Survivor wage rise at which the £7.3bn central cost reaches zero (2.6% assumed)",
  },
];

// Table 1 (tab:jobloss): C-AIOE before the min-zero shift, calibrated
// employment (m), prescribed quota rate (%).
export const jobLoss: { group: string; exposure: string; employment: string; rate: number }[] = [
  { group: "Administrative and secretarial", exposure: "0.74", employment: "2.98", rate: 10.3 },
  { group: "Managers, directors, senior officials", exposure: "0.62", employment: "3.33", rate: 9.4 },
  { group: "Professional", exposure: "0.60", employment: "8.13", rate: 9.3 },
  { group: "Associate professional", exposure: "0.47", employment: "4.26", rate: 8.4 },
  { group: "Sales and customer service", exposure: "0.27", employment: "1.80", rate: 7.0 },
  { group: "Caring, leisure, other services", exposure: "−0.14", employment: "2.43", rate: 4.1 },
  { group: "Skilled trades", exposure: "−0.33", employment: "1.89", rate: 2.8 },
  { group: "Process, plant, machine operatives", exposure: "−0.54", employment: "1.43", rate: 1.3 },
  { group: "Elementary", exposure: "−0.73", employment: "2.70", rate: 0.0 },
];

// Section 1, paragraphs 2 and 4.
export const openQuestions = [
  {
    icon: IconUsers,
    title: "Who loses the job?",
    views: [
      "Exposure: highly paid cognitive work (Felten et al. 2021; Eloundou et al. 2024)",
      "Expertise compression: experienced workers' premia erode (Autor 2024)",
      "Junior workers in exposed jobs (Brynjolfsson et al. 2026; Klein Teeselink 2025)",
    ],
  },
  {
    icon: IconArrowsSplit,
    title: "How does the loss arrive?",
    views: [
      "Job loss: whole earnings go, for fewer people",
      "Wage cuts: the same pounds, spread across many workers (Acemoglu and Restrepo 2022)",
      "If AI shifts income from labour to capital, labour-tax bases erode (Korinek 2026)",
    ],
  },
];

// Section 3.
export const methodFlow: { icon: Icon; title: string; text: string }[] = [
  {
    icon: IconChartBar,
    title: "AI exposure",
    text: "Felten AIOE × Pizzinelli complementarity (C-AIOE), nine SOC2020 groups",
  },
  {
    icon: IconDatabase,
    title: "Household microdata",
    text: "Microcosm: calibrated Family Resources Survey 2024–25, 72,504 employee records",
  },
  {
    icon: IconUserMinus,
    title: "Person-level shock",
    text: "Job loss, survivor wages, capital income; 50 random draws of who is displaced",
  },
  {
    icon: IconCalculator,
    title: "PolicyEngine UK",
    text: "Tax and benefit rules legislated or announced for 2027–28",
  },
];

// Section 3.2 (Doorley et al. 2026 conventions).
export const scenarioInputs: { value: string; label: string }[] = [
  { value: "7%", label: "of employees lose their job for the full year" },
  { value: "+2.6%", label: "average wage rise, paid to the employees who keep their jobs" },
  { value: "+39.8%", label: "interest and dividends: the return on capital rises 0.4pp, from 1.005% to 1.405% (on a 4% base the same 0.4pp is +10%)" },
];

export const scenarioCaveats = [
  "A one-year stock: no re-employment, redundancy pay or partner response",
  "Newly displaced workers claim Universal Credit only if their benefit unit (adult, any partner and children, assessed together) is simulated as a claimant, and get no contributory Jobseeker's Allowance",
  "Self-employed outside the labour shocks; no reduced hiring of the young",
];

// Section 4.1 and Table 2 (presets, central row; incidence table,
// exposure-proportional row for the 50-draw poverty and Gini means).
export const central: { value: string; label: string }[] = [
  { value: "2.04m", label: "employees displaced (50-draw mean)" },
  { value: "£7.3bn", label: "a year net Exchequer cost (s.d. £1.9bn)" },
  { value: "+2.40pp", label: "absolute poverty before housing costs (+0.82pp on the relative line)" },
  { value: "+1.76pp", label: "Gini, from a baseline of 30.3" },
];

// Section 4.1: each channel alone, 20 paired draws, £bn a year.
export const channels: { label: string; value: number; text: string }[] = [
  { label: "Displacement", value: 42.5, text: "lost tax and NI, more UC" },
  { label: "Survivor wages", value: -17.5, text: "tax on the 2.6% rise" },
  { label: "Capital income", value: -17.9, text: "dividend and savings tax" },
];

// Section 4.2, Table 3 (OBR-sized displacement, 20 draws) and the take-up
// paragraph of Section 4.1.
export const absorption: { value: string; label: string }[] = [
  { value: "29%", label: "of the market-income loss absorbed by income tax, employee NI and benefits" },
  { value: "3.0p", label: "of cash benefits per pound of earnings lost; lower taxes do the rest" },
  { value: "53%", label: "of displaced benefit units entitled to Universal Credit claim it (take-up flags drawn in the data build)" },
];

export const absorptionVariants = [
  "The displaced lose £49,500 on average: 42% of their benefit units hold capital above UC's £16,000 limit, 59% have another earner, 70% own their home",
  "Contributory Jobseeker's Allowance is flat-rate, not earnings-related (£95.55 a week for 26 weeks), and is not paid to the newly displaced",
  "Cash benefits per pound lost: 3.0p; 5.9p with full UC take-up; 8.7p with JSA as well",
];

// Table 4 (tab:incidence), 50 paired draws, means ± s.d.
export const incidenceRows: {
  rule: string;
  text: string;
  cost: string;
  sd: string;
  bhc: string;
  ahc: string;
  gini: string;
  stress?: boolean;
}[] = [
  { rule: "Uniform", text: "equal chance for every employee", cost: "1.9", sd: "2.0", bhc: "+2.52", ahc: "+2.55", gini: "+1.88" },
  { rule: "Junior-concentrated", text: "under-25s ×1.29 within each group", cost: "7.0", sd: "1.6", bhc: "+2.43", ahc: "+2.59", gini: "+1.77" },
  { rule: "Exposure-proportional", text: "central case", cost: "7.3", sd: "1.9", bhc: "+2.40", ahc: "+2.57", gini: "+1.76" },
  { rule: "Expertise compression", text: "top earnings third of above-median-exposure groups ×2", cost: "11.3", sd: "2.6", bhc: "+2.65", ahc: "+2.76", gini: "+1.78" },
  { rule: "Top-loaded stress test", text: "exposure × junior × wage-tier factors (9.6 / 0.6)", cost: "27.7", sd: "2.7", bhc: "+3.00", ahc: "+3.38", gini: "+1.77", stress: true },
];

// Table 5 (tab:wagemargin), 20 paired draws, channels on in both rows; and
// the per-pound figures of Section 4.4, channels off.
export const margins = {
  job: { cost: 7.18, bhc: 2.38, perPound: 42 },
  wage: { cost: 19.13, bhc: 0.28, perPound: 55 },
};

export const marginWhy: { icon: Icon; title: string; text: string }[] = [
  {
    icon: IconReceiptTax,
    title: "Wage cuts remove pounds at the margin",
    text: "Taxed at the worker's marginal rates and, for UC claimants, replaced at UC's 55% withdrawal rate",
  },
  {
    icon: IconWallet,
    title: "Job loss removes whole earnings",
    text: "Including the tax-free personal allowance; the UC it adds is less than the tax forgone",
  },
  {
    icon: IconUserMinus,
    title: "Job loss concentrates the loss",
    text: "Fewer households lose everything, and they cross the poverty line",
  },
];

// Table 6 (tab:breakeven) and the take-up paragraph of Section 4.5.
export const breakEvens: { icon: Icon; label: string; note: string; central: string; breakEven: string }[] = [
  { icon: IconTrendingUp, label: "Survivor wage rise", note: "seed 0", central: "+2.6%", breakEven: "+3.7%" },
  { icon: IconCoins, label: "Capital-income uplift", note: "20 draws", central: "+39.8%", breakEven: "+55%" },
  { icon: IconHourglass, label: "Months out of work", note: "20 draws, upper bound", central: "12", breakEven: "≤9.5" },
];

export const costMovers = [
  "No survivor wage rise: £24.9bn; a 2.6% fall: £42.4bn (seed 0)",
  "Full UC take-up for the displaced: +£2.8bn; with new-style JSA: +£5.5bn (20 draws)",
  "Dividends scaled to the HMRC SPI total: +£2.2bn",
];

// Table 7 (tab:closure) and Section 4.6, seed 0, £bn a year.
export const closure = {
  labourFall: 68.3,
  displacedEarnings: 100.2,
  survivorGain: 31.9,
  best: "−0.9",
  worst: "14.4",
};

// Table 8 (tab:policy), 50 draws, shocked-plus-reform minus shocked.
export const policyRows: { reform: string; text: string; cost: string; bhc: string; perPoint: string }[] = [
  { reform: "R1 Earnings replacement", text: "wage-insurance style: 50% of lost earnings, capped at £15,000 a year", cost: "26.9", bhc: "−1.89", perPoint: "14.3" },
  { reform: "R2 UC allowance +20%", text: "standard allowance", cost: "6.9", bhc: "−0.79", perPoint: "8.6" },
  { reform: "R3 Cap and taper", text: "no benefit cap, taper 55% to 45%", cost: "5.1", bhc: "−0.76", perPoint: "6.7" },
];

// Section 5.
export const conclusions: { title: string; text: string }[] = [
  {
    title: "Who loses the job moves the cost from £1.9bn to £11.3bn",
    text: "Across the four rules, poverty moves far less: each displaced worker takes their income tax and NI with them",
  },
  {
    title: "For this shock, the margin sets who bears it",
    text: "Wage cuts cost the Exchequer more per pound (55p against 42p); job loss raises poverty far more, for a shock on above-average earners",
  },
  {
    title: "With job loss, inequality rises under every rule",
    text: "And in every shocked cell of the grid, even without the capital channel; wage cuts on their own lower it",
  },
  {
    title: "The sign rests on the offsets",
    text: "The cost is zero at survivor wages of +3.7% (not +2.6%), a 55% capital uplift (not 39.8%) or spells of at most 9.5 months",
  },
];

export const limits = [
  "A decade of adoption applied within one year, with full-year job loss: an impact-year stress test",
  "Exposure varies across nine occupation groups only",
  "Displacement is a one-year stock with no re-employment",
  "Reduced hiring of young workers lies outside the framework",
];

// Appendix: OBR benchmark (Section 4.1 and Appendix), 20 draws.
export const obr: { line: string; sim: string; obr: string }[] = [
  { line: "Total cost", sim: "10.2", obr: "9" },
  { line: "Lost receipts", sim: "9.7", obr: "6" },
  { line: "Extra welfare spending", sim: "0.7", obr: "3" },
];

// Table (tab:indexsens), seed 0 adjusted to the mean displaced count.
export const indexRows: { index: string; raw: string; adjusted: string; bhc: string; gini: string }[] = [
  { index: "C-AIOE (central)", raw: "7.3", adjusted: "8.2", bhc: "+2.05", gini: "+1.53" },
  { index: "Felten AIOE", raw: "9.3", adjusted: "8.0", bhc: "+2.88", gini: "+1.85" },
  { index: "DfE AIOE", raw: "5.9", adjusted: "7.6", bhc: "+2.42", gini: "+1.79" },
  { index: "DfE LLM", raw: "5.0", adjusted: "5.5", bhc: "+2.21", gini: "+1.67" },
  { index: "Eloundou β", raw: "3.2", adjusted: "4.2", bhc: "+2.27", gini: "+1.86" },
];

// ---------- Data and method detail (Section 3) ----------

// Section 3.1.
export const exposureBuild: { icon: Icon; title: string; text: string }[] = [
  {
    icon: IconChartBar,
    title: "AIOE (Felten et al. 2021)",
    text: "Progress in ten AI applications linked to O*NET ability requirements; standardised, so it can be negative",
  },
  {
    icon: IconArrowsSplit,
    title: "Complementarity θ (Pizzinelli et al. 2023)",
    text: "Rebuilt from O*NET 27.3 work context and job zones: high θ means AI more likely complements than replaces",
  },
  {
    icon: IconDatabase,
    title: "Mapped to UK SOC2020",
    text: "Via the DfE (2023) crosswalk; aggregated to nine major groups with ASHE 2025 employment weights",
  },
];

// Section 3.4 (Microcosm) and 3.5 (draws).
export const dataFacts: { value: string; label: string }[] = [
  { value: "78,181", label: "households and 182,418 people in the file" },
  { value: "29.0m", label: "employees in 2027–28 (69.4m people)" },
  { value: "1,514", label: "calibration targets; 98.7% fitted within 10%" },
  { value: "99.7%", label: "of weighted employees have an occupation group" },
];


// Section 3.3: what the shock does to each person.
export const shockSteps: { icon: Icon; title: string; tex: string; text: string }[] = [
  {
    icon: IconUserMinus,
    title: "Job loss",
    tex: "\\text{JobLoss}_l = \\text{Total}\\times\\dfrac{\\text{EMP}_l\\,\\widetilde{C}_l}{\\sum_k \\text{EMP}_k\\,\\widetilde{C}_k}",
    text: "Earnings, hours, pension contributions and statutory pay set to zero for the year; status unemployed",
  },
  {
    icon: IconTrendingUp,
    title: "Survivor wages",
    tex: "\\Delta w_l = g\\times\\dfrac{\\theta_l}{\\bar\\theta}\\times w_l",
    text: "Higher-complementarity groups gain more; g = 2.6% averaged over baseline employees",
  },
  {
    icon: IconCoins,
    title: "Capital income",
    tex: "\\times\\,\\dfrac{1.405}{1.005} = 1.398",
    text: "Savings interest and dividends; rent and pension returns unchanged",
  },
];

// Section 3.5.
export const microsimRules = [
  "PolicyEngine UK 2.174.1 (policyengine.py 6.16.1)",
  "Income tax and NI thresholds frozen",
  "Basic and higher dividend rates +2pp from April 2026",
  "Savings income, and property income outside Scotland, +4pp from April 2027; 2pp of them announced, not yet legislated",
];

export const outcomeDefs: { title: string; text: string }[] = [
  {
    title: "Exchequer cost",
    text: "Fall in the government balance: income tax, employee and employer National Insurance, benefits. No VAT response",
  },
  {
    title: "Absolute poverty",
    text: "The UK official line (HBAI, the low-income statistics): 60% of the 2024–25 median, fixed in real terms; 12.0% before housing costs at baseline",
  },
  {
    title: "Inequality",
    text: "Gini on equivalised HBAI disposable income, negatives set to zero",
  },
];

export const drawFacts: { value: string; label: string }[] = [
  { value: "72,504", label: "employee records" },
  { value: "≈5,810", label: "their effective sample size, given the uneven calibrated weights" },
  { value: "1.85–2.25m", label: "displaced across 50 central draws, around the 7% quota" },
];

// ---------- How Microcosm is built: imputation and calibration ----------
//
// Sources. The paper ran on the Microcosm UK 2024-25 national build of
// 7 November 2026 (paper: 1,514 targets, 98.7% within 10%, 78,181
// households). Build figures for that release are from the BIST deck's
// sourced comments (bist-2026/content.ts: 1,514 targets, 98.7%, 78,181
// records, 38 target families, best step 1,437 of 1,500, effective sample
// size about 7.2 thousand). Method from the Microcosm code (microcosm
// 4addf2ae9, 9 November 2026):
// - imputation: packages/microcosm-fit/README.md: "a regime-gated,
//   sequentially-chained quantile-regression-forest imputer"; zero-inflated
//   targets get a zero-vs-nonzero gate; "targets are imputed sequentially;
//   each conditions on the predictors plus the targets already drawn"; "a
//   random quantile is sampled per row (seeded)"; training rows are
//   "importance-resampled by weight before each forest is grown";
// - calibration: packages/microcosm-calibrate/README.md: "capped weighted
//   MAPE", weighted_mean(min(abs((A w - b) / scale), cap)), scale =
//   max(|target|, 1), cap = 10; Adam on log-weights; max_weight_ratio a hard
//   bound; UK national doctrine (uk_runtime/national_doctrine.py):
//   family_equal target weights, 1,500 epochs, learning rate 0.02, weight
//   ratio cap 10.
// - stages: the BIST deck's microcosmFlow comment (FRS spine; FRS copies
//   with SPI 2022-23 incomes and band donors from £200k; occupation of the
//   copies imputed from their incomes; WAS, LCFS, ETB, NTS donors; benefit
//   take-up: reported claims kept, others drawn to official rates).

export const buildStages: { icon: Icon; owner: string; title: string; text: string }[] = [
  { icon: IconUsers, owner: "FRS 2024–25", title: "Survey base", text: "Households, incomes, occupations, benefits" },
  { icon: IconReceiptTax, owner: "HMRC SPI", title: "Top incomes", text: "FRS copies take tax-record incomes, with extra copies for each band above £200k" },
  { icon: IconDatabase, owner: "Donor surveys", title: "Imputed variables", text: "Wealth, spending and others, by quantile-regression forest" },
  { icon: IconUsers, owner: "DWP and HMRC", title: "Benefit take-up", text: "Reported claims kept; the rest drawn to official rates" },
  { icon: IconScale, owner: "Official totals", title: "Calibrated weights", text: "Household weights fitted to official totals" },
];

export const imputationTex = {
  gate: String.raw`d_{iv}\sim\mathrm{Bernoulli}\bigl(\hat\pi_v(x_i,\,y_{i,<v})\bigr)`,
  draw: String.raw`y_{iv}=d_{iv}\,\hat Q_v\bigl(u_{iv}\mid x_i,\,y_{i,<v}\bigr),\qquad u_{iv}\sim U(0,1)`,
};

export const imputationPoints = [
  "Wealth from the Wealth and Assets Survey (round 8), spending from the Living Costs and Food Survey 2024–25; predictors are incomes by source, household composition, tenure and region",
  "Chained: each variable conditions on x and on the variables already drawn, so the joint structure is kept",
  "Gated: a classifier first draws zero or non-zero, so zeros stay exact zeros (no one gets a little wealth by interpolation)",
  "Weighted and reproducible: donor rows are resampled by survey weight before each forest, and every draw is seeded",
];

export const calibrationTex = String.raw`\min_{w}\ \sum_{j=1}^{J}\lambda_j\,\min\!\left(\frac{\lvert \hat T_j(w)-T_j\rvert}{\max(\lvert T_j\rvert,\,1)},\ 10\right)\quad\text{s.t.}\ \ 0<w_i\le 10\,w_i^{0}`;

export const calibrationPoints = [
  "Σᵢ aⱼᵢwᵢ is the file's estimate of official total Tⱼ; w⁰ are the starting weights; J = 1,514 targets",
  "Relative errors, each capped at 1,000% so no single target dominates",
  "λⱼ: each of 38 target families has equal weight, split evenly among its targets",
  "Adam on log-weights, 1,500 steps, best step kept",
  "A fit criterion, not a distance criterion: unlike raking or GREG, only the ×10 bound limits how far weights move, and the total weight is free",
];

export const calibrationFacts: { value: string; label: string }[] = [
  { value: "1,514", label: "targets from HMRC, ONS, DWP, OBR and others" },
  { value: "98.7%", label: "within 10% of the official figure (in sample)" },
  { value: "≈7,200", label: "Kish effective sample size, (Σw)²/Σw², of the 78,181 households" },
];
