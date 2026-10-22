// Content for the Good Growth Foundation introduction, 23 October 2026.
// The intro, how-it-works and community slides come from the 9 October
// introduction deck (policyengine-slides #77); the pipeline and energy slides
// from the Scottish Government deck of the same day, told for the whole UK.

// Microcosm links are pinned to the commit the Scottish Government deck used
// (main on 8 October 2026), the closest to the 4 October national release.
// The model links are pinned to policyengine-uk 2.146.6 (main on 22 October).
const microcosmCommit = "75167a688ea83316654f1d794542124b4277bda9";
const modelCommit = "849975f27ba8fec45e78f5f48332c80a55de7cc2";
const energyCommit = "14bf3b0afc121b092bbd7545c9fb4963e8ab5c72";
const microcosm = `https://github.com/PolicyEngine/microcosm/blob/${microcosmCommit}`;
const ukBuild = `${microcosm}/packages/microcosm-build/src/microcosm/build/uk`;

export type Source = { label: string; href: string };

export const sources = {
  home: { label: "policyengine.org", href: "https://www.policyengine.org/uk" },
  model: {
    label: "PolicyEngine UK code",
    href: "https://github.com/PolicyEngine/policyengine-uk",
  },
  data: {
    label: "Microcosm data pipeline",
    href: "https://github.com/PolicyEngine/microcosm",
  },
  parameters: {
    label: "policyengine-uk 2.146.6 parameters",
    href: `https://github.com/PolicyEngine/policyengine-uk/tree/${modelCommit}/policyengine_uk/parameters/gov`,
  },
  tests: {
    label: "Model tests",
    href: `https://github.com/PolicyEngine/policyengine-uk/tree/${modelCommit}/policyengine_uk/tests`,
  },
  pipeline: {
    label: "UK build graph",
    href: `${microcosm}/docs/uk-full-build-graph.md`,
  },
  inputs: { label: "UK source manifest", href: `${ukBuild}/spec/sources.yaml` },
  geography: {
    label: "Geography assignment",
    href: `${microcosm}/docs/geography-assignment.md`,
  },
  nationalTargets: {
    label: "National targets",
    href: `${ukBuild}/target_references.json`,
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
  no10Post: {
    label: "PolicyEngine at No 10",
    href: "https://www.policyengine.org/uk/research/policyengine-10-downing-street",
  },
  hansard: {
    label: "Hansard, 24 February 2026",
    href: "https://hansard.parliament.uk/Lords/2026-02-24/debates/A381F7D6-0A3C-48FD-8D9E-67751E25877A/NationalInsuranceContributions(EmployerPensionsContributions)Bill",
  },
  tpa: {
    label: "Tax Policy Associates, September 2026",
    href: "https://taxpolicy.org.uk/2026/09/10/universities-uk-national-insurance-proposal/",
  },
  cps: {
    label: "Centre for Policy Studies, July 2023",
    href: "https://cps.org.uk/research/family-friendly-taxation/",
  },
  nef: {
    label: "New Economics Foundation, July 2026",
    href: "https://neweconomics.org/2026/07/insecure-low-quality-work-a-major-driver-of-uks-neets-and-inactivity-crisis",
  },
  nuffield: {
    label: "Nuffield Foundation project",
    href: "https://www.nuffieldfoundation.org/project/enhancing-localising-and-democratising-tax-benefit-policy-analysis",
  },
  research: {
    label: "UK research",
    href: "https://www.policyengine.org/uk/research",
  },
} satisfies Record<string, Source>;

export const steps = [
  {
    title: "The rules",
    text: "Tax and benefit law written as open code: income tax, National Insurance, Universal Credit, Child Benefit, Council Tax Reduction, VAT and more.",
  },
  {
    title: "The households",
    text: "A representative picture of UK households built from the Family Resources Survey, HMRC tax records and other surveys, matched to official statistics.",
  },
  {
    title: "The results",
    text: "Change a rule and see who gains and loses: for one family, for the whole country, by income group and by region.",
  },
];

// What policyengine-uk 2.146.6 covers, read from its parameter tree
// (policyengine_uk/parameters/gov). 732 of the 795 parameter files there carry
// a legislative or guidance reference; the YAML tests hold over 4,000 cases.
// Inheritance tax has no parameters or variables.
export const coverage = [
  {
    title: "Taxes on income",
    items: [
      "Income tax, with Scotland's own rates",
      "National Insurance",
      "Capital gains tax",
      "Student loan repayments",
    ],
  },
  {
    title: "Taxes on spending and property",
    items: [
      "VAT, fuel, alcohol and tobacco duties",
      "Council tax, and domestic rates in Northern Ireland",
      "Stamp duty, and its Scottish and Welsh equivalents",
      "Business rates",
    ],
  },
  {
    title: "Benefits",
    items: [
      "Universal Credit and Pension Credit",
      "Child Benefit and the State Pension",
      "Disability and carer benefits",
      "Scottish Child Payment and the benefit cap",
    ],
  },
  {
    title: "Childcare and students",
    items: [
      "Tax-Free Childcare",
      "Funded childcare hours in England and Scotland",
      "Student maintenance support",
    ],
  },
];

// The Microcosm UK build, told for the whole UK: what each stage adds and
// which sources feed it (sources.yaml and the national target references at
// the pinned commit; the target file held 1,230 rows on 4 October, 1,231 on
// 8 October and 1,322 on 22 October, so the slide says "over 1,000").
export const pipelineStages = [
  {
    title: "Survey households",
    adds: "People, families, earnings and benefits",
    // A non-breaking hyphen keeps "2024-25" on one line.
    sources: ["Family Resources Survey 2024\u201125 (DWP)"],
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
    title: "Place in local areas",
    adds: "Local-area build, in validation: a small area, council and constituency for each household",
    sources: ["Census small areas (ONS, NRS and NISRA)"],
  },
  {
    title: "Match official totals",
    adds: "Reweight households to over 1,000 UK statistics",
    sources: ["ONS, HMRC, DWP, OBR and other official statistics"],
  },
];

// Targeted energy bill discount (uk-energy-reforms main 14bf3b0): the RF flat
// option in 2026-27 on the Microcosm UK 2024-25 national release,
// policyengine-uk 2.102.3. Figures match the dashboard's data file
// (dashboard/public/data/targeted_energy_discount_results.json). Regions are
// Great Britain's eleven; each rests on an effective sample of 273 to 734
// households. Poverty changes are left off the slide.
export const energyHeadline = {
  households: "28.6m",
  recipients: "11.95m",
  share: "42%",
  cost: "£2.09bn",
};

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

// Great Britain, from the same run: deciles rank people by household income
// after housing costs, adjusted for household size. Average gains include
// households that receive nothing.
export const energyDeciles = [
  { decile: 1, averageGain: 153, shareReceiving: 0.87 },
  { decile: 2, averageGain: 147, shareReceiving: 0.84 },
  { decile: 3, averageGain: 120, shareReceiving: 0.68 },
  { decile: 4, averageGain: 108, shareReceiving: 0.62 },
  { decile: 5, averageGain: 78, shareReceiving: 0.44 },
  { decile: 6, averageGain: 53, shareReceiving: 0.3 },
  { decile: 7, averageGain: 39, shareReceiving: 0.22 },
  { decile: 8, averageGain: 15, shareReceiving: 0.08 },
  { decile: 9, averageGain: 9, shareReceiving: 0.05 },
  { decile: 10, averageGain: 6, shareReceiving: 0.03 },
];

export type User = {
  name: string;
  initials: string;
  logo?: string;
  source?: Source;
};

// From the introduction deck's community slide, without the Good Growth
// Foundation itself. The House of Lords card keeps its initials: the crowned
// portcullis is a restricted mark.
export const users: User[] = [
  {
    name: "No 10 data science team",
    logo: "/logos/orgs/10-downing-street.png",
    initials: "10",
    source: sources.no10Post,
  },
  {
    name: "House of Lords",
    initials: "HL",
    source: sources.hansard,
  },
  {
    name: "Tax Policy Associates",
    logo: "/logos/orgs/tax-policy-associates.jpg",
    initials: "TPA",
    source: sources.tpa,
  },
  {
    name: "Centre for Policy Studies",
    logo: "/logos/orgs/centre-for-policy-studies.png",
    initials: "CPS",
    source: sources.cps,
  },
  {
    name: "New Economics Foundation",
    logo: "/logos/orgs/new-economics-foundation.png",
    initials: "NEF",
    source: sources.nef,
  },
  {
    name: "WPI Economics",
    logo: "/logos/orgs/wpi-economics.svg",
    initials: "WPI",
  },
  {
    name: "Nuffield Foundation",
    logo: "/logos/orgs/nuffield-foundation.svg",
    initials: "NF",
    source: sources.nuffield,
  },
];
