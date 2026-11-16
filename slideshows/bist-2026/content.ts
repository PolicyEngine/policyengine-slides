// Content for the seminar with the Modelling Unit of the Department for
// Business, Innovation, Science and Trade (BIST), 19 November 2026.
//
// Every figure is pinned to a commit of its study, and every claim about
// the model or the data to a commit of the code; the comments below name
// them. policyengine.py bundle 6.19.0 (released 13 November 2026; data build
// of 7 November) certifies Microcosm UK 2024-25 for the UK, and the data
// slides follow the Microcosm code. The AI study's figures are the published
// post's, run on Microcosm UK for 2027-28; the trade study was run on
// earlier datasets, and the slides that quote it say so.
//
// The talk has seven parts: an introduction; what PolicyEngine is; what we
// have already; projects we have done; what we could explore further; ideas
// that fit the unit; and how we could collaborate. The slide order is in
// config.ts and the part labels are "parts" below.
//
// Code claims were read on 15 November 2026 at: policyengine-uk d3db7ac,
// policyengine.py 810a59e, microcosm 429d7a0, uk-trade-shock-study 06c8bbc
// (its figures are now those of its PR #46, head 778557c, read 16 November),
// and firm-microsim-paper e6d5dd6. GOV.UK pages and the Microcosm
// calibration dashboard were read the same day; the AI post on 16 November.
//
// Two kinds of Microcosm number appear and are never mixed in one figure:
// - "the certified build": the national build of 7 November 2026 that
//   policyengine.py 6.19.0 pins (microcosm-uk-2024-25-national-
//   20261107T020434Z-eeb6093e), as the public calibration dashboard reports it;
// - "the code": counts read from the repository at commit 429d7a0 (15
//   November), which is eight days newer than that build.

import {
  IconArrowsExchange,
  IconArrowsSplit,
  IconBasket,
  IconBolt,
  IconBriefcase,
  IconBuildingFactory2,
  IconBulb,
  IconCalendar,
  IconCalendarEvent,
  IconChartBar,
  IconChartPie,
  IconCircleCheck,
  IconCoins,
  IconCompass,
  IconCopy,
  IconCpu,
  IconDatabase,
  IconDice,
  IconFlag,
  IconFlame,
  IconHeartHandshake,
  IconHome,
  IconHourglass,
  IconLock,
  IconLockOpen,
  IconMap,
  IconMapPin,
  IconMathFunction,
  IconPresentationAnalytics,
  IconReceiptTax,
  IconRefresh,
  IconRobot,
  IconScale,
  IconShip,
  IconShoppingCart,
  IconStack2,
  IconTable,
  IconTargetArrow,
  IconTestPipe,
  IconTrendingUp,
  IconUser,
  IconUsers,
  IconWallet,
  IconWorld,
} from "@tabler/icons-react";

const microcosmCommit = "429d7a0de624332d3fc8a221d72bd8cb9f7211fe";
const modelCommit = "d3db7ac07d3cc718400f38ba8ede429d38d6855e";
const pythonCommit = "810a59e5c927fc482ee4c9b0093bf6f1fdbbf6a0";
const microcosmRepo = `https://github.com/PolicyEngine/microcosm/blob/${microcosmCommit}`;
const ukBuild = `${microcosmRepo}/packages/microcosm-build/src/microcosm/build/uk`;
const modelRepo = `https://github.com/PolicyEngine/policyengine-uk/blob/${modelCommit}/policyengine_uk`;
const pythonRepo = `https://github.com/PolicyEngine/policyengine.py/blob/${pythonCommit}`;

export type Source = { label: string; href: string };

