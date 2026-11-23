// Every claim and figure on the slides comes from one document: PolicyEngine's
// proposal to the New Economics Foundation (NEF), "Public services in kind:
// status in PolicyEngine UK and a plan", dated 21 November 2026. The sources
// below are the links that proposal cites, with the dates it gives. Nothing
// on a slide is estimated for this deck.

export const cover = {
  title: "Public services in kind in PolicyEngine UK: status and a plan",
  subtitle: "A proposal to the New Economics Foundation",
  event: "New Economics Foundation",
  date: "Proposal · 21 November 2026",
};

export type Source = { label: string; href?: string; published?: string };

// The proposal's sources, in its order.
export const sources = {
  policyengineUk: {
    label: "PolicyEngine UK, GitHub repository, main branch as of 19 November 2026",
    href: "https://github.com/PolicyEngine/policyengine-uk",
  },
  microcosm: {
    label: "Microcosm UK 2024-25 dataset, development build, November 2026",
  },
  carbonCode: {
    label: "PolicyEngine UK, household carbon code",
    href: "https://github.com/PolicyEngine/policyengine-uk/blob/main/policyengine_uk/variables/household/consumption/carbon.py",
  },
  onsEtb: {
    label: "ONS, Effects of taxes and benefits on household income, FYE 2024",
    href: "https://www.ons.gov.uk/peoplepopulationandcommunity/personalandhouseholdfinances/incomeandwealth/bulletins/theeffectsoftaxesandbenefitsonhouseholdincome/2024",
    published: "September 2025",
  },
  onsEtbMethodology: {
    label: "ONS, Effects of taxes and benefits on UK household income: methodology",
    href: "https://www.ons.gov.uk/peoplepopulationandcommunity/personalandhouseholdfinances/incomeandwealth/methodologies/theeffectsoftaxesandbenefitsonukhouseholdincome",
  },
  onsEtbTechnical: {
    label: "ONS, Effects of taxes and benefits on household income: technical report, FYE 2020",
    href: "https://www.ons.gov.uk/peoplepopulationandcommunity/personalandhouseholdfinances/incomeandwealth/methodologies/theeffectsoftaxesandbenefitsonhouseholdincometechnicalreportfinancialyearending2020",
  },
  hmtImpact: {
    label: "HM Treasury, Impact on households: distributional analysis, Budget 2026",
    href: "https://assets.publishing.service.gov.uk/media/6ae1850f16428df53760627d/Impact_on_households.pdf",
    published: "October 2026",
  },
  hmtSr2010: {
    label: "HM Treasury, Spending Review 2010 distributional analysis",
    href: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/203829/Spending_Review_2010_-_distributional_impact_analysis.pdf",
  },
  hbai: {
    label: "DWP, Households below average income: methodology, FYE 2025",
    href: "https://www.gov.uk/government/statistics/households-below-average-income-for-financial-years-ending-1995-to-2025/households-below-average-income-background-information-and-methodology-report-fye-2025",
  },
  ifsSocialRent: {
    label:
      "Adam, Chandler, Hood and Joyce, IFS, Social rent policy: choices and trade-offs (2015), presentation slides",
    href: "https://www.ifs.org.uk/sites/default/files/output_url_files/Joyce_social_rents_Nov15.pdf",
  },
  ucl2017: {
    label:
      "UCL Institute for Global Prosperity, Social prosperity for the future: a proposal for universal basic services (2017)",
    href: "https://basicincome.org/wp-content/uploads/2018/09/Social-prosperity-for-the-future.pdf",
  },
  nefUbs: {
    label: "NEF, Universal basic services",
    href: "https://neweconomics.org/campaigns/universal-basic-services",
  },
  nefChildcare: {
    label: "NEF, The universal family childcare promise (2025)",
    href: "https://neweconomics.org/2025/07/the-universal-family-childcare-promise",
  },
  desnzFactors: {
    label: "DESNZ, Greenhouse gas conversion factors 2026",
    href: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2026",
  },
  defraFootprint: {
    label: "Defra, UK carbon footprint to 2023",
    href: "https://www.gov.uk/government/statistics/uks-carbon-footprint/carbon-footprint-for-the-uk-and-england-to-2023",
  },
  mis2026: {
    label: "JRF and Loughborough University, Minimum Income Standard 2026",
    href: "https://www.jrf.org.uk/income-savings-and-debt/a-minimum-income-standard-for-the-united-kingdom-in-2026",
  },
  scotGovMig: {
    label: "Scottish Government, Minimum income guarantee modelling",
    href: "https://www.gov.scot/publications/minimum-income-guarantee-level-modelling/",
  },
  orrRailSupport: {
    label:
      "Office of Rail and Road, table 7271, government support to the rail industry by source, all sources, 2024-25 (£11.86bn)",
  },
  spendingReview2025: {
    label: "HM Treasury, Spending Review 2025 (June 2025): England's 2025-26 health budget, £202bn",
  },
  ascFinance: {
    label: "DHSC, Adult social care finance report, England, 2024 to 2025",
    href: "https://www.gov.uk/government/statistics/adult-social-care-finance-report-england-2024-to-2025",
  },
  nhsAllocations: {
    label: "NHS England, Technical guide to allocation formulae, 2026-27",
    href: "https://www.england.nhs.uk/wp-content/uploads/2025/12/allocations-2627-technical-guide-to-formulae-v2.pdf",
  },
} satisfies Record<string, Source>;

