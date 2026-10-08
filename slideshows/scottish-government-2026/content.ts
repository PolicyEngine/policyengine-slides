const microcosmCommit = "e3e3d881f0fdaf8d4796dea25ed4b72deb52cb6e";
const budgetCommit = "eb77d72b5e353b0cb85fecaf806f3a081753bbfa";
const microcosm = `https://github.com/PolicyEngine/microcosm/blob/${microcosmCommit}`;
const ukSpec = `${microcosm}/packages/microcosm-build/src/microcosm/build/uk`;

export const sources = {
  pipeline: {
    label: "UK build graph",
    href: `${microcosm}/docs/uk-full-build-graph.md`,
  },
  inputs: { label: "UK source manifest", href: `${ukSpec}/spec/sources.yaml` },
  frs: { label: "FRS release pin", href: `${ukSpec}/frs_release.json` },
  architecture: {
    label: "Microcosm architecture",
    href: `${microcosm}/DESIGN.md`,
  },
  release: {
    label: "Release certification",
    href: `${microcosm}/docs/uk-national-release-assembly-runbook-806.md`,
  },
  budget2025: {
    label: "2025 dashboard",
    href: "https://www.policyengine.org/uk/autumn-budget-2025",
  },
  budget2026: {
    label: "2026 development repository",
    href: `https://github.com/PolicyEngine/uk-autumn-budget-dashboard-2026/tree/${budgetCommit}`,
  },
  scotlandTax: {
    label: "Scotland income tax analysis",
    href: "https://www.policyengine.org/uk/scotland-income-tax-reform",
  },
  research: {
    label: "UK research library",
    href: "https://www.policyengine.org/uk/research",
  },
};

export const pipelineSteps = [
  {
    title: "Assemble",
    text: "Build linked people, benefit units and households from the FRS.",
  },
  {
    title: "Enrich",
    text: "Add income support and impute variables from donor surveys.",
  },
  {
    title: "Locate",
    text: "Assign a geographic area and derive consistent larger areas.",
  },
  {
    title: "Calibrate",
    text: "Adjust household weights against public evidence.",
  },
  {
    title: "Validate",
    text: "Check the population and package the release evidence.",
  },
];

export const inputRows = [
  [
    "Family Resources Survey 2024–25",
    "Household structure, earnings and reported benefits",
  ],
  [
    "Survey of Personal Incomes 2022–23 and HMRC",
    "Income distributions and additional income support",
  ],
  ["Wealth and Assets Survey, round 8", "Wealth and asset variables"],
  [
    "Living Costs and Food Survey and Effects of Taxes and Benefits",
    "Consumption, indirect taxes and public services",
  ],
  ["National Travel Survey", "Travel patterns and transport spending"],
  [
    "Public administrative statistics through Chronicle",
    "Population, tax and benefit calibration evidence",
  ],
];

export const budgetPlan = [
  {
    stage: "Before the Budget",
    title: "Refresh the baseline",
    text: "Pin the model and data release. Review current law and prepare scenario definitions.",
  },
  {
    stage: "On Budget day",
    title: "Encode and check measures",
    text: "Read the published rules, test implementation and record timing and scope.",
  },
  {
    stage: "As results clear review",
    title: "Publish household and population impacts",
    text: "Show fiscal effects, income distributions and poverty, with a Scotland view.",
  },
  {
    stage: "After publication",
    title: "Explain differences and revise",
    text: "Compare like-for-like with official costings and publish assumptions and limitations.",
  },
];

// Dates and descriptions checked against the live posts and apps indexes on
// 8 October 2026. Policy amounts describe scenarios, not estimated outcomes.
export const recentResearch = [
  {
    topic: "Energy and living standards",
    date: "July–October 2026",
    summary: "Energy bill support and the distribution of price shocks",
    links: [
      {
        label: "Targeted discount",
        href: "https://www.policyengine.org/uk/targeted-energy-discount",
      },
      {
        label: "Middle East war",
        href: "https://www.policyengine.org/uk/middle-east-war-living-standards",
      },
      {
        label: "Electricity VAT",
        href: "https://www.policyengine.org/uk/electricity-vat-cut",
      },
    ],
  },
  {
    topic: "Childcare",
    date: "September 2026",
    summary: "Free hours and a 75% subsidy replacing Tax-Free Childcare",
    links: [
      {
        label: "Childcare analysis",
        href: "https://www.policyengine.org/uk/free-childcare-reform",
      },
    ],
  },
  {
    topic: "Work incentives",
    date: "July 2026",
    summary: "Employer NICs exemptions for young and recently inactive workers",
    links: [
      {
        label: "Young workers",
        href: "https://www.policyengine.org/uk/young-worker-nics",
      },
      {
        label: "Recently inactive workers",
        href: "https://www.policyengine.org/uk/nics-exemption-inactive-employees",
      },
    ],
  },
  {
    topic: "Household interactions",
    date: "June–September 2026",
    summary: "Benefit cliffs and the tax-benefit effects of living together",
    links: [
      {
        label: "CliffWatch",
        href: "https://www.policyengine.org/uk/uk-cliff-watch",
      },
      {
        label: "Marriage calculator",
        href: "https://www.policyengine.org/uk/marriage",
      },
    ],
  },
  {
    topic: "AI and the economy",
    date: "August 2026",
    summary:
      "Fiscal and distributional incidence of employment, wage and capital shocks",
    links: [
      {
        label: "AI study",
        href: "https://www.policyengine.org/uk/research/uk-ai-study",
      },
    ],
  },
  {
    topic: "Benefits and transport",
    date: "June–July 2026",
    summary:
      "Universal Credit rebalancing, fuel duty and the £2 bus fare cap in England",
    links: [
      {
        label: "Universal Credit",
        href: "https://www.policyengine.org/uk/uc-rebalancing",
      },
      {
        label: "Fuel duty",
        href: "https://www.policyengine.org/uk/cancelling-fuel-duty-rise",
      },
      {
        label: "Bus fares",
        href: "https://www.policyengine.org/uk/bus-fare-cap",
      },
    ],
  },
];
