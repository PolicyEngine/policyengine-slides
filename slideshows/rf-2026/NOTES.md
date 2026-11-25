# Presenter notes: PolicyEngine UK and the Resolution Foundation's modelling

25 slides, about 20 minutes of talk, then discussion. The talk follows twelve
slides after the two openers: 4, 7, 9, 12, 13, 14, 16, 19, 21, 22, 23 and 24.
The others (3, 5, 6, 8, 10, 11, 15, 17, 18, 20 and 25) are reference, for
questions and to leave behind. Rough checkpoints: slide 12 by minute 7,
slide 16 by minute 14, slide 24 by minute 21. If time is short, take 16 and
19 in a sentence each; keep 13, 14, 23 and 24.

Where the deck describes the IPPR tax-benefit model or the Resolution
Foundation's method, it relies on published sources only, each dated.
"Not public" means we found nothing published, not that the thing does not
exist. Corrections are welcome throughout.

One Microcosm build is used for every data figure: the certified national
build of 15 November 2026 (fcfac709, certified in policyengine.py 6.20.1).
A newer certified build exists (24 November, policyengine.py 6.20.3: 1,536
targets, 98.76% within 10%); the deck does not mix the two. Three results
were run on other builds and carry a run label on their slide.

## Talk

### 1. Title (opener, 20 seconds)

Thank the Resolution Foundation for the time. The deck has 25 slides; the
talk follows about a dozen, and the rest is reference. Our descriptions of
the IPPR model and of RF's method come from published sources; please
correct us.

### 2. In brief (opener, 40 seconds)

One sentence per part. Part 4, RF's research and how each use maps to
PolicyEngine, is the core and gets the most time.

### 3. Who we are (reference)

- 10ds-microsim's results are described as supplementary, experimental
  analysis.
- HM Treasury's transparency record (17 December 2024) describes a 2024
  trial alongside its own model and says HMT does not currently use
  PolicyEngine. Slide 20 gives the record's findings.
- The OBR item is engagement listed in its annual report, not use.
- The Lords citation is of House of Commons Library research that used
  PolicyEngine.
- PolicyEngine has also presented to the Scottish Government; that is not
  on the slide.

### 4. PolicyEngine UK computes household incomes after taxes and benefits (spoken, 1.5 minutes)

The architecture is the familiar one: rules applied to a household file,
baseline and reform, and the difference. What differs is that the rules,
the tests and the data pipeline are all open, and that the household file
is reweighted to official statistics (slide 7).

Two behavioural responses run by default: capital gains realisations, with
an elasticity of 1.0 from Advani, Lonsdale and Summers (2024), and changes
in employer NI passed through to pay. Labour supply responses are off
unless switched on; the optional hours response follows the OBR's
labour-supply note. There is no general equilibrium.

### 5. How the rules are encoded (reference)

Each parameter is a dated YAML file with a legal reference; each variable a
short Python formula; each test a YAML case. The counts are for
policyengine-uk 2.179.0 and the registry line for 2.180.0; both are labelled.
A structural change is a pull request to a public repository, reviewed
before it merges.

### 6. What the UK model covers (reference)

Two rows are likely to matter. Council Tax Reduction: Scotland, Wales,
England's pensioner scheme and five English working-age schemes (Merton,
Kingston, Newham, Westminster, Oxford) are simulated; other English
working-age claimants keep reported amounts. Local Housing Allowance is in
the code, by BRMA, though not yet a registry entry. The registry lists
alcohol, tobacco and gambling duties as partial; the code models them on
imputed spending. Wealth tax, land value tax and carbon tax exist only as
hypothetical reforms.

### 7. Microcosm UK 2024–25: how the household file is built (spoken, 2 minutes)

Slow down here: this is where PolicyEngine differs most from the other two
models. Three choices:

1. Top incomes come from the SPI 2022–23 public-use file at record level:
   10,000 copies of FRS households whose adults take SPI incomes, plus more
   copies in the bands above £200k, £500k, £1m and £2m.
2. Wealth (Wealth and Assets Survey round 8) and spending (Living Costs and
   Food Survey 2024–25, with the Effects of Taxes and Benefits and the
   National Travel Survey) are imputed onto the same records with
   quantile-regression forests, so one file serves direct taxes, indirect
   taxes and wealth.
3. The weights are fitted to 1,534 official totals, each weight bounded at
   10 times its starting weight.

The costs: an effective sample size of about 7,400 from 78,164 records; the
SPI copies' industry is imputed; the targets are for 2025. Slide 16 sets
this beside the IPPR model and UKMOD.

