# Speaker notes — From open models to executable law

IARIW–CAPE workshop "New technologies for evidence-based policy making"
Thursday 27 August 2026 · 14:40–15:30 · Room P02, UCLouvain Saint-Louis, Brussels
Deck: policyengine.org/slides/iariw-2026 (local: /slides/iariw-2026)

**Room:** IARIW measurement economists; Koen Algoed (Director General, Budget and Finance,
Flemish Region) and Jean-Baptiste Traversa (head of microsimulation modelling, FPS Finance)
up front; Hélène Latzer (moderates the 16:00 roundtable); CAPE researchers; possibly EC/JRC.
Tom Truyts has just finished the BEAMM talk and demo (13:45–14:35).

**⚠️ Read before rehearsing — three numbers changed from the CBO deck, verified 2026-08-26:**
1. PolicyBench: the old "1 in 3 to 1 in 7 wrong" is stale. Published v1.1 board
   (snapshot 2026-08-22, 32 models): best model 88.7% exact ≈ 1 in 9 wrong; weakest 62.3%.
2. Certification: NOTHING is certified today — not Denmark, not the US tariff arc.
   Denmark is conformant-everywhere with certified = no (81 open dependencies) — that IS the
   story. Never say "certified" as a positive claim about any program.
3. Facts register rows moved: 103 programs (was 100), 332 repos, 133 contributors,
   4,693 test files, team of 8.