export const sources = {
  home: { label: "policyengine.org/uk", href: "https://www.policyengine.org/uk" },
  model: {
    label: "PolicyEngine UK code",
    href: "https://github.com/PolicyEngine/policyengine-uk",
  },
  python: {
    label: "policyengine.py",
    href: "https://github.com/PolicyEngine/policyengine.py",
  },
  data: {
    label: "Microcosm data pipeline",
    href: "https://github.com/PolicyEngine/microcosm",
  },
  joss: {
    label: "Ahmadi et al. (2026), JOSS",
    href: "https://doi.org/10.21105/joss.11115",
  },
  trade: {
    label: "Ahmadi (2026b), trade study",
    href: "https://github.com/PolicyEngine/uk-trade-shock-study",
  },
  ai: {
    label: "Ahmadi (2026a), AI study",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7174479",
  },
  firm: {
    label: "Ahmadi (2026c), firm VAT microsimulation",
    href: "https://github.com/PolicyEngine/firm-microsim-paper",
  },
  vatThresholds: {
    label: "VAT threshold analysis",
    href: "https://www.policyengine.org/uk/research/uk-vat-thresholds",
  },
  youngWorkerNics: {
    label: "Young worker NI exemption",
    href: "https://www.policyengine.org/uk/young-worker-nics",
  },
  inactiveNics: {
    label: "Recently inactive employees NI exemption",
    href: "https://www.policyengine.org/uk/nics-exemption-inactive-employees",
  },
  ogUk: { label: "OG-UK", href: "https://github.com/PSLmodels/OG-UK" },
  niesr: {
    label: "Mosley and Cornforth (2023)",
    href: "https://www.lse.ac.uk/CFM/assets/pdf/CFM-Discussion-Papers-2023/CFMDP2023-16-Paper.pdf",
  },
  inet: {
    label: "Youngman et al. (2026)",
    href: "https://arxiv.org/abs/2602.15607",
  },
  no10: {
    label: "PolicyEngine at No 10",
    href: "https://www.policyengine.org/uk/research/policyengine-10-downing-street",
  },
  hmt: {
    label: "HM Treasury ATRS record",
    href: "https://www.gov.uk/algorithmic-transparency-records/hmt-modelling-policy-engine",
  },
  obr: {
    label: "OBR annual report 2025-26",
    href: "https://assets.publishing.service.gov.uk/media/6a3cfb3c33bc5beefd3c49d2/E03598728_OBR_ARA_25-26_Accessible.pdf",
  },
  hansard: {
    label: "Hansard, 24 February 2026",
    href: "https://hansard.parliament.uk/Lords/2026-02-24/debates/A381F7D6-0A3C-48FD-8D9E-67751E25877A/NationalInsuranceContributions(EmployerPensionsContributions)Bill",
  },
  // General terms of the US-UK Economic Prosperity Deal (GOV.UK, updated
  // 20 June 2025): "This document became operative on 8 May 2025"; "does not
  // constitute a legally binding agreement"; "a quota of 100,000 vehicles for
  // UK automotive imports at a 10 percent tariff rate"; "a quota at most
  // favored nation (MFN) rates for United Kingdom steel and aluminum",
  // conditional on supply-chain requirements.
  epd: {
    label: "Economic Prosperity Deal: general terms",
    href: "https://www.gov.uk/government/publications/us-uk-economic-prosperity-deal-epd/general-terms-for-the-united-states-of-america-and-the-united-kingdom-of-great-britain-and-northern-ireland-economic-prosperity-deal-web-accessible-v",
  },
  // BICS guidance for applicants (GOV.UK, updated 13 November 2026):
  // exemptions from the indirect costs of three electricity policy schemes;
  // "The scheme will apply in Great Britain only"; Renewables Obligation and
  // Feed-in Tariff relief from April 2027, Capacity Market from October 2027;
  // eligibility by SIC and HS code, 33 MWh a year of grid electricity and an
  // electricity-intensity test.
  bicsGuidance: {
    label: "BICS guidance for applicants",
    href: "https://www.gov.uk/government/publications/british-industrial-competitiveness-scheme-business-guidance/british-industrial-competitiveness-scheme-guidance-for-applicants",
  },
  // BICS final impact assessment (dated 7 September 2026), para. 37:
  // "reducing electricity prices by an estimated £35 to £40/MWh"; Box 2:
  // "funded by a mix of energy system savings ... and Exchequer funding".
  bicsIa: {
    label: "BICS impact assessment",
    href: "https://www.legislation.gov.uk/ukia/2026/149/pdfs/ukia_20260149_en.pdf",
  },
  // The GTAP model page (Purdue University). It describes the standard model;
  // a split of technology sectors is a hypothetical input here, not a GTAP
  // product we have checked.
  gtap: {
    label: "GTAP model",
    href: "https://www.gtap.agecon.purdue.edu/models/cge_gtap_n.asp",
  },
  // Crossref, DOI 10.1016/j.jedc.2010.06.018: Dosi, Fagiolo and Roventini,
  // "Schumpeter meeting Keynes: A policy-friendly model of endogenous growth
  // and business cycles", Journal of Economic Dynamics and Control 34(9),
  // 1748-1767, September 2010. The paper is not about AI. Its abstract, as
  // listed on IDEAS/RePEc: "an agent-based model that bridges Keynesian
  // theories of demand-generation and Schumpeterian theories of
  // technology-fueled economic growth", used to study "short-run
  // fluctuations", "long-term growth patterns" and "unemployment levels".
  dosi: {
    label: "Dosi, Fagiolo and Roventini (2010)",
    href: "https://doi.org/10.1016/j.jedc.2010.06.018",
  },
  nuffield: {
    label: "PolicyEngine supporters",
    href: "https://www.policyengine.org/uk/supporters",
  },
  // policyengine.org/uk/donate, read 16 November 2026: "PolicyEngine is a
  // nonprofit building free, open-source tools that help people understand
  // tax and benefit policies."
  about: {
    label: "About PolicyEngine",
    href: "https://www.policyengine.org/uk/donate",
  },
  // Think tanks whose published work uses PolicyEngine UK; the same two
  // links as the Good Growth Foundation deck (its content.ts, "cps" and
  // "nef").
  cps: {
    label: "Centre for Policy Studies, July 2023",
    href: "https://cps.org.uk/research/family-friendly-taxation/",
  },
  nef: {
    label: "New Economics Foundation, July 2026",
    href: "https://neweconomics.org/2026/07/insecure-low-quality-work-a-major-driver-of-uks-neets-and-inactivity-crisis",
  },
  // Links pinned to the commits read on 15 November 2026.
  parameterExample: {
    label: "Personal allowance parameter",
    href: `${modelRepo}/parameters/gov/hmrc/income_tax/allowances/personal_allowance/amount.yaml`,
  },
  variableExample: {
    label: "Personal allowance variable",
    href: `${modelRepo}/variables/gov/hmrc/income_tax/allowances/personal_allowance.py`,
  },
  testExample: {
    label: "Allowance tests",
    href: `${modelRepo}/tests/policy/baseline/gov/hmrc/income_tax/allowances.yaml`,
  },
  growth: {
    label: "Growth parameters",
    href: `${modelRepo}/parameters/gov/economic_assumptions/yoy_growth.yaml`,
  },
  labourSupply: {
    label: "Labour supply responses",
    href: `${modelRepo}/dynamics/labour_supply.py`,
  },
  impactAnalysis: {
    label: "policyengine.py impact analysis",
    href: `${pythonRepo}/docs/impact-analysis.md`,
  },
  sourceStages: {
    label: "Microcosm UK source stages",
    href: `${ukBuild}/source_stages.json`,
  },
  imputation: {
    label: "Imputation method",
    href: `${microcosmRepo}/packages/microcosm-fit/README.md`,
  },
  calibration: {
    label: "Calibration method",
    href: `${microcosmRepo}/packages/microcosm-calibrate/README.md`,
  },
  doctrine: {
    label: "UK national solve settings",
    href: `${microcosmRepo}/packages/microcosm-build/src/microcosm/build/uk_runtime/national_doctrine.py`,
  },
  // The dashboard takes a "release" parameter, so the link is pinned to the
  // certified build of 7 November 2026 and keeps showing it after newer
  // releases become the dashboard's default. Read 16 November 2026.
  dashboard: {
    label: "Calibration dashboard, pinned to the 7 November build",
    href: "https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk&release=microcosm-uk-2024-25-national/uk-frs-calibration-attempt-20261107T020434Z-eeb6093e",
  },
  // The Autumn Budget 2026 dashboard, at its policyengine.org address, as in
  // the Autumn Budget 2026 deck (slideshows/autumn-budget-2026/content.ts).
  budgetDashboard: {
    label: "Autumn Budget 2026 dashboard",
    href: "https://policyengine.org/uk/budgets/autumn-2026",
  },
  budgetDashboardCode: {
    label: "Dashboard code",
    href: "https://github.com/PolicyEngine/uk-autumn-budget-dashboard-2026",
  },
  // PolicyEngine post published 16 November 2026. Its title is quoted as a
  // citation; the slide's own words say "scenario".
  aiPost: {
    label: "“Who bears the AI shock?”, PolicyEngine, 16 November 2026",
    href: "https://www.policyengine.org/uk/research/uk-ai-study",
  },
  firmHmrcFigure: {
    label: "Working paper figure and calibration report, commit e6d5dd6",
    href: "https://github.com/PolicyEngine/firm-microsim-paper/blob/e6d5dd6/results/calibration_accuracy.txt",
  },
  tradeFigure: {
    label: "Working paper figure, PR #46, 778557c",
    href: "https://github.com/PolicyEngine/uk-trade-shock-study/blob/778557c/paper/figures/fig_incidence_profile.png",
  },
  // The figure on the firm VAT slide, at the commit the deck reads.
  firmFigure: {
    label: "Working paper figure, commit e6d5dd6",
    href: "https://github.com/PolicyEngine/firm-microsim-paper/blob/e6d5dd6/paper/figures/revenue_impact_2025_26.png",
  },
} satisfies Record<string, Source>;

export type Tone = "built" | "muted" | "caution";
export type Tag = { label: string; tone: Tone };

// Status tags. Teal: exists today. Grey: an idea to explore (not built), not yet
// modelled, restricted or outside the model. Amber: experimental, proposed, a working paper or illustrative.
const tag = (label: string, tone: Tone): Tag => ({ label, tone });
export const tags = {
  notBuilt: tag("Idea to explore", "muted"),
  noResults: tag("Not yet modelled", "muted"),
  experimental: tag("Experimental", "caution"),
  proposed: tag("Proposal", "caution"),
  workingPaper: tag("Working paper", "caution"),
  // The trade study's rerun (uk-trade-shock-study PR #46, 778557c, open, not
  // merged; README and paper/sections/results.tex): every microsimulation
  // runs on policyengine[uk] 6.20.0 (policyengine-uk 2.174.1) with the
  // certified Microcosm UK 2024-25 build; the tariff stage under 2026-27
  // rules.
  microcosm: tag("Microcosm UK", "built"),
  // Doability markers on the ideas slides (see the verification notes in
  // NOTES.md): what the existing code takes, what needs a mapping between
  // another model's sectors and SIC or COICOP, and what needs a small change.
  canToday: tag("Can take today", "built"),
  mapping: tag("Needs a sector mapping", "muted"),
  extension: tag("Small extension", "caution"),
  toBuild: tag("Not built yet", "muted"),
};

