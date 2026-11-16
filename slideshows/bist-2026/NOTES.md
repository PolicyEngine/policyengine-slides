# Presenter notes: From business shocks to household incomes

Notes for the seminar with the BIST Modelling Unit on 19 November 2026. The
slides carry one message each, with icons, short labels and status tags. These
notes carry the sentences, caveats and figures that the presenter says aloud.
Every figure here is one the deck already cites; the sources are in
[README.md](README.md) and in the comments of `content.ts`.

Status tags used on the slides: **Idea to explore**, **Not yet modelled**,
**Experimental**, **Proposal**, **Possible next step**, **Working paper**,
**Illustrative**, **Early prototype**, **In-sample fit**, **Mostly static by
default**, **Runs today** and **Survey-weighted FRS 2024–25, not Microcosm
UK**.

The talk has three parts, in the order of the meeting's agenda, after the
Modelling Unit introduces its own work and models:

1. **PolicyEngine: who and what** (slides 3 to 8): the organisation, what
   the model computes, how a run works, the rules and the data.
2. **Overlap 1: macro and micro** (slides 9 to 13): the Economic Prosperity
   Deal from macro impacts to household impacts, the disaggregation
   mechanism, the tariff bridge, links to macroeconomic models and a proposed
   interface.
3. **Overlap 2: business modelling** (slides 14 to 16): business policy
   beyond tax, what we hold on firms, and where an agent-based model would
   link.

Slides 17 to 19 close the talk: two candidate pilots, questions and
contacts. Each slide's part is the label above its title.

## Talk (slides 1 to 19)

### 1. Title

- Tax–benefit microsimulation alongside trade, macroeconomic and agent-based
  models.
- Speakers: Vahid Ahmadi (Research Associate) and Max Ghenis (CEO).

### 2. In brief

- The three cards are the three parts of the talk; two candidate pilots
  follow at the end. No link to another model is built.
- **PolicyEngine: who and what.** A nonprofit that builds free, open-source
  tax–benefit microsimulation. PolicyEngine UK computes household incomes
  after taxes and benefits, poverty and the public finances. Household
  spending is an input, not a result.
- **Overlap 1: macro and micro.** Trade, macroeconomic and agent-based models
  give changes in earnings, jobs and prices by sector. PolicyEngine can turn
  these into household and fiscal effects by income decile and region, and
  experimentally by local area. No such link is built: our trade and AI
  studies use published estimates and stated scenarios. The worked example is
  the US–UK Economic Prosperity Deal.
- **Overlap 2: business modelling.** Business policy beyond tax, with the
  electricity-cost relief of the British Industrial Competitiveness Scheme
  (BICS) as the example; what we hold on firms; and where an agent-based
  model could link. PolicyEngine UK has no firm entity.
- **Two candidate pilots** (slide 17): tariff changes under the Economic
  Prosperity Deal, and BICS. We have no published results for either.

### 3. Who we are

- **Nonprofit.** PolicyEngine is a nonprofit building free, open-source tools
  that help people understand tax and benefit policies (the wording of
  policyengine.org/uk/donate).
- **Open source.** The rules (PolicyEngine UK), the data pipeline (Microcosm)
  and the analysis package (policyengine.py) are public. PolicyEngine UK and
  policyengine.py are licensed AGPL-3.0, Microcosm MIT. The household
  microdata are licensed survey records and are not public (appendix,
  slide 26).
- **UK and US models.** One Python package, policyengine.py, runs both
  country models with the same reform and output interface (Ahmadi et al.
  2026, JOSS). This talk is about the UK model.
- **In government** (the logo row). 10 Downing Street's data science team
  built 10ds-microsim on PolicyEngine. The slide says only that HM Treasury,
  the OBR and Parliament (shown by the House of Lords logo) mention
  PolicyEngine on the public record. The detail, as on the appendix slide
  (slide 27):
  - 10 Downing Street's data science team (10DS) built 10ds-microsim on
    PolicyEngine; its results are used as supplementary, experimental
    analysis.
  - HM Treasury's Personal Tax, Welfare and Pensions team ran a pilot
    evaluation of PolicyEngine UK in 2024; its transparency record says HMT
    does not currently use it.
  - The OBR lists PolicyEngine among the organisations it engaged with in
    2025–26.
  - House of Commons Library research using PolicyEngine, cited in a House of
    Lords debate.
