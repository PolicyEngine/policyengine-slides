// Every figure on the slides is pinned here to the source it was read from,
// on 18 November 2026: a URL and publication date for web sources, and a
// repo, commit and path for code. Nothing on a slide is estimated by us.

// Code, at the commits read.
const ukCommit = "98381bf4987ce8d30e6d9b7a3061362c5f2a3c84"; // policyengine-uk 2.179.2
const microcosmCommit = "bcb5cba9d7be2b5907503878248f8ce533f044e9";

const uk = `https://github.com/PolicyEngine/policyengine-uk/blob/${ukCommit}/policyengine_uk`;
const microcosm = `https://github.com/PolicyEngine/microcosm/blob/${microcosmCommit}/packages/microcosm-build/src/microcosm/build`;

// The cover. The meeting is on 19 November 2026.
export const cover = {
  title: "Modelling benefits in kind in PolicyEngine UK: scoping with NEF",
  subtitle: "What we cover, the data, and next steps",
  event: "New Economics Foundation",
  date: "19 November 2026",
};

export type Source = { label: string; href: string; published?: string };

export const sources = {
  // HMRC
  bikStats: {
    label: "HMRC, Benefits in kind statistics: July 2026 (Tables 1 to 5)",
    href: "https://www.gov.uk/government/statistics/benefits-in-kind-statistics-july-2026",
    published: "15 July 2026",
  },
  bikByType: {
    label: "HMRC, Taxable benefits in kind by type of benefit, Table 4.5 (2016-17)",
    href: "https://www.gov.uk/government/statistics/number-of-recipients-and-amounts-of-taxable-benefits-by-type-of-benefit",
    published: "27 June 2019",
  },
  receipts: {
    label: "HMRC tax and NICs receipts for the UK",
    href: "https://www.gov.uk/government/statistics/hmrc-tax-and-nics-receipts-for-the-uk",
    published: "21 October 2026",
  },
  taxReliefs: {
    label: "HMRC tax relief statistics, January 2026",
    href: "https://www.gov.uk/government/statistics/tax-reliefs",
    published: "22 January 2026",
  },
  employerRates: {
    label: "Rates and thresholds for employers 2026 to 2027",
    href: "https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027",
    published: "updated 1 September 2026",
  },
  opra: {
    label: "HMRC booklet 480, Appendix 12: optional remuneration arrangements",
    href: "https://www.gov.uk/guidance/optional-remuneration-arrangements-480-appendix-12",
    published: "updated 1 April 2020",
  },
  payrolling: {
    label: "Mandatory reporting of benefits in kind in real time from April 2027",
    href: "https://www.gov.uk/government/publications/changes-to-reporting-of-benefits-in-kind-from-april-2027/mandatory-reporting-of-benefits-in-kind-in-real-time-information-rti-from-april-2027",
    published: "13 July 2026, updated 28 October 2026",
  },
  fuelOrder: {
    label: "The Van Benefit and Car and Van Fuel Benefit Order 2025 (SI 2025/1254)",
    href: "https://www.legislation.gov.uk/uksi/2025/1254/made",
  },
  // Budgets and the OBR
  budget2026Rates: {
    label: "Budget 2026, overview of tax legislation and rates, Annex A",
    href: "https://www.gov.uk/government/publications/budget-2026-overview-of-tax-legislation-and-rates-ootlar/annex-a-rates-and-allowances",
    published: "28 October 2026",
  },
  budget2026: {
    label: "Budget 2026, Table 6.1 (policy decisions)",
    href: "https://www.gov.uk/government/publications/budget-2026-document/budget-2026-html",
    published: "28 October 2026",
  },
  budget2026Recostings: {
    label: "Budget 2026, Table 6.4 (recostings)",
    href: "https://assets.publishing.service.gov.uk/media/6ae0f93fe4367e5c8b0467d6/Table_6.4_Recostings_Table.xlsx",
    published: "28 October 2026",
  },
  budget2025Costings: {
    label: "Budget 2025 policy costings",
    href: "https://assets.publishing.service.gov.uk/media/692872fd2a37784b16ecf676/Budget_2025-Policy_Costings.pdf",
    published: "26 November 2025",
  },
  obrSalarySacrifice: {
    label: "OBR, supplementary forecast information: salary sacrifice costing",
    href: "https://obr.uk/download/supplementary-forecast-information-salary-sacrifice-costing/",
    published: "5 February 2026",
  },
  budget2026Costings: {
    label: "Budget 2026 policy costings",
    href: "https://assets.publishing.service.gov.uk/media/6ae1883fe4367e5c8b0467df/AB26_Policy_Costing.pdf",
    published: "28 October 2026",
  },
  // Legislation
  financeAct2026s17: {
    label: "Finance Act 2026, s. 17: employee car and van ownership schemes",
    href: "https://www.legislation.gov.uk/ukpga/2026/11/section/17",
  },
  pensionsNicsAct2026: {
    label: "National Insurance Contributions (Employer Pensions Contributions) Act 2026, s. 1",
    href: "https://www.legislation.gov.uk/ukpga/2026/15/section/1",
  },
  // Surveys
  frs: {
    label: "Family Resources Survey 2024-25, question instructions (UKDS SN 9563)",
    href: "https://doc.ukdataservice.ac.uk/doc/9563/mrdoc/pdf/9563_frs_2024-25_question_instructions_final.pdf",
    published: "26 March 2026",
  },
  spi: {
    label: "Survey of Personal Incomes, Public Use Tape 2022-23 documentation (UKDS SN 9422)",
    href: "https://doc.ukdataservice.ac.uk/doc/9422/mrdoc/pdf/9422_put_2223_full_documentation.pdf",
  },
  spiLatest: {
    label: "Survey of Personal Incomes, Public Use Tape 2023-24 (UKDS SN 9638)",
    href: "https://datacatalogue.ukdataservice.ac.uk/studies/study/9638",
    published: "5 November 2026",
  },
  ashe: {
    label: "ONS, ASHE questionnaire guidance",
    href: "https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours/methodologies/annualsurveyofhoursandearningsquestionnaireguidance",
    published: "revised 12 April 2023",
  },
  etb: {
    label: "ONS, Effects of taxes and benefits, technical report FYE 2020",
    href: "https://www.ons.gov.uk/peoplepopulationandcommunity/personalandhouseholdfinances/incomeandwealth/methodologies/theeffectsoftaxesandbenefitsonhouseholdincometechnicalreportfinancialyearending2020",
    published: "revised 8 June 2021",
  },
  asheLatest: {
    label: "ONS, Employee earnings in the UK: 2026 (ASHE, provisional)",
    href: "https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours/bulletins/annualsurveyofhoursandearnings/2026",
    published: "22 October 2026",
  },
  // The certified Microcosm UK build's fitted targets, read 18 November 2026.
  dashboard: {
    label: "Calibration dashboard, pinned to the 15 November 2026 build",
    href: "https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk&release=microcosm-uk-2024-25-national/uk-frs-calibration-attempt-20261115T104657Z-fcfac709",
  },
  // Code
  bikVariable: {
    label: "policyengine-uk: benefits_in_kind.py",
    href: `${uk}/variables/gov/hmrc/income_tax/benefits_in_kind/benefits_in_kind.py`,
  },
  carBenefit: {
    label: "policyengine-uk: company_car_benefit.py",
    href: `${uk}/variables/gov/hmrc/income_tax/benefits_in_kind/company_car_benefit.py`,
  },
  fuelBenefit: {
    label: "policyengine-uk: car_fuel_benefit.py",
    href: `${uk}/variables/gov/hmrc/income_tax/benefits_in_kind/car_fuel_benefit.py`,
  },
  class1a: {
    label: "policyengine-uk: ni_class_1a.py",
    href: `${uk}/variables/gov/hmrc/national_insurance/class_1a/ni_class_1a.py`,
  },
  salarySacrificeCap: {
    label: "policyengine-uk: salary_sacrifice_pension_cap.yaml",
    href: `${uk}/parameters/gov/hmrc/national_insurance/salary_sacrifice_pension_cap.yaml`,
  },
  carRise2030: {
    label: "policyengine-uk: scenarios/company_car_tax_rise_2030.py",
    href: `${uk}/scenarios/company_car_tax_rise_2030.py`,
  },
  companyCarsStage: {
    label: "microcosm: uk_runtime/company_cars.py",
    href: `${microcosm}/uk_runtime/company_cars.py`,
  },
  sourceStages: {
    label: "microcosm: uk/source_stages.json",
    href: `${microcosm}/uk/source_stages.json`,
  },
  targets: {
    label: "microcosm: uk/uk_population_targets.json",
    href: `${microcosm}/uk/uk_population_targets.json`,
  },
  bikFacts: {
    label: "microcosm: uk/hmrc_benefits_in_kind_facts.json",
    href: `${microcosm}/uk/hmrc_benefits_in_kind_facts.json`,
  },
  salarySacrificeStage: {
    label: "microcosm: uk_runtime/salary_sacrifice.py",
    href: `${microcosm}/uk_runtime/salary_sacrifice.py`,
  },
  salarySacrificeHaircut: {
    label: "policyengine-uk: salary_sacrifice_broad_base_haircut_rate.yaml",
    href: `${uk}/parameters/gov/contrib/behavioral_responses/salary_sacrifice_broad_base_haircut_rate.yaml`,
  },
} satisfies Record<string, Source>;

