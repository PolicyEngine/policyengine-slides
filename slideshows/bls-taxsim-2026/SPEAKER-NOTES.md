# BLS TAXSIM seminar: draft slide text and speaker notes

21 slides: 60 minutes presenting, followed by a dedicated 30-minute Q&A slide.

Based on the September 2025 CRS TAXSIM section, PWBM 2026 validation material, and IARIW 2026 imputation/calibration material in this repository.

## Before presenting

- Add a fresh, versioned comparison chart to the validation section, replacing equivalent speaking time. Slide 12 now includes the historical pension-allocation example from issue #669. The earlier 99.9%+ claim is intentionally omitted because its benchmark definition was incomplete.
- Prepare the synthetic demo input and saved outputs. The draft includes the earlier website screenshot, not a tested live demo.
- Confirm the CE-specific benefit methodology and pilot scope. These sections describe proposed research choices rather than a completed CE implementation.

## 1. Tax and benefit imputation for the CE (0–1 min)

- PolicyEngine’s TAXSIM emulator and beyond
- Max Ghenis and Pavel Makarchuk
- BLS seminar · October 8, 2026

Introduce the speakers and thank the BLS hosts and the CE team.

## 2. Today’s discussion (1–2 min)

- Introduction and context   10 min — Why this matters for CE, how PolicyEngine works, and the NBER collaboration.
- Emulator package and workflow   15 min — How TAXSIM inputs become outputs, with package features and reproducible workflows.
- Validation and demonstration   20 min — How we investigate differences between models, followed by an end-to-end demo.
- Benefit imputation   10 min — Methods for missing survey inputs, SNAP participation, and Medicaid valuation.
- A possible CE pilot   5 min — A focused comparison, the inputs it needs, and questions for CE staff.
- Q&A and discussion   30 min — Questions on the methods, implementation, and opportunities for collaboration.

The first five sections total 60 minutes. Lead with the TAXSIM emulator and its validation, the central focus of the CE tax-imputation discussion. Introduce benefit imputation afterward as an extension requiring additional data and methodological choices. Reserve 30 minutes for Q&A.

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

- An open-source emulator built around the TAXSIM interface
- Development with guidance from Dan Feenberg
- Comparisons that help investigate both models
- Continuity for researchers using TAXSIM workflows

Adapt the institutional context from the CRS presentation without repeating undated status claims. Discuss the motivation for preserving a familiar research interface. Source: PolicyEngine at the Congressional Research Service, September 10, 2025, slides 23–25. https://www.policyengine.org/us/research/policyengine-nber-mou-taxsim

## 6. How TAXSIM fields map into PolicyEngine (10–13 min)

The adapter translates person and tax-unit inputs, then returns familiar TAXSIM output names.

| TAXSIM field | Meaning | PolicyEngine mapping |
| --- | --- | --- |
| pwages / swages | Primary / spouse wages | employment_income for each person |
| page / sage | Primary / spouse ages | age for each person |
| fiitax | Federal income tax output | income_tax |
| siitax | State income tax output | state_income_tax |



A compatible file format makes integration easier. Correct entity construction and output definitions still matter.


Concrete mappings checked against local commit 29da68f4: core/input_mapper.py maps pwages and swages separately to person employment_income, and page and sage to age. config/variable_mappings.yaml maps fiitax to income_tax and siitax to state_income_tax. Show that a field name is only one part of the contract: person assignment, period and output conventions also matter. Source: https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/core/input_mapper.py and https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/config/variable_mappings.yaml

## 7. An R workflow using existing input files (13–16 min)

After package installation and one-time setup, the R wrapper accepts a data frame and returns tax results.

```r
library(policyenginetaxsim)

inputs <- read.csv("tax_units.csv")
results <- policyengine_calculate_taxes(inputs)

write.csv(results, "tax_results.csv",
          row.names = FALSE)
```

The package documentation also provides compare_with_taxsim(inputs) for comparison runs.

Keep the input file, software versions and run options with the output.


This is a documented workflow example, not a completed run on CE data. Explain setup_policyengine() as the one-time environment setup after installation. Show the flat-file read, calculation and export. Avoid reading the code line by line. The key research point is that the input and output can stay within an existing R workflow. Version pinning and configuration belong with the run record. Source: https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/r-package/policyenginetaxsim/README.md

## 8. Year coverage and model routing (16–18 min)

- The documented workflow routes 2021 onward to PolicyEngine
- Earlier years use TAXSIM35 through the same interface
- Model coverage and software dependencies still differ by year
- A research run should record which engine handled each year

Explain year stitching. Do not imply that all historical years run natively in PolicyEngine. The exact years required by CE are a scoping question. Source: https://github.com/PolicyEngine/policyengine-taxsim and https://github.com/PolicyEngine/policyengine-taxsim/blob/main/CHANGELOG.md

