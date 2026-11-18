// Every figure on the slides comes from a file read at a pinned commit, checked
// on 18 November 2026:
// - PolicyEngine/obr-macroeconomic-model main 0fe04c9a (after #70, #71, #72);
// - PolicyEngine/macro main 2e5dffe7 (after #275);
// - PolicyEngine/obr-presentation main f4f819a7 (the July 2025 NEF deck).
// OBR-model numbers are taken from the model repo, not from the macro site,
// which still quoted the pre-#71 scorecard (4.25%) at this commit.
const obrCommit = "0fe04c9afa8e4e316d24bae40aacc9bba9cd5084";
const macroCommit = "2e5dffe7a2b35d189c8df60ff2012abbdb675367";
const priorDeckCommit = "f4f819a786dc6d33f5836aae22d4d5f93aa778da";

const obr = `https://github.com/PolicyEngine/obr-macroeconomic-model/blob/${obrCommit}`;
const macro = `https://github.com/PolicyEngine/macro/blob/${macroCommit}`;

export type Source = { label: string; href: string };

export const sources = {
  obrReadme: { label: "OBR model README", href: `${obr}/README.md` },
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
  efoPublished: "28 October 2026",
};

export const layers = [
  {
    title: "The model",
    obr: "372 equations and a variable list, published as EViews code",
    ours: "All 372 parsed and transpiled to Python",
    status: "built",
  },
  {
    title: "The engine",
    obr: "EViews solves the system, swaps closures, holds add-factors",
    ours: "A Gauss-Seidel solver, closures and add-factors in Python",
    status: "partial",
  },
  {
    title: "The judgement",
    obr: "Forecasters' add-factors and off-model assumptions, not published",
    ours: "Not reproduced: a user supplies their own, labelled as such",
    status: "gap",
  },
] as const;

export const pipeline = [
  { title: "Transpile", text: "EViews listing to Python equations" },
  { title: "Fill inputs", text: "355 ONS series for what the EFO omits" },
  { title: "Close", text: "GDP endogenous; inventories held on the EFO path" },
  { title: "Solve", text: "Gauss-Seidel, quarter by quarter" },
  { title: "Anchor", text: "Add-factors put the baseline on the EFO" },
  { title: "Score", text: "Shocked run minus baseline, per quarter" },
];

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

export const reviewFindings = [
  {
    code: "G7",
    text: "Unemployment is undetermined: l.163 and l.175 are one identity",
  },
  {
    code: "G6",
    text: "Nominal GDP and the investment deflator: l.337 and l.688 repeat",
  },
  { code: "N5", text: "Apparent sign error in corporate FISIM (l.637)" },
  { code: "V5", text: "Pre-Brexit EU payment equations are still live" },
];

// ---------------------------------------------------------------------------
// Anchoring and fit (README "Read this before quoting a number";
// calibration_scorecard.md; site_figures.json "anchored_horizon").
export const anchored = {
  gdpMape: 0.44,
  consMape: 0.72,
  window: "2025Q1–2027Q4",
  convergedQuarters: 12,
};

