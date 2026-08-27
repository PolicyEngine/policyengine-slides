# Speaker notes — From open models to executable law

IARIW–CAPE workshop "New technologies for evidence-based policy making"
Thursday 27 August 2026 · 14:40–15:30 · Room P02, UCLouvain Saint-Louis, Brussels
Deck: policyengine.org/slides/iariw-2026 (local: /slides/iariw-2026) · 62 slides, ~50 presented

**Room:** IARIW measurement economists; Koen Algoed (Director General, Budget and Finance,
Flemish Region) and Jean-Baptiste Traversa (head of microsimulation modelling, FPS Finance)
up front; Hélène Latzer (moderates the 16:00 roundtable); CAPE researchers; possibly EC/JRC.
Tom Truyts has just finished the BEAMM talk and demo (13:45–14:35).

**The arc:** the CBO questions, generalized → in an era where conditions may change fast,
you'd need AI for all of it → but AI alone fails (PolicyBench) → so what do we arm it with?
Five primitives, each with a feedback loop → brief history (six years under one roof) → walk
the five, demoing each → the loop that matters most → roundtable hand-off.

**⚠️ Numbers that changed from the CBO deck, verified 2026-08-26:**
1. PolicyBench: "1 in 3 to 1 in 7" is stale. Published v1.1 board (32 models): best 88.7%
   exact ≈ 1 in 9 wrong; weakest 62.3%.
2. Certification: NOTHING is certified today — not Denmark, not the US tariff arc.
   Denmark conformant-everywhere with certified = no (81 open dependencies) IS the story.
   Never say "certified" as a positive claim about any program.
3. Facts register rows moved: 103 programs, 332 repos, 133 contributors, 4,693 test files,
   team of 8. Chronicle: 171,855 facts from 40 official publishers (verified on main 2026-08-27).