// ---------------------------------------------------------------------------
// Part 1: what we mean (proposal, "What we mean by benefits in kind")

export const scope = {
  inScope: [
    "Health (NHS)",
    "Education",
    "Childcare",
    "School meals",
    "Local buses and rail",
    "Social housing",
    "Social care",
    "Candidate new universal services: energy, water, food",
  ],
  question:
    "How public services and cash benefits compare in what they add to living standards, economic security and adequacy, and at what fiscal and carbon cost",
  unit: "Households in the Family Resources Survey (FRS), enhanced in PolicyEngine's Microcosm dataset",
  unitNote: "Each service sits beside the same household's taxes and cash benefits",
  outOfScope: [
    "Services everyone shares, such as defence and policing (ONS and the Treasury leave them out too)",
    "Capital spending, unless it changes what households receive",
    "Social security targeting: a separate strand of the wider programme",
  ],
  notBik: "Company cars, medical insurance and other items reported on form P11D: PolicyEngine treats these as part of the tax system",
};

// ---------------------------------------------------------------------------
// Part 2: status today (proposal, "Status today", table)

/** Yes, partly or no, as the proposal's table states it. */
export type Status = "yes" | "partly" | "no";

export type ServiceRow = {
  service: string;
  /** Whether the service has an in-kind value per household today. */
  valued: Status;
  valuedNote: string;
  source: string;
  /** Calibrated to official figures; null where the proposal says n/a. */
  calibrated: Status | null;
  calibratedNote: string;
  gap: string;
};

