# Lightning talk: How sure are the pros? (five minutes)

Deck: `/slides/overhang-2026-lightning-spf` · 9 slides, one with two builds · Saturday 7:00–8:00 PM block, Volcano/Mountain (113BC). About 640 spoken words; 4:55 at 130 words a minute. The order eases in: the AI-growth studies, then the question of a scorable series, then the point estimates, then the bounds, then the trend in uncertainty, then the tail, then the score, then the same rule applied to AI agents.

## 1 · Title (0:15)

I'm Max Ghenis. I build PolicyEngine and the Axiom Foundation, and I'm prototyping a third thing called Thesis. Five minutes on one question: how sure are the people paid to forecast the economy, and how would we know?

## 2 · Published estimates of AI's growth effect span two orders of magnitude (0:45)

[click] Ask how much AI will add to growth and you can pick your study. Acemoglu: no more than 0.66 percent of total factor productivity over ten years, later revised below 0.53. Goldman Sachs: 1.5 points of productivity growth a year for a decade and 7 percent of global GDP. The Forecasting Research Institute asked economists to assume rapid AI progress, and their median for 2025 to 2029 came in at 3.3 percent a year, with AI experts at 3.7. Epoch's review puts the odds of 30 percent growth sometime this century at about even. Same question, answers two orders of magnitude apart, and none of them scored yet.

## 3 · Forecasters have put probabilities on next-year growth since 1968 (0:40)

[click] So is there a series of forecasts of this quantity that we can score, from before Metaculus existed? There is. Since 1968 the Philadelphia Fed's Survey of Professional Forecasters has asked its panel to spread probability across bins of next-year output growth, and since 1999 the ECB has asked the same of euro-area forecasters. Each histogram records what a point forecast can't: how much confidence the forecaster puts behind the number. I pooled every one they have published, 3,695 round-by-horizon groups, at maxghenis.com/expectations, and scored them against the numbers the agencies now publish.

## 4 · Forecasters state a mean and a spread for next year's growth (0:55, two builds)

[click] Start with the point estimates. This is the pooled mean forecast for next year's US growth from each first-quarter round since 1992. Between 2 and 3 percent most years, lower after 2008, and 1.9 percent for 2027.

[click] Now the part a point forecast can't show. Each histogram carries its own spread, so here is one standard deviation either side of the mean. About 1.3 points on each side from 1992 to 2020. In the 2021 round it opened to 2.2.

## 5 · Forecasters are less sure about next year than they were for three decades (0:40)

[click] Pull that band width out as its own series. From 1992 to 2020 the US figure averaged 1.29 points. In 2021 it spiked to 2.18. This year it sits at 1.41, with the euro area beside it at 0.78. The pros say they're less sure about next year than they were on average for three decades. Less sure around what?

## 6 · Forecasters marked growth down, and the upper tail with it (0:45)

[click] Same surveys, same first-quarter rounds. Compare 2015 to 2019 with 2025 and 2026. The mean fell from 2.19 percent to 1.89, and the probability they put on growth above 4 percent fell from 5.6 percent to 4.2. Two rounds in the later window, so hold it loosely. Back to the FRI survey: by my fit of the AI experts' quantiles, they put a probability that rounds to zero on growth averaging above 10 percent a year through 2029, and 3.5 percent under rapid progress. Neither group puts much weight on a fast-changing world, and neither puts zero.

## 7 · Outcomes landed inside the band in 22 of 33 years (0:45)

[click] Now score them. Lay the outcomes on the band. 22 of 33 target years landed inside. A one-sigma band should catch about two thirds, and 22 of 33 is two thirds, so on average the bands are about right. The misses come in runs: six straight from 1996 to 2001, then 2008 and 2009, 2011, and 2020 and 2021. Calibrated in calm decades, and wrong in a row when the world changes faster than the survey.

## 8 · We score AI agents by the same rule (0:40)

[click] So here is the rule I apply to everything else I build. Publish the distribution. Wait for the official number. Score it. At Thesis we run AI agents that forecast official statistics before they print, and we score them by that rule. Today's scoreboard: 45 verified scores, 35 inside their 80 percent interval, and a CRPS ratio of 0.98 against carrying the last print forward. A rough tie with persistence, on the page for anyone to check. Prototype.

## 9 · End (0:10)

[click] The survey scores are at maxghenis.com/expectations. The agents are at thesisinstitute.org. Bring me the series you'd forecast next. Thanks.

## Sources checked today

Acemoglu, "The Simple Macroeconomics of AI", NBER w32487 (abstract: TFP no more than 0.66% over 10 years; revised below 0.53%). Goldman Sachs, Briggs and Kodnani, March 2023 (7% global GDP; 1.5 points of productivity growth over ten years). FRI, Karger et al., "Forecasting the Economic Effects of AI", March 2026, revised May 2026 (economists' rapid-scenario median 3.3% for 2025–29, 10th–90th 1.2–5.5%; AI experts 3.7%; unconditional 2.4–2.5%). Epoch, Erdil and Besiroglu, September 2023 (30%+ growth this century, odds about even). Expectations: github.com/MaxGhenis/expectations outputs/measures.csv and outputs/calibration.csv (22 of 33 inside the Q1 one-sigma band, recomputed today).
