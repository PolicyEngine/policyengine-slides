# BLS TAXSIM seminar: draft slide text and speaker notes

23 slides: 60 minutes presenting, followed by a dedicated 30-minute Q&A slide.

Based on the September 2025 CRS TAXSIM section, PWBM 2026 validation material, IARIW 2026 imputation/calibration material in this repository, and the PolicyEngine TAXSIM site (policyengine.org/us/taxsim), captured October 5, 2026.

## Before presenting

- Rehearse the live demo (slide 11) and the live dashboard (slide 13) on the presentation laptop and the BLS network. Confirm that both frames load. If they do not, open the pages in a browser tab; slides 10 and 14 hold captures of the same pages.
- On the morning of the talk, check the dashboard figures on slide 13 (2023: 111,347 households, 89.8% federal and 94.9% state agreement within ±1% of gross income, data of September 23, 2026). Update the side column if the live page has changed.
- Confirm the current explanation for the New York state-tax divergence (slide 14) before you show it. The earlier 99.9%+ claim stays omitted because its benchmark definition was incomplete.
- Confirm the CE-specific benefit methodology and pilot scope. These sections describe proposed research choices rather than a completed CE implementation.

# Introduction and context

## 1. Tax and benefit imputation for the CE (0–1 min)

- PolicyEngine’s TAXSIM emulator and beyond
- Max Ghenis and Pavel Makarchuk
- BLS seminar · October 8, 2026

Introduce the speakers and thank the BLS hosts and the CE team.

## 2. Today’s discussion (1–2 min)

- Introduction and context   10 min — Why this matters for CE, how PolicyEngine works, and the NBER collaboration.
- The emulator and its core assumptions   12 min — A drop-in TAXSIM interface, field mappings, input conventions and year coverage.
- Live demonstration   8 min — A TAXSIM-format file run in the browser, from input rows to federal and state tax.
- Validation   15 min — The public validation dashboard, what a match rate shows, and how we investigate differences.
- Benefit imputation   10 min — Methods for missing survey inputs, SNAP participation, and Medicaid valuation.
- A possible CE pilot   5 min — A focused comparison, the inputs it needs, and questions for CE staff.
- Q&A and discussion   30 min — Questions on the methods, implementation, and opportunities for collaboration.

The first six sections total 60 minutes. Cover the emulator’s core assumptions first, then run the live demo, then show the validation evidence. Introduce benefit imputation afterward as an extension requiring additional data and methodological choices. Reserve 30 minutes for Q&A.

## 3. The CE research opportunity (2–4 min)

- Calculate taxes using a familiar input format
- Examine how assumptions affect household resources
- Explore methods for adding in-kind benefits
- Start with a bounded research comparison

Present these as opportunities for discussion, not commitments or claims about CE’s current production system.

## 4. PolicyEngine separates rules from survey data (4–7 min)

| Layer | What it contributes | Example |
| --- | --- | --- |
| Household data | People, relationships and financial inputs | Ages, earnings, dependents |
| Policy rules | Dated parameters and calculation formulas | Tax brackets and credit formulas |
| Calculation | Apply the rules to a specified household | Tax liability or potential benefits |
| Research assumptions | Choices needed when information is missing | Participation and income allocation |

The same policy model can serve different datasets. The data mapping and assumptions need their own validation.

Explain the four layers using a household with two adults and a child. The household record supplies ages and income. The rules supply the year-specific calculation. Missing data and program participation require additional choices. PolicyEngine’s TAXSIM adapter translates one input schema into the model’s entities; it does not remove these methodological choices. Source: https://github.com/PolicyEngine/policyengine-us and the previous IARIW overview.

## 5. The NBER collaboration (7–10 min)

