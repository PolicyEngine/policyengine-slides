# Scottish Government presenter notes

Meeting: 9 October 2026. This follows the February deck (methodology, the
Enhanced FRS pipeline, Scotland calibration targets, the Scottish Budget
dashboard) and the March update (Spring Statement 2026, research from February
and March, the Claude plugin). Don't re-explain those; refer back to them.

About 23 minutes plus discussion: roughly 5 on part 1, 5 on part 2, 5 on part 3,
3 on part 4 and 5 on part 5.

## 1. Title

PolicyEngine: data pipeline, property income and Budget planning. Presenters:
Vahid Ahmadi, Max Ghenis and María Juaristi.

## 2. Today

Five parts: how we build Scotland's microdata, how we model property income, an
analysis example (a targeted energy bill discount), what we have published since
April, and the Autumn Budget plan.

## 3. Part 1: How we build the UK's microdata

## 4. From surveys to a population that represents the UK

Read left to right. Each box below is a stage; the grey box above it names the
data that feeds it.

1. Survey households: the Family Resources Survey 2024-25 gives people, families,
   earnings and benefits.
2. Add tax records: the Survey of Personal Incomes adds high incomes and income
   detail the survey misses.
3. Fill the gaps: wealth from the Wealth and Assets Survey, spending from the
   Living Costs and Food Survey, bus travel from the National Travel Survey and
   capital gains from HMRC statistics. Values are learned from similar
   households in those sources, which keeps the variation between households
   rather than giving everyone an average. This is statistical matching, not
   linking the same household across surveys.
4. Place in Scotland: each household is assigned a 2022 Output Area within its
   region, which gives its council area and Westminster constituency.
5. Match official totals: calibration changes how many real households each
   record represents. It doesn't change a record's income or circumstances.
   The weights are fitted to UK totals, including Scotland's own (next slide),
   so Scotland is represented within one UK dataset.

Keep the build machinery out of the explanation. If asked what changed since
February: the spine is FRS 2024-25, high incomes come from the SPI, and local
geography uses Scottish Output Areas with council and 2024 Westminster
constituency lookups. The Effects of Taxes and Benefits survey also feeds the
gap-filling stage (VAT and benefits in kind); it's left off the slide for space.

