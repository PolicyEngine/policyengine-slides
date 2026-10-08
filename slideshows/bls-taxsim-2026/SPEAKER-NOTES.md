# BLS TAXSIM seminar: slide text and speaker notes

30 slides, including 5 section dividers and a closing slide: 60 minutes presenting, no slack, then a dedicated 30-minute Q&A slide.

Based on the September 2025 CRS TAXSIM section, PWBM 2026 validation material, IARIW 2026 imputation/calibration material in this repository, and the PolicyEngine TAXSIM site (policyengine.org/us/taxsim), captured October 5, 2026.

## Before presenting

- Rehearse the live demo (slide 12) and the live dashboard (slide 16) on the presentation laptop and the BLS network. Confirm that both frames load. If a frame does not load, open the page in a browser tab.
- On the morning of the talk, open the dashboard and check that it loads. Its headline figures are in the notes for slide 15 for questions (2023: 89.8% federal and 94.9% state agreement within ±1% of gross income, data of September 23, 2026).
- The dashboard’s September 23 data treats S-corporation income as active. PR #1199 (September 29) made passive the default, so a refresh before the talk would change the federal figures; update the slide 15 notes and the slide 16 footnote if it does. Do not refresh with TAXSIM builds from September 24 onward until NBER confirms them (policyengine-taxsim #1248).
- The validation section (slides 14–17, 10 minutes) has a full speaker script in `VALIDATION-SCRIPT.md`.
- Confirm the CE-specific benefit methodology and pilot scope. These sections describe proposed research choices rather than a completed CE implementation.

# Introduction and context

## 1. Tax and benefit imputation for the CE (0–1 min)

- PolicyEngine’s TAXSIM emulator and beyond
- Max Ghenis, Pavel Makarchuk and David Trimmer
- BLS seminar · October 8, 2026

Introduce the speakers and thank the BLS hosts and the CE team.

## 2. Today’s discussion (1–2 min)

- Introduction and context — What PolicyEngine is, who uses it, and how the NBER collaboration started.
- The TAXSIM emulator — A drop-in TAXSIM interface, where each calculation happens, and a live demo in the browser.
- Validation — How a disagreement is resolved with the engines, independent validators and the law, how that shapes the emulator, the public dashboard, and our progress.
- Beyond TAXSIM — What PolicyEngine models beyond TAXSIM’s inputs, and methods for missing survey inputs, SNAP participation and Medicaid valuation.
- A possible CE pilot — A focused comparison, the inputs it needs, and questions for CE staff.
- Q&A and discussion — Questions on the methods, implementation, and opportunities for collaboration.

