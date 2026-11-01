# Evidence ledger for the APPAM 2026 deck

Each claim on a slide traces to a computed result, to code read at a named commit, or to a public source read while building this deck.

- **PolicyEngine US:** version 2.90.2, commit `469ad12cb957a1b3eaedf9e6dd3e4c69194bba26` (main, November 1, 2026).
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
| 5 | In 46 of 51 states, the largest drop comes from losing the subsidy | `cliff_ranking`: TANF drives Massachusetts and New Hampshire, and WIC drives Maine, New Mexico and Vermont |
| 5 | Median state's total effective marginal tax rate: 63.6% at $30,000, 24.6% at $60,000 | `data/charts.json`, `emtr`: one minus the change in net resources over a $500 raise |
| 7 | SNAP eligibility 17.5% in Arkansas and Tennessee to 38.3% in Maryland, among SPM units with children; child Medicaid or CHIP 39.8% in Idaho to 66.1% in Hawaii | `analysis/sample_families.py` → `analysis/simulated_instrument.py` → `data/simulated_instrument.json` |
| 8 | State cost, 29.8% of households gain, none lose, $167 million off the SPM poverty gap | `analysis/massachusetts_reform.py` → `data/massachusetts_reform.json`: `state_cost` holds the fall in `state_income_tax`, and `household_gain` holds the change in `household_net_income` |
| 8 | 1,522 Massachusetts households, effective sample of about 255, no record crosses the threshold | `data/massachusetts_reform.json`: `household_records`, `effective_households` (Kish), `people_crossing_threshold` |
| 10 | Effective sample in the median state; child poverty rates exceed Census's in 40 of 51 jurisdictions and differ by 4.8 points on average | `analysis/state_baseline.py` → `data/state_baseline.json`, compared with `data/census_child_spm.json` |
| 11 | $666.666 deduction on time, $0 late, refusal for November 2019 | `analysis/axiom_ga_3612.py` → `data/axiom_ga_3612.json`, a real engine run |

Slide 7's loop ran from a CSV of the fixed sample, with county and finer geography dropped and a `STATE_FIPS` dictionary defined above it, and reproduced Arkansas and Maryland to every digit. Slide 8's reform dictionary ran on the Massachusetts records, and `analysis/massachusetts_reform.py` runs on those records alone. A national run of the same reform returned the same household gain, gaining share and poverty rates (`data/massachusetts_national_check.json`).

## The fixed sample

`analysis/sample_families.py` makes 3,000 draws from the Populace US households with children, with replacement and in proportion to household weight. A household drawn twice enters the file twice with fresh ids, so each entry counts once, and the draws reach 2,075 distinct households. The script reads the pinned file's tables and keeps input variables only. On the same households, that route matches `to_input_dataframe` to every digit on child Medicaid or CHIP eligibility, state income tax, state refundable credits and earnings in Tennessee, Oregon and Hawaii. `analysis/simulated_instrument.py` drops county and finer geography, sets one state on the whole file and reruns it. Each run records the state the model read, and mean employment income stays the same in all 51 runs. `content.test.ts` checks both.

## Massachusetts poverty

- No record crosses the threshold under the reform, so the rate does not change.
- The file's 1,522 Massachusetts household records carry an effective sample of about 255.
- The model's Massachusetts child rate comes to 20.2% for 2025 and 22.3% for 2026. Census reports 12.8%, with a margin of error of 2.0 points, for the 2023 to 2025 average (P60-290 Table 18, as used in `slideshows/cpid-webinar-2026`).
- The national comparison on the webinar deck's `BaselineVsCensusSlide` runs 16.6% in the model against 13.4% from Census, for children in 2025.

## State baselines

`analysis/state_baseline.py` cuts Populace US to one state at a time and runs 2025 child SPM poverty for all 51 jurisdictions.

- The model's rates exceed Census's 2023 to 2025 averages in 40 of 51 jurisdictions. They differ by 4.8 points on average and exceed Census's by 3.2 points on net. In 38 of 51 jurisdictions the difference exceeds Census's margin of error.
- Effective samples of households with children run from 33 in Maine to 390 in California, with a median of 75. Across all households they run from 99 in Maine to 965 in California, with a median of 185.

## The family

`analysis/household.py` defines the family.

- One parent, 30, with children aged 1 and 4. The parent works 40 hours for 52 weeks. Rent runs $1,200 a month and child care $1,500 a month.
- `analysis/largest_counties.py` picks each state's largest county from the 2017 to 2021 American Community Survey.
- `meets_ccdf_activity_test` starts true, because a parent in a regular job meets it and the input defaults to false.
- `wi_works_placement` starts as `NONE`, because the input defaults to a Community Service Job.
- $40,000 over 2,080 hours comes to $19.23 an hour. The highest basic state rate on the Department of Labor's table, updated July 1, 2026, belongs to DC at $18.40 (dol.gov/agencies/whd/minimum-wage/state). Local minimums can run higher, and the table leaves them out.
- The sweeps vary earnings and hold hours at 40 a week, so at $30,000 the family earns $14.42 an hour, less than DC's basic rate.

