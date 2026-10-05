# BLS TAXSIM seminar: slide text and speaker notes

19 slides: 60 minutes presenting, followed by a dedicated 30-minute Q&A slide.

Based on the September 2025 CRS TAXSIM section, PWBM 2026 validation material, IARIW 2026 imputation/calibration material in this repository, and the PolicyEngine TAXSIM site (policyengine.org/us/taxsim), captured October 5, 2026.

## Before presenting

- Rehearse the live demo (slide 9) and the live dashboard (slide 11) on the presentation laptop and the BLS network. Confirm that both frames load. If a frame does not load, open the page in a browser tab.
- On the morning of the talk, open the dashboard and check that it loads. Its headline figures are in the notes for slide 10 for questions (2023: 89.8% federal and 94.9% state agreement within ±1% of gross income, data of September 23, 2026).
- Confirm the CE-specific benefit methodology and pilot scope. These sections describe proposed research choices rather than a completed CE implementation.

# Introduction and context

## 1. Tax and benefit imputation for the CE (0–1 min)

- PolicyEngine’s TAXSIM emulator and beyond
- Max Ghenis, Pavel Makarchuk and David Trimmer
- BLS seminar · October 8, 2026

Introduce the speakers and thank the BLS hosts and the CE team.

## 2. Today’s discussion (1–2 min)

- Introduction and context — What PolicyEngine is, who uses it, and the NBER collaboration.
- The TAXSIM emulator — A drop-in TAXSIM interface, and how one record becomes a tax result.
- Live demonstration — A TAXSIM-format file run in the browser, from input rows to federal and state tax.
- Validation — How we compare the two engines, the public dashboard, and how a reported difference becomes a fix.
- Benefit imputation — Methods for missing survey inputs, SNAP participation, and Medicaid valuation.
- A possible CE pilot — A focused comparison, the inputs it needs, and questions for CE staff.
- Q&A and discussion — Questions on the methods, implementation, and opportunities for collaboration.

The first six sections total 60 minutes. Show the drop-in swap and one worked example, then run the live demo, then give an overview of the validation process. Introduce benefit imputation afterward as an extension requiring additional data and methodological choices. Reserve 30 minutes for Q&A.

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

TAXSIM at NBER:
- **Developed since the 1970s:** Created and maintained by Daniel Feenberg
- **1,200+ citing papers:** Feenberg and Coutts (1993)
- **Federal law from 1960:** State law from 1977
- **Used by BLS for the CE:** Census evaluated it for the SPM

**Memorandum of understanding, September 2025:** NBER (Daniel Feenberg, James Poterba) and PolicyEngine

PolicyEngine TAXSIM emulator:
- **Same TAXSIM35 format:** Existing scripts keep working
- **PolicyEngine models from 2021:** Federal and state income tax
- **1960 to now in one interface:** Earlier years route to TAXSIM35
- **Open source:** Code and issue tracker on GitHub

Both teams validate the emulator, and the work has improved how both TAXSIM and PolicyEngine encode tax law.

