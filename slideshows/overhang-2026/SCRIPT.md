# Overhang script: "Law is an alignment problem"

Start at about 6:20 in the main room (the listing moved to 6:15–7:00, Volcano/Mountain, during dinner; hard stop 6:55 for the lightning talks). Running clock counts from the first word. Eighteen slides in config.ts order; the five backups live in the overhang-2026-backup deck. Spoken words: about 2,130. At 130 words a minute plus 90 seconds of quiet and two show-of-hands pauses, the talk ends near 16:50, leaving about 10 minutes for objections before the close at 27:00 and dinner at 6:15.

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

## 6 · AI alone can't do it (0:55)

Words: 116 · Clock: 4:20 to 5:15

[click] A score gives people a claim they can question. A forecast gives them a claim they can grade. Could the same models supply that evidence? We test that at policybench.org. The models answer with no tools: no calculator, no search, no PolicyEngine. We asked 39 models basic tax and benefit questions about 100 households and checked each answer against the computed one. We count an answer as exact when amounts land within a dollar and eligibility matches. The best model, GPT-5.6 Sol, scored 89.2 percent. The weakest scored 62.6. The other models land between them. Those numbers say nothing about a model with tools, and the answer key on that board is PolicyEngine's own output. Hold that question until the bill has gone through the stack. The numbers do say the rules have to live somewhere a model can call them.

## 7 · What do we arm the AI with? (1:10)

Words: 145 · Clock: 5:15 to 6:25

[click] So what does a forecasting agent need? Five things, and each one needs its own feedback loop. One, the rules of the policy, encoded so a program can run them, with tests and independent calculators to check the encoding. Two, official statistics, with a receipt for what each agency printed and when. Three, a population at the household level, calibrated to those statistics, with the calibration error published. Four, a model that computes a reform on that population, with its differences from other models explained. Five, judgment: the piece that combines them into a forecast, with a date on which it resolves and a score when it does. That fifth loop ranks the other four. Every one of those checks works the same for an AI agent and for a human analyst. Now one bill, three of those layers, and one number the IRS prints.

## 8 · One bill through the stack (0:35)

Words: 82 · Clock: 6:25 to 7:00

[click] The bill is S. 3596, the Stronger Start for Working Families Act, from Senators Hassan and Young. It has sat in Senate Finance since January 8. It lowers the earnings threshold for the refundable child tax credit from 2,500 dollars to one dollar. The 15 percent phase-in rate stays and the refundable cap stays, so a family gains at most about 375 dollars. I picked it because it moves one threshold in the statute and one number in an IRS table. Layer one, the rules.

## 9 · The rules (0:50)

Words: 91 · Clock: 7:00 to 7:50

[click] [live page] This is the section it amends, section 24(d)(1) of the tax code, at axiom.org. On the left, the statute text. On the right, the 14 rules the Axiom Foundation has encoded from that text, and this one, ctc_refundable_phase_in_threshold, holds the 2,500. The bill changes that parameter. Every rule on this page traces back to the sentence of statute that sets it and the date it took effect, so a model, an agent, or you can read the change from the page instead of guessing at it. [optional: Show the rule graph, then Expand] The same section as a graph: each box is a rule, each wire an input, and the refundable credit sits at the end of 128 of them. The banner says this subtree can't execute yet. Prototype.

## 10 · The model (1:00)

Words: 127 · Clock: 7:50 to 8:50

[click] Layer four. PolicyEngine runs that parameter change over a calibrated population of US households. Federal cost, 1.83 billion dollars in 2026, and 17.1 billion over 2026 to 2035. 6.5 percent of people gain. Read the label: certification pending. We have not finished the cross-checks on this pairing. I reran it this afternoon on PolicyEngine's own API with the bill's one-dollar threshold and got the same 1.83 billion, to the dollar. The simulation holds behavior fixed and computes what the rule change does to each household's credit. It does not model who files a return and claims the credit, and that count depends on take-up. The IRS prints that count. So the model hands the forecast a mechanism, and the forecast stays a separate question.

## 11 · Your indicator first (1:05)

Words: 133 · Clock: 8:50 to 9:55

[click] Before the number, the indicator. Which official statistic would tell you whether this bill did its job? The usual answer is cost, and the model gives it: 1.83 billion dollars in 2026. Now look at the deficit that cost lands in. Our agent's forecast for one month's federal deficit, May, carried an 80 percent interval from 240 to 380 billion dollars. The print came in at 293. With or without this bill, those two distributions overlap almost entirely. The deficit will never score this bill. So shout out statistics it would move by more than their own forecast interval. Sixty seconds. [pause for shout-outs; repeat each one back] Returns claiming the credit. Child poverty. Filing among the lowest earners. The bill page lists its candidates and admits where no series exists. Now your number.

