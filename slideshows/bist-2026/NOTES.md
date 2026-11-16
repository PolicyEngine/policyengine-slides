# Presenter notes: From business shocks to household incomes

Notes for the seminar with the BIST Modelling Unit on 19 November 2026. The
slides carry one message each, with icons, short labels and status tags. These
notes carry the sentences, caveats and figures that the presenter says aloud.
Every figure here is one the deck already cites; the sources are in
[README.md](README.md) and in the comments of `content.ts`.

Status tags used on the slides: **Not built**, **No results yet**,
**Experimental**, **Proposed, not built**, **Working paper**, **Illustrative**,
**Early prototype**, **In-sample fit** and **Survey-weighted FRS 2024–25, not
Microcosm UK**.

## Talk (slides 1 to 20)

### 1. Title

- Tax–benefit microsimulation alongside trade, macroeconomic and agent-based
  models.
- Speakers: Vahid Ahmadi (Research Associate) and Max Ghenis (CEO).

### 2. In brief

- The talk proposes two candidate pilots that would pass another model's
  sector results to PolicyEngine. Neither is built.
- **Incomes, not spending.** PolicyEngine UK is open-source tax–benefit
  microsimulation. It computes household incomes after taxes and benefits,
  poverty and the public finances. Household spending is an input, not a
  result.
- **A household layer for other models.** Trade, macroeconomic and
  agent-based models give changes in earnings, jobs and prices by sector.
  PolicyEngine can turn these into household and fiscal effects by income
  decile and region, and experimentally by local area. No such link is built:
  our trade and AI studies use published estimates and stated scenarios.
- **Two candidate pilots.** Tariff changes under the US–UK Economic
  Prosperity Deal, and the electricity-cost relief of the British Industrial
  Competitiveness Scheme (BICS). We have no published results for either.

### 3. PolicyEngine UK computes incomes, not spending

- The model computes household incomes after taxes and benefits, poverty and
  the public finances.
- **The rules.** PolicyEngine UK codes taxes and benefits from legislation
  and guidance, and uprates them with OBR outturn and forecasts.
- **The households.** Microcosm UK 2024–25: the Family Resources Survey, with
  high incomes imputed from HMRC's Survey of Personal Incomes, wealth and
  spending imputed from other surveys, and weights calibrated to official
  totals.
- **The results.** policyengine.py reports effects by programme, income
  decile, poverty, inequality and region, and the net cost to the Exchequer.
  Local-area results use a separate, experimental file.
- Spending is an input, not a result. Each household's spending by category
  sets its VAT and duties and its exposure to a price change. What the model
  computes is income.
- Open source. Later slides cover how a run works, how the rules are written
  and how the data are built.
- The shock studies were run on earlier datasets (the survey-weighted or
  enhanced FRS), not Microcosm UK.

### 4. How a reform or a shock is run

- Two simulations on the same households: a baseline and a counterfactual.
- **Certified dataset.** Microcosm UK 2024–25: people, benefit units and
  households, with weights.
- **Project to the year.** Each input grows by its own index (earnings,
  prices and others), from OBR outturn and forecasts.
- **Run twice.** Baseline and counterfactual on the same records. A reform
  changes parameters; a shock changes inputs.
- **Take the difference.** Per household, then weighted: deciles, poverty,
  programmes, regions, local areas (experimental) and the government balance.
- **A reform** is a parameter path and a new value, from a date. The example
  on the slide is `gov.hmrc.income_tax.rates.uk[0].rate: 0.21`.
- **A shock** is changed inputs, such as earnings by sector or spending by
  category. The rules stay as they are.
- **Mostly static by default.** Labour supply does not respond unless
  switched on. Two responses run by default: capital gains realisations
  (elasticity 1) and employer NI changes passed to pay.
- An optional response on hours of work uses the OBR's elasticities. A
  participation response is in the code but switched off.
- **Not modelled.** Firms' decisions, and how wages and prices adjust. There
  is no general equilibrium: those come from outside.
- A business shock enters through earnings, prices or business taxes, from
  published estimates, another model or a stated scenario.

### 5. Disaggregating tariff impacts

- A trade model gives results by sector. PolicyEngine could carry them to
  households; the concordance is not built.
- **Sector results (trade model).** A GTAP-style run: changes in output,
  employment and prices by sector, and wages by labour type.
