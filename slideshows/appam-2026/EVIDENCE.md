# Evidence ledger for the APPAM 2026 deck

Each claim on a slide traces to a computed result, to code read at a named commit, or to a public source read while building this deck. Messaging documents do not count as evidence here.

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
| 5 | Iowa −$14,967 at $44,000, Minnesota −$13,182 at $57,000, Maryland −$15,343 at $97,500 | `data/charts.json`, `cliffs`, which also records each line's change |
| 5 | Median state's total effective marginal tax rate: 63.6% at $30,000, 24.6% at $60,000 | `data/charts.json`, `emtr`: one minus the change in net resources over a $500 raise |
| 7 | SNAP eligibility 17.6% in Tennessee to 37.4% in Oregon; child Medicaid or CHIP 38.8% in Idaho to 65.7% in Hawaii | `analysis/sample_families.py` → `analysis/simulated_instrument.py` → `data/simulated_instrument.json` |
| 8 | $555 million cost, 29.8% of households gain, none lose, $167 million off the SPM poverty gap | `analysis/massachusetts_reform.py` → `data/massachusetts_reform.json` |
| 8 | 1,522 Massachusetts households, effective sample of about 255, no record crosses the threshold | `data/massachusetts_reform.json`: `household_records`, `effective_households` (Kish), `people_crossing_threshold` |
| 10 | Effective sample of about 185 households in the median state; child poverty rates differ from Census's by 4.8 points on average | `analysis/state_baseline.py` → `data/state_baseline.json`, compared with `data/census_child_spm.json` |
| 11 | $666.666 deduction on time, $0 late, refusal for November 2019 | `analysis/axiom_ga_3612.py` → `data/axiom_ga_3612.json`, a real engine run |

Both code blocks ran as printed: slide 7's from a CSV of the fixed sample reproduced Tennessee and Oregon, and slide 8's on the Massachusetts records reproduced the cost. `analysis/massachusetts_reform.py` runs on the Massachusetts records alone, and a national run returned the same cost, gaining share and poverty rates.

## The fixed sample

`analysis/sample_families.py` draws 3,000 households with children from Populace US, with probability in proportion to household weight, so each household then counts once. `analysis/simulated_instrument.py` sets one state on the whole file and reruns it. Mean employment income stays the same in all 51 runs, and `content.test.ts` checks that.

## Massachusetts poverty

The deck leaves out Massachusetts's poverty rates on purpose.

- Under the reform, 492 SPM unit records gain and 102 of them sit below the threshold. The closest of those falls $1,373 short and gains $440, so no record crosses and the rate does not change.
- 1,279 of the state's 1,684 SPM unit records carry weights below one, which leaves an effective sample of about 255 households.
- The model's Massachusetts child rate comes to 20.2% for 2025 and 22.3% for 2026. Census reports 12.8%, with a margin of error of 2.0 points, for the 2023 to 2025 average (P60-290 Table 18, as used in `slideshows/cpid-webinar-2026`).
- The national comparison on the webinar deck's `BaselineVsCensusSlide` runs 16.6% in the model against 13.4% from Census, for children in 2025.

## State baselines

`analysis/state_baseline.py` cuts Populace US to one state at a time and runs 2025 child SPM poverty for all 51 jurisdictions.

- The model's rates differ from Census's 2023 to 2025 averages by 4.8 points on average and exceed them by 3.2 points on net. In 38 of 51 jurisdictions the difference exceeds Census's margin of error.
- Effective samples run from 99 households in Maine to 965 in California, with a median of 185.
- The deck prints no state poverty rate from Populace US for these reasons.

## The family

`analysis/household.py` defines the family.

- One parent, 30, with children aged 1 and 4. The parent works 40 hours for 52 weeks. Rent runs $1,200 a month and child care $1,500 a month.
- `analysis/largest_counties.py` picks each state's largest county from the 2017 to 2021 American Community Survey.
- `meets_ccdf_activity_test` starts true, because a parent in a regular job meets it and the input defaults to false.
- `wi_works_placement` starts as `NONE`, because the input defaults to a Community Service Job.
- $40,000 over 2,080 hours comes to $19.23 an hour. The highest basic state rate on the Department of Labor's table, updated July 1, 2026, belongs to DC at $18.40 (dol.gov/agencies/whd/minimum-wage/state). Local minimums can run higher, and the table leaves them out.

Net resources add market income, SNAP, WIC, TANF, the child care subsidy and other benefits, then subtract federal and state taxes net of credits and the child care bill.

- `analysis/test_invariants.py` reconciles the total with `spm_unit_net_income` and with `household_net_income` over random states and earnings.
- A separate pass checked the household reconciliation at all 241 earnings points in all 51 states, and it holds to within two cents.

The reconciliation shows how the model's totals differ, and these differences belong in any state comparison that uses them.

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
| 4 | SNAP deducts what the family pays for care | `snap_dependent_care_deduction` reads post-subsidy `childcare_expenses` |
| 6 | Massachusetts credit values, dates and citations | `parameters/gov/states/ma/tax/income/credits/child_and_family/amount.yaml` and `dependent_cap.yaml` |
| 10 | 46 jurisdictions through 2023, 48 in 2024, 51 from 2025 | `gov.hhs.ccdf.child_care_subsidy_programs`; missing DC, NC, OR, TN and TX through 2023, and DC, TN and TX in 2024 |
| 10 | Copy back to 2015 | `backdate_parameters(first_instant="2015-01-01")` in `system.py`, `FIRST_MODELED_YEAR = 2015` in `tools/parameters.py` |
| 10 | Wisconsin's schedules | Shares dates start 2025-10-01, and the model returns subsidies of $14,717 in 2021 and $15,483 in 2023 |
| 10 | Earnings enter as inputs | The minimum wage appears only in eligibility tests; `pfml_benefits` holds benefits received |
| 10 | Labor supply | Elasticities default to zero |
| 10 | Medicaid limits | `is_medically_needy_for_medicaid` documentation |
| 10 | Take-up | `takes_up_snap_if_eligible` defaults to true, and Populace US carries `takes_up_*` flags |

## The other tools

Slide 9 uses each tool's own description from Cynthia Osborne's session description of October 16, 2026, which covers the Policy Tracking System, the Policy Impact Calculator, the State Safety Net Interactive, the Welfare Rules Database, the CCDF Policies Database, and State of the Safety Net with ATTIS.

## Axiom

- The rule file sits at `us-ga/policies/dfcs/snap/3612.yaml` in `TheAxiomFoundation/rulespec-us`, published under CC BY 4.0.
- `axiom-rules-engine` carries an MIT license.
- Georgia's public manual at pamms.dhs.ga.gov/dfcs/snap/3612 confirms the rule text and the December 2019 effective date.
- The deck makes no claim about how much of any program Axiom covers.
