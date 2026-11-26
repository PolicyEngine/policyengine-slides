# Presenter notes: PolicyEngine UK and the Resolution Foundation's modelling

25 slides, about 12 minutes of talk, then discussion. The spoken path is
1, 2, 4, 12, 13, 14, 16 (one minute), 19 in one sentence, 22 and 23
together, and 24, always moving forward. The others (3, 5, 6, 7, 8, 9, 10,
11, 15, 17, 18, 20, 21 and 25) are reference, for questions and to leave
behind. Slide 9's point (one calibrated year; take-up drawn at build) is
made from the "Known gap" line on slide 14; say on slide 14 that Microcosm
is PolicyEngine's household file, built from the FRS. Rough checkpoints:
slide 12 by minute 2, slide 14 by minute 5.5, slide 16 by minute 8, slide
22 by minute 9.5, slide 24 by minute 12. If RF starts correcting slide 12,
let it run and drop 19 and 22; keep 13, 14, 16, 23 and 24.

Years: the weights are fitted to calendar 2025 (fiscal-year sources are
converted to 2025, 3/12 of 2024–25 plus 9/12 of 2025–26; DWP caseloads
are averaged over 2025), on FRS 2024–25 data. The rules the model runs for
2025 are 2025–26 rules, and "to 2031–32" for uprating is a financial year.
The HBAI comparison is for 2024–25, HBAI's latest year.

Where the deck describes the IPPR tax-benefit model or the Resolution
Foundation's method, it relies on published sources only, each dated.
"Not found in published sources" means only that, not that the thing does
not exist. Corrections are welcome throughout.

One Microcosm build is used for every data figure: the certified national
build of 22 November 2026 (b891aa69, certified in policyengine.py 6.20.3 on
24 November; "certified" means the build passed the release gates that
policyengine.py checks before it ships a dataset), with the local-area
build of 23 November (7081d968). Against the 15 November build in the BIST
deck: 1,536 targets (two more), 78,450 records, an effective sample of
about 7,500, and 57 source stages (a new-claimant UC draw; the build manifest names microcosm 41053d9, on main, clean); 98.8% within
10% is unchanged. Results run on other builds carry a run label: the
Autumn Budget 2026 dashboard (slides 5 and 19) and the Billing me softly
dashboard (slide 15) on the slide; the scorecard rows and the £46k example
in the notes to slide 20.

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
talk follows about ten, and the rest is reference. Our reading of RF's method comes from published sources; please correct
us.

### 2. Outline (spoken, 20 seconds)

One sentence on the six parts; part 4 is the core. The summary of what we
found comes at the end, on slide 24, after RF has seen the mapping.

### 3. Who we are (reference)

- 10ds-microsim's results are described as supplementary, experimental
  analysis.
- HM Treasury's transparency record (17 December 2024) describes a pilot
  alongside its own model and says HMT does not currently use
  PolicyEngine. The record gives no start date. PolicyEngine's event report
  of 10 November 2025 gives March 2025, which is later than the record
  itself, so do not quote a start date. Slide 20 gives the record's
  findings.
- Shown as text, not logos: a use (No 10), a pilot that was not deployed
  (HMT) and a citation (the Lords). The OBR's annual report lists
  PolicyEngine among organisations it engaged with; that is too weak a link
  to show, so it is left off.
- The Lords citation is of House of Commons Library research that used
  PolicyEngine.
- NIESR: Mosley and Cornforth (2023), an LSE Centre for Macroeconomics
  discussion paper, combined PolicyEngine UK with NIESR's NiGEM model.
- Only organisations with a public source are shown. The Mosley and
  Cornforth paper is shown as text, not with NIESR's logo, because it is an
  LSE paper that used NiGEM, not NIESR's own work.

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
  counterpart; its populations file shows 755 of those rows with a
  scorecard result from RF, UKMOD, the IFS, IPPR and four others: 633 with
  a PolicyEngine value (628 on policyengine-uk 2.89.2, 5 on 2.132.6) and
  122 marked as a gap in PolicyEngine. There are also 758 UKMOD
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
three minutes. Needs an internet connection; if presenting remotely, share the
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
3. The weights are fitted to 1,536 official totals, each weight bounded at
   10 times its starting weight.

