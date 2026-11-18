# NEF presenter notes

Meeting with the New Economics Foundation, November 2026. Presenters: Vahid
Ahmadi and Max Ghenis. Goal: show the open OBR model and the macro platform,
and agree where to work together. About 30 minutes plus discussion: 7 on part
1, 4 on part 2, 7 on part 3, 7 on part 4, 5 on part 5 (the demo can stretch).

Every number below is in `content.ts`, with its source pinned to a commit.

## 1. Title

## 2. Today

Five parts. Say up front that the platform isn't launched, and that we'll be
direct about limits.

## 3. What the OBR publishes, and what we built

Three layers, from the repo's roadmap: the model (published, all 372 equations
transpiled), the engine (EViews; we have a Gauss-Seidel solver, closures and
add-factors, not the full engine, and no stochastic simulation), and the
judgement (the forecasters' add-factors and off-model assumptions, not
published). A user of our model supplies their own judgement.

The forecast a user gets depends on the judgement they supply; say so here, because the slide only says "same equations, not the OBR's judgements".

## 4. The model's modules

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

## 5. The inputs

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

## 6. How it runs

The table shows three lines of the OBR's listing and the Python our transpiler
emits for the right-hand side of each (`transpiler.py`, run on the pinned
commit): the consumption error-correction equation (l.4, trimmed on the slide,
marked with …), the unemployment identity (l.163) and the household income
identity (l.654, trimmed). It is there to give a feel for the code, not as a
specification. `v[...]` is this quarter's value and `_lag(..., n)` is the value
n quarters back.

The key step is 03: in the OBR's file GDP is an input and inventories balance
the expenditure identity. We delete that equation, hold inventories on the EFO
path and make GDP endogenous, so a demand shock can move GDP. The default
closure also switches on the OBR's commented-out l.690 (the nominal-GDP pin);
without it no quarter converges.

The six steps: transpile the EViews listing to Python; fill the inputs the EFO omits with 355 ONS series; close the model; solve quarter by quarter (Gauss-Seidel); anchor the baseline to the EFO with add-factors; score a reform as the shocked run minus the baseline.

## 7. Thibault's review: three headline points, checked

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

## 8. Thibault's 53 points, checked line by line

