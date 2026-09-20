# Speaker notes — Law is an alignment problem

The Overhang 2026 · American Geophysical Union, Washington DC
Saturday September 19, 2026 · Max Ghenis · 6:15–7:00 PM ET, Volcano/Mountain (113BC), during dinner; lightning talks follow at 7:00 in the same room
Deck: `/slides/overhang-2026` · 16 slides · backups in `/slides/overhang-2026-backup` · 16-minute talk, about 11 minutes of objections from the five-layer slide; start at 6:20 so people have plates, hard stop at 6:55 for the lightning talks.
Lightning talk (Sat 7:00–8:00 PM block, Volcano/Mountain): `/slides/overhang-2026-lightning`, 8 reused slides, script in `../overhang-2026-lightning/LIGHTNING.md`.

The arc: the claim (law is an alignment loop we rarely close) → why now (AI already drafts bills) → AI alone can't compute the answer → five needs, each with a feedback loop → one bill from statute to model → the room's indicator, then its number → the agent's forecast → slide 4 answered: a conductor, graded → the scoreboard → the loop run backwards, from values to policies → the five layers with their names → objections.

## Timing map (30-minute cut)

The spoken script is in SCRIPT.md (slide by slide, with a running clock). Slide 12 closes the loop that slide 4 opens, after the IARIW "Conductors, not oracles" beat; slide 14 runs slide 2's loop backwards, which is the title's claim. The two SPF slides moved to Max's Expectations lightning talk, hosted with his personal work. The five backups (How well did they do?, What if every bill had a score?, What if every outcome had an estimate?, What if you cross them?, How do we get there?) live in the overhang-2026-backup deck, so this deck ends on its end slide.

| Elapsed | Slide | Section | Minutes |
|---|---|---|---|
| 0:00–0:35 | 1 | Title: the question and the plan | 0.5 |
| 0:35–1:25 | 2 | Law is an alignment problem; the mechanism is changing hands | 0.75 |
| 1:25–2:15 | 3 | AI already drafts bills | 0.75 |
| 2:15–3:15 | 4 | Without tools, the best model gets 89% right; hold the tools question | 1 |
| 3:15–4:25 | 5 | What do we arm the AI with? (skip the roadmap toggle) | 1.25 |
| 4:25–5:50 | 6–7 | S. 3596: the bill, then the rules | 1.5 |
| 5:50–6:55 | 8 | Which statistic would this bill move most? 60 seconds of shout-outs | 1 |
| 6:55–8:00 | 9 | PolicyEngine computes the standard outputs; cost against the deficit band | 1 |
| 8:00–10:05 | 10 | The agent picked returns claiming the credit: 90 seconds of quiet writing | 2 |
| 10:05–11:50 | 11 | The agent's forecast and its trace | 1.75 |
| 11:50–12:30 | 12 | With the stack, the model stops guessing | 0.75 |
| 12:30–13:35 | 13 | Scoring the forecast is the loop that ranks the other four | 1 |
| 13:35–14:25 | 14 | Cheap conditionals let us run the loop backwards | 0.75 |
| 14:25–27:00 | 15 | Every layer exists today, then the objections: Goodhart, who sets the objectives, legitimacy | 12.5 |
| 27:00–27:30 | 16 | Which bill next? Stop at 6:55 for the lightning talks | 0.5 |

Start at about 6:20 so people can get food first; the listing runs to 7:00 and the lightning talks need the room at 7:00. Page through the whole deck once before presenting so the live pages are cached, and click each live toggle once (slides 4, 7, 8, 13). If the network fails, the numbers on slides 8, 9 and 11 stand on their own; the "If the wifi dies" section of SCRIPT.md covers slides 7 and 11.

## Slide-by-slide track

### 1 · Law is an alignment problem (35s)

Seats up front. PolicyEngine, the Axiom Foundation, and a prototype called Thesis.
"What if every bill in Congress came with a forecast, registered before the vote and scored when the official number prints?" Hold that question.
Sixteen minutes of talk, one forecast of their own, twelve minutes to break it.

### 2 · Law is an alignment problem (55s)

Values → policies → indicators: the same shape as the AI alignment loop (objective, mechanism, feedback signal).
We write laws in prose, change them slowly, and rarely score them against their stated goals; a signal that arrives years late leaves the loop open.
"It moves faster now, and the mechanism is changing hands."

### 3 · AI already drafts bills (50s)

Effort, published Wednesday: Pangram's detector flagged 117 of 2,994 bills in the 119th Congress (3.9%); Q2 2026, 6.4% of findings-and-preamble text against 0.6% of statutory text.
A detector flag is evidence of AI use and does not establish who wrote what. Max Spero from Pangram is here this weekend.
"What evidence should travel with them?"

### 4 · Without tools, the best model gets 89% of household answers right (55s)

A score gives a claim people can question; a forecast gives a claim they can grade. Could the same models supply that evidence?
PolicyBench: 39 models, 100 households, no tools. Best 89.2% (GPT-5.6 Sol). On households that actually get SNAP, exact amounts 28.3% of the time; models zero them out on asset heuristics. Exact means within a dollar and eligibility matches.
Hold the tools question: the answer key on that board is PolicyEngine's own output. Slide 12 comes back to it. Optional toggle: the live board.