**Held — never say aloud:** the 15 July 2026 Belgian PIT reform cross-engine estimates
(Tom sees them first; Max's gate). Statistics Belgium conversations. Anything about other
modeling groups' publication records.

---

## Timing map (45 min)

| Clock | Section | Slides | Minutes |
|---|---|---|---|
| 14:40 | Opening | 1–3 | 3 |
| 14:43 | Scorekeeper scale + questions + how we get there | 4–10 | 8 |
| 14:51 | Five primitives + history + roadmap | 11–13 | 4 |
| 14:55 | 1 · Axiom (app, cliff analyzer, chatbot) | 14–33 (skip statics 24–27, 29, 31) | 14 |
| 15:09 | 2 · Chronicle | 34–37 (skip 37) | 3 |
| 15:12 | 3 · Microcosm | 38–45 (skip 44) | 6 |
| 15:18 | 4 · PolicyEngine | 46–51 (skip 50) | 5 |
| 15:23 | 5 · Thesis → 6 · Looking forward | 52–62 (skip 56, 58) | 7 |

Cut-first if long: Microplex (37), WhoUsesIt (40), and skim Evo3/Evo5. Static screenshot
slides (22–25, 36, 42) are presented ONLY if the network dies.

---

## Slide-by-slide track

### 1 · Title (30s)
Thank Tom. One sentence: "Tom showed you Belgium's platform; I want to show you where I think
all of our stacks are heading."

### 2 · Tom just showed you the platform (1.5m)
BEAMM, EUROMOD, FPS Finance's models, PolicyEngine — same craft: encoded rules, a
representative population, validation against what the state publishes. No microsim 101 —
Tom did that. This talk: what changes when AI joins each layer.

### 3 · The craft, scaled (1m)
Personal: "I love building models." The four elements of the craft. What changes: thousands
of agents poking at every piece at once. Tee the questions: "so here is the question I put to
the Congressional Budget Office in May — and any organization here can translate it to its own."

### 4 · The scale of a scorekeeper today (1m)
Anchor before the escalation: the US Congressional Budget Office produces roughly 50,000
atomic projections a year — baseline series-years plus bill-year-category estimate cells —
and about 1,000 public cost estimates. Each cell is real craft: behavioral models, microsim,
private data, layered QC. Every organization in the room can translate the arithmetic to its
own shop. Then: "so what if we did not have to stop there?"

### 5 · What if every bill had a score? (1.5m)
~10k bills per US Congress × 10 years × 3 budget categories = >300k cells as the FLOOR — an
order of magnitude more proposals than ever get a formal public score. One legislature;
Belgium alone legislates through six parliaments. [Scale check, stated on-slide.]

### 6 · What if every outcome had an estimate? (1m)
A fiscal score is one number. Policy also moves poverty, inequality, regions, take-up — and
this room publishes the cells: 1m public statistical cells × 10-year horizon = >10m, before
uncertainty bands.

### 7 · What if you cross them? (1m)
>100 billion bill-statistic-year cells. The hard question is not writing down more numbers —
it is which cells deserve estimates, which deserve bands, and which are out of domain.

### 8 · How this could change democracy (1.5m — the would-this-be-useful beat)
Values → policies → indicators [kept from the CBO deck]: democracy decides what we
collectively value; at scale we don't just choose from a menu of bills — we can search the
design space for the policies that best move the indicators we said we care about; and
predictions get scored against reality, so the track record is public and improvable. The
substrate never decides what to value.

### 9 · How do we get there? (1m)
AI can't do it on its own today. Two tracks that compound: use AI to build the apparatus
(rules, data, theory, tooling — human review at every step); then equip AI to run projections
on that apparatus at scale. The rest of the talk is the apparatus.

### 10 · PolicyBench: AI alone can't do it (2m)
Ask a frontier model a basic tax-benefit question, check against the computed answer:
best model 88.7% exact ≈ 1 in 9 wrong; weakest of 32 more than 1 in 3. On SNAP cases where a
family is owed benefits, no model gets more than 1 in 20 right [policybench.org, v1.1].
Landing: AI is impressive at code, search, summarization. It is not a substitute for a model.
"So what would the AI need? What do we arm it with?"

### 11 · What do we arm the AI with? (2m — the spine slide)
Five primitives, stated as NEEDS — no project names yet (the wordmark reveal is slide 13):
1 understand the policy rules (loop: oracles, zero unexplained mismatches) · 2 ready access
to official statistics (loop: completeness + lineage) · 3 the world at micro level (loop:
published calibration error, surveys held out) · 4 a model that computes reforms (loop:
cross-engine agreement + users) · 5 judgment to put it together (loop: forecasts that
resolve — the most important). Landing: the same primitives norm AIs AND human researchers.

### 12 · Six years under one roof (1.5m)
The history: PolicyEngine since 2021 built the first four together — encoded US/UK rules (by
hand, increasingly AI), microdata imputed + calibrated to official statistics, the simulation
engine, the web app (still there, no longer the center). The realization behind the split:
each layer deserves its own name, users, and feedback loop — Axiom, Chronicle, Microcosm,
PolicyEngine as the model that composes them, and Thesis scoring the forecasts.

### 13 · Five primitives, five demos (45s — the reveal)
The roadmap, now with the wordmarks: Axiom · chronicle · microcosm · PolicyEngine · thesis
institute. "Each of these has a name, a public surface, and a demo. Let's walk them."

### 14–21 · Axiom divider → encoder evolution (30s + ~40s each Evo, ~5m)
Divider, then the pivot: AI can't compute policy, it can help build the substrate that does.
The encoder history [our own project history, from the CBO deck]: single prompt (70% error) →
pipeline → parallel agents → validation gates → skills → full workflow (12 agents, ~90 min to
a draft PR). Tell it as adding verification, not adding intelligence.

### 22 · The Axiom Foundation: encode, verify, publish (1.5m)
Why a foundation: the rules layer should be a public good. Encode (statute → RuleSpec, every
value cites its authority, effective dates) → verify (deterministic gauntlet + oracles:
PolicyEngine, TAXSIM, EUROMOD, SNAP quality-control data — the model that wrote the rules
never grades its own work) → publish (statute, encoding, validation record, computation graph
in one place). axiom.org.

### 23 · DEMO — the Axiom App, Belgium, live (~3m; slides 24–27 are the fallback)
Live iframe in-deck (Expand button), or the preloaded tab. Beats: field view (107 Belgian
provisions, five clusters) → open a provision → "Read the law" (CIR 92 text beside the
RuleSpec rule, effective dates) → the computation graph. See DEMO-SCRIPT.md.

### 28 · DEMO — the cliff analyzer (1.5m; 29 is the fallback)
axiom.org/snap: a New York single adult, earnings swept $0–4,000/month. Run reform: the SNAP
allotment falls to a hard cliff near $2,100 and the marginal rate spikes past the cliff
threshold. Drag a reform slider — the cliff moves. Same encodings that score budgets,
answering a caseworker's question.

### 30 · DEMO — the chatbot (2m; 31 is the fallback)
axiom.org/chatbot: run the suggested single-parent SNAP question, then tick "Compare
side-by-side with plain AI" — the PolicyBench failure and the fix on one screen. The language
model narrates; the rules engine does the arithmetic, with citations. (The page's own copy
says "certified rulespec-us" — don't repeat the word aloud; slide 33 gives the precise
certification state.)

### 32 · Belgian income tax, validated against EUROMOD (2m — the rules feedback loop)
23/23 in-scope BE_2025 policies conformant; 33 suites, 156 household comparisons; zero
unexplained mismatches. All 40 raw disagreements dispositioned: 33 filed as findings for the
EUROMOD team's review on the public EC-JRC tracker, 7 explained residuals on our side
[axiom-oracles origin/main, verified 2026-08-26]. Tone: EUROMOD is the reference we're
grateful exists; cross-checks flow both directions. PIT arc merged on main; dependants +
child benefits held at the signed-corpus release frontier. NEVER "perfect match" or
certified language.

### 33 · Complete is not certified (2m — the honesty machinery)
Certified = computed(conformant AND exercised AND closed AND executable), no flag set by hand
[CERTIFIED.md v3]. Today: 13 programs, 10 conformant, ZERO certified. Denmark: matches
EUROMOD on every case, blockers empty — certified = no, 81 open dependencies. US tariff:
216M comparisons vs the Yale panel, 0 unexplained — still not conformant (1.59M open units).
For officials: this is the answer to "why trust an AI-built model" — you don't; you check
the certificate.

### 34–36 · Chronicle (3m — 36 is the live site, 37 its fallback)
Divider, then: official statistics as source-backed facts — typed values with units,
geography, period, and lineage to the source artifact. 171,855 facts ingested from 40
official publishers [chronicle main bundle, verified 2026-08-27]. Then chronicle.institute
live (36): "a record of what official sources printed, and when" — the witnessed first-print
journal (39,173 store facts on screen; values recorded as published, never reconciled or
modeled). Say both numbers precisely: 171,855 ingested; 39,173 in the witnessed store. The Belgian shelf built in a week: Statbel
fiscal income by €1,000 class, SPF Finances/ONSS/ONEM totals, Eurostat national accounts,
FPB outlook, JRC EUROMOD baselines. The loop: Microcosm calibrates ONLY to sums of Chronicle
facts — every target traces to a publisher; surveys enter as validation only.

### 38–39 · Microcosm divider → the data challenge (1m)
Comprehensive AND accurate. US: no single survey has everything. The European inversion:
Belgian registers are linked — the constraint is release, which is why BEAMM invests in
synthesis. Both directions converge on calibration targets + validation services.

### 40 · Imputation (45s)
Quantile regression forests, full conditional distributions, tails included. AI reads survey
documentation and catches definitional mismatches.

### 41 · Calibration (45s)
Gradient descent over household weights against thousands of published targets. AI ingests
targets, reconciles schemas; analysts decide what goes live.

### 42 · Microcosm-BE (2m)
The recipe on Belgium [sealed v0.5 artifacts]: 57,240 household records, 254 targets (sums of
Chronicle facts), mean |error| 1.84%, 242/254 within 5%. The EUROMOD column ledger: all 182
substantive output columns — 10 matched, 143 explained, 29 named gaps, 0 unclassified.
Provenance line said straight: US survey donor pool, reweighted; Belgian donor pool is the
planned upgrade. If SILC comes up: CAPE holds access — the acceptance test can run on their
machines.

### 43 · DEMO — the calibration dashboard, live (1.5m; slide 44 is the fallback)
Every target published with its error; 96.1% within 10% on the live page. "You don't have to
take my word for any of this — it's a website."

### 45 · Microplex (30s) — CUT FIRST IF LONG
Where the US data layer heads: multi-spine, automated target discovery, promote-on-review,
versioned public releases.

### 46–47 · PolicyEngine divider → PolicyEngine today (1.5m)
The model that composes the primitives. Open source since June 2021 (AGPL-3.0); 95,000+
parameters, 5,500+ variables, 4,693 test files, 103 programs; 133 contributors. No 10's data
science team built 10ds-microsim on it; MOUs with NBER (open source TAXSIM emulator) and the
Atlanta Fed (Policy Rules Database). For this room: an open EUROMOD-family stack for the US
and UK, built in public.

### 48 · Who uses it (30s) — CUT IF LONG
Logo wall. One sentence and move.

### 49 · DEMO — a Belgian reform, live (~3m; slide 50 is the fallback)
policyengine.org/be in-deck: move the top bracket rate, watch budget/Gini/poverty recompute
(155 precomputed cells, 28 CIR 92 parameters); scroll to "The population, checked" — both
engines against administrative truth, misses in red with named mechanisms.

### 51 · policyengine.py (1m — works offline)
The same models as a Python package: a UK household in four lines; the same call for the US
with a reform attached. This is the interface the Belgian work targets.

### 52–53 · Thesis divider → Conductors, not oracles (2m)
The model routes to verified tools and integrates calibrated outputs; analyst judgment lives
at every routing decision. The judgment-to-mechanism loop: intuition becomes mechanism over
time.

### 54 · The loop that matters most (2m)
Every primitive has its gauge; the one that ranks them all is whether forecasts resolve
against reality — which is what Thesis exists to do: open forecasts of public outcomes,
every prediction published with its reasoning and graded when the official number lands.
The measurable question: when the stack covers a new country — Belgium took weeks because
Microcosm calibrates to official statistics — does Thesis predict outcomes there better?
We intend to score that. And the deeper point for 16:00: policy takes
a different shape when baseline conditions change quickly; if you assign real probability to
that, how does this community arm policymakers to respond?

### 55 · DEMO — a baseline Thesis forecast: SPM child poverty (1.5m; 56 is the fallback)
app.thesisinstitute.org/spm-child-poverty-2025: a live forecast cell on a published
government data point — the 2025 SPM child poverty rate with an 80% interval, the Census
history, and the agent's full reasoning trace (assumptions AND caveats in the open; the
trace may show prototype infra notes — that transparency is the design). Graded when the
Census publishes in September. Start here so the bills demo lands as "the same machinery,
pointed at legislation."