Thibault's list of 53 points (September 2026); we
checked each against the published files (`docs/published_model_review.md`).
The four on the slide are problems in
the published files rather than design choices; G6 and G7 leave nominal GDP /
the investment deflator and unemployment / participation not uniquely
determined. The OBR's workfile may resolve them; the release doesn't show how.
H3 (household interest payments respond to Bank Rate, receipts don't) is the
design choice with the clearest behavioural consequence, if asked.

## 9. Where we agree, and one open question

- We agree on the main point: as published, the model can't carry fiscal
  feedback to output, because GDP is an input.
- The two refinements are G2 (Bank Rate and real wages do reach consumption,
  just not output) and R2 (the current account feeds back through investment
  income).
- The open question is how far "it's documented" answers a point: about half
  the accurate points (22 of 42) are open in the OBR's own variable list.
  Thibault's view is that a documented gap is still a gap. Present it as an
  open difference between us, not a rebuttal, and let him put it in his words.
- His reply of 13 October put our agreement at about 80%. Mention it only if
  it comes up.
- Our suggestion: lead with the fact that the published model can't reproduce
  the OBR's own forecast, because the add-factors and calibration aren't
  published.
- What our build adds: GDP is solved, not imposed; we built the add-factors;
  355 ONS series fill unpublished inputs. Any fix can be tested in the open
  build before it goes to the OBR. An earlier draft said Thibault will write to
  the OBR: ask him, don't state it.

## 10. Anchored to the October 2026 EFO

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

## 11. Two numbers that are easy to misread

Say this one carefully. The ~4% free-running error is not the OBR's forecast
error: in the OBR's model GDP is an input, so it can't miss it. The gap
measures our closure swap plus the inputs the OBR doesn't publish. The
platform's registry labels the emulator "anchored to the October 2026 EFO, not
validated as a forecaster; predictive and policy checks weak".

If asked about the held-add-factor forecast (0.35% GDP, 7 of 8 in band): its
GDP line is close to circular, because household income is handed to the
model, so it isn't evidence of forecast skill.

The free-running figure has the add-factors off, GDP made endogenous and unpublished inputs seeded.

## 12. Free-running scorecard

Default closure, October 2026 EFO, 2025Q1–2027Q4. Bands: rates within 1.0pp,
net balances within 1.5% of GDP, levels within 10% MAPE. Employment scores
0.00% because it is an identity of two passthrough inputs. RPI inflation decays
because the RPI index history the OBR doesn't publish runs out. Company profits
are a residual of nominal GDP. The other 10 headline variables (exports,
imports, CPI, earnings and others) are held at the OBR's value.

## 13. Shocks against the OBR's multipliers

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

## 15. Corporation tax and capital spending

The investment closure freezes MSGVA, PIF and PIRHH; without the guard, a
zero-shock baseline runs business investment from £86bn to £522bn by 2027Q4.

- Corporation tax +5pp: nothing in quarters 1–2, then −£78m at quarter 4 and
  −£384m at quarter 12 (0.05% of GDP), 40% of a plateau of about £0.96bn a
  quarter. The OBR multiplier table the repo encodes has no corporation-tax
  row.
- Government investment +£3bn a quarter: +£3,075m / +£2,901m / +£2,932m at
  quarters 1 / 4 / 12. Under the default closure IF has no live equation, so
  the channel is dead and `run_reform` warns.

## 16. Bank Rate

+1pp for four quarters, peak at quarter 4: −0.057% of GDP in the default run
(mortgage rate held, a lower bound), −0.149% with `monetary_conditioning=True`
(mortgage rate moved at the 0.9 pass-through in the OBR's l.623). The Bank of
England's range for the same experiment is −0.2% to −0.35% after about a year
(Quarterly Bulletin 1999 Q2). About −0.16% is the ceiling even with mortgage
and deposit rates both moved. CPI and unemployment don't respond, by design.

Only consumption and household interest respond. Investment, sterling, house prices and gilts have no interest-rate equation in the listing.

## 17. Known limits

- Bank Rate: about a quarter of the BoE range unconditioned, about half with
  the mortgage rate moved.
- Unemployment drifts to 1.05% against 4.17% by 2031Q1: l.163 and l.175 are one
  identity, so nothing holds participation on the EFO path. Anchoring PART16 is
  an open decision.
- Spending multiplier: 1.01 on impact, 1.05 by quarter 12, against 0.6.
  Borrowing doesn't move, because the nominal spending identity is commented
  out. A nominal-consistent spending shock is an open decision.
- VAT: the pass-through overlay is labelled judgement, not the shipped listing.
- Household taxes (#71): their ONS components aren't seasonally adjusted while
  the aggregate is, which put a −10.6% / −12.5% first-quarter dip into
  household income. Holding them on their data path took the free-running GDP
  error from 4.25% to 4.05% and household income from 4.30% to 3.08%. That is
  an artefact removed, not better fit. Seasonally adjusting the components is
  the follow-up.
- Every result is a point estimate.

## 18. The macro platform

Not yet launched. Seven public models (`site_contract.py`'s list), each with
its own repo. Results from different model classes are complementary, not
comparable, and the scoring tool won't average them. FRB/US and HANK refuse
reform scoring on purpose: no mapping from a PolicyEngine reform exists, and
inventing one would give plausible-looking wrong numbers.

DEFINE-UK is on the table as one of the seven; its results are scenario deltas from a partial replication, run locally. Don't quote a multiplier for it: which one to headline is open.

## 19. The platform, live

- Click the frame, then use the buttons: Home, Models, Compare, OBR model,
  OBR validation, Forecasts. Expand fills the screen; New tab opens the site.
- Say it's in development and not launched; numbers on it follow the pinned
  model runs shown on the earlier slides.
- If the frame is blank (offline, or the site's frame headers not yet live),
  use New tab.

## 20. A scored forecast record

Rounds are committed to git before the outturn exists and are append-only.
Nine forecasts of five outturns scored (5 live, 4 retroactive); 4 of 5 live
forecasts inside the 68% band; average miss 0.34pp against 0.47pp for no
change; bias −0.33pp, low on 8 of 9. All from the BoE SVAR and its
unemployment satellite. The page itself says: too few to show skill. The SVAR
has no forecast skill against a drifting random walk in its own evaluation.

## 21. Use it from Claude

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

## 22. From a microsimulation reform to GDP

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

## 23. Demo

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

## 24. Where we could work together

Options to discuss, not commitments. Each maps to something open in the repo:
the closure choice and a spending shock that moves borrowing; the investment
closure and DEFINE-UK; macro paths back into household results; the published
listing's open problems (G6, G7, N5); anchoring participation; joint write-ups.

## 25. Questions for NEF

Listen more than talk here.

## 26. Proposed next steps

Proposals for NEF to react to; agree owners and dates in the room.

## 27. Thank you
