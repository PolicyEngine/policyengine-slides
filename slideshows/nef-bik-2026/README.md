# Modelling benefits in kind in PolicyEngine UK: scoping with NEF

16 slides at `/slides/nef-bik-2026`, for a scoping meeting with the New
Economics Foundation (NEF) on modelling employer-provided benefits in kind
(BIK) in PolicyEngine's UK microsimulation. The deck is public. PolicyEngine
and NEF have agreed nothing yet: the deck sets out what the model covers today, the data
available, and options. The meeting is on 19 November 2026 (`config.ts`,
its footer and `cover.date` in `content.ts`). The cover names Vahid
Ahmadi and Max Ghenis; remove Max in `slides/index.tsx` (`TitleSlide`) if he
isn't presenting.

Three parts, after a title and an agenda. Each part opens with a section
slide, and every slide's header carries a tracker of the three parts:

1. Benefits in kind in the UK (slides 3–6): what a benefit in kind is and how
   it is taxed; its size; the rule changes to 2030-31
2. What PolicyEngine covers (slides 7–9): how the model works, with company
   cars carried through each stage and a status on each; the coverage map
3. Scoping the project (slides 10–15): the data sources, the gap in five
   layers, three phases, example questions, questions for NEF

## Editing and presenting

- `config.ts` controls the slide order, the build steps and meeting metadata.
  Seven slides reveal step by step when presenting (`builds`; the two tables appear whole); a PDF export
  shows each slide once, complete (`exportBuilds: 1`). The viewer's counter
  shows the slide, not the step (`countSlides: true`), and the controls hint
  is hidden (`hideNavHint: true`); both are opt-ins in `lib/types.ts`.
- `content.ts` holds every number on the slides, each pinned to its source:
  a URL for web sources, most with a publication date; a repo, commit and
  path for code; and a release name for the calibration dashboard, which has
  no link. The comments say which table or file each figure is from.
- `slides/index.tsx` contains the slides and the deck's components (one list,
  one card, one table, one chip style; every item takes a Tabler icon). The
  `agenda` list there drives the agenda slide, the section slides and the
  header tracker. Status chips (Done, Partly done, Not yet) are one component,
  `StatusChip`, with its key (`StatusLegend`) inside the figure.
- `slides/CountUp.tsx` counts a number up when it appears. The number is
  always in the page as text, so it shows at rest and in an export.