Sources: [UK build graph](https://github.com/PolicyEngine/microcosm/blob/75167a688ea83316654f1d794542124b4277bda9/docs/uk-full-build-graph.md),
[source manifest](https://github.com/PolicyEngine/microcosm/blob/75167a688ea83316654f1d794542124b4277bda9/packages/microcosm-build/src/microcosm/build/uk/spec/sources.yaml),
[geography assignment](https://github.com/PolicyEngine/microcosm/blob/75167a688ea83316654f1d794542124b4277bda9/docs/geography-assignment.md).
Layout adapted from the [IMA pipeline diagram](https://github.com/PolicyEngine/policyengine-slides/blob/main/slideshows/l0-ima-2026/components/PipelineDiagram.tsx).

## 5. The official Scottish totals we match

The live calibration dashboard slide was taken out on 9 October: its embed
showed "HF fetch failed 401" and a private dataset name. Don't open the
dashboard on the call or quote fit percentages.

1,915 target rows: 58 Scotland-wide, 831 across 32 council areas and 1,026
across 57 Westminster constituencies. These are target definitions, not a count
of targets that have passed a release check.

- Population by age: 9 age bands plus children under 16 and babies under 1
  Scotland-wide; 8 bands in each council and constituency (NRS estimates for
  Scottish areas).
- Universal Credit: Scotland-wide, the households with a child under 1; in
  constituencies, also by number of children.
- Council tax: dwellings by band A–H plus the total Scotland-wide; bands A–H by
  council. Band H has 31 council rows, the others 32.
- Taxpayers, income and income tax: ten income bands, Scotland-wide.
- Bus: passenger revenue and government support, from Scottish Transport
  Statistics.

These are Westminster constituencies, not Scottish Parliament constituencies.
Output Areas locate records; they aren't a target level.

To reproduce the counts, select reference rows whose ledger selector's
`geography_id` starts with `S`, then group by `geography_level` and family. Do
this separately in the national and local files.

Sources: [national targets](https://github.com/PolicyEngine/microcosm/blob/75167a688ea83316654f1d794542124b4277bda9/packages/microcosm-build/src/microcosm/build/uk/target_references.json),
[local targets](https://github.com/PolicyEngine/microcosm/blob/75167a688ea83316654f1d794542124b4277bda9/packages/microcosm-build/src/microcosm/build/uk/local_target_references.json).

## 6. Part 2: Modelling property income

## 7. Landlords' income, measured three ways

Read the waterfall left to right. It starts from HMRC's rent received by
individual landlords in 2024-25 and takes off one kind of cost at a time. The
three dark bars are the totals each source counts, all for 2024-25; the light
bars between them are what the next source leaves out.

- Rent received, £49.8bn: HMRC's property rental income statistics, before any
  costs.
- Less allowable expenses, £19.0bn: repairs, letting fees, insurance and other
  running costs come off before tax.
- Taxable profit, about £31bn: what the SPI records and income tax is charged
  on. It still includes mortgage interest.
- Less mortgage interest, £11.1bn: since 2020-21 it isn't deducted; it earns a
  20% tax reduction instead, rising to 22% from April 2027. That leaves £19.8bn
  of profit after all costs, which no source publishes directly.
- Less capital repaid, and coverage, £4.4bn: the gap between that £19.8bn and
  the survey's total. Part is the mortgage capital the survey also takes off;
  part is landlords and rent the survey doesn't capture. The two can't be
  separated from published figures.
- Rent after mortgage payments, £15.4bn: what the FRS asks for. Landlords give
  rent "after paying for" the items on show card K6: mortgage payments,
  repairs, loan interest, rent, rates and insurance, legal costs and services.
  This is the FRS 2024-25 grossed up: 1,022 adults reporting a profit, 1.75m
  landlords. Reported losses (£0.3bn, 67 adults) and sub-letting rent (£0.5bn)
  are left out; net of losses it is £15.1bn.

The Enhanced FRS scaled SPI profit up to HMRC's rent received, so it modelled
rent before expenses as taxable profit (about £55bn against roughly £31bn).

If asked what today's data hold: Microcosm #1106 (5 October, the day after
the certified national release) says that release binds no property-income
target and its property income sits close to the raw FRS, which is likely too
low for landlords. Microcosm #1145, the next slide, is the fix and is still a
draft. If asked whether earlier published results were affected: analyses on
the Enhanced FRS carried the overstatement; check which dataset a given
dashboard used before answering for it.

The "about £31bn" is HMRC's rent received less the expenses other than mortgage
interest. The SPI's own published figure is £29.35bn for 2023-24, about £31.8bn
uprated to 2025, so the two agree. The bar under the SPI label shows the
HMRC-derived £31bn, and its note gives the SPI's own £29.4bn. Slide 8 explains how we build each piece.

HMRC publishes individuals' rent received (£49.81bn) and total expenses
(£30.03bn). Mortgage interest is published for all landlords (£12.82bn of
£34.75bn of expenses), so the £11.1bn is pro-rated by individuals' share of
expenses.

Sources: [HMRC property rental income statistics 2026](https://www.gov.uk/government/statistics/property-rental-income-statistics/property-rental-income-statistics-2026),
[Microcosm #1106](https://github.com/PolicyEngine/microcosm/issues/1106).

## 8. How we build landlords' income, step by step

Two lanes merge. The top lane is landlords in the household survey; the bottom
lane is copies of survey households that carry incomes from tax records. Each
box names the data that informs it.

1. FRS households: survey landlords report their rent after mortgage payments
   (show card K6 nets mortgage interest and capital). A reported loss counts as
   zero.
2. Copy households: 10,000 survey households are copied at random to carry
   tax-record incomes, and they take half the population weight of working-age
   households (a fifth for pension-age ones). Extra copies hold the incomes over
   £200,000, sized to HMRC's taxpayer counts for those bands.
3. Draw tax-record incomes: each adult in a copy gets a full set of incomes,
   including property profit and finance costs, from SPI taxpayers of a similar
   age, sex and region (a quantile regression forest). Survey records keep their
   own reported incomes.
4. Add back mortgage interest: survey landlords get finance costs from SPI
   landlords with a similar profit and age: whether they have any follows the
   SPI's share in their profit band, and the amount comes from a second model.
   The interest is added back to their profit, so the model relieves it once,
   as the tax reduction. Mortgage capital stays netted.
5. Rent received: every landlord with a profit, from either lane, is ranked by
   profit and placed into HMRC's bands of rent received, keeping HMRC's share of
   landlords in each band. Expenses are rent received less profit.
6. Calibrate weights: the national calibration matches the SPI's number of
   landlords and their property income by total-income band (2023-24 tables,
   unscaled). HMRC's rental statistics are a check, not a target: binding them
   pulled the SPI amounts out of line in the test builds.
7. Compute tax: policyengine-uk applies the rules: Scottish rates for Scottish
   taxpayers, the £1,000 allowance or actual expenses (not both), and a 20% tax
   reduction on finance costs (22% from April 2027).

In the test build of the final head (not a release), at calibrated weights:
rent received is £45.7bn against HMRC's £49.8bn for individuals, finance costs
£10.6bn against £11.1bn, and 2.77m landlords against 2.85m. The tax reduction
comes to about £1.9bn for 1.0m landlords in 2025.

The model change (policyengine-uk #2172, released in 2.123.0) is merged. The
data change (Microcosm #1145) is a draft and details may change: whether the
survey add-back stays and whether it extends to reported losses (both put to
Max), how the open top band of rent received is set, and how landlords without
profit are treated.

On Scotland: the GOV.UK rate table is marked as not applying to Scotland. In the
model, Scottish taxpayers' property income is taxed at the ordinary Scottish
rates, and finance-cost relief uses the single UK property basic rate. Don't say
anything about Scotland setting its own property rates; we have not checked
that.

Sources: [Microcosm #1145](https://github.com/PolicyEngine/microcosm/pull/1145),
[policyengine-uk #2172](https://github.com/PolicyEngine/policyengine-uk/pull/2172),
[GOV.UK rates paper](https://www.gov.uk/government/publications/changes-to-tax-rates-for-property-savings-dividend-income/changes-to-tax-rates-for-property-savings-dividend-income).

## 9. Part 3: An analysis example

## 10. A targeted energy bill discount

The Resolution Foundation's flat option from
[Billing me softly](https://www.resolutionfoundation.org/publications/billing-me-softly/):
£175 a year for households in Great Britain that receive a means-tested benefit
(the Warm Home Discount list), or where no member has taxable income of £24,000
or more. 2026-27, on the Microcosm UK national release with policyengine-uk
2.102.3, as the dashboard shows by default.

- GB: £2.09bn for 11.95m households (42% of 28.6m).
- Scotland: 1.16m of 2.66m households (44%) receive support, £204m or about a
  tenth of the GB cost. 24% qualify through a benefit and 20% through the income
  test alone.
- Left chart: share of households eligible by region, split by route and sorted
  by the total. The North East is highest (55%); London is lowest (35%), where
  the income test reaches only 6% beyond those on benefits.
- Right chart: average gain per household for each tenth of Scotland's people,
  ranked by household income after housing costs, adjusted for household size.
  Averages include households that get nothing, so they track the share
  reached: 94% of the lowest tenth (£164 on average) and 3% of the highest (£6).

The Scottish deciles are computed for this slide from the same run as the
dashboard (validated against the published GB deciles and Scotland's region
row); the dashboard itself shows GB deciles. Each Scottish decile rests on an
effective sample of 38 to 102 households, so quote the shape rather than single
pounds.

The dashboard also has the tiered option, a £2bn budget version, a bill-share
version and a household calculator.

Sources: [dashboard](https://www.policyengine.org/uk/targeted-energy-discount),
[analysis at uk-energy-reforms 14bf3b0](https://github.com/PolicyEngine/uk-energy-reforms/tree/14bf3b0afc121b092bbd7545c9fb4963e8ab5c72/analyses/rf-billing-me-softly).

## 11. Part 4: Published work since April

## 12. Energy and the cost of living

Each card opens the live dashboard. The energy work builds up from the April
price-shock analysis. The electricity VAT cut was analysed before the
government enacted it from 1 October 2026, and it applies in Scotland. The
targeted discount card is the analysis from part 3.

## 13. Work, benefits and new shocks

CliffWatch is a tool officials can use directly. The land value tax post
(Progress and Poverty, 4 June 2026) used PolicyEngine to model replacing council
tax with a flat land value tax, which is relevant to Scotland's council tax
reform debate. The Scotland income tax reform
dashboard (1 April) is just outside the six-month window but is our most recent
Scotland-specific work, so it has its own card. The two employer NICs
dashboards and the research library are linked in the line under the cards.
The bus fare cap and free childcare work is England only, so it's left off.

Source: [UK research library](https://www.policyengine.org/uk/research).

## 14. Part 5: Plan for the Autumn Budget

## 15. Where we are starting

Show the 2025 dashboard as the base we are building on; click through if there
is time. Don't re-present its 2025 results.

The [Autumn Budget 2025 in review project](https://github.com/PolicyEngine/autumn-budget-2025-in-review)
adds comparisons with other published costings, worked household examples and
a timeline of when analysis appeared. The slide previews both dashboards; click
either card to open it. The review's repository is in the sources line. This
provides a starting point for checking and improving the 2026 workflow.

Sources: [2025 dashboard](https://www.policyengine.org/uk/autumn-budget-2025),
[2025 in review dashboard](https://autumn-budget-2025-in-review.vercel.app/uk/autumn-budget-2025-in-review).

## 16. How Budget day will run

The development repository still contains the inherited 2025 measures. This
is a plan, not completed 2026 analysis.

## 17. Thank you
