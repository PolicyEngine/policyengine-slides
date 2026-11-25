# Presenter notes: PolicyEngine UK and the Resolution Foundation's modelling

25 slides, about 12 minutes of talk, then discussion. The spoken path is
1, 2, 4, 12, 13, 14, 19, 22 and 23 together, and 24, always moving
forward. The others (3, 5, 6, 7, 8, 9, 10, 11, 15, 16, 17,
18, 20, 21 and 25) are reference, for questions and to leave behind.
Slide 9's point (one calibrated year; take-up drawn at build) is made from
the "Known gap" line on slide 14. Rough checkpoints: slide 4 by minute 1,
slide 12 by minute 3, slide 19 by minute 9, slide 24 by minute 13. If time
is short, take 19 in a sentence; keep 13, 14, 23 and 24.

Where the deck describes the IPPR tax-benefit model or the Resolution
Foundation's method, it relies on published sources only, each dated.
"Not found in published sources" means only that, not that the thing does
not exist. Corrections are welcome throughout.

One Microcosm build is used for every data figure: the certified national
build of 15 November 2026 (fcfac709, certified in policyengine.py 6.20.1;
"certified" means the build passed the release gates that policyengine.py
checks before it ships a dataset). A newer certified build exists
(24 November, policyengine.py 6.20.3: 1,536 targets, 98.76% within 10%);
the deck does not mix the two. Four results were run on other builds and
carry a run label on their slide: the Autumn Budget 2026 dashboard
(slides 5 and 19), the Billing me softly dashboard (slide 15), the
scorecard rows and the £46k example in the notes to slide 20.

Behaviour, in one wording everywhere: no labour-supply response by
default; two responses are on (capital gains realisations, employer NI
passed through to pay).

Terms used on the slides: BRMA, Broad Rental Market Area (the areas LHA
rates are set for); ETB, the ONS's Effects of Taxes and Benefits on
household income; NTS, the National Travel Survey; PIPR, the ONS Price
Index of Private Rents; a run receipt, the record a run writes of the
package versions, data build and forecast it used.

## Part 1. Introduction

### 1. Title (spoken, 20 seconds)

Thank the Resolution Foundation for the time. The deck has 25 slides; the
talk follows about ten, and the rest is reference. Our descriptions of the
IPPR model and of RF's method come from published sources; please correct
us.

### 2. In brief (spoken, 20 seconds)

One sentence on the six parts; part 4 is the core. The summary of what we
found comes at the end, on slide 24, after RF has seen the mapping.

### 3. Who we are (reference)

- 10ds-microsim's results are described as supplementary, experimental
  analysis.
- HM Treasury's transparency record (17 December 2024) describes a pilot
  alongside its own model and says HMT does not currently use
  PolicyEngine. The record gives no start year; PolicyEngine's event report
  of 10 November 2025 says the pilot began in March 2025. Slide 20 gives
  the record's findings.
- Shown as text, not logos: a use (No 10), a pilot that was not deployed
  (HMT) and a citation (the Lords). The OBR's annual report lists
  PolicyEngine among organisations it engaged with; that is too weak a link
  to show, so it is left off.
- The Lords citation is of House of Commons Library research that used
  PolicyEngine.
- NIESR: Mosley and Cornforth (2023), an LSE Centre for Macroeconomics
  discussion paper, combined PolicyEngine UK with NIESR's NiGEM model.
- Only organisations with a public source are shown. PolicyEngine has also
  presented to the Scottish Government; that is not on the slide.

## Part 2. The Nuffield Foundation grants

### 4. The Nuffield Foundation grants: what they named and what exists today (spoken, 1.5 minutes)

Grant 1's aims were comprehensiveness, accuracy and accessibility: making
the model local (constituencies and local authorities), wider (childcare,
public services) and easier to use. The table shows, for each area
Nuffield lists, what exists in the model and data today. It does not claim
each item was completed inside the grant period, and the foot says so.

- Childcare: England's entitlements and Tax-Free Childcare are complete in
  the registry; the Childcare Offer for Wales is partial. Nuffield names
  all childcare subsidies, so the row is Partly.
- Public services: variables for NHS, education and transport subsidy.
  Nuffield also names adult social care, which the model does not have.