// "Five services already have a household-level value in PolicyEngine UK;
// social care, social housing subsidy and in-kind energy, water and food do
// not. Only buses and childcare are calibrated to official figures in detail."
export const services: ServiceRow[] = [
  {
    service: "NHS",
    valued: "yes",
    valuedNote: "A share of England's 2025-26 health budget",
    source: "England's budget (£202bn), spread across the UK by hospital use by age and sex",
    calibrated: "partly",
    calibratedNote: "Total set to the budget before calibration, not held after",
    gap: "GP, community, mental health and prescribing follow hospital use; devolved health spending missing; no variation by income or health",
  },
  {
    service: "State education",
    valued: "yes",
    valuedNote: "Spending per household",
    source: "Imputed from ETB microdata, 2023-24",
    calibrated: "no",
    calibratedNote: "None",
    gap: "No anchor to outturn by country (PESA); no split by phase",
  },
  {
    service: "Funded childcare",
    valued: "yes",
    valuedNote: "England's hours and the Wales Childcare Offer, from the rules",
    source: "Rules in law at DfE hourly rates; take-up fitted to DfE and HMRC counts",
    calibrated: "yes",
    calibratedNote: "DfE headcounts and Tax-Free Childcare, mostly within 0.5%",
    gap: "Headcounts only, not hours or spending; Scotland's 1,140 hours have rules but no value; Northern Ireland neither",
  },
  {
    service: "Free school meals",
    valued: "partly",
    valuedNote: "Value per pupil as reported",
    source: "FRS 2024-25, as reported",
    calibrated: "no",
    calibratedNote: "None",
    gap: "No eligibility rules, so an extension cannot yet be simulated",
  },
  {
    service: "Local buses",
    valued: "yes",
    valuedNote: "Trips, fares paid and subsidy",
    source: "National Travel Survey trips (England); DfT support per boarding",
    calibrated: "yes",
    calibratedNote: "DfT, Scottish, Welsh and Northern Ireland support, fares and journeys, mostly within 1%",
    gap: "Fare-cap changes do not yet flow into subsidy or household income",
  },
  {
    service: "Rail",
    valued: "yes",
    valuedNote: "Subsidy per household",
    source: "Imputed from ETB microdata; subsidy is usage times a fare index",
    calibrated: "no",
    calibratedNote: "Not yet matched to the official total",
    gap: "Total well below government support (£11.86bn, ORR, 2024-25); a fare cut lowers modelled subsidy",
  },
  {
    service: "Social housing",
    valued: "no",
    valuedNote: "Tenure only",
    source: "FRS tenure",
    calibrated: "partly",
    calibratedNote: "Only through benefit caseloads",
    gap: "No value for below-market rent; tenure changes and waiting lists not modelled",
  },
  {
    service: "Social care",
    valued: "no",
    valuedNote: "No value today",
    source: "n/a",
    calibrated: null,
    calibratedNote: "n/a",
    gap: "Care received is in the FRS but not yet in our dataset; care-home residents are outside the FRS",
  },
  {
    service: "Energy",
    valued: "no",
    valuedNote: "Spending and kWh, not an in-kind value",
    source: "LCFS 2024-25, converted to kWh with DESNZ prices",
    calibrated: "partly",
    calibratedNote: "Electricity spending to ONS, kWh to DESNZ; gas spending not yet",
    gap: "Best covered area; no value for an energy service",
  },
  {
    service: "Water",
    valued: "no",
    valuedNote: "Bills only",
    source: "FRS reported charges",
    calibrated: "no",
    calibratedNote: "None",
    gap: "No volumes or social tariffs",
  },
  {
    service: "Food",
    valued: "no",
    valuedNote: "Spending only",
    source: "LCFS 2024-25",
    calibrated: "no",
    calibratedNote: "None",
    gap: "No quantities or nutrition",
  },
];

/** The abbreviations in each half of the status table, spelled out under it.
 * FRS is spelled out on the scope slide, before both. */
export const statusKeyValued = [
  ["ETB", "ONS Effects of Taxes and Benefits"],
  ["DfE", "Department for Education"],
  ["DfT", "Department for Transport"],
  ["PESA", "HM Treasury spending statistics"],
  ["ORR", "Office of Rail and Road"],
] as const;

export const statusKeyNotValued = [
  ["LCFS", "Living Costs and Food Survey"],
  ["DESNZ", "Department for Energy Security and Net Zero"],
] as const;

// How services count in income today (proposal, "How services count in
// income today").
export const incomeCount = [
  { item: "NHS", net: true, hbai: false },
  { item: "Education", net: true, hbai: false },
  { item: "Transport subsidy", net: true, hbai: false },
  { item: "Funded childcare", net: true, hbai: false },
  { item: "Free school meals", net: false, hbai: true },
  { item: "Healthy Start vouchers", net: true, hbai: true },
];

