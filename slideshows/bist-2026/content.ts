// Content for the seminar with the Modelling Unit of the Department for
// Business, Innovation, Science and Trade (BIST), 19 November 2026.
//
// Every figure is pinned to a commit of its study, and every claim about
// the model or the data to a commit of the code; the comments below name
// them. policyengine.py bundle 6.19.0 (released 13 November 2026; data build
// of 7 November) certifies Microcosm UK 2024-25 for the UK, and the data
// slides follow the Microcosm code. The shock studies were run on earlier
// datasets, and the slides that quote them say so.
//
// Code claims were read on 15 November 2026 at: policyengine-uk d3db7ac,
// policyengine.py 810a59e, microcosm 429d7a0, uk-trade-shock-study 06c8bbc,
// uk-ai-study 5d75106 and firm-microsim-paper e6d5dd6. GOV.UK pages and the
// Microcosm calibration dashboard were read the same day.
//
// Two kinds of Microcosm number appear and are never mixed in one figure:
// - "the certified build": the national build of 7 November 2026 that
//   policyengine.py 6.19.0 pins (microcosm-uk-2024-25-national-
//   20261107T020434Z-eeb6093e), as the public calibration dashboard reports it;
// - "the code": counts read from the repository at commit 429d7a0 (15
//   November), which is eight days newer than that build.

import {
  IconAdjustments,
  IconAlertTriangle,
  IconArrowsDiff,
  IconArrowsExchange,
  IconArrowsSplit,
  IconBasket,
  IconBolt,
  IconBriefcase,
  IconBuildingBank,
  IconBuildingFactory2,
  IconCalendar,
  IconCalendarEvent,
  IconCertificate,
  IconChartBar,
  IconChartHistogram,
  IconChartPie,
  IconCircleCheck,
  IconCoins,
  IconCopy,
  IconCpu,
  IconDatabase,
  IconDice,
  IconFlag,
  IconFlame,
  IconHeartHandshake,
  IconHome,
  IconHourglass,
  IconLink,
  IconListCheck,
  IconLock,
  IconLockOpen,
  IconMap,
  IconMapPin,
  IconMathFunction,
  IconNews,
  IconPigMoney,
  IconPlayerPause,
  IconPlugConnected,
  IconReceiptTax,
  IconRefresh,
  IconRepeat,
  IconRobot,
  IconScale,
  IconShieldCheck,
  IconShip,
  IconShoppingCart,
  IconStack2,
  IconTable,
  IconTargetArrow,
  IconTestPipe,
  IconTrees,
  IconTrendingDown,
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
    label: "Ahmadi (2026b), trade shocks",
    href: "https://github.com/PolicyEngine/uk-trade-shock-study",
  },
  ai: {
    label: "Ahmadi (2026a), AI shock",
    href: "https://doi.org/10.2139/ssrn.7174479",
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
  // The link opens the dashboard's default UK release, which on 15 November
  // 2026 was the build of 7 November; the page has no address for one release.
  dashboard: {
    label: "Calibration dashboard: 7 November build, read 15 November 2026",
    href: "https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk",
  },
  gates: { label: "UK release gates", href: `${ukBuild}/gates.json` },
  bundle: {
    label: "policyengine.py 6.19.0 bundle manifest",
    href: `${pythonRepo}/src/policyengine/data/bundle/manifest.json`,
  },
  certification: {
    label: "Data certification",
    href: `${pythonRepo}/docs/engineering/skills/data-certification.md`,
  },
  firmTargets: {
    label: "Declared firm targets",
    href: `${ukBuild}/uk_firms_targets.json`,
  },
  aiDraws: {
    label: "AI study draw results",
    href: "https://github.com/PolicyEngine/uk-ai-study/blob/5d75106d9be354c3ad3b1b5c80fc0552f0856a38/results/robustness/central_monte_carlo.json",
  },
  microcosmReadme: {
    label: "Microcosm README",
    href: `${microcosmRepo}/README.md`,
  },
} satisfies Record<string, Source>;

export type Tone = "built" | "muted" | "caution";
export type Tag = { label: string; tone: Tone };

