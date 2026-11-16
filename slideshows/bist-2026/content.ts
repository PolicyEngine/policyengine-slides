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

// The three points of the session. Card 2: no link to another model is
// built; the trade study's shocks come from published estimates and an
// assumed elasticity, the AI study's from a stated scenario. Card 3: neither
// candidate has published PolicyEngine results (trade study 06c8bbc reports
// none for the deal schedule; nothing on BICS exists).
export const inBrief = [
  {
    title: "Incomes, not spending",
    text: "PolicyEngine UK is open-source tax–\u2060benefit microsimulation. It computes household incomes after taxes and benefits, poverty and the public finances. Household spending is an input, not a result.",
  },
  {
    title: "A household layer for other models",
    text: "Trade, macroeconomic and agent-based models give changes in earnings, jobs and prices by sector. PolicyEngine can turn these into household and fiscal effects by income decile and region, and experimentally by local area. No such link is built: our trade and AI studies use published estimates and stated scenarios.",
  },
  {
    title: "Two candidate pilots",
    text: "Tariff changes under the US–\u2060UK Economic Prosperity Deal, and the electricity-cost relief of the British Industrial Competitiveness Scheme. We have no published results for either.",
  },
];

// Data: policyengine.py 810a59e, data/bundle/manifest.json, bundle 6.19.0
// (Microcosm UK 2024-25 national build of 7 November 2026, certified for
// policyengine-uk 2.174.1); pipeline stages as in microcosm 429d7a0,
// uk/source_stages.json (see microcosmFlow below).
export const components = [
  {
    title: "The rules",
    text: "PolicyEngine UK codes taxes and benefits from legislation and guidance, and uprates them with OBR outturn and forecasts.",
  },
  {
    title: "The households",
    text: "Microcosm UK 2024–25: the Family Resources Survey, with high incomes imputed from HMRC's Survey of Personal Incomes, wealth and spending imputed from other surveys, and weights calibrated to official totals.",
  },
  {
    title: "The results",
    text: "policyengine.py reports effects by programme, income decile, poverty, inequality and region, and the net cost to the Exchequer. Local-area results use a separate, experimental file.",
  },
];

// Programme coverage: policyengine-uk d3db7ac (re-checked at that commit).
export const coverage = [
  {
    title: "Taxes on income",
    items: [
      "Income tax, with Scottish rates",
      "Employee, employer and self-employed NI",
      "Capital gains tax",
    ],
  },
  {
    title: "Taxes on spending and property",
    items: ["VAT", "Fuel, alcohol and tobacco duties", "Stamp duty and council tax"],
  },
  {
    title: "Taxes on business",
    items: [
      "Employer NI; rate and threshold changes passed to employees' pay by default",
      "Business rates and corporate stamp duty, as published totals allocated to shareholders",
      "Corporation tax is not modelled",
    ],
  },
  {
    title: "Benefits and other",
    items: [
      "Universal Credit and legacy benefits",
      "Child Benefit, Pension Credit, the State Pension",
      "Disability and Scottish benefits, childcare support",
    ],
  },
];

// uk-trade-shock-study 06c8bbc. Food: paper/sections/episodes.tex, "Bakker
// et al. (2023) attribute roughly 8 percentage points of the 25 per cent
// food price rise between December 2019 and March 2023 to Brexit non-tariff
// barriers" (CEP Brexit Analysis No. 18). Datasets: paper/sections/
// results.tex and roadmap.tex, the three price-led episodes run "on the
// enhanced Family Resources Survey" (2023-24, 2023 vintage), the tariff
// pipeline on "the 2024-25 Family Resources Survey" (frs_2024_25.h5).
// Results table, note t: "no instrument was legislated against this
// episode, and no modelled entitlement reads food consumption".
export const tradeEvents = [
  "The part of the food price rise that Bakker et al. (2023) attribute to post-Brexit trade barriers",
  "The 2022 energy price surge",
  "Projected duty reductions from the UK–India agreement",
  "The 2025 US tariffs",
];

export const tradeEnergy = {
  offset: "about 60%",
  range: "49–64% across variants",
};

