// Content for PolicyEngine's slides for the Resolution Foundation,
// 30 November 2026.
//
// Every figure and claim below carries a comment naming its source; the
// links are in "sources", pinned to a commit or a publication date. Two
// kinds of source appear:
// - Figures about the Microcosm UK data come from one build only: the
//   certified national build of 22 November 2026
//   (microcosm-uk-2024-25-national/uk-frs-calibration-attempt-
//   20261122T100732Z-b891aa69, certified in policyengine.py 6.20.3 on 24
//   November; manifest at tag 6.20.3, commit 81bac43), as the public
//   calibration dashboard reports it (its data routes, read 25 November
//   2026; the method reproduces every 15 November figure the BIST deck
//   cites). Results run on other builds carry a run label where they are
//   shown (on the slide, or in the notes for the scorecard rows).
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
// CeMPA working paper 7/21. Where we found nothing published, the slides say
// "Not found in published sources", which means only that.
//
// The six parts are "parts" below; the slide order is in config.ts.

import {
  IconAdjustmentsHorizontal,
  IconProgress,
  IconArrowsSplit,
  IconBolt,
  IconBook,
  IconBrandPython,
  IconBuildingBank,
  IconBuildingCommunity,
  IconBuildingEstate,
  IconBuildingFactory2,
  IconBuildingMonument,
  IconCalculator,
  IconCalendarStats,
  IconChartBar,
  IconChartHistogram,
  IconChartLine,
  IconCircleCheck,
  IconCode,
  IconCoins,
  IconCopy,
  IconEye,
  IconFileDescription,
  IconKey,
  IconPuzzle,
  IconTable,
  IconDatabase,
  IconFileSearch,
  IconGasStation,
  IconPlug,
  IconBriefcase,
  IconBriefcaseOff,
  IconChartPie,
  IconHandStop,
  IconHistory,
  IconPin,
  IconUserCheck,
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
  // HM Treasury's algorithmic transparency record, 17 December 2024: a pilot
  // alongside IGOTM (the record gives no start date; PolicyEngine's event
  // report of 10 November 2025 gives March 2025, later than the record
  // itself, so no start date is quoted); "not
  // currently deployed"; National Insurance results close; income tax
  // comparisons "less promising".
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
  // An LSE Centre for Macroeconomics discussion paper that combined
  // PolicyEngine UK with NIESR's NiGEM model (as the BIST deck cites it).
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
  // Funds constituency-level Budget analysis, local Council Tax Reduction
  // variation and outreach to local journalists. Read 24 November 2026.
  supporters: { label: "PolicyEngine supporters", href: "https://www.policyengine.org/uk/supporters" },
  nuffieldGrant2: {
    label: "Nuffield Foundation project page, grant 2",
    href: "https://www.nuffieldfoundation.org/project/advancing-evidence-based-policy-with-ai-tax-benefit-microsimulation",
  },
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
    label: "Take-up flags (would_claim_uc and others)",
    href: `${ukRepo}/variables/gov/dwp/universal_credit/would_claim_uc.py`,
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
  // The calibration dashboard, pinned to the certified build of 22 November
  // 2026.
  dashboard: {
    label: "Calibration dashboard, pinned to the 22 November build",
    href: "https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk&release=microcosm-uk-2024-25-national/uk-frs-calibration-attempt-20261122T100732Z-b891aa69",
  },
  // Untargeted checks against HBAI (HBAI is not a calibration target):
  // microcosm#1334 on the 19 October build (absolute poverty before housing
  // costs 12.2% against HBAI's 15.9%; median income about 6% high; the
  // relative-after-housing-costs figure, 18.1% against 19.6%, is from
  // uk-living-standards-outlook#1 on the same file), and microcosm#1710 on the
  // 22 November build (children below the AHC line: 3.40m, 23.7%, against
  // HBAI's 3.97m, 27%).
  hbaiCheck: { label: "microcosm#1334: Microcosm against HBAI", href: "https://github.com/PolicyEngine/microcosm/issues/1334" },
  hbaiCheckChildren: {
    label: "microcosm#1710: child poverty on the 22 November build",
    href: "https://github.com/PolicyEngine/microcosm/issues/1710#issuecomment-7133021113",
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
  // lanes.json lists 25 UK lanes, including UKMOD statistics (758 claims)
  // and an Autumn Budget 2025 harvest of published results from UKMOD, IPPR
  // (the think tank's publications), the Resolution Foundation and the IFS
  // (2,649 claims, 628 with a PolicyEngine counterpart, harvested 24
  // September 2026). populations.json, a different count: 755 rows with a
  // result from eight outside modellers (RF 489, UKMOD 152, IFS 86, IPPR 20,
  // JRF 4, CPAG 2, FAI 1, WBG 1). The case-level UKMOD comparison is listed
  // as pending. It has no TAXBEN lane.
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
  // Brewer, Clegg, Leather, Marshall and Smith, 8 October 2026 ("The impact
  // of five years of high inflation on living standards"; not RF's 2019
  // report of the same name): median non-pensioner income −1.3% (£450),
  // 2020-21 to 2026-27; its figure notes name the IPPR model and FRS 2024-25.
  countingTheCost: {
    label: "Counting the cost, 8 October 2026",
    href: "https://www.resolutionfoundation.org/publications/counting-cost/",
  },
  // Curtice and Clegg, 10 June 2026, p.5: a smoothed earnings link from
  // 2027-28 would save around £650 million in 2029-30, net.
  whatARatchet: {
    label: "What a ratchet!, 10 June 2026",
    href: "https://www.resolutionfoundation.org/publications/what-a-ratchet/",
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
  // Manchester Metropolitan University staff profile (the IPPR model's
  // maintainer). CeMPA working paper 7/21 (2021), IJM page 2 (PDF page 4): PERU at
  // Manchester Metropolitan University maintains the IPPR model; it is
  // licensed to users for a fee; users named are IPPR, the Resolution
  // Foundation, JRF, NEF and Legatum.
  mmu: {
    label: "Manchester Metropolitan University staff profile",
    href: "https://www.mmu.ac.uk/staff/profile/professor-ashwin-kumar",
  },
  // CeMPA, University of Essex: microsimulation.ac.uk and its 2026 UKMOD
  // country report (CeMPA working paper 8/26, April 2026).
  ukmod: { label: "UKMOD, CeMPA", href: "https://www.microsimulation.ac.uk/" },
  // UKMOD Country Report 2023-2030 (van de Ven and Popova, CeMPA working
  // paper 8/26, April 2026). Printed page = PDF page minus 1.
  ukmodReport: {
    label: "UKMOD Country Report 2023–2030, CeMPA WP 8/26",
    href: "https://www.iser.essex.ac.uk/wp-content/uploads/files/working-papers/cempa/cempa8-26.pdf",
  },
  // CeMPA's release B2026.03, 22 June 2026: input data from the 2024 wave
  // of the FRS (UK_2024_a1 single year, UK_2024_b1 three-year pooled,
  // UK_2024_d1).
  ukmodB202603: {
    label: "UKMOD release B2026.03, 22 June 2026",
    href: "https://www.microsimulation.ac.uk/about/news/2026/06/22/ukmod-b2026-03/",
  },
  // UKMOD Explore: the UK, its four nations and London.
  ukmodExplore: { label: "UKMOD Explore", href: "https://www.microsimulation.ac.uk/ukmod/ukmod-explore/" },
  // Richiardi, Collado and Popova, CeMPA working paper 7/21 (July 2021),
  // IJM page 2: the IPPR model "is licensed to users for a hefty fee";
  // structural reforms are commissioned from PERU; with UKMOD it "completes
  // the list of publicly available tax-benefit models for the UK". Users
  // named for UKMOD and for the IPPR model.
  cempa721: {
    label: "CeMPA working paper 7/21, July 2021",
    href: "https://www.iser.essex.ac.uk/wp-content/uploads/files/working-papers/cempa/cempa7-21.pdf",
  },
  // IPPR, 10 June 2024: a 2p cut to National Insurance, average gains for
  // working-age households in all 12 regions and nations ("Source: IPPR Tax
  // and Benefit Model" on the chart beside the list).
  ipprNics: {
    label: "IPPR, 10 June 2024: the 2p National Insurance cut",
    href: "https://www.ippr.org/media-office/national-insurance-cut-would-disproportionately-benefit-highest-earners-and-londoners-finds-ippr",
  },
  // Fraser of Allander Institute, Meeting Scotland's child poverty targets
  // (March 2025); its technical appendix: "We use the IPPR tax-benefit
  // microsimulation model (v2.7.8)".
  faiChildPoverty: {
    label: "Fraser of Allander Institute, March 2025",
    href: "https://fraserofallander.org/publications/meeting-scotlands-child-poverty-targets-modelling-and-policy-packages",
  },
} satisfies Record<string, Source>;

export type Tone = "built" | "muted" | "caution";
export type Tag = { label: string; tone: Tone };

// Status tags, in the body only, never beside a title. "Done": the code or a
// standard output does it today. "Partly": it works in Python but not in the
// web app, or covers only part of what is needed. "Not yet": it would need
// building or hand-written code. Muted tags mark a preview, an in-sample
// figure, something outside the model, or a step done by a different method.
const tag = (label: string, tone: Tone): Tag => ({ label, tone });
export const tags = {
  done: tag("Done", "built"),
  partly: tag("Partly", "caution"),
  notYet: tag("Not yet", "muted"),
  different: tag("Different method", "muted"),
  preview: tag("Preview", "muted"),
  inSample: tag("In-sample", "muted"),
  outside: tag("Outside the model", "muted"),
};

export const parts = [
  { key: "intro", icon: IconFlag, title: "Introduction", short: "Introduction", text: "Who we are" },
  {
    key: "nuffield",
    icon: IconHeartHandshake,
    title: "The Nuffield Foundation grants",
    short: "Nuffield",
    text: "What they named and what exists today",
  },
  {
    key: "model",
    icon: IconScale,
    title: "The model and the data",
    short: "Model and data",
    text: "PolicyEngine UK and Microcosm UK 2024–25",
  },
  {
    key: "uses",
    icon: IconFileSearch,
    title: "The Resolution Foundation’s research",
    short: "RF’s uses",
    text: "RF’s published analyses, mapped to PolicyEngine",
  },
  {
    key: "compare",
    icon: IconGitCompare,
    title: "Checks",
    short: "Checks",
    text: "Data, calibration, official costings, known limits",
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

// ---------- Slide 24: our reading so far, before the questions ----------
// Summaries of slides 4 and 13 to 14, with no tally of statuses. On slide 24,
// not slide 2, so RF has seen the mapping before the summary, and question 1
// asks whether it is right.
export const inBrief = [
  {
    label: "Nuffield",
    icon: IconHeartHandshake,
    text: "Local-area data done; childcare and public services in part; scorecard and AI interface in progress",
  },
  {
    label: "RF’s uses",
    icon: IconFileSearch,
    text: "Decile charts, the LHA freeze and OBR uprating done; most others part-built, in Python",
  },
  {
    label: "Main gaps",
    icon: IconPuzzle,
    text: "Poverty below HBAI’s, future-year weights, take-up fixed at build, an earlier-policy baseline",
  },
];

// ---------- Slide 3: who we are ----------
// Facts: policyengine.org/uk/donate ("about"); Nuffield grants made in 2024
// and 2026 ("nuffieldGrant1", "supporters"); the policyengine.py paper
// ("joss"); licences from the LICENSE files as pinned in the BIST deck
// (policyengine-uk and policyengine.py AGPL-3.0, microcosm MIT).
// Government row: 10 Downing Street built 10ds-microsim, described as
// experimental, on PolicyEngine ("no10"); HM Treasury's pilot, recorded on 17
// December 2024, not deployed ("hmt"); a Lords debate of 24 February 2026
// cited House of Commons Library research that used PolicyEngine
// ("hansard"). Shown as a text list, not logos: the links are a use, a pilot
// and a citation, and official logos would overstate them (Parliament's
// portcullis is also restricted in use). The OBR's listing of PolicyEngine
// among organisations it engaged with ("obr") is left off as too weak.
// Think tanks: only those with a public source (the BIST deck's links); the
// Good Growth Foundation and WPI Economics, which have none, are left off.
export type Logo = {
  name: string;
  logo?: string;
  width?: number;
  pixelHeight?: number;
  height: number;
  darken?: boolean;
  source?: Source;
  caption?: string;
  icon?: Icon;
};

export const whoWeAre = {
  facts: [
    {
      icon: IconHeartHandshake,
      title: "A non-profit",
      text: "Free, open-source tax and benefit tools; funded in the UK by the Nuffield Foundation",
    },
    {
      icon: IconWorld,
      title: "UK and US models",
      text: "One Python package, policyengine.py",
      cite: { text: "Ahmadi et al., 2026, JOSS", source: sources.joss },
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
      icon: IconBuildingEstate,
      height: 2.7,
      source: sources.no10,
      caption: "Built 10ds-microsim (experimental) on PolicyEngine",
    },
    { name: "HM Treasury", icon: IconBuildingBank, height: 3.4, source: sources.hmt, caption: "Pilot (record of 17 Dec 2024); not deployed" },
    {
      name: "House of Lords",
      icon: IconBuildingMonument,
      height: 2.2,
      source: sources.hansard,
      caption: "Debate cited Commons Library research using it, 24 Feb 2026",
    },
  ] as Logo[],
  thinkTanks: [
    {
      name: "New Economics Foundation",
      logo: "/logos/orgs/new-economics-foundation.png",
      width: 567,
      pixelHeight: 241,
      height: 3.8,
      source: sources.nef,
      caption: "New Economics Foundation",
    },
    {
      name: "Centre for Policy Studies",
      logo: "/logos/orgs/centre-for-policy-studies.png",
      width: 223,
      pixelHeight: 223,
      height: 3.8,
      source: sources.cps,
      caption: "Centre for Policy Studies",
    },
    {
      name: "Mosley and Cornforth (2023)",
      height: 2.7,
      source: sources.niesr,
      caption: "LSE CFM paper, with NIESR’s NiGEM model",
    },
  ] as Logo[],
};

// ---------- Slide 6: how a run works ----------
// The rules: policyengine-uk ("model"). The households: Microcosm UK
// 2024-25, uprated with the OBR's October 2026 EFO, outturn to 2025 and
// forecasts to 2031 ("growth"). The reform example is the BIST deck's
// (policyengine-uk tests/microsimulation/reforms_config.yaml, "Raise basic
// rate by 1pp"). Outputs: the BIST deck's breakdowns. Behaviour, in one
// wording across the deck: labour supply elasticities are 0 unless switched
// on; capital gains
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
    text: "Microcosm UK 2024–⁠25, uprated with the OBR’s October 2026 forecast to 2031–32",
  },
  {
    icon: IconCopy,
    title: "Run twice",
    text: "Baseline law and a reform: a parameter path and a value",
    code: "gov.hmrc.income_tax.\u200Brates.uk[0].rate: 0.21",
  },
  {
    icon: IconChartBar,
    title: "The difference",
    text: "Exchequer cost, incomes by decile, poverty, by place",
  },
];

// The one wording for behaviour, used on slides 6 and 17, and the notes.
export const behaviourLine =
  "No labour-supply response by default; two responses are on (capital gains realisations, employer NI passed through to pay).";

export const modelFoot = behaviourLine;
export const modelFootItems = [
  { icon: IconBriefcaseOff, text: "No labour-supply response by default" },
  { icon: IconTrendingUp, text: "On by default: capital gains realisations" },
  { icon: IconCoins, text: "On by default: employer NI passed through to pay" },
];

// ---------- Slide 7: how the rules are encoded ----------
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
  { icon: IconAdjustmentsHorizontal, value: "1,086", label: "parameter files", text: "998 with a reference" },
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

// ---------- Slide 8: coverage ----------
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
      "England childcare entitlements; Tax‑Free Childcare",
    ],
  },
  {
    icon: IconProgress,
    title: "Partial",
    tag: tags.partly,
    items: [
      "Council Tax Reduction: Scotland, Wales, England’s pensioner scheme and five English working‑age schemes",
      "Alcohol, tobacco and gambling duties; vehicle excise duty",
      "Business rates, allocated by shareholding; Warm Home Discount",
    ],
  },
  {
    icon: IconBuildingFactory2,
    title: "Firms",
    tag: tags.outside,
    items: ["Corporation tax", "Firms as entities"],
  },
];

