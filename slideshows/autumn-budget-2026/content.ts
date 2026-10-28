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
  // The dashboard the webinar presents, on the analysis slide and in the
  // closing slide's link and QR code. The host alone returns 404.
  dashboard: {
    label: "Autumn Budget 2026 dashboard",
    href: "https://ab2026-local-preview.vercel.app/uk/autumn-budget-2026",
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

// The Budget measures the dashboard models, condensed from its own descriptions
// (uk-autumn-budget-dashboard-2026#290, public/data/policy_parameters.json at
// 7f343f8e), grouped by the Budget's topics across two slides.
export type MeasureGroup = { topic: string; items: string[] };

export const measureSlides: { title: string; groups: MeasureGroup[] }[] = [
  {
    title: "The Budget measures we model",
    groups: [
      {
        topic: "Energy bills",
        items: [
          "Zero VAT on domestic electricity: 0% instead of 5% from 1 October 2026 to 30 June 2027, in Great Britain from October and the whole UK from April 2027.",
          "Household Energy Payment: a one-off £100 from January 2027 to households in council tax bands A to D in England. The devolved governments get a funding share, which isn't modelled.",
        ],
      },
      {
        topic: "Income from assets",
        items: [
          "Property income: rates rise 2 points to 24%, 44% and 49% from April 2027, in England, Wales and Northern Ireland. Landlords' finance cost relief rises to 24% too.",
          "Savings income: rates rise 2 points to 24%, 44% and 49% from April 2027, UK-wide.",
        ],
      },
    ],
  },
  {
    title: "The Budget measures we model (continued)",
    groups: [
      {
        topic: "Pensions",
        items: [
          "The Pension Tax Allowance, from April 2027 to April 2030. It's an income tax reduction of up to £94 in 2027-28 for people over State Pension age with income at or below the full new State Pension (£13,036), less £1 for every £3 above it.",
        ],
      },
      {
        topic: "Fuel",
        items: [
          "The 5p fuel duty cut is kept to 30 June 2027, at 52.95p a litre, then returns to 60.59p from 1 July 2027.",
        ],
      },
      {
        topic: "Carers",
        items: [
          "The Carer's Allowance earnings taper. In England and Wales, from a date in 2030-31, the allowance falls £1 for each £1 of earnings above the limit instead of stopping (£212 a week in 2027-28).",
        ],
      },
      {
        topic: "Self-employed",
        items: [
          "The trading allowance rises from £1,000 to £3,000 from April 2027, for income tax and Class 4.",
        ],
      },
    ],
  },
];

export const measuresFooter =
  "Full descriptions, and the measures we don't model, are on the dashboard's Policies tab.";

// How policyengine.org/uk/donate describes PolicyEngine.
export const about =
  "PolicyEngine is a nonprofit building free, open-source tools that help people understand tax and benefit policies.";

// The Nuffield Foundation's credit. On 22 October its communications team
// asked for "funded" rather than "supported", and for its logo, the white
// version on a dark background. The logo is the white one from
// nuffieldfoundation.org, kept as downloaded (3,432 bytes, SHA-256
// b3727385…); its own size is 117.862 by 70.
export const funder = {
  label: "Funded by",
  name: "Nuffield Foundation",
  logo: "/logos/funders/nuffield-foundation-white.svg",
  width: 118,
  height: 70,
};

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

// The five Budget-day rehearsals (the mock Budgets): full runs of the day on
// invented measures.
export const mockBudgets = ["28 Sep", "5 Oct", "12 Oct", "19 Oct", "26 Oct"];

export type PrepItem = { title: string; text: string; status: "Done" | "In review" };

// Written for a general audience: the technical detail is in the speaker
// notes. Each line is checked against PolicyEngine/uk-autumn-budget-dashboard-2026;
// the version is the one in the live dashboard's publication manifest and in
// main's uv.lock on 28 October.
export const preparation: PrepItem[] = [
  {
    title: "Fixed model and data",
    text: "Every figure comes from PolicyEngine 6.11.1 and the same set of households, so anyone can reproduce it.",
    status: "Done",
  },
  {
    title: "A household calculator",
    text: "Enter any household to see how the measures change its income, live on the dashboard.",
    status: "Done",
  },
  {
    title: "Every measure in about 8 minutes",
    text: "The cost of each measure, and who gains and loses, worked out all at once rather than one by one.",
    status: "Done",
  },
  {
    title: "Each measure published once reviewed",
    text: "A measure goes on the dashboard as soon as its figures have been checked.",
    status: "In review",
  },
];

