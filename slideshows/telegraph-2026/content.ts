// Content for the Telegraph conversation, 9 October 2026.
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
  nuffield: {
    label: "Nuffield Foundation project",
    href: "https://www.nuffieldfoundation.org/project/enhancing-localising-and-democratising-tax-benefit-policy-analysis",
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
    text: "Tax and benefit law written as open code: income tax, National Insurance, Universal Credit, Child Benefit, council tax, VAT and more.",
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

export type User = { name: string; text: string; source?: Source };

export const users: User[] = [
  {
    name: "No 10 data science team (10DS)",
    text: "Our model has supported policy analysis at No 10 through an Innovation Fellowship.",
    source: sources.no10,
  },
  {
    name: "Parliament",
    text: "Our analysis has been cited in parliamentary debate.",
    source: sources.hansard,
  },
  {
    name: "Tax Policy Associates",
    text: "Tax policy think tank; checked a costing with PolicyEngine.",
    source: sources.tpa,
  },
  {
    name: "Nuffield Foundation",
    text: "Funds our work on local-area tax and benefit analysis.",
    source: sources.nuffield,
  },
  { name: "New Economics Foundation", text: "Think tank" },
  { name: "Good Growth Foundation", text: "Think tank" },
  { name: "WPI Economics", text: "Economics consultancy" },
];

export type Card = {
  title: string;
  date: string;
  text: string;
  href: string;
  image: string;
  alt: string;
};

const shot = (file: string) => `/screenshots/telegraph-2026/${file}`;

export const press: Card[] = [
  {
    title: "Workers face pay hit under Reeves's National Insurance plans",
    date: "The Telegraph · May 2025",
    text: "",
    href: "https://www.telegraph.co.uk/money/tax/workers-face-3000-pay-cut-under-reeves-national-insurance/",
    image: shot("telegraph-nic.webp"),
    alt: "The Telegraph logo",
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
    title: "Taxing questions: how Labour can raise the revenue we need",
    date: "Fabian Society · October 2025",
    text: "",
    href: "https://fabians.org.uk/publication/taxing-questions/",
    image: shot("fabians-taxing-questions.webp"),
    alt: "Fabian Society report cover, Taxing questions",
  },
  {
    title: "How Farage's £80bn tax cuts would benefit the richest most",
    date: "The Independent · May 2025",
    text: "",
    href: "https://www.independent.co.uk/news/uk/politics/farage-reform-tax-starmer-labour-b2760738.html",
    image: shot("independent-farage.webp"),
    alt: "The Independent article on Reform UK tax plans",
  },
  {
    title: "New analysis: the cost of tax hikes",
    date: "Institute of Economic Affairs · March 2025",
    text: "",
    href: "https://insider.iea.org.uk/p/new-analysis-the-cost-of-tax-hikes",
    image: shot("iea-tax-hikes.webp"),
    alt: "Institute of Economic Affairs article on the cost of tax hikes",
  },
  {
    title: "Labour's National Insurance overhaul could make workers £3,000 worse off",
    date: "GB News · October 2024",
    text: "",
    href: "https://www.gbnews.com/money/budget-workers-national-insurance-tax",
    image: shot("gbnews-nic.webp"),
    alt: "GB News article on National Insurance",
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
    title: "Marriage calculator",
    date: "September 2026",
    text: "A couple's taxes and benefits living together compared with living separately.",
    href: "https://www.policyengine.org/uk/marriage",
    image: shot("marriage-calculator-uk.jpg"),
    alt: "UK marriage calculator cover",
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
    text: "Lock the model version and the certified Microcosm data, and prepare likely measures.",
  },
  {
    when: "On Budget day",
    title: "Model each measure",
    text: "Read the documents, encode each measure and check its timing and scope.",
  },
  {
    when: "Within hours",
    title: "Publish the dashboard",
    text: "Cost, who gains and loses by income, example households and results by constituency.",
  },
  {
    when: "Alongside",
    title: "Explain the method",
    text: "A short published note on how the constituency figures are estimated.",
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
    text: "Open code and data, so any figure can be cited and checked.",
  },
];
