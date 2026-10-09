# BLS TAXSIM seminar: slide text and speaker notes

36 slides, including 6 section dividers and a closing slide: 60 minutes presenting, no slack, then a dedicated 30-minute Q&A slide.

Based on the September 2025 CRS TAXSIM section, PWBM 2026 validation material, IARIW 2026 imputation/calibration material in this repository, and the PolicyEngine TAXSIM site (policyengine.org/us/taxsim), captured October 5, 2026.

## Before presenting

- Presenters: Max Ghenis (sections 01, 05 and 06), Pavel Makarchuk (02 and 03), David Trimmer (04). Speakers change only at the section dividers, which name the presenter.
- Rehearse the live demo (slide 15) and the live dashboard (slide 23) on the presentation laptop and the BLS network. Confirm that both frames load. If a frame does not load, open the page in a browser tab.
- On the morning of the talk, open the dashboard and check that it loads. Its headline figures are in the notes for slide 22 for questions (2023: 89.8% federal and 94.9% state agreement within ±1% of gross income, data of September 23, 2026).
- The dashboard’s September 23 data treats S-corporation income as active. PR #1199 (September 29) made passive the default, so a refresh before the talk would change the federal figures; update the slide 22 notes if it does. NBER’s request to suspend testing (policyengine-taxsim #1248, September 25) was closed by Dan Feenberg on September 29.
- The validation section (slides 21–24, 10 minutes) has a full speaker script in `VALIDATION-SCRIPT.md`.
- Open policyengine.org/us/taxsim/run once before the talk: its first load took 9 seconds on October 8.
- Open slide 32 once before the talk: the embedded Axiom page took about 20 seconds to render the first time on October 8.
- Rehearse the Axiom run on slide 32 in a separate browser tab (axiom.org/app?compose=us%3Astatutes%2F26%2F21, Run tab) and leave that tab open: answers are lost on reload. The slide notes have the household and the fallbacks.
- Thesia Garner’s questions are answered in the notes of the slides that cover them; the agenda notes (slide 2) map each question to its slide.
- Confirm the CE-specific benefit methodology and pilot scope. These sections describe proposed research choices rather than a completed CE implementation.

# Introduction and context

## 1. Tax and benefit imputation for federal surveys (0–1 min)

- PolicyEngine’s TAXSIM emulator and beyond
- Max Ghenis, Pavel Makarchuk and David Trimmer
- BLS seminar · October 8, 2026

Introduce the speakers and thank the BLS hosts and the CE team.

## 2. Today’s discussion (1–2 min)

- Introduction and context — What PolicyEngine is, who uses and funds it, what it shows household by household, why we built an emulator, and how the NBER collaboration started.
- The TAXSIM emulator — A drop-in TAXSIM interface, where each calculation happens, versions and releases, and a live demo in the browser.
- Beyond TAXSIM — What PolicyEngine models beyond TAXSIM’s inputs and outputs, and the CE fields that could feed it.
- Validation — How a disagreement is resolved with the engines, independent validators and the law, the public dashboard, and the 2026 tax rules.
- Benefit imputation — Methods for missing survey inputs, what counts as household resources, and how to validate benefit imputations.
- What’s next — Axiom as our next-generation rules engine, with a live run, and a possible CE pilot.
- Q&A and discussion — Questions on the methods, implementation, and opportunities for collaboration.

The six sections total 60 minutes, leaving no slack before the 30-minute Q&A. Speakers change only at section dividers, and each divider names its presenter: Max Ghenis (01, introduction, slides 1–10, 11 minutes), Pavel Makarchuk (02 and 03, the emulator with the live demo and what goes beyond TAXSIM, slides 11–19, 23 minutes), David Trimmer (04, validation and the 2026 tax rules, slides 20–25, 12 minutes), then Max Ghenis (05 and 06, benefit imputation and what’s next, slides 26–34, 14 minutes). Thesia Garner’s question list (email of October 7) is answered inside the deck rather than on its own slide: transparency of the internal logic, the model’s scale and staffing on slide 4; users and funding on slide 5; why we built the emulator on slide 8; versions, release notes, input and output changes and support on Versions and releases (slide 14); in-kind benefits on slides 19 and 28; testing in the validation section (slides 21–24); the annual update on slide 25; the road map in What’s next (slides 31–34). Each of those slides’ notes carries the spoken answer.

## 3. Introduction and context (section divider)

Section divider 01, presented by Max Ghenis. Move on after a few seconds.

## 4. PolicyEngine: free, open-source microsimulation (2–4 min)

- Rules: federal and state taxes and major benefit programs
- Households: survey data enhanced and calibrated, or any household you enter
- Reforms: change any parameter and see the cost, poverty and distributional effects

Give the one-minute version of PolicyEngine: an open-source rules engine, a household dataset built from public surveys, and a way to score reforms. Keep the focus on the rules and the household data, because the TAXSIM emulator uses the same rules engine. The rules and the survey data are separate, so the same rules can serve any dataset. The TAXSIM adapter maps one input format into the model’s households, but it does not remove the research choices about missing data and participation; the benefit imputation section covers those. Answers Thesia’s question on reviewing the internal logic: all of it is public. PolicyEngine US and policyengine-core are AGPL-3.0 and the emulator is MIT. The US model has 6,266 parameter files, each citing the statute, regulation or agency document that sets it (for example, the child tax credit amount cites 26 U.S.C. 24(h)(2) and IRS Rev. Proc. 2025-32), 6,177 variable formula files and 4,932 YAML test files (policyengine-us main, October 8, 2026). The emulator’s input and output mappings are open too (config/variable_mappings.yaml). Adapted from the cpid-webinar-2026 deck (September 2026). The figures along the bottom: 95,000+ parameters (from the gettsim-2026 deck, September 3, 2026), 6,000+ variables (6,216 variable classes on October 8, 2026), 4,932 YAML test files and 103 programs in the coverage registry (policyengine-us main, October 8, 2026), and 133 contributors to the US model since 2021 (the GitHub list shows 136 accounts, 3 of them bots). Answers Thesia’s staffing question: the emulator is maintained by Pavel Makarchuk, David Trimmer and Max Ghenis; the US model it calls had 20 people committing in the past 12 months, and its code, tests and every issue are public, so the work does not depend on any one person. Do not put headcount or turnover figures on the record beyond what Max chooses to say.

## 5. Who uses and funds PolicyEngine (4–5 min)

- Federal users: BEA and the Joint Economic Committee
- Research institutions: Brookings, AEI, Niskanen, CRFB, Georgetown, USC, the University of Michigan and UHERO
- Benefit navigators: MyFriendBen, Amplifi, Mirza and Starlight