Take-up: people who report a benefit always claim; others are drawn to DWP
and HMRC rates or caseloads. Every benefit unit carries a stored claim
flag, including units not entitled today, so people a reform newly
entitles claim at a rate fixed at build (for Pension Credit, DWP's Savings
Credit-only take-up; for Universal Credit and Child Benefit, the early
single-rate draw). It cannot be set per run.

The costs: an effective sample size of about 7,500 from 78,450 records; the
SPI copies' industry is imputed; the targets are for 2025. The build has
57 source stages, each survey file pinned by SHA-256. The records are not
public: access is by token, and how RF could hold them is to be agreed
(question 5 on slide 24). Slide 16 sets this beside the IPPR model and
UKMOD.

### 10. How far results break down (reference)

The local-area file is a separate build (7081d968, 23 November 2026):
150,000 households, 28,725 targets, 98.6% within 10%, effective sample
about 97,000, weights bounded at 10 times their start; all seven local
gates passed.

Household type, tenure and number of children are variables without a
standard output, so a breakdown by them is custom analysis. Vigintiles come
from `calculate_decile_impacts(..., quantiles=20)` in Python; the default
ranking income is unequivalised household net income, and a pre-computed
grouping can be passed with `decile_variable=`. Relative poverty is 60% of
the contemporary median; the absolute line is the 2024–25 line held in real
terms; "child" in the standard output is age 17 or under, and HBAI's
dependent children (`is_hbai_dependent_child`) can be used in Python
through the poverty output's `filter_variable`.

## Part 4. The Resolution Foundation's research

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
   That HBAI incomes carry DWP's SPI adjustment for top incomes is our
   inference from HBAI's method; Annex 1 does not mention the SPI.
2. Reweight: to ONS population projections, OBR participation and
   unemployment, and PIP caseload projections (Stata reweight2).
3. Uprate and impute, largely through the IPPR model: earnings to OBR
   average earnings with a minimum-wage floor and spillovers; private
   pensions by RPI capped at 5%; dividends and property income follow the
   OBR. RF's own: savings income modelled in the Wealth and Assets Survey
   and imputed into HBAI. Annex 1 lists prices and housing costs under a
   separate heading and does not say whose code does them. Prices: rents on
   the ONS Price Index of Private
   Rents, then average earnings with a 12-month lag; an after-housing-costs
   deflator.
4. Taxes and benefits (the IPPR model): each year's rules, with benefit
   deductions (sanctions are not modelled); Universal Credit take-up 80%,
   Pension Credit 65% rising to 70%.
5. Anchor: modelled growth rates, and absolute changes in poverty, applied
   to outturn data.

### 13. RF's published analyses, mapped to PolicyEngine (spoken, 2.5 minutes)

This slide and the next are the core. "Done" means a standard output or
the code does it today; "Partly" that the pieces exist but something RF's
method needs is missing or works only in Python; "Not yet" that it would
need building or is untested. Speak to the first four rows and to
non-take-up; leave the rest to read. At the end of the table, ask: which
use matters most, and is any use missing?
Breakdowns by family type, tenure or number of children are custom
analysis in Python (slide 10), not a standard output.