## 12 · Your number first (2:05, of which 90 seconds silent)

Words: 77 · Clock: 9:55 to 12:00 · "Go" lands at about 0:31 after the click

[click] Your number first. How many tax returns will claim the refundable child tax credit for tax year 2027 if this bill passes? The IRS first prints: 19.1 million for 2020, 37.8 for 2021, the year the law dropped the earnings test and raised the credit, then 18.1 and 17.6. Threshold, 2,500 dollars to one dollar. Write a median and an 80 percent interval. Ninety seconds, no talking. Go.

[90 seconds of quiet]

Ten seconds. Keep that number in front of you.

## 13 · The agent's forecast (1:45)

Words: 214 · Clock: 12:00 to 13:45

[click] Our agent registered this on August 4. We run the agents at Thesis and we score them. Under current law, 17.6 million returns, with an 80 percent interval from 5.1 to 30.1 million. If the bill is enacted, 27.2 million, interval 14.7 to 39.7. A gap of 9.6 million returns. Check yours. Hands up if your median came in above 27 million. [pause] Below the last print, 17.6? [pause] Now read the trace. [live page] The agent took the last print, 17.6, and added half of 2021's excess over its neighbors. It calls that half a judgmental assumption. In 2021 the law removed the earnings test and raised the credit. This bill moves one threshold from 2,500 dollars to one. So you can challenge the analogy, and the page shows you where. The interval half-width is 1.28 sample standard deviations of four prints. One of those four is 2021, and that one print stretches the current-law band from 5 to 30 million. If you wrote a tighter band, the page shows the assumption you'd replace. The model computed its change from the rule. The agent reasoned from a precedent. Both sit on the same page, and the IRS print grades the forecast. The condition gets judged on December 31, 2027, and the first print is due by the end of 2029.

## 14 · Conductors, not oracles (0:40)

Words: 104 · Clock: 13:45 to 14:25

[click] Back to slide 6. That board measured an oracle: a model reads the household and answers from memory, and the answer key was PolicyEngine's own output. The best model got 89 percent. What you just watched was a conductor. The page routed one question through the stack. The rules supplied the parameter, the model supplied the mechanism, the IRS prints supplied the base rate, and the agent's judgment sat in named assumptions. The print grades those assumptions. Grades like that tell us which judgments deserve to become mechanism in the next version of the model. The grade is the loop that ranks the other four.

## 15 · The loop that matters most (1:05)

Words: 134 · Clock: 14:25 to 15:30

[click] Publish the reasoning. Wait for the official number. Score the forecast. That loop ranks the other four. Here is the scoreboard as of this morning. 45 scores, each one a forecast that an outside timestamp authority recorded before the print. 35 of the 45 landed inside their 80 percent interval. Against a persistence baseline, the CRPS ratio is 0.98 on nine matched targets. The persistence baseline carries the last print forward. Nine targets, and a rough tie with persistence. The misses stay on the page. Each one goes back into the rules, the data, the model, or the next forecast. I'm still prototyping Thesis. We run the agents and we score them. If that ratio stays near one as the record grows, the agents add nothing over persistence, and the scoreboard will say so.

## 16 · Run the loop backwards (0:50)

Words: 118 · Clock: 15:30 to 16:20

[click] And if the ratio drops below one, scale it. Every official statistic gets a forecast, the way the May deficit did. Every bill gets its statistics derived, the way you shouted them out. Every pair gets a conditional, the way S. 3596 got one for returns claiming the credit. Once those conditionals are cheap, the loop on slide 2 runs backwards. Start from the value. Set the level of the indicator you want, child poverty or filing among the lowest earners. Search the bills for the ones whose conditional forecasts move it. That's the alignment problem in the title, with the arrows reversed. And the moment you search policies against indicators, Goodhart stops being a footnote. So break it.

## 17 · Where does this break? (0:30, then about 10 minutes of objections)

Words: 90 · Clock: 16:20 to 16:50 · Objections 16:50 to 27:00