### 5 · What do we arm the AI with? (1m 10s)

Five needs, each with its own feedback loop: rules that run, official statistics with receipts, a calibrated population, a model that computes reforms, and judgment with a resolution date.
The fifth loop ranks the other four. The checks work the same for an agent and for a human analyst.
Skip the roadmap toggle. "Now one bill, three of those layers, and one number the IRS prints."

### 6 · S. 3596 moves one threshold from $2,500 to $1 (35s)

S. 3596, the Stronger Start for Working Families Act (Hassan, Young), in Senate Finance since January 8.
Refundable CTC earnings threshold $2,500 → $1; the 15% phase-in and the cap stay, so a family gains at most about $375.
One threshold in the statute, one number in an IRS table. "Layer one, the rules."

### 7 · The Axiom Foundation encodes the section the bill amends (50s)

Live: section 24(d)(1) at axiom.org, statute on the left, 14 encoded rules on the right; ctc_refundable_phase_in_threshold holds the $2,500.
Every rule traces to its sentence of statute and its effective date, so a model, an agent, or you can read the change from the page.
Optional: "Show the rule graph", then Expand. The refundable credit sits at the end of 128 inputs; the banner says the subtree can't execute yet. Prototype.

### 8 · Which statistic would this bill move most? (1m 05s)

How would you tell whether the bill did its job? Name an official statistic and how far the bill moves it in standard deviations of that statistic's own forecast.
Sixty seconds of shout-outs; repeat each one back. Returns claiming the credit, child poverty, filing among the lowest earners.
"Keep your list. Layer four."
### 9 · PolicyEngine computes what the change does to each household (1m 05s)

Run today on the API with the bill's $1 threshold: $1.83B federal cost in 2026. Cost is the gap between two deficit forecasts; the May 2026 monthly deficit forecast ran $240B–$380B (print $293B), so the bill is noise inside that band.
The kind of number CBO and the scoring world run on: one outcome per run, behavior fixed, no interval attached.
"The model hands the forecast a mechanism, and the statistic that scores the bill stays an open choice. An agent made that choice."
### 10 · The agent picked returns claiming the credit (2m 05s, 90 seconds silent)

Returns claiming the refundable CTC for TY2027 if the bill passes. First prints: 19.1M (2020), 37.8M (2021, the year the earnings test dropped), 18.1M, 17.6M.
"Write a median and an 80 percent interval. Ninety seconds, no talking. Go."
Ten seconds. Keep the number in front of you.

### 11 · The agent forecast 27.2M returns if the bill passes (1m 45s)

Registered August 4; we run the agents at Thesis and we score them. Current law 17.6M [5.1M, 30.1M]; enacted 27.2M [14.7M, 39.7M]; gap 9.6M. Hands up above 27M; below 17.6M.
The trace: last print plus half of 2021's excess over its neighbors, labeled a judgmental assumption; half-width 1.28 sample standard deviations of four prints, one of them 2021.
"The model computed its change from the rule. The agent reasoned from a precedent. Both sit on the same page, and the IRS print grades the forecast." Judged December 31, 2027; first print due by end of 2029.

### 12 · With the stack, the model stops guessing (40s)

Back to the benchmark. That board graded an oracle: a model answering from memory, against PolicyEngine's own answer key. Best 89%.
What they just watched was a conductor: the page routed one question through the rules (parameter), the model (mechanism), and the IRS prints (base rate); the agent's judgment sat in named assumptions, and the print grades them.
"Grades like that tell us which judgments deserve to become mechanism. The grade is the loop that ranks the other four."

### 13 · Scoring the forecast is the loop that ranks the other four (1m 05s)

Publish the reasoning, wait for the official number, score the forecast. Scoreboard this morning: 45 witness-verified scores, 35 inside their 80% interval, CRPS ratio 0.98 against persistence on nine matched targets.
The misses stay on the page and feed back into the rules, the data, the model, or the next forecast. Prototype; we run the agents and we score them.
"If that ratio stays near one as the record grows, the agents add nothing over persistence, and the scoreboard will say so." Optional toggle: the live scoreboard.

### 14 · Cheap conditionals let us run the loop backwards (50s)

If the ratio drops below one, scale it: every official statistic forecast (the May deficit), every bill's statistics derived (the shout-outs), every pair a cheap conditional (S. 3596 and returns claiming the credit).
Then slide 2's loop runs backwards: pick the value, set the indicator's level, search the bills whose conditional forecasts move it.
"That's the alignment problem in the title, with the arrows reversed. And the moment you search policies against indicators, Goodhart stops being a footnote. So break it."

### 15 · Every layer of the stack exists today, each with its own check (30s)

Back to slide 5 with names on the five things: the Axiom Foundation (rules), Chronicle (statistics), Microcosm (population), PolicyEngine (model), Thesis (forecasts, prototype).
"The scoreboard on that last layer ranks the other four. Now break it." Then the three headings by voice: Goodhart, who sets the objectives, legitimacy; Chatham House rules; which bill next.

### 16 · What if every bill had a forecast? (25s)

Dinner is at 6:15. Four links on the screen. Keep your number; the IRS prints the answer by the end of 2029 and the agent's score will be on the last link.
Bring the bill you want forecast next to dinner. Thanks.
