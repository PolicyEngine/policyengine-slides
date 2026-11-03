# Evidence ledger for the APPAM 2026 deck

Each claim on a slide traces to a computed result, to code at a named commit, or to a public source.

- **PolicyEngine US:** version 2.90.2, commit `469ad12cb957a1b3eaedf9e6dd3e4c69194bba26` (main, November 1, 2026).
- **policyengine-taxsim:** commit `9c987d8f23955dd1564af43dee3fac4054c0dbf2`.
- **child-poverty-impact-dashboard:** commit `977661f20bfecc75d0f5f8f75b1041684c9fa106`.
- **Axiom Rules Engine:** version 0.2.2, commit `e0bda6475f30ac487b7be544f5b9742c716e4bba`.
- **rulespec-us:** commit `66d891b9df601c35c2edbf7e669529a649141d31`.

## Computed results

| Slide | Claim | Source |
| --- | --- | --- |
| 3 | $27,711 in Ohio, $54,345 in Alaska, median Delaware $46,920 | `analysis/compute_family.py` → `data/family.json` → `analysis/summarize.py` → `data/charts.json` |
| 3 | Gap of $16,404 at $30,000 and $21,670 at $60,000 | `data/charts.json`, `spreads` |
| 4 | Each state's value on four lines | `data/charts.json`, `lines_by_program` |
| 4 | Texas: $15,791 subsidy, −$5,598 SNAP, +$10,193 net resources | `analysis/interaction.py` → `data/interaction.json` |
| 5 | Maryland −$15,343 at $97,500, Iowa −$14,967 at $44,000, Idaho −$14,511 at $48,000, the three largest drops of the 51 | `data/charts.json`, `cliff_ranking`, which records each line's change in every state |
| 5 | In 46 of 51 jurisdictions, the largest drop comes from losing the subsidy | `cliff_ranking`. The family loses TANF at the largest drop in Massachusetts and New Hampshire, and WIC in Maine, New Mexico and Vermont. |
| 5 | Median total effective marginal tax rate on a $500 raise, across 51 jurisdictions: 63.6% at $30,000, 24.6% at $60,000 | `data/charts.json`, `emtr`: one minus the change in net resources over a $500 raise |
| 7 | SNAP eligibility 17.5% in Arkansas and Tennessee to 38.3% in Maryland, among SPM units with children; child Medicaid or CHIP 39.8% in Idaho to 66.1% in Hawaii | `analysis/sample_families.py` → `analysis/simulated_instrument.py` → `data/simulated_instrument.json` |
| 8 | State cost, 29.4% of households would gain, none would lose, $169 million off the SPM poverty gap | `analysis/massachusetts_reform.py` → `data/massachusetts_reform.json`: `state_cost` holds the fall in `state_income_tax`, and `household_gain` holds the change in `household_net_income` |
| 8 | 36,491 Massachusetts household records, an effective sample of about 301 households, or 132 among those with children, 2026 child poverty rate falls 0.2 points | `data/massachusetts_reform.json`: `household_records`, `effective_households` and `effective_households_with_children` (Kish, counting each source household once), `baseline_child_poverty`, `reformed_child_poverty` |
| 10 | Effective sample in the median state; child poverty estimates miss Census's by 3.2 points on average, and in 29 of 51 jurisdictions they fall outside Census's margin of error | `analysis/effective_samples.py` → `data/effective_samples.json`; `analysis/state_baseline.py` → `data/state_baseline.json`, compared with `data/census_child_spm.json` |
| 11 | $500.00 deduction on $2,500.00 of monthly earnings, refusal for November 2019 | `analysis/axiom_ga_3612.py` → `data/axiom_ga_3612.json`. At $30,000 a year, we estimate $6,363 of Georgia SNAP for slide 3's family (`data/family.json`) |

We dropped county and finer geography from the fixed-sample CSV and defined the `STATE_FIPS` dictionary before running slide 7's loop. The loop reproduced Arkansas and Maryland to every digit. We then ran slide 8's reform dictionary on the Massachusetts rows of Populace US's local-area file. It returned the state cost in `data/massachusetts_reform.json` (`analysis/check_slide_code.py` → `data/slide_code_check.json`). On Populace US's default file, a Massachusetts cut and a national run returned the same household gain, gaining share and poverty rates (`data/massachusetts_reform_default.json`, `data/massachusetts_national_check.json`).