// The seven parts of the talk: the label above each slide's title, the
// tracker beside it and the cards of the "In brief" slide. Parts 5 and 6 are
// ideas: no link to a trade, macroeconomic or agent-based model is built, and
// there are no published PolicyEngine results for the Economic Prosperity
// Deal or BICS (trade study 06c8bbc reports none for the deal schedule;
// PolicyEngine UK has no firm entity, see coverage and abmQuestions below).
export const parts = [
  { key: "intro", icon: IconFlag, title: "Introduction", text: "Who we are." },
  {
    key: "what",
    icon: IconScale,
    title: "What PolicyEngine is",
    text: "How a run works, the rules, the household data and its calibration.",
  },
  {
    key: "have",
    icon: IconStack2,
    title: "What we have already",
    text: "The taxes and benefits the UK model covers, and what is open.",
  },
  {
    key: "projects",
    icon: IconPresentationAnalytics,
    title: "Projects we have done",
    text: "A Budget dashboard, an AI scenario, synthetic firms and trade.",
  },
  {
    key: "explore",
    icon: IconCompass,
    title: "What we could explore further",
    text: "From a trade or macroeconomic model's results to households.",
    tag: tags.notBuilt,
  },
  {
    key: "ideas",
    icon: IconBulb,
    title: "Ideas that fit the unit",
    text: "Business policy, agent-based models and one way to link models.",
    tag: tags.notBuilt,
  },
  {
    key: "collaborate",
    icon: IconHeartHandshake,
    title: "How we could collaborate",
    text: "Two candidate pilots, and questions for discussion.",
  },
] as const;

export type PartKey = (typeof parts)[number]["key"];

// Who we are. Every item repeats a claim with a public source:
// - Nonprofit, free, open source: policyengine.org/uk/donate (source "about").
// - Funding, folded into the nonprofit line: Nuffield Foundation grants made
//   in 2024 and 2026 (source "nuffield"; the years are in NOTES.md).
// - UK and US models in one package: the policyengine.py paper (source
//   "joss"), "in the US and UK"; its comparison table gives PolicyEngine's
//   country coverage as "US and UK". No other country is claimed.
// - Licences (LICENSE files): policyengine-uk and policyengine.py AGPL-3.0,
//   microcosm MIT.
// - Government: 10 Downing Street's data science team built 10ds-microsim on
//   PolicyEngine (source "no10"); that it is used as supplementary,
//   experimental analysis is said in NOTES.md, not here. "Mention" for HM Treasury, the OBR and Parliament is deliberate:
//   HMT's transparency record describes a 2024 pilot evaluation and says HMT
//   does not currently use the model (source "hmt"); the OBR lists
//   PolicyEngine among organisations it engaged with in 2025-26 (source
//   "obr"); a House of Lords debate cited House of Commons Library research
//   that used PolicyEngine (source "hansard"). The full caveats are in
//   NOTES.md ("Backup material").
// - Think tanks and researchers: the logo files in public/logos/orgs/ and
//   the pattern of the Good Growth Foundation deck's community slide. The
//   Centre for Policy Studies and the New Economics Foundation link to
//   their publications (sources "cps" and "nef"); NIESR links to Mosley and
//   Cornforth (2023), which combined PolicyEngine UK with NiGEM (source
//   "niesr"); the Good Growth Foundation and WPI Economics have no public
//   link, as in that deck. "height" is each logo's height in scale units,
//   chosen so that square and wide marks look the same size; "width" and
//   "pixelHeight" are the file's pixel size. The Good Growth Foundation file
//   is white on transparent, so the slide darkens it ("darken").
// - Government logos: 10 Downing Street and the House of Lords (for
//   Parliament: the Hansard source is a Lords debate) are the files already
//   in public/logos/orgs/. The Office for Budget Responsibility wordmark is
//   policyengine-app-v2 (ede5cb3), app/public/assets/posts/
//   obr-november-2025-projections/obr-logo.png, copied to public/logos/orgs/
//   office-for-budget-responsibility.png; it is white on transparent, so it
//   is darkened too. No HM Treasury logo exists in this repository or in
//   policyengine-app-v2, so its name is set as a plain text wordmark.
export type Logo = {
  name: string;
  /** Without a file, the name is set as a plain text wordmark. */
  logo?: string;
  width?: number;
  pixelHeight?: number;
  height: number;
  darken?: boolean;
  source?: Source;
  /** A short line under the mark. */
  caption?: string;
};

// Layout: the three facts run across the top; below, two rows of equal
// cells, one organisation each, with a short caption under every mark.
// "height" is each mark's height in base units (16px at 1920 wide), chosen
// so that square and wide marks carry similar visual weight, none taller
// than about 70px at 1920. The government captions keep "mentions" for HM
// Treasury, the OBR and Parliament, and name the record that does so.
export const whoWeAre = {
  facts: [
    {
      icon: IconHeartHandshake,
      title: "Nonprofit",
      text: "Free tools; UK work funded by Nuffield Foundation grants",
    },
    { icon: IconLockOpen, title: "Open source", text: "Rules, data pipeline and analysis code" },
    { icon: IconWorld, title: "UK and US models", text: "One Python package: policyengine.py" },
  ],
  government: [
    {
      name: "10 Downing Street",
      logo: "/logos/orgs/10-downing-street.png",
      width: 1280,
      pixelHeight: 1280,
      height: 4.2,
      source: sources.no10,
      caption: "Data science team built 10ds-microsim on PolicyEngine",
    },
    {
      name: "HM Treasury",
      height: 3.4,
      source: sources.hmt,
      caption: "Mentions PolicyEngine in a transparency record",
    },
    {
      name: "Office for Budget Responsibility",
      logo: "/logos/orgs/office-for-budget-responsibility.png",
      width: 679,
      pixelHeight: 294,
      height: 4,
      darken: true,
      source: sources.obr,
      caption: "Mentions PolicyEngine in its annual report",
    },
    {
      name: "House of Lords",
      logo: "/logos/orgs/house-of-lords.svg",
      width: 755,
      pixelHeight: 200,
      height: 3,
      source: sources.hansard,
      caption: "PolicyEngine mentioned in a Lords debate",
    },
  ] as Logo[],
  thinkTanks: [
    {
      name: "New Economics Foundation",
      logo: "/logos/orgs/new-economics-foundation.png",
      width: 567,
      pixelHeight: 241,
      height: 4,
      source: sources.nef,
      caption: "New Economics Foundation",
    },
    {
      name: "Good Growth Foundation",
      logo: "/logos/orgs/good-growth-foundation.png",
      width: 1500,
      pixelHeight: 413,
      height: 3,
      darken: true,
      caption: "Good Growth Foundation",
    },
    {
      name: "Centre for Policy Studies",
      logo: "/logos/orgs/centre-for-policy-studies.png",
      width: 223,
      pixelHeight: 223,
      height: 4.4,
      source: sources.cps,
      caption: "Centre for Policy Studies",
    },
    {
      name: "NIESR",
      logo: "/logos/orgs/niesr.png",
      width: 400,
      pixelHeight: 400,
      height: 4.2,
      source: sources.niesr,
      caption: "NIESR, with NiGEM",
    },
    {
      name: "WPI Economics",
      logo: "/logos/orgs/wpi-economics.svg",
      width: 196,
      pixelHeight: 60,
      height: 3.1,
      caption: "WPI Economics",
    },
  ] as Logo[],
};

// Data: policyengine.py 810a59e, data/bundle/manifest.json, bundle 6.19.0
// (Microcosm UK 2024-25 national build of 7 November 2026, certified for
// policyengine-uk 2.174.1).
// Spending by category is a model input (policyengine-uk d3db7ac,
// variables/input/consumption/); it sets VAT and duties. Income after taxes
// and benefits is the result. The "Input" and "Result" labels carry that
// message, with the slide's subtitle.
// One flow for what the model is and how a run works (the former "computes
// household incomes" and "how a reform or a scenario is run" slides, merged;
// the run's own sources are in the comment above runStatus below). The step
// labels keep the message that spending is an input and income the result.
export const modelFlow = [
  {
    icon: IconScale,
    owner: "Open source",
    title: "The rules",
    text: "Taxes and benefits, coded from legislation",
  },
  {
    icon: IconUsers,
    owner: "Input",
    title: "The households",
    text: "Microcosm UK 2024–\u206025: incomes and spending by category, grown with OBR indices",
  },
  {
    icon: IconCopy,
    owner: "Two simulations",
    title: "Run twice",
    text: "Baseline and counterfactual: a reform changes parameters, a scenario changes inputs",
  },
  {
    icon: IconChartBar,
    owner: "Result",
    title: "The difference",
    text: "Income after taxes and benefits; poverty, inequality and Exchequer cost",
  },
];

