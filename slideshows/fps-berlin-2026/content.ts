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
//
// Text style: slides show short icon rows (a bold lead and a one-line
// tail) and chips, not sentences; the fuller wording is in NOTES.md.

import {
  IconAdjustments,
  IconAlertTriangle,
  IconArrowsDiff,
  IconArrowsSplit,
  IconBabyCarriage,
  IconBolt,
  IconBriefcase,
  IconBuildingFactory,
  IconCalculator,
  IconCalendar,
  IconCash,
  IconChartBar,
  IconCircleCheck,
  IconCoins,
  IconDatabase,
  IconDice5,
  IconEqual,
  IconFilter,
  IconGenderFemale,
  IconHome,
  IconHourglass,
  IconInfoCircle,
  IconLifebuoy,
  IconLink,
  IconLock,
  IconMathFunction,
  IconPercentage,
  IconPigMoney,
  IconReceiptTax,
  IconRepeat,
  IconRoute,
  IconScale,
  IconSchool,
  IconTarget,
  IconTrendingDown,
  IconTrendingUp,
  IconUserMinus,
  IconUsers,
  IconUsersGroup,
  IconWallet,
  IconWorld,
  type Icon,
} from "@tabler/icons-react";

/** One icon row on a slide: a bold lead and an optional one-line tail. */
export type Point = { icon: Icon; lead: string; text?: string };
/** A small grey chip: an icon and a few words. */
export type Chip = { icon: Icon; text: string };
/** A headline number with an icon. */
export type Stat = { icon: Icon; value: string; label: string };

export type PartKey = "question" | "method" | "central" | "comparisons" | "sensitivity";

export const parts: { key: PartKey; short: string; title: string }[] = [
  { key: "question", short: "Question", title: "The question" },
  { key: "method", short: "Method", title: "Data and method" },
  { key: "central", short: "Central case", title: "The central case" },
  { key: "comparisons", short: "Who and how", title: "Who loses the job, and how" },
  { key: "sensitivity", short: "What moves it", title: "What moves the cost, and policy" },
];

export const sources = {
  ssrn: {
    label: "Paper on SSRN: abstract 7174479",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7174479",
  },
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
    text: "Exchequer cost a year: 7% displaced (2.04m), four displacement rules",
  },
  {
    icon: IconArrowsSplit,
    title: "How the loss arrives",
    value: "0.3 vs 2.4pp",
    text: "Poverty rise: wage cuts vs job loss of the same size; wage cuts cost £12bn more",
  },
  {
    icon: IconScale,
    title: "What sets the sign",
    value: "3.7%",
    text: "Survivor wage rise that takes the £7.3bn cost to zero (2.6% assumed)",
  },
];

