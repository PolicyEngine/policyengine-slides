# Presenter notes: From business shocks to household incomes

Notes for the seminar with the BIST Modelling Unit on 19 November 2026. The
slides carry one message each, with icons, short labels and status tags. These
notes carry the sentences, caveats and figures that the presenter says aloud.
Every figure here is one the deck already cites; the sources are in
[README.md](README.md) and in the comments of `content.ts`.

Status tags used on the slides: **Idea to explore**, **Not yet modelled**,
**Experimental**, **Proposal**, **Built, not yet run**, **Working
paper**, **Illustrative scenario**, **Early prototype**, **In-sample fit**,
**Targets at model year 2025**, **Mostly static by default**, **Runs today**,
**Live**, **Open**, **Restricted**, **Microcosm UK, 2027–28**,
**Microcosm UK**, **Can take today**, **Needs a sector mapping**, **Small
extension** and **Not built yet**. On the two Axiom Foundation slides (14 and
15): **Encoded**, **Partly encoded**, **Encoded, checks paused**,
**Incomplete, most checks paused**, **As of 16 November
2026**, **Open source**, **Trial access**, **Developer preview** and **On
axiom.org**.

The talk has six parts, after the Modelling Unit introduces its own work
and models. Parts 2 to 6 each open with a divider slide: the part's number
and title, one line on what it covers, and the six parts with the current
one in teal. On every other slide the six parts run along the top by short
name, with the current one in teal and those already covered in grey.

1. **Introduction** (slides 1 to 3): the title, the talk in brief and who we
   are.
2. **What PolicyEngine is** (divider 4, slides 5 to 11): what the model computes and how
   a run works, how far its results break down, the rules, the Microcosm data, calibration, the targets by
   topic and the live calibration dashboard.
3. **What we have already** (divider 12, slides 13 to 16): what the UK model covers, on
   the household and the business side, and what we can share; then the Axiom
   Foundation's rules as code for firms and employers, what exists today,
   how a model could call it, and its site live.
4. **Projects we have done** (divider 17, slides 18 to 23): the Autumn Budget 2026
   dashboard, the AI scenario post, the synthetic firms of the firm-level
   VAT working paper and what that model can cost, the trade working paper
   and its tariff episode.
5. **What could be explored** (divider 24, slides 25 to 29): one way
   to link models, by exchanging tables; the Economic Prosperity Deal as a
   trade application; business policy (BICS) as a business application;
   where an agent-based model could link; and links to macroeconomic models.
6. **Possible next steps** (divider 30, slides 31 to 33): if there is
   interest, two possible starting points, then questions and contacts. The
   part assumes no collaboration: it asks whether there is appetite.

This version has 33 slides: 28 slides of content and five part dividers
(slides 4, 12, 17, 24 and 30). Slide 21, on what the firm model can cost,
adds about a minute; skip it if time is short. The core 22, down from 27, fit about 30
minutes, and the dividers add about a minute in all (a few seconds each); slides 14 to 16, on the Axiom Foundation's rules as code and its live site, add
about three more, so skip them in the talk if time is short; the table of
calibration targets (slide 10) adds about one. Five slides were
merged into their neighbours or cut;
what each carried is in the notes for the slide that replaced it (slides 5,
9, 13, 20 and 25).

Slides marked "Builds" reveal their content in steps: each click or
right-arrow adds the next piece, and nothing already on the slide moves. Most
slides have no boxes: lists and columns sit under thin rules, flows are
nodes on a line (a dashed ring marks a step outside PolicyEngine or not yet
built), and tables have horizontal rules only. Four places where items are read
side by side use one light card (white, a thin border, no tint): the Axiom
Foundation's six rules (14), the calibration-accuracy column (20), the
macroeconomic routes (29) and the two possible starting points (31). A PDF
export shows each slide once, complete: one page per slide. Slides 11, 16, 18 and 19 hold live pages and need
an internet connection. Icons are bare, in the teal ink, with no box behind
them. The slides carry no "Sources" row: each slide's sources are the
"Sources" bullet at the end of its notes below, as links. The deck has no
appendix: what the former appendix slides carried is
under "Backup material" at the end of these notes. The live counter numbers
slides, not build steps.

## Talk (slides 1 to 33)

### 1. Title

- Tax–benefit microsimulation alongside trade, macroeconomic and agent-based
  models.
- The audience line reads "Modelling Unit, Department for Business,
  Innovation, Science and Trade".
- Speakers: Vahid Ahmadi (Research Associate) and Max Ghenis (CEO).

### 2. In brief

- The talk has six parts. The slide lists parts 2 to 6 as a numbered
  agenda; part 1 is this introduction. Each later part opens with a divider
  slide, and the six parts run along the top of every slide, with the
  current one in teal.
