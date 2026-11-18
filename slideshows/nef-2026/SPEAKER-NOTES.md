# NEF presenter notes

Meeting with the New Economics Foundation, November 2026. Presenters: Vahid
Ahmadi and Max Ghenis. Goal: show the open OBR model and the macro platform,
and agree where to work together. About 30 minutes plus discussion: 7 on part
1, 4 on part 2, 7 on part 3, 7 on part 4, 5 on part 5 (the demo can stretch).

Every number below is in `content.ts`, with its source pinned to a commit.

The slides carry no source line; each section below ends with its sources,
and `content.ts` pins every one to a commit.

## 1. Title

## 2. Today

Five parts. Say up front that the platform isn't launched, and that we'll be
direct about limits.

## 3. Part 1: the OBR model in Python

Section slide: say what the part covers in one sentence and move on. The tracker at the top of every slide shows the same five parts.

## 4. What the OBR publishes, and what we built

Three layers, from the repo's roadmap: the model (published, all 372 equations
transpiled), the engine (EViews; we have a Gauss-Seidel solver, closures and
add-factors, not the full engine, and no stochastic simulation), and the
judgement (the forecasters' add-factors and off-model assumptions, not
published). 



Same equations, not the OBR's judgements. How we stand in for the judgement
(the third row, and the strip under the table):

- Anchoring: the add-factors are computed as EFO minus model, so the baseline
  sits on the OBR's published forecast. The EFO stands in for the OBR's
  unpublished judgement, and reforms are scored as deltas around it, so the
  add-factors cancel.
- Three opt-in overlays in `run_reform`, each labelled as judgement, not model
  dynamics: `published_conventions=True` (the OBR's published multipliers with
  their taper), `monetary_conditioning=True` (the mortgage rate follows Bank
  Rate at the listing's 0.9 pass-through) and `price_passthrough=True` (VAT
  passes into CPI).
- Your own assumptions: shock any input path (Bank Rate, trade, CPI) through
  `run_reform`.

The four numbers under the table are the inputs:

- The OBR listing and variable list of 15 October 2025, still the latest on
  obr.uk on 16 November 2026.
- The October 2026 EFO detailed forecast tables (28 October 2026).
- 355 ONS series, pulled 11 July 2026 with 8 recovered on 22 September: of 261
  endogenous variables the EFO doesn't publish, 199 had ONS codes.
- 82 of the 372 equations drop in at least one quarter of the pinned reform
  solve because an input has no data; each is listed in the code, or the
  solve raises.
- Cost-of-capital constants (DB, DP, DV) are estimated from statute and the
  EFO gilt path; COCU is a declared seed. Two large level anchors (OSHH, GGVA)
  are documented in the README.

Unpublished inputs are estimated or seeded, and labelled as such.

Sources: OBR model roadmap; OBR model README (limits table l.27–35, l.141); forecasting framework.

## 5. The model's modules

A map of the listing, to give a sense of what is in the 372 equations before
the detail. The 12 modules follow the section headers in the OBR's own code
file (`obr_model_code_october_2025.txt`); the number on each tile is the count
of equations our parser reads under those headers, and they sum to 372.

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
  are the points Thibault's review builds on, three slides later.
- The variables on each tile are examples of left-hand sides in that section,
  not a full list.

Sources: the OBR's model code (`obr_model_code_october_2025.txt`); published-model review.

## 6. How the modules connect

