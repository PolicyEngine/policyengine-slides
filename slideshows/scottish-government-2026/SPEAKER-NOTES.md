# Scottish Government presenter notes

Meeting: 9 October 2026. This short deck can support a 15–20 minute presentation
with additional discussion. Adapt the timing to the meeting agenda.

## 1. PolicyEngine and the Scottish Government

Introduce the update around the data behind UK analysis and preparation for
the next fiscal event. The three requested topics are Microcosm UK, property
income and Autumn Budget 2026. Finish with recent UK research.

## 2. Today's discussion

Spend most of the methodology time on the population build and how it supports
Scotland analysis. The property-income section remains a placeholder until its
modelling PR supplies the approved explanation and evidence.

## 3. The Microcosm UK pipeline

The Frame carries people, benefit units and households with explicit links and
weights. Assemble the FRS spine, enrich it from donor sources, assign geography,
calibrate the representation and evaluate build checks. The stages share a
reproducible executable graph.

The dense/local and national release roles use the same driver but select
different documented contracts. Do not describe them as identical target
surfaces or imply that implementing the graph certifies a new release.

Sources: [UK build graph](https://github.com/PolicyEngine/microcosm/blob/e3e3d881f0fdaf8d4796dea25ed4b72deb52cb6e/docs/uk-full-build-graph.md),
[architecture](https://github.com/PolicyEngine/microcosm/blob/e3e3d881f0fdaf8d4796dea25ed4b72deb52cb6e/DESIGN.md).

## 4. The UK data sources

The current FRS pin is 2024–25. The release pin identifies SPI 2022–23, WAS
round 8 and LCFS 2023–24 as donor vintages. These differ from the February demo.
Each source supplies a particular part of the population or its evidence.
Licensed microdata supplies records and conditional relationships. Public
administrative statistics supply calibration targets through Chronicle.

Sources: [FRS release pin](https://github.com/PolicyEngine/microcosm/blob/e3e3d881f0fdaf8d4796dea25ed4b72deb52cb6e/packages/microcosm-build/src/microcosm/build/uk/frs_release.json),
[UK source manifest](https://github.com/PolicyEngine/microcosm/blob/e3e3d881f0fdaf8d4796dea25ed4b72deb52cb6e/packages/microcosm-build/src/microcosm/build/uk/spec/sources.yaml).

## 5. Enriching the survey population

Distinguish support from representation. Adding income support gives the
calibrator household profiles it can assign weight to. Changing weights alone
cannot create a missing household profile.

Conditional imputation learns distributions using variables shared between
donor and recipient surveys. Drawing from those distributions retains more
variation than assigning a conditional mean. Microcosm's fit operators consume
weights. Not every UK transfer uses the same estimator, so avoid describing
every stage as a quantile forest.

The income support channel also refreshes related household inputs. Keep
property-income implementation details for the reserved slide.

Sources: [UK source manifest](https://github.com/PolicyEngine/microcosm/blob/e3e3d881f0fdaf8d4796dea25ed4b72deb52cb6e/packages/microcosm-build/src/microcosm/build/uk/spec/sources.yaml),
[architecture](https://github.com/PolicyEngine/microcosm/blob/e3e3d881f0fdaf8d4796dea25ed4b72deb52cb6e/DESIGN.md).

## 6. Scotland in a coherent UK population

The dense build assigns one atomic area per household within its FRS region.
For Scotland this is a 2022 Census Output Area. Versioned mappings derive
larger geographies from that area. This preserves geographic nesting.

The dense build defaults to all applicable geographic targets together.
Country-only targeting requires an explicit selector. The number of geographic
copies, output size and target scope are separate settings.

Scotland analysis uses the relevant geographic population with the Scottish
rules in the tax-benefit model. Explain this as the implemented data design.
Local results require their own candidate validation and release evidence.

Source: [UK build graph](https://github.com/PolicyEngine/microcosm/blob/e3e3d881f0fdaf8d4796dea25ed4b72deb52cb6e/docs/uk-full-build-graph.md).

## 7. Calibration and release checks

Explain how a user can trace an estimate to the data cut and rules version.
The source pins, linked entities and stage reports give build evidence.
Per-target diagnostics expose the calibration fit. Candidate comparisons must
name their scored surface and excluded measures.

The national release-cut workflow compares a candidate with its pinned
incumbent, certifies it and verifies the candidate, spine and diagnostic hashes
before packaging. An inspectable release and promotion to the latest production
release are separate steps.

Calibration measures fit to selected evidence. It does not establish all joint
distributions or every reform's accuracy. Avoid claiming an improvement without
a measured comparison of the relevant candidate and incumbent.

Sources: [UK build graph](https://github.com/PolicyEngine/microcosm/blob/e3e3d881f0fdaf8d4796dea25ed4b72deb52cb6e/docs/uk-full-build-graph.md),
[release assembly runbook](https://github.com/PolicyEngine/microcosm/blob/e3e3d881f0fdaf8d4796dea25ed4b72deb52cb6e/docs/uk-national-release-assembly-runbook-806.md).

## 8. Property income

Reserved for the in-flight modelling PR. Before presenting this section, replace
the placeholder with the approved source mapping, tax-benefit treatment and
relevant validation or household example from that PR. Do not infer its design
or results from the older Budget dashboard.

## 9. The Autumn Budget 2025 foundation

The screenshot shows the live dashboard captured on 8 October 2026. Use it to
explain the connection between selecting measures and viewing population or
personal impacts. Open the linked dashboard if a live demonstration is useful.

The interface supports fiscal comparisons across years, distributional
breakdowns and constituency results. Its 2025 package and estimates are
historical context. They do not describe a newly announced 2026 package.

Source: [2025 dashboard](https://www.policyengine.org/uk/autumn-budget-2025).

## 10. Autumn Budget 2026 plan

The 2026 repository has started work on the successor dashboard and currently
retains measures and data from 2025. Describe the slide as a proposed delivery
sequence for discussion, without committing to an unverified timetable.

Before the Budget, prepare the baseline and model/data pins. On Budget day,
encode the published rules and check policy timing and scope. Release results
as they clear review. Compare with official costings on a matching policy,
period and baseline, and explain material differences.

Sources: [2026 repository at the reviewed commit](https://github.com/PolicyEngine/uk-autumn-budget-dashboard-2026/tree/eb77d72b5e353b0cb85fecaf806f3a081753bbfa),
[2025 dashboard](https://www.policyengine.org/uk/autumn-budget-2025).

## 11. The Scotland view for Budget 2026

Discuss priorities for the proposed Scotland view: income deciles, family types,
child poverty and interactions with devolved rules. Separate household effects
in Scotland from UK-wide fiscal effects. A microsimulation of household tax
and benefit changes does not itself provide a Scottish Government funding
settlement or Barnett consequential estimate.

Use local results only where their data and geographic scope pass validation.
The existing Scotland income-tax analysis demonstrates a related policy
question, rather than evidence that these new Budget outputs are delivered.
Invite the team to identify the most useful breakdowns and official benchmarks.

Sources: [2026 repository](https://github.com/PolicyEngine/uk-autumn-budget-dashboard-2026/tree/eb77d72b5e353b0cb85fecaf806f3a081753bbfa),
[Scotland income-tax analysis](https://www.policyengine.org/uk/scotland-income-tax-reform).

## 12. Recent UK research

This is intentionally the final slide. The research library combines articles
with interactive studies. Summarise the questions analysed rather than reading
every link. Dates below are the publication dates in the website indexes.

- Energy and living standards: [targeted energy discount](https://www.policyengine.org/uk/targeted-energy-discount)
  (5 October), [Middle East war and UK living standards](https://www.policyengine.org/uk/middle-east-war-living-standards)
  (25 September) and [temporary electricity VAT cut](https://www.policyengine.org/uk/electricity-vat-cut)
  (21 July).
- Childcare: [free hours and a 75% subsidy](https://www.policyengine.org/uk/free-childcare-reform)
  (3 September). This describes a policy scenario, not an estimated fiscal result.
- Work incentives: employer NICs exemptions for [young workers](https://www.policyengine.org/uk/young-worker-nics)
  (9 July) and [recently inactive workers](https://www.policyengine.org/uk/nics-exemption-inactive-employees)
  (13 July).
- Household interactions: [CliffWatch](https://www.policyengine.org/uk/uk-cliff-watch)
  (26 June) and the [marriage calculator](https://www.policyengine.org/uk/marriage)
  (11 September). The latter compares living together with separate households.
- AI: [distributional and fiscal incidence of AI shocks](https://www.policyengine.org/uk/research/uk-ai-study)
  (4 August). Results depend on assumed employment, wage and capital shocks.
- Benefits and transport: [UC rebalancing](https://www.policyengine.org/uk/uc-rebalancing)
  and [fuel-duty rise cancellation](https://www.policyengine.org/uk/cancelling-fuel-duty-rise)
  (both 1 June), plus the [£2 bus fare cap](https://www.policyengine.org/uk/bus-fare-cap)
  (23 July). The bus policy applies to England outside London. These studies
  inform the discussion without implying that every policy applies to Scotland.

Metadata sources: [apps index](https://github.com/PolicyEngine/policyengine-app-v2/blob/c83e129de5b14c0972f3070617490e8100e8fcc8/app/src/data/apps/apps.json),
[posts index](https://github.com/PolicyEngine/policyengine-app-v2/blob/c83e129de5b14c0972f3070617490e8100e8fcc8/app/src/data/posts/posts.json).