// Programme coverage: policyengine-uk d3db7ac (re-checked at that commit).
export const coverage = [
  {
    icon: IconCoins,
    title: "Taxes on income",
    items: [
      "Income tax, with Scottish rates",
      "Employee, employer and self-employed NI",
      "Capital gains tax",
    ],
    notModelled: "",
  },
  {
    icon: IconShoppingCart,
    title: "Taxes on spending and property",
    items: ["VAT", "Fuel, alcohol and tobacco duties", "Stamp duty and council tax"],
    notModelled: "",
  },
  {
    icon: IconBuildingFactory2,
    title: "Taxes on business",
    items: [
      "Employer NI: changes passed to pay by default",
      "Business rates and corporate stamp duty: published totals, allocated to shareholders",
    ],
    notModelled: "Corporation tax; firms as entities",
  },
  {
    icon: IconHeartHandshake,
    title: "Benefits and other",
    items: [
      "Universal Credit and legacy benefits",
      "Child Benefit, Pension Credit, the State Pension",
      "Disability and Scottish benefits, childcare support",
    ],
    notModelled: "",
  },
];

// uk-trade-shock-study 06c8bbc. Food: paper/sections/episodes.tex, "Bakker
// et al. (2023) attribute roughly 8 percentage points of the 25 per cent
// food price rise between December 2019 and March 2023 to Brexit non-tariff
// barriers" (CEP Brexit Analysis No. 18). Datasets: paper/sections/
// results.tex and roadmap.tex, the three price-led episodes run "on the
// enhanced Family Resources Survey" (2023-24, 2023 vintage), the tariff
// pipeline on "the 2024-25 Family Resources Survey" (frs_2024_25.h5).
export const tradeEvents = [
  {
    icon: IconBasket,
    title: "Post-Brexit food prices",
    text: "The part Bakker et\u00a0al. (2023) attribute to trade barriers",
  },
  { icon: IconFlame, title: "The 2022 energy price surge", text: "Offset in part by two support schemes" },
  {
    icon: IconArrowsExchange,
    title: "The UK–India agreement",
    text: "Projected duty reductions; the same path could serve any trade agreement",
  },
  { icon: IconShip, title: "The 2025 US tariffs", text: "An earnings change: the next slide" },
];

// The earlier "about 60% (49-64%)" energy offset is dropped: it came from
// 06c8bbc on the enhanced FRS, and the rerun (PR #46, 778557c) reports a
// different measure (see NOTES.md).

// The Economic Prosperity Deal, end to end: from a trade or macroeconomic
// model's results for the deal to household and fiscal results. Not built,
// and no results. Every fact is one the deck already cites:
// - the deal: source "epd" above (operative 8 May 2025; a quota of 100,000
//   vehicles at a 10% tariff; a steel and aluminium quota subject to
//   supply-chain conditions). These facts are in NOTES.md, not on the slide;
// - "Deal schedule in our study": uk-trade-shock-study 06c8bbc has a deal
//   schedule and reports no results for it (see tariffBridge below);
// - static, no general equilibrium: see modelFlow and runStatus below;
// - the feedback arrow is the macro-micro loop on the macro links slide,
//   which is not built (see macroLinks below).
// The standard GTAP model has one wage per labour type and its standard
// closure fixes aggregate employment, hence "wages by labour type" and
// "closure stated".
export const epdTrace = {
  flow: [
    {
      icon: IconWorld,
      owner: "Trade or macro model",
      title: "Results for the deal",
      text: "Jobs and prices by sector; wages by labour type; closure stated",
    },
    {
      icon: IconArrowsExchange,
      owner: "Agreed mapping",
      title: "Sector mapping",
      text: "Another model’s sectors or products to SIC and COICOP divisions",
      tag: tags.toBuild,
      dashed: true,
    },
    {
      icon: IconScale,
      owner: "PolicyEngine",
      title: "Assign to people, apply the rules",
      text: "Static microsimulation: no general equilibrium",
    },
    {
      icon: IconHome,
      owner: "PolicyEngine",
      title: "Household and fiscal results",
      text: "Deciles, poverty, regions, net Exchequer cost",
    },
  ],
  feedback: {
    label: "Optional feedback: household and fiscal totals back to the macro model",
    tag: tags.notBuilt,
  },
};

// The mechanism inside the PolicyEngine step: which records receive each
// sector result. The breakdowns are the
// output classes in policyengine.py 810a59e, src/policyengine/outputs/:
// decile_impact.py and intra_decile_impact.py; poverty.py; inequality.py;
// program_statistics.py (the 14 programmes in UK_PROGRAMS, hence "taxes and
// benefits"); uk_geography_disclosure.py (region); constituency_impact.py
// and local_authority_impact.py (the local-area file is experimental).
// Spending is held by COICOP division (policyengine-uk d3db7ac,
// variables/input/consumption/petrol_spending.py). No mapping from GTAP
// sectors exists in our code: the trade study assigns by two-digit SIC
// division of FRS employees (tariff_pipeline/exposure.py:174-230), read from
// sic_industry_division (policyengine-uk d3db7ac), and draws who loses a job
// at random over repeated draws (100 in the trade study). Occupation comes
// from the survey's job record; a map from a trade model's labour types to
// occupations is part of the proposed interface and is not built.
export const tariffDisaggregation = {
  rows: [
    {
      icon: IconBriefcase,
      result: "Earnings and jobs by sector",
      from: "Agent-based model; jobs by sector from a CGE model",
      key: "Two-digit SIC division",
      assigned: "Employees in that sector; job losses drawn at random",
      tag: tags.canToday,
    },
    {
      icon: IconUser,
      result: "Wages by labour type",
      from: "CGE trade model",
      key: "Occupation group",
      assigned: "Employees in those occupations",
      tag: tags.extension,
    },
    {
      icon: IconShoppingCart,
      result: "Prices",
      from: "Trade and partial-equilibrium models",
      key: "COICOP spending division",
      assigned: "Households, by what they spend",
      tag: tags.canToday,
    },
  ],
  breakdowns: [
    { icon: IconChartBar, title: "Income deciles" },
    { icon: IconChartPie, title: "Poverty and inequality" },
    { icon: IconReceiptTax, title: "Taxes and benefits" },
    { icon: IconMap, title: "Regions" },
    { icon: IconMapPin, title: "Local areas", tag: tags.experimental },
  ],
};

// The tariff bridge: shock = elasticity × tariff × US export share by SIC
// division; cushion macros MsUSTariffWageCutCushionPct and
// MsUSTariffDisplacementCushionPct (results/e3_constants.json:
// gross_shock_gbp_m_per_year 1007.1; n_draws 20; wagecut_cushion_pct 41.8;
// displacement_cushion_pct 32.1, displacement_cushion_sd_pct 3.3, over 20
// displacement draws and 3 wage-cut draws), at uk-trade-shock-study PR #46,
// head 778557c (open, not merged), run on Microcosm UK at 2026. These
// replace the figures of 06c8bbc (43.7%, 35.4%, SD 5.1 over 100 draws). Results are
// for the schedule before the Economic Prosperity Deal; the study reports
// none for the deal schedule.
export const tariffBridge = {
  steps: [
    { icon: IconReceiptTax, title: "Tariff rates", text: "The pre-deal US schedule" },
    { icon: IconShip, title: "US export intensity", text: "By two-digit SIC division", dashed: true },
    { icon: IconMathFunction, title: "Export-demand elasticity", text: "Assumed 1, as a placeholder", dashed: true },
    { icon: IconCoins, title: "Earnings change by sector", text: "About £1.0bn a year", dashed: true },
    { icon: IconUsers, title: "Survey employees", text: "Assigned by sector" },
  ],
  replaceable: [1, 3] as [number, number],
  cushion: { wageCuts: "41.8%", jobLosses: "32.1%", jobLossesSd: "3.3 points", draws: "20 draws" },
};