// Status tags. Teal: exists today. Grey: not built, restricted or not
// modelled. Amber: experimental, proposed, a working paper or illustrative.
const tag = (label: string, tone: Tone): Tag => ({ label, tone });
export const tags = {
  notBuilt: tag("Not built", "muted"),
  noResults: tag("No results yet", "muted"),
  experimental: tag("Experimental", "caution"),
  proposed: tag("Proposed, not built", "caution"),
  workingPaper: tag("Working paper", "caution"),
  illustrative: tag("Illustrative", "caution"),
  // The AI study and the trade study's tariff stage use the survey-weighted
  // FRS 2024-25 (uk-ai-study 5d75106, paper/sections/methodology.tex;
  // uk-trade-shock-study 06c8bbc, paper/sections/results.tex).
  frsNotMicrocosm: tag("Survey-weighted FRS 2024–25, not Microcosm UK", "muted"),
};

// The three points of the session. Card 2: no link to another model is
// built. Card 3: neither candidate has published PolicyEngine results (trade
// study 06c8bbc reports none for the deal schedule; nothing on BICS exists).
export const inBrief = [
  {
    icon: IconCoins,
    title: "Incomes, not spending",
    text: "Household incomes after taxes and benefits. Spending is an input.",
  },
  {
    icon: IconPlugConnected,
    title: "A household layer for other models",
    text: "Sector changes in earnings, jobs and prices become household effects.",
    tag: tags.notBuilt,
  },
  {
    icon: IconTargetArrow,
    title: "Two candidate pilots",
    text: "Economic Prosperity Deal tariffs, and BICS electricity-cost relief.",
    tag: tags.noResults,
  },
];

// Data: policyengine.py 810a59e, data/bundle/manifest.json, bundle 6.19.0
// (Microcosm UK 2024-25 national build of 7 November 2026, certified for
// policyengine-uk 2.174.1).
export const components = [
  {
    icon: IconScale,
    title: "The rules",
    text: "Taxes and benefits, coded from legislation",
  },
  {
    icon: IconUsers,
    title: "The households",
    text: "Microcosm UK 2024–\u206025: surveys with calibrated weights",
  },
  {
    icon: IconChartBar,
    title: "The results",
    text: "Incomes, poverty, inequality and Exchequer cost",
  },
];

// Spending by category is a model input (policyengine-uk d3db7ac,
// variables/input/consumption/); it sets VAT and duties.
export const inputOutput = {
  input: { icon: IconShoppingCart, label: "Input", text: "Spending by category: sets VAT, duties and price exposure" },
  output: { icon: IconCoins, label: "Result", text: "Income after taxes and benefits" },
};

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
    notModelled: "Corporation tax",
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
  { icon: IconArrowsExchange, title: "The UK–India agreement", text: "Projected duty reductions" },
  { icon: IconShip, title: "The 2025 US tariffs", text: "An earnings shock: the tariff bridge" },
];

export const tradeEnergy = {
  offset: "about 60%",
  range: "49–64% across variants",
};

