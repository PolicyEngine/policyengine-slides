import moduleLinkMatrix from "./module-links.json";

// Every figure on the slides comes from a file read at a pinned commit, checked
// on 18 November 2026:
// - PolicyEngine/obr-macroeconomic-model main 0e44ec87 (after #70–#72, #74 and
//   #75: the forecast 16+ population on the EFO-implied path, and the
//   nominal-consistent government-consumption shock);
// - PolicyEngine/macro main 2e5dffe7 (after #275);
// - PolicyEngine/obr-presentation main f4f819a7 (the July 2025 NEF deck).
// OBR-model numbers are taken from the model repo, not from the macro site,
// which still quoted the pre-#71 scorecard (4.25%) at its pinned commit.
const obrCommit = "0e44ec87681eba0a1f61d634875f5431ac2344c8";
const macroCommit = "2e5dffe7a2b35d189c8df60ff2012abbdb675367";
const priorDeckCommit = "f4f819a786dc6d33f5836aae22d4d5f93aa778da";

const obr = `https://github.com/PolicyEngine/obr-macroeconomic-model/blob/${obrCommit}`;
const macro = `https://github.com/PolicyEngine/macro/blob/${macroCommit}`;

export type Source = { label: string; href: string };

export const sources = {
  liveSite: {
    label: "PolicyEngine macro site (live, in development)",
    href: "https://policyengine-macro.vercel.app",
  },
  obrReadme: { label: "OBR model README", href: `${obr}/README.md` },
  listing: {
    label: "OBR model code, October 2025",
    href: `${obr}/obr_macro/_data/obr_model_code_october_2025.txt`,
  },
  transpiler: { label: "transpiler.py", href: `${obr}/obr_macro/transpiler.py` },
  scorecard: {
    label: "Calibration scorecard",
    href: `${obr}/docs/calibration_scorecard.md`,
  },
  demo: { label: "Demo shocks", href: `${obr}/docs/demo.md` },
  demoResults: {
    label: "demo_shocks.json",
    href: `${obr}/results/demo_shocks.json`,
  },
  siteFigures: {
    label: "site_figures.json",
    href: `${obr}/results/site_figures.json`,
  },
  review: {
    label: "Published-model review",
    href: `${obr}/docs/published_model_review.md`,
  },
  roadmap: { label: "OBR model roadmap", href: `${obr}/docs/ROADMAP.md` },
  forecasting: {
    label: "Forecasting framework",
    href: `${obr}/docs/forecasting_framework.md`,
  },
  monetary: {
    label: "Monetary conditioning",
    href: `${obr}/docs/monetary_conditioning.md`,
  },
  tywhh: {
    label: "TYWHH changelog (#71)",
    href: `${obr}/changelog.d/tywhh-seasonal-basis.fixed.md`,
  },
  pop16: {
    label: "Population changelog (#74)",
    href: `${obr}/changelog.d/pop16-efo-path.fixed.md`,
  },
  nominalSpending: {
    label: "Spending-shock changelog (#75)",
    href: `${obr}/changelog.d/nominal-consistent-spending.changed.md`,
  },
  passthrough: {
    label: "Price pass-through changelog (#70)",
    href: `${obr}/changelog.d/price-passthrough-60.added.md`,
  },
  macroReadme: { label: "Macro platform README", href: `${macro}/README.md` },
  compare: { label: "Model comparison page", href: `${macro}/models/index.html` },
  definePage: { label: "DEFINE-UK model page", href: `${macro}/define/index.html` },
  forecastPage: {
    label: "Forecast track record",
    href: `${macro}/forecasts/index.html`,
  },
  forecastScores: {
    label: "scorecard.json",
    href: `${macro}/forecasts/scorecard.json`,
  },
  forecastRules: {
    label: "Forecast archive rules",
    href: `${macro}/forecasts/README.md`,
  },
  mcpServer: {
    label: "mcp_server.py",
    href: `${macro}/integration/src/policyengine_macro/mcp_server.py`,
  },
  cli: { label: "cli.py", href: `${macro}/integration/src/policyengine_macro/cli.py` },
  capabilities: {
    label: "capabilities.py",
    href: `${macro}/integration/src/policyengine_macro/capabilities.py`,
  },
  hostedPin: {
    label: "integration/pyproject.toml",
    href: `${macro}/integration/pyproject.toml`,
  },
  connect: { label: "Use page (MCP, CLI, Python)", href: `${macro}/connect/index.html` },
  priorDeck: {
    label: "July 2025 NEF deck",
    href: `https://github.com/PolicyEngine/obr-presentation/blob/${priorDeckCommit}/NEF%20x%20PolicyEngine.pptx`,
  },
  obrRepo: {
    label: "PolicyEngine/obr-macroeconomic-model",
    href: "https://github.com/PolicyEngine/obr-macroeconomic-model",
  },
  macroRepo: {
    label: "PolicyEngine/macro",
    href: "https://github.com/PolicyEngine/macro",
  },
} satisfies Record<string, Source>;