[click] Three headings. Goodhart: what happens when the measure becomes the target? Who sets the objectives: an AI read this bill and proposed the goals on its page, and the page has buttons to countersign or strike them. Legitimacy: who gets to contest the model, the forecast, and the use somebody makes of them? We have twelve minutes under Chatham House rules, so nothing you say gets attributed. One request for the end: tell me which bill should get a forecast next. Who's first?

## 18 · What if every bill had a forecast? (0:25)

Words: 50 · Clock: 27:00 to 27:25 · About 6:15

[click] Lightning talks start in here at 7:00, and I'm giving one. Four links on the screen. If you wrote a number tonight, keep it. The IRS prints the answer by the end of 2029, and the agent's score will be on that last link. Bring the bill you want forecast next to dinner. Thanks.

## If the wifi dies

**Slide 9, The rules.** The panel would show section 24(d)(1) of the tax code on the left and, on the right, the 14 rules the Axiom Foundation encoded from it, each traced to its sentence of statute and its effective date. The one the bill changes, ctc_refundable_phase_in_threshold, holds the 2,500 dollars you see on the left of this slide, and the bill moves it to one.

**Slide 13, The agent's forecast.** The page behind this panel holds the agent's full trace: last print, plus half of 2021's excess over its neighbors, which it labels a judgmental assumption, with the interval set at 1.28 standard deviations of four prints. The numbers on the left are the numbers on that page, recorded August 4, judged December 2027, and due for a first print by the end of 2029.

## If they ask

**Goodhart.** Nothing here removes it. Most targets are first prints from statistical agencies, and the program under judgment doesn't produce those. Each goal maps to several metrics, and the page shows effects beside the goals. Program-office counts sit closer to the program, and they're more exposed.

**Who sets the objectives?** Nobody voted for them. An AI read the bill and proposed goals its authors could sign, and the page has countersign and strike buttons. The tools make a stated objective checkable and show effects the sponsors left out. Choosing objectives stays with people.

**A conditional forecast isn't causal, and you can't score the arm that didn't happen.** Both hold. Only one arm resolves, and the gap between arms mixes the bill's effect with everything else that differs between those worlds. The model supplies the causal structure the forecast lacks. Scoring many pairs over many bills shows which method to trust.

**Why is the agent's interval 5 to 30 million?** The agent set the half-width at 1.28 sample standard deviations of four prints, and one of the four is 2021's 37.8 million. Drop 2021 and the other three sit between 17.6 and 19.1. The trace shows that choice, and you can replace it.

**PolicyBench without tools is unfair.** It measures what a model answers from memory, as the slide says. A model with a calculator and a rules engine is a different experiment, and the benchmark leaves that open. Both numbers belong in public, and today we have one of them. Slide 14 draws the line: the board grades an oracle, and the bill page grades a conductor's forecast.

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


---

# Loop closure, 4:25 PM

Max: "I'm not sure we're really closing the loop on slide 6, and what are the slides after the apparent closing slide. Look at how we closed the loop in iariw-2026." The IARIW deck returns to PolicyBench with "Conductors, not oracles" before "The loop that matters most". Added slide 14 with the same beat, tied to S. 3596: slide 6 graded an oracle answering from memory against PolicyEngine's own answer key; slides 8 to 13 showed a conductor routing one question through the rules, the model and the prints, with the agent's judgment in named assumptions that the IRS print grades. Slide 6 now ends by holding that question. The five backups moved to their own deck, overhang-2026-backup, so the talk deck ends on its end slide. Transition sentences for the new pair: agent to conductors, "Both sit on the same page, and the IRS print grades the forecast" into "Back to slide 6"; conductors to the loop, "The grade is the loop that ranks the other four" into "Publish the reasoning." Clocks from slide 14 on run 45 seconds later; objections shrink to about 11 minutes.


---

# The bigger vision, 4:35 PM

Max: "isn't the bigger vision like, we have forecasts for all official statistics, we can derive outcomes/statistics for each bill, and we can forecast those conditionals quickly enough at scale that we can work backwards from our goals to the policies that will help us achieve them"; "that's what gets us to the alignment thesis we posit in the talk title." Added slide 16, "Run the loop backwards", between the scoreboard and the objections: three scale rows (every statistic forecast, every bill's statistics derived, every pair a cheap conditional), then slide 2's loop with the arrows reversed (values, indicators, policies) and the line "Start from the goal and search the bills. That is the alignment problem in the title." Transitions: the scoreboard gates the scaling ("if the ratio drops below one, scale it"); searching policies against indicators hands the room Goodhart ("so break it"). Conductor beat trimmed to 0:40 and the break-it intro to 0:30.