- **Concordance (agreed mapping, not built).** Model sectors to two-digit SIC
  divisions for earnings and jobs; to COICOP spending divisions for prices.
- **Assign to people (PolicyEngine).** Earnings and job changes to employees
  in each sector, over repeated draws; price changes to each household's
  spending.
- **Apply the rules (PolicyEngine).** Taxes and benefits recomputed for every
  household, before and after.
- Breakdowns PolicyEngine returns:
  - Income deciles: the average change, and the shares gaining and losing
    within each decile.
  - Poverty and inequality: poverty rates, overall and by age and gender;
    Gini and income shares.
  - Programmes: the main taxes and benefits, and the net cost to the
    Exchequer.
  - Places: regions; constituencies and local authorities from the
    experimental file.
- The breakdowns are standard policyengine.py outputs; the net Exchequer cost
  is the change in the model's government balance.
- Today the trade study assigns shocks by two-digit SIC division. The
  survey's sample size limits sector detail.

### 6. The tariff bridge: steps a trade model could replace

- How the trade study turns the 2025 US tariffs into an earnings shock for
  survey employees.
- **Tariff rates.** The full US schedule before the Economic Prosperity Deal.
- **US export intensity.** By two-digit SIC division.
- **Export-demand elasticity.** Assumed 1 (the OBR's March 2025 scenarios use
  0.4).
- **Earnings shock by sector.** About £1.0bn a year (an output of these
  steps), all assumed to fall on employees' earnings.
- **Survey employees.** Assigned to FRS employees who work in that sector.
- The three middle steps are the ones a trade model's sector results could
  replace.
- Taxes, benefits and lower pension contributions absorb 43.7% of the loss
  when it takes the form of wage cuts and 35.4% when it takes the form of job
  losses (standard deviation 5.1 points across 100 draws). This is the Dolls,
  Fuest and Peichl stabilisation coefficient.
- Results are for the tariff schedule before the US–UK Economic Prosperity
  Deal, on the survey-weighted FRS 2024–25.
- The deal's general terms (operative 8 May 2025) provide for a quota of
  100,000 UK vehicles at a 10% tariff and, subject to supply-chain
  conditions, a steel and aluminium quota at most-favoured-nation rates.
- The study's code includes a deal schedule, but we have no published results
  for it.

### 7. Assignment variability: repeated random draws

- A sector-level shock does not say which survey employees are affected.
- A scenario sets the chance that an employee loses their job, by sector or
  occupation. Who does is drawn at random.
- In the tariff study, whether a newly entitled family claims Universal
  Credit is also drawn, at the scenario's take-up rate.
- Every draw is a full run of the tax and benefit rules. Studies report the
  mean and the standard deviation across draws.
- 50 draws in the AI study's central scenario; 100 in the tariff bridge.
- £17.7bn: the Exchequer cost of the illustrative AI scenario, as the mean of
  50 draws, on the survey-weighted FRS 2024–25, not Microcosm UK.
- £1.2bn: the standard deviation across draws. The 2.5th to 97.5th percentile
  of the 50 draws runs from £15.5bn to £19.8bn.
- £18.2bn → £29.5bn: one draw of the same scenario costs £18.2bn on the
  survey-weighted FRS and £29.5bn on the enhanced FRS 2023–24. The dataset
  moves the cost more than the draws do.
- The draws cover random assignment only, not sampling error in the survey,
  error in the calibrated weights or doubt about the scenario.
- The trade study also reports household-bootstrap sampling intervals for its
  energy results.

### 8. How the rules are encoded

- Law as dated parameters, formulas and tests. The example is the personal
  allowance, abridged; the counts are at version 2.179.0 (the bundle
  certifies 2.174.1).
- **Parameter: dated values, with legal references.** The personal allowance
  is 12,500 from 6 April 2019 and 12,570 from 6 April 2021, the second with a
  reference to the Income Tax (Indexation) Order 2021. The parameter file is
  linked in the sources row.
- **Variable: a formula over arrays, one value per person.** This is the
  snippet on the slide. It reduces the allowance by the reduction rate for
  adjusted net income above the limit, and never below zero.
- **Test: inputs and the expected output.** The linked test file includes the
  case "Personal Allowance eliminated": for 2020, an adjusted net income of
  150,000 gives a personal allowance of 0.