## 9. Reproducible research runs (18–21 min)

- Keep the original input file and variable definitions
- Record emulator and model versions
- Save options, output files and diagnostic logs
- Re-run a fixed comparison sample after updates

Suggested practice for a CE pilot. Distinguish package capabilities from the proposed research protocol. Explain why a pinned environment is useful when policy code changes. Source: https://github.com/PolicyEngine/policyengine-taxsim and https://github.com/PolicyEngine/policyengine-taxsim/blob/main/CHANGELOG.md

## 10. Input conventions can change the result (21–25 min)



| Input decision | Why it matters | Check before comparison |
| --- | --- | --- |
| State codes | TAXSIM and FIPS use different code systems | TAXSIM 31 = NJ; FIPS 34 = NJ |
| Income ownership | Some rules depend on the recipient’s characteristics | Assign income to the relevant person |
| Dependent details | Ages and relationships affect modeled treatment | Inspect the constructed tax unit |
| Missing values | Defaults can silently become assumptions | Distinguish missing from a true zero |



In the TAXSIM code system, 34 means North Carolina. A valid numeric code can still identify the wrong state.


Use New Jersey as a concrete example of a schema mismatch. The TAXSIM SOI state code is 31, while the Census FIPS code is 34. In TAXSIM, 34 means North Carolina. These mappings appear in core/utils.py and the YAML generator uses FIPS for PolicyEngine test data. This is a code-system explanation, not a claim that CE has made this error. Then connect income ownership to the later pension-allocation case. Source: https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/core/utils.py

## 11. Validation at several levels (25–28 min)

- Tests of individual rules and edge cases
- Identical inputs run through both calculators
- Differences examined by year, state and household type
- Policy-source checks to explain disagreements

Adapt the validation structure from PWBM and CRS. Cross-model agreement measures consistency, while source-based checks help assess correctness. A shared error can survive a comparison. Source: policyengine-slides/slideshows/pwbm-2026/slides/ValidationSlide.tsx. Source: PolicyEngine at the Congressional Research Service, September 10, 2025, slides 23–25.

## 12. Case study: assigning pension income (28–31 min)

Issue #669 documented a comparison in which pension allocation between partners differed.

| Comparison choice | Why it changed the interpretation |
| --- | --- |
| PolicyEngine behavior reported in the issue | Split the pension income between partners. |
| Comparison setup | The TaxAct input assigned the pension to the older partner. |
| TAXSIM convention described by Feenberg | Allocation depended on whether partners were on different sides of age 65. |
| Lesson for validation | Match person-level assumptions before attributing a difference to policy rules. |



The same household total can produce a different comparison when income belongs to different people.


This is a historical example, not a claim about current behavior. Feenberg’s issue describes pension and Social Security allocation and requests discussion of the convention. The issue is now closed, but the available issue text does not establish a particular implemented resolution. Do not claim a specific fix or performance result. Explain the diagnosis: examine the person-level inputs before the tax formula. For survey applications, observed ownership is preferable where available; otherwise the convention must be documented. Source: https://github.com/PolicyEngine/policyengine-taxsim/issues/669, checked September 22, 2026.

## 13. What a match rate does and does not show (31–34 min)

The comparator defaults to a $15 absolute tolerance for federal and state tax, with zero relative tolerance.

| Measure | What to report |
| --- | --- |
| Agreement | Share of valid records within the stated tolerance |
| Error size | Absolute differences, tails and weighted aggregate differences |
| Coverage | Tax years, states, outputs and household characteristics |
| Exceptions | Missing outputs, explained conventions and unresolved cases |



A match within $15 is not exact equality. The tolerance, sample and options belong beside the headline rate.


Checked against local commit 29da68f4. ComparatorConfig defaults federal_tolerance and state_tolerance to 15, relative_tolerance to zero. The matching logic uses np.isclose with rtol=0. Optional settings include income-scaled tolerances and state rebate treatment. The implementation uses equal_nan=True, so any published analysis must audit missing outputs separately rather than interpreting matched missing values as validated calculations. This slide does not assert an observed agreement rate. Source: https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/policyengine_taxsim/comparison/comparator.py

## 14. Demonstration: one file, traceable results (34–42 min)


Use a synthetic file prepared for the seminar. Show the inputs, run the emulator, identify federal and state outputs, then examine one household in the comparison workflow. Explain versions and the tolerance used. The screenshot is an existing PWBM deck asset, not a fresh benchmark run. If live execution fails, walk through saved input and output files. Source: policyengine-slides/slideshows/pwbm-2026/slides/ValidationSlide.tsx. Source: https://github.com/PolicyEngine/policyengine-taxsim and https://github.com/PolicyEngine/policyengine-taxsim/blob/main/CHANGELOG.md