// A non-tax business policy, with BICS as the example. Scheme facts: sources
// bicsGuidance and bicsIa above. Model precedents (policyengine-uk d3db7ac):
// parameters/gov/contrib/policyengine/employer_ni/*_incidence.yaml and
// budget/{consumer,corporate}_incident_tax_change.yaml allocate by
// consumption and by shareholding, booked as tax revenue; a non-tax cost
// change needs an extension, which is not built. The three channels to
// households (prices, pay and jobs, profits) are the text of the third step.
export const businessPolicy = {
  flow: [
    {
      icon: IconBolt,
      owner: "Scheme design",
      title: "Cost change by sector",
      text: "Estimated £35 to £40 per MWh, from 2027",
    },
    {
      icon: IconBuildingFactory2,
      owner: "Outside PolicyEngine",
      title: "How firms use it",
      text: "Another model, or an assumption",
      dashed: true,
    },
    {
      icon: IconArrowsSplit,
      owner: "PolicyEngine",
      title: "Allocate to households",
      text: "Prices by spending; pay and jobs by sector; total profits by shareholding",
    },
    {
      icon: IconHome,
      owner: "PolicyEngine",
      title: "Household and fiscal effects",
      text: "Net incomes, poverty, receipts",
    },
  ],
};

// The AI study's figures, from the published post (source "aiPost":
// policyengine.org/uk/research/uk-ai-study, 16 November 2026; the post is
// PolicyEngine/policyengine-app-v2, app/src/data/posts/articles/
// uk-ai-study.md), read 16 November 2026. The post runs the study on
// Microcosm UK (FRS 2024-25 base, SPI records, calibrated weights; "it
// grosses to 29.0 million employees in 2027-28") for the 2027-28 tax year.
// Central scenario: "7% of employees lose their jobs for the full 2027-28
// tax year, workers who remain receive a 2.6% average wage rise", and
// interest and dividend income rises by 39.8%. "Under the central
// calibration, averaged over 50 draws: the Exchequer cost is £7.3 billion
// for the 2027-28 tax year (standard deviation £1.9 billion); absolute
// poverty after housing costs rises by 2.57 percentage points, and before
// housing costs by 2.40 points; the Gini coefficient rises by 1.76
// percentage points." Channels, run alone (means over 20 paired draws):
// displacement costs £42.5 billion; the survivor-wage channel raises net
// receipts by £17.5 billion and the capital-income channel by £17.9
// billion. Incidence, same central scenario: £1.9 billion under uniform
// incidence, £7.3 billion under exposure-proportional incidence, £27.7
// billion under the top-loaded stress test; mean before-housing-costs
// poverty rises by between 2.40 and 2.65 points across the four stylised
// families. Five incidence scenarios: exposure-proportional,
// junior-concentrated, expertise-compression, uniform and a top-loaded
// stress test. These supersede the figures of uk-ai-study 5d75106 (a 2026
// scenario on the survey-weighted FRS 2024-25), which earlier versions of
// this deck quoted. None of these figures is on a slide: the post is shown
// live, and the figures are in NOTES.md for the presenter.
export const aiShock = {
  cost: "£7.3bn",
  poverty: "+2.40pp",
};

// firm-microsim-paper e6d5dd6 (paper and README): the ONS VAT/PAYE
// enterprise frame (about 2.7 million enterprises) and HMRC's count of
// VAT-registered traders (about 2.2 million). Microcosm README (429d7a0, 15
// November 2026): "Firm support is experimental"; its data frame supports
// firm tables and person-firm job links, which the UK build does not use
// (microcosm 429d7a0 README). The two
// published employer NI analyses are sources youngWorkerNics and
// inactiveNics.
// The former "What we have on the business side" slide is merged into the
// coverage slide: its "Employer costs" and "Business taxes reach households"
// cards repeated the coverage card "Taxes on business", and its firm VAT card
// is the "Synthetic firms" item of dataAccess and the firm project slide.
// The cards' text is in NOTES.md. In the model today (policyengine-uk
// d3db7ac): business rates and corporate stamp duty enter as published
// totals allocated to shareholders (see coverage above); parameters/gov/
// contrib/policyengine/employer_ni/*_incidence.yaml split an employer NI
// change between pay, prices and profits, all to pay by default; budget/
// consumer_incident_tax_change and corporate_incident_tax_change allocate an
// outside business-tax estimate by spending or by shareholding (see
// businessPolicy above). PolicyEngine UK has no firm entity.

// The loop card's precedent is Mosley and Cornforth (2023); the OG-UK card
// follows that project's repository. Forecast scenario (policyengine-uk
// d3db7ac): the dataset is projected with the growth series in
// parameters/gov/economic_assumptions/yoy_growth.yaml, and a reform to a
// growth rate re-projects the data
// (tests/test_uprating_inputs_reach_data.py). No forecasting-model scenario
// has been run this way.
export const macroLinks = [
  {
    icon: IconTrendingUp,
    title: "A forecast scenario",
    tags: [{ label: "Mechanism built; not yet run", tone: "muted" } as Tag],
    from: "Macro model",
    to: "PolicyEngine",
    twoWay: false,
    text: "Its earnings and price paths could replace the OBR's.",
    source: sources.growth,
  },
  {
    icon: IconRefresh,
    title: "A macro–⁠micro loop",
    tags: [tags.notBuilt],
    from: "Macro model",
    to: "PolicyEngine",
    twoWay: true,
    text: "Results could pass both ways until the two agree.",
    source: sources.niesr,
  },
  {
    icon: IconHourglass,
    title: "OG-UK",
    tags: [{ label: "Early prototype", tone: "caution" } as Tag],
    from: "PolicyEngine",
    to: "OG-UK",
    twoWay: false,
    text: "Overlapping generations, over a 60-year transition.",
    source: sources.ogUk,
  },
];

// Candidate questions for a link with an agent-based model. None is built or
// run. Row 3 refers to the Dosi et al. class of model (source above), which
// is not about AI; applying it to AI is hypothetical. Each row says what the
// agent-based model would pass in; what PolicyEngine returns is the same for
// all three (abmReturns).
export const abmQuestions = [
  {
    icon: IconCpu,
    question: "A semiconductor supply disruption",
    behaviour: "Firms lose inputs, cut output and jobs",
    passes: "Job and earnings losses by sector",
    tag: tags.canToday,
  },
  {
    icon: IconBolt,
    question: "Electricity-cost relief (BICS)",
    behaviour: "Firms choose between prices, pay and profit",
    passes: "Price changes by spending category; pay by sector",
    tag: tags.mapping,
  },
  {
    icon: IconRobot,
    question: "AI adoption over the cycle",
    behaviour: "Firms adopt, enter and exit; wages adjust",
    passes: "Jobs and wages by sector, one year at a time",
    tag: tags.canToday,
  },
];

// Doability of each input, checked on 16 November 2026 against
// uk-trade-shock-study PR #46 (778557c), tariff_pipeline/shocks.py and
// runner.py: apply_shocks takes persons with employment_income, sic_division,
// age and weight, and applies wage cuts or job losses by two-digit SIC
// division; region is reported (runner.py, region_income_change) but is not
// an input, so losses by sector and region would be a small extension.
// Prices: policyengine-uk holds spending by category
// (variables/input/consumption/), and the trade study applies price changes
// to food and energy spending (uk_trade_shock_study/incidence.py); mapping an
// agent-based model's sectors to those categories is the work. Profits by
// sector cannot be taken: the model allocates an economy-wide profit change
// by shareholding and has no link from a sector's profits to its owners, so
// profits are off the slide. Paths: each year is a separate run.

