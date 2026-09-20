# Source verification

Checked on September 19, 2026. Figures supplied in the assignment remain usable where a live page could not be fetched; those cases are identified below.

## PolicyBench

[Live leaderboard and methodology](https://policybench.org/) and [repository methodology](https://github.com/PolicyEngine/policybench#condition), with the [benchmark card](https://github.com/PolicyEngine/policybench/blob/main/docs/benchmark_card.md), were opened during the build.

The live board identifies dataset v1.1, snapshot September 5, 2026: **39 models, 100 households, 18 scored variables, 1,973 model-output targets**. GPT-5.6 Sol leads with **89.2%** exact match; GPT-5.4 nano has **62.6%**. The headline uses population household-impact weights. Currency outputs match within $1; eligibility flags must match exactly.

**Tool condition verified:** models receive household facts and answer without external tools: no calculator, search, or PolicyEngine access. Function calling or JSON mode only transmits the answer schema; it executes nothing and returns no information to the model. Suggested slide wording: “Models answer without tools: no calculator, search, or PolicyEngine.”

Differences from the imported IARIW slide: **32 → 39 models; August 22 → September 5 snapshot; 88.7% → 89.2% best; 62.3% → 62.6% weakest.** Avoid carrying forward its positive-SNAP claim without a new filtered check.

The site also flags serving sensitivity: forced answer calls disabled extended thinking for some Claude rows; separately labeled automatic-call reruns change those scores. The leaderboard is a public fixed-set preview.

## Thesis calibration

[Calibration page](https://app.thesisinstitute.org/calibration) opened during the build; the browsing service reports a crawl from the preceding week.

The displayed headline matches the assignment: **45 witness-verified scores; 35 of 45 inside the stated 80% interval (78%); CRPS ratio versus persistence 0.98 on 9 matched targets**. The ratio is the geometric mean of per-target raw CRPS ratios, agent divided by paired persistence. Values below one outperform that baseline. These counts concern a prototype and a small matched sample.

## S. 3596 and the recorded forecast

[Thesis bill index](https://app.thesisinstitute.org/bills) confirms the Stronger Start for Working Families Act, S. 3596, Hassan / Young, analyzed July 31, 2026. The [individual bill page](https://app.thesisinstitute.org/bills/s3596-119) returned a cache miss on repeated direct and linked requests. The GitHub connector subsequently retrieved the [bill data used by the site](https://github.com/ThesisInstitute/thesis/blob/main/bills/s3596-119.json), independently confirming the model figures.

The verified bill values match the assignment: operative earnings threshold $2,500 → $1; 15% phase-in and refundable cap unchanged; maximum family gain about $375. The stored model figures are −$1,826,050,568.80 in 2026 and −$17,069,142,980.93 over 2026–2035, with beneficiary share 0.0648. These round to **−$1.83B, −$17.1B, and 6.5%**. The pending status remains. **Model caveat:** the recorded reform sets its threshold to **$0**, whereas the bill specifies **$1**; retain the published model figures and disclose the approximation.

The [enacted forecast record and trace](https://github.com/ThesisInstitute/thesis/blob/main/records/thesis-analyst/2026-08-04/2026-08-04t14-52-20z-irs-actc-total-claims-2027/parsed_cells.json) and [current-law record and trace](https://github.com/ThesisInstitute/thesis/blob/main/records/thesis-analyst/2026-08-04/2026-08-04t14-57-45z-irs-actc-total-claims-2027/parsed_cells.json) were retrieved. They confirm IRS SOI Table 3.3 first prints of 19.119249M, 37.771612M, 18.076696M, and 17.626084M for TY2020–2023, matching the slide's rounded figures. The forecasts also match: current law 17.6M [5.1M, 30.1M]; enacted 27.2M [14.7M, 39.7M]; gap 9.6M. The 50% shrinkage applied to TY2021's excess is explicitly judgmental; the interval half-width equals 1.28 times the sample standard deviation of the four prints.

**Date clarification:** the forecast runs were recorded on **August 4, 2026**, but [target registration](https://github.com/ThesisInstitute/thesis/blob/main/records/targets/2026-08-03-b92e9752beaf38a9e2e735c5066e7c741e29436546e7fab2c8d0568f05355909.json) occurred on **August 3**. Use “Forecast recorded 4 Aug 2026” rather than the assignment's “registered 4 Aug.” The condition deadline remains December 31, 2027. December 31, 2029 is a registered resolution bound within an expected first-print window, not an announced exact IRS publication date.

## AI text in congressional bills

[Effort, September 16, 2026](https://www.effort.news/ai-congress) and its [chart data](https://www.effort.news/documents/ai-congress/chart-data.json) opened during the build.

The article’s table confirms **117 of 2,994 bills (3.9%)**. Its 2026 Q2 data show **6.3574% → 6.4%** for the findings/preambles series and **0.6468% → 0.6%** for the statutory control. No numerical differences from the assignment.

The detector description is more specific than the brief: editlens_Llama-3.2-3B, described as an open-source Pangram version, calibrated using Pangram 3.3.2. “Effort’s Pangram-based detector flagged…” preserves this distinction. These are detector findings, not confirmed authorship. The data notes retain the findings/preambles label from the PDF while noting that extraction classifications and underlying statutory-control records were unavailable.

## Forecaster expectations

The opening chart values and historical coverage counts come from the assignment, with [Philadelphia Fed and ECB Surveys of Professional Forecasters, via maxghenis.com/expectations](https://maxghenis.com/expectations). The article URL could not be fetched by the browsing service during the build. The supplied local chart assets are used unchanged.

[Karger et al., Forecasting the economic effects of AI](https://forecastingresearch.org/research/economic-effects-of-ai) and the [linked paper, Figure 5, page 18](https://forecastingresearch.org/pdf/economic-effects-of-ai.pdf#page=18) were opened. For AI experts’ five-year annualized US GDP growth in 2025–2029, the upper tail above 10% rounds to **0.0% unconditional** and **3.5% under rapid AI progress**, matching the assignment. These probabilities come from pooled fitted distributions based on respondents’ quantile forecasts. “FRI’s AI expert forecasts imply…” is more precise than describing a directly elicited tail probability.
