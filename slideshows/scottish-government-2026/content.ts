// Microcosm and policyengine-uk links are pinned to the commits checked on
// 8 October 2026 (microcosm main 75167a68, policyengine-uk main f1a9a3cc).
const microcosmCommit = "75167a688ea83316654f1d794542124b4277bda9";
const budgetCommit = "eb77d72b5e353b0cb85fecaf806f3a081753bbfa";
const energyCommit = "14bf3b0afc121b092bbd7545c9fb4963e8ab5c72";
const microcosm = `https://github.com/PolicyEngine/microcosm/blob/${microcosmCommit}`;
const ukBuild = `${microcosm}/packages/microcosm-build/src/microcosm/build/uk`;

export type Source = { label: string; href: string };

export const sources = {
  pipeline: {
    label: "UK build graph",
    href: `${microcosm}/docs/uk-full-build-graph.md`,
  },
  geography: {
    label: "Geography assignment",
    href: `${microcosm}/docs/geography-assignment.md`,
  },
  inputs: { label: "UK source manifest", href: `${ukBuild}/spec/sources.yaml` },
  nationalTargets: {
    label: "National targets",
    href: `${ukBuild}/target_references.json`,
  },
  localTargets: {
    label: "Local targets",
    href: `${ukBuild}/local_target_references.json`,
  },
  release: {
    label: "Release certification",
    href: `${microcosm}/docs/uk-national-release-assembly-runbook-806.md`,
  },
  diagnostics: {
    label: "Live UK calibration diagnostics",
    href: "https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk",
  },
  propertyIssue: {
    label: "Microcosm #1106",
    href: "https://github.com/PolicyEngine/microcosm/issues/1106",
  },
  propertyEngine: {
    label: "policyengine-uk #2172",
    href: "https://github.com/PolicyEngine/policyengine-uk/pull/2172",
  },
  pris: {
    label: "HMRC property rental income statistics 2026",
    href: "https://www.gov.uk/government/statistics/property-rental-income-statistics/property-rental-income-statistics-2026",
  },
  propertyRates: {
    label: "GOV.UK property, savings and dividend rates",
    href: "https://www.gov.uk/government/publications/changes-to-tax-rates-for-property-savings-dividend-income/changes-to-tax-rates-for-property-savings-dividend-income",
  },
  budget2025: {
    label: "Autumn Budget 2025 dashboard",
    href: "https://www.policyengine.org/uk/autumn-budget-2025",
  },
  budgetReview: {
    label: "Autumn Budget 2025 in review · source",
    href: "https://github.com/PolicyEngine/autumn-budget-2025-in-review",
  },
  budgetReviewDashboard: {
    label: "Autumn Budget 2025 in review",
    href: "https://autumn-budget-2025-in-review.vercel.app/uk/autumn-budget-2025-in-review",
  },
  budget2026: {
    label: "2026 development repository",
    href: `https://github.com/PolicyEngine/uk-autumn-budget-dashboard-2026/tree/${budgetCommit}`,
  },
  methodNote: {
    label: "Constituency method note (Microcosm #1131)",
    href: "https://github.com/PolicyEngine/microcosm/issues/1131",
  },
  research: {
    label: "UK research library",
    href: "https://www.policyengine.org/uk/research",
  },
  energyDashboard: {
    label: "Targeted energy bill discount dashboard",
    href: "https://www.policyengine.org/uk/targeted-energy-discount",
  },
  energyAnalysis: {
    label: "uk-energy-reforms analysis",
    href: `https://github.com/PolicyEngine/uk-energy-reforms/tree/${energyCommit}/analyses/rf-billing-me-softly`,
  },
  energyProposal: {
    label: "Resolution Foundation, Billing me softly",
    href: "https://www.resolutionfoundation.org/publications/billing-me-softly/",
  },
} satisfies Record<string, Source>;

// The Microcosm UK build, told for Scotland: what each stage adds and which
// sources feed it (spine stages in sources.yaml at the pinned commit).
export const pipelineStages = [
  {
    title: "Survey households",
    adds: "People, families, earnings and benefits",
    sources: ["Family Resources Survey 2024-25 (DWP)"],
  },
  {
    title: "Add tax records",
    adds: "High and detailed incomes",
    sources: ["Survey of Personal Incomes (HMRC)"],
  },
  {
    title: "Fill the gaps",
    adds: "Wealth, spending, travel and capital gains",
    sources: [
      "Wealth and Assets Survey",
      "Living Costs and Food Survey",
      "National Travel Survey",
      "HMRC capital gains statistics",
    ],
  },
  {
    title: "Place in Scotland",
    adds: "An Output Area, council and constituency for each household",
    sources: ["NRS 2022 Output Areas and lookups"],
  },
  {
    title: "Match official totals",
    adds: "Reweight households to UK and Scottish statistics",
    sources: ["NRS, ONS, HMRC, DWP and Scottish Government statistics"],
  },
];

