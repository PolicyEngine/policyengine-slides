# Speaker notes — Law is an alignment problem

The Overhang 2026 · American Geophysical Union, Washington DC
Saturday September 19, 2026 · Max Ghenis · 5:45–6:15 PM ET, Luna (113A)
Deck: `/slides/overhang-2026` · 15 slides plus 5 backups · 16-minute talk, 12 minutes of objections, stop at 6:15 for dinner.

The arc: changing baselines → laws as an alignment mechanism → forecasts for bills and outcomes → tools with feedback loops → one bill from statute to forecast → the audience's forecast → a public score and questions about legitimacy.

## Timing map (30-minute cut)

Slide numbers below are positions in the 30-minute order. The slide-by-slide notes further down keep the original 20-slide numbering; the five slides cut from the talk now sit after the end slide as backups (16 How well did they do? · 17 What if every outcome had an estimate? · 18 What if you cross them? · 19 How do we get there? · 20 One bill through the stack).

| Elapsed | Slides | Section | Minutes |
|---|---|---|---|
| 0:00–2:00 | 1–3 | Title, stated uncertainty, growth and the upper tail | 2 |
| 2:00–4:00 | 4–5 | Law is an alignment problem; AI already drafts bills | 2 |
| 4:00–5:00 | 6 | What if every bill had a score? | 1 |
| 5:00–6:00 | 7 | AI alone can't do it (models answer without tools) | 1 |
| 6:00–8:00 | 8 | What do we arm the AI with? | 2 |
| 8:00–11:00 | 9–10 | S. 3596: the rules, then the model | 3 |
| 11:00–13:00 | 11 | Your number first: 90 seconds of quiet writing | 2 |
| 13:00–14:30 | 12 | The agent's forecast and its reasoning | 1.5 |
| 14:30–16:00 | 13 | The loop that matters most; the scoreboard today | 1.5 |
| 16:00–28:00 | 14 | Where does this break? Goodhart, who sets the objectives, legitimacy | 12 |
| 28:00–30:00 | 15 | Which bill next? Stop at 6:15; continue over dinner | 2 |

Start at about 5:48 so people can walk over from the main stage. Page through the whole deck once before presenting so the two chart images and the live pages are cached. If the network fails, describe slides 9 and 12 from the numbers on slides 10, 11 and 13.

## Slide-by-slide track

### 1 · Law is an alignment problem (30s)

“What if every bill had a forecast?” Ask the audience to hold that question through the talk.
I build software that connects policy rules to modeled consequences and forecasts that can be scored.
Start with the economic baseline those laws operate within.

### 2 · If the baseline moves (1m 15s)

These are forecasters' stated distributions for next-year US real GDP growth, using first-quarter survey rounds.
The pooled standard deviation is 1.41 percentage points in 2026, against 1.29 over 1992–2020; it reached 2.18 in 2021.
The chart puts today's uncertainty alongside the historical range and the pandemic spike.

### 3 · Forecasters marked growth down, and the upper tail with it (1m 30s)

Comparing 2015–19 with 2025–26, mean growth falls from 2.19% to 1.89%; the probability above 4% falls from 5.6% to 4.2%. The later window contains only two rounds.
FRI's pooled fitted distributions for AI experts imply a probability rounding to 0.0% of growth averaging above 10% in 2025–29, rising to 3.5% under rapid AI progress.
The horizons and survey designs differ. Use them to ask what scenarios our policy infrastructure can handle.

### 4 · How well did they do? (45s)

Realized next-year growth landed inside the pooled one-standard-deviation band in 22 of 33 years.
The misses cluster: six straight in 1996–2001, then 2008–09, 2011, and 2020–21.
“If conditions change quickly, policy has to move faster than it does.”

### 5 · Law is an alignment problem (1m)

We use laws to align collective goals with outcomes. We write those laws in prose, change them slowly, and rarely score them against their goals.
Trace values → policies → indicators: people choose goals, institutions choose policy, and measured outcomes let us learn.
The substrate never decides what to value.

### 6 · AI already drafts bills (45s)

Effort's Pangram-based detector flagged 117 of 2,994 bills in the 119th Congress, or 3.9%.
Its Q2 2026 findings-and-preamble series reads 6.4%, versus 0.6% for statutory text; these are detector findings and carry that method's limits.
AI has entered the drafting process. Ask what evidence should accompany the prose it helps produce.

### 7 · What if every bill had a score? (30s)

Move from the proposals that receive formal estimates to a forecast attached to each bill.
Keep the question practical: which consequences matter, and what would count as an observed outcome?
Each estimate needs an explicit policy condition, time horizon, and source for resolution.

### 8 · What if every outcome had an estimate? (30s)

Budget effects are one part of a bill's consequences. Participation, household resources, and regional outcomes create other forecastable questions.
Official statistical series give these questions a shared vocabulary and a place to resolve.
The useful expansion connects legislative choices to outcomes people care about.

