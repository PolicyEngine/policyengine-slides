// Content for the seminar with the Modelling Unit of the Department for
// Business, Innovation, Science and Trade (BIST), 19 November 2026.
//
// Every figure is pinned to a commit of its study, and every claim about
// the model or the data to a commit of the code; the comments below name
// them. policyengine.py bundle 6.20.1 (released 16 November 2026; national
// build of 15 November, policyengine-uk 2.177.7) certifies Microcosm UK
// 2024-25 for the UK, and 6.20.2 keeps the same pair; the data slides
// describe that build. The AI study's figures are the published post's, run
// on Microcosm UK for 2027-28 with policyengine 6.16.1; the trade study's
// are those of its rerun on Microcosm UK with policyengine 6.20.0 (PR #46,
// open, not merged). Both ran on the earlier certified build of 7 November
// (microcosm-uk-2024-25-national-20261107T020434Z-eeb6093e), which 6.16.1 to
// 6.20.0 pin; the notes say so.
//
// The talk has six parts: an introduction; what PolicyEngine is; what we
// have already; projects we have done; what could be explored; and possible
// next steps. The slide order is in
// config.ts and the part labels are "parts" below.
//
// Code claims were read on 15 November 2026 at: policyengine-uk d3db7ac,
// policyengine.py 810a59e, microcosm 429d7a0, uk-trade-shock-study 06c8bbc
// (its figures are now those of its PR #46, head d8e01f2, read 17 November;
// the earlier head 778557c, read 16 November, has the same figures),
// and firm-microsim-paper e6d5dd6. GOV.UK pages and the Microcosm
// calibration dashboard were read the same day; the AI post on 16 November.
//
// Two kinds of Microcosm number appear and are never mixed in one figure:
// - "the certified build": the national build of 15 November 2026 that
//   policyengine.py 6.20.1 and 6.20.2 pin (microcosm-uk-2024-25-national/
//   uk-frs-calibration-attempt-20261115T104657Z-fcfac709, built at microcosm
//   3a7067f), as the public calibration dashboard reports it, read 18
//   November 2026;
// - "the code": counts read from the repository at commit 429d7a0 (15
//   November), which is eight days newer than that build.