- **Think tanks and researchers using our work** (the logo row). The New
  Economics Foundation (July 2026) and the Centre for Policy Studies (July
  2023) have published work using PolicyEngine UK. NIESR combined
  PolicyEngine UK with NiGEM (Mosley and Cornforth 2023). The Good Growth
  Foundation and WPI Economics are shown without a public link.
- **Funding.** The Nuffield Foundation funds PolicyEngine UK through grants
  made in 2024 and 2026, for local-area data and constituency-level Budget
  analysis. The slide folds this into the nonprofit line.
- Media use is on the appendix slide.

### 4. PolicyEngine UK computes household incomes after taxes and benefits

- The model computes household incomes after taxes and benefits, poverty and
  the public finances.
- **The rules.** PolicyEngine UK codes taxes and benefits from legislation
  and guidance, and uprates them with OBR outturn and forecasts.
- **The households.** Microcosm UK 2024–25: the Family Resources Survey; copies
  of survey households whose adults take incomes from HMRC's Survey of
  Personal Incomes, with extra copies above £200,000; wealth and spending
  imputed from other surveys; and weights calibrated to official totals.
- **The results.** policyengine.py reports effects by programme, income
  decile, poverty, inequality and region, and the net cost to the Exchequer.
  Local-area results use a separate, experimental file.
- Spending is an input; income is the result. Each household's spending by
  category sets its VAT and duties and its exposure to a price change. What
  the model computes is income after taxes and benefits.
- Open source. Later slides cover how a run works, how the rules are written
  and how the data are built.
- The scenario studies (trade and AI) were run on earlier datasets (the
  survey-weighted or enhanced FRS), not Microcosm UK.

### 5. How a reform or a scenario is run

- Two simulations on the same households: a baseline and a counterfactual.
- **Certified dataset.** Microcosm UK 2024–25: people, benefit units and
  households, with weights.
- **Project to the year.** Each input grows by its own index (earnings,
  prices and others), from OBR outturn and forecasts.
- **Run twice.** Baseline and counterfactual on the same records. A reform
  changes parameters; a scenario changes inputs.
- **Take the difference.** Per household, then weighted: deciles, poverty,
  programmes, regions, local areas (experimental) and the government balance.
- **A reform** is a parameter path and a new value, from a date. The example
  on the slide is `gov.hmrc.income_tax.rates.uk[0].rate: 0.21`.
- **A scenario** is changed inputs, such as earnings by sector or spending by
  category. The rules stay as they are.
- **Mostly static by default.** Labour supply does not respond unless
  switched on. Two responses run by default: capital gains realisations
  (elasticity 1) and employer NI changes passed to pay.
- An optional response on hours of work uses the OBR's elasticities. A
  participation response is in the code but switched off.
- **Outside the model.** Firms' decisions, and how wages and prices adjust.
  There is no general equilibrium: those come from outside.
- A business scenario enters through earnings, prices or business taxes, from
  published estimates, another model or a stated scenario.

### 6. How the rules are encoded

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

### 7. Microcosm UK 2024–25: how the household file is built

- An open-source pipeline from licensed surveys and published statistics to a
  weighted file.
- **Survey spine (FRS 2024–25).** Households, benefit units and people, with
  incomes, housing and each main job's sector.
- **Tax-record incomes (HMRC SPI 2022–23).** The build adds 10,000 copies of
  FRS households whose adults take taxpayers' incomes drawn from the SPI
  public-use file.
  - Before calibration, the copies carry half the weight of households with
    nobody of pension age and a fifth of the weight of the others.
  - The extra records above £200,000 are a separate step: copies placed in
    four income bands, from £200,000, £500,000, £1 million and £2 million.
