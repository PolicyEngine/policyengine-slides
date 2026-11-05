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
| 6 | $26,562 in Indiana, $54,345 in Alaska, median Delaware $46,920 | `analysis/compute_family.py` → `data/family.json` → `analysis/summarize.py` → `data/charts.json` |
| 6 | Gap of $16,404 at $30,000 and $21,670 at $60,000 | `data/charts.json`, `spreads` |
| 6 | At $40,000, 45 jurisdictions pay a subsidy in all twelve months, Idaho, Indiana, Missouri and Nevada in none, and Alabama and South Dakota in five | `analysis/subsidy_months.py` → `data/subsidy_months.json`, which reads each state's monthly program variables |
| 6 | Federal taxes and credits vary least across states | `data/charts.json`, `lines_by_program` |
| Questions | Texas: $15,791 subsidy, −$5,598 SNAP, +$10,193 net resources | `analysis/interaction.py` → `data/interaction.json` |
| 7 | Idaho −$17,808 at $35,000, Maryland −$15,343 at $97,500, Missouri −$15,124 at $40,000, the three largest drops of the 51 | `data/charts.json`, `cliff_ranking`, which records each line's change in every state |
| 7 | In 46 of 51 jurisdictions, the largest drop comes from the subsidy | `cliff_ranking`. The family loses TANF at the largest drop in Massachusetts and New Hampshire, and WIC in Maine, New Mexico and Vermont. |
| 7 and Questions | We estimate enrolled limits for this family of about $110,000 in Maryland and $68,000 in Iowa. Its net resources then fall by $15,572 and $6,817, respectively | `analysis/enrolled_cliffs.py` → `data/enrolled_cliffs.json`, which adds only each state's enrolled flag to the same household. Its new-applicant runs reproduce `data/family.json`. The same runs give about $75,000 and $13,874 in Idaho, which we leave off the slide because Idaho's department applies the lower limit when a family recertifies |
| 7 | Median total effective marginal tax rate on $500 more in earnings, across 51 jurisdictions: 63.6% at $30,000, 24.6% at $60,000 | `data/charts.json`, `emtr`: one minus the change in net resources over $500 more in earnings |
| 10 | SNAP eligibility 17.5% in Arkansas and Tennessee to 38.3% in Maryland, among SPM units with children; child Medicaid or CHIP 39.8% in Idaho to 66.1% in Hawaii | `analysis/sample_families.py` → `analysis/simulated_instrument.py` → `data/simulated_instrument.json` |
| 9 and Questions | State cost, 29.4% of households would gain, none would lose, $169 million off the SPM poverty gap | `analysis/massachusetts_reform.py` → `data/massachusetts_reform.json`: `state_cost` holds the fall in `state_income_tax`, and `household_gain` holds the change in `household_net_income` |
| 9 and Questions | 36,491 Massachusetts household records, an effective sample of about 301 households, or 132 among those with children, 2026 child poverty rate falls 0.2 points | `data/massachusetts_reform.json`: `household_records`, `effective_households` and `effective_households_with_children` (Kish, counting each source household once), `baseline_child_poverty`, `reformed_child_poverty` |
| Questions | Effective sample in the median state; child poverty estimates differ from Census's by 3.2 points on average, and in 29 of 51 jurisdictions they fall outside Census's margin of error | `analysis/effective_samples.py` → `data/effective_samples.json`; `analysis/state_baseline.py` → `data/state_baseline.json`, compared with `data/census_child_spm.json` |
| 15 | $500.00 deduction on $2,500.00 of monthly earnings, refusal for November 2019 | `analysis/axiom_ga_3612.py` → `data/axiom_ga_3612.json`. At $30,000 a year, we estimate $6,363 of Georgia SNAP for slide 6's family (`data/family.json`) |

We dropped county and finer geography from the fixed-sample CSV and defined the `STATE_FIPS` dictionary before running slide 10's loop. The loop reproduced Arkansas and Maryland to every digit. We then ran slide 9's reform dictionary on the Massachusetts rows of Microcosm's local-area file. It returned the state cost in `data/massachusetts_reform.json` (`analysis/check_slide_code.py` → `data/slide_code_check.json`). On Microcosm's national file, a Massachusetts cut and a national run returned the same household gain, gaining share and poverty rates (`data/massachusetts_reform_default.json`, `data/massachusetts_national_check.json`).

## This family, line by line

`analysis/family_lines.py` → `data/family_lines.json` runs the family from `analysis/household.py` in Massachusetts, in Middlesex County, at $40,000 for 2026. Slide 2 tells the room to assume the subsidy for all twelve months. Slide 3 reads SNAP with and without the subsidy, slide 5 reads every line, and slide 8 reads the doubled credit.