### 57 · DEMO — Thesis bill analyses (1.5m; 58 is the fallback)
app.thesisinstitute.org/bills: "start from the bill, derive the outcomes" — each analysis
reads a bill's provisions, separates countersignable goals from likely effects, and maps
candidate outcome metrics against the live forecast registry. The opening question, made
practice. Labeled prototype; say so.

### 59 · Looking forward (divider, 15s)

### 60 · And if the baseline itself moves? (1.5m — the closing forecast beat)
Everything before this slide matters regardless of how the economy evolves; if conditions
change quickly, being nimble matters more. The chart: professional forecasters disagree less
than ever about long-run growth (SPF 10-year IQR 0.2pp, half its 1990s level) — but asked
specifically about AI, economists and forecasters see room for major impact (+0.07pp to
+30pp of annual growth) [Philadelphia Fed SPF; AI Frontiers compilation]. Landing: if not
just GDP but unemployment, wage inequality, and the capital income share move, policymakers
will need even better tools — and AI can help, if we arm it in turn. "After the break, I'm
looking forward to discussing what those tools can improve in policymaking."

### 61 · It takes all of us (1.5m)
Model-building has always been about making consequences visible before the choice.
Statistical offices, EUROMOD, BEAMM, ministries, open models — each doing what it does best.
"Which is exactly what the roundtable is about — see you at 16:00."