// The full list of outputs is on the linking slide (tariffDisaggregation);
// this is its short form. "Benefit claims" and "all by year" are in NOTES.md.
export const abmReturns = [
  "Household incomes, by decile and region",
  "Poverty and inequality",
  "Taxes and benefits, by year",
];

// Code, data and synthetic data (the row under the coverage cards). Licences: policyengine-uk and policyengine.py
// AGPL-3.0, microcosm MIT (LICENSE files). Microdata: the certified UK dataset
// is in a private Hugging Face repository (policyengine.py 810a59e,
// data/bundle/manifest.json); FRS-derived data are licensed through the UK
// Data Service and cannot be redistributed. Firm data: the firm VAT paper's
// population is drawn from published ONS and HMRC tables and its repository
// is public and MIT-licensed (firm-microsim-paper e6d5dd6 README).
export const dataAccess = [
  {
    icon: IconLockOpen,
    tag: { label: "Open", tone: "built" } as Tag,
    title: "Code",
    text: "Rules, data pipeline and analysis are open source.",
  },
  {
    icon: IconLock,
    tag: { label: "Restricted", tone: "muted" } as Tag,
    title: "Household microdata",
    text: "Licensed survey records. We share results as tables.",
  },
  {
    icon: IconBuildingFactory2,
    tag: tags.workingPaper,
    title: "Synthetic firms",
    text: "For VAT costing; drawn from published tables, so they can be shared.",
  },
];

// Two candidate pilots. Neither has published results: the trade study
// reports none for the deal schedule and nothing exists on BICS. "Starting
// point" rows name existing work: the tariff bridge (trade study 06c8bbc)
// and the business-tax allocation parameters (see businessPolicy above).
export const pilots = [
  {
    icon: IconShip,
    title: "The Economic Prosperity Deal",
    rows: [
      {
        icon: IconWorld,
        label: "A trade model could provide",
        text: "Jobs and prices by sector; wages by labour type",
      },
      {
        icon: IconHome,
        label: "PolicyEngine could provide",
        text: "Sector mapping; incomes, poverty, Exchequer cost",
      },
      {
        icon: IconFlag,
        label: "A starting point",
        text: "The trade study's tariff bridge",
      },
    ],
  },
  {
    icon: IconBolt,
    title: "The British Industrial Competitiveness Scheme",
    rows: [
      {
        icon: IconBuildingFactory2,
        label: "The Modelling Unit could provide",
        text: "Cost change by sector; the prices–pay–profits split",
      },
      {
        icon: IconHome,
        label: "PolicyEngine could provide",
        text: "Allocation to households; fiscal effects",
      },
      {
        icon: IconFlag,
        label: "A starting point",
        text: "The business-tax allocation, extended",
      },
    ],
  },
];

// Six questions. The second and third follow from what different kinds of
// model report (tariffDisaggregation above); tariff revenue and returns to capital
// as further channels are in NOTES.md.
export const questions = [
  { icon: IconTargetArrow, text: "Which pilot first: the Economic Prosperity Deal, or BICS?" },
  { icon: IconWorld, text: "Which model would supply the scenario, and under which closure?" },
  { icon: IconCalendar, text: "How should a long-run result map to fiscal years?" },
  { icon: IconArrowsSplit, text: "Where should the prices, pay and profits split come from?" },
  { icon: IconBuildingFactory2, text: "Which firm behaviour needs an agent-based model, and what does it report?" },
  { icon: IconHome, text: "Which household results matter most?" },
];

// How the rules are encoded. The snippet is abridged from policyengine-uk
// d3db7ac (version 2.179.0), variables/gov/hmrc/income_tax/allowances/
// personal_allowance.py (label, unit, reference and one comment cut;
// "personal_allowance = PA.amount" is inlined in the last line). The
// parameter and test for the same allowance are linked in the sources row.
// Counts at the same commit: 1,086 YAML files under parameters/gov, 998 with
// a "reference:" key (grep -rlE '^\s*reference:'); 1,504 "class X(Variable)"
// definitions under variables/; 6,779 "- name" cases in the YAML files under
// tests/policy. These counts are for version 2.179.0; the bundle certifies
// 2.174.1. Entities: entities.py (Household, BenUnit, Person).
export const rulesCode = {
  title: "The personal allowance, abridged",
  code: `class personal_allowance(Variable):
    value_type = float
    entity = Person
    definition_period = YEAR

    def formula(person, period, parameters):
        params = parameters(period)
        PA = params.gov.hmrc.income_tax.allowances.personal_allowance
        ANI = person("adjusted_net_income", period)
        excess = max_(0, ANI - PA.maximum_ANI)
        reduction = excess * PA.reduction_rate
        return max_(0, np.ceil(PA.amount - reduction))`,
};

export const rulesFacts = [
  { icon: IconCalendarEvent, value: "1,086", label: "parameter files", text: "Dated values; 998 carry a reference" },
  { icon: IconMathFunction, value: "1,504", label: "variables", text: "A formula over arrays" },
  { icon: IconTestPipe, value: "6,779", label: "tests", text: "Inputs and the expected output" },
];

export const rulesEntities = [
  { icon: IconUser, label: "Person" },
  { icon: IconUsers, label: "Benefit unit" },
  { icon: IconHome, label: "Household" },
];

// How a reform, a counterfactual or a shock is run (policyengine-uk d3db7ac).
// - Projection: data/economic_assumptions.py extends the single-year dataset
//   with the growth series in parameters/gov/economic_assumptions/
//   yoy_growth.yaml (OBR outturn and forecasts).
// - Reform as a parameter path and value: tests/microsimulation/
//   reforms_config.yaml, "Raise basic rate by 1pp":
//   gov.hmrc.income_tax.rates.uk[0].rate: 0.21.
// - Baseline and reform simulations compared: policyengine.py 810a59e,
//   docs/impact-analysis.md (economic_impact_analysis).
// - Mostly static by default: parameters/gov/simulation/
//   labour_supply_responses/{income,substitution}_elasticity.yaml are 0.
// - A shock changes inputs, not rules: uk-trade-shock-study 06c8bbc,
//   uk_trade_shock_study/runner.py (baseline and shocked simulations).
// Shown as a status tag beside the subtitle. The reform example
// (gov.hmrc.income_tax.rates.uk[0].rate: 0.21) and what comes from outside
// the model (firms' decisions, general equilibrium) are in NOTES.md.
export const runStatus: Tag = { label: "Mostly static by default", tone: "muted" };

