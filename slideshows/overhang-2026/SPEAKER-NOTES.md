# Speaker notes — Law is an alignment problem

The Overhang 2026 · American Geophysical Union, Washington DC
Saturday September 19, 2026 · Max Ghenis · 6:15–7:00 PM ET, Volcano/Mountain (113BC), during dinner; lightning talks follow at 7:00 in the same room
Deck: `/slides/overhang-2026` · 16 slides · backups in `/slides/overhang-2026-backup` · 15-minute talk, about 12 minutes of objections; start at 6:20 so people have plates, hard stop at 6:55 for the lightning talks.
Lightning talk (Sat 7:00–8:00 PM block, Volcano/Mountain): `/slides/overhang-2026-lightning`, 8 reused slides, script in `../overhang-2026-lightning/LIGHTNING.md`.

The arc: the claim (law is an alignment loop we rarely close) → why now (AI already drafts bills) → AI alone can't compute the answer → five needs, each with a feedback loop → one bill from statute to model → the room's indicator, then its number → the agent's forecast → slide 4 answered: a conductor, graded → the scoreboard → the loop run backwards, from values to policies → objections.

## Timing map (30-minute cut)

The spoken script is in SCRIPT.md (slide by slide, with a running clock). Slide 12 closes the loop that slide 4 opens, after the IARIW "Conductors, not oracles" beat; slide 14 runs slide 2's loop backwards, which is the title's claim. The two SPF slides moved to the lightning deck. The five backups (How well did they do?, What if every bill had a score?, What if every outcome had an estimate?, What if you cross them?, How do we get there?) live in the overhang-2026-backup deck, so this deck ends on its end slide.

| Elapsed | Slide | Section | Minutes |
|---|---|---|---|
| 0:00–0:35 | 1 | Title: the question and the plan | 0.5 |
| 0:35–1:25 | 2 | Law is an alignment problem; the mechanism is changing hands | 0.75 |
| 1:25–2:15 | 3 | AI already drafts bills | 0.75 |
| 2:15–3:10 | 4 | AI alone can't do it; hold the tools question | 1 |
| 3:10–4:20 | 5 | What do we arm the AI with? (skip the roadmap toggle) | 1.25 |
| 4:20–6:45 | 6–8 | S. 3596: the bill, the rules, then the model | 2.5 |
| 6:45–7:50 | 9 | Your indicator first: 60 seconds of shout-outs | 1 |
| 7:50–9:55 | 10 | Your number first: 90 seconds of quiet writing | 2 |
| 9:55–11:40 | 11 | The agent's forecast and its trace | 1.75 |
| 11:40–12:20 | 12 | Conductors, not oracles: the answer to slide 4 | 0.75 |
| 12:20–13:25 | 13 | The loop that matters most; the scoreboard today | 1 |
| 13:25–14:15 | 14 | Run the loop backwards: values, indicators, policies | 0.75 |
| 14:15–27:00 | 15 | Where does this break? Goodhart, who sets the objectives, legitimacy | 12.75 |
| 27:00–27:30 | 16 | Which bill next? Stop at 6:55 for the lightning talks | 0.5 |

Start at about 6:20 so people can get food first; the listing runs to 7:00 and the lightning talks need the room at 7:00. Page through the whole deck once before presenting so the live pages are cached, and click each live toggle once (slides 4, 7, 13). If the network fails, the numbers on slides 8, 9 and 11 stand on their own; the "If the wifi dies" section of SCRIPT.md covers slides 7 and 11.

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

### 4 · AI alone can't do it (55s)

A score gives a claim people can question; a forecast gives a claim they can grade. Could the same models supply that evidence?
PolicyBench: 39 models, 100 households, no tools. Best 89.2% (GPT-5.6 Sol), weakest 62.6%. Exact means within a dollar and eligibility matches.
Hold the tools question: the answer key on that board is PolicyEngine's own output. Slide 12 comes back to it. Optional toggle: the live board.

### 5 · What do we arm the AI with? (1m 10s)

Five needs, each with its own feedback loop: rules that run, official statistics with receipts, a calibrated population, a model that computes reforms, and judgment with a resolution date.
The fifth loop ranks the other four. The checks work the same for an agent and for a human analyst.
Skip the roadmap toggle. "Now one bill, three of those layers, and one number the IRS prints."

### 6 · One bill through the stack (35s)