- **Wealth and spending (WAS, LCFS, ETB, NTS).** Wealth, spending by
  category, VAT, public services and travel, drawn from donor surveys.
- **Benefit take-up (DWP and HMRC).** People who report a benefit in the FRS
  always claim it. Only the others the rules find entitled are drawn, so that
  totals meet the published rates or caseloads.
- **Calibrated weights (official totals).** Household weights fitted to
  official totals by the calibration step.
- **Imputation.** Quantile regression forests, weighted and chained across
  variables. Draws sample the conditional distribution.
- **Sector and occupation.** From the survey's job record. For the copies,
  SIC division and occupation are imputed from their SPI incomes, not
  observed. No weight target is by industry. This matters here because both
  pilots assign changes by sector.
- **Reproducible.** Every survey microdata file is pinned by SHA-256 and
  checked when the build runs. Draws are seeded.
- **Stages.** The certified build ran at commit dc00d158f, which declares 54
  stages, each naming its survey and source. Today's code (429d7a0, 15
  November) declares 56; the slide's source link opens that version.
- Abbreviations. FRS: Family Resources Survey. SPI: Survey of Personal
  Incomes. WAS: Wealth and Assets Survey, round 8. LCFS: Living Costs and
  Food Survey 2024–25. ETB: Effects of Taxes and Benefits. NTS: National
  Travel Survey.
- The scenario studies in this deck were run on earlier datasets, not on
  Microcosm UK.

### 8. Calibration: weights fitted to official statistics

- The certified national build of 7 November 2026, from its public dashboard
  and its diagnostics.
- 1,514 targets. The dashboard browses them as 44 statistics; these are its
  display groups, not the families the loss uses.
- 98.7% of targets are within 10% of the official figure.
- An effective sample size of about 7.2k, 9.2% of the records: the weights
  are unequal.
- 78.2k household records. The build prunes nothing, so no record has a
  weight of zero.
- Every target is at model year 2025, though the file is called 2024–25.
- What the solver minimises (the equation on the slide):
  - *w* are the household weights (*w*⁰ at the start). *a_j* is a
    household's contribution to target *j*, from data and rules. *t_j* is the
    official figure.
  - The target weights *ω_j* sum to one. The loss has 38 target families;
    each carries 1/38 (about 2.6%) of the total weight, split evenly within
    it. A family with one target counts as much as the 360 regional SPI
    targets together.
  - Gradient descent (Adam) on log-weights: 1,500 steps, learning rate 0.02,
    seed 0. The saved weights are the best step's, step 1,437.
  - Each weight is capped at 10 times its start, enforced after every step.
    Total households are free to move with the targets.
- The slide does not show the solver's final objective. It depends on the
  family weights and the target set, so it is not comparable across
  releases.
- Targets by publisher:
  - HMRC, 776: incomes by band and region, capital gains, tax liabilities.
  - ONS, 365: population by age and region, employment by occupation.
  - DWP, 213: Universal Credit, State Pension and other benefit caseloads.
  - MHCLG, 82: council tax dwellings by band.
  - Others, 78: OBR receipts and spending, bus journeys, student loans.
- This is in-sample fit; the dashboard has no out-of-sample test for the UK.
- Effective sample size, the families, the saved step and the model year are
  from the certified build's diagnostics
  (`microcosm-uk-2024-25-national-20261107T020434Z-eeb6093e`). The solver
  settings in the code (429d7a0) match them.

### 9. The Economic Prosperity Deal: from macro impacts to households

- One deal has macro impacts and household impacts. This slide is the
  end-to-end path; the next three slides are its parts. Not built; no
  results yet.
- **Results for the deal (a trade or macro model).** Changes in output,
  employment and prices by sector, and wages by labour type, under the
  deal's tariff schedule, with the labour-market closure stated. A GTAP-style
  model has one wage per labour type, not per sector, and its standard
  closure fixes aggregate employment.
- **Concordance (agreed mapping, not built).** Model sectors to two-digit SIC
  divisions for earnings and jobs; to COICOP spending divisions for prices.