// Scottish target rows at the pinned Microcosm commit, grouped by family.
// Counts are reference rows (target definitions), not a claim that the local
// build has passed release checks. Columns: Scotland, 32 council areas,
// 57 Westminster constituencies.
export type TargetRow = {
  family: string;
  publisher: string;
  scotland: number;
  councils: number;
  constituencies: number;
};

export const scotlandTargets: TargetRow[] = [
  { family: "Population by age", publisher: "NRS and ONS mid-year estimates", scotland: 11, councils: 256, constituencies: 456 },
  { family: "Employment and self-employment income", publisher: "HMRC", scotland: 0, councils: 128, constituencies: 228 },
  { family: "Universal Credit households", publisher: "DWP", scotland: 1, councils: 32, constituencies: 285 },
  { family: "Council tax dwellings by band", publisher: "Scottish Government", scotland: 9, councils: 255, constituencies: 0 },
  { family: "Housing tenure", publisher: "Scotland's Census 2022", scotland: 0, councils: 128, constituencies: 0 },
  { family: "Households", publisher: "Scotland's Census 2022", scotland: 0, councils: 32, constituencies: 57 },
  { family: "Taxpayers, income and tax by band", publisher: "HMRC", scotland: 30, councils: 0, constituencies: 0 },
  { family: "State Pension recipients", publisher: "DWP", scotland: 2, councils: 0, constituencies: 0 },
  { family: "Capital gains and gains taxpayers", publisher: "HMRC", scotland: 2, councils: 0, constituencies: 0 },
  { family: "Bus revenue and government support", publisher: "Scottish Transport Statistics", scotland: 2, councils: 0, constituencies: 0 },
  { family: "Scottish Child Payment spending", publisher: "Scottish Government", scotland: 1, councils: 0, constituencies: 0 },
];

// HMRC Property Rental Income Statistics 2026, individual landlords, 2024-25.
// Taxable profit here is rent received less the expenses other than finance
// costs; the SPI's own figure is £29.35bn for 2023-24 (Table 3.7).
// Receipts (Table 2) and total expenses (Table 6) are published for
// individuals; residential finance costs (Table 8, £12.82bn for all landlords)
// are pro-rated to individuals by their share of expenses (30.03 / 34.75).
const prisIndividualExpenses = 30.03;
const prisFinanceCosts = 12.82 * (prisIndividualExpenses / 34.75);

const prisReceipts = 49.81;
const prisOtherExpenses = prisIndividualExpenses - prisFinanceCosts;

// FRS 2024-25, grossed with GROSS4: ROYYR1 (rent from other property after
// the show card K6 items, including mortgage payments) x 52 for the 1,022
// adults reporting a profit, 1.75m landlords. Reported losses (£0.32bn) and
// sub-letting rent (£0.49bn) are left out.
const frsRentAfterMortgage = 15.4;

// Waterfall from rent received down to what the FRS asks for. The three totals
// are what each source counts; the deductions between them are what the next
// source leaves out. The last deduction is the residual between profit after
// all costs and the survey's total.
export type WaterfallStep = {
  kind: "total" | "deduction";
  label: string;
  value: number;
  valueLabel: string;
  note: string;
  source?: string;
};

const prisProfitAfterCosts = prisReceipts - prisIndividualExpenses;
const frsResidual = prisProfitAfterCosts - frsRentAfterMortgage;

export const propertyWaterfall: WaterfallStep[] = [
  {
    kind: "total",
    label: "Rent received",
    value: prisReceipts,
    valueLabel: "£49.8bn",
    note: "Everything tenants pay, before any costs",
    source: "HMRC rental income statistics",
  },
  {
    kind: "deduction",
    label: "Allowable expenses",
    value: prisOtherExpenses,
    valueLabel: `−£${prisOtherExpenses.toFixed(1)}bn`,
    note: "Repairs, letting fees, insurance: deducted before tax",
  },
  {
    kind: "total",
    label: "Taxable profit",
    value: prisReceipts - prisOtherExpenses,
    valueLabel: "about £31bn",
    note: "What income tax is charged on; the SPI records £29.4bn for 2023-24",
    source: "Survey of Personal Incomes",
  },
  {
    kind: "deduction",
    label: "Mortgage interest",
    value: prisFinanceCosts,
    valueLabel: `−£${prisFinanceCosts.toFixed(1)}bn`,
    note: "Not deducted: it earns a 20% tax reduction instead, 22% from April 2027",
  },
  {
    kind: "deduction",
    label: "Capital repaid, and coverage",
    value: frsResidual,
    valueLabel: `−£${frsResidual.toFixed(1)}bn`,
    note: "Mortgage capital, which the survey also takes off, and landlords it misses",
  },
  {
    kind: "total",
    label: "Rent after mortgage payments",
    value: frsRentAfterMortgage,
    valueLabel: `£${frsRentAfterMortgage.toFixed(1)}bn`,
    note: "What landlords report in the survey",
    source: "Family Resources Survey",
  },
];