## The fixed sample

`analysis/sample_families.py` makes 3,000 draws from the Populace US households with someone under 18, with replacement and in proportion to household weight. When the script draws a household twice, it writes two copies under fresh IDs, and each copy counts once. The sample includes 2,075 distinct households. Slide 7's Medicaid or CHIP share covers children under 19, so an 18-year-old counts only when the household also holds someone younger.

The script keeps input variables and IDs. It renames the stored Social Security amounts, `social_security_retirement`, `social_security_disability`, `social_security_survivors` and `social_security_dependents`, to the `_reported` inputs the model reads. It leaves out `has_marketplace_health_coverage`, `is_spm_independent_minor_role` and 181 names that PolicyEngine US 2.90.2 does not define. When we restored those two variables, the runs for Tennessee, Oregon and Hawaii returned the same SNAP and child Medicaid or CHIP shares to every digit (`analysis/audit_sample_columns.py` → `data/sample_columns.json`).

`analysis/simulated_instrument.py` drops county and finer geography, sets one state on the whole file and reruns it. Each run records the state the model read, and mean employment income stays the same in all 51 runs. `content.test.ts` checks both.

## Massachusetts poverty

- Under the doubled credit, we estimate that 101 person records cross the threshold. The 2026 child poverty rate falls 0.2 points, from 23.1% to 22.9%.
- That fall rests on 55 child records in 24 households. Clustering by source household, we estimate standard errors of 0.05 points on the fall, 4.6 points on the 2026 rate, $42 million on the fall in the poverty gap and $64 million on the state cost (`analysis/massachusetts_precision.py` → `data/massachusetts_precision.json`). We treat the calibrated weights as known and don't capture errors that every record shares, such as a data-wide error in rent.
- The file's 36,491 Massachusetts household records come from 36,197 source households. They hold an effective sample of about 301 households, or 132 among those with children.
- We estimate a Massachusetts child poverty rate of 21.4% for 2025 and 23.1% for 2026. Census reports 12.8%, with a margin of error of 2.0 points, for the 2023 to 2025 average (P60-290 Table 18, as used in `slideshows/cpid-webinar-2026`). That difference ranks third in size among the 51 jurisdictions, after Delaware and Louisiana.
- On the default file, we estimate that Massachusetts would forgo $555 million and 29.8% of households would gain. The poverty gap would shrink by $167 million (`data/massachusetts_reform_default.json`).
- On the same records at policyengine-us 2.2.1, the version `policyengine.py` 6.12.0 pins, we estimate that Massachusetts would forgo $657 million and 34.1% of households would gain. The child poverty rate would fall 0.5 points, from 22.2% to 21.7% (`data/massachusetts_reform_221.json`). We changed how the model computes the credit between those versions. On a joint return, 2.2.1 counts a filer with a disability as a qualifying individual, and 2.90.2 counts a filer incapable of self-care. 2.90.2 also counts a dependent incapable of self-care at any age. We did not separate how much of the difference those changes explain.
- On policyengine-us 2.2.1 and the Microcosm 2024 population, we estimate that 16.6% of children nationally lived below the threshold in 2025, and Census reports 13.4% (`BaselineVsCensusSlide` in `slideshows/cpid-webinar-2026`).

## State baselines

`analysis/state_baseline.py` computes 2025 child SPM poverty rates for all 51 jurisdictions, one state at a time, on Populace US's local-area file at revision `populace-us-2024-buildo-acs-local-766b7c7-20261017T030317Z`. `policyengine.py` 6.12.0 selects that file for state regions (`region_datasets` in `src/policyengine/data/bundle/manifest.json`, and `docs/regions.md`), and the file here matches the manifest's SHA-256.