- **Three entities.** Person, benefit unit and household. Each variable
  belongs to one.
- **1,086 parameter files.** Dated rates and thresholds; 998 carry a
  reference.
- **1,504 variables, 6,779 tests.** A test gives inputs and the expected
  output.

### 9. Microcosm UK 2024–25: how the household file is built

- An open-source pipeline from licensed surveys and published statistics to a
  weighted file.
- **Survey spine (FRS 2024–25).** Households, benefit units and people, with
  incomes, housing and each main job's sector.
- **Tax-record incomes (HMRC SPI 2022–23).** Copies of survey households draw
  incomes from the public-use file; extra records above £200,000.
- **Wealth and spending (WAS, LCFS, ETB, NTS).** Wealth, spending by
  category, VAT, public services and travel, drawn from donor surveys.
- **Benefit take-up (DWP and HMRC).** Who claims, drawn to published rates
  among those the rules find entitled.
- **Calibrated weights (official totals).** Household weights fitted to
  official totals by the calibration step.
- **Imputation.** Quantile regression forests, weighted and chained across
  variables. Draws sample the conditional distribution.
- **Sector and occupation.** From the survey's job record; redrawn for the
  tax-record copies. No weight target is by industry.
- **Reproducible.** Every survey microdata file is pinned by SHA-256. Draws
  are seeded.
- **In the code.** 56 declared stages, each naming its survey and source
  (commit 429d7a0, 15 November).
- Abbreviations. FRS: Family Resources Survey. SPI: Survey of Personal
  Incomes. WAS: Wealth and Assets Survey, round 8. LCFS: Living Costs and
  Food Survey 2024–25. ETB: Effects of Taxes and Benefits. NTS: National
  Travel Survey.
- The shock studies in this deck were run on earlier datasets, not on
  Microcosm UK.

### 10. Calibration: weights fitted to official statistics

- The certified national build of 7 November 2026, as its public dashboard
  reports it.
- 1,514 targets, in 44 statistics.
- 98.7% of targets are within 10% of the official figure.
- 0.51% is the final loss: the weighted, capped relative error.
- 78.2k household records have a non-zero weight.
- What the solver minimises (the equation on the slide):
  - *w* are the household weights (*w*⁰ at the start). *a_j* is a
    household's contribution to target *j*, from data and rules. *t_j* is the
    official figure.
  - The target weights *ω_j* sum to one: each group of related targets
    carries equal total weight, split evenly within it.
  - Gradient descent (Adam) on log-weights: 1,500 steps, a fixed seed, and
    each weight at most 10 times its start.
- Targets by publisher:
  - HMRC, 776: incomes by band and region, capital gains, tax liabilities.
  - ONS, 365: population by age and region, employment by occupation.
  - DWP, 213: Universal Credit, State Pension and other benefit caseloads.
  - MHCLG, 82: council tax dwellings by band.
  - Others, 78: OBR receipts and spending, bus journeys, student loans.
- This is in-sample fit; the dashboard has no out-of-sample test for the UK.
- Solver settings in the code (429d7a0) match the build's diagnostics.

### 11. Business policy beyond tax: from firm costs to households

- Example: the British Industrial Competitiveness Scheme, which exempts
  eligible manufacturers in Great Britain from three electricity policy
  costs. Not built; no results.
- **Cost change by sector (scheme design).** Relief from three electricity
  policy costs for eligible manufacturers: the impact assessment estimates
  £35 to £40 per MWh, from 2027.
- **How firms use it (outside PolicyEngine).** Lower prices, higher pay or
  more jobs, investment, or higher profits. This step comes from another
  model, or an assumption.
- **Allocate to households (PolicyEngine).** Prices by spending, earnings and
  jobs by sector of employment, profits by shareholding.
- **Household and fiscal effects (PolicyEngine).** Net incomes by decile and
  region (local areas experimental); poverty; tax and benefit receipts.
- The same path serves a subsidy or a regulatory cost. PolicyEngine needs the
  cost change and how firms split it; it computes who gains or loses and the
  knock-on change in taxes and benefits. The measure's own Exchequer cost
  comes from outside the model.
- In the model today, employer NI changes are split between pay, prices and
  profits (by default, all to pay), and an outside business-tax estimate can
  be allocated by spending or shareholding. Both are booked as taxes, so a
  non-tax measure needs an extension.