// ---------------------------------------------------------------------------
// Part 1: benefits in kind in the UK

// sources.employerRates; sources.budget2026Rates (Annex A, company car tax).
export const rules2026 = {
  class1aRate: "15%",
  evRate: "4%",
  maxRate: "37%",
};

// sources.bikStats: Table 5 (all Class 1A benefits; experimental) and Table 1
// (company cars), tax year 2024-25, provisional. Table 2B/2D for the electric
// share. HMRC says the 920,000 "may be an underestimate", because some
// payrolled cars are not reported (commentary, section 8).
export const size = {
  year: "2024-25",
  allTaxableValueBn: "£9.5bn", // Table 5: £9,500m
  class1aLiabilityBn: "£1.31bn", // Table 5: £1,310m
  carRecipientsThousands: 920, // Table 1: 920,000
  carTaxableValueBn: "£3.07bn", // Table 1: £3,070m
  electricShare: 51, // Table 2B/2D, per cent of car benefit recipients
};

// Plain-words definitions on the size slide. Class 1A rate: 15% in 2025-26
// and 2026-27 (sources.employerRates); it was 13.8% in 2024-25, which is why
// £1.31bn is 13.8% of £9.5bn. Taxable value ("cash equivalent"): a statutory
// formula for cars, fuel, vans, loans and accommodation; for most other
// benefits it is the cost to the employer (HMRC booklet 480).
export const definitions = [
  {
    title: "Benefit in kind",
    text: "A non-cash benefit from an employer, taxed as income",
  },
  {
    title: "Taxable value",
    text: "The amount HMRC taxes: a formula for cars, usually the employer's cost for others",
  },
  {
    title: "Class 1A",
    text: "Employer National Insurance contributions (NICs) on benefits: 13.8% in 2024-25, 15% since April 2025",
  },
];