// From a trade model's sector results to households. The breakdowns are the
// output classes in policyengine.py 810a59e, src/policyengine/outputs/:
// decile_impact.py and intra_decile_impact.py; poverty.py; inequality.py;
// program_statistics.py (the 14 programmes in UK_PROGRAMS, hence "taxes and
// benefits"); uk_geography_disclosure.py (region); constituency_impact.py
// and local_authority_impact.py (the local-area file is experimental).
// Spending is held by COICOP division (policyengine-uk d3db7ac,
// variables/input/consumption/petrol_spending.py). No concordance from GTAP
// sectors exists in our code: the trade study assigns by two-digit SIC
// division of FRS employees (tariff_pipeline/exposure.py:174-230), read from
// sic_industry_division (policyengine-uk d3db7ac).
export const tariffDisaggregation = {
  flow: [
    {
      icon: IconWorld,
      owner: "Trade model",
      title: "Sector results",
      text: "Output, jobs, prices; wages by labour type",
    },
    {
      icon: IconArrowsExchange,
      owner: "Agreed mapping",
      title: "Concordance",
      text: "Sectors to SIC and COICOP divisions",
      tag: tags.notBuilt,
      dashed: true,
    },
    {
      icon: IconUsers,
      owner: "PolicyEngine",
      title: "Assign to people",
      text: "Employees by sector; households by spending",
    },
    {
      icon: IconScale,
      owner: "PolicyEngine",
      title: "Apply the rules",
      text: "Taxes and benefits, before and after",
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
// wagecut_cushion_pct 43.7; displacement_cushion_pct 35.4,
// displacement_cushion_sd_pct 5.1, over 100 assignment draws). Results are
// for the schedule before the Economic Prosperity Deal; the study reports
// none for the deal schedule.
export const tariffBridge = {
  steps: [
    { icon: IconReceiptTax, title: "Tariff rates", text: "The pre-deal US schedule" },
    { icon: IconShip, title: "US export intensity", text: "By two-digit SIC division", dashed: true },
    { icon: IconMathFunction, title: "Export-demand elasticity", text: "Assumed 1", dashed: true },
    { icon: IconCoins, title: "Earnings shock by sector", text: "About £1.0bn a year", dashed: true },
    { icon: IconUsers, title: "Survey employees", text: "Assigned by sector" },
  ],
  replaceable: [1, 3] as [number, number],
  cushion: { wageCuts: "43.7%", jobLosses: "35.4%", jobLossesSd: "5.1 points" },
};

// A non-tax business policy, with BICS as the example. Scheme facts: sources
// bicsGuidance and bicsIa above. Model precedents (policyengine-uk d3db7ac):
// parameters/gov/contrib/policyengine/employer_ni/*_incidence.yaml and
// budget/{consumer,corporate}_incident_tax_change.yaml allocate by
// consumption and by shareholding, booked as tax revenue; a non-tax cost
// change needs an extension, which is not built.
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
      text: "Three channels",
    },
    {
      icon: IconHome,
      owner: "PolicyEngine",
      title: "Household and fiscal effects",
      text: "Net incomes, poverty, receipts",
    },
  ],
  channels: [
    { icon: IconShoppingCart, from: "Prices", to: "by spending" },
    { icon: IconBriefcase, from: "Pay and jobs", to: "by sector of employment" },
    { icon: IconChartPie, from: "Profits", to: "by shareholding" },
  ],
};

// uk-ai-study 5d75106, paper/sections/results.tex, incidence table (means
// of 50 paired draws): exposure-proportional 17.7 and +1.87; uniform 13.9;
// expertise-compression 20.6; Klein-anchored stress test 32.8; poverty
// +1.85 to +1.96 across the four stylised families.
export const aiShock = {
  cost: "£17.7bn",
  poverty: "+1.87pp",
  patternLow: "£13.9bn",
  patternHigh: "£20.6bn",
  topLoaded: "£32.8bn",
  povertyRange: "1.85–1.96pp",
};

// firm-microsim-paper e6d5dd6 (paper and README): the ONS VAT/PAYE
// enterprise frame (about 2.7 million enterprises) and HMRC's count of
// VAT-registered traders (about 2.2 million). Microcosm README (429d7a0, 15
// November 2026): "Firm support is experimental"; its frame can declare firm
// tables and person-firm job links (see microcosmRelease below). The two
// published employer NI analyses are sources youngWorkerNics and
// inactiveNics.
export const firmTools = [
  {
    icon: IconReceiptTax,
    tags: [tags.workingPaper],
    title: "Firm-level VAT microsimulation",
    text: "Costs VAT threshold changes on synthetic firms.",
    facts: [
      { value: "about 2.7 million", label: "enterprises (ONS)" },
      { value: "about 2.2 million", label: "VAT-registered traders (HMRC)" },
    ],
  },
  {
    icon: IconBriefcase,
    tags: [{ label: "In the model", tone: "built" } as Tag],
    title: "Employer costs",
    text: "Employer NI and total employment costs.",
    facts: [{ value: "Published", label: "two NI exemption analyses" }],
  },
  {
    icon: IconLink,
    tags: [tags.notBuilt, tags.experimental],
    title: "Linking firms to households",
    text: "No firm entity: not built.",
    facts: [{ value: "Experimental", label: "Microcosm's firm tables and job links" }],
  },
];

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
    tags: [{ label: "Mechanism in the model", tone: "built" } as Tag, { label: "Not yet run", tone: "muted" } as Tag],
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
    text: "Results would pass both ways until the two agree.",
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
// is not about AI; applying it to AI is hypothetical.
export const abmQuestions = [
  {
    icon: IconCpu,
    question: "A semiconductor supply shock",
    behaviour: "Firms lose inputs, cut output and jobs",
    returns: "Household incomes, benefit claims, tax receipts",
  },
  {
    icon: IconBolt,
    question: "Electricity-cost relief (BICS)",
    behaviour: "Firms choose between prices, pay and profit",
    returns: "Incomes by decile and region",
  },
  {
    icon: IconRobot,
    question: "AI adoption over the cycle",
    behaviour: "Firms adopt, enter and exit; wages adjust",
    returns: "Poverty, inequality and receipts, by year",
  },
];