export const coverageFootItems = [
  { icon: IconHomeDollar, text: "Welsh LTT" },
  { icon: IconHome, text: "LHA" },
  { icon: IconUsers, text: "The two-child limit" },
  { icon: IconBuildingCommunity, text: "The council tax surcharge" },
];

export const coverageFoot =
  "In the code, not yet in the registry: Welsh LTT, LHA, the two-child limit, the council tax surcharge.";

// ---------- Slide 9: the household file ----------
// The Microcosm build (22 November build, microcosm 41053d9, whose
// source_stages.json lists 57 stages; the BIST deck's 15 November build had
// 56, without uc_new_claimant_draw): 57 source stages, each survey file pinned by SHA-256; FRS
// 2024-25 base; copies of FRS households take incomes from the SPI 2022-23
// public-use file, with more copies in the bands above £200k, £500k, £1m
// and £2m; WAS round 8, LCF 2024-25, the Effects of Taxes and Benefits
// (ETB) and the National Travel Survey (NTS); quantile-regression forests;
// take-up drawn to DWP and HMRC rates or caseloads, reporters always claim;
// calibration to 1,536 targets with each weight bounded at 10 times its
// starting weight; 78,450 household records.
export const microcosmFlow = [
  { icon: IconUsers, owner: "FRS 2024–25", title: "Base", text: "Family Resources Survey households" },
  {
    icon: IconReceiptTax,
    owner: "HMRC SPI 2022–23",
    title: "Top incomes",
    text: "FRS copies take SPI incomes; more above £200k",
  },
  {
    icon: IconWallet,
    owner: "WAS, LCF, ETB, NTS",
    title: "Wealth and spending",
    text: "Imputed with quantile-regression forests",
  },
  {
    icon: IconHeartHandshake,
    owner: "DWP and HMRC",
    title: "Take-up",
    text: "Reported recipients always claim; others drawn to official rates or caseloads",
  },
  {
    icon: IconTargetArrow,
    owner: "Official totals",
    title: "Calibration",
    text: "1,536 targets; each weight at most 10 times its start",
  },
];

