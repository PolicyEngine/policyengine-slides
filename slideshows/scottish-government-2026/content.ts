// Microcosm and policyengine-uk links are pinned to the commits checked on
// 8 October 2026 (microcosm main 75167a68, policyengine-uk main f1a9a3cc).
const microcosmCommit = "75167a688ea83316654f1d794542124b4277bda9";
const budgetCommit = "eb77d72b5e353b0cb85fecaf806f3a081753bbfa";
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
  propertyIssue: {
    label: "Microcosm #1106",
    href: "https://github.com/PolicyEngine/microcosm/issues/1106",
  },
  propertyData: {
    label: "Microcosm #1145",
    href: "https://github.com/PolicyEngine/microcosm/pull/1145",
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
} satisfies Record<string, Source>;

// Section 1: what changed since the February deck's Enhanced FRS pipeline.
export const pipelineChanges = [
  {
    topic: "Survey year",
    before: "EFRS 2023-24",
    now: "FRS 2024-25, with SPI 2022-23, WAS round 8, LCFS and the National Travel Survey as donors",
  },
  {
    topic: "High incomes",
    before: "Two copies of the FRS stacked, one with imputed high incomes",
    now: "A separate SPI support channel adds tax-record households the FRS lacks",
  },
  {
    topic: "Local geography",
    before: "650 constituency weight sets",
    now: "Each household copy is placed in a small census area; constituencies, councils and regions are built up from it",
  },
  {
    topic: "Targets",
    before: "Administrative totals",
    now: "Every official statistic comes from Chronicle, a pinned ledger that records its source",
  },
  {
    topic: "Releases",
    before: "—",
    now: "Versioned releases that must pass release checks and a signed certification",
  },
];

export const scotlandNational = [
  "Council tax dwellings by band, A–H",
  "Scottish Child Payment spending",
  "Income tax: taxpayers and income by band (SPI)",
  "Population by age, babies and children under 16",
  "State Pension recipients and UC households with a baby",
  "Capital gains and bus support",
];

export const scotlandLocal = [
  "Households placed in 2022 Scottish Output Areas, with NRS lookups to 2024 constituencies and council areas",
  "Council tax bands A–H targeted by council area",
  "Water and sewerage charges netted out of council tax",
  "Adult and Child Disability Payment mapped onto the benefits they replace",
];

export const releaseChecks = [
  "Fit to national targets, checked target by target",
  "A minimum effective sample in every constituency",
  "Targets held out of the fit to test it",
  "A limit on how far any household's weight can move",
];

export const validationStats = [
  {
    value: "1.885m",
    benchmark: "1.950m",
    label: "People with income of £100,000 or more, 2025-26",
    source: "HMRC Survey of Personal Incomes, Table 2.5",
  },
  {
    value: "£0.605bn",
    benchmark: "£0.600bn",
    label: "Tax-Free Childcare government top-up, 2025-26",
    source: "HMRC Tax-Free Childcare statistics",
  },
];

export const propertyConcepts = [
  {
    source: "HMRC property rental income statistics",
    measures: "Rent before allowable expenses",
  },
  {
    source: "Survey of Personal Incomes",
    measures:
      "Profit after allowable expenses, before residential finance costs",
  },
  {
    source: "Family Resources Survey",
    measures: "Rent net of mortgage payments, interest and capital",
  },
];

// Section 2: published UK work, 8 April – 8 October 2026 (app-v2 c83e129).
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
    title: "Universal Credit rebalancing",
    date: "June 2026",
    finding:
      "The above-inflation standard allowance uplift and the fixed health element",
    href: "https://www.policyengine.org/uk/uc-rebalancing",
    image: cover("uc-rebalancing.jpg"),
    alt: "Cover image for the Universal Credit rebalancing dashboard",
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

// Section 3: Autumn Budget 2026.
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

