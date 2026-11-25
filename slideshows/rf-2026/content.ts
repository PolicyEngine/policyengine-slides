// Content for PolicyEngine's slides for the Resolution Foundation,
// 30 November 2026.
//
// Every figure and claim below carries a comment naming its source; the
// links are in "sources", pinned to a commit or a publication date. Two
// kinds of source appear:
// - Figures about the Microcosm UK data come from one build only: the
//   certified national build of 15 November 2026
//   (microcosm-uk-2024-25-national/uk-frs-calibration-attempt-
//   20261115T104657Z-fcfac709, certified in policyengine.py 6.20.1), as the
//   BIST deck (slideshows/bist-2026, this repository, commit ed87705) and the
//   public calibration dashboard report it. Three results shown in the deck
//   were run on other builds; each carries its own run label on the slide.
// - Statements about what the code can do (the mapping tables on slides 13
//   and 14, the routes on slide 21) were read on 25 November 2026 at
//   policyengine-uk 5987eb3 (v2.180.0), microcosm cac12ab, policyengine.py
//   81bac43 (v6.20.3) and policyengine-app-v2 d27867f. These are
//   capabilities of the code, not figures from a build.
//
// Descriptions of the IPPR tax-benefit model and of the Resolution
// Foundation's method come only from published sources, each dated: the
// Living Standards Outlook 2026 (Annex 1), the figure notes of the reports
// listed in "rfReports", the Scottish Government's 2018 description and
// Manchester Metropolitan University's staff page. Where we found nothing
// published, the slides say "Not public", which means only that.
//
// The six parts are "parts" below; the slide order is in config.ts.

import {
  IconAdjustments,
  IconArrowsSplit,
  IconBolt,
  IconBook,
  IconBrandPython,
  IconBuildingBank,
  IconBuildingCommunity,
  IconCalculator,
  IconCalendarEvent,
  IconCalendarStats,
  IconChartBar,
  IconChartHistogram,
  IconChartLine,
  IconCircleCheck,
  IconCode,
  IconCoins,
  IconCopy,
  IconDatabase,
  IconFileSearch,
  IconFlag,
  IconGitCompare,
  IconHeartHandshake,
  IconHome,
  IconHomeDollar,
  IconLockOpen,
  IconMap,
  IconMap2,
  IconMathFunction,
  IconMessageChatbot,
  IconMessageQuestion,
  IconPigMoney,
  IconReceiptTax,
  IconRefresh,
  IconRoute,
  IconScale,
  IconSchool,
  IconShoppingCart,
  IconTargetArrow,
  IconTestPipe,
  IconTrendingUp,
  IconUser,
  IconUsers,
  IconWallet,
  IconWorld,
  type Icon,
} from "@tabler/icons-react";

const ukCommit = "5987eb3";
const microcosmCommit = "cac12ab";
const pythonCommit = "81bac43";
const appCommit = "d27867f";
const scorecardCommit = "771c028d2647b36c6ced19504d9f772637dcaa3b";
const ukRepo = `https://github.com/PolicyEngine/policyengine-uk/blob/${ukCommit}/policyengine_uk`;
const ukTree = `https://github.com/PolicyEngine/policyengine-uk/tree/${ukCommit}/policyengine_uk`;
const mcRepo = `https://github.com/PolicyEngine/microcosm/blob/${microcosmCommit}/packages/microcosm-build/src/microcosm/build`;
const pyRepo = `https://github.com/PolicyEngine/policyengine.py/blob/${pythonCommit}/src/policyengine`;
const appRepo = `https://github.com/PolicyEngine/policyengine-app-v2/blob/${appCommit}/app/src`;

export type Source = { label: string; href: string };