- The comparison dashboard: Nuffield describes a dashboard validating
  against other microsimulation models at household level. What exists is
  a public scorecard (policyengine-scorecard.vercel.app/scorecard) that
  sets published results beside PolicyEngine's. Two counts, measured
  differently: its lanes file lists 2,649 claims harvested for the Autumn
  Budget 2025 from UKMOD, IPPR (the think tank's publications, not runs of
  the IPPR model), RF and the IFS, 628 of them with a PolicyEngine
  counterpart; its populations file has 755 rows with a result from RF,
  UKMOD, the IFS, IPPR and four others. There are also 758 UKMOD
  statistics. The household-level comparison with UKMOD is not done yet,
  and there is no TAXBEN comparison.
- The symposium: a London event on 3 November 2025, which PolicyEngine's
  event report says was supported by the Nuffield Foundation. It falls
  after grant 1's stated end; the slide does not call it a deliverable.
  Nuffield also lists training and beta testing; the slide does not show
  them, and their public record is an open check.
- Council Tax Reduction (slide 4) and Council Tax Support (slides 12 and
  14) are the same scheme; RF's annex uses the second name.

Grant 2 runs from July 2026 to June 2029 and funds constituency-level
Budget analysis, local Council Tax Reduction variation and outreach to
local journalists. Council Tax Reduction variation bears directly on the
gap on slide 14.

### 5. The Autumn Budget 2026 dashboard, by constituency (reference, live page)

Open only if asked what local output looks like. The dashboard models the
Budget's household measures, including the energy payment, zero VAT on
electricity, fuel duty, the Pension Tax Allowance, property income tax, the trading allowance and the Carer's Allowance taper; sources
differ on the count, so the slide gives none. The run that produced all the
measures took 8.1 minutes with one machine per measure in parallel; it is
not a single-run speed. The web app's own estimate for a UK national run is
three minutes. Needs an internet connection; on a video call, share the
browser tab if the embed lags. In a PDF the slide shows a summary card of
the page's tabs and its run label.

## Part 3. The model and the data

### 6. PolicyEngine UK computes household incomes after taxes and benefits (reference)

The architecture is the familiar one: rules applied to a household file,
baseline and reform, and the difference. What differs is that the household
file is reweighted to official statistics (slide 9).

No labour-supply response by default; two responses are on (capital gains
realisations, with an elasticity of 1.0 from Advani, Lonsdale and Summers
(2024), and employer NI passed through to pay). Either can be set to zero.
The optional hours response follows the OBR's labour-supply note. There is
no general equilibrium.

### 7. How the rules are encoded (reference)

Each parameter is a dated YAML file with a reference; each variable a short
Python formula; each test a YAML case. The counts are for policyengine-uk
2.179.0 and the registry line for 2.180.0; both are labelled. A structural
change is a pull request to a public repository, reviewed before it merges.

### 8. What the UK model covers (reference)

Two rows are likely to matter. Council Tax Reduction: Scotland, Wales,
England's pensioner scheme and five English working-age schemes (Merton,
Kingston, Newham, Westminster, Oxford) are simulated; other English
working-age claimants keep reported amounts. Local Housing Allowance is in
the code, by BRMA, though not yet a registry entry. The registry lists
alcohol, tobacco and gambling duties as partial; the code models them on
imputed spending, and slide 14 follows the registry. Wealth tax, land value
tax and carbon tax exist only as hypothetical reforms.

### 9. Microcosm UK 2024–25: how the household file is built (reference)

The reason for the main gaps on slide 14, whose "Known gap" line makes the
point when spoken: one calibrated year and take-up drawn at build. Three
choices:

1. Top incomes come from the SPI 2022–23 public-use file at record level:
   10,000 copies of FRS households whose adults take SPI incomes, plus more
   copies in the bands above £200k, £500k, £1m and £2m.
2. Wealth (Wealth and Assets Survey round 8) and spending (Living Costs and
   Food Survey 2024–25, with the ETB and the NTS) are imputed onto the same
   records with quantile-regression forests (a machine-learning method that
   predicts a whole distribution, not just an average), so one file serves
   direct taxes, indirect taxes and wealth.