// sources.bikByType: Table 4.5 and the June 2019 commentary, tax year
// 2016-17, the last year with final figures for every benefit type (2017-18
// was provisional in that release; the tables since 2020 cover company cars
// and fuel only, plus the Class 1A total). P11D-only, before most
// payrolling. The commentary gives the first three shares of the £8.25bn
// total itself (55%, 23%, 8%); the others are the type's taxable value
// (£200m, £180m, £100m) over that total.
export const byType2016 = {
  year: "2016-17",
  rows: [
    { label: "Company car", share: 55 },
    { label: "Medical and dental insurance", share: 23 },
    { label: "Car fuel", share: 8 },
    { label: "Van", share: 2 },
    { label: "Beneficial loans", share: 2 },
    { label: "Accommodation", share: 1 },
  ],
};

// What is legislated or announced, by tax year. Zero-emission company car
// rates: sources.budget2026Rates. Car fuel multiplier for 2026-27:
// sources.fuelOrder, art. 2(2). Payrolling dates: sources.payrolling.
// Salary-sacrifice cap: sources.budget2025Costings (p.47), legislated by
// sources.pensionsNicsAct2026. Employee car and van ownership schemes:
// sources.financeAct2026s17, for 2030-31 on. Yields are Exchequer
// figures from sources.budget2026 (Table 6.1 row 86) and
// sources.budget2026Recostings (Table 6.4 rows 14 and 15).
export const timeline: {
  year: string;
  evRate: number;
  /** Announced, not yet legislated (Budget 2026 overview, para 1.25). */
  rateAnnounced?: boolean;
  events: { title: string; text?: string; announced?: boolean }[];
  yield?: string;
}[] = [
  {
    year: "2026-27",
    evRate: 4,
    events: [{ title: "Fuel and van charges uprated", text: "Car fuel multiplier £29,200" }],
  },
  {
    year: "2027-28",
    evRate: 5,
    events: [
      {
        title: "Payrolling required",
        text: "Taxed through payroll, not a P11D: cars, vans, fuel, medical",
        announced: true,
      },
    ],
  },
  {
    year: "2028-29",
    evRate: 7,
    events: [{ title: "Payrolling: most other benefits", announced: true }],
    yield: "Rates to 2029-30: +£700m",
  },
  {
    year: "2029-30",
    evRate: 9,
    events: [{ title: "Pension salary sacrifice", text: "NICs relief only on the first £2,000 a year" }],
    // U+2060 keeps the sign with its figure when the chip wraps.
    yield: "Cap: +£5,350m, then +\u2060£2,920m",
  },
  {
    year: "2030-31",
    evRate: 10,
    rateAnnounced: true,
    events: [{ title: "Car ownership schemes taxed", text: "From April 2030" }],
    yield: "2030-31 rise: +£310m",
  },
];