Three things worth saying up front: vigintiles exist in Python but the web
app shows deciles, and the default ranking income is unequivalised, so RF's
equivalised vigintiles would be passed in as a grouping; there is no
ready-made "earlier policy, uprated" baseline for a cumulative chart; the
standard child poverty output counts everyone aged 17 or under, and HBAI's
dependent children are available in Python (`is_hbai_dependent_child`, as
the scorecard's poverty rows in the notes to slide 20 use). For anyone reading the code: `in_poverty_bhc` is
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
  can be passed in Python (`decile_variable=`). For deciles, the built-in
  `household_income_decile` and `household_income_decile_ahc` rank by
  equivalised HBAI income; vigintiles need a grouping passed in. The web
  app ranks by its default only. Partly.
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
  modified OECD scale; baseline against reform. Partly: the difference
  runs, but on the 22 November build children below the AHC line are 3.40m
  against HBAI's 3.97m and larger families are under-represented
  (microcosm#1710), so poverty effects are likely understated. On that
  build, removing a fully rolled-out two-child limit takes about a fifth
  fewer children out of absolute poverty than the IFS's published estimate
  (630,000, 2025–26; about a quarter fewer if the IFS figure is adjusted
  for UC take-up). On the 15 November build, cost and the count of affected
  families were within about 5% of official figures (UC households by number of children run 9–13% short of DWP's). The
  standard output counts age 17 or under; HBAI's dependent children (`is_hbai_dependent_child`,
  `variables/household/demographic/hbai/`) can be passed as a filter in
  Python; projected levels are as A3. The two-child limit
  is abolished from 6 April 2026 in the baseline.
- **A5. The LHA freeze** (Spread thin, Fig 9). Published LHA rates by BRMA
  and category, 2014 to 2026; a freeze parameter, on from April 2025 and
  kept on from 2027 as announced policy; BRMAs assigned in Microcosm;
  private rents follow ONS PIPR by region to 2025–26, then the OBR's UK
  forecast. Done.
- **A6. Non-take-up: entitlement at full take-up minus reported receipt**
  (Billing me softly). In Python, a flag override gives full entitlement for
  Universal Credit, Pension Credit, Child Benefit, pension-age Housing
  Benefit and Council Tax Reduction (the last only where the scheme is
  simulated: Scotland, Wales, England's pensioners and five English
  working-age schemes). Working-age Housing Benefit and legacy benefits are
  continuing awards only and cannot rise. No switch in the web app. Partly.
  (`would_claim_*` flags; Microcosm `uk/take_up_contract.json`.)
- **A7. Pensions costings** (What a ratchet). The State Pension is modelled;
  its rate follows a triple-lock index that a reform can change. RF's
  reform is a smoothed earnings link (prices when they exceed earnings,
  then prices until the pension is back to its share of earnings), which
  in PolicyEngine is an index path written by hand, not a built-in option.
  Partly.
  PolicyEngine's post "The adjusted Triple Lock" (28 October 2026) is
  related work.
- **A8. Counterfactual histories** (Counting the cost). Growth rates are
  parameters, and changing one re-projects the data. The file projects
  forward from 2024–25 only, so running earlier years on a counterfactual
  price and earnings path is untested. Not yet.
- **A9. Council tax reform** (Home economics; RF's page does not state the
  model used). Council tax from the FRS, uprated by the OBR; Band D amounts
  held for every local authority (2025–26, 2026–27); property wealth
  imputed from WAS round 8. A proportional property tax would be a new
  reform, not yet written. Not yet.

### 14. Each step of the projection method, mapped to PolicyEngine (spoken, 2.5 minutes)

Say the poverty gap first: poverty levels on the calibrated file run below
HBAI's, 3.40m children below the AHC line against 3.97m in 2024–25; at the
starting weights the file reproduces HBAI's total (4.02m), though families
of three or more are already under-weighted there; calibration opens the
rest of the gap, and we are working on it. Then the main method gap: PolicyEngine fits its weights to
one year (2025)
and uprates incomes with OBR growth rates; it does not reweight to
projected populations, employment or caseloads for future years, which is
central to RF's method. After 2025, caseloads move only through population
growth in the weights, the rules and the stored take-up flags. Third:
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
  HBAI is not a calibration target, and checks against it are made case by
  case: they find poverty below HBAI's (see slide 18). Partly.
- **B2. Reweight to ONS population projections and OBR participation and
  unemployment for future years** (RF). One calibrated dataset, fitted to
  2025 targets. Later years uprate money values only; household weights
  grow uniformly with ONS population. Microcosm's static-ageing reweighter
  has no UK projection reader. Not yet.
- **B3. Adjust for projected PIP caseloads** (RF). PIP cases calibrated for
  2025 only (England, six age bands); later years move only with population
  weights. Partly.
- **B4. Uprate earnings and other incomes with the OBR forecast** (largely
  the IPPR model, per Annex 1). OBR October 2026 forecast for 2026–27
  to 2031–32; earnings follow OBR average earnings; benefit rates
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
  (whose step, not stated in Annex 1). Private rents follow ONS PIPR by
  region to 2025–26, then the OBR's UK private-rents forecast for every
  region; social rents follow Regulator of Social Housing outturn, then
  England's rent cap (September CPI plus 1 point). An after-housing-costs
  deflator (CPI less rents, repairs and water, as in HBAI) is in the model
  (`consumer_price_index_ahc`). RF moves rents with earnings at a 12-month
  lag, which PolicyEngine does not. Partly.
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
  Spending imputed from LCF 2024–25; VAT (split from the ETB) and fuel
  duty are complete; alcohol, tobacco and gambling duties are partial in
  the registry (slide 8). Done and Partly. On the 15 November build,
  imputed spending in the bottom income decile ran about a quarter above
  the LCF's (microcosm#1717). Which way that moves a result depends on the
  measure: shares of spending come out too low (#1717) and, on our reading, cash effects of duties too
  high. Not yet re-measured on the 22 November build.
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
  Benefit's, default to claiming. Not tried on an RF file. Not yet.
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

## Part 5. Checks

### 16. The data: PolicyEngine, the IPPR model and UKMOD (spoken, 1 minute)

The data comparison, in one minute: three ways of
preparing the same survey; what fitting weights to official totals buys
(benefit caseloads and top incomes match) and what it costs (an effective
sample of about 7,500, and the poverty gap from slide 14).

Frame these as design differences, not a ranking. UKMOD keeps the FRS
grossing weights and makes no other updating adjustments, so results stay
traceable to the survey; PolicyEngine fits weights to official totals and
pays for it in effective sample size (about 7,500 from 78,450 records); RF
reweights for projection years with its own code. All three inherit the
FRS's under-recording of top incomes and of benefit receipt and handle it
differently.

Fuller cells:

- Base survey, UKMOD: input data on the 2024 wave of the FRS (2024–25)
  since release B2026.03 of 22 June 2026, single-year and three-year
  pooled. The April 2026 country report (UKMOD Country Report 2023–2030,
  CeMPA working paper 8/26) documents FRS 2023–24: 36,248 individuals and
  16,754 households.
- Top incomes, UKMOD: the HBAI extension swaps in HBAI incomes and weights,
  with "adjustments that account for high income tax payers" (p.85). CeMPA
  recommends it for cross-sectional analysis with data from 2018 (p.101),
  while still recommending FRS data for historical consistency; the
  validation uses it (p.83); it is off by default (p.31). The report does
  not name the SPI; that HBAI's adjustment uses it is our reading of DWP's
  method.
- Wealth, PolicyEngine: WAS round 8 imputed onto FRS records; savings
  interest from the FRS and SPI, not WAS. UKMOD: financial capital is in
  the input data and used in the means tests (WP 8/26); it records no data on capital gains,
  inheritances, property transactions or property value, so capital gains
  tax, inheritance tax and stamp duty are excluded.
- Take-up, IPPR model: a partial take-up algorithm since 2017, a probit on
  reported receipt used to rank entitled non-recipients, calibrated so
  that modelled take-up matches DWP and HMRC statistics (Scottish
  Government, 2018); UC 80% and Pension Credit 65% rising to 70% in LSO
  2026. UKMOD: imperfect take-up on by default (p.79), rates by claimant
  type (Table 3.4), allocated first to units reported as receiving the
  benefit (p.31), editable by the user; only tax credits vary by area
  (London, Scotland, Wales). CeMPA calls its rates "now somewhat dated".
- Geography, IPPR model: IPPR published average gains for all 12 regions
  and nations from its model (2p NI cut, 10 June 2024). UKMOD: the FRS end
  user licence reports region of residence only; LHA uses the 12 regions
  (p.47); the model has extensions for England, London, Northern Ireland,
  Scotland and Wales, off by default (p.31); UKMOD Explore covers the UK,
  the four nations and London.
- Weights, PolicyEngine: 1,536 targets (HMRC 776, ONS 366, DWP 234, MHCLG
  82, others 78); 98.8% within 10%, in-sample. UKMOD: FRS grossing weights;
  a three-year pooled dataset (UK_2023_b2: 58,163 households, p.82) eases
  thin cells. IPPR model: starting weights
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
of date. The licence cell is from CeMPA working paper 7/21 (2021), written by
UKMOD's developers: it says the IPPR model is "licensed to users for a
hefty fee", that structural reforms are commissioned from PERU, and also
that, with UKMOD, it completes the list of "publicly available" UK
tax-benefit models. It does not call the IPPR model closed, so neither do
we. PERU at Manchester Metropolitan University maintains it. Users: WP 7/21
names IPPR, RF, JRF, NEF and Legatum; the Fraser of Allander Institute used
it (v2.7.8) for its Scottish child poverty modelling (March 2025). UKMOD
users named in WP 7/21 also include the Scottish Fiscal Commission, NHS
Scotland, the Tony Blair Institute, Save the Children UK, Citizens Advice
and the Citizen's Basic Income Trust. The Scottish Government's 2018 text
describes the "IPPR/Resolution Foundation/Landman Economics" model, jointly
maintained by the three before PERU took it on, so its cells may be out of
date. Indirect taxes are not a row here (they are on slides 14 and
16); interfaces are folded into the platform row. "Mosley and Cornforth
(with NiGEM)" is the NIESR-related paper on slide 3.

TAXBEN is not a column because we hold too little published detail for a
fair one.

### 18. Calibration: weights fitted to official statistics (reference)

If asked: the 19 targets outside 10% after calibration are 15 HMRC SPI
rows, 3 UC household-type rows and 1 student-support row. One held-out
check is public: NEET 16–24, left out of the solve, came out 3.0% below
ONS. Each weight is bounded at 10 times its starting value.

Say first what this is not: it is how well the weights reproduce the totals
they were fitted to, so 98.8% is not a measure of accuracy on anything
else, and the fit says nothing about statistics that were not targeted.
Its value is transparency (every target and its fit is on a public page)
and that benefit caseloads the raw FRS under-records are matched (UC: 18%
of targets within 10% before calibration, 97% after, in-sample). The
78,450 records include the SPI copies of FRS households; the raw FRS
2024–25 household count is not on the slide until it is sourced.

Untargeted checks against HBAI, which is not a calibration target. RF's
work centres on poverty levels, so have these ready:

- microcosm#1334, on the 19 October build, against HBAI 2024–25: absolute
  poverty before housing costs 12.2% against 15.9%; median income about 6%
  high; Gini 0.302 against 0.327. On the same file,
  uk-living-standards-outlook#1 gives relative poverty after housing costs
  of 18.1% against 19.6%. At the FRS grossing weights the same rows reproduce
  HBAI (absolute BHC 16.0%, AHC 19.5%), so the gap comes from calibration
  (for example, pensioner absolute BHC poverty falls from 15.9% to 10.7%).
- microcosm#1344 changed UC take-up draws and the income targets. On an
  uncertified run it moved relative BHC poverty from 13.7% to 14.3% (HBAI
  15.9%) and relative AHC child poverty from 24.5% to 25.3% (27.4%).
- On the 22 November build (microcosm#1710, children only): 3.40m children
  (23.7%) below the AHC line against HBAI's 3.97m (27%); 2.42m below the
  BHC line against 3.09m; larger families are under-represented. At the
  starting weights the AHC figure was 4.02m, so calibration removes about
  0.6m. No all-person comparison on this build is public yet.

Why calibration moves it (microcosm#1710): within groups it moves weight
from poor to non-poor families. Workless families are 61% below the AHC
line at the starting weights and 46% after, against HBAI's 58%; the
benefit cap rows explain only a small part so far. On HBAI's 15.9% for both
absolute and relative BHC poverty: HBAI's absolute line is referenced to
FYE 2025 that year, so the two measures coincide.

Say it plainly: poverty levels on the calibrated file run below HBAI's, and
we are working on it. Do not argue that RF's anchoring to outturn makes the
level gap harmless: the two-child limit check above shows policy effects
are affected too.

### 19. Autumn Budget 2026: PolicyEngine's costings beside the OBR's (one sentence on the spoken path)

On the spoken path, one sentence: the costings, beside the official ones,
with the misses shown and a reason for each. The detail below is for
questions.

The briefing calls the run static. The two default responses (capital
gains realisations, employer NI pass-through) apply only where a measure
changes capital gains tax or employer NI, and none of the seven does, so
they should not move these figures (not yet confirmed in the run's code).

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
  used but could not certify); the energy payment three-quarters (the
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
rebuilt baseline (slide 23). If asked, give the figures but do not quote
the gaps as agreement. These are the only model runs on the scorecard
labelled "comparable" against RF (policyengine-scorecard 771c028, `app/public/data/
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

The scorecard has 755 Autumn Budget 2025 rows with a result against RF,
UKMOD, the IFS, IPPR or four others; 633 of them carry a PolicyEngine
value. These three are the only reform runs the scorecard labels
"comparable" against RF: `populations.json` has 14 "comparable" RF rows,
and the other 11 are benefit uprating rates in the baseline (from Catching
up? and the Living Standards Outlook 2026), not reform runs. Most others
ran on policyengine-uk 2.89.2 and an earlier data build (bundle dated 19
June 2026), including the example of cutting the higher-rate threshold and
the NI upper earnings limit to £46,000 (RF £9.0bn, PolicyEngine £6.62bn).
The scorecard grades nothing, and the deck quotes no agreement rate from
it.

The calibration bullet: untargeted checks against HBAI are made case by
case (microcosm#1334 on the 19 October build; microcosm#1710 on the 22
November build, children only; figures in the notes to slide 18), and the
OBR costings on slide 19 are untargeted too. What is missing is a standing,
published method, not checks.

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

Option C's "What it costs" row is there to be even-handed: a change of
model breaks the continuity of RF's published series, and past figures
would need reconciling to the new model.

### 23. A possible pilot: one published analysis, side by side (spoken with 22)

The output that matters is the reconciliation, not agreement: a table that
splits each difference into data, rules, take-up and uprating. We know of
no published reconciled comparison between PolicyEngine and the IPPR
model; the scorecard sets published figures side by side and reconciles nothing.

Indicative scope: one chart. PolicyEngine runs it and writes the
reconciliation note; RF specifies, reviews and supplies intermediate
results where needed.

- Candidate 1, the Autumn Budget 2026 distribution chart (Spread thin,
  Fig 8). Both sides have published on the same Budget, but the headlines
  differ in scope: RF's £4.4bn cost-of-living package against PolicyEngine's
  seven measures (£3.11bn in 2026–27). The pilot would start by agreeing the
  list of measures. What it needs exists in Python: vigintiles, with RF's
  equivalised ranking passed in as a grouping, and indirect taxes on LCF
  2024–25 spending. Thin cells: vigintiles on an effective sample of about
  7,500 give about 375 effective households per group, so deciles would be
  shown alongside. Two things to check first: the bottom-decile spending
  level (microcosm#1717) and where UC receipt sits in the income
  distribution on the current build.
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

Stop presenting and leave this slide up. Read the three short cells at the
top as our reading, for RF to correct: Nuffield, the local-area data exists
today, the childcare and public-service variables in part, and the
cross-model scorecard and the AI interface are in progress; RF's uses, a few
are done today (decile charts, the LHA freeze, OBR uprating) and most
others are part-built and need Python; the main gaps are poverty levels
below HBAI's, future-year reweighting, take-up fixed at build and an
earlier-policy baseline. Then
start with question 1, because the other answers depend on it.

## Likely questions, with what we can say

Short answers for the five questions most likely to come up. "Say we will
follow up" marks what is not sourced; do not guess.

### Q1. Why does calibration lower poverty, and what are all-person poverty, the median and the Gini against HBAI?

If asked for all-person figures: none is public on the 22 November build; say we will follow up. On the 19 October build (microcosm#1334, uk-living-standards-outlook#1 and #4): median BHC income £762 a week against HBAI's £719; relative AHC poverty 18.1% against 19.6%; Gini 0.302 against 0.327. At the FRS grossing weights the same rows reproduce HBAI (absolute BHC 16.0% against 15.9%; the median matches), so the gap is the weights, not the incomes or the rules.

Which targets do it: #1334 named three families that pull weight off low-income households (HMRC income bands below £30k, UC caseloads through the take-up draw, pensioner benefit caseloads). On the 22 November build, #1710's attribution of the children's gap gives OBR spending lines 0.10m, UC payment bands 0.08m, the benefit cap 0.05m, and disability, carer and LCWRA rows 0.13m as a block. It is not fully traced.

### Q2. How many of the 78,450 are real FRS households, and how precise is a decile or vigintile?

If asked how many records are real FRS households: 10,000 are SPI copies, plus more copies in the four top bands; the raw FRS 2024–25 count and the number of band copies are not sourced, so say we will follow up. Every record has a positive weight. Weights are concentrated: the top 1% of records hold 24% of the weight, and the largest weight sits at the 10 times bound. On the 19 October build, calibration roughly halved the effective sample from the FRS's own weights (#1334).

Precision: the effective sample of about 7,500 gives about 750 effective households per decile and 375 per vigintile. We publish no standard errors for national results; the 90% intervals are for local areas only. Say we will follow up on national intervals.

### Q3. Which benefits are simulated and which taken as reported, and what take-up rate does the file imply?

If asked what is simulated: Universal Credit, Pension Credit, Child Benefit, pension-age Housing Benefit and Council Tax Reduction (where the scheme is modelled) are computed from the rules and gated by a stored claim flag. Working-age Housing Benefit and the legacy benefits are continuing awards only and cannot rise under a reform. Other English working-age Council Tax Reduction keeps reported amounts. For PIP, DLA, Attendance Allowance, Carer's Allowance and the State Pension, say we will follow up with a simulated-or-reported list; do not guess.

If asked for the take-up rate: there is no single rate to quote. Reporters claim; others are drawn to DWP's 2025 UC caseloads by family type and award band, Pension Credit rates for 2023–24 and HMRC's Child Benefit rates. The UC take-up parameter is read by no formula, so "80%" cannot be set for a run today; a full-take-up run can (the claim flag set to true). The implied UC rate on this build: say we will follow up.

### Q4. What external evidence is there beyond the in-sample fit, and what has changed since HM Treasury's pilot?

If asked what has changed since the pilot: the record is dated 17 December 2024 and predates the Microcosm UK builds used here. Whether its income tax finding still holds has not been re-tested with HMT; say so. Do not claim it is fixed. Whether the pilot used the earlier Enhanced FRS file: say we will follow up.

External checks we can point to, none of them a calibration target: the seven OBR costings on slide 19 (52% to 134% of the OBR's figure, two gaps not yet explained); one held-out statistic, NEET 16–24, 3.0% below ONS; the HBAI checks on slide 18, which the file fails on poverty levels. There is no out-of-sample page for the UK and no reconciled comparison with another model. That is what the pilot on slide 23 is for.

If asked how the constituency figures are made: a separate file of 150,000 records fitted to 28,725 local targets (98.6% within 10%, in-sample; effective sample about 97,000), published only where 10 or more survey households lie behind a number, with 90% intervals. How the intervals are computed, whether copies count towards the 10, and any out-of-sample check of local results: say we will follow up.

### Q5. How would RF reproduce a number in a year, on what terms are the records held, and who maintains it?

If asked about reproducing a result: each run records the package versions, the data build and the forecast (the run receipt). A build is named by a release ID that resolves to a fixed revision, with its files pinned by SHA-256, and policyengine.py ships a manifest naming the certified build at each version. So a result can be rerun on the versions and build it was made with. How long old builds stay available: say we will follow up.

Be straight on movement: builds change often (15 and 22 November), and results move with them. In microcosm#1710 a three-child-limit result moved from 336,000 to 300,000 between two builds, not yet traced. A user who needs a stable series pins one version and one build.

If asked on what terms we hold and share the records: they are FRS-derived under the UK Data Service licence, kept in a private repository, reached by token; we publish tables, not records. The terms on which another organisation could hold them are not settled: that is question 5 on slide 24. Say we will follow up in writing, and do not describe the licence from memory.

### 25. Thank you (reference)

Offer to send the deck as a PDF, with the mapping tables updated once the
remaining checks finish. If asked who maintains the model after grant 2
ends, say PolicyEngine maintains it in the open and changes go through
public pull requests; make no commitment beyond that.
