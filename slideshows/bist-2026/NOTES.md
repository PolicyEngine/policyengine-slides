# Presenter notes: From business shocks to household incomes

Notes for the seminar with the BIST Modelling Unit on 19 November 2026. The
slides carry one message each, with icons, short labels and status tags. These
notes carry the sentences, caveats and figures that the presenter says aloud.
Every figure here is one the deck already cites; the sources are in
[README.md](README.md) and in the comments of `content.ts`.

Status tags used on the slides: **Idea to explore**, **Not yet modelled**,
**Experimental**, **Proposal**, **Mechanism built; not yet run**, **Working
paper**, **Illustrative scenario**, **Early prototype**, **In-sample fit**,
**Targets at model year 2025**, **Mostly static by default**, **Runs today**,
**Live**, **Open**, **Restricted**, **Microcosm UK, 2027–28**,
**Microcosm UK**, **Can take today**, **Needs a sector mapping**, **Small
extension** and **Not built yet**.

The talk has seven parts, after the Modelling Unit introduces its own work
and models. Each slide's part is the label above its title; the row of marks
beside it shows the part's place among the seven.

1. **Introduction** (slides 1 to 3): the title, the talk in brief and who we
   are.
2. **What PolicyEngine is** (slides 4 to 8): what the model computes and how
   a run works, the rules, the Microcosm data, calibration and the live
   calibration dashboard.
3. **What we have already** (slide 9): what the UK model covers, on the
   household and the business side, and what is open.
4. **Projects we have done** (slides 10 to 14): the Autumn Budget 2026
   dashboard, the AI scenario post, the synthetic firms of the firm-level
   VAT working paper, the trade working paper and its tariff study.
5. **What we could explore further** (slides 15 and 16): the Economic
   Prosperity Deal from macro impacts to households, and links to
   macroeconomic models.
6. **Ideas that fit the unit** (slides 17 to 19): business policy (BICS),
   where an agent-based model could link, and one way to link models, by
   exchanging tables.
7. **How we could collaborate** (slides 20 to 22): two candidate pilots,
   questions and contacts.

This version has 22 slides, down from 27, to fit about 30 minutes. Five
slides were merged into their neighbours or cut; what each carried is in the
notes for the slide that replaced it (slides 4, 7, 9, 12 and 19).

Slides marked "Builds" reveal their content in steps: each click or
right-arrow adds the next piece, and nothing already on the slide moves. A PDF
export shows each slide once, complete: one page per slide. Slides 8, 10 and 11 hold live pages and need
an internet connection. Icons are bare, in the teal ink, with no box behind
them. The slides carry no "Sources" row: each slide's sources are the
"Sources" bullet at the end of its notes below, as links. The deck has no
appendix: what the former appendix slides carried is
under "Backup material" at the end of these notes. The live counter numbers
slides, not build steps.

## Talk (slides 1 to 22)

### 1. Title

- Tax–benefit microsimulation alongside trade, macroeconomic and agent-based
  models.
- The audience line reads "Modelling Unit, Department for Business,
  Innovation, Science and Trade".
- Speakers: Vahid Ahmadi (Research Associate) and Max Ghenis (CEO).

### 2. In brief

- The talk has seven parts. The slide shows parts 2 to 7 as numbered cards;
  part 1 is this introduction. The label above each later slide's title
  names its part, and the row of marks beside it shows where we are.
