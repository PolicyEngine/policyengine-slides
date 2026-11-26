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
  IconBuildingBank,
  IconCpu,
  IconNetwork,
  IconPlayerPause,
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

export const parts: { key: PartKey; short: string; title: string; icon: Icon; agenda: string }[] = [
  { key: "question", short: "Question", title: "The question", icon: IconTarget, agenda: "Which jobs are exposed, and two open questions" },
  { key: "method", short: "Method", title: "Data and method", icon: IconDatabase, agenda: "The data, the exposure score, the shock" },
  { key: "central", short: "Central case", title: "The central case", icon: IconReceiptTax, agenda: "Cost, poverty and inequality; who absorbs the loss" },
  { key: "comparisons", short: "Who and how", title: "Who loses the job, and how", icon: IconArrowsSplit, agenda: "Five displacement rules; job loss vs wage cuts" },
  { key: "sensitivity", short: "What moves it", title: "What moves the cost, and policy", icon: IconScale, agenda: "Break-even assumptions, where the wage bill goes, three policy responses" },
];

export const sources = {
  linkedin: {
    label: "linkedin.com/in/vahidahmadi",
    href: "https://www.linkedin.com/in/vahidahmadi/",
  },
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
  { icon: IconBriefcase, lead: "Exposed jobs are well paid", text: "Managers, professionals; admin the most exposed" },
  { icon: IconReceiptTax, lead: "They carry much of the tax base", text: "Income tax and National Insurance (NI)" },
  { icon: IconLifebuoy, lead: "Universal Credit (UC) mainly helps low earners", text: "Means-tested: well-paid workers who lose income often get little" },
  { icon: IconScale, lead: "So who is hit decides the cost to the budget" },
];

// Section 1, paragraphs 2 and 4.
export const openQuestions: { icon: Icon; title: string; views: Point[] }[] = [
  {
    icon: IconUsers,
    title: "Who loses the job?",
    views: [
      { icon: IconChartBar, lead: "Exposure", text: "Highly paid cognitive work (Felten et al. 2021; Eloundou et al. 2024)" },
      { icon: IconTrendingDown, lead: "Expertise compression", text: "Experienced workers' pay premium shrinks (Autor 2024)" },
      { icon: IconSchool, lead: "Junior workers", text: "In exposed jobs (Brynjolfsson et al. 2026; Klein Teeselink 2025)" },
    ],
  },
  {
    icon: IconArrowsSplit,
    title: "How does the loss arrive?",
    views: [
      { icon: IconUserMinus, lead: "Job loss", text: "Whole earnings go, for fewer people" },
      { icon: IconUsersGroup, lead: "Wage cuts", text: "The same total loss, spread over many workers (Acemoglu and Restrepo 2022)" },
      { icon: IconCoins, lead: "Or a shift to capital", text: "Taxes on labour shrink (Korinek and Lockwood 2026)" },
    ],
  },
];

// Section 3.
export const methodFlow: { icon: Icon; title: string; text: string }[] = [
  { icon: IconDatabase, title: "Household data", text: "Microcosm: the Family Resources Survey 2024–25, matched to official totals" },
  { icon: IconChartBar, title: "AI exposure", text: "A score for nine occupation groups (Felten et al.), adjusted for complementarity" },
  { icon: IconUserMinus, title: "The shock, person by person", text: "Job loss, pay rises for those who stay, capital income; who loses the job is drawn at random" },
  { icon: IconCalculator, title: "PolicyEngine UK", text: "Tax and benefit rules for 2027–28" },
];

export const methodOutcomes: Chip[] = [
  { icon: IconReceiptTax, text: "Exchequer cost" },
  { icon: IconHome, text: "Absolute poverty, before and after housing costs" },
  { icon: IconScale, text: "Gini" },
];

// Section 3.2 (Doorley et al. 2026 conventions).
export const scenarioInputs: Stat[] = [
  { icon: IconUserMinus, value: "7%", label: "of employees lose their job for the full year" },
  { icon: IconTrendingUp, value: "+2.6%", label: "average wage rise, over all baseline employees; paid to those who keep their jobs" },
  { icon: IconCoins, value: "+39.8%", label: "interest and dividends: return on capital 1.005% → 1.405%" },
];

