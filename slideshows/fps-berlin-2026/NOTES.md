# Speaker notes: Who bears the AI shock?

2026 Franco-German Fiscal Policy Seminar, "AI and the Future of Public
Finances", Federal Ministry of Finance, Berlin, 1–2 December 2026. 25
minutes of presentation, then 20 minutes of open discussion.

The ministry runs the deck from its own machine, so it is sent as a PDF
by 27 November. No slide has build steps. Slide 28 embeds the live
dashboard in the browser deck; the PDF shows a screenshot and a QR code.

Every number is the merged paper's (PolicyEngine/uk-ai-study main at
c42be9f, tax year 2027–28). The unmerged revision on PR #26 (calibrated
spells, and a closed capital account built into every run) is not in the
deck; slide 25 is the merged paper's own static closed account. If asked about spell
length, say it is the main revision under way and point to slide 23.

## Timing

29 slides (five of them section dividers) in 25 minutes is under a minute each, so pace by part rather
than by slide:

| Part | Slides | Minutes | Ends by |
|---|---|---|---|
| Opening | 1–3 | 1.5 | 1:30 |
| 1 The question | 4–6 | 2 | 3:30 |
| 2 Data and method | 7–14 | 7.5 | 11:00 |
| 3 The central case | 15–18 | 4.5 | 15:30 |
| 4 Who and how | 19–21 | 3.5 | 19:00 |
| 5 What moves it | 22–26 | 4.5 | 23:30 |
| Close | 27–29 | 1.5 | 25:00 |

Slides 4, 7, 15, 19 and 22 are section dividers: say the part's title and
move on (a few seconds each).

The plan assumes about 15 seconds each on slides 17 and 24 (one
sentence, then move on: they hold detail for the discussion), with the
time going to slides 16, 18, 21 and 23. Slide numbers are in the
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

**2. Agenda.** A short introduction to PolicyEngine, then five parts.
Give the three results in one breath so the audience knows where it is
going: who loses the job moves the Exchequer cost (£1.9bn to £11.3bn a year
across four rules for the same 7 per cent); how the loss arrives sets who
bears it (as wage cuts, poverty +0.3 points instead of +2.4, at £12bn more
cost); and the sign rests on assumed offsets. A decade of adoption applied
in one year: an impact-year stress test.

**3. PolicyEngine.** Who we are, before the paper. A nonprofit; the rules,
data pipeline and analysis code are open source; UK and US models in one
Python package (JOSS 2026). In the UK, No 10's data science team built a
microsimulation tool on it, the Treasury ran a pilot evaluation, the OBR
engaged with it in 2025–26, and it has been cited in a Lords debate. In the
US, the Bureau of Economic Analysis runs it for its distribution of personal
income (2021 onwards), Joint Economic Committee Republicans built an
immigration fiscal impact calculator on it, and the Atlanta Fed works with
us on its Policy Rules Database. Use by these bodies is not endorsement of
this paper. Keep it to 30 seconds: the point is that the model is open and
can be checked.

## 1. The question

**4. Section: The question.** Divider; name the part and move on.

**5. Exposure by occupation.** The most exposed groups (administrative,
managerial, professional) pay well and carry much of the income tax and
NI base. Universal Credit, the UK's main means-tested benefit, mainly
helps low earners, so well-paid workers who lose income often get little
from it (savings, a working partner). Job-loss rates are the central quotas, proportional to
employment times exposure.

**6. Two open questions.** Incidence is unsettled (exposure, expertise
compression, juniors), and so is the margin (job loss or relative wage
decline). I hold the size fixed and vary both.

## 2. Data and method

**7. Section: Data and method.** Divider; name the part and move on.

**8. Overview.** Four steps: exposure, microdata, a person-level shock, the
tax-benefit model, run twice on the same records. (Microsimulation:) PolicyEngine UK under the rules legislated or
announced for 2027–28 (frozen thresholds; higher dividend, savings and
property rates). The cost is the fall in the government balance, including
employer NI, with no VAT response. Absolute poverty uses the official
fixed line; 12.0 per cent before housing costs at baseline. The Gini uses
equivalised HBAI disposable income with negatives set to zero.