Screenshot: `public/screenshots/bls-taxsim-2026/taxsim-validated-by.png` (from https://www.policyengine.org/us/taxsim)

Built under a memorandum of understanding with NBER and TAXSIM creator Daniel Feenberg. The Atlanta Fed’s Policy Rules Database adds a third model for cross-checks.

Adapt the institutional context from the CRS presentation without repeating undated status claims. Discuss the motivation for preserving a familiar research interface. The screenshot shows the partner section of the TAXSIM site, captured October 5, 2026; its Read more links lead to the MOU announcement and the Atlanta Fed comparison. Source: PolicyEngine at the Congressional Research Service, September 10, 2025, slides 23–25. https://www.policyengine.org/us/research/policyengine-nber-mou-taxsim

# The emulator and its core assumptions

## 6. A drop-in replacement for TAXSIM35 (10–13 min)

Screenshot: `public/screenshots/bls-taxsim-2026/taxsim-drop-in-r.png` (from https://www.policyengine.org/us/taxsim)

Existing scripts keep their input files. In R, taxsim_calculate_taxes() becomes policyengine_calculate_taxes(). The site shows the same swap for the CLI, Python, Stata, SAS and Julia.

The site shows the before-and-after swap for six environments; the capture shows the R tab. After installation, setup_policyengine() is a one-time environment setup in R, and the R package also provides compare_with_taxsim(inputs) for comparison runs. Ask CE staff which environment their current tax-imputation code uses. This is a documented workflow, not a completed run on CE data. Source: https://www.policyengine.org/us/taxsim (captured October 5, 2026) and https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/r-package/policyenginetaxsim/README.md

## 7. How TAXSIM fields map into PolicyEngine (13–16 min)

The adapter translates person and tax-unit inputs, then returns familiar TAXSIM output names.

| TAXSIM field | Meaning | PolicyEngine mapping |
| --- | --- | --- |
| pwages / swages | Primary / spouse wages | employment_income for each person |
| page / sage | Primary / spouse ages | age for each person |
| fiitax | Federal income tax output | income_tax |
| siitax | State income tax output | state_income_tax |

A compatible file format makes integration easier. Correct entity construction and output definitions still matter.

Concrete mappings checked against local commit 29da68f4: core/input_mapper.py maps pwages and swages separately to person employment_income, and page and sage to age. config/variable_mappings.yaml maps fiitax to income_tax and siitax to state_income_tax. Show that a field name is only one part of the contract: person assignment, period and output conventions also matter. Source: https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/core/input_mapper.py and https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/config/variable_mappings.yaml

## 8. Input conventions can change the result (16–19 min)

| Input decision | Why it matters | Check before comparison |
| --- | --- | --- |
| State codes | TAXSIM and FIPS use different code systems | TAXSIM 31 = NJ; FIPS 34 = NJ |
| Income ownership | Some rules depend on the recipient’s characteristics | Assign income to the relevant person |
| Dependent details | Ages and relationships affect modeled treatment | Inspect the constructed tax unit |
| Missing values | Defaults can silently become assumptions | Distinguish missing from a true zero |

In the TAXSIM code system, 34 means North Carolina. A valid numeric code can still identify the wrong state.

Use New Jersey as a concrete example of a schema mismatch. The TAXSIM SOI state code is 31, while the Census FIPS code is 34. In TAXSIM, 34 means North Carolina. These mappings appear in core/utils.py and the YAML generator uses FIPS for PolicyEngine test data. This is a code-system explanation, not a claim that CE has made this error. Then connect income ownership to the later pension-allocation case. Source: https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/core/utils.py

## 9. Year coverage and reproducible runs (19–22 min)

- 2021 onward runs in PolicyEngine; earlier years use TAXSIM35
- Record which engine handled each year
- Pin the emulator and model versions for each run
- Keep the input file, options and logs with the output

Explain year stitching. Do not imply that all historical years run natively in PolicyEngine. The exact years required by CE are a scoping question. Distinguish package capabilities from the proposed research protocol, and explain why a pinned environment is useful when policy code changes. Source: https://github.com/PolicyEngine/policyengine-taxsim and https://github.com/PolicyEngine/policyengine-taxsim/blob/main/CHANGELOG.md

# Live demonstration

## 10. The demo file: three households (22–23 min)

Screenshot: `public/screenshots/bls-taxsim-2026/taxsim-run-sample.png` (from https://www.policyengine.org/us/taxsim/run)

The built-in sample uses TAXSIM state codes: 5 is California, 33 is New York and 44 is Texas. The same file runs with the policyengine-taxsim command.

Bridge into the live demo. Read one row aloud: household 1 is a married couple filing jointly (mstat 2) in California with two dependents and $80,000 and $50,000 in wages. Point to the state codes and connect them to the input-conventions slide. This capture is also the fallback if the live frame does not load. Captured October 5, 2026.

## 11. Live demo: run the sample file (23–30 min)

Live page: https://www.policyengine.org/us/taxsim/run

1. Load the 3-household sample
2. Keep Standard output: federal and state tax, FICA and marginal rates
3. Run and download in the browser
4. Read the results for each household
5. Switch to Full for AGI, credits, deductions and AMT

No installation needed. The same file runs with the policyengine-taxsim command.

Start the live demo here: after the core assumptions and before validation. Click inside the frame to use the page. The frame keeps keyboard focus, so click the slide title before you press the arrow keys again. Use Expand for a larger view. Do not use the email form. Run and download in browser saves a CSV on the presentation laptop; open it to show the results for each household. Rehearse on the presentation laptop and network: confirm that the frame loads and note how long the run takes. If the frame does not load, open policyengine.org/us/taxsim/run in a browser tab, or go back one slide to the capture.

# Validation

## 12. Validation at several levels (30–32 min)

- Tests of individual rules and edge cases
- Identical inputs run through both calculators
- Differences examined by year, state and household type
- Policy-source checks to explain disagreements

Adapt the validation structure from PWBM and CRS. Cross-model agreement measures consistency, while source-based checks help assess correctness. A shared error can survive a comparison. Source: policyengine-slides/slideshows/pwbm-2026/slides/ValidationSlide.tsx. Source: PolicyEngine at the Congressional Research Service, September 10, 2025, slides 23–25.

## 13. The public validation dashboard (32–37 min)

Live page: https://www.policyengine.org/us/taxsim/dashboard

- Households, 2023: 111,347
- Federal agreement: 89.8%
- State agreement: 94.9%

1. Switch tolerance: ±$15, ±1% of income, net of rebates
2. Change the tax year, 2021 to 2025
3. Inspect a state to list its households

Within ±1% of gross income. PolicyEngine US 2.6.17, data of September 23, 2026.

The dashboard runs 111,347 Enhanced CPS households through both engines. For 2023, under the ±1% of gross income tolerance, 89.8% agree on federal tax and 94.9% on state tax (data update of September 23, 2026, PolicyEngine US 2.6.17). Switch to ±$15 to show how much the headline depends on the tolerance. Then change the year and inspect a state. Check the figures on the morning of the talk, because the live page can update. Click the slide title before you press the arrow keys. If the frame does not load, the next slide has a capture.

## 14. Inspecting a state that diverges (37–39 min)

Screenshot: `public/screenshots/bls-taxsim-2026/taxsim-dashboard-ny.png` (from https://www.policyengine.org/us/taxsim/dashboard)

New York, 2023: 91.4% federal and 67.4% state agreement within ±1% of gross income. Inspect lists each household’s difference, so we can trace the cause.

The dashboard flags states that diverge so that we can investigate them. Do not speculate about the cause of the New York state-tax gap; confirm the current explanation before the talk. The same view also flags Montana (42.1%) and Arkansas (55.3%) state agreement. Connect this to the next slide: a headline rate needs its tolerance and sample beside it. Captured October 5, 2026, from the September 23, 2026 data update.

## 15. What a match rate does and does not show (39–42 min)

The dashboard offers ±$15, ±1% of gross income and ±1% net of rebates. The comparator’s default is ±$15.

| Measure | What to report |
| --- | --- |
| Agreement | Share of valid records within the stated tolerance |
| Error size | Absolute differences, tails and weighted aggregate differences |
| Coverage | Tax years, states, outputs and household characteristics |
| Exceptions | Missing outputs, explained conventions and unresolved cases |

Agreement within a tolerance is not exact equality. Report the tolerance, year, sample and versions beside every headline rate.

The dashboard’s default view uses ±1% of gross income. Checked against local commit 29da68f4: ComparatorConfig defaults federal_tolerance and state_tolerance to 15, relative_tolerance to zero. The matching logic uses np.isclose with rtol=0. Optional settings include income-scaled tolerances and state rebate treatment. The implementation uses equal_nan=True, so any published analysis must audit missing outputs separately rather than interpreting matched missing values as validated calculations. Source: https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/comparison/comparator.py

## 16. Case study: assigning pension income (42–45 min)

Issue #669 documented a comparison in which pension allocation between partners differed.

| Comparison choice | Why it changed the interpretation |
| --- | --- |
| PolicyEngine behavior reported in the issue | Split the pension income between partners. |
| Comparison setup | The TaxAct input assigned the pension to the older partner. |
| TAXSIM convention described by Feenberg | Allocation depended on whether partners were on different sides of age 65. |
| Lesson for validation | Match person-level assumptions before attributing a difference to policy rules. |

The same household total can produce a different comparison when income belongs to different people.

This is a historical example, not a claim about current behavior. Feenberg’s issue describes pension and Social Security allocation and requests discussion of the convention. The issue is now closed, but the available issue text does not establish a particular implemented resolution. Do not claim a specific fix or performance result. Explain the diagnosis: examine the person-level inputs before the tax formula. For survey applications, observed ownership is preferable where available; otherwise the convention must be documented. Source: https://github.com/PolicyEngine/policyengine-taxsim/issues/669, checked September 22, 2026.

# Benefit imputation

## 17. Eligibility, receipt and benefit value (45–48 min)

| Question | Output | Research choice |
| --- | --- | --- |
| Does the unit qualify? | Eligibility indicator | Program unit and observed inputs |
| How much could it receive? | Potential benefit amount | Apply the rules for the relevant period |
| Does it participate? | Observed or imputed receipt | Participation evidence or assumptions |
| How does it enter resources? | A defined monetary measure | Program-specific valuation |

Illustration: $240 potential monthly benefit × 60% assumed participation = $144 expected receipt. These are hypothetical values, not a household entitlement.

The numerical example is invented only to distinguish potential benefits from expected receipt. It is not a SNAP calculation or a measured take-up rate. In a binary participation simulation, the household receives either zero or the modeled amount; the product is an expected value across uncertainty or comparable households. Medicaid requires a separately defined monetary valuation. Do not add a Medicaid eligibility indicator directly to dollar resources. Source: methodological distinctions developed for this seminar.

## 18. Imputing a distribution of missing inputs (48–51 min)

Quantile regression forests estimate conditional distributions of missing variables using characteristics shared across surveys.

| Step | What the researcher does |
| --- | --- |
| Harmonize | Align concepts, units and reference periods across surveys. |
| Learn | Use shared characteristics to estimate the distribution of a missing variable. |
| Draw | Sample plausible values rather than assigning every household the predicted mean. |
| Evaluate | Check held-out distributions and sensitivity across repeated imputations. |

For CE, donor choice and shared predictors would need an explicit assessment before transferring the method.

A donor survey observes the variable of interest and predictors shared with the recipient survey. A conditional distribution permits households with similar observed characteristics to have different imputed values. That can matter around tax-benefit thresholds. Multiple draws can reveal sensitivity, but they do not automatically solve model misspecification or preserve every joint relationship. The prior deck names CPS, ACS, SCF, SIPP and tax microdata. This slide does not claim a CE implementation exists. Source: local IARIW 2026 ImputationSlide.tsx.

## 19. SNAP and Medicaid in a resource measure (51–53 min)

| Choice | SNAP | Medicaid |
| --- | --- | --- |
| Modeled result | Eligibility and potential allotment | Eligibility for coverage |
| Receipt | Reported receipt or modeled participation | Reported enrollment or modeled participation |
| Monetary measure | Benefit amount over the chosen period | A separately specified value of coverage |
| Validation | Recipient counts and benefit amounts | Enrollment and the selected valuation benchmark |

The research question determines the resource concept. Eligibility alone does not identify actual receipt or a monetary value.

Use this comparison to explain why benefit imputation contains more than a call to an eligibility calculator. Establish whether CE research seeks potential entitlements, actual receipt, or a broader resource measure. For Medicaid, costs, insurance value and household valuation are different concepts; this draft does not select one. No numerical benefit estimates are asserted.

## 20. Validation of benefit imputations (53–55 min)

- Compare receipt and amounts with suitable external benchmarks
- Examine errors across household groups
- Use holdout data and alternative assumptions where feasible
- Treat calibration and independent validation separately

The prior IARIW deck describes calibration of household weights to administrative totals. Explain that fitting a target is not independent validation against that target. CE weight changes would be a separate methodological decision, not a prerequisite for the initial tax comparison. Source: policyengine-slides/slideshows/iariw-2026/slides/ImputationSlide.tsx and CalibrationSlide.tsx.

# A possible CE pilot

## 21. Where this could fit in CE research (55–57 min)

- Begin with an agreed set of tax-imputation inputs
- Run both calculators on the same records
- Compare household results and weighted summaries
- Review differences before expanding the scope

This is a proposed integration path, not a representation of a tested CE implementation. Ask staff which parts of their current workflow could supply the comparison inputs. Preserve existing CE definitions and weights in the initial comparison.

## 22. A manageable CE pilot (57–60 min)

- Agree one year, one sample and the key tax outputs
- Document input mappings and missing-data assumptions
- Produce a reproducible comparison and discrepancy log
- Scope one benefit extension after reviewing the tax results

Proposed next steps for discussion. Seek clarity on the relevant year, available inputs, computing environment and who will review discrepancies. Avoid proposing a firm timeline before those constraints are known.

## 23. Q&A and discussion (60–90 min)

- Which outcomes and years would be most useful?
- Which input assumptions create the most uncertainty?
- What evidence would support a broader evaluation?
- Which benefit extension would answer a concrete research question?

- [policyengine.org/us/taxsim](https://www.policyengine.org/us/taxsim)
- [policyengine.org/us/taxsim/run](https://www.policyengine.org/us/taxsim/run)
- [policyengine.org/us/taxsim/dashboard](https://www.policyengine.org/us/taxsim/dashboard)
- [github.com/PolicyEngine/policyengine-taxsim](https://github.com/PolicyEngine/policyengine-taxsim)

Use the separate 30-minute discussion for questions on the methods and potential CE collaboration. The links on the slide open the TAXSIM site, the web runner, the validation dashboard and the source code.