- **Assign to people, apply the rules (PolicyEngine).** Sector changes are
  assigned to survey employees and households, and taxes and benefits are
  recomputed for every household, before and after. Static microsimulation:
  there is no general equilibrium in PolicyEngine, so wages, prices and
  firms' responses come from the other model.
- **Household and fiscal results (PolicyEngine).** Income deciles, poverty,
  regions and the net Exchequer cost, which is the change in the model's
  government balance.
- **Optional feedback (not built).** Household and fiscal totals could go
  back to the macro model, and the two could repeat until they agree: the
  macro–micro loop on slide 12.
- **The deal.** Its general terms became operative on 8 May 2025. They
  provide for a quota of 100,000 UK vehicles at a 10% tariff and, subject to
  supply-chain conditions, a steel and aluminium quota at most-favoured-nation
  rates.
- The trade study's code includes a deal schedule, but we have no published
  results for it. The study's results are for the schedule before the deal
  (slide 11).

### 10. Disaggregation: how sector results reach people

- The mechanism inside the PolicyEngine step of the previous slide: which
  survey records receive each sector result. The mapping in the middle
  column is the concordance, which is not built.
- **Earnings and jobs by sector.** Mapped to two-digit SIC divisions.
  Earnings changes are assigned to the employees who work in that sector. A
  sector result does not say which employees lose a job, so who does is
  drawn at random, over repeated draws; studies report the mean and the
  standard deviation across draws (appendix, slide 25).
- **Wages by labour type.** A trade model's labour types would be mapped to
  occupation groups, and assigned to employees in those occupations.
  Occupation comes from the survey's job record. This mapping is part of the
  proposed interface (slide 13) and is not built.
- **Prices.** Mapped to COICOP spending divisions, and assigned to each
  household's spending in that category.
- Then the tax and benefit rules are recomputed for every household, before
  and after.
- Breakdowns PolicyEngine can already report:
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
- Today the trade study assigns earnings changes by two-digit SIC division. The
  survey's sample size limits sector detail.

### 11. The tariff bridge: steps a trade model could replace

- How the trade study turns the 2025 US tariffs into an earnings change for
  survey employees.
- **Tariff rates.** The full US schedule before the Economic Prosperity Deal.
- **US export intensity.** By two-digit SIC division.
- **Export-demand elasticity.** Assumed 1 (the OBR's March 2025 scenarios use
  0.4).
- **Earnings change by sector.** About £1.0bn a year (an output of these
  steps), all assumed to fall on employees' earnings.
- **Survey employees.** Assigned to FRS employees who work in that sector.
- The three middle steps are the ones a trade model's sector results could
  replace.
- The finding: the tax and benefit system cushions part of the earnings
  loss. When earnings fall, households pay less tax and NI, receive more in
  benefits and pay lower pension contributions, so net income falls by less
  than earnings. These absorb 43.7% of the loss when it comes as wage cuts
  across workers and 35.4% when it comes as job losses (standard deviation
  5.1 points across 100 draws). This is the Dolls, Fuest and Peichl
  stabilisation coefficient.
- Results are for the tariff schedule before the US–UK Economic Prosperity
  Deal, on the survey-weighted FRS 2024–25.
- The deal's general terms (operative 8 May 2025) provide for a quota of
  100,000 UK vehicles at a 10% tariff and, subject to supply-chain
  conditions, a steel and aluminium quota at most-favoured-nation rates.
- The study's code includes a deal schedule, but we have no published results
  for it.

### 12. Links to macroeconomic models

- **A forecast scenario (mechanism in the model).** PolicyEngine UK projects
  its data forward with OBR growth rates for earnings, prices and other
  series. A scenario from a global macroeconomic forecasting model such as
  NiGEM could replace those paths. We have not run such a scenario.
  Employment is not one of the series: job changes enter as changed inputs,
  assigned to workers.
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

### 13. One way to link: tables in, tables out

- A starting point for discussion, not a commitment.
- **Runs today.** The trade study's code already takes earnings changes by
  two-digit SIC division and applies them to survey employees. The outputs
  on the right are existing policyengine.py outputs.
