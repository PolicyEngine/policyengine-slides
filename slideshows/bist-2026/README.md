# From business shocks to household incomes, 19 November 2026

25 slides at `/slides/bist-2026`: PolicyEngine's seminar
for the Modelling Unit of the Department for Business, Innovation, Science
and Trade (BIST). Slides 1 to 20 are the talk (30 to 35 minutes); 21 to 25
are an appendix.

Each slide carries one message, with icons, short labels and status tags.
What the presenter says, including every caveat and figure that is not on a
slide, is in [NOTES.md](NOTES.md).

1. Title
2. In brief
3. PolicyEngine UK computes incomes, not spending
4. How a reform or a shock is run
5. Disaggregating tariff impacts
6. The tariff bridge: steps a trade model could replace
7. Assignment variability: repeated random draws
8. How the rules are encoded
9. Microcosm UK 2024–25: how the household file is built
10. Calibration: weights fitted to official statistics
11. Business policy beyond tax: from firm costs to households
12. What we have on the business side
13. Who bears the AI shock?
14. Where an agent-based model would link
15. Links to macroeconomic models
16. A proposed interface: tables in, tables out
17. Open code, restricted microdata, synthetic data
18. Two candidate pilots
19. Questions for discussion
20. Thank you
21. Appendix
22. What the UK model covers, including business taxes
23. Gates, certification and firm support
24. Who bears the trade shocks?
25. Use, evaluation and engagement

- `config.ts` controls the slide order and meeting metadata.
- `content.ts` holds the figures, short labels, icons, status tags and
  sources, with a comment on where each figure and claim comes from.
- `slides/index.tsx` contains the slides and the deck's building blocks (icon
  badge, status tag, card, flow, stat); `slides/deck.module.css` styles them
  from one scale unit, so the 1920×1080 and 1440×810 layouts match.
- `NOTES.md` holds the presenter notes, slide by slide.

## Sources

Every figure is pinned to a commit of its study (the trade study, the AI
study, the firm VAT paper), and every claim about the model or the data to a
commit of policyengine-uk, policyengine.py or microcosm. Each has a comment
in `content.ts` naming its source, read on 15 November 2026. Where a point below is not on a slide, it is in the presenter
notes for that slide.

- **Data.** policyengine.py bundle 6.19.0 (released 13 November 2026, data
  build of 7 November) certifies Microcosm UK 2024–25, and the deck describes
  that file. The shock studies were run on earlier datasets, and each slide
  that quotes them carries a tag saying so: the AI study on the survey-weighted FRS 2024–25
  (uk-ai-study `5d75106`, `paper/sections/methodology.tex`); the trade
  study's price episodes on the enhanced FRS 2023–24 and its tariff stage on
  the survey-weighted FRS 2024–25 (uk-trade-shock-study `06c8bbc`,
  `paper/sections/results.tex`). Neither is Microcosm UK.
- **Order.** The talk opens with what the model computes (incomes after
  taxes and benefits; spending is an input) and how a run works, takes
  tariff disaggregation first, then the rules and the Microcosm data,
  business policy, AI, model links and data, and ends with two candidate
  pilots. Model coverage, release gates, the trade study's four events and
  use, evaluation and engagement are in the appendix.
- **Status.** Each piece carries its status as a tag: the firm VAT model is a working
  paper, Microcosm's firm support is experimental, OG-UK is an early
  prototype, and no link to a trade, macroeconomic or agent-based model is
  built.