- `slides/BuildScope.tsx` and `slides/deck.module.css` are copied from the
  NEF macro deck (`slideshows/nef-2026`, PR #118), with this deck's styles
  added at the end of the stylesheet.
- `SPEAKER-NOTES.md` has the detail behind each slide, what each status rests
  on, and what could not be sourced.

## What a status means

"Done" means the piece is in released code and in use: for calibration, the
targets are included in the certified Microcosm UK build of 15 November 2026;
for rules, the code is on `main` of policyengine-uk with tests. "Partly done"
names what is missing beside the chip. The speaker notes list the file and
commit behind each one.

## Sources

Read on 18 November 2026.

Code:

- PolicyEngine/policyengine-uk at `98381bf` (2.179.2): company car, car fuel
  and Class 1A rules under
  `policyengine_uk/variables/gov/hmrc/income_tax/benefits_in_kind/` and
  `.../national_insurance/class_1a/`; parameters under
  `policyengine_uk/parameters/gov/hmrc/income_tax/benefits_in_kind/`; the
  salary-sacrifice cap at
  `parameters/gov/hmrc/national_insurance/salary_sacrifice_pension_cap.yaml`;
  the pay cut that applies with it at
  `parameters/gov/contrib/behavioral_responses/salary_sacrifice_broad_base_haircut_rate.yaml`
- PolicyEngine/microcosm at `bcb5cba`:
  `packages/microcosm-build/src/microcosm/build/uk_runtime/company_cars.py`,
  `uk_runtime/salary_sacrifice.py`, `uk/source_stages.json`,
  `uk/uk_population_targets.json`, `uk/hmrc_benefits_in_kind_facts.json`
- PolicyEngine's calibration dashboard, release
  `microcosm-uk-2024-25-national/uk-frs-calibration-attempt-20261115T104657Z-fcfac709`
  (the national build of 15 November 2026), read through its data API

Statistics and guidance:

- HMRC, Benefits in kind statistics: July 2026 (15 July 2026):
  https://www.gov.uk/government/statistics/benefits-in-kind-statistics-july-2026
- HMRC, taxable benefits in kind by type, Table 4.5, 2016-17 (27 June 2019):
  https://www.gov.uk/government/statistics/number-of-recipients-and-amounts-of-taxable-benefits-by-type-of-benefit
- HMRC, Benefits in kind statistics: June 2019, commentary (27 June 2019):
  https://assets.publishing.service.gov.uk/media/5d148708e5274a0694afe666/Taxable_Benefits_in_Kind_National_Statistics_Commentary_2019.pdf
- HMRC tax relief statistics, January 2026 (22 January 2026):
  https://www.gov.uk/government/statistics/tax-reliefs
- The Van Benefit and Car and Van Fuel Benefit Order 2025 (SI 2025/1254):
  https://www.legislation.gov.uk/uksi/2025/1254/made
- Rates and thresholds for employers 2026 to 2027 (updated 1 September 2026):
  https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027
- HMRC booklet 480, Appendix 12, optional remuneration arrangements:
  https://www.gov.uk/guidance/optional-remuneration-arrangements-480-appendix-12
- Mandatory reporting of benefits in kind in real time from April 2027
  (13 July 2026, updated 28 October 2026):
  https://www.gov.uk/government/publications/changes-to-reporting-of-benefits-in-kind-from-april-2027/mandatory-reporting-of-benefits-in-kind-in-real-time-information-rti-from-april-2027
- Budget 2026 (28 October 2026): overview of tax legislation and rates, Annex A
  https://www.gov.uk/government/publications/budget-2026-overview-of-tax-legislation-and-rates-ootlar/annex-a-rates-and-allowances ;
  Table 6.1 https://www.gov.uk/government/publications/budget-2026-document/budget-2026-html ;
  Table 6.4 https://assets.publishing.service.gov.uk/media/6ae0f93fe4367e5c8b0467d6/Table_6.4_Recostings_Table.xlsx
- Budget 2026 policy costings (28 October 2026), p. 95:
  https://assets.publishing.service.gov.uk/media/6ae1883fe4367e5c8b0467df/AB26_Policy_Costing.pdf
- Budget 2025 policy costings (26 November 2025):
  https://assets.publishing.service.gov.uk/media/692872fd2a37784b16ecf676/Budget_2025-Policy_Costings.pdf
- Finance Act 2026, s. 17 (employee car and van ownership schemes):
  https://www.legislation.gov.uk/ukpga/2026/11/section/17
- National Insurance Contributions (Employer Pensions Contributions) Act 2026, s. 1:
  https://www.legislation.gov.uk/ukpga/2026/15/section/1
- OBR, supplementary forecast information: salary sacrifice costing
  (5 February 2026):
  https://obr.uk/docs/dlm_uploads/Supplementary-forecast-information-salary-sacrifice-costing-1.pdf
- Family Resources Survey 2024-25, question instructions (UKDS SN 9563):
  https://doc.ukdataservice.ac.uk/doc/9563/mrdoc/pdf/9563_frs_2024-25_question_instructions_final.pdf
- Survey of Personal Incomes, Public Use Tape: 2022-23 documentation (SN 9422)
  https://doc.ukdataservice.ac.uk/doc/9422/mrdoc/pdf/9422_put_2223_full_documentation.pdf ;
  2023-24 (SN 9638, 5 November 2026)
  https://datacatalogue.ukdataservice.ac.uk/studies/study/9638
- ONS, Employee earnings in the UK: 2026 (ASHE; 22 October 2026):
  https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours/bulletins/annualsurveyofhoursandearnings/2026 ;
  ASHE questionnaire guidance (revised 12 April 2023):
  https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours/methodologies/annualsurveyofhoursandearningsquestionnaireguidance