### 8. How far results break down (reference)

Household type, tenure and number of children are variables without a
standard output, so a breakdown by them is custom analysis. Vigintiles come
from `calculate_decile_impacts(..., quantiles=20)` in Python; the default
ranking income is unequivalised household net income, and a pre-computed
grouping can be passed with `decile_variable=`. Relative poverty is 60% of
the contemporary median; the absolute line is the 2024–25 line held in real
terms; "child" in the standard output is age 17 or under.

### 9. What the Nuffield Foundation grants funded (spoken, 2 minutes)

Grant 1's aims were comprehensiveness, accuracy and accessibility: making
the model local (constituencies and local authorities), wider (childcare,
public services) and easier to use. The table shows, for each area Nuffield
lists, what exists in the model and data today. It does not claim each item
was completed inside the grant period.

On the comparison dashboard, be exact. What exists is a public scorecard
(policyengine-scorecard.vercel.app/scorecard) that sets published results
from other models beside PolicyEngine's: 2,649 claims harvested for the
Autumn Budget 2025 from UKMOD, the IPPR model, RF and the IFS, 628 of them
with a PolicyEngine counterpart, plus 758 UKMOD statistics. The case-by-case
comparison with UKMOD is not done yet, and there is no TAXBEN comparison.
It is in progress.

The symposium row is marked as being checked: a London event on
3 November 2025 was supported by the Nuffield Foundation; whether it counts
under grant 1 is being confirmed.

Grant 2 runs from July 2026 to June 2029 and funds constituency-level
Budget analysis, council tax variation and outreach to local journalists.
Council tax variation bears directly on the Council Tax Reduction gap on
slide 14.

### 10. The Autumn Budget 2026 dashboard, by constituency (reference, live page)

Open only if asked what local output looks like. The dashboard models the
Budget's household measures, including the energy payment, zero VAT on
electricity, fuel duty, the Pension Tax Allowance, property and savings
income tax, the trading allowance and the Carer's Allowance taper; sources
differ on the count, so the slide gives none. The run that produced all the
measures took 8.1 minutes with one machine per measure in parallel; it is
not a single-run speed. The web app's own estimate for a UK national run is
three minutes. Needs an internet connection; on a video call, share the
browser tab if the embed lags.

### 11. The Resolution Foundation's 2026 research we have read (reference, one sentence)

"We read the year's reports and their figure notes to list how the model is
used; the next slide is the method as we understand it." The slide has no
child poverty figure: RF's child poverty figures in different reports are
on different bases. If asked, quote Spread thin only: 27.7% to 25.1% over
the Parliament (29 October 2026).

### 12. How the Resolution Foundation projects incomes, as we read it (spoken, 1.5 minutes)

This slide exists to be corrected. It separates what the IPPR model does
(step 4, in teal) from RF's own processing around it (steps 1–3 and 5), as
we read Annex 1 of the Living Standards Outlook 2026. The split decides what
PolicyEngine would need to do and what could stay as it is. Ask directly: is
the split right, and has the method changed since February?

Fuller wording of the steps (LSO 2026, Annex 1):

1. Base data: FRS and HBAI 2023–24 (2024–25 in the October 2026 work).
2. Reweight: to ONS population projections, OBR participation and
   unemployment, and PIP caseload projections (Stata reweight2).
3. Uprate and impute: earnings to OBR average earnings with a minimum-wage
   floor and spillovers; private pensions by RPI capped at 5%; savings
   income modelled in the Wealth and Assets Survey and imputed into HBAI;
   dividends and property income follow the OBR; rents on the ONS Price
   Index of Private Rents; an after-housing-costs deflator.
4. Taxes and benefits (the IPPR model): each year's rules; Universal Credit
   take-up 80%, Pension Credit 65% rising to 70%.
5. Anchor: modelled growth rates, and absolute changes in poverty, applied
   to outturn data.

### 13. Each published use of the IPPR model, mapped to PolicyEngine: analyses (spoken, 3 minutes)

Go row by row; this slide and the next are the core. "Done" means a
standard output or the code does it today; "Partly" that the pieces exist
but something RF's method needs is missing or works only in Python; "Not
yet" that it would need building. Speak to A1, A2, A3 and A6; leave the rest
to read and to interrupt on. After the third group, ask: which use matters
most, and is any use missing?

Three things worth saying up front: vigintiles exist in Python but the web
app shows deciles, and the default ranking income is unequivalised, so RF's
equivalised vigintiles would be passed in as a grouping; there is no
ready-made "earlier policy, uprated" baseline for a cumulative chart; the
standard child poverty output counts everyone aged 17 or under, not HBAI's
dependent children. For anyone reading the code: `in_poverty_bhc` is
absolute poverty; relative poverty is `in_relative_poverty_bhc`.