// Code, data and synthetic data. Licences: policyengine-uk and policyengine.py
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
    title: "Synthetic firm data",
    text: "Drawn from published tables, so it can be shared.",
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
        label: "From a trade model",
        text: "Sector output, jobs, prices; wages by labour type",
      },
      {
        icon: IconHome,
        label: "From PolicyEngine",
        text: "Concordance; incomes, poverty, Exchequer cost",
      },
      {
        icon: IconFlag,
        label: "Starting point",
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
        label: "From the Modelling Unit",
        text: "Cost change by sector; the prices–pay–profits split",
      },
      {
        icon: IconHome,
        label: "From PolicyEngine",
        text: "Allocation to households; fiscal effects",
      },
      {
        icon: IconFlag,
        label: "Starting point",
        text: "The business-tax allocation, extended",
      },
    ],
  },
];

export const questions = [
  { icon: IconTargetArrow, text: "Which pilot first: the Economic Prosperity Deal, or BICS?" },
  { icon: IconWorld, text: "What can a trade-model run export, and under which closure?" },
  { icon: IconArrowsSplit, text: "Where should the prices, pay and profits split come from?" },
  { icon: IconBuildingFactory2, text: "Which firm behaviour needs an agent-based model?" },
  { icon: IconHome, text: "Which household results matter most?" },
];

// Each item follows the public page linked on the slide (sources no10, hmt,
// obr, hansard and nuffield above).
export const uses = [
  {
    icon: IconBuildingBank,
    title: "Government",
    items: [
      "10 Downing Street's data science team built 10ds-microsim on PolicyEngine: supplementary, experimental analysis",
      "HM Treasury ran a pilot evaluation in 2024; its transparency record says it does not currently use the model",
      "The OBR lists PolicyEngine among organisations it engaged with in 2025–⁠26",
    ],
  },
  {
    icon: IconNews,
    title: "Research and media",
    items: [
      "House of Commons Library research, cited in a House of Lords debate",
      "Modelling in work by NIESR, the New Economics Foundation and the Fabian Society, and in a PolicyEngine paper published by the IEA",
      "Reporting by The Independent and ITV's Peston",
    ],
  },
  {
    icon: IconPigMoney,
    title: "Funding",
    items: [
      "Nuffield Foundation grants made in 2024 and 2026",
      "For local-area data and constituency-level Budget analysis",
    ],
  },
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
export const runFlow = [
  { icon: IconDatabase, title: "Certified dataset", text: "Microcosm UK 2024–\u206025" },
  { icon: IconTrendingUp, title: "Project to the year", text: "Inputs grow with OBR indices" },
  { icon: IconCopy, title: "Run twice", text: "Baseline and counterfactual" },
  { icon: IconArrowsDiff, title: "Take the difference", text: "Per household, then weighted" },
];

export const runFacts = [
  {
    icon: IconAdjustments,
    title: "A reform",
    text: "changes parameters",
    code: "gov.hmrc.income_tax\n  .rates.uk[0].rate: 0.21",
  },
  { icon: IconBolt, title: "A shock", text: "changes inputs; the rules stay" },
  { icon: IconPlayerPause, title: "Mostly static", text: "by default" },
  { icon: IconBuildingFactory2, title: "Not modelled", text: "firms' decisions, general equilibrium" },
];

// Microcosm UK 2024-25: what the pipeline builds. Read from microcosm
// 429d7a0, packages/microcosm-build/src/microcosm/build/uk/source_stages.json
// (56 stages, each with a "survey" and a "source"; all 52 microdata and
// administrative artifacts carry a SHA-256):
// - frs_spine: Family Resources Survey 2024-25 (UK Data Service SN 9563);
// - spi_support_channel, hmrc_spi_income_spine, spi_income_band_donors:
//   incomes from the Survey of Personal Incomes public-use file 2022-23;
//   reserved records for the HMRC total-income bands "from GBP 200,000";
// - was_wealth (Wealth and Assets Survey round 8), lcfs_consumption (Living
//   Costs and Food Survey 2024-25), etb_vat and etb_services (Effects of
//   Taxes and Benefits), nts_bus_travel (National Travel Survey);
// - uc_take_up, pension_credit_take_up, child_benefit_take_up: DWP and HMRC
//   statistics "applied to PolicyEngine-UK pre-take-up" entitlement.
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
    text: "Extra records above £200,000",
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
    title: "Benefit take-up",
    text: "Drawn to published rates",
  },
  {
    icon: IconScale,
    owner: "Official totals",
    title: "Calibrated weights",
    text: "Reweighted to match the totals",
  },
];