- Our rates differ from Census's 2023 to 2025 averages by 3.2 points on average and exceed Census's by 0.9 points on net. They exceed Census's in 30 of 51 jurisdictions. In 29 of 51 jurisdictions the difference exceeds Census's margin of error.
- Effective samples of households with children run from 53 in Maine to 407 in California, with a median of 108. Across all households they run from 157 in Kentucky to 905 in California, with a median of 237 (`data/effective_samples.json`).
- `policyengine.py` leaves ACS group quarters out of SPM measures, and we keep them. Leaving them out moves no state's rate by more than 0.023 points (Connecticut) and moves Massachusetts's by 0.01 (`child_spm_percent_without_group_quarters` in `data/state_baseline.json`).
- On the same file and model version, our rates match `acs_local` in PolicyEngine/microcosm#1445 at 247f1a88 (`docs/evidence/us-state-child-spm-2026-11/outputs/acs_eval.csv`) to within 0.000001 points in 48 of 51 jurisdictions (`data/microcosm_1445_rates.csv`). That run gives blank parent links the id −1, and ours gives them 0, the model's value for an unknown parent. California moves by 0.56 points, Delaware by 0.006 and Missouri by 0.00001.
- On the default file, our rates differ from Census's by 4.8 points on average. They exceed Census's in 40 of 51 jurisdictions and fall outside its margin in 38 (`data/state_baseline_default.json`). The median effective sample includes 63 households with children (`data/effective_samples.json`).

## Effective samples

Some CPS ASEC households appear twice in each Populace US file, as the ASEC record (support channel `asec`) and as a clone (`puf_tax_detail`) whose members have the same ages. We count each such household once. We add the clone's weight to its ASEC record's before computing Kish's effective sample size, and cluster standard errors by source household. `analysis/effective_samples.py` checks that every shared source covers one ASEC record and one clone with the same ages, and writes `data/effective_samples.json`. In the local-area file, ids on the `acs_2024_1yr` spine match ids on the `asec_puf` spine in 48 states, so we key each source by spine and id.

Counting both copies would put Massachusetts at about 395, or 173 among those with children, and the median state at 125 households with children (`effective_records` in `data/effective_samples.json`). In `data/state_baseline.json` and `data/state_baseline_default.json`, `effective_households` counts both copies too.

## The family

`analysis/household.py` defines the family.

- One parent, 30, with children aged 1 and 4. The parent works 40 hours for 52 weeks. Rent runs $1,200 a month and child care $1,500 a month.
- `analysis/largest_counties.py` picks each state's largest county from the 2017 to 2021 American Community Survey.
- We set `meets_ccdf_activity_test` to true, because a parent in a regular job meets it and the input defaults to false.
- We set `wi_works_placement` to `NONE`. Otherwise we place a family with no child under 1 and no third-trimester pregnancy in a Community Service Job.
- $40,000 over 2,080 hours comes to $19.23 an hour. On the Department of Labor's table, updated July 1, 2026, DC sets the highest basic rate, at $18.40 (dol.gov/agencies/whd/minimum-wage/state). The Department of Labor excludes local minimums, which can run higher.
- We vary earnings in the sweeps and hold hours at 40 a week. At $30,000, the family earns $14.42 an hour, less than the basic rate in 17 states and DC on that table.

We compute net resources as market income plus SNAP, WIC, TANF, the child care subsidy and other benefits. From that we subtract federal, state and local taxes net of credits, and the $18,000 child care bill. We count local taxes, state payroll taxes and paid leave contributions on the state line.

`analysis/test_invariants.py` reconciles the total with `spm_unit_net_income` and with `household_net_income` over random states and earnings.

When comparing states using these totals, account for four differences:

- `spm_unit_market_income` leaves out the Alaska Permanent Fund Dividend, which `household_market_income` includes.
- `spm_unit_benefits` leaves out New Jersey's ANCHOR payment, which `household_benefits` includes.
- `household_benefits` leaves out Alaska's energy relief payment, which `spm_unit_benefits` includes.
- `household_benefits` counts the child care subsidy in some states and not others. `spm_unit_benefits` counts it for Colorado, Washington and West Virginia alone.

We count all four payments in net resources in every state.

## Why states land where they do

