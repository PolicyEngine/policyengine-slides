# Scottish Government presenter notes

Meeting: 9 October 2026. This follows the February deck (methodology, the
Enhanced FRS pipeline, Scotland calibration targets, the Scottish Budget
dashboard) and the March update (Spring Statement 2026, research from February
and March, the Claude plugin). Don't re-explain those; refer back to them.

About 20 minutes plus discussion: roughly 9 on section 1, 5 on section 2 and 6
on section 3.

## 1. Title

PolicyEngine: data pipeline, property income and Budget planning. Presenters: Vahid Ahmadi, Max Ghenis, María Juaristi
and María Juaristi.

## 2. Today

Section 1 is the new data pipeline and the property income work. Section 2 is
what we have published since April. Section 3 is the Autumn Budget plan and
what would help from the Scottish Government.

## 3. From the Enhanced FRS to Microcosm UK

Set this against the February flowchart. The big changes:

- the newer survey year and donors;
- high incomes now come from a separate SPI support channel, not two stacked
  copies of the FRS;
- local geography comes from placing each household copy in a small census
  area, instead of fitting 650 separate constituency weight sets;
- every target statistic comes through Chronicle with its source recorded;
- releases are versioned and certified.

Sources: [UK build graph](https://github.com/PolicyEngine/microcosm/blob/75167a688ea83316654f1d794542124b4277bda9/docs/uk-full-build-graph.md),
[source manifest](https://github.com/PolicyEngine/microcosm/blob/75167a688ea83316654f1d794542124b4277bda9/packages/microcosm-build/src/microcosm/build/uk/spec/sources.yaml),
[geography assignment](https://github.com/PolicyEngine/microcosm/blob/75167a688ea83316654f1d794542124b4277bda9/docs/geography-assignment.md).

## 4. Scotland in the new build

This replaces the February slide with 1,428 targets. The 58 national Scottish
targets are at geography S92000003 in the national register. Locally, council
tax bands A–H are targeted by council area. Scottish households are placed in
2022 Scottish Output Areas (Data Zones are Northern Ireland, not Scotland).

If asked for local fit figures: there are none to quote yet. The local release
has not been certified.

Sources: [national targets](https://github.com/PolicyEngine/microcosm/blob/75167a688ea83316654f1d794542124b4277bda9/packages/microcosm-build/src/microcosm/build/uk/target_references.json),
[local targets](https://github.com/PolicyEngine/microcosm/blob/75167a688ea83316654f1d794542124b4277bda9/packages/microcosm-build/src/microcosm/build/uk/local_target_references.json).

## 5. Checked before release

The national release (`microcosm_uk_2024_25.h5`) was certified on 4 October
2026 and is already used in our childcare and energy analyses. The local
release is still going through the checks; its first full build on 6 October
was held back by them.

The two comparisons come from the certified national release. Don't quote
VAT or fuel duty totals from it: both are being fixed in open policyengine-uk
pull requests.

Source: [release certification runbook](https://github.com/PolicyEngine/microcosm/blob/75167a688ea83316654f1d794542124b4277bda9/docs/uk-national-release-assembly-runbook-806.md).

## 6. Property income: three sources, three concepts

HMRC's property rental income statistics report rent before expenses. The SPI
reports profit after expenses but before residential finance costs, which since
2020-21 get a 20% tax reduction instead of a deduction. The FRS reports rent net
of mortgage payments. The Enhanced FRS scaled the SPI up to the gross HMRC
figure, so it modelled a gross concept as if it were taxable profit.

Sources: [Microcosm #1106](https://github.com/PolicyEngine/microcosm/issues/1106),
[HMRC property rental income statistics 2026](https://www.gov.uk/government/statistics/property-rental-income-statistics/property-rental-income-statistics-2026).

## 7. Property income: what we are changing

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

## 8. Energy and the cost of living

Each card opens the live dashboard. The energy work builds up from the April
price-shock analysis. The electricity VAT cut was analysed before the
government enacted it from 1 October 2026, and it applies in Scotland.

## 9. Work, benefits and new shocks

CliffWatch is a tool officials can use directly. The UC rebalancing analysis
interacts with the Scottish Child Payment. The Scotland income tax reform
dashboard (1 April) is just outside the six-month window but is our most recent
Scotland-specific work, so it has its own card. The two employer NICs
dashboards and the research library are linked in the line under the cards.
The bus fare cap and free childcare work is England only, so it's left off.

Source: [UK research library](https://www.policyengine.org/uk/research).

## 10. Where we start: the 2025 dashboard

Show the 2025 dashboard as the base we are building on; click through if there
is time. Don't re-present its 2025 results.

Source: [2025 dashboard](https://www.policyengine.org/uk/autumn-budget-2025).

## 11. Autumn Budget 2026: what is new

The new parts
are the data, local results once the local release passes its checks, a short
method note for the constituency figures, and a Scotland view.

Sources: [2026 development repository](https://github.com/PolicyEngine/uk-autumn-budget-dashboard-2026/tree/eb77d72b5e353b0cb85fecaf806f3a081753bbfa),
[method note draft, Microcosm #1131](https://github.com/PolicyEngine/microcosm/issues/1131).

## 12. How Budget day will run

The development repository still contains the inherited 2025 measures. This
is a plan, not completed 2026 analysis.

## 13. Where your input would help

Use this to open the discussion. Note any Scottish benchmarks, breakdowns or
scenarios they name, and any council-area statistics we could calibrate to.

## 14. Thank you