### 12. What we have on the business side

- Each piece is labelled by how far along it is.
- **Firm-level VAT microsimulation (working paper).** A synthetic population
  of UK businesses calibrated to the ONS VAT/PAYE enterprise frame (about 2.7
  million enterprises) and HMRC's count of VAT-registered traders (about 2.2
  million). It costs changes to the level and shape of the VAT registration
  threshold and a reduced-rate band. It does not recover administrative
  microdata or firm behaviour; turnover responses are sensitivity exercises
  under assumed elasticities.
- **Employer costs (in the model).** PolicyEngine UK computes employer
  National Insurance and total employment costs. We have published analyses
  of employer NI exemptions for young workers and recently inactive
  employees.
- **Linking firms to households (not built).** PolicyEngine UK has no firm
  entity, and the firm and household populations are not linked. Microcosm
  can declare firm tables and person–firm job links, but that support is
  experimental, not production.

### 13. Who bears the AI shock?

- An illustrative 2026 scenario: 7% of employees lose a year's earnings;
  other employees' wages rise about 2.6%.
- £17.7bn: the Exchequer cost of the illustrative scenario (mean of 50
  draws).
- +1.87pp: absolute poverty before housing costs.
- Exchequer cost by who loses the jobs: the range across four incidence
  patterns of the same size, and a deliberately top-loaded fifth. £13.9bn
  when losses are uniform; £20.6bn with the top-third earners tilt; £32.8bn
  when top-loaded (a stress test, shown in grey outside the teal band).
- The central £17.7bn lies inside the band; it is not marked on the scale.
- The rise in poverty varies much less across the four patterns (1.85–1.96pp).
- The £20.6bn pattern tilts job losses towards the top third of earners in
  occupations with above-median AI exposure.
- The study uses the survey-weighted Family Resources Survey. In a single
  draw, the central scenario costs £18.2bn on that dataset and £29.5bn on the
  enhanced FRS, so the fiscal results depend on the dataset.

### 14. Where an agent-based model would link

- Three candidate questions, each naming the behaviour the agent-based model
  would simulate. None of these links is built.
- **A supply shock to one product, for example semiconductors.** The
  agent-based model simulates firms along the product's supply chain losing
  inputs, switching suppliers, and cutting output and jobs. It passes job and
  earnings losses by sector and region. PolicyEngine returns affected
  workers' household incomes, benefit claims and tax receipts.
- **Electricity-cost relief for manufacturers (BICS).** It simulates firms
  that differ in electricity use and market power choosing between prices,
  pay, jobs, investment and profit. It passes changes in prices, earnings and
  profits by sector. PolicyEngine returns income changes by decile and region
  (local areas experimental), and tax and benefit receipts.
- **AI adoption over the business cycle.** It simulates firms adopting
  technology, entering and exiting, with jobs and wages adjusting, as in
  Dosi, Fagiolo and Roventini (2010). It passes paths of jobs, wages and
  profits by sector, in place of the AI study's assumed shock. PolicyEngine
  returns poverty, inequality and tax and benefit receipts in each year.
- Trade flows and the response to tariffs stay in a trade model such as GTAP.
  PolicyEngine models no firm behaviour: it adds the tax and benefit rules
  and the households.
- Dosi et al. model technological change and cycles, not AI; a CGE run with
  technology sectors split out could also supply an AI shock.
- Youngman et al.'s agent-based model cites our approach to under-sampled
  wealthy households; it uses neither our model nor our data.

### 15. Links to macroeconomic models

- **A forecast scenario (mechanism in the model).** PolicyEngine UK projects
  its data forward with OBR growth rates for earnings, prices and other
  series. A scenario from a global macroeconomic forecasting model such as
  NiGEM could replace those paths. We have not run such a scenario.
  Employment is not one of the series: job changes enter as a shock assigned
  to workers.
- **A macro–micro loop (not built).** The macro model's earnings, jobs and
  prices go to PolicyEngine; household incomes and tax and benefit totals go
  back; repeat until the two agree. Precedent: NIESR combined PolicyEngine UK
  with NiGEM to estimate the effect of the 2022 cost-of-living payments on
  GDP. That was a one-off study, not a maintained link.