// ---------------------------------------------------------------------------
// What the OBR publishes and what we built (README "Features" and "Pins";
// ROADMAP "What 'what the OBR has' decomposes into"; forecasting_framework.md
// "The data that made it work").
export const listing = {
  equations: 372,
  // Dropped in at least one quarter of the pinned 2025Q1–2027Q4 reform solve
  // because an input has no data (README; demo.md "Closure").
  droppedEquations: 82,
  onsSeries: 355,
  // Endogenous variables the model referenced but the EFO did not publish, and
  // how many of them had ONS codes (forecasting_framework.md).
  missingEndogenous: 261,
  missingWithOnsCodes: 199,
  listingDate: "15 October 2025",
  efo: "October 2026 EFO",
  efoShort: "Oct 2026",
  efoPublished: "28 October 2026",
};

// One entry per layer; the slide shows each as a card. `obr` is what the OBR
// has, `ours` what the Python build has. The stand-ins sit in the judgement
// card (model README at the pinned commit): anchoring, l.27-28 (add-factors
// are EFO minus model; reforms are scored around the anchored baseline, so
// they cancel); the three opt-in overlays in run_reform, l.141 (labelled
// judgement, not model dynamics), with l.30 (published_conventions: the
// OBR's multipliers and taper), l.35 (monetary_conditioning: mortgage rate at
// the listing's 0.9 pass-through) and l.32 (price_passthrough: VAT into CPI);
// and a user's own assumptions, by changing any input path through
// run_reform.
export const layers = [
  {
    title: "The model",
    obr: "372 equations, published as EViews code",
    ours: "All 372 transpiled to Python",
    status: "built",
  },
  {
    title: "The engine",
    obr: "EViews solver, closures, add-factors",
    ours: "Gauss-Seidel solver, closures, add-factors",
    status: "partial",
  },
  {
    title: "The judgement",
    obr: "Add-factors and assumptions, unpublished",
    ours: "Stand-ins, each labelled",
    status: "standin",
  },
] as const;

// Terms glossed where they first appear, in the engine card (standard
// definitions, not claims from the repo).
export const engineTerms = [
  { title: "Closure", text: "which variables are solved, which are inputs" },
  { title: "Add-factor", text: "an adjustment added to an equation's result" },
];

// The EFO, spelled out where it first appears (the judgement card).
export const efoGloss = {
  name: "Economic and Fiscal Outlook (EFO)",
  what: "The OBR's twice-yearly forecast: our baseline",
};

export const judgementStandIns = [
  { title: "Anchoring", text: "the OBR's forecast minus model" },
  { title: "Opt-in overlays", text: "multipliers, mortgage rate, VAT" },
  { title: "Your own", text: "change any input path" },
];

// The solver (model README l.15 and l.152: Gauss-Seidel iteration over ~370
// equations; l.36: every quarter converges to tolerance under the default
// closure; under the published closure no quarter converges, README "Solver
// convergence").
export const solver = {
  what: "Each variable from the others' latest values, repeated until nothing changes",
};

export const pipeline = [
  { title: "Transpile", text: "EViews to Python" },
  { title: "Fill inputs", text: "355 ONS series" },
  { title: "Close", text: "GDP solved, not an input" },
  { title: "Solve", text: "Gauss-Seidel, by quarter" },
  { title: "Anchor", text: "Add-factors to the EFO" },
  { title: "Score", text: "Scenario minus baseline" },
];

