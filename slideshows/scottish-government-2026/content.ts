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
  diagnostics: {
    label: "Live UK calibration diagnostics",
    href: "https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk",
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
} satisfies Record<string, Source>;

// Target definitions at the pinned Microcosm commit. Counts are reference rows,
// not a claim that the local build has passed release checks or fits every row.
export const scotlandTargetGroups = [
  {
    level: "Scotland",
    scope: "58 target rows · Scotland-wide",
    items: [
      "Population by age, including babies and children",
      "Taxpayers, income and income tax by income band",
      "Scottish Child Payment spending and State Pension recipients",
      "Council tax dwellings by band",
      "Capital gains, bus support and UC households with a baby",
    ],
  },
  {
    level: "Council areas",
    scope: "831 target rows · 32 councils",
    items: [
      "Population by age and household counts",
      "Housing tenure",
      "Employment and self-employment income",
      "Universal Credit households",
      "Council tax dwellings by band A–H",
    ],
  },
  {
    level: "Westminster constituencies",
    scope: "1,026 target rows · 57 constituencies",
    items: [
      "Population by age and household counts",
      "Employment and self-employment income",
      "Universal Credit households, including by number of children",
    ],
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