- **OG-UK (early prototype).** An open-source overlapping-generations model
  of the UK. PolicyEngine supplies each adult's income tax and NI; OG-UK fits
  tax functions to these rates and solves a 60-year transition for output,
  wages, interest rates and revenue. The fitted functions do not yet reflect
  benefit withdrawal.

### 16. A proposed interface: tables in, tables out

- The other model passes (proposed, not built):
  - `scenario, year`: a label and a year (OBR forecasts run to 2031).
  - `basis`: fiscal year; % change from the sending model's own baseline;
    real or nominal, stated.
  - `sector`: two-digit SIC 2007 division, or mapped sectors.
  - `region` (optional): ITL1, the nine English regions and three nations.
  - `earnings, employment`: % change from baseline, by cell and year; say
    whether employment falls are net job losses or moves between sectors.
  - `labour`: by sector, or by skill type mapped to occupation.
  - `prices`: % change by COICOP division and year.
  - `profits` (not built): % change in returns to capital; would be allocated
    by shareholding.
  - `job-loss rule`: equal chances in a cell, or tilted by age or pay.
- PolicyEngine returns (existing outputs):
  - By income decile: net income change; shares gaining and losing.
  - Poverty and inequality: poverty rates, Gini and income shares.
  - By programme: main taxes and benefits; government balance.
  - By place: ITL1 regions; local areas (experimental file).
- PolicyEngine returns (proposed, not built):
  - Across draws: mean and SD across draws, which are in the studies' code,
    not yet in policyengine.py.
  - Format: CSV tables per scenario and year.
- If the trade model holds total employment fixed, its sector results are
  wage changes and moves between sectors, not job losses; PolicyEngine would
  then apply wage changes only.
- No reader for such a table exists.
- Cells of sector by region have few survey records, so they carry sampling
  error.

### 17. Open code, restricted microdata, synthetic data

- **Code (open).** PolicyEngine UK, policyengine.py and the Microcosm data
  pipeline are open source. Anyone can read, run and change the rules and the
  methods.
- **Household microdata (restricted).** Microcosm UK is built from the Family
  Resources Survey, which is licensed through the UK Data Service, so we
  cannot share the records. PolicyEngine runs the simulations and shares
  results as tables.
- **Synthetic firm data (working paper).** The firm VAT paper's synthetic
  business population is drawn only from published ONS and HMRC tables, so it
  can be shared. Data of this kind could help calibrate an agent-based model;
  we have not tested that.
- Models can be linked by exchanging tables by sector, decile or region,
  without microdata changing hands.
- The synthetic firms do not recover administrative microdata or firm
  behaviour, and are not linked to households. Microcosm can declare firm
  tables and person–firm job links, but that support is experimental.

### 18. Two candidate pilots

- One scenario each, passed one way from another model to PolicyEngine. We
  have no published results for either.
- **The Economic Prosperity Deal.**
  - From a trade model: changes in output, employment and prices by sector
    and wages by labour type under the deal's tariff schedule, with the
    labour-market closure stated.
  - From PolicyEngine: the sector concordance; household incomes by decile
    and region, and experimentally by local area; poverty; net Exchequer
    cost.
  - Starting point: the trade study's tariff bridge, with the trade model's
    results in place of its assumed elasticity.
- **The British Industrial Competitiveness Scheme.**
  - From the Modelling Unit: the electricity-cost change by sector, and how
    firms split it between prices, pay and profits, from a model or as
    scenarios.
  - From PolicyEngine: allocation to households by spending, sector of
    employment and shareholding; household and fiscal effects.
  - Starting point: the model's allocation of business-tax changes, extended
    to a non-tax cost change.
- PolicyEngine would run the microsimulation, as the survey data are licensed
  through the UK Data Service. Neither link is built.
- Scenarios are for BIST to choose.
- Later, if a pilot shows it is worth building: a two-way loop with a
  macroeconomic model, OG-UK, and a link between firm and household data.

### 19. Questions for discussion

1. Which is the better first pilot: tariffs under the Economic Prosperity
   Deal, or BICS?
2. What can a trade-model run export: output, employment and prices by
   sector, wages by labour type? Under which labour-market closure?
3. For a policy such as BICS, where should the split between prices, pay and
   profits come from?
4. Which firm behaviour needs an agent-based model, beyond what a trade or
   macro model gives?