// ---------------------------------------------------------------------------
// Part 2: what PolicyEngine covers

export type Status = "done" | "partly" | "notYet";

// How the model works, with the company car carried through each stage.
// A stage is "done" only if it is in released code and in use:
// - Survey: microcosm @ bcb5cba (main), uk_runtime/frs_spine.py reads the FRS
//   job-table items EXPBEN01, EXPBEN03, CARVAL, FUELTYP, CARCON, CARAMT.
// - Imputation: sources.companyCarsStage (`company_cars`, the 19th of the 56
//   entries in the `stages` list of sources.sourceStages, counted from 1). List price is drawn within the FRS band from
//   Wealth and Assets Survey round 8 prices; CO2 from HMRC Table 2A shares.
//   Availability, private-use payments and electric range are left at
//   defaults ("no survey records them"), hence "partly".
// - Calibration: sources.dashboard, the certified build of 15 November 2026
//   (1,534 targets): the five hmrc.benefits_in_kind targets are "included"
//   and fitted within 1% (recipients 915,708 against 920,000; taxable value
//   £3,068.6m against £3,070m; electric 465,215 against 465,000; petrol
//   390,819 against 390,000; diesel 59,674 against 60,000).
// - Rules: policyengine-uk @ 98381bf (2.179.2), sources.carBenefit,
//   sources.fuelBenefit, sources.class1a; 53 YAML test cases
//   (company_car_benefit.yaml 24, car_fuel_benefit.yaml 10,
//   benefits_in_kind_interactions.yaml 11, ni_class_1a.yaml 8); CI on main
//   passed at that commit. company_car_benefit.py says optional remuneration
//   arrangements (ITEPA s. 120A) are not modelled, hence "partly".
// 13 benefits: sources.frs, question ExpBen, codes 1 to 13.
export const pipeline: {
  title: string;
  text: string;
  car: string;
  status: Status;
  missing?: string;
  fact: { value: number; label: string };
}[] = [
  {
    title: "Survey",
    text: "Family Resources Survey (FRS) 2024-25 households",
    car: "Who has a car, fuel, list-price band, fuel type",
    status: "done",
    fact: { value: 13, label: "Employer benefits and expenses the FRS asks about" },
  },
  {
    title: "Imputation",
    text: "Incomes from the Survey of Personal Incomes (SPI); wealth; spending",
    car: "List price from the Wealth and Assets Survey; CO2 from HMRC shares",
    status: "partly",
    missing: "Defaults for part-year use and employee payments",
    fact: { value: 56, label: "Build stages in the household file" },
  },
  {
    title: "Calibration",
    text: "Household weights fitted to official totals",
    car: "5 HMRC targets, each within 1% in the 15 November build",
    status: "done",
    fact: { value: 1534, label: "Targets in the 15 November build" },
  },
  {
    title: "Rules",
    text: "Tax and benefit law, as code",
    car: "Car benefit, fuel benefit, Class 1A",
    status: "partly",
    missing: "No salary-sacrifice (OpRA) rule for cars",
    fact: { value: 53, label: "Test cases on these rules" },
  },
];