Full rows (checked against policyengine-uk 5987eb3, microcosm cac12ab,
policyengine.py 81bac43 and policyengine-app-v2 d27867f, 25 November 2026):

- **A1. Distribution of a Budget's measures by income group** (Spread thin,
  Fig 8, by vigintile). Deciles in the web app and Python. Vigintiles in
  Python only (`calculate_decile_impacts(..., quantiles=20)`); a
  pre-computed grouping can be passed in (`decile_variable=`). Done for
  deciles; Partly for vigintiles. (`outputs/decile_impact.py`,
  `decile_grouping.py`; app `ReportOutputSocietyWideUK.ts`.)
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
  modified OECD scale; baseline against reform. "Child" is age 17 or under.
  The two-child limit is abolished from 6 April 2026 in the baseline. Done
  for the policy difference (the definition differs); projected levels as
  A3.
- **A5. The LHA freeze** (Spread thin, Fig 9). Published LHA rates by BRMA
  and category, 2014 to 2026; a freeze parameter, on from April 2025 and
  kept on from 2027 as announced policy; BRMAs assigned in Microcosm;
  private rents follow ONS PIPR by region. Done.
- **A6. Non-take-up: entitlement at full take-up minus reported receipt**
  (Billing me softly). In Python, a flag override gives full entitlement for
  Universal Credit, Pension Credit, Child Benefit, pension-age Housing
  Benefit and Council Tax Reduction. Working-age Housing Benefit and legacy
  benefits are continuing awards only and cannot rise. No switch in the web
  app. Partly. (`claims_all_entitled_benefits.py`; Microcosm
  `uk/take_up_contract.json`.)
- **A7. Pensions costings** (What a ratchet). The State Pension is modelled;
  its rate follows a triple-lock index that a reform can change. Done.
  PolicyEngine's post "The adjusted Triple Lock" (28 October 2026) is
  related work.
- **A8. Counterfactual histories** (Counting the cost). Growth rates are
  parameters, and changing one re-projects the data. Running the 2024–25
  file on a counterfactual price and earnings path for earlier years has not
  been checked. Partly.
- **A9. Council tax reform** (Home economics; which model it used is not
  confirmed by us). Council tax from the FRS, uprated by the OBR; Band D
  amounts held for every local authority (2025–26, 2026–27); property
  wealth imputed from WAS round 8. A proportional property tax would be a
  new reform. Partly.

### 14. Each step of the projection method, mapped to PolicyEngine (spoken, 2.5 minutes)

Say the main gap first: PolicyEngine fits its weights to one year (2025)
and uprates incomes with OBR growth rates; it does not reweight to
projected populations, employment or caseloads for future years, which is
central to RF's method. After 2025, caseloads move only through population
growth in the weights, the rules and the stored take-up flags. Second:
take-up is drawn when the data are built, so an assumption such as "UC
take-up of 80%" cannot be set for a run today. Where PolicyEngine does
something different rather than less (savings interest from the FRS and
SPI rather than WAS; private pensions on an OBR index), say it is
different, not better. The steps marked "RF" could stay in RF's own code
whichever model sits in the middle, or move into PolicyEngine: question 3
on slide 24. Speak to B2, B8 and B10.

Full rows:

- **B1. Base data: latest FRS and HBAI** (RF). Microcosm UK on FRS
  2024–25; HBAI-definition income and equivalisation computed in the model.
  Done.
- **B2. Reweight to ONS population projections and OBR participation and
  unemployment for future years** (RF). One calibrated dataset, fitted to
  2025 targets. Later years uprate money values only; household weights
  grow uniformly with ONS population. Microcosm's static-ageing reweighter
  has no UK projection reader. Not yet.
- **B3. Adjust for projected PIP caseloads** (RF). PIP cases calibrated for
  2025 only (England, six age bands); later years move only with population
  weights. Partly.
- **B4. Uprate earnings and other incomes with the OBR forecast** (RF). OBR
  October 2026 forecast for 2026–31, projection to 2032; earnings follow OBR
  average earnings; benefit rates follow September CPI. Done.
- **B5. A minimum-wage floor with spillovers; private pensions by RPI capped
  at 5%** (RF). Private pensions follow an OBR private-pension index, not
  RPI capped at 5%. A minimum-wage floor with spillovers was not found.
  Partly.