The first five sections total 58 minutes, leaving about 2 minutes of slack before the 30-minute Q&A. Show the drop-in swap and where each calculation happens, then run the live demo, then give an overview of the validation process. Then show what PolicyEngine models beyond TAXSIM, and introduce benefit imputation as an extension that needs more data and methodological choices. Reserve 30 minutes for Q&A.
  },
  {
    "id": "section-intro

## 3. Introduction and context (section divider)

Section divider 01. Move on after a few seconds.

## 4. PolicyEngine: free, open-source microsimulation (2–5 min)

- Rules: federal and state taxes and major benefit programs
- Households: survey data enhanced and calibrated, or any household you enter
- Reforms: change any parameter and see the cost, poverty and distributional effects

Give the one-minute version of PolicyEngine: an open-source rules engine, a household dataset built from public surveys, and a way to score reforms. Keep the focus on the rules and the household data, because the TAXSIM emulator uses the same rules engine. The rules and the survey data are separate, so the same rules can serve any dataset. The TAXSIM adapter maps one input format into the model’s households, but it does not remove the research choices about missing data and participation; the emulator section covers those. Adapted from the cpid-webinar-2026 deck (September 2026).

## 5. PolicyEngine today (5–6 min)

- 95,000+ parameters, 5,500+ variables and 4,693 test files in the US model
- Public code since June 2021, with 133 contributors to the US model
- NBER, the Atlanta Fed and No 10 Downing Street work with the models

Use the numbers to show scale and testing, not to sell. The NBER memorandum of understanding is the reason the TAXSIM emulator exists; the next section covers it. Figures from the gettsim-2026 deck (September 3, 2026); check them before the talk if you quote them.

## 6. Researchers and developers build with these rules (6–7 min)

- Federal users: BEA and the Joint Economic Committee
- Research institutions: Brookings, AEI, Niskanen, CRFB, Georgetown, USC, the University of Michigan and UHERO
- Benefit navigators: MyFriendBen, Amplifi, Mirza and Starlight

Point out the federal statistical user, BEA, because it is closest to the CE team’s work, and the university research centers, such as the University of Michigan and UHERO (the University of Hawaii Economic Research Organization). Adapted from the cpid-webinar-2026 deck (September 2026).

## 7. How the collaboration started (7–9 min)

Before the emulator: record by record:
1. **Compare one record:** One household runs through both models.
2. **Trace the difference:** Fill out the tax form to find the error.
3. **Write a YAML test:** The record becomes an integration test.
4. **Fix the model at fault:** PolicyEngine keeps the test; NBER corrects TAXSIM35.
5. **Scale up:** Samples of 100,000 tax units find the next records.

One record as a YAML test (policyengine-us #1504 · November 2022, https://github.com/PolicyEngine/policyengine-us/issues/1504):

```yaml
- name: Tax unit with tax-exempt pension income as sole income source.
  period: 2021
  input:
    people:
      person1:
        age: 70
        tax_exempt_pension_income: 36000
        ssi: 0  # not in TAXSIM35
        wic: 0  # not in TAXSIM35
  output:  # expected results from online TAXSIM35 10/24/22 version
    taxsim_tfica: 0.00
    income_tax: -1400.00
```

From testing to partnership:
- **2022 · Validation begins:** NBER shares TAXSIM35 code for testing.
- **2024 · The emulator:** TAXSIM inputs and outputs on PolicyEngine rules.
- **2025 · NSF POSE Phase I:** NBER’s TAXSIM developer is external mentor through I-Corps.
- **Sep 2025 · Formal agreement:** NBER and PolicyEngine sign a memorandum of understanding.

Ease into the partnership before the agreement slide. Validation against TAXSIM35 started in April 2022 (policyengine-us issue #704, “Validate against TAXSIM 35”). Before the emulator existed, the team compared records one at a time and turned each one into a YAML integration test in policyengine-us. The example on the slide is issue #1504 (November 15, 2022), trimmed: a 70-year-old with $36,000 of tax-exempt pension income in 2021, with SSI and WIC set to zero because they are not in TAXSIM35, and the expected values from the online TAXSIM35 (income_tax of −$1,400, the 2021 recovery rebate). The test failed because PolicyEngine counted tax-exempt pension income in AGI; PR #1505 fixed it the same day and the test stayed in the suite. Issues #1031 (Massachusetts senior circuit breaker, July 2022) and #1279 (2021 AMT, August 2022) follow the same pattern. The method then scaled up to differential testing: random samples of 100,000 tax units, about 1.6 million units across two sample sequences, went through TAXSIM35 and PolicyEngine US for tax year 2021, federal and each state. The units with the largest differences came out one at a time, and the team filled out the relevant part of the tax form by hand to decide which model was wrong. If TAXSIM35 was wrong, its code was patched; if PolicyEngine was wrong, an issue with a failing test was filed. NBER made this possible by sharing the TAXSIM35 source code. The method is written up in policyengine-us discussion #2389. The policyengine-taxsim emulator started in May 2024, and NBER filed its first issue on its public tracker on September 22, 2024, and has filed about 830 since. In 2025, NSF awarded PolicyEngine a POSE Phase I grant (award 2518372, September 2025 to August 2026), and NBER’s TAXSIM developer served as the external mentor through the I-Corps for POSE training. The September 2025 memorandum of understanding (next slide) formalized more than three years of this work. Sources: github.com/PolicyEngine/policyengine-us/issues/704, github.com/PolicyEngine/policyengine-us/discussions/2389, nsf.gov/awardsearch/show-award/?AWD_ID=2518372, policyengine.org/us/research/nsf-pose-phase-1-grant.

## 8. The NBER collaboration (9–12 min)

TAXSIM at NBER:
- **Developed since the 1970s:** At NBER, which still maintains it
- **1,200+ citing papers:** Of the 1993 TAXSIM paper
- **Federal law from 1960:** State law from 1977
- **Used in research and policy:** Think tanks and federal agencies

**Memorandum of understanding, September 2025:** NBER and PolicyEngine

One interface, every tax year: 1960–2020 → TAXSIM35; 2021 onward → PolicyEngine.

PolicyEngine:
- **Open source since 2021:** 133 contributors to the US model
- **95,000+ parameters:** Federal, every state and DC
- **Tax and benefit programs:** Income tax, SNAP, Medicaid, CHIP, SSI, TANF, WIC and ACA subsidies
- **Used in research and policy:** Congress, think tanks, benefit tools

Start on the left with TAXSIM, end on the right with PolicyEngine, and use the middle for the agreement and how one interface routes tax years. Close with: both teams validate the emulator, and the work has improved how both TAXSIM and PolicyEngine encode tax law. TAXSIM has run at NBER since the 1970s; NBER still maintains it, and more than 1,200 papers cite the 1993 paper that introduced it. Think tanks such as Brookings and federal agencies rely on it. NBER started filing differences on the emulator’s public GitHub tracker in 2024 (first issue: September 22, 2024). The memorandum of understanding with NBER was announced on September 5, 2025. policyengine-taxsim 3.0.0 was released on September 29, 2026, one of 80 PyPI releases since February 2026. One interface covers every tax year: TAXSIM35 handles 1960–2020 (state law from 1977) and PolicyEngine handles 2021 onward. PolicyEngine facts (right): public code since June 2021, 133 contributors to the US model, 95,000+ parameters and 4,693 test files, from the gettsim-2026 deck (September 3, 2026); check them before the talk. The benefit list follows the Benefits and taxes section of policyengine.org/us/taxsim, which also names housing vouchers, the EITC and the CTC. Optional context for this audience, not on the slide: the CE has used TAXSIM since the 2013 data (BLS Monthly Labor Review, 2015). Sources: https://www.policyengine.org/us/research/policyengine-nber-mou-taxsim and https://pypi.org/project/policyengine-taxsim/

# The TAXSIM emulator

## 9. The TAXSIM emulator (section divider)

Section divider 02. Move on after a few seconds.

## 10. A drop-in replacement for TAXSIM35 (12–15 min)

Installation (top of the slide), with macOS/Linux and Windows tabs: install the uv package manager (if you don't have it), then `uv tool install policyengine-taxsim`.

Get started (below; Same input format, same output variables. Just swap the command.), with interactive tabs as on policyengine.org/us/taxsim: CLI, Python, R, Stata, SAS and Julia. Each tab shows the TAXSIM35 code (before) beside the PolicyEngine TAXSIM code (after), with the changed parts highlighted. Click a tab during the talk; clicks do not advance the slide.

Existing TAXSIM workflows carry over in every supported environment, with no added complexity.

The table shows the swap that the TAXSIM site gives for six environments; the teal part is what changes. Shell, SAS and Julia only swap the command name. R swaps the package and function (library(policyenginetaxsim), then policyengine_calculate_taxes). Stata writes the file, runs the command and reads the result back. Python can call the runner on a data frame. After installation, setup_policyengine() is a one-time environment setup in R, and the R package also provides compare_with_taxsim(inputs). Ask CE staff which environment their current tax-imputation code uses. Source: https://www.policyengine.org/us/taxsim, read October 5, 2026. For Stata, SAS and Julia: if the command is not found, run uv tool dir --bin and use the full path it prints.

## 11. Where each calculation happens (15–18 min)

TAXSIM input file (One row per tax unit, any tax year):

| year | state | mstat | depx | pwages | swages |
|---|---|---|---|---|---|
| 2019 | 5 | 2 | 2 | 80000 | 50000 |
| 2024 | 5 | 2 | 2 | 80000 | 50000 |

- **Tax years 1960–2020: TAXSIM35.** NBER’s model, bundled with the emulator
- **Tax years 2021 onward: PolicyEngine US.** Federal and state rules

TAXSIM output file (Same variables for every year):

| year | fiitax | siitax | fica |
|---|---|---|---|
| 2019 | 10949 | 4583 | 19890 |
| 2024 | 8282 | 3214 | 19890 |

One file in and one file out. The tax year decides which engine calculates each row.


Show where the calculation happens. The emulator reads each row’s tax year: rows for 1960–2020 run on the TAXSIM35 binary bundled with the package, and rows for 2021 onward run on PolicyEngine US. Both paths write the same TAXSIM output variables, so one file can mix years. The example is one California household (married, two children aged 8 and 12, $80,000 and $50,000 in wages) run for 2019 and 2024 with policyengine-taxsim 3.0.1 and PolicyEngine US 2.25.2 on October 5, 2026: 2019 gives fiitax $10,949, siitax $4,583 and fica $19,890 through TAXSIM35; 2024 gives fiitax $8,282, siitax $3,214 and fica $19,890 through PolicyEngine. The input columns: state 5 is California in TAXSIM’s codes, mstat 2 is married filing jointly, depx is the number of dependents, and pwages and swages are the two spouses’ wages. fica is payroll tax, employee and employer shares together. Mapping details if asked: pwages and swages become each person’s employment_income, page and sage become ages, and fiitax and siitax map to income_tax and state_income_tax. State codes follow TAXSIM’s own numbering, so New Jersey is 31, while 34 (the Census FIPS code for New Jersey) means North Carolina and silently applies the wrong state’s law. A run record should note the emulator and model versions.

# Live demonstration

## 12. Live demo: run the sample file (18–31 min)

Live page: https://www.policyengine.org/us/taxsim/run

Go straight into the live demo after the routing diagram and before validation. Click inside the frame to use the page. The frame keeps keyboard focus, so click the slide title before you press the arrow keys again. Use Expand for a larger view. Do not use the email form. Run and download in browser saves a CSV on the presentation laptop; open it to show the results for each household. Rehearse on the presentation laptop and network: confirm that the frame loads and note how long the run takes. Start by loading the 3-household sample and reading household 1 aloud: a married couple in California (state code 5, mstat 2) with two dependents and $80,000 and $50,000 in wages. If the frame does not load, open policyengine.org/us/taxsim/run in a browser tab. Demo steps: (1) Load the 3-household sample; (2) Keep Standard output: federal and state tax, FICA and marginal rates; (3) Run and download in the browser; (4) Read the results for each household; (5) Switch to Full for AGI, credits, deductions and AMT.

# Validation

## 13. Validation (section divider)

Section divider 03. Move on after a few seconds.

## 14. Three calculations, one arbiter (31–34 min)

1. **Issue filed.** A mismatch between PolicyEngine and TAXSIM on a CPS record becomes an issue.
2. **Agentic review.** An agentic workflow explores the disagreement using both engines, the validators and the statutes.
3. **Recommendation.** The findings recommend adjusting one of the engines, or agreeing a convention with NBER.
4. **Rerun.** After the fix ships, we rerun the record to confirm the disagreement is resolved.

Triangle, on the right:
- **TAXSIM35:** NBER’s calculator, the reference engine
- **PolicyEngine:** Open-source rules, run through the emulator
- **Third-party validators:** TaxAct, Axiom and others
- **Center — Statutes and official instructions:** The law decides which calculation is right

Sides: compared on every record (TAXSIM35–PolicyEngine) · an independent check when they disagree (TAXSIM35–validators) · reconciled against the forms (PolicyEngine–validators).

Agreement measures consistency. The law decides correctness, because two engines can share an error.

Walk the four steps on the left, then point to the triangle. (1) A mismatch between PolicyEngine and TAXSIM on a CPS record becomes a GitHub issue; NBER files most of them. (2) An agentic workflow explores the disagreement: it reruns the record in both engines, checks third-party validators such as a completed TaxAct return or Axiom’s encoding of the statute, and reads the statute and the official instructions. (3) The findings become a recommendation to adjust one engine, or to agree a convention with NBER when TAXSIM’s inputs cannot carry what the law needs; a person reviews every recommendation before it is posted or merged. (4) After the fix ships, the record is rerun to confirm the disagreement is gone. The validators do not vote: the statute and the official instructions decide which calculation is right, because two engines can share an error that no agreement rate would reveal. PolicyEngine fixes carry tests whose expected values come from the form or statute.

## 15. How this process shapes the emulator (34–36 min)

1. **Compile.** Every resolved case is stored as an issue on the emulator’s GitHub tracker, with the input row, both results and the resolution.
2. **Lock in.** PolicyEngine fixes ship with a test case, so a resolved disagreement cannot quietly return.
3. **Compare by area.** The dashboard reruns every state and year, showing how complete each area’s agreement is.
4. **Prioritize.** The areas with the lowest agreement set what we look at next.

**111,347** Enhanced CPS households · **2021–2025** Tax years · **50 + DC** States in the comparison · **2 engines** TAXSIM35 and PolicyEngine

Each PolicyEngine release and each TAXSIM update reruns the comparison.

Each resolved case does not end with the fix. It is compiled on the emulator’s GitHub issue tracker with the input row, both engines’ results and the resolution, PolicyEngine fixes ship with a test so the disagreement cannot quietly return, and the dashboard reruns every state and year so we can compare how complete each area’s agreement is. The lowest-agreement areas set what we look at next. The figures describe the comparison on the public dashboard: 111,347 Enhanced CPS households, tax years 2021–2025, all 50 states and DC, run through both engines. If asked for agreement rates: for 2023, 89.8% agree on federal tax and 94.9% on state tax within ±1% of gross income (data update of September 23, 2026). The comparator default is ±$15. Check the dashboard the day before: its September 23 data treats S-corporation income as active, and PR #1199 (September 29) made passive the default, so a refresh would change the federal figures. Do not refresh with TAXSIM builds from September 24 onward until NBER confirms them (policyengine-taxsim #1248). Source: https://www.policyengine.org/us/taxsim/dashboard

## 16. The public validation dashboard (36–39 min)

Live page: https://www.policyengine.org/us/taxsim/dashboard

About 3 minutes: a quick overview, then one or two examples. Show the dashboard as the output of the process, not as a list of figures. Pick a year, change the tolerance, scroll the state table and inspect one state to show the household list; a second state with near-complete agreement shows what a resolved area looks like. The headline figures are in the notes for the previous slide if someone asks. Check the page on the morning of the talk, because it can update. Click the slide title before you press the arrow keys. If the frame does not load, open policyengine.org/us/taxsim/dashboard in a browser tab. Dashboard steps: (1) Pick a tax year, 2021 to 2025; (2) Choose a tolerance; (3) See agreement by state; (4) Inspect a state to list its households.

## 17. From a reported difference to a fix (39–41 min)

1. **Report.**
2. **Reproduce.**
3. **Classify.**
4. **Resolve.**
5. **Confirm.**

**1,100+** Issues on the public tracker since July 2024 · **1,000+** Issues resolved · **150+** Questions we raised on TAXSIM’s own rules · **100+** TAXSIM corrections NBER confirmed on the tracker

- **#1241 · Oregon, PolicyEngine fix:** The emulator put Oregon’s kicker refund inside state tax, but not in the rebate field. Fixed in the emulator. https://github.com/PolicyEngine/policyengine-taxsim/issues/1241
- **#1235 · Massachusetts, TAXSIM correction:** TAXSIM still applied a bank-interest deduction that Massachusetts repealed in 2024. Confirmed and corrected by NBER. https://github.com/PolicyEngine/policyengine-taxsim/issues/1235
- **#1251 · Minnesota, Input difference:** The comparison return left out Minnesota’s renter’s credit, which PolicyEngine calculates. Explained, no change to either engine. https://github.com/PolicyEngine/policyengine-taxsim/issues/1251

Present the change this work has driven in both engines. Do not say how quickly NBER corrects TAXSIM: TAXSIM is closed source with no public release cadence, so we cannot track when its corrections ship, only that NBER confirmed them. NBER files most of the difference reports; we file questions when TAXSIM appears to differ from the law. Each case is reproduced with a minimal household, classified, and resolved. Exact counts on October 7, 2026: 1,186 issues on the policyengine-taxsim tracker since July 15, 2024, of which 1,010 are closed; 159 questions titled Does TAXSIM or Does taxsimtest since February 2026. TAXSIM corrections: about 106 issues have an NBER comment that confirms a TAXSIM correction (for example “Agreed, corrected”, “Fixed in Taxsim” or “I changed taxsim”), and about 60 more have only “Agreed” or “Now matches”, which do not say which engine changed. This is a lower bound: TAXSIM’s working builds are not public, so changes made without a comment are not counted. PolicyEngine changes, if asked: 163 PolicyEngine US pull requests since July 2024 cite TAXSIM comparisons (mostly state rule corrections), and the emulator has 180 merged pull requests, about a third of them tooling such as CI, versioning and the dashboard. These are not on the slide, because merged pull requests and confirmed corrections are not counted the same way and should not be compared. The tracker grows by about 40 issues a day this week, so the slide uses rounded figures. The three examples show the three outcomes: #1241 (opened September 25, fixed by PR #1244 on September 29), #1235 (opened September 24; NBER replied Agreed and corrected TAXSIM), and #1251 (Minnesota renter’s credit: the comparison return had no Schedule M1RENT). Sources: https://github.com/PolicyEngine/policyengine-taxsim/issues and https://github.com/PolicyEngine/policyengine-us/pulls

# Beyond TAXSIM

## 18. Beyond TAXSIM (section divider)

Section divider 04. Move on after a few seconds.

## 19. Additional inputs beyond TAXSIM (41–43 min)

| Area | TAXSIM input | Limit | PolicyEngine adds |
|---|---|---|---|
| Business income | `pbusinc`, `pprofinc`, `scorp` | The qualified business income deduction limits need W-2 wages and property basis. | `w2_wages_from_qualified_business`, `unadjusted_basis_qualified_property` |
| Itemized deductions | `mortgage`, `otheritem`, `proptax` | Other itemized deductions arrive as one total, without the charitable or medical expense limits. | `charitable_cash_donations`, `other_medical_expenses` |
| State and local taxes | `state` | Without the household’s location, county and city income taxes are excluded. | `county_fips` |
| Household | `page`, `sage`, `depx`, `ageN` | Dependents carry only an age, with no disability or student status, which several credits use. | `is_permanently_and_totally_disabled`, `is_full_time_college_student` |
| Unearned income | `intrec`, `dividends`, `pensions`, `gssi` | Reported for the couple, so the emulator divides it between spouses. | `taxable_interest_income`, `qualified_dividend_income` |

**Why it matters:** Every TAXSIM input has a PolicyEngine equivalent, so existing files run unchanged. The added variables, from a survey or imputation, unlock the full rules.

Explain how a TAXSIM input row becomes a PolicyEngine household, and what the format cannot carry. Business income: the emulator maps pbusinc and sbusinc (with psemp and ssemp) to self-employment income, pprofinc and sprofinc to income from a specified service trade or business, and scorp to partnership and S-corporation income. TAXSIM’s own QBI deduction is a flat 20% with the service-business phase-in, capped by taxable income, with no W-2 wage or property test. PolicyEngine applies those limits, so without W-2 wages the deduction phases out above the threshold; the emulator’s --assume-w2-wages option reproduces TAXSIM’s simpler rule (available on the policyengine and compare commands, not on the default drop-in command). Itemized deductions: TAXSIM’s mortgage and otheritem are aggregates; the emulator sums them into deductible mortgage interest, which has no floor or cap, to match TAXSIM, because charity and medical would bring AGI caps and floors that TAXSIM does not apply. Property tax maps to real estate taxes. State and local taxes: PolicyEngine computes the state income tax for the SALT deduction; TAXSIM input has no county or city, so Maryland county tax is set to zero and city taxes such as New York City’s do not apply. Do not present the 2025 SALT cap as a difference: TAXSIM also applies it. Household: TAXSIM gives the two adults’ ages (page, sage), the number of dependents (depx) and each dependent’s age (age1 to ageN); filing status comes from mstat. Dependents have no disability or student status, which PolicyEngine uses for the EITC (a disabled child of any age, or a full-time student under 24, can qualify) and for the child and dependent care credit; is_permanently_and_totally_disabled (EITC), is_incapable_of_self_care (child and dependent care credit) and is_full_time_college_student supply them. Unearned income: TAXSIM reports interest (intrec), dividends, short-term and long-term capital gains and S-corporation income for the tax unit, and the emulator splits them evenly between spouses for joint filers; pensions and gssi are split evenly too, unless the spouses fall on different sides of a state’s age rule, when the older spouse gets all of it. Wages are already per spouse (pwages, swages). Person-level variables such as taxable_interest_income and qualified_dividend_income remove the split; taxable_ira_distributions and taxable_401k_distributions also separate retirement accounts from pensions, which TAXSIM does not. Sources: policyengine-taxsim 3.0.1 config/variable_mappings.yaml and runners/policyengine_runner.py; TAXSIM source law87.for. Each card ends with the PolicyEngine US input variables that remove the limit, which a survey or an imputation can supply: w2_wages_from_qualified_business and unadjusted_basis_qualified_property apply the wage and property limits of the qualified business income deduction; charitable_cash_donations and other_medical_expenses give each deduction its own adjusted gross income limit or floor; county_fips places the household, which turns on city and county income taxes such as New York City’s and the Indiana county taxes; is_permanently_and_totally_disabled and is_full_time_college_student give dependents the status that the EITC uses; person-level income variables such as taxable_interest_income and qualified_dividend_income replace the split between spouses. Related variables not on the slide: business_is_sstb, qualified_reit_and_ptp_income, charitable_non_cash_donations, home_mortgage_interest, is_incapable_of_self_care, taxable_ira_distributions, taxable_401k_distributions, social_security_disability and social_security_survivors. Variable names checked in PolicyEngine US source on October 7, 2026.

## 20. CE inputs PolicyEngine can use and TAXSIM cannot (43–45 min)

| CE collects | PolicyEngine input | What PolicyEngine does with it | TAXSIM |
|---|---|---|---|
| **Medical costs and premiums:** `HEALTHCQ`, `HLTHINCQ` | `other_medical_expenses`, `health_insurance_premiums` | Applies the medical deduction’s income floor and the SNAP medical deduction | Only the deductible amount, in one total |
| **Charitable gifts:** `CASHCOCQ` | `charitable_cash_donations` | Charity deduction, including the 2026 deduction for non-itemizers | In one total with mortgage interest |
| **Tuition:** `EDUCACQ` | `qualified_tuition_expenses` | American Opportunity and Lifetime Learning credits | No field |
| **College enrollment:** `IN_COLL` | `is_full_time_college_student` | Student rules for EITC and dependent credits, and SNAP | No field |
| **Car loan interest:** `VEHFINCQ` | `auto_loan_interest` | Car loan interest deduction for 2025 to 2028 | No field |
| **Rent and utilities:** `RENDWECQ`, `UTILCQ` | `rent`, `gas_expense`, `water_expense` | SNAP shelter deduction and state renter credits | Rent for state credits only; no utilities |
| **Benefits received:** `JFS_AMT`, `SSIX`, `WELFAREX` | `ssi_reported`, `takes_up_snap_if_eligible` | Compares simulated SNAP, SSI and TANF with reported receipt | One transfers total |

CE variables from the 2024 Interview public-use microdata dictionary; PolicyEngine US variable names.

Show which CE fields could feed PolicyEngine inputs that TAXSIM’s format cannot carry. All CE variables are in the 2024 Interview PUMD dictionary (FMLI unless noted; IN_COLL and SSIX are on MEMI). Medical: HEALTHCQ is the sum of HLTHINCQ, MEDSRVCQ, PREDRGCQ and MEDSUPCQ; TAXSIM takes only deductible medical expenses, already above the AGI floor, in its mortgage total, so the CE applied the floor itself. PolicyEngine applies the floor and also uses medical costs for the SNAP excess medical deduction for elderly and disabled members. Charity: CASHCOCQ also includes alimony, child support, gifts and political giving, so use the charity codes in the CNT detail file. Tuition: EDUCACQ includes K-12 tuition; college tuition is UCC 670110. College enrollment: IN_COLL is 1 full time, 2 part time, 3 not at all. TAXSIM’s documentation instead asks users to code students aged 20 to 23 as 19. Car loans: VEHFINCQ is vehicle finance charges; the 2025 deduction also requires final assembly in the United States, which the CE does not record. Rent and utilities: TAXSIM uses rentpaid only for state property tax credits and has no utility field. Benefits: JFS_AMT is the annual value of SNAP (with FS_MTHI months), SSIX is SSI per member, and WELFAREX is public assistance; TAXSIM takes one transfers total, used for state rebates. Quarterly spending variables (CQ and PQ) cover a three-month reference period; income variables cover 12 months. Context for this audience: from the second quarter of 2013 through the 2023 data, CE published federal and state tax estimates from TAXSIM; the 2024 data has no tax or after-tax income estimates, because the model was not updated for the 2024 tax year (CE PUMD Getting Started Guide). The emulator covers tax years 2021 onward. Sources: https://www.bls.gov/cex/pumd/ce-pumd-interview-diary-dictionary.xlsx, https://www.bls.gov/cex/pumd-getting-started-guide.htm, https://taxsim.nber.org/taxsim35/ and PolicyEngine US source, October 7, 2026.

## 21. What PolicyEngine calculates beyond TAXSIM (45–46 min)

| Area | In the emulator | PolicyEngine calculates |
|---|---|---|
| Benefit programs | Set to zero in the emulator, because some state taxes count cash assistance as income. | `snap`, `ssi`, `tanf`, `wic` |
| Health coverage | Separate from income tax, and not reported by the emulator. | `medicaid`, `chip`, `aca_ptc` |
| Additional state tax credits | Zero without inputs TAXSIM lacks, such as tuition or care work. Renters’ credits use rentpaid. | `ny_college_tuition_credit`, `co_care_worker_credit` |
| Federal provisions | Zero without inputs TAXSIM lacks, such as tips, overtime or tuition. | `tip_income_deduction`, `american_opportunity_credit` |

**Why it matters:** The emulator turns these off to match TAXSIM. PolicyEngine’s own tools return them, up to household net income and marginal rates that include benefits.

Show what PolicyEngine calculates that TAXSIM’s output does not carry, and how the emulator handles each item so that its results stay comparable with TAXSIM. Benefit programs: PolicyEngine calculates SNAP, SSI, TANF, WIC and the state SSI supplements; the emulator sets them to zero, because TAXSIM has no inputs for them and some state taxes count cash assistance as income (for example, the base of the Massachusetts senior circuit breaker credit; policyengine-taxsim issue #1031). Health coverage: Medicaid, CHIP and the ACA premium tax credit are separate PolicyEngine variables; the premium tax credit is not part of PolicyEngine’s income tax, and the emulator does not report any of them. Additional state tax credits: credits that need an input TAXSIM does not have are zero in emulator runs, because the input defaults to zero or false. Examples: the New York college tuition credit and the Minnesota K-12 education credit (tuition and fees), the Colorado care worker credit (an eligible care worker), the Connecticut and Nebraska stillborn child credits, and the Louisiana and Nebraska school readiness credits (the quality rating of the child care facility or worker). Renters’ credits, such as Minnesota’s and California’s, are calculated, because the emulator maps TAXSIM’s rentpaid to rent; parts that depend on disability status are not. Federal provisions: the deductions for tips, overtime and car-loan interest, the American Opportunity and Lifetime Learning credits (tuition) and the saver’s credit (retirement contributions) need inputs that TAXSIM does not have, so they are zero in emulator runs; PolicyEngine calculates them when a data source supplies the inputs. Conventions kept from TAXSIM, if asked: fiitax includes the net investment income tax but not the Additional Medicare Tax, which is reported with payroll taxes; fica includes both the employee and employer shares; one-time state rebates are in siitax and also reported as srebate; frate and srate come from a second run with $100 more wages. Sources: policyengine-taxsim 3.0.1 runners/policyengine_runner.py, core/state_output_resolver.py and config/variable_mappings.yaml; PolicyEngine US source, October 7, 2026.

## 22. Imputing a distribution of missing inputs (46–49 min)

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

## 23. What counts as household resources? (49–51 min)

One California household in 2025 (a single parent, children aged 4 and 7, $25,000 in wages), four resource concepts.

- **Earnings:** $25,000 (Wages before taxes)
- **After taxes and credits:** $34,461 (+$9,461: EITC, child tax credit and California credits, less payroll tax)
- **Plus cash and food benefits:** $43,931 (+$9,470: CalWORKs $5,200, SNAP $2,442, school meals $1,116, WIC $712)
- **Plus Medi-Cal at cost:** $71,640 (+$27,709 for three enrollees)

The resource concept, not the calculator, decides whether $25,000 of earnings becomes $34,000 or $72,000.

PolicyEngine US 2.25.2, run October 5, 2026. Benefits assume take-up; Medi-Cal is valued at average cost per enrollee.

Each bar adds one component for one California household: a single parent with children aged 4 and 7 and $25,000 in wages (PolicyEngine US 2.25.2, 2025). A household calculation assumes take-up; in the microdata, take-up is assigned at published rates (SNAP 82% from USDA; Medicaid 78% in California, from KFF and MACPAC). Taxes and credits: the federal EITC and refundable child tax credit and California’s CalEITC and Young Child Tax Credit, less the employee payroll tax. CalWORKs is California’s TANF program. The jump from $43,931 to $71,640 shows why Medicaid needs an explicit valuation choice: cost per enrollee, insurance value and household valuation give different answers, and this talk does not pick one. Establish whether CE research wants potential entitlements, actual receipt, or a broader resource measure.

## 24. Validation of benefit imputations (51–53 min)

**≈40%** of SNAP recipients are missing from CPS reports, measured against linked administrative records. (Meyer and Mittag, NBER Working Paper 21676)

- **External benchmarks.** Compare imputed receipt and amounts with administrative totals.
- **Errors by group.** Check how errors differ by income, household type and state.
- **Holdout tests.** Test on data held back from estimation, and try alternative assumptions.
- **Calibration is not validation.** A target used to fit the weights cannot also validate them.

Meyer and Mittag link the CPS to administrative records and find that the survey misses about 40 percent of SNAP recipients (NBER Working Paper 21676). This is why PolicyEngine computes benefits from program rules and calibrates weights to administrative totals instead of relying on reported receipt. Explain that fitting a target is not independent validation against that target. CE weight changes would be a separate methodological decision, not a prerequisite for the initial tax comparison. Source: the cpid-webinar-2026 deck’s baseline slide and policyengine-slides/slideshows/iariw-2026/slides/CalibrationSlide.tsx.

# A possible CE pilot

## 25. A possible CE pilot (section divider)

Section divider 05. Move on after a few seconds.

## 26. Where this could fit in CE research (53–55 min)

**CE tax-unit records** (An agreed set of inputs for one year.) → **CE’s current TAXSIM run** (In production since the 2013 data.) and **PolicyEngine TAXSIM emulator** (The same file, no format changes.) → **Compare** (Household results and weighted summaries.) → **Review** (Explain differences before expanding the scope.)

Outputs to compare first: fiitax (Federal income tax), siitax (State income tax), fica (Payroll tax), v22 (Child tax credit), v25 (Earned income credit), frate (Federal marginal rate).

Keep CE definitions and weights fixed in the first comparison.

This is a proposed integration path, not a tested CE implementation. CE has used NBER’s TAXSIM to estimate income taxes since the 2013 data (BLS Monthly Labor Review, 2015), so the same input file can go to both engines. Start with the core outputs: fiitax, siitax, fica, v22 (child tax credit), v25 (EITC) and frate. Ask staff which parts of their current workflow could supply the comparison inputs. Preserve existing CE definitions and weights in the initial comparison.

## 27. A manageable CE pilot (55–58 min)

Four steps, each with a clear output.

1. **Scope.** Agree one year, one sample and the key tax outputs. Output: scope note.
2. **Map.** Document input mappings and missing-data assumptions. Output: mapping document.
3. **Compare.** Run both calculations and log every difference. Output: comparison and discrepancy log.
4. **Extend.** Choose one benefit extension after the tax results. Output: extension plan.

**CE would provide:** One year of tax-unit records in the current TAXSIM format; The current TAXSIM outputs and the survey weights; Staff time to review the discrepancy log.

**PolicyEngine would provide:** The open-source emulator, which installs and runs inside BLS; Runs pinned to emulator and model versions; A diagnosis of each difference, then a benefit extension proposal.

Proposed next steps for discussion. The emulator is an open-source package with Python, R, Stata and SAS interfaces that installs inside BLS, so confidential records do not need to leave BLS. The who-provides-what split is a proposal, not an agreement. Seek clarity on the relevant year, available inputs, computing environment and who will review discrepancies. Avoid proposing a firm timeline before those constraints are known.

## 28. When the 2026 tax rules will be ready (58–60 min)

**44** Jurisdictions updated for 2025: 41 income-tax states, DC, NH and WA · **47** Pull requests from 5 contributors · **11 weeks** First pull request to last merge, Dec 3 – Feb 18 · **30** States finished in the last week, worked in parallel

**2025 tax year (what happened):** Dec 3 – Feb 10: one state at a time: Full model reviews, adding missing programs and fixing errors: 14 states done; Feb 11–18: 30 states in parallel: all 44 done; Mar – May: follow-up fixes: Federal non-conformity in DC, Idaho, Maine and South Carolina.

**2026 tax year (plan):** Prepare: Set up agents to draft each state’s update from its forms; Update as forms are published: Run states in parallel as each releases its 2026 forms and instructions; Finish and check: Late states, then rerun the TAXSIM comparison for 2026; Done by March 31, 2027: Every state complete, with March as a buffer.

**Major law changes in 2025:** Iowa: flat 3.8% rate; New Hampshire: interest and dividends tax repealed; Maryland: new top brackets, capital gains surtax; Wisconsin: wider 4.4% bracket, $1,200 exemption.

**Added or corrected in the model:** New Jersey: ANCHOR and Stay NJ property tax relief; Minnesota: K-12 education credit and subtraction; Indiana: county tax rates; California: alternative minimum tax thresholds.

Commitment: every state’s 2026 income tax rules complete by March 31, 2027.

BLS will want to know when each year’s rules are ready. Last year, the 2025 state income tax update ran from the first pull request on December 3, 2025 (Missouri, PR #6898) to the last merge on February 18, 2026 (California, PR #7418): 77 days, or 11 weeks. It covered 44 jurisdictions (the 41 states with a wage income tax, DC, New Hampshire’s interest and dividends tax repeal and Washington’s capital gains tax) in 47 pull requests from 5 contributors, about 22,400 added lines across 1,669 files. Pace: 2 states were done by December 31, 7 by January 31 and 14 by February 10, each worked one at a time with a full model review (median 24 days per pull request; Minnesota, New Jersey, Arizona and Michigan each added 1,300 to 3,100 lines, including programs that were missing). From February 11 to 18 the remaining 30 states were done in parallel (median 4 days per pull request), so most of the 11 weeks was the one-at-a-time phase. After release, federal non-conformity fixes followed from March to May (DC PR #7930, Idaho issue #7837, Maine issue #8122, South Carolina PR #7870), because those states did not adopt parts of the 2025 federal tax law (OBBBA), such as its larger standard deduction. The federal 2026 parameters are already in (IRS Rev. Proc. 2025-32, PR #7915). Plan for 2026: in November, set up agents that draft each state’s update from its forms (about a week of setup); from December, run states in parallel as forms are published; in February, finish the late states and rerun the TAXSIM comparison for 2026. We expect the update itself to take 1 to 6 weeks once forms are out. The commitment is that every state is complete by March 31, 2027, which leaves March as a buffer after last year’s February 18 finish. The update ships in PolicyEngine US and the emulator, independent of the Axiom migration. Sources: PolicyEngine US pull requests and issues on GitHub, pulled October 7, 2026.

## 29. Q&A and discussion (60–90 min)

- Which outcomes and years would be most useful?
- Which input assumptions create the most uncertainty?
- What evidence would support a broader evaluation?
- Which benefit extension would answer a concrete research question?

- [policyengine.org/us/taxsim](https://www.policyengine.org/us/taxsim) — Install, documentation and examples
- [policyengine.org/us/taxsim/run](https://www.policyengine.org/us/taxsim/run) — Run a TAXSIM-format file in the browser
- [policyengine.org/us/taxsim/dashboard](https://www.policyengine.org/us/taxsim/dashboard) — Agreement by year and state
- [github.com/PolicyEngine/policyengine-taxsim](https://github.com/PolicyEngine/policyengine-taxsim) — Source code and issue tracker

Use the separate 30-minute discussion for questions on the methods and potential CE collaboration. The links on the slide open the TAXSIM site, the web runner, the validation dashboard and the source code.

## 30. Thank you (closing slide)

- Max Ghenis · max@policyengine.org
- Pavel Makarchuk · pavel@policyengine.org
- David Trimmer · david@policyengine.org

policyengine.org/us/taxsim

Closing slide. Leave it up at the end so people can note the emails: max@policyengine.org, pavel@policyengine.org and david@policyengine.org.