// From a trade model's sector results to households. The breakdowns are the
// output classes in policyengine.py 810a59e, src/policyengine/outputs/:
// decile_impact.py and intra_decile_impact.py; poverty.py (UK rates, by age
// and by gender); inequality.py (Gini, top 10% and 1% shares, bottom 50%
// share); program_statistics.py (the 14 programmes in UK_PROGRAMS,
// tax_benefit_models/uk/analysis.py, hence "main taxes and benefits"; the
// net Exchequer cost has no dedicated UK output class: it is the change in
// gov_balance, policyengine-uk variables/gov/gov_balance.py, which
// change_aggregate.py can total, and the slide's status line says so);
// uk_geography_disclosure.py (region);
// constituency_impact.py and local_authority_impact.py. There is no
// household-type output, so none is listed. Spending is held by COICOP
// division (policyengine-uk d3db7ac, variables/input/consumption/
// petrol_spending.py: "The below variables follow the COICOP MECE
// categories"). No concordance from GTAP sectors
// exists in our code: the trade study assigns by two-digit SIC division of
// FRS employees (tariff_pipeline/exposure.py:174-230), read from the
// sic_industry_division variable (policyengine-uk d3db7ac, variables/
// household/income/sic_industry_division.py).
export const tariffDisaggregation = {
  flow: [
    {
      owner: "Trade model",
      title: "Sector results",
      text: "A GTAP-style run: changes in output, employment and prices by sector, and wages by labour type",
    },
    {
      owner: "Agreed mapping",
      title: "Concordance",
      text: "Model sectors to two-digit SIC divisions for earnings and jobs; to COICOP spending divisions for prices",
    },
    {
      owner: "PolicyEngine",
      title: "Assign to people",
      text: "Earnings and job changes to employees in each sector, over repeated draws; price changes to each household's spending",
    },
    {
      owner: "PolicyEngine",
      title: "Apply the rules",
      text: "Taxes and benefits recomputed for every household, before and after",
    },
  ],
  breakdowns: [
    { title: "Income deciles", text: "Average change, and the shares gaining and losing within each decile" },
    { title: "Poverty and inequality", text: "Poverty rates, overall and by age and gender; Gini and income shares" },
    { title: "Programmes", text: "Main taxes and benefits; the net cost to the Exchequer" },
    { title: "Places", text: "Regions; constituencies and local authorities (experimental file)" },
  ],
};

// The tariff bridge: shock = elasticity × tariff × US export share by SIC
// division; gross shock £999.8m a year; cushion macros
// MsUSTariffWageCutCushionPct and MsUSTariffDisplacementCushionPct
// (results/e3_constants.json: wagecut_cushion_pct 43.7, sd 0.0;
// displacement_cushion_pct 35.4, displacement_cushion_sd_pct 5.1, over 100
// assignment draws).
export const tariffBridge = {
  steps: [
    { title: "Tariff rates", text: "The full US schedule before the Economic Prosperity Deal" },
    { title: "US export intensity", text: "By two-digit SIC division" },
    { title: "Export-demand elasticity", text: "Assumed 1 (the OBR's March 2025 scenarios use 0.4)" },
    { title: "Earnings shock by sector", text: "About £1.0bn a year (an output of these steps), all assumed to fall on employees' earnings" },
    { title: "Survey employees", text: "Assigned to FRS employees who work in that sector" },
  ],
  replaceable: [1, 2, 3],
  cushion: { wageCuts: "43.7%", jobLosses: "35.4%", jobLossesSd: "5.1 points" },
};

