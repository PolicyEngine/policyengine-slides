// Content for the PolicyEngine and Autumn Budget 2026 deck.

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
  // The results the webinar discusses: the drill's public address, which
  // always serves its latest deploy (dashboard #195).
  dashboardDrill: {
    label: "Autumn Budget 2026 dashboard, Drill 5 build",
    href: "https://uk-ab2026-drill5.vercel.app/uk/autumn-budget-2026",
  },
  dashboardCode: {
    label: "Dashboard code",
    href: "https://github.com/PolicyEngine/uk-autumn-budget-dashboard-2026",
  },
  dashboard2025Code: {
    label: "2025 dashboard code",
    href: "https://github.com/PolicyEngine/uk-autumn-budget-dashboard",
  },
};

// How policyengine.org/uk/donate describes PolicyEngine.
export const about =
  "PolicyEngine is a nonprofit building free, open-source tools that help people understand tax and benefit policies.";

// What PolicyEngine is: the rules, the households and the results. The rules
// are the main ones in the Good Growth Foundation deck's checked list.
export const pillars = [
  {
    title: "Rules",
    items: [
      "Income tax and National Insurance",
      "Universal Credit and other benefits",
      "State Pension and Pension Credit",
      "VAT, fuel duty and capital gains tax",
    ],
  },
  {
    title: "Households",
    items: [
      "Built from the Family Resources Survey",
      "With HMRC tax records and other surveys",
      "Weighted to match official statistics",
      "Or enter any household yourself",
    ],
  },
  {
    title: "Results",
    items: [
      "Cost or saving to the Treasury",
      "Who gains and loses, by income decile",
      "Poverty and inequality",
      "By region and constituency",
    ],
  },
];

// Last year's Budget, from the 2025 dashboard's commit history: the dashboard
// went live on the day, and the other measures and the household calculator
// followed by 28 November.
export const lastBudget = {
  title: "Autumn Budget 2025",
  text: "Analysed on the day, 26 Nov",
};

// The five mock Budgets: full Budget-day runs on invented measures.
export const mockBudgets = ["28 Sep", "5 Oct", "12 Oct", "19 Oct", "26 Oct"];

export type PrepItem = { title: string; text: string; status: "Done" | "In review" };

// Each line is checked against PolicyEngine/uk-autumn-budget-dashboard-2026
// (main, and the open PRs named in the README).
export const preparation: PrepItem[] = [
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
    text: "Any household's change in net income from the selected measures, live on the dashboard. It runs on Modal and is kept warm.",
    status: "Done",
  },
  {
    title: "Every measure in about 8 minutes",
    text: "All national results run on Modal, one machine per measure, for every measure and the combined package.",
    status: "Done",
  },
  {
    title: "Each measure published once reviewed",
    text: "A measure goes live as soon as its figures pass review, and every public file must carry a review entry.",
    status: "In review",
  },
];