- **B6. Savings income modelled in WAS and imputed** (RF). Wealth
  (property, financial, pension, ISA, debts) imputed from WAS round 8.
  Savings interest comes from the FRS, with SPI donors at high incomes,
  grown by OBR savings income per head. Done, by a different method.
- **B7. Rents on the ONS Price Index of Private Rents; an AHC deflator**
  (RF). Private rents follow ONS PIPR by region; social rents follow an OBR
  series. The AHC deflator has not been checked. Done for rents.
- **B8. Partial take-up calibrated to DWP and HMRC** (IPPR model). Take-up
  flags are drawn when the data are built: reporters claim, others are drawn
  to fit DWP 2025 UC caseloads, Pension Credit rates for 2023–24 and HMRC
  Child Benefit rates. The take-up parameters do not move a run. Partly.
- **B9. Indirect taxes on the LCF** (IPPR model). Spending imputed from
  LCFS 2024–25; VAT (split from the ETB) and fuel, alcohol, tobacco and
  gambling duties. Done.
- **B10. Apply modelled growth rates, and changes in poverty, to outturn**
  (RF). Not in the model; runs give levels by year, so it would stay in
  RF's own code or be added. Not yet.
- **B11. Council Tax Support: local variation** (not modelled in RF's
  projections). Simulated for English pensioners, Scotland, Wales and five
  English working-age schemes; other English working-age claimants keep
  reported amounts. Partly.

### 15. A Resolution Foundation proposal already modelled: the targeted energy bill discount (reference)

Mention in one sentence on slide 13 or 23. It shows the proposal's rule, a
test on the highest individual income in a household, encoded and run in
the open. It is not validation: the two figures share the FRS and say
nothing about which model is closer to the truth. It is the smaller of the
two pilot candidates on slide 23.

### 16. The data: PolicyEngine, the IPPR model and UKMOD (spoken, 2 minutes)

Frame these as design differences, not a ranking. UKMOD's principle is not
to reweight or calibrate, so results stay traceable to the survey;
PolicyEngine fits weights to official totals and pays for it in effective
sample size (about 7,400 from 78,164 records); RF reweights for projection
years with its own code. All three inherit the FRS's under-recording of top
incomes and of benefit receipt and handle it differently.

Fuller cells:

- Top incomes, UKMOD: none by default; an optional HBAI extension swaps in
  SPI-adjusted HBAI incomes and weights.
- Wealth, PolicyEngine: WAS round 8 imputed onto FRS records; savings
  interest from the FRS and SPI, not WAS. UKMOD models no CGT, inheritance
  tax or stamp duty.
- Take-up, IPPR model: a partial take-up algorithm since 2017, calibrated
  to DWP and HMRC (Scottish Government, 2018); UC 80% and Pension Credit 65%
  rising to 70% in LSO 2026.
- Weights, PolicyEngine: 1,534 targets (HMRC 776, ONS 365, DWP 233, MHCLG
  82, others 78); 98.8% within 10%, in-sample. IPPR model: starting weights
  not public; for projections RF reweights to ONS population projections,
  OBR participation and unemployment, and PIP caseloads.
- Years ahead, UKMOD: a release after each Budget (B2026.05, 30 October
  2026).

### 17. The rules engine and access (reference, one sentence)

"The rules comparison is here for reference: all three are static by
default, UKMOD publishes the most validation, and PolicyEngine's difference
is that rules, tests and the data pipeline are open and changes go through
public pull requests." The IPPR coverage cells come from the Scottish
Government's 2018 description and may be out of date. The IPPR model is
maintained at PERU, Manchester Metropolitan University; version IPPRTBM
02_93 is cited in JRF work of June 2026.

TAXBEN is not a column because we hold too little published detail for a
fair one: in use since 1983, on the FRS and LCF, entitlement or reported
take-up, static, proprietary.

### 18. Calibration: weights fitted to official statistics (reference)

Say first what this is not: it is how well the weights reproduce the totals
they were fitted to, so 98.8% is not a measure of accuracy on anything else.
Its value is transparency (every target and its fit is on a public page)
and that benefit caseloads which the raw FRS misses badly are matched.

### 19. Autumn Budget 2026: PolicyEngine's costings beside the OBR's (spoken, 1.5 minutes)

The nearest thing we have to an external test, so show the misses as
plainly as the hits: fuel duty and the trading allowance are about half the
OBR's figure, the energy payment about three-quarters, VAT and property
income tax within about 15%. The large gaps have reasons: households hold
roughly half the fuel duty base, and the devolved share of the energy
payment is not modelled. We make no claim about accuracy relative to the
IPPR model, UKMOD or TAXBEN; the scorecard's three like-for-like rows are on
slide 20. The Pension Tax Allowance (income tax only):
PolicyEngine £42m, £112m and £193m against the OBR's £44m, £83m and £144m
for 2027–28 to 2029–30.