- The lines add up to $49,127.46, and `net_resources` reads $49,127.47. Rounding explains the cent.
- Payroll tax holds $2,480 of Social Security, $580 of Medicare and $184 of Massachusetts paid leave contributions: $40,000 × (0.0018 + 0.007 × 0.4), in `ma_employee_paid_leave_contribution`, which assumes the maximum permitted employee withholding.
- SNAP comes to 9 × $297 + 3 × $330 = $3,663 (`monthly_snap`). The table below shows each month's path, with `analysis/model_ask/monthly_snap.py` → `monthly-snap.json` behind it. The engine spreads the annual parent fee evenly, and actual monthly fees give $3,660. With assistance set to zero, the deduction reads $1,500 a month and SNAP $720 then $753, or $8,739.

| Months | Maximum allotment | Standard deduction | Parent fee deducted | Shelter deduction (at the cap) | Net income | SNAP |
| --- | --- | --- | --- | --- | --- | --- |
| January to September | $785 | $209 | $88.14 | $744 | $1,626 | $297 |
| October to December | $808 | $217 | $88.14 | $769 | $1,593 | $330 |

- The $16,942 subsidy leaves the family $1,058 of `childcare_expenses`, and `snap_dependent_care_deduction` reads the same amount. Without the subsidy, that deduction reads $18,000, SNAP $8,739, federal refundable credits $7,323 and net resources $37,455.
- Doubling the credit raises `ma_child_and_family_credit` from $880 to $1,760 and net resources to $50,007, and moves no other line.

## What the models answered

`analysis/model_ask/` holds both prompts, the method we registered before any answer came back (`PREREGISTERED.md`), the runners and each round's comparison. `analysis/model_answers.py` reads `comparison-v2.json`, refuses any file whose status isn't final, and writes `data/model_answers.json`, which holds all 50 answers and marks the seven versions slide 3 shows.

- **The round the slides use:** `prompt-v2.txt` (sha256 prefix c9233c5b2a8c3419), five calls to each of ten models on November 5, 2026, with tools off, at each model's default effort, in PolicyBench's no-tools batch format (policybench commit 8180cde1). It states head-of-household filing, citizenship and SSNs, WIC nutritional risk, 52 weeks of work, center-based care 21 days a month, and approved child care assistance for all twelve months. These answers belong to this run, not to PolicyBench's board.
- We registered one retry for a call that failed or returned unparseable JSON, and no rerun because of a value. All 50 calls answered on the first attempt, with no retries, no malformed answers and no tool use (`attempt_audit` in `comparison-v2.json`).
- **Newest versions:** 8 of 35 answers within 10% of $3,663, none within $1, from $0 to $11,160, median $3,800. Eight GPT-6.1 Sol and GPT-6 Astra answers, at $3,240 and $3,250.80, fall about 11.5% short of it.
- **Older versions:** GPT-6 Sol 3 of 5, GPT-5.6 Terra 0 of 5 and Claude Opus 4.7 4 of 5, or 7 of 15 within 10%, from $3,108 to $8,868. Slide 3 shows the newest version in each family, whatever it answered, so it doesn't show models improving.
- **All ten:** 15 of 50 within 10% and none within $1. Against $3,660, the total if the parent fee follows Massachusetts's actual months rather than an even spread, the counts stay at 8 and 0 for the newest versions.
- The same model gives different answers on the same prompt: Claude Opus 5.5 runs from $3,551 to $8,651 over five calls.
- **The earlier prompt's results:** `prompt.txt` asked each model once, and `comparison.json` holds those answers. Our review found that prompt left out facts the reference uses, so we wrote the second prompt before any second-round call. Opus and Sonnet timed out twice at max effort. Haiku first returned malformed JSON containing SNAP $2,988, then timed out on retry. We reran these three models at default effort and retained one complete answer per model. No slide uses this round.
- OpenAI doesn't serve GPT-5.5 on ChatGPT accounts. We set aside a first batch because its calls could reach tools, and `PREREGISTERED.md` records why.

## PolicyBench

`analysis/policybench_board.py` → `data/policybench_board.json` reads the live page at policybench.org (fetched November 5, 2026, board snapshot 2026-10-27), the board's `dashboard-data.json` from October 23, 2026, and `modelMeta.ts` at policybench commit 8180cde1.