export const microcosmFacts = [
  { icon: IconTrees, title: "Quantile regression forests" },
  { icon: IconLock, title: "Pinned files, seeded draws" },
  { icon: IconStack2, title: "56 declared stages" },
  { icon: IconAlertTriangle, title: "No industry targets" },
];

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
// Fit (the certified build): the public calibration dashboard, release
// "2024-25-national · uk-frs-calibration-attempt-20261107T020434Z-eeb6093e",
// read 15 November 2026: weighted target error 0.51%; 1,514 targets in 44
// statistics; 98.7% "within 10% of the target value"; 78.2K "synthetic
// households with a non-zero calibrated weight"; by publisher HMRC 776, ONS
// 365, DWP 213, MHCLG 82 (so 78 from others). These are in-sample; the
// dashboard's validation and cross-dataset pages have no UK content, and the
// slide carries an "In-sample fit" tag.
// The repository's target file at 429d7a0 lists 1,710 national rows, more
// than the certified build's 1,514, so the slide quotes the build only.
export const calibrationEquation =
  String.raw`\min_{0<w\,\le\,10\,w^{0}}\ \sum_{j}\,\omega_j\,\min\!\left(\frac{\lvert a_j^{\top}w-t_j\rvert}{\max(\lvert t_j\rvert,\,1)},\ 10\right)`;

export const calibrationFit = {
  stats: [
    { icon: IconTargetArrow, value: "1,514", label: "targets, in 44 statistics" },
    { icon: IconCircleCheck, value: "98.7%", label: "of targets within 10% of the official figure" },
    { icon: IconTrendingDown, value: "0.51%", label: "final loss: weighted, capped relative error" },
    { icon: IconHome, value: "78.2k", label: "household records with a non-zero weight" },
  ],
  publishers: [
    { name: "HMRC", count: 776 },
    { name: "ONS", count: 365 },
    { name: "DWP", count: 213 },
    { name: "MHCLG", count: 82 },
    { name: "Others", count: 78 },
  ],
  solver: ["Adam on log-weights", "1,500 steps"],
};

// Gates, certification and firm support.
// Gates (microcosm 429d7a0, uk/gates.json): 94 gate entries over the phases
// preflight, assembled, transferred and terminal.
// Certification (policyengine.py 810a59e): data/bundle/manifest.json pins
// policyengine 6.19.0, policyengine-core 3.33.3, policyengine-uk 2.174.1 and
// microcosm_uk_2024_25.h5 by SHA‑256 at an immutable revision;
// docs/bundles.md: the installer verifies each artifact's hash;
// docs/engineering/skills/data-certification.md: the certification "is only
// made good by the test suite passing on the exact pinned pair".
// Firm support (microcosm 429d7a0): README ("Firm support is experimental");
// uk_runtime/firm_generation.py (no build stage calls it);
// uk/uk_firms_targets.json (eight target declarations without values).
export const microcosmRelease = [
  {
    icon: IconShieldCheck,
    tag: { label: "In the pipeline", tone: "built" } as Tag,
    title: "Release gates",
    value: "94",
    text: "declared checks across four phases of the build",
    points: ["Target fit", "Weight spread", "Imputed values in range"],
  },
  {
    icon: IconCertificate,
    tag: { label: "policyengine.py 6.19.0", tone: "built" } as Tag,
    title: "What “certified” means",
    value: "",
    text: "One bundle version fixes rules, data and engine together",
    points: ["Data file pinned by SHA‑256", "Built with policyengine-uk 2.174.1", "Tests pass on the pair"],
  },
  {
    icon: IconBuildingFactory2,
    tag: tags.experimental,
    title: "Firm support",
    value: "",
    text: "The household file contains no firms",
    points: ["Firm table and job links declared", "Synthetic-firm generator ported", "Eight declared targets"],
  },
];

