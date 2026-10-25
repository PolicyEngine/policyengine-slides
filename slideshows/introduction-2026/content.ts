// Content for the PolicyEngine and Autumn Budget 2026 deck.
// The analysis figures are in dashboardData.ts, generated from the
// dashboard's published files by build_dashboard_data.py.

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
  nuffield: {
    label: "Nuffield Foundation project",
    href: "https://www.nuffieldfoundation.org/project/enhancing-localising-and-democratising-tax-benefit-policy-analysis",
  },
  nef: {
    label: "New Economics Foundation, July 2026",
    href: "https://neweconomics.org/2026/07/insecure-low-quality-work-a-major-driver-of-uks-neets-and-inactivity-crisis",
  },
  no10Post: {
    label: "PolicyEngine at No 10",
    href: "https://www.policyengine.org/uk/research/policyengine-10-downing-street",
  },
  dashboard: {
    label: "Autumn Budget 2026 dashboard",
    href: "https://uk-autumn-budget-2026.vercel.app/uk/autumn-budget-2026",
  },
  dashboardCode: {
    label: "Dashboard code",
    href: "https://github.com/PolicyEngine/uk-autumn-budget-dashboard-2026",
  },
  pastEvents: {
    label: "Past fiscal events (#107)",
    href: "https://github.com/PolicyEngine/uk-autumn-budget-dashboard-2026/pull/107",
  },
  review2025: {
    label: "Autumn Budget 2025 in review",
    href: "https://autumn-budget-2025-in-review.vercel.app/uk/autumn-budget-2025-in-review",
  },
  obrMarch2026: {
    label: "OBR, March 2026 EFO",
    href: "https://obr.uk/efo/economic-and-fiscal-outlook-march-2026/",
  },
};

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
    text: "Pick a policy and see who gains and loses: how much one family gains or loses, the cost to government, and the effects by income group, region and constituency.",
  },
];

export type User = {
  name: string;
  initials: string;
  logo?: string;
  /** Render a light logo dark so it shows on a white slide. */
  darkenLogo?: boolean;
  source?: Source;
};

export const users: User[] = [
  { name: "No 10 data science team", logo: "/logos/orgs/10-downing-street.png", initials: "10", source: sources.no10Post },
  { name: "House of Lords", logo: "/logos/orgs/house-of-lords.svg", initials: "HL", source: sources.hansard },
  { name: "Tax Policy Associates", logo: "/logos/orgs/tax-policy-associates.jpg", initials: "TPA", source: sources.tpa },
  { name: "Centre for Policy Studies", logo: "/logos/orgs/centre-for-policy-studies.png", initials: "CPS", source: sources.cps },
  { name: "New Economics Foundation", logo: "/logos/orgs/new-economics-foundation.png", initials: "NEF", source: sources.nef },
  { name: "Good Growth Foundation", logo: "/logos/orgs/good-growth-foundation.png", initials: "GGF", darkenLogo: true },
  { name: "WPI Economics", logo: "/logos/orgs/wpi-economics.svg", initials: "WPI" },
  { name: "Nuffield Foundation", logo: "/logos/orgs/nuffield-foundation.svg", initials: "NF", source: sources.nuffield },
];

export type PrepItem = { title: string; text: string; status: "Done" | "In review" };

// Each line is checked against PolicyEngine/uk-autumn-budget-dashboard-2026
// (main, and the open PRs named in the README).
export const preparation: PrepItem[] = [
  {
    title: "Four mock Budgets",
    text: "Full Budget-day runs on invented measures on 28 September and 5, 12 and 19 October, to rehearse every step of the day.",
    status: "Done",
  },
  {
    title: "A Budget-day runbook",
    text: "Timed checkpoints from the start of the day to the combined run, publication and the overnight briefing, built on the mock Budgets.",
    status: "Done",
  },
  {
    title: "Fixed model and data",
    text: "policyengine 6.10.2 with the certified Microcosm UK 2024-25 households, so every figure can be reproduced.",
    status: "Done",
  },
  {
    title: "A household calculator",
    text: "Any household's change in net income from the selected measures, live on the dashboard.",
    status: "Done",
  },
  {
    title: "Every measure in about 8 minutes",
    text: "All measures and the combined package run in parallel, with results identical to a one-at-a-time run.",
    status: "In review",
  },
  {
    title: "Each measure published once reviewed",
    text: "A measure goes live as soon as its figures pass review, and every public file must carry a review entry.",
    status: "In review",
  },
];

// The six events in #107, with the measures each imports.
export const pastEvents = [
  { event: "Autumn Budget 2025", measures: 9 },
  { event: "Spring Statement 2025", measures: 2 },
  { event: "Autumn Budget 2024", measures: 5 },
  { event: "Spring Budget 2024", measures: 3 },
  { event: "Autumn Statement 2023", measures: 4 },
  { event: "Spring Budget 2023", measures: 2 },
];

export const candidateLabel =
  "Candidate measures, modelled before the Budget on 28 October; not announced policy";

export const webinar = {
  title: "Autumn Budget 2026: PolicyEngine's same-day first look",
  when: "Wednesday 28 October, 4:30pm UK time",
  href: "https://us06web.zoom.us/meeting/register/2DLUeZAbRwKkKEK-2JrFrQ#/registration",
};