**Held — never say aloud:** the 15 July 2026 Belgian PIT reform cross-engine estimates
(Tom sees them first; Max's gate). Statistics Belgium conversations. Anything about other
modeling groups' publication records.

---

## Timing map (45 min, 44 slides — ~38 presented when the live demo works)

| Clock | Section | Slides | Minutes |
|---|---|---|---|
| 14:40 | Opening + question sequence | 1–8 | 8 |
| 14:48 | 1 · Rules | 9–22 | 13 |
| 15:01 | 2 · Data | 23–30 | 7 |
| 15:08 | 3 · Live demo | 31–39 (skip static fallbacks if live) | 9 |
| 15:17 | 4 · Where this goes | 40–44 | 7 |
| 15:24 | Buffer + questions | — | 6 |

If running long: cut MicroplexSlide, then ForecastUncertaintySlide — the deck loses nothing
structural. If running short: linger on the demo's population table. The static screenshot
slides (after each live app slide) are presented ONLY if the network dies.

---

## Slide-by-slide track

### 1 · Title (30s)
Thank Tom. One sentence: "Tom showed you Belgium's platform; I want to show you where I think
all of our stacks are heading."

### 2 · Tom just showed you the platform (1.5m)
BEAMM, EUROMOD, FPS Finance's models, PolicyEngine — same craft: encoded rules, a
representative population, validation against what the state publishes. No microsim 101 here —
Tom did that. This talk: what changes when AI joins each layer. Everything shown is public code.

### 3 · The craft, scaled (1m)
Personal: "I love building models." The four elements of the craft. What changes: thousands of
agents poking at every piece at once. Tee up the question sequence: "so let me ask the question
that started this for me."

### 4–6 · The question sequence (~2.5m — the inspiration beat; let each number land)
The same escalation I put to CBO in May, and it belongs in this room even more:
- **What if every bill had a score?** ~10k bills per US Congress × 10 years × 3 budget
  categories = >300k cells as the FLOOR — an order of magnitude more proposals than ever get a
  formal public score. And that is one legislature; Belgium alone legislates through six
  parliaments. [Scale check, stated on-slide; not a claim every bill deserves a score.]
- **What if every statistical series had a forecast?** This room PRODUCES the cells: 1m public
  statistical cells × a 10-year horizon = >10m forecast cells, before uncertainty bands.
- **What if you cross them?** 10k bills × 1m cells × 10 years = >100 billion
  bill-statistic-year cells. Landing: the hard question is not writing down more numbers — it
  is which cells deserve estimates, which deserve uncertainty bands, and which should be
  marked out of domain. That is where AI changes the shape of the work.

### 7 · How do we get there? (1m)
AI can't do it on its own today (PolicyBench, coming shortly). Two compounding tracks:
use AI to build the apparatus (rules, data, theory, tooling — human review at every step);
then equip AI to run projections on that apparatus at scale. The rest of the talk is the
apparatus.

### 8 · Outline (30s)
Rules → Data → Live → Where this goes.

### 9 · Rules divider (15s)

### 10 · PolicyEngine today (2m)
Open source since June 2021 (AGPL-3.0). US and UK tax-benefit models — for this room: an open
EUROMOD-family stack for the US and UK, built in public. Scale numbers: 95,000+ parameters,
5,500+ variables, 4,693 test files, 103 programs in the coverage registry [Facts Register +
policyengine.py README, re-verified 2026-08-26]. Credibility: No 10's data science team built
10ds-microsim on it (Nikhil is an Innovation Fellow there since summer 2025); MOUs with NBER
(open source TAXSIM emulator) and the Atlanta Fed (Policy Rules Database validation).

### 11 · Who uses it (30s)
Logo wall — researchers (NBER, Georgetown, USC), government (JEC, BEA), builders
(MyFriendBen, Amplifi, Mirza). Don't read it out; one sentence and move.

### 12 · PolicyBench (2m)
The motivating failure: ask a frontier model a basic tax-benefit question and check it against
the computed answer. Best model: 88.7% of household amounts exact — about 1 in 9 wrong.
Weakest of 32: more than 1 in 3 wrong. On SNAP cases where a family is owed benefits, models
mostly answer €0 — sorry, $0 — no model gets more than 1 in 20 right [policybench.org, v1.1
snapshot 2026-08-22]. Landing line: AI is impressive at code, search, summarization. It is not
a substitute for a model.

### 13 · But it can help us encode faster (30s)
Pivot: AI can't compute policy; it can help build the substrate that does.

### 14–19 · Evolution steps 1–6 (~45s each, 4.5m total)
The encoder history, kept from the CBO deck [numbers = our own project history]: single prompt
(70% error) → pipeline → parallel agents → validation gates → skills → the full workflow.
Tell it as a story of adding verification, not adding intelligence: every step that worked
added a check, not a bigger model.

### 20 · The Axiom Foundation: encode, verify, publish (1.5m)
The requirements from the evolution → why a foundation: the rules layer should be a public
good. Encode: statute → RuleSpec, every value cites its authority, every clause carries
effective dates. Verify: deterministic gauntlet + oracles — PolicyEngine, TAXSIM, EUROMOD,
SNAP quality-control data — "the model that wrote the rules never grades its own work."
Publish: statute, encoding, validation record, computation graph in one place. axiom.org.

### 21 · Belgian income tax, validated against EUROMOD (2m)
The Belgium result, for this room [axiom-oracles origin/main, verified 2026-08-26]:
23/23 in-scope EUROMOD BE_2025 policies conformant; 33 suites, 156 household comparisons;
zero unexplained mismatches. All 40 raw disagreements dispositioned: 33 traced to engine
differences and filed as findings for the EUROMOD team's review on the public EC-JRC tracker;
7 explained residuals on our side. Tone: EUROMOD is the reference we're grateful exists;
cross-checks flow both directions — that's what a shared open scoreboard is for. The
couples-PIT arc (couples, pensions, self-employment, replacement income) merged on main;
dependants and child benefits encoded, held at the signed-corpus release frontier.
NEVER: "perfect match", "we beat EUROMOD", or any certified language.

### 22 · Complete is not certified (2m)
The honesty machinery. Certified = computed(conformant AND exercised AND closed AND
executable) — no flag set by hand [CERTIFIED.md v3]. Today: 13 programs in the registry, 10
conformant, zero certified. Denmark is the flagship: matches EUROMOD on every case across
three reference legs, blockers empty — certified = no, because 81 law-derived dependencies
remain unencoded. US tariff: 216M row-level comparisons vs the Yale Budget Lab statutory
panel, 0 unexplained — still not conformant (1.59M open units). Landing: the scoreboard
grades itself honestly; that is the design. For officials in the room, this is the answer to
"why trust an AI-built model": you don't — you check the certificate.

### 23 · Data divider (15s)

### 24 · The data challenge (1.5m)
Comprehensive AND accurate. US: no single survey has everything, admin data locked. The
European inversion — Belgium's registers are linked; the binding constraint is release, which
is why BEAMM invests in synthesis. Both directions converge on the same needs: rich
calibration targets and validation services.

### 25 · Imputation (1m)
Quantile regression forests, full conditional distributions, tails included. AI's role:
reading survey documentation, catching definitional mismatches.

### 26 · Calibration (1m)
Gradient descent over household weights against thousands of published administrative targets.
AI's role: target ingestion, schema reconciliation, promote-on-review.

### 27 · Microcosm-BE (2m)
The same recipe on Belgium [sealed v0.5 artifacts, verified 2026-08-26]: 57,240 household
records calibrated to 254 targets — sums of Chronicle facts (Statbel, ONSS, JRC, FPB;
surveys validation-only). Mean |error| 1.84%; 242 of 254 targets within 5%. The EUROMOD
column ledger: all 182 substantive output columns accounted for — 10 matched, 143 explained,
29 named gaps, zero unclassified. Say the provenance line straight: support records are a
reweighted US survey donor pool; a Belgian donor pool is the planned upgrade. If SILC comes
up: CAPE holds SILC-BE access — the acceptance test is ready to rerun on a Belgian donor,
without the data leaving their machines.

### 28–29 · The data, anchored in public (45s — 28 is the LIVE dashboard iframe; 29 is the static fallback, skip one)
Dashboard screenshot: every target published with its error; 96.1% within 10% on the live
page. "You don't have to take my word for any of this — it's a website."

### 30 · Microplex (45s) — CUT FIRST IF LONG
Where the US data layer heads: multi-spine, automated target discovery, promote-on-review,
versioned public releases.

### 31–39 · Live demo (~9m including DemoPy)
Follow DEMO-SCRIPT.md. Slides 32 and 37 embed the LIVE apps (Axiom App Belgium; the
policyengine.org/be reform simulator) with an Expand button — drive the demo inside the deck
or in the preloaded browser tabs, whichever feels smoother. The static screenshot slides
sitting after each live slide (33–36, 38) are wifi insurance: if the network dies, arrow
forward and narrate them. Slide 39 is the policyengine.py code slide (works offline).

### 40 · Future divider (15s)

### 41 · Conductors, not oracles (2m)
The frame for the roundtable hour: the model routes to verified tools and integrates
calibrated outputs; analyst judgment lives at every routing decision. The
judgment-to-mechanism loop: intuition becomes mechanism over time.

### 42 · Forecast uncertainty (2m) — OPTIONAL, CUT SECOND IF LONG
Professional 10-year growth consensus has never been tighter: SPF 2026Q1 median 2.1%, IQR
0.2pp — half its 1990s level. Published AI-era growth estimates: +0.07pp/yr (Acemoglu) to
+30pp/yr (Epoch AI) [Philadelphia Fed SPF; AI Frontiers compilation]. Landing: when credible
forecasts of the era span 400×, evidence infrastructure's job shifts from defending one
number to letting a ministry recompute the present.

### 43 · It takes all of us (1.5m)
Model-building has always been about making consequences visible before the choice. Statistical
offices, EUROMOD, BEAMM, ministries, open models — each doing what it does best. Hand-off:
"which is exactly what the roundtable at 16:00 is about — see you there."

### 44 · Thank you / QR (leave up)
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
No — and the label says so. It's a synthetic population calibrated to 254 Belgian
administrative and national-accounts targets; the support records are a reweighted US donor
pool, and a Belgian donor pool (e.g. SILC-based, run by partners who hold access) is the
planned upgrade. Cross-engine agreement on it is evidence about the encodings.

**"Can it score the July 2026 PIT reform?"** (likely from officials)
The reform is encoded and a cross-engine comparison is in validation with partners — results
aren't public yet. [Numbers are HELD — do not state them.]

**"What about data protection / can our data leave the building?"**
It doesn't need to: the acceptance tests and calibration run wherever the data lives —
enclave-style. What we need published is aggregates: calibration targets and validation
statistics, not microdata.

**"Who pays for this / what's the business model?"** (no funding ask in the talk)
PolicyEngine is a nonprofit; the Axiom Foundation is a fiscally sponsored project of the PSL
Foundation. The encodings are a public good; paid work products fund the org.

**"Is AI going to replace modelers?"**
Conductors, not oracles: the craft moves up a level — source interpretation, assumptions,
edge cases, sign-off. Every step of the encoder evolution that worked added a check, not a
bigger model.

**"How accurate are LLMs on policy questions?"**
PolicyBench: best model ≈1 in 9 household amounts wrong to the dollar; weakest of 32 more
than 1 in 3. That's why grounding in executable law matters.

**"What would a BEAMM/CAPE collaboration look like?"**
Tom and I are discussing exactly that — shared validation surfaces, a Belgian donor pool,
BEAMM's published estimates alongside ours on public scoreboards. The workshop is the public
face of that conversation. [Keep it at this altitude; funding vehicle status is not public.]