// Microcosm #1145 (draft): the steps that build landlords' income, from the
// stage declarations in sources.yaml at the PR head (spi_support_channel,
// spi_income_band_donors, hmrc_spi_income_spine, property_components). Two
// lanes, survey landlords and the tax-record copies, merge before rent
// received. Details may change before merge.
export type PropertyStep = { title: string; text: string; source: string };

export const propertyLanes = {
  survey: {
    label: "Landlords in the household survey",
    steps: [
      {
        title: "FRS households",
        text: "Landlords report rent after mortgage payments",
        source: "FRS 2024-25",
      },
      {
        title: "Add back mortgage interest",
        text: "Finance costs drawn from similar tax-record landlords, added to profit",
        source: "SPI 2022-23",
      },
    ],
  },
  copies: {
    label: "Copies carrying tax-record incomes",
    steps: [
      {
        title: "Copy households",
        text: "10,000 survey households copied, plus copies for incomes over £200,000",
        source: "FRS · HMRC taxpayer counts",
      },
      {
        title: "Draw tax-record incomes",
        text: "Each adult gets profit and finance costs from taxpayers like them",
        source: "SPI 2022-23",
      },
    ],
  },
} satisfies Record<string, { label: string; steps: PropertyStep[] }>;

export const propertyMergedSteps: PropertyStep[] = [
  {
    title: "Rent received",
    text: "Landlords ranked by profit into HMRC's bands; expenses are the difference",
    source: "HMRC rental statistics",
  },
  {
    title: "Calibrate weights",
    text: "Match landlord numbers and property income by income band",
    source: "HMRC income tables 2023-24",
  },
  {
    title: "Compute tax",
    text: "£1,000 allowance or expenses, and a 20% tax reduction on finance costs",
    source: "policyengine-uk",
  },
];

// Targeted energy bill discount (uk-energy-reforms main 14bf3b0): the
// Resolution Foundation's flat £175 option, 2026-27, Microcosm UK national
// release, policyengine-uk 2.102.3. Regions are Great Britain's eleven.
export const energyRegions = [
  { region: "North East", passported: 0.391, eligible: 0.547 },
  { region: "West Midlands", passported: 0.31, eligible: 0.482 },
  { region: "Wales", passported: 0.294, eligible: 0.467 },
  { region: "Yorkshire and the Humber", passported: 0.288, eligible: 0.458 },
  { region: "North West", passported: 0.293, eligible: 0.452 },
  { region: "Scotland", passported: 0.241, eligible: 0.438 },
  { region: "East Midlands", passported: 0.249, eligible: 0.435 },
  { region: "South West", passported: 0.227, eligible: 0.401 },
  { region: "East of England", passported: 0.211, eligible: 0.364 },
  { region: "South East", passported: 0.203, eligible: 0.356 },
  { region: "London", passported: 0.297, eligible: 0.353 },
];

// Scotland only, from the same run: deciles rank Scotland's people by household
// income after housing costs, adjusted for household size. Average gains
// include households that receive nothing.
export const scotlandEnergyDeciles = [
  { decile: 1, averageGain: 164, shareReceiving: 0.94 },
  { decile: 2, averageGain: 159, shareReceiving: 0.91 },
  { decile: 3, averageGain: 141, shareReceiving: 0.81 },
  { decile: 4, averageGain: 119, shareReceiving: 0.68 },
  { decile: 5, averageGain: 80, shareReceiving: 0.46 },
  { decile: 6, averageGain: 30, shareReceiving: 0.17 },
  { decile: 7, averageGain: 13, shareReceiving: 0.07 },
  { decile: 8, averageGain: 14, shareReceiving: 0.08 },
  { decile: 9, averageGain: 13, shareReceiving: 0.07 },
  { decile: 10, averageGain: 6, shareReceiving: 0.03 },
];