Point out the federal statistical user, BEA, because it is closest to the CE team’s work: BEA’s Distribution of Personal Income technical document (Marina Gindelsky, June 2026) says it runs PolicyEngine for years 2021 forward, and that the emulator “has enabled BEA to continue to produce Disposable Personal Income.” Quote only those fragments: the same footnote and section 7 call TAXSIM-35 discontinued, which we do not say, because NBER maintains TAXSIM and runs an open beta coded through 2024 law (apps.bea.gov/data/special-topics/distribution-of-personal-income/national/technical-document.pdf). Also point out the university research centers, such as the University of Michigan and UHERO (the University of Hawaii Economic Research Organization). Adapted from the cpid-webinar-2026 deck (September 2026). Answers Thesia’s funding question: PolicyEngine is a nonprofit, fiscally sponsored by the PSL Foundation. The funders shown are from the public supporters page (policyengine.org/us/supporters): Arnold Ventures, the National Science Foundation (a POSE Phase I grant, $299,974, September 2025 to August 2026, now ended), the Nuffield Foundation, NEO Philanthropy and the Pritzker Children’s Initiative, with support from organizations that build on the models, such as MyFriendBen. Max speaks to future funding.

## 6. OBBBA, household by household (5–6 min)

Live page: https://www.policyengine.org/us/obbba-households

Motivation, shown live: this is what the rules do for real households. The OBBBA Household Explorer (policyengine.org/us/obbba-households) shows 57,240 modeled records from PolicyEngine’s certified Microcosm Build P, weighted to 124.6 million US households in 2026; each record shows its total change in household resources and the marginal contribution of 21 modeled provisions, against a baseline in which the 2017 tax cuts expire. Its headline, as the page states it today: OBBBA increases resources by $546.1 billion, or $4,384 per household on average. Scroll through one or two income bands and open a single record. The point for this audience: every record runs the full federal and state tax and benefit rules, so every one of them has to be right, which is why we check our taxes against TAXSIM record by record (next slides). If the frame does not load, open the page in a browser tab.

## 7. Benefit cliffs as earnings rise (6–7 min)

Live page: https://www.policyengine.org/us/cliffwatch?s=DC&zip=20001&p=30%3Aa%3A%3A0%2C2%3Ac%3A%3A0&max=100000

Motivation, shown live. CliffWatch (policyengine.org/us/cliffwatch) maps benefit cliffs and marginal tax rates for a household as its wages and salaries rise: net resources, cliff zones and the contribution of each program, including SNAP, TANF, the EITC, the child tax credit, Medicaid, CHIP, ACA premium tax credits, WIC, school meals, Head Start, child care subsidies, housing assistance, SSI and federal and state income taxes, for all 50 states and DC. The link opens a District of Columbia household preset; change the state or household in the sidebar if asked. The point for this audience: these curves depend on taxes and benefits interacting correctly at every income, which is the same machinery the emulator exposes in TAXSIM’s format. If the frame does not load, open the page in a browser tab.

## 8. Why we built a TAXSIM emulator (7–8 min)

- **Microsimulation first.** PolicyEngine launched in 2021 to model federal and state taxes and benefits for any household or survey.
- **State taxes needed a benchmark.** In April 2022 we merged our first state income tax and began validating against TAXSIM35, record by record.
- **TAXSIM’s author on a successor.** “A successor to Taxsim is being built by PolicyEngine with my cooperation.” Daniel Feenberg, NBER TAXSIM page
- **One model for both uses.** The emulator runs TAXSIM files on the same open rules that score reforms and benefits.