export const scenarioChips: Chip[] = [
  { icon: IconHourglass, text: "Out of work for the full year: no re-employment or redundancy pay" },
  { icon: IconLifebuoy, text: "Only households the data mark as claimants get UC; contributory unemployment benefit not modelled" },
  { icon: IconBriefcase, text: "Employees only: the self-employed are outside the shock" },
];

// Slide 11: one titled card per shock; the plain line and the detail.
export const shockCards: { title: string; plain: string; detail: string }[] = [
  { title: "Job loss", plain: "of employees lose their job for the whole year", detail: "More in more exposed, larger groups; pay, hours and pensions set to zero" },
  { title: "Pay of those who stay", plain: "average pay rise, paid to those who keep their jobs", detail: "Groups where AI helps the worker (high θ) gain more" },
  { title: "Capital income", plain: "on savings interest and dividends", detail: "Return on capital 1.0% → 1.4%: +40% on this low base, +10% on a 4% base" },
];

export const scenarioCaveats: Point[] = [
  { icon: IconHourglass, lead: "One-year stock", text: "No re-employment, redundancy pay or partner response" },
  { icon: IconLifebuoy, lead: "UC only for simulated claimants", text: "No contributory Jobseeker's Allowance (JSA)" },
  { icon: IconBriefcase, lead: "Labour shocks: employees only", text: "Self-employed outside; no reduced hiring of the young" },
];

// Section 4.1 and Table 2 (presets, central row; incidence table,
// exposure-proportional row for the 50-draw poverty and Gini means).
export const central: Stat[] = [
  { icon: IconUserMinus, value: "2.04m", label: "employees lose their job" },
  { icon: IconReceiptTax, value: "£7.3bn", label: "a year: net cost to the budget" },
  { icon: IconHome, value: "+2.40pp", label: "absolute poverty, before housing costs" },
  { icon: IconScale, value: "+1.76pp", label: "Gini, from 30.3" },
];

export const centralChips: Chip[] = [
  { icon: IconAlertTriangle, text: "Poverty rise is an upper bound: everyone displaced is out of work all year" },
  { icon: IconInfoCircle, text: "Cost excludes corporation tax, VAT and the £26.6bn pay bill of displaced public-sector staff" },
];

// Section 4.1: each channel alone, 20 paired draws, £bn a year.
export const channels: { label: string; value: number; text: string }[] = [
  { label: "Job loss", value: 42.5, text: "lost income tax and NI, more UC" },
  { label: "Pay rises", value: -17.5, text: "tax on the 2.6% rise" },
  { label: "Capital income", value: -17.9, text: "tax on dividends and savings" },
];

// Section 4.1: Figure 4.1 and the paragraph after it.
export const transitionStats: Stat[] = [
  { icon: IconTrendingDown, value: "0.78%", label: "of the bottom decile move into unemployment" },
  { icon: IconTrendingUp, value: "5.57%", label: "of the top decile" },
];

export const transitionPoints: Point[] = [
  { icon: IconTrendingDown, lead: "Income falls most in decile 8: −2.9%", text: "At the top, capital gains offset lost earnings" },
  { icon: IconUsers, lead: "Mostly where employees sit", text: "Equal chances for every employee give a similar pattern" },
];

// Section 4.2, Table 3 (OBR-sized displacement, 20 draws) and the take-up
// paragraph of Section 4.1.
export const absorption: Stat[] = [
  { icon: IconScale, value: "29%", label: "of lost earnings absorbed by lower income tax and NI, and higher benefits" },
  { icon: IconCoins, value: "3p", label: "of extra benefits per £1 of earnings lost; lower taxes do the rest" },
];

