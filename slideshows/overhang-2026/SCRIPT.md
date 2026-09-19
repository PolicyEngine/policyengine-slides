# Overhang script: "Law is an alignment problem"

Start at about 5:48. Running clock counts from the first word. Sixteen slides in config.ts order. Spoken words: about 1,910; the talk ends near 16:40, leaving about 11 minutes for objections. At 130 words a minute plus 90 seconds of quiet and two show-of-hands pauses, the talk ends near 15:30, leaving about 12 minutes for objections before 6:15.

## 1 · Law is an alignment problem (0:35)

Words: 74 · Clock: 0:00 to 0:35

Come on in, there are seats up front. I'm Max Ghenis. I build PolicyEngine and the Axiom Foundation, and I'm prototyping a third thing called Thesis. What if every bill in Congress came with a forecast, registered before the vote and scored when the official number prints? Hold that question. I'll talk for about sixteen minutes, you'll write down one forecast of your own, and then you get twelve minutes to tell me where it breaks. First, what a law is for.

## 2 · Law is an alignment problem (0:55)

Words: 130 · Clock: 0:35 to 1:30

[click] We use laws to align our collective goals with outcomes. People decide what they value. Legislatures choose policies. Statistical agencies measure what happened, and we read those indicators to see whether the policy served the goal. That loop has the same shape as the alignment loop this room argues about for AI: an objective, a mechanism, and a feedback signal. Now look at how we run it. We write laws in prose. We change them slowly. And we rarely score them against the goals their sponsors stated. A feedback signal that arrives years late, and that nobody reads, leaves the loop open. That was tolerable while the world moved slowly. Does it still? Ask the people who are paid to forecast the baseline.

## 3 · If the baseline moves (0:55)

Words: 118 · Clock: 1:30 to 2:25

[click] Your trade. The Philadelphia Fed and the ECB have asked professional forecasters for probability distributions since 1968. I pooled those distributions and scored them at maxghenis.com/expectations. This chart shows the pooled standard deviation for next-year US real GDP growth, first-quarter rounds, with the euro area series beside it. From 1992 to 2020 the US figure averaged 1.29 points. In 2021 it spiked to 2.18. This year it sits at 1.41. So the people who do this for a living say they're less sure about next year than they were on average from 1992 to 2020. Congress writes laws against that baseline, and the people who forecast it have widened their bands. Less sure, but less sure around what?

## 4 · Forecasters marked growth down, and the upper tail with it (1:05)

Words: 141 · Clock: 2:25 to 3:30

[click] Same surveys, same first-quarter rounds. Compare 2015 to 2019 with 2025 and 2026. The mean forecast for next-year growth fell from 2.19 percent to 1.89. The probability they put on growth above 4 percent fell from 5.6 percent to 4.2. The later window covers only two survey rounds, so hold it loosely. Now put that beside the Forecasting Research Institute's survey of AI experts. Their fitted distributions put a probability that rounds to zero on US growth averaging above 10 percent a year from 2025 to 2029, and 3.5 percent if AI progress is rapid. The horizons differ and the survey designs differ. Neither group puts much weight on a fast-changing world, and neither puts zero. If that tail arrives, a loop that scores nothing and takes years to close breaks first. And the mechanism is changing hands too.

## 5 · AI already drafts bills (0:50)

Words: 100 · Clock: 3:30 to 4:20

[click] Effort published this on Wednesday. They ran Pangram's AI-text detector over 2,994 bills in the 119th Congress, and it flagged 117 of them, 3.9 percent. Split the text and the pattern sharpens. In the second quarter of this year the detector flagged 6.4 percent of findings-and-preamble text and 0.6 percent of statutory text. A detector flag is evidence of AI use, and it does not establish who wrote what. Max Spero from Pangram is here this weekend if you want the method. So AI already writes some of the words that become law. What evidence should travel with them?

## 6 · AI alone can't do it (0:50)

Words: 106 · Clock: 5:05 to 5:55

[click] A score gives people a claim they can question. A forecast gives them a claim they can grade. Could the same models supply that evidence? We test that at policybench.org. The models answer with no tools: no calculator, no search, no PolicyEngine. We asked 39 models basic tax and benefit questions about 100 households and checked each answer against the computed one. We count an answer as exact when amounts land within a dollar and eligibility matches. The best model, GPT-5.6 Sol, scored 89.2 percent. The weakest scored 62.6. The other models land between them. Those numbers say nothing about a model with tools. The benchmark leaves that open. They do say the rules have to live somewhere a model can call them.