Tell it in order, as cause and effect. PolicyEngine grew out of the UBI Center: our first model code dates to August 2020 (the openfisca-uk repository, now policyengine-uk), we launched PolicyEngine UK in October 2021, and the US model’s code started in June 2021. Say “started in 2020” or “launched in 2021” rather than “founded six years ago”: no page gives a founding year. We built a microsimulation model first, for scoring reforms and computing benefits. To get state income taxes right we needed a benchmark, and TAXSIM was the field’s: our first state income tax, Massachusetts, merged on April 30, 2022 (policyengine-us PR #715), and we opened the issue to validate against TAXSIM35 on April 19, 2022 (#704). On April 15, 2024 we launched beta state income tax modeling for all 50 states and DC, checked against TAXSIM for tax year 2021 in each state (43 states and DC have a broad income tax; the other seven have none). Dan Feenberg’s TAXSIM home page (taxsim.nber.org; first person, footer contact Daniel Feenberg) says: “A successor to Taxsim is being built by PolicyEngine with my cooperation.” The sentence uses “is being built”: do not say NBER has named or certified PolicyEngine as TAXSIM’s replacement, and do not quote the next sentence on that page, which says the emulator is fully compatible with TAXSIM files. Because the emulator runs on the same rules engine as the rest of PolicyEngine, fixes to the tax rules found through TAXSIM comparisons (163 PolicyEngine US pull requests since July 2024 cite them) also improve reform and benefit analysis, and the reverse. No public source says anything about Dan Feenberg’s plans; do not raise them. Sources: github.com/PolicyEngine/policyengine-us/pull/715, github.com/PolicyEngine/policyengine-us/issues/704, policyengine.org/us/research/state-tax-model-beta, taxsim.nber.org.

## 9. How the collaboration started (8–9 min)

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

## 10. The NBER collaboration (9–11 min)

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
- **Used in research and policy:** Joint Economic Committee, BEA, universities and benefit navigators

Start on the left with TAXSIM, end on the right with PolicyEngine, and use the middle for the agreement and how one interface routes tax years. Close with: both teams validate the emulator, and the work has improved how both TAXSIM and PolicyEngine encode tax law. TAXSIM has run at NBER since the 1970s; NBER still maintains it, and more than 1,200 papers cite the 1993 paper that introduced it. Think tanks such as Brookings and federal agencies rely on it. NBER started filing differences on the emulator’s public GitHub tracker in 2024 (first issue: September 22, 2024). The memorandum of understanding with NBER was announced on September 5, 2025. policyengine-taxsim 3.0.0 was released on September 29, 2026, one of 80 PyPI releases since February 2026. One interface covers every tax year: TAXSIM35 handles 1960–2020 (state law from 1977) and PolicyEngine handles 2021 onward. PolicyEngine facts (right): public code since June 2021, 133 contributors to the US model, 95,000+ parameters (from the gettsim-2026 deck, September 3, 2026) and 4,932 test files (recounted October 8, 2026). The benefit list follows the Benefits and taxes section of policyengine.org/us/taxsim, which also names housing vouchers, the EITC and the CTC. Optional context for this audience, not on the slide: the CE published TAXSIM-based tax estimates from the 2013 data through the 2023 data, and the 2024 data has none (BLS Monthly Labor Review, 2015; CE PUMD Getting Started Guide). Sources: https://www.policyengine.org/us/research/policyengine-nber-mou-taxsim and https://pypi.org/project/policyengine-taxsim/

# The TAXSIM emulator

## 11. The TAXSIM emulator (section divider)

Section divider 02, presented by Pavel Makarchuk. Move on after a few seconds.

## 12. A drop-in replacement for TAXSIM35 (11–14 min)

Installation (top of the slide), with macOS/Linux and Windows tabs: install the uv package manager (if you don't have it), then `uv tool install policyengine-taxsim`.

Get started (below), with interactive tabs, centered, as on policyengine.org/us/taxsim: CLI, Python, R, Stata, SAS and Julia. Each tab shows the TAXSIM35 code (before) beside the PolicyEngine TAXSIM code (after), with the changed parts highlighted. Click a tab during the talk; clicks do not advance the slide.

Existing TAXSIM workflows carry over in every supported environment, with no added complexity.

The table shows the swap that the TAXSIM site gives for six environments; the teal part is what changes. Shell, SAS and Julia only swap the command name. R swaps the package and function (library(policyenginetaxsim), then policyengine_calculate_taxes). Stata writes the file, runs the command and reads the result back. Python can call the runner on a data frame. After installation, setup_policyengine() is a one-time environment setup in R, and the R package also provides compare_with_taxsim(inputs). Ask CE staff which environment their current tax-imputation code uses. Source: https://www.policyengine.org/us/taxsim, read October 5, 2026. For Stata, SAS and Julia: if the command is not found, run uv tool dir --bin and use the full path it prints.

## 13. Where each calculation happens (14–17 min)

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

## 14. Versions and releases (17–19 min)

- **One release, every tax year.** Parameters carry dated values, so there is no separate version per tax year.
- **Merged changes ship automatically.** Tests run on every pull request, and a release reaches PyPI only after its tests pass.
- **Typed changelog entries.** CI checks each pull request for an entry: added, changed, fixed, removed or breaking.
- **Support on the public tracker.** Every report and its resolution stay visible on GitHub.

**286** PolicyEngine US releases, July 10 to October 7 · **15** Emulator releases in the same 90 days · **Every year** Each release computes every tax year it covers · **About 1 day** Median first reply to NBER’s reports, last 90 days

Pin both packages to reproduce a run:

```bash
uv tool install --python 3.11 \
  policyengine-taxsim==3.0.1 \
  --with policyengine-us==2.25.2
```

Needs Python 3.11 or later. Without a pin, the emulator takes the newest PolicyEngine US release. PyPI does not keep every release, so record both versions and archive the environment with each run.

The file format stays TAXSIM’s. The last breaking change, 3.0.0 on September 29, made S-corporation income passive by default for the net investment income tax, as TAXSIM treats it.

Answers Thesia’s production-reliability and version-notes questions. Release schedule: there is no separate version per tax year. Parameters carry dated values (the EITC phase-out start file runs from 1995 and cites IRS releases through 2026), so every release computes every tax year it covers. Merged changes ship automatically, often several in one release: both repositories bump the version from the changelog fragments and publish to PyPI after the tests pass (PolicyEngine US waits for its full suite; the emulator for lint and pytest on Linux, macOS and Windows; policyengine-us push.yaml, policyengine-taxsim ci.yml). From July 10 to October 7 that was 286 PolicyEngine US releases, about three a day, and 15 emulator releases; each release is small, about two changelog entries. Tests run on every pull request, but GitHub does not block a merge that fails them; merging is a reviewer’s decision. A newer release can change an earlier year’s result when a fix lands, which is why a study pins both packages: the command on the slide resolves on Python 3.11 (policyengine-taxsim 3.0.1 with PolicyEngine US 2.25.2, the versions behind the examples in this deck); on Python 3.10 it cannot resolve, and an unpinned install there falls back to an older 1.x model with the older S-corporation default. Without a pin, the emulator accepts any PolicyEngine US release from 1.711.0 on and takes the newest. The output file does not record versions yet, so log both with each run; a version stamp in the output is a reasonable request. PyPI does not keep every PolicyEngine US release: only five from before July 2026 remain, and 1.711.0, the emulator’s own minimum, is gone. For long-lived reproducibility, archive the installed environment or wheels with the results. The documentation page’s pin example (policyengine-us 1.555.0) names a version PyPI no longer has; use a current pair. Version notes: CI checks each pull request for a changelog entry typed added, changed, fixed, removed or breaking, and the CHANGELOG files in both repositories list them by version (for example, policyengine-us 2.33.1 on October 8 fixed CalEITC earned income to FTB 3514 line 19). The entries are grouped by change type, not policy area, so a tax-law-only list per tax year would be produced from the changelog and the parameter files that changed; whether to offer BLS such a digest is Max’s call. Input and output changes: the format stays TAXSIM’s; under the current release script a breaking entry bumps the major version, and the only breaking change so far, 3.0.0 on September 29, made S-corporation income passive by default for the net investment income tax, as TAXSIM treats it, and added --scorp-treatment to choose. Open pull requests would report v19, v29 and Massachusetts v36 as TAXSIM-35 defines them, without changing liabilities (#1407), and return Python runner rows in input order (#1406). Use Python 3.11 or later: PolicyEngine US 2.x requires it. Support: the public GitHub tracker, where every report and its resolution stays visible; NBER filed 121 issues in the last 90 days; for the 113 with a reply, the median first PolicyEngine reply came in 23.5 hours, or 24.4 hours counting the 8 without one as unanswered. There is no support email; any support commitment to BLS is Max’s call. Documentation: policyengine.org/us/taxsim (install, usage, variable mappings), the GitHub README, the R package (policyenginetaxsim 0.1.0, installed from GitHub, not yet on CRAN) and the PolicyEngine US documentation at policyengine.github.io/policyengine-us. Sources: pypi.org/pypi/policyengine-us/json, pypi.org/pypi/policyengine-taxsim/json, github.com/PolicyEngine/policyengine-taxsim/blob/main/CHANGELOG.md and the GitHub issue tracker, October 8, 2026.

# Live demonstration

## 15. Live demo: run the sample file (19–29 min)

Live page: https://www.policyengine.org/us/taxsim/run

Go straight into the live demo after Versions and releases and before Beyond TAXSIM. Click inside the frame to use the page. The frame keeps keyboard focus, so click the slide title before you press the arrow keys again. Use Expand for a larger view. Do not use the email form. Run and download in browser saves a CSV on the presentation laptop; open it to show the results for each household. Rehearse on the presentation laptop and network: confirm that the frame loads and note how long the run takes. Start by loading the 3-household sample and reading household 1 aloud: a married couple in California (state code 5, mstat 2) with two dependents and $80,000 and $50,000 in wages. If the frame does not load, open policyengine.org/us/taxsim/run in a browser tab. Demo steps: (1) Load the 3-household sample; (2) Keep Standard output: federal and state tax, FICA and marginal rates; (3) Run and download in the browser; (4) Read the results for each household; (5) Switch to Full for AGI, credits, deductions and AMT.

# Beyond TAXSIM

## 16. Beyond TAXSIM (section divider)

Section divider 03, presented by Pavel Makarchuk. Move on after a few seconds.

## 17. Additional inputs beyond TAXSIM (29–31 min)

| Area | TAXSIM input | Limit | PolicyEngine adds |
|---|---|---|---|
| Business income | `pbusinc`, `pprofinc`, `scorp` | The qualified business income deduction limits need W-2 wages and property basis. | `w2_wages_from_qualified_business`, `unadjusted_basis_qualified_property` |
| Itemized deductions | `mortgage`, `otheritem`, `proptax` | Other itemized deductions arrive as one total, without the charitable or medical expense limits. | `charitable_cash_donations`, `other_medical_expenses` |
| State and local taxes | `state` | Without the household’s location, county and city income taxes are excluded. | `county_fips` |
| Household | `page`, `sage`, `depx`, `ageN` | Dependents carry only an age, with no disability or student status. | `is_disabled`, `is_full_time_college_student` |
| Unearned income | `intrec`, `dividends`, `pensions`, `gssi` | Reported for the couple, with no income types such as IRA withdrawals or disability benefits. | `taxable_ira_distributions`, `social_security_disability` |

**Why it matters:** Existing TAXSIM files run unchanged. Added variables, from a survey or an imputation, let PolicyEngine apply more detailed rules.

Explain how a TAXSIM input row becomes a PolicyEngine household, and what the format cannot carry. Business income: the emulator maps pbusinc and sbusinc (with psemp and ssemp) to self-employment income, pprofinc and sprofinc to income from a specified service trade or business, and scorp to partnership and S-corporation income. TAXSIM’s own QBI deduction is a flat 20% with the service-business phase-in, capped by taxable income, with no W-2 wage or property test. PolicyEngine applies those limits, so without W-2 wages the deduction phases out above the threshold; the emulator’s --assume-w2-wages option reproduces TAXSIM’s simpler rule (available on the policyengine and compare commands, not on the default drop-in command). Itemized deductions: TAXSIM’s mortgage and otheritem are aggregates; the emulator sums them into deductible mortgage interest, which has no floor or cap, to match TAXSIM, because charity and medical would bring AGI caps and floors that TAXSIM does not apply. Property tax maps to real estate taxes. State and local taxes: PolicyEngine computes the state income tax for the SALT deduction; TAXSIM input has no county or city, so Maryland county tax is set to zero and city taxes such as New York City’s do not apply. Do not present the 2025 SALT cap as a difference: TAXSIM also applies it. Household: TAXSIM gives the two adults’ ages (page, sage), the number of dependents (depx) and each dependent’s age (age1 to ageN); filing status comes from mstat. Dependents have no disability or student status. PolicyEngine’s is_disabled input feeds SNAP, SSI and many state credits, and is_full_time_college_student sets the student rules for the EITC and dependent credits (the EITC’s own disability test uses is_permanently_and_totally_disabled). Unearned income: TAXSIM reports interest (intrec), dividends, capital gains, pensions and Social Security (gssi) for the tax unit, and the emulator divides them between spouses for joint filers (evenly, or to the older spouse across a state’s age rule for pensions and Social Security). The fields also carry no type: pensions include IRA withdrawals, and gssi does not separate retirement, disability and survivor benefits. taxable_ira_distributions and social_security_disability add those types; taxable_interest_income and qualified_dividend_income are not on the slide, because the emulator already fills them from intrec and dividends. Sources: policyengine-taxsim 3.0.1 config/variable_mappings.yaml and runners/policyengine_runner.py; TAXSIM source law87.for. Each card ends with the PolicyEngine US input variables that remove the limit, which a survey or an imputation can supply: w2_wages_from_qualified_business and unadjusted_basis_qualified_property apply the wage and property limits of the qualified business income deduction; charitable_cash_donations and other_medical_expenses give each deduction its own adjusted gross income limit or floor; county_fips places the household, which turns on city and county income taxes such as New York City’s and the Indiana county taxes; is_disabled and is_full_time_college_student give dependents the status that credits and benefits use; taxable_ira_distributions and social_security_disability add the income types TAXSIM does not carry. Related input variables not on the slide: business_is_sstb, qualified_reit_and_ptp_income, charitable_non_cash_donations, home_mortgage_interest, is_permanently_and_totally_disabled, is_incapable_of_self_care, taxable_401k_distributions, social_security_survivors and tax_exempt_interest_income. Variable names checked in PolicyEngine US source on October 7, 2026.

## 18. CE survey variables mapped to PolicyEngine inputs (31–33 min)

| CE collects | PolicyEngine input | Calculations it supports | TAXSIM |
|---|---|---|---|
| **Medical costs and premiums:** `HEALTHCQ`, `HLTHINCQ` | `other_medical_expenses`, `health_insurance_premiums` | Applies the medical deduction’s income floor and the SNAP medical deduction | Only the deductible amount, in one total |
| **Charitable gifts:** `CASHCOCQ` | `charitable_cash_donations` | Charity deduction, including the 2026 deduction for non-itemizers | In one total with mortgage interest |
| **Tuition:** `EDUCACQ` | `qualified_tuition_expenses` | American Opportunity and Lifetime Learning credits | No field |
| **College enrollment:** `IN_COLL` | `is_full_time_college_student` | Student rules for EITC and dependent credits, and SNAP | No field |
| **Car loan interest:** `VEHFINCQ` | `auto_loan_interest` | Car loan interest deduction for 2025 to 2028 | No field |
| **Utilities:** `UTILCQ` | `gas_expense`, `water_expense`, `pre_subsidy_electricity_expense` | SNAP utility allowance and shelter deduction | No field |
| **Benefits received:** `JFS_AMT`, `SSIX`, `WELFAREX` | `ssi_reported`, `takes_up_snap_if_eligible` | Compares simulated SNAP, SSI and TANF with reported receipt | One transfers total |

CE variables from the 2024 Interview public-use microdata dictionary; PolicyEngine US variable names.

Show which CE fields could feed PolicyEngine inputs that TAXSIM’s format cannot carry. All CE variables are in the 2024 Interview PUMD dictionary (FMLI unless noted; IN_COLL and SSIX are on MEMI). Medical: HEALTHCQ is the sum of HLTHINCQ, MEDSRVCQ, PREDRGCQ and MEDSUPCQ; TAXSIM takes only deductible medical expenses, already above the AGI floor, in its mortgage total, so the CE applied the floor itself. PolicyEngine applies the floor and also uses medical costs for the SNAP excess medical deduction for elderly and disabled members. Charity: CASHCOCQ also includes alimony, child support, gifts and political giving, so use the charity codes in the CNT detail file. Tuition: EDUCACQ includes K-12 tuition; college tuition is UCC 670110. College enrollment: IN_COLL is 1 full time, 2 part time, 3 not at all. TAXSIM’s documentation instead asks users to code students aged 20 to 23 as 19. Car loans: VEHFINCQ is vehicle finance charges; the 2025 deduction also requires final assembly in the United States, which the CE does not record. Utilities: UTILCQ is the sum of natural gas, electricity, fuels, telephone and water; TAXSIM has no utility field, and PolicyEngine uses utility costs for the SNAP standard utility allowance and shelter deduction. Rent is not listed, because TAXSIM already takes rentpaid. Benefits: JFS_AMT is the annual value of SNAP (with FS_MTHI months), SSIX is SSI per member, and WELFAREX is public assistance; TAXSIM takes one transfers total, used for state rebates. Quarterly spending variables (CQ and PQ) cover a three-month reference period; income variables cover 12 months. Context for this audience: from the second quarter of 2013 through the 2023 data, CE published federal and state tax estimates from TAXSIM; the 2024 data has no tax or after-tax income estimates, because the model was not updated for the 2024 tax year (CE PUMD Getting Started Guide). The emulator covers tax years 2021 onward. Sources: https://www.bls.gov/cex/pumd/ce-pumd-interview-diary-dictionary.xlsx, https://www.bls.gov/cex/pumd-getting-started-guide.htm, https://taxsim.nber.org/taxsim35/ and PolicyEngine US source, October 7, 2026.

## 19. What PolicyEngine calculates beyond TAXSIM (33–34 min)

| Area | In the emulator | PolicyEngine calculates |
|---|---|---|
| Benefit programs | Set to zero in the emulator, because some state taxes count cash assistance as income. | `snap`, `ssi`, `tanf`, `wic` |
| Health coverage | Separate from income tax, and not reported by the emulator. | `medicaid`, `chip`, `aca_ptc` |
| Additional state tax credits | Zero without inputs TAXSIM lacks, such as disability status, tuition or care work. Renters’ credits use rentpaid. | `id_aged_or_disabled_credit`, `ar_personal_credit_disabled_dependent`, `ny_college_tuition_credit`, `co_care_worker_credit` |
| Federal provisions | Zero without inputs TAXSIM lacks, such as tips, overtime or tuition. | `tip_income_deduction`, `overtime_income_deduction`, `american_opportunity_credit` |

**Why it matters:** The emulator leaves these out to match TAXSIM. Additional outputs are available in the PolicyEngine web app, Python package and API.

Show what PolicyEngine calculates that TAXSIM’s output does not carry, and how the emulator handles each item so that its results stay comparable with TAXSIM. Benefit programs: PolicyEngine calculates SNAP, SSI, TANF, WIC and the state SSI supplements; the emulator sets them to zero, because TAXSIM has no inputs for them and some state taxes count cash assistance as income (for example, the base of the Massachusetts senior circuit breaker credit; policyengine-taxsim issue #1031). Health coverage: Medicaid, CHIP and the ACA premium tax credit are separate PolicyEngine variables; the premium tax credit is not part of PolicyEngine’s income tax, and the emulator does not report any of them. Additional state tax credits: the four on the slide need inputs TAXSIM lacks, and TAXSIM does not model the first two at all. The Idaho aged or disabled credit is for a filer who supports a family member aged 65 or older or a person with a disability; TAXSIM’s Idaho routine has the child tax, grocery, investment and political contribution credits, but not this one. The Arkansas credit gives $500 for each dependent with a disability (Form AR1000F); TAXSIM’s Arkansas personal credit counts filers, dependents and people aged 65 or older, with no disability input. The New York college tuition credit needs tuition paid, and the Colorado care worker credit needs care worker status. Other state credits that need inputs TAXSIM does not have: the Minnesota K-12 education credit (tuition), the 529 plan credits in Indiana, Oregon, Utah and Vermont, the Louisiana and Nebraska school readiness credits, the Connecticut and Nebraska stillborn credits and the Vermont veteran tax credit. If asked about Maryland: TAXSIM models the Maryland child tax credit from 2023 for children under 6, but not its extension to children with a disability up to age 16, and not the 2021 and 2022 credit, which was only for children with a disability. Renters’ credits: TAXSIM models most renters’ and property tax credits from rentpaid (for example California, Minnesota and Vermont, and the homestead or property tax credits in Arizona, Michigan, Wisconsin, Missouri, New Jersey, Maine, New York and DC), so they appear in both engines and in the comparison. PolicyEngine adds detail that needs other inputs, such as disability status in Minnesota’s renter’s credit, county income limits and shared rent in Vermont’s renter credit, and heat included in rent for Michigan’s home heating credit. Sources for the TAXSIM side: the state routines in the TAXSIM source (for example 05ca.for, 24mn.for and 46vt.for). Sources: TAXSIM source 13id.for, 04ar.for and 21md.for; PolicyEngine US source, October 8, 2026. Federal provisions: the deductions for tips, overtime and car-loan interest, the American Opportunity and Lifetime Learning credits (tuition) and the saver’s credit (retirement contributions) need inputs that TAXSIM does not have, so they are zero in emulator runs; PolicyEngine calculates them when a data source supplies the inputs. Conventions kept from TAXSIM, if asked: fiitax includes the net investment income tax but not the Additional Medicare Tax, which is reported with payroll taxes; fica includes both the employee and employer shares; one-time state rebates are in siitax and also reported as srebate; frate and srate come from a second run with $100 more wages. Sources: policyengine-taxsim 3.0.1 runners/policyengine_runner.py, core/state_output_resolver.py and config/variable_mappings.yaml; PolicyEngine US source, October 7, 2026.

# Validation

## 20. Validation (section divider)

Section divider 04, presented by David Trimmer. Move on after a few seconds.

## 21. Three calculations, one arbiter (34–37 min)

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

Walk the four steps on the left, then point to the triangle. (1) A mismatch between PolicyEngine and TAXSIM on a CPS record becomes a GitHub issue; NBER files most of them. (2) An agentic workflow explores the disagreement: it reruns the record in both engines, checks third-party validators such as a completed TaxAct return or Axiom’s encoding of the statute, and reads the statute and the official instructions. (3) The findings become a recommendation to adjust one engine, or to agree a convention with NBER when TAXSIM’s inputs cannot carry what the law needs; a person reviews every recommendation before it is posted or merged. (4) After the fix ships, the record is rerun to confirm the disagreement is gone. The validators do not vote: the statute and the official instructions decide which calculation is right, because two engines can share an error that no agreement rate would reveal. PolicyEngine fixes carry tests whose expected values come from the form or statute. Answers Thesia’s testing question, with the next two slides: every pull request runs the automated tests, and a release reaches PyPI only after its tests pass; merging is a reviewer’s decision, so GitHub does not block a failing pull request automatically. PolicyEngine US has 4,932 YAML test files, and the emulator has 276 Python test functions that run on Linux, macOS and Windows (October 8, 2026).

## 22. How this process shapes the emulator (37–39 min)

1. **Compile.** Every resolved case is stored as an issue on the emulator’s GitHub tracker, with the input row, both results and the resolution.
2. **Lock in.** PolicyEngine fixes ship with a test case, so a resolved disagreement cannot quietly return.
3. **Compare by area.** The dashboard reruns every state and year, showing how complete each area’s agreement is.
4. **Prioritize.** The areas with the lowest agreement set what we look at next.

**111,347** Enhanced CPS households · **2021–2025** Tax years · **50 + DC** States in the comparison · **2 engines** TAXSIM35 and PolicyEngine

Each PolicyEngine release and each TAXSIM update reruns the comparison.

Each resolved case does not end with the fix. It is compiled on the emulator’s GitHub issue tracker with the input row, both engines’ results and the resolution, PolicyEngine fixes ship with a test so the disagreement cannot quietly return, and the dashboard reruns every state and year so we can compare how complete each area’s agreement is. The lowest-agreement areas set what we look at next. The figures describe the comparison on the public dashboard: 111,347 Enhanced CPS households, tax years 2021–2025, all 50 states and DC, run through both engines. If asked for agreement rates: for 2023, 89.8% agree on federal tax and 94.9% on state tax within ±1% of gross income (data update of September 23, 2026). The comparator default is ±$15. Check the dashboard the day before: its September 23 data treats S-corporation income as active, and PR #1199 (September 29) made passive the default, so a refresh would change the federal figures. If asked about #1248: Dan Feenberg opened it on September 25 about his own TAXSIM changes, closed it on September 29, and has filed issues since. The dashboard data also fixed the Alabama coding (state 1, 1,155 households, separate from Texas) in the September 24 release. Source: https://www.policyengine.org/us/taxsim/dashboard

## 23. The public validation dashboard (39–42 min)

Live page: https://www.policyengine.org/us/taxsim/dashboard

About 3 minutes: a quick overview, then one or two examples. Show the dashboard as the output of the process, not as a list of figures. Pick a year, change the tolerance, scroll the state table and inspect one state to show the household list; a second state with near-complete agreement shows what a resolved area looks like. The headline figures are in the notes for the previous slide if someone asks. Check the page on the morning of the talk, because it can update. Click the slide title before you press the arrow keys. If the frame does not load, open policyengine.org/us/taxsim/dashboard in a browser tab. Dashboard steps: (1) Pick a tax year, 2021 to 2025; (2) Choose a tolerance; (3) See agreement by state; (4) Inspect a state to list its households.

## 24. From a reported difference to a fix (42–44 min)

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

## 25. When the 2026 tax rules will be ready (44–46 min)

**44** Jurisdictions updated for 2025: 41 income-tax states, DC, NH and WA · **47** Pull requests from 5 contributors · **11 weeks** First pull request to last merge, Dec 3 – Feb 18 · **30** States finished in the last week, worked in parallel

**2025 tax year (what happened):** Dec 3 – Feb 10: one state at a time: Full model reviews, adding missing programs and fixing errors: 14 states done; Feb 11–18: 30 states in parallel: all 44 done; Mar – May: follow-up fixes: Federal non-conformity in DC, Idaho, Maine and South Carolina.

**2026 tax year (plan):** Prepare: Set up agents to draft each state’s update from its forms; Update as forms are published: Run states in parallel as each releases its 2026 forms and instructions; Finish and check: Late states, then rerun the TAXSIM comparison for 2026; Done by March 31, 2027: Every state complete, with March as a buffer.

**Major law changes in 2025:** Iowa: flat 3.8% rate; New Hampshire: interest and dividends tax repealed; Maryland: new top brackets, capital gains surtax; Wisconsin: wider 4.4% bracket, $1,200 exemption.

**Added or corrected in the model:** New Jersey: ANCHOR and Stay NJ property tax relief; Minnesota: K-12 education credit and subtraction; Indiana: county tax rates; California: alternative minimum tax thresholds.

Commitment: every state’s 2026 income tax rules complete by March 31, 2027.

BLS will want to know when each year’s rules are ready. Last year, the 2025 state income tax update ran from the first pull request on December 3, 2025 (Missouri, PR #6898) to the last merge on February 18, 2026 (California, PR #7418): 77 days, or 11 weeks. It covered 44 jurisdictions (the 41 states with a wage income tax, DC, New Hampshire’s interest and dividends tax repeal and Washington’s capital gains tax) in 47 pull requests from 5 contributors, about 22,400 added lines across 1,669 files. Pace: 2 states were done by December 31, 7 by January 31 and 14 by February 10, each worked one at a time with a full model review (median 24 days per pull request; Minnesota, New Jersey, Arizona and Michigan each added 1,300 to 3,100 lines, including programs that were missing). From February 11 to 18 the remaining 30 states were done in parallel (median 4 days per pull request), so most of the 11 weeks was the one-at-a-time phase. After release, federal non-conformity fixes followed from March to May (DC PR #7930, Idaho issue #7837, Maine issue #8122, South Carolina PR #7870), because those states did not adopt parts of the 2025 federal tax law (OBBBA), such as its larger standard deduction. The federal 2026 parameters are already in (IRS Rev. Proc. 2025-32, PR #7915). Plan for 2026: in November, set up agents that draft each state’s update from its forms (about a week of setup); from December, run states in parallel as forms are published; in February, finish the late states and rerun the TAXSIM comparison for 2026. We expect the update itself to take 1 to 6 weeks once forms are out. The commitment is that every state is complete by March 31, 2027, which leaves March as a buffer after last year’s February 18 finish. The update ships in PolicyEngine US and the emulator, independent of the Axiom migration. If the change panels are hidden on a short screen: major law changes in 2025 were Iowa’s flat 3.8% rate, New Hampshire’s interest and dividends tax repeal, Maryland’s new top brackets and capital gains surtax, and Wisconsin’s wider 4.4% bracket and $1,200 exemption; added or corrected in the model were New Jersey’s ANCHOR and Stay NJ property tax relief, Minnesota’s K-12 education credit and subtraction, Indiana county tax rates and California’s alternative minimum tax thresholds. Sources: PolicyEngine US pull requests and issues on GitHub, pulled October 7, 2026. Answers Thesia’s question on annual updates: yes, every year; the federal 2026 parameters are already in, and this slide is the state schedule.

# Benefit imputation

## 26. Benefit imputation (section divider)

Section divider 05, presented by Max Ghenis. Move on after a few seconds.

## 27. Imputing a distribution of missing inputs (46–48 min)

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

## 28. What counts as household resources? (48–50 min)

One California household in 2025 (a single parent, children aged 4 and 7, $25,000 in wages), four resource concepts.

- **Earnings:** $25,000 (Wages before taxes)
- **After taxes and credits:** $34,461 (+$9,461: EITC, child tax credit and California credits, less payroll tax)
- **Plus cash and food benefits:** $43,931 (+$9,470: CalWORKs $5,200, SNAP $2,442, school meals $1,116, WIC $712)
- **Plus Medi-Cal at cost:** $71,640 (+$27,709 for three enrollees)

The resource concept, not the calculator, decides whether $25,000 of earnings becomes $34,000 or $72,000.

PolicyEngine US 2.25.2, run October 5, 2026. Benefits assume take-up; Medi-Cal is valued at average cost per enrollee.

Each bar adds one component for one California household: a single parent with children aged 4 and 7 and $25,000 in wages (PolicyEngine US 2.25.2, 2025). A household calculation assumes take-up; in the microdata, take-up is assigned at published rates (SNAP 82% from USDA; Medicaid 78% in California, from KFF and MACPAC). Taxes and credits: the federal EITC and refundable child tax credit and California’s CalEITC and Young Child Tax Credit, less the employee payroll tax. CalWORKs is California’s TANF program. The jump from $43,931 to $71,640 shows why Medicaid needs an explicit valuation choice: cost per enrollee, insurance value and household valuation give different answers, and this talk does not pick one. Establish whether CE research wants potential entitlements, actual receipt, or a broader resource measure. Answers Thesia’s question on in-kind transfers (NSLP, WIC, Medicaid): PolicyEngine US calculates them; the emulator sets benefits to zero to stay comparable with TAXSIM, and the values come from PolicyEngine US through Python, the API or the web app. Valuation, if asked: school meals (school_meal_net_subsidy) are the federal NSLP lunch plus SBP breakfast reimbursement for the child’s tier, less the paid-meal rate, for 180 school days per K-12 child, so they are an upper bound on what a child receives; WIC is USDA’s 2018 food-package cost uprated by CPI-U, with the current cash-value benefit; Medicaid and CHIP are state spending (KFF and MACPAC) spread across enrollees by an age-rated premium index, a cost-per-enrollee value, the same kind of value as the CMS per-enrollee cost in BLS’s consumption measure (Monthly Labor Review, April 2023). Heating assistance is modeled in 9 states and DC, with no national LIHEAP formula yet (policyengine-us main, October 8, 2026).

## 29. Validation of benefit imputations (50–52 min)

**≈40%** of SNAP recipients are missing from CPS reports, measured against linked administrative records. (Meyer and Mittag, NBER Working Paper 21676)

- **External benchmarks.** Compare imputed receipt and amounts with administrative totals.
- **Errors by group.** Check how errors differ by income, household type and state.
- **Holdout tests.** Test on data held back from estimation, and try alternative assumptions.
- **Calibration is not validation.** A target used to fit the weights cannot also validate them.

Meyer and Mittag link the CPS to administrative records and find that the survey misses about 40 percent of SNAP recipients (NBER Working Paper 21676). This is why PolicyEngine computes benefits from program rules and calibrates weights to administrative totals instead of relying on reported receipt. Explain that fitting a target is not independent validation against that target. CE weight changes would be a separate methodological decision, not a prerequisite for the initial tax comparison. Source: the cpid-webinar-2026 deck’s baseline slide and policyengine-slides/slideshows/iariw-2026/slides/CalibrationSlide.tsx.

# What’s next

## 30. What’s next (section divider)

Section divider 06, presented by Max Ghenis. Move on after a few seconds.

## 31. Axiom: our next-generation rules engine (52–54 min)

Axiom encodes tax and benefit rules from the law, with a test for every federal rule module. We are moving PolicyEngine onto it in steps.

**Today: PolicyEngine US runs the emulator.** Tax years 2021 onward compute on PolicyEngine US; The 2026 rules ship there by March 31, 2027; Axiom publishes open comparisons with PolicyEngine and TAXSIM.

**Planned: Axiom on the backend.** PolicyEngine’s Python interface wraps Axiom, as it already does for a Belgium pilot; The TAXSIM emulator could run on Axiom; New programs arrive as encodings of the law, with tests.

**Throughout: Backwards compatible.** TAXSIM-format files in and out; The same command-line and Python calls; We keep powering TAXSIM for as long as it is needed.

We keep pushing the rules further without breaking the files and code that depend on them.

Axiom today: 1,147 federal and 3,733 state rule modules (rulespec-us, CC BY 4.0) on an MIT-licensed Rust engine. It does not yet compute a complete federal return.

Answers Thesia’s road-map question. Frame Axiom as our next-generation rules engine. Today: tax years 2021 onward run on PolicyEngine US, and the 2026 update ships there by March 31, 2027, whatever Axiom’s timeline. Axiom encodes rules from the law with companion tests: at rulespec-us a9dc38f (October 6, 2026) there are 1,147 federal rule modules, each paired with a test, and 3,733 state modules across 50 states and DC, with uneven coverage (Colorado has 1,284; 25 jurisdictions have fewer than 10). The engine (axiom-rules-engine) is Rust under MIT; the encodings are CC BY 4.0. Axiom publishes its comparisons with PolicyEngine and TAXSIM as open reports (269 at axiom-oracles.vercel.app). The plan, in Max’s words: we keep powering TAXSIM for as long as it is needed, possibly with Axiom on the backend instead of PolicyEngine US, and PolicyEngine wrappers over Axiom keep existing code working for as long as needed, so the frontier moves forward in a backwards-compatible way. Shipped evidence for the wrapper approach: policyengine.py already runs one country on Axiom, a Belgium pilot for worker social contributions and personal income tax (policyengine.py PR #448, tests/test_be_axiom_pilot.py); a US model on Axiom has no code yet. Axiom’s validation suite already turns its cases into TAXSIM rows and runs both TAXSIM-35 and the emulator on them (axiom-oracles adapters/taxsim). On the emulator, a CI test already pins the command-line entry point (tests/test_cli_entry_point.py). The emulator’s side of that plan is written up in policyengine-taxsim PR #1153 (open, not merged): the command-line tool, the Python import path and TAXSIM-format files stay fixed, with contract tests for those entry points; output values still change when the law or a fix changes them. No migration date is set. If asked about readiness: Axiom does not yet compute a complete federal return (rulespec-us #1318, a cyclic dependency in the composed federal compile, is open; the payroll tax encoding lacks the wage-base cap, axiom-encode #1214), and its API has no certified release, so BLS would run on PolicyEngine US and the emulator. If asked about independence: Max leads both, and the PSL Foundation sponsors both; Axiom is a second reading of the statute, and the statute and official instructions decide disagreements. Do not cite the Axiom-versus-TAXSIM federal run (87,519 tax units): it compares Axiom with a 2026 TAXSIM test build, not with the emulator. Max speaks to funding here.

## 32. Axiom, live: the child care credit (54–56 min)

Live page: https://axiom.org

A two-minute walk-through of one federal tax provision running in Axiom. The page shows 26 U.S.C. 21 next to its encoded rules; each rule cites its subsection (for example “26 USC § 21(a) · parameter”). The frame opens on axiom.org’s home page; it can take about 20 seconds to render the first time, so open this slide once before the talk. Steps: (1) from the home page, click Explore the law, which opens the law library and rule graph; (2) search “dependent care” and open the first result, Child and dependent care credit (Federal · 26 USC § 21): the statute text sits next to its 44 encoded rules, each citing its subsection; (3) click “graph ↗”, which opens the §21 rule graph in a new browser tab with room for the Run form, and open its Run tab; (4) tax unit: AGI 40000, earned income 40000, expenses paid 3000, tax before the credit 5000, and set Expense Requirements, TIN Included and Service Provider Info to true; add person 2, age 4, child dependent true; (5) Run scenario: the rate is 37% and the credit $1,110; (6) change AGI and earned income to 100000 and rerun: 22% and $660. The arithmetic to say aloud: $40,000 of AGI is 12.5 steps of $2,000 above $15,000, which rounds up to 13, so the rate is 50% − 13 points = 37%, and 37% of $3,000 is $1,110. Above $75,000 a second phase-down applies, to 22% at $100,000. The credit is nonrefundable, so $500 of tax caps it at $500. These are the parameters for 2026 (50% maximum, 35% then 20% floors). The 2021 expansion is carried behind an explicit input flag, and the 2022–2025 rules are not encoded, so this module does not yet reproduce past tax years by period. The run executes Axiom’s Rust rules engine, compiled to WebAssembly and served by the Axiom API, and the response names the engine release and the compiled artifact’s hash. Say plainly that this is a preview: results are uncertified (the API’s certified set is empty), and the EITC, child tax credit and income tax core do not run live yet, which is why production TAXSIM emulation stays on PolicyEngine US. The EITC page (axiom.org/us/statute/26/32) shows its statute and 26 encoded rules, for reading only. Fallbacks: rehearse the run once in a separate tab shortly before presenting, which also warms the API (a first call took about 5 seconds), and do not reload it (answers are lost on reload); if the engine call stalls (one test call in 18 timed out), stay on the statute page and narrate the $1,110 calculation; the simplest live alternative is self-employment tax (axiom.org/app?compose=us%3Astatutes%2F26%2F1401: $50,000 gives $7,650), kept below the wage base. Use the singular “statute” in URLs: /us/statutes/26/32 renders a not-found page. Checked October 8, 2026 against axiom.org master 3662668e and rulespec-us us/statutes/26/21.yaml.

## 33. Where this could fit in CE research (56–58 min)

**CE tax-unit records** (An agreed set of inputs for one year.) → **CE’s TAXSIM estimates** (Published for 2013–2023 data.) and **PolicyEngine TAXSIM emulator** (The same file, no format changes.) → **Compare** (Household results and weighted summaries.) → **Review** (Explain differences before expanding the scope.)

Outputs to compare first: fiitax (Federal income tax), siitax (State income tax), fica (Payroll tax), v22 (Child tax credit), v25 (Earned income credit), frate (Federal marginal rate).

Keep CE definitions and weights fixed in the first comparison.

This is a proposed integration path, not a tested CE implementation. CE published federal and state income tax estimates from NBER’s TAXSIM from the second quarter of 2013 through the 2023 data (BLS Monthly Labor Review, 2015; CE PUMD Getting Started Guide). The 2024 data has no tax or after-tax income estimates: BLS says the external tax model was not updated for the 2024 tax year, and it keeps a tax unit identifier on the microdata so users can produce their own tax estimates. A comparison therefore needs a year with CE TAXSIM estimates, 2023 or earlier; for the 2024 data onward, the emulator would produce estimates where CE now has none. The same TAXSIM input file can go to both engines. The slide gives only the years; mention the 2024 gap only if asked. Sources: https://www.bls.gov/cex/pumd-getting-started-guide.htm, https://www.bls.gov/cex/csxfaqs.htm (question 42) and https://www.bls.gov/cex/notices/2025/ce-after-tax.htm. Start with the core outputs: fiitax, siitax, fica, v22 (child tax credit), v25 (EITC) and frate. Ask staff which parts of their current workflow could supply the comparison inputs. Preserve existing CE definitions and weights in the initial comparison.

## 34. A manageable CE pilot (58–60 min)

1. **Scope.** Agree one year, one sample and the key tax outputs. Output: scope note.
2. **Map.** Document input mappings and missing-data assumptions. Output: mapping document.
3. **Compare.** Run both calculations and log every difference. Output: comparison and discrepancy log.
4. **Extend.** Choose one benefit extension after the tax results. Output: extension plan.

**CE would provide:** One year of tax-unit records in the TAXSIM input format; Its published TAXSIM estimates and the survey weights; Staff time to review the discrepancy log.

**PolicyEngine would provide:** The open-source emulator, which installs and runs inside BLS; Runs pinned to emulator and model versions; A diagnosis of each difference, then a benefit extension proposal; Open-source AI skills that run PolicyEngine from Claude Code or Codex.

Proposed next steps for discussion. The emulator is an open-source package with Python, R, Stata and SAS interfaces that installs inside BLS, so confidential records do not need to leave BLS. The who-provides-what split is a proposal, not an agreement. Seek clarity on the relevant year, available inputs, computing environment and who will review discrepancies. The comparison year needs CE TAXSIM estimates, so it must be 2023 or earlier; the 2024 data has none. Avoid proposing a firm timeline before those constraints are known. On the AI skills, which speak to the CE program’s limited implementation resources: PolicyEngine’s skills are open source (MIT) in PolicyEngine/policyengine-skills, published for Claude Code as the policyengine-claude plugin (/plugin marketplace add PolicyEngine/policyengine-claude) with a Codex install script and an MCP server; they include household calculations and microsimulation runs on the same rules. There is no TAXSIM-specific skill yet, so do not say it maps CE files out of the box; mapping CE fields to TAXSIM inputs would be pilot work. Confidential CE records stay under BLS’s own rules for AI tools; the skills are useful with public-use microdata and for writing the comparison code.

## 35. Q&A and discussion (60–90 min)

- Which outcomes and years would be most useful?
- Which input assumptions create the most uncertainty?
- What evidence would support a broader evaluation?
- Which benefit extension would answer a concrete research question?

- [policyengine.org/us/taxsim](https://www.policyengine.org/us/taxsim) — Install, documentation and examples
- [policyengine.org/us/taxsim/run](https://www.policyengine.org/us/taxsim/run) — Run a TAXSIM-format file in the browser
- [policyengine.org/us/taxsim/dashboard](https://www.policyengine.org/us/taxsim/dashboard) — Agreement by year and state
- [github.com/PolicyEngine/policyengine-taxsim](https://github.com/PolicyEngine/policyengine-taxsim) — Source code and issue tracker

Use the separate 30-minute discussion for questions on the methods and potential CE collaboration. The links on the slide open the TAXSIM site, the web runner, the validation dashboard and the source code.

## 36. Thank you (closing slide)

- Max Ghenis · max@policyengine.org
- Pavel Makarchuk · pavel@policyengine.org
- David Trimmer · david@policyengine.org

policyengine.org/us/taxsim

Closing slide. Leave it up at the end so people can note the emails: max@policyengine.org, pavel@policyengine.org and david@policyengine.org.
