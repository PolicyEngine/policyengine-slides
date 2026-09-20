# Lightning talk: What if every bill had a forecast? (five minutes)

Deck: `/slides/overhang-2026-lightning` · 8 slides · Saturday 7:00–8:00 PM block, Volcano/Mountain (113BC), moderated by Nicholas Wagner. About 620 spoken words; 4:40 at 130 words a minute, which leaves 20 seconds of slack. Every slide is reused from the session deck, so the numbers match what the 5:45 room saw.

## 1 · Title (0:20)

I'm Max Ghenis. I build PolicyEngine and the Axiom Foundation, and I'm prototyping a third thing called Thesis. One question for five minutes: what if every bill in Congress came with a forecast, registered before the vote and scored when the official number prints?

## 2 · Law is an alignment problem (0:45)

[click] We use laws to align our collective goals with outcomes. People decide what they value. Legislatures choose policies. Statistical agencies measure what happened. That loop has the same shape as the alignment loop this room argues about for AI: an objective, a mechanism, a feedback signal. We run it badly. We write laws in prose, change them slowly, and rarely score them against the goals their sponsors stated. A signal that arrives years late, and that nobody reads, leaves the loop open.

## 3 · One bill through the stack (0:25)

[click] Take S. 3596, from Senators Hassan and Young. It lowers the earnings threshold for the refundable child tax credit from 2,500 dollars to one dollar. One threshold in the statute, one number in an IRS table.

## 4 · The model (0:35)

[click] The Axiom Foundation encodes that section of the tax code so a program can run it, and PolicyEngine runs the change over a calibrated population of households. 1.83 billion dollars in 2026. 6.5 percent of people gain. Certification pending, and I reran it this afternoon on PolicyEngine's API and got the same number to the dollar. The model holds behavior fixed. It does not say who files a return and claims the credit. The IRS prints that count.

## 5 · The agent's forecast (0:50)

[click] So an agent at Thesis forecast that count on August 4. Under current law, 17.6 million returns, with an 80 percent interval from 5 to 30 million. If the bill passes, 27.2 million, interval 15 to 40. Its reasoning trace is public: the last print plus half of 2021's excess over its neighbors, which it labels a judgmental assumption. You can challenge the analogy, and the page shows you where. The IRS grades it. The condition gets judged at the end of 2027, and the first print lands by the end of 2029.

## 6 · The loop that matters most (0:40)

[click] Publish the reasoning. Wait for the official number. Score the forecast. Today's scoreboard: 45 verified scores, 35 inside their 80 percent interval, and a CRPS ratio of 0.98 against persistence on nine matched targets. A rough tie with carrying the last print forward, and the misses stay on the page. We run the agents and we score them. Prototype.

## 7 · Run the loop backwards (0:50)

[click] Now scale it. Every official statistic gets a forecast. Every bill gets its statistics derived. Every pair gets a conditional. Once those conditionals are cheap, the loop runs backwards. Start from the value. Set the level of the indicator you want, child poverty or filing among the lowest earners. Search the bills whose conditional forecasts move it. That's the alignment problem with the arrows reversed, and it's where Goodhart stops being a footnote.

## 8 · End (0:15)

[click] Four links. Bring me the bill you want forecast next. Thanks.