### 9 · What if you cross them? (30s)

Cross bills with outcomes and forecast horizons, and the space of questions grows.
We still have to decide which cells deserve estimates, which need wide uncertainty intervals, and where the evidence is insufficient.
That requires a system that can expose its assumptions and learn from errors.

### 10 · How do we get there? (45s)

AI can help build the rules, data, and models that support policy analysis.
It can then use that infrastructure to assemble forecasts and explain their dependencies.
Each layer needs a feedback loop that tests the claim it makes.

### 11 · AI alone can't do it (1m 30s)

State the condition first: these models answer without external tools—no calculator, search, or PolicyEngine. Function-call output only formats the answer.
The September 5 PolicyBench snapshot covers 39 models and 100 households: best weighted exact match is 89.2%, weakest is 62.6%; currency answers match within $1 and eligibility flags match exactly.
The public fixed test set and serving differences limit interpretation; forced answer calls disable extended thinking for some Claude rows, and the site labels sensitivity reruns.
These results motivate testing what changes when models can use the tools they need.

### 12 · What do we arm the AI with? (2m)

Walk the five needs: policy rules, official statistics, a population, a reform model, and judgment that combines them into forecasts.
Name each feedback loop: rule checks and external comparisons; intact and timely receipts; calibration and record checks; explained model differences; forecasts scored against first prints.
Toggle to the compact roadmap: Axiom, Chronicle, Microcosm, PolicyEngine, and Thesis. The Axiom Foundation supports the rules layer; Thesis is a prototype.
Bring the architecture down to one bill and one observable outcome.

### 13 · One bill through the stack (45s)

S. 3596, the Stronger Start for Working Families Act, would lower the operative earnings threshold for the refundable child tax credit from $2,500 to $1.
The 15% phase-in rate and refundable cap stay unchanged; the earnings-formula gain reaches about $375 per family.
Use the bill to examine a forecasting workflow. Evaluating its consequences leaves the policy judgment with the audience.

### 14 · The rules (1m 30s)

Expand the statute page and show the prose beside the encoded rules, including `ctc_refundable_phase_in_threshold`.
Section 24(d)(1)(B)(i) contains the underlying $3,000 amount; section 24(h)(6) applies the current $2,500 override. The bill changes the former and removes the latter.
The trace from statutory text to a dated parameter makes the model's interpretation inspectable.

### 15 · The model (1m)

The displayed PolicyEngine calculation is −$1.83B federal in 2026, −$17.1B over 2026–2035, with 6.5% of people gaining; retain “certification pending.”
This is a static simulation. The stored computation uses a zero-dollar threshold as an approximation to the bill's one-dollar threshold.
A claim count also depends on filing and take-up. That gives us a forecast question beyond the simulated budget effect.

### 16 · Your number first (2m 30s)

Read the question: how many tax returns will claim the refundable child tax credit for TY2027 if the bill passes?
Point to the four first prints—19.1M, 37.8M, 18.1M, 17.6M—and the threshold change from $2,500 to $1.
“Two minutes. Write a median and an 80% interval.” Keep the agent's numbers hidden and give the room the full two minutes.

### 17 · The agent's forecast (1m 30s)

Reveal the prototype's recorded forecasts: current law 17.6M [5.1M, 30.1M], enacted 27.2M [14.7M, 39.7M], a gap of 9.6M; compare these with the audience's estimates.
The trace adds half of TY2021's excess over its neighbours to the last print. That half is a judgmental assumption; the interval half-width is 1.28 times the sample standard deviation of four prints.
The forecast runs were recorded August 4, 2026. The condition is judged December 31, 2027; December 31, 2029 is the registered resolution bound for the first print.
The assumptions are visible, so people can challenge the analogy, propose another method, and later compare scores.

### 18 · The loop that matters most (1m 15s)

The Thesis prototype scoreboard shows 45 witness-verified scores, with 35 inside their stated 80% intervals.
Against persistence, the CRPS ratio is 0.98 on nine matched targets. That is a small sample and close to the baseline.
The useful loop is to publish forecasts and reasoning before outcomes, score against official first prints, and improve the next forecast.

### 19 · Where does this break? (1m 30s)

What happens when optimizing an indicator changes its relationship to the goal? That is the Goodhart question.
Whose outcomes receive a forecast, and whose experience is missing from the available data? Who sets those objectives?
How do people contest the model, the forecast, and the use made of them? “Which bill should get a forecast next?”

### 20 · Continue the conversation (30s)

Leave the four links up: maxghenis.com/expectations, axiom.org, policyengine.org, and thesisinstitute.org.
Invite the room to start with a failure mode, an alternative forecast, or a bill they want to examine.
Hand over to the 20-minute discussion.