- **1. Introduction.** Who we are.
- **2. What PolicyEngine is.** PolicyEngine UK computes household incomes
  after taxes and benefits, poverty and the public finances. Household
  spending is an input, not a result. How a run works, how the rules are
  written, how the Microcosm data are built and what the weights are fitted
  to. How far results break down, by income, people, programme and place.
  (On the slide: "How a run works, how far results break down, the rules,
  the household data and its calibration.")
- **3. What we have already.** The taxes and benefits the UK model covers,
  how business taxes reach households, and what we can share. PolicyEngine UK has
  no firm entity. Then the Axiom Foundation's rules for firms and employers,
  and how a model could call them. (On the slide: "What the UK model covers,
  what we can share, and the Axiom Foundation's rules for firms.")
- **4. Projects we have done.** The Autumn Budget 2026 dashboard, the AI
  scenario post, the synthetic firms of the firm-level VAT working paper and
  their VAT costings, the trade working paper and its tariff episode.
- **5. What could be explored.** Trade, macroeconomic and agent-based
  models give changes in earnings, jobs and prices by sector. PolicyEngine
  can turn these into household and fiscal effects by income decile and
  region, and experimentally by local area. No such link is built: our trade
  and AI studies use published estimates and stated scenarios. The part
  starts with one way to link models, by exchanging tables, then applies it
  to the UK–US Economic Prosperity Deal and to the electricity-cost relief of
  the British Industrial Competitiveness Scheme (BICS), then asks where an
  agent-based model could link and how macroeconomic models could.
- **6. Possible next steps.** If there is interest, two possible starting
  points (slide 31): tariff changes under the Economic Prosperity Deal, and
  BICS. We have no published results for either. Then questions for
  discussion, starting with whether there is appetite to explore a link at
  all, and on which question.

### 3. Who we are

- **Nonprofit.** PolicyEngine is a nonprofit building free, open-source tools
  that help people understand tax and benefit policies (the wording of
  policyengine.org/uk/donate).
- **Open source.** The rules (PolicyEngine UK), the data pipeline (Microcosm)
  and the analysis package (policyengine.py) are public. PolicyEngine UK and
  policyengine.py are licensed AGPL-3.0, Microcosm MIT. The household
  microdata are licensed survey records and are not public (slide 13).
- **UK and US models.** One Python package, policyengine.py, runs both
  country models with the same reform and output interface (Ahmadi et al.
  2026, JOSS). This talk is about the UK model.
- **Used or cited in government** (the logo row). 10 Downing Street's data
  science team built 10ds-microsim on PolicyEngine (the slide says "a
  microsimulation tool"). The slide says only that HM Treasury,
  the OBR and Parliament (shown by the House of Lords logo) mention
  PolicyEngine on the public record. The detail, which is also under "Backup
  material" below:
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
- Media use is under "Backup material" below.
- Layout: the three facts run across the top; "Used or cited in government" and "Think
  tanks and researchers using our work" are two rows of equal cells, one
  organisation each, with a caption under every mark. HM Treasury is set as
  a plain wordmark, as we hold no logo file.
- **Sources.** [About PolicyEngine](https://www.policyengine.org/uk/donate);
  [Ahmadi et al. (2026), JOSS](https://doi.org/10.21105/joss.11115);
  [PolicyEngine supporters](https://www.policyengine.org/uk/supporters);
  [PolicyEngine at No
  10](https://www.policyengine.org/uk/research/policyengine-10-downing-street);
  [HM Treasury ATRS
  record](https://www.gov.uk/algorithmic-transparency-records/hmt-modelling-policy-engine);
  [OBR annual report
  2025-26](https://assets.publishing.service.gov.uk/media/6a3cfb3c33bc5beefd3c49d2/E03598728_OBR_ARA_25-26_Accessible.pdf);
  [Hansard, 24 February
  2026](https://hansard.parliament.uk/Lords/2026-02-24/debates/A381F7D6-0A3C-48FD-8D9E-67751E25877A/NationalInsuranceContributions(EmployerPensionsContributions)Bill);
  [New Economics Foundation, July
  2026](https://neweconomics.org/2026/07/insecure-low-quality-work-a-major-driver-of-uks-neets-and-inactivity-crisis);
  [Centre for Policy Studies, July
  2023](https://cps.org.uk/research/family-friendly-taxation/); [Mosley and
  Cornforth
  (2023)](https://www.lse.ac.uk/CFM/assets/pdf/CFM-Discussion-Papers-2023/CFMDP2023-16-Paper.pdf).

### 4. Part 2: What PolicyEngine is (divider)

- A few seconds. Name the part and what it covers: how a run works, the rules, the household data and its calibration (slides 5 to 11).

### 5. PolicyEngine UK computes household incomes after taxes and benefits

- One slide for what the model is and how a run works: four steps, the
  rules, the households, run twice, the difference. It merges two earlier
  slides ("PolicyEngine UK computes household incomes after taxes and
  benefits" and "How a reform or a scenario is run"); what they carried is
  below.
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
  Local-area results use a separate, experimental file. The next slide (6)
  shows how far these break down.
- Spending is an input; income is the result. Each household's spending by
  category sets its VAT and duties and its exposure to a price change. What
  the model computes is income after taxes and benefits.
- The AI study (slide 19) and the trade study's rerun (slides 22 and 23;
  an open pull request) both run on Microcosm UK.
- Open source. Later slides cover how the rules are written and how the data
  are built.
- **How a run works** (steps 3 and 4 on the slide; the earlier slide's four
  steps were certified dataset, project to the year, run twice and take the
  difference). Two simulations on the same households: a baseline and a
  counterfactual.
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
- Builds: one step at a time: the rules, the households, run twice, the
  difference.
- **Sources.** [PolicyEngine UK
  code](https://github.com/PolicyEngine/policyengine-uk); [Microcosm data
  pipeline](https://github.com/PolicyEngine/microcosm);
  [policyengine.py](https://github.com/PolicyEngine/policyengine.py); [Growth
  parameters](https://github.com/PolicyEngine/policyengine-uk/blob/d3db7ac07d3cc718400f38ba8ede429d38d6855e/policyengine_uk/parameters/gov/economic_assumptions/yoy_growth.yaml);
  [Labour supply
  responses](https://github.com/PolicyEngine/policyengine-uk/blob/d3db7ac07d3cc718400f38ba8ede429d38d6855e/policyengine_uk/dynamics/labour_supply.py);
  [policyengine.py impact
  analysis](https://github.com/PolicyEngine/policyengine.py/blob/810a59e5c927fc482ee4c9b0093bf6f1fdbbf6a0/docs/impact-analysis.md);
  [Ahmadi et al. (2026), JOSS](https://doi.org/10.21105/joss.11115).

### 6. How far results break down

- How far a run's results can be broken down: by income, by people, by
  programme and by place, from the UK down to constituencies and local
  authorities. Every item is an existing output of policyengine.py
  (810a59e) or a variable of the model (policyengine-uk d3db7ac); the one
  item that needs custom analysis is tagged so. Tagged "policyengine.py
  outputs".
- Why here, in part 2 and not before the linking slides: this is what the
  model does today, and part 5 is tagged "Idea to explore". The linking
  slide (25) then points back to it for "what PolicyEngine already
  reports".
- **By income.** Income deciles and wealth deciles, with the average change
  in each. By default the income deciles rank households by household net
  income, weighted by the number of people; the model also holds deciles of
  equivalised HBAI income, before and after housing costs, which can be
  used as the grouping instead. Within each decile, the shares that gain or
  lose, in five bands: lose more than 5%, lose less than 5%, no change
  (within 0.1%), gain less than 5%, gain more than 5%. Inequality on
  equivalised HBAI income: the Gini coefficient, the top 10% and top 1%
  income shares and the bottom 50% share.
- **By people.** Poverty, absolute and relative, before and after housing
  costs (four measures). Each by age group (under 18, 18 to 64, 65 and
  over) and by sex. Household type, tenure and number of children are
  variables in the model (tenure has five types, from social renting to
  owned outright), but no standard output breaks results down by them: that
  is custom analysis, for example with an output's filter on a variable.
  The model's family-type variable is deprecated.
- **By programme.** Fourteen rows: income tax, National Insurance, VAT,
  council tax, fuel duty and employer NI; Universal Credit, Child Benefit,
  Pension Credit, Income Support, tax credits (and their two parts) and the
  State Pension. The net cost to the Exchequer is the change in the
  model's government balance, as on slide 5.
- **By place.** The UK and its twelve ITL1 regions and nations (the nine
  English regions, Wales, Scotland and Northern Ireland), from the national
  file. The 650 parliamentary constituencies (2024 boundaries) and 361
  local authorities come from a separate local-area file, which is
  experimental: the slide says so.
- **Thin cells.** Area results go through disclosure control that follows
  the UK Data Service licence: at least 10 distinct survey households
  behind each published number, with bootstrap intervals (90% by default)
  and rounding that depends on precision. The older constituency and
  local-authority outputs, which had no such control, are deprecated.
  Cells such as sector by region rest on fewer records still (slide 25).
- Geography matters in government: the same run can report the national
  result, each region and nation, and, experimentally, each constituency or
  local authority.
- **Sources.** [policyengine.py output
  classes](https://github.com/PolicyEngine/policyengine.py/tree/810a59e5c927fc482ee4c9b0093bf6f1fdbbf6a0/src/policyengine/outputs);
  [Disclosure control for area
  results](https://github.com/PolicyEngine/policyengine.py/blob/810a59e5c927fc482ee4c9b0093bf6f1fdbbf6a0/src/policyengine/disclosure/__init__.py);
  [PolicyEngine UK code](https://github.com/PolicyEngine/policyengine-uk).

### 7. How the rules are encoded

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
- **Sources.** [Personal allowance
  parameter](https://github.com/PolicyEngine/policyengine-uk/blob/d3db7ac07d3cc718400f38ba8ede429d38d6855e/policyengine_uk/parameters/gov/hmrc/income_tax/allowances/personal_allowance/amount.yaml);
  [Personal allowance
  variable](https://github.com/PolicyEngine/policyengine-uk/blob/d3db7ac07d3cc718400f38ba8ede429d38d6855e/policyengine_uk/variables/gov/hmrc/income_tax/allowances/personal_allowance.py);
  [Allowance
  tests](https://github.com/PolicyEngine/policyengine-uk/blob/d3db7ac07d3cc718400f38ba8ede429d38d6855e/policyengine_uk/tests/policy/baseline/gov/hmrc/income_tax/allowances.yaml).

### 8. Microcosm UK 2024–25: how the household file is built

- An open-source pipeline from licensed surveys and published statistics to a
  weighted file.
- **Survey base (FRS 2024–25).** Households, benefit units and people, with
  incomes, housing and each main job's sector.
- **Tax-record incomes (HMRC SPI 2022–23).** The build adds 10,000 copies of
  FRS households whose adults take taxpayers' incomes drawn from the SPI
  public-use file.
  - Before calibration, the copies carry half the weight of households with
    nobody of pension age and a fifth of the weight of the others.
  - The extra records above £200,000 are a separate step: copies placed in
    four income bands, from £200,000, £500,000, £1 million and £2 million.
- **Wealth and spending (donor surveys: WAS, LCFS, ETB, NTS).** Wealth, spending by
  category, VAT, public services and travel, drawn from donor surveys.
- **Benefit take-up (DWP and HMRC).** People who report a benefit in the FRS
  always claim it. Only the others the rules find entitled are drawn, so that
  totals meet the published rates or caseloads.
- **Calibrated weights (official totals).** Household weights fitted to
  1,514 official figures by the calibration step (slides 9 and 10).
- **The result.** Microcosm UK 2024–25, the certified household file.
- **Imputation.** Quantile regression forests, weighted and chained across
  variables. Draws sample the conditional distribution.
- **Sector and occupation, for questions.** No target is by industry, and
  the sectors of the SPI copies are imputed. Sector and occupation come from
  the survey's job record; for the copies, occupation is imputed from their
  SPI incomes and the SIC division is then taken from an FRS adult with that
  occupation. This matters here because both possible starting points
  assign changes by sector. (Earlier versions carried this as a tag beside the subtitle.)
- **Reproducible.** Every survey microdata file is pinned by SHA-256 and
  checked when the build runs. Draws are seeded.
- **Stages.** The certified build ran at commit dc00d158f, which declares 54
  stages, each naming its survey and source. Today's code (429d7a0, 15
  November) declares 56; the slide's source link opens that version.
- Abbreviations. FRS: Family Resources Survey. SPI: Survey of Personal
  Incomes. WAS: Wealth and Assets Survey, round 8. LCFS: Living Costs and
  Food Survey 2024–25. ETB: Effects of Taxes and Benefits. NTS: National
  Travel Survey.
- Layout: one row, left to right: the five numbered steps as nodes on a
  line, then the result, the certified household file Microcosm UK
  2024–25, as a filled node, with arrows between them.
- Builds: one step at a time, each with the arrow that leads to it; the
  result appears with step 5.
- **Sources.** [Microcosm UK source
  stages](https://github.com/PolicyEngine/microcosm/blob/429d7a0de624332d3fc8a221d72bd8cb9f7211fe/packages/microcosm-build/src/microcosm/build/uk/source_stages.json);
  [Imputation
  method](https://github.com/PolicyEngine/microcosm/blob/429d7a0de624332d3fc8a221d72bd8cb9f7211fe/packages/microcosm-fit/README.md);
  [Microcosm data pipeline](https://github.com/PolicyEngine/microcosm).

### 9. Calibration: weights fitted to official statistics

- The certified national build of 7 November 2026, from its public dashboard
  and its diagnostics. The dashboard link is pinned to that build, so it
  keeps showing it when a newer release becomes the dashboard's default.
- Builds: first what goes in (the 1,514 targets and the 78.2k household
  records) beside the loss; then how the fitted weights do (98.7% within
  10%).
- 1,514 targets. The slide says "grouped into 44 statistics": the dashboard
  browses them that way; these are its display groups, not the families the
  loss uses. What they are is the next slide.
- 98.7% of targets are within 10% of the official figure.
- 78.2k household records, including the copies with tax-record incomes. The
  build prunes nothing, so no record has a weight of zero.
- For questions: about 7.2k effective sample size (9.2% of records); a rough
  guide for averages that varies by statistic. The weights are unequal.
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
- This is in-sample fit; the dashboard has no out-of-sample test for the UK.
- Effective sample size, the families, the saved step and the model year are
  from the certified build's diagnostics
  (`microcosm-uk-2024-25-national-20261107T020434Z-eeb6093e`). The solver
  settings in the code (429d7a0) match them.
- Taken off this slide in this version: the effective sample size tile (in
  the bullet above) and the bar of targets by publisher, which the next
  slide replaces with a table.
- Three groupings of the same targets exist, and are not the same
  thing: the dashboard's browsing view shows 44 statistics; the solver's
  loss has 38 families, each with 1/38 of the weight; the dashboard's fit
  table has 41 publisher-and-statistic groups, which the next slide groups
  into 14 rows.
- **Sources.** [Calibration dashboard, pinned to the 7 November
  build](https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk&release=microcosm-uk-2024-25-national/uk-frs-calibration-attempt-20261107T020434Z-eeb6093e);
  [Calibration
  method](https://github.com/PolicyEngine/microcosm/blob/429d7a0de624332d3fc8a221d72bd8cb9f7211fe/packages/microcosm-calibrate/README.md);
  [UK national solve
  settings](https://github.com/PolicyEngine/microcosm/blob/429d7a0de624332d3fc8a221d72bd8cb9f7211fe/packages/microcosm-build/src/microcosm/build/uk_runtime/national_doctrine.py).

### 10. What the weights are fitted to: 1,514 official figures

- Every target of the certified build, one row per topic: where it binds,
  who publishes it, how many targets there are and the share the fitted
  weights reproduce within 10% of the official figure.
- "Where it binds": "nations" are Wales, Scotland and Northern Ireland
  (and England where it has its own target); "English regions" are
  England's nine regions. Most DWP figures are for Great Britain.
- By publisher (the rows group statistics within one publisher):
  - **HMRC, 776 (761 within 10%).** Incomes by band from the Survey of
    Personal Incomes 568 (553; 360 of them are regional or for a nation);
    capital gains tax 105 and income tax liabilities 84; and 19 UK totals:
    Child Benefit 5, benefits in kind 5, salary sacrifice 7 and Tax-Free
    Childcare 2.
  - **ONS, 365 (365).** Population 179 (by age and sex); employment 159 (by
    occupation); household composition 22; land values 3 and household
    spending 2 (consumer trends).
  - **DWP, 213 (210).** Universal Credit 103 (100); State Pension 57 and
    Pension Credit 13; the two-child limit 15, the benefit cap 14, legacy
    benefits 8, Attendance Allowance 2 and workplace pensions 1.
  - **MHCLG, 82 (82).** Council tax dwelling stock by band, for England and
    its regions.
  - **Ten other publishers, 78 (77).** OBR 16 (expenditure 12, receipts 4);
    Student Loans Company 12 (11), Department for Education 8 (funded
    childcare) and the Independent Schools Council 1; council tax stock in
    Wales (Welsh Government, 10) and Scotland (Scottish Government, 9);
    buses and public transport 18 (Department for Transport 13, Scottish
    Government 2, Welsh Government 1, Northern Ireland's Department for
    Infrastructure 1 and Transport Holding Company 1); Northern Ireland
    pensions 3 (Department for Communities) and Scottish Child Payment 1
    (Scottish Government).
- The ONS "household composition" group (22) includes three household counts
  published by NRS, NISRA and the Welsh Government.
- 1,495 of the 1,514 are within 10%: the 98.7% on the previous slide. The
  misses are 15 SPI targets, 3 Universal Credit targets and 1 student
  support target.
- No target is by industry (slide 8).
- **Sources.** [Calibration dashboard, pinned to the 7 November
  build](https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk&release=microcosm-uk-2024-25-national/uk-frs-calibration-attempt-20261107T020434Z-eeb6093e)
  (its data for that release, read on 17 November 2026).

### 11. What the weights are fitted to: the live calibration dashboard

- What the weights are fitted to, target by target. Scroll to the
  dashboard's calibration map: the same publishers and counts as the table
  on the previous slide, with each statistic's fit.
- The public calibration dashboard is live in the slide, pinned to the
  certified build of 7 November 2026, so it keeps showing that build after
  newer releases become the dashboard's default.
- Use it to answer a question about a target: each one's official figure,
  the fitted value and the error can be browsed by publisher and statistic.
- "Expand" stretches it over the whole screen; "New tab" opens it in the
  browser. Click the slide outside the frame before moving on.
- The page is shown at 80% of its size so more of it fits.
- At the top of the page the dashboard shows its header and overview; the
  map of targets by publisher and statistic is further down, so it needs a
  scroll when presenting.
- In a PDF export this slide shows a short card in place of the live page:
  what the page offers (every target, by publisher and statistic, pinned to
  the certified build) and its address. The table on the previous slide
  carries the numbers. The dashboard has a page that lists every target
  (`/microcosm/targets`), but it opens on a table, not the map, so the slide
  keeps the overview page.
- The dashboard page names the Hugging Face dataset repository that holds
  the build and links to it; that repository is private, so the link does
  not open for the audience.
- The fit shown is in-sample (slide 9).
- Needs an internet connection.
- **Sources.** [Calibration dashboard, pinned to the 7 November
  build](https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk&release=microcosm-uk-2024-25-national/uk-frs-calibration-attempt-20261107T020434Z-eeb6093e).

### 12. Part 3: What we have already (divider)

- A few seconds. Name the part and what it covers: what the UK model covers and what we can share, then the Axiom Foundation's rules for firms and its site, live (slides 13 to 16).

### 13. What the UK model covers, and what we can share

- The row under the four columns is the short form of "Open code, restricted
  microdata, synthetic data" under "Backup material" below.
- Including how the model allocates business taxes to households.
- **Taxes on income.** Income tax, with Scottish rates; employee, employer
  and self-employed NI; capital gains tax.
- **Taxes on spending (and property).** VAT; fuel, alcohol and tobacco duties;
  stamp duty and council tax.
- **Taxes on business.** Employer NI, with rate and threshold changes passed
  to employees' pay by default. Business rates and corporate stamp duty, as
  published totals allocated to shareholders. Corporation tax is not
  modelled, and the model has no firm entity (the "Outside the model" line
  in the column).
- **Benefits and other.** Universal Credit and legacy benefits; Child
  Benefit, Pension Credit, the State Pension; disability and Scottish
  benefits, childcare support.
- Business-tax changes estimated elsewhere can be allocated to households
  through shareholdings or consumption.
- **What is open** (the row under the columns). Code: the rules, the data
  pipeline and the analysis are open source. Household microdata: licensed
  survey records, so we share results as tables. Synthetic firms: for VAT
  costing, drawn from published tables, so they can be shared (a working
  paper).
- Taken off the deck in this version: the slide "What we have on the
  business side". Two of its three cards repeated the "Taxes on business"
  column above, and the third is the "Synthetic firms" item of the row under
  the columns and the project slide (slide 20). What it carried:
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
- **Business taxes reach households (in the model).** Business rates and
  corporate stamp duty enter as published totals allocated to shareholders.
  An employer NI change is split between pay, prices and profits; by
  default all of it goes to pay. A business-tax estimate made elsewhere can
  be allocated to households by spending or by shareholding.
- Taken off an earlier version, to keep to what exists today: **linking
  firms to households.** PolicyEngine UK has no firm entity, and
  the firm and household populations are not linked. Microcosm's data frame
  supports firm tables and person–firm job links, but the UK build does not
  use them; that support is experimental, not production. A link between
  firm and household data could be explored later (slide 31).
- The firm-level VAT microsimulation has its own slide (slide 20).
- **Sources.** [PolicyEngine UK
  code](https://github.com/PolicyEngine/policyengine-uk);
  [policyengine.py](https://github.com/PolicyEngine/policyengine.py);
  [Microcosm data pipeline](https://github.com/PolicyEngine/microcosm);
  [Ahmadi (2026c), firm VAT
  microsimulation](https://github.com/PolicyEngine/firm-microsim-paper);
  [Young worker NI
  exemption](https://www.policyengine.org/uk/young-worker-nics); [Recently
  inactive employees NI
  exemption](https://www.policyengine.org/uk/nics-exemption-inactive-employees).

### 14. Rules as code for firms and employers, from the Axiom Foundation

- PolicyEngine UK has no firm entity (slide 13). The Axiom Foundation
  publishes open, machine-readable encodings of the world's rules, starting
  with tax and benefit policy. Its rules can apply to a firm or an employer,
  not only to a household.
- **The relationship** (say it aloud; it is not on the slide).
  Max Ghenis is CEO of both the Axiom Foundation and PolicyEngine, which he
  co-founded. PolicyEngine asks what a policy would do to households and the
  public finances; the Axiom Foundation publishes what the law says, as
  code, with a citation.
- **The status tags.** We tag a rule **Encoded** where a module for it sits
  on the main branch of the Axiom Foundation's rules repository; CI runs the
  module's companion tests before a merge. **Partly encoded** marks a module
  that leaves out parts of the rule, named below. A public waiver can pause
  a module's checks, as one does for the small-company test (**Encoded,
  checks paused**). The Axiom Foundation's own page calls its US tariff
  schedule incomplete.
- **The law on each item.** Each rule names the provision it encodes, and
  most quote its words. For example, the VAT net-liability rule quotes
  section 25 of the VAT Act 1994: "deduct that amount from any output tax
  that is due from him". Each section has a page on axiom.org with the legal
  text beside its rules. Each UK module on this slide has its own test file.
  The encodings are under CC BY 4.0.
- **VAT liability** (Partly encoded). Output tax on standard-rated supplies
  and input tax on standard-rated purchases (VAT Act 1994 ss.24 to 26), at
  the 20% standard rate (s.2), and the firm's net liability: output tax less
  allowable input tax. The 5% reduced rate (s.29A) applies supply by supply
  and does not feed the firm's net liability. The modules leave out the
  registration threshold, zero rating, exemption and partial exemption, and
  they take the allowable share of input tax and Schedule 7A membership as
  inputs. axiom.org holds the charge to VAT itself (s.1) as text only (slide
  15).
- **Employer NI** (Partly encoded). The 15% secondary rate from 6 April 2025
  and the employer's charge on earnings above the secondary threshold
  (Social Security Contributions and Benefits Act 1992, s.9); the thresholds
  are in the Social Security (Contributions) Regulations 2001, reg 10. The
  module takes the conditions for the zero rates for under-21s and for
  apprentices under 25 (ss.9A and 9B) as inputs, and an open issue queues
  their encoding. Nothing is queued for the employment allowance.
- **Minimum wage** (Encoded). The National Living Wage of £12.71 an hour from
  1 April 2026 (National Minimum Wage Regulations 2015, reg 4), and £10.85
  for workers aged 18 to 20, £8.00 under 18 and £8.00 for apprentices (reg
  4A). As with employer NI, the module takes one condition as an input:
  whether a worker gets the apprentice rate. An open issue queues reg 5,
  which sets who qualifies.
- **Small-company test** (Encoded, checks paused). Companies Act 2006 s.382:
  a company is small if it meets two of three conditions. The module holds
  the limits before and after 6 April 2025; from that date they are turnover
  of £15 million, a balance sheet total of £7.5 million and 50 employees. One
  automated check fails: the module turns the statute's "£15 million" into
  pounds with a factor of 1,000,000, and the check finds no such number in
  the statute's text. A public waiver (rulespec-uk#137) lets CI skip the
  module's checks until 3 January 2027.
- **Data-protection fines** (Encoded). Data Protection Act 2018 s.157: for an
  undertaking, the higher maximum is £17.5 million or 4% of total annual
  worldwide turnover in the preceding financial year, whichever is greater;
  the standard maximum is £8.7 million or 2%.
- **US tariff schedule** (Incomplete, most checks paused). US law, not UK.
  Rate tables for each chapter of the Harmonized Tariff Schedule, generated
  from the US International Trade Commission's 2026 revision 15. They hold
  ad valorem and free rates; lines with specific, compound or conditional
  duties carry no rate. On 16 November 2026, 166 modules held additional
  Chapter 99 duties: IEEPA, Section 301, Section 232 on steel and aluminium,
  and Section 122. The Axiom Foundation's own page lists the Section 232 annexes
  for autos, copper, semiconductors, vehicles and wood as not encoded, and
  says its coverage is "incomplete and not certified". 296 of the 380 tariff
  modules, including all 100 rate tables, carry a validation waiver, so CI
  skips their checks. There is no UK customs encoding (slide 15). The trade
  study (slides 22 and 23) sets one US tariff rate per SIC division by hand,
  a 10% baseline and 25% on autos and steel, from House of Commons Library
  briefing CBP-10240; it does not use this encoding.
- **Sources.** [About the Axiom Foundation](https://axiom.org/about); [VAT
  Act 1994 s.24](https://axiom.org/uk/statute/ukpga/1994/23/24),
  [s.25](https://axiom.org/uk/statute/ukpga/1994/23/25),
  [s.2](https://axiom.org/uk/statute/ukpga/1994/23/2) and
  [s.29A](https://axiom.org/uk/statute/ukpga/1994/23/29A); [Social Security
  Contributions and Benefits Act 1992
  s.9](https://axiom.org/uk/statute/ukpga/1992/4/9); [National Minimum Wage
  Regulations 2015 reg 4](https://axiom.org/uk/regulation/uksi/2015/621/4)
  and [reg 4A](https://axiom.org/uk/regulation/uksi/2015/621/4A); [Companies
  Act 2006 s.382](https://axiom.org/uk/statute/ukpga/2006/46/382); [Data
  Protection Act 2018 s.157](https://axiom.org/uk/statute/ukpga/2018/12/157);
  [US tariff schedule](https://axiom.org/tariff/schedule).

### 15. What exists today, and how a model could call it

- We read this status from the Axiom Foundation's repositories and axiom.org
  on 16 November 2026. The three columns give examples.
- **Encoded.** The five UK rules on slide 14, with the gaps their tags show.
  Statutory maternity pay's earnings-related rate: 90% of normal weekly
  earnings for the first six weeks (Social Security Contributions and Benefits
  Act 1992 s.166). Who qualifies for statutory paternity pay (s.171ZA); its
  rate is not encoded. Fuel duty rates as printed in Hydrocarbon Oil Duties
  Act 1979 s.6(1A) (57.95p a litre for unleaded petrol), with no start date.
- **Legal text, no encoding.** axiom.org serves the text, with no rules, for
  the charge to VAT (VAT Act 1994 s.1) and the US federal minimum wage (29
  USC 206).
- **Not encoded.** Corporation tax, capital allowances, R&D relief, UK
  customs duty, business rates bills, the employment allowance, the
  apprenticeship levy and statutory sick pay. The UK repository has no
  module, pull request or issue for any of them, apart from one business
  rates module: it spreads total receipts over households by their share of
  corporate wealth, citing Local Government Finance Act 1988 s.43, and does
  not compute a ratepayer's bill.
- **How a model could call the rules** (the row under the columns).
  - **Axiom Rules Engine** (Open source; MIT licence). Rust, with Python
    bindings. It compiles and runs rules from a checkout of a country's
    rules repository. The UK repository's CI runs the companion tests of its
    modules on the engine, except for modules under a validation waiver. The
    engine's README describes runs over a dataset; we have not run one.
    Releases are on GitHub; it is not on PyPI.
  - **Hosted API** (Trial access). At api.axiom.org a caller can search
    rules, read a rule with its sources and dependencies, and run
    calculations. Trial keys are self-serve and expire after 14 days.
    Ready-made calculations cover six compiled programmes: SNAP in four US
    states, the Canada Workers Benefit and Belgian worker income tax. None
    is UK. The documentation also describes compiling any encoded module on
    request; we have not tested that route on a UK module. The MCP server's
    documentation says the API is open for evaluation and its interfaces may
    change before general availability.
  - **MCP server** (Developer preview). An adapter for the Model Context
    Protocol (MCP) that lets an AI assistant search rules and run
    calculations through the hosted API. Its documentation says to pin
    versions and expect breaking changes.
- **Six countries** (the line at the foot). axiom.org/coverage shows
  encodings for the US, the UK, Belgium, Canada, New Zealand and Israel.
  Israel's are a pilot: its repository calls them "a pilot, not coverage".
  Say "encoded rules from", not "covers".
- **Sources.** [Coverage](https://axiom.org/coverage); [VAT Act 1994
  s.1](https://axiom.org/uk/statute/ukpga/1994/23/1); [29 USC
  206](https://axiom.org/us/statute/29/206); [Local Government Finance Act
  1988 s.43](https://axiom.org/uk/statute/ukpga/1988/41/43); [API
  documentation](https://api.axiom.org/docs); [About the Axiom
  Foundation](https://axiom.org/about).

### 16. The Axiom Foundation’s rules, live

- The Axiom Foundation's site, live: browse encoded rules beside their legal text.
- **Sources.** [axiom.org](https://axiom.org).

### 17. Part 4: Projects we have done (divider)

- A few seconds. Name the part and what it covers: the Budget dashboard, the AI scenario, synthetic firms and the trade study (slides 18 to 23).

### 18. The Autumn Budget 2026 dashboard

- The dashboard is live in the slide, at
  policyengine.org/uk/budgets/autumn-2026. "Expand" stretches it over the
  whole screen and "Back to the slide" returns; "New tab" opens it in the
  browser. The buttons in its bar open the Public finances, Policies, Living
  standards and Household calculator views.
- Clicks inside the frame go to the dashboard, and so do the arrow keys:
  click the slide outside the frame before moving on.
- What it models: the Budget measures we model, grouped as on the dashboard
  (energy bills, income from assets, pensions, fuel, carers and the
  self-employed), and a household calculator for any household entered.
- Full descriptions of the measures, and the ones we do not model, are on
  the dashboard's Policies tab. The Autumn Budget 2026 deck
  (`slideshows/autumn-budget-2026`) lists them.
- The slide draws no figure of its own, so nothing here goes stale when the
  dashboard's data change.
- If the venue has no internet, the frame is empty: use the PDF export or
  describe the dashboard.
- **Sources.** [Autumn Budget 2026
  dashboard](https://policyengine.org/uk/budgets/autumn-2026); [Dashboard
  code](https://github.com/PolicyEngine/uk-autumn-budget-dashboard-2026).

### 19. Who bears the cost of an AI scenario?

- The post is live in the slide: "Who bears the AI shock? Distributional and
  fiscal incidence in the UK", PolicyEngine, 16 November 2026
  (policyengine.org/uk/research/uk-ai-study). The post's title is quoted as
  published; the slide's own words say "scenario". The full paper is on SSRN
  (Ahmadi 2026a).
- Beside the post: three channels (job losses, other workers' wages, capital
  income), five incidence scenarios, three outcomes (Exchequer cost, poverty,
  inequality; no figures on the slide) and 50 random draws of who loses a
  job. The tag carries Microcosm UK and the 2027–28 tax year.
- An illustrative scenario, not a forecast, run on Microcosm UK for the
  2027–28 tax year. Microcosm grosses to 29.0 million employees in 2027–28.
- **The central scenario.** 7% of employees lose their jobs for the full
  2027–28 tax year, remaining workers get a 2.6% average wage rise, and
  interest and dividend income rises by 39.8%.
- **£7.3bn**: the Exchequer cost for 2027–28, the mean of 50 draws (standard
  deviation £1.9bn).
- **+2.40pp**: the rise in absolute poverty before housing costs; after
  housing costs it is 2.57 points. The Gini coefficient rises by 1.76
  points.
- **Three channels.** Run on its own, displacement costs £42.5bn; the
  survivor-wage channel raises net receipts by £17.5bn and the
  capital-income channel by £17.9bn (means over 20 paired draws). The
  central cost is the net of these flows.
- **Five incidence scenarios**: exposure-proportional, junior-concentrated,
  expertise-compression, uniform and a top-loaded stress test. The same
  central scenario costs £1.9bn under uniform incidence, £7.3bn under
  exposure-proportional incidence and £27.7bn under the top-loaded stress
  test. The mean rise in poverty before housing costs is between 2.40 and
  2.65 points across the four stylised families.
- These figures supersede the earlier working-paper run (a 2026 scenario on
  the survey-weighted FRS 2024–25), which earlier versions of this deck
  quoted.
- None of these figures is on the slide: the post is the focus, and the
  column beside it says what the study does (three channels, five incidence
  scenarios, Microcosm UK for 2027–28, 50 random draws of who loses a job).
  Quote the figures from these notes or from the post.
- The post is shown at 70% of its size so more of it fits.
  Scroll it in the frame, or use "Expand".
- **Sources.** [“Who bears the AI shock?”, PolicyEngine, 16 November
  2026](https://www.policyengine.org/uk/research/uk-ai-study); [Ahmadi
  (2026a), AI
  study](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7174479).

### 20. How we built synthetic UK firms

- A working paper (firm-microsim-paper, commit e6d5dd6). The firm records
  are synthetic: in the paper's words, they are not estimates of the
  confidential firms that the authorities do not release.
- **The method.**
  1. Published tables. The ONS counts of VAT- and PAYE-registered
     enterprises by turnover band, sector and employment, and HMRC's counts
     of VAT traders by turnover band. Official statistics publish firm
     counts only in coarse turnover bands.
  2. Firm records. About 2.94 million records per vintage, drawn within
     each band.
  3. Weights. Fitted so that the records reproduce the official totals
     along five dimensions.
  4. Threshold changes. The level and the shape of the threshold costed
     statically, then turnover responses as sensitivity tests under assumed
     elasticities.
- **Calibration accuracy, 2023–24** (threshold £85,000), from the paper's
  calibration report: HMRC turnover bands 100.0%, employment bands 99.8%,
  ONS population 99.7%, VAT liability by band 96.9%, sector distribution
  93.3%; 98.0% overall, the mean of the five. Accuracy is one minus the
  relative absolute error. The turnover-band rows hold by construction, so
  the informative ones are the sector distribution and the liability by
  band.
- The weighted population is 2,717,539 firms in the ONS frame, of which
  2,178,281 are registered traders (the "about 2.7 million" and "about 2.2
  million" quoted in the notes for slide 13).
- Not on the slide, and not calibration targets: two informational
  diagnostics in the same report. VAT liability by sector scores 40.4% and
  VAT liability below the threshold 31.2%. Say so if asked how far the
  sector detail can be trusted.
- The 2024–25 vintage (threshold £90,000) scores 98.1% overall.
- **Beside HMRC's costing** (the figure, from the paper). The April 2024
  rise in the threshold from £85,000 to £90,000, 2024–25 to 2028–29: HMRC's
  published costing beside the model's static estimates under two
  conventions. In the paper's words, the full-deregistration estimate
  overshoots the official profile in every release year, and the 43%
  retention convention undershoots it. The slide quotes no number from the
  figure.
- Builds: the method; then the accuracy; then the figure.
- Taken off the deck in this version: the slide "Firm-level VAT
  microsimulation: costing threshold changes". Its figure was a result, and
  project slides show what was done and how. What it carried:
- **The figure that was on it** (`firm-vat-revenue-impact-2025-26.png`, still
  in `public/images/bist-2026/`) is the paper's own: the static revenue effect of moving the
  VAT registration threshold, 2025–26, relative to the £90,000 baseline. In
  the paper's words, cuts raise little revenue within the frame because most
  below-threshold enterprises are already registered, and rises lose revenue
  roughly linearly. The slide quoted no number from the figure.
- **Static costing.** The rule is re-applied to a fixed turnover
  distribution: no behavioural response.
- **Turnover responses.** Sensitivity exercises under assumed elasticities,
  not estimates of firm behaviour.
- **Reforms costed.** Changes to the level and shape of the threshold, and a
  reduced-rate band.
- The synthetic firms are not linked to households.
- Related post: the VAT threshold analysis on policyengine.org
  (policyengine.org/uk/research/uk-vat-thresholds).
- **Sources.** [Ahmadi (2026c), firm VAT
  microsimulation](https://github.com/PolicyEngine/firm-microsim-paper);
  [Working paper figure and calibration report, commit
  e6d5dd6](https://github.com/PolicyEngine/firm-microsim-paper/blob/e6d5dd6/results/calibration_accuracy.txt);
  [VAT threshold
  analysis](https://www.policyengine.org/uk/research/uk-vat-thresholds).

### 21. What the firm model can cost: thresholds, tapers and responses

- The same working paper (firm-microsim-paper, commit e6d5dd6), on the
  synthetic firms of the slide before: five VAT reforms, each moving one
  lever of the registration threshold. All figures are for 2023–24
  microdata, unaged, with the £85,000 threshold as the baseline; only
  in-scope VAT firms count, and the VAT base above the threshold is
  £175.1 billion.
- **Static costs (the table), £m a year, against the £85,000 threshold.**
  - Location: raise the threshold to £100,000, −742 (the direct band sum,
    which the paper adopts; a smooth counterfactual gives −616). About
    117,800 firms leave the register.
  - Shape: a graduated taper from £85,000 to £141,700, −1,406; a flat 50%
    marginal taper over the same band, −968. About 275,800 firms are in the
    band.
  - Rate step: a reduced rate of 10% on turnover from £85,000 to £105,000,
    −446; at 15%, −223. About 138,000 firms are in the band.
- **Turnover responses (the right-hand table).** An iso-elastic model of
  bunching below the threshold notch, in the style of Kleven and Waseem,
  with one turnover elasticity. The elasticity is assumed, not estimated
  from the synthetic data: the paper reports costs at 0.05, 0.17 (its
  central value) and 0.32, so the costs are conditional on that choice.
  - Reduced rate 10%: −446 static, −444, −437 and −430.
  - Reduced rate 15%: −223 static, −221, −216 and −210.
  - Raise to £100,000: −742 at every elasticity, by construction: released
    firms leave the base and no other firm's rate changes.
  - With a response, firms in the reduced-rate band raise turnover, which
    widens the taxed base, so the cost falls a little as the elasticity
    rises. The tapers have no response row: their rate changes continuously
    with turnover, outside the model's flat-rate solve.
- Say that these are the paper's costings on synthetic firms, not official
  estimates, and that the response figures depend on the assumed
  elasticity.
- **Sources.** [Ahmadi (2026c), firm VAT
  microsimulation](https://github.com/PolicyEngine/firm-microsim-paper):
  [static reform costs](https://github.com/PolicyEngine/firm-microsim-paper/blob/e6d5dd6/results/reform_menu_common_base.txt)
  and [turnover responses](https://github.com/PolicyEngine/firm-microsim-paper/blob/e6d5dd6/results/dynamic_reform_results.txt),
  commit e6d5dd6.

### 22. Who bears the cost of trade changes? Four UK episodes, 2021–26

- A working paper (Ahmadi 2026b; uk-trade-shock-study). The slide follows
  the study's rerun on Microcosm UK: pull request #46, head 10dc18826, which
  is open and not yet merged, so its figures can still change. (The earlier
  head, 778557c, has the same figures.)
- Four UK trade events of 2021–26, traced to households:
  - the part of the food price rise that Bakker et al. (2023) attribute to
    post-Brexit trade barriers;
  - the 2022 energy price surge;
  - projected duty reductions from the UK–India agreement;
  - the 2025 US tariffs.
- Each column gives the episode's years and whether prices or earnings carry
  the change, as the paper's episode headings do: food prices 2021–23 and
  energy 2022–23, both through prices; the UK–India agreement from 2026,
  through prices and a gain; the US tariffs 2025–26, through earnings.
- Every episode follows one path: a price or earnings change, applied to
  each Microcosm UK household by what it spends or earns. The tax and
  benefit response is measured for the tariffs (the next slide) and for
  energy (the support schemes); the UK–India gain is the duty reduction
  spread over households' spending.
- The price changes come from published estimates; the tariff earnings
  change is built from an assumed elasticity (the next slide, which is the
  same study's tariff episode in detail).
- The food and energy price rises were largest, as a share of spending, for
  lower-income deciles.
- The energy rise was offset in part by the Energy Price Guarantee and the
  Energy Bills Support Scheme. The earlier figure of "about 60% (49–64%)" is
  dropped: it came from the older run. The rerun reports a different
  measure: the Energy Price Guarantee absorbed 33.8% of the gross rise on a
  financial-year basis (46.2% as a point-to-point ratio of the price cap;
  PR #46, 10dc18826, `results/generated_multishock.tex`). Quote it only if
  asked, and as a figure from an open pull request.
- The study models no policy aimed at the food price rise; general
  cost-of-living payments cushioned it.
- Datasets (PR #46, 10dc18826): every microsimulation runs on policyengine[uk]
  6.20.0 (policyengine-uk 2.174.1) with the certified Microcosm UK 2024–25
  build. The energy episode uses the Microcosm UK 2024–25 households, held at
  2024–25 values; its main run uses 2023–24 rules, and 2022–23 rules only for
  a comparison. The tariff stage runs under 2026–27 rules. The earlier run (06c8bbc) used the enhanced FRS
  2023–24 and the survey-weighted FRS 2024–25.
- The slide shows no result. The paper's incidence figure (household
  incidence by income decile) is off the slide: its file is the same at
  06c8bbc and at PR #46 (10dc18826), so the pull request did not regenerate it
  on Microcosm UK.
- The US tariffs column, under a teal rule, is marked "Next slide": the next slide is the same
  study's tariff episode in detail.
- The line under the columns, tagged "Method": every episode is a price or
  earnings change, applied to each Microcosm UK household by what it spends
  or earns.
- **The UK–India agreement** is the episode closest to a free trade
  agreement assessment: projected duty reductions passed to prices, then to
  each household's spending. Published assessments of trade agreements
  usually report GDP, an average real wage and sector and regional output;
  this path adds income deciles, poverty and tax and benefit effects, and
  could serve any trade agreement.
- **Sources.** [Ahmadi (2026b), trade
  study](https://github.com/PolicyEngine/uk-trade-shock-study); [its rerun on
  Microcosm UK, pull request
  #46](https://github.com/PolicyEngine/uk-trade-shock-study/pull/46).

### 23. Who bears the cost of trade changes: the 2025 US tariffs

- The second slide of the trade study (slide 22), not a separate project:
  its US tariffs episode in detail. It is also the starting point for the
  first possible starting point (slide 31).
- Builds: the five steps; then the cushion figures; then the bracket under the
  steps a trade model could replace.
- How the trade study turns the 2025 US tariffs into an earnings change for
  employees in Microcosm UK.
- **Tariff rates.** The full US schedule before the Economic Prosperity Deal
  (operative 8 May 2025; the slide says "before the UK–US deal of May
  2025"). The tag "No published results for the UK–US deal" says the same:
  the paper reports none for the deal's schedule.
- **US export intensity.** By two-digit SIC division.
- **Export-demand elasticity.** Assumed 1 (the OBR's March 2025 scenarios use
  0.4).
- **Earnings change by sector.** About £1.0bn a year (an output of these
  steps), all assumed to fall on employees' earnings.
- **Employees in Microcosm UK, by sector.** The earnings change goes to the
  employees in Microcosm UK who work in that sector.
- The three middle steps are the ones a trade model's sector results could
  replace (the last build draws the bracket under them).
- The finding: the tax and benefit system cushions part of the earnings
  loss. When earnings fall, households pay less tax and NI, receive more in
  benefits and pay lower pension contributions, so net income falls by less
  than earnings. These absorb 41.8% of the loss when it comes as wage cuts
  across workers and 32.1% when it comes as job losses (standard deviation
  3.3 points across 20 draws; the wage-cut case uses 3 draws, as it varies
  only with Universal Credit take-up). The gross earnings loss is £1,007.1m
  a year, the "about £1.0bn" on the slide. This is the Dolls, Fuest and Peichl
  stabilisation coefficient.
- Results are for the tariff schedule before the UK–US Economic Prosperity
  Deal, on Microcosm UK at 2026 (policyengine[uk] 6.20.0, policyengine-uk
  2.174.1).
- These figures are from the study's open pull request #46 (head 10dc18826,
  `results/e3_constants.json`), not yet merged. They replace the earlier
  run's 43.7% and 35.4%.
- The deal's general terms (operative 8 May 2025) provide for a quota of
  100,000 UK vehicles at a 10% tariff and, subject to supply-chain
  conditions, a steel and aluminium quota at most-favoured-nation rates.
- The study's code includes a deal schedule, but we have no published results
  for it, which is what the slide's tag says. (The repository holds a
  two-draw test file for the deal schedule; the paper reports nothing from
  it.)
- The export-demand elasticity of 1 is a placeholder. A trade model's
  sector results could replace it and the two steps beside it.
- Tariff revenue is a fiscal channel the study does not model; it could
  come from the trade model.
- **Sources.** [Ahmadi (2026b), trade
  study](https://github.com/PolicyEngine/uk-trade-shock-study); [Economic
  Prosperity Deal: general
  terms](https://www.gov.uk/government/publications/us-uk-economic-prosperity-deal-epd/general-terms-for-the-united-states-of-america-and-the-united-kingdom-of-great-britain-and-northern-ireland-economic-prosperity-deal-web-accessible-v).

### 24. Part 5: What could be explored (divider)

- A few seconds. Name the part and what it covers: one way to link models, then a trade application (the Economic Prosperity Deal), a business application (BICS), agent-based models and macroeconomic models (slides 25 to 29); tagged "Idea to explore".
- The order is one argument: the general mechanism first; two applications
  of it; then the kind of model that could supply firms' behaviour, which
  the business application leaves open; and the longer-term macroeconomic
  routes last.

### 25. One way to link: tables in, tables out

- A starting point for discussion, not a commitment.
- One slide for how a model's results could reach people. It merges two
  earlier slides: "Disaggregation: how sector results reach people" and the
  earlier "One way to link: tables in, tables out". Each row is one kind of
  result, the code it would be mapped by (not built), the records
  what it is assigned to once mapped, and what PolicyEngine already reports.
  The small line under each result names the kinds of model that report it:
  jobs by sector from a CGE trade model or an agent-based model (which can
  also give earnings by sector); wages by labour type from a CGE model of
  the GTAP kind; one economy-wide wage from a multi-sector quantitative
  trade model; prices from partial-equilibrium, CGE and quantitative trade
  models. A CGE model of the GTAP kind has one wage per labour type, not per
  sector, and its standard closure fixes aggregate employment.
- **One economy-wide wage (a row of its own, "Can take today").** A
  quantitative trade model in the style of Caliendo and Parro (2015) has
  many sectors linked by input–output tables and one wage per country. It
  reports sector output, prices and trade flows by sector, and a real wage.
  PolicyEngine takes the wage and the prices: the same earnings change is
  applied in every SIC division, to all employees, with no occupation
  mapping, which the trade study's code already does. Sector output and
  trade flows stay in the trade model. A real wage already nets out the
  change in prices, so pass the nominal wage and the prices separately, or
  the real wage alone with no price change, so that prices are not counted
  twice.
- **Runs today** (the line under the rows). The trade study's code already
  takes earnings changes by two-digit SIC division and applies them to
  employees in Microcosm UK. The outputs on the right are existing policyengine.py
  outputs.
- What another model could pass (a proposal, not built; the full field list
  was summarised on the earlier slide as "Keyed by": two-digit SIC division,
  COICOP spending division, ITL1 region (optional), scenario and year to
  2031):
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
- PolicyEngine already reports (existing outputs; the right-hand column):
  - By income decile: net income change; shares gaining and losing.
  - Poverty and inequality: poverty rates, Gini and income shares.
  - By programme: main taxes and benefits; government balance.
  - By place: ITL1 regions; local areas (experimental file).
- Possible additions (a proposal, not built; on the earlier slide, now only
  here):
  - Across draws: mean and SD across draws, which are in the studies' code,
    not yet in policyengine.py.
  - Format: CSV tables per scenario and year.
- If the trade model holds total employment fixed, its sector results are
  wage changes and moves between sectors, not job losses; PolicyEngine would
  then apply wage changes only.
- No reader for such a table exists.
- Cells of sector by region have few survey records, so they carry sampling
  error.
- **Different models pass different things**, and the interface takes
  whichever a model has. A CGE trade model of the GTAP kind: output,
  employment and prices by sector, and wages by labour type, under a stated
  closure. A multi-sector quantitative trade model with input–output links
  and one wage per country: sector output, prices and trade flows, and a
  real wage; PolicyEngine takes the wage and the prices.
  Partial-equilibrium models of goods sectors: product prices, sector by
  sector, which map to COICOP divisions. Estimates of non-tariff measures
  (for example from structural gravity) enter the trade model as trade
  costs; their price and earnings effects reach households the same way.
- **Prices carry as much as earnings and jobs.** A trade model reports the
  welfare of an average consumer. Mapped to each household's spending by
  COICOP division, the same price changes become a distribution by income
  decile, because spending baskets differ by income.
- **Returns to capital.** A CGE model reports them. PolicyEngine's
  allocation by shareholding exists for business taxes; a link from returns
  to capital to households' capital income is an idea to explore, not built.
- **Tariff revenue** would come from the trade model as a fiscal total.
- **The mechanism, row by row**: which survey records receive each result.
  The mapping in the middle column is the mapping between sector codes,
  which is not built.
- **Earnings and jobs by sector.** Mapped to two-digit SIC divisions.
  Earnings changes are assigned to the employees who work in that sector. A
  sector result does not say which employees lose a job, so who does is
  drawn at random, over repeated draws; studies report the mean and the
  standard deviation across draws ("Backup material" below).
- **Wages by labour type.** A trade model's labour types would be mapped to
  occupation groups, and assigned to employees in those occupations.
  Occupation comes from the survey's job record; for the SPI copies it is
  imputed from their incomes. This mapping is not built.
- **Prices.** Mapped to COICOP spending divisions, and assigned to each
  household's spending in that category.
- Then the tax and benefit rules are recomputed for every household, before
  and after.
- Today the trade study assigns earnings changes by two-digit SIC division. The
  survey's sample size limits sector detail.
- Breakdowns PolicyEngine can already report (slide 6 has the full list):
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
- Builds: one column at a time, from a model's result to what PolicyEngine
  can report.
- **Can we stand behind each row?** Checked on 16 November 2026 against the
  trade study's code (PR #46, 10dc18826), the AI study's code and
  policyengine-uk (d3db7ac). The tag in the third column says so.
  - Earnings and jobs by sector: can take today, once results are in
    two-digit SIC divisions (`apply_shocks`; `sic_industry_division` in the
    data). By region too would be a small extension.
  - Wages by labour type: a small extension. The model holds each worker's
    occupation as a SOC 2020 major group (`soc2020_major_group`), and the AI
    study assigns by occupation, but the trade study's code is keyed by
    sector only, and a map from a trade model's labour types to occupation
    groups does not exist.
  - Prices: needs a sector mapping. The model holds spending by category
    (`variables/input/consumption/`) and the trade study applies price changes
    to food and energy spending, but a model's prices by sector or product
    must first be mapped to those categories.
  - "Mapped into" is tagged "Not built yet": the mapping from another
    model's sectors or products to SIC and COICOP is the work in every row.
    The "Can take today" tags in the next column (headed "Once mapped,
    assigned to") apply once a result is in those keys; the prices row says
    "Needs a sector mapping", because that mapping is the work for prices.
  - Outputs: all existing; regions are ITL1; local areas are experimental.
- **Sources.**
  [policyengine.py](https://github.com/PolicyEngine/policyengine.py); [Ahmadi
  (2026b), trade study](https://github.com/PolicyEngine/uk-trade-shock-study);
  [GTAP model](https://www.gtap.agecon.purdue.edu/models/cge_gtap_n.asp).

### 26. The UK–US Economic Prosperity Deal: from model results to households

- One deal has macro impacts and household impacts. This slide applies the
  linking table of the previous slide to one deal, end to end; the trade
  study’s tariff slide (slide 23) is one of its parts. The subtitle
  ("The tables of the previous slide, applied to one deal from end to end")
  points back, so the mapping is not explained twice. Not built; no results yet. The slide is tagged "Not yet
  modelled"; of the two pieces that are not built, the sector mapping
  carries "Not built yet" and the feedback "Idea to explore".
- **Results for the deal (a trade or macro model).** Changes in prices,
  output and employment by sector, and wages by labour type, under the
  deal's tariff schedule, with the labour-market closure stated. A GTAP-style
  model has one wage per labour type, not per sector, and its standard
  closure fixes aggregate employment. A quantitative trade model with one
  wage per country gives that wage instead ("or one wage" on the slide),
  with prices and trade flows by sector (slide 25).
- **Sector mapping (to be agreed, not built).** Model sectors to two-digit SIC
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
  macro–micro loop on slide 29.
- **The deal.** Its general terms became operative on 8 May 2025. They
  provide for a quota of 100,000 UK vehicles at a 10% tariff and, subject to
  supply-chain conditions, a steel and aluminium quota at most-favoured-nation
  rates.
- The trade study's code includes a deal schedule, but we have no published
  results for it. The study's results are for the schedule before the deal
  (slide 23).
- Builds: the other model's results; the sector mapping; the two PolicyEngine
  steps; the optional feedback.
- **The sector mapping is the practical offer:** a table that maps another
  model's sectors or products to SIC divisions and COICOP divisions. Trade-model sectors,
  input–output sectors or the product sectors of partial-equilibrium
  models would be mapped to two-digit SIC divisions for earnings and jobs
  and to COICOP divisions for prices. It is not built.
- **Timing.** A CGE result is a long-run equilibrium; PolicyEngine reports
  fiscal years. How the one maps to the other is a question for the
  discussion.
- **Can we stand behind each step?** Checked on 16 November 2026 against the
  trade study's code (PR #46, 10dc18826) and policyengine-uk (d3db7ac).
  - Results for the deal: the other model's. PolicyEngine takes jobs,
    earnings and prices; it has no use for sector output, so the slide no
    longer lists it.
  - Sector mapping: not built (tagged "Not built yet"). No mapping from
    another model's sectors to SIC or COICOP exists in our code.
  - Assign to people, apply the rules: doable today for earnings changes and
    job losses by two-digit SIC division (`tariff_pipeline/shocks.py`,
    `apply_shocks`) and for price changes on spending categories the model
    holds (`uk_trade_shock_study/incidence.py`). Wages by labour type need a
    small extension (slide 25).
  - Household and fiscal results: existing outputs. Regions are the ITL1
    regions; local areas come from the experimental file.
  - Optional feedback to the macro model: an idea only, tagged so.
- **Sources.** [Economic Prosperity Deal: general
  terms](https://www.gov.uk/government/publications/us-uk-economic-prosperity-deal-epd/general-terms-for-the-united-states-of-america-and-the-united-kingdom-of-great-britain-and-northern-ireland-economic-prosperity-deal-web-accessible-v);
  [Ahmadi (2026b), trade
  study](https://github.com/PolicyEngine/uk-trade-shock-study);
  [policyengine.py](https://github.com/PolicyEngine/policyengine.py).

### 27. Business policy: from firm costs to households

- The business application of the linking table, after the trade one. Its
  second step, how firms pass the relief on, is outside PolicyEngine: another
  model, such as an agent-based model of firms (next slide), or an
  assumption could supply it.
- Example: the British Industrial Competitiveness Scheme, which exempts
  eligible manufacturers in Great Britain from three electricity policy
  costs. Not built; no results.
- **Electricity cost cut (scheme design).** Relief from three electricity
  policy costs for eligible manufacturers: the impact assessment estimates
  £35 to £40 per MWh, from 2027.
- **How firms pass it on (outside PolicyEngine).** Lower prices, higher pay or
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
- **Can we stand behind each step?** Prices by spending and pay and jobs by
  sector use what the code already takes (slide 25). Profits: PolicyEngine
  can allocate one economy-wide profit change by shareholding; it has no
  link from a sector's profits to that sector's owners, so the slide says
  "total profits". The existing allocations are booked as taxes, so a
  non-tax measure needs an extension; the slide is tagged "Idea to
  explore".
- **Sources.** [BICS guidance for
  applicants](https://www.gov.uk/government/publications/british-industrial-competitiveness-scheme-business-guidance/british-industrial-competitiveness-scheme-guidance-for-applicants);
  [BICS impact
  assessment](https://www.legislation.gov.uk/ukia/2026/149/pdfs/ukia_20260149_en.pdf);
  [PolicyEngine UK code](https://github.com/PolicyEngine/policyengine-uk).

### 28. Where an agent-based model could link

- Three kinds of agent-based model, each with the behaviour it would
  simulate and what it could pass to PolicyEngine. None of these links is
  built, and the slide names no particular model. The first row, a
  supply-chain network model, is marked "First candidate" by a teal rule:
  its result is the one the existing code takes most directly.
- **A supply-chain network model (first candidate).** A shock to one
  product, for example a semiconductor input, passes along the network of
  suppliers and buyers: firms lose inputs, switch suppliers where they can,
  and cut output and jobs. It passes in job and earnings losses by sector.
  A question to ask, not a claim: what does such a model report? A risk
  index would need a further step before it reaches households; jobs and
  earnings by sector could be passed in directly.
- **A business-investment model, with expectations and uncertainty at its
  core.** It simulates firms' investment, output and hiring paths by
  sector as expectations and uncertainty change. PolicyEngine takes the
  jobs and earnings by sector, one year at a time; investment and output
  stay in the other model. Where such a model also reports profits,
  PolicyEngine could allocate one economy-wide change by shareholding. That
  allocation exists for business taxes and is booked as tax, so a profit
  change needs a small extension; it is not on the slide.
- **An endogenous-growth model in the style of Dosi, Fagiolo and Roventini
  (2010).** Firms adopt technology, enter and exit over the business cycle,
  with jobs and wages adjusting. It passes in paths of jobs and wages by
  sector, one year at a time; it could, for example, stand in for the AI
  study's assumed scenario. Dosi et al. model technological change and
  cycles, not AI.
- **What PolicyEngine reports (the same for all three).** Household incomes by
  decile and region (local areas experimental), poverty, inequality, benefit
  claims, and tax and benefit receipts, by year. The slide gives the short
  form (incomes by decile and region; poverty and inequality; taxes and
  benefits by year); the full breakdown is slide 6.
- **The former BICS row, for questions.** An agent-based model of firms that
  differ in electricity use and market power could simulate how
  electricity-cost relief is split between prices, pay, jobs, investment and
  profit. It would pass in price changes by spending category ("Needs a
  sector mapping") and pay by sector. BICS has its own slide (27), so the
  row is here only.
- Trade flows and the response to tariffs stay in a trade model such as GTAP.
  PolicyEngine models no firm behaviour: it adds the tax and benefit rules
  and the households. A CGE run with technology sectors split out could also
  supply an AI scenario.
- Youngman et al.'s agent-based model cites our approach to under-sampled
  wealthy households; it uses neither our model nor our data.
- Builds: one kind of model at a time; what PolicyEngine reports is shown
  from the start.
- **Can we stand behind "What it would pass in"?** Checked on 16 November 2026
  against the trade study's code (PR #46, 10dc18826, `tariff_pipeline/shocks.py`
  and `runner.py`) and policyengine-uk (d3db7ac). Each input carries a tag.
  - Job and earnings losses by sector: can take today. `apply_shocks` takes
    employees with their two-digit SIC division and applies wage cuts or job
    losses by division. Region is reported in the results but is not an
    input, so losses by sector and region would be a small extension.
  - Jobs and earnings, or jobs and wages, by sector, one year at a time:
    can take today; each year is a separate run, so a path is a series of
    runs.
  - Profits by sector are not doable: PolicyEngine has no link from a
    sector's profits to that sector's owners. One economy-wide change could
    be allocated by shareholding, with the extension above.
  - Price changes by spending category (the former BICS row): the model
    holds spending by category, and the trade study costs food and energy
    price changes by decile; the work is the sector mapping.
- **Sources.** [Dosi, Fagiolo and Roventini
  (2010)](https://doi.org/10.1016/j.jedc.2010.06.018); [GTAP
  model](https://www.gtap.agecon.purdue.edu/models/cge_gtap_n.asp); [“Who
  bears the AI shock?”, PolicyEngine, 16 November
  2026](https://www.policyengine.org/uk/research/uk-ai-study); [Youngman et
  al. (2026)](https://arxiv.org/abs/2602.15607).

### 29. Links to macroeconomic models

- **A forecast scenario (built, not yet run).** PolicyEngine UK projects
  its data forward with OBR growth rates for earnings, prices and other
  series. A scenario from a macroeconomic forecasting model could replace
  those paths. We have not run such a scenario.
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
- Builds: one route at a time.
- **Sources.** [PolicyEngine UK
  code](https://github.com/PolicyEngine/policyengine-uk); [Growth
  parameters](https://github.com/PolicyEngine/policyengine-uk/blob/d3db7ac07d3cc718400f38ba8ede429d38d6855e/policyengine_uk/parameters/gov/economic_assumptions/yoy_growth.yaml);
  [Mosley and Cornforth
  (2023)](https://www.lse.ac.uk/CFM/assets/pdf/CFM-Discussion-Papers-2023/CFMDP2023-16-Paper.pdf);
  [OG-UK](https://github.com/PSLmodels/OG-UK).

### 30. Part 6: Possible next steps (divider)

- A few seconds. Name the part and what it covers: if there is interest,
  two possible starting points, and questions for discussion (slides 31 to
  33). Nothing here assumes a collaboration: the first question asks
  whether there is appetite at all.

### 31. Two possible starting points

- For discussion, if there is appetite: one scenario each, passed one way
  from another model to PolicyEngine. We have no published results for
  either. Nothing here assumes a collaboration or is a commitment; each row
  says what a model or PolicyEngine could provide.
- **The Economic Prosperity Deal.**
  - A trade model could provide: changes in prices and employment by sector
    and wages by labour type, or one economy-wide wage, under the deal's
    tariff schedule, with the labour-market closure stated.
  - PolicyEngine could provide: the sector mapping; household incomes by decile
    and region, and experimentally by local area; poverty; net Exchequer
    cost.
  - A starting point: the trade study's US-tariff episode (slide 23), with the trade model's
    results in place of its assumed elasticity, and its UK–India episode
    (slide 22), which already passes projected duty reductions to each
    household's spending by decile. The same path serves any trade
    agreement: the price side exists; the earnings side, a trade model's
    sector results assigned to employees, is the new part. Prices carry as
    much weight as jobs here: a partial-equilibrium or CGE model's price
    changes, mapped to spending, become a distribution by decile.
- **The British Industrial Competitiveness Scheme.**
  - A firm or sector model could provide: the electricity-cost change by
    sector, and how firms split it between prices, pay and profits, from a
    model or as scenarios.
  - PolicyEngine could provide: allocation to households by spending, sector of
    employment and shareholding; household and fiscal effects.
  - A starting point: the model's allocation of business-tax changes, extended
    to a non-tax cost change.
- PolicyEngine could run the microsimulation, as the survey data are licensed
  through the UK Data Service. Neither link is built.
- Which scenario, if any, would be for the department to choose.
- Further out, and only if a first link proved useful: a two-way loop with
  a macroeconomic model, OG-UK, and a link between firm and household data.
- Builds: one starting point at a time.
- **Can we stand behind each line?** "A trade model could provide" now reads
  "prices and jobs by sector; wages by labour type, or one wage": PolicyEngine
  has no use for sector output or trade flows, and one economy-wide wage
  needs no occupation mapping (slide 25). What PolicyEngine could provide follows slides 25, 26
  and 27: the sector mapping is work to do; incomes, poverty and Exchequer
  cost are existing outputs; the BICS allocation needs the business-tax
  allocation extended to a non-tax measure.
- **Sources.** [Economic Prosperity Deal: general
  terms](https://www.gov.uk/government/publications/us-uk-economic-prosperity-deal-epd/general-terms-for-the-united-states-of-america-and-the-united-kingdom-of-great-britain-and-northern-ireland-economic-prosperity-deal-web-accessible-v);
  [BICS guidance for
  applicants](https://www.gov.uk/government/publications/british-industrial-competitiveness-scheme-business-guidance/british-industrial-competitiveness-scheme-guidance-for-applicants);
  [Ahmadi (2026b), trade
  study](https://github.com/PolicyEngine/uk-trade-shock-study); [PolicyEngine
  UK code](https://github.com/PolicyEngine/policyengine-uk).

### 32. Questions for discussion

The six questions on the slide, with what each is after:

1. **Is there appetite to explore a link, and on which question?** The
   first question asks whether there is interest at all; nothing in the
   talk assumes it. If there is, which question would come first: the
   Economic Prosperity Deal, BICS, a supply-chain scenario, or another.
2. **Which model would supply the scenario, and under which closure?** A
   CGE model of the GTAP kind gives prices, employment by sector and wages
   by labour type under a stated closure; a trade model with one
   economy-wide wage gives that wage and prices; partial-equilibrium models
   give product prices across goods sectors.
3. **How should a long-run result map to fiscal years?** A CGE result is a
   comparative-static equilibrium; PolicyEngine reports fiscal years, so the
   result could be applied to one chosen year or phased in over several.
4. **Where should the prices, pay and profits split come from?** For a
   policy such as BICS.
5. **Which firm behaviour needs an agent-based model, and what does it
   report?** Beyond what a trade or macro model gives.
6. **Which household results matter most: income groups, places or both?**
   Deciles, poverty, regions, constituencies and local authorities
   (experimental): slide 6.

Two more to raise if time allows: tariff revenue as a fiscal channel, and
returns to capital.

Questions the audience is likely to ask, with short answers:
- **Where do the elasticities come from?** In the trade study the
  export-demand elasticity of 1 is a placeholder (the OBR's March 2025
  scenarios use 0.4); a trade model's sector results would replace it and
  the steps beside it (slide 23). The firm model's turnover elasticities are
  assumed, from 0.05 to 0.32 (slide 21).
- **Closure.** If the trade model holds total employment fixed, its sector
  results are wage changes and moves between sectors, and PolicyEngine
  applies wage changes only; job losses are drawn only when the sending
  model reports them (slide 25).
- **Timing.** See question 3, which is open: a long-run result could be
  applied to one fiscal year or phased in; each year is a separate run.
- **Tariff revenue.** Not in PolicyEngine's Exchequer result, which counts
  the taxes and benefits in the model; it would come from the trade
  model as a fiscal total, so the two make one fiscal picture.
- **Returns to capital.** A CGE model reports them. PolicyEngine allocates
  business-tax totals by shareholding; a link from returns to capital to
  households' capital income is an idea to explore, not built (slide 25).
- **Static or behavioural?** Mostly static by default (slide 5). Labour
  supply responses can be switched on; firms' decisions and general
  equilibrium come from the other model.
- **Thin cells.** Sector-by-region cells have few survey records, so they
  carry sampling error; results by decile and region are more robust than
  results by sector and region (slide 25).
- **Spending baskets by income.** Spending by category comes from the
  Living Costs and Food Survey, imputed to the household file (slide 8), so
  a price change by COICOP division falls differently across deciles.
- **Running inside government.** The code is open, so a department could
  run it on its own data; the household microdata we use are
  licensed and stay with us, and the synthetic firm data can be shared
  (slide 13).

### 33. Thank you

- Contacts are on the slide: vahid@policyengine.org, policyengine.org/uk,
  github.com/PolicyEngine and linkedin.com/company/thepolicyengine.
- **Sources.** [policyengine.org/uk](https://www.policyengine.org/uk).

## Backup material

The deck has no appendix. These notes keep what the former appendix slides
carried, for questions.

### Use, evaluation and engagement

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

### Microcosm UK data: release gates, certification and firm support

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

### Assignment variability: repeated random draws

- A sector-level scenario gives totals by sector; which survey employees are
  affected is drawn at random.
- A scenario sets the chance that an employee loses their job, by sector or
  occupation. Who does is drawn at random.
- In the trade study’s tariff episode, whether a newly entitled family claims Universal
  Credit is also drawn, at the scenario's take-up rate.
- Every draw is a full run of the tax and benefit rules. Studies report the
  mean and the standard deviation across draws.
- 50 draws in the AI study's central scenario; 20 in the trade study’s tariff episode’s
  rerun (PR #46, 10dc18826).
- The AI study's central scenario: an Exchequer cost of £7.3bn as the mean
  of 50 draws, with a standard deviation of £1.9bn, on Microcosm UK for
  2027–28.
- The draws cover random assignment only, not sampling error in the survey,
  error in the calibrated weights or doubt about the scenario.
- The trade study also reports household-bootstrap sampling intervals for its
  energy results.

### Open code, restricted microdata, synthetic data

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

### The AI study, the trade episodes and model coverage

- The AI study's figures by channel and by incidence scenario are in the
  notes for slide 19.
- The four trade episodes, with the energy offset and the datasets used, are
  in the notes for slide 22.
- What the UK model covers is slide 13 and its notes.
