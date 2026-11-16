# From business shocks to household incomes, 19 November 2026

27 slides at `/slides/bist-2026`: PolicyEngine's seminar
for the Modelling Unit of the Department for Business, Innovation, Science
and Trade (BIST). Slides 1 to 19 are the talk; 20 to 27 are an appendix.

The talk follows the meeting's agenda. The Modelling Unit introduces its work
and models first, without slides of ours; the deck then has three parts, each
named in the label above its slides' titles, and a short close.

Each slide carries one message, with icons, short labels and status tags.
What the presenter says, including every caveat and figure that is not on a
slide, is in [NOTES.md](NOTES.md).

1. Title
2. In brief

PolicyEngine: who and what

3. Who we are
4. PolicyEngine UK computes incomes, not spending
5. How a reform or a shock is run
6. How the rules are encoded
7. Microcosm UK 2024–25: how the household file is built
8. Calibration: weights fitted to official statistics

Overlap 1: macro and micro

9. The Economic Prosperity Deal: from macro impacts to households
10. Disaggregation: how sector results reach people
11. The tariff bridge: steps a trade model could replace
12. Links to macroeconomic models
13. A proposed interface: tables in, tables out

Overlap 2: business modelling

14. Business policy beyond tax: from firm costs to households
15. What we have on the business side
16. Where an agent-based model would link

Working together

17. Two candidate pilots
18. Questions for discussion
19. Thank you

Appendix

20. Appendix
21. What the UK model covers, including business taxes
22. Microcosm UK data: release gates, certification and firm support
23. Who bears the trade shocks?
24. Who bears the AI shock?
25. Assignment variability: repeated random draws
26. Open code, restricted microdata, synthetic data
27. Use, evaluation and engagement

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
- **Order.** Three parts. The first is PolicyEngine itself: the
  organisation, what the model computes (incomes after taxes and benefits;
  spending is an input), how a run works, the rules and the Microcosm data.
  The second is macro modelling with microsimulation: the Economic Prosperity
  Deal from macro impacts to household impacts, the disaggregation mechanism,
  the tariff bridge, links to macroeconomic models and a proposed interface.
  The third is business modelling: business policy beyond tax, what we hold
  on firms, and where an agent-based model would link. The talk ends with two
  candidate pilots and questions. Model coverage, release gates, the trade
  study's four events, the AI shock, assignment variability, data access and
  use, evaluation and engagement are in the appendix.
- **Status.** Each piece carries its status as a tag: the firm VAT model is a working
  paper, Microcosm's firm support is experimental, OG-UK is an early
  prototype, and no link to a trade, macroeconomic or agent-based model is
  built.