Net resources add market income, SNAP, WIC, TANF, the child care subsidy and other benefits, then subtract federal and state taxes net of credits and the child care bill.

`analysis/test_invariants.py` reconciles the total with `spm_unit_net_income` and with `household_net_income` over random states and earnings.

Any state comparison that uses these totals must account for four differences:

- `spm_unit_market_income` leaves out the Alaska Permanent Fund Dividend, which `household_market_income` includes.
- `spm_unit_benefits` leaves out New Jersey's ANCHOR payment, which `household_benefits` includes.
- `household_benefits` leaves out Alaska's energy relief payment, which `spm_unit_benefits` includes.
- `household_benefits` counts the child care subsidy in some states and not others. `spm_unit_benefits` counts it for Colorado, Washington and West Virginia alone.

Net resources count all four payments in every state.

## Why states land where they do

- **Ohio:** `oh_ccap_fpg` sets the initial limit at 145% of the guideline, and enrolled families stay eligible to 300%. The $40,000 new applicant falls between them.
- **Nevada:** the intake limit sits at 41% of state median income, about $34,674, and the renewal limit at 49%.
- **Oklahoma:** the model uses the default one-star rate, $555 a month.
- **South Dakota:** `sd_cca` starts in August 2026, so $7,500 equals five months at $1,500.
- **Provider tier:** every state's default sits at its base or lowest tier.
- **Alaska:** other payments total $3,600, from a $1,000 dividend per person and $200 of energy relief per person.

## Mechanisms

| Slide | Claim | Code at `469ad12` |
| --- | --- | --- |
| 2 | Program list, every state income tax, TANF and child care rules of all 51 jurisdictions | `STATE_TANF_VARIABLES` holds 51 entries; `child_care_subsidy_programs` holds 51 from 2025 |
| 4 | Congress lets SNAP households deduct what they pay for care | `snap_dependent_care_deduction`, citing 7 U.S.C. 2014(e)(3), reads post-subsidy `childcare_expenses` |
| 7 | The TAXSIM-compatible interface runs 2021 onward through PolicyEngine and earlier years through TAXSIM35 | `StitchedRunner.PE_MIN_YEAR = 2021` in `policyengine_taxsim/runners/stitched_runner.py` |
| 9 | Project through 2035 | The PolicyEngine API's US metadata lists years 2022 to 2035 |
| 6 | Massachusetts credit values, dates and citations | `parameters/gov/states/ma/tax/income/credits/child_and_family/amount.yaml` and `dependent_cap.yaml` |
| 10 | 46 jurisdictions through 2023, 48 in 2024, 50 in 2025, 51 from August 2026 | `gov.hhs.ccdf.child_care_subsidy_programs` lists 51 from 2025, missing DC, NC, OR, TN and TX through 2023, and DC, TN and TX in 2024. `sd_cca` returns zero until `uses_weekly_rates` turns on in August 2026 |
| 10 | Copy back to 2015 | `backdate_parameters(first_instant="2015-01-01")` in `system.py`, `FIRST_MODELED_YEAR = 2015` in `tools/parameters.py` |
| 10 | Wisconsin's schedules | Shares dates start 2025-10-01, and the model returns subsidies of $14,717 in 2021 and $15,483 in 2023 |
| 10 | Earnings enter as inputs | The minimum wage appears only in eligibility tests; `pfml_benefits` holds benefits received |
| 10 | Labor supply | Elasticities default to zero |
| 10 | Medicaid limits | `is_medically_needy_for_medicaid` documentation |
| 10 | Take-up | `takes_up_snap_if_eligible` defaults to true, and Populace US carries `takes_up_*` flags |

## The other tools

Slide 9 uses each tool's description from the session abstract, which covers the Policy Tracking System, the Policy Impact Calculator, the State Safety Net Interactive, the Welfare Rules Database, the CCDF Policies Database, and State of the Safety Net with ATTIS.

## Axiom

- The rule file sits at `us-ga/policies/dfcs/snap/3612.yaml` in `TheAxiomFoundation/rulespec-us`, published under CC BY 4.0.
- `axiom-rules-engine` carries an MIT license.
- Georgia's public manual at pamms.dhs.ga.gov/dfcs/snap/3612 confirms the rule text and the December 2019 effective date.
- The deck makes no claim about how much of any program Axiom covers.