- Slide 4's bars come from the page's "Where models still break": 51 models and 100 public households, sampled with household weights from an eligible subset of Microcosm, which that page calls the PolicyEngine populace dataset. These unweighted rates pool parsed predictions on positive scored reference amounts and leave out missing or unparseable predictions. They describe that sample.
- The exact-match score counts an amount right within $1 and an eligibility flag right on a match, and weights each answer by household impact. On the October 23 copy, GPT-5.5 scores highest among models released by April 30, at 87.9, and GPT-6 Sol highest overall, at 95.2. That compares release cohorts on one snapshot, and no one measured the board in April at this scoring. GPT-6.1 Sol scores 90.1 and Claude Opus 5.5 94.1. No slide prints these scores, because the bars come from a later snapshot.
- On that copy, the two highest scorers miss SNAP by more than 10% in 7 of 13 (GPT-6 Sol) and 6 of 13 (Claude Opus 5.5) households with a positive reference amount (`top_two_snap`).
- PolicyBench grades against PolicyEngine, and no administrative record stands behind its references. The [reference audit](https://policybench.org/notes/2026-09-22-reference-audit) gives the counts we quote, and the [tool pilot](https://policybench.org/notes/2026-10-20-given-a-policyengine-tool-three-models-score-above-99) gives the scores with a tool. That pilot doesn't independently validate policy accuracy or show that models need such a tool.

## Massachusetts waiting list

The model carries no Massachusetts waiting list: a search for "waitlist" under `parameters/gov/states/ma` and `variables/gov/states/ma` in PolicyEngine US 2.90.2 returns nothing. Slide 2 tells the room to assume the subsidy for all twelve months, and slide 3 prints the amount with and without it. The [Department of Early Education and Care's September 9, 2026 board materials](https://www.mass.gov/doc/september-eec-board-meeting-materials/download), pages 14 to 17, give 31,724 children on the income-eligible waiting list in July 2026, 21,004 in July 2023, a caseload of 38,776 through June, $31.2 million of new money reaching about 2,000 children, and new vouchers scheduled from October. [GBH News](https://www.wgbh.org/news/local/2026-09-03/mass-expands-child-care-financial-assistance-to-income-eligible-families) dates the closure to April 2024. EEC gives priority to families at or below 50% of state median income, and no source we read says how long this family would wait.

## The ways in

We checked each address on slide 10 on November 5, 2026. The page at policyengine.org/us/taxsim offers policyengine-taxsim as a drop-in replacement for TAXSIM35, and it routes 2021 onward to PolicyEngine and earlier years to TAXSIM35. The deck pins PolicyEngine US 2.90.2. PyPI carried 2.95.0 that morning, CliffWatch reported 1.755.5 on November 4, and Build ran 2.2.1 on November 5. The plugin's repository, PolicyEngine/policyengine-claude, describes its contents as "agents, commands, and skills for tax/benefit microsimulation".

## Coverage

`analysis/coverage_counts.py` → `data/coverage.json` counts the PolicyEngine US package and reads the manifests we publish for Microcosm, our microdata, on Hugging Face under `policyengine/populace-us`. Build labels the national file Microcosm in `api.policyengine.org/us/metadata`.

- **Model:** income tax parameters for 44 jurisdictions and none for Alaska, Florida, Nevada, South Dakota, Tennessee, Texas and Wyoming, 51 entries in `STATE_TANF_VARIABLES`, and 51 programs in `child_care_subsidy_programs`. `local_income_tax_before_refundable_credits` adds New York City's income tax and Philadelphia's wage tax, among others.
- **National file** (`populace-us-2024-spm-20260915`): 57,240 households and 5,659 targets, including IRS SOI and Census population totals. We fit 95.69% within 10% in sample, with an effective sample of 9,174. We rescale four Social Security benefit inputs to SSA payment totals, impute 65 tax-detail variables from IRS PUF records into copies of CPS ASEC households, and add inputs from SCF 2022, SIPP 2023 and CPS ORG 2024. These describe how we build the file and don't establish its accuracy.
- **Local-area file** (`populace-us-2024-buildo-acs-local-766b7c7-20261017T030317Z`): 1,586,908 households, 1,529,668 from the ACS and 57,240 from the ASEC and PUF. Its donor, `populace-us-2024-spm-receipts-20260923`, differs from the national file. It fits 4,765 targets, 4,329 by state and 436 by congressional district, and 96.08% land within 10% in sample, with an effective sample of about 12,124. Those targets leave out state child counts and poverty, so this fit doesn't establish state child poverty accuracy.
- **Take-up** (microcosm commit 766b7c792): `us_runtime/snap_take_up.py` keeps everyone who reports SNAP and draws the rest to USDA's participation rate. `us_runtime/medicaid_take_up.py` keeps everyone who reports Medicaid and calibrates the rest to CMS state enrollment counts.
- **Imputation:** the `US_DONORS` table at that commit names the IRS Public Use File, the SCF with the SIPP for financial assets, and the SIPP for tips.
- **Geography:** `us_runtime/puma_ladder.py` keeps an ACS household's PUMA and draws its county and congressional district within that PUMA, in proportion to population overlap.

## Work in progress

Slide 14 links each open pull request, all open on November 5, 2026: PolicyEngine/microcosm#1445 (what moves state child poverty rates), PolicyEngine/policyengine-us#10640 (Medicaid spouse rule), PolicyEngine/policyengine-us#10607 (LIHEAP in California, with #10609, #10611, #10612, #10613, #10614, #10616 and #10618 for Colorado, Connecticut, Delaware, Idaho, Hawaii, South Carolina and West Virginia), PolicyEngine/microcosm#1453 (local tax geography) and PolicyEngine/microcosm#1246 (student loans).

## The fixed sample

`analysis/sample_families.py` makes 3,000 draws from the Microcosm households with someone under 18, with replacement and in proportion to household weight. When the script draws a household twice, it writes two copies under fresh IDs, and each copy counts once. The sample includes 2,075 distinct household records. Slide 10's Medicaid or CHIP share covers children under 19, so an 18-year-old counts only when the household also holds someone younger.

The script keeps input variables and IDs. It renames the stored Social Security amounts, `social_security_retirement`, `social_security_disability`, `social_security_survivors` and `social_security_dependents`, to the `_reported` inputs the model reads. It leaves out `has_marketplace_health_coverage`, `is_spm_independent_minor_role` and 181 names that PolicyEngine US 2.90.2 does not define. When we restored those two variables, the runs for Tennessee, Oregon and Hawaii returned the same SNAP and child Medicaid or CHIP shares to every digit (`analysis/audit_sample_columns.py` → `data/sample_columns.json`).

`analysis/simulated_instrument.py` drops county and finer geography, sets one state on the whole file and reruns it. Each run records the state the model read, and mean employment income stays the same in all 51 runs. `content.test.ts` checks both.

## Massachusetts poverty

- Under the doubled credit, we estimate that 101 person records cross the threshold. The 2026 child poverty rate falls 0.2 points, from 23.1% to 22.9%.
- That fall rests on 55 child records in 24 households. Clustering by source household, we estimate standard errors of 0.05 points on the fall and 4.6 points on the 2026 rate. They come to $42 million on the fall in the poverty gap and $64 million on the state cost (`analysis/massachusetts_precision.py` → `data/massachusetts_precision.json`). We treat the calibrated weights as known and don't capture errors that every record shares, such as a data-wide error in rent. We also leave out errors that every clone shares through the model that imputes its tax detail.
- The file's 36,491 Massachusetts household records come from 36,197 source households. They hold an effective sample of about 301 households, or 132 among those with children.
- We estimate a Massachusetts child poverty rate of 21.4% for 2025 and 23.1% for 2026. Census reports 12.8%, with a margin of error of 2.0 points, for the 2023 to 2025 average (P60-290 Table 18, as used in `slideshows/cpid-webinar-2026`). That difference ranks third in size among the 51 jurisdictions, after Delaware and Louisiana.
- On the national file, we estimate that Massachusetts would forgo $555 million and 29.8% of households would gain. The poverty gap would shrink by $167 million (`data/massachusetts_reform_default.json`).
- On the same records at policyengine-us 2.2.1, the version `policyengine.py` 6.12.0 pins, we estimate that Massachusetts would forgo $657 million and 34.1% of households would gain. The child poverty rate would fall 0.5 points, from 22.2% to 21.7% (`data/massachusetts_reform_221.json`). We changed how the model computes the credit between those versions. On a joint return, 2.2.1 counts a filer with a disability as a qualifying individual, and 2.90.2 counts a filer incapable of self-care. 2.90.2 also counts a dependent incapable of self-care at any age. We did not separate how much of the difference those changes explain.
- On policyengine-us 2.2.1 and the Microcosm 2024 population, we estimate that 16.6% of children nationally lived below the threshold in 2025, and Census reports 13.4% (`BaselineVsCensusSlide` in `slideshows/cpid-webinar-2026`).

## State baselines

`analysis/state_baseline.py` computes 2025 child SPM poverty rates for all 51 jurisdictions, one state at a time, on Microcosm's local-area file at revision `populace-us-2024-buildo-acs-local-766b7c7-20261017T030317Z`. `policyengine.py` 6.12.0 selects that file for state regions (`region_datasets` in `src/policyengine/data/bundle/manifest.json`, and `docs/regions.md`), and the file here matches the manifest's SHA-256.

- Our rates differ from Census's 2023 to 2025 averages by 3.2 points on average and exceed Census's by 0.9 points on net. They exceed Census's in 30 of 51 jurisdictions. In 29 of 51 jurisdictions the difference exceeds Census's margin of error.
- Effective samples of households with children run from 53 in Maine to 407 in California, with a median of 108. Across all households they run from 157 in Kentucky to 905 in California, with a median of 237 (`data/effective_samples.json`).
- `policyengine.py` leaves ACS group quarters out of SPM measures, and we keep them. Leaving them out moves no state's rate by more than 0.023 points (Connecticut) and moves Massachusetts's by 0.01 (`child_spm_percent_without_group_quarters` in `data/state_baseline.json`).
- On the same file and model version, our rates match `acs_local` in PolicyEngine/microcosm#1445 at 247f1a88 (`docs/evidence/us-state-child-spm-2026-11/outputs/acs_eval.csv`) to within 0.000001 points in 48 of 51 jurisdictions (`data/microcosm_1445_rates.csv`). That run gives blank parent links the id −1, and ours gives them 0, the model's value for an unknown parent. California moves by 0.56 points, Delaware by 0.006 and Missouri by 0.00001.
- On the national file, our rates differ from Census's by 4.8 points on average. They exceed Census's in 40 of 51 jurisdictions and fall outside its margin in 38 (`data/state_baseline_default.json`). The median effective sample includes 63 households with children (`data/effective_samples.json`).

## Effective samples

Some CPS ASEC households appear twice in each Microcosm file, as the ASEC record (support channel `asec`) and as a clone (`puf_tax_detail`) whose members have the same ages. We count each ASEC household and its clone as one household. We add the clone's weight to its ASEC record's before computing Kish's effective sample size, and cluster standard errors by source household. `analysis/effective_samples.py` checks that every shared source covers one ASEC record and one clone with the same ages, and writes `data/effective_samples.json`. In the local-area file, ids on the `acs_2024_1yr` spine match ids on the `asec_puf` spine in 48 states, so we key each source by spine and id.

Counting both copies would put Massachusetts at about 395, or 173 among those with children, and the median state at 125 households with children (`effective_records` in `data/effective_samples.json`). In `data/state_baseline.json` and `data/state_baseline_default.json`, `effective_households` counts both copies too.

## The family

`analysis/household.py` defines the family.

- One parent, 30, with children aged 1 and 4. The parent works 40 hours for 52 weeks. Rent runs $1,200 a month and child care $1,500 a month.
- `analysis/largest_counties.py` picks each state's largest county from the 2017 to 2021 American Community Survey.
- We set `meets_ccdf_activity_test` to true, because a parent in a regular job meets it and the input defaults to false.
- We set `wi_works_placement` to `NONE`. Otherwise we place a family with no child under 1 and no third-trimester pregnancy in a Community Service Job.
- We set `gov.states.id.dhw.iccp.income.fpl_rate.initial_eligibility` so Idaho's limit for this family equals the $2,888 a month the department posts (`state_updates` in `analysis/household.py`). Every run of this family takes that limit, in Idaho only. Slides 9 and 10 and our state baselines run the model's own 175%.
- We add Ohio's Child Care Choice Voucher to every run of this family in Ohio (`oh_child_care_choice_voucher` in `analysis/household.py`). It pays the smaller of the bill and $1,550 a month, to a family over the first program's limit with income up to 200% of the guideline. Slides 9 and 10 and our state baselines leave it out.
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

- **Ohio:** Ohio sets the initial limit for Publicly Funded Child Care at 145% of the federal poverty guideline (`oh_ccap_fpg`), and enrolled families stay eligible to 300%. The $40,000 new applicant falls between them, and the model pays nothing. Ohio's [Child Care Choice Voucher](https://childrenandyouth.ohio.gov/for-families/early-care-education/child-care-choice-program) takes families over that limit up to 200%: $3,221 to $4,442 a month [through September](https://dam.assets.ohio.gov/image/upload/childrenandyouth.ohio.gov/Tuesday%20Times/2025/09%20September/DCY_PL21_-_2025_FPLs_and_Copays_2.pdf) and $3,302 to $4,554 [from October 1, 2026](https://dam.assets.ohio.gov/image/upload/childrenandyouth.ohio.gov/Tuesday%20Times/2026/8-August/PL_45.pdf). A county that denies a family for income "will automatically explore eligibility" for the voucher, according to the department's page. Ohio pays centers $900 a month for a child under 18 months, $800 for a child up to 3 and $750 for a child of 3 or 4 under [Procedure Letter 36](https://dam.assets.ohio.gov/image/upload/childrenandyouth.ohio.gov/For%20Partners/Rules%20and%20Resources/2025/PL_36.pdf), which caps the voucher plus the family's portion at the provider's private rate and encourages programs to charge no more than 9% of monthly gross income for tuition the voucher leaves uncovered. We count $18,000 of vouchers for the family's $1,500 monthly bill, assuming an open center with a Publicly Funded Child Care provider agreement, and we estimate net resources of $45,126. Under H.B. 96, Ohio must use the first program's base rates for vouchers [by November 1, 2026](https://www.lsc.ohio.gov/assets/legislation/136/hb96/en0/files/hb96-kid-bill-analysis-as-enacted-136th-general-assembly.pdf#page=11); the model puts those at $1,408 and $1,118 a month for these children, so the voucher still covers the bill. Ohio funds vouchers "subject to available funds" under the act, about $100 million a year, and [EdNC reported](https://www.ednc.org/child-care-choice-voucher-program-helps-thousands-of-children-and-families-access-child-care-in-ohio/) about 8,900 children served in February 2026 against funding for up to 20,000, with no waiting list. Without the voucher, we estimate $27,711 (`data/limit_checks.json`). We estimate the family's largest drop in Ohio at $11,149, at the step from $53,000 to $53,500, where it passes the $4,442 limit in January through September.
- **Nevada:** Nevada sets its intake limit at 41% of state median income, about $34,674, and its renewal limit at 49%.
- **Idaho:** Idaho's [rule](https://adminrules.idaho.gov/rules/current/16/160612.pdf#page=7) sets a ceiling of 175% of the federal poverty guideline at application, and the model reads that ceiling as the limit. The Department of Health and Welfare [moved new applicants to 130%](https://healthandwelfare.idaho.gov/news/dhw-will-resume-applications-idaho-child-care-program-january) when it reopened applications on January 13, 2025, and [posts $2,888 a month for three](https://healthandwelfare.idaho.gov/services-programs/children-families-older-adults/apply-child-care-assistance), effective October 2025. We hold that posted limit fixed through 2026. The $3,333-a-month new applicant falls over it, and we estimate the family's largest drop at the step from $34,500 to $35,000. There it loses $16,200 of subsidy and, on net, $2,313 of SNAP: earnings of $35,000 pass SNAP's gross limit from January through September, 130% of the 2025 guideline, and from October the family again qualifies for SNAP with a larger child care deduction. At the model's 175%, we estimate net resources of $44,142 at $40,000 and a largest drop of $14,511 at $48,000. An [Idaho Capital Sun story of March 2026](https://www.kmvt.com/2026/03/26/idaho-legislature-considers-lowering-income-cutoff-child-care-subsidies/) calls 175% the current cutoff, and the [statement of purpose for H0958](https://legislature.idaho.gov/wp-content/uploads/sessioninfo/2026/legislation/H0958SOP.pdf) calls 175% an expansion. We take the department's page as what an applicant faces.
- **Georgia:** Georgia sets its initial limit at $48,350 for three, so the family meets the income test and we count $15,244. Georgia also [denies initial applications outside a priority group](https://caps.decal.ga.gov/assets/downloads/CAPS/07-CAPS_Policy-Priority%20Groups.pdf) (CAPS policy 00-7, revised October 5, 2026), and its very low income group stops at $13,660 for three. The family would qualify through another group if, for example, its 4-year-old attends Georgia's Pre-K. `ga_caps_eligible` tests no priority group. Without the subsidy, we estimate net resources of $27,711 (`data/limit_checks.json`).
- **Alabama and Missouri:** both post $3,331 a month for new applicants in a family of three, $2 below this family's $3,333, and we apply both limits (`analysis/household.py`). Alabama's [June 2026 fact sheet](https://dhr.alabama.gov/wp-content/uploads/2026/06/CHILD-CARE-FACT-SHEET-Jun2026-1.pdf) tops its initial scale at $3,331, and Alabama multiplies weekly pay by 4.333 under that schedule, which gives this family $3,333.08. We apply that limit from June 1, which leaves five months of subsidy, $6,070, and net resources of $32,224. Missouri's [chart, updated July 1, 2026](https://dese.mo.gov/sites/g/files/zuston521/files/media/pdf/2026/07/Income%20Elig%20_Updated%206.29.26.pdf), tops its traditional scale at $3,331, 150% of the 2025 guideline, and its [May 2026 manual](https://dese.mo.gov/sites/g/files/zuston521/files/media/pdf/2026/05/Child%20Care%20Subsidy%20Eligibility%20Policy%20Manual_May%202026.pdf) states no factor for wages. The model applies 150% of the 2026 guideline, $3,415. Applying the chart leaves no subsidy and net resources of $27,711. At the limits the model reads, we estimate $40,722 in Alabama and $41,931 in Missouri (`data/limit_checks.json`).
- **Maryland:** sources differ on the limit for new applicants. [Maryland Family Network](https://marylandchild.org/child-care-scholarship/) and the [Department of Legislative Services](https://dls.maryland.gov/pubs/prod/ProgEval/EvalofDivisionofEarlyChildhood.pdf#page=38) print $94,026 for three and $106,563 at redetermination, which equal 75% and 85% of the federal fiscal 2025 median income the state's [February 2026 briefing](https://mgaleg.maryland.gov/meeting_material/2026/w&m%20-%20134146885147130127%20-%20Briefing%20materials.pdf#page=20) names. The same briefing also gives $115,587 for four, which matches the model's limit of about $97,000 for three. We keep the model's limit. At $94,026, we estimate the largest drop at $15,197, at the step from $94,000 to $94,500 (`data/limit_checks.json`).
- **Oklahoma:** at its default one-star center rates, Oklahoma pays $555 a month after the family's copay.
- **Indiana:** the model reads 150% of the federal poverty guideline through April 4, 2026, citing [OECOSL's bulletin](https://www.in.gov/fssa/carefinder/system-updates-2023) on the raise from 127% on August 1, 2023, and 135% from April 5, 2026 (`get_on_fpg_rate`). Families in the program stay eligible to 85% of state median income (`stay_on_smi_rate`). For a family of three, FSSA sets [$3,074 a month to get on](https://www.in.gov/fssa/carefinder/files/Income-Get-on-CCDF.pdf) and [$6,400 to stay on](https://www.in.gov/fssa/carefinder/files/Income-Stay-on-CCDF.pdf). The $3,333-a-month new applicant falls between them. We found no chart Indiana posted before April. The [PN3 Roadmap](https://pn3policy.org/wp-content/uploads/2026/08/PN3PIC_Subsidies_Narratives_2026.pdf) prints 137% of the guideline for 2026, and its 2025 edition printed 140%. And 150% of the 2025 guideline comes to $3,331 a month, $2 below this family, while the model reaches $3,415 by pairing 150% with the 2026 guideline. So we hold Indiana to 150% of the 2025 guideline before April (`analysis/household.py`), which leaves no subsidy and net resources of $26,562, the same as the April limit in all twelve months. At the model's limit, we estimate $1,231 a month from January through April, $4,925 in all, and $31,487 (`data/subsidy_months.json`). [Chalkbeat reported](https://www.chalkbeat.org/indiana/2026/04/16/child-care-vouchers-to-resume-after-funding-approved-by-budget-committee/) in April that Indiana would restart child care help in May after a 15-month freeze.
- **Indiana and Idaho at $40,000:** neither pays any subsidy, so taxes set the $1,603 gap. `in_income_tax` returns $522.18 (`in_agi_tax` $914.50 less `in_eitc` $392.32), `local_income_tax` returns $626.20 in Marion County, and `id_income_tax` returns −$455 (`id_pbf` $10 less `id_grocery_credit` $465). `content.test.ts` checks those amounts against `data/family.json`.
- **South Dakota:** we model `sd_cca` from August 2026, so $7,500 equals five months at $1,500.
- **Provider tier:** we leave each state at its default, its base or lowest tier.
- **Alaska:** Alaska pays each person a $1,000 dividend and $200 of energy relief, $3,600 for this family (`gov.states.ak.dor.permanent_fund_dividend` and `energy_relief`).

## Mechanisms

| Slide | Claim | Code at `469ad12` |
| --- | --- | --- |
| 12 | Program list, every state income tax, TANF and child care rules of all 51 jurisdictions | `STATE_TANF_VARIABLES` holds 51 entries; `child_care_subsidy_programs` holds 51 from 2025 |
| 6 and Questions | We model each state's income limits, not its priority groups, waiting lists or enrollment freezes | No child care variable or parameter tests a waiting list or an enrollment freeze. A search for "priority" in the state child care code finds comments in Alabama (copays for protective services), Kentucky and New Mexico, whose one rule waives the income test for families leaving TANF. None of them applies to this family. A comment in `ca_capp_eligible` says the model assumes enrollment, New Mexico's parameters name a waiting list only in a citation, and Maryland's `smi_freeze_in_effect` freezes the income base year, not enrollment. None of the 18 `takes_up_*` variables covers a state child care subsidy |
| 6 | We add Ohio's Child Care Choice Voucher | `oh_child_care_subsidies` adds only `oh_ccap`, and no variable or parameter under `gov/states/oh` names the voucher |
| 3 and Questions | Congress lets SNAP households deduct their care costs | `snap_dependent_care_deduction`, citing 7 U.S.C. 2014(e)(3), reads post-subsidy `childcare_expenses` |
| 8 | Massachusetts credit values, dates and citations | `parameters/gov/states/ma/tax/income/credits/child_and_family/amount.yaml` and `dependent_cap.yaml` |
| 10 | Our TAXSIM-compatible interface runs 2021 onward through PolicyEngine and earlier years through TAXSIM35 | `StitchedRunner.PE_MIN_YEAR = 2021` in `policyengine_taxsim/runners/stitched_runner.py` at the policyengine-taxsim commit above |
| 10 | Child tax credit, EITC, SNAP and state tax credit reforms, state by state | `getReformOptionsForState` in `frontend/lib/state-programs.ts` at the dashboard commit above returns federal child tax credit and EITC options and SNAP options in all 51 jurisdictions, state EITC options in 43 (the 42 with an income tax, and Washington) and state child tax credit options in 17 for 2026 |
| Questions | All 51 jurisdictions from August 2026 | `gov.hhs.ccdf.child_care_subsidy_programs` lists 51 from 2025. We model Illinois's program from July 2025, Florida's from October 2025, and Arkansas's and Ohio's from November 2025 (each program's `in_effect`), and South Dakota's from August 2026, when `uses_weekly_rates` turns on |
| Questions | Copy back to 2015 | `system.py` calls `backdate_parameters(self.parameters, first_instant=f"{FIRST_MODELED_YEAR}-01-01")`, and `tools/parameters.py` sets `FIRST_MODELED_YEAR = 2015`. Wisconsin Shares' rate parameters start on 2025-10-01, so we compute subsidies of $13,258 in 2021 and $14,024 in 2023 (`analysis/wisconsin_schedules.py` → `data/wisconsin_schedules.json`) |
| Questions | We take earnings and paid leave benefits as inputs | The minimum wage appears only in eligibility tests. `pfml_benefits` holds benefits received, and the model computes employee contributions through `employee_state_payroll_tax` |
| Questions | Labor supply | Elasticities default to zero |
| 6 and Questions | Take-up | All 18 `takes_up_*` variables default to true, and Microcosm carries `takes_up_*` flags |

## Waiting lists

We quote these on slide 7 and in the notes' Questions section, and we model none of them:

- **Maryland:** MSDE started a waiting list on May 1, 2025 ([fiscal note on HB 849](https://mgaleg.maryland.gov/2026RS/fnotes/bil_0009/hb0849.pdf)). MSDE puts families it approves on that list, and exempts families experiencing homelessness, families receiving TANF, TCA or SSI, and families adding a sibling to a scholarship ([MSDE's August 2026 notice](https://content.govdelivery.com/attachments/MDMSDE/2026/08/19/file_attachments/3751314/CCS%20Homelessness%20One%20Pager%20-%20August%202026.pdf)).
- **Indiana:** FSSA puts new applicants on a waiting list and sets its limit at 135% of the poverty level ([FSSA's site](https://www.in.gov/fssa/carefinder/child-care-assistance/index)).
- **Alabama:** DHR puts new applications it received on or after May 8, 2026 on a wait list ([DHR's notice](https://dhr.alabama.gov/change-to-child-care-subsidy-approval-process/)).
- **Missouri:** DESE puts newly applying families on a waitlist from March 1, 2026 ([DESE's release](https://dese.mo.gov/missouri-implement-waitlist-child-care-assistance-amid-record-demand)).
- **Texas:** the [Texas Tribune reported on August 11, 2026](https://www.texastribune.org/2026/08/11/texas-cuts-child-care-subsidies/) that "more than 100,000 children are waiting for scholarships", and that the state's target falls from 146,736 seats in 2026 to 132,689 in 2027.
- **All states:** the National Women's Law Center counted 17 states with waiting lists or frozen intake in February 2025 ([press release](https://nwlc.org/press-release/nwlc-finds-waiting-lists-for-child-care-assistance-nearly-doubled-in-2025/)).

## The web apps

We captured slide 12's coverage tracker from www.policyengine.org/us/model/rules/coverage on November 5, 2026. It shows 109 total programs, 87 complete, 18 partial and 4 in progress, and its top line reads "Coverage reflects policyengine-us 2.72.3 (main @ 4c65c82, fetched 2026-10-27). The production API served 2.2.1 when the snapshot was fetched." The deck's own runs use 2.90.2. Slide 12 loads that page in a live frame at the still's crop, and the still shows until the tracker renders and stands in for it in the PDF.

We captured slide 11's CliffWatch screenshot on November 4, 2026, and Build's report on November 5, 2026, from the live sites. We scripted the recording, built it from screenshots and drew its cursor and address bar. CliffWatch drew that run's chart in under a second. Other runs took longer.

- CliffWatch (policyengine.org/us/cliffwatch) ran PolicyEngine US 1.755.5, as its `/api/metadata` reports. We entered a single parent, 33, with children aged 6 and 10 in ZIP code 02139, and left rent and child care at zero. We kept its default programs, which include Medicaid, CHIP and premium tax credits. CliffWatch passes PolicyEngine US the state and no county, so the model computes those credits from Barnstable County's benchmark plan. The notes' TAFDC example rests on the deck's pin: on PolicyEngine US 2.90.2, this family draws $7,912 of TAFDC at $18,000 of earnings and none at $18,100.
- In Build (app.policyengine.org/us/build), we set the Massachusetts child and family tax credit amount, `gov.states.ma.tax.income.credits.child_and_family.amount`, from $440 to $880 from 2026, and picked Massachusetts as the population. For Build, we set the browser's time zone to UTC.
- That click at 15:32:41Z on November 5 ran report 4940 (app.policyengine.org/us/report/8adb8bf2-355f-4f00-b7b9-1ef56a1deb77), which finished at 15:35:22Z. The recording cuts from the click to the finished report. The report shows a $657.4m annual state revenue loss, 45.7% of people gaining income and a 2.3% relative decrease in child poverty, on PolicyEngine US 2.2.1 and `policyengine` 6.12.0.
- The report's record names the national file, `populace_us_2024.h5@populace-us-2024-spm-20260915`. Its $657.4m matches our 2.2.1 run on the local-area file (`data/massachusetts_reform_221.json`, $657,356,800), and `policyengine.py` 6.12.0 selects that file for state regions. We haven't resolved which file the run read, so the notes compare releases and name no file for Build.

## Axiom

- Axiom publishes `us-ga/policies/dfcs/snap/3612.yaml` in `TheAxiomFoundation/rulespec-us` under CC BY 4.0.
- Axiom publishes `axiom-rules-engine` under an MIT license.
- We captured slide 15's graph from axiom.org/app?compose=us-ga:policies/dfcs/snap/3612 on November 5, 2026, and read the rule behind its caption in `3612.yaml`: `earned_income_deduction_allowed` tests `total_countable_gross_earned_income > 0` and not `assistance_unit_failed_to_report_earned_income_timely`, and `earned_income_deduction` multiplies the rate by that income.
- Georgia's Division of Family and Children Services publishes the rule text and December 2019 effective date in its public SNAP manual (pamms.dhs.ga.gov/dfcs/snap/3612).