3. The weights are fitted to 1,534 official totals, each weight bounded at
   10 times its starting weight.

Take-up: people who report a benefit always claim; others are drawn to DWP
and HMRC rates or caseloads. Every benefit unit carries a stored claim
flag, including units not entitled today, so people a reform newly
entitles claim at a rate fixed at build (for Pension Credit, DWP's Savings
Credit-only take-up; for Universal Credit and Child Benefit, the early
single-rate draw). It cannot be set per run.

The costs: an effective sample size of about 7,400 from 78,164 records; the
SPI copies' industry is imputed; the targets are for 2025. The build has
56 source stages, each survey file pinned by SHA-256. The records are not
public: access is by token, and how RF could hold them is to be agreed
(question 5 on slide 24). Slide 16 sets this beside the IPPR model and
UKMOD.

### 10. How far results break down (reference)

Household type, tenure and number of children are variables without a
standard output, so a breakdown by them is custom analysis. Vigintiles come
from `calculate_decile_impacts(..., quantiles=20)` in Python; the default
ranking income is unequivalised household net income, and a pre-computed
grouping can be passed with `decile_variable=`. Relative poverty is 60% of
the contemporary median; the absolute line is the 2024–25 line held in real
terms; "child" in the standard output is age 17 or under, and HBAI's
dependent children (`is_hbai_dependent_child`) can be used in Python
through the poverty output's `filter_variable`.

## Part 4. The Resolution Foundation's research and the IPPR model

### 11. The Resolution Foundation's 2026 research we have read (reference, one sentence)

"We read the year's reports and their figure notes to list how the model is
used; the next slide is the method as we understand it." The slide has no
child poverty figure: RF's child poverty figures in different reports are
on different bases. If asked, quote Spread thin only: 27.7% to 25.1% over
the Parliament (29 October 2026). What a ratchet's figure is its
recommendation's net saving: a smoothed earnings link in place of the
triple lock, about £650m in 2029–30 (the report's £6.5bn is what a smoothed
triple lock since 2012 would have saved by now). Home economics: RF's page
does not state the model used.

### 12. How the Resolution Foundation projects incomes, as we read it (spoken, 1 minute)

This slide exists to be corrected. It separates what the IPPR model does
from RF's own processing around it, as we read Annex 1 of the Living
Standards Outlook 2026. Annex 1 says market incomes are projected "largely
through the IPPR Tax Benefit Model", so step 3 is marked as largely the
model's, with the WAS savings imputation RF's own. The split decides what
PolicyEngine would need to do and what could stay as it is. Ask directly:
is the split right, has the method changed since February, and is "the
IPPR model" still the right name for what RF runs?

Fuller wording of the steps (LSO 2026, Annex 1):

1. Base data: FRS and HBAI 2023–24 (2024–25 in the October 2026 work).
   HBAI incomes carry DWP's SPI adjustment for top incomes.
2. Reweight: to ONS population projections, OBR participation and
   unemployment, and PIP caseload projections (Stata reweight2).
3. Uprate and impute, largely through the IPPR model: earnings to OBR
   average earnings with a minimum-wage floor and spillovers; private
   pensions by RPI capped at 5%; dividends and property income follow the
   OBR. RF's own: savings income modelled in the Wealth and Assets Survey
   and imputed into HBAI. Prices: rents on the ONS Price Index of Private
   Rents, then average earnings with a 12-month lag; an after-housing-costs
   deflator.
4. Taxes and benefits (the IPPR model): each year's rules; Universal Credit
   take-up 80%, Pension Credit 65% rising to 70%.
5. Anchor: modelled growth rates, and absolute changes in poverty, applied
   to outturn data.

### 13. RF's published analyses, mapped to PolicyEngine (spoken, 2.5 minutes)

Go row by row; this slide and the next are the core. "Done" means a
standard output or the code does it today; "Partly" that the pieces exist
but something RF's method needs is missing or works only in Python; "Not
yet" that it would need building. Speak to the first four rows and to
non-take-up; leave the rest to read and to interrupt on. After the third
group, ask: which use matters most, and is any use missing?