S. 3596, the Stronger Start for Working Families Act (Hassan, Young), in Senate Finance since January 8.
Refundable CTC earnings threshold $2,500 → $1; the 15% phase-in and the cap stay, so a family gains at most about $375.
One threshold in the statute, one number in an IRS table. "Layer one, the rules."

### 7 · The rules (50s)

Live: section 24(d)(1) at axiom.org, statute on the left, 14 encoded rules on the right; ctc_refundable_phase_in_threshold holds the $2,500.
Every rule traces to its sentence of statute and its effective date, so a model, an agent, or you can read the change from the page.
Optional: "Show the rule graph", then Expand. The refundable credit sits at the end of 128 inputs; the banner says the subtree can't execute yet. Prototype.

### 8 · The model (1m)

PolicyEngine over a calibrated population, run today on the API with the bill's $1 threshold: $1.83B federal cost in 2026, SPM child poverty 17.0% → 16.8%. Read the label: certification pending.
Behavior held fixed; the model does not say who files and claims. "The model hands the forecast a mechanism, and the forecast stays a separate question."

### 9 · Your indicator first (1m 05s)

Cost is the usual answer, and the model gives it. The May monthly deficit forecast ran $240B–$380B; the print was $293B. With or without this bill, the distributions overlap almost entirely.
Sixty seconds: shout out statistics the bill would move by more than their own forecast interval. Repeat each one back.
Returns claiming the credit, child poverty, filing among the lowest earners. The bill page lists candidates and admits where no series exists.

### 10 · Your number first (2m 05s, 90 seconds silent)

Returns claiming the refundable CTC for TY2027 if the bill passes. First prints: 19.1M (2020), 37.8M (2021, the year the earnings test dropped), 18.1M, 17.6M.
"Write a median and an 80 percent interval. Ninety seconds, no talking. Go."
Ten seconds. Keep the number in front of you.

### 11 · The agent's forecast (1m 45s)

Registered August 4; we run the agents at Thesis and we score them. Current law 17.6M [5.1M, 30.1M]; enacted 27.2M [14.7M, 39.7M]; gap 9.6M. Hands up above 27M; below 17.6M.
The trace: last print plus half of 2021's excess over its neighbors, labeled a judgmental assumption; half-width 1.28 sample standard deviations of four prints, one of them 2021.
"The model computed its change from the rule. The agent reasoned from a precedent. Both sit on the same page, and the IRS print grades the forecast." Judged December 31, 2027; first print due by end of 2029.

### 12 · Conductors, not oracles (40s)

Back to slide 4. That board graded an oracle: a model answering from memory, against PolicyEngine's own answer key. Best 89%.
What they just watched was a conductor: the page routed one question through the rules (parameter), the model (mechanism), and the IRS prints (base rate); the agent's judgment sat in named assumptions, and the print grades them.
"Grades like that tell us which judgments deserve to become mechanism. The grade is the loop that ranks the other four."

### 13 · The loop that matters most (1m 05s)

Publish the reasoning, wait for the official number, score the forecast. Scoreboard this morning: 45 witness-verified scores, 35 inside their 80% interval, CRPS ratio 0.98 against persistence on nine matched targets.
The misses stay on the page and feed back into the rules, the data, the model, or the next forecast. Prototype; we run the agents and we score them.
"If that ratio stays near one as the record grows, the agents add nothing over persistence, and the scoreboard will say so." Optional toggle: the live scoreboard.

### 14 · Run the loop backwards (50s)

If the ratio drops below one, scale it: every official statistic forecast (the May deficit), every bill's statistics derived (the shout-outs), every pair a cheap conditional (S. 3596 and returns claiming the credit).
Then slide 2's loop runs backwards: pick the value, set the indicator's level, search the bills whose conditional forecasts move it.
"That's the alignment problem in the title, with the arrows reversed. And the moment you search policies against indicators, Goodhart stops being a footnote. So break it."

### 15 · Where does this break? (30s, then about 10 minutes)

Three headings: Goodhart; who sets the objectives (an AI proposed the goals on the bill page; countersign or strike buttons); legitimacy (who contests the model, the forecast, and the use).
Chatham House rules: nothing gets attributed. One request for the end: which bill should get a forecast next.
Answers to the likely objections are in the "If they ask" section of SCRIPT.md.

### 16 · What if every bill had a forecast? (25s)

Dinner is at 6:15. Four links on the screen. Keep your number; the IRS prints the answer by the end of 2029 and the agent's score will be on the last link.
Bring the bill you want forecast next to dinner. Thanks.