export const absorptionVariants: Point[] = [
  { icon: IconPigMoney, lead: "Many have savings", text: "42% of their families hold over £16,000, UC's capital limit" },
  { icon: IconUsers, lead: "Many have a working partner", text: "59% of the displaced" },
  { icon: IconLifebuoy, lead: "Many entitled do not claim", text: "53% of those entitled claim UC" },
  { icon: IconWallet, lead: "Contributory unemployment benefit (JSA)", text: "Flat £95.55 a week for 26 weeks; not modelled for the newly displaced" },
];

export const absorptionChips: Chip[] = [
  { icon: IconWorld, text: "Germany and France pay earnings-related unemployment insurance; the UK does not. A stylised 50% wage insurance is tested later" },
  { icon: IconInfoCircle, text: "Not comparable with Dolls et al. (UK 41.5%, EU 47%): they assume full take-up and the typical unemployed" },
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
  { rule: "Junior-concentrated", text: "under-25s more likely, within each group", cost: "7.0", sd: "1.6", bhc: "+2.43", ahc: "+2.59", gini: "+1.77" },
  { rule: "Exposure-proportional", text: "central case", cost: "7.3", sd: "1.9", bhc: "+2.40", ahc: "+2.57", gini: "+1.76" },
  { rule: "Expertise compression", text: "high earners in the more exposed groups twice as likely", cost: "11.3", sd: "2.6", bhc: "+2.65", ahc: "+2.76", gini: "+1.78" },
  { rule: "Top-loaded stress test", text: "tilted strongly to high earners (upper bound)", cost: "27.7", sd: "2.7", bhc: "+3.00", ahc: "+3.38", gini: "+1.77", stress: true },
];

export const incidenceChips: Chip[] = [
  { icon: IconChartBar, text: "Every rule hits the upper half of the distribution hardest" },
  { icon: IconEqual, text: "Uniform and central poverty rises do not differ (2,000 draws)" },
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
  { icon: IconReceiptTax, lead: "Wage cuts hit the marginal rate", text: "Each £1 cut is taxed at the marginal rate; UC tops up claimants" },
  { icon: IconWallet, lead: "Job loss takes whole earnings", text: "Including the tax-free allowance; extra UC is less than the tax lost" },
  { icon: IconUserMinus, lead: "Job loss concentrates the loss", text: "Fewer households lose everything, and they fall below the poverty line" },
];

// Table 6 (tab:breakeven) and the take-up paragraph of Section 4.5.
export const breakEvens: { icon: Icon; label: string; note: string; central: string; breakEven: string }[] = [
  { icon: IconTrendingUp, label: "Pay rise for those who stay", note: "one draw", central: "+2.6%", breakEven: "+3.7%" },
  { icon: IconCoins, label: "Capital-income uplift", note: "20 draws", central: "+39.8%", breakEven: "+55%" },
  { icon: IconHourglass, label: "Months out of work", note: "upper bound", central: "12", breakEven: "≤9.5" },
];

export const costMovers: Point[] = [
  { icon: IconTrendingDown, lead: "No pay rise for those who stay: £24.9bn", text: "A 2.6% pay fall: £42.4bn (one draw)" },
  { icon: IconCoins, lead: "Capital uplift of 10%, not 40%: £20.6bn", text: "20 draws" },
  { icon: IconLifebuoy, lead: "Full UC take-up: +£2.8bn", text: "With contributory JSA as well: +£5.5bn" },
];

export const breakEvenChips: Chip[] = [
  { icon: IconLifebuoy, text: "Full take-up and JSA push every break-even further" },
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
  { icon: IconCoins, lead: "The central capital gain needs £12.6bn more dividends", text: "Than the labour shock can fund" },
  { icon: IconWorld, lead: "The rest goes abroad or to pension funds", text: "Untaxed in the UK" },
  { icon: IconAlertTriangle, lead: "Simple accounting", text: "No profit shifting; public-sector pay cannot become profit" },
];

// Table 8 (tab:policy), 50 draws, shocked-plus-reform minus shocked.
export const policyRows: { reform: string; text: string; cost: string; bhc: string; perPoint: string }[] = [
  { reform: "Wage insurance", text: "50% of lost earnings, capped at £15,000 a year", cost: "26.9", bhc: "−1.89", perPoint: "14.3" },
  { reform: "UC allowance +20%", text: "the standard allowance", cost: "6.9", bhc: "−0.79", perPoint: "8.6" },
  { reform: "No benefit cap, lower taper", text: "UC taper 55% → 45%", cost: "5.1", bhc: "−0.76", perPoint: "6.7" },
];