**9. Microcosm.** The FRS 2024–25 plus SPI records for top incomes,
imputations, and weights calibrated to 1,514 targets (98.7 per cent within
10 per cent). 29 million employees in 2027–28; 99.7 per cent have an
occupation group.

**10. Imputation.** What the FRS lacks (wealth from the Wealth and Assets
Survey, spending from the Living Costs and Food Survey, and others) comes
through chained quantile-regression forests: a classifier draws zero or
not, then a draw at a seeded random quantile of the forest's
conditional distribution, each variable conditioning on those already
imputed. Drawing from the distribution, not the mean, keeps the spread
that tax and benefit rules respond to.

**11. Calibration.** One weight per household, chosen to minimise capped
relative errors against 1,514 official totals, each of 38 families weighted
equally, with no weight above ten times its survey value. 98.7 per cent of
targets end within 10 per cent; this is in-sample fit, not validation. If asked about raking or GREG: this minimises fit
error, not distance from the starting weights; only the ten-times bound
limits how far weights move, and the total weight is free. The
price is uneven weights: an effective sample of about 7,200 households
(5,810 for employees, slide 14). Method as in the Microcosm code at the time
of the 7 November build that the paper used. The table is the 7 November build's targets by publisher and topic
(HMRC 776, ONS 365, DWP 213, MHCLG 82, others 78); the 19 misses are 15
SPI income bands, 3 Universal Credit and 1 student support. Relative errors
are capped at 10 (1,000 per cent); only the ×10 weight bound limits how far
weights move, unlike raking or GREG, and the total weight is free.

**12. Exposure.** After the data: what we do to it. Felten et al.'s AIOE times a complementarity factor from
Pizzinelli et al., rebuilt from O*NET and mapped to UK SOC2020 through the
DfE crosswalk, weighted by ASHE employment. I shift the score so the least
exposed group is zero, my normalisation. θ enters only relative to its
minimum and mean, so the rebuilt series' level offset does not matter.
Exposure varies between nine groups only. If asked: for the four groups
with a negative AIOE, a higher θ raises the score; the unadjusted AIOE
gives £8.0bn against £8.2bn after the displaced-count adjustment (slide 24).

**13. The shock (scenario inputs).** The 2.6 per cent averages over all
baseline employees; paid to survivors only, their mean uplift runs 2.56–2.74
per cent by decile. The inputs come from Briggs and Kodnani (2023) via
Doorley et al.'s Irish design. Doorley et al.'s Irish inputs: 7 per cent displaced, 2.6
per cent survivor wage rise, interest and dividends up 39.8 per cent (the
return on capital up 0.4 points from 1.005 per cent; read it as a 39.8 per
cent uplift). Name what is left out. The newly displaced get UC only if
their benefit unit (adult, any partner and children, assessed together)
is simulated as a claimant. (The shock:) Job losses allocated by employment times shifted
exposure; survivor wages rise in proportion to complementarity; capital
income scaled by 1.398. Within each group, systematic sampling picks the
displaced. The model takes no spell length: the displaced are out all year.

**14. Draws.** 72,504 employee records, but uneven weights give an
effective sample of about 5,810, so one draw's displaced count runs from
1.85 to 2.25 million. "±" is the spread across draws, not a confidence
interval.

## 3. The central case

**15. Section: The central case.** Divider; name the part and move on.

**16. Central case.** 2.04 million displaced, £7.3bn a year, poverty +2.4
points, Gini +1.8. The £7.3bn nets £42.5bn of displacement cost against
about £18bn from each offsetting channel, so the sign depends on the offset
assumptions. Read the qualifier line: upper bound for spell length; +0.82
on the relative line; +1.99 with full take-up and JSA.