// A non-tax business policy, with BICS as the example. Scheme facts: sources
// bicsGuidance and bicsIa above. Model precedents (policyengine-uk d3db7ac):
// - parameters/gov/contrib/policyengine/employer_ni/{employee,consumer,
//   capital}_incidence.yaml split an employer NI change between employees
//   (1 by default), consumers and capital (0.5 each of the remainder);
// - parameters/gov/contrib/policyengine/budget/{consumer,corporate}_incident_
//   tax_change.yaml (in £bn) are allocated by each household's share of
//   consumption and by shareholding
//   (variables/contrib/policyengine/*_incident_tax_revenue_change.py). Both
//   variables are in gov_tax and household_tax, so they book the amount as
//   tax revenue; there is no earnings-incident equivalent. A non-tax cost
//   change therefore needs an extension, which is not built.
// - the trade study's energy episode applies a price rise to household
//   spending by category (uk-trade-shock-study 06c8bbc).
export const businessPolicy = {
  flow: [
    {
      owner: "Scheme design",
      title: "Cost change by sector",
      text: "Relief from three electricity policy costs for eligible manufacturers: the impact assessment estimates £35 to £40 per MWh, from 2027",
    },
    {
      owner: "Outside PolicyEngine",
      title: "How firms use it",
      text: "Lower prices, higher pay or more jobs, investment, or higher profits",
    },
    {
      owner: "PolicyEngine",
      title: "Allocate to households",
      text: "Prices by spending, earnings and jobs by sector of employment, profits by shareholding",
    },
    {
      owner: "PolicyEngine",
      title: "Household and fiscal",
      text: "Net incomes by decile and region (local areas experimental); poverty; tax and benefit receipts",
    },
  ],
  external: [1],
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

// firm-microsim-paper e6d5dd6 (paper and README). Microcosm README
// (429d7a0, 15 November 2026): "Firm support is experimental".
export const firmTools = [
  {
    status: "Working paper",
    title: "Firm-level VAT microsimulation",
    text: "A synthetic population of UK businesses calibrated to the ONS VAT/PAYE enterprise frame (about 2.7 million enterprises) and HMRC's count of VAT-registered traders (about 2.2 million). It costs changes to the level and shape of the VAT registration threshold and a reduced-rate band. It does not recover administrative microdata or firm behaviour; turnover responses are sensitivity exercises under assumed elasticities.",
  },
  {
    status: "In the model",
    title: "Employer costs",
    text: "PolicyEngine UK computes employer National Insurance and total employment costs. We have published analyses of employer NI exemptions for young workers and recently inactive employees.",
  },
  {
    status: "Not built",
    title: "Linking firms to households",
    text: "PolicyEngine UK has no firm entity, and the firm and household populations are not linked. Microcosm can declare firm tables and person–firm job links, but that support is experimental, not production.",
  },
];

// The loop card's precedent is Mosley and Cornforth (2023); the OG-UK card
// follows that project's repository. NiGEM is named only as an example of a
// global macroeconomic forecasting model.
// Forecast scenario (policyengine-uk d3db7ac): the dataset is projected a
// year at a time with the growth series that data/uprating_indices.yaml
// assigns each input (employment income follows obr.average_earnings; most
// spending follows obr.consumer_price_index), read from parameters/gov/
// economic_assumptions/yoy_growth.yaml. A reform to a growth rate re-projects
// the data (tests/test_uprating_inputs_reach_data.py, invariant 3: "Data
// follows the parameters"). yoy_growth.yaml has no employment series, so the
// card says job changes need a separate shock. No forecasting-model scenario
// has been run this way.
export const macroLinks = [
  {
    title: "A forecast scenario",
    tag: "Mechanism in the model",
    text: "PolicyEngine UK projects its data forward with OBR growth rates for earnings, prices and other series. A scenario from a global macroeconomic forecasting model such as NiGEM could replace those paths.",
    note: "We have not run such a scenario. Employment is not one of the series: job changes enter as a shock assigned to workers.",
    source: sources.growth,
  },
  {
    title: "A macro–\u2060micro loop",
    tag: "Not built",
    text: "The macro model's earnings, jobs and prices go to PolicyEngine; household incomes and tax and benefit totals go back; repeat until the two agree.",
    note: "Precedent: NIESR combined PolicyEngine UK with NiGEM to estimate the effect of the 2022 cost-of-living payments on GDP. A one-off study, not a maintained link.",
    source: sources.niesr,
  },
  {
    title: "OG-UK",
    tag: "Early prototype",
    text: "An open-source overlapping-generations model of the UK. PolicyEngine supplies each adult's income tax and NI; OG-UK fits tax functions to these rates and solves a 60-year transition for output, wages, interest rates and revenue.",
    note: "The fitted functions do not yet reflect benefit withdrawal.",
    source: sources.ogUk,
  },
];

// Candidate questions for a link with an agent-based model. None is built or
// run. Each row names the behaviour the agent-based model would simulate,
// what it would pass and what PolicyEngine would return. Row 3 refers to the
// Dosi et al. class of model (source above), which is not about AI; applying
// it to AI is hypothetical, as is a CGE run with technology sectors split
// out (the GTAP model page describes the standard model only). Either would
// supply the shock the AI study sets by assumption (uk-ai-study 5d75106,
// uk_ai_study/shocks.py: displacement, survivors' wages, the return on
// capital). Youngman et al. (2026) cite our approach and use neither our
// model nor our data. The trade study's input-output supply-chain module
// (tariff_pipeline/supply_chain.py) is in code only and not in the paper, so
// the slide gives no numbers from it.
export const abmQuestions = [
  {
    question: "A supply shock to one product, for example semiconductors",
    behaviour: "Firms along the product's supply chain lose inputs, switch suppliers, and cut output and jobs",
    passes: "Job and earnings losses by sector and region",
    returns: "Affected workers' household incomes, benefit claims and tax receipts",
  },
  {
    question: "Electricity-cost relief for manufacturers (BICS)",
    behaviour: "Firms that differ in electricity use and market power choose between prices, pay, jobs, investment and profit",
    passes: "Changes in prices, earnings and profits by sector",
    returns: "Income changes by decile and region (local areas experimental); tax and benefit receipts",
  },
  {
    question: "AI adoption over the business cycle",
    behaviour: "Firms adopt technology, enter and exit; jobs and wages adjust, as in Dosi, Fagiolo and Roventini (2010)",
    passes: "Paths of jobs, wages and profits by sector, in place of the AI study's assumed shock",
    returns: "Poverty, inequality and tax and benefit receipts in each year",
  },
];

// Code, data and synthetic data. Licences: policyengine-uk and policyengine.py
// AGPL-3.0, microcosm MIT (LICENSE files). Microdata: the certified UK dataset
// is in a private Hugging Face repository (policyengine.py 810a59e,
// data/bundle/manifest.json: hf://policyengine/populace-uk-private); FRS-derived
// data are licensed through the UK Data Service and cannot be redistributed
// (uk-trade-shock-study README). Firm data: the firm VAT paper's population is
// drawn from published ONS and HMRC tables and its repository is public and
// MIT-licensed (firm-microsim-paper e6d5dd6 README: "These within-band values
// are explicit modelling assumptions, not recovered administrative
// microdata"). Using it to calibrate an agent-based model is untested.
// Microcosm README (429d7a0): "Firm support is experimental".
export const dataAccess = [
  {
    tag: "Open",
    title: "Code",
    text: "PolicyEngine UK, policyengine.py and the Microcosm data pipeline are open source. Anyone can read, run and change the rules and the methods.",
  },
  {
    tag: "Restricted",
    title: "Household microdata",
    text: "Microcosm UK is built from the Family Resources Survey, which is licensed through the UK Data Service, so we cannot share the records. PolicyEngine runs the simulations and shares results as tables.",
  },
  {
    tag: "Working paper",
    title: "Synthetic firm data",
    text: "The firm VAT paper's synthetic business population is drawn only from published ONS and HMRC tables, so it can be shared. Data of this kind could help calibrate an agent-based model; we have not tested that.",
  },
];

// Two candidate pilots. Neither has published results: the trade study
// reports none for the deal schedule and nothing exists on BICS. "Starting point"
// rows name existing work: the tariff bridge (trade study 06c8bbc) and the
// business-tax allocation parameters (see businessPolicy above).
export const pilots = [
  {
    title: "The Economic Prosperity Deal",
    rows: [
      {
        label: "From a trade model",
        text: "Changes in output, employment and prices by sector and wages by labour type under the deal's tariff schedule, with the labour-market closure stated",
      },
      {
        label: "From PolicyEngine",
        text: "The sector concordance; household incomes by decile and region, and experimentally by local area; poverty; net Exchequer cost",
      },
      {
        label: "Starting point",
        text: "The trade study's tariff bridge, with the trade model's results in place of its assumed elasticity",
      },
    ],
  },
  {
    title: "The British Industrial Competitiveness Scheme",
    rows: [
      {
        label: "From the Modelling Unit",
        text: "The electricity-cost change by sector, and how firms split it between prices, pay and profits: from a model or as scenarios",
      },
      {
        label: "From PolicyEngine",
        text: "Allocation to households by spending, sector of employment and shareholding; household and fiscal effects",
      },
      {
        label: "Starting point",
        text: "The model's allocation of business-tax changes, extended to a non-tax cost change",
      },
    ],
  },
];

export const questions = [
  "Which is the better first pilot: tariffs under the Economic Prosperity Deal, or BICS?",
  "What can a trade-model run export: output, employment and prices by sector, wages by labour type? Under which labour-market closure?",
  "For a policy such as BICS, where should the split between prices, pay and profits come from?",
  "Which firm behaviour needs an agent-based model, beyond what a trade or macro model gives?",
  "Which household results matter most: deciles, poverty, regions, constituencies (experimental)?",
];

// Each item follows the public page linked on the slide (sources no10, hmt,
// obr, hansard and nuffield above).
export const uses = [
  {
    title: "Government",
    items: [
      "10 Downing Street's data science team (10DS) built 10ds-microsim on PolicyEngine; its results are used as supplementary, experimental analysis",
      "HM Treasury's Personal Tax, Welfare and Pensions team ran a pilot evaluation of PolicyEngine UK in 2024; its transparency record says HMT does not currently use it",
      "The OBR lists PolicyEngine among the organisations it engaged with in 2025–\u206026",
    ],
  },
  {
    title: "Research and media",
    items: [
      "House of Commons Library research using PolicyEngine, cited in a House of Lords debate",
      "PolicyEngine modelling appears in work by NIESR, the New Economics Foundation and the Fabian Society, in a PolicyEngine paper published by the IEA, and in reporting by The Independent and ITV's Peston",
    ],
  },
  {
    title: "Funding",
    items: [
      "The Nuffield Foundation funds PolicyEngine UK through grants made in 2024 and 2026, for local-area data and constituency-level Budget analysis",
    ],
  },
];

// How the rules are encoded. Snippets are abridged from policyengine-uk
// d3db7ac (version 2.179.0): parameters/gov/hmrc/income_tax/allowances/
// personal_allowance/amount.yaml (two of its dated values, without the
// file-level metadata; the reference title drops "The" and "art 3(a)" and
// the link is shortened),
// variables/gov/hmrc/income_tax/allowances/personal_allowance.py (label,
// unit, reference and one comment cut; "personal_allowance = PA.amount" is
// inlined in the last line) and tests/policy/baseline/gov/hmrc/income_tax/
// allowances.yaml (the "Personal Allowance eliminated" case, without its
// error margin). Counts at the same commit: 1,086 YAML files under
// parameters/gov, 998 with a "reference:" key (grep -rlE '^\s*reference:');
// 1,504 "class X(Variable)" definitions under variables/; 6,779 "- name"
// cases in the YAML files under tests/policy (6,788 in all of tests/).
// These counts are for version 2.179.0; the bundle certifies 2.174.1.
// Entities: entities.py (Household, BenUnit, Person).
export const rulesCode = {
  parameter: {
    title: "Parameter: dated values, with legal references",
    code: `values:
  2019-04-06: 12_500
  2021-04-06:
    value: 12_570
    metadata:
      reference:
        - title: Income Tax (Indexation) Order 2021
          href: legislation.gov.uk/uksi/2021/111`,
  },
  variable: {
    title: "Variable: a formula over arrays, one value per person",
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
  },
  test: {
    title: "Test: inputs and the expected output",
    code: `- name: Personal Allowance eliminated
  period: 2020
  input:
    adjusted_net_income: 150000
  output:
    personal_allowance: 0`,
  },
};

export const rulesFacts = [
  {
    title: "Three entities",
    text: "Person, benefit unit and household. Each variable belongs to one.",
  },
  {
    title: "1,086 parameter files",
    text: "Dated rates and thresholds; 998 carry a reference.",
  },
  {
    title: "1,504 variables, 6,779 tests",
    text: "A test gives inputs and the expected output.",
  },
];

// How a reform, a counterfactual or a shock is run (policyengine-uk d3db7ac).
// - Projection: data/economic_assumptions.py extends the single-year dataset
//   with the growth series in parameters/gov/economic_assumptions/
//   yoy_growth.yaml, assigned per input by data/uprating_indices.yaml. The
//   file's header: OBR outturn to 2025, the October 2026 EFO forecast for
//   2026 to 2031, OBR long-run assumptions after.
// - Reform as a parameter path and value: tests/microsimulation/
//   reforms_config.yaml, "Raise basic rate by 1pp":
//   gov.hmrc.income_tax.rates.uk[0].rate: 0.21.
// - Baseline and reform simulations compared: policyengine.py 810a59e,
//   docs/impact-analysis.md (economic_impact_analysis).
// - Mostly static by default: parameters/gov/simulation/
//   labour_supply_responses/{income,substitution}_elasticity.yaml are 0.
//   Optional response: dynamics/progression.py (hours, "Uses OBR elasticity
//   estimates"). Participation is off: dynamics/labour_supply.py sets
//   participation_responses = None, and docs/book/usage/dynamics.md says the
//   coordinator "runs progression only: it leaves participation disabled".
//   On by default: parameters/gov/simulation/capital_gains_responses/
//   elasticity.yaml is 1 (tests/test_capital_gains_responses.py), and
//   parameters/gov/contrib/policyengine/employer_ni/employee_incidence.yaml
//   is 1 (employer NI changes passed to pay).
// - A shock changes inputs, not rules: uk-trade-shock-study 06c8bbc,
//   uk_trade_shock_study/runner.py (baseline and shocked simulations).
export const runFlow = [
  {
    owner: "Data",
    title: "Certified dataset",
    text: "Microcosm UK 2024–25: people, benefit units and households, with weights",
  },
  {
    owner: "Uprating",
    title: "Project to the year",
    text: "Each input grows by its own index (earnings, prices and others), from OBR outturn and forecasts",
  },
  {
    owner: "Rules",
    title: "Run twice",
    text: "Baseline and counterfactual on the same records. A reform changes parameters; a shock changes inputs",
  },
  {
    owner: "Results",
    title: "Take the difference",
    text: "Per household, then weighted: deciles, poverty, programmes, regions, local areas (experimental), government balance",
  },
];

export const runFacts = [
  {
    title: "A reform",
    code: "gov.hmrc.income_tax\n  .rates.uk[0].rate: 0.21",
    text: "A parameter path and a new value, from a date.",
  },
  {
    title: "A shock",
    text: "Changed inputs, such as earnings by sector or spending by category. The rules stay as they are.",
  },
  {
    title: "Mostly static by default",
    text: "Labour supply does not respond unless switched on. Two responses run by default: capital gains realisations (elasticity 1) and employer NI changes passed to pay.",
  },
  {
    title: "Not modelled",
    text: "Firms' decisions, and how wages and prices adjust. There is no general equilibrium: those come from outside.",
  },
];

// Microcosm UK 2024-25: what the pipeline builds. Read from microcosm
// 429d7a0, packages/microcosm-build/src/microcosm/build/uk/source_stages.json
// (56 stages, each with a "survey" and a "source"; all 52 microdata and
// administrative artifacts carry a SHA-256, the public reference tables
// committed in the repository do not):
// - frs_spine: Family Resources Survey 2024-25 (UK Data Service SN 9563);
// - spi_support_channel, hmrc_spi_income_spine, spi_income_band_donors:
//   copies of FRS households draw incomes from the Survey of Personal Incomes
//   public-use file 2022-23 (the code calls it a "tape") (uk_runtime/spi_income.py and
//   spi_rank_transport.py: a quantile regression forest drawn at the survey
//   household's rank); reserved records for the HMRC total-income bands
//   "from GBP 200,000";
// - spi_employment_shell: "adults' SOC 2020 major group, SIC 2007 division
//   and sector, redrawn onto the SPI-drawn rows from their own incomes";
// - was_wealth (Wealth and Assets Survey round 8), lcfs_consumption (Living
//   Costs and Food Survey 2024-25), etb_vat and etb_services (Effects of
//   Taxes and Benefits), nts_bus_travel (National Travel Survey): each fits
//   microcosm.fit's RegimeGatedQRF (grep in uk_runtime/);
// - uc_take_up, pension_credit_take_up, child_benefit_take_up: DWP and HMRC
//   statistics "applied to PolicyEngine-UK pre-take-up" entitlement.
// Imputation method: packages/microcosm-fit/README.md ("regime-gated,
// sequentially-chained quantile-regression-forest imputer"; weighted
// bootstrap; "its zero mass is preserved exactly"; "a random quantile is
// sampled per row (seeded)"). Draws keyed on identity: source_stages.json
// ("identity-keyed deterministic draws"). No target is by industry: no row
// of uk/target_references.json names a SIC code (the two matches of "sic"
// are "basic rate").
export const microcosmFlow = [
  {
    owner: "FRS 2024–25",
    title: "Survey spine",
    text: "Households, benefit units and people, with incomes, housing and each main job's sector",
  },
  {
    owner: "HMRC SPI 2022–23",
    title: "Tax-record incomes",
    text: "Copies of survey households draw incomes from the public-use file; extra records above £200,000",
  },
  {
    owner: "WAS, LCFS, ETB, NTS",
    title: "Wealth and spending",
    text: "Wealth, spending by category, VAT, public services and travel, drawn from donor surveys",
  },
  {
    owner: "DWP and HMRC",
    title: "Benefit take-up",
    text: "Who claims, drawn to published rates among those the rules find entitled",
  },
  {
    owner: "Official totals",
    title: "Calibrated weights",
    text: "Household weights fitted to official totals by the calibration step",
  },
];

export const microcosmFacts = [
  {
    title: "Imputation",
    text: "Quantile regression forests, weighted and chained across variables. Draws sample the conditional distribution.",
  },
  {
    title: "Sector and occupation",
    text: "From the survey's job record; redrawn for the tax-record copies. No weight target is by industry.",
  },
  {
    title: "Reproducible",
    text: "Every survey microdata file is pinned by SHA\u2011256. Draws are seeded.",
  },
  {
    title: "In the code",
    text: "56 declared stages, each naming its survey and source (commit 429d7a0, 15 November).",
  },
];

// Calibration.
// Method (microcosm 429d7a0): packages/microcosm-calibrate/README.md and
// src/microcosm/calibrate/solve.py, relative_error_loss: "capped weighted
// MAPE on fixed row scales", scale max(|target|, 1), weights normalised by
// their sum; "optimizes log-weights with torch Adam"; max_weight_ratio is a
// hard bound, "no calibrated weight may exceed max_weight_ratio *
// initial_weight", which the equation writes as w <= 10 w^0. UK national settings:
// uk_runtime/national_doctrine.py (1,500 epochs, learning rate 0.02, weight
// ratio cap 10, loss cap 10, seed 0, mass "free", l0_lambda 0, target weight
// rule "family_equal": 1 / (families × members of the family)). The national
// file therefore uses no L0 selection. The certified build's own public
// diagnostics (the dashboard's data, calibration.options) record the same
// settings: method adam, epochs 1500, learning_rate 0.02, max_weight_ratio 10,
// seed 0, mass free, loss cap 10, weight_entity household, selected loss
// 0.00514.
// Fit (the certified build): the public calibration dashboard, release
// "2024-25-national · uk-frs-calibration-attempt-20261107T020434Z-eeb6093e",
// read 15 November 2026: weighted target error 0.51% ("the final calibration
// loss: the importance-weighted mean of each target's scaled error after
// applying the loss cap"); 1,514 targets in 44 statistics; 98.7% "within 10%
// of the target value"; 78.2K "synthetic households with a non-zero
// calibrated weight"; by publisher HMRC 776, ONS 365, DWP 213, MHCLG 82
// (so 78 from others). These are in-sample; the dashboard's validation and
// cross-dataset pages have no UK content.
// The repository's target file at 429d7a0 lists 1,710 national rows, more
// than the certified build's 1,514, so the slide quotes the build only.
// Local-area file: uk/local_target_references.json (27,157 rows); the bundle
// manifest lists microcosm_uk_2024_25_dense for constituencies and local
// authorities; the dashboard labels that release "local area · experimental".
export const calibrationEquation =
  String.raw`\min_{0<w\,\le\,10\,w^{0}}\ \sum_{j}\,\omega_j\,\min\!\left(\frac{\lvert a_j^{\top}w-t_j\rvert}{\max(\lvert t_j\rvert,\,1)},\ 10\right)`;

export const calibrationFit = {
  stats: [
    { value: "1,514", label: "targets, in 44 statistics" },
    { value: "98.7%", label: "of targets within 10% of the official figure" },
    { value: "0.51%", label: "final loss: weighted, capped relative error" },
    { value: "78.2k", label: "household records with a non-zero weight" },
  ],
  publishers: [
    { name: "HMRC", count: 776, text: "Incomes by band and region, capital gains, tax liabilities" },
    { name: "ONS", count: 365, text: "Population by age and region, employment by occupation" },
    { name: "DWP", count: 213, text: "Universal Credit, State Pension and other benefit caseloads" },
    { name: "MHCLG", count: 82, text: "Council tax dwellings by band" },
    { name: "Others", count: 78, text: "OBR receipts and spending, bus journeys, student loans" },
  ],
};

// Gates, certification and firm support.
// Gates (microcosm 429d7a0, uk/gates.json): 94 gate entries over the phases
// preflight, assembled, transferred and terminal. uk_target_fit:
// max_abs_relative_error 0.25 with reviewed exclusions; uk_weight_ess:
// minimum_ess_fraction 0.01; uk_weight_ratio; uk_support and the
// stage_health "support_clip" checks bound imputed columns by the donor
// surveys' support; uk_aggregate_admin: default_rtol 0.15.
// Certification (policyengine.py 810a59e): data/bundle/manifest.json pins
// policyengine 6.19.0, policyengine-core 3.33.3, policyengine-uk 2.174.1 and
// microcosm_uk_2024_25.h5 by SHA\u2011256 at an immutable revision, with
// "built_with_model_version" 2.174.1; docs/bundles.md: the installer
// verifies each artifact's hash; docs/engineering/skills/
// data-certification.md: "Certification asserts that this policyengine.py
// release, with the model package pinned ..., serves that data release — and
// the assertion is only made good by the test suite passing on the exact
// pinned pair."
// Firm support (microcosm 429d7a0): README ("Firm support is experimental.
// The frame kernel can declare firm entity tables and validate person-firm
// jobs link tables, but link-aware operators, firm calibration targets, and
// firm release pipelines are not production surfaces yet");
// uk_runtime/firm_generation.py ("Experimental UK firm-population generator
// migrated from firm-microsim-paper"; imported only by uk_runtime/__init__,
// so no build stage calls it); uk/uk_firms_targets.json (eight target
// declarations without values: ONS enterprise counts by turnover band,
// employment band and SIC code; HMRC VAT-registered traders and net VAT
// liability by turnover band and SIC sector); docs/firm-support-plan.md
// (a plan: ownership links "should be a later extension").
export const microcosmRelease = [
  {
    tag: "In the pipeline",
    title: "Release gates",
    text: "94 declared checks across four phases of the build. A release is refused if, for example, a target misses by more than 25% without a recorded review, the weights' effective sample size falls below its floor, or an imputed value leaves the donor survey's range.",
    note: "Counted in the code at commit 429d7a0.",
  },
  {
    tag: "policyengine.py 6.19.0",
    title: "What “certified” means",
    text: "The bundle pins the data file by SHA\u2011256 at an immutable revision, with the model version it was built with (policyengine-uk 2.174.1) and the core engine. Installing the bundle checks the hash. The pair is certified when the package's tests pass on it.",
    note: "A cited bundle version identifies rules, data and engine together.",
  },
  {
    tag: "Experimental",
    title: "Firm support",
    text: "In the code: a firm table and person–firm job links that the data frame can declare and validate; a generator of synthetic firms ported from the firm VAT paper; eight declared targets (ONS enterprise counts, HMRC VAT traders and liabilities). Not production: operators that use the links, firm calibration and firm releases. No stage of the UK build makes firms.",
    note: "The household file contains no firms.",
  },
];

// Uncertainty in the shock studies.
// AI study (uk-ai-study 5d75106): analysis/monte_carlo_families.py, "50
// paired draws (seeds 0-49)"; only the displacement mask varies across
// draws. The paper reports the mean and the assignment-draw standard
// deviation (paper/sections/results.tex); the percentile range is in the
// public repository's results/robustness/central_monte_carlo.json, exchequer_cost_bn:
// mean 17.69, sd 1.20, q025 15.47, q975 19.79, mcse 0.17. Dataset:
// paper/sections/methodology.tex, "processed (base, unenhanced) Family
// Resources Survey 2024--25 ... retains the survey's own grossing weights".
// Dataset sensitivity: paper/sections/discussion.tex, "rerunning the central
// scenario on PolicyEngine's enhanced FRS dataset raises the seed-0
// Exchequer cost from £18.2 billion to £29.5 billion" (appendix: "enhanced
// FRS 2023--24"). One draw moves £11.3bn between datasets; the 2.5th to
// 97.5th percentile range across draws is £4.3bn wide.
// Trade study (uk-trade-shock-study 06c8bbc): uk_trade_shock_study/runner.py,
// run_monte_carlo ("Repeat a scenario and report assignment SD and numerical
// MC SE. Wage earnings cuts are deterministic, but newly entitled benefit
// units' UC claiming draws vary by seed"); paper/sections/results.tex: "100
// assignment draws" for the tariff pipeline, and a household bootstrap that
// puts sampling intervals on the energy episode's results ("sampling
// intervals over the survey base only").
export const uncertainty = {
  steps: [
    "A scenario sets the chance that an employee loses their job, by sector or occupation. Who does is drawn at random",
    "In the tariff study, whether a newly entitled family claims Universal Credit is also drawn, at the scenario's take-up rate",
    "Every draw is a full run of the tax and benefit rules. Studies report the mean and the standard deviation across draws",
    "50 draws in the AI study's central scenario; 100 in the tariff bridge",
  ],
  stats: [
    { value: "£17.7bn", label: "Exchequer cost of the illustrative AI scenario: mean of 50 draws, on the survey-weighted FRS 2024–25, not Microcosm UK" },
    { value: "£1.2bn", label: "standard deviation across draws; 2.5th to 97.5th percentile of 50 draws: £15.5bn to £19.8bn" },
    { value: "£29.5bn", label: "one draw of the same scenario on the enhanced FRS 2023–24, against £18.2bn on the survey-weighted FRS: the dataset moves the cost more than the draws do" },
  ],
};

// A proposed interface for the model links. Not built: no reader for such a
// table exists. What runs today is the trade study's own pipeline
// (uk-trade-shock-study 06c8bbc: apply_shocks(persons, scenario, seed) in
// uk_trade_shock_study/shocks.py takes earnings shocks by two-digit SIC
// division; runner.py compares baseline and shocked simulations).
// Keys follow what the model holds (policyengine-uk d3db7ac):
// sic_industry_division (two-digit SIC 2007 division of the main or last
// job, person level); region (the Region enum: nine English regions, Wales,
// Scotland, Northern Ireland, which are the ITL1 regions); spending by COICOP
// division (variables/input/consumption/). Years: yoy_growth.yaml carries OBR
// forecasts to 2031. Existing outputs: the policyengine.py output classes
// listed under tariffDisaggregation above. Mean and SD across draws are
// computed in the studies' own code (trade study runner.py, run_monte_carlo)
// and are not a policyengine.py output, so they sit under "proposed" with
// the CSV format. Profits: the model has a household shareholding variable
// that allocates a business-tax amount in £bn (variables/contrib/
// policyengine/corporate_incident_tax_revenue_change.py); nothing applies a
// % change in returns to capital from a table, so the row says not built.
// Labour-market closure: the standard GTAP closure fixes aggregate
// employment and has one wage per labour type, not per sector.
export const interfaceSpec = {
  inputs: [
    {
      field: "scenario, year",
      text: "A label and a year (OBR forecasts run to 2031)",
    },
    {
      field: "basis",
      text: "Fiscal year; % change from the sending model's own baseline; real or nominal, stated",
    },
    {
      field: "sector",
      text: "Two-digit SIC 2007 division, or mapped sectors",
    },
    {
      field: "region (optional)",
      text: "ITL1: nine English regions and three nations",
    },
    {
      field: "earnings, employment",
      text: "% change from baseline, by cell and year; say whether employment falls are net job losses or moves between sectors",
    },
    {
      field: "labour",
      text: "By sector, or by skill type mapped to occupation",
    },
    {
      field: "prices",
      text: "% change by COICOP division and year",
    },
    {
      field: "profits (not built)",
      text: "% change in returns to capital; would be allocated by shareholding",
    },
    {
      field: "job-loss rule",
      text: "Equal chances in a cell, or tilted by age or pay",
    },
  ],
  outputs: [
    {
      field: "by income decile",
      text: "Net income change; shares gaining and losing",
    },
    {
      field: "poverty, inequality",
      text: "Poverty rates, Gini and income shares",
    },
    {
      field: "by programme",
      text: "Main taxes and benefits; government balance",
    },
    {
      field: "by place",
      text: "ITL1 regions; local areas (experimental file)",
    },
  ],
  proposedOutputs: [
    {
      field: "across draws",
      text: "Mean and SD across draws: in the studies' code, not yet in policyengine.py",
    },
    {
      field: "format",
      text: "CSV tables per scenario and year",
    },
  ],
};