- **Sources by slide.**
  - Output breakdowns (tariff disaggregation): the output classes in
    policyengine.py `810a59e`, `src/policyengine/outputs/`.
  - Trade-model outputs: the standard GTAP model has one wage per labour
    type, not per sector, and its standard closure fixes aggregate
    employment, so the deck asks for wages by labour type and, in the
    questions and the notes, for the labour-market closure to be stated.
  - Tariff bridge: uk-trade-shock-study `06c8bbc`,
    `results/e3_constants.json` (cushion 43.7% for wage cuts; 35.4% for job
    losses, standard deviation 5.1 points across 100 draws).
  - Economic Prosperity Deal (tariff bridge and pilots): the general terms
    on GOV.UK (operative 8 May 2025; a 100,000-vehicle quota at a 10% tariff;
    and, subject to supply-chain conditions, a steel and aluminium quota at
    most-favoured-nation rates).
  - British Industrial Competitiveness Scheme (business policy and pilots):
    the guidance for applicants on GOV.UK (Great Britain only; three
    electricity policy costs; Renewables Obligation and Feed-in Tariff relief
    from April 2027 and Capacity Market relief from October 2027) and the
    final impact assessment of 7 September 2026 (£35 to £40 per MWh).
  - Business-policy path: policyengine-uk `d3db7ac`, the employer NI
    incidence parameters and `consumer_incident_tax_change` /
    `corporate_incident_tax_change`. Both variables are counted as tax
    revenue, so the notes say a non-tax measure needs an extension; the slide
    is tagged not built.
  - Forecast scenario (macroeconomic models): policyengine-uk `d3db7ac`. The
    dataset is projected with the growth rates in
    `parameters/gov/economic_assumptions/yoy_growth.yaml`, and a reform to a
    rate re-projects the data (`tests/test_uprating_inputs_reach_data.py`).
    The file has no employment series, and the notes say so.
  - Dosi, Fagiolo and Roventini (2010) and the GTAP model page are cited as
    public references; neither has been run with PolicyEngine. An
    agent-based model of AI and a GTAP run with technology sectors are
    described, in the notes to the agent-based model slide, as possible inputs
    only.
  - Data access: licences and READMEs of policyengine-uk, policyengine.py,
    microcosm `429d7a0` and firm-microsim-paper `e6d5dd6`.
  - Rules: policyengine-uk `d3db7ac` (version 2.179.0). The snippet is
    abridged from the personal allowance variable (the parameter and the test
    are linked in the sources row and described in the notes); the
    counts (1,086 parameter files, 998 with a reference; 1,504 variables;
    6,779 YAML test cases under `tests/policy`) were counted at that commit,
    which is version 2.179.0; the bundle certifies 2.174.1.
  - A model run: policyengine-uk `d3db7ac`, the growth parameters (OBR
    forecasts to 2031) and the labour supply elasticities (zero by default).
    An optional response on hours of work uses the OBR's elasticities
    (`dynamics/progression.py`); a participation response is in the code but
    switched off (`dynamics/labour_supply.py`, `docs/book/usage/dynamics.md`).
    Two responses run by default: capital gains realisations (elasticity 1)
    and employer NI changes passed to pay. policyengine.py `810a59e`,
    `docs/impact-analysis.md`.
  - Microcosm uses two kinds of number and keeps them apart:
    - *The certified build* (the national build of 7 November 2026 that
      policyengine.py 6.19.0 pins): 1,514 targets in 44 statistics, 98.7%
      within 10%, a final loss of 0.51%, 78.2 thousand household records with
      a non-zero weight, and targets by publisher. All from the public
      [calibration dashboard](https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk),
      read on 15 November 2026 (its default UK release that day; the page has
      no address for a single release). They are in-sample fit; the dashboard
      has no out-of-sample check for the UK, and the calibration slide carries
      an "In-sample fit" tag.
    - *The code* at microcosm `429d7a0` (15 November): 56 source stages
      (`uk/source_stages.json`; every microdata artifact in it is pinned by
      SHA-256, the public reference tables are not), the imputation method
      (`microcosm-fit/README.md`), the loss (`microcosm-calibrate`,
      `relative_error_loss`), the UK national solve settings
      (`uk_runtime/national_doctrine.py`), 94 release gates (`uk/gates.json`)
      and the firm support (README, `uk_runtime/firm_generation.py`,
      `uk/uk_firms_targets.json`, `docs/firm-support-plan.md`). The target
      file at that commit lists 1,710 national rows, more than the certified
      build's 1,514, so the deck quotes the build.
    - "Certified": policyengine.py `810a59e`, `data/bundle/manifest.json`,
      `docs/bundles.md` and `docs/engineering/skills/data-certification.md`.
  - Assignment variability: uk-ai-study `5d75106`,
    `results/robustness/central_monte_carlo.json` (the illustrative central
    scenario, 50 draws: mean £17.69bn,
    SD £1.20bn, 2.5th to 97.5th percentile £15.5bn to £19.8bn; the paper
    gives the mean and SD, the repository the range) and
    `paper/sections/discussion.tex` (one draw of the same scenario: £18.2bn
    on the survey-weighted FRS, £29.5bn on the enhanced FRS);
    uk-trade-shock-study `06c8bbc`, `runner.py` and
    `paper/sections/results.tex` (100 assignment draws).
  - Trade events (appendix): uk-trade-shock-study `06c8bbc`. The food price
    estimate is Bakker et al. (2023), as the study cites it.
  - Local areas: the bundle lists a local-area file for constituencies and
    local authorities, and the dashboard labels that release experimental.
    Each slide that offers constituency, local-authority or local-area
    results as a model output carries the label.
  - Interface: a proposal, labelled not built. Its keys are what the model
    holds (policyengine-uk `d3db7ac`: `sic_industry_division`, twelve
    regions, spending by COICOP division); the nearest existing code is the
    trade study's `apply_shocks`. Mean and SD across draws are in the
    studies' code, not yet in policyengine.py, and the slide lists them as
    proposed. The full field list is in the notes.

PolicyEngine has published no results for the Economic Prosperity Deal or
BICS, and the deck tags both "No results yet".

Earlier PolicyEngine decks describe Microcosm at older commits or for the
US. Where they differ from the code read for this deck, the deck follows the
code: the target counts are the certified build's, the national file uses no
L0 record selection (`l0_lambda` is 0 in the national settings), and no
record count is taken from the 2023 build.

## Review

Earlier versions had four rounds of Fable 5.2 review: facts against the
pinned code, and usefulness, neutrality, privacy and layout. This version is
a redesign for legibility: far less text on each slide, an icon on every
card, step and figure, and status as tags. No figure changed; the text taken
off the slides is in `NOTES.md`. It has 20 talk slides plus a five-slide
appendix. Exports at 1920×1080 and 1440×810 were inspected page by page.

## Privacy

The deck is public: it has no password and appears on the home page.
