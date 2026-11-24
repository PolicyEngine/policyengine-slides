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
    text: "Exchequer cost of displacing 7% of employees, across four incidence rules",
  },
  {
    icon: IconArrowsSplit,
    title: "How the loss arrives",
    value: "0.3 vs 2.4pp",
    text: "Rise in absolute poverty from wage cuts against job loss of the same size, though wage cuts cost £12bn more",
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
      "Exposure: highly paid cognitive work (Felten et al. 2021; Eloundou et al. 2023)",
      "Expertise compression: experienced workers' premia erode (Autor 2024)",
      "Junior workers in exposed jobs (Brynjolfsson et al. 2025; Klein Teeselink 2025)",
    ],
  },
  {
    icon: IconArrowsSplit,
    title: "How does the loss arrive?",
    views: [
      "Job loss: whole earnings go, for fewer people",
      "Wage cuts: the same pounds, spread across many workers (Acemoglu and Restrepo 2022)",
      "The size of the shock settles neither question",
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
  { value: "+2.6%", label: "average wage rise for the employees who keep theirs" },
  { value: "+0.4pp", label: "return on capital (interest and dividends up 39.8%)" },
];

export const scenarioCaveats = [
  "A one-year stock: no re-employment, redundancy pay or partner response",
  "Newly displaced workers keep their survey UC take-up flag and get no new-style JSA",
  "Self-employed outside the labour shocks; no reduced hiring of the young",
];

// Section 4.1 and Table 2 (presets, central row; incidence table,
// exposure-proportional row for the 50-draw poverty and Gini means).
export const central: { value: string; label: string }[] = [
  { value: "2.04m", label: "employees displaced (50-draw mean)" },
  { value: "£7.3bn", label: "a year net Exchequer cost (s.d. £1.9bn)" },
  { value: "+2.40pp", label: "absolute poverty before housing costs" },
  { value: "+1.76pp", label: "Gini, from a baseline of 30.3" },
];

// Section 4.1: each channel alone, 20 paired draws, £bn a year.
export const channels: { label: string; value: number; text: string }[] = [
  { label: "Displacement", value: 42.5, text: "lost income tax and NI, more UC" },
  { label: "Survivor wages", value: -17.5, text: "tax on the 2.6% rise" },
  { label: "Capital income", value: -17.9, text: "dividend and savings tax" },
];

// Section 4.2, Table 3 (OBR-sized displacement, 20 draws) and the take-up
// paragraph of Section 4.1.
export const absorption: { value: string; label: string }[] = [
  { value: "29%", label: "of the market-income loss absorbed by income tax, employee NI and benefits" },
  { value: "2.9p", label: "of UC per pound of earnings lost; lower taxes do the rest" },
  { value: "53%", label: "of displaced benefit units entitled to UC claim it (survey flags)" },
];

export const absorptionVariants = [
  "Full UC take-up for the displaced: UC response doubles to £1.36bn",
  "Plus 26 weeks of new-style JSA: cash benefits 8.7p per pound lost",
  "Displaced lose £49,500 on average; 42% of their benefit units hold capital above the UC limit",
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
    text: "Taxed at the worker's marginal rates of income tax and NI, and replaced by UC at the 55% taper",
  },
  {
    icon: IconWallet,
    title: "Job loss removes whole earnings",
    text: "Including the slice under the personal allowance; the UC it adds is less than the tax forgone",
  },
  {
    icon: IconUserMinus,
    title: "Job loss concentrates the loss",
    text: "Fewer households lose everything, and they cross the poverty line",
  },
];

// Table 6 (tab:breakeven) and the take-up paragraph of Section 4.5.
export const breakEvens: { icon: Icon; label: string; central: string; breakEven: string }[] = [
  { icon: IconTrendingUp, label: "Survivor wage rise", central: "+2.6%", breakEven: "+3.7%" },
  { icon: IconCoins, label: "Capital-income uplift", central: "+39.8%", breakEven: "+55%" },
  { icon: IconHourglass, label: "Months out of work", central: "12", breakEven: "9.5" },
];

export const costMovers = [
  "No survivor wage rise: £24.9bn; a 2.6% fall: £42.4bn",
  "Full UC take-up for the displaced: +£2.8bn; with new-style JSA: +£5.5bn",
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
  { reform: "R1 Wage insurance", text: "50% of lost earnings, capped at £15,000", cost: "26.9", bhc: "−1.89", perPoint: "14.3" },
  { reform: "R2 UC allowance +20%", text: "standard allowance", cost: "6.9", bhc: "−0.79", perPoint: "8.6" },
  { reform: "R3 Cap and taper", text: "no benefit cap, taper 55% to 45%", cost: "5.1", bhc: "−0.76", perPoint: "6.7" },
];

// Section 5.
export const conclusions: { title: string; text: string }[] = [
  {
    title: "Who loses the job sets the cost",
    text: "£9.3bn between the four rules: the UK tax base leans on the most exposed occupations",
  },
  {
    title: "The margin sets who bears it",
    text: "Wage cuts cost the Exchequer more per pound (55p against 42p); job loss raises poverty far more",
  },
  {
    title: "The sign rests on the offsets",
    text: "Survivor wages, capital income and spell length each have a break-even close to the central values",
  },
];

export const limits = [
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