- **Ohio:** Ohio sets the initial limit at 145% of the federal poverty guideline (`oh_ccap_fpg`), and enrolled families stay eligible to 300%. The $40,000 new applicant falls between them.
- **Nevada:** Nevada sets its intake limit at 41% of state median income, about $34,674, and its renewal limit at 49%.
- **Oklahoma:** at its default one-star center rates, Oklahoma pays $555 a month after the family's copay.
- **South Dakota:** we model `sd_cca` from August 2026, so $7,500 equals five months at $1,500.
- **Provider tier:** we leave each state at its default, its base or lowest tier.
- **Alaska:** Alaska pays each person a $1,000 dividend and $200 of energy relief, $3,600 for this family (`gov.states.ak.dor.permanent_fund_dividend` and `energy_relief`).

## Mechanisms

| Slide | Claim | Code at `469ad12` |
| --- | --- | --- |
| 2 | Program list, every state income tax, TANF and child care rules of all 51 jurisdictions | `STATE_TANF_VARIABLES` holds 51 entries; `child_care_subsidy_programs` holds 51 from 2025 |
| 4 | Congress lets SNAP households deduct their care costs | `snap_dependent_care_deduction`, citing 7 U.S.C. 2014(e)(3), reads post-subsidy `childcare_expenses` |
| 6 | Massachusetts credit values, dates and citations | `parameters/gov/states/ma/tax/income/credits/child_and_family/amount.yaml` and `dependent_cap.yaml` |
| 7 | Our TAXSIM-compatible interface runs 2021 onward through PolicyEngine and earlier years through TAXSIM35 | `StitchedRunner.PE_MIN_YEAR = 2021` in `policyengine_taxsim/runners/stitched_runner.py` at the policyengine-taxsim commit above |
| 8 | Child tax credit, EITC, SNAP and state tax credit reforms, state by state | `getReformOptionsForState` in `frontend/lib/state-programs.ts` at the dashboard commit above returns federal child tax credit and EITC options and SNAP options in all 51 jurisdictions, state EITC options in 43 (the 42 with an income tax, and Washington) and state child tax credit options in 17 for 2026 |
| 9 | Project through 2035 | The PolicyEngine API's US metadata lists years 2022 to 2035 |
| 10 | All 51 jurisdictions from August 2026 | `gov.hhs.ccdf.child_care_subsidy_programs` lists 51 from 2025. We model Illinois's program from July 2025, Florida's from October 2025, and Arkansas's and Ohio's from November 2025 (each program's `in_effect`), and South Dakota's from August 2026, when `uses_weekly_rates` turns on |
| 10 | Copy back to 2015 | `system.py` calls `backdate_parameters(self.parameters, first_instant=f"{FIRST_MODELED_YEAR}-01-01")`, and `tools/parameters.py` sets `FIRST_MODELED_YEAR = 2015`. Wisconsin Shares' rate parameters start on 2025-10-01, so we compute subsidies of $13,258 in 2021 and $14,024 in 2023 (`analysis/wisconsin_schedules.py` → `data/wisconsin_schedules.json`) |
| 10 | We take earnings and paid leave benefits as inputs | The minimum wage appears only in eligibility tests. `pfml_benefits` holds benefits received, and the model computes employee contributions through `employee_state_payroll_tax` |
| 10 | Labor supply | Elasticities default to zero |
| 10 | Medicaid limits | `is_medically_needy_for_medicaid` documentation |
| 10 | Take-up | All 18 `takes_up_*` variables default to true, and Populace US carries `takes_up_*` flags |

## The other tools

We use the session abstract's descriptions of the following tools:

- Policy Tracking System
- Policy Impact Calculator
- State Safety Net Interactive
- Welfare Rules Database
- CCDF Policies Database
- State of the Safety Net with ATTIS

## Axiom

- Axiom publishes `us-ga/policies/dfcs/snap/3612.yaml` in `TheAxiomFoundation/rulespec-us` under CC BY 4.0.
- Axiom publishes `axiom-rules-engine` under an MIT license.
- Georgia's Division of Family and Children Services publishes the rule text and December 2019 effective date in its public SNAP manual (pamms.dhs.ga.gov/dfcs/snap/3612).
