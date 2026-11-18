# NEF presenter notes

Meeting with the New Economics Foundation, November 2026. Presenters: Vahid
Ahmadi and Max Ghenis. Goal: show the open OBR model and the macro platform,
and agree where to work together. About 30 minutes plus discussion: 7 on part
1, 4 on part 2, 7 on part 3, 7 on part 4, 5 on part 5 (the live demo under slide 17 can stretch part 4).

Every number below is in `content.ts`, with its source pinned to a commit.

The slides carry no source line; each section below ends with its sources,
and `content.ts` pins every one to a commit.

Builds: twelve slides reveal step by step when presenting (the count is in
each heading below; `builds` in `config.ts`). Each click moves one step, so
the deck has 44 steps for 23 slides. A PDF export shows every slide once,
complete. The viewer's counter counts slides, not steps. Motion is off under the reduced-motion setting.

On the slides a simulated change is a "scenario"; in the code and below, the
argument is still `shock=`.

## 1. Title

## 2. Today

Five parts. Say up front that the platform isn't launched, and that we'll be
direct about limits.

## 3. Part 1: the OBR model in Python

Section slide: say what the part covers in one sentence and move on. The tracker at the top of every slide shows the same five parts.

## 4. What the OBR publishes, and what we built (3 steps)

Three cards, one per layer, from the repo's roadmap; each click adds a card.
Every card reads top to bottom: what the OBR has, what we built, and the
number that belongs to that layer.

1. The model: published, 372 equations as EViews code; all 372 transpiled.
   The number is 372: the OBR's listing and variable list of 15 October 2025,
   still the latest on obr.uk on 16 November 2026.
2. The engine: EViews; we have a Gauss-Seidel solver, closures and
   add-factors, not the full engine, and no stochastic simulation. The number
   is 355 ONS series, pulled 11 July 2026 with 8 recovered on 22 September: of
   261 endogenous variables the EFO doesn't publish, 199 had ONS codes. The
   amber caveat: 82 of the 372 equations drop in at least one quarter of the
   pinned reform solve because an input has no data; each is listed in the
   code, or the solve raises.
3. The judgement: the forecasters' add-factors and off-model assumptions, not
   published. We stand in for it, and label every stand-in. The number is the
   October 2026 EFO (detailed forecast tables, 28 October 2026), the forecast
   the baseline is anchored to.