// Benchmarks (proposal, "Benchmarks").
export const benchmarks = {
  // sources.onsEtb and sources.hmtImpact.
  columns: [
    "ONS Effects of Taxes and Benefits (ETB)",
    "HM Treasury, Impact on households (Budget 2026)",
  ],
  rows: [
    {
      label: "Latest",
      ons: "Financial year ending 2024 (published September 2025); 2024-25 provisionally due December 2026",
      hmt: "October 2026",
    },
    {
      label: "Services",
      ons: "Education, NHS, rail and bus subsidy, school meals, Healthy Start, housing subsidy, non-residential adult social care, free childcare",
      hmt: "Health, education, work and pensions services, transport, justice, culture, some English local government spending",
    },
    {
      label: "Method",
      ons: "Average use by household type, valued at cost",
      hmt: "Expected use from the LCFS and FRS, valued one for one as a cash gain",
    },
    {
      label: "Leaves out",
      ons: "Capital, defence, law and order; care homes",
      hmt: "Administration, capital, public goods, devolved spending",
    },
    {
      label: "Headline",
      ons: "\"Final income\": post-tax income plus benefits in kind",
      hmt: "Spending gains as a share of net income, by decile",
    },
  ],
  points: [
    {
      title: "Our services already rest on ETB",
      text: "Education, rail, and bus subsidy in Wales and Northern Ireland are imputed from ETB, so a decile match checks our method; it is not an independent test",
    },
    {
      title: "Housing subsidy differs",
      text: "ETB allocates a notional council housing subsidy. The Institute for Fiscal Studies values the gap to market rents: about £40 a week in England in 2015 (29% of market rent). We propose the rent gap, reported beside ETB's",
    },
    {
      title: "Coverage share",
      text: "We would report the share of day-to-day departmental spending our services cover. The Treasury last stated its own, around two-thirds, in Spending Review 2010",
    },
  ],
};

// Gaps (proposal, "Gaps and hard problems").
export const hardGaps = [
  {
    title: "Social care",
    points: [
      "The FRS records care received, its hours and who pays; our dataset does not use it yet",
      "Care-home residents are outside the survey, and among the heaviest users of care and the NHS",
      "Options: the ONS method, care at home valued from the FRS, a modelled care-home population, or reporting care separately",
    ],
  },
  {
    title: "Social housing",
    points: [
      "We know who rents from a council or housing association, not the value of the below-market rent",
      "Valuing it needs a market rent for each social tenant, with private renters as donors",
      "A large expansion needs rules on who moves tenure and who waits: a modelling choice to agree, not a data fix",
    ],
  },
];

export const otherGaps = [
  {
    title: "Values, not rules",
    text: "NHS and education are values, so policy can only scale them; a rail fare cut lowers modelled subsidy. A new service needs rules, as for childcare",
  },
  {
    title: "Rail",
    text: "Well below published support, so not for use until re-anchored. Forcing the match hurt the weights; pricing support from journeys worked for buses",
  },
  {
    title: "NHS coverage",
    text: "England's budget spread by hospital use. GP and prescribing follow it; devolved spending missing; no variation by income or health",
  },
  {
    title: "New candidate services",
    text: "Energy is well measured, so an energy service can be valued from existing data. Water and food are spending only, and need a design first",
  },
  {
    title: "Geography",
    text: "Calibrated to UK, country and English-region totals. The local-area dataset adds energy, tenure and private-rent targets; no service targets yet",
  },
  {
    title: "Sample size",
    text: "Small groups (rail users, free school meal recipients, social renters in one region) will have wide uncertainty; results should carry ranges",
  },
];

// Carbon (proposal, "Carbon impacts").
export const carbon = {
  exists: [
    "A household footprint in tonnes CO2: LCFS spending in 12 broad categories times a carbon intensity per pound, from an earlier edition of Defra's footprint statistics",
    "Household gas and electricity in kWh, in Microcosm and checked against DESNZ totals, not yet used for carbon",
    "An optional carbon tax reform",
  ],
  add: [
    {
      title: "Energy by fuel",
      text: "Household kWh times official factors (electricity: 0.144 kg CO2e per kWh, DESNZ 2026). Replaces the energy share, so nothing is counted twice",
      scheduled: true,
    },
    {
      title: "Finer spending categories",
      text: "Food, transport fuel, bus, rail, car: the Defra and University of Leeds input-output method behind the official footprint",
      scheduled: false,
    },
    {
      title: "Footprint of the services",
      text: "Emissions per pound of NHS, education and transport spending, to compare a service and a cash transfer of equal cost",
      scheduled: false,
    },
  ],
};

