# BLS TAXSIM seminar: slide text and speaker notes

22 slides: 60 minutes presenting, followed by a dedicated 30-minute Q&A slide.

Based on the September 2025 CRS TAXSIM section, PWBM 2026 validation material, IARIW 2026 imputation/calibration material in this repository, and the PolicyEngine TAXSIM site (policyengine.org/us/taxsim), captured October 5, 2026.

## Before presenting

- Rehearse the live demo (slide 12) and the live dashboard (slide 14) on the presentation laptop and the BLS network. Confirm that both frames load. If a frame does not load, open the page in a browser tab; slide 11 holds a capture of the demo file.
- On the morning of the talk, open the dashboard and check that it loads. Its headline figures are in the notes for slide 13 for questions (2023: 89.8% federal and 94.9% state agreement within ±1% of gross income, data of September 23, 2026).
- Confirm the CE-specific benefit methodology and pilot scope. These sections describe proposed research choices rather than a completed CE implementation.

# Introduction and context

## 1. Tax and benefit imputation for the CE (0–1 min)

- PolicyEngine’s TAXSIM emulator and beyond
- Max Ghenis, Pavel Makarchuk and David Trimmer
- BLS seminar · October 8, 2026

Introduce the speakers and thank the BLS hosts and the CE team.

## 2. Today’s discussion (1–2 min)

- Introduction and context — What PolicyEngine is, who uses it, and the NBER collaboration.
- The emulator and its core assumptions — A drop-in TAXSIM interface, how a record becomes a result, preparing survey inputs, and year coverage.
- Live demonstration — A TAXSIM-format file run in the browser, from input rows to federal and state tax.
- Validation — How we compare the two engines, the public dashboard, and how a reported difference becomes a fix.
- Benefit imputation — Methods for missing survey inputs, SNAP participation, and Medicaid valuation.
- A possible CE pilot — A focused comparison, the inputs it needs, and questions for CE staff.
- Q&A and discussion — Questions on the methods, implementation, and opportunities for collaboration.

The first six sections total 60 minutes. Cover the emulator’s core assumptions first, then run the live demo, then give an overview of the validation process. Introduce benefit imputation afterward as an extension requiring additional data and methodological choices. Reserve 30 minutes for Q&A.

## 3. PolicyEngine: free, open-source microsimulation (2–5 min)

- Rules: federal and state taxes and major benefit programs
- Households: survey data enhanced and calibrated, or any household you enter
- Reforms: change any parameter and see the cost, poverty and distributional effects

Give the one-minute version of PolicyEngine: an open-source rules engine, a household dataset built from public surveys, and a way to score reforms. Keep the focus on the rules and the household data, because the TAXSIM emulator uses the same rules engine. The rules and the survey data are separate, so the same rules can serve any dataset. The TAXSIM adapter maps one input format into the model’s households, but it does not remove the research choices about missing data and participation; the emulator section covers those. Adapted from the cpid-webinar-2026 deck (September 2026).

## 4. PolicyEngine today (5–6 min)

- 95,000+ parameters, 5,500+ variables and 4,693 test files in the US model
- Public code since June 2021, with 133 contributors to the US model
- NBER, the Atlanta Fed and No 10 Downing Street work with the models

Use the numbers to show scale and testing, not to sell. The NBER memorandum of understanding is the reason the TAXSIM emulator exists; the next section covers it. Figures from the gettsim-2026 deck (September 3, 2026); check them before the talk if you quote them.

## 5. Researchers and developers build with these rules (6–7 min)

- Federal partners and users: NBER, the Atlanta Fed, BEA and the Joint Economic Committee
- Research institutions: Brookings, AEI, Niskanen, CRFB, Georgetown and USC
- Benefit navigators: MyFriendBen, Amplifi, Mirza and Starlight

Point out the federal statistical and research users, such as BEA and the Atlanta Fed, because they are closest to the CE team’s work. Adapted from the cpid-webinar-2026 deck (September 2026).

## 6. The NBER collaboration (7–10 min)