### 20. What we do not claim, and known limits (reference)

Show it if asked "how do you know it is right" or about HM Treasury. On HMT,
say what the record says and no more.

The middle panel lists the only rows on the scorecard labelled
"comparable" (policyengine-scorecard 771c028, `app/public/data/
populations.json`, built 30 October 2026; harvest
`sources/harvest-uk-ab2025-2026-09-24/`). PolicyEngine's runs used
policyengine-uk 2.132.6 and policyengine.py 6.11.0 on the Microcosm UK
2024–25 build of 19 October 2026 (20261019T083323Z-6cba5d71), static. RF's
figures are from its Autumn Budget 2025 period work, harvested from
publications of October to December 2025, before the two-child limit was
abolished from April 2026:

- Scrap the two-child limit, Exchequer cost, 2029–30: RF £3.5bn;
  PolicyEngine £3.19bn (−9%).
- Scrap the two-child limit, fewer children in poverty after housing
  costs, 2029–30: RF 480,000; PolicyEngine 445,000 (−7%).
- A three-child limit instead, fewer children in poverty after housing
  costs, 2029–30: RF 350,000; PolicyEngine 318,000 (−9%).

These are 3 of the 755 scorecard rows that have a result. The rest are
approximations of the other model's concept, and some are far apart (for
example, cutting the higher-rate threshold to £46,000: RF £9.0bn,
PolicyEngine £6.62bn). The scorecard grades nothing, and the deck quotes no
agreement rate from it.

An earlier comparison of poverty rates with HBAI used the previous dataset,
not Microcosm; an equivalent check on Microcosm is not yet published.

### 21. Routes in for teams that don't write Python (spoken, 1.5 minutes)

The model's language need not be the analyst's working language: a reform
is a parameter path and a value, and an assistant can write the code around
it, which stays in a repository where it can be reviewed and rerun. Be
straight on maturity. The Claude connector is a preview and not yet
launched. The web app covers parametric reforms and standard outputs
(deciles, not vigintiles; no entitlement switch; no structural reforms), so
most of the uses on slides 13 and 14 need the Python route, with or without
an assistant. An API exists; its UK endpoints are not on the slide.

### 22. Three ways the Resolution Foundation could use PolicyEngine (spoken, 1.5 minutes)

These are options, not a proposal with a price or a timetable. A uses only
what is already public. B is a low-commitment way to learn whether the
numbers agree. C is the only one that would touch RF's own workflow, and it
has two open preconditions: how RF would hold Microcosm under its own UK
Data Service terms, and which steps on slide 14 would need building.
Smaller pieces in Python today but not in the web app: vigintiles, and
entitlement runs for five benefits.

### 23. A possible pilot: one published analysis, side by side (spoken, 1.5 minutes)

The output that matters is the reconciliation, not agreement: a table that
splits each difference into data, rules, take-up and uprating. That would
be the first reconciled, like-for-like comparison between PolicyEngine and
the IPPR model; the scorecard sets published figures side by side,
with three like-for-like rows (slide 20), and reconciles nothing.

- Candidate 1, the Autumn Budget 2026 distribution chart (Spread thin,
  Fig 8). Both sides have published on the same Budget, but the headlines
  differ in scope: RF's £4.4bn cost-of-living package against PolicyEngine's
  seven measures (£3.11bn in 2026–27). The pilot would start by agreeing the
  list of measures. What it needs exists in Python: vigintiles, with RF's
  equivalised ranking passed in as a grouping, and indirect taxes on LCFS
  2024–25 spending.
- Candidate 2, Billing me softly. The proposal is already encoded (slide
  15); the pilot would add the report's non-take-up method. PolicyEngine can
  run full entitlement for Universal Credit, Pension Credit, Child Benefit,
  pension-age Housing Benefit and Council Tax Reduction, not for working-age
  Housing Benefit or legacy benefits.
- Not suggested first: the Living Standards Outlook projection (it rests on
  future-year reweighting) and the cumulative-Parliament chart (it needs a
  hand-written earlier-policy baseline).

No commitment on timing; the scope is RF's to choose.

### 24. Questions for discussion (discussion)

Stop presenting and leave this slide up. Start with question 1, because the
other answers depend on it.

### 25. Thank you (reference)

Offer to send the deck as a PDF, with the mapping tables updated once the
remaining checks finish.