Three things worth saying up front: vigintiles exist in Python but the web
app shows deciles, and the default ranking income is unequivalised, so RF's
equivalised vigintiles would be passed in as a grouping; there is no
ready-made "earlier policy, uprated" baseline for a cumulative chart; the
standard child poverty output counts everyone aged 17 or under, and HBAI's
dependent children are available in Python (`is_hbai_dependent_child`, as
the two poverty rows on slide 20 use). For anyone reading the code: `in_poverty_bhc` is
absolute poverty; relative poverty is `in_relative_poverty_bhc`.

Full rows (checked against policyengine-uk 5987eb3, microcosm cac12ab,
policyengine.py 81bac43 and policyengine-app-v2 d27867f, 25 November 2026):

- **A1. Distribution of a Budget's measures by income group** (Spread thin,
  Fig 8, by vigintile). Deciles in the web app and Python. Vigintiles in
  Python only (`calculate_decile_impacts(..., quantiles=20)`). Done for
  deciles; Partly for vigintiles. (`outputs/decile_impact.py`,
  `decile_grouping.py`; app `ReportOutputSocietyWideUK.ts`.)
- **A1b. Ranking income for distributional charts** (every RF
  distributional chart). The default ranking is unequivalised household
  net income; any pre-computed grouping, such as RF's equivalised income,
  can be passed in Python (`decile_variable=`). The web app ranks by its
  default only. Partly.
- **A2. Cumulative impact of a Parliament's measures** (Spread thin,
  Fig 20). No built-in "earlier policy, uprated" baseline; it has to be
  written by hand as a reform. Dated and bounded changes are supported. Not
  yet. (`utils/dated_reforms.py`.)
- **A3. Income and poverty projections to 2029–30** (LSO 2026; Spread thin,
  Figs 21–23). One dataset (FRS 2024–25, calibrated to 2025 targets),
  uprated with the OBR October 2026 forecast to 2031; weights grow uniformly
  with ONS population. No reweighting to projected populations, employment
  or caseloads. Partly. (`data/bundle/manifest.json`; Microcosm
  `uk/spec/bundle.yaml`; `data/uprating_indices.yaml`.)
- **A4. Child poverty with and without a policy** (LSO 2026, Fig 15).
  Relative and absolute poverty, before and after housing costs, on the HBAI
  modified OECD scale; baseline against reform. Done for the policy
  difference. Partly for the rest: the standard output counts age 17 or
  under; HBAI's dependent children (`is_hbai_dependent_child`,
  `variables/household/demographic/hbai/`) can be passed as a filter in
  Python; projected levels are as A3. The two-child limit
  is abolished from 6 April 2026 in the baseline.
- **A5. The LHA freeze** (Spread thin, Fig 9). Published LHA rates by BRMA
  and category, 2014 to 2026; a freeze parameter, on from April 2025 and
  kept on from 2027 as announced policy; BRMAs assigned in Microcosm;
  private rents follow ONS PIPR by region. Done.
- **A6. Non-take-up: entitlement at full take-up minus reported receipt**
  (Billing me softly). In Python, a flag override gives full entitlement for
  Universal Credit, Pension Credit, Child Benefit, pension-age Housing
  Benefit and Council Tax Reduction (the last only where the scheme is
  simulated: Scotland, Wales, England's pensioners and five English
  working-age schemes). Working-age Housing Benefit and legacy benefits are
  continuing awards only and cannot rise. No switch in the web app. Partly.
  (`claims_all_entitled_benefits.py`; Microcosm `uk/take_up_contract.json`.)
- **A7. Pensions costings** (What a ratchet). The State Pension is modelled;
  its rate follows a triple-lock index that a reform can change. Done.
  PolicyEngine's post "The adjusted Triple Lock" (28 October 2026) is
  related work.
- **A8. Counterfactual histories** (Counting the cost). Growth rates are
  parameters, and changing one re-projects the data. Running the 2024–25
  file on a counterfactual price and earnings path for earlier years has not
  been checked. Partly.
- **A9. Council tax reform** (Home economics; RF's page does not state the
  model used). Council tax from the FRS, uprated by the OBR; Band D amounts
  held for every local authority (2025–26, 2026–27); property wealth
  imputed from WAS round 8. A proportional property tax would be a new
  reform. Partly.

### 14. Each step of the projection method, mapped to PolicyEngine (spoken, 2.5 minutes)