// Microcosm UK 2024-25: what the pipeline builds.
// The slide describes the certified file. Its build
// (microcosm-uk-2024-25-national-20261107T020434Z-eeb6093e) ran at microcosm
// dc00d158f, which declares 54 source stages (the certified build's
// diagnostics); today's code at 429d7a0 declares 56
// (packages/microcosm-build/src/microcosm/build/uk/source_stages.json, each
// stage with a "survey" and a "source"; every survey microdata file is
// pinned by SHA-256 and checked when the build runs). Read at 429d7a0:
// - frs_spine: Family Resources Survey 2024-25 (UK Data Service SN 9563);
// - spi_support_channel, hmrc_spi_income_spine: the build stacks 10,000
//   copies of FRS households (uk_runtime/spi_support.py,
//   DEFAULT_SPI_SUPPORT_HOUSEHOLDS) whose adults take taxpayers' incomes
//   drawn from the Survey of Personal Incomes public-use file 2022-23.
//   Before calibration the copies carry half the weight of households with
//   nobody of pension age and a fifth of the weight of the others (the
//   build's diagnostics; the code's prior mass shares of 0.5 and 0.2 agree);
// - spi_income_band_donors: a separate step. Further copies are placed in
//   the four HMRC total-income bands from GBP 200,000, 500,000, 1 million
//   and 2 million (uk_runtime/spi_band_donors.py);
// - the copies' SIC division and occupation are imputed from their SPI
//   incomes, not observed (uk_runtime/spi_employment_shell.py: occupation
//   is redrawn from the copy's own incomes, and an industry division copied
//   from an FRS adult with that occupation);
// - was_wealth (Wealth and Assets Survey round 8), lcfs_consumption (Living
//   Costs and Food Survey 2024-25), etb_vat and etb_services (Effects of
//   Taxes and Benefits), nts_bus_travel (National Travel Survey);
// - uc_take_up, pension_credit_take_up, child_benefit_take_up: DWP and HMRC
//   statistics "applied to PolicyEngine-UK pre-take-up" entitlement. People
//   who report a benefit in the FRS always claim it
//   (uk_runtime/frs_take_up.py, the "reported" anchors); only the others are
//   drawn, so that totals meet the published rates or caseloads.
// Imputation method: packages/microcosm-fit/README.md ("regime-gated,
// sequentially-chained quantile-regression-forest imputer"; "a random
// quantile is sampled per row (seeded)"). No target is by industry: no row
// of uk/target_references.json names a SIC code.
export const microcosmFlow = [
  {
    icon: IconUsers,
    owner: "FRS 2024–25",
    title: "Survey spine",
    text: "Households, incomes, job sectors",
  },
  {
    icon: IconReceiptTax,
    owner: "HMRC SPI 2022–23",
    title: "Tax-record incomes",
    text: "Copies of survey households take SPI incomes; extra copies above £200,000",
  },
  {
    icon: IconWallet,
    owner: "WAS, LCFS, ETB, NTS",
    title: "Wealth and spending",
    text: "Drawn from donor surveys",
  },
  {
    icon: IconHeartHandshake,
    owner: "DWP and HMRC",
    title: "Benefit take\u2011up",
    text: "Reported claims kept; others drawn to published rates",
  },
  {
    icon: IconScale,
    owner: "Official totals",
    title: "Calibrated weights",
    text: "Reweighted to match the totals",
  },
];

// Where the snake flow ends: the file the pipeline produces.
export const microcosmResult = {
  icon: IconDatabase,
  owner: "The result",
  title: "Microcosm UK 2024–\u206025",
  text: "The certified household file",
};

// Shown as a status tag beside the subtitle; the stage count (54, the
// certified build) is in the subtitle. The imputation method and the pinned
// files and seeded draws are in NOTES.md.
export const microcosmStatus: Tag = {
  label: "No industry targets; copies’ sectors imputed",
  tone: "caution",
};

// Calibration.
// Method (microcosm 429d7a0): packages/microcosm-calibrate/README.md and
// src/microcosm/calibrate/solve.py, relative_error_loss: "capped weighted
// MAPE on fixed row scales", scale max(|target|, 1), weights normalised by
// their sum; "optimizes log-weights with torch Adam"; max_weight_ratio is a
// hard bound, which the equation writes as w <= 10 w^0. UK national settings:
// uk_runtime/national_doctrine.py (1,500 epochs, learning rate 0.02, weight
// ratio cap 10, loss cap 10, seed 0, l0_lambda 0, target weight rule
// "family_equal"). The certified build's public diagnostics record the same
// settings.
// Fit (the certified build,
// microcosm-uk-2024-25-national-20261107T020434Z-eeb6093e): the public
// calibration dashboard, release "2024-25-national ·
// uk-frs-calibration-attempt-20261107T020434Z-eeb6093e", read 15 November
// 2026: 1,514 targets in 44 statistics (the dashboard's browsing groups, not
// the loss's families); 98.7% "within 10% of the target value"; 78.2K
// household records (the build prunes nothing, so no record has a weight of
// zero); by publisher HMRC 776, ONS 365, DWP 213, MHCLG 82 (so 78 from
// others). From the certified build's diagnostics: an effective sample size
// of about 7.2 thousand (9.2% of records); 38 target families in the loss,
// each 1/38 (about 2.6%) of the total weight, so a family with one target
// counts as much as the 360 regional SPI targets together; the saved weights
// are the best of the 1,500 steps (step 1,437); the cap of 10 times the
// starting weight is enforced after every step; total households are free
// to move with the targets; every target is at model year 2025, though the
// file is called 2024-25. The slide does not quote the solver's final
// objective: it depends on the family weights and the target set, so it is
// not comparable across releases. These are in-sample; the dashboard's
// validation and cross-dataset pages have no UK content, and the slide
// carries an "In-sample fit" tag.
// The repository's target file at 429d7a0 lists 1,710 national rows, more
// than the certified build's 1,514, so the slide quotes the build only.
export const calibrationEquation =
  String.raw`\min_{0<w\,\le\,10\,w^{0}}\ \sum_{j}\,\omega_j\,\min\!\left(\frac{\lvert a_j^{\top}w-t_j\rvert}{\max(\lvert t_j\rvert,\,1)},\ 10\right)`;

export const calibrationFit = {
  stats: [
    { icon: IconTargetArrow, value: "1,514", label: "targets; the dashboard browses them as 44 statistics" },
    { icon: IconCircleCheck, value: "98.7%", label: "of targets within 10% of the official figure" },
    { icon: IconUsers, value: "about 7.2k", label: "effective sample size (9.2% of records)" },
    { icon: IconHome, value: "78.2k", label: "household records" },
  ],
  publishers: [
    { name: "HMRC", count: 776, shade: "var(--pe-teal-dark)" },
    { name: "ONS", count: 365, shade: "var(--pe-teal)" },
    { name: "DWP", count: 213, shade: "color-mix(in srgb, var(--pe-teal) 55%, white)" },
    { name: "MHCLG", count: 82, shade: "var(--pe-amber)" },
    { name: "Others", count: 78, shade: "var(--color-gray-400)" },
  ],
  solver: ["38 target families, each 1/38 of the total weight", "Adam on log-weights; 1,500 steps, best kept"],
};

// Targets by publisher (calibrationFit.publishers): HMRC 776, ONS 365, DWP
// 213, MHCLG 82 and 78 from ten other publishers, read on 16 November 2026
// from the public calibration dashboard pinned to the certified build
// (source "dashboard"; the page's own data route, "family_fit"). The former
// slide "What the weights are fitted to" drew these as a map of publishers
// and statistics; it is cut, because the live dashboard on the next slide
// shows the same map. Its counts by statistic are in NOTES.md. Three
// groupings of the same 1,514 targets exist and are not the same thing: the
// dashboard's browsing view shows "44 statistics"; the solver's loss has 38
// target families, each with 1/38 of the weight; the dashboard's fit table
// has 41 publisher-and-statistic groups.

// Projects we have done: three slides with live or published work.
// - The Autumn Budget 2026 dashboard: what it models is the Autumn Budget
//   2026 deck's list (slideshows/autumn-budget-2026/content.ts,
//   measureSlides: measures on energy bills, income from assets, pensions,
//   fuel, carers and the self-employed) and its household calculator tab.
//   The view buttons are that deck's deep links.
// - The AI post (source "aiPost"), read 16 November 2026: see aiShock
//   above for its figures, channels and incidence scenarios.
// - The firm VAT working paper: the figure is paper/figures/
//   revenue_impact_2025_26.png at firm-microsim-paper e6d5dd6, panel (a) of
//   the paper's static threshold sweep ("Static effect of moving the VAT
//   registration threshold, 2025--26, relative to the £90,000 baseline"),
//   copied unchanged to public/images/bist-2026/. The two counts are the
//   "about 2.7 million" and "about 2.2 million" in NOTES.md.
export const budgetProject = {
  labels: [
    { icon: IconReceiptTax, title: "The Budget measures we model", text: "Energy bills, income from assets, pensions, fuel, carers, the self-employed" },
    { icon: IconHome, title: "A household calculator", text: "Enter any household" },
  ],
  views: [
    { label: "Public finances", query: "?tab=dashboard" },
    { label: "Policies", query: "?tab=policies" },
    { label: "Living standards", query: "?tab=dashboard&sub=living" },
    { label: "Household calculator", query: "?tab=household" },
  ],
};