// Rules: policyengine-uk @ 98381bf (benefits_in_kind.py covers "the company
// car and car fuel benefits ... Other benefits in kind and vans are not
// modelled"). Data: microcosm @ bcb5cba. Targets: sources.dashboard (the
// certified build of 15 November 2026: five company-car and seven
// salary-sacrifice targets included, each within 1%). FRS flags:
// sources.frs (question ExpBen). Pension salary sacrifice: sources.
// salarySacrificeCap, sources.salarySacrificeStage. Car fuel: no part-year
// fuel in sources.fuelBenefit, and it reads the same imputed CO2 and default
// availability as the car. Loans and accommodation: sources.frs asks AccJob
// (p. 52), whether the landlord employs someone in the household (p. 49),
// and about loans from an employer (OthDed p. 208, DLOANTY p. 359), but not
// their value.
export const coverage: {
  benefit: string;
  detail?: string;
  rules: Status;
  data: Status;
  target: Status;
  note: string;
}[] = [
  {
    benefit: "Company car",
    rules: "partly",
    data: "partly",
    target: "done",
    note: "No OpRA, shared or pool cars; some inputs at defaults",
  },
  {
    benefit: "Car fuel",
    rules: "partly",
    data: "partly",
    target: "notYet",
    note: "No part-year fuel; CO2 and availability as for cars",
  },
  {
    benefit: "Class 1A",
    detail: "Employer NICs on benefits",
    rules: "partly",
    data: "partly",
    target: "notYet",
    note: "On cars and fuel only",
  },
  {
    benefit: "Pension salary sacrifice",
    rules: "done",
    data: "done",
    target: "done",
    note: "£2,000 NICs cap from April 2029",
  },
  {
    benefit: "Medical insurance",
    rules: "notYet",
    data: "notYet",
    target: "notYet",
    note: "FRS asks who, not how much",
  },
  {
    benefit: "Vans and van fuel",
    rules: "notYet",
    data: "notYet",
    target: "notYet",
    note: "Flat charge in law; FRS asks who",
  },
  {
    benefit: "Loans and accommodation",
    rules: "notYet",
    data: "notYet",
    target: "notYet",
    note: "FRS asks who, not the value",
  },
  {
    benefit: "Other salary sacrifice",
    detail: "Cars, cycle to work, childcare; OpRA",
    rules: "notYet",
    data: "notYet",
    target: "notYet",
    note: "FRS: amounts for pensions and vouchers only",
  },
];

// ---------------------------------------------------------------------------
// Part 3: scoping

export type Use = "Base" | "Impute" | "Calibrate" | "Validate" | "Possible";