## 7 · What do we arm the AI with? (1:10)

Words: 145 · Clock: 5:55 to 7:05

[click] So what does a forecasting agent need? Five things, and each one needs its own feedback loop. One, the rules of the policy, encoded so a program can run them, with tests and independent calculators to check the encoding. Two, official statistics, with a receipt for what each agency printed and when. Three, a population at the household level, calibrated to those statistics, with the calibration error published. Four, a model that computes a reform on that population, with its differences from other models explained. Five, judgment: the piece that combines them into a forecast, with a date on which it resolves and a score when it does. That fifth loop ranks the other four. Every one of those checks works the same for an AI agent and for a human analyst. Now one bill, three of those layers, and one number the IRS prints.

## 8 · One bill through the stack (0:35)

Words: 82 · Clock: 7:05 to 7:40

[click] The bill is S. 3596, the Stronger Start for Working Families Act, from Senators Hassan and Young. It has sat in Senate Finance since January 8. It lowers the earnings threshold for the refundable child tax credit from 2,500 dollars to one dollar. The 15 percent phase-in rate stays and the refundable cap stays, so a family gains at most about 375 dollars. I picked it because it moves one threshold in the statute and one number in an IRS table. Layer one, the rules.

## 9 · The rules (0:50)

Words: 91 · Clock: 7:40 to 8:30

[click] [live page] This is the section it amends, section 24(d)(1) of the tax code, at axiom.org. On the left, the statute text. On the right, the 14 rules the Axiom Foundation has encoded from that text, and this one, ctc_refundable_phase_in_threshold, holds the 2,500. The bill changes that parameter. Every rule on this page traces back to the sentence of statute that sets it and the date it took effect, so a model, an agent, or you can read the change from the page instead of guessing at it.

## 10 · The model (1:00)

Words: 127 · Clock: 8:25 to 9:25

[click] Layer four. PolicyEngine runs that parameter change over a calibrated population of US households. Federal cost, 1.83 billion dollars in 2026, and 17.1 billion over 2026 to 2035. 6.5 percent of people gain. Read the two labels. One says certification pending: we have not finished the cross-checks on this pairing. The other says the published run uses a zero-dollar threshold where the bill says one dollar. The simulation holds behavior fixed and computes what the rule change does to each household's credit. It does not model who files a return and claims the credit, and that count depends on take-up. The IRS prints that count. So the model hands the forecast a mechanism, and the forecast stays a separate question.

## 11 · Your indicator first (1:05)

Words: 133 · Clock: 9:25 to 10:30

[click] Before the number, the indicator. Which official statistic would tell you whether this bill did its job? The usual answer is cost, and the model gives it: 1.83 billion dollars in 2026. Now look at the deficit that cost lands in. Our agent's forecast for one month's federal deficit, May, carried an 80 percent interval from 240 to 380 billion dollars. The print came in at 293. With or without this bill, those two distributions overlap almost entirely. A cost score is real, and it is unscoreable against the deficit. So shout out statistics this bill would move by more than their own forecast interval. Sixty seconds. [pause for shout-outs; repeat each one back] Returns claiming the credit. Child poverty. Filing among the lowest earners. The bill page lists its candidates and admits where no series exists. Now your number.

## 12 · Your number first (2:05, of which 90 seconds silent)

Words: 77 · Clock: 10:30 to 12:35 · "Go" lands at about 0:31 after the click

[click] Your number first. How many tax returns will claim the refundable child tax credit for tax year 2027 if this bill passes? The IRS first prints: 19.1 million for 2020, 37.8 for 2021, the year the law dropped the earnings test and raised the credit, then 18.1 and 17.6. Threshold, 2,500 dollars to one dollar. Write a median and an 80 percent interval. Ninety seconds, no talking. Go.

[90 seconds of quiet]

Ten seconds. Keep that number in front of you.

## 13 · The agent's forecast (1:45)

Words: 214 · Clock: 11:30 to 13:15