// ---------------------------------------------------------------------------
// The model's modules, from the section headers of the OBR's listing
// (obr_macro/_data/obr_model_code_october_2025.txt at the pinned commit).
// Counts are the equations our parser (transpiler.parse_equation) reads under
// each header; they sum to 372. The listing has no Group 13 or Group 17.
// Mapping: GDP and output = Group 16 (29) + market sector GVA satellite (4);
// consumption = Group 1; investment and inventories = Groups 2 (7) + 3 (42);
// labour market = Group 4; exports = Group 5; imports = Group 6; prices and
// wages = Group 7; North Sea oil = Group 8; public sector = Groups 9 (15) +
// 10 (13) + 12 (31); balance of payments = Group 11; income accounts =
// Group 15; finance and balance sheets = Group 14 (5) + Group 18
// (households 28, rest of world 23, non-financial companies 13).
// "exogenous" notes are from docs/published_model_review.md (G1, N1, R1, G3,
// V1). Variables are left-hand sides in that section of the listing.
export type ModelModule = {
  name: string;
  equations: number;
  variables: string;
  exogenous?: string;
};

export const modelModules: ModelModule[] = [
  { name: "GDP and output", equations: 33, variables: "GDPMPS, GVA, MSGVA", exogenous: "Real GDP exogenous" },
  { name: "Consumption", equations: 5, variables: "CONS, CDUR, PD" },
  { name: "Investment and inventories", equations: 49, variables: "IBUS, COC, DINV", exogenous: "Total investment exogenous" },
  { name: "Labour market", equations: 17, variables: "ET, ULFS, LFSUR" },
  { name: "Exports", equations: 3, variables: "XNOG, RPRICE, XPS", exogenous: "Volumes exogenous" },
  { name: "Imports", equations: 15, variables: "MNOG, MS, MPS", exogenous: "Volumes exogenous" },
  { name: "Balance of payments", equations: 31, variables: "TB, CB, NIPD" },
  { name: "North Sea oil", equations: 5, variables: "TDOIL, PXOIL, NSGTP" },
  { name: "Prices and wages", equations: 44, variables: "EARN, CPIX, RPI", exogenous: "CPI: no live equation" },
  { name: "Income accounts", equations: 42, variables: "HHDI, RHHDI, FYEMP" },
  { name: "Public sector", equations: 59, variables: "CGG, PSCR, CGNB", exogenous: "Most taxes exogenous" },
  { name: "Finance and balance sheets", equations: 69, variables: "M4, NFWPE, NIIP" },
];

// Three equations from the listing, written as maths (KaTeX source).
// Coefficients are rounded to 3 decimal places for the slide (l.4: 0.2645906,
// 0.1029795, 0.1250582, 0.4392933); \dots marks terms trimmed for the slide.
// Line numbers are lines of the listing file; `eviews` is the listing's own
// text with runs of spaces collapsed and the same terms trimmed.
export const equationExamples = [
  {
    label: "Consumption",
    kind: "Error correction",
    line: 4,
    eviews:
      "dlog(CONS) = 0.2645906 + 0.1029795 * dlog(RHHDI) … - 0.1250582 * (log(CONS(-1)) - 0.4392933 * log(RHHDI(-1)) …)",
    tex: String.raw`\Delta \ln \mathit{CONS}_t = 0.265 + 0.103\,\Delta \ln \mathit{RHHDI}_t - \dots - 0.125\,\bigl(\ln \mathit{CONS}_{t-1} - 0.439 \ln \mathit{RHHDI}_{t-1} - \dots\bigr)`,
  },
  {
    label: "Unemployment",
    kind: "Identity",
    line: 163,
    eviews: "ULFS = ((POP16 * PART16 / 100) - ETLFS)",
    tex: String.raw`\mathit{ULFS}_t = \dfrac{\mathit{POP16}_t \times \mathit{PART16}_t}{100} - \mathit{ETLFS}_t`,
  },
  {
    label: "Household income",
    kind: "Accounting identity",
    line: 654,
    eviews: "HHDI = MI + FYEMP - EMPSC - EESC - TYWHH + NMTRHH + SBHH + …",
    tex: String.raw`\mathit{HHDI}_t = \mathit{MI}_t + \mathit{FYEMP}_t - \mathit{EMPSC}_t - \mathit{EESC}_t - \mathit{TYWHH}_t + \mathit{NMTRHH}_t + \mathit{SBHH}_t + \dots`,
  },
];