export const inBriefChips: Chip[] = [
  { icon: IconWorld, text: "Beyond the UK: extensive vs intensive margin (Dolls et al. 2012)" },
  { icon: IconReceiptTax, text: "Labour-tax bases lean on AI-exposed jobs" },
  { icon: IconAlertTriangle, text: "Scenario, not forecast: a decade of adoption in one year" },
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

// Section 1.
export const exposureWhy: Point[] = [
  { icon: IconBriefcase, lead: "Exposed work pays well", text: "Managers, professionals; admin the most exposed" },
  { icon: IconReceiptTax, lead: "It carries much of the tax base", text: "Income tax and National Insurance (NI)" },
  { icon: IconLifebuoy, lead: "Universal Credit acts lower down", text: "UC: the main means-tested benefit" },
  { icon: IconScale, lead: "So where it lands sets the cost" },
];

// Section 1, paragraphs 2 and 4.
export const openQuestions: { icon: Icon; title: string; views: Point[] }[] = [
  {
    icon: IconUsers,
    title: "Who loses the job?",
    views: [
      { icon: IconChartBar, lead: "Exposure", text: "Highly paid cognitive work (Felten et al. 2021; Eloundou et al. 2024)" },
      { icon: IconTrendingDown, lead: "Expertise compression", text: "Experienced workers' premia erode (Autor 2024)" },
      { icon: IconSchool, lead: "Junior workers", text: "In exposed jobs (Brynjolfsson et al. 2026; Klein Teeselink 2025)" },
    ],
  },
  {
    icon: IconArrowsSplit,
    title: "How does the loss arrive?",
    views: [
      { icon: IconUserMinus, lead: "Job loss", text: "Whole earnings go, for fewer people" },
      { icon: IconUsersGroup, lead: "Wage cuts", text: "Same pounds, many workers (Acemoglu and Restrepo 2022)" },
      { icon: IconCoins, lead: "If income shifts to capital", text: "Labour-tax bases erode (Korinek and Lockwood 2026)" },
    ],
  },
];

// Section 3.
export const methodFlow: { icon: Icon; title: string; text: string }[] = [
  { icon: IconChartBar, title: "AI exposure", text: "Felten AIOE × Pizzinelli complementarity (C-AIOE), nine SOC2020 groups" },
  { icon: IconDatabase, title: "Household microdata", text: "Microcosm: calibrated FRS 2024–25, 72,504 employee records" },
  { icon: IconUserMinus, title: "Person-level shock", text: "Job loss, survivor wages, capital income; 50 random draws" },
  { icon: IconCalculator, title: "PolicyEngine UK", text: "Tax and benefit rules legislated or announced for 2027–28" },
];

export const methodOutcomes: Chip[] = [
  { icon: IconReceiptTax, text: "Exchequer cost" },
  { icon: IconHome, text: "Absolute poverty, before and after housing costs" },
  { icon: IconScale, text: "Gini" },
];

// Section 3.2 (Doorley et al. 2026 conventions).
export const scenarioInputs: Stat[] = [
  { icon: IconUserMinus, value: "7%", label: "of employees lose their job for the full year" },
  { icon: IconTrendingUp, value: "+2.6%", label: "average wage rise for those who keep their jobs" },
  { icon: IconCoins, value: "+39.8%", label: "interest and dividends: return on capital 1.005% → 1.405%" },
];

export const scenarioChips: Chip[] = [
  { icon: IconInfoCircle, text: "+0.4pp on a 4% base would be +10%" },
];

export const scenarioCaveats: Point[] = [
  { icon: IconHourglass, lead: "One-year stock", text: "No re-employment, redundancy pay or partner response" },
  { icon: IconLifebuoy, lead: "UC only for simulated claimants", text: "No contributory Jobseeker's Allowance (JSA)" },
  { icon: IconBriefcase, lead: "Labour shocks: employees only", text: "Self-employed outside; no reduced hiring of the young" },
];

// Section 4.1 and Table 2 (presets, central row; incidence table,
// exposure-proportional row for the 50-draw poverty and Gini means).
export const central: Stat[] = [
  { icon: IconUserMinus, value: "2.04m", label: "employees displaced (50-draw mean)" },
  { icon: IconReceiptTax, value: "£7.3bn", label: "a year net Exchequer cost (s.d. £1.9bn)" },
  { icon: IconHome, value: "+2.40pp", label: "absolute poverty before housing costs (+0.82pp relative)" },
  { icon: IconScale, value: "+1.76pp", label: "Gini, from a baseline of 30.3" },
];

export const centralChips: Chip[] = [
  { icon: IconAlertTriangle, text: "Poverty rise: upper bound (full-year spells)" },
  { icon: IconLifebuoy, text: "Poverty +1.99pp with full UC take-up and JSA (20 draws)" },
  { icon: IconInfoCircle, text: "Cost excludes corporation tax, VAT, £26.6bn public pay" },
];

// Section 4.1: each channel alone, 20 paired draws, £bn a year.
export const channels: { label: string; value: number; text: string }[] = [
  { label: "Displacement", value: 42.5, text: "lost tax and NI, more UC" },
  { label: "Survivor wages", value: -17.5, text: "tax on the 2.6% rise" },
  { label: "Capital income", value: -17.9, text: "dividend and savings tax" },
];

// Section 4.1: Figure 4.1 and the paragraph after it.
export const transitionStats: Stat[] = [
  { icon: IconTrendingDown, value: "0.78%", label: "of the bottom decile move into unemployment" },
  { icon: IconTrendingUp, value: "5.57%", label: "of the top decile" },
];

export const transitionPoints: Point[] = [
  { icon: IconUsers, lead: "Mostly where employees sit", text: "Uniform incidence gives a similar gradient" },
  { icon: IconGenderFemale, lead: "Women: 53% of the displaced", text: "49% of employees (20 draws)" },
];

// Section 4.2, Table 3 (OBR-sized displacement, 20 draws) and the take-up
// paragraph of Section 4.1.
export const absorption: Stat[] = [
  { icon: IconScale, value: "29%", label: "of the market-income loss absorbed by income tax, employee NI and benefits" },
  { icon: IconCoins, value: "3.0p", label: "of benefits per £1 of earnings lost; lower taxes do the rest" },
  { icon: IconLifebuoy, value: "53%", label: "of entitled displaced benefit units claim UC" },
];

export const absorptionVariants: Point[] = [
  { icon: IconCash, lead: "£49,500 lost on average", text: "By each displaced worker" },
  { icon: IconPigMoney, lead: "42% hold capital above £16,000", text: "Of their benefit units: UC's capital limit" },
  { icon: IconUsers, lead: "59% have another earner" },
  { icon: IconHome, lead: "70% own their home" },
  { icon: IconWallet, lead: "JSA is flat-rate", text: "£95.55 a week for 26 weeks; not paid to the displaced" },
  { icon: IconArrowsDiff, lead: "3.0p → 5.9p → 8.7p per £1", text: "With full UC take-up, then JSA as well" },
];

export const absorptionChips: Chip[] = [
  { icon: IconWorld, text: "Dolls et al.: EU 47%, US 34%, UK 41.5% (16.3pp benefits)" },
  { icon: IconInfoCircle, text: "Not comparable: Dolls assume full take-up, typical unemployed" },
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

export const incidenceChips: Chip[] = [
  { icon: IconCash, text: "Displacement channel per worker: £18,300 uniform, £22,900 expertise" },
  { icon: IconEqual, text: "Uniform and central poverty rises do not differ over 2,000 draws" },
];

// Table 5 (tab:wagemargin), 20 paired draws, channels on in both rows; and
// the per-pound figures of Section 4.4, channels off.
export const margins = {
  job: { cost: 7.18, bhc: 2.38, perPound: 42 },
  wage: { cost: 19.13, bhc: 0.28, perPound: 55 },
};

export const marginChips: Chip[] = [
  { icon: IconInfoCircle, text: "Channels off: poverty +2.88pp vs +0.92pp" },
  { icon: IconTrendingDown, text: "Wage cuts alone lower the Gini 0.63pp (20 draws)" },
];

export const marginWhy: Point[] = [
  { icon: IconReceiptTax, lead: "Wage cuts hit the margin", text: "Marginal tax; UC replaces 55% for claimants" },
  { icon: IconWallet, lead: "Job loss takes whole earnings", text: "Incl. personal allowance; added UC < tax lost" },
  { icon: IconUserMinus, lead: "Job loss concentrates it", text: "Fewer households lose all; they cross the poverty line" },
];

// Table 6 (tab:breakeven) and the take-up paragraph of Section 4.5.
export const breakEvens: { icon: Icon; label: string; note: string; central: string; breakEven: string }[] = [
  { icon: IconTrendingUp, label: "Survivor wage rise", note: "seed 0", central: "+2.6%", breakEven: "+3.7%" },
  { icon: IconCoins, label: "Capital-income uplift", note: "20 draws", central: "+39.8%", breakEven: "+55%" },
  { icon: IconHourglass, label: "Months out of work", note: "20 draws, upper bound", central: "12", breakEven: "≤9.5" },
];

export const costMovers: Point[] = [
  { icon: IconTrendingDown, lead: "No survivor wage rise: £24.9bn", text: "A 2.6% fall: £42.4bn (seed 0)" },
  { icon: IconLifebuoy, lead: "Full UC take-up: +£2.8bn", text: "With contributory JSA: +£5.5bn (20 draws)" },
  { icon: IconCoins, lead: "Dividends at the HMRC SPI total", text: "+£2.2bn" },
];

export const breakEvenChips: Chip[] = [
  { icon: IconLifebuoy, text: "Full take-up and JSA push every break-even further" },
  { icon: IconHourglass, text: "≤9.5 months: half-year earnings also withdraw UC" },
];

// Table 7 (tab:closure) and Section 4.6, seed 0, £bn a year.
export const closure = {
  labourFall: 68.3,
  displacedEarnings: 100.2,
  survivorGain: 31.9,
  best: "−0.9",
  worst: "14.4",
};

export const closurePoints: Point[] = [
  { icon: IconUserMinus, lead: `Displaced lose £${closure.displacedEarnings}bn`, text: `Survivors gain £${closure.survivorGain}bn` },
  { icon: IconBuildingFactory, lead: "Half of post-tax profit paid out", text: "Dividends taxed at 36%, the capital channel's rate" },
  { icon: IconCoins, lead: "Central uplift: £12.6bn more dividends", text: "Than the labour shock can fund" },
  { icon: IconWorld, lead: "The rest: overseas owners, pension funds", text: "Untaxed here" },
  { icon: IconAlertTriangle, lead: "Static accounting", text: "No profit shifting; public pay can't become profit" },
];

// Table 8 (tab:policy), 50 draws, shocked-plus-reform minus shocked.
export const policyRows: { reform: string; text: string; cost: string; bhc: string; perPoint: string }[] = [
  { reform: "R1 Earnings replacement", text: "wage-insurance style: 50% of lost earnings, capped at £15,000 a year", cost: "26.9", bhc: "−1.89", perPoint: "14.3" },
  { reform: "R2 UC allowance +20%", text: "standard allowance", cost: "6.9", bhc: "−0.79", perPoint: "8.6" },
  { reform: "R3 Cap and taper", text: "no benefit cap, taper 55% to 45%", cost: "5.1", bhc: "−0.76", perPoint: "6.7" },
];

export const policyPoints: Point[] = [
  { icon: IconTarget, lead: "Cost per point: one objective", text: "R1: the displaced; R2 and R3: all claimants" },
  { icon: IconScale, lead: "Not a ranking", text: "Static: no labour-supply or re-employment response" },
  { icon: IconReceiptTax, lead: "R1 untaxed, ignored by means tests", text: "So at the top of its cost range" },
  { icon: IconHourglass, lead: "Half-year spells (5 draws)", text: "R1: £31bn per point; cuts poverty less than R2" },
];

// Section 5.
export const conclusions: { icon: Icon; title: string; text: string }[] = [
  {
    icon: IconUsers,
    title: "Who loses the job moves the cost from £1.9bn to £11.3bn",
    text: "Poverty moves far less: each displaced worker takes their tax and NI",
  },
  {
    icon: IconArrowsSplit,
    title: "For this shock, the margin sets who bears it",
    text: "Wage cuts cost the Exchequer 55p vs 42p per £1; job loss raises poverty far more",
  },
  {
    icon: IconScale,
    title: "With job loss, inequality rises under every rule",
    text: "In every shocked grid cell, even without capital; wage cuts alone lower it",
  },
  {
    icon: IconTrendingUp,
    title: "The sign rests on the offsets",
    text: "Zero at wages +3.7% (not 2.6%), capital +55% (not 39.8%) or spells ≤9.5 months",
  },
];

export const limits: Point[] = [
  { icon: IconCalendar, lead: "A decade of adoption in one year", text: "Full-year job loss: an impact-year stress test" },
  { icon: IconUsersGroup, lead: "Nine occupation groups only" },
  { icon: IconHourglass, lead: "One-year stock", text: "No re-employment" },
  { icon: IconSchool, lead: "Reduced youth hiring outside the frame" },
  { icon: IconRoute, lead: "Next", text: "Calibrate spells and re-employment pay; model take-up and JSA" },
];

// Appendix: OBR benchmark (Section 4.1 and Appendix), 20 draws.
export const obr: { line: string; sim: string; obr: string }[] = [
  { line: "Total cost", sim: "10.2", obr: "9" },
  { line: "Lost receipts", sim: "9.7", obr: "6" },
  { line: "Extra welfare spending", sim: "0.7", obr: "3" },
];

export const obrPoints: Point[] = [
  { icon: IconScale, lead: "Same scale as the OBR scenario", text: "Technological displacement, March 2026" },
  { icon: IconReceiptTax, lead: "More lost receipts, less welfare" },
  { icon: IconCalendar, lead: "Timing and coverage differ", text: "One simulated year vs an average" },
  { icon: IconBabyCarriage, lead: "Nets −£0.3bn", text: "Childcare support and statutory pay end with the job" },
];

// Table (tab:indexsens), seed 0 adjusted to the mean displaced count.
export const indexRows: { index: string; raw: string; adjusted: string; bhc: string; gini: string }[] = [
  { index: "C-AIOE (central)", raw: "7.3", adjusted: "8.2", bhc: "+2.05", gini: "+1.53" },
  { index: "Felten AIOE", raw: "9.3", adjusted: "8.0", bhc: "+2.88", gini: "+1.85" },
  { index: "DfE AIOE", raw: "5.9", adjusted: "7.6", bhc: "+2.42", gini: "+1.79" },
  { index: "DfE LLM", raw: "5.0", adjusted: "5.5", bhc: "+2.21", gini: "+1.67" },
  { index: "Eloundou β", raw: "3.2", adjusted: "4.2", bhc: "+2.27", gini: "+1.86" },
];

export const indexPoints: Point[] = [
  { icon: IconCash, lead: "+£11.6bn per extra million displaced", text: "Adjustment removes each draw's luck in its count" },
  { icon: IconEqual, lead: "Top three indistinguishable", text: "C-AIOE, Felten, DfE AIOE, given ±£1.7bn" },
  { icon: IconScale, lead: "Gini rises under every index" },
  { icon: IconChartBar, lead: "Top decile transitions exceed bottom", text: "Under every index" },
];

// ---------- Data and method detail (Section 3) ----------

// Section 3.1.
export const exposureBuild: { icon: Icon; title: string; text: string }[] = [
  { icon: IconChartBar, title: "AIOE (Felten et al. 2021)", text: "Ten AI applications × O*NET abilities; standardised, can be negative" },
  { icon: IconArrowsSplit, title: "Complementarity θ (Pizzinelli et al. 2023)", text: "Rebuilt from O*NET 27.3; high θ: AI more likely complements" },
  { icon: IconDatabase, title: "Mapped to UK SOC2020", text: "DfE (2023) crosswalk; nine groups, ASHE 2025 weights" },
];

export const exposureNotes: Point[] = [
  { icon: IconTarget, lead: "Least-exposed group set to zero", text: "Elementary: my normalisation, no displacement" },
  { icon: IconUsersGroup, lead: "Varies between groups only", text: "Not within them" },
];

// Section 3.4 (Microcosm) and 3.5 (draws).
export const dataFacts: Stat[] = [
  { icon: IconHome, value: "78,181", label: "households (182,418 people)" },
  { icon: IconBriefcase, value: "29.0m", label: "employees in 2027–28 (69.4m people)" },
  { icon: IconTarget, value: "1,514", label: "calibration targets; 98.7% within 10%" },
  { icon: IconCircleCheck, value: "99.7%", label: "of weighted employees have an occupation" },
];

// Section 3.3: what the shock does to each person.
export const shockSteps: { icon: Icon; title: string; tex: string; text: string }[] = [
  {
    icon: IconUserMinus,
    title: "Job loss",
    tex: "\\text{JobLoss}_l = \\text{Total}\\times\\dfrac{\\text{EMP}_l\\,\\widetilde{C}_l}{\\sum_k \\text{EMP}_k\\,\\widetilde{C}_k}",
    text: "Earnings, hours, pension contributions, statutory pay zeroed",
  },
  {
    icon: IconTrendingUp,
    title: "Survivor wages",
    tex: "\\Delta w_l = g\\times\\dfrac{\\theta_l}{\\bar\\theta}\\times w_l",
    text: "More complementary groups gain more; g = 2.6%",
  },
  {
    icon: IconCoins,
    title: "Capital income",
    tex: "\\times\\,\\dfrac{1.405}{1.005} = 1.398",
    text: "Savings interest and dividends; rent, pensions unchanged",
  },
];

export const shockChips: Chip[] = [
  { icon: IconDice5, text: "Systematic sampling on a random permutation" },
  { icon: IconEqual, text: "Equal inclusion probability; quota holds in expectation" },
  { icon: IconBriefcase, text: "Self-employed outside the labour shocks" },
  { icon: IconCalendar, text: "No spell length: out of work all year" },
];

// Section 3.5.
export const microsimRules: Point[] = [
  { icon: IconCalculator, lead: "PolicyEngine UK 2.174.1", text: "policyengine.py 6.16.1" },
  { icon: IconLock, lead: "Income tax and NI thresholds frozen" },
  { icon: IconCoins, lead: "Dividend rates +2pp", text: "Basic and higher, from April 2026" },
  { icon: IconPigMoney, lead: "Savings and property +4pp, April 2027", text: "Property outside Scotland; 2pp announced, not legislated" },
];

export const outcomeDefs: Point[] = [
  { icon: IconReceiptTax, lead: "Exchequer cost", text: "Income tax, employee and employer NI, benefits; no VAT" },
  { icon: IconHome, lead: "Absolute poverty", text: "HBAI line: 60% of 2024–25 median, fixed real; 12.0% BHC at baseline" },
  { icon: IconScale, lead: "Inequality", text: "Gini, equivalised HBAI disposable income" },
];

export const drawFacts: Stat[] = [
  { icon: IconUsers, value: "72,504", label: "employee records" },
  { icon: IconScale, value: "≈5,810", label: "their effective sample size (uneven weights)" },
  { icon: IconUserMinus, value: "1.85–2.25m", label: "displaced across 50 central draws" },
];

export const drawUses: Chip[] = [
  { icon: IconDice5, text: "50 draws: central case, five rules, reforms" },
  { icon: IconDice5, text: "20 draws: channel split, margin comparison" },
  { icon: IconDice5, text: "Seed 0: grid, indices, closure" },
];

export const drawPoints: Point[] = [
  { icon: IconScale, lead: "Uneven weights", text: "Each draw's count varies around the 7% quota" },
  { icon: IconArrowsDiff, lead: "a ± b: mean and s.d. across draws", text: "Not a confidence interval" },
  { icon: IconAlertTriangle, lead: "Excludes other uncertainty", text: "Survey sampling and parameters" },
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
  { icon: IconReceiptTax, owner: "HMRC SPI", title: "Top incomes", text: "Tax-record incomes; extra copies above £200k" },
  { icon: IconDatabase, owner: "Donor surveys", title: "Imputed variables", text: "Wealth, spending and others" },
  { icon: IconLifebuoy, owner: "DWP and HMRC", title: "Benefit take-up", text: "Reported claims kept; rest to official rates" },
  { icon: IconScale, owner: "Official totals", title: "Calibrated weights", text: "Household weights fitted to official totals" },
];

export const imputationTex = {
  gate: String.raw`d_{iv}\sim\mathrm{Bernoulli}\bigl(\hat\pi_v(x_i,\,y_{i,<v})\bigr)`,
  draw: String.raw`y_{iv}=d_{iv}\,\hat Q_v\bigl(u_{iv}\mid x_i,\,y_{i,<v}\bigr),\qquad u_{iv}\sim U(0,1)`,
};

/** Symbol legend under the imputation equations (KaTeX inline). */
export const imputationLegend: { tex: string; text: string }[] = [
  { tex: String.raw`x`, text: "predictors in both surveys" },
  { tex: String.raw`y_{<v}`, text: "variables already imputed" },
  { tex: String.raw`\hat\pi`, text: "classifier's P(non-zero)" },
  { tex: String.raw`\hat Q`, text: "forest's conditional quantile" },
  { tex: String.raw`u`, text: "seeded uniform draw" },
];

export const imputationPoints: Point[] = [
  { icon: IconDatabase, lead: "Donor surveys", text: "Wealth: WAS round 8; spending: LCFS 2024–25" },
  { icon: IconAdjustments, lead: "Predictors", text: "Incomes by source, household type, tenure, region" },
  { icon: IconLink, lead: "Chained", text: "Each draw conditions on those before" },
  { icon: IconFilter, lead: "Gated", text: "A classifier draws zero or not: zeros stay exact" },
  { icon: IconRepeat, lead: "Weighted and seeded", text: "Donors resampled by survey weight" },
  { icon: IconBriefcase, lead: "Occupation observed in the FRS", text: "Imputed only for the tax-record copies" },
];

export const calibrationTex = String.raw`\min_{w}\ \sum_{j=1}^{J}\lambda_j\,\min\!\left(\frac{\lvert \hat T_j(w)-T_j\rvert}{\max(\lvert T_j\rvert,\,1)},\ 10\right)\quad\text{s.t.}\ \ 0<w_i\le 10\,w_i^{0}`;

export const calibrationPoints: Point[] = [
  { icon: IconMathFunction, lead: "T̂ⱼ(w) = Σᵢ aⱼᵢwᵢ", text: "The file's total; w⁰ the starting weights" },
  { icon: IconPercentage, lead: "Relative errors, capped at 1,000%", text: "No single target dominates" },
  { icon: IconScale, lead: "λⱼ: 38 families weighted equally", text: "Split evenly within each family" },
  { icon: IconBolt, lead: "Adam on log-weights", text: "1,500 steps, best step kept" },
  { icon: IconLock, lead: "Only the ×10 bound limits weights", text: "Unlike raking or GREG; total weight free" },
];

export const calibrationFacts: Stat[] = [
  { icon: IconTarget, value: "1,514", label: "targets: HMRC, ONS, DWP, OBR, others" },
  { icon: IconCircleCheck, value: "98.7%", label: "within 10% of the official figure (in sample)" },
  { icon: IconUsers, value: "≈7,200", label: "Kish effective sample, (Σw)²/Σw², of 78,181" },
];
