# Scottish Government presenter notes

Meeting: 9 October 2026. This follows the February deck (methodology, the
Enhanced FRS pipeline, Scotland calibration targets, the Scottish Budget
dashboard) and the March update (Spring Statement 2026, research from February
and March, the Claude plugin). Don't re-explain those; refer back to them.

About 20 minutes plus discussion: roughly 9 on section 1, 5 on section 2 and 6
on section 3.

## 1. Title

PolicyEngine: data pipeline, property income and Budget planning. Presenters:
Vahid Ahmadi, Max Ghenis and María Juaristi.

## 2. Today

Section 1 is the new data pipeline and the property income work. Section 2 is
what we have published since April. Section 3 is the Autumn Budget plan,
building on the 2025 dashboard.

## 3. Building a population that represents Scotland

Explain the purpose in three steps: start with household survey information,
fill gaps from other sources, and match the population to official Scottish
totals. The output supports comparisons of how policy affects different
households across Scotland. Keep the build machinery out of the main explanation.

If asked about the update since February: the spine is FRS 2024-25, high-income
support includes SPI records, and local geography uses Scottish Output Areas
with council and 2024 Westminster constituency lookups.

Sources: [UK build graph](https://github.com/PolicyEngine/microcosm/blob/75167a688ea83316654f1d794542124b4277bda9/docs/uk-full-build-graph.md),
[source manifest](https://github.com/PolicyEngine/microcosm/blob/75167a688ea83316654f1d794542124b4277bda9/packages/microcosm-build/src/microcosm/build/uk/spec/sources.yaml),
[geography assignment](https://github.com/PolicyEngine/microcosm/blob/75167a688ea83316654f1d794542124b4277bda9/docs/geography-assignment.md).

## 4. Filling the gaps for Scottish households

The FRS describes household income and family circumstances, but it cannot
measure every quantity used in policy analysis. We learn missing information
from the source that measures it: SPI tax records for detailed income, the Wealth
and Assets Survey for wealth, and the Living Costs and Food Survey for spending.
Comparable household characteristics connect the statistical information; this
is not a claim that the same identifiable household is linked across surveys.

The diagram is conceptual. It does not say that tax records, wealth and spending
all enter through an identical technical process. In particular, the SPI also
provides a separate high-income support channel. For the audience, the key point
is that we preserve differences between households rather than substituting one
average for everyone.

Sources: the pinned source manifest and UK build graph linked on slide 3.
Diagram inspiration: [IMA donor fusion](https://github.com/PolicyEngine/policyengine-slides/blob/main/slideshows/l0-ima-2026/components/DonorFusion.tsx).

## 5. Making the sample represent Scotland

Calibration changes how many real households a model record represents. It
does not change that record's income, family circumstances or benefit rules.
The household symbols illustrate reweighting; their relative sizes are not
actual weights or a statement about which Scottish households were undercounted.

Official population, income, benefit and housing totals anchor the fit. Scotland
and its local areas have different evidence available, so the next slide names
the target families at each level. The local-area release is still under validation;
this diagram explains the method, not a certified local fit result.

## 6. Scottish calibration targets at three levels

The national register has 58 Scotland-wide rows at `S92000003`. The local register
has 831 rows across 32 Scottish council areas and 1,026 across 57 Scottish
Westminster constituencies. These are target definitions, not a count of targets
that have passed a release check.

- Scotland: population by age (including babies and children); taxpayers, income
  and income tax in ten income bands; Scottish Child Payment spending; State
  Pension recipients; council-tax stock; capital gains; bus support; and UC
  households with a baby.
- Councils: population by age, household counts and tenure; employment and
  self-employment income amounts and recipient counts; UC household counts;
  and council-tax dwellings by band. Band H has 31 rows, while bands A–G have 32.
- Westminster constituencies: population by age and household counts;
  employment and self-employment income amounts and recipient counts;
  UC household counts, including by number of children.

These are Westminster constituencies, not Scottish Parliament constituencies.
Output Areas locate records and aggregate to these areas; they are not another
target level claimed on this slide. The target-family lists are grouped for
readability, rather than exhaustive lists of individual reference rows.

To reproduce the counts, select reference rows whose ledger selector's
`geography_id` starts with `S`, then group by `geography_level`. Count distinct
IDs for the number of areas. Do this separately in the national and local files.

Sources: [national targets](https://github.com/PolicyEngine/microcosm/blob/75167a688ea83316654f1d794542124b4277bda9/packages/microcosm-build/src/microcosm/build/uk/target_references.json),
[local targets](https://github.com/PolicyEngine/microcosm/blob/75167a688ea83316654f1d794542124b4277bda9/packages/microcosm-build/src/microcosm/build/uk/local_target_references.json).

## 7. Checking the fit to Scottish statistics

The embedded [live UK diagnostics dashboard](https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk)
lets us compare model totals with official targets. Open it in a separate tab
if a larger view helps. Discuss Scotland's population, income and benefit
targets, rather than a UK-wide headline alone. Select the appropriate release
and keep national and local results separate.

On 8 October 2026 the page permitted embedding, but its UK release and summary
endpoints returned HTTP 502. Check the live data before presenting. If they
remain unavailable, use the preceding target inventory and avoid quoting fit
percentages. The deck's next-slide button works when focus is inside the iframe.

Release checks remain in the background: target fit, effective samples in
constituencies, held-out evidence, and limits on weight changes.
Source: [release certification runbook](https://github.com/PolicyEngine/microcosm/blob/75167a688ea83316654f1d794542124b4277bda9/docs/uk-national-release-assembly-runbook-806.md).

## 8. Property income: three sources, three concepts

HMRC's property rental income statistics report rent before expenses. The SPI
reports profit after expenses but before residential finance costs, which since
2020-21 get a 20% tax reduction instead of a deduction. The FRS reports rent net
of mortgage payments. The Enhanced FRS scaled the SPI up to the gross HMRC
figure, so it modelled a gross concept as if it were taxable profit.

Sources: [Microcosm #1106](https://github.com/PolicyEngine/microcosm/issues/1106),
[HMRC property rental income statistics 2026](https://www.gov.uk/government/statistics/property-rental-income-statistics/property-rental-income-statistics-2026).

## 9. Property income: what we are changing

The model change (policyengine-uk #2172) is merged. The data change (Microcosm
#1145) is a draft: its numbers are from a test build, not a release, and a few
decisions are still open, such as whether HMRC's lowest receipts band is used.

On Scotland: the GOV.UK rate table is marked as not applying to Scotland. In the
model, Scottish taxpayers' property income is taxed at the ordinary Scottish
rates, and finance-cost relief uses the single UK property basic rate. Don't say
anything about Scotland setting its own property rates; we have not checked
that.

Sources: [policyengine-uk #2172](https://github.com/PolicyEngine/policyengine-uk/pull/2172),
[Microcosm #1145](https://github.com/PolicyEngine/microcosm/pull/1145),
[GOV.UK rates paper](https://www.gov.uk/government/publications/changes-to-tax-rates-for-property-savings-dividend-income/changes-to-tax-rates-for-property-savings-dividend-income).

## 10. Energy and the cost of living

Each card opens the live dashboard. The energy work builds up from the April
price-shock analysis. The electricity VAT cut was analysed before the
government enacted it from 1 October 2026, and it applies in Scotland.

## 11. Energy cap analysis

Presenter placeholder. Add the scenario, Scottish results and a distributional
chart later. The slide intentionally contains no estimates or assumed policy
design.

## 12. Work, benefits and new shocks

CliffWatch is a tool officials can use directly. The UC rebalancing analysis
interacts with the Scottish Child Payment. The Scotland income tax reform
dashboard (1 April) is just outside the six-month window but is our most recent
Scotland-specific work, so it has its own card. The two employer NICs
dashboards and the research library are linked in the line under the cards.
The bus fare cap and free childcare work is England only, so it's left off.

Source: [UK research library](https://www.policyengine.org/uk/research).

## 13. Where we are starting

Show the 2025 dashboard as the base we are building on; click through if there
is time. Don't re-present its 2025 results.

The [Autumn Budget 2025 in review project](https://github.com/PolicyEngine/autumn-budget-2025-in-review)
adds comparisons with other published costings, worked household examples and
a timeline of when analysis appeared. The slide links both its public dashboard
and repository. This provides a starting point for checking and improving the
2026 workflow.

Sources: [2025 dashboard](https://www.policyengine.org/uk/autumn-budget-2025),
[2025 in review dashboard](https://autumn-budget-2025-in-review.vercel.app/uk/autumn-budget-2025-in-review).

## 14. How Budget day will run

The development repository still contains the inherited 2025 measures. This
is a plan, not completed 2026 analysis.

## 15. Thank you