// One row per source; the "use" column is our assessment.
export const dataSources: {
  source: string;
  measures: string;
  level: string;
  latest: string;
  uses: Use[];
}[] = [
  {
    source: "Family Resources Survey (FRS)",
    measures: "Who gets 13 employer benefits and expenses; car price band, fuel type",
    level: "People",
    latest: "2024-25",
    uses: ["Base"],
  },
  {
    source: "Survey of Personal Incomes (SPI)",
    measures: "Expenses and benefits, one combined amount",
    level: "People",
    latest: "2023-24",
    uses: ["Impute"],
  },
  {
    source: "Annual Survey of Hours and Earnings (ASHE)",
    measures: "Value of all benefits in kind per job; pension salary sacrifice",
    level: "Jobs",
    latest: "2026, provisional",
    uses: ["Possible"],
  },
  {
    source: "HMRC benefits in kind statistics",
    measures: "Cars and fuel: by CO2, fuel, income, region; Class 1A total",
    level: "Totals",
    latest: "2024-25, provisional",
    uses: ["Calibrate", "Validate"],
  },
  {
    source: "HMRC benefits by type",
    measures: "Medical, vans, loans, accommodation",
    level: "Totals",
    latest: "2016-17, last final",
    uses: ["Validate"],
  },
  {
    source: "HMRC tax relief statistics",
    measures: "Cycle to work, employer childcare, pension NICs relief",
    level: "Totals",
    latest: "2025-26, forecast",
    uses: ["Calibrate"],
  },
  {
    source: "Budget and OBR costings",
    measures: "Yield of car-rate and salary-sacrifice measures",
    level: "Totals",
    latest: "To 2031-32",
    uses: ["Validate"],
  },
];

export const gaps = [
  {
    title: "Rules",
    items: [
      "Medical insurance, vans, loans, accommodation",
      "OpRA: the higher of salary given up and taxable value",
      "Class 1A on every benefit",
    ],
  },
  {
    title: "Data",
    items: [
      "No values for medical insurance, loans or accommodation in the FRS",
      "SPI: benefits and expenses in one amount",
      "No car CO2 or part-year use in the FRS",
    ],
  },
  {
    title: "Calibration",
    items: [
      "No final HMRC totals for other benefit types since 2016-17",
      "Car fuel and Class 1A not yet targets",
      "Cars by income band not yet targets",
    ],
  },
  {
    title: "Validation",
    items: [
      "Company cars against HMRC by income and region",
      "Compare a static car score with the official costing",
      "Compare the pension cap score with the official costing",
    ],
  },
  {
    title: "Behaviour",
    items: [
      "Pension cap, 2030-31: £5,070m static, £2,585m after responses (Budget 2025)",
      "Employers passing costs on to pay: modelled for the pension cap only",
      "Car choice after rate rises",
    ],
  },
];

// Effort is relative, in words: nothing here has been estimated in weeks.
// Behaviour: sources.budget2025Costings (pp. 47-48) gives the pension cap
// £5,070m static and £2,585m after responses in 2030-31;
// sources.obrSalarySacrifice (Table 1.6) splits the responses;
// sources.budget2026Costings (p. 95) nets off a switch to cheaper company
// cars. policyengine-uk cuts all employment income by 0.16% whenever the cap
// applies (sources.salarySacrificeHaircut), so its cap run is not static.
export const phases = [
  {
    title: "Cars, fuel and vans",
    effort: "Smallest",
    effortNote: "Car rules and data exist",
    work: ["Validate cars against HMRC by income", "Target fuel and Class 1A; add the van charge"],
    output: "Electric car rate reforms: revenue and who pays",
  },
  {
    title: "Other benefits",
    effort: "Largest",
    effortNote: "New rules, thin data",
    work: ["Medical insurance, loans, accommodation", "Impute values; Class 1A on every benefit"],
    output: "Reforms to medical insurance, loans or accommodation, or to Class 1A (revenue only)",
  },
  {
    title: "Salary sacrifice and OpRA",
    effort: "Medium",
    effortNote: "Only pensions done",
    work: ["Salary-sacrifice cars, cycle to work, childcare", "The OpRA rule"],
    output: "Caps and exemptions, across schemes",
  },
];

export const exampleQuestions = [
  {
    question: "Who pays if electric company car rates rise faster?",
    scenario: "Zero-emission rate above the 10% announced for 2030-31",
    needs: "Phase 1",
  },
  {
    question: "What does capping pension salary sacrifice raise, and from whom?",
    scenario: "NICs relief only on the first £2,000 a year, against no cap",
    needs: "Runs today",
  },
  {
    question: "What would changing the tax on employer medical insurance do?",
    scenario: "Exempt it, or charge Class 1A at another rate. Class 1A results are revenue only",
    needs: "Phase 2",
  },
];
