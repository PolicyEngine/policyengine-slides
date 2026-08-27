# Speaker notes — From open models to executable law

IARIW–CAPE workshop "New technologies for evidence-based policy making"
Thursday 27 August 2026 · 14:40–15:30 · Room P02, UCLouvain Saint-Louis, Brussels
Deck: policyengine.org/slides/iariw-2026 (local: /slides/iariw-2026) · 48 slides, ~42 presented

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
   team of 8. Chronicle: 148 source packages, 40 publishers (verified on main 2026-08-27).

**Held — never say aloud:** the 15 July 2026 Belgian PIT reform cross-engine estimates
(Tom sees them first; Max's gate). Statistics Belgium conversations. Anything about other
modeling groups' publication records.

---

## Timing map (45 min)

| Clock | Section | Slides | Minutes |
|---|---|---|---|
| 14:40 | Opening | 1–3 | 3 |
| 14:43 | The question sequence | 4–8 | 6 |
| 14:49 | Five primitives + history + roadmap | 9–11 | 4 |
| 14:53 | 1 · Axiom | 12–27 (skip 22–25 if live demo works) | 13 |
| 15:06 | 2 · Chronicle | 28–29 | 2 |
| 15:08 | 3 · Microcosm | 30–37 (skip 36 if live) | 6.5 |
| 15:14 | 4 · PolicyEngine | 38–43 (skip 42 if live) | 6 |
| 15:20 | 5 · Together | 44–48 | 5.5 |
| 15:26 | Buffer + questions | — | 4 |

Cut-first if long: Microplex (37), WhoUsesIt (39), and skim Evo3/Evo5. Static screenshot
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

### 4 · What if every bill had a score? (1.5m)
~10k bills per US Congress × 10 years × 3 budget categories = >300k cells as the FLOOR — an
order of magnitude more proposals than ever get a formal public score. One legislature;
Belgium alone legislates through six parliaments. [Scale check, stated on-slide.]

### 5 · What if every outcome had an estimate? (1m)
A fiscal score is one number. Policy also moves poverty, inequality, regions, take-up — and
this room publishes the cells: 1m public statistical cells × 10-year horizon = >10m, before
uncertainty bands.

### 6 · What if you cross them? (1m)
>100 billion bill-statistic-year cells. The hard question is not writing down more numbers —
it is which cells deserve estimates, which deserve bands, and which are out of domain.

### 7 · And the baseline itself may be moving (1.5m)
The chart: professional 10-year consensus has never been tighter (SPF IQR 0.2pp, half its
1990s level) while published AI-era growth estimates span +0.07pp to +30pp per year
[Philadelphia Fed SPF; AI Frontiers compilation]. If you assign any real probability to rapid
change, analysis has to recompute the present, not defend one number. "So — you would need AI
to help with all of these pieces."

### 8 · PolicyBench: AI alone can't do it (2m)
Ask a frontier model a basic tax-benefit question, check against the computed answer:
best model 88.7% exact ≈ 1 in 9 wrong; weakest of 32 more than 1 in 3. On SNAP cases where a
family is owed benefits, no model gets more than 1 in 20 right [policybench.org, v1.1].
Landing: AI is impressive at code, search, summarization. It is not a substitute for a model.
"So what would the AI need? What do we arm it with?"

### 9 · What do we arm the AI with? (2m — the thesis slide)
Five primitives, each a project, each with a feedback loop:
1 rules → Axiom (loop: oracles, zero unexplained mismatches) · 2 official statistics →
Chronicle (loop: completeness + lineage) · 3 the world at micro level → Microcosm (loop:
published calibration error, surveys held out) · 4 a model → PolicyEngine (loop: cross-engine
agreement + users) · 5 judgment — expertise, discretion, uncertainty (loop: forecasts that
resolve — the most important). Landing: the same primitives norm AIs AND human researchers.

### 10 · Six years under one roof (1.5m)
The history: PolicyEngine since 2021 built the first four together — encoded US/UK rules (by
hand, increasingly AI), microdata imputed + calibrated to official statistics, the simulation
engine, the web app (still there, no longer the center). The realization behind the split:
each layer deserves its own name, users, and feedback loop — Axiom, Chronicle, Microcosm,
with PolicyEngine as the model that composes them.

### 11 · Five primitives, five demos (30s)
The roadmap. "Let's walk them."

### 12–19 · Axiom divider → encoder evolution (30s + ~40s each Evo, ~5m)
Divider, then the pivot: AI can't compute policy, it can help build the substrate that does.
The encoder history [our own project history, from the CBO deck]: single prompt (70% error) →
pipeline → parallel agents → validation gates → skills → full workflow (12 agents, ~90 min to
a draft PR). Tell it as adding verification, not adding intelligence.

### 20 · The Axiom Foundation: encode, verify, publish (1.5m)
Why a foundation: the rules layer should be a public good. Encode (statute → RuleSpec, every
value cites its authority, effective dates) → verify (deterministic gauntlet + oracles:
PolicyEngine, TAXSIM, EUROMOD, SNAP quality-control data — the model that wrote the rules
never grades its own work) → publish (statute, encoding, validation record, computation graph
in one place). axiom.org.

### 21 · DEMO — the Axiom App, Belgium, live (~3m; slides 22–25 are the fallback)
Live iframe in-deck (Expand button), or the preloaded tab. Beats: field view (107 Belgian
provisions, five clusters) → open a provision → "Read the law" (CIR 92 text beside the
RuleSpec rule, effective dates) → the computation graph. See DEMO-SCRIPT.md.

### 26 · Belgian income tax, validated against EUROMOD (2m — the rules feedback loop)
23/23 in-scope BE_2025 policies conformant; 33 suites, 156 household comparisons; zero
unexplained mismatches. All 40 raw disagreements dispositioned: 33 filed as findings for the
EUROMOD team's review on the public EC-JRC tracker, 7 explained residuals on our side
[axiom-oracles origin/main, verified 2026-08-26]. Tone: EUROMOD is the reference we're
grateful exists; cross-checks flow both directions. PIT arc merged on main; dependants +
child benefits held at the signed-corpus release frontier. NEVER "perfect match" or
certified language.

### 27 · Complete is not certified (2m — the honesty machinery)
Certified = computed(conformant AND exercised AND closed AND executable), no flag set by hand
[CERTIFIED.md v3]. Today: 13 programs, 10 conformant, ZERO certified. Denmark: matches
EUROMOD on every case, blockers empty — certified = no, 81 open dependencies. US tariff:
216M comparisons vs the Yale panel, 0 unexplained — still not conformant (1.59M open units).
For officials: this is the answer to "why trust an AI-built model" — you don't; you check
the certificate.

### 28–29 · Chronicle (2m)
Divider, then: official statistics as source-backed facts — typed values with units,
geography, period, and lineage to the source artifact. 148 source packages from 40 official
publishers [chronicle main, verified 2026-08-27]. The Belgian shelf built in a week: Statbel
fiscal income by €1,000 class, SPF Finances/ONSS/ONEM totals, Eurostat national accounts,
FPB outlook, JRC EUROMOD baselines. The loop: Microcosm calibrates ONLY to sums of Chronicle
facts — every target traces to a publisher; surveys enter as validation only.

### 30 · The data challenge (1m)
Comprehensive AND accurate. US: no single survey has everything. The European inversion:
Belgian registers are linked — the constraint is release, which is why BEAMM invests in
synthesis. Both directions converge on calibration targets + validation services.

### 31 · Imputation (45s)
Quantile regression forests, full conditional distributions, tails included. AI reads survey
documentation and catches definitional mismatches.

### 32 · Calibration (45s)
Gradient descent over household weights against thousands of published targets. AI ingests
targets, reconciles schemas; analysts decide what goes live.

### 33 · Microcosm-BE (2m)
The recipe on Belgium [sealed v0.5 artifacts]: 57,240 household records, 254 targets (sums of
Chronicle facts), mean |error| 1.84%, 242/254 within 5%. The EUROMOD column ledger: all 182
substantive output columns — 10 matched, 143 explained, 29 named gaps, 0 unclassified.
Provenance line said straight: US survey donor pool, reweighted; Belgian donor pool is the
planned upgrade. If SILC comes up: CAPE holds access — the acceptance test can run on their
machines.

### 34 · DEMO — the calibration dashboard, live (1.5m; slide 35 is the fallback)
Every target published with its error; 96.1% within 10% on the live page. "You don't have to
take my word for any of this — it's a website."

### 36 (fallback) / 37 · Microplex (30s) — CUT FIRST IF LONG
Where the US data layer heads: multi-spine, automated target discovery, promote-on-review,
versioned public releases.

### 38 · PolicyEngine today (1.5m)
The model that composes the primitives. Open source since June 2021 (AGPL-3.0); 95,000+
parameters, 5,500+ variables, 4,693 test files, 103 programs; 133 contributors. No 10's data
science team built 10ds-microsim on it; MOUs with NBER (open source TAXSIM emulator) and the
Atlanta Fed (Policy Rules Database). For this room: an open EUROMOD-family stack for the US
and UK, built in public.

### 39 · Who uses it (30s) — CUT IF LONG
Logo wall. One sentence and move.

### 40 · DEMO — a Belgian reform, live (~3m; slide 42 is the fallback)
policyengine.org/be in-deck: move the top bracket rate, watch budget/Gini/poverty recompute
(155 precomputed cells, 28 CIR 92 parameters); scroll to "The population, checked" — both
engines against administrative truth, misses in red with named mechanisms.

### 43 · policyengine.py (1m — works offline)
The same models as a Python package: a UK household in four lines; the same call for the US
with a reform attached. This is the interface the Belgian work targets.

### 44–45 · Together divider → Conductors, not oracles (2m)
The model routes to verified tools and integrates calibrated outputs; analyst judgment lives
at every routing decision. The judgment-to-mechanism loop: intuition becomes mechanism over
time.

### 46 · The loop that matters most (2m)
Every primitive has its gauge; the one that ranks them all is whether forecasts resolve
against reality. The measurable question: when the stack covers a new country — Belgium took
weeks because Microcosm calibrates to official statistics — do calibrated agents predict
outcomes there better? We intend to score that. And the deeper point for 16:00: policy takes
a different shape when baseline conditions change quickly; if you assign real probability to
that, how does this community arm policymakers to respond?

### 47 · It takes all of us (1.5m)
Model-building has always been about making consequences visible before the choice.
Statistical offices, EUROMOD, BEAMM, ministries, open models — each doing what it does best.
"Which is exactly what the roundtable is about — see you at 16:00."

### 48 · Thank you / QR (leave up)
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