// Links between the modules: module-links.json is written by module-links.py
// from the listing. Its 12 x 12 matrix counts, for each pair of modules, the
// equations in the target module whose right-hand side uses a variable the
// source module determines (lags count, commented-out lines don't). The
// script also sorts the modules into three groups and counts the same thing
// between groups (an equation counts once per source group).
const groupsOf: Record<string, string[]> = moduleLinkMatrix.groups;

export const moduleGroups = moduleLinkMatrix.groupOrder.map((name) => ({
  name,
  modules: groupsOf[name] ?? [],
}));

export const groupLinkCount = (from: string, to: string) =>
  moduleLinkMatrix.groupMatrix[moduleLinkMatrix.groupOrder.indexOf(from)]?.[
    moduleLinkMatrix.groupOrder.indexOf(to)
  ] ?? 0;

// The six flows between the groups. Each label names the largest module
// links inside the flow (from the 12 x 12 matrix): GDP and output → prices
// and wages 16; prices and wages → investment 6, consumption 5, imports 3;
// GDP and output → finance and balance sheets 11, income accounts 5; public
// sector → GDP and output 7, imports 5; income accounts → prices and wages
// 10, balance of payments → prices and wages 8 (the exchange rate into costs
// and trade prices); prices and wages → income accounts 3, labour market →
// public sector 2, finance 2.
export type GroupFlow = { from: string; to: string; label: string[] };

export const groupFlows: GroupFlow[] = [
  { from: "Demand", to: "Supply and prices", label: ["Output → prices"] },
  { from: "Supply and prices", to: "Demand", label: ["Prices → spending"] },
  {
    from: "Demand",
    to: "Income and sectors",
    label: ["Output → incomes,", "balance sheets"],
  },
  {
    from: "Income and sectors",
    to: "Demand",
    label: ["Government →", "output, imports"],
  },
  {
    from: "Supply and prices",
    to: "Income and sectors",
    label: ["Prices, jobs →", "incomes"],
  },
  {
    from: "Income and sectors",
    to: "Supply and prices",
    label: ["Incomes, exchange", "rate → prices"],
  },
];

// Module links drawn dashed inside the demand group: the spending components
// feed total final expenditure (TFE, TFEPS; imports feed GDPMPS), but real
// GDP is an input in the OBR's file (review G1) and trade volumes are
// exogenous (R1), so they don't move GDP there.
export const cutLinks = [
  "Consumption",
  "Investment and inventories",
  "Exports",
  "Imports",
].map((from) => ({ from, to: "GDP and output" }));

// ---------------------------------------------------------------------------
// Line-by-line review of the published listing (published_model_review.md,
// "Summary").
export const review = {
  points: 53,
  accurate: 42,
  documented: 22,
  notFlagged: 20,
  partly: 8,
  uncheckable: 3,
};

// `means` says in plain words what each error does (published_model_review.md
// entries G7, G6 and N5; N5's "about £3.3bn a quarter" is that entry's own
// figure for the printed form, with foreign-currency lending of about £235bn).
export const reviewFindings = [
  {
    code: "G7",
    title: "Unemployment undetermined",
    refs: "l.163 and l.175",
    means: "The same equation is written twice, so nothing pins down unemployment as published",
  },
  {
    code: "G6",
    title: "Nominal GDP has no unique solution",
    refs: "l.337 and l.688",
    means:
      "Two equations are one identity, so nominal GDP and the investment price index aren't pinned down. Our build pins nominal GDP",
  },
  {
    code: "N5",
    title: "Apparent sign error",
    refs: "l.637, bank margins (FISIM)",
    means:
      "One term is added where its neighbours subtract: about £3.3bn a quarter of drift into company profits, as printed",
  },
  {
    code: "V5",
    title: "Pre-Brexit EU payments",
    refs: "",
    means: "Equations still live",
  },
];

// ---------------------------------------------------------------------------
// Anchoring and fit (README "Read this before quoting a number";
// calibration_scorecard.md; site_figures.json "anchored_horizon": 0.242 and
// 0.397, shown to two decimals as the README does).
export const anchored = {
  gdpMape: "0.24",
  consMape: "0.40",
  window: "2025Q1–2027Q4",
  convergedQuarters: 12,
};