export const policyPoints: Point[] = [
  { icon: IconTarget, lead: "Different targets", text: "Wage insurance pays the displaced; the other two pay all claimants" },
  { icon: IconScale, lead: "Not a ranking", text: "No labour-supply or re-employment response" },
  { icon: IconReceiptTax, lead: "Wage insurance is untaxed and not counted for benefits", text: "So at the top of its cost range" },
];

// Section 5.
export const conclusions: { icon: Icon; title: string; text: string }[] = [
  {
    icon: IconUsers,
    title: "Who loses the job moves the cost from £1.9bn to £11.3bn",
    text: "Each displaced worker takes their income tax and NI with them; poverty moves far less",
  },
  {
    icon: IconArrowsSplit,
    title: "For this shock, the margin changes how the loss is shared",
    text: "Wage cuts cost the budget more (55p vs 42p per £1); job loss raises poverty far more",
  },
  {
    icon: IconScale,
    title: "With job loss, inequality rises under every rule",
    text: "In every scenario tested, even without the capital gain; wage cuts alone lower it",
  },
  {
    icon: IconTrendingUp,
    title: "The sign rests on the offsets",
    text: "And on how much of the lost wage bill returns as taxable profit: from a £0.9bn gain to a £14.4bn cost",
  },
];

export const limits: Point[] = [
  { icon: IconCalendar, lead: "A decade of adoption in one year", text: "Full-year job loss: an impact-year stress test" },
  { icon: IconUsersGroup, lead: "Nine occupation groups only" },
  { icon: IconHourglass, lead: "One-year stock", text: "No re-employment" },
  { icon: IconSchool, lead: "Reduced youth hiring outside the frame" },
];

// Section 5 (discussion): the limits that point to further work.
export const futureWork: { icon: Icon; title: string; now: string; next: string }[] = [
  {
    icon: IconUsersGroup,
    title: "Within-group incidence",
    now: "Exposure varies across nine groups only",
    next: "UK-native index (Henseke et al. 2025), detailed occupations from the LFS",
  },
  {
    icon: IconHourglass,
    title: "Spells and re-employment",
    now: "Out of work all year, no re-employment",
    next: "Calibrate to UK displacement evidence (Upward and Wright 2019)",
  },
  {
    icon: IconLifebuoy,
    title: "The benefit response",
    now: "No new-style JSA; drawn UC take-up",
    next: "JSA, take-up, council tax reduction, benefit-cap grace period",
  },
  {
    icon: IconSchool,
    title: "Hiring and retraining",
    now: "Reduced youth hiring outside the frame",
    next: "Entry margin (Brynjolfsson et al. 2026); retraining (Hyman et al. 2025)",
  },
  {
    icon: IconCoins,
    title: "Wider capital channel",
    now: "Interest and dividends only",
    next: "Rent and pension returns as well",
  },
  {
    icon: IconBriefcase,
    title: "Self-employed",
    now: "Outside the labour shocks",
    next: "Bring them into the displacement and wage shocks",
  },
];

// Other directions beyond the paper (not results). The macro dashboard is
// PolicyEngine's "AI and the UK economy: Beyond the forecast" (OG-UK plus
// this household study); the token tax project is PolicyEngine/uk-token-tax
// (work in progress; the repo names the client only as the token tax project).
export const growthDashboard = {
  title: "AI and the UK economy: Beyond the forecast",
  href: "https://uk-growth-with-jadm03obk-policy-engine.vercel.app",
};

