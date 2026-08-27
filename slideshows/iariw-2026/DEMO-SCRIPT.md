# Live demo script — IARIW 2026 (~8 min inside the 14:40–15:30 talk)

The deck embeds the LIVE apps directly, each with an Expand button: slide 21 (Axiom App,
Belgium), 26 (cliff analyzer, axiom.org/snap), 28 (chatbot, axiom.org/chatbot), 34
(Chronicle targets drill), 41 (calibration dashboard), 47 (policyengine.org/be). You can
drive the whole demo without leaving the deck; preloaded tabs remain smoother for deep
interaction. Every beat has static screenshot slides right after it (22–25, 27, 29, 35, 42,
48). If the network dies mid-beat, advance and keep talking.

Cliff analyzer beat: Run reform → point at the allotment cliff near $2,100 and the
marginal-rate spike → drag the earned income deduction slider → the cliff moves.
Chatbot beat: run the single-parent SNAP suggestion → tick "Compare side-by-side with plain
AI" → grounded vs plain on one screen. Never repeat the page's "certified" wording aloud.

## Before the talk (10 min, on venue wifi or hotspot)

1. Open these tabs, in order, and let each fully load:
   - https://axiom.org
   - https://axiom.org/axiom?country=be  (Belgium field view)
   - https://axiom.org/axiom/graph?compose=be  (composition graph)
   - https://axiom.org/validation
   - https://policyengine.org/be
   - https://microcosm.institute/calibration/dashboard/microcosm?country=be
   - https://axiom.org/snap  (cliff analyzer)
   - https://axiom.org/chatbot  (chatbot — send one warm-up question so the backend is hot)
2. On policyengine.org/be: confirm the yellow provenance banner renders and the
   "Society-wide impacts" tab shows €0.00B at baseline.
3. Phone hotspot ready as backup. If neither works, the deck carries every beat.
4. ⚠️ Do NOT quote per-suite numbers from axiom.org/oracles live — the deployed scoreboard
   is serving a pre-Aug-22 snapshot (two newest Belgian suites 404 there). The slide numbers
   come from origin/main and are correct. Redeploy the oracles dashboard before the talk if
   you want it live; otherwise skip that page.

## Beat 1 — the Axiom App, Belgium (≈3 min)

| Step | Do | Say |
|---|---|---|
| 1.1 | Switch to the tab at axiom.org/axiom?country=be | "This is Belgium in the Axiom App — 107 provisions, clustered federal, Flanders, Wallonia, Brussels, German-speaking community." |
| 1.2 | Hover the middle cluster; click a highlighted provision (e.g. "Income tax — benefits — company car (Belgium)") | "Each node is a rule encoded from the statute." |
| 1.3 | In the side panel, click "Read the law →" | "The CIR 92 text sits beside the RuleSpec rule that computes it — name, entity, unit, effective-from date. The interpretation is the published artifact, not something buried in an engine." |
| 1.4 | Close the modal; open the tab at axiom.org/axiom/graph?compose=be; click the final-result node | "And the computation graph: every result traces to its parameters and inputs. The dependency structure of the law becomes data you can analyze." |

Fallback slides: "Browse the encoded law" → "The law at the node" → "The computation graph".

## Beat 2 — policyengine.org/be (≈3 min)

| Step | Do | Say |
|---|---|---|
| 2.1 | Switch to policyengine.org/be; point at the banner | "Everything here is labeled: Axiom rules engine, Microcosm-BE v0.5, 2025 law — and the provenance line states the US donor pool and the planned Belgian upgrade." |
| 2.2 | Drag "Top bracket rate" 50% → 55% | "One statute parameter — art. 130 CIR 92. Budget impact, Gini, poverty recompute from 155 precomputed cells across 28 encoded parameters." |
| 2.3 | Click "Reset to current law" | — |
| 2.4 | Scroll to "The population, checked" | "The same population, computed by both engines against administrative truth. The misses are shown in red, not hidden — each carries a named mechanism in the cross-engine ledger." |

Fallback slide: "A Belgian reform, computed".

## Beat 3 — policyengine.py (≈1 min, works offline)

Stay on the code slide in the deck (no network needed). Walk the two calls:
a UK household in four lines; the same call for the US with a reform attached.
"This is the interface the Belgian work targets — the apps and the notebook run the same package."

## Beat 4 — if time allows (≈1 min)

| Step | Do | Say |
|---|---|---|
| 4.1 | microcosm.institute dashboard tab | "Every one of the 254 Belgian calibration targets published with its error — 96.1% within 10%." |
| 4.2 | axiom.org/validation tab | "And the standing rule: the model that wrote the rules never grades its own work." |

Fallback slides: "The data, anchored in public" → "Validation, in the open".

## Hard rules during the demo

- Never say "certified" about any program. The honest line: "conformant, and the certificate
  registry says certified = no — that honesty is the design."
- The 15 July 2026 Belgian PIT reform estimates are held — do not compute or mention them live.
- If someone asks to try an arbitrary household in the BE prototype: it is a precomputed-cell
  prototype, not a free calculator — say so and offer the US/UK household calculator instead.