// calibration_scorecard.md, default closure, 18 Nov 2026 (after #74): 9 of 11
// computed variables within band.
export const freeRunning = {
  gdpMape: "4.24",
  computed: 11,
  headline: 21,
  withinBand: 9,
};

// The macro platform's registry status for the emulator, verbatim
// (README model table, from capabilities.py).
export const registryStatus =
  "anchored to the October 2026 EFO, not validated as a forecaster; predictive and policy checks weak";

export type ScoreRow = {
  variable: string;
  error: string;
  status: "good" | "fair" | "poor" | "trivial";
};

// calibration_scorecard.md table, default closure (nominal-GDP pin),
// October 2026 EFO, 2025Q1–2027Q4 (CI run 44392267520, 18 Nov 2026).
export const scorecardRows: ScoreRow[] = [
  { variable: "Real GDP", error: "4.24%", status: "fair" },
  { variable: "Consumption", error: "7.23%", status: "fair" },
  { variable: "Business investment", error: "7.34%", status: "fair" },
  { variable: "Household income", error: "3.10%", status: "fair" },
  { variable: "Real household income", error: "3.30%", status: "fair" },
  { variable: "Current account", error: "0.91% of GDP", status: "fair" },
  { variable: "Trade balance", error: "0.41% of GDP", status: "good" },
  { variable: "Employment", error: "0.00%", status: "trivial" },
  { variable: "Unemployment rate", error: "0.62pp", status: "fair" },
  { variable: "RPI inflation", error: "2.32pp", status: "poor" },
  { variable: "Company profits", error: "12.88%", status: "poor" },
];

// ---------------------------------------------------------------------------
// Scenarios against the OBR's published multipliers (demo.md table; ratios are
// current-price GDP per pound of current-price revenue for the tax rows, real
// GDP per pound for spending; OBR benchmarks from EFO July 2015 Box 3.2 as
// encoded in the repo).
export type MultiplierRow = {
  label: string;
  /** The opt-in switch the row runs under, if any. */
  setting?: string;
  q1: number;
  q4: number;
  q12: number;
  obr: number;
  obrLabel: string;
  /** The q1 / q4 / q12 ratios exactly as demo.md prints them. */
  display: string;
  /** What was simulated (demo.md "The shocks": size per quarter). */
  size: string;
  /** Rows under an opt-in switch sit in their own group on the slide. */
  optIn?: boolean;
};

export const multiplierRows: MultiplierRow[] = [
  {
    label: "Government consumption",
    q1: 1.01,
    q4: 1.02,
    q12: 1.04,
    obr: 0.6,
    obrLabel: "0.6, fading",
    display: "1.01 / 1.02 / 1.04",
    size: "+£1.25bn a quarter of real spending",
  },
  {
    label: "Income tax, basic rate +1p",
    q1: 0.1,
    q4: 0.21,
    q12: 0.37,
    obr: 0.3,
    obrLabel: "0.3, fading",
    display: "0.10 / 0.21 / 0.37",
    size: "£1.725bn a quarter of revenue",
  },
  {
    label: "VAT +1pp",
    q1: 0.013,
    q4: 0.026,
    q12: 0.043,
    obr: 0.35,
    obrLabel: "0.35, fading",
    display: "0.013 / 0.026 / 0.043",
    size: "£2.2bn a quarter of revenue",
  },
  {
    label: "VAT +1pp",
    setting: "Price pass-through on",
    q1: 0.175,
    q4: 0.345,
    q12: 0.638,
    obr: 0.35,
    obrLabel: "0.35, fading",
    display: "0.175 / 0.345 / 0.638",
    size: "The same £2.2bn a quarter",
    optIn: true,
  },
  {
    label: "Government investment",
    setting: "Investment closure on",
    q1: 1.03,
    q4: 0.97,
    q12: 0.97,
    obr: 1.0,
    obrLabel: "1.0, tapering",
    display: "1.03 / 0.97 / 0.97",
    size: "+£3bn a quarter",
    optIn: true,
  },
];