The same 12 modules, with arrows for how the listing wires them together. For
each pair we count the equations in the target module whose right-hand side
uses a variable the source module determines (lags count, commented-out lines
don't). The number on an arrow is that count. `module-links.py` computes the
full matrix from the listing and writes `module-links.json`.

- Shown: every link of 6 or more equations, plus the demand loop. In order:
  GDP and output → prices and wages 16; GDP and output → finance and balance
  sheets 11; income accounts → prices and wages 10; balance of payments →
  prices and wages 8 (the exchange rate into costs and trade prices); public
  sector → income accounts 7; public sector → GDP and output 7; labour market
  → prices and wages 7; finance and balance sheets → income accounts 7; prices
  and wages → investment 6.
- The demand loop: GDP and output → income accounts 5; prices and wages →
  consumption 5; income accounts → consumption 2 (real household income into
  the consumption equations).
- Dashed: consumption → GDP 2, exports → GDP 1, imports → GDP 1. These reach
  total final expenditure, but in the OBR's file real GDP is an input and
  trade volumes are exogenous, so they don't move GDP. Our build opens the
  consumption one by making GDP endogenous.
- A count is the number of equations, not the size of an effect. North Sea oil
  has no link above the cut-off.

Sources: the OBR's model code; `module-links.py` and `module-links.json` in this folder; published-model review (G1, R1).

## 7. How it runs

The six steps: transpile the EViews listing to Python; fill the inputs the EFO
omits with 355 ONS series; close the model; solve quarter by quarter; anchor
the baseline to the EFO with add-factors; score a reform as the shocked run
minus the baseline.

The key step is the third (close): in the OBR's file GDP is an input and inventories balance
the expenditure identity. We delete that equation, hold inventories on the EFO
path and make GDP endogenous, so a demand shock can move GDP. The default
closure also switches on the OBR's commented-out l.690 (the nominal-GDP pin);
without it no quarter converges.

Gauss-Seidel, the solver: it solves the roughly 370 equations together, each
quarter, by computing each variable from the latest values of the others and
repeating until nothing changes. It is EViews' standard model solver (general
knowledge about EViews, not a repo claim), so we solve the file the way it is
meant to be solved, and it needs no derivatives. Under the default closure
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

## 8. Thibault's review, checked against the code

- Thibault is in the room: invite him to introduce his findings, and to
  correct anything on the slide. It's his work.
- He read the OBR's published EViews code and variable list in September 2026
  and sent a list of 53 points (his ratings: 6 High, 25 Mid, 22 Low).
- His three headline points, from his email of 23 September: no distributional
  effect of fiscal policy, total imports fixed, public debt interest fixed.
- We checked each against the published code and in our Python build (our
  reply of 29 September, written up in `docs/published_model_review.md`,
  entries H1, R1, V2). All three hold.
- Distribution (H1): the consumption equation has more than income in it
  (unemployment, house prices, a rate term and wealth), but every term is an
  aggregate. There is no household split, so a revenue-neutral transfer does
  nothing.
- Trade (R1): exports and imports never appear on the left-hand side of an
  equation; the exchange rate moves only prices.
- Debt interest (V2): it holds for the public debt interest bill, which is the
  refinement. The gilt interest series (DIPLDC, IILG) aren't in the code, and
  debt (PSND, GGGD) is computed but never used. Household interest payments do
  respond to Bank Rate (l.623).

The strip at the top is the whole list: we checked each of the 53 points
against the published files. 42 are accurate (22 documented by the OBR, 20 not
flagged), 8 partly true, and 3 are process claims that can't be checked from
the code.