export const microcosmResult = {
  icon: IconDatabase,
  owner: "The result",
  title: "Microcosm UK 2024–⁠25",
  text: "78,450 household records; certified build of 22 Nov 2026",
};

export const microcosmFootItems = [
  { icon: IconPin, text: "57 source stages, each pinned" },
  { icon: IconLockOpen, text: "Open code" },
  { icon: IconKey, text: "Records not public: access by token" },
];

export const microcosmFoot =
  "57 source stages, each pinned. Open code. Records are FRS-derived (UK Data Service licence): not public, access by token.";

// ---------- Slide 10: breakdowns ----------
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
      { text: "Vigintiles, custom groups: Python only", tag: tags.partly },
    ],
  },
  {
    icon: IconUsers,
    title: "By people",
    items: [
      { text: "Four HBAI poverty measures: absolute, relative; BHC, AHC" },
      { text: "By age and by sex" },
      { text: "Household type, tenure, children: in Python", tag: tags.partly },
    ],
  },
  {
    icon: IconMap,
    title: "By geography",
    items: [
      { text: "12 regions and nations" },
      { text: "650 constituencies, 361 local authorities (separate file)" },
      { text: "Published where 10+ survey households lie behind a number; 90% intervals" },
    ],
  },
  {
    icon: IconReceiptTax,
    title: "By programme",
    items: [{ text: "14 programme lines" }, { text: "The net Exchequer cost" }],
  },
];

// ---------- Slide 4: the Nuffield Foundation grants ----------
// Grants: "nuffieldGrant1" and "supporters". The table lists the areas
// Nuffield names for grant 1 and what exists today in each; it does not
// say each was completed within the grant period (the foot says so).
// - Childcare: England childcare entitlements and Tax-Free Childcare are
//   complete in programs.yaml; the Childcare Offer for Wales is partial;
//   Nuffield names all childcare subsidies. PolicyEngine's childcare
//   programmes report, 6 June 2025 (policyengine-app-v2 posts).
// - Public services: variables for NHS, education and transport subsidy in
//   policyengine-uk; Nuffield also names adult social care, which a search
//   of policyengine-uk 5987eb3 did not find.
// - Local areas: 650 constituencies and 361 local authorities, certified
//   local-area file of 23 November 2026 (7081d968, certified in
//   policyengine.py 6.20.3; the constituency and local authority lists are
//   unchanged).
// - Comparison dashboard: Nuffield describes a dashboard validating against
//   other microsimulation models at household level. What exists is the
//   public scorecard ("scorecard", "scorecardCode"); its IPPR rows are the
//   think tank's publications (77 rows, one with a PolicyEngine value), not
//   runs of the IPPR model; the case-level UKMOD comparison is pending.
// - AI interface: the Claude Code plugin (PolicyEngine/policyengine-claude)
//   and a Claude connector in preview.
// - Symposium: a London event on 3 November 2025, "Supported by the
//   Nuffield Foundation" (policyengine-app-v2 posts,
//   policyengine-2-event-report.md). It falls after grant 1's stated end;
//   the slide does not call it a grant deliverable.
// Grant 2 foot: Autumn Budget 2026 dashboard with its constituency map
// ("budgetDashboard"); Nuffield's council tax item is local Council Tax
// Reduction variation, which is under way.
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
    today: "England entitlements, Tax-Free Childcare; Wales in part",
    tag: tags.partly,
  },
  {
    icon: IconBuildingCommunity,
    area: "Public services at household level",
    today: "NHS, education and transport; no adult social care",
    tag: tags.partly,
  },
  {
    icon: IconMap2,
    area: "Local-authority and constituency datasets",
    today: "650 constituencies, 361 local authorities",
    tag: tags.done,
  },
  {
    icon: IconGitCompare,
    area: "Open dashboard validating against other models",
    today: "Public scorecard of published Autumn Budget 2025 results; household-level check pending",
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
    area: "A symposium",
    today: "London event, 3 Nov 2025",
    tag: tags.done,
  },
];