## 15. Where this could fit in CE research (42–45 min)

- Begin with an agreed set of tax-imputation inputs
- Run both calculators on the same records
- Compare household results and weighted summaries
- Review differences before expanding the scope

This is a proposed integration path, not a representation of a tested CE implementation. Ask staff which parts of their current workflow could supply the comparison inputs. Preserve existing CE definitions and weights in the initial comparison.

## 16. Eligibility, receipt and benefit value (45–48 min)



| Question | Output | Research choice |
| --- | --- | --- |
| Does the unit qualify? | Eligibility indicator | Program unit and observed inputs |
| How much could it receive? | Potential benefit amount | Apply the rules for the relevant period |
| Does it participate? | Observed or imputed receipt | Participation evidence or assumptions |
| How does it enter resources? | A defined monetary measure | Program-specific valuation |



Illustration: $240 potential monthly benefit × 60% assumed participation = $144 expected receipt. These are hypothetical values, not a household entitlement.


The numerical example is invented only to distinguish potential benefits from expected receipt. It is not a SNAP calculation or a measured take-up rate. In a binary participation simulation, the household receives either zero or the modeled amount; the product is an expected value across uncertainty or comparable households. Medicaid requires a separately defined monetary valuation. Do not add a Medicaid eligibility indicator directly to dollar resources. Source: methodological distinctions developed for this seminar.

## 17. Imputing a distribution of missing inputs (48–51 min)

Quantile regression forests estimate conditional distributions of missing variables using characteristics shared across surveys.

| Step | What the researcher does |
| --- | --- |
| Harmonize | Align concepts, units and reference periods across surveys. |
| Learn | Use shared characteristics to estimate the distribution of a missing variable. |
| Draw | Sample plausible values rather than assigning every household the predicted mean. |
| Evaluate | Check held-out distributions and sensitivity across repeated imputations. |



For CE, donor choice and shared predictors would need an explicit assessment before transferring the method.


A donor survey observes the variable of interest and predictors shared with the recipient survey. A conditional distribution permits households with similar observed characteristics to have different imputed values. That can matter around tax-benefit thresholds. Multiple draws can reveal sensitivity, but they do not automatically solve model misspecification or preserve every joint relationship. The prior deck names CPS, ACS, SCF, SIPP and tax microdata. This slide does not claim a CE implementation exists. Source: local IARIW 2026 ImputationSlide.tsx.

## 18. SNAP and Medicaid in a resource measure (51–53 min)



| Choice | SNAP | Medicaid |
| --- | --- | --- |
| Modeled result | Eligibility and potential allotment | Eligibility for coverage |
| Receipt | Reported receipt or modeled participation | Reported enrollment or modeled participation |
| Monetary measure | Benefit amount over the chosen period | A separately specified value of coverage |
| Validation | Recipient counts and benefit amounts | Enrollment and the selected valuation benchmark |



The research question determines the resource concept. Eligibility alone does not identify actual receipt or a monetary value.


Use this comparison to explain why benefit imputation contains more than a call to an eligibility calculator. Establish whether CE research seeks potential entitlements, actual receipt, or a broader resource measure. For Medicaid, costs, insurance value and household valuation are different concepts; this draft does not select one. No numerical benefit estimates are asserted.

## 19. Validation of benefit imputations (53–55 min)

- Compare receipt and amounts with suitable external benchmarks
- Examine errors across household groups
- Use holdout data and alternative assumptions where feasible
- Treat calibration and independent validation separately

The prior IARIW deck describes calibration of household weights to administrative totals. Explain that fitting a target is not independent validation against that target. CE weight changes would be a separate methodological decision, not a prerequisite for the initial tax comparison. Source: policyengine-slides/slideshows/iariw-2026/slides/ImputationSlide.tsx and CalibrationSlide.tsx.

## 20. A manageable CE pilot (55–60 min)

- Agree one year, one sample and the key tax outputs
- Document input mappings and missing-data assumptions
- Produce a reproducible comparison and discrepancy log
- Scope one benefit extension after reviewing the tax results

Proposed next steps for discussion. Seek clarity on the relevant year, available inputs, computing environment and who will review discrepancies. Avoid proposing a firm timeline before those constraints are known.

## 21. Q&A and discussion (60–90 min)

- Which outcomes and years would be most useful?
- Which input assumptions create the most uncertainty?
- What evidence would support a broader evaluation?
- Which benefit extension would answer a concrete research question?

Use the separate 30-minute discussion for questions on the methods and potential CE collaboration. Resources: https://policyengine.org/us/taxsim and https://github.com/PolicyEngine/policyengine-taxsim.