- **Sources by slide.**
  - Who we are: "a nonprofit building free, open-source tools" is the
    wording of [policyengine.org/uk/donate](https://www.policyengine.org/uk/donate),
    read on 16 November 2026. UK and US models in one package: the
    policyengine.py paper (Ahmadi et al. 2026, JOSS), which gives the
    package's country coverage as the US and UK; the slide claims no other
    country. Licences: the repositories' LICENSE files. The four items of
    use, evaluation and engagement and the funder are those of the appendix
    slide, with the same public pages (the No 10 article, HM Treasury's
    transparency record, the OBR's annual report, Hansard and the supporters
    page) and the same caveats.
  - The Economic Prosperity Deal, from macro impacts to households: no new
    fact. The deal's terms are from the general terms on GOV.UK; the deal
    schedule without published results is the trade study's
    (uk-trade-shock-study `06c8bbc`); "static, no general equilibrium" is
    the model-run slide's; the feedback arrow is the macro–micro loop of the
    macroeconomic models slide. The path and the feedback are tagged not
    built, and the slide is tagged "Not yet modelled".
  - Disaggregation: the mechanism inside the PolicyEngine step. Earnings and
    jobs by two-digit SIC division and the repeated random draws are the
    trade study's assignment (`tariff_pipeline/exposure.py`); spending is
    held by COICOP division (policyengine-uk `d3db7ac`). A map from a trade
    model's labour types to occupations is part of the proposed interface.
    The mapping column is tagged not built. Output breakdowns: the output
    classes in policyengine.py `810a59e`, `src/policyengine/outputs/`.
  - Trade-model outputs: the standard GTAP model has one wage per labour
    type, not per sector, and its standard closure fixes aggregate
    employment, so the deck asks for wages by labour type and, in the
    questions and the notes, for the labour-market closure to be stated.
  - Tariff bridge: uk-trade-shock-study `06c8bbc`,
    `results/e3_constants.json` (cushion 43.7% for wage cuts; 35.4% for job
    losses, standard deviation 5.1 points across 100 draws).
  - Economic Prosperity Deal (its own slide, tariff bridge and pilots): the general terms
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
  - Data access (appendix): licences and READMEs of policyengine-uk, policyengine.py,
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
      policyengine.py 6.19.0 pins,
      `microcosm-uk-2024-25-national-20261107T020434Z-eeb6093e`), from two
      places:
      - the public
        [calibration dashboard](https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk),
        read on 15 November 2026 (its default UK release that day; the page
        has no address for a single release): 1,514 targets, which the
        dashboard browses as 44 statistics, 98.7% within 10%, 78.2 thousand
        household records, and targets by publisher;
      - the certified build's diagnostics: an effective sample size of about
        7.2 thousand (9.2% of records); 38 target families in the loss, each
        1/38 of the total weight; saved weights from step 1,437 of 1,500;
        targets at model year 2025; 85 checks run, all passed; and the
        build's commit, `dc00d158f`, which declares 54 source stages. The
        10,000 copies of survey households that take SPI incomes, their
        weights before calibration, and the take-up rule (reported claims
        kept, the others drawn) are from the diagnostics and agree with the
        code.

      The deck does not quote the solver's final objective, which is not
      comparable across releases. The fit is in-sample; the dashboard has no
      out-of-sample check for the UK, and the calibration slide carries an
      "In-sample fit" tag.
    - *The code* at microcosm `429d7a0` (15 November): 56 source stages
      today, against the certified build's 54 (`uk/source_stages.json`;
      every survey microdata file in it is pinned by SHA-256 and checked when
      the build runs, the public reference tables are not), the SPI copies
      (`uk_runtime/spi_support.py`, `spi_band_donors.py`,
      `spi_employment_shell.py`), the imputation method
      (`microcosm-fit/README.md`), the loss (`microcosm-calibrate`,
      `relative_error_loss`), the UK national solve settings
      (`uk_runtime/national_doctrine.py`), 94 declared checks, of which 92
      can block a release and 2 only report (`uk/gates.json`),
      and the firm support (README, `uk_runtime/firm_generation.py`,
      `uk/uk_firms_targets.json`, `docs/firm-support-plan.md`; the data frame
      supports firm tables and job links, and the UK build does not use
      them). The target
      file at that commit lists 1,710 national rows, more than the certified
      build's 1,514, so the deck quotes the build.
    - "Certified": policyengine.py `810a59e`, `data/bundle/manifest.json`,
      `docs/bundles.md` and `docs/engineering/skills/data-certification.md`.
  - Assignment variability (appendix): uk-ai-study `5d75106`,
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
BICS, and the deck tags both "Not yet modelled".

Earlier PolicyEngine decks describe Microcosm at older commits or for the
US. Where they differ from the code read for this deck, the deck follows the
code: the target counts are the certified build's, the national file uses no
L0 record selection (`l0_lambda` is 0 in the national settings), and no
record count is taken from the 2023 build.

## Review

Earlier versions had four rounds of Fable 5.2 review: facts against the
pinned code, and usefulness, neutrality, privacy and layout. The version
before this one was a redesign for legibility: far less text on each slide,
an icon on every card, step and figure, and status as tags; the text taken
off the slides is in `NOTES.md`. This version reorders the talk into three
parts and adds two slides, "Who we are" and the Economic Prosperity Deal
from macro impacts to households; the disaggregation slide now shows the
assignment mechanism. The AI shock, assignment variability and data access
moved to the appendix. No figure changed. It has 19 talk slides plus an
eight-slide appendix. Exports at 1920×1080 and 1440×810 were inspected page
by page.

## Privacy

The deck is public: it has no password and appears on the home page.