export const grant1Foot =
  "What exists today, not what was delivered within the grant period.";

export const grant2Foot =
  "Grant 2, under way: Budget analysis by constituency; local Council Tax Reduction; outreach to local journalists.";

// ---------- Slide 5: the Autumn Budget 2026 dashboard ----------
// Tabs and run: the Autumn Budget 2026 deck (commit c6c7d53) and the
// dashboard's run receipt (uk-autumn-budget-dashboard-2026):
// policyengine 6.11.1, Microcosm build of 25 October 2026, OBR October 2026
// forecast. The number of measures differs between sources, so the slide
// gives none. View buttons: the BIST deck's deep links.
export const budgetTabs = [
  { icon: IconBuildingBank, title: "Public finances", text: "With an OBR comparison" },
  { icon: IconMap2, title: "Constituency map", text: "Every measure by constituency" },
  { icon: IconUsers, title: "Living standards, poverty", text: "By age; who gains and loses" },
  { icon: IconCalculator, title: "Household calculator", text: "Enter any household" },
  { icon: IconChartLine, title: "Pre-measures forecast", text: "Baseline before the measures" },
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
// (10 June 2026) are cited by title and date; What a ratchet's figure is its
// recommendation's net saving (report text, not the retrospective £6.5bn).
// Home economics: the model used is not stated on RF's page. RF's 2019
// report of the same name as Counting the cost is not linked. Hard truths on PIP (survey and DWP data) and
// Saving private renters (VOA and Stat-Xplore) do not use the model.
export const rfReports = [
  {
    report: "Spread thin",
    icon: IconReceiptTax,
    date: "29 Oct 2026",
    what: "Autumn Budget 2026; RF calls the £4.4bn package “poorly targeted”",
    use: "Vigintiles (Fig 8); cumulative impact (Fig 20); projections",
  },
  {
    report: "Counting the cost",
    icon: IconRefresh,
    date: "8 Oct 2026",
    what: "Median non-pensioner income −1.3%, 2020–21 to 2026–27",
    use: "A no-inflation-crisis counterfactual",
  },
  {
    report: "Home economics",
    icon: IconHomeDollar,
    date: "24 Sep 2026",
    what: "A 0.7% property tax in place of council tax",
    use: "Model not stated",
  },
  {
    report: "Billing me softly",
    icon: IconBolt,
    date: "10 Aug 2026",
    what: "Energy discount: about 40% of households, £2bn",
    use: "Full take-up run minus reported receipt",
  },
  {
    report: "What a ratchet!",
    icon: IconPigMoney,
    date: "10 Jun 2026",
    what: "Smoothed earnings link in place of the triple lock: about £650m net saving, 2029–30",
    use: "Pensions costing",
  },
  {
    report: "Living Standards Outlook 2026",
    icon: IconChartLine,
    date: "10 Feb 2026",
    what: "Two-child limit repeal: 510,000 families; average gain £4,560",
    use: "Projections to 2029–30 (Annex 1)",
  },
];

export const rfReportsFoot =
  "Some work uses no model: Hard truths (PIP); Saving private renters.";

// ---------- Slide 12: RF's projection method ----------
// Living Standards Outlook 2026, Annex 1 ("lso26"), with the October 2026
// base year from Spread thin ("spreadThin"). The split between RF's own
// processing and the IPPR model is our reading of the annex; the slide asks
// to be corrected. Annex 1 says market incomes are projected "largely
// through the IPPR Tax Benefit Model" and lists the wage floor, spillovers,
// earnings uprating and the RPI cap under that heading; the WAS savings
// imputation is RF's. Rents follow ONS PIPR, then earnings with a 12-month
// lag. Annex 1 names "DWP's Family Resources Survey and Households Below
// Average Income statistics, 2023-24" (p.34) and does not mention the SPI;
// that HBAI incomes carry DWP's SPI adjustment is our inference from HBAI's
// published method, so the slide says so. Annex 1 also says benefit
// deductions (debt and advance repayments) are modelled and sanctions are
// not (p.37).
export const rfMethod = [
  {
    icon: IconDatabase,
    owner: "RF",
    title: "Base data",
    text: "FRS and HBAI 2023–24 (2024–25 in the October 2026 work); HBAI’s SPI adjustment, our inference",
  },
  {
    icon: IconScale,
    owner: "RF",
    title: "Reweight",
    text: "To ONS population projections, OBR participation and unemployment, PIP caseloads",
  },
  {
    icon: IconTrendingUp,
    owner: "Largely the model RF uses",
    title: "Uprate and impute",
    text: "OBR earnings with a wage floor; private pensions RPI capped at 5%; WAS savings (RF); rents (whose, not stated)",
  },
  {
    icon: IconCalculator,
    owner: "The model RF uses",
    title: "Taxes and benefits",
    text: "Each year’s rules, with benefit deductions; UC take-up 80%, Pension Credit 65% rising to 70%",
  },
  {
    icon: IconChartLine,
    owner: "RF",
    title: "Anchor",
    text: "Modelled growth rates and changes in poverty applied to outturn",
  },
];

export const rfMethodFoot = "Not modelled by RF (Annex 1): local Council Tax Support, sanctions. Nor sanctions in PolicyEngine.";
export const rfMethodFootItems = [
  { icon: IconBuildingCommunity, text: "Local variation in CTS" },
  { icon: IconHandStop, text: "Sanctions" },
];

// ---------- Slides 13 and 14: the mapping tables ----------
// Each row: RF's use (or method step), where RF publishes it (or whose step
// it is), a short cell on what PolicyEngine does today, and a status. The
// long text and the code paths for each row are in NOTES.md; the sources
// are named per row below. Rows with "also" set sit in a second group on
// slide 14, under "Also in RF's analysis": they are not among slide 12's
// five steps.
export type MapRow = {
  icon: Icon;
  label: string;
  where: string;
  today: string;
  tags: Tag[];
  step: number;
  also?: boolean;
};

// Table A. Sources by row:
// A1 "deciles", "decileGrouping", "appReport". Ranking income: "deciles"
// (default ranking is unequivalised household net income; decile_variable=
// takes any grouping). A2 "datedReforms" (nothing in policyengine.py). A3
// "manifest", "bundleSpec", "growth". A4 "povertyVariables",
// "povertyOutputs", "twoChildLimit": Done for the policy difference, Partly
// for the child definition and projected levels. A5 "lha", "lhaRate". A6
// "entitlement", "takeUp", "housingBenefit" (the CTR override works only
// where the scheme is simulated). A7 "growth" (triple-lock index). A8
// "growth" (growth rates are parameters; running the file on a
// counterfactual earlier path was not checked). A9 "councilTax",
// "sourcesSpec" (was_wealth); RF's page does not state the model used.
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
    icon: IconScale,
    label: "Ranking income for distributional charts",
    where: "RF’s distributional charts",
    today: "Unequivalised by default; equivalised HBAI deciles built in; any grouping can be passed in Python",
    tags: [tags.partly],
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
    today: "OBR uprating to 2031–32; no future reweighting",
    tags: [tags.partly],
    step: 1,
  },
  {
    icon: IconUsers,
    label: "Child poverty, with and without a policy",
    where: "LSO, Feb 2026",
    today: "Runs on four HBAI measures; poor larger families under-weighted, so effects likely understated",
    tags: [tags.partly],
    step: 2,
  },
  {
    icon: IconHome,
    label: "LHA freeze",
    where: "Spread thin, Oct 2026",
    today: "Rates by rental area (BRMA); freeze is a parameter",
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
    where: "What a ratchet!, Jun 2026",
    today: "State Pension; smoothed earnings link needs a hand-written path",
    tags: [tags.partly],
    step: 3,
  },
  {
    icon: IconRefresh,
    label: "Counterfactual histories",
    where: "Counting the cost, Oct 2026",
    today: "Projects forward from 2024–25 only; earlier years untested",
    tags: [tags.notYet],
    step: 3,
  },
  {
    icon: IconHomeDollar,
    label: "Council tax reform (RF’s model not stated)",
    where: "Home economics, Sep 2026",
    today: "Inputs held (council tax, WAS property wealth); the reform is not written",
    tags: [tags.notYet],
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
// B1 "equivalisation" and the BIST deck; HBAI checks on
// Microcosm. B2 "manifest", "bundleSpec" (target_period 2025),
// "staticAging". B3 "targetReferences" (dwp.pip.*). B4 "growth",
// "uprating"; Annex 1 puts earnings uprating, the wage floor and the RPI
// cap under market incomes, projected "largely through the IPPR Tax Benefit
// Model". B5 "growth" (obr.private_pension_index; no minimum-wage floor
// found). B6 "sourcesSpec" (was_wealth, hmrc_spi_income_spine). B7
// "uprating" (uprate_rent), "growth" (ons.private_rental_prices: regional
// outturn to 2025, the OBR's UK forecast from 2026; obr.consumer_price_index_ahc,
// the AHC deflator). B8 "takeUp",
// "ucTakeUp": every benefit unit carries a stored flag, including units not
// entitled today (microcosm uk_runtime uc_take_up.py,
// pension_credit_take_up.py, child_benefit_take_up.py). B10 not in the
// model. Also in RF's analysis: B9 "indirect", "sourcesSpec" (VAT and fuel
// duty complete; alcohol, tobacco and gambling duties partial in
// programs.yaml); B11 "ctr"; B12 policyengine-uk docs/book/usage/
// simulations.md: UKSingleYearDataset and UKMultiYearDataset load entity
// tables, the multi-year class "loaded as-is" year by year; take-up flags
// default to claiming (would_claim_uc default_value True).
export const stepsTable: MapRow[] = [
  {
    icon: IconDatabase,
    label: "Latest FRS and HBAI",
    where: "RF",
    today: "FRS 2024–25; HBAI income computed; poverty below HBAI in checks so far",
    tags: [tags.partly],
    step: 1,
  },
  { icon: IconScale, label: "Reweight to future populations", where: "RF", today: "One dataset, fitted to 2025", tags: [tags.notYet], step: 1 },
  { icon: IconHeartHandshake, label: "PIP caseloads", where: "RF", today: "Calibrated for 2025 only", tags: [tags.partly], step: 1 },
  {
    icon: IconTrendingUp,
    label: "OBR uprating",
    where: "Model RF uses (largely)",
    today: "OBR October 2026 forecast, to 2031–32",
    tags: [tags.done],
    step: 1,
  },
  {
    icon: IconCoins,
    label: "Minimum-wage floor; private-pension RPI cap",
    where: "Model RF uses (largely)",
    today: "OBR private-pension index; no wage floor found",
    tags: [tags.partly],
    step: 1,
  },
  { icon: IconWallet, label: "Savings income", where: "RF", today: "WAS wealth; interest from FRS and SPI", tags: [tags.different], step: 1 },
  { icon: IconHome, label: "Rents", where: "Not stated in Annex 1", today: "ONS rents by region to 2025–26, then the OBR’s UK forecast; AHC deflator built in", tags: [tags.partly], step: 1 },
  {
    icon: IconUsers,
    label: "Partial take-up",
    where: "Model RF uses",
    today: "Drawn at build, also for those not entitled today; not set per run",
    tags: [tags.partly],
    step: 1,
  },
  { icon: IconChartLine, label: "Growth rates applied to outturn", where: "RF", today: "Stays in RF’s code, or to be added", tags: [tags.notYet], step: 1 },
  {
    icon: IconShoppingCart,
    label: "Indirect taxes",
    where: "Model RF uses",
    today: "LCF 2024–25; VAT and fuel duty; three other duties partial",
    tags: [tags.done, tags.partly],
    step: 2,
    also: true,
  },
  {
    icon: IconBuildingCommunity,
    label: "Council Tax Support variation",
    where: "Not modelled by RF",
    today: "Five English schemes, Scotland, Wales, pensioners",
    tags: [tags.partly],
    step: 2,
    also: true,
  },
  {
    icon: IconArrowsSplit,
    label: "PolicyEngine’s rules on RF’s own file",
    where: "In place of step 4",
    today: "Possible in Python, not yet tried; variables to map, take-up flags to supply",
    tags: [tags.notYet],
    step: 2,
    also: true,
  },
];

export const stepsAlsoLabel = "Also in RF’s analysis, outside the five steps";

// The known gap makes slide 9's point (one calibrated year; take-up drawn
// at build). Behaviour, managed migration and sanctions are in NOTES.md
// (sanctions: none found by a search of policyengine-uk 5987eb3).
export const stepsCaution =
  "Known gap: calibrated to one year (2025), on FRS 2024–25 data; take-up drawn at build; RF projects to 2029–30.";

// ---------- Slide 15: Billing me softly ----------
// Left: "billingMeSoftly" (Great Britain; passported by a means-tested
// benefit or a £24,000 test on the highest individual income in the
// household; about 40% of households pass the income test; a £2bn scheme,
// about £175 each). Right: "energyDiscount", "energyCode" (flat option,
// 2026-27: 28.6m households, 11.95m recipients, 42% of GB households,
// passported or passing the test; the income test alone 35% in 2026-27,
// 38% on 2024-25 incomes; £2.09bn; Microcosm UK 2024-25, policyengine-uk
// 2.102.3, analyses/rf-billing-me-softly README.md and rf_comparison.md).
export const energy = {
  proposal: [
    { icon: IconBolt, title: "A targeted energy discount", text: "Resolution Foundation proposal" },
    {
      icon: IconScale,
      title: "£24,000 test, or a means-tested benefit",
      text: "On the highest individual income in the household; GB",
    },
    { icon: IconChartPie, title: "About 40% pass the income test", text: "A £2bn scheme, about £175 each" },
  ],
  run: [
    { icon: IconHome, title: "28.6 million GB households", text: "In the run; flat option, 2026–27" },
    {
      icon: IconUsers,
      title: "11.95 million recipient households",
      text: "42% of GB households, passported or passing; income test alone 35% (RF: about 40%)",
    },
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
// cells from CeMPA's 2026 country report (UKMOD Country Report 2023-2030,
// working paper 8/26, April 2026) and microsimulation.ac.uk ("ukmod"): FRS
// 2023-24, 16,754 households (Table 3.1, p.74); FRS grossing weights, "no
// other updating adjustments"; no data on capital gains, inheritances,
// property transactions or property value. Since then: CeMPA's release
// B2026.03 (22 June 2026, "ukmodB202603") added input data from the 2024
// wave of the FRS (2024-25 in CeMPA's naming), single-year and three-year
// pooled. HBAI extension: recommended for cross-sectional analysis with
// data from 2018 (p.101), used in the validation (p.83), off by default
// (p.31), with "adjustments that account for high income tax payers" (p.85;
// the report does not name the SPI). Take-up: on by default (p.79), by
// claimant type (Table 3.4), reported recipients first (p.31), editable;
// only tax credits vary by area. Region of residence is in the data; LHA
// uses the 12 regions (p.47); UKMOD Explore covers the UK, the nations and
// London. Three-year pooled data (p.81). IPPR model: take-up method from the
// Scottish Government's 2018 appendix ("scotGov2018": a probit, calibrated
// to DWP and HMRC take-up statistics); regional results for all 12 regions
// and nations in IPPR's 2p NI cut analysis ("ipprNics", 10 June 2024);
// users from CeMPA WP 7/21 ("cempa721", 2021) and the Fraser of Allander
// Institute ("faiChildPoverty", March 2025). "Not found in published
// sources" means only that. On-slide cells are short; the fuller wording is in NOTES.md.
export type CompareRow = { icon: Icon; label: string; cells: [string, string, string]; step: number };

export const compareHeads: [string, string, string] = [
  "PolicyEngine UK",
  "IPPR model, as RF uses it: what we found published",
  "UKMOD, as we read CeMPA’s 2026 country report and website",
];

export const notFound = "Not found in published sources";

export const dataCompare: CompareRow[] = [
  {
    icon: IconDatabase,
    label: "Base survey",
    cells: [
      "FRS 2024–25",
      "FRS and HBAI 2024–25 (2023–24 in LSO 2026)",
      "FRS 2024–25 since June 2026; the 2026 report documents 2023–24 (16,754 households)",
    ],
    step: 1,
  },
  {
    icon: IconReceiptTax,
    label: "Top incomes",
    cells: [
      "Copies of FRS households take SPI 2022–23 incomes; more above £200k",
      "HBAI incomes; treatment in the model not found published",
      "HBAI extension, adjusted for high-income taxpayers; off by default, recommended for cross-sections",
    ],
    step: 1,
  },
  {
    icon: IconWallet,
    label: "Wealth",
    cells: [
      "WAS round 8, imputed; savings interest from FRS and SPI",
      "Savings income modelled in WAS, imputed by RF (LSO 2026)",
      // WP 8/26: financial capital ($f_afc, printed p.108) used for capital limits
      // and tariff income in the means tests (printed p.14).
      "Financial capital for means tests; no data on gains, inheritances or property sales",
    ],
    step: 2,
  },
  {
    icon: IconShoppingCart,
    label: "Spending",
    cells: ["LCF 2024–25, imputed; also ETB and NTS", "LCF (Spread thin, 2026; Scottish Government, 2018)", "LCF, through the indirect-tax add-on"],
    step: 2,
  },
  {
    icon: IconHeartHandshake,
    label: "Benefit take-up",
    cells: [
      "Reported recipients claim; others drawn at build to DWP and HMRC rates or caseloads",
      "Take-up model calibrated to DWP and HMRC (2018); in LSO 2026, UC 80%, Pension Credit 65% to 70%",
      "Official rates by claimant type, on by default; reported recipients first; editable",
    ],
    step: 2,
  },
  {
    icon: IconScale,
    label: "Weights and effective sample",
    cells: [
      "1,536 official targets; 78,450 records, effective about 7,500; poverty below HBAI’s (slide 18)",
      "Base weights not found published; RF reweights projection years",
      "FRS grossing weights; a three-year pooled option; no other reweighting",
    ],
    step: 3,
  },
  {
    icon: IconMap,
    label: "Geography",
    cells: [
      "12 regions and nations; 650 constituencies, 361 local authorities (separate file, same survey)",
      "12 regions and nations (IPPR, June 2024)",
      "Region in the data; nation and London extensions; UKMOD Explore",
    ],
    step: 3,
  },
  {
    icon: IconCalendarStats,
    label: "Years ahead",
    cells: [
      "OBR uprating to 2031–32; one set of weights, fitted to 2025",
      "Projected to 2029–30 (LSO 2026)",
      "Policy years 2023–2030; a release after each Budget",
    ],
    step: 3,
  },
];

export const rulesCompare: CompareRow[] = [
  {
    icon: IconCode,
    label: "Platform and interfaces",
    cells: [
      "Python package (YAML parameters, Python formulas); web app; Claude connector (preview)",
      notFound,
      "EUROMOD platform, own rule language; Windows interface, UKMOD Explore web tool, EUROMOD’s Python connector (JRC)",
    ],
    step: 1,
  },
  {
    icon: IconLockOpen,
    label: "Licence and maintainer",
    cells: [
      "AGPL-3.0 and MIT; PolicyEngine, public pull requests",
      "Licensed for a fee (CeMPA WP 7/21, 2021); PERU, Manchester Metropolitan University",
      "EUPL-1.2 software, CC BY-NC-ND model, free; CeMPA, Essex",
    ],
    step: 1,
  },
  {
    icon: IconDatabase,
    label: "Access to the data",
    cells: ["Code open; FRS-derived records restricted", notFound, "Input data to users with UK Data Service permission"],
    step: 1,
  },
  {
    icon: IconCoins,
    label: "Direct taxes and benefits",
    cells: [
      "Income tax incl. Scottish rates, NI, CGT; UC, legacy, pensions, disability",
      "On the FRS (Scottish Government, 2018)",
      "Income tax incl. Scottish and Welsh rates, NI, UC, legacy, Scottish benefits",
    ],
    step: 2,
  },
  {
    icon: IconBuildingCommunity,
    label: "Council tax and support",
    cells: [
      "Council tax; CTR for Scotland, Wales, pensioners, five English schemes",
      "Modelled (Scottish Government, 2018); RF does not model CTS variation",
      "Council tax from the data; CTR modelled",
    ],
    step: 2,
  },
  {
    icon: IconHomeDollar,
    label: "Capital and property taxes",
    cells: ["CGT, SDLT, LBTT, on imputed gains and drawn property purchases", notFound, "Not simulated; no data on gains or property sales"],
    step: 2,
  },
  {
    icon: IconArrowsSplit,
    label: "Behaviour",
    cells: [
      "No labour-supply response by default; capital gains and employer NI responses on",
      "Static (Fraser of Allander, 2025)",
      "Static; behavioural add-on",
    ],
    step: 3,
  },
  {
    icon: IconCircleCheck,
    label: "Validation, tests, documentation",
    cells: [
      "Calibration dashboard (in-sample); OBR comparisons; 6,782 tests",
      notFound,
      "Annual country report against administrative data and HBAI",
    ],
    step: 3,
  },
  {
    icon: IconUsers,
    label: "Published work using it",
    cells: [
      "No 10 (10ds-microsim, experimental), NEF, CPS, Mosley and Cornforth (with NiGEM)",
      "IPPR, RF, JRF, NEF, Legatum (CeMPA, 2021); Fraser of Allander (2025)",
      "Scottish and Welsh Governments, SFC, SPICe, GLA, Commons Library, CPAG, WBG (CeMPA, 2021)",
    ],
    step: 3,
  },
];

// ---------- Slide 18: calibration ----------
// The certified build of 22 November 2026, from the public calibration
// dashboard's data routes ("dashboard"), read 25 November 2026: 1,536
// targets; 1,517 within 10% (98.8%, in-sample); 78,450 household records;
// effective sample size 7,471 (shown as about 7,500). Starting weights
// (already including the SPI copies): 679 of 1,536 within 10% (44%);
// Universal Credit 19 of 107 (18%) to 104 (97%), Pension Credit 1 of 13 (8%)
// to 13 (100%), PIP 3 of 18 (17%) to 18 (100%). By publisher: HMRC 776, ONS
// 366, DWP 234, MHCLG 82, others 78. Still no out-of-sample page for the UK.
export const calibration = {
  stats: [
    { value: "1,536", label: "official targets", icon: IconTargetArrow },
    { value: "98.8%", label: "within 10% of the official figure", icon: IconCircleCheck },
    { value: "78,450", label: "household records, incl. SPI copies of FRS households", icon: IconDatabase },
    { value: "about 7,500", label: "effective sample size", icon: IconUsers },
  ],
  beforeAfter: [
    { label: "All targets", before: "44%", after: "98.8%" },
    { label: "Universal Credit", before: "18%", after: "97%" },
    { label: "Pension Credit", before: "8%", after: "100%" },
    { label: "PIP", before: "17%", after: "100%" },
  ],
  publishers: [
    { name: "HMRC", count: 776 },
    { name: "ONS", count: 366 },
    { name: "DWP", count: 234 },
    { name: "MHCLG", count: 82 },
    { name: "Others", count: 78 },
  ],
  foot: "Untargeted check (2024–25, HBAI’s latest year): 3.40m children below HBAI’s AHC line, against HBAI’s 3.97m; 4.02m before calibration.",
  footNote: "microcosm#1710. Targets are for 2025.",
};

// ---------- Slide 19: Autumn Budget 2026 against the OBR ----------
// "budgetBriefing": PolicyEngine's estimates against the OBR's detailed
// table 1.1, £m, for all seven measures the briefing models. Run:
// policyengine 6.11.1, Microcosm build of 25 October 2026. The percentage
// column is computed on the slide. Years: 2026-27 for the three measures
// with a figure that year; 2029-30 for the three income tax measures (after
// the Self Assessment timing gap for property income and the trading
// allowance; the last year of the Pension Tax Allowance, whose 2027-28
// figures are close, 42 against 44); 2031-32, the first full year, for the
// Carer's Allowance taper.
// - Fuel duty: the official figure is the government's estimate, which the
//   OBR used but could not certify.
// - Pension Tax Allowance: income tax only, from the briefing's text
//   (£42m, £112m, £193m against £44m, £83m, £144m for 2027-28 to 2029-30).
//   Its Table 6 shows the net cost after Pension Credit, Housing Benefit and
//   Council Tax Reduction (−30, −83, −144), which the package uses; the net
//   figure equals the OBR's income tax line in two years.
// - Carer's Allowance taper: before income tax (£79m), like the OBR's
//   spending line (£69m); net of income tax, £48m.
// - Trading allowance: 2029-30, −119 against −165; in 2028-29, the OBR's
//   catch-up year, −118 against −221.
// - Reasons: the briefing's "Why each differs". Where it gives no reason
//   for the size of a gap, the row says "not yet explained".
// - The package: all seven run together in 2026-27, when only the first
//   three are non-zero (Table 3; the sum of those rows).
export const budgetRows = [
  {
    measure: "Household Energy Payment",
    icon: IconBolt,
    year: "2026–27",
    pe: -1969,
    obr: -2627,
    reason: "Scope: devolved share and £100m for English councils not modelled",
    step: 1,
  },
  {
    measure: "Zero VAT on electricity",
    icon: IconPlug,
    year: "2026–27",
    pe: -840,
    obr: -734,
    reason: "Coverage: a different spending base (ONS series 10–12% lower)",
    step: 1,
  },
  {
    measure: "Fuel duty*",
    icon: IconGasStation,
    year: "2026–27",
    pe: -301,
    obr: -574,
    reason: "Coverage: household fuel only, about £13bn of a £24bn base",
    step: 1,
  },
  {
    measure: "Pension Tax Allowance†",
    icon: IconPigMoney,
    year: "2029–30",
    pe: -193,
    obr: -144,
    reason: "Not yet explained; 670,000 gainers against HMT’s 500,000 (2027–28)",
    step: 2,
  },
  {
    measure: "Property income tax",
    icon: IconHome,
    year: "2029–30",
    pe: 429,
    obr: 394,
    reason: "Behaviour: the OBR includes small responses (about £0.1bn)",
    step: 2,
  },
  {
    measure: "Trading allowance",
    icon: IconBriefcase,
    year: "2029–30",
    pe: -119,
    obr: -165,
    reason: "Behaviour and coverage: expense switching; no gross receipts in data",
    step: 2,
  },
  {
    measure: "Carer’s Allowance taper‡",
    icon: IconHeartHandshake,
    year: "2031–32",
    pe: -79,
    obr: -69,
    reason: "Not yet explained",
    step: 2,
  },
];

export const budgetPackage = {
  measure: "All seven, run together",
  icon: IconCalculator,
  year: "2026–27",
  pe: -3110,
  obr: -3935,
  reason: "Only rows 1–3 are non-zero in 2026–27",
};

export const budgetNotes = [
  "* The OBR used the government’s estimate for fuel duty but could not certify it.",
  "† Income tax only (briefing text). After lower Pension Credit, Housing Benefit and CTR, PolicyEngine’s net cost is smaller (briefing Table 6).",
  "‡ Before income tax, like the OBR’s spending line; net of income tax, −48.",
];

export const budgetYears =
  "Income tax measures shown for 2029–30 (Self Assessment timing; trading allowance 53% in 2028–29). Negative = cost.";

export const budgetBehaviour = "Most official costings include behaviour; the briefing calls this run static.";

export const budgetLabel = "As published, 31 Oct 2026: policyengine 6.11.1; Microcosm build of 25 Oct 2026";

// ---------- Slide 20: what we do not claim ----------
// Not claimed: "scorecard", "scorecardCode"; "hbaiCheck" (untargeted
// checks against HBAI, case by case); "hmt".
// Known limits, only those no other slide states (behaviour is on slides 6,
// 17 and 19; take-up at build on 14; restricted data on 9 and 21; CTR on 8
// and 14): the BIST deck; "manifest" and "bundleSpec" (one dataset).
// The scorecard rows that were on this slide are in NOTES.md (slide 20):
// RF's figures predate the two-child limit's abolition and use an earlier
// forecast, data year and baseline, so they are not like-for-like.
export const notClaimed = [
  { icon: IconGitCompare, text: "No reconciled model comparison yet; a scorecard is in progress" },
  { icon: IconTargetArrow, text: "Calibration fit is in-sample; untargeted checks case by case" },
  { icon: IconBuildingBank, text: "HM Treasury pilot (record of Dec 2024): NI close, income tax “less promising”; not deployed" },
];

export const knownLimits = [
  { icon: IconUsers, text: "Poverty below HBAI’s: 3.40m children (AHC) against 3.97m (slide 18)" },
  { icon: IconBuildingFactory2, text: "No firms, no corporation tax" },
  { icon: IconCalendarStats, text: "One set of weights, fitted to 2025" },
  { icon: IconChartBar, text: "Effective sample about 7,500; areas need 10+ households" },
  { icon: IconCopy, text: "SPI copies’ industry is imputed" },
];

// Source for the scorecard rows now in NOTES.md (slide 20): policyengine-scorecard
// 771c028, app/public/data/populations.json (built 30 October 2026),
// harvest sources/harvest-uk-ab2025-2026-09-24/. The three RF rows labelled
// "comparable", all from RF's No half measures (October 2025). PolicyEngine
// runs: policyengine-uk 2.132.6, Microcosm UK 2024-25 build
// 20261019T083323Z-6cba5d71 (read from each row's "latest" record). RF's
// figures predate the two-child limit's abolition from April 2026. 755
// Autumn Budget 2025 rows have a result from RF, UKMOD, the IFS, IPPR and
// four others; 633 carry a PolicyEngine value, and most of those ran on
// policyengine-uk 2.89.2 and an earlier data build (bundle dated 19 June
// 2026), including the £46k
// example (higher-rate threshold and NI upper earnings limit to £46k: RF
// £9.0bn, PolicyEngine £6.62bn). The notes give the rows; they do not quote
// the gaps as agreement.
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
    text: "policyengine.org/uk: parametric reforms and a national report, in the browser",
    tag: tags.done,
    extra: { text: "Structural reforms and vigintiles need code" },
  },
  {
    icon: IconMessageChatbot,
    title: "Ask in plain English",
    text: "A Claude connector: “Score a 21p basic rate”; not yet launched",
    tag: tags.preview,
  },
  {
    icon: IconCode,
    title: "An AI coding assistant",
    text: "A Claude Code plugin writes and runs it; the analyst reviews",
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

export const routesFootItems = [
  { icon: IconWorld, text: "Web app: no data access" },
  { icon: IconKey, text: "Population runs: a token for Microcosm UK" },
  { icon: IconEye, text: "Code and outputs reviewable like any script" },
];

export const routesFoot =
  "Web app: no data access. Python: an access token for Microcosm UK (FRS-derived). Code and outputs reviewable like any script.";

// ---------- Slide 22: three options ----------
export const options = [
  {
    icon: IconWorld,
    title: "A. Use what is public",
    rows: [
      { label: "What it is", text: "Web app, dashboards and analyses as a second source" },
      { label: "What it needs", text: "No data access, no code" },
      { label: "What it gives", text: "A quick cross-check" },
    ],
  },
  {
    icon: IconArrowsSplit,
    title: "B. PolicyEngine runs, RF specifies",
    rows: [
      { label: "What it is", text: "RF specifies; PolicyEngine runs it and returns tables and code" },
      { label: "What it needs", text: "A specification; time to review" },
      { label: "What it gives", text: "A side-by-side and a first reconciliation" },
    ],
  },
  {
    icon: IconCode,
    title: "C. RF runs it",
    rows: [
      { label: "What it is", text: "RF analysts run it, in Python or with an AI assistant" },
      { label: "What it needs", text: "A token, a data route and the missing steps" },
      { label: "What it costs", text: "A break in RF’s series; past figures reconciled" },
      { label: "What it gives", text: "Open code, local-area outputs, changes by pull request" },
    ],
  },
];

export const optionsFootItems = [
  { icon: IconCalendarStats, text: "Future-year weights" },
  { icon: IconHistory, text: "An earlier-policy baseline" },
  { icon: IconUserCheck, text: "Run-time take-up" },
  { icon: IconChartLine, text: "Anchoring to outturn" },
  { icon: IconUsers, text: "Poverty closer to HBAI’s" },
];

export const optionsFoot =
  "C would also need: future-year weights, an earlier-policy baseline, run-time take-up, anchoring to outturn, poverty closer to HBAI’s.";

// ---------- Slide 23: a possible pilot ----------
export const pilotFlow = [
  { icon: IconTargetArrow, title: "Choose", text: "One published chart and its definitions" },
  { icon: IconRefresh, title: "Reproduce", text: "The same measures, year and income definition in PolicyEngine" },
  { icon: IconArrowsSplit, title: "Reconcile", text: "Split each difference into data, rules, take-up and uprating" },
  { icon: IconBook, title: "Decide", text: "A short note on what matched, what did not and what it would take" },
];

export const pilotBrings = {
  rf: [
    { icon: IconFileDescription, text: "The chart’s specification: income, equivalisation, take-up" },
    { icon: IconChartLine, text: "The published series" },
    { icon: IconEye, text: "A reviewer’s time" },
  ],
  pe: [
    { icon: IconCode, text: "The run, with code, versions and data recorded" },
    { icon: IconTable, text: "The reconciliation table and note" },
    { icon: IconPuzzle, text: "Small missing pieces, such as vigintiles in the web app" },
  ],
};

export const pilotScope =
  "Indicative scope: one chart. PolicyEngine runs it and writes the note; RF specifies, reviews and supplies intermediate results where needed.";

export const pilotCandidates = [
  {
    icon: IconReceiptTax,
    title: "Candidate 1: Spread thin, Fig 8",
    text: "Agree the measures first (RF £4.4bn; PolicyEngine £3.11bn). Deciles too: about 375 effective households per vigintile",
  },
  { icon: IconBolt, title: "Candidate 2, smaller: Billing me softly", text: "Already encoded; add the non-take-up method" },
];

// ---------- Slide 24: questions ----------
export const questions = [
  { icon: IconFileSearch, text: "Is our list of RF’s uses right, and which matters most?" },
  { icon: IconGitCompare, text: "Which analysis is most worth reproducing side by side?" },
  { icon: IconArrowsSplit, text: "Which projection steps would stay in RF’s own code?" },
  { icon: IconTargetArrow, text: "What agreement, against which benchmark, would you want to see?" },
  { icon: IconDatabase, text: "How could RF hold FRS-derived data such as Microcosm UK?" },
  { icon: IconMessageQuestion, text: "Which route in suits RF, and should a pilot’s code be public?" },
];

// ---------- Slide 25: closing ----------
// Emails as used in other decks in this repository. The Nuffield credit
// follows the Autumn Budget 2026 deck: "Funded by" and the white logo on a
// dark background, linking to the grant 1 project page.
export const closingLinks: { label: string; href: string }[] = [
  { label: "policyengine.org/uk", href: sources.home.href },
  { label: "github.com/PolicyEngine/policyengine-uk", href: sources.model.href },
  { label: "github.com/PolicyEngine/microcosm", href: sources.data.href },
  { label: "Calibration dashboard (22 Nov 2026 build)", href: sources.dashboard.href },
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