The four on the slide are problems in
the published files rather than design choices; G6 and G7 leave nominal GDP /
the investment deflator and unemployment / participation not uniquely
determined. The OBR's workfile may resolve them; the release doesn't show how.
H3 (household interest payments respond to Bank Rate, receipts don't) is the
design choice with the clearest behavioural consequence, if asked.

The slide shows three of the four problems in the published files; the fourth
is V5, pre-Brexit EU payment equations that are still live.

We agree on the main point: as published, the model can't carry fiscal
feedback to output, because GDP is an input. Two refinements, if asked: G2
(Bank Rate and real wages do reach consumption, just not output) and R2 (the
current account feeds back through investment income).

Sources: published-model review.

## 9. How to take it to the OBR

- Thibault's view: a documented gap is still a gap. About half the accurate
  points (22 of 42) are open in the OBR's own variable list. Present it as his
  position, in his words if he wants to put it, not as something we rebut.
- Our suggestion: lead with the fact that the published model can't reproduce
  the OBR's own forecast, because the add-factors and calibration that make it
  work aren't published.
- Thibault writes to the OBR; any proposed fix can be run in our Python
  version first. Check with him in the room that this is still the plan.
- His reply of 13 October put our agreement at about 80%. Mention it only if
  it comes up.
- What our build adds, if asked: GDP is solved, not imposed; we built the
  add-factors; 355 ONS series fill unpublished inputs.

Sources: published-model review; OBR model README.

## 10. Part 2: how well it fits

Section slide: say what the part covers in one sentence and move on. The tracker at the top of every slide shows the same five parts.

## 11. How well it fits: two very different numbers

Left, anchored:

- 0.44% GDP and 0.72% consumption MAPE over 2025Q1–2027Q4, by construction:
  add-factors are EFO minus model. Only consumption is re-derived; the other
  GDP terms sit on the EFO.
- Reforms are scored as deltas from the anchored baseline, so the add-factors
  cancel.
- Every baseline and shocked solve in the demo set converges in 12 of 12
  quarters ("converged" covers the equations that evaluate).
- Unemployment is not anchored: 3.75% against 5.07% at 2027Q4 (and 1.05%
  against 4.17% by 2031Q1, on slide 17). The anchored GDP gap reaches 1.24% by
  2031Q1.

Right, free-running (add-factors off, GDP made endogenous, unpublished inputs seeded):

Say this one carefully. The ~4% free-running error is not the OBR's forecast
error: in the OBR's model GDP is an input, so it can't miss it. The gap
measures our closure swap plus the inputs the OBR doesn't publish. The
platform's registry labels the emulator "anchored to the October 2026 EFO, not
validated as a forecaster; predictive and policy checks weak".

If asked about the held-add-factor forecast (0.35% GDP, 7 of 8 in band): its
GDP line is close to circular, because household income is handed to the
model, so it isn't evidence of forecast skill.

The free-running figure has the add-factors off, GDP made endogenous and unpublished inputs seeded.

The three rows on the slide are from the full scorecard:

Default closure, October 2026 EFO, 2025Q1–2027Q4. Bands: rates within 1.0pp,
net balances within 1.5% of GDP, levels within 10% MAPE. Employment scores
0.00% because it is an identity of two passthrough inputs. RPI inflation decays
because the RPI index history the OBR doesn't publish runs out. Company profits
are a residual of nominal GDP. The other 10 headline variables (exports,
imports, CPI, earnings and others) are held at the OBR's value.

The full scorecard: real GDP 4.05%, consumption 6.92%, business investment 7.34%, household income 3.08%, real household income 3.29%, current account 0.91% of GDP (all fair); trade balance 0.41% of GDP (good); employment 0.00% (trivial identity); unemployment rate 1.17pp, RPI inflation 2.32pp, company profits 11.66% (poor). 8 of the 11 computed variables are within band.

Sources: calibration scorecard; OBR model README; site_figures.json; macro platform README.

## 12. Part 3: policy shocks and limits

Section slide: say what the part covers in one sentence and move on. The tracker at the top of every slide shows the same five parts.

## 13. Shocks against the OBR's multipliers

What is simulated, from the shocks table in `docs/demo.md` (rows 1, 2, 4, 4b
and 7). Every shock is sustained every quarter from 2025Q1 for 12 quarters and
scored as the shocked run minus the baseline anchored to the October 2026 EFO:

- Government consumption: +£1.25bn a quarter of real spending (`CGG` +1,250).
- Income tax: basic rate +1p, £1.725bn a quarter (`TYEM` +1,725, HMRC ready
  reckoner).
- VAT +1pp: £2.2bn a quarter (`VREC` +2,200), default closure.
- VAT +1pp with the opt-in price pass-through: the same £2.2bn.
- Government investment: +£3bn a quarter (`CGIPS` +3,000), opt-in investment
  closure.

Each dot is the change in GDP per £1 of the shock after 1, 4 and 12 quarters;
the orange line is the OBR's published impact multiplier. Where the three dots
would overlap they are stacked.

Ratios at quarters 1, 4 and 12, from `docs/demo.md`. Tax rows are current-price
GDP per pound of revenue (the OBR's basis); government consumption is real GDP
per real pound; government investment is real GDP per nominal pound. OBR
benchmarks are the June 2010 estimates restated in EFO July 2015 Box 3.2, all
tapering.

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

## 14. Income tax

+1p on the basic rate, £1,725m a quarter (HMRC ready reckoner, June 2025,
2026-27 column, £6.9bn a year divided by four), sustained from 2025Q1. Real
GDP falls 161 at quarter 1, 335 at quarter 4 and 569 at quarter 12 (£m). Ratio
0.10 / 0.21 / 0.38 against the OBR's 0.3, which fades. Receipts and borrowing
move one for one; lower consumption doesn't reduce other receipts. GDP change
equals the consumption change to the pound.

Where the shock comes from, which is the flow across the top of the slide:

- The OBR model has no tax calculator. The revenue is an input: `TYEM` (income
  tax) is exogenous in the listing, and we shock it by £1,725m a quarter, the
  HMRC ready reckoner figure.
- `TYEM` feeds household taxes (l.612) and so household income (`HHDI`, l.654);
  the OBR's own consumption equation (l.4) then lowers spending. GDP moves
  because our build solves it; in the OBR's file it is fixed.
- "Real behaviour" means only that consumption equation. Imports don't
  respond: the GDP change equals the consumption change to the pound.
- PolicyEngine's static costing of the same 1p is £1,616m a quarter (the model
  README's household-tax row); it gives the same ratios (0.38 at quarter 12).

The OBR model does not return decile impacts: it is an aggregate model with
one consumption equation and no household split. Deciles come from
PolicyEngine's microsimulation, run alongside (slide 23). The PolicyEngine
costing on this slide only changes the size of the input.

Sources: demo shocks; demo_shocks.json; OBR model README (l.33).

## 15. Investment: off by default, on with one switch

In the OBR's file total investment is an input (`IF` has no live equation),
so corporation tax and public investment do nothing to GDP by default, and
`run_reform` warns. `investment_closure=True` switches on the listing's own
commented-out `IF` identity (l.86).

The investment closure freezes MSGVA, PIF and PIRHH; without the guard, a
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

## 16. Bank Rate

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

## 17. Known limits, and whose they are

The slide separates limits we inherit from the OBR's published model from
limits of our replication.

Inherited:

- Bank Rate: about a quarter of the BoE range unconditioned, about half with
  the mortgage rate moved. Only consumption and household interest respond.
- Spending multiplier: 1.01 on impact, 1.05 by quarter 12, against 0.6. It is
  accounting: the shock lands in the expenditure identity, and the equations
  can't produce the OBR's 0.6. Borrowing doesn't move, because the nominal
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

## 18. Part 4: the macro platform

Section slide: say what the part covers in one sentence and move on. The tracker at the top of every slide shows the same five parts.

## 19. The macro platform

Not yet launched. Seven public models (`site_contract.py`'s list), each with
its own repo. Results from different model classes are complementary, not
comparable, and the scoring tool won't average them. FRB/US and HANK refuse
reform scoring on purpose: no mapping from a PolicyEngine reform exists, and
inventing one would give plausible-looking wrong numbers.

DEFINE-UK is on the table as one of the seven; its results are scenario deltas from a partial replication, run locally. Don't quote a multiplier for it: which one to headline is open.

Sources: model comparison page; macro platform README.

## 20. The platform, live

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

## 21. A scored forecast record

Rounds are committed to git before the outturn exists and are append-only.
Nine forecasts of five outturns scored (5 live, 4 retroactive); 4 of 5 live
forecasts inside the 68% band; average miss 0.34pp against 0.47pp for no
change; bias −0.33pp, low on 8 of 9. All from the BoE SVAR and its
unemployment satellite. The page itself says: too few to show skill. The SVAR
has no forecast skill against a drifting random walk in its own evaluation.

Sources: forecast track record; scorecard.json; forecast archive rules.

## 22. Use it from Claude

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

The strip under the three steps lists the other ways in: the MCP server, the CLI, Python (`run_reform()`), the dashboard and the dated data snapshots.

Sources: Use page; `mcp_server.py`; `cli.py`; macro platform README.

## 23. From a microsimulation reform to GDP

One worked example, the basic rate +1p, giving two answers. Households: the
decile changes, winners and losers and poverty come straight from the
PolicyEngine-UK microsimulation and stay there; the OBR model has no
households. Economy: the microsimulation's static cost (£6.55bn a year) goes
through the bridge into the OBR model, and GDP, consumption and investment
come out. The GDP path on slide 14 is the same reform with HMRC's costing
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

## 24. Part 5: working together

Section slide: say what the part covers in one sentence and move on. The tracker at the top of every slide shows the same five parts.

## 25. Where we could work together

Options to discuss, not commitments. Each maps to something open in the repo:
the closure choice and a spending shock that moves borrowing; the investment
closure and DEFINE-UK; macro paths back into household results; the published
listing's open problems (G6, G7, N5); anchoring participation; joint write-ups.

Sources: OBR model README; published-model review; DEFINE-UK model page.

## 26. Questions for NEF

Listen more than talk here.

Next steps to propose (this replaces the old next-steps slide); agree owners
and dates in the room:

1. A hands-on session: run a scenario NEF chooses, together.
2. Pick two or three questions: agree scope, closures and what counts as a
   check.
3. A shared review of the open equation and closure issues on GitHub.
4. A check-in date to review results and a possible write-up.

## 27. Thank you

Contact on the slide: vahid@policyengine.org.