Introduce TAXSIM first, then the partnership. TAXSIM has run at NBER since the 1970s; Daniel Feenberg created it and still maintains it, and more than 1,200 papers cite the Feenberg and Coutts (1993) paper. For this audience: since the 2013 data, the CE has used TAXSIM to estimate income taxes for most households (BLS Monthly Labor Review, 2015, https://www.bls.gov/opub/mlr/2015/article/improving-data-quality-in-ce-with-taxsim.htm). The memorandum of understanding with NBER (Daniel Feenberg and James Poterba) was announced on September 5, 2025. The emulator keeps TAXSIM35’s formats, computes tax years 2021 onward with PolicyEngine’s federal and state models, and routes earlier years to TAXSIM35. The comparison work has found improvements in both models. Source: https://www.policyengine.org/us/research/policyengine-nber-mou-taxsim

# The TAXSIM emulator

## 7. A drop-in replacement for TAXSIM35 (10–13 min)

Install once: `uv tool install policyengine-taxsim`

| | TAXSIM35 (before) | PolicyEngine TAXSIM (after) |
| --- | --- | --- |
| Shell | `taxsim35 < input.csv > output.csv` | `policyengine-taxsim < input.csv > output.csv` |
| R | `taxsim_calculate_taxes(input)` | `policyengine_calculate_taxes(input)` |
| SAS | `system(taxsim35 < input.csv …)` | `system(policyengine-taxsim < input.csv …)` |
| Stata | `taxsimlocal35, replace` | `! policyengine-taxsim < txpydata.raw …` |
| Julia | `pipeline(`taxsim35`, …)` | `pipeline(`policyengine-taxsim`, …)` |
| Python | `subprocess.run("taxsim35 …")` | `PolicyEngineRunner(df).run()` |

Same input file, same output variables. Existing scripts change one command or one function name.

The table shows the swap that the TAXSIM site gives for six environments; the teal part is what changes. Shell, SAS and Julia only swap the command name. R swaps the package and function (library(policyenginetaxsim), then policyengine_calculate_taxes). Stata writes the file, runs the command and reads the result back. Python can call the runner on a data frame. After installation, setup_policyengine() is a one-time environment setup in R, and the R package also provides compare_with_taxsim(inputs). Ask CE staff which environment their current tax-imputation code uses. Source: https://www.policyengine.org/us/taxsim, read October 5, 2026.

## 8. From a TAXSIM record to a result (13–16 min)

TAXSIM input row: year = 2024 (Tax year); state = 5 (California); mstat = 2 (Married, joint); page, sage = 40, 38 (Adult ages); depx = 2 (Dependents); age1, age2 = 8, 12 (Child ages); pwages = 80,000 (Primary wages); swages = 50,000 (Spouse wages).

Household PolicyEngine builds: Tax unit: Married filing jointly, California, 2024; Head, age 40: Employment income $80,000; Spouse, age 38: Employment income $50,000; Dependents, ages 8 and 12: Qualify for the child tax credit.

TAXSIM outputs:
- fiitax $8,282: Federal income tax
- siitax $3,214: California income tax
- v10 $130,000: Federal AGI
- v22 $4,000: Child tax credit
- frate 22%: Federal marginal rate
- fica $19,890: Payroll tax, both halves

Run on October 5, 2026 with policyengine-taxsim 3.0.1 and PolicyEngine US 2.25.2.

Walk through one real record from left to right. The row is household 1 of the web runner’s sample file, with the children’s ages added. The adapter maps pwages and swages to each person’s employment_income and page and sage to age, then returns fiitax (income_tax) and siitax (state_income_tax) in TAXSIM’s output format. fica is the TAXSIM convention: employee and employer payroll tax together (15.3% of $130,000). Point out that the federal tax already nets the $4,000 child tax credit. Run on October 5, 2026 with policyengine-taxsim 3.0.1 and PolicyEngine US 2.25.2; the older local build gave the same numbers. Two input points for CE staff: state codes follow TAXSIM’s own numbering, so New Jersey is 31, while 34 (the Census FIPS code for New Jersey) means North Carolina and silently applies the wrong state’s law. And one file can cover any year: the emulator routes years before 2021 to the bundled TAXSIM35 and 2021 onward to PolicyEngine, so a run record should note the emulator and model versions.

# Live demonstration

## 9. Live demo: run the sample file (16–29 min)

Live page: https://www.policyengine.org/us/taxsim/run

1. Load the 3-household sample
2. Keep Standard output: federal and state tax, FICA and marginal rates
3. Run and download in the browser
4. Read the results for each household
5. Switch to Full for AGI, credits, deductions and AMT

No installation needed. The same file runs with the policyengine-taxsim command.

Go straight into the live demo after the worked example and before validation. Click inside the frame to use the page. The frame keeps keyboard focus, so click the slide title before you press the arrow keys again. Use Expand for a larger view. Do not use the email form. Run and download in browser saves a CSV on the presentation laptop; open it to show the results for each household. Rehearse on the presentation laptop and network: confirm that the frame loads and note how long the run takes. Start by loading the 3-household sample and reading household 1 aloud: a married couple in California (state code 5, mstat 2) with two dependents and $80,000 and $50,000 in wages. If the frame does not load, open policyengine.org/us/taxsim/run in a browser tab.

# Validation

## 10. How we validate the emulator (29–33 min)

1. **Run both engines.** Every household goes through TAXSIM35 and PolicyEngine with the same inputs.
2. **Compare outputs.** Federal and state income tax, within $15 or 1% of income.
3. **Flag differences.** The dashboard ranks states and flags the ones that diverge.
4. **Explain the cause.** Input coding, a PolicyEngine rule, or TAXSIM itself, checked against the law.
5. **Fix and publish.** Fixes ship with a test, and the dashboard reruns.

**111,347** Enhanced CPS households · **2021–2025** Tax years · **50 + DC** States in the comparison · **2 engines** TAXSIM35 and PolicyEngine

Each PolicyEngine release and each TAXSIM update starts the loop again.

Present validation as a process, not a single benchmark. The figures describe the comparison on the public dashboard: 111,347 Enhanced CPS households, tax years 2021–2025, all 50 states and DC, run through both engines. Cross-model agreement measures consistency; checks against the law and tax forms decide which engine is right, because a shared error can survive a comparison. If asked for agreement rates: for 2023, 89.8% agree on federal tax and 94.9% on state tax within ±1% of gross income (data update of September 23, 2026). The comparator default is ±$15. Source: https://www.policyengine.org/us/taxsim/dashboard

## 11. The public validation dashboard (33–42 min)

Live page: https://www.policyengine.org/us/taxsim/dashboard

1. Pick a tax year, 2021 to 2025
2. Choose a tolerance
3. See agreement by state
4. Inspect a state to list its households

Enhanced CPS households, both engines. PolicyEngine US 2.6.17, data of September 23, 2026.

Show the dashboard as the output of the process, not as a list of figures. Pick a year, change the tolerance, scroll the state table and inspect one state to show the household list. The headline figures are in the notes for the previous slide if someone asks. Check the page on the morning of the talk, because it can update. Click the slide title before you press the arrow keys. If the frame does not load, open policyengine.org/us/taxsim/dashboard in a browser tab.

## 12. From a reported difference to a fix (42–45 min)

1. **Report.**
2. **Reproduce.**
3. **Classify.**
4. **Resolve.**
5. **Confirm.**

**1,063** Issues on GitHub since July 2024 · **829** Filed by Dan Feenberg at NBER · **984** Closed · **52+** Questions we sent NBER about TAXSIM’s own rules

- **#1241 · Oregon, PolicyEngine fix:** The emulator put Oregon’s kicker refund inside state tax, but not in the rebate field. Fixed in the emulator in 4 days. https://github.com/PolicyEngine/policyengine-taxsim/issues/1241
- **#1235 · Massachusetts, TAXSIM fix:** TAXSIM still applied a bank-interest deduction that Massachusetts repealed in 2024. NBER corrected TAXSIM the next day. https://github.com/PolicyEngine/policyengine-taxsim/issues/1235
- **#1251 · Minnesota, Input difference:** PolicyEngine found more credits: the renter’s credit, which the comparison return left out. Explained, no code change. https://github.com/PolicyEngine/policyengine-taxsim/issues/1251

Differences travel both ways. Dan Feenberg files households where the engines disagree; we file questions when TAXSIM appears to differ from the law (at least 52 issues titled Does TAXSIM or Does taxsimtest). Each case is reproduced with a minimal household, classified, and resolved. The three examples show the three outcomes: #1241 (opened September 25, fixed by PR #1244 on September 29), #1235 (opened September 24; Feenberg replied Agreed, corrected on September 25), and #1251 (Minnesota renter’s credit: the comparison return had no Schedule M1RENT). Counts from the GitHub issue tracker on October 5, 2026. Source: https://github.com/PolicyEngine/policyengine-taxsim/issues

# Benefit imputation

## 13. From eligibility to a benefit value (45–48 min)

One California household in 2025: a single parent, children aged 4 and 7, $25,000 in wages.

- **SNAP:** Eligibility: Eligible (SNAP unit of three) → Benefit if enrolled: $2,442 (a year, about $200 a month) → Take-up in the microdata: 82% (USDA participation rate) → Average across similar households: $2,002 (expected value)
- **Medi-Cal:** Eligibility: 3 of 3 (people eligible) → Benefit if enrolled: $27,709 (a year at average cost per enrollee) → Take-up in the microdata: 78% (California rate (KFF, MACPAC)) → Average across similar households: $21,613 (expected value)

A household calculator gives the potential benefit. Receipt and valuation are separate research choices.

PolicyEngine US 2.25.2, run October 5, 2026. Take-up rates from policyengine-us-data.

The numbers are a real PolicyEngine run (PolicyEngine US 2.25.2, October 5, 2026) for a single parent in California with children aged 4 and 7 and $25,000 in wages in 2025. A household calculation assumes take-up. In the microdata, take-up is assigned at published rates (SNAP 82% from USDA; Medicaid by state, 78% in California, from KFF and MACPAC enrollment targets), so the expected value is an average across similar households, not a payment to this one. Medi-Cal is valued at PolicyEngine’s average cost per enrollee: $11,801 for the parent and $7,954 per child. Do not add a Medicaid eligibility indicator directly to dollar resources.

## 14. Imputing a distribution of missing inputs (48–51 min)

Sources fused into PolicyEngine’s US microdata:
- **CPS** (Current Population Survey): The spine: demographics, income, labor force.
- **ACS** (American Community Survey): Geography, housing, sub-state detail.
- **SCF** (Survey of Consumer Finances): Wealth, capital income, debt.
- **SIPP** (Survey of Income and Program Participation): Program take-up, dynamics, transitions.
- **PUF** (IRS Public Use File): Tax-unit income detail, itemized deductions.

**Technique.** Quantile regression forests learn the full distribution of each missing variable from many predictors, then sample from it.

**Why a distribution.** Households with the same observed traits get different draws, which matters near tax and benefit thresholds.

**For the CE.** Donor surveys and shared predictors would need an explicit assessment before we transfer the method.

A donor survey observes the variable of interest and predictors shared with the recipient survey. A conditional distribution permits households with similar observed characteristics to have different imputed values. That can matter around tax-benefit thresholds. Multiple draws can reveal sensitivity, but they do not automatically solve model misspecification or preserve every joint relationship. The prior deck names CPS, ACS, SCF, SIPP and tax microdata. This slide does not claim a CE implementation exists. Source: local IARIW 2026 ImputationSlide.tsx.

## 15. What counts as household resources? (51–53 min)

The same household, four resource concepts.

- **Earnings:** $25,000 (Wages before taxes)
- **After taxes and credits:** $34,461 (+$9,461: EITC, child tax credit and California credits, less payroll tax)
- **Plus cash and food benefits:** $43,931 (+$9,470: CalWORKs $5,200, SNAP $2,442, school meals $1,116, WIC $712)
- **Plus Medi-Cal at cost:** $71,640 (+$27,709 for three enrollees)

The resource concept, not the calculator, decides whether $25,000 of earnings becomes $34,000 or $72,000.

PolicyEngine US 2.25.2, run October 5, 2026. Benefits assume take-up; Medi-Cal is valued at average cost per enrollee.

Each bar adds one component for the same household (PolicyEngine US 2.25.2, 2025). Taxes and credits: the federal EITC and refundable child tax credit and California’s CalEITC and Young Child Tax Credit, less the employee payroll tax. CalWORKs is California’s TANF program. The jump from $43,931 to $71,640 shows why Medicaid needs an explicit valuation choice: cost per enrollee, insurance value and household valuation give different answers, and this talk does not pick one. Establish whether CE research wants potential entitlements, actual receipt, or a broader resource measure.

## 16. Validation of benefit imputations (53–55 min)

**≈40%** of SNAP recipients are missing from CPS reports, measured against linked administrative records. (Meyer and Mittag, NBER Working Paper 21676)

- **External benchmarks.** Compare imputed receipt and amounts with administrative totals.
- **Errors by group.** Check how errors differ by income, household type and state.
- **Holdout tests.** Test on data held back from estimation, and try alternative assumptions.
- **Calibration is not validation.** A target used to fit the weights cannot also validate them.

Meyer and Mittag link the CPS to administrative records and find that the survey misses about 40 percent of SNAP recipients (NBER Working Paper 21676). This is why PolicyEngine computes benefits from program rules and calibrates weights to administrative totals instead of relying on reported receipt. Explain that fitting a target is not independent validation against that target. CE weight changes would be a separate methodological decision, not a prerequisite for the initial tax comparison. Source: the cpid-webinar-2026 deck’s baseline slide and policyengine-slides/slideshows/iariw-2026/slides/CalibrationSlide.tsx.

# A possible CE pilot

## 17. Where this could fit in CE research (55–57 min)

**CE tax-unit records** (An agreed set of inputs for one year.) → **CE’s current TAXSIM run** (In production since the 2013 data.) and **PolicyEngine TAXSIM emulator** (The same file, no format changes.) → **Compare** (Household results and weighted summaries.) → **Review** (Explain differences before expanding the scope.)

Outputs to compare first: fiitax (Federal income tax), siitax (State income tax), fica (Payroll tax), v22 (Child tax credit), v25 (Earned income credit), frate (Federal marginal rate).

Keep CE definitions and weights fixed in the first comparison.

This is a proposed integration path, not a tested CE implementation. CE has used NBER’s TAXSIM to estimate income taxes since the 2013 data (BLS Monthly Labor Review, 2015), so the same input file can go to both engines. Start with the core outputs: fiitax, siitax, fica, v22 (child tax credit), v25 (EITC) and frate. Ask staff which parts of their current workflow could supply the comparison inputs. Preserve existing CE definitions and weights in the initial comparison.

## 18. A manageable CE pilot (57–60 min)

Four steps, each with a clear output.

1. **Scope.** Agree one year, one sample and the key tax outputs. Output: scope note.
2. **Map.** Document input mappings and missing-data assumptions. Output: mapping document.
3. **Compare.** Run both calculations and log every difference. Output: comparison and discrepancy log.
4. **Extend.** Choose one benefit extension after the tax results. Output: extension plan.

**CE would provide:** One year of tax-unit records in the current TAXSIM format; The current TAXSIM outputs and the survey weights; Staff time to review the discrepancy log.

**PolicyEngine would provide:** The open-source emulator, which installs and runs inside BLS; Runs pinned to emulator and model versions; A diagnosis of each difference, then a benefit extension proposal.

Proposed next steps for discussion. The emulator is an open-source package with Python, R, Stata and SAS interfaces that installs inside BLS, so confidential records do not need to leave BLS. The who-provides-what split is a proposal, not an agreement. Seek clarity on the relevant year, available inputs, computing environment and who will review discrepancies. Avoid proposing a firm timeline before those constraints are known.

## 19. Q&A and discussion (60–90 min)

- Which outcomes and years would be most useful?
- Which input assumptions create the most uncertainty?
- What evidence would support a broader evaluation?
- Which benefit extension would answer a concrete research question?

- [policyengine.org/us/taxsim](https://www.policyengine.org/us/taxsim) — Install, documentation and examples
- [policyengine.org/us/taxsim/run](https://www.policyengine.org/us/taxsim/run) — Run a TAXSIM-format file in the browser
- [policyengine.org/us/taxsim/dashboard](https://www.policyengine.org/us/taxsim/dashboard) — Agreement by year and state
- [github.com/PolicyEngine/policyengine-taxsim](https://github.com/PolicyEngine/policyengine-taxsim) — Source code and issue tracker

Use the separate 30-minute discussion for questions on the methods and potential CE collaboration. The links on the slide open the TAXSIM site, the web runner, the validation dashboard and the source code.
