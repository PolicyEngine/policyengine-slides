// Content for the PolicyEngine introduction deck, 9 October 2026.
// Every link below returned 200 on 8 October 2026, except the newspaper,
// ITV, Hansard and No 10 fellowship pages, which block automated checks.

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
  no10: {
    label: "No 10 Innovation Fellowship article",
    href: "https://fellows.ai.gov.uk/articles/nikhil-woodruff-micro-simulation/",
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
  nuffield: {
    label: "Nuffield Foundation project",
    href: "https://www.nuffieldfoundation.org/project/enhancing-localising-and-democratising-tax-benefit-policy-analysis",
  },
  nef: {
    label: "New Economics Foundation, July 2026",
    href: "https://neweconomics.org/2026/07/insecure-low-quality-work-a-major-driver-of-uks-neets-and-inactivity-crisis",
  },
  citations: {
    label: "All citations",
    href: "https://www.policyengine.org/uk/citations",
  },
  research: {
    label: "UK research",
    href: "https://www.policyengine.org/uk/research",
  },
  budget2025: {
    label: "Autumn Budget 2025 dashboard",
    href: "https://www.policyengine.org/uk/autumn-budget-2025",
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
    text: "Change a rule and see who gains and loses: for one family, for the whole country, by income group and by constituency.",
  },
];

export type User = {
  name: string;
  initials: string;
  logo?: string;
  /** Render a light logo dark so it shows on a white slide. */
  darkenLogo?: boolean;
  kind: "Government" | "Parliament" | "Think tank" | "Funder" | "Consultancy";
  source?: Source;
};

export const users: User[] = [
  {
    name: "No 10 data science team",
    logo: "/logos/orgs/10-downing-street.png",
    initials: "10",
    kind: "Government",
    source: sources.no10Post,
  },
  {
    name: "House of Lords",
    initials: "HL",
    kind: "Parliament",
    source: sources.hansard,
  },
  {
    name: "Tax Policy Associates",
    logo: "/logos/orgs/tax-policy-associates.jpg",
    initials: "TPA",
    kind: "Think tank",
    source: sources.tpa,
  },
  {
    name: "Centre for Policy Studies",
    logo: "/logos/orgs/centre-for-policy-studies.png",
    initials: "CPS",
    kind: "Think tank",
    source: sources.cps,
  },
  {
    name: "New Economics Foundation",
    logo: "/logos/orgs/new-economics-foundation.png",
    initials: "NEF",
    kind: "Think tank",
    source: sources.nef,
  },
  {
    name: "Good Growth Foundation",
    initials: "GGF",
    logo: "/logos/orgs/good-growth-foundation.png",
    darkenLogo: true,
    kind: "Think tank",
  },
  {
    name: "WPI Economics",
    logo: "/logos/orgs/wpi-economics.svg",
    initials: "WPI",
    kind: "Consultancy",
  },
  {
    name: "Nuffield Foundation",
    logo: "/logos/orgs/nuffield-foundation.svg",
    initials: "NF",
    kind: "Funder",
    source: sources.nuffield,
  },
];

export type Card = {
  title: string;
  date: string;
  text: string;
  href: string;
  image: string;
  alt: string;
};

const shot = (file: string) => `/screenshots/introduction-2026/${file}`;

export const press: Card[] = [
  {
    title: "Universities UK: a £6bn lesson in bad tax policy",
    date: "Tax Policy Associates (Dan Neidle) · September 2026",
    text: "",
    href: "https://taxpolicy.org.uk/2026/09/10/universities-uk-national-insurance-proposal/",
    image: shot("tpa-universities-uk-ni.png"),
    alt: "Cover of the Universities UK Future Jobs Roadmap",
  },
  {
    title: "Nationalisation is not a growth strategy",
    date: "CapX · September 2026",
    text: "",
    href: "https://capx.co/nationalisation-is-not-a-growth-strategy",
    image: shot("capx-nationalisation.webp"),
    alt: "CapX article header image",
  },
  {
    title: "Insecure, low-quality work a major driver of UK's NEETs and inactivity crisis",
    date: "New Economics Foundation · July 2026",
    text: "",
    href: "https://neweconomics.org/2026/07/insecure-low-quality-work-a-major-driver-of-uks-neets-and-inactivity-crisis",
    image: shot("nef-neets-job-quality.jpg"),
    alt: "New Economics Foundation report on job quality and NEETs",
  },
  {
    title: "If Burnham wants firms to hire young people, he needs to get out of their way",
    date: "City AM · July 2026",
    text: "",
    href: "https://www.cityam.com/if-burnham-wants-firms-to-hire-young-people-he-needs-to-get-out-of-their-way/",
    image: shot("cityam-burnham-junior-hiring-ni.jpg"),
    alt: "City AM article on junior hiring",
  },
  {
    title: "AI looks set to squeeze junior hiring. The fix already exists in law",
    date: "Social Market Foundation · July 2026",
    text: "",
    href: "https://www.smf.co.uk/commentary_podcasts/ai-looks-set-to-squeeze-junior-hiring-the-fix-already-exists-in-law/",
    image: shot("smf-ai-junior-hiring-ni.jpg"),
    alt: "Social Market Foundation article on junior hiring",
  },
  {
    title: "Peston covers our fuel duty analysis",
    date: "ITV Peston · May 2026",
    text: "",
    href: "https://www.itv.com/watch/peston/2a4458/2a4458a0390",
    image: shot("itv-peston-fuel-duty.jpg"),
    alt: "ITV Peston showing PolicyEngine's fuel duty analysis",
  },
  {
    title: "Can the government solve the student loan crisis in England and Wales?",
    date: "ITV Peston · February 2026",
    text: "",
    href: "https://x.com/itvpeston/status/2027372583616741864",
    image: shot("itvpeston-student-loan.webp"),
    alt: "ITV Peston segment on student loans",
  },
  {
    title: "Workers face pay hit under Reeves's National Insurance plans",
    date: "The Telegraph · October 2024",
    text: "",
    href: "https://www.telegraph.co.uk/money/tax/workers-face-3000-pay-cut-under-reeves-national-insurance/",
    image: shot("telegraph-nic.webp"),
    alt: "The Telegraph logo",
  },
];