Say the main gap first: PolicyEngine fits its weights to one year (2025)
and uprates incomes with OBR growth rates; it does not reweight to
projected populations, employment or caseloads for future years, which is
central to RF's method. After 2025, caseloads move only through population
growth in the weights, the rules and the stored take-up flags. Second:
take-up is drawn when the data are built, so an assumption such as "UC
take-up of 80%" cannot be set for a run today; people a reform newly
entitles claim at a rate fixed at build (slide 9). Where PolicyEngine does
something different rather than less (savings interest from the FRS and
SPI rather than WAS; private pensions on an OBR index), say it is
different, not better. The steps marked "RF" could stay in RF's own code
whichever model sits in the middle, or move into PolicyEngine: question 3
on slide 24. The last row is the natural form of option C on slide 22: RF
keeps its own prepared file and runs PolicyEngine's rules on it. Finish
on the "Known gap" line: it is slide 9's point, so there is no need to go
back.

The main group follows slide 12's five steps; the second group, "Also in
RF's analysis", holds rows that are not among them (indirect taxes are not
in Annex 1).

Full rows:

- **B1. Base data: latest FRS and HBAI** (RF). Microcosm UK on FRS
  2024–25; HBAI-definition income and equivalisation computed in the model.
  No check of Microcosm's poverty rates against HBAI is published (an
  earlier check used the previous dataset). Partly.
- **B2. Reweight to ONS population projections and OBR participation and
  unemployment for future years** (RF). One calibrated dataset, fitted to
  2025 targets. Later years uprate money values only; household weights
  grow uniformly with ONS population. Microcosm's static-ageing reweighter
  has no UK projection reader. Not yet.
- **B3. Adjust for projected PIP caseloads** (RF). PIP cases calibrated for
  2025 only (England, six age bands); later years move only with population
  weights. Partly.
- **B4. Uprate earnings and other incomes with the OBR forecast** (largely
  the IPPR model, per Annex 1). OBR October 2026 forecast for 2026–31,
  projection to 2032; earnings follow OBR average earnings; benefit rates
  follow September CPI. Done.
- **B5. A minimum-wage floor with spillovers; private pensions by RPI capped
  at 5%** (largely the IPPR model). Private pensions follow an OBR
  private-pension index, not RPI capped at 5%. A minimum-wage floor with
  spillovers was not found. Partly.
- **B6. Savings income modelled in WAS and imputed** (RF). Wealth
  (property, financial, pension, ISA, debts) imputed from WAS round 8.
  Savings interest comes from the FRS, with SPI donors at high incomes,
  grown by OBR savings income per head. A different method.
- **B7. Rents on the ONS Price Index of Private Rents; an AHC deflator**
  (RF). Private rents follow ONS PIPR by region; social rents follow an OBR
  series. The AHC deflator has not been checked. Partly.
- **B8. Partial take-up calibrated to DWP and HMRC** (IPPR model). Take-up
  flags are drawn when the data are built: reporters claim, others are drawn
  to fit DWP 2025 UC caseloads, Pension Credit rates for 2023–24 and HMRC
  Child Benefit rates. Units not entitled today also carry a flag, used
  when a reform entitles them. The take-up parameters do not move a run.
  Partly.
- **B10. Apply modelled growth rates, and changes in poverty, to outturn**
  (RF). Not in the model; runs give levels by year, so it would stay in
  RF's own code or be added. Not yet.

Also in RF's analysis:

- **B9. Indirect taxes on the LCF** (IPPR model, per the 2018 description).
  Spending imputed from LCFS 2024–25; VAT (split from the ETB) and fuel
  duty are complete; alcohol, tobacco and gambling duties are partial in
  the registry (slide 8). Done and Partly.
- **B11. Council Tax Support: local variation** (not modelled in RF's
  projections). Simulated for English pensioners, Scotland, Wales and five
  English working-age schemes; other English working-age claimants keep
  reported amounts. Partly.
