# Speaker notes: Who bears the AI shock?

2026 Franco-German Fiscal Policy Seminar, "AI and the Future of Public
Finances", Federal Ministry of Finance, Berlin, 1–2 December 2026. 25
minutes of presentation, then 20 minutes of open discussion.

The ministry runs the deck from its own machine, so it is sent as a PDF
by 27 November. No slide has build steps or live embeds.

Every number is the merged paper's (PolicyEngine/uk-ai-study main at
c42be9f, tax year 2027–28). The unmerged revision on PR #26 (calibrated
spells, closed capital account) is not in the deck. If asked about spell
length, say it is the main revision under way and point to slide 23.

## Timing

29 slides in 25 minutes is under a minute each, so pace by part rather
than by slide:

| Part | Slides | Minutes | Ends by |
|---|---|---|---|
| Opening | 1–2 | 1.5 | 1:30 |
| 1 The question | 3–4 | 2 | 3:30 |
| 2 Data and method | 5–14 | 7.5 | 11:00 |
| 3 The central case | 15–19 | 4.5 | 15:30 |
| 4 Who and how | 20–22 | 3.5 | 19:00 |
| 5 What moves it | 23–27 | 4.5 | 23:30 |
| Close | 28–29 | 1.5 | 25:00 |

The plan assumes about 15 seconds each on slides 17, 19, 21, 24 and 25
(one sentence, then move on: they hold detail for the discussion), with
the time going to slides 15, 18, 22 and 23. Slide numbers are in the
footer for questions.

Three bases appear, and the slides label them: 50-draw means (the central
case, the five rules, the reforms), 20-draw means (the channel split, the
margin comparison, the take-up and capital variants) and single draws at
seed 0 (the grid, the survivor-wage panel, the index table, the closure,
the decomposition); the half-year-spell policy run uses 5 draws. The
central cost is £7.3bn over 50 draws and £7.2bn over 20. Seed 0 ranks 19th
of 50 on cost, and 2nd lowest on the poverty and Gini changes.

## Opening

**1. Title.** Thank the organisers. One sentence: I take an AI
labour-market shock of a given size and ask how much the UK tax-benefit
system absorbs, and who bears the rest.

**2. In brief.** Three results. Who loses the job moves the Exchequer
cost: £1.9bn to £11.3bn a year across four rules for the same 7 per cent.
How the loss arrives sets who bears it: as wage cuts, the same loss raises
poverty 0.3 points instead of 2.4, but costs £12bn more. And the sign
rests on assumed offsets. Stress the caveat on the slide: a decade of
adoption applied in one year, an impact-year stress test.

## 1. The question

**3. Exposure by occupation.** The most exposed groups (administrative,
managerial, professional) pay well and carry much of the income tax and
NI base; Universal Credit, the UK's main means-tested benefit, responds
lower down. Job-loss rates are the central quotas, proportional to
employment times exposure.

**4. Two open questions.** Incidence is unsettled (exposure, expertise
compression, juniors), and so is the margin (job loss or relative wage
decline). I hold the size fixed and vary both.

## 2. Data and method

**5. PolicyEngine.** A nonprofit; the rules, data pipeline and analysis
code are open source; UK and US models in one Python package (JOSS 2026).
Use by these bodies is not endorsement of this paper.
No 10 built a microsimulation tool on it, the Treasury ran a pilot evaluation, the OBR engaged with it in 2025–26, and it has been cited in a Lords debate. Keep it to 30 seconds: the point is that
the model is open and can be checked.

**6. Overview.** Four steps: exposure, microdata, a person-level shock, the
tax-benefit model, run twice on the same records.

**7. Exposure.** Felten et al.'s AIOE times a complementarity factor from
Pizzinelli et al., rebuilt from O*NET and mapped to UK SOC2020 through the
DfE crosswalk, weighted by ASHE employment. I shift the score so the least
exposed group is zero, my normalisation. θ enters only relative to its
minimum and mean, so the rebuilt series' level offset does not matter.
Exposure varies between nine groups only. If asked: for the four groups
with a negative AIOE, a higher θ raises the score; the unadjusted AIOE
gives £8.0bn against £8.2bn on the same draw (slide 25).

**8. Microcosm.** The FRS 2024–25 plus SPI records for top incomes,
imputations, and weights calibrated to 1,514 targets (98.7 per cent within
10 per cent). 29 million employees in 2027–28; 99.7 per cent have an
occupation group.

**9. Imputation.** What the FRS lacks (wealth from the Wealth and Assets
Survey, spending from the Living Costs and Food Survey, and others) comes
through chained quantile-regression forests: a classifier draws zero or
not, then a draw at a seeded random quantile of the forest's
conditional distribution, each variable conditioning on those already
imputed. Drawing from the distribution, not the mean, keeps the spread
that tax and benefit rules respond to.

**10. Calibration.** One weight per household, chosen to minimise capped
relative errors against 1,514 official totals, each of 38 families weighted
equally, with no weight above ten times its survey value. 98.7 per cent of
targets end within 10 per cent; this is in-sample fit, not validation. If asked about raking or GREG: this minimises fit
error, not distance from the starting weights; only the ten-times bound
limits how far weights move, and the total weight is free. The
price is uneven weights: an effective sample of about 7,200 households
(5,810 for employees, slide 14). Method as in the Microcosm code at the time
of the 7 November build that the paper used.