// Income tax +1p on the basic rate, £1,725m a quarter (HMRC ready reckoner,
// June 2025, 2026-27 column, £6.9bn a year / 4), sustained 2025Q1–2027Q4.
// Real GDP change, £m a quarter: results/demo_shocks.json "income_tax",
// rounded to the pound as in demo.md.
export const incomeTax = {
  revenuePerQuarter: "£1,725m",
  revenuePerYear: "£6.9bn",
  // PolicyEngine's static costing of the same 1p, a quarter (README limits
  // table, "Household tax multiplier", l.33; demo.md l.44: same ratios). Kept
  // for the notes, not shown: the micro-to-macro slide quotes a later vintage
  // of the same costing (£6.55bn a year), and one deck shows one figure.
  policyEngineRevenuePerQuarter: "£1,616m",
  gdpPath: [-161, -227, -285, -335, -381, -420, -454, -482, -507, -528, -548, -565],
};

// Corporation tax +5pp under the investment closure (demo.md row 5 and
// "One line on each"); government investment +£3bn a quarter (row 7).
export const corporationTax = {
  gdpQ1: 0,
  gdpQ4: -78,
  gdpQ12: -384,
  plateauFraction: "40%",
  plateau: "£0.96bn",
};

export const capitalSpending = {
  size: "£3bn",
  gdpQ1: 3075,
  gdpQ4: 2901,
  gdpQ12: 2903,
};

// Bank Rate +1pp for four quarters, peak fall in real GDP (demo.md rows 6 and
// 6b; BoE range from Quarterly Bulletin 1999 Q2, as cited there).
export const bankRate = [
  { label: "Our model, mortgage rate held", value: 0.057, display: "−0.057%", kind: "model" },
  { label: "Our model, mortgage rate follows Bank Rate", value: 0.149, display: "−0.149%", kind: "model" },
  { label: "Bank of England, low end", value: 0.2, display: "−0.2%", kind: "benchmark" },
  { label: "Bank of England, high end", value: 0.35, display: "−0.35%", kind: "benchmark" },
] as const;

// The opt-in run moves the mortgage rate at the listing's own pass-through
// (README l.35; monetary_conditioning.md).
export const mortgagePassThrough = "Opt-in: the OBR's own 0.9 pass-through, l.623";

// Unemployment rate under the anchored long horizon, model vs EFO
// (site_figures.json "anchored_horizon.lfsur_pct"). Since #74 the forecast
// 16+ population follows the path the EFO implies through l.175, so the
// labour-force identity (l.163) returns the EFO's rate: by construction, not
// a forecast (README "Anchored fit"). Before #74 it drained to 3.75% and 1.05%.
export const unemploymentAnchored = [
  { quarter: "2027Q4", model: 5.07, efo: 5.07 },
  { quarter: "2031Q1", model: 4.17, efo: 4.17 },
];

// Government consumption +£1.25bn a quarter, default closure (demo.md row 1;
// demo_shocks.json "cgg", pair deltas): real GDP and central government net
// borrowing (CGNB), £m at q1 / q4 / q12. Since #75 the shock carries its cash
// cost into nominal spending, so borrowing rises by it; receipts (PSCR) don't
// respond.
export const governmentConsumption = {
  gdp: [1266, 1280, 1300],
  borrowing: [1336, 1364, 1419],
};

// ---------------------------------------------------------------------------
// The macro platform (macro README model table; models/index.html compare
// section, "compared by country, question, reform scoring and run surface").
// `status` is the macro site's one label per model, verbatim, from the "Where
// each model fails" section of models/index.html at the pinned commit; `level`
// is the colour class the site gives it there (lv-gain, lv-mid, lv-loss).
export type PlatformModel = {
  name: string;
  /** The name spelled out, under it in the table. */
  gloss?: string;
  status: string;
  level: "gain" | "mid" | "loss";
  country: string;
  answers: string;
  scoresReforms: boolean;
  /** A qualifier the site's comparison table puts beside its Yes or No. */
  scoresNote?: string;
  runs: string;
};