- **B12. PolicyEngine's rules on RF's own prepared file** (in place of step
  4). Possible in Python: `UKSingleYearDataset` takes person, benefit-unit
  and household tables, and `UKMultiYearDataset` loads year-by-year tables
  as they are, so RF's reweighted and uprated file for each year could be
  run without PolicyEngine's uprating. The file must be mapped to
  PolicyEngine's variable names, and take-up flags must be supplied:
  without them the main claim flags, such as Universal Credit's and Child
  Benefit's, default to claiming. Not tried on an RF file. Partly.
  (policyengine-uk `data/dataset_schema.py`; docs `usage/simulations.md`.)

Not on the slide, if asked: PolicyEngine has no labour-supply response by
default; two responses are on (capital gains realisations, employer NI
passed through to pay); RF's method describes none. Managed migration to
Universal Credit is modelled year by year. Sanctions are modelled in
neither (a search of policyengine-uk found none). "Growth rates applied to
outturn" would stay in RF's code or be added to PolicyEngine.

### 15. An RF proposal already modelled: the targeted energy bill discount (reference)

Mention in one sentence on slide 13 or 23. The proposal, for Great
Britain, passports households on a means-tested benefit or applies a test
on the highest individual income in a household. RF's "about 40%" is the
income test alone; PolicyEngine's 42% counts households passported or
passing the test, and its income test alone gives 35% in 2026–27 (38% on
2024–25 incomes). It is not validation: the two figures share the FRS and
say nothing about which model is closer to the truth. It is the smaller of
the two pilot candidates on slide 23. The analysis code is at
uk-energy-reforms 14bf3b0, `analyses/rf-billing-me-softly`; its README
gives 28.6m Great Britain households in the run for 2026–27, the base of
the 42%.

## Part 5. How PolicyEngine compares

### 16. The data: PolicyEngine, the IPPR model and UKMOD (reference)

Frame these as design differences, not a ranking. UKMOD keeps the FRS
grossing weights and makes no other updating adjustments, so results stay
traceable to the survey; PolicyEngine fits weights to official totals and
pays for it in effective sample size (about 7,400 from 78,164 records); RF
reweights for projection years with its own code. All three inherit the
FRS's under-recording of top incomes and of benefit receipt and handle it
differently.

Fuller cells:

- Base survey, UKMOD: FRS 2023–24, 36,248 individuals and 16,754
  households, as of the April 2026 country report (UKMOD Country Report
  2023–2030, CeMPA working paper 8/26).
- Top incomes, UKMOD: none by default; an optional HBAI extension swaps in
  SPI-adjusted HBAI incomes and weights.
- Wealth, PolicyEngine: WAS round 8 imputed onto FRS records; savings
  interest from the FRS and SPI, not WAS. UKMOD: we found no wealth
  variables in the country report; it records no data on capital gains,
  inheritances, property transactions or property value, so capital gains
  tax, inheritance tax and stamp duty are excluded.
- Take-up, IPPR model: a partial take-up algorithm since 2017, calibrated
  to DWP and HMRC (Scottish Government, 2018); UC 80% and Pension Credit 65%
  rising to 70% in LSO 2026.
- Weights, PolicyEngine: 1,534 targets (HMRC 776, ONS 365, DWP 233, MHCLG
  82, others 78); 98.8% within 10%, in-sample. IPPR model: starting weights
  not found in published sources; for projections RF reweights to ONS
  population projections, OBR participation and unemployment, and PIP
  caseloads.
- Years ahead, UKMOD: policy years 2023–2030; a release after each Budget
  (B2026.05, 30 October 2026).

### 17. The rules engine and access (reference, one sentence)

"The rules comparison is here for reference. UKMOD publishes an annual
country report validating against administrative data and HBAI. In
PolicyEngine the rules, tests and data pipeline are all open source under
AGPL/MIT, and changes go through public pull requests." The IPPR coverage
cells come from the Scottish Government's 2018 description and may be out
of date. The licence cell is from CeMPA working paper 7/21 (2021): the
IPPR model is maintained by PERU at Manchester Metropolitan University and
licensed to users for a fee. Version IPPRTBM 02_93 is cited in JRF work of
June 2026. Indirect taxes are not a row here (they are on slides 14 and
16); interfaces are folded into the platform row. "Mosley and Cornforth
(with NiGEM)" is the NIESR-related paper on slide 3.

TAXBEN is not a column because we hold too little published detail for a
fair one: in use since 1983, on the FRS and LCF, entitlement or reported
take-up, static, proprietary.