export const publications: Card[] = [
  {
    title: "Targeted energy bill discount",
    date: "October 2026",
    text: "Cost, reach and distributional effects of the Resolution Foundation's proposed targeted energy bill discount.",
    href: "https://www.policyengine.org/uk/targeted-energy-discount",
    image: shot("targeted-energy-discount.jpg"),
    alt: "Targeted energy bill discount dashboard cover",
  },
  {
    title: "The Middle East war and UK living standards",
    date: "September 2026",
    text: "How energy, fuel and food price rises hit households, with ten policy responses compared.",
    href: "https://www.policyengine.org/uk/middle-east-war-living-standards",
    image: shot("middle-east-war-living-standards.jpg"),
    alt: "Middle East war and UK living standards dashboard cover",
  },
  {
    title: "Free childcare hours and a 75% subsidy",
    date: "September 2026",
    text: "Cost and household impact of 15 free hours from nine months, plus a subsidy replacing Tax-Free Childcare.",
    href: "https://www.policyengine.org/uk/free-childcare-reform",
    image: shot("free-childcare-reform.jpg"),
    alt: "Free childcare reform dashboard cover",
  },
  {
    title: "Who bears the AI shock?",
    date: "August 2026",
    text: "AI job, wage and capital shocks traced through taxes and benefits.",
    href: "https://www.policyengine.org/uk/research/uk-ai-study",
    image: shot("uk-ai-study.jpg"),
    alt: "Who bears the AI shock research cover",
  },
  {
    title: "Temporary VAT cut on domestic electricity",
    date: "July 2026",
    text: "Cost and distributional impact of cutting electricity VAT from 5% to 0% for six months.",
    href: "https://www.policyengine.org/uk/electricity-vat-cut",
    image: shot("electricity-vat-cut.jpg"),
    alt: "Electricity VAT cut dashboard cover",
  },
  {
    title: "UK CliffWatch",
    date: "June 2026",
    text: "Where benefit withdrawal and taxes create cliffs and high marginal rates as earnings rise.",
    href: "https://www.policyengine.org/uk/uk-cliff-watch",
    image: shot("uk-cliff-watch.jpg"),
    alt: "UK CliffWatch tool cover",
  },
  {
    title: "Replacing council tax with a land value tax",
    date: "June 2026 · guest post",
    text: "A revenue-neutral swap modelled with PolicyEngine: most households gain and poverty edges down.",
    href: "https://progressandpoverty.substack.com/p/how-replacing-council-tax-with-a",
    image: shot("lvt-council-tax.jpg"),
    alt: "Chart from the post: average net income change by income decile, 2026-27",
  },
  {
    title: "Energy price shock",
    date: "April 2026",
    text: "Who is hit by energy price shock scenarios, with five policy responses.",
    href: "https://www.policyengine.org/uk/energy-price-shock",
    image: shot("energy-price-shock-calculator.jpg"),
    alt: "Energy price shock dashboard cover",
  },
];

export const budgetPlan = [
  {
    when: "Before the Budget",
    title: "Fix the model and data",
    text: "Freeze the model and data versions so every figure can be reproduced, and prepare the measures trailed in advance.",
  },
  {
    when: "On Budget day",
    title: "Model each measure",
    text: "Read the Budget documents, add each measure to the model, and check when it starts and who it covers.",
  },
  {
    when: "Then",
    title: "Publish the dashboard",
    text: "Cost beside the OBR's, who gains and loses by income, and example households.",
  },
  {
    when: "Once the local data pass their checks",
    title: "Add constituency results",
    text: "Results by constituency, with a short published note on how they are estimated.",
  },
];

export const ideas = [
  {
    title: "A Budget calculator for readers",
    text: "How does the Budget affect you? Readers enter their household and see the change.",
  },
  {
    title: "Local figures for regional stories",
    text: "Results by constituency, so a story can lead with what it means for a given area.",
  },
  {
    title: "Fast costings of proposals",
    text: "Party and conference announcements costed quickly, as with our recent costing of removing the £100,000 childcare limit.",
  },
  {
    title: "The data behind the chart",
    text: "Tables and charts reporters can use directly, with the numbers explained.",
  },
  {
    title: "Explainers",
    text: "Help with how a tax or benefit works, and what a policy change does to it.",
  },
  {
    title: "Checkable numbers",
    text: "Open code and a published method, so any figure can be cited and traced.",
  },
];