**17. By decile.** 0.78 per cent of the bottom decile against 5.57 per
cent of the top move into unemployment, mostly because that is where
employees are. Women are 53 per cent of the displaced. (Decomposition:) Losses peak in the upper-middle deciles; on this
draw decile 8 loses 3.7 per cent of disposable income, 2.9 per cent over
20 draws, and which of deciles 6–9 loses most depends on the ranking. Ignore decile 1: its gain reverses
under another household ranking.

**18. Absorption.** Job loss alone, OBR-sized. Tax and benefits absorb 29
per cent, nearly all through lower income tax and NI; cash benefits add
3.0p per pound lost (8.7p with full take-up and JSA). The displaced are
better off than the existing unemployed: capital, partners' earnings, owned
homes. This audience will know Dolls et al.: 47 per cent in the EU and 34
in the US, but they assume full take-up and add people like the existing
unemployed, so the numbers are not comparable. (OBR benchmark:) £10.2bn against the OBR's £9bn, close only because
the lines offset: more lost receipts, less welfare.

## 4. Who loses the job, and how

**19. Section: Who loses the job, and how.** Divider; name the part and move on.

**20. Five rules.** Cost runs from £1.9bn to £11.3bn (£27.7bn in the
stress test) and tracks the earnings of those displaced. Poverty varies
much less; the uniform-versus-exposure gap fails a 2,000-draw check. (Figure:) Every rule displaces more in the upper half. Ten seconds.

**21. Margin.** The key slide. Same gross loss: job loss £7.18bn and +2.38
points; wage cuts £19.13bn and +0.28 points (channels on in both). Without
the channels, +2.88 against +0.92. Per pound, 42p against 55p. Why: wage
cuts remove pounds at the margin; job loss removes whole earnings and
concentrates the loss. A result for this shock, not a property of the UK
system; shorter spells narrow the cost gap.

## 5. What moves the cost, and policy

**22. Section: What moves the cost, and policy.** Divider; name the part and move on.

**23. Break-evens.** Survivor wages +3.7 against +2.6 per cent (seed 0);
capital uplift 55 against 40 per cent; spells of at most 9.5 months (20
draws). Without the survivor wage rise, £24.9bn. (Grid:) At 7 per cent displacement, average income falls unless
survivor wages grow by 5 per cent.

**24. Indices.** £4bn to £8bn on one draw, adjusted for the displaced
count; the three AIOE-type indices are indistinguishable. If asked why the
adjusted C-AIOE (£8.2bn) differs from £7.3bn: it is one draw, within the
±£1.7bn scatter. If asked why the adjusted C-AIOE (£8.2bn) is above the 50-draw
mean (£7.3bn): seed 0 sits above the fitted cost-count line, and the
gap is inside the £1.7bn single-draw scatter. Seed 0 ranks 19th of 50 on cost.

**25. Closure.** The capital uplift is not tied to the labour shock. If a
share of the £68.3bn net labour-income fall becomes profit taxed at 25 per
cent, the result runs from a £0.9bn gain to a £14.4bn cost. The range runs
from half the fall becoming profit, half of it UK-owned (£14.4bn cost), to
all of it becoming UK-owned profit (£0.9bn gain); the cells between are
£12.1bn and £3.6bn. This is where
the tax-base question for this audience sits.

**26. Policy.** Three stylised responses, compared on cost and poverty only.
R1 replaces 50 per cent of lost earnings (capped at £15,000): poverty −1.89
points at £26.9bn, £14.3bn per point; R2 and R3 cost £8.6bn and £6.7bn per
point. They aim at different things: R1 replaces earnings for the
displaced, R2 and R3 pay all UC claimants. Static, no behavioural response.
Per-point costs are the paper's, from unrounded means. If asked where the money goes: at seed 0, 63 per cent of R1 spending
reaches deciles 8–10; R2 and R3 place 77 and 73 per cent in deciles 1–5.

## Close