### 18. Calibration: weights fitted to official statistics (reference)

Say first what this is not: it is how well the weights reproduce the totals
they were fitted to, so 98.8% is not a measure of accuracy on anything
else, and the fit says nothing about statistics that were not targeted.
Its value is transparency (every target and its fit is on a public page)
and that benefit caseloads the raw FRS under-records are matched (UC: 17%
of targets within 10% before calibration, 97% after, in-sample). The
78,164 records include the SPI copies of FRS households; the raw FRS
2024–25 household count is not on the slide until it is sourced.

### 19. Autumn Budget 2026: PolicyEngine's costings beside the OBR's (spoken, 1.5 minutes)

The nearest thing we have to an external test, so show the misses as
plainly as the hits. The table has all seven measures the briefing models,
each with the year compared and the main reason for its gap. Years:
2026–27 for the three measures with a figure that year; 2029–30 for the
three income tax measures (after the Self Assessment timing gap, and the
last year of the Pension Tax Allowance, whose 2027–28 figures are close:
£42m against £44m); 2031–32, the first full year, for the Carer's
Allowance taper.

- Under: fuel duty about half (households hold about £13bn of the £24bn
  base; the official figure is the government's estimate, which the OBR
  used but did not certify); the energy payment three-quarters (the
  devolved share and £100m for English councils are not modelled); the
  trading allowance 72% in 2029–30 (53% in 2028–29, the OBR's catch-up
  year).
- Over: VAT on electricity 114% (a different spending base); property
  income tax 109%; the Pension Tax Allowance 134% and the Carer's Allowance
  taper 114%, both not yet explained.
- Like for like: the Pension Tax Allowance row is income tax only (£42m,
  £112m and £193m against the OBR's £44m, £83m and £144m for 2027–28 to
  2029–30), from the briefing's text. The briefing's Table 6 shows a
  smaller net cost after Pension Credit, Housing Benefit and Council Tax
  Reduction (−30, −83, −144), which the package uses; that net figure
  equals the OBR's income tax line in two years, which is not yet
  confirmed as more than a coincidence, so the slide gives no net figure. The Carer's Allowance row is before income tax (£79m, like
  the OBR's £69m spending line); net of income tax, £48m.
- The package: all seven run together; in 2026–27 only the first three are
  non-zero, so the total is their sum.

We make no claim about accuracy relative to the IPPR model, UKMOD or
TAXBEN.

### 20. What we do not claim, and known limits (reference)

Show it if asked "how do you know it is right" or about HM Treasury. On HMT,
say what the record says and no more.

The scorecard rows are not on the slide, because they are not like-for-like
with RF: RF's figures predate the two-child limit's abolition and use an
earlier forecast, data year and baseline, and reconciling them needs a
rebuilt baseline (slide 23). If asked, these are the only model runs on the
scorecard labelled "comparable" against RF (policyengine-scorecard 771c028, `app/public/data/
populations.json`, built 30 October 2026; harvest
`sources/harvest-uk-ab2025-2026-09-24/`). PolicyEngine's runs used
policyengine-uk 2.132.6 on the Microcosm UK 2024–25 build of 19 October
2026 (20261019T083323Z-6cba5d71). RF's figures are from No half measures
(October 2025), before the two-child limit was abolished from April 2026:

- Scrap the two-child limit, Exchequer cost, 2029–30: RF £3.5bn;
  PolicyEngine £3.19bn (−9%).
- Scrap the two-child limit, fewer children in relative poverty after
  housing costs, 2029–30: RF 480,000; PolicyEngine 445,000 (−7%).
- A three-child limit instead, fewer children in relative poverty after
  housing costs, 2029–30: RF 350,000; PolicyEngine 318,000 (−9%).

The scorecard has 755 rows with a result published by RF, UKMOD, the IFS,
IPPR or four others. These three are the only reform runs the scorecard labels
"comparable" against RF: `populations.json` has 14 "comparable" RF rows,
and the other 11 are benefit uprating rates in the baseline (from Catching
up? and the Living Standards Outlook 2026), not reform runs. Most others
ran on policyengine-uk 2.89.2 and the dataset before
Microcosm, including the example of cutting the higher-rate threshold and
the NI upper earnings limit to £46,000 (RF £9.0bn, PolicyEngine £6.62bn).
The scorecard grades nothing, and the deck quotes no agreement rate from
it.