- **1. Introduction.** Who we are.
- **2. What PolicyEngine is.** PolicyEngine UK computes household incomes
  after taxes and benefits, poverty and the public finances. Household
  spending is an input, not a result. How a run works, how the rules are
  written, how the Microcosm data are built and what the weights are fitted
  to. (The card: "How a run works, the rules, the household data and its
  calibration.")
- **3. What we have already.** The taxes and benefits the UK model covers,
  how business taxes reach households, and what is open. PolicyEngine UK has
  no firm entity.
- **4. Projects we have done.** The Autumn Budget 2026 dashboard, the AI
  scenario post, the synthetic firms of the firm-level VAT working paper, the trade
  working paper and its tariff study.
- **5. What we could explore further.** Trade, macroeconomic and agent-based
  models give changes in earnings, jobs and prices by sector. PolicyEngine
  can turn these into household and fiscal effects by income decile and
  region, and experimentally by local area. No such link is built: our trade
  and AI studies use published estimates and stated scenarios. The worked
  example is the US–UK Economic Prosperity Deal.
- **6. Ideas that fit the unit.** Business policy beyond tax, with the
  electricity-cost relief of the British Industrial Competitiveness Scheme
  (BICS) as the example; where an agent-based model could link; and one way
  to link models, by exchanging tables.
- **7. How we could collaborate.** Two candidate pilots (slide 20): tariff
  changes under the Economic Prosperity Deal, and BICS. We have no published
  results for either. Then questions for discussion.

### 3. Who we are

- **Nonprofit.** PolicyEngine is a nonprofit building free, open-source tools
  that help people understand tax and benefit policies (the wording of
  policyengine.org/uk/donate).
- **Open source.** The rules (PolicyEngine UK), the data pipeline (Microcosm)
  and the analysis package (policyengine.py) are public. PolicyEngine UK and
  policyengine.py are licensed AGPL-3.0, Microcosm MIT. The household
  microdata are licensed survey records and are not public (slide 9).
- **UK and US models.** One Python package, policyengine.py, runs both
  country models with the same reform and output interface (Ahmadi et al.
  2026, JOSS). This talk is about the UK model.
- **In government** (the logo row). 10 Downing Street's data science team
  built 10ds-microsim on PolicyEngine. The slide says only that HM Treasury,
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
- Layout: the three facts run across the top; "In government" and "Think
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

### 4. PolicyEngine UK computes household incomes after taxes and benefits

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
  Local-area results use a separate, experimental file.
- Spending is an input; income is the result. Each household's spending by
  category sets its VAT and duties and its exposure to a price change. What
  the model computes is income after taxes and benefits.
- The AI study (slide 11) and the trade study's rerun (slides 13 and 14;
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

### 5. How the rules are encoded

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

### 6. Microcosm UK 2024–25: how the household file is built

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
- The trade study was run on earlier datasets, not on Microcosm UK; the AI
  study runs on Microcosm UK.
- Layout: a snake in two rows. Steps 1 to 3 run left to right, the path
  turns down, and steps 4 and 5 run right to left, ending at the result: the
  certified household file, Microcosm UK 2024–25.
- Builds: one step at a time along the path; the result appears with step 5.
- **Sources.** [Microcosm UK source
  stages](https://github.com/PolicyEngine/microcosm/blob/429d7a0de624332d3fc8a221d72bd8cb9f7211fe/packages/microcosm-build/src/microcosm/build/uk/source_stages.json);
  [Imputation
  method](https://github.com/PolicyEngine/microcosm/blob/429d7a0de624332d3fc8a221d72bd8cb9f7211fe/packages/microcosm-fit/README.md);
  [Microcosm data pipeline](https://github.com/PolicyEngine/microcosm).

### 7. Calibration: weights fitted to official statistics

- The certified national build of 7 November 2026, from its public dashboard
  and its diagnostics. The dashboard link is pinned to that build, so it
  keeps showing it when a newer release becomes the dashboard's default.
- Builds: first what goes in (the 1,514 targets and the 78.2k household
  records) beside the loss and the targets by publisher; then how the fitted
  weights do (98.7% within 10%, and the effective sample size).
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
- This is in-sample fit; the dashboard has no out-of-sample test for the UK.
- Effective sample size, the families, the saved step and the model year are
  from the certified build's diagnostics
  (`microcosm-uk-2024-25-national-20261107T020434Z-eeb6093e`). The solver
  settings in the code (429d7a0) match them.
- **The 1,514 targets, by publisher** (the stacked bar under the equation):
  HMRC 776, ONS 365, DWP 213, MHCLG 82 and 78 from ten other publishers.
- Taken off the deck in this version: the slide "What the weights are fitted
  to", a map of the same targets by publisher and by statistic. The live
  dashboard on the next slide shows that map, so the slide repeated it. Its
  counts, for questions:
- **HMRC, 776.** Survey of Personal Incomes 568 (incomes by band and region;
  360 of them are regional); capital gains tax 105; income tax liabilities
  84; and 19 more: Child Benefit 5, benefits in kind 5, salary sacrifice 7
  and Tax-Free Childcare 2.
- **ONS, 365.** Population 179 (by age and region); employment 159 (by
  occupation); household composition 22; land 3; consumer trends 2.
- **DWP, 213.** Universal Credit 103; State Pension 57; the two-child limit
  15; the benefit cap 14; Pension Credit 13; legacy benefits 8; Attendance
  Allowance 2; workplace pensions 1.
- **MHCLG, 82.** Council tax dwelling stock, by band.
- **Others, 78**, from ten publishers. OBR 16 (expenditure 12, receipts 4);
  Department for Transport 13 (local bus journeys 9, finances 4); Scottish
  Government 12 (council tax stock 9, local bus finances 2, social security
  1); Student Loans Company 12 (student support 6, repayments 4, borrowers
  2); Welsh Government 11 (council tax stock 10, local bus finances 1);
  Department for Education 8 (funded childcare); Northern Ireland bodies 5
  (Department for Communities 3, Department for Infrastructure 1, NI
  Transport Holding Company 1); Independent Schools Council 1.
- No target is by industry (slide 6).
- Three groupings of the same targets exist, and are not the same
  thing: the dashboard's browsing view shows 44 statistics; the solver's
  loss has 38 families, each with 1/38 of the weight; the counts above are
  the publisher-and-statistic groups of the dashboard's fit table.
- Source: the public calibration dashboard, pinned to the certified build,
  read on 16 November 2026.
- **Sources.** [Calibration dashboard, pinned to the 7 November
  build](https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk&release=microcosm-uk-2024-25-national/uk-frs-calibration-attempt-20261107T020434Z-eeb6093e);
  [Calibration
  method](https://github.com/PolicyEngine/microcosm/blob/429d7a0de624332d3fc8a221d72bd8cb9f7211fe/packages/microcosm-calibrate/README.md);
  [UK national solve
  settings](https://github.com/PolicyEngine/microcosm/blob/429d7a0de624332d3fc8a221d72bd8cb9f7211fe/packages/microcosm-build/src/microcosm/build/uk_runtime/national_doctrine.py).

### 8. What the weights are fitted to: the live calibration dashboard

- What the weights are fitted to, target by target. Scroll to the
  dashboard's calibration map: the same publishers and counts as the bar on
  the previous slide, with each statistic's fit.
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
  scroll when presenting, and a PDF export shows only the top of the page.
- The dashboard page names the Hugging Face dataset repository that holds
  the build and links to it; that repository is private, so the link does
  not open for the audience.
- The fit shown is in-sample (slide 7).
- Needs an internet connection.
- **Sources.** [Calibration dashboard, pinned to the 7 November
  build](https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk&release=microcosm-uk-2024-25-national/uk-frs-calibration-attempt-20261107T020434Z-eeb6093e).

### 9. What the UK model covers, and what is open

- The row under the cards is the short form of "Open code, restricted
  microdata, synthetic data" under "Backup material" below.
- Including how the model allocates business taxes to households.
- **Taxes on income.** Income tax, with Scottish rates; employee, employer
  and self-employed NI; capital gains tax.
- **Taxes on spending and property.** VAT; fuel, alcohol and tobacco duties;
  stamp duty and council tax.
- **Taxes on business.** Employer NI, with rate and threshold changes passed
  to employees' pay by default. Business rates and corporate stamp duty, as
  published totals allocated to shareholders. Corporation tax is not
  modelled, and the model has no firm entity (the "Outside the model" line
  on the card).
- **Benefits and other.** Universal Credit and legacy benefits; Child
  Benefit, Pension Credit, the State Pension; disability and Scottish
  benefits, childcare support.
- Business-tax changes estimated elsewhere can be allocated to households
  through shareholdings or consumption.
- **What is open** (the row under the cards). Code: the rules, the data
  pipeline and the analysis are open source. Household microdata: licensed
  survey records, so we share results as tables. Synthetic firms: for VAT
  costing, drawn from published tables, so they can be shared (a working
  paper).
- Taken off the deck in this version: the slide "What we have on the
  business side". Two of its three cards repeated the "Taxes on business"
  card above, and the third is the "Synthetic firms" item of the row under
  the cards and the project slide (slide 12). What it carried:
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
  firm and household data could be explored later (slide 20).
- The firm-level VAT microsimulation has its own slide (slide 12).
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

### 10. The Autumn Budget 2026 dashboard

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

### 11. Who bears the cost of an AI scenario?

- The post is live in the slide: "Who bears the AI shock? Distributional and
  fiscal incidence in the UK", PolicyEngine, 16 November 2026
  (policyengine.org/uk/research/uk-ai-study). The post's title is quoted as
  published; the slide's own words say "scenario". The full paper is on SSRN
  (Ahmadi 2026a).
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

### 12. How we built synthetic UK firms

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
  million" quoted in the notes for slide 9).
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

### 13. Who bears the cost of trade changes? Four UK episodes, 2021–26

- A working paper (Ahmadi 2026b; uk-trade-shock-study). The slide follows
  the study's rerun on Microcosm UK: pull request #46, head 778557c, which is
  open and not yet merged, so its figures can still change.
- Four UK trade events of 2021–26, traced to households:
  - the part of the food price rise that Bakker et al. (2023) attribute to
    post-Brexit trade barriers;
  - the 2022 energy price surge;
  - projected duty reductions from the UK–India agreement;
  - the 2025 US tariffs.
- The price changes come from published estimates; the tariff earnings
  change is built from an assumed elasticity (the tariff study, slide 14).
- The food and energy price rises were largest, as a share of spending, for
  lower-income deciles.
- The energy rise was offset in part by the Energy Price Guarantee and the
  Energy Bills Support Scheme. The earlier figure of "about 60% (49–64%)" is
  dropped: it came from the older run. The rerun reports a different
  measure: the Energy Price Guarantee absorbed 33.8% of the gross rise on a
  financial-year basis (46.2% as a point-to-point ratio of the price cap;
  PR #46, 778557c, `results/generated_multishock.tex`). Quote it only if
  asked, and as a figure from an open pull request.
- The study models no policy aimed at the food price rise; general
  cost-of-living payments cushioned it.
- Datasets (PR #46, 778557c): every microsimulation runs on policyengine[uk]
  6.20.0 (policyengine-uk 2.174.1) with the certified Microcosm UK 2024–25
  build. The energy episode uses the Microcosm UK 2024–25 households, held at
  2024–25 values, under the rules of 2022–23 and 2023–24; the tariff stage
  runs under 2026–27 rules. The earlier run (06c8bbc) used the enhanced FRS
  2023–24 and the survey-weighted FRS 2024–25.
- The figure file is the same at 06c8bbc and at PR #46 (778557c): the pull
  request did not change it. Check with the paper before describing the
  figure as the Microcosm UK run.
- **The figure** is the paper's: household incidence by income decile, as a
  share of each decile's spending, on a log scale, so it compares sizes, not
  signs. Costs are plotted as positive; the UK–India series ("India CETA")
  is a gain. "TCA food" is the post-Brexit food price episode. The energy
  episode is shown on its realised path and as the counterfactual that the
  Energy Price Guarantee displaced. The slide quotes no number from the
  figure.
- The fourth episode, the 2025 US tariffs, is the next slide.
- **The UK–India agreement** is the episode closest to a free trade
  agreement assessment: projected duty reductions passed to prices, then to
  each household's spending. Published assessments of trade agreements
  usually report GDP, an average real wage and sector and regional output;
  this path adds income deciles, poverty and tax and benefit effects, and
  could serve any trade agreement.
- **Sources.** [Ahmadi (2026b), trade
  study](https://github.com/PolicyEngine/uk-trade-shock-study); [Working paper
  figure, commit
  06c8bbc](https://github.com/PolicyEngine/uk-trade-shock-study/blob/06c8bbc/paper/figures/fig_incidence_profile.png).

### 14. The tariff study: from US tariffs to employees’ earnings

- The tariff stage of the trade working paper (slide 13); it is also the
  starting point for the first candidate pilot (slide 20).
- Builds: the bridge; then the cushion figures; then the bracket under the
  steps a trade model could replace.
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
- Results are for the tariff schedule before the US–UK Economic Prosperity
  Deal, on Microcosm UK at 2026 (policyengine[uk] 6.20.0, policyengine-uk
  2.174.1).
- These figures are from the study's open pull request #46 (head 778557c,
  `results/e3_constants.json`), not yet merged. They replace the earlier
  run's 43.7% and 35.4%.
- The deal's general terms (operative 8 May 2025) provide for a quota of
  100,000 UK vehicles at a 10% tariff and, subject to supply-chain
  conditions, a steel and aluminium quota at most-favoured-nation rates.
- The study's code includes a deal schedule, but we have no published results
  for it.
- The export-demand elasticity of 1 is a placeholder. A trade model's
  sector results could replace it and the two steps beside it.
- Tariff revenue is a fiscal channel the study does not model; it could
  come from the trade model.
- **Sources.** [Ahmadi (2026b), trade
  study](https://github.com/PolicyEngine/uk-trade-shock-study); [Economic
  Prosperity Deal: general
  terms](https://www.gov.uk/government/publications/us-uk-economic-prosperity-deal-epd/general-terms-for-the-united-states-of-america-and-the-united-kingdom-of-great-britain-and-northern-ireland-economic-prosperity-deal-web-accessible-v).

### 15. The Economic Prosperity Deal: from macro impacts to households

- One deal has macro impacts and household impacts. This slide is the
  end-to-end path; the tariff study (slide 14) and the linking slide (slide
  19) are its parts. Not built; no results yet. The slide is tagged "Not yet
  modelled"; the two pieces that are not built, the sector mapping and the
  feedback, each carry "Idea to explore".
- **Results for the deal (a trade or macro model).** Changes in output,
  employment and prices by sector, and wages by labour type, under the
  deal's tariff schedule, with the labour-market closure stated. A GTAP-style
  model has one wage per labour type, not per sector, and its standard
  closure fixes aggregate employment.
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
  macro–micro loop on slide 16.
- **The deal.** Its general terms became operative on 8 May 2025. They
  provide for a quota of 100,000 UK vehicles at a 10% tariff and, subject to
  supply-chain conditions, a steel and aluminium quota at most-favoured-nation
  rates.
- The trade study's code includes a deal schedule, but we have no published
  results for it. The study's results are for the schedule before the deal
  (slide 14).
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
- **Can we stand behind each box?** Checked on 16 November 2026 against the
  trade study's code (PR #46, 778557c) and policyengine-uk (d3db7ac).
  - Results for the deal: the other model's. PolicyEngine takes jobs,
    earnings and prices; it has no use for sector output, so the slide no
    longer lists it.
  - Sector mapping: not built (tagged "Not built yet"). No mapping from
    another model's sectors to SIC or COICOP exists in our code.
  - Assign to people, apply the rules: doable today for earnings changes and
    job losses by two-digit SIC division (`tariff_pipeline/shocks.py`,
    `apply_shocks`) and for price changes on spending categories the model
    holds (`uk_trade_shock_study/incidence.py`). Wages by labour type need a
    small extension (slide 19).
  - Household and fiscal results: existing outputs. Regions are the ITL1
    regions; local areas come from the experimental file.
  - Optional feedback to the macro model: an idea only, tagged so.
- **Sources.** [Economic Prosperity Deal: general
  terms](https://www.gov.uk/government/publications/us-uk-economic-prosperity-deal-epd/general-terms-for-the-united-states-of-america-and-the-united-kingdom-of-great-britain-and-northern-ireland-economic-prosperity-deal-web-accessible-v);
  [Ahmadi (2026b), trade
  study](https://github.com/PolicyEngine/uk-trade-shock-study);
  [policyengine.py](https://github.com/PolicyEngine/policyengine.py).

### 16. Links to macroeconomic models

- **A forecast scenario (mechanism built; not yet run).** PolicyEngine UK projects
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
- Builds: one route at a time.
- **Sources.** [PolicyEngine UK
  code](https://github.com/PolicyEngine/policyengine-uk); [Growth
  parameters](https://github.com/PolicyEngine/policyengine-uk/blob/d3db7ac07d3cc718400f38ba8ede429d38d6855e/policyengine_uk/parameters/gov/economic_assumptions/yoy_growth.yaml);
  [Mosley and Cornforth
  (2023)](https://www.lse.ac.uk/CFM/assets/pdf/CFM-Discussion-Papers-2023/CFMDP2023-16-Paper.pdf);
  [OG-UK](https://github.com/PSLmodels/OG-UK).

### 17. Business policy: from firm costs to households

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
- **Can we stand behind each box?** Prices by spending and pay and jobs by
  sector use what the code already takes (slide 19). Profits: PolicyEngine
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

### 18. Where an agent-based model could link

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
  claims, and tax and benefit receipts, by year. The slide gives the short
  form (incomes by decile and region; poverty and inequality; taxes and
  benefits by year); the full list of outputs is on slide 19.
- Trade flows and the response to tariffs stay in a trade model such as GTAP.
  PolicyEngine models no firm behaviour: it adds the tax and benefit rules
  and the households.
- Dosi et al. model technological change and cycles, not AI; a CGE run with
  technology sectors split out could also supply an AI scenario.
- Youngman et al.'s agent-based model cites our approach to under-sampled
  wealthy households; it uses neither our model nor our data.
- Builds: one question at a time; what PolicyEngine can report is shown from
  the start.
- A question to ask, not a claim: what does a supply-chain model report? A
  risk index would need a further step before it reaches households; jobs
  and earnings by sector could be passed in directly.
- **Can we stand behind "It could pass in"?** Checked on 16 November 2026
  against the trade study's code (PR #46, 778557c, `tariff_pipeline/shocks.py`
  and `runner.py`) and policyengine-uk (d3db7ac). Each input carries a tag.
  - Job and earnings losses by sector: can take today. `apply_shocks` takes
    employees with their two-digit SIC division and applies wage cuts or job
    losses by division. Region is reported in the results but is not an
    input, so losses by sector and region would be a small extension; the
    slide no longer says "and region".
  - Price changes by spending category; pay by sector: the model holds
    spending by category, and the trade study costs food and energy price
    changes by decile. The work is mapping the agent-based model's sectors
    to spending categories, hence "Needs a sector mapping".
  - Profits by sector are off the slide: not doable. PolicyEngine could take
    one economy-wide profit change and allocate it by shareholding.
  - Jobs and wages by sector, one year at a time: can take today; each year
    is a separate run, so a path is a series of runs.
- **Sources.** [Dosi, Fagiolo and Roventini
  (2010)](https://doi.org/10.1016/j.jedc.2010.06.018); [GTAP
  model](https://www.gtap.agecon.purdue.edu/models/cge_gtap_n.asp); [“Who
  bears the AI shock?”, PolicyEngine, 16 November
  2026](https://www.policyengine.org/uk/research/uk-ai-study); [Youngman et
  al. (2026)](https://arxiv.org/abs/2602.15607).

### 19. One way to link: tables in, tables out

- A starting point for discussion, not a commitment.
- One slide for how a model's results could reach people. It merges two
  earlier slides: "Disaggregation: how sector results reach people" and the
  earlier "One way to link: tables in, tables out". Each row is one kind of
  result, the code it would be mapped by (not built), the records
  PolicyEngine can assign it to, and what PolicyEngine can already report.
  The small line under each result names the kinds of model that report it:
  jobs by sector from a CGE trade model or an agent-based model (which can
  also give earnings by sector); wages by labour type from a CGE trade
  model; prices from trade and partial-equilibrium models. A CGE model of
  the GTAP kind has one wage per labour type, not per sector, and its
  standard closure fixes aggregate employment. A trade model with one
  economy-wide wage gives that wage and prices: the wage would apply to all
  employees, with no occupation mapping (said here, not on the slide).
- **Runs today** (the line under the rows). The trade study's code already
  takes earnings changes by two-digit SIC division and applies them to
  survey employees. The outputs on the right are existing policyengine.py
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
- PolicyEngine can already report (existing outputs; the right-hand column):
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
  closure. A trade model with one economy-wide wage: that wage, and prices.
  Partial-equilibrium models of goods sectors: product prices.
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
  Occupation comes from the survey's job record. This mapping is not built.
- **Prices.** Mapped to COICOP spending divisions, and assigned to each
  household's spending in that category.
- Then the tax and benefit rules are recomputed for every household, before
  and after.
- Today the trade study assigns earnings changes by two-digit SIC division. The
  survey's sample size limits sector detail.
- Breakdowns PolicyEngine can already report, in more detail:
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
  trade study's code (PR #46, 778557c), the AI study's code and
  policyengine-uk (d3db7ac). The tag in the third column says so.
  - Earnings and jobs by sector: can take today, once results are in
    two-digit SIC divisions (`apply_shocks`; `sic_industry_division` in the
    data). By region too would be a small extension.
  - Wages by labour type: a small extension. The model holds each worker's
    occupation as a SOC 2020 major group (`soc2020_major_group`), and the AI
    study assigns by occupation, but the trade study's code is keyed by
    sector only, and a map from a trade model's labour types to occupation
    groups does not exist.
  - Prices: can take today for the spending categories the model holds
    (`variables/input/consumption/`); the trade study applies price changes
    to food and energy spending.
  - "Mapped by" is tagged "Not built yet": the mapping from another
    model's sectors or products to SIC and COICOP is the work in every row.
  - Outputs: all existing; regions are ITL1; local areas are experimental.
- **Sources.**
  [policyengine.py](https://github.com/PolicyEngine/policyengine.py); [Ahmadi
  (2026b), trade study](https://github.com/PolicyEngine/uk-trade-shock-study);
  [GTAP model](https://www.gtap.agecon.purdue.edu/models/cge_gtap_n.asp).

### 20. Two candidate pilots

- For discussion: one scenario each, passed one way from another model to
  PolicyEngine. We have no published results for either. Nothing here is a
  commitment; each row says what a party could provide.
- **The Economic Prosperity Deal.**
  - A trade model could provide: changes in output, employment and prices by sector
    and wages by labour type under the deal's tariff schedule, with the
    labour-market closure stated.
  - PolicyEngine could provide: the sector mapping; household incomes by decile
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
- Builds: one pilot at a time.
- **Can we stand behind each line?** "A trade model could provide" now reads
  "jobs and prices by sector; wages by labour type": PolicyEngine has no use
  for sector output. What PolicyEngine could provide follows slides 15, 17
  and 19: the sector mapping is work to do; incomes, poverty and Exchequer
  cost are existing outputs; the BICS allocation needs the business-tax
  allocation extended to a non-tax measure.
- **Sources.** [Economic Prosperity Deal: general
  terms](https://www.gov.uk/government/publications/us-uk-economic-prosperity-deal-epd/general-terms-for-the-united-states-of-america-and-the-united-kingdom-of-great-britain-and-northern-ireland-economic-prosperity-deal-web-accessible-v);
  [BICS guidance for
  applicants](https://www.gov.uk/government/publications/british-industrial-competitiveness-scheme-business-guidance/british-industrial-competitiveness-scheme-guidance-for-applicants);
  [Ahmadi (2026b), trade
  study](https://github.com/PolicyEngine/uk-trade-shock-study); [PolicyEngine
  UK code](https://github.com/PolicyEngine/policyengine-uk).

### 21. Questions for discussion

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

The slide has six questions; the list above is the earlier five, with these
changes: question 2 now asks which model would supply the scenario and
under which closure; a new question 3 asks how a long-run result maps to
fiscal years; and the agent-based model question also asks what the model
reports. Two more to raise if time allows: tariff revenue as a fiscal
channel, and returns to capital.

Questions the audience is likely to ask, with short answers:
- **Static or behavioural?** Mostly static by default (slide 4). Labour
  supply responses can be switched on; firms' decisions and general
  equilibrium come from the other model.
- **Thin cells.** Sector-by-region cells have few survey records, so they
  carry sampling error; results by decile and region are more robust than
  results by sector and region (slide 19).
- **Spending baskets by income.** Spending by category comes from the
  Living Costs and Food Survey, imputed to the household file (slide 6), so
  a price change by COICOP division falls differently across deciles.
- **Running inside government.** The code is open, so a department could
  run it on its own data; the household microdata we use are
  licensed and stay with us, and the synthetic firm data can be shared
  (slide 9).

### 22. Thank you

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
- In the tariff study, whether a newly entitled family claims Universal
  Credit is also drawn, at the scenario's take-up rate.
- Every draw is a full run of the tax and benefit rules. Studies report the
  mean and the standard deviation across draws.
- 50 draws in the AI study's central scenario; 20 in the tariff study's
  rerun (PR #46, 778557c).
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
  notes for slide 11.
- The four trade episodes, with the energy offset and the datasets used, are
  in the notes for slide 13.
- What the UK model covers is slide 9 and its notes.
