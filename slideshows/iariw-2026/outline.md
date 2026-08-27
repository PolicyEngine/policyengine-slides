# IARIW 2026 workshop talk — outline

**From open models to executable law: PolicyEngine and Axiom**
Thursday 27 August 2026, 14:40–15:30 (~45 min + questions), Room P02, UCLouvain Saint-Louis, Brussels.
Workshop: "New technologies for evidence-based policy making" (co-located with the 39th IARIW General Conference), co-organized by Tom Truyts (CAPE, UCLouvain Saint-Louis) and Max Ghenis (PolicyEngine).

## Context

- Tom Truyts presents BEAMM (Belgium's open microsimulation platform) 13:45–14:35, immediately before.
  Do not re-explain tax-benefit microsimulation. Build on Tom's talk explicitly: "Tom just showed you
  the platform; here's where the stack is heading."
- Audience: IARIW measurement economists (DINA/national-accounts crowd), Belgian officials
  (Koen Algoed — Director General, Budget and Finance, Flemish Region; Jean-Baptiste Traversa —
  head of microsimulation modelling, FPS Finance), Hélène Latzer (UCLouvain, moderates the 16:00
  roundtable on AI tools entering public administrations), CAPE researchers, possibly EC/JRC people.
- EUROMOD is the shared reference point. Community-of-modelers framing throughout — never
  vendor-vs-incumbent, never argue with anyone's claims. Euros where possible.
- A live demo (~8 min) sits inside the talk; every demo beat has a fallback screenshot slide.
- 16:00 roundtable follows — the closing should hand off to its themes (transparency, trust,
  what it takes for these tools to enter public administrations).

## The argument

Model-building is a craft: structure, program rules, calibrated data, tests that try to break the
model, validation that catches when it does. That is the work BEAMM does, EUROMOD does, FPS Finance
does, PolicyEngine does. What changes with AI is not the craft — it is that agents can now poke at
every piece of it, at a scale no individual analyst can match. That scale only helps if the
verification machinery scales with it: encode → verify → publish, with the scoreboard public,
including the misses. Belgium is the live case: an AI-encoded Belgian PIT validated case-by-case
and population-wide against EUROMOD, on a Belgian population calibrated to Belgian administrative
totals — built in weeks, honestly labeled everywhere it falls short. The endgame is a shared,
open, checkable evidence layer that any ministry can recompute — which matters more as credible
forecasts of the AI era itself diverge by orders of magnitude.

## Slide-by-slide

> ⚠️ Superseded 2026-08-27: the deck was restructured around Max's five-primitives arc
> (questions → what do we arm the AI with? → Axiom / Chronicle / Microcosm / PolicyEngine /
> Thesis, each with its public harness and demo). SPEAKER-NOTES.md carries the current
> 66-slide structure and timing; the sections below describe the earlier format-led cut.

### Opening + question sequence (8 slides, ~8 min)
1. **TitleSlide** — cover, partner context (IARIW–CAPE workshop).
2. **BridgeSlide** — "Tom just showed you the platform." Same craft, shared stack directions.
3. **CraftScaledSlide** — the craft, scaled: what agents change and what they don't.
4. **WhatIfEveryBillSlide** — what if every bill had a score? (>300k cells; six Belgian
   parliaments beyond the one US legislature).
5. **WhatIfEverySeriesSlide** — what if every statistical series had a forecast? (>10m cells).
6. **CrossScaleSlide** — what if you cross them? (>100b bill-statistic-year cells; which cells
   deserve estimates, bands, or out-of-domain marks).
7. **HowWeGetThereSlide** — two compounding tracks: build the apparatus with AI, then equip AI
   to run it at scale.
8. **OutlineSlide** — Rules / Data / Live / Where this goes.

### Section 1 — Rules (~14 min)
5. **RulesDivider**
6. **PEOverviewSlide** — PolicyEngine today: open US/UK models, who uses them (10 Downing Street,
   legislative users, NBER + Atlanta Fed MOUs), all Facts-Register-sourced.
7. **PolicyBenchSlide** — where plain LLMs fail on policy computation (verified numbers).
8. **BridgeToEvolutionSlide** — so how do you get AI to do this reliably?
9–14. **Evo1–Evo6** — the encoder evolution, single prompt → full workflow (adapted from cbo-2026).
15. **AxiomIntroSlide** — the Axiom Foundation: encode → verify → publish.
16. **BelgiumParitySlide** — rulespec-be × EUROMOD: suites, comparisons, explained rate;
    findings flow both directions (we file what we find upstream, we fix what the oracle catches
    in ours). Verified numbers only.
17. **CertificationLadderSlide** — complete ≠ certified: the certificate is computed, not asserted;
    what the registry honestly says today (per verified axiom-oracles state).

### Section 2 — Data (~8 min)
18. **DataDivider**
19. **DataChallengeSlide** — why survey microdata alone can't answer reform questions; the EU
    inversion (linkage vs release constraints).
20. **ImputationSlide** — fusing surveys with ML (US pipeline, adapted).
21. **CalibrationSlide** — reweighting to administrative truth (US pipeline, adapted).
22. **MicrocosmBESlide** — Microcosm-BE: Belgian population calibrated to Belgian admin +
    national-accounts targets (sums of Chronicle facts); the EUROMOD column ledger
    (matched / explained / gap); provenance line (US donor pool, Belgian donor = planned upgrade).
23. **DistrictCalibrationMapSlide** — the 32,633-target research surface adds 24,340 district
    cells, enabling a 436-district OBBBA impact map; research-file lineage stated explicitly.

### Section 3 — Live (~9 min; live embedded apps with Expand, static screenshots as fallbacks)
24. **DemoDivider** — the three beats.
25. **DemoAxiomLiveSlide** — LIVE iframe: the Axiom App, Belgium (app.axiom-foundation.org).
26. Static fallbacks: browse → provision → RuleSpec/graph → validation screenshots.
27. **CliffWatchLiveSlide** — LIVE iframe: where interacting programs create benefit cliffs.
28. **ObbbaExplorerLiveSlide** — LIVE iframe: provision-level impacts for one household.
29. **DemoPeBeLiveSlide** — LIVE iframe: policyengine.org/be reform simulator (+ static fallback).
30. **DemoPySlide** — policyengine.py in a few lines (code slide; works offline).
(The data section also carries **DemoDashboardLiveSlide** — the live calibration dashboard —
with its static screenshot right after as the fallback.)

### Section 4 — Where this goes (~8 min)
28. **FutureDivider**
29. **ConductorsSlide** — conductors, not oracles.
30. **StackRecapSlide** — section 6 opens with the five blocks as one dependency stack.
31. **HarnessRecapSlide** — each layer makes a different claim, so each has a different public test.
32. **BaselineForecastSlide** — professional forecasters still price a stable long-run baseline.
33. **ForecastUncertaintySlide** — condition on rapid AI capabilities and expert medians—and
    uncertainty—open up; Karger/FRI survey distinguished from Yale Budget Lab modeling.
34. **CommunityClosingSlide** — it takes all of us: stat offices, EUROMOD, BEAMM, ministries,
    open models. Hands off to the 16:00 roundtable themes.
35. **QuestionsSlide** — links.

## Cut from cbo-2026

CBO-specific opening (CboScaleSlide, ScaleOpportunity/EverySeriesForecast/CrossScale/ScaleAccuracy/
HowWeGetThere/ProjectionApparatus — US-forecasting agency framing), Theory section
(LLMBeliefs, LLMETI), Analysis section (AnalysisLogos, PolicyAnalysis, ClaudePlugin,
ClaudeComparison, UKChatPrototype, PredictAll, MarketsMock, AIInequality), WhoUsesIt (folded into
PEOverview), and parked legacy slides.

## Claim gates (standing)

- Belgium is never "certified". Complete ≠ certified. Certification language quotes the computed
  certificate only.
- Microcosm-BE is a product lineage, not a demo: provenance line, never a scare banner.
- "the Axiom Foundation" in full in prose; no funder names; no completeness claims; demos are demos.
- Every org number from messaging/Facts-Register.md or a named artifact verified this session.
- No policy positions. No funding asks. Sentence case. No emoji. Numbers speak for themselves.
- The 15 July 2026 Belgian PIT reform cross-engine estimates are HELD (Max's gate) — not in this deck.