// Beside the live post: what the study does, not its results. The headline
// figures (aiShock above) are for the presenter and are in NOTES.md; the
// post itself is the slide's focus.
export const aiProject = {
  tag: { label: "Microcosm UK, 2027–28", tone: "built" } as Tag,
  labels: [
    { icon: IconArrowsSplit, title: "Three channels", text: "Job losses, survivor wages, capital income" },
    { icon: IconUsers, title: "Five incidence scenarios", text: "By who bears the change" },
    { icon: IconDatabase, title: "Microcosm UK", text: "The 2027–28 tax year" },
    { icon: IconDice, title: "50 random draws", text: "Of who loses a job" },
  ],
};

// The former slide "Firm-level VAT microsimulation: costing threshold
// changes" (the paper's static threshold sweep, firm-vat-revenue-impact-
// 2025-26.png, and three labels: static costing, turnover responses, reforms
// costed) is cut: its figure was a headline result. Its content is in
// NOTES.md, and the fourth step of firmMethod below names what was costed.

// How the synthetic firms are built (firm-microsim-paper e6d5dd6).
// - Method: paper/Sections/data.tex. Official statistics publish firm counts
//   only in coarse turnover bands, so the paper builds "a synthetic firm
//   population calibrated to those aggregates", with "explicitly simulated
//   within-band records"; "approximately 2.94 million firm records per
//   vintage", "weighted to represent about 2.72 million frame enterprises in
//   2023-24, of which about 2.18 million are VAT-registered traders". "These
//   records are not estimates of the confidential firms."
// - Accuracy: results/calibration_accuracy.txt, vintage 2023-24, threshold
//   £85k, quoted exactly: HMRC turnover bands 100.0%, ONS population 99.7%,
//   employment bands 99.8%, sector distribution 93.3%, VAT liability by band
//   96.9%; overall 98.0% across the five calibrated dimensions; weighted
//   population 2,717,539 firms, of which 2,178,281 registered traders. The
//   paper headlines 98.0% (2023-24) and 98.1% (2024-25). Accuracy is
//   max(0, 1 - relative absolute error). The turnover-band rows hold by
//   construction. Two informational diagnostics are not calibration targets
//   and are in NOTES.md, not on the slide: VAT liability by sector 40.4% and
//   VAT liability below the threshold 31.2%.
// - Figure: paper/figures/vat_threshold_revenue_impact.png, the paper's
//   comparison with HMRC: "revenue impact of raising the VAT registration
//   threshold from £85,000 to £90,000 (the April 2024 change), my estimate
//   under the full-deregistration and 43% retention conventions versus
//   HMRC's published costing, 2024-25 to 2028-29". Copied unchanged to
//   public/images/bist-2026/.
export const firmMethod = {
  flow: [
    {
      icon: IconTable,
      owner: "ONS and HMRC",
      title: "Published tables",
      text: "Enterprises by turnover band, sector and employment; VAT traders by turnover band",
    },
    {
      icon: IconCopy,
      owner: "Simulated",
      title: "Firm records",
      text: "About 2.94 million records, drawn within each band",
    },
    {
      icon: IconScale,
      owner: "Calibrated",
      title: "Weights",
      text: "Fitted to five dimensions of the official totals",
    },
    {
      icon: IconReceiptTax,
      owner: "Costed",
      title: "Threshold changes",
      text: "Level and shape costed statically; turnover responses as sensitivity tests",
    },
  ],
  accuracy: {
    title: "Calibration accuracy, 2023–24",
    overall: { value: "98.0%", label: "overall, across the five calibrated dimensions" },
    rows: [
      { label: "HMRC turnover bands", value: "100.0%" },
      { label: "Employment bands", value: "99.8%" },
      { label: "ONS population", value: "99.7%" },
      { label: "VAT liability by band", value: "96.9%" },
      { label: "Sector distribution", value: "93.3%" },
    ],
    population: [
      { icon: IconBuildingFactory2, value: "2,717,539", label: "firms, weighted (ONS frame)" },
      { icon: IconReceiptTax, value: "2,178,281", label: "registered traders" },
    ],
  },
  image: {
    src: "/images/bist-2026/firm-vat-model-against-hmrc.png",
    width: 2728,
    height: 1774,
    alt: "Bar chart from the working paper: revenue impact in £ million of raising the VAT registration threshold from £85,000 to £90,000, 2024–25 to 2028–29, for HMRC's published costing and two model conventions.",
  },
  caption: "The April 2024 rise from £85,000 to £90,000: the model’s static estimates beside HMRC’s published costing",
};

// The trade study as a project (uk-trade-shock-study 06c8bbc, a working
// paper). The four episodes and the energy figures are tradeEvents and
// tradeEvents above. Figure (the same file at 06c8bbc and at PR #46, 778557c): paper/figures/fig_incidence_profile.png,
// "Household incidence by equivalised disposable income decile, as a share
// of each decile's total spending. All series are plotted as magnitudes on a
// log axis ... Costs are plotted as positive; the India CETA series is a
// gain"; the energy episode is shown on its realised path and as the gross
// counterfactual the Energy Price Guarantee displaced. Copied unchanged to
// public/images/bist-2026/. In the figure, "TCA food" is the post-Brexit
// food price episode and "India CETA" the UK-India agreement.
export const tradeProject = {
  image: {
    src: "/images/bist-2026/trade-incidence-by-decile.png",
    width: 1600,
    height: 860,
    alt: "Line chart from the working paper: burden or gain as a percentage of spending, on a log scale, by income decile, for the energy episode (realised and counterfactual), post-Brexit food prices and the UK–India agreement.",
  },
  caption: "Cost or gain by income decile, as a share of spending (log scale); the UK–India series is a gain",
};

// One way to link models, for discussion; nothing here is a commitment.
// What runs today: the trade study's code takes earnings changes by two-digit
// SIC division and applies them to survey employees (uk-trade-shock-study
// 06c8bbc, runner.py and apply_shocks; tariff_pipeline/exposure.py).
// A proposed interface for the model links. Not built: no reader for such a
// table exists. Keys follow what the model holds (policyengine-uk d3db7ac):
// sic_industry_division (two-digit SIC 2007 division); region (the ITL1
// regions); spending by COICOP division. Years: yoy_growth.yaml carries OBR
// forecasts to 2031. Existing outputs: the policyengine.py output classes
// listed under tariffDisaggregation above. Mean and SD across draws are
// computed in the studies' own code and are not a policyengine.py output, so
// they sit under "proposed" with the CSV format.
export const interfaceToday =
  "The trade study’s code applies earnings changes by two-digit SIC division to survey employees";

// Different kinds of model report different things, so the link takes
// whichever a model has (the "from" lines of tariffDisaggregation above). A
// CGE trade model of the GTAP kind reports output, employment and prices by
// sector and wages by labour type, under a stated closure (see epdTrace
// above); a trade model with one economy-wide wage gives that wage and
// prices; partial-equilibrium models of goods sectors give product prices.
// Prices carry as much as earnings: mapped to household spending by COICOP
// division, a price change for the average consumer becomes a distribution
// by income decile. The former interface slide's keys (ITL1 region, scenario
// and year to 2031) and possible additions (mean and SD across draws, CSV
// tables) are in NOTES.md.