### 62 · Thank you / QR (leave up)
QR → axiom.org. Links: axiom.org · policyengine.org/be · both GitHub orgs.

---

## Likely questions (roundtable themes: transparency, trust, entering public administrations)

**"How do we know the AI encoded the law correctly?"**
Same way you'd know for a human: you don't trust, you check. Every encoding compiles, passes
its tests, and is cross-checked against engines we don't control — EUROMOD here, TAXSIM and
SNAP quality-control data in the US. The certificate is computed, and today it honestly says
"not certified" for everything — the misses are published.

**"Could FPS Finance / the Flemish administration use this?"** (Algoed, Traversa)
The on-ramp is verification, not replacement: run your existing system against the encodings
as a test oracle, catch discrepancies, keep your engine and your timeline. Everything is open
(encodings CC BY 4.0, code Apache-2.0), so there is no procurement cliff to try it.

**"What about EUROMOD — are you competing with it?"**
We validate against it, we file what we find on the public tracker, and 33 of our 40 Belgian
disagreements were explained by differences we documented for their team's review. A shared
reference engine makes every model better, ours included. (Never comparative-negative;
never name other platforms' publication records.)

**"Is the Belgian population real Belgian microdata?"**
No — and the label says so. A synthetic population calibrated to 254 Belgian administrative
and national-accounts targets; support records are a reweighted US donor pool; a Belgian
donor pool (e.g. SILC-based, run by partners who hold access) is the planned upgrade.
Cross-engine agreement on it is evidence about the encodings.

**"Can it score the July 2026 PIT reform?"** (likely from officials)
The reform is encoded and a cross-engine comparison is in validation with partners — results
aren't public yet. [Numbers are HELD — do not state them.]

**"What about data protection / can our data leave the building?"**
It doesn't need to: acceptance tests and calibration run wherever the data lives. What we
need published is aggregates: calibration targets and validation statistics, not microdata.

**"Who pays for this / what's the business model?"** (no funding ask in the talk)
PolicyEngine is a nonprofit; the Axiom Foundation is a fiscally sponsored project of the PSL
Foundation. The encodings are a public good; paid work products fund the org.

**"Is AI going to replace modelers?"**
Conductors, not oracles: the craft moves up a level — source interpretation, assumptions,
edge cases, sign-off. Every encoder-evolution step that worked added a check, not a bigger
model.

**"What would a BEAMM/CAPE collaboration look like?"**
Tom and I are discussing exactly that — shared validation surfaces, a Belgian donor pool,
BEAMM's published estimates alongside ours on public scoreboards. The workshop is the public
face of that conversation. [Keep at this altitude; funding vehicle status is not public.]