export const sources = {
  home: { label: "policyengine.org/uk", href: "https://www.policyengine.org/uk" },
  model: { label: "policyengine-uk", href: "https://github.com/PolicyEngine/policyengine-uk" },
  data: { label: "Microcosm", href: "https://github.com/PolicyEngine/microcosm" },
  python: { label: "policyengine.py", href: "https://github.com/PolicyEngine/policyengine.py" },
  // Ahmadi, Ghenis, Woodruff, Makarchuk and Volk (2026), Journal of Open
  // Source Software 11(125), 11115.
  joss: {
    label: "Ahmadi et al. (2026), Journal of Open Source Software",
    href: "https://doi.org/10.21105/joss.11115",
  },
  // policyengine.org/uk/donate, as quoted in the Autumn Budget 2026 deck
  // (slideshows/autumn-budget-2026/content.ts, "about").
  about: { label: "About PolicyEngine", href: "https://www.policyengine.org/uk/donate" },
  // The BIST deck in this repository, commit ed87705 (21 November 2026): the
  // source of the rule-base counts, the Microcosm build steps, the
  // calibration fit, the breakdowns and the users.
  bist: {
    label: "BIST deck, 19 November 2026",
    href: "https://github.com/PolicyEngine/policyengine-slides/tree/ed87705/slideshows/bist-2026",
  },
  // ---- Users and records (the same links as the BIST deck) ----
  no10: {
    label: "PolicyEngine at No 10",
    href: "https://www.policyengine.org/uk/research/policyengine-10-downing-street",
  },
  // HM Treasury's algorithmic transparency record, 17 December 2024: a 2024
  // trial alongside IGOTM; "not currently deployed"; National Insurance
  // results close; income tax comparisons "less promising".
  hmt: {
    label: "HM Treasury algorithmic transparency record, 17 December 2024",
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
  cps: { label: "Centre for Policy Studies, July 2023", href: "https://cps.org.uk/research/family-friendly-taxation/" },
  nef: {
    label: "New Economics Foundation, July 2026",
    href: "https://neweconomics.org/2026/07/insecure-low-quality-work-a-major-driver-of-uks-neets-and-inactivity-crisis",
  },
  niesr: {
    label: "Mosley and Cornforth (2023)",
    href: "https://www.lse.ac.uk/CFM/assets/pdf/CFM-Discussion-Papers-2023/CFMDP2023-16-Paper.pdf",
  },
  // ---- Nuffield Foundation ----
  // Grant 1, Nuffield project page (the same address as the Autumn Budget
  // 2026 deck's "nuffield" source): "Enhancing, localising and democratising
  // tax-benefit policy analysis", £251,296, September 2024 to September
  // 2025; areas listed: childcare and public services at household level;
  // local-authority and constituency datasets; an open dashboard comparing
  // outputs with other models; an AI-capable interface; training, beta
  // testing and a symposium. Read 24 November 2026.
  nuffieldGrant1: {
    label: "Nuffield Foundation project page, grant 1",
    href: "https://www.nuffieldfoundation.org/project/enhancing-localising-and-democratising-tax-benefit-policy-analysis",
  },
  // Grant 2: "Advancing evidence-based policy with AI & tax-benefit
  // microsimulation", £300,000, from July 2026 (policyengine.org/uk/
  // supporters); Nuffield's project page gives July 2026 to June 2029.
  // Funds constituency-level Budget analysis, council tax variation and
  // outreach to local journalists. Read 24 November 2026.
  supporters: { label: "PolicyEngine supporters", href: "https://www.policyengine.org/uk/supporters" },
  // ---- Code, pinned to the commits read on 25 November 2026 ----
  programs: { label: "policyengine-uk programme registry", href: `${ukRepo}/programs.yaml` },
  growth: {
    label: "Growth parameters (OBR October 2026)",
    href: `${ukRepo}/parameters/gov/economic_assumptions/yoy_growth.yaml`,
  },
  uprating: { label: "Uprating code", href: `${ukRepo}/data/economic_assumptions.py` },
  datedReforms: { label: "Dated reforms", href: `${ukRepo}/utils/dated_reforms.py` },
  povertyVariables: { label: "Poverty variables", href: `${ukTree}/variables/household/income` },
  equivalisation: {
    label: "HBAI equivalisation",
    href: `${ukRepo}/variables/household/demographic/household_equivalisation_bhc.py`,
  },
  twoChildLimit: {
    label: "Two-child limit parameter",
    href: `${ukRepo}/parameters/gov/dwp/universal_credit/elements/child/limit/child_count.yaml`,
  },
  lha: { label: "LHA parameters", href: `${ukTree}/parameters/gov/dwp/LHA` },
  lhaRate: { label: "LHA rate by BRMA", href: `${ukRepo}/variables/gov/dwp/BRMA_LHA_rate.py` },
  entitlement: {
    label: "Full-entitlement switch",
    href: `${ukRepo}/variables/household/income/claims_all_entitled_benefits.py`,
  },
  housingBenefit: {
    label: "Housing Benefit eligibility",
    href: `${ukRepo}/variables/gov/dwp/housing_benefit/housing_benefit_eligible.py`,
  },
  councilTax: {
    label: "Band D amounts",
    href: `${ukRepo}/parameters/gov/local_authorities/council_tax/band_d/amounts.yaml`,
  },
  ctr: {
    label: "Council Tax Reduction schemes",
    href: `${ukRepo}/variables/gov/local_authorities/council_tax_reduction/config.py`,
  },
  indirect: { label: "VAT and duties", href: `${ukTree}/variables/gov/hmrc` },
  takeUp: { label: "Take-up contract", href: `${mcRepo}/uk/take_up_contract.json` },
  ucTakeUp: { label: "UC take-up draw", href: `${mcRepo}/uk_runtime/uc_take_up.py` },
  bundleSpec: { label: "UK bundle spec (target period 2025)", href: `${mcRepo}/uk/spec/bundle.yaml` },
  sourcesSpec: { label: "UK source stages", href: `${mcRepo}/uk/spec/sources.yaml` },
  targetReferences: { label: "Calibration target references", href: `${mcRepo}/uk/target_references.json` },
  staticAging: {
    label: "Static ageing (no UK projection reader)",
    href: `https://github.com/PolicyEngine/microcosm/blob/${microcosmCommit}/docs/static-aging.md`,
  },
  manifest: { label: "Data bundle manifest", href: `${pyRepo}/data/bundle/manifest.json` },
  deciles: { label: "Decile impacts", href: `${pyRepo}/outputs/decile_impact.py` },
  decileGrouping: { label: "Custom grouping", href: `${pyRepo}/outputs/decile_grouping.py` },
  povertyOutputs: { label: "Poverty outputs", href: `${pyRepo}/outputs/poverty.py` },
  appReport: {
    label: "Web app UK report outputs",
    href: `${appRepo}/types/metadata/ReportOutputSocietyWideUK.ts`,
  },
  appSearch: { label: "Web app parameter search", href: `${appRepo}/libs/parameterSearch.ts` },
  // ---- Dashboards and analyses ----
  // The calibration dashboard, pinned to the certified build of 15 November
  // 2026 (the same link as the BIST deck).
  dashboard: {
    label: "Calibration dashboard, pinned to the 15 November build",
    href: "https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk&release=microcosm-uk-2024-25-national/uk-frs-calibration-attempt-20261115T104657Z-fcfac709",
  },
  budgetDashboard: { label: "Autumn Budget 2026 dashboard", href: "https://policyengine.org/uk/budgets/autumn-2026" },
  // The Autumn Budget 2026 briefing (policyengine-app-v2 9cdc75a, 31
  // October 2026): the PolicyEngine against OBR table, the reasons for the
  // gaps, and the headline figures for the seven measures.
  budgetBriefing: {
    label: "Autumn Budget 2026 briefing, 31 October 2026",
    href: "https://github.com/PolicyEngine/policyengine-app-v2/blob/9cdc75a/app/src/data/posts/articles/uk-autumn-budget-2026-briefing.md",
  },
  // PolicyEngine's dashboard of the Billing me softly proposal, 5 October
  // 2026, and its analysis code at uk-energy-reforms 14bf3b0.
  energyDiscount: {
    label: "Targeted energy bill discount dashboard",
    href: "https://www.policyengine.org/uk/targeted-energy-discount",
  },
  energyCode: {
    label: "uk-energy-reforms, commit 14bf3b0",
    href: "https://github.com/PolicyEngine/uk-energy-reforms/tree/14bf3b0/analyses/rf-billing-me-softly",
  },
  // The public scorecard (policyengine-scorecard 771c028): app/public/data/
  // lanes.json lists 24 UK lanes, including UKMOD statistics (758 claims)
  // and an Autumn Budget 2025 harvest of published results from UKMOD, the
  // IPPR model, the Resolution Foundation and the IFS (2,649 claims, 628 with
  // a PolicyEngine counterpart, harvested 24 September 2026). The case-level
  // UKMOD comparison is listed as pending. It has no TAXBEN lane.
  scorecard: {
    label: "PolicyEngine scorecard",
    href: "https://policyengine-scorecard.vercel.app/scorecard",
  },
  scorecardCode: {
    label: "policyengine-scorecard, commit 771c028",
    href: `https://github.com/PolicyEngine/policyengine-scorecard/tree/${scorecardCommit}/app/public/data`,
  },
  // ---- The Resolution Foundation's reports (see rfReports) ----
  lso26: {
    label: "Living Standards Outlook 2026, 10 February 2026",
    href: "https://www.resolutionfoundation.org/app/uploads/2026/02/LSO-2026.pdf",
  },
  spreadThin: {
    label: "Spread thin, 29 October 2026",
    href: "https://www.resolutionfoundation.org/publications/spread-thin/",
  },
  // Aldridge, Brewer and Cavanagh.
  homeEconomics: {
    label: "Home economics, 24 September 2026",
    href: "https://www.resolutionfoundation.org/publications/home-economics/",
  },
  // Brewer, Clegg and Marshall.
  billingMeSoftly: {
    label: "Billing me softly, 10 August 2026",
    href: "https://www.resolutionfoundation.org/publications/billing-me-softly/",
  },
  // ---- Other models ----
  // Scottish Government, Tackling child poverty delivery plan: forecasting
  // child poverty in Scotland, 29 March 2018, page 8: the IPPR model's
  // coverage as described then (FRS for direct taxes and benefits, LCF for
  // indirect taxes, a partial take-up algorithm since 2017 calibrated to DWP
  // and HMRC figures; council tax, LHA and disability benefits modelled
  // "with lower accuracy").
  scotGov2018: {
    label: "Scottish Government, 29 March 2018",
    href: "https://www.gov.scot/publications/tackling-child-poverty-delivery-plan-forecasting-child-poverty-scotland/pages/8/",
  },
  // Manchester Metropolitan University staff profile: the IPPR model is
  // maintained at PERU; users named are IPPR, the Resolution Foundation,
  // JRF, NEF and Legatum.
  mmu: {
    label: "Manchester Metropolitan University staff profile",
    href: "https://www.mmu.ac.uk/staff/profile/professor-ashwin-kumar",
  },
  // CeMPA, University of Essex: microsimulation.ac.uk and its 2026 UKMOD
  // country report (CeMPA working paper 8/26, April 2026).
  ukmod: { label: "UKMOD, CeMPA", href: "https://www.microsimulation.ac.uk/" },
} satisfies Record<string, Source>;

export type Tone = "built" | "muted" | "caution";
export type Tag = { label: string; tone: Tone };

// Status tags, in the body only, never beside a title. "Done": the code or a
// standard output does it today. "Partly": it works in Python but not in the
// web app, or covers only part of what is needed. "Not yet": it would need
// building or hand-written code. Muted tags mark a preview, an in-sample
// figure, something outside the model, or a row still being checked.
const tag = (label: string, tone: Tone): Tag => ({ label, tone });
export const tags = {
  done: tag("Done", "built"),
  partly: tag("Partly", "caution"),
  notYet: tag("Not yet", "muted"),
  checking: tag("Being checked", "muted"),
  preview: tag("Preview", "muted"),
  inSample: tag("In-sample", "muted"),
  outside: tag("Outside the model", "muted"),
};

export const parts = [
  { key: "intro", icon: IconFlag, title: "Introduction", short: "Introduction", text: "Who we are" },
  {
    key: "model",
    icon: IconScale,
    title: "The model and the data",
    short: "Model and data",
    text: "PolicyEngine UK and Microcosm UK 2024–25",
  },
  {
    key: "nuffield",
    icon: IconHeartHandshake,
    title: "The Nuffield Foundation grants",
    short: "Nuffield",
    text: "What they funded and what exists",
  },
  {
    key: "uses",
    icon: IconFileSearch,
    title: "The Resolution Foundation’s research and the IPPR model",
    short: "RF’s uses",
    text: "Each published use, mapped to PolicyEngine",
  },
  {
    key: "compare",
    icon: IconGitCompare,
    title: "How PolicyEngine compares",
    short: "Comparison",
    text: "With the IPPR model and UKMOD, and with official figures",
  },
  {
    key: "next",
    icon: IconRoute,
    title: "Routes in and a possible pilot",
    short: "Next steps",
    text: "Options and questions",
  },
] as const;

export type PartKey = (typeof parts)[number]["key"];

// ---------- Slide 3: who we are ----------
// Facts: policyengine.org/uk/donate ("about"); Nuffield grants made in 2024
// and 2026 ("nuffieldGrant1", "supporters"); the policyengine.py paper
// ("joss"); licences from the LICENSE files as pinned in the BIST deck
// (policyengine-uk and policyengine.py AGPL-3.0, microcosm MIT).
// Government row: 10 Downing Street built 10ds-microsim on PolicyEngine
// ("no10"); HM Treasury's 2024 trial, not deployed ("hmt"); the OBR's annual
// report 2025-26 lists PolicyEngine among organisations it engaged with
// ("obr"); a Lords debate of 24 February 2026 cited House of Commons Library
// research that used PolicyEngine ("hansard"). Logos as in the BIST deck;
// no HM Treasury logo file exists, so its name is a wordmark.
export type Logo = {
  name: string;
  logo?: string;
  width?: number;
  pixelHeight?: number;
  height: number;
  darken?: boolean;
  source?: Source;
  caption?: string;
};

export const whoWeAre = {
  facts: [
    {
      icon: IconHeartHandshake,
      title: "A nonprofit",
      text: "Free, open-source tools that help people understand tax and benefit policies; funded in the UK by the Nuffield Foundation (grants made in 2024 and 2026)",
    },
    {
      icon: IconWorld,
      title: "UK and US models",
      text: "One Python package, policyengine.py",
      cite: { text: "Ahmadi, Ghenis, Woodruff, Makarchuk and Volk, 2026, JOSS 11(125), 11115", source: sources.joss },
    },
    {
      icon: IconLockOpen,
      title: "Open licences",
      text: "AGPL\u20113.0 for policyengine-uk and policyengine.py; MIT for the Microcosm pipeline",
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
      caption: "Built 10ds-microsim on PolicyEngine",
    },
    { name: "HM Treasury", height: 3.4, source: sources.hmt, caption: "2024 trial; not deployed" },
    {
      name: "Office for Budget Responsibility",
      logo: "/logos/orgs/office-for-budget-responsibility.png",
      width: 679,
      pixelHeight: 294,
      height: 2.9,
      darken: true,
      source: sources.obr,
      caption: "Annual report 2025–\u206026: engagement",
    },
    {
      name: "House of Lords",
      logo: "/logos/orgs/house-of-lords.svg",
      width: 755,
      pixelHeight: 200,
      height: 2.2,
      source: sources.hansard,
      caption: "Library research cited in debate, 24 Feb 2026",
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
      name: "Good Growth Foundation",
      logo: "/logos/orgs/good-growth-foundation.png",
      width: 1500,
      pixelHeight: 413,
      height: 2.4,
      darken: true,
      caption: "Good Growth Foundation",
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

// ---------- Slide 4: how a run works ----------
// The rules: policyengine-uk ("model"). The households: Microcosm UK
// 2024-25, uprated with the OBR's October 2026 EFO, outturn to 2025 and
// forecasts to 2031 ("growth"). The reform example is the BIST deck's
// (policyengine-uk tests/microsimulation/reforms_config.yaml, "Raise basic
// rate by 1pp"). Outputs: the BIST deck's breakdowns. Static by default:
// labour supply elasticities are 0 unless switched on; capital gains
// realisations (elasticity 1.0, Advani, Lonsdale and Summers 2024) and
// employer NI passed to pay run by default (BIST NOTES, slide 5; policyengine-
// uk parameters/gov/simulation/capital_gains_responses/elasticity.yaml).
export const modelFlow = [
  {
    icon: IconScale,
    title: "The rules",
    text: "Tax and benefit law as parameters and formulas, by year",
  },
  {
    icon: IconUsers,
    title: "The households",
    text: "Microcosm UK 2024–⁠25, uprated with the OBR’s October 2026 forecast to 2031",
  },
  {
    icon: IconCopy,
    title: "Run twice",
    text: "Baseline law and a reform: a parameter path and a value",
    code: "gov.hmrc.income_tax.rates.uk[0].rate: 0.21",
  },
  {
    icon: IconChartBar,
    title: "The difference",
    text: "Exchequer cost, incomes by decile, poverty, by place",
  },
];

export const modelFoot =
  "Static by default: labour supply responses are off unless switched on. Two responses run by default: capital gains realisations and employer NI passed to pay.";

// ---------- Slide 5: how the rules are encoded ----------
// The snippet is the BIST deck's (abridged from policyengine-uk 2.179.0,
// variables/gov/hmrc/income_tax/allowances/personal_allowance.py). Counts at
// 2.179.0 from the BIST deck: 1,086 parameter files under parameters/gov,
// 998 with a reference; 1,513 variables; 6,782 YAML test cases. The registry
// line is programs.yaml at 2.180.0 ("programs"): 58 programmes, 39 complete
// and 19 partial.
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
  { icon: IconCalendarEvent, value: "1,086", label: "parameter files", text: "998 with a legal reference" },
  { icon: IconMathFunction, value: "1,513", label: "variables", text: "Inputs, and formulas over arrays" },
  { icon: IconTestPipe, value: "6,782", label: "YAML test cases", text: "Inputs and the expected output" },
];

export const rulesEntities = [
  { icon: IconUser, label: "Person" },
  { icon: IconUsers, label: "Benefit unit" },
  { icon: IconHome, label: "Household" },
];

export const rulesRegistry = {
  text: "58 programmes in the registry: 39 complete, 19 partial",
  label: "policyengine-uk 2.180.0, programs.yaml",
};

// ---------- Slide 6: coverage ----------
// policyengine-uk programs.yaml at 2.180.0 ("programs"), complete and
// partial, with the BIST deck's "outside the model" (corporation tax; firms
// as entities). The registry lists alcohol, tobacco and gambling duties as
// partial; the code models them on imputed spending (variables/gov/hmrc:
// vat.py, fuel_duty, alcohol_duty, tobacco_duty, gambling_duty), and
// the slide follows the registry. Council Tax Reduction: Scotland, Wales,
// England's pensioner scheme and five English working-age schemes (Merton,
// Kingston, Newham, Westminster, Oxford) are simulated ("ctr").
export const coverage = [
  {
    icon: IconReceiptTax,
    title: "Taxes",
    tag: tags.done,
    items: [
      "Income tax, with Scottish rates; National Insurance; capital gains tax",
      "VAT; fuel duty",
      "SDLT and LBTT; council tax (Great Britain)",
    ],
  },
  {
    icon: IconHeartHandshake,
    title: "Benefits",
    tag: tags.done,
    items: [
      "Universal Credit, Pension Credit, State Pension, Housing Benefit, legacy benefits and tax credits",
      "Child Benefit; PIP, DLA, Attendance Allowance, Carer’s Allowance; benefit cap",
      "Winter Fuel Payment; Scottish Child Payment; Household Energy Payment",
      "England childcare entitlements; Tax-Free Childcare",
    ],
  },
  {
    icon: IconAdjustments,
    title: "Partial",
    tag: tags.partly,
    items: [
      "Council Tax Reduction: Scotland, Wales, England’s pensioner scheme and five English working-age schemes",
      "Alcohol, tobacco and gambling duties; vehicle excise duty",
      "Business rates, allocated by shareholding; Warm Home Discount",
    ],
  },
  {
    icon: IconBuildingBank,
    title: "Firms",
    tag: tags.outside,
    items: ["Corporation tax", "Firms as entities"],
  },
];

export const coverageFoot =
  "In the code but not yet in the programme registry: Welsh LTT, Local Housing Allowance, the two-child limit, the high-value council tax surcharge.";

// ---------- Slide 7: the household file ----------
// The BIST deck's Microcosm build slide (15 November build, microcosm
// 3a7067f): 56 source stages, each survey file pinned by SHA-256; FRS
// 2024-25 base; copies of FRS households take incomes from the SPI 2022-23
// public-use file, with more copies in the bands above £200k, £500k, £1m
// and £2m; WAS round 8, LCFS 2024-25, the Effects of Taxes and Benefits
// (ETB) and the National Travel Survey (NTS); quantile-regression forests;
// take-up drawn to DWP and HMRC rates or caseloads, reporters always claim;
// calibration to 1,534 targets with each weight bounded at 10 times its
// starting weight; 78,164 household records.
export const microcosmFlow = [
  { icon: IconUsers, owner: "FRS 2024–25", title: "Base", text: "Family Resources Survey households" },
  {
    icon: IconReceiptTax,
    owner: "HMRC SPI 2022–23",
    title: "Top incomes",
    text: "FRS copies take SPI incomes; more above £200k, £500k, £1m, £2m",
  },
  {
    icon: IconWallet,
    owner: "WAS, LCFS, ETB, NTS",
    title: "Wealth and spending",
    text: "Imputed with quantile-regression forests",
  },
  {
    icon: IconHeartHandshake,
    owner: "DWP and HMRC",
    title: "Take-up",
    text: "Reporters always claim; others drawn to official rates",
  },
  {
    icon: IconTargetArrow,
    owner: "Official totals",
    title: "Calibration",
    text: "1,534 targets; each weight at most 10 times its start",
  },
];

export const microcosmResult = {
  icon: IconDatabase,
  owner: "The result",
  title: "Microcosm UK 2024–⁠25",
  text: "78,164 household records; certified build of 15 Nov 2026",
};

export const microcosmFoot =
  "56 source stages; every survey file pinned by SHA-256. The code is open; the records are FRS-derived under the UK Data Service licence and are not shared.";

// ---------- Slide 8: breakdowns ----------
// The BIST deck's breakdowns (policyengine.py 810a59e outputs). Vigintiles:
// calculate_decile_impacts(..., quantiles=20) and decile_variable= in
// policyengine.py 81bac43 ("deciles", "decileGrouping"); the web app shows
// deciles only ("appReport").
export type Breakdown = { text: string; tag?: Tag };

export const breakdowns: { icon: Icon; title: string; items: Breakdown[] }[] = [
  {
    icon: IconChartBar,
    title: "By income",
    items: [
      { text: "Income and wealth deciles" },
      { text: "Shares gaining and losing, in five bands" },
      { text: "Gini and top shares" },
      { text: "Vigintiles and custom groups: in Python, not in the web app", tag: tags.partly },
    ],
  },
  {
    icon: IconUsers,
    title: "By people",
    items: [
      { text: "Four HBAI poverty measures: absolute and relative, before and after housing costs" },
      { text: "By age and by sex" },
    ],
  },
  {
    icon: IconReceiptTax,
    title: "By programme",
    items: [{ text: "14 programme lines" }, { text: "The net Exchequer cost" }],
  },
  {
    icon: IconMap,
    title: "By geography",
    items: [
      { text: "12 regions and nations" },
      { text: "650 constituencies and 361 local authorities, from a separate certified local-area file" },
      { text: "Published where 10 or more survey households lie behind each number, with 90% intervals" },
    ],
  },
];

// ---------- Slide 9: the Nuffield Foundation grants ----------
// Grants: "nuffieldGrant1" and "supporters". The table lists the areas
// Nuffield names for grant 1 and what exists today in each; it does not
// say each was completed within the grant period.
// - Childcare: England childcare entitlements and Tax-Free Childcare are
//   complete in programs.yaml; PolicyEngine's childcare programmes report,
//   6 June 2025 (policyengine-app-v2 posts).
// - Public services: variables for NHS, education and transport subsidy in
//   policyengine-uk.
// - Local areas: 650 constituencies and 361 local authorities, certified
//   local-area file of 16 November 2026 (BIST deck).
// - Comparison dashboard: the public scorecard ("scorecard",
//   "scorecardCode"); case-level UKMOD comparison pending.
// - AI interface: the Claude Code plugin (PolicyEngine/policyengine-claude)
//   and a Claude connector in preview.
// - Training and symposium: a London event on 3 November 2025, "Supported
//   by the Nuffield Foundation" (policyengine-app-v2 posts); whether it falls
//   under grant 1 is still being checked (README, open checks).
// Grant 2 foot: Autumn Budget 2026 dashboard with its constituency map
// ("budgetDashboard"); the high-value council tax surcharge by constituency,
// 22 October 2026 (policyengine-app-v2 posts, 064804e).
export const grants = [
  {
    title: "Grant 1",
    name: "Enhancing, localising and democratising tax-benefit policy analysis",
    amount: "£251,296",
    dates: "September 2024 to September 2025",
  },
  {
    title: "Grant 2",
    name: "Advancing evidence-based policy with AI & tax-benefit microsimulation",
    amount: "£300,000",
    dates: "July 2026 to June 2029",
  },
];

export const grantRows: { icon: Icon; area: string; today: string; tag: Tag }[] = [
  {
    icon: IconSchool,
    area: "Childcare at household level",
    today: "England childcare entitlements and Tax-Free Childcare in the model; childcare report, 6 Jun 2025",
    tag: tags.done,
  },
  {
    icon: IconBuildingCommunity,
    area: "Public services at household level",
    today: "Variables for NHS, education and transport subsidy",
    tag: tags.done,
  },
  {
    icon: IconMap2,
    area: "Local-authority and constituency datasets",
    today: "650 constituencies and 361 local authorities; certified local-area file (16 Nov 2026 build)",
    tag: tags.done,
  },
  {
    icon: IconGitCompare,
    area: "An open dashboard comparing outputs with other models",
    today: "A public scorecard setting published Autumn Budget 2025 results from UKMOD, the IPPR model, RF and the IFS beside PolicyEngine’s; case-by-case UKMOD comparison pending",
    tag: tags.partly,
  },
  {
    icon: IconMessageChatbot,
    area: "An AI-capable interface",
    today: "A Claude Code plugin; a Claude connector in preview",
    tag: tags.partly,
  },
  {
    icon: IconUsers,
    area: "Training, beta testing and a symposium",
    today: "London event, 3 Nov 2025",
    tag: tags.checking,
  },
];

export const grant2Foot =
  "Grant 2, under way: constituency-level Budget analysis (the Autumn Budget 2026 dashboard and its constituency map); council tax schemes (the high-value council tax surcharge by constituency, 22 Oct 2026); outreach to local journalists.";

// ---------- Slide 10: the Autumn Budget 2026 dashboard ----------
// Tabs and run: the Autumn Budget 2026 deck (commit c6c7d53) and the
// dashboard's run receipt (uk-autumn-budget-dashboard-2026):
// policyengine 6.11.1, Microcosm build of 25 October 2026, OBR October 2026
// forecast. The number of measures differs between sources, so the slide
// gives none. View buttons: the BIST deck's deep links.
export const budgetTabs = [
  { icon: IconBuildingBank, title: "Public finances", text: "With an OBR comparison" },
  { icon: IconMap2, title: "Constituency map", text: "Every measure by constituency" },
  { icon: IconUsers, title: "By age, living standards, poverty", text: "Who gains and loses" },
  { icon: IconCalculator, title: "Household calculator", text: "Enter any household" },
  { icon: IconChartLine, title: "Pre-measures forecast", text: "The baseline the measures change" },
  { icon: IconBook, title: "Policies and methodology", text: "What is and is not modelled" },
];

export const budgetRunLabel = "policyengine 6.11.1; Microcosm build of 25 Oct 2026; OBR October 2026 forecast";

export const budgetViews = [
  { label: "Public finances", query: "?tab=dashboard" },
  { label: "Policies", query: "?tab=policies" },
  { label: "Living standards", query: "?tab=dashboard&sub=living" },
  { label: "Household calculator", query: "?tab=household" },
];

// ---------- Slide 11: RF's 2026 reports ----------
// Figures as each report states them; judgements in quotes. Model use from
// the figure notes: Spread thin Fig 8 ("HBAI using the IPPR Tax-Benefit
// Model; ONS, LCF"), Fig 20 and Figs 21–23 ("RF projection including use of
// the IPPR Tax Benefit Model, ONS data, and OBR forecasts"); Billing me
// softly runs the model at full take-up and subtracts FRS-reported receipt;
// LSO 2026 Annex 1. Counting the cost (8 October 2026) and What a ratchet
// (10 June 2026) are cited by title and date. Home economics: the model used
// is not confirmed by us. Hard truths on PIP (survey and DWP data) and
// Saving private renters (VOA and Stat-Xplore) do not use the model.
export const rfReports = [
  {
    report: "Spread thin",
    date: "29 Oct 2026",
    what: "Autumn Budget 2026: a £4.4bn cost-of-living package, “poorly targeted”",
    use: "Distribution by vigintile (Fig 8); cumulative impact (Fig 20); projections (Figs 21–23)",
  },
  {
    report: "Counting the cost",
    date: "8 Oct 2026",
    what: "Median non-pensioner income −1.3% (£450), 2020–21 to 2026–27",
    use: "A no-inflation-crisis counterfactual",
  },
  {
    report: "Home economics",
    date: "24 Sep 2026",
    what: "A 0.7% proportional property tax in place of council tax",
    use: "Not confirmed by us",
  },
  {
    report: "Billing me softly",
    date: "10 Aug 2026",
    what: "A targeted energy discount: about 40% of households, £2bn",
    use: "Full take-up run minus reported receipt",
  },
  {
    report: "What a ratchet",
    date: "10 Jun 2026",
    what: "A smoothed triple lock saving about £6.5bn a year",
    use: "Pensions costing",
  },
  {
    report: "Living Standards Outlook 2026",
    date: "10 Feb 2026",
    what: "Two-child limit repeal: more than 500,000 families gain £4,560 a year on average",
    use: "Income and poverty projections to 2029–30 (Annex 1)",
  },
];

export const rfReportsFoot =
  "Some work does not use the model: Hard truths on PIP (survey and DWP data); Saving private renters (VOA and Stat-Xplore).";

// ---------- Slide 12: RF's projection method ----------
// Living Standards Outlook 2026, Annex 1 ("lso26"), with the October 2026
// base year from Spread thin ("spreadThin"). The split between RF's own
// processing and the IPPR model is our reading of the annex; the slide asks
// to be corrected.
export const rfMethod = [
  {
    icon: IconDatabase,
    owner: "RF",
    title: "Base data",
    text: "FRS and HBAI 2023–24 (2024–25 in the October 2026 work)",
  },
  {
    icon: IconScale,
    owner: "RF",
    title: "Reweight",
    text: "To ONS population projections, OBR participation and unemployment, PIP caseloads",
  },
  {
    icon: IconTrendingUp,
    owner: "RF",
    title: "Uprate and impute",
    text: "OBR earnings with a minimum-wage floor; pensions RPI capped at 5%; WAS savings; ONS rents",
  },
  {
    icon: IconCalculator,
    owner: "IPPR model",
    title: "Taxes and benefits",
    text: "Each year’s rules; UC take-up 80%, Pension Credit 65% rising to 70%",
  },
  {
    icon: IconChartLine,
    owner: "RF",
    title: "Anchor",
    text: "Modelled growth rates and changes in poverty applied to outturn",
  },
];

export const rfMethodFoot = "Not modelled: local variation in Council Tax Support; sanctions.";

// ---------- Slides 13 and 14: the mapping tables ----------
// Each row: RF's use (or method step), where RF publishes it (or whose step
// it is), a short cell on what PolicyEngine does today, and a status. The
// long text and the code paths for each row are in NOTES.md; the sources
// are named per row below.
export type MapRow = {
  icon: Icon;
  label: string;
  where: string;
  today: string;
  tags: Tag[];
  step: number;
};

// Table A. Sources by row:
// A1 "deciles", "decileGrouping", "appReport". A2 "datedReforms" (nothing
// in policyengine.py). A3 "manifest", "bundleSpec", "growth". A4
// "povertyVariables", "povertyOutputs", "twoChildLimit". A5 "lha",
// "lhaRate". A6 "entitlement", "takeUp", "housingBenefit". A7 "growth"
// (triple-lock index). A8 "growth" (growth rates are parameters; running
// the file on a counterfactual earlier path was not checked). A9
// "councilTax", "sourcesSpec" (was_wealth).
export const usesTable: MapRow[] = [
  {
    icon: IconChartHistogram,
    label: "Budget measures by income group",
    where: "Spread thin, Oct 2026",
    today: "Deciles everywhere; vigintiles in Python",
    tags: [tags.done, tags.partly],
    step: 1,
  },
  {
    icon: IconCalendarStats,
    label: "Cumulative impact of a Parliament",
    where: "Spread thin, Oct 2026",
    today: "No earlier-policy baseline; hand-written reform",
    tags: [tags.notYet],
    step: 1,
  },
  {
    icon: IconTrendingUp,
    label: "Income and poverty projections",
    where: "LSO, Feb 2026",
    today: "OBR uprating to 2031; no future reweighting",
    tags: [tags.partly],
    step: 1,
  },
  {
    icon: IconUsers,
    label: "Child poverty, with and without a policy",
    where: "LSO, Feb 2026",
    today: "Four HBAI measures; child is 17 or under",
    tags: [tags.done],
    step: 2,
  },
  {
    icon: IconHome,
    label: "LHA freeze",
    where: "Spread thin, Oct 2026",
    today: "Rates by BRMA; freeze is a parameter",
    tags: [tags.done],
    step: 2,
  },
  {
    icon: IconHeartHandshake,
    label: "Non-take-up",
    where: "Billing me softly, Aug 2026",
    today: "Entitlement run in Python for five benefits",
    tags: [tags.partly],
    step: 2,
  },
  {
    icon: IconPigMoney,
    label: "Pensions costings",
    where: "What a ratchet, Jun 2026",
    today: "State Pension; triple-lock index",
    tags: [tags.done],
    step: 3,
  },
  {
    icon: IconRefresh,
    label: "Counterfactual histories",
    where: "Counting the cost, Oct 2026",
    today: "Growth rates are parameters; back-casting unchecked",
    tags: [tags.partly],
    step: 3,
  },
  {
    icon: IconHomeDollar,
    label: "Council tax reform",
    where: "Home economics, Sep 2026",
    today: "Council tax and WAS property wealth held",
    tags: [tags.partly],
    step: 3,
  },
];

// Foot of slide 13: "twoChildLimit" (abolished from 6 April 2026), the
// benefit cap, and UC rebalancing (parameters/gov/dwp/universal_credit/
// rebalancing, applied in every baseline by simulation.py).
export const usesFoot = [
  "In the baseline today: two-child limit abolished from 6 April 2026; the benefit cap; the Universal Credit rebalancing.",
  "Checked against policyengine-uk 5987eb3, microcosm cac12ab and policyengine.py 81bac43, 25 November 2026.",
];

// Table B. Sources by row:
// B1 "equivalisation" and the BIST deck. B2 "manifest", "bundleSpec"
// (target_period 2025), "staticAging". B3 "targetReferences" (dwp.pip.*).
// B4 "growth", "uprating". B5 "growth" (obr.private_pension_index; no
// minimum-wage floor found). B6 "sourcesSpec" (was_wealth,
// hmrc_spi_income_spine). B7 "uprating" (uprate_rent). B8 "takeUp",
// "ucTakeUp". B9 "indirect", "sourcesSpec". B10 not in the model; not
// covered by the check. B11 "ctr".
export const stepsTable: MapRow[] = [
  { icon: IconDatabase, label: "Latest FRS and HBAI", where: "RF", today: "FRS 2024–25; HBAI income computed", tags: [tags.done], step: 1 },
  { icon: IconScale, label: "Reweight to future populations", where: "RF", today: "One dataset, fitted to 2025", tags: [tags.notYet], step: 1 },
  { icon: IconHeartHandshake, label: "PIP caseloads", where: "RF", today: "Calibrated for 2025 only", tags: [tags.partly], step: 1 },
  { icon: IconTrendingUp, label: "OBR uprating", where: "RF", today: "OBR October 2026 forecast, to 2031", tags: [tags.done], step: 1 },
  { icon: IconCoins, label: "Minimum-wage floor; pension RPI cap", where: "RF", today: "OBR pension index; no wage floor found", tags: [tags.partly], step: 2 },
  { icon: IconWallet, label: "Savings income", where: "RF", today: "WAS wealth; interest from FRS and SPI", tags: [tags.done], step: 2 },
  { icon: IconHome, label: "Rents", where: "RF", today: "ONS PIPR by region", tags: [tags.done], step: 2 },
  { icon: IconUsers, label: "Partial take-up", where: "IPPR model", today: "Drawn at build; not a run-time setting", tags: [tags.partly], step: 2 },
  { icon: IconShoppingCart, label: "Indirect taxes", where: "IPPR model", today: "LCFS 2024–25; VAT and four duties", tags: [tags.done], step: 3 },
  { icon: IconChartLine, label: "Growth rates applied to outturn", where: "RF", today: "Outside the model", tags: [tags.notYet], step: 3 },
  {
    icon: IconBuildingCommunity,
    label: "Council Tax Support variation",
    where: "Not modelled by RF",
    today: "Five English schemes, Scotland, Wales, pensioners",
    tags: [tags.partly],
    step: 3,
  },
];

export const stepsCaution = "Known gap: Microcosm’s calibration targets are for 2025; RF projects to 2029–30.";

// Managed migration: legacy_benefits_closed, modelled year by year
// (legacy_benefits_closed in policyengine-uk). Sanctions in PolicyEngine
// were not covered by the check.
export const stepsFoot =
  "Static, no behavioural response: the same default in both. Managed migration to Universal Credit is modelled year by year. Sanctions: not modelled in RF’s projections; not yet checked in PolicyEngine.";

// ---------- Slide 15: Billing me softly ----------
// Left: "billingMeSoftly" (a £24,000 test on the highest individual income
// in the household; about 40% of households; a £2bn scheme, about £175
// each). Right: "energyDiscount", "energyCode" (flat option, 2026-27: 28.6m
// households, 11.95m recipients, 42%, £2.09bn; Microcosm UK 2024-25,
// policyengine-uk 2.102.3).
export const energy = {
  proposal: [
    { icon: IconBolt, title: "A targeted energy discount", text: "Resolution Foundation proposal" },
    { icon: IconScale, title: "£24,000 test", text: "On the highest individual income in the household" },
    { icon: IconHome, title: "About 40% of households", text: "A £2bn scheme, about £175 each" },
  ],
  run: [
    { icon: IconHome, title: "28.6 million households", text: "Flat option, 2026–27" },
    { icon: IconUsers, title: "11.95 million recipients", text: "42% of households" },
    { icon: IconCoins, title: "£2.09bn", text: "Cost in 2026–27" },
  ],
  runLabel: "Microcosm UK 2024–25; policyengine-uk 2.102.3",
  foot: "An illustration of encoding a proposal, not a test of either model.",
};

// ---------- Slides 16 and 17: comparison tables ----------
// Columns: PolicyEngine UK | IPPR model, as RF uses it | UKMOD.
// PolicyEngine cells from the BIST deck and the code read on 25 November;
// IPPR cells only from published notes, each dated (LSO 2026, Spread thin,
// the Scottish Government's 2018 description, the MMU staff page); UKMOD
// cells from CeMPA's 2026 country report and microsimulation.ac.uk
// ("ukmod"). "Not public" means we found nothing published. On-slide cells
// are short; the fuller wording is in NOTES.md.
export type CompareRow = { icon: Icon; label: string; cells: [string, string, string]; step: number };

export const compareHeads: [string, string, string] = ["PolicyEngine UK", "IPPR model, as RF uses it", "UKMOD"];

export const dataCompare: CompareRow[] = [
  {
    icon: IconDatabase,
    label: "Base survey",
    cells: [
      "FRS 2024–25",
      "FRS and HBAI 2024–25 (2023–24 in LSO 2026)",
      "FRS; data to users with UK Data Service permission",
    ],
    step: 1,
  },
  {
    icon: IconReceiptTax,
    label: "Top incomes",
    cells: [
      "FRS copies take SPI 2022–23 incomes; more above £200k",
      "HBAI incomes; treatment in the model not public",
      "None by default; optional SPI-adjusted HBAI extension",
    ],
    step: 1,
  },
  {
    icon: IconWallet,
    label: "Wealth",
    cells: [
      "WAS round 8, imputed; savings interest from FRS and SPI",
      "Savings income modelled in WAS, imputed by RF",
      "No CGT, IHT or stamp duty modelled",
    ],
    step: 2,
  },
  {
    icon: IconShoppingCart,
    label: "Spending",
    cells: ["LCFS 2024–25, imputed; also ETB and NTS", "LCF", "LCF, through the indirect-tax add-on"],
    step: 2,
  },
  {
    icon: IconHeartHandshake,
    label: "Benefit take-up",
    cells: [
      "Reporters claim; others drawn at build to DWP and HMRC rates",
      "Partial take-up; UC 80%, Pension Credit 65% to 70%",
      "Official rates, editable by the user",
    ],
    step: 2,
  },
  {
    icon: IconScale,
    label: "Weights and effective sample",
    cells: [
      "1,534 official targets; 78,164 records, effective about 7,400",
      "Not public; RF reweights projection years",
      "No reweighting or calibration, by design",
    ],
    step: 3,
  },
  {
    icon: IconMap,
    label: "Geography",
    cells: ["12 regions and nations; 650 constituencies, 361 local authorities", "Not public", "UK, nations, London; some regional models"],
    step: 3,
  },
  {
    icon: IconCalendarStats,
    label: "Years ahead",
    cells: [
      "OBR uprating to 2031; one set of weights, fitted to 2025",
      "Projected to 2029–30 (LSO 2026)",
      "A release after each Budget (B2026.05, 30 Oct 2026)",
    ],
    step: 3,
  },
];

export const rulesCompare: CompareRow[] = [
  {
    icon: IconCode,
    label: "Platform and language",
    cells: [
      "Python package; rules as YAML parameters and Python formulas",
      "Not public",
      "EUROMOD platform, Windows; own rule language; Python connector",
    ],
    step: 1,
  },
  {
    icon: IconLockOpen,
    label: "Licence and maintainer",
    cells: [
      "AGPL-3.0 and MIT; PolicyEngine, public pull requests",
      "Not open source; PERU, Manchester Metropolitan University",
      "EUPL-1.2 software, CC BY-NC-ND model, free; CeMPA, Essex",
    ],
    step: 1,
  },
  {
    icon: IconDatabase,
    label: "Access to the data",
    cells: ["Code open; FRS-derived records restricted", "Not public", "Input data to users with UK Data Service permission"],
    step: 1,
  },
  {
    icon: IconCoins,
    label: "Direct taxes and benefits",
    cells: [
      "Income tax incl. Scottish rates, NI, CGT; UC, legacy, pensions, disability",
      "On the FRS (2018 description)",
      "Income tax incl. Scottish and Welsh rates, NI, UC, legacy, Scottish benefits",
    ],
    step: 2,
  },
  {
    icon: IconShoppingCart,
    label: "Indirect taxes",
    cells: ["VAT and duties on imputed LCFS spending", "On the LCF (2018 description)", "Through the indirect-tax add-on"],
    step: 2,
  },
  {
    icon: IconBuildingCommunity,
    label: "Council tax and support",
    cells: [
      "Council tax; CTR for Scotland, Wales, pensioners, five English schemes",
      "“With lower accuracy” (2018); RF does not model CTS variation",
      "Council tax from the data; CTR modelled",
    ],
    step: 2,
  },
  {
    icon: IconHomeDollar,
    label: "Capital and property taxes",
    cells: ["CGT, SDLT, LBTT", "Not public", "Not modelled"],
    step: 2,
  },
  {
    icon: IconArrowsSplit,
    label: "Behaviour",
    cells: ["Static by default; optional labour supply", "Static", "Static; behavioural add-on"],
    step: 3,
  },
  {
    icon: IconCircleCheck,
    label: "Validation, tests, documentation",
    cells: [
      "Calibration dashboard (in-sample); OBR comparisons; 6,782 tests",
      "Not public",
      "Annual country report against administrative data and HBAI",
    ],
    step: 3,
  },
  {
    icon: IconWorld,
    label: "Interfaces",
    cells: ["Web app, Python, Claude connector (preview)", "Not public", "Windows interface; UKMOD Explore web tool"],
    step: 3,
  },
  {
    icon: IconUsers,
    label: "Known users",
    cells: [
      "No 10 (10ds-microsim), NEF, CPS, NIESR",
      "IPPR, RF, JRF, NEF, Legatum",
      "Scottish and Welsh Governments, SPICe, GLA, Commons Library",
    ],
    step: 3,
  },
];

// ---------- Slide 18: calibration ----------
// The certified build of 15 November 2026, as the BIST deck reads the
// public calibration dashboard ("dashboard"), 18 November 2026: 1,534
// targets; 98.8% within 10% (in-sample); 78,164 household records;
// effective sample size about 7,380 (shown as about 7,400). Starting weights
// (already including the SPI copies): 675 of 1,534 within 10% (44%);
// Universal Credit 17% to 97%, Pension Credit 8% to 100%, PIP 18% to 100%.
// By publisher: HMRC 776, ONS 365, DWP 233, MHCLG 82, others 78.
export const calibration = {
  stats: [
    { value: "1,534", label: "official targets" },
    { value: "98.8%", label: "within 10% of the official figure" },
    { value: "78,164", label: "household records" },
    { value: "about 7,400", label: "effective sample size" },
  ],
  beforeAfter: [
    { label: "All targets", before: "44%", after: "98.8%" },
    { label: "Universal Credit", before: "17%", after: "97%" },
    { label: "Pension Credit", before: "8%", after: "100%" },
    { label: "PIP", before: "18%", after: "100%" },
  ],
  publishers: [
    { name: "HMRC", count: 776 },
    { name: "ONS", count: 365 },
    { name: "DWP", count: 233 },
    { name: "MHCLG", count: 82 },
    { name: "Others", count: 78 },
  ],
  foot: "Targets are for 2025. The calibration dashboard has no out-of-sample page for the UK.",
};

// ---------- Slide 19: Autumn Budget 2026 against the OBR ----------
// "budgetBriefing": PolicyEngine static estimates against the OBR's
// detailed table 1.1, £m. Run: policyengine 6.11.1, Microcosm build of 25
// October 2026. The percentage column is computed on the slide. The 1p
// basic-rate comparison is left off until the build behind it is named.
export const budgetRows = [
  { measure: "Household Energy Payment", year: "2026–27", pe: -1969, obr: -2627, step: 1 },
  { measure: "Zero VAT on electricity", year: "2026–27", pe: -840, obr: -734, step: 1 },
  { measure: "Fuel duty", year: "2026–27", pe: -301, obr: -574, step: 1 },
  { measure: "Property income tax", year: "2029–30", pe: 429, obr: 394, step: 2 },
  { measure: "Trading allowance", year: "2028–29", pe: -118, obr: -221, step: 2 },
  { measure: "Carer’s Allowance taper", year: "2031–32", pe: -48, obr: -69, step: 2 },
];

export const budgetPackage = { measure: "Package of seven measures", year: "2026–27", pe: -3110, obr: -3935 };

export const budgetReasons = [
  "Timing: tax-year liability against the national accounts basis",
  "Coverage: households only; household fuel is about £13bn of the £24bn fuel duty base",
  "Behaviour: PolicyEngine is static",
  "Scope: the devolved share of the energy payment is not modelled",
];

export const budgetLabel = "As published, 31 Oct 2026: policyengine 6.11.1; Microcosm build of 25 Oct 2026";

// ---------- Slide 20: what we do not claim ----------
// Not claimed: "scorecard", "scorecardCode"; the BIST deck (in-sample, no
// UK out-of-sample page); "hmt"; "ukmod" (annual country report).
// Known limits: the BIST deck; "manifest" and "bundleSpec" (one dataset,
// fitted to 2025); "takeUp" (take-up drawn at build); "ctr".
export const notClaimed = [
  "No reconciled comparison with the IPPR model, UKMOD or TAXBEN; a public scorecard sets published results beside ours, in progress",
  "The calibration fit is in-sample; there is no out-of-sample check for the UK",
  "HM Treasury trialled the model in 2024: NI results close, income tax comparisons “less promising”; not deployed. Model and data have changed since",
  "UKMOD publishes the most validation: an annual country report against administrative data and HBAI",
];

export const knownLimits = [
  "Static by default; no general equilibrium",
  "No firms and no corporation tax",
  "No reweighting for future years: one set of weights, fitted to 2025",
  "Take-up is drawn when the data are built, not set at run time",
  "English working-age CTR: reported amounts outside five schemes",
  "Thin cells: effective sample about 7,400; areas need 10+ households",
  "The SPI copies’ industry is imputed",
  "The microdata are restricted (UK Data Service licence)",
];

// The scorecard's like-for-like rows: policyengine-scorecard 771c028,
// app/public/data/populations.json (built 30 October 2026), harvest
// sources/harvest-uk-ab2025-2026-09-24/. The three rows labelled
// "comparable" in the repository. PolicyEngine runs: policyengine-uk
// 2.132.6, policyengine.py 6.11.0, Microcosm UK 2024-25 build
// 20261019T083323Z-6cba5d71, static. RF figures from its Autumn Budget 2025
// period work (RF publications harvested for October to December 2025,
// before the two-child limit was abolished from April 2026). 755 scorecard
// rows have a result; the higher-rate threshold example (£46k: RF £9.0bn,
// PolicyEngine £6.62bn) is from the same file. The difference is computed
// on the slide.
export const scorecardRows = [
  { label: "Scrap the two-child limit: Exchequer cost", rf: 3.5, pe: 3.19, unit: "£bn" },
  { label: "Scrap the two-child limit: fewer children in poverty (AHC)", rf: 480, pe: 445, unit: "k" },
  { label: "A three-child limit: fewer children in poverty (AHC)", rf: 350, pe: 318, unit: "k" },
];

export const scorecardNote =
  "3 of 755 scorecard rows with a result are like-for-like; the rest are approximations of the other model’s concept, some far apart (e.g. cutting the higher-rate threshold to £46k: RF £9.0bn, PolicyEngine £6.62bn). The scorecard grades nothing.";

export const scorecardLabel =
  "2029–30. RF: Autumn Budget 2025 work. PolicyEngine: policyengine-uk 2.132.6, Microcosm build of 19 Oct 2026, static";

// ---------- Slide 21: routes in ----------
// Web app: a parametric reform with a national report needs no data access
// ("appReport"); structural reforms without code are not available (only
// pre-coded switches, hidden from parameter search: "appSearch"); vigintiles
// and entitlement runs are Python only. Connector: a hosted PolicyEngine
// connector for Claude, in preview and not yet launched; example prompt
// as used in PolicyEngine's demonstrations of the connector. Plugin: PolicyEngine/
// policyengine-claude. Python: policyengine.py README (pip install
// policyengine; pe.uk.calculate_household; pe.uk.economic_impact_analysis).
// Population runs in Python need an access token for the restricted data.
export const routes = [
  {
    icon: IconWorld,
    title: "Web app",
    text: "policyengine.org/uk: a parametric reform with a national report (budget, deciles, poverty, inequality, constituencies) in the browser",
    tag: tags.done,
    extra: { text: "Structural reforms, vigintiles and entitlement runs need code", tag: tags.notYet },
  },
  {
    icon: IconMessageChatbot,
    title: "Ask in plain English",
    text: "A PolicyEngine connector for Claude, e.g. “Score raising the UK basic rate of income tax to 21p”; not yet launched",
    tag: tags.preview,
  },
  {
    icon: IconCode,
    title: "An AI coding assistant",
    text: "The PolicyEngine plugin for Claude Code writes and runs the analysis; the analyst reviews the code and tables",
    tag: tags.done,
  },
  {
    icon: IconBrandPython,
    title: "Python",
    text: "pip install policyengine",
    code: ["pe.uk.calculate_household(...)", "pe.uk.economic_impact_analysis(...)"],
    tag: tags.done,
  },
];

export const routesFoot =
  "The web app needs no data access. In Python, population runs need an access token for Microcosm UK, which is FRS-derived and restricted.";

// ---------- Slide 22: three options ----------
export const options = [
  {
    icon: IconWorld,
    title: "A. Use what is public",
    rows: [
      { label: "What it is", text: "The web app, the Budget dashboards and published analyses, as a second source beside existing modelling" },
      { label: "What it needs", text: "No data access and no code" },
      { label: "What it gives", text: "A quick cross-check on a costing or a household case" },
    ],
  },
  {
    icon: IconArrowsSplit,
    title: "B. PolicyEngine runs, RF specifies",
    rows: [
      { label: "What it is", text: "RF sets out an analysis; PolicyEngine could run it and return tables and code, in a public repository or not" },
      { label: "What it needs", text: "A specification and a named output; time to review differences" },
      { label: "What it gives", text: "A side-by-side with RF’s published numbers, and a first reconciliation between the two models" },
    ],
  },
  {
    icon: IconCode,
    title: "C. RF runs it",
    rows: [
      { label: "What it is", text: "Analysts run PolicyEngine themselves, in Python or with an AI assistant, with RF’s own projection steps around it" },
      { label: "What it needs", text: "An access token, a way to hold FRS-derived data under RF’s own terms, and the “Not yet” steps" },
      { label: "What it gives", text: "Open rules and data pipeline, local-area outputs, structural changes by pull request" },
    ],
  },
];

export const optionsFoot =
  "What C would need built, from slides 13 and 14: reweighting for future years; an “earlier policy, uprated” baseline; take-up as a run-time setting; anchoring to outturn. Or these stay in RF’s own code.";

// ---------- Slide 23: a possible pilot ----------
export const pilotFlow = [
  { icon: IconTargetArrow, title: "Choose", text: "One published chart and its definitions" },
  { icon: IconRefresh, title: "Reproduce", text: "The same measures, year and income definition in PolicyEngine" },
  { icon: IconArrowsSplit, title: "Reconcile", text: "Split each difference into data, rules, take-up and uprating" },
  { icon: IconBook, title: "Decide", text: "A short note on what matched, what did not and what it would take" },
];

export const pilotBrings = {
  rf: [
    "The chart’s specification: income measure, equivalisation, how vigintiles are formed, take-up assumptions",
    "The published series behind the chart",
    "A reviewer’s time on the differences",
  ],
  pe: [
    "The run, on the certified Microcosm build, with its code and run receipt",
    "The reconciliation table and note",
    "Small pieces the mapping shows missing, such as a vigintile view in the web app; scope to agree",
  ],
};

export const pilotCandidates = [
  { title: "Candidate 1: the Autumn Budget 2026 distribution chart", text: "Spread thin, Fig 8; both sides have published on the same Budget" },
  { title: "Candidate 2, smaller: Billing me softly", text: "The proposal is already encoded; the pilot would add the non-take-up method" },
];

// ---------- Slide 24: questions ----------
export const questions = [
  { icon: IconFileSearch, text: "Is the list of uses on slides 13 and 14 right and complete, and which use matters most?" },
  { icon: IconGitCompare, text: "Which analysis would be the most informative one to reproduce side by side?" },
  { icon: IconArrowsSplit, text: "Which steps of the projection method would stay in RF’s own code, and which would the model need to do?" },
  { icon: IconTargetArrow, text: "What agreement with published figures, and against which benchmark, would be useful to see?" },
  { icon: IconDatabase, text: "How could RF hold FRS-derived data such as Microcosm UK under its own UK Data Service terms?" },
  { icon: IconMessageQuestion, text: "Which route in would suit: the web app, an AI assistant or code, and should a pilot’s code be public?" },
];

// ---------- Slide 25: closing ----------
// Emails as used in other decks in this repository. The Nuffield credit
// follows the Autumn Budget 2026 deck: "Funded by" and the white logo on a
// dark background, as the Foundation asked on 22 October 2026, linking to
// the grant 1 project page.
export const closingLinks: { label: string; href: string }[] = [
  { label: "policyengine.org/uk", href: sources.home.href },
  { label: "github.com/PolicyEngine/policyengine-uk", href: sources.model.href },
  { label: "github.com/PolicyEngine/microcosm", href: sources.data.href },
  { label: "Calibration dashboard (15 Nov 2026 build)", href: sources.dashboard.href },
  { label: "policyengine.org/uk/budgets/autumn-2026", href: sources.budgetDashboard.href },
  { label: "policyengine.org/uk/targeted-energy-discount", href: sources.energyDiscount.href },
  { label: "doi.org/10.21105/joss.11115", href: sources.joss.href },
  { label: "vahid@policyengine.org · max@policyengine.org", href: "mailto:vahid@policyengine.org,max@policyengine.org" },
];

export const funder = {
  label: "Funded by",
  name: "Nuffield Foundation",
  logo: "/logos/funders/nuffield-foundation-white.svg",
  width: 118,
  height: 70,
  source: sources.nuffieldGrant1,
};