export const platformModels: PlatformModel[] = [
  {
    name: "PolicyEngine microsimulation",
    status: "Exact for implemented rules",
    level: "gain",
    country: "UK, US",
    answers: "Household and population tax-benefit effects",
    scoresReforms: true,
    runs: "Hosted",
  },
  {
    name: "OBR emulator",
    status: "Anchored, not validated",
    level: "loss",
    gloss: "Our Python build of the OBR's model",
    country: "UK",
    answers: "Near-term UK fiscal and macro scenarios",
    scoresReforms: true,
    runs: "Hosted",
  },
  {
    name: "BoE SVAR",
    status: "Partial replication",
    level: "mid",
    gloss: "Bank of England structural VAR",
    country: "UK",
    answers: "What drove the UK economy; short-run forecasts",
    scoresReforms: false,
    runs: "Hosted",
  },
  {
    name: "DEFINE-UK",
    status: "Partial replication",
    level: "mid",
    country: "UK",
    answers: "UK climate-policy scenario deltas",
    scoresReforms: false,
    runs: "Local",
  },
  {
    name: "OG-UK",
    status: "Calibrated, no outcome benchmark",
    level: "loss",
    gloss: "Overlapping generations",
    country: "UK",
    answers: "Long-run work, saving and capital",
    scoresReforms: true,
    // The site's comparison table says "Yes, none published" for OG-UK.
    scoresNote: "none published",
    runs: "Local",
  },
  {
    name: "FRB/US",
    status: "Replicates the Fed's solver",
    level: "gain",
    gloss: "The Federal Reserve Board's US model",
    country: "US",
    answers: "US monetary and fiscal scenarios, by quarter",
    scoresReforms: false,
    runs: "Hosted, raw scenarios",
  },
  {
    name: "US HANK",
    status: "Partial replication",
    level: "mid",
    gloss: "Heterogeneous-agent New Keynesian",
    country: "US",
    answers: "How US scenarios spread across household wealth",
    scoresReforms: false,
    runs: "Hosted, stylized scenarios",
  },
];

// Forecast track record (forecasts/scorecard.json and the generated status
// block of forecasts/index.html, last scored 16 Nov 2026).
export const forecastRecord = {
  scored: 9,
  live: 5,
  liveIn68: 4,
  retroactive: 4,
  outturns: 5,
  averageMiss: "0.34pp",
  noChangeMiss: "0.47pp",
  bias: "−0.33pp",
  ranLow: "8 of 9",
  rounds: 4,
};

// Tool counts at the pinned commit: @mcp.tool functions in mcp_server.py and
// @main.command functions in cli.py (the README's own count of 26 tools is
// stale against the code).
export const access = { mcpTools: 28, cliCommands: 27, publicModels: 7 };

// Using the platform from Claude, from the macro site's Use page
// (connect/index.html at the pinned commit): the hosted server URL, where to
// add it, the Claude Code command and one of the page's example prompts. The
// tool chain is from mcp_server.py: score_reform runs through start_job on
// the hosted server, get_job_result polls it and format_score_report renders
// it; score_reform(model="obr") returns the costing and GDP, consumption and
// investment.
export const claudeFlow = {
  url: "https://policyengine--policyengine-macro-mcp-serve.modal.run/mcp",
  settingsPath: "Settings → Connectors → Add custom connector",
  claudeCode:
    "claude mcp add --transport http policyengine-macro https://policyengine--policyengine-macro-mcp-serve.modal.run/mcp",
  prompt: "Score raising the UK basic rate of income tax to 21p.",
  tools: ["start_job", "score_reform", "get_job_result", "format_score_report"],
};

// The OBR bridge's own benchmark (capabilities.py): static costing of a 1p
// basic-rate rise against HMRC's ready reckoner, 2026-27.
export const bridgeBenchmark = {
  policyEngine: "£6.55bn",
  hmrc: "£6.9bn",
  gap: "5.1% below",
};

// The hosted MCP server's OBR pin (integration/pyproject.toml at the macro
// commit above). GitHub's compare view puts it 21 commits behind 0e44ec87,
// before #70 (VAT price pass-through), #71, #74 and #75; hosted obr_shock
// exposes no overlay parameter.
export const hostedObrPin = "2965e82";

/** Pages the live-site slide can load into its frame. */
export const liveSiteViews = [
  { label: "Home", path: "/" },
  { label: "Models", path: "/models" },
  { label: "Compare", path: "/models/compare" },
  { label: "OBR model", path: "/obr" },
  { label: "OBR validation", path: "/obr/validation" },
  { label: "Forecasts", path: "/forecasts" },
];

// Thibault's review of September 2026 (53 points) and our check of it, as
// written up in docs/published_model_review.md. The ratings are counted from
// that doc's summary table: 6 High, 25 Mid, 22 Low.
export const thibRatings = { high: 6, mid: 25, low: 22 };