**27. Conclusions and future work.** Four results, then the limits: a one-year stress test,
nine groups, no hiring margin. Next: calibrate spells and re-employment pay
to UK evidence (Upward and Wright 2019), and model take-up and JSA for the
newly displaced. (Future work:) Six limits, each with what would lift it, all from the
paper's discussion section. Twenty seconds: name two (within-group exposure
and spell length), the rest are for the discussion.

**28. Beyond this paper (with the live dashboard).** Not results: directions for the same tools. The
macro model next to this study; firms and production networks linked to
households; what a slower US pace of AI development would mean for
government, people and firms; and the token tax project (household
incidence of a UK tax on AI tokens, in progress). Name them in one breath. (The whole-economy lens, live:) PolicyEngine's dashboard "AI and the
UK economy: Beyond the forecast" (OG-UK with this household study). Leave
it for the discussion; scroll it only if asked. The PDF shows its first
screen only. Frame the dashboard first: a different model (OG-UK, no
unemployment) asking a different question, so its pay-rate fall (−1.27%)
and this paper's 7 per cent job loss are not two answers to one question. Say the dashboard results are preliminary and not yet published.

**29. Thank you.** Leave this up for the discussion. Two QR codes: the
paper on SSRN (abstract 7174479) and my LinkedIn.

## Hardest questions, with answers from the paper

1. **"On a realistic base, isn't the capital uplift far too large, so the
   true cost is much higher?"** The 1.005 per cent base return is the
   Irish calibration; the same 0.4 points on a 4 per cent base is a 10 per
   cent uplift. With 10 per cent the cost is £20.6bn, with 20 per cent
   £16.2bn, with the uplift on dividends only £11.0bn (20 draws). That is
   why slide 25 replaces the uplift with an explicit account.
2. **"Dolls et al. find unemployment shocks absorbed more than income
   shocks; you find the reverse."** For this shock the job losses fall on
   above-average earners with capital, working partners and owned homes,
   and the wage cuts are graded to exposure, so they hit higher marginal
   rates. With full UC take-up and JSA the seed-0 job-loss figure rises
   from 43p to 48p per pound, still below 55p. The comparison neither
   confirms nor contradicts their result: take-up, who becomes unemployed,
   contributory benefits and incidence all differ.
3. **"Would earnings-related insurance, as in Germany or France, change
   the ranking?"** The closest runs: full take-up plus JSA raises cash
   benefits from 3.0p to 8.7p per pound lost, and R1 (50 per cent of lost
   earnings, capped at £15,000 a year) costs £26.9bn and cuts poverty by
   1.89 points. R1 is not a model of any country's scheme; the paper does
   not model other systems.
4. **"Has the framework been validated?"** A backcast displacing 2.6 per
   cent uniformly (the 2008–10 unemployment rise) gives +0.99pp absolute
   poverty and +0.33 Gini, where outturns were roughly flat: uprating with
   high inflation, mixed spell lengths and behavioural responses are outside
   the model. Per point of displacement it gives +0.38pp against +0.36pp for
   the uniform 7 per cent rule. The OBR benchmark (slide 18) is the other
   check. Microcosm's 98.7 per cent is in-sample fit, not validation.
5. **"What if less of the wage bill becomes profit, or more is foreign
   owned?"** Payouts not reaching UK households go to overseas owners and
   pension funds, untaxed here. Simulated with the whole payout UK-owned,
   the cost is −£1.6bn at φ = 1, £11.7bn at φ = 0.5 and £18.4bn at
   φ = 0.25 (20 draws).
6. **"Can you run this for Germany or France?"** Not yet with the same
   quality. The method carries over, but the data doesn't: the German files
   it needs most (the 10 per cent income-tax sample, the EVS, the
   Mikrozensus) leave the statistical offices only for institutions seated
   in the EU. From the UK or US we could build on EU-SILC through Eurostat,
   with no tax microdata and no region for Germany. As a rough guide only,
   scaling our figures by Dolls et al. suggests more of the loss would be
   absorbed (about 44 per cent in Germany and 40 in France, against 29 for
   the UK). That is not a model run. Close with the ask: we would like to
   do it properly with an EU partner institution.

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