export const directions: { icon: Icon; title: string; text: string; rows?: Point[] }[] = [
  {
    icon: IconChartBar,
    title: "The whole economy, over time",
    text: "A macro model (OG-UK) alongside this household study: output, pay, national income and debt to 2036",
  },
  {
    icon: IconNetwork,
    title: "Firms and production networks",
    text: "Firm-level microsimulation on the input–output network, linked to the households that work in and own the firms",
  },
  {
    icon: IconPlayerPause,
    title: "If the US slows AI development",
    text: "Future effects of a slower frontier pace on:",
    rows: [
      { icon: IconBuildingBank, lead: "Government", text: "Revenue, spending, debt" },
      { icon: IconUsers, lead: "People", text: "Jobs, incomes, poverty" },
      { icon: IconBuildingFactory, lead: "Firms", text: "Adoption, productivity, profits" },
    ],
  },
  {
    icon: IconCpu,
    title: "The token tax project",
    text: "Household incidence of a UK tax on AI tokens, on PolicyEngine UK (in progress)",
  },
];

// The future-work cards, one line each, for the merged conclusions slide.
export const futureLines: Point[] = [
  { icon: IconUsersGroup, lead: "Within-group incidence", text: "Next: detailed occupations (Labour Force Survey)" },
  { icon: IconHourglass, lead: "Spells and re-employment", text: "Next: calibrate to UK displacement evidence" },
  { icon: IconLifebuoy, lead: "The benefit response", text: "Next: contributory JSA and take-up" },
];

export const directionPoints: Point[] = [
  { icon: IconChartBar, lead: "The whole economy, over time", text: "A macro model (OG-UK) with full employment: AI shows up in pay, not job loss. Preliminary, not yet published" },
  { icon: IconNetwork, lead: "Firms and production networks", text: "Firm microsimulation, linked to households" },
  { icon: IconPlayerPause, lead: "If the US slows AI development", text: "Future effects on government, people and firms" },
  { icon: IconCpu, lead: "The token tax project", text: "Household incidence of a UK tax on AI tokens (in progress)" },
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
  { icon: IconEqual, lead: "Felten and C-AIOE: £8.0bn vs £8.2bn", text: "Within single-draw scatter (s.d. £1.7bn around the fitted line)" },
  { icon: IconScale, lead: "Gini rises under every index" },
  { icon: IconChartBar, lead: "Top decile transitions exceed bottom", text: "Under every index" },
];

// ---------- Data and method detail (Section 3) ----------

// Section 3.1.
export const exposureBuild: { icon: Icon; title: string; text: string }[] = [
  { icon: IconChartBar, title: "AIOE: what AI can do", text: "How closely ten AI applications match the abilities a job needs (Felten et al. 2021, O*NET)" },
  { icon: IconArrowsSplit, title: "θ: does AI help or replace?", text: "From 0 to 1; high θ means AI more likely complements the worker (Pizzinelli et al. 2023)" },
  { icon: IconDatabase, title: "C-AIOE, for nine UK groups", text: "Exposure scaled down where θ is high, mapped to UK occupations" },
];

export const exposureNotes: Point[] = [
  { icon: IconArrowsSplit, lead: "Where θ comes from", text: "O*NET job descriptions: work context and training needs" },
  { icon: IconTarget, lead: "Least-exposed group set to zero", text: "Elementary occupations: no job loss (my assumption)" },
  { icon: IconUsersGroup, lead: "Nine groups only", text: "Everyone in a group gets the same score" },
];

// Section 3.4 (Microcosm) and 3.5 (draws).
export const dataFacts: Stat[] = [
  { icon: IconHome, value: "78,181", label: "households, including extra high-income records from tax data" },
  { icon: IconTarget, value: "98.7%", label: "of 1,514 official totals matched within 10%" },
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
    text: "More complementary groups gain more; g\u00a0=\u00a02.6%",
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
  { icon: IconReceiptTax, lead: "Exchequer cost", text: "Fall in the UK budget balance: income tax, NI, benefits (no VAT)" },
  { icon: IconHome, lead: "Absolute poverty", text: "Official UK low-income line, fixed in real terms; 12% of people at baseline" },
  { icon: IconScale, lead: "Inequality", text: "Gini of household disposable income" },
];

export const drawFacts: Stat[] = [
  { icon: IconUserMinus, value: "1.85–2.25m", label: "lose their job, across 50 random draws of who is displaced" },
];