- What another model could pass (a proposal, not built):
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
- PolicyEngine can already report (existing outputs):
  - By income decile: net income change; shares gaining and losing.
  - Poverty and inequality: poverty rates, Gini and income shares.
  - By programme: main taxes and benefits; government balance.
  - By place: ITL1 regions; local areas (experimental file).
- Possible additions (a proposal, not built):
  - Across draws: mean and SD across draws, which are in the studies' code,
    not yet in policyengine.py.
  - Format: CSV tables per scenario and year.
- If the trade model holds total employment fixed, its sector results are
  wage changes and moves between sectors, not job losses; PolicyEngine would
  then apply wage changes only.
- No reader for such a table exists.
- Cells of sector by region have few survey records, so they carry sampling
  error.

### 14. Business policy: from firm costs to households

- Example: the British Industrial Competitiveness Scheme, which exempts
  eligible manufacturers in Great Britain from three electricity policy
  costs. Not built; no results.
- **Cost change by sector (scheme design).** Relief from three electricity
  policy costs for eligible manufacturers: the impact assessment estimates
  £35 to £40 per MWh, from 2027.
- **How firms use it (outside PolicyEngine).** Lower prices, higher pay or
  more jobs, investment, or higher profits. This step comes from another
  model, or an assumption.
- **Allocate to households (PolicyEngine).** Three channels: prices by
  spending, pay and jobs by sector of employment, profits by shareholding.
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

### 15. What we have on the business side

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
  entity, and the firm and household populations are not linked. Microcosm's
  data frame supports firm tables and person–firm job links, but the UK build
  does not use them; that support is experimental, not production.

### 16. Where an agent-based model could link

- Three candidate questions, each naming the behaviour the agent-based model
  would simulate. None of these links is built.
- **A supply disruption to one product, for example semiconductors.** The
  agent-based model simulates firms along the product's supply chain losing
  inputs, switching suppliers, and cutting output and jobs. It passes in job
  and earnings losses by sector and region.
- **Electricity-cost relief for manufacturers (BICS).** It simulates firms
  that differ in electricity use and market power choosing between prices,
  pay, jobs, investment and profit. It passes in changes in prices, earnings
  and profits by sector.
- **AI adoption over the business cycle.** It simulates firms adopting
  technology, entering and exiting, with jobs and wages adjusting, as in
  Dosi, Fagiolo and Roventini (2010). It passes in paths of jobs, wages and
  profits by sector, in place of the AI study's assumed scenario.
- **PolicyEngine can report (the same for all three).** Household incomes by
  decile and region (local areas experimental), poverty, inequality, benefit
  claims, and tax and benefit receipts, by year.
- Trade flows and the response to tariffs stay in a trade model such as GTAP.
  PolicyEngine models no firm behaviour: it adds the tax and benefit rules
  and the households.
- Dosi et al. model technological change and cycles, not AI; a CGE run with
  technology sectors split out could also supply an AI scenario.
- Youngman et al.'s agent-based model cites our approach to under-sampled
  wealthy households; it uses neither our model nor our data.

### 17. Two candidate pilots

- For discussion: one scenario each, passed one way from another model to
  PolicyEngine. We have no published results for either. Nothing here is a
  commitment; each row says what a party could provide.
- **The Economic Prosperity Deal.**
  - A trade model could provide: changes in output, employment and prices by sector
    and wages by labour type under the deal's tariff schedule, with the
    labour-market closure stated.
  - PolicyEngine could provide: the sector concordance; household incomes by decile
    and region, and experimentally by local area; poverty; net Exchequer
    cost.
  - A starting point: the trade study's tariff bridge, with the trade model's
    results in place of its assumed elasticity.
- **The British Industrial Competitiveness Scheme.**
  - The Modelling Unit could provide: the electricity-cost change by sector, and how
    firms split it between prices, pay and profits, from a model or as
    scenarios.
  - PolicyEngine could provide: allocation to households by spending, sector of
    employment and shareholding; household and fiscal effects.
  - A starting point: the model's allocation of business-tax changes, extended
    to a non-tax cost change.