Screenshot: `public/screenshots/bls-taxsim-2026/taxsim-nber-card.png` (from https://www.policyengine.org/us/taxsim)

- **Tax years 2021 onward.** PolicyEngine and TAXSIM compared side by side
- **Federal and state.** Income tax models compared

The comparison work led to a formal partnership with NBER.

Adapt the institutional context from the CRS presentation without repeating undated status claims. Discuss the motivation for preserving a familiar research interface. Context for this audience: since the 2013 data, the CE has used NBER’s TAXSIM to estimate income taxes for most households (BLS Monthly Labor Review, 2015, https://www.bls.gov/opub/mlr/2015/article/improving-data-quality-in-ce-with-taxsim.htm). We compare PolicyEngine and TAXSIM for federal and state income tax in tax years 2021 onward; the TAXSIM site says this work led to the formal partnership. The card is from the TAXSIM site, captured October 5, 2026; its Read more link leads to the MOU announcement. Source: PolicyEngine at the Congressional Research Service, September 10, 2025, slides 23–25. https://www.policyengine.org/us/research/policyengine-nber-mou-taxsim

# The emulator and its core assumptions

## 7. A drop-in replacement for TAXSIM35 (10–13 min)

Screenshot: `public/screenshots/bls-taxsim-2026/taxsim-drop-in-r.png` (from https://www.policyengine.org/us/taxsim)

Existing scripts keep their input files. In R, taxsim_calculate_taxes() becomes policyengine_calculate_taxes(). The site shows the same swap for the CLI, Python, Stata, SAS and Julia.

The site shows the before-and-after swap for six environments; the capture shows the R tab. After installation, setup_policyengine() is a one-time environment setup in R, and the R package also provides compare_with_taxsim(inputs) for comparison runs. Ask CE staff which environment their current tax-imputation code uses. This is a documented workflow, not a completed run on CE data. Source: https://www.policyengine.org/us/taxsim (captured October 5, 2026) and https://github.com/PolicyEngine/policyengine-taxsim/blob/29da68f4/r-package/policyenginetaxsim/README.md

## 8. From a TAXSIM record to a result (13–16 min)

- One TAXSIM-format row: a married couple in California, two children, $130,000 in wages
- The adapter builds two adults and two dependents in one joint tax unit
- PolicyEngine returns $8,282 federal and $3,214 California income tax for 2024

Walk through one real record from left to right. The row is household 1 of the web runner’s sample file, with the children’s ages added. The adapter maps pwages and swages to each person’s employment_income and page and sage to age, then returns fiitax (income_tax) and siitax (state_income_tax) in TAXSIM’s output format. fica is the TAXSIM convention: employee and employer payroll tax together (15.3% of $130,000). Point out that the federal tax already nets the $4,000 child tax credit. Run on October 5, 2026 with policyengine-taxsim 3.0.1 and PolicyEngine US 2.25.2; the older local build gave the same numbers.

## 9. Coding choices change the result (16–19 min)

- State code: a New Jersey household coded with the FIPS code is taxed as North Carolina
- Dependent ages: children aged 17 and 19 instead of 8 and 12 raise federal tax by $3,000
- Tax units: the same parents as two returns pay $3,229 less than one joint return

Each panel changes one coding choice for the same people and income; the numbers are real emulator runs. State code: TAXSIM uses its own state codes, where New Jersey is 31; the Census FIPS code for New Jersey is 34, which TAXSIM reads as North Carolina. The run does not fail, it silently applies the wrong state’s law. Dependent ages: at 17 and 19 the children no longer qualify for the $2,000 child tax credit and get the $500 credit for other dependents instead. Tax units: one joint return versus a head-of-household return (with both children and $80,000) plus a single return ($50,000); this is the question of how to form tax units for unmarried parents. Present these as choices CE would make, not as errors CE has made. Run on October 5, 2026 with policyengine-taxsim 3.0.1 and PolicyEngine US 2.25.2.

## 10. Year coverage and reproducible runs (19–22 min)

- One file across 2018–2025: TAXSIM35 handles years before 2021, PolicyEngine handles 2021 onward
- Law changes show up year by year, such as the 2020–21 stimulus payments and the 2021 expanded child tax credit
- Record the input file, versions, options and logs with every run

This is the slide-8 household (California, two children aged 8 and 12, $130,000 in wages) run for eight tax years in one file. The emulator routed 2018–2020 to the bundled TAXSIM35 binary and 2021–2025 to PolicyEngine. Federal tax nets the credits: 2020 includes both rounds of stimulus payments ($3,400 and $2,400), 2021 includes the third round ($5,600) and the expanded $6,000 child tax credit, and 2025 reflects the $2,200-per-child credit. Do not imply that all historical years run natively in PolicyEngine. The exact years CE needs are a scoping question. Run on October 5, 2026 with policyengine-taxsim 3.0.1 and PolicyEngine US 2.25.2.

# Live demonstration

## 11. The demo file: three households (22–23 min)

Screenshot: `public/screenshots/bls-taxsim-2026/taxsim-run-sample.png` (from https://www.policyengine.org/us/taxsim/run)

The built-in sample uses TAXSIM state codes: 5 is California, 33 is New York and 44 is Texas. The same file runs with the policyengine-taxsim command.

Bridge into the live demo. Read one row aloud: household 1 is a married couple filing jointly (mstat 2) in California with two dependents and $80,000 and $50,000 in wages. Point to the state codes and connect them to the slide on preparing survey inputs. This capture is also the fallback if the live frame does not load. Captured October 5, 2026.

## 12. Live demo: run the sample file (23–32 min)

Live page: https://www.policyengine.org/us/taxsim/run

1. Load the 3-household sample
2. Keep Standard output: federal and state tax, FICA and marginal rates
3. Run and download in the browser
4. Read the results for each household
5. Switch to Full for AGI, credits, deductions and AMT

No installation needed. The same file runs with the policyengine-taxsim command.

Start the live demo here: after the core assumptions and before validation. Click inside the frame to use the page. The frame keeps keyboard focus, so click the slide title before you press the arrow keys again. Use Expand for a larger view. Do not use the email form. Run and download in browser saves a CSV on the presentation laptop; open it to show the results for each household. Rehearse on the presentation laptop and network: confirm that the frame loads and note how long the run takes. If the frame does not load, open policyengine.org/us/taxsim/run in a browser tab, or go back one slide to the capture.

# Validation

## 13. How we validate the emulator (32–36 min)

Validation is a repeating process, not a single benchmark.

1. **Run both engines.** The same Enhanced CPS records go through TAXSIM35 and PolicyEngine.
2. **Compare outputs.** Federal and state tax are compared within a stated tolerance.
3. **Flag differences.** Results by year and state show where the engines disagree.
4. **Explain the cause.** Check the inputs and both engines against the law and tax forms.
5. **Fix and publish.** Fixes ship with a test, and the dashboard refreshes.

Each PolicyEngine release and each TAXSIM update starts the loop again.

Present validation as a process, not a single benchmark. Cross-model agreement measures consistency; checks against the law and tax forms decide which engine is right, because a shared error can survive a comparison. If asked for numbers: for 2023, 89.8% of 111,347 Enhanced CPS households agree on federal tax and 94.9% on state tax within ±1% of gross income (dashboard data of September 23, 2026, PolicyEngine US 2.6.17). The headline depends on the tolerance: the dashboard also offers ±$15 and ±1% net of rebates, and the comparator default is ±$15. Source: https://www.policyengine.org/us/taxsim/dashboard and policyengine-slides/slideshows/pwbm-2026/slides/ValidationSlide.tsx.

## 14. The public validation dashboard (36–42 min)

Live page: https://www.policyengine.org/us/taxsim/dashboard

1. Pick a tax year, 2021 to 2025
2. Choose a tolerance
3. See agreement by state
4. Inspect a state to list its households

Enhanced CPS households, both engines. PolicyEngine US 2.6.17, data of September 23, 2026.

Show the dashboard as the output of the process, not as a list of figures. Pick a year, change the tolerance, scroll the state table and inspect one state to show the household list. The headline figures are in the notes for the previous slide if someone asks. Check the page on the morning of the talk, because it can update. Click the slide title before you press the arrow keys. If the frame does not load, open policyengine.org/us/taxsim/dashboard in a browser tab.

## 15. From a reported difference to a fix (42–45 min)

Differences reach us from the dashboard and from public GitHub issues, including issues filed by Dan Feenberg at NBER.

1. **Report.** A difference is logged as a public GitHub issue.
2. **Reproduce.** Rebuild it with a minimal household in both engines.
3. **Classify.** An input question, a PolicyEngine fix, or a possible TAXSIM issue.
4. **Resolve.** Fix the rule or mapping with a test, or document the convention.
5. **Confirm.** Reply on the issue; the next dashboard run shows the change.

Describe the triage process in general terms. The classification decides the next step: an input question gets an explanation of the convention; a PolicyEngine problem gets a code change with a regression test; a possible TAXSIM issue goes back to NBER for confirmation. We check every claimed PolicyEngine error against the statute or tax form before we reply. Source: https://github.com/PolicyEngine/policyengine-taxsim/issues

# Benefit imputation

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

Use this comparison to explain why benefit imputation contains more than a call to an eligibility calculator. Establish whether CE research seeks potential entitlements, actual receipt, or a broader resource measure. For Medicaid, costs, insurance value and household valuation are different concepts; this talk does not select one. No numerical benefit estimates are asserted.

## 19. Validation of benefit imputations (53–55 min)

- **External benchmarks.** Compare imputed receipt and amounts with administrative totals.
- **Errors by group.** Check how errors differ by income, household type and state.
- **Holdout tests.** Test on data held back from estimation, and try alternative assumptions.
- **Calibration is not validation.** A target used to fit the weights cannot also validate them.

The prior IARIW deck describes calibration of household weights to administrative totals. Explain that fitting a target is not independent validation against that target. CE weight changes would be a separate methodological decision, not a prerequisite for the initial tax comparison. Source: policyengine-slides/slideshows/iariw-2026/slides/ImputationSlide.tsx and CalibrationSlide.tsx.

# A possible CE pilot

## 20. Where this could fit in CE research (55–57 min)

**CE tax-unit records** (An agreed set of inputs for one year.) → **Current CE tax calculation** (The existing method, unchanged.) and **PolicyEngine TAXSIM emulator** (The same records, same input format.) → **Compare** (Household results and weighted summaries.) → **Review** (Explain differences before expanding the scope.)

Keep CE definitions and weights fixed in the first comparison.

This is a proposed integration path, not a representation of a tested CE implementation. Ask staff which parts of their current workflow could supply the comparison inputs. Preserve existing CE definitions and weights in the initial comparison.

## 21. A manageable CE pilot (57–60 min)

Four steps, each with a clear output.

1. **Scope.** Agree one year, one sample and the key tax outputs. Output: scope note.
2. **Map.** Document input mappings and missing-data assumptions. Output: mapping document.
3. **Compare.** Run both calculations and log every difference. Output: comparison and discrepancy log.
4. **Extend.** Choose one benefit extension after the tax results. Output: extension plan.

Proposed next steps for discussion. Seek clarity on the relevant year, available inputs, computing environment and who will review discrepancies. Avoid proposing a firm timeline before those constraints are known.

## 22. Q&A and discussion (60–90 min)

- Which outcomes and years would be most useful?
- Which input assumptions create the most uncertainty?
- What evidence would support a broader evaluation?
- Which benefit extension would answer a concrete research question?

- [policyengine.org/us/taxsim](https://www.policyengine.org/us/taxsim) — Install, documentation and examples
- [policyengine.org/us/taxsim/run](https://www.policyengine.org/us/taxsim/run) — Run a TAXSIM-format file in the browser
- [policyengine.org/us/taxsim/dashboard](https://www.policyengine.org/us/taxsim/dashboard) — Agreement by year and state
- [github.com/PolicyEngine/policyengine-taxsim](https://github.com/PolicyEngine/policyengine-taxsim) — Source code and issue tracker

Use the separate 30-minute discussion for questions on the methods and potential CE collaboration. The links on the slide open the TAXSIM site, the web runner, the validation dashboard and the source code.