[click] Our agent registered this on August 4. We run the agents at Thesis and we score them. Under current law, 17.6 million returns, with an 80 percent interval from 5.1 to 30.1 million. If the bill is enacted, 27.2 million, interval 14.7 to 39.7. A gap of 9.6 million returns. Check yours. Hands up if your median came in above 27 million. [pause] Below the last print, 17.6? [pause] Now read the trace. [live page] The agent took the last print, 17.6, and added half of 2021's excess over its neighbors. It calls that half a judgmental assumption. In 2021 the law removed the earnings test and raised the credit. This bill moves one threshold from 2,500 dollars to one. So you can challenge the analogy, and the page shows you where. The interval half-width is 1.28 sample standard deviations of four prints. One of those four is 2021, and that one print stretches the current-law band from 5 to 30 million. If you wrote a tighter band, the page shows the assumption you'd replace. The model computed its change from the rule. The agent reasoned from a precedent. Both sit on the same page, and the IRS print grades the forecast. The condition gets judged on December 31, 2027, and the first print is due by the end of 2029.

## 14 · The loop that matters most (1:05)

Words: 134 · Clock: 13:15 to 14:20

[click] Publish the reasoning. Wait for the official number. Score the forecast. That loop ranks the other four. Here is the scoreboard as of this morning. 45 scores, each one a forecast that an outside timestamp authority recorded before the print. 35 of the 45 landed inside their 80 percent interval. Against a persistence baseline, the CRPS ratio is 0.98 on nine matched targets. The persistence baseline carries the last print forward. Nine targets, and a rough tie with persistence. The misses stay on the page. Each one goes back into the rules, the data, the model, or the next forecast. I'm still prototyping Thesis. We run the agents and we score them. If that ratio stays near one as the record grows, the agents add nothing over persistence, and the scoreboard will say so.

## 15 · Where does this break? (0:40, then 12 minutes of objections)

Words: 90 · Clock: 14:20 to 15:00 · Objections 15:00 to 27:00

[click] Now break it. Three headings. Goodhart: what happens when the measure becomes the target? Who sets the objectives: an AI read this bill and proposed the goals on its page, and the page has buttons to countersign or strike them. Legitimacy: who gets to contest the model, the forecast, and the use somebody makes of them? We have twelve minutes under Chatham House rules, so nothing you say gets attributed. One request for the end: tell me which bill should get a forecast next. Who's first?

## 16 · What if every bill had a forecast? (0:25)

Words: 50 · Clock: 27:00 to 27:25 · About 6:15

[click] Dinner is at 6:15, and we're there. Four links on the screen. If you wrote a number tonight, keep it. The IRS prints the answer by the end of 2029, and the agent's score will be on that last link. Bring the bill you want forecast next to dinner. Thanks.

## If the wifi dies

**Slide 9, The rules.** The panel would show section 24(d)(1) of the tax code on the left and, on the right, the 14 rules the Axiom Foundation encoded from it, each traced to its sentence of statute and its effective date. The one the bill changes, ctc_refundable_phase_in_threshold, holds the 2,500 dollars you see on the left of this slide, and the bill moves it to one.

**Slide 12, The agent's forecast.** The page behind this panel holds the agent's full trace: last print, plus half of 2021's excess over its neighbors, which it labels a judgmental assumption, with the interval set at 1.28 standard deviations of four prints. The numbers on the left are the numbers on that page, recorded August 4, judged December 2027, and due for a first print by the end of 2029.

## If they ask

**Goodhart.** Nothing here removes it. Most targets are first prints from statistical agencies, and the program under judgment doesn't produce those. Each goal maps to several metrics, and the page shows effects beside the goals. Program-office counts sit closer to the program, and they're more exposed.

**Who sets the objectives?** Nobody voted for them. An AI read the bill and proposed goals its authors could sign, and the page has countersign and strike buttons. The tools make a stated objective checkable and show effects the sponsors left out. Choosing objectives stays with people.

**A conditional forecast isn't causal, and you can't score the arm that didn't happen.** Both hold. Only one arm resolves, and the gap between arms mixes the bill's effect with everything else that differs between those worlds. The model supplies the causal structure the forecast lacks. Scoring many pairs over many bills shows which method to trust.