- PolicyEngine could run the microsimulation, as the survey data are licensed
  through the UK Data Service. Neither link is built.
- Scenarios are for BIST to choose.
- Later, if a pilot shows it is worth building: a two-way loop with a
  macroeconomic model, OG-UK, and a link between firm and household data.

### 18. Questions for discussion

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

### 19. Thank you

- Contacts are on the slide: vahid@policyengine.org, policyengine.org/uk,
  github.com/PolicyEngine and linkedin.com/company/thepolicyengine.

## Appendix (slides 20 to 27, shown only if asked)

### 20. Appendix

- Seven slides: what the UK model covers; Microcosm UK data: release gates,
  certification and firm support; who bears the cost of trade changes; who bears the cost of the AI scenario; assignment
  variability; open code, restricted microdata and synthetic data; use,
  evaluation and engagement.

### 21. What the UK model covers

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

### 22. Microcosm UK data: release gates, certification and firm support

- What is checked before a release, what a certified bundle fixes, and what
  exists for firms.
- **Release gates (in the pipeline).** 94 declared checks across four phases
  of the build; the certified build passed all 85 that apply to it.
  - 92 can block a release; 2 only report.
  - The national build ran 85, and all passed. The other 9 are seven
    local-area checks and the two that only report.
  - A release is refused if, for example, a target misses by more than 25%
    without a recorded review, the weights' effective sample size falls
    below its floor, or an imputed value leaves the donor survey's range.
  - The count of 94 is from the code at commit 429d7a0; the 85 is from the
    certified build's diagnostics
    (`microcosm-uk-2024-25-national-20261107T020434Z-eeb6093e`).
- **What "certified" means (policyengine.py 6.19.0).** The bundle pins the
  data file by SHA-256 at an immutable revision, with the model version it
  was built with (policyengine-uk 2.174.1) and the core engine. Installing
  the bundle checks the hash. The pair is certified when the package's tests
  pass on it. A cited bundle version identifies rules, data and engine
  together.
- **Firm support (experimental).** In the code: the data frame supports firm
  tables and person–firm job links, and the UK build does not use them; a
  generator of
  synthetic firms ported from the firm VAT paper; eight declared targets (ONS
  enterprise counts, HMRC VAT traders and liabilities). Not production:
  operators that use the links, firm calibration and firm releases. No stage
  of the UK build makes firms. The household file contains no firms.

### 23. Who bears the cost of trade changes?

- Four UK trade events of 2021–26, traced to households:
  - the part of the food price rise that Bakker et al. (2023) attribute to
    post-Brexit trade barriers;
  - the 2022 energy price surge;
  - projected duty reductions from the UK–India agreement;
  - the 2025 US tariffs.
- The price changes come from published estimates; the tariff earnings
  change is built from an assumed elasticity (the tariff bridge).
- The food and energy price rises were largest, as a share of spending, for
  lower-income deciles.
- About 60% was offset by the Energy Price Guarantee and the Energy Bills
  Support Scheme, as a share of the 2022–23 rise in energy costs that would
  have occurred without them (49–64% across variants).
- The study models no policy aimed at the food price rise; general
  cost-of-living payments cushioned it.
- Price episodes use the enhanced FRS 2023–24; the tariff stage the
  survey-weighted FRS 2024–25. Neither is Microcosm UK.

### 24. Who bears the cost of the AI scenario?

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

### 25. Assignment variability: repeated random draws

- A sector-level scenario gives totals by sector; which survey employees are
  affected is drawn at random.
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

### 26. Open code, restricted microdata, synthetic data

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
- Models can be linked by exchanging tables by sector, decile or region.
  No microdata needs to change hands.
- The synthetic firms do not recover administrative microdata or firm
  behaviour, and are not linked to households. Microcosm's data frame
  supports firm tables and person–firm job links, but the UK build does not
  use them.

### 27. Use, evaluation and engagement

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