export const drawUses: Chip[] = [
  { icon: IconDice5, text: "Most results average 50 draws; some comparisons use 20 draws or a single draw" },
];

export const drawPoints: Point[] = [
  { icon: IconArrowsDiff, lead: "Results are averages over draws", text: "The spread across draws is not a confidence interval" },
  { icon: IconAlertTriangle, lead: "Survey and parameter uncertainty excluded" },
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
  { icon: IconReceiptTax, owner: "HMRC tax records", title: "Top incomes", text: "Extra records with tax-record incomes" },
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
  { tex: String.raw`\hat Q`, text: "forest fitted on non-zero donors" },
  { tex: String.raw`u`, text: "seeded uniform draw" },
];

export const imputationPoints: Point[] = [
  { icon: IconDatabase, lead: "Donor surveys", text: "Wealth: WAS round 8; spending: LCFS 2024–25" },
  { icon: IconAdjustments, lead: "Predictors", text: "Incomes by source, household type, tenure, region" },
  { icon: IconLink, lead: "Chained", text: "Each draw conditions on those before" },
  { icon: IconFilter, lead: "Gated", text: "Signed variables: a three-way sign gate, a forest per sign" },
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

// What the weights are fitted to: the 1,514 targets of the 7 November build
// the paper used (microcosm-uk-2024-25-national-20261107T020434Z-eeb6093e,
// uk-ai-study README), from the calibration dashboard's data route for that
// release (/calibration/dashboard/api/microcosm?country=uk&release=...,
// "family_fit", 41 groups), read 25 November 2026: 1,514 targets, 1,495
// within 10% (98.7%), 78,181 records, effective sample size 7,195. Rows group
// families as the BIST deck does (bist-2026/content.ts, targetTable, for the
// 15 November build); this build has no PIP targets and 103 UC targets.
// Others: OBR 16, Scottish Government 12, Student Loans Company 12 (11),
// Department for Transport 13, Welsh Government 11, DfE 8, Northern Ireland
// bodies 5, Independent Schools Council 1.
export const targetRows: { source: string; topic: string; count: number; within: number }[] = [
  { source: "HMRC", topic: "Incomes by band (SPI)", count: 568, within: 553 },
  { source: "HMRC", topic: "Capital gains and income tax liabilities", count: 189, within: 189 },
  { source: "HMRC", topic: "Child Benefit, salary sacrifice, other", count: 19, within: 19 },
  { source: "ONS", topic: "Population by age and sex", count: 179, within: 179 },
  { source: "ONS", topic: "Employment by occupation", count: 159, within: 159 },
  { source: "ONS", topic: "Household composition, land, spending", count: 27, within: 27 },
  { source: "DWP", topic: "Universal Credit", count: 103, within: 100 },
  { source: "DWP", topic: "State Pension and Pension Credit", count: 70, within: 70 },
  { source: "DWP", topic: "Two-child limit, benefit cap, other benefits", count: 40, within: 40 },
  { source: "MHCLG", topic: "Council tax dwellings by band", count: 82, within: 82 },
  { source: "Others", topic: "OBR, devolved, DfT, DfE, student loans", count: 78, within: 77 },
];

// Slide 11: the three-line legend for the loss (as in calibrationPoints).
export const calibrationLegend: Point[] = [
  { icon: IconScale, lead: "λⱼ: each of the 38 families gets an equal share", text: "Split evenly within the family" },
  { icon: IconPercentage, lead: "Each relative error capped at 10 (1,000%)", text: "No single target dominates" },
  { icon: IconLock, lead: "Each weight at most 10 times its starting value", text: "w⁰: the survey's starting weights" },
];

export const calibrationFacts: Stat[] = [
  { icon: IconTarget, value: "1,514", label: "targets: HMRC, ONS, DWP, OBR, others" },
  { icon: IconCircleCheck, value: "98.7%", label: "within 10% of the official figure (in sample)" },
  { icon: IconUsers, value: "≈7,200", label: "Kish effective sample, (Σw)²/Σw², of 78,181" },
];