5. Which household results matter most: deciles, poverty, regions,
   constituencies (experimental)?

### 20. Thank you

- Contacts are on the slide: vahid@policyengine.org, policyengine.org/uk,
  github.com/PolicyEngine and linkedin.com/company/thepolicyengine.

## Appendix (slides 21 to 25, shown only if asked)

### 21. Appendix

- Four slides: what the UK model covers; gates, certification and firm
  support; who bears the trade shocks; use, evaluation and engagement.

### 22. What the UK model covers

- Including how the model allocates business taxes to households.
- **Taxes on income.** Income tax, with Scottish rates; employee, employer
  and self-employed NI; capital gains tax.
- **Taxes on spending and property.** VAT; fuel, alcohol and tobacco duties;
  stamp duty and council tax.
- **Taxes on business.** Employer NI, with rate and threshold changes passed
  to employees' pay by default. Business rates and corporate stamp duty, as
  published totals allocated to shareholders. Corporation tax is not
  modelled.
- **Benefits and other.** Universal Credit and legacy benefits; Child
  Benefit, Pension Credit, the State Pension; disability and Scottish
  benefits, childcare support.
- Business-tax changes estimated elsewhere can be allocated to households
  through shareholdings or consumption.

### 23. Gates, certification and firm support

- What is checked before a release, what a certified bundle fixes, and what
  exists for firms.
- **Release gates (in the pipeline).** 94 declared checks across four phases
  of the build. A release is refused if, for example, a target misses by more
  than 25% without a recorded review, the weights' effective sample size
  falls below its floor, or an imputed value leaves the donor survey's range.
  Counted in the code at commit 429d7a0.
- **What "certified" means (policyengine.py 6.19.0).** The bundle pins the
  data file by SHA-256 at an immutable revision, with the model version it
  was built with (policyengine-uk 2.174.1) and the core engine. Installing
  the bundle checks the hash. The pair is certified when the package's tests
  pass on it. A cited bundle version identifies rules, data and engine
  together.
- **Firm support (experimental).** In the code: a firm table and person–firm
  job links that the data frame can declare and validate; a generator of
  synthetic firms ported from the firm VAT paper; eight declared targets (ONS
  enterprise counts, HMRC VAT traders and liabilities). Not production:
  operators that use the links, firm calibration and firm releases. No stage
  of the UK build makes firms. The household file contains no firms.

### 24. Who bears the trade shocks?

- Four UK trade events of 2021–26, traced to households:
  - the part of the food price rise that Bakker et al. (2023) attribute to
    post-Brexit trade barriers;
  - the 2022 energy price surge;
  - projected duty reductions from the UK–India agreement;
  - the 2025 US tariffs.
- The price shocks come from published estimates; the tariff earnings shock
  is built from an assumed elasticity (the tariff bridge).
- The food and energy price rises were largest, as a share of spending, for
  lower-income deciles.
- About 60% was offset by the Energy Price Guarantee and the Energy Bills
  Support Scheme, as a share of the 2022–23 rise in energy costs that would
  have occurred without them (49–64% across variants).
- The study models no policy aimed at the food price rise; general
  cost-of-living payments cushioned it.
- Price episodes use the enhanced FRS 2023–24; the tariff stage the
  survey-weighted FRS 2024–25. Neither is Microcosm UK.

### 25. Use, evaluation and engagement

- **Government.**
  - 10 Downing Street's data science team (10DS) built 10ds-microsim on
    PolicyEngine; its results are used as supplementary, experimental
    analysis.
  - HM Treasury's Personal Tax, Welfare and Pensions team ran a pilot
    evaluation of PolicyEngine UK in 2024; its transparency record says HMT
    does not currently use it.
  - The OBR lists PolicyEngine among the organisations it engaged with in
    2025–26.
- **Research and media.**
  - House of Commons Library research using PolicyEngine, cited in a House of
    Lords debate.
  - PolicyEngine modelling appears in work by NIESR, the New Economics
    Foundation and the Fabian Society, in a PolicyEngine paper published by
    the IEA, and in reporting by The Independent and ITV's Peston.
- **Funding.** The Nuffield Foundation funds PolicyEngine UK through grants
  made in 2024 and 2026, for local-area data and constituency-level Budget
  analysis.