**Why is the agent's interval 5 to 30 million?** The agent set the half-width at 1.28 sample standard deviations of four prints, and one of the four is 2021's 37.8 million. Drop 2021 and the other three sit between 17.6 and 19.1. The trace shows that choice, and you can replace it.

**PolicyBench without tools is unfair.** It measures what a model answers from memory, as the slide says. A model with a calculator and a rules engine is a different experiment, and the benchmark leaves that open. Both numbers belong in public, and today we have one of them.

---

# Flow review

**Transitions that fought.** Two. Growth to Alignment has no bridge on screen: the "policy has to move faster" line lives on the backup Backtest slide, so I put it in your mouth at the end of slide 3. Primitives to Rules fought hardest. BillSlide sits in backups, so the Rules slide has to introduce the bill's name, sponsors, committee, threshold, and the $375 cap by voice while a live page competes for attention. Bring BillSlide back and the first five sentences of slide 9 move onto it.

**The forecasters' opener.** It earns its two minutes for this room only because the thesis sentence now opens the title slide, so the claim lands at 0:10 and the two SPF slides read as "why now" instead of a detour. Keep both, and hold slide 2 under a minute.

**Five primitives.** Keep it before the bill, as a 70-second map, and skip the roadmap toggle. Five logos eight minutes in adds five names the walk-through never uses. The script names the Axiom Foundation, PolicyEngine and Thesis as each layer appears.

**Slide moves.** Bring BillSlide back between Primitives and Rules. Send WhatIfEveryBillSlide to backups. Its content is the title-slide sentence and the "question, then grade" line, which I moved into slide 6 and could move to slide 4. Net count stays at 15.

**Mismatch to fix.** The Audience slide reads "Two minutes." The script says ninety seconds. Change one of them.

**Thesis in one sentence.** "What if every bill in Congress came with a forecast, registered before the vote and scored when the official number prints?"

**Recommended order.** TitleSlide, BaselineSlide, GrowthSlide, AlignmentSlide, DraftingSlide, PolicyBenchSlide, PrimitivesSlide, BillSlide, RulesSlide, ModelSlide, AudienceSlide, AgentSlide, ClosingLoopSlide, DiscussionSlide, EndSlide. Backups: WhatIfEveryBillSlide, BacktestSlide, WhatIfEverySeriesSlide, CrossScaleSlide, HowWeGetThereSlide.

**Verification.** I read every talk-order slide component, the shared FivePrimitivesSlide, both memory files, the Axiom guardrails, the outline, the session pack, and the IARIW notes. I ran the voice rules over the whole script twice and fixed 39 violations: labeled and framing openers, argument pointers ("that is why", "that is what"), narrated honesty, an announced neutrality line, an unverified offer to register audience numbers, an unverified "no sponsor has signed" claim, be-verb identities, one intensifier, and five numbers outside the brief (CBO counts, "two pages", "one in nine", "for one year", "2,499"). Every remaining number matches the brief or a slide. I did not edit the repo.

---

# Order change, 3:10 PM

Max: "I don't see how slides 2 and 3 fit into slide 4." Applied his transition test (write the sentence that carries the listener across each pair of slides; a pair with no true, necessary sentence is misordered). The claim now comes first: Title → Law is an alignment problem → If the baseline moves → Forecasters marked growth down → AI already drafts bills → AI alone can't do it, then unchanged. Slides 2 to 4 above are renumbered and rewritten to carry their transitions. "What if every bill had a score?" is a backup slide now, so its section is gone and its grade line moved into the PolicyBench opener; the bill's intro has its own slide (8) before the rules page. Clocks from slide 8 on run about 15 seconds earlier than printed.


---

# Indicator beat, 4:05 PM

Max: "could the exercise also be to shout out relevant indicators? like overall 'cost' is really about the total deficit with or without the bill, so might want other metrics that could be more targeted." Added slide 11, "Your indicator first": 60 seconds of shout-outs before the number, with the cost-versus-deficit contrast (PolicyEngine: -$1.83B in 2026; Thesis May 2026 monthly-deficit forecast $305B [80%: $240B-$380B], print $292.6B, app.thesisinstitute.org/us-mts-deficit-may-2026). Clocks from slide 12 on run about a minute later than before; objections shrink to about 11 minutes.