export const scotlandEnergyHeadline = {
  households: "2.66m",
  recipients: "1.16m",
  cost: "£204m",
  gbCost: "£2.09bn",
};

// Section 4: published UK work, 8 April – 8 October 2026 (app-v2 c83e129).
export type Publication = {
  title: string;
  date: string;
  finding: string;
  href: string;
  image: string;
  alt: string;
};

const cover = (file: string) => `/screenshots/scottish-government-2026/${file}`;

export const energyPublications: Publication[] = [
  {
    title: "Middle East war and UK living standards",
    date: "September 2026",
    finding:
      "How energy, fuel and food price rises hit households in 2027-28, with ten policy responses compared",
    href: "https://www.policyengine.org/uk/middle-east-war-living-standards",
    image: cover("middle-east-war-living-standards.jpg"),
    alt: "Cover image for the Middle East war living standards dashboard",
  },
  {
    title: "Targeted energy bill discount",
    date: "October 2026",
    finding:
      "Cost, reach and distributional effects of the Resolution Foundation's proposed discount",
    href: "https://www.policyengine.org/uk/targeted-energy-discount",
    image: cover("targeted-energy-discount.jpg"),
    alt: "Cover image for the targeted energy bill discount dashboard",
  },
  {
    title: "Temporary VAT cut on domestic electricity",
    date: "July 2026",
    finding:
      "Fiscal cost and distributional impact of a six-month cut from 5% to 0% from October 2026",
    href: "https://www.policyengine.org/uk/electricity-vat-cut",
    image: cover("electricity-vat-cut.jpg"),
    alt: "Cover image for the electricity VAT cut dashboard",
  },
  {
    title: "Energy price shock",
    date: "April 2026",
    finding:
      "Price shock scenarios split by electricity and gas, with five policy responses",
    href: "https://www.policyengine.org/uk/energy-price-shock",
    image: cover("energy-price-shock-calculator.jpg"),
    alt: "Cover image for the energy price shock dashboard",
  },
];

export const workPublications: Publication[] = [
  {
    title: "UK CliffWatch",
    date: "June 2026",
    finding:
      "Where benefit withdrawal and taxes create cliffs and high marginal rates as earnings rise",
    href: "https://www.policyengine.org/uk/uk-cliff-watch",
    image: cover("uk-cliff-watch.jpg"),
    alt: "Cover image for UK CliffWatch",
  },
  {
    title: "Who bears the AI shock?",
    date: "August 2026",
    finding:
      "AI employment, wage and capital shocks traced through the tax-benefit system",
    href: "https://www.policyengine.org/uk/research/uk-ai-study",
    image: cover("uk-ai-study.jpg"),
    alt: "Cover image for the UK AI study",
  },
  {
    title: "Replacing council tax with a land value tax",
    date: "June 2026",
    finding:
      "A revenue-neutral swap modelled with PolicyEngine: most households gain and poverty edges down",
    href: "https://progressandpoverty.substack.com/p/how-replacing-council-tax-with-a",
    image: cover("lvt-council-tax.jpg"),
    alt: "Cover of the land value tax post",
  },
  {
    title: "Scotland income tax reform",
    date: "April 2026",
    finding:
      "Replacing Scotland's six income tax bands with the rest-of-UK structure, then cutting rates",
    href: "https://www.policyengine.org/uk/scotland-income-tax-reform",
    image: cover("scotland-income-tax-reform.jpg"),
    alt: "Cover image for the Scotland income tax reform dashboard",
  },
];

export const nicsLinks = [
  {
    label: "young workers",
    href: "https://www.policyengine.org/uk/young-worker-nics",
  },
  {
    label: "recently inactive employees",
    href: "https://www.policyengine.org/uk/nics-exemption-inactive-employees",
  },
];

// Section 5: Autumn Budget 2026.
export const budgetPlan = [
  {
    stage: "Before the Budget",
    title: "Pin the model and data",
    text: "Fix the policyengine-uk version and data release, check current law and prepare likely scenarios.",
  },
  {
    stage: "On Budget day",
    title: "Encode and test the measures",
    text: "Read the published documents, implement each measure and test its timing and scope.",
  },
  {
    stage: "As results clear review",
    title: "Publish the dashboard",
    text: "Fiscal, distributional and household results, with Scotland shown separately.",
  },
  {
    stage: "After publication",
    title: "Reconcile with official costings",
    text: "Explain differences from OBR and Scottish Fiscal Commission figures, and revise.",
  },
];