import {
  IconAffiliate,
  IconArrowBarUp,
  IconArrowsExchange,
  IconArrowsSplit,
  IconBasket,
  IconBolt,
  IconBriefcase,
  IconBuildingFactory2,
  IconBuilding,
  IconBuildingBank,
  IconCalendar,
  IconCalendarEvent,
  IconChartBar,
  IconChartLine,
  IconChartPie,
  IconCircleCheck,
  IconCircleDashed,
  IconCoins,
  IconCompass,
  IconCopy,
  IconCpu,
  IconDatabase,
  IconDice,
  IconFileText,
  IconFlag,
  IconFlame,
  IconGavel,
  IconHeartHandshake,
  IconHome,
  IconHourglass,
  IconListSearch,
  IconLock,
  IconLockOpen,
  IconMap,
  IconMap2,
  IconMapPin,
  IconMathFunction,
  IconMinus,
  IconPercentage,
  IconPinned,
  IconPresentationAnalytics,
  IconReceiptTax,
  IconRefresh,
  IconRobot,
  IconRocket,
  IconRoute,
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
  type Icon,
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
  // Ahmadi, V., Ghenis, M., Woodruff, N., Makarchuk, P. and Volk, A. (2026).
  // policyengine: A Microsimulation Tool for Tax-Benefit Policy Analysis.
  // Journal of Open Source Software, 11(125), 11115.
  joss: {
    label: "Ahmadi et al. (2026), Journal of Open Source Software",
    href: "https://doi.org/10.21105/joss.11115",
  },
  trade: {
    label: "Ahmadi (2026b), trade study",
    href: "https://github.com/PolicyEngine/uk-trade-shock-study/blob/d8e01f2/paper/main.pdf",
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
  // Crossref, DOI 10.1093/restud/rdu035, read 17 November 2026: Caliendo and
  // Parro, "Estimates of the Trade and Welfare Effects of NAFTA", The Review
  // of Economic Studies 82(1), 1-44 (2015). Cited as the kind of
  // quantitative trade model meant: many sectors, input-output links, one
  // wage per country. It has not been run with PolicyEngine.
  caliendoParro: {
    label: "Caliendo and Parro (2015)",
    href: "https://doi.org/10.1093/restud/rdu035",
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
  outputs: {
    label: "policyengine.py output classes",
    href: `https://github.com/PolicyEngine/policyengine.py/tree/${pythonCommit}/src/policyengine/outputs`,
  },
  areaDisclosure: {
    label: "Disclosure control for area results",
    href: `${pythonRepo}/src/policyengine/disclosure/__init__.py`,
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
  // The Axiom Foundation's site, embedded live on its own slide. It sends no
  // header that forbids framing (checked 17 November 2026).
  axiomSite: {
    label: "The Axiom Foundation, axiom.org",
    href: "https://axiom.org",
  },
  // The dashboard takes a "release" parameter, so the link is pinned to the
  // certified build of 15 November 2026 and keeps showing it after newer
  // releases become the dashboard's default. Read 18 November 2026.
  dashboard: {
    label: "Calibration dashboard, pinned to the 15 November build",
    href: "https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk&release=microcosm-uk-2024-25-national/uk-frs-calibration-attempt-20261115T104657Z-fcfac709",
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
  // "AI and the UK economy": provisional and not yet
  // published. A Vercel deployment of the uk-growth-with-ai project
  // (PolicyEngine team), public and frameable when read on 19 November
  // 2026; the project's production address still serves an older page.
  aiEconomy: {
    label: "AI and the UK economy, PolicyEngine (provisional)",
    href: "https://uk-growth-with-mjl646jhp-policy-engine.vercel.app",
  },
  firmHmrcFigure: {
    label: "Working paper figure and calibration report, commit e6d5dd6",
    href: "https://github.com/PolicyEngine/firm-microsim-paper/blob/e6d5dd6/results/calibration_accuracy.txt",
  },
  // The trade study's rerun on Microcosm UK: an open pull request.
  tradePr: {
    label: "Trade study, PR #46",
    href: "https://github.com/PolicyEngine/uk-trade-shock-study/pull/46",
  },
} satisfies Record<string, Source>;

export type Tone = "built" | "muted" | "caution";
export type Tag = { label: string; tone: Tone };

// Status tags. Teal: exists today. Grey: an idea to explore (not built), not yet
// modelled, restricted or outside the model. Amber: proposed, a working paper or illustrative; on the Axiom Foundation slides,
// also partly encoded, encoded with its checks paused, incomplete or a preview.
const tag = (label: string, tone: Tone): Tag => ({ label, tone });
export const tags = {
  notBuilt: tag("Idea to explore", "muted"),
  proposed: tag("Proposal", "caution"),
  workingPaper: tag("Working paper", "caution"),
  // Doability markers on the part 5 slides (see the verification notes in
  // NOTES.md): what the existing code takes, what needs a mapping between
  // another model's sectors and SIC or COICOP, and what needs a small change.
  inTradeCode: tag("In the trade study’s code", "built"),
  mapping: tag("Needs a sector mapping", "muted"),
  extension: tag("Small extension", "caution"),
  toBuild: tag("Not built yet", "muted"),
  inData: tag("In the data", "built"),
  notDeveloped: tag("Not developed yet", "muted"),
  // The Axiom Foundation slides (axiomRules and axiomToday below): "Encoded"
  // only where a RuleSpec module exists on rulespec-uk or rulespec-us main,
  // with companion tests that CI runs before a merge. A module on the public
  // waiver list (known-validation-gaps.yaml) has its checks paused: CI skips
  // it until the waiver expires. "Incomplete" is the word the Axiom
  // Foundation's own tariff page uses.
  encoded: tag("Encoded", "built"),
  partlyEncoded: tag("Partly encoded", "caution"),
  checksPaused: tag("Encoded, checks paused", "caution"),
  incomplete: tag("Incomplete, most checks paused", "caution"),
};

// The six parts of the talk: the part navigator along the top of each
// slide (its short labels), the divider slide before parts 2 to 6 and the
// agenda of the "In brief" slide (the full titles; no part carries a tag
// there, as no title does). Part 5 holds the ideas:
// no link to a trade, macroeconomic or agent-based model is built, and
// there are no published PolicyEngine results for the Economic Prosperity
// Deal or BICS (trade study 06c8bbc reports none for the deal schedule;
// PolicyEngine UK has no firm entity, see coverage and abmQuestions below).
// Its slides run as one argument: the general mechanism (tables in, tables
// out), then a trade application (the deal), a business application (BICS),
// three kinds of agent-based model that could supply firms' behaviour, and
// the longer-term routes to macroeconomic models. Part 6 assumes no
// collaboration: it offers two possible starting points, for discussion, if
// there is appetite (the part keeps the key "collaborate" in code only).
export const parts = [
  { key: "intro", icon: IconFlag, title: "Introduction", short: "Introduction", text: "Who we are." },
  {
    key: "what",
    icon: IconScale,
    title: "What PolicyEngine is",
    short: "What PolicyEngine is",
    text: "How a run works, how far results break down, the rules, the household data and its calibration.",
  },
  {
    key: "have",
    icon: IconStack2,
    title: "What we have already",
    short: "What we have",
    text: "What the UK model covers, what we can share, and the Axiom Foundation’s rules for firms.",
  },
  {
    key: "projects",
    icon: IconPresentationAnalytics,
    title: "Projects we have done",
    short: "Projects",
    text: "A dashboard for the Autumn Budget 2026, an analysis of the potential impact of AI adoption, a firm-level model that costs VAT reforms, and who pays in four UK trade episodes.",
  },
  {
    key: "explore",
    icon: IconCompass,
    title: "What could be explored",
    short: "Ideas to explore",
    text: "One way to link models, applied to trade and business policy, then agent-based and macroeconomic models.",
  },
  {
    key: "collaborate",
    icon: IconRoute,
    title: "Possible next steps",
    short: "Next steps",
    text: "Questions for discussion.",
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

// Layout: the three facts stacked on the left; on the right, two rows on
// one grid of equal cells, one organisation each, with a one-line caption
// under every mark. "height" is each mark's height in base units, inside a
// box 3.1 units tall (about 62px at 1920 wide); square marks (No 10, CPS,
// NIESR) are set lower than wide wordmarks so that all carry similar
// visual weight. The government captions name the record that mentions
// PolicyEngine; the think-tank captions are names only (the NiGEM link is
// in NOTES.md).
export const whoWeAre = {
  facts: [
    {
      icon: IconHeartHandshake,
      title: "Nonprofit",
      text: "Free tools; UK work funded mainly by Nuffield Foundation grants",
    },
    { icon: IconLockOpen, title: "Open source", text: "Rules, data pipeline and analysis code" },
    {
      icon: IconWorld,
      title: "UK and US models",
      text: "One Python package, policyengine.py",
      cite: { text: "Ahmadi et al., 2026, Journal of Open Source Software", source: sources.joss },
    },
  ],
  government: [
    {
      name: "10 Downing Street",
      logo: "/logos/orgs/10-downing-street.png",
      width: 1280,
      pixelHeight: 1280,
      height: 2.7,
      source: sources.no10,
      caption: "Built 10ds-microsim on it",
    },
    {
      name: "HM Treasury",
      height: 3.4,
      source: sources.hmt,
      caption: "Pilot evaluation",
    },
    {
      name: "Office for Budget Responsibility",
      logo: "/logos/orgs/office-for-budget-responsibility.png",
      width: 679,
      pixelHeight: 294,
      height: 2.9,
      darken: true,
      source: sources.obr,
      caption: "Engaged with, 2025–26",
    },
    {
      name: "House of Lords",
      logo: "/logos/orgs/house-of-lords.svg",
      width: 755,
      pixelHeight: 200,
      height: 2.2,
      source: sources.hansard,
      caption: "Cited in debate",
    },
  ] as Logo[],
  thinkTanks: [
    {
      name: "New Economics Foundation",
      logo: "/logos/orgs/new-economics-foundation.png",
      width: 567,
      pixelHeight: 241,
      height: 2.8,
      source: sources.nef,
      caption: "New Economics Foundation",
    },
    {
      name: "Good Growth Foundation",
      logo: "/logos/orgs/good-growth-foundation.png",
      width: 1500,
      pixelHeight: 413,
      height: 2.4,
      darken: true,
      caption: "Good Growth Foundation",
    },
    {
      name: "Centre for Policy Studies",
      logo: "/logos/orgs/centre-for-policy-studies.png",
      width: 223,
      pixelHeight: 223,
      height: 2.6,
      source: sources.cps,
      caption: "Centre for Policy Studies",
    },
    {
      name: "NIESR",
      logo: "/logos/orgs/niesr.png",
      width: 400,
      pixelHeight: 400,
      height: 2.7,
      source: sources.niesr,
      caption: "NIESR",
    },
    {
      name: "WPI Economics",
      logo: "/logos/orgs/wpi-economics.svg",
      width: 196,
      pixelHeight: 60,
      height: 2.6,
      caption: "WPI Economics",
    },
  ] as Logo[],
};

// Data: policyengine.py 6.20.1 (CHANGELOG, 16 November 2026) certifies the
// Microcosm UK 2024-25 national build of 15 November 2026 for
// policyengine-uk 2.177.7; 6.20.2 keeps the same pair.
// Spending by category is a model input (policyengine-uk d3db7ac,
// variables/input/consumption/); it sets VAT and duties. Income after taxes
// and benefits is the result. The "Input" and "Result" labels carry that
// message, with the slide's subtitle.
// One flow for what the model is and how a run works (the former "computes
// household incomes" and "how a reform or a scenario is run" slides, merged;
// the run's own sources are in the comment on "Mostly static by default" below). The step
// labels keep the message that spending is an input and income the result.
export const modelFlow = [
  {
    icon: IconScale,
    owner: "Input: policy",
    title: "The rules",
    text: "Taxes and benefits, coded from legislation",
  },
  {
    icon: IconUsers,
    owner: "Input: survey data",
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
    title: "Taxes on spending",
    items: ["VAT", "Fuel, alcohol and tobacco duties", "Stamp duty and council tax on property"],
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

// The trade study's four episodes (uk-trade-shock-study PR #46, d8e01f2,
// open, not merged; a working paper). Years and channels are the headings of
// paper/sections/episodes.tex: "Episode 1: the TCA border (2021--23),
// negative, price-led"; "Episode 2: the terms-of-trade shock (2022--23),
// negative, price-led, very large"; "Episode 3: the US tariffs (2025--26),
// negative, earnings-led"; "Episode 4: the India agreement (2026--),
// positive, price-led". Food: "Bakker et al. (2023) attribute roughly 8
// percentage points of the 25 per cent food price rise between December 2019
// and March 2023 to Brexit non-tariff barriers" (CEP Brexit Analysis No. 18).
// Energy: the Energy Price Guarantee and the Energy Bills Support Scheme
// (results.tex and appendix.tex). The slide shows no result of the study:
// the paper's incidence figure (fig_incidence_profile.png) is the same file
// at 06c8bbc and at PR #46, so it was not regenerated on Microcosm UK, and it
// is off the slide. The slide lists the US tariffs last, because the next
// slide is the same study's tariff episode in detail ("next").
export const tradeEvents = [
  {
    icon: IconBasket,
    years: "2021–\u206023",
    channel: "Prices",
    title: "Post-Brexit food prices",
    text: "The part Bakker et\u00a0al. (2023) attribute to trade barriers",
    next: false,
  },
  {
    icon: IconFlame,
    years: "2022–\u206023",
    channel: "Prices",
    title: "The 2022 energy price surge",
    text: "Largely offset by energy support",
    next: false,
  },
  {
    icon: IconArrowsExchange,
    years: "From 2026",
    channel: "Prices (a gain)",
    title: "The UK–India agreement",
    text: "Projected duty reductions; the same price path could serve other agreements",
    next: false,
  },
  {
    icon: IconShip,
    years: "2025–\u206026",
    channel: "Earnings",
    title: "The 2025 US tariffs",
    text: "From tariff rates to employees’ earnings",
    next: true,
  },
];

// The path every episode follows, under the four cards. PR #46, d8e01f2:
// each episode has a household stage on the certified Microcosm UK records
// (README; results.tex, "The second stage: household-level results";
// vintage_and_tca.py for food, second_stage_energy.py for energy,
// ceta_second_stage.py for the India agreement, tariff_pipeline/ for the
// tariffs). Price changes are set against each household's spending in the
// category; earnings changes against employees' earnings. The line does not
// say "through taxes and benefits": that holds for the tariff and energy
// episodes, not for the India duty reductions.
// The line is said aloud (NOTES.md, slide 22), not shown on the slide.
// Microcosm UK (said aloud on slides 22 and 23): the trade study's rerun
// (uk-trade-shock-study PR #46, d8e01f2, open, not merged; README and
// paper/sections/results.tex): every microsimulation runs on
// policyengine[uk] 6.20.0 (policyengine-uk 2.174.1) with the Microcosm UK
// 2024-25 build of 7 November 2026 that 6.20.0 certifies, not the 15
// November build that the data slides describe. The tariff stage runs under 2026-27 rules; the
// energy episode's main run uses 2023-24 rules, and 2022-23 rules only for a
// comparison.

// The earlier "about 60% (49-64%)" energy offset is dropped: it came from
// 06c8bbc on the enhanced FRS, and the rerun (PR #46, d8e01f2) reports a
// different measure (see NOTES.md).

// The Economic Prosperity Deal, end to end: from a trade or macroeconomic
// model's results for the deal to household and fiscal results. Not built,
// and no results. Every fact is one the deck already cites:
// - the deal: source "epd" above (operative 8 May 2025; a quota of 100,000
//   vehicles at a 10% tariff; a steel and aluminium quota subject to
//   supply-chain conditions). These facts are in NOTES.md, not on the slide;
// - "Deal schedule in our study": uk-trade-shock-study 06c8bbc has a deal
//   schedule and reports no results for it (see tariffBridge below);
// - static, no general equilibrium: see modelFlow and "Mostly static by default" below;
// - the feedback arrow is the macro-micro loop on the macro links slide,
//   which is not built (see macroLinks below).
// The standard GTAP model has one wage per labour type and its standard
// closure fixes aggregate employment, hence "wages by labour type" and
// "closure stated". A quantitative trade model in the style of Caliendo and
// Parro (2015) (multi-sector, with input-output links and one wage per
// country) gives one economy-wide wage, hence "or one wage".
export const epdTrace = {
  flow: [
    {
      icon: IconWorld,
      owner: "Trade or macro model",
      title: "Results for the deal",
      text: "Prices and jobs by sector; wages by labour type, or one wage; closure stated",
    },
    {
      icon: IconArrowsExchange,
      owner: "Agreed mapping",
      title: "Sector mapping",
      text: "Another model’s sectors and products to the SIC and COICOP codes in the data",
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
  },
};

// The mechanism inside the PolicyEngine step: which records receive each
// sector result. The breakdowns are the
// output classes in policyengine.py 810a59e, src/policyengine/outputs/:
// decile_impact.py and intra_decile_impact.py; poverty.py; inequality.py;
// program_statistics.py (the 14 programmes in UK_PROGRAMS, hence "taxes and
// benefits"); uk_geography_disclosure.py (region); constituency_impact.py
// and local_authority_impact.py (constituencies and local authorities come
// from the certified local-area file).
// Spending is held by COICOP division (policyengine-uk d3db7ac,
// variables/input/consumption/petrol_spending.py). No mapping from GTAP
// sectors exists in our code: the trade study assigns by two-digit SIC
// division of FRS employees (tariff_pipeline/exposure.py:174-230), read from
// sic_industry_division (policyengine-uk d3db7ac), and draws who loses a job
// at random over repeated draws (20 in the trade study's rerun, PR #46). Occupation comes
// from the survey's job record; a map from a trade model's labour types to
// occupations is part of the proposed interface and is not built.
// One economy-wide wage (a quantitative trade model of the Caliendo-Parro
// kind: multi-sector, input-output links, one wage per country) needs no
// sector or occupation mapping: the same earnings change in every SIC
// division is what apply_shocks already takes, hence "In the trade study’s code". Such a
// model reports a real wage; PolicyEngine needs the nominal wage and prices
// separately, or the real wage alone, so prices are not counted twice (said
// in NOTES.md). Sector output and trade flows, which these models also
// report, have no use in PolicyEngine and are not on the slide.
// The codes are already in the data (policyengine-uk d3db7ac; microcosm main
// 5499382): sic_industry_division, carried from the FRS, with the SPI
// copies taking theirs from an FRS adult of the same drawn occupation
// (stage spi_employment_shell); soc2020_major_group (FRS) and
// soc2020_sub_major_group (drawn from the APS, stage aps_occupation), with
// employment by occupation calibrated to ONS APS figures (the "Employment by
// occupation" row of targetTable; microcosm changelog 1490); household
// spending by COICOP division from the LCFS (variables/input/consumption/,
// e.g. food_and_non_alcoholic_beverages_consumption, transport_consumption;
// microcosm changelog 1278 and 1113). What is not built is the crosswalk
// from another model's sectors, products or labour types to these codes;
// hence "In the data" on the codes; that the crosswalk is the piece to build
// is said aloud (NOTES.md, slide 25), not shown on the slide.

type LinkRow = {
  icon: Icon;
  result: string;
  from: string;
  /** The code in Microcosm UK a result is mapped to. */
  key: string;
  /** Set where the code is already in the data. */
  keyTag?: Tag;
  assigned: string;
  tag: Tag;
};

export const tariffDisaggregation = {
  rows: [
    {
      icon: IconBriefcase,
      result: "Earnings and jobs by sector",
      from: "Agent-based model, or a CGE model that reports unemployment",
      key: "Two-digit SIC division",
      keyTag: tags.inData,
      assigned: "Wage changes; net job losses, where the model reports them, drawn at random",
      tag: tags.inTradeCode,
    },
    {
      icon: IconUser,
      result: "Wages by labour type",
      from: "CGE trade model of the GTAP kind",
      key: "Occupation group",
      keyTag: tags.inData,
      assigned: "Employees in those occupations",
      tag: tags.extension,
    },
    {
      icon: IconCoins,
      result: "One economy-wide wage",
      from: "Quantitative trade model of the Caliendo–Parro kind",
      key: "None: the same change in every sector",
      assigned: "All employees",
      tag: tags.inTradeCode,
    },
    {
      icon: IconShoppingCart,
      result: "Prices",
      from: "Partial-equilibrium, CGE and quantitative trade models",
      key: "COICOP spending division",
      keyTag: tags.inData,
      assigned: "Households, by what they spend",
      tag: tags.mapping,
    },
  ] as LinkRow[],
  breakdowns: [
    { icon: IconChartBar, title: "Income deciles" },
    { icon: IconChartPie, title: "Poverty and inequality" },
    { icon: IconReceiptTax, title: "Taxes and benefits" },
    { icon: IconMap, title: "Regions" },
    { icon: IconMapPin, title: "Constituencies and local authorities" },
  ],
};

// The trade study's US-tariff episode (formerly called "the tariff bridge";
// the symbol keeps that name): shock = elasticity × tariff × US export share by SIC
// division. Paper "Who pays for trade shocks?", uk-trade-shock-study PR #46,
// head d8e01f2 (17 November 2026, open, not merged), policyengine.py 6.20.0 on
// Microcosm UK. Headline as in the abstract: taxes and benefits offset
// EThreeWageTaxBenRatePct 39.0% (wage cuts) and EThreeDispTaxBenRatePct 34.1%
// (displacement, exact expectation over exposed workers) of the gross loss
// MsUSTariffGrossShockMillions £1,007m a year. Totals with the pension-
// contribution term are 41.8% and 37.0%; the 20-draw Bernoulli variant (32.1%,
// SD 3.3) is now a robustness check. These replace the 10dc18826 figures
// (41.8%, 32.1%) and the 06c8bbc ones (43.7%, 35.4%). Results are
// for the schedule before the Economic Prosperity Deal. The paper reports
// none for the deal schedule ("the Economic Prosperity Deal's own tariff
// changes ... are outside the design", episodes.tex); the code has an "epd"
// schedule (tariff_rates("epd"), analysis/build_measured_shocks.py at d8e01f2)
// but no published result, hence the tag "No published results for the UK–US deal".
// This slide is the second slide of the trade study: its title repeats the
// study's, and the trade slide's US tariffs card points here.
export const tariffBridge = {
  steps: [
    { icon: IconReceiptTax, title: "Tariff rates", text: "US rates before the UK–\u2060US deal of May 2025" },
    { icon: IconShip, title: "US export intensity", text: "By two-digit SIC division", dashed: true },
    { icon: IconMathFunction, title: "Export-demand elasticity", text: "Assumed 1, as a placeholder", dashed: true },
    { icon: IconCoins, title: "Earnings change by sector", text: "About £1.0bn a year", dashed: true },
    { icon: IconUsers, title: "Employees in Microcosm UK", text: "By sector" },
  ],
  replaceable: [1, 3] as [number, number],
  cushion: { wageCuts: "39.0%", jobLosses: "34.1%" },
};

// A non-tax business policy, with BICS as the example. Scheme facts: sources
// bicsGuidance and bicsIa above. Model precedents (policyengine-uk d3db7ac):
// parameters/gov/contrib/policyengine/employer_ni/*_incidence.yaml and
// budget/{consumer,corporate}_incident_tax_change.yaml allocate by
// consumption and by shareholding, booked as tax revenue; a non-tax cost
// change needs an extension, which is not built: hence one "Not developed
// yet" tag above the flow (the subtitle row carries no tags; a tag on each
// PolicyEngine step did not fit beside the step numbers). The three channels to
// households (prices, pay and jobs, profits) are the text of the third step.
export const businessPolicy = {
  status: "A possible extension of the business-tax allocation",
  flow: [
    {
      icon: IconBolt,
      owner: "Scheme design",
      title: "Electricity cost cut",
      text: "An estimated £35 to £40 per MWh for eligible firms, from 2027",
    },
    {
      icon: IconBuildingFactory2,
      owner: "Outside PolicyEngine",
      title: "How firms pass it on",
      text: "To prices, pay or profits: another model, or an assumption",
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
// has been run this way, so the card is tagged "Idea to explore", as the loop is.
export const macroLinks = [
  {
    icon: IconTrendingUp,
    title: "A forecast scenario",
    tags: [],
    from: "Macro model",
    to: "PolicyEngine",
    twoWay: false,
    text: "Its earnings and price paths could replace the OBR’s.",
    source: sources.growth,
  },
  {
    icon: IconRefresh,
    title: "A macro–⁠micro loop",
    tags: [],
    from: "Macro model",
    to: "PolicyEngine",
    twoWay: true,
    text: "NIESR passed results between NiGEM and PolicyEngine UK once; iterating until the two agree is the idea.",
    source: sources.niesr,
  },
  {
    icon: IconHourglass,
    title: "OG-UK",
    tags: [{ label: "Open source", tone: "built" } as Tag],
    from: "PolicyEngine",
    to: "OG-UK",
    twoWay: false,
    text: "Overlapping generations, over a 60-year transition.",
    source: sources.ogUk,
  },
];

// Three kinds of agent-based model, and what each could pass in. None is
// built or run, and none is named: the rows describe kinds of model. Row 1,
// a supply-chain network model, leads ("First candidate"): its result, job
// and earnings losses by sector, is what the existing code takes. Row 2, a
// business-investment model with expectations and uncertainty at its core,
// gives paths of investment, output and hiring by sector; PolicyEngine takes
// the jobs and earnings, one year at a time. Where such a model also reports
// profits, PolicyEngine could allocate an economy-wide change by
// shareholding; that allocation exists for business taxes and is booked as
// tax, so a profit change needs an extension (NOTES.md, not the slide).
// Row 3 is the class of model of Dosi, Fagiolo and Roventini (2010) (source
// above), which is not about AI. Each row says what the agent-based model
// would pass in; what PolicyEngine returns is the same for all three
// (abmReturns). The former BICS row (firms choosing between prices, pay and
// profit) is in NOTES.md: BICS has its own slide.
export const abmQuestions = [
  {
    icon: IconAffiliate,
    model: "A supply-chain network model",
    detail: "A disruption to one product, passed along the firm network",
    behaviour: "Suppliers and buyers lose inputs, cut output and jobs",
    passes: "Job and earnings losses by sector",
    lead: true,
  },
  {
    icon: IconChartLine,
    model: "A business\u2011investment model",
    detail: "Expectations and uncertainty at its core",
    behaviour: "Firms’ investment, output and hiring paths by sector",
    passes: "Jobs and earnings by sector, one year at a time",
    lead: false,
  },
  {
    icon: IconRocket,
    model: "An endogenous\u2011growth model",
    detail: "In the style of Dosi, Fagiolo and Roventini (2010)",
    behaviour: "Firms adopt technology, enter and exit over the cycle",
    passes: "Paths of jobs and wages by sector, one year at a time",
    lead: false,
  },
];

// Every input on the slide carries "Not developed yet": the link from an
// agent-based model is not developed. Doability of each input, checked on 16 November 2026 against
// uk-trade-shock-study PR #46 (d8e01f2), tariff_pipeline/shocks.py and
// runner.py: apply_shocks takes persons with employment_income, sic_division,
// age and weight, and applies wage cuts or job losses by two-digit SIC
// division; region is reported (runner.py, region_income_change) but is not
// an input, so losses by sector and region would be a small extension.
// Prices (the former BICS row, now in NOTES.md): policyengine-uk holds
// spending by category (variables/input/consumption/), and the trade study
// applies price changes to food and energy spending
// (uk_trade_shock_study/incidence.py); mapping an agent-based model's sectors
// to those categories is the work. Profits by sector cannot be taken: the
// model allocates an economy-wide change by shareholding and has no link from
// a sector's profits to its owners, so profits are off the slide. Paths:
// each year is a separate run.

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
    text: "Rules, data pipeline and analysis code are all open source.",
  },
  {
    icon: IconLock,
    tag: { label: "Restricted", tone: "muted" } as Tag,
    title: "Household microdata",
    text: "Licensed survey records. We share aggregate results as tables, never records.",
  },
  {
    icon: IconBuildingFactory2,
    tag: tags.workingPaper,
    title: "Synthetic firms",
    text: "For VAT costing; drawn from published tables, so they can be shared.",
  },
];

// The Axiom Foundation's rules as code (slides 15 and 16). The Axiom
// Foundation is not PolicyEngine: it publishes open, machine-readable
// encodings of the world's rules, starting with tax and benefit policy (the
// descriptor on axiom.org/about). Max Ghenis is CEO of both the Axiom
// Foundation and PolicyEngine, which he co-founded (axiom.org/about, read 16
// November 2026). Read on 16 November 2026 at rulespec-uk 3e07aef (main) and
// rulespec-us 8231711 (main):
// - VAT: uk/statutes/ukpga/1994/23/ 2.yaml (standard rate 0.20 from
//   2011-01-04), 24.yaml (output tax on standard-rated taxable supplies and
//   input tax on standard-rated business purchases, Firm), 25.yaml (net
//   liability: output tax less allowable input tax, Firm), 26.yaml (allowable
//   input tax; the allowable proportion is an input, Firm), 29A.yaml (reduced
//   rate 0.05, on a Payment entity; 24 and 25 do not import it). Each has a
//   .test.yaml. No module for the registration threshold, zero rating,
//   exemption or partial exemption (no other 1994/23 path), hence "Partly
//   encoded".
// - Employer NI: uk/statutes/ukpga/1992/4/9.yaml (secondary percentage 0.15
//   from 2025-04-06; the Employer charge above the secondary threshold);
//   thresholds in uk/regulations/uksi/2001/1004/10.yaml. The module reads the
//   conditions of ss.9A and 9B (under-21s, apprentices) as inputs; their
//   encoding is queued (rulespec-uk#479, open). No module for the employment
//   allowance (no National Insurance Contributions Act 2014 path), hence
//   "Partly encoded".
// - Minimum wage: uk/regulations/uksi/2015/621/4.yaml (12.71 from
//   2026-04-01) and 4A.yaml (10.85, 8.00 and the apprenticeship rate 8.00;
//   apprenticeship_rate_applies is an input). Regulation 5 (who qualifies for
//   the apprentice rate) is queued (rulespec-uk#495, open).
// - Small-company test: uk/statutes/ukpga/2006/46/382.yaml (13 rules, 9 on
//   Firm; versions from 2016-01-01 and 2025-04-06). known-validation-gaps.yaml
//   holds an active waiver for it (rulespec-uk#137, expires 2027-01-03): its
//   source-grounding check fails on the factor 1000000 that converts the
//   statute's "£15 million" to pounds, which the statute's text does not
//   state. CI skips its checks: "Encoded, checks paused".
// - Data protection: uk/statutes/ukpga/2018/12/157.yaml (higher maximum
//   17,500,000 from 2020-12-31, or 0.04 of total annual worldwide turnover,
//   whichever is greater, for an undertaking).
// - US tariffs: rulespec-us us/policies/usitc/us-tariff-duty/lines/generated/
//   (100 chapter tables, "generator b1.2-tables-3" from USITC snapshot
//   2026HTSRev15, GENERATED-MANIFEST.json). Their general disposition tables
//   list 13,790 lines, the count axiom.org/tariff/schedule gives; 12,042 carry
//   a rate (6,247 ad valorem, 5,795 free), and the specific, compound,
//   conditional, component and empty lines carry none. .../overlays/ holds
//   166 Chapter 99 modules: 86 IEEPA, 69 Section 301, 3 China Section 301, 5
//   Section 232 steel and aluminium and 3 Section 122. 296 of the 380 modules under
//   us/policies/usitc and us/policies/cbp, including all 100 chapter tables,
//   carry an active validation waiver. axiom.org/tariff/schedule: "Coverage
//   status: incomplete and not certified"; it lists the Section 232 auto,
//   copper, semiconductor, vehicle and wood annexes as not encoded. The counts
//   are in NOTES.md and README.md, not on the slide.
// The law line: every rule in the ten UK modules names its provision in a
// source field, and 35 of the 39 quote it (e.g. 25.yaml, "deduct that amount
// from any output tax that is due from him"); each section's page on
// axiom.org shows the text beside it.
export const axiomRules = [
  {
    icon: IconReceiptTax,
    tag: tags.partlyEncoded,
    title: "VAT liability",
    text: "Output tax less input tax on a firm’s standard-rated sales and purchases, at 20%",
    law: "VAT Act 1994 ss.2, 24–26, 29A",
  },
  {
    icon: IconBriefcase,
    tag: tags.partlyEncoded,
    title: "Employer NI",
    text: "The 15% rate on pay above the secondary threshold",
    law: "SSCBA 1992 s.9",
  },
  {
    icon: IconCoins,
    tag: tags.encoded,
    title: "Minimum wage",
    text: "£12.71 an hour from April 2026, and the rates by age and for apprentices",
    law: "NMW Regulations 2015 regs 4, 4A",
  },
  {
    icon: IconBuildingFactory2,
    tag: tags.checksPaused,
    title: "Small-company test",
    text: "Turnover, balance sheet and employee thresholds, before and after April 2025",
    law: "Companies Act 2006 s.382",
  },
  {
    icon: IconGavel,
    tag: tags.encoded,
    title: "Data-protection fines",
    text: "Up to £17.5m or 4% of worldwide turnover, whichever is greater",
    law: "Data Protection Act 2018 s.157",
  },
  {
    icon: IconShip,
    tag: tags.incomplete,
    title: "US tariff schedule",
    text: "Ad valorem and free rates by tariff line, and some Chapter 99 duties",
    law: "Harmonized Tariff Schedule of the United States",
  },
];

// The relationship (axiom.org/about) is in NOTES for the presenter, not on the slide.

// What exists today and how a model could call it (slide 16). Same commits
// as axiomRules, read 16 November 2026. The cards give examples.
// - Encoded: the five UK modules above, with the status each carries there;
//   SSCBA 1992 s.166 (statutory maternity pay's earnings-related rate) and
//   s.171ZA (statutory paternity pay entitlement conditions, no amount),
//   Person entity; Hydrocarbon Oil Duties Act 1979 s.6
//   (uk/statutes/ukpga/1979/5/6.yaml, fuel duty rates as printed in s.6(1A),
//   versions dated 0001-01-01).
// - Legal text, no encoding: axiom.org serves the text with no encoding for
//   VAT Act 1994 s.1 (axiom.org/uk/statute/ukpga/1994/23/1; no 1994/23/1.yaml)
//   and 29 USC 206, the US minimum wage (axiom.org/us/statute/29/206). The
//   corpus's Capital Allowances Act 2001 s.1 and ITTOIA 2005 sections are
//   left off: axiom.org renders no text for them.
// - Not encoded: no rulespec-uk module, pull request or issue for corporation
//   tax (CTA 2009, 2010), capital allowances (CAA 2001), R&D relief, UK
//   customs duty (Taxation (Cross-border Trade) Act 2018), the employment
//   allowance (NICA 2014), the apprenticeship levy (FA 2016 Part 6) or
//   statutory sick pay. Business rates bills are not encoded either: the one
//   module, uk/policies/govuk/business-rates.yaml (Household), multiplies a
//   household's shareholding by total business rates revenue, both inputs,
//   and its summary says it "does not compute an individual ratepayer's
//   bill".
export const axiomToday = [
  {
    icon: IconCircleCheck,
    title: "Encoded",
    items: [
      "The five UK rules on the previous slide, as tagged there",
      "Statutory maternity pay’s 90% rate, and who qualifies for paternity pay",
      "Fuel duty’s statutory rates (not the 5p temporary cut)",
    ],
  },
  {
    icon: IconFileText,
    title: "Legal text, no encoding",
    items: ["VAT Act 1994 s.1, the charge to VAT", "US minimum wage, 29 USC 206"],
  },
  {
    icon: IconCircleDashed,
    title: "Not encoded",
    items: [
      "Corporation tax",
      "Capital allowances and R&D relief",
      "UK customs duty",
      "Business rates bills",
      "Employment allowance, apprenticeship levy, statutory sick pay",
    ],
  },
];

// How a model could call the rules today (the row under the cards):
// - Axiom Rules Engine: axiom-rules-engine 82cf3aa, README ("Rust runtime and
//   Python bindings for executing Axiom RuleSpec"; compiles from a checkout
//   named rulespec-<country>), LICENSE (MIT). rulespec-uk 3e07aef
//   .github/workflows/repository-checks.yml runs the shared validate-rulespec
//   workflow with axiom-rules-engine-ref 05eac9d2, so CI runs the UK modules'
//   companion tests on the engine, except for modules under an active
//   validate_failures waiver (s.382 among them; run 43820721836 skipped 18).
//   Releases v0.1.1 to v0.2.2 on GitHub; not
//   on PyPI (pypi.org returned 404 on 16 November 2026).
// - Hosted API: api.axiom.org/docs (200): search rules, get rule, rule
//   sources and dependencies, calculation; self-serve trial keys that expire
//   in 14 days. GET /v1/ready on 16 November 2026: "5571 indexed RuleSpec
//   files", "6 compiled packages configured". The docs list them: SNAP for
//   Arizona, California, Colorado and New York, the Canada Workers Benefit
//   and Belgian worker income tax. None is UK. The docs also describe
//   root-addressed calculation, which compiles an encoded module on request;
//   we have not tested it on a UK module. axiom-mcp's README says the API is
//   "open for evaluation", with interfaces that "may change before general
//   availability".
// - MCP server: axiom-mcp cec0d35, README "Status: developer preview.";
//   npm @axiom-foundation/mcp 0.3.0; every call goes through the hosted API.
export const axiomAccess = [
  {
    icon: IconCpu,
    tag: { label: "Open source", tone: "built" } as Tag,
    title: "Axiom Rules Engine",
    text: "Rust, with Python bindings. Runs encoded rules, UK ones included.",
  },
  {
    icon: IconWorld,
    tag: { label: "Trial access", tone: "caution" } as Tag,
    title: "Hosted API",
    text: "Search rules and read their sources. None of its ready-made calculations is UK.",
  },
  {
    icon: IconRobot,
    tag: { label: "Developer preview", tone: "caution" } as Tag,
    title: "MCP server",
    text: "Lets an AI assistant search and run rules through the API, over the Model Context Protocol.",
  },
];

// One geography line (research-geo.md, candidate A, scoped to the site).
// axiom.org/coverage, read 16 November 2026, shows encodings for Belgium,
// Canada, Israel, New Zealand, the UK and the US (Denmark appears with
// documents only). Never "covers": Israel's README calls its content "a
// pilot, not coverage".
// The line is said aloud (NOTES.md, slide 16), not shown on the slide.

// Two possible starting points, for discussion if there is appetite; no
// collaboration is assumed. Neither has published results: the trade study
// reports none for the deal schedule and nothing exists on BICS. "Starting
// point" rows name existing work: the trade study's US-tariff episode (06c8bbc)
// and its UK–India duty reductions, a price change traced to households by
// decile (tradeEvents above), and the business-tax allocation parameters (see
// businessPolicy above). Prices lead the trade model's row: they carry as
// much as jobs (see the comment at the end of this file).
export const pilots = [
  {
    icon: IconShip,
    title: "The UK–US Economic Prosperity Deal",
    rows: [
      {
        icon: IconWorld,
        label: "A trade model could provide",
        text: "Prices and jobs by sector; wages by labour type, or one wage",
      },
      {
        icon: IconHome,
        label: "PolicyEngine could provide",
        text: "Sector mapping; incomes, poverty, Exchequer cost",
      },
      {
        icon: IconFlag,
        label: "A starting point",
        text: "The trade study’s US-tariff and UK–\u2060India episodes",
      },
    ],
  },
  {
    icon: IconBolt,
    title: "The British Industrial Competitiveness Scheme",
    rows: [
      {
        icon: IconBuildingFactory2,
        label: "A firm or sector model could provide",
        text: "Cost change by sector; its split to prices, pay and profits",
      },
      {
        icon: IconHome,
        label: "PolicyEngine could provide",
        text: "Allocation to households; fiscal effects",
      },
      {
        icon: IconFlag,
        label: "A starting point",
        text: "Our business-tax allocation, extended to cost changes",
      },
    ],
  },
];

// Six questions. The first asks whether there is appetite at all, and on
// which question (it replaces "Which pilot first"). The second and third
// follow from what different kinds of model report (tariffDisaggregation
// above); tariff revenue and returns to capital as further channels are in
// NOTES.md.
export const questions = [
  { icon: IconTargetArrow, text: "Is there appetite to explore a link, and on which question?" },
  { icon: IconWorld, text: "Which model would supply the scenario, and under which closure?" },
  { icon: IconCalendar, text: "How should a long-run result map to fiscal years?" },
  { icon: IconArrowsSplit, text: "Where should the prices, pay and profits split come from?" },
  { icon: IconBuildingFactory2, text: "Which firm behaviour needs an agent-based model, and what does it report?" },
  { icon: IconHome, text: "Which household results matter most: income groups, geography or both?" },
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
// 2.177.7. Entities: entities.py (Household, BenUnit, Person).
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
// Said aloud (NOTES.md, slide 5), not shown as a tag. The reform example
// (gov.hmrc.income_tax.rates.uk[0].rate: 0.21) and what comes from outside
// the model (firms' decisions, general equilibrium) are in NOTES.md.

// How far results break down (slide 6, after how a run works). Every item is
// an output of policyengine.py 810a59e or a variable of policyengine-uk
// d3db7ac; what needs custom analysis says so.
// - By income: tax_benefit_models/uk/analysis.py (economic_impact_analysis)
//   returns income deciles and wealth deciles (household_wealth_decile).
//   The default income decile ranks households by household_net_income with
//   survey weights times household size (outputs/decile_impact.py); the
//   model's own deciles of equivalised HBAI income, before and after housing
//   costs (household_income_decile, household_income_decile_ahc), can be
//   passed as the grouping variable. Shares gaining and losing: outputs/
//   intra_decile_impact.py, five bands (lose more than 5%, lose less, no
//   change within 0.1%, gain less than 5%, gain more). Inequality:
//   outputs/inequality.py, calculate_uk_inequality on
//   equiv_hbai_household_net_income: Gini, top 10% and top 1% shares, bottom
//   50% share.
// - By people: outputs/poverty.py, four UK measures (absolute and relative,
//   before and after housing costs: in_poverty_bhc, in_poverty_ahc,
//   in_relative_poverty_bhc, in_relative_poverty_ahc);
//   calculate_uk_poverty_by_age (under 18, 18 to 64, 65 and over) and
//   calculate_uk_poverty_by_gender. Household type, tenure and number of
//   children are model variables (family_type, deprecated, on the benefit
//   unit; tenure_type; num_children), not outputs: a breakdown by them is
//   custom analysis, for example with the outputs' filter_variable.
// - By programme: UK_PROGRAMS in analysis.py, 14 rows (income tax, National
//   Insurance, VAT, council tax, fuel duty, employer NI; Universal Credit,
//   Child Benefit, Pension Credit, Income Support, tax credits and their two
//   parts, the State Pension). The net Exchequer cost is the change in the
//   model's government balance, as on the run slide.
// - By place: outputs/uk_geography_disclosure.py, levels national, region,
//   constituency and local_authority. Regions: the nine English regions and
//   three nations (ITL1), in the national file. Constituencies: 650
//   (data/uk_geography/constituencies_2024.csv, 2024 boundaries); local
//   authorities: 361 (local_authorities_2023.csv). The bundle routes both to
//   the separate local-area file (data/bundle/manifest.json,
//   regional_release_kind "local_area"). Bundle 6.20.1 certifies that cut,
//   uk-local-candidate-f100-s42-20261116T102715Z-e2745e59 (hub commit
//   4c594d72), alongside the national build (policyengine.py CHANGELOG,
//   6.20.1 entry), so the slide shows no "Experimental" tag. The older constituency_impact.py and
//   local_authority_impact.py outputs are deprecated because they have no
//   disclosure control.
// - The foot: disclosure control under the UK Data Service licence, with
//   a stricter floor in policyengine.py (disclosure/schema.py,
//   DisclosureSettings, unchanged at 6.20.2: min_sources 10, a dominance
//   rule, 90% intervals by default). The licence's own minimum is lower. Sector-by-region
//   cells have fewer records still (see the linking slide).
export type Breakdown = { text: string; tag?: Tag };

export const breakdowns: { icon: Icon; title: string; items: Breakdown[] }[] = [
  {
    icon: IconChartBar,
    title: "By income",
    items: [
      { text: "Income and wealth deciles: the average change" },
      { text: "Shares gaining and losing, in five bands" },
      { text: "Gini; top 10%, top 1% and bottom 50% shares" },
    ],
  },
  {
    icon: IconUsers,
    title: "By people",
    items: [
      { text: "Poverty before and after housing costs, absolute and relative" },
      { text: "For children, ages 18–64 and 65 and over, and by sex" },
      { text: "Household type, tenure, number of children", tag: { label: "Custom analysis", tone: "muted" } },
    ],
  },
  {
    icon: IconReceiptTax,
    title: "By programme",
    items: [
      { text: "Income tax, NI, VAT, council tax, fuel duty" },
      { text: "Universal Credit, legacy benefits, Child Benefit, Pension Credit, State Pension" },
      { text: "Net cost to the Exchequer" },
    ],
  },
  {
    icon: IconMap,
    title: "By geography",
    items: [
      { text: "The UK, and its 12 regions and nations (ITL1)" },
      { text: "650 parliamentary constituencies" },
      { text: "361 local authorities" },
      { text: "Published where 10+ survey households lie behind each number, with intervals" },
    ],
  },
];

// Thin cells: area results are published only with at least 10 survey
// households behind each number; this is said aloud (NOTES.md, slide 6).

// Microcosm UK 2024-25: what the pipeline builds.
// The slide describes the certified file. Its build
// (uk-frs-calibration-attempt-20261115T104657Z-fcfac709) ran at microcosm
// 3a7067f (the dashboard's git_commit for the release), which declares 56
// source stages: the 54 of the 7 November build (dc00d158f) plus
// uc_limited_capability and pip_points. Code at 429d7a0 also declares 56
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
    title: "Survey base",
    text: "Households, incomes and job sectors",
  },
  {
    icon: IconReceiptTax,
    owner: "HMRC SPI 2022–23",
    title: "Tax-record incomes",
    text: "FRS copies take SPI incomes; more above £200k",
  },
  {
    icon: IconWallet,
    owner: "Donor surveys",
    title: "Wealth and spending",
    text: "From WAS, LCFS, ETB and NTS",
  },
  {
    icon: IconHeartHandshake,
    owner: "DWP and HMRC",
    title: "Benefit take\u2011up",
    text: "Reported claims kept; others drawn to official rates",
  },
  {
    icon: IconScale,
    owner: "Official totals",
    title: "Calibrated weights",
    text: "Fitted to 1,534 official figures",
  },
];

// Where the row of steps ends: the file the pipeline produces.
export const microcosmResult = {
  icon: IconDatabase,
  owner: "The result",
  title: "Microcosm UK 2024–\u206025",
  text: "Certified in policyengine.py 6.20.1",
};

// The stage count (56, the certified build) is in the subtitle. No target
// is by industry, and the SPI copies' sectors are imputed: both are in
// NOTES.md, for questions, with the imputation method and the pinned files
// and seeded draws.

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
// uk-frs-calibration-attempt-20261115T104657Z-fcfac709): the public
// calibration dashboard's data route for that release (/calibration/
// dashboard/api/microcosm?country=uk&release=...), read 18 November 2026:
// 1,534 targets; fraction_within_10pct 0.9876 (98.8%); 78,164 household
// records (n_nonzero equals n_records, so no record has a weight of zero);
// by publisher HMRC 776, ONS 365, DWP 233, MHCLG 82 (so 78 from others); an
// effective sample size of about 7.4 thousand (7,380, 9.4% of records); the
// loss weights' maximum is 1/39, so 39 target families, each 1/39 (about
// 2.6%) of the total weight, and a family with one target counts as much as
// the 360 regional SPI targets together; the saved weights are the best of
// the 1,500 steps (selected_epoch 1,491); max_weight_ratio 10; learning rate
// 0.02, seed 0. Every target is at model year 2025, though the file is called
// 2024-25. Against the 7 November build (1,514 targets, 98.7%, 78,181
// records, 38 families, best step 1,437, ESS 7.2 thousand) the only target
// changes are 17 new DWP Personal Independence Payment targets (England and
// Wales, all within 10%) and three more Universal Credit targets (106, 103
// within 10%). The slide does not quote the solver's final objective: it
// depends on the family weights and the target set, so it is not comparable
// across releases. These are in-sample; the dashboard's validation and
// cross-dataset pages have no UK content, and the slide carries an
// "In-sample fit" tag.
export const calibrationEquation =
  String.raw`\min_{0<w\,\le\,10\,w^{0}}\ \sum_{j}\,\omega_j\,\min\!\left(\frac{\lvert a_j^{\top}w-t_j\rvert}{\max(\lvert t_j\rvert,\,1)},\ 10\right)`;

export const calibrationFit = {
  stats: [
    { icon: IconTargetArrow, value: "1,534", label: "official targets" },
    { icon: IconCircleCheck, value: "98.8%", label: "of targets within 10% after calibration (in-sample)" },
    { icon: IconHome, value: "78.2k", label: "household records, incl. copies with tax-record incomes" },
    // Before calibration: the starting weights, which already include the
    // SPI copies (not the raw FRS). The dashboard's target list for the
    // release (initial_relative_error), read 18 November 2026: 675 of 1,534
    // within 10% (44.0%); Universal Credit 18 of 106 (17%), Pension Credit
    // 1 of 13 (8%), PIP 3 of 17 (18%); after: 103, 13 and 17.
    { icon: IconScale, value: "44%", label: "of targets within 10% before calibration (starting weights, incl. SPI copies)" },
  ],
  solver: [
    "39 target families, each 1/39 of the total weight",
    "Adam on log-weights; 1,500 steps, best kept",
    "Before → after: UC 17% → 97%, Pension Credit 8% → 100%, PIP 18% → 100%",
  ],
};

// The effective sample size of the certified build, about 7.4 thousand
// (9.4% of records), is in NOTES.md: a rough guide for averages that varies
// by statistic. The targets by publisher are the table on the next slide.

// What the weights are fitted to: the 1,534 targets of the certified build
// as a table, one row per topic. Counts and the number within 10% of the
// official figure are the "family_fit" rows of the dashboard's data route
// for the pinned release (source "dashboard"; /api/microcosm?release=...),
// read on 18 November 2026: 42 publisher-and-statistic groups. "Where it
// binds" is the geography of each target in the same release, from the
// dashboard's target list (/api/microcosm/target-diagnostics?release=...,
// all 1,534 targets). "Nations" are Wales, Scotland and Northern Ireland
// (England too where it has its own target); "English regions" are the nine
// regions of England. Rows group statistics within one publisher block, so
// the publisher totals can be read off the table:
// - HMRC 776 (761 within 10%): Survey of Personal Incomes 568 (553; 208 UK,
//   30 each for Wales, Scotland and Northern Ireland, 270 regional); capital
//   gains tax 105 (105) and income tax liabilities 84 (84), both UK, nations
//   and regions; and six UK-level groups with 19 (19): Child Benefit 5,
//   benefits in kind 5, salary sacrifice 3 + 2 + 2, Tax-Free Childcare 2.
// - ONS 365 (365): population 179 (by age and sex; UK, England, Wales,
//   Scotland, Northern Ireland, regions), employment 159 (by occupation; UK,
//   nations, regions), household composition 22 (UK, nations, regions; it
//   includes three household counts published by NRS, NISRA and the Welsh
//   Government), land values 3 and consumer trends 2 (UK).
// - DWP 233 (230): Universal Credit 106 (103; Great Britain, one Scotland
//   target); State Pension 57 and Pension Credit 13 (Great Britain, Wales,
//   Scotland, regions); Personal Independence Payment 17 (17; England and
//   Wales, by component, award level and age), two-child limit 15, benefit
//   cap 14, legacy benefits 8, Attendance Allowance 2 (England, Wales) and
//   workplace pensions 1.
// - MHCLG 82 (82): council tax dwelling stock by band, England and its
//   regions.
// - Ten other publishers 78 (77): OBR 16 (UK, Great Britain, England and
//   Wales); Student Loans Company 12 (11), Department for Education 8 and the
//   Independent Schools Council 1 (England, Wales, UK); Welsh Government 11,
//   Scottish Government 12, Department for Transport 13 and three Northern
//   Ireland bodies 5 (council tax stock in Wales and Scotland, buses and
//   public transport, Northern Ireland pensions, Scottish Child Payment).
// Within 10%: 761 + 365 + 230 + 82 + 77 = 1,515 of 1,534, the dashboard's
// 98.8%. The 19 misses: 15 SPI, 3 Universal Credit, 1 student support. The component adds the rows up for the total row.
export type TargetRow = {
  /** The publisher's icon: one per publisher group. */
  icon: Icon;
  topic: string;
  binds: string;
  source: string;
  count: number;
  /** Targets the fitted weights reproduce within 10% of the official figure. */
  within: number;
};

export const targetTable: TargetRow[] = [
  { icon: IconCoins, topic: "Incomes by band (Survey of Personal Incomes)", binds: "UK, nations, English regions", source: "HMRC", count: 568, within: 553 },
  { icon: IconCoins, topic: "Capital gains and income tax liabilities", binds: "UK, nations, English regions", source: "HMRC", count: 189, within: 189 },
  { icon: IconCoins, topic: "Child Benefit, salary sacrifice, other tax totals", binds: "UK", source: "HMRC", count: 19, within: 19 },
  { icon: IconUsers, topic: "Population by age and sex", binds: "UK, nations, English regions", source: "ONS", count: 179, within: 179 },
  { icon: IconUsers, topic: "Employment by occupation", binds: "UK, nations, English regions", source: "ONS", count: 159, within: 159 },
  { icon: IconUsers, topic: "Household composition", binds: "UK, nations, English regions", source: "ONS", count: 22, within: 22 },
  { icon: IconUsers, topic: "Land values and household spending", binds: "UK", source: "ONS", count: 5, within: 5 },
  { icon: IconHeartHandshake, topic: "Universal Credit", binds: "Great Britain, Scotland", source: "DWP", count: 106, within: 103 },
  { icon: IconHeartHandshake, topic: "State Pension and Pension Credit", binds: "Great Britain, Wales, Scotland, English regions", source: "DWP", count: 70, within: 70 },
  { icon: IconHeartHandshake, topic: "PIP, two-child limit, benefit cap, other benefits", binds: "Great Britain, England, Wales", source: "DWP", count: 57, within: 57 },
  { icon: IconBuilding, topic: "Council tax dwellings by band", binds: "England, English regions", source: "MHCLG", count: 82, within: 82 },
  { icon: IconBuildingBank, topic: "Tax receipts and benefit spending", binds: "UK, Great Britain, England and Wales", source: "OBR", count: 16, within: 16 },
  { icon: IconBuildingBank, topic: "Student loans, funded childcare, school pupils", binds: "England, Wales, UK", source: "SLC, DfE, ISC", count: 21, within: 20 },
  { icon: IconBuildingBank, topic: "Devolved council tax, buses, other totals", binds: "Nations, English regions", source: "DfT and devolved bodies", count: 41, within: 41 },
];

// What the live dashboard slide shows in a PDF export, where the page itself
// cannot be captured once its map has drawn: what the live page offers, and
// its address. The table on the slide before carries the numbers.
export const dashboardFeatures = [
  { icon: IconListSearch, title: "Every target", text: "Official figure beside fitted value" },
  { icon: IconMap2, title: "By publisher and statistic", text: "For the UK, nations and regions" },
  { icon: IconPinned, title: "Pinned to the 15 November build", text: "Certified in policyengine.py 6.20.1" },
];

// Projects we have done: three slides with live or published work.
// - The Autumn Budget 2026 dashboard: what it models is the Autumn Budget
//   2026 deck's list (slideshows/autumn-budget-2026/content.ts,
//   measureSlides: measures on energy bills, income from assets, pensions,
//   fuel, carers and the self-employed) and its household calculator tab.
//   The view buttons are that deck's deep links.
// - The AI post (source "aiPost"), read 16 November 2026: see aiShock
//   above for its figures, channels and incidence scenarios.
// - The firm VAT working paper: see firmMethod below.
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

// Beside the live post: what the study does, not its results; the third
// label names the outcomes it reports, with no figures. The headline
// figures (aiShock above) are for the presenter and are in NOTES.md; the
// post itself is the slide's focus.
// "AI and the UK economy" (source "aiEconomy"), read
// 19 November 2026: four scenarios from 2027 (UK low, central and high, and
// Korinek et al.'s substantial US case), run in OG-UK for the whole economy
// and in the household study (PolicyEngine UK, FY 2027-28), shown side by
// side and never added. Provisional and not yet published, so the slide
// quotes no figure.
export const aiEconomyProject = {
  labels: [
    { icon: IconTrendingUp, title: "Four scenarios", text: "AI doing more than the OBR expects, from 2027" },
    { icon: IconChartLine, title: "The whole economy", text: "OG-UK: output, pay rates, national income, birth years" },
    { icon: IconHome, title: "Households", text: "PolicyEngine UK: Exchequer cost, poverty, inequality" },
    { icon: IconArrowsSplit, title: "Two lenses", text: "Side by side, never added" },
  ],
};

export const aiProject = {
  labels: [
    { icon: IconArrowsSplit, title: "Three channels", text: "Job losses, other workers’ wages, capital income" },
    { icon: IconUsers, title: "Five incidence scenarios", text: "By who bears the change" },
    { icon: IconChartPie, title: "Three outcomes", text: "Exchequer cost, poverty, inequality" },
    { icon: IconDice, title: "50 random draws", text: "Of who loses a job" },
  ],
};

// The former slide "Firm-level VAT microsimulation: costing threshold
// changes" (the paper's static threshold sweep, firm-vat-revenue-impact-
// 2025-26.png, and three labels: static costing, turnover responses, reforms
// costed) is cut: its figure was a headline result, and the image file is deleted.
// Its content is in NOTES.md, and the fourth step of firmMethod below names
// what was costed. The paper's reform costings, static and under assumed
// turnover elasticities, are now on their own slide: see vatReforms below.

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
    overall: { value: "98.0%", label: "overall, in-sample, across the five calibrated dimensions" },
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

// What the firm model costs (firm-microsim-paper e6d5dd6):
// - Static costs: results/reform_menu_common_base.txt, "CORRECTED
//   tab:schedule_costs": the £85k notch, 2023-24 microdata, unaged, in-scope
//   VAT firms only; VAT base above the threshold £175.105bn. Costs are the
//   change against the £85,000 threshold, £m a year: raise to £100,000 -742
//   (direct band sum, adopted as the headline; firms released 117,846);
//   graduated taper £85k to £141.7k -1,406.3 and flat 50% marginal taper
//   -968.1 (275,803 firms in the taper band); reduced rate 10% on £85k-£105k
//   -446.2 and 15% -223.1 (138,004 firms in the band). Firm counts are
//   rounded to the nearest hundred.
// - Responses: results/dynamic_reform_results.txt, an iso-elastic
//   (Kleven-Waseem) model of bunching at the notch with one turnover
//   elasticity e in {0.05, 0.17, 0.32}, headline 0.17. In the file's words, e
//   "is NOT identified from the synthetic data", so the costs are conditional
//   on the assumed e. Reduced rate 10%: static -446, -444, -437, -430; 15%:
//   -223, -221, -216, -210. The raise row is -742 at every e "by
//   construction" (released firms leave the base; no other firm's rate
//   changes). Band firms scale turnover up, which widens the taxed base, so
//   the reduced-rate costs fall as e rises. The tapers have no behavioural
//   row: their rate varies continuously with turnover.
// The in-scope VAT base above the threshold, £175.1bn, and the turnover
// responses (the costs at each assumed elasticity, figures above) are said
// aloud (NOTES.md, slide 21), not shown on the slide. Each row's icon marks
// its lever: the threshold raised, a graduated taper, a flat taper, a
// reduced rate.
export const vatReforms = {
  rows: [
    { icon: IconArrowBarUp, reform: "Raise the threshold to £100,000", lever: "Level", cost: "−742", firms: "117,800 leave the register" },
    { icon: IconTrendingUp, reform: "Graduated taper, £85,000 to £141,700", lever: "Shape: phase-in", cost: "−1,406", firms: "275,800 in the band" },
    { icon: IconMinus, reform: "Flat 50% marginal taper, same band", lever: "Shape: constant", cost: "−968", firms: "275,800 in the band" },
    { icon: IconPercentage, reform: "Reduced rate of 10%, £85,000 to £105,000", lever: "Rate step", cost: "−446", firms: "138,000 in the band" },
    { icon: IconPercentage, reform: "Reduced rate of 15%, same band", lever: "Rate step", cost: "−223", firms: "138,000 in the band" },
  ],
};

// One way to link models, for discussion; nothing here is a commitment.
// What runs today: the trade study's code takes earnings changes by two-digit
// SIC division and applies them to employees in Microcosm UK (uk-trade-shock-study
// 06c8bbc, runner.py and apply_shocks; tariff_pipeline/exposure.py).
// A proposed interface for the model links. Not built: no reader for such a
// table exists. Keys follow what the model holds (policyengine-uk d3db7ac):
// sic_industry_division (two-digit SIC 2007 division); region (the ITL1
// regions); spending by COICOP division. Years: yoy_growth.yaml carries OBR
// forecasts to 2031. Existing outputs: the policyengine.py output classes
// listed under tariffDisaggregation above. Mean and SD across draws are
// computed in the studies' own code and are not a policyengine.py output, so
// they sit under "proposed" with the CSV format.
// What runs today is said aloud (NOTES.md, slide 25), not shown on the slide.

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
