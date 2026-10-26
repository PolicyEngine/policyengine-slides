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
  dashboardCode: {
    label: "Dashboard code",
    href: "https://github.com/PolicyEngine/uk-autumn-budget-dashboard-2026",
  },
};

export const steps = [
  {
    title: "The rules",
    text: "UK tax and benefit law, written as open code.",
  },
  {
    title: "The households",
    text: "A representative sample of UK households, matched to official statistics.",
  },
  {
    title: "The results",
    text: "Who gains, who loses, and what a policy costs.",
  },
];

export type PrepItem = { title: string; text: string; status: "Done" | "In review" };

// Each line is checked against PolicyEngine/uk-autumn-budget-dashboard-2026
// (main, and the open PRs named in the README).
export const preparation: PrepItem[] = [
  {
    title: "Five mock Budgets",
    text: "Full Budget-day runs on invented measures on 28 September and 5, 12, 19 and 26 October, to rehearse every step of the day.",
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