// Outcome metrics (proposal, "Outcome metrics").
export type MetricStatus = "exists" | "partly" | "toBuild";

export const metrics: { title: string; text: string; status: MetricStatus; note?: string }[] = [
  {
    title: "Extended income",
    text: "Disposable income plus the value of services received, by decile and household type",
    status: "toBuild",
    note: "One definition, compared with ONS final income",
  },
  {
    title: "Poverty, before and after housing costs",
    text: "BHC and AHC: the standard headline measures, unchanged",
    status: "exists",
  },
  {
    title: "Minimum Income Standard (MIS)",
    text: "Share of people below what the public says is needed for a decent standard of living",
    status: "toBuild",
    note: "From the MIS 2026 budgets by household type",
  },
  {
    title: "Carbon",
    text: "Household footprint per pound of resources, cash or services",
    status: "partly",
  },
];

export const misNotes = [
  {
    title: "MIS and services interact",
    text: "MIS budgets already assume some services, such as free childcare hours and pensioner bus passes. A new service lowers the cash needed: we would count that saving, not add it to income",
  },
  {
    title: "MIS has been microsimulated before",
    text: "Scottish Government analysts used the 2024 MIS in UKMOD, a UK tax-benefit model, for the Minimum Income Guarantee Expert Group",
  },
  {
    title: "Later: sufficiency and time use",
    text: "Hours needed to meet basic needs. We have not yet found a way to link time-use data to our households",
  },
];

// ---------------------------------------------------------------------------
// Part 3: the plan (proposal, "Proposed plan")

export const phases = [
  {
    title: "Scope",
    months: "December 2026 to January 2027",
    work: [
      "Agree services, scenarios, metrics and geography",
      "Settle the MIS income measure and household-type mapping",
      "This service catalogue in final form",
      "Walk NEF through our carbon code",
    ],
  },
  {
    title: "Baseline",
    months: "February to March 2027",
    work: [
      "Extended income, with and without services",
      "MIS measure; household carbon by fuel",
      "Anchor NHS and education by country, NHS by service type",
      "Start re-anchoring rail from journeys (a known risk)",
      "Compare with ONS and Treasury results",
    ],
  },
  {
    title: "Policy levers",
    months: "April to May 2027",
    work: [
      "Rules for free school meals, bus and rail fares, childcare expansion",
      "Social rent as the gap to market rent; social care at home",
      "One new universal service with NEF; an energy allowance's carbon from fuel use",
    ],
  },
  {
    title: "Hard services",
    months: "June to July 2027",
    exploratory: true,
    work: [
      "A modelled care-home population (synthetic records)",
      "Housing expansion scenarios, with rules agreed with NEF",
      "NHS variation by income or health, from Understanding Society",
      "Tested method notes; results may need a later phase",
    ],
  },
];

export const roles = {
  nef: [
    "Policy designs and priorities",
    "The scenarios to test",
    "Review of each phase's results",
    "Expertise on adequacy measures and universal services",
  ],
  policyengine: [
    "The open-source model and code",
    "A dataset built from licensed survey microdata, shared as results, not raw data",
    "Results as a shareable notebook or dashboard at each phase",
    "A methods note for each service",
  ],
};

export const openQuestions = [
  {
    title: "Which services come first?",
    text: "Our suggestion: childcare, buses and energy, where the data are strongest; social rent follows in phase 3. Should housing come first instead?",
  },
  {
    title: "Which universal service designs, at what level?",
    text: "For example free buses everywhere, or an energy allowance per household",
  },
  {
    title: "How should services be valued?",
    text: "At cost to the state, as ONS and the Treasury do, or another way for some",
  },
  {
    title: "Which headline measure matters most?",
    text: "Extended income, MIS, poverty or carbon",
  },
  {
    title: "Is a UK-wide picture enough?",
    text: "Or English regions or local areas, such as Greater Manchester; the local-area dataset exists, services need local targets",
  },
  {
    title: "Which housing expansion and allocation rule?",
    text: "Who moves in, and from which tenure",
  },
  {
    title: "How will results be published?",
    text: "Joint report, NEF report with our methods note, or an interactive tool",
  },
];