export const freeRunning = {
  gdpMape: 4.05,
  gdpMapeBefore71: 4.25,
  householdIncome: 3.08,
  householdIncomeBefore71: 4.3,
  computed: 11,
  headline: 21,
  withinBand: 8,
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
// October 2026 EFO, 2025Q1–2027Q4.
export const scorecardRows: ScoreRow[] = [
  { variable: "Real GDP", error: "4.05%", status: "fair" },
  { variable: "Consumption", error: "6.92%", status: "fair" },
  { variable: "Business investment", error: "7.34%", status: "fair" },
  { variable: "Household income", error: "3.08%", status: "fair" },
  { variable: "Real household income", error: "3.29%", status: "fair" },
  { variable: "Current account", error: "0.91% of GDP", status: "fair" },
  { variable: "Trade balance", error: "0.41% of GDP", status: "good" },
  { variable: "Employment", error: "0.00%", status: "trivial" },
  { variable: "Unemployment rate", error: "1.17pp", status: "poor" },
  { variable: "RPI inflation", error: "2.32pp", status: "poor" },
  { variable: "Company profits", error: "11.66%", status: "poor" },
];

// ---------------------------------------------------------------------------
// Shocks against the OBR's published multipliers (demo.md table; ratios are
// current-price GDP per pound of current-price revenue for the tax rows, real
// GDP per pound for spending; OBR benchmarks from EFO July 2015 Box 3.2 as
// encoded in the repo).
export type MultiplierRow = {
  label: string;
  setting: string;
  q1: number;
  q4: number;
  q12: number;
  obr: number;
  obrLabel: string;
  /** The q1 / q4 / q12 ratios exactly as demo.md prints them. */
  display: string;
};

export const multiplierRows: MultiplierRow[] = [
  {
    label: "Government consumption",
    setting: "Default closure",
    q1: 1.01,
    q4: 1.03,
    q12: 1.05,
    obr: 0.6,
    obrLabel: "0.6, fading",
    display: "1.01 / 1.03 / 1.05",
  },
  {
    label: "Income tax, basic rate +1p",
    setting: "Default closure",
    q1: 0.1,
    q4: 0.21,
    q12: 0.38,
    obr: 0.3,
    obrLabel: "0.3, fading",
    display: "0.10 / 0.21 / 0.38",
  },
  {
    label: "VAT +1pp",
    setting: "Default closure",
    q1: 0.013,
    q4: 0.026,
    q12: 0.043,
    obr: 0.35,
    obrLabel: "0.35, fading",
    display: "0.013 / 0.026 / 0.043",
  },
  {
    label: "VAT +1pp",
    setting: "Opt-in price pass-through",
    q1: 0.175,
    q4: 0.345,
    q12: 0.643,
    obr: 0.35,
    obrLabel: "0.35, fading",
    display: "0.175 / 0.345 / 0.643",
  },
  {
    label: "Government investment",
    setting: "Opt-in investment closure",
    q1: 1.03,
    q4: 0.97,
    q12: 0.98,
    obr: 1.0,
    obrLabel: "1.0, tapering",
    display: "1.03 / 0.97 / 0.98",
  },
];

// Income tax +1p on the basic rate, £1,725m a quarter (HMRC ready reckoner,
// June 2025, 2026-27 column, £6.9bn a year / 4), sustained 2025Q1–2027Q4.
// Real GDP change, £m a quarter: results/demo_shocks.json "income_tax",
// rounded to the pound as in demo.md.
export const incomeTax = {
  revenuePerQuarter: "£1,725m",
  revenuePerYear: "£6.9bn",
  gdpPath: [-161, -227, -285, -335, -381, -422, -456, -485, -510, -532, -551, -569],
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
  shock: "£3bn",
  gdpQ1: 3075,
  gdpQ4: 2901,
  gdpQ12: 2932,
};

// Bank Rate +1pp for four quarters, peak fall in real GDP (demo.md rows 6 and
// 6b; BoE range from Quarterly Bulletin 1999 Q2, as cited there).
export const bankRate = [
  { label: "Default run (mortgage rate held)", value: 0.057, display: "−0.057%", kind: "model" },
  { label: "Mortgage rate moved with Bank Rate", value: 0.149, display: "−0.149%", kind: "model" },
  { label: "Bank of England, low end", value: 0.2, display: "−0.2%", kind: "benchmark" },
  { label: "Bank of England, high end", value: 0.35, display: "−0.35%", kind: "benchmark" },
] as const;

// Unemployment rate under the anchored long horizon, model vs EFO
// (site_figures.json "anchored_horizon.lfsur_pct").
export const unemploymentDrift = [
  { quarter: "2027Q4", model: 3.75, efo: 5.07 },
  { quarter: "2031Q1", model: 1.05, efo: 4.17 },
];

// ---------------------------------------------------------------------------
// The macro platform (macro README model table; models/index.html compare
// section, "compared by country, question, reform scoring and run surface").
export type PlatformModel = {
  name: string;
  country: string;
  answers: string;
  scoresReforms: boolean;
  runs: string;
};

export const platformModels: PlatformModel[] = [
  {
    name: "PolicyEngine microsimulation",
    country: "UK, US",
    answers: "Household and population tax-benefit effects",
    scoresReforms: true,
    runs: "Hosted",
  },
  {
    name: "OBR emulator",
    country: "UK",
    answers: "Near-term UK fiscal and macro scenarios",
    scoresReforms: true,
    runs: "Hosted",
  },
  {
    name: "BoE SVAR",
    country: "UK",
    answers: "What drove the UK economy; short-run forecasts",
    scoresReforms: false,
    runs: "Hosted",
  },
  {
    name: "DEFINE-UK",
    country: "UK",
    answers: "UK climate-policy scenario deltas",
    scoresReforms: false,
    runs: "Local",
  },
  {
    name: "OG-UK",
    country: "UK",
    answers: "Long-run work, saving and capital",
    scoresReforms: true,
    runs: "Local",
  },
  {
    name: "FRB/US",
    country: "US",
    answers: "US monetary and fiscal shocks, by quarter",
    scoresReforms: false,
    runs: "Hosted, raw shocks",
  },
  {
    name: "US HANK",
    country: "US",
    answers: "How US shocks spread across household wealth",
    scoresReforms: false,
    runs: "Hosted, stylized shocks",
  },
];

// DEFINE-UK green public investment scenario minus the current-policies
// baseline, cached pinned run (upstream commit 846081a), from the DEFINE-UK
// model page. Deltas only; partial replication.
export const defineGreen = {
  spending: "£15–16bn a year in 2027–31",
  gdp2035: "+0.91%",
  emissions2035: "−54 Mt",
  emissionsShare2035: "−18.4%",
  unemployment2035: "−0.22pp",
  consumption2035: "+1.01%",
};

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

// The OBR bridge's own benchmark (capabilities.py): static costing of a 1p
// basic-rate rise against HMRC's ready reckoner, 2026-27.
export const bridgeBenchmark = {
  policyEngine: "£6.55bn",
  hmrc: "£6.9bn",
  gap: "5.1% below",
};

// The hosted MCP server's OBR pin (integration/pyproject.toml), which
// predates the opt-in overlays merged in #70.
export const hostedObrPin = "2965e82";
