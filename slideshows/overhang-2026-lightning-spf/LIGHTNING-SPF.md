# Lightning talk: How sure are the pros? (five minutes)

Deck: `/slides/overhang-2026-lightning-spf` · 6 slides · Saturday 7:00–8:00 PM block, Volcano/Mountain (113BC). About 520 spoken words; 4:00 at 130 words a minute, which leaves a minute for pointing at the two charts. Built for a room that has just watched the session in the same room: nothing here repeats it except the scoreboard, which lands as the kicker.

## 1 · Title (0:20)

I'm Max Ghenis. I build PolicyEngine and the Axiom Foundation, and I'm prototyping Thesis. Five minutes on one question: how sure are the people paid to forecast the economy, and how would we know?

## 2 · If the baseline moves (1:00)

[click] The Philadelphia Fed has asked professional forecasters since 1968 to put probabilities on ranges of next-year growth, and the ECB asks the same for the euro area. I pooled those distributions and scored them at maxghenis.com/expectations. This chart is the pooled standard deviation for next-year US real GDP growth, first-quarter rounds, with the euro area beside it. From 1992 to 2020 the US figure averaged 1.29 points. In 2021 it spiked to 2.18. This year it sits at 1.41. The pros say they're less sure about next year than they were on average for three decades. Less sure around what?

## 3 · Forecasters marked growth down, and the upper tail with it (1:00)

[click] Same surveys, same first-quarter rounds. Compare 2015 to 2019 with 2025 and 2026. The mean forecast for next-year growth fell from 2.19 percent to 1.89. The probability they put on growth above 4 percent fell from 5.6 percent to 4.2. The later window holds two rounds, so hold it loosely. Now put that beside the Forecasting Research Institute's survey of AI experts. Their fitted distributions put a probability that rounds to zero on US growth averaging above 10 percent a year from 2025 to 2029, and 3.5 percent if AI progress is rapid. Neither group puts much weight on a fast-changing world, and neither puts zero.

## 4 · How well did they do? (1:00)

[click] Now score them. Next-year growth landed inside the pooled one-standard-deviation band in 22 of 33 years. A one-sigma band should catch about two thirds of outcomes, and 22 of 33 is two thirds, so on average the bands are about right. The misses come in runs: six straight from 1996 to 2001, then 2008 and 2009, 2011, and 2020 and 2021. The pros are calibrated in calm decades and wrong in a row when the world changes faster than the survey.

## 5 · The loop that matters most (0:50)

[click] So here is the rule I apply to everything else I build. Publish the distribution. Wait for the official number. Score it. At Thesis we run AI agents that forecast official statistics before they print, and we score them by that rule. Today's scoreboard: 45 verified scores, 35 inside their 80 percent interval, and a CRPS ratio of 0.98 against carrying the last print forward. A rough tie with persistence, on the page for anyone to check. Prototype.

## 6 · End (0:15)

[click] The survey scores are at maxghenis.com/expectations. The agents are at thesisinstitute.org. Bring me the series you'd forecast next. Thanks.