An earlier comparison of poverty rates with HBAI used the previous dataset,
not Microcosm; an equivalent check on Microcosm is not yet published.

## Part 6. Routes in and a possible pilot

### 21. Four routes in: web app, assistant, plugin, Python (reference)

A reform is a parameter path and a value; the code around it can be
written by hand or by an assistant, and it stays in a repository where it
can be reviewed and rerun. Each run's code and outputs can be reviewed
like any analysis script, and PolicyEngine can review a pilot's code. Be
straight on maturity. The Claude connector is a preview and not yet
launched. The web app covers parametric reforms and standard outputs
(deciles, not vigintiles; no entitlement switch; no structural reforms).
Example-household calculations are done in both the web app and Python. An
API exists; its UK endpoints are not on the slide.

### 22. Three ways the Resolution Foundation could use PolicyEngine (spoken with 23, 2.5 minutes in all)

These are options, not a proposal with a price or a timetable. Say the
sense of slide 21 in one sentence: most of these uses need Python, written
by an analyst or an assistant; the web app covers parametric reforms and
deciles. A uses only what is already public. B is a low-commitment way to
learn whether the numbers agree. C is the only one that would touch RF's
own workflow, and it has two open preconditions: how RF would hold
Microcosm under its own UK Data Service terms, and which steps on slide 14
would need building (or RF's own file is run through PolicyEngine's rules,
the last row of slide 14). Smaller pieces in Python today but not in the
web app: vigintiles, and entitlement runs for five benefits.

### 23. A possible pilot: one published analysis, side by side (spoken with 22)

The output that matters is the reconciliation, not agreement: a table that
splits each difference into data, rules, take-up and uprating. We know of
no published reconciled comparison between PolicyEngine and the IPPR
model; the scorecard sets published figures side by side and reconciles nothing.

Indicative scope, as on the slide: one chart; PolicyEngine does the run and
writes the reconciliation note; RF gives the specification and reviews it,
in about two short calls.

- Candidate 1, the Autumn Budget 2026 distribution chart (Spread thin,
  Fig 8). Both sides have published on the same Budget, but the headlines
  differ in scope: RF's £4.4bn cost-of-living package against PolicyEngine's
  seven measures (£3.11bn in 2026–27). The pilot would start by agreeing the
  list of measures. What it needs exists in Python: vigintiles, with RF's
  equivalised ranking passed in as a grouping, and indirect taxes on LCFS
  2024–25 spending. Thin cells: vigintiles on an effective sample of about
  7,400 give about 370 effective households per group, so deciles would be
  shown alongside.
- Candidate 2, Billing me softly. The proposal is already encoded (slide
  15); the pilot would add the report's non-take-up method. PolicyEngine can
  run full entitlement for Universal Credit, Pension Credit, Child Benefit,
  pension-age Housing Benefit and Council Tax Reduction, not for working-age
  Housing Benefit or legacy benefits.
- Not suggested first: the Living Standards Outlook projection (it rests on
  future-year reweighting), the cumulative-Parliament chart (it needs a
  hand-written earlier-policy baseline) and reconciling the two-child limit
  rows (RF's figures predate the April 2026 abolition now in PolicyEngine's
  baseline, so it needs a rebuilt baseline).

No commitment on timing; the scope is RF's to choose.

### 24. Questions for discussion (discussion)

Stop presenting and leave this slide up. Read the two-line summary at the
top as our reading, for RF to correct: Nuffield, the local-area data exists
today, the childcare and public-service variables in part, and the
cross-model scorecard and the AI interface are in progress; RF's uses, most
map at least partly today, in Python, and the main gaps are future-year
reweighting, take-up fixed at build and an earlier-policy baseline. Then
start with question 1, because the other answers depend on it.

### 25. Thank you (reference)

Offer to send the deck as a PDF, with the mapping tables updated once the
remaining checks finish. If asked who maintains the model after grant 2
ends, say PolicyEngine maintains it in the open and changes go through
public pull requests; make no commitment beyond that.