Terms glossed on this slide, where they first appear: closure (which variables
are solved and which are inputs), add-factor (an adjustment added to an
equation's result) and the Economic and Fiscal Outlook (EFO), the OBR's
twice-yearly forecast. Later slides say "EFO". The model names are spelled out
in the platform table, MAPE as "average error" on the fit slide, and MCP on
the Claude slide.

Same equations, not the OBR's judgements. The three stand-ins in the third
card:

- Anchoring: the add-factors are computed as EFO minus model, so the baseline
  sits on the OBR's published forecast. The EFO stands in for the OBR's
  unpublished judgement, and reforms are scored as deltas around it, so the
  add-factors cancel.
- Three opt-in overlays in `run_reform`, each labelled as judgement, not model
  dynamics: `published_conventions=True` (the OBR's published multipliers with
  their taper), `monetary_conditioning=True` (the mortgage rate follows Bank
  Rate at the listing's 0.9 pass-through) and `price_passthrough=True` (VAT
  passes into CPI).
- Your own assumptions: change any input path (Bank Rate, trade, CPI) through
  `run_reform`.

Not on the slide: cost-of-capital constants (DB, DP, DV) are estimated from
statute and the EFO gilt path; COCU is a declared seed. Two large level
anchors (OSHH, GGVA) are documented in the README. Unpublished inputs are
estimated or seeded, and labelled as such.

Sources: OBR model roadmap; OBR model README (limits table l.27–35, l.141); forecasting framework.

## 5. The model's modules, and how they connect (5 steps)

One map of the listing, built in five steps. Step 1 shows the 12 modules in
three groups. Steps 2 to 4 draw the arrows between the groups, one colour per
click: teal for what leaves demand (output), amber for what leaves supply and
prices, dark for what leaves income and sectors. Step 5 adds the grey dashed
links that don't reach GDP in the OBR's file. The key is inside the map.

The modules follow the section headers in the OBR's own code file
(`obr_model_code_october_2025.txt`); the number on each tile is the count of
equations our parser reads under those headers, and they sum to 372.

- GDP and output 33 (Group 16, 29, plus the market sector GVA satellite, 4);
  consumption 5 (Group 1); investment and inventories 49 (Groups 2 and 3, 7 and
  42); labour market 17 (Group 4); exports 3 (Group 5); imports 15 (Group 6);
  balance of payments 31 (Group 11); North Sea oil 5 (Group 8); prices and
  wages 44 (Group 7); income accounts 42 (Group 15); public sector 59 (Groups
  9, 10 and 12: expenditure 15, receipts 13, totals 31); finance and balance
  sheets 69 (Group 14, 5, plus Group 18: households 28, rest of world 23,
  non-financial companies 13).
- The listing has no Group 13 or Group 17.
- The amber tags mark what the OBR's file takes as given, from the review
  write-up: real GDP (G1), total investment (N1), export and import volumes
  (R1), CPI, which has no live equation (G3), and most tax receipts (V1). These
  are the points Thibault's review builds on, on the next slide.
- Example variables, no longer on the tiles: GDP and output GDPMPS, GVA,
  MSGVA; consumption CONS, CDUR, PD; investment and inventories IBUS, COC,
  DINV; labour market ET, ULFS, LFSUR; exports XNOG, RPRICE, XPS; imports
  MNOG, MS, MPS; balance of payments TB, CB, NIPD; North Sea oil TDOIL,
  PXOIL, NSGTP; prices and wages EARN, CPIX, RPI; income accounts HHDI,
  RHHDI, FYEMP; public sector CGG, PSCR, CGNB; finance and balance sheets M4,
  NFWPE, NIIP.

The three groups are ours, for the slide (defined in `module-links.py`):

- Demand, 105 equations: consumption, investment and inventories, exports,
  imports, GDP and output.
- Supply and prices, 66: labour market, prices and wages, North Sea oil.
- Income and sectors, 201: income accounts, public sector, balance of
  payments, finance and balance sheets.

The arrows. For each pair of groups we count the equations in the target group
whose right-hand side uses a variable the source group determines (lags count,
commented-out lines don't; an equation counts once per source group). The
number on an arrow is that count, and its width follows it. Each label names
the largest module links inside the flow:

- Demand → supply and prices, 19: "output → prices". GDP and output → prices
  and wages is 16 of them.
- Supply and prices → demand, 21: "prices → spending". Prices and wages →
  investment 6, consumption 5, imports 3; labour market → GDP and output 3.
- Demand → income and sectors, 32: "output → incomes, balance sheets". GDP and
  output → finance and balance sheets 11, income accounts 5; investment →
  public sector 4.
- Income and sectors → demand, 24: "government → output, imports". Public
  sector → GDP and output 7, imports 5. Income accounts → consumption (real
  household income into the consumption equations) is 2.
- Supply and prices → income and sectors, 9: "prices, jobs → incomes". Prices
  and wages → income accounts 3; labour market → public sector 2, finance 2.
- Income and sectors → supply and prices, 22: "incomes, exchange rate →
  prices". Income accounts → prices and wages 10; balance of payments → prices
  and wages 8 (the exchange rate into costs and trade prices).

Dashed, inside the demand group: consumption → GDP and output 2, investment
and inventories 3, exports 1, imports 1 (module-level counts). The spending
components feed total final expenditure (TFE, TFEPS; imports feed GDPMPS), but
in the OBR's file real GDP is an input and trade volumes are exogenous, so
they don't move GDP there. Our build opens the consumption one by making GDP
endogenous. One of investment's three is not an expenditure link (stock
appreciation into company profits, FYCPR).

A count is the number of equations, not the size of an effect.
`module-links.py` computes both matrices from the listing and writes
`module-links.json`.

Sources: the OBR's model code (`obr_model_code_october_2025.txt`); `module-links.py` and `module-links.json` in this folder; published-model review (G1, N1, R1, G3, V1).

## 6. Thibault's review, checked against the code (4 steps)

Steps 1 to 3 bring in his three headline points one at a time, each with our
check and its result; step 4 adds three errors in the published files, also
from his list, smaller, below. The line under each card title is the review's
own wording for the point, as `docs/published_model_review.md` records it
(H1, R1, V2), not our paraphrase.

- Thibault is in the room: invite him to introduce his findings, and to
  correct anything on the slide. It's his work.
- He read the OBR's published EViews code and variable list in September 2026
  and sent a list of 53 points (his ratings: 6 High, 25 Mid, 22 Low).
- His three headline points: no distributional effect of fiscal policy, total
  imports fixed, public debt interest fixed.
- We checked each against the published code and in our Python build (written
  up in `docs/published_model_review.md`, entries H1, R1, V2). All three hold;
  the write-up's verdict on each is "true but openly documented".
- Distribution (H1): the consumption equation has more than income in it
  (unemployment, house prices, a rate term and wealth), but every term is an
  aggregate. There is no household split, so a revenue-neutral transfer does
  nothing.
- Trade (R1): exports and imports never appear on the left-hand side of an
  equation; the exchange rate moves only prices.
- Debt interest (V2): it holds. The debt interest variables are inputs with no
  equation, the gilt interest series (DIPLDC, IILG) aren't in the code, and
  debt (PSND, GGGD) is computed but never used. Only if asked: household
  interest payments, a different thing, do respond to Bank Rate (l.623).

The subtitle is the whole list: we checked each of the 53 points
against the published files. 42 are confirmed (the write-up says "accurate":
22 documented by the OBR, 20 not flagged), 8 are confirmed in part ("partly
true" there), and 3 are about the OBR's forecasting process, which the code
can't settle. The slide's words are the gentler ones; the counts are the
write-up's.

Each of the three under the cards carries one plain line on what it does: G7,
the same identity twice, so unemployment isn't pinned down (in our test,
raising the participation starting value 2% moved unemployment from 5.4% to
7.3%); G6, nominal GDP and the investment deflator are one equation short, so
our build pins nominal GDP; N5, the foreign-currency term of the corporate
FISIM equation (the margin banks earn on loans and deposits) is added where
its neighbours subtract, about £3.3bn a quarter of cumulative drift as
printed, which we can't tell whether the OBR offsets.

The three under the cards (G7, G6, N5) are problems in
the published files rather than design choices; G6 and G7 leave nominal GDP /
the investment deflator and unemployment / participation not uniquely
determined. The OBR's workfile may resolve them; the release doesn't show how.
H3 (household interest payments respond to Bank Rate, receipts don't) is the
design choice with the clearest behavioural consequence, if asked.

The slide shows three of the four problems in the published files; the fourth
is V5, pre-Brexit EU payment equations that are still live.

Say this; it is no longer a line on the slide. We agree on the main point: as published, the model can't carry fiscal
feedback to output, because GDP is an input. Two refinements, if asked: G2
(Bank Rate and real wages do reach consumption, just not output) and R2 (the
current account feeds back through investment income).

Where this could go next (talking points, not on a slide; raise them only if
the discussion goes there):

- Documented isn't the same as fine: about half the accurate points (22 of 42)
  are open in the OBR's own variable list, and a documented gap is still a
  gap.
- A point we could lead with together: the published files alone don't
  reproduce the OBR's forecast, because the add-factors and calibration aren't
  published. What we showed is that our build can't; we can't speak for the
  OBR's own workfile.
- Any proposed fix can be tested in the open Python build first.
- What our build adds, if asked: GDP is solved, not imposed; we built the
  add-factors; 355 ONS series fill unpublished inputs.

Sources: published-model review; OBR model README.

## 7. How it runs (2 steps)

After the review of the OBR's file, this is our build: how the same equations
are run. Step 1 is the pipeline, step 2 the three example equations. The last
two steps of the pipeline (anchor, score) lead into the next slide.

The six steps: transpile the EViews listing to Python; fill the inputs the EFO
omits with 355 ONS series; close the model; solve quarter by quarter; anchor
the baseline to the EFO with add-factors; score a reform as the scenario run
minus the baseline.

The key step is the third (close): in the OBR's file GDP is an input and inventories balance
the expenditure identity. We delete that equation, hold inventories on the EFO
path and make GDP endogenous, so a demand shock can move GDP. The default
closure also switches on the OBR's commented-out l.690 (the nominal-GDP pin);
without it no quarter converges.

Gauss-Seidel, the solver (named on the "Solve" step; the explanation is no
longer on the slide): it solves the roughly 370 equations together, each
quarter, by computing each variable from the latest values of the others and
repeating until nothing changes. It is EViews' standard model solver (general
knowledge about EViews, not a repo claim), and it needs no derivatives. Don't
say the OBR's file "solves as intended": under the published closure no
quarter converges. Under the default closure
every quarter converges to tolerance (`df.attrs["solver_exit_status"]`). Under
the OBR's published closure it stalls, because the nominal GDP and investment
deflator pair is undetermined (#42, #50), which is why we pin nominal GDP.

The three equations are from the OBR's listing, written as maths to give a
feel for the model, not as a specification: the consumption error-correction
equation (l.4), the unemployment identity (l.163) and the household income
identity (l.654). Coefficients are rounded to three decimal places on the
slide (0.2645906, 0.1029795, 0.1250582 and 0.4392933 in the listing), and …
marks terms left out. The Python the transpiler emits is not on the slide.

Sources: the OBR's model code; `transpiler.py`; OBR model README (l.15, l.36, l.152); demo shocks.

## 8. How well it fits: two very different numbers (2 steps)

Two mirrored columns: a heading, two stats and three lines each. Step 1 is the
anchored column, step 2 the free-running one. "Average error" is the mean
absolute percentage error (MAPE) over 2025Q1–2027Q4. The subtitle says what
both columns are measured against: the OBR's October 2026 EFO path over those
quarters (the EFO's outturn quarters to 2026Q2, then its forecast), not
outturn data. It also carries the warning: the free-running gap is this
emulator's, not an OBR forecast error.

Left, anchored:

- 0.44% GDP and 0.72% consumption MAPE over 2025Q1–2027Q4, by construction:
  add-factors are EFO minus model. Only consumption is re-derived; the other
  GDP terms sit on the EFO.
- Reforms are scored as deltas from the anchored baseline, so the add-factors
  cancel.
- Every baseline and scenario solve in the demo set converges in 12 of 12
  quarters ("converged" covers the equations that evaluate).
- Unemployment is not anchored: 3.75% against 5.07% at 2027Q4 (and 1.05%
  against 4.17% by 2031Q1, on slide 14). The anchored GDP gap reaches 1.24% by
  2031Q1.

Right, free-running (add-factors off, GDP made endogenous, unpublished inputs seeded):

Say this one carefully. The ~4% free-running error is not the OBR's forecast
error: in the OBR's model GDP is an input, so it can't miss it. The gap
measures our closure swap plus the inputs the OBR doesn't publish. The
platform's registry labels the emulator (the label is no longer on the slide) "anchored to the October 2026 EFO, not
validated as a forecaster; predictive and policy checks weak".

If asked about the held-add-factor forecast (0.35% GDP, 7 of 8 in band): its
GDP line is close to circular, because household income is handed to the
model, so it isn't evidence of forecast skill.

The free-running figure has the add-factors off, GDP made endogenous and unpublished inputs seeded.

The right column's figures are from the full scorecard (the table is no longer
on the slide): consumption 6.92%, 8 of 11 within band, and the three poor
ones.

Default closure, October 2026 EFO, 2025Q1–2027Q4. Bands: rates within 1.0pp,
net balances within 1.5% of GDP, levels within 10% MAPE. Employment scores
0.00% because it is an identity of two passthrough inputs. RPI inflation decays
because the RPI index history the OBR doesn't publish runs out. Company profits
are a residual of nominal GDP. The other 10 headline variables (exports,
imports, CPI, earnings and others) are held at the OBR's value.

The full scorecard: real GDP 4.05%, consumption 6.92%, business investment 7.34%, household income 3.08%, real household income 3.29%, current account 0.91% of GDP (all fair); trade balance 0.41% of GDP (good); employment 0.00% (trivial identity); unemployment rate 1.17pp, RPI inflation 2.32pp, company profits 11.66% (poor). 8 of the 11 computed variables are within band.

Sources: calibration scorecard; OBR model README; site_figures.json; macro platform README.

## 9. Part 3: policy scenarios and limits

Section slide: say what the part covers in one sentence and move on. The tracker at the top of every slide shows the same five parts.

## 10. Policy scenarios against the OBR's multipliers (2 steps)

Step 1 is the default setup (three rows); step 2 adds the two rows that need
an opt-in switch. The variable names are no longer on the slide.

What is simulated, from the shocks table in `docs/demo.md` (rows 1, 2, 4, 4b
and 7). Every shock is sustained every quarter from 2025Q1 for 12 quarters and
scored as the scenario run minus the baseline anchored to the October 2026 EFO:

- Government consumption: +£1.25bn a quarter of real spending (`CGG` +1,250).
- Income tax: basic rate +1p, £1.725bn a quarter (`TYEM` +1,725, HMRC ready
  reckoner).
- VAT +1pp: £2.2bn a quarter (`VREC` +2,200), default closure.
- VAT +1pp with the opt-in price pass-through: the same £2.2bn.
- Government investment: +£3bn a quarter (`CGIPS` +3,000), opt-in investment
  closure.

Each row has the same marks on one line: a dot for the change in GDP per £1
after 1, 4 and 12 quarters, joined by a line, and an orange tick for the OBR's
published impact multiplier. Every row has the same three dots in the same colours. Where the
values are too close for numbered dots (government consumption, VAT by default
and government investment), the dots are smaller, at their true places, with
the quarter above each. The three values are in the right
column, with the OBR's under them.

Ratios at quarters 1, 4 and 12, from `docs/demo.md`. Tax rows are current-price
GDP per pound of revenue (the OBR's basis); government consumption is real GDP
per real pound; government investment is real GDP per nominal pound. OBR
benchmarks are the June 2010 estimates restated in EFO July 2015 Box 3.2, all
tapering; the legend dates the orange mark "EFO, July 2015". If asked: the
OBR's November 2023 dynamic-scoring article gives 0.45 for public services
(investment 1.00, welfare 0.60, tax 0.33). Our repo still encodes the 2015
figure of 0.6 for current spending; the review write-up records that as an
open discrepancy (G11). Against 0.45 the gap to our 1.01 is wider, not
narrower.

- Government consumption is about 1 by construction: the shock lands in the
  expenditure identity. `published_conventions=True` can impose the OBR's 0.6
  fading path as a labelled add-factor (0.60 / 0.51 / 0.27).
- Income tax and employee NICs: the same channel and the same ratios.
- VAT barely moves GDP by default: CPI is exogenous in the listing. The opt-in
  pass-through overlay lands near the OBR at quarter 4 (0.345 against 0.35) but
  keeps building; the match isn't a calibration.
- Government investment works only under the opt-in investment closure, as
  identity pass-through with no taper.

Sources: demo shocks (`docs/demo.md`); demo_shocks.json; price pass-through changelog (#70).

## 11. Income tax +1p: what the OBR model does to GDP (2 steps)

Everything on this slide is the OBR model alone, with HMRC's costing as the
input: the chart is not a PolicyEngine result and shows no distribution. It is
the one channel with real behaviour: consumption is the only behavioural
response here. The two PolicyEngine lines sit apart, under "With
PolicyEngine".

The chart is a time series, not a distribution: UK GDP below baseline for the
12 quarters 2025Q1 to 2027Q4 (quarter 1 is 2025Q1). Nothing on this slide is by
decile; who pays is the micro-to-macro slide (19). Step 1 is the chart, with the four-step route above it (HMRC costing →
household income → consumption → GDP); step 2 is the panel of three takeaways.
Only quarters 1, 4, 8 and 12 carry a value; the others are 227, 285, 381, 422,
456, 510, 532 and 551 (£m, falls).

+1p on the basic rate, £1,725m a quarter (HMRC ready reckoner, June 2025,
2026-27 column, £6.9bn a year divided by four), sustained from 2025Q1. Real
GDP falls 161 at quarter 1, 335 at quarter 4 and 569 at quarter 12 (£m). Ratio
0.10 / 0.21 / 0.38 against the OBR's 0.3, which fades; the panel says the
same in pence per £1 of tax (10p, 38p, 30p), which is current-price GDP per
pound of current-price revenue. Receipts and borrowing
move one for one; lower consumption doesn't reduce other receipts. GDP change
equals the consumption change to the pound.

Where the change comes from, which is the route above the chart:

- The OBR model has no tax calculator. The revenue is an input: `TYEM` (income
  tax) is exogenous in the listing, and we shock it by £1,725m a quarter, the
  HMRC ready reckoner figure.
- `TYEM` feeds household taxes (l.612) and so household income (`HHDI`, l.654);
  the OBR's own consumption equation (l.4) then lowers spending. GDP moves
  because our build solves it; in the OBR's file it is fixed.
- "Real behaviour" means only that consumption equation. Imports don't
  respond: the GDP change equals the consumption change to the pound.
- The line under "With PolicyEngine" carries no number. PolicyEngine's static
  costing of the same 1p is £1,616m a quarter in the model README's
  household-tax row, and £6.55bn a year (about £1,637m a quarter) in the
  platform's bridge benchmark on slide 19: two vintages of the same costing.
  The deck shows only the second. Either gives the same ratios (0.38 at
  quarter 12): the GDP path scales with the input, only the ratio is the
  same.
- "Similar size, opposite path": the README's own words are "right order of
  magnitude" with the profile reversed. The OBR's 0.3 is an impact multiplier
  that fades; ours starts at 0.10 and builds.

The OBR model does not return decile impacts: it is an aggregate model with
one consumption equation and no household split. Deciles come from
PolicyEngine's microsimulation, run alongside (slide 19). The PolicyEngine
costing on this slide only changes the size of the input.

Sources: demo shocks; demo_shocks.json; OBR model README (l.33).

## 12. Investment: off by default, on with one switch (3 steps)

Step 1 is the switch card (off: the OBR's file; on: our opt-in); step 2
corporation tax; step 3 government investment.

In the OBR's file total investment is an input (`IF` has no live equation),
so corporation tax and public investment do nothing to GDP by default, and
`run_reform` warns. `investment_closure=True` switches on the listing's own
commented-out `IF` identity (l.86). For corporation tax the line that matters
is the commented-out business-investment equation (l.92), which we rebuilt
with its missing bracket closed (after `KGAP(-2)`, where the OBR's Briefing
paper No. 5, equation 2.38, closes it; review write-up N1).

The chip on the switch card ("stop-gap"): the investment closure freezes MSGVA, PIF and PIRHH to keep the run stable; without the guard, a
zero-shock baseline runs business investment from £86bn to £522bn by 2027Q4.

- Corporation tax +5pp: nothing in quarters 1–2, then −£78m at quarter 4 and
  −£384m at quarter 12 (0.05% of GDP), 40% of a plateau of about £0.96bn a
  quarter. The OBR multiplier table the repo encodes has no corporation-tax
  row.
- Government investment +£3bn a quarter: +£3,075m / +£2,901m / +£2,932m at
  quarters 1 / 4 / 12. Under the default closure IF has no live equation, so
  the channel is dead and `run_reform` warns.

On the slide "still falling, towards about −£0.96bn a quarter" is the plateau,
and "about £1 of GDP per £1, with no fade" is identity pass-through at about
1.0 with no taper, against the OBR's 1.0, tapering.

Sources: demo shocks (rows 5 and 7); OBR model README (l.31, l.34).

## 13. Bank Rate (2 steps)

Step 1 is the three bars; step 2 the channels beside them (two respond, five
don't).

+1pp for four quarters, peak at quarter 4: −0.057% of GDP in the default run
(mortgage rate held, a lower bound), −0.149% with `monetary_conditioning=True`
(mortgage rate moved at the 0.9 pass-through in the OBR's l.623). The Bank of
England's range for the same experiment is −0.2% to −0.35% after about a year
(Quarterly Bulletin 1999 Q2). About −0.16% is the ceiling even with mortgage
and deposit rates both moved. CPI and unemployment don't respond, by design.

Only consumption and household interest respond. Investment, sterling, house prices and gilts have no interest-rate equation in the listing.

Retail rates, gilts, sterling and house prices have no equation: they are the
OBR's conditioning assumptions, set by judgement or from market curves. The
business-investment equation is commented out in the OBR's file. The Bank of
England range is shown as one bar from −0.2% to −0.35%.

Sources: demo shocks (rows 6 and 6b); monetary conditioning; OBR model README (l.35).

## 14. Known limits, and whose they are (2 steps)

The slide separates limits we inherit from the OBR's published model (step 1)
from limits of our replication (step 2).

Inherited:

- Bank Rate: −0.057% of GDP unconditioned and −0.149% with the mortgage rate
  moved, against the Bank of England's −0.2% to −0.35%. Only consumption and
  household interest respond.
- Spending: in the OBR's file GDP is an input, so a spending change moves GDP
  by nothing; the multiplier of about 1 (1.01 on impact, 1.05 by quarter 12)
  appears once our closure solves GDP. What we inherit is that nothing in the
  equations damps it: imports and prices don't respond, and there is no
  crowding out. So the equations can't produce the OBR's 0.6 (the 2015
  figure; see slide 10 on 0.45). Borrowing doesn't move, because the nominal
  spending identity is commented out. A nominal-consistent spending shock is an
  open decision.
- CPI has no live equation, so VAT barely transmits. The pass-through overlay
  is labelled judgement, not the shipped listing.

Ours:

- Unemployment drifts to 1.05% against 4.17% by 2031Q1. The root cause is in
  their code (l.163 and l.175 are one identity, so nothing holds participation
  on the EFO path), but it shows up in our anchored run. Anchoring PART16 is an
  open decision.
- 82 of the 372 equations drop in at least one quarter because an input has no
  data.
- Unpublished inputs are seeded or estimated, and labelled.
- Every result is a point estimate; our engine has no stochastic simulation.

Not a limit, so not on the slide: the household-tax fix (#71). Their ONS
components aren't seasonally adjusted while the aggregate is, which put a
−10.6% / −12.5% first-quarter dip into household income. Holding them on their
data path took the free-running GDP error from 4.25% to 4.05% and household
income from 4.30% to 3.08%. That is an artefact removed, not better fit.
Seasonally adjusting the components is the follow-up.

Sources: OBR model README; site_figures.json; TYWHH changelog (#71).

## 15. Part 4: the macro platform

Every slide in this part carries an amber "Preview, not yet launched" marker
under its title.

Section slide: say what the part covers in one sentence and move on. The tracker at the top of every slide shows the same five parts.

## 16. The macro platform

Not yet launched. The status column quotes the site's own label for each
model, word for word (its "Where each model fails" section): exact for
implemented rules (the microsimulation), anchored, not validated (the OBR
emulator), partial replication (BoE SVAR, DEFINE-UK, US HANK), calibrated, no
outcome benchmark (OG-UK), replicates the Fed's solver (FRB/US). The site
says none is validated as a forecaster.

Seven public models (`site_contract.py`'s list), each with
its own repo. Results from different model classes are complementary, not
comparable, and the scoring tool won't average them. FRB/US and HANK refuse
reform scoring on purpose: no mapping from a PolicyEngine reform exists, and
inventing one would give plausible-looking wrong numbers.

OG-UK's "Yes" under "Scores reforms" carries the site's own qualifier, "none
published". DEFINE-UK is on the table as one of the seven; its results are scenario deltas from a partial replication, run locally. Don't quote a multiplier for it: which one to headline is open.

Sources: model comparison page; macro platform README.

## 17. The platform, live

- Click the frame, then use the buttons: Home, Models, Compare, OBR model,
  OBR validation, Forecasts. Expand fills the screen; New tab opens the site.
- Say it's in development and not launched; numbers on it follow the pinned
  model runs shown on the earlier slides.
- If the frame is blank (offline, or the site's frame headers not yet live),
  use New tab.

Live demo, if time (this replaces the old demo slide):

Before the session: `uv sync` and run one `run_reform` call, because the first
build takes a few minutes. If using `score_reform`, start it through
`start_job` before the meeting: a five-year score takes over ten minutes.

1. `run_reform(name="demo", var="CGG", shock=1250, periods=12)`, then income
   tax (`var="TYEM", shock=1725`).
2. VAT with `price_passthrough=True`; Bank Rate (`var="R", shock=1.0,
   periods=4`) with `monetary_conditioning=True`. Run overlays locally: hosted
   `obr_shock` has no overlay parameter, and the hosted model (2965e82) is 10
   commits behind main, before #70 and #71. #70 left defaults unchanged to the
   pound and #71 left reform deltas unchanged, by their own changelogs.
3. The dashboard at obr-macroeconomic-model.vercel.app.
4. In Claude with the MCP connector: "Score raising the UK basic rate of income
   tax to 21p."

Don't run live: government investment under the default closure (GDP doesn't
move), corporation tax as receipts (`NNSCTP`, GDP exactly zero), or the
published closure in a demand run (no quarter converges).

Sources: the live site; demo shocks; Use page; `integration/pyproject.toml` (hosted pin).

## 18. Use it from Claude (3 steps)

The slide shows the three steps someone takes in Claude; the details are from
the site's Use page and `mcp_server.py`.

1. Connect. In Claude: Settings → Connectors → Add custom connector, and paste
   `https://policyengine--policyengine-macro-mcp-serve.modal.run/mcp` (some
   plans gate custom connectors). In Claude Code: `claude mcp add --transport
   http policyengine-macro
   https://policyengine--policyengine-macro-mcp-serve.modal.run/mcp`. ChatGPT
   and other MCP clients work the same way.
2. Ask in plain language. The example is one of the Use page's prompts: "Score
   raising the UK basic rate of income tax to 21p."
3. Claude calls the tools: `score_reform`, run through `start_job` on the
   hosted server because a five-year score outlasts one request;
   `get_job_result` to poll it; `format_score_report` to render it. With
   `model="obr"` the answer has the static costing and the change in GDP,
   consumption and investment, with assumptions and caveats attached. The
   slide shows no result numbers on purpose.

- Hosted MCP server: 28 tools at the pinned commit (the README still says 26).
  No install, account or key; scales to zero, so the first call may take about
  10 seconds.
- CLI: 27 commands. The `[models]` extra pins each git dependency to a full
  SHA; OG-UK and DEFINE-UK's R runtime are local-only.
- Dated data snapshots under `data/vintages/`, never edited, so any score can
  be reproduced against the data it saw.

One click per step. The first card also lists the other ways in: the MCP server, the CLI, Python (`run_reform()`) and the dashboard. The dated data snapshots are no longer on the slide.

Sources: Use page; `mcp_server.py`; `cli.py`; macro platform README.

## 19. From a microsimulation reform to GDP (3 steps)

Step 1 is the reform, entered once; step 2 the household answer; step 3 the
route to the economy answer. The check against HMRC sits in the static-cost
card, and the GDP card points back to the income-tax slide.

One worked example, the basic rate +1p, giving two answers. Households: the
decile changes, winners and losers and poverty come straight from the
PolicyEngine-UK microsimulation and stay there; the OBR model has no
households. Economy: the microsimulation's static cost (£6.55bn a year) goes
through the bridge into the OBR model, and GDP, consumption and investment
come out. The GDP path on slide 11 is the same reform with HMRC's costing
(£1,725m a quarter) as the input; don't mix the two bases.

`score_reform(model="obr")`: a PolicyEngine-UK reform is costed per year with
the population microsimulation, enters the OBR model as a quarterly
`HHDI_ADDFACTOR` path, and GDP, consumption and investment come out. It is a
demand-side approximation, not a general incidence model; corporation-tax
reforms are refused. Distribution comes from the microsimulation itself. When
we report poverty we headline before housing costs, with after housing costs
alongside; the platform's population tool doesn't return poverty rates yet.
The static costing of 1p on the basic rate (£6.55bn, 2026-27) is 5.1% below
HMRC's ready reckoner (£6.9bn): static and survey-based against
post-behavioural and administrative.

Sources: `mcp_server.py`; `capabilities.py`.

## 20. Part 5: working together

Section slide: say what the part covers in one sentence and move on. The tracker at the top of every slide shows the same five parts.

## 21. Where we could work together

Options to discuss, not commitments. Each maps to something open in the repo:
the closure choice and a spending shock that moves borrowing; the investment
closure and DEFINE-UK; macro paths back into household results; the published
listing's open problems (G6, G7, N5); anchoring participation; joint write-ups.

Sources: OBR model README; published-model review; DEFINE-UK model page.

## 22. Questions for NEF

Listen more than talk here.

Next steps to propose (this replaces the old next-steps slide); agree owners
and dates in the room:

1. A hands-on session: run a scenario NEF chooses, together.
2. Pick two or three questions: agree scope, closures and what counts as a
   check.
3. A shared review of the open equation and closure issues on GitHub.
4. A check-in date to review results and a possible write-up.

## 23. Thank you

Contact on the slide: vahid@policyengine.org.