**11. Scenario.** Doorley et al.'s Irish inputs: 7 per cent displaced, 2.6
per cent survivor wage rise, interest and dividends up 39.8 per cent (the
return on capital up 0.4 points from 1.005 per cent; read it as a 39.8 per
cent uplift). Name what is left out.

**12. The shock.** Job losses allocated by employment times shifted
exposure; survivor wages rise in proportion to complementarity; capital
income scaled by 1.398. Within each group, systematic sampling picks the
displaced. The model takes no spell length: the displaced are out all year.

**13. Microsimulation.** PolicyEngine UK under the rules legislated or
announced for 2027–28 (frozen thresholds; higher dividend, savings and
property rates). The cost is the fall in the government balance, including
employer NI, with no VAT response. Absolute poverty uses the official
fixed line; 12.0 per cent before housing costs at baseline.

**14. Draws.** 72,504 employee records, but uneven weights give an
effective sample of about 5,810, so one draw's displaced count runs from
1.85 to 2.25 million. "±" is the spread across draws, not a confidence
interval.

## 3. The central case

**15. Central case.** 2.04 million displaced, £7.3bn a year, poverty +2.4
points, Gini +1.8. The £7.3bn nets £42.5bn of displacement cost against
about £18bn from each offsetting channel, so the sign depends on the offset
assumptions. Read the qualifier line: upper bound for spell length; +0.82
on the relative line; +1.99 with full take-up and JSA.

**16. By decile.** 0.78 per cent of the bottom decile against 5.57 per
cent of the top move into unemployment, mostly because that is where
employees are. Women are 53 per cent of the displaced.

**17. Decomposition.** Losses peak in the upper-middle deciles; on this
draw decile 8 loses 3.7 per cent of disposable income, 2.9 per cent over
20 draws, and which of deciles 6–9 loses most depends on the ranking. Ignore decile 1: its gain reverses
under another household ranking.

**18. Absorption.** Job loss alone, OBR-sized. Tax and benefits absorb 29
per cent, nearly all through lower income tax and NI; cash benefits add
3.0p per pound lost (8.7p with full take-up and JSA). The displaced are
better off than the existing unemployed: capital, partners' earnings, owned
homes. This audience will know Dolls et al.: 47 per cent in the EU and 34
in the US, but they assume full take-up and add people like the existing
unemployed, so the numbers are not comparable.

**19. OBR benchmark.** £10.2bn against the OBR's £9bn, close only because
the lines offset: more lost receipts, less welfare.

## 4. Who loses the job, and how

**20. Five rules.** Cost runs from £1.9bn to £11.3bn (£27.7bn in the
stress test) and tracks the earnings of those displaced. Poverty varies
much less; the uniform-versus-exposure gap fails a 2,000-draw check.

**21. Figure.** Every rule displaces more in the upper half. Ten seconds.

**22. Margin.** The key slide. Same gross loss: job loss £7.18bn and +2.38
points; wage cuts £19.13bn and +0.28 points (channels on in both). Without
the channels, +2.88 against +0.92. Per pound, 42p against 55p. Why: wage
cuts remove pounds at the margin; job loss removes whole earnings and
concentrates the loss. A result for this shock, not a property of the UK
system; shorter spells narrow the cost gap.

## 5. What moves the cost, and policy

**23. Break-evens.** Survivor wages +3.7 against +2.6 per cent (seed 0);
capital uplift 55 against 40 per cent; spells of at most 9.5 months (20
draws). Without the survivor wage rise, £24.9bn.

**24. Grid.** At 7 per cent displacement, average income falls unless
survivor wages grow by 5 per cent.

**25. Indices.** £4bn to £8bn on one draw, adjusted for the displaced
count; the three AIOE-type indices are indistinguishable. If asked why the
adjusted C-AIOE (£8.2bn) differs from £7.3bn: it is one draw, within the
±£1.7bn scatter.

**26. Closure.** The capital uplift is not tied to the labour shock. If a
share of the £68.3bn net labour-income fall becomes profit taxed at 25 per
cent, the result runs from a £0.9bn gain to a £14.4bn cost. That range spans
half to all of the fall becoming profit; the cost falls linearly in that
share. This is where
the tax-base question for this audience sits.

**27. Policy.** Three stylised responses, compared on cost and poverty only.
R1 replaces 50 per cent of lost earnings (capped at £15,000): poverty −1.89
points at £26.9bn, £14.3bn per point; R2 and R3 cost £8.6bn and £6.7bn per
point. They aim at different things: R1 replaces earnings for the
displaced, R2 and R3 pay all UC claimants. Static, no behavioural response.
If asked where the money goes: at seed 0, 63 per cent of R1 spending
reaches deciles 8–10; R2 and R3 place 77 and 73 per cent in deciles 1–5.

## Close

**28. Conclusions.** Four results, then the limits: a one-year stress test,
nine groups, no hiring margin. Next: calibrate spells and re-employment pay
to UK evidence (Upward and Wright 2019), and model take-up and JSA for the
newly displaced.

**29. Thank you.** Leave this up for the discussion.

## For the discussion

- **Historical benchmark.** A 2008–10 backcast over-predicts the poverty
  response; uprating and mixed spell lengths are outside the model.
- **Public sector.** Displaced public-sector employees cost £26.6bn a year
  in pay, employer NI and employer pensions (20 draws), not netted from the
  cost.
- **Earnings-related unemployment insurance.** The UK has none: new-style
  JSA is flat (£95.55 a week, 26 weeks), and UC is means-tested with a
  £16,000 capital limit. That limits the benefit response here; the paper does not
  model other countries' systems.