// Uncertainty in the shock studies.
// AI study (uk-ai-study 5d75106): analysis/monte_carlo_families.py, "50
// paired draws (seeds 0-49)". results/robustness/central_monte_carlo.json,
// exchequer_cost_bn: mean 17.69, sd 1.20. Dataset sensitivity:
// paper/sections/discussion.tex, "rerunning the central scenario on
// PolicyEngine's enhanced FRS dataset raises the seed-0 Exchequer cost from
// £18.2 billion to £29.5 billion" (appendix: "enhanced FRS 2023--24").
// Trade study (uk-trade-shock-study 06c8bbc): paper/sections/results.tex,
// "100 assignment draws" for the tariff pipeline. Step 3's caveat
// is the pre-redesign slide's sentence, kept in NOTES.md: "The draws cover
// random assignment only, not sampling error in the survey, error in the
// calibrated weights or doubt about the scenario."
export const uncertainty = {
  steps: [
    { icon: IconDice, title: "Draw who loses a job", text: "At random" },
    { icon: IconRepeat, title: "Rerun the rules each draw", text: "50 draws (AI study); 100 (tariff bridge)" },
    { icon: IconChartHistogram, title: "Report the mean and SD", text: "Assignment only, not sampling error" },
  ],
  stats: [
    { icon: IconBuildingBank, value: "£17.7bn", label: "mean of 50 draws" },
    { icon: IconChartHistogram, value: "£1.2bn", label: "standard deviation across draws" },
    {
      icon: IconDatabase,
      value: "£18.2bn → £29.5bn",
      label: "one draw: survey-weighted FRS, then enhanced FRS 2023–24",
    },
  ],
};

// A proposed interface for the model links. Not built: no reader for such a
// table exists. Keys follow what the model holds (policyengine-uk d3db7ac):
// sic_industry_division (two-digit SIC 2007 division); region (the ITL1
// regions); spending by COICOP division. Years: yoy_growth.yaml carries OBR
// forecasts to 2031. Existing outputs: the policyengine.py output classes
// listed under tariffDisaggregation above. Mean and SD across draws are
// computed in the studies' own code and are not a policyengine.py output, so
// they sit under "proposed" with the CSV format.
export const interfaceSpec = {
  inputs: [
    { icon: IconBuildingFactory2, field: "Sector", text: "Two-digit SIC division" },
    { icon: IconCoins, field: "Earnings and employment", text: "% change from baseline" },
    { icon: IconShoppingCart, field: "Prices", text: "% change by COICOP division" },
    { icon: IconMapPin, field: "Region", text: "ITL1, optional" },
    { icon: IconCalendar, field: "Scenario and year", text: "To 2031" },
  ],
  outputs: [
    { icon: IconChartBar, field: "Income deciles" },
    { icon: IconChartPie, field: "Poverty and inequality" },
    { icon: IconReceiptTax, field: "Taxes, benefits, government balance" },
    { icon: IconMap, field: "Regions" },
  ],
  proposedOutputs: [
    { icon: IconDice, field: "Mean and SD across draws" },
    { icon: IconTable, field: "CSV tables" },
  ],
};

export const appendixContents = [
  { icon: IconListCheck, title: "What the UK model covers" },
  { icon: IconShieldCheck, title: "Gates, certification and firm support" },
  { icon: IconShip, title: "Who bears the trade shocks?" },
  { icon: IconBuildingBank, title: "Use, evaluation and engagement" },
];
