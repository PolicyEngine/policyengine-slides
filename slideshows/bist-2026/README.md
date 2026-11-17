# From business shocks to household incomes, 19 November 2026

22 slides at `/slides/bist-2026`: PolicyEngine's seminar for the Modelling
Unit of the Department for Business, Innovation, Science and Trade (BIST).
There is no appendix: backup material for questions is at the end of
[NOTES.md](NOTES.md).

The Modelling Unit introduces its work and models first, without slides of
ours. The deck then has seven parts. Each slide names its part in the label
above its title, and a row of seven marks beside the label shows where the
talk is.

Each slide carries one message, with icons, short labels and status tags.
What the presenter says, including every caveat and figure that is not on a
slide, is in [NOTES.md](NOTES.md).

1 · Introduction

1. From business shocks to household incomes (title)
2. In brief
3. Who we are

2 · What PolicyEngine is

4. PolicyEngine UK computes household incomes after taxes and benefits
   (with how a run works)
5. How the rules are encoded
6. Microcosm UK 2024–25: how the household file is built
7. Calibration: weights fitted to official statistics
8. What the weights are fitted to: the live calibration dashboard (live page)

3 · What we have already

9. What the UK model covers, and what we can share

4 · Projects we have done

10. The Autumn Budget 2026 dashboard (live page)
11. Who bears the cost of an AI scenario? (live page)
12. How we built synthetic UK firms
13. Who bears the cost of trade changes? Four UK episodes, 2021–26
14. Who bears the cost of trade changes: the 2025 US tariffs (the second
    slide of the trade study)

5 · What we could explore further

15. The UK–US Economic Prosperity Deal: from model results to households
16. Links to macroeconomic models

6 · Ideas that fit the unit

17. Business policy: from firm costs to households
18. Where an agent-based model could link
19. One way to link: tables in, tables out

7 · How we could collaborate

20. Two candidate pilots
21. Questions for discussion
22. Thank you

- `config.ts` controls the slide order, the build steps (live only) and the
  meeting metadata.
- `content.ts` holds the figures, short labels, icons, status tags and
  sources, with a comment on where each figure and claim comes from. The
  seven parts are its `parts` list.
- `slides/index.tsx` contains the slides and the deck's building blocks (part
  label and tracker, icon badge, status tag, card, flow, snake flow, stat,
  logo cell, figure); icons are bare Tabler icons in the teal token colour,
  with no box behind them, in three sizes;
  `slides/deck.module.css` styles them from one scale unit, so the 1920×1080
  and 1440×810 layouts match.
- `slides/Reveal.tsx` holds the build steps: `Reveal` shows its content from
  a given step and keeps its place before that (a box shows as an empty
  dashed outline), so nothing on a slide moves; `CountUp` counts a figure up
  when its step arrives.
- `slides/Embed.tsx` frames a live page with a small toolbar (its address,
  view buttons, "Expand" and "New tab"), after the Autumn Budget 2026 deck's
  `DashboardEmbed`.
- `NOTES.md` holds the presenter notes, slide by slide.

## Builds and motion

Presented live, slides marked with builds reveal their content on clicks
(`builds` in `config.ts`): flows build one step at a time, the calibration
tiles and the tariff cushion figures appear on cue and count up, and the
ideas slides show one idea at a time. A step that has not been reached keeps
its place (a box shows as an empty dashed outline), so nothing moves. Rows
of cards rise in one after another when a slide comes on, and arrows draw in
from the left. Motion lasts about 0.3 seconds and is off under
`prefers-reduced-motion`.

Exports show each slide once, complete. Every slide with builds has
`exportBuilds: 1`, so a PDF has exactly one page per slide (22 pages) and
the deck index counts 22 slides; `countSlides: true` makes the live counter
number slides too, not build steps; in an export `Reveal` shows every step, so
that page is the fully built slide, not its first step. No figure depends on
an animation: the count-up always ends on the exact text, a timer restores
it if the frames do not run, and it does not run in an export.

## Live pages and images

- Three slides embed a live page in a frame with a small toolbar (its
  address, "Expand" and "New tab"): slide 8 the
  [calibration dashboard, pinned to the certified build](https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk&release=microcosm-uk-2024-25-national/uk-frs-calibration-attempt-20261107T020434Z-eeb6093e),
  slide 10 the
  [Autumn Budget 2026 dashboard](https://policyengine.org/uk/budgets/autumn-2026)
  and slide 11 the PolicyEngine post
  ["Who bears the AI shock? Distributional and fiscal incidence in the UK"](https://www.policyengine.org/uk/research/uk-ai-study)
  (16 November 2026). All need an internet connection. An export captures
  them as they are at that moment. The calibration dashboard and the post
  are shown at 80% and 70% of their size, so more of each fits.
- The calibration dashboard's page names the Hugging Face dataset repository
  that holds the build and links to it. That repository is private; the
  deck's own files do not name it.
- The AI slide shows what the study does beside the live post, and no
  result of its own; the post's figures are in the notes (see "Data" below).
- One image in `public/images/bist-2026/`, copied unchanged from its
  paper's repository; keep the file as copied:
  - `firm-vat-model-against-hmrc.png`:
    `paper/figures/vat_threshold_revenue_impact.png`,
    [firm-microsim-paper](https://github.com/PolicyEngine/firm-microsim-paper)
    at `e6d5dd6` (SHA-256 `5e37838f…e91e8c3`), the paper's comparison of its
    estimates with HMRC's published costing of the April 2024 threshold
    rise; slide 12.
  Two earlier images are deleted: the firm paper's threshold sweep (no slide
  showed it) and the trade paper's incidence figure (see "The review of 16
  November" below).
- In a PDF export the calibration dashboard slide (8) shows a static summary
  in place of the live page: the 1,514 targets by publisher and statistic,
  with how many are within 10% of the official figure
  (`calibrationTargets` in `content.ts`; `Only` in `slides/Reveal.tsx`
  switches between the two). Live, the slide keeps the dashboard.

## Sources

Every figure is pinned to a commit of its study (the trade study, the AI
study, the firm VAT paper), and every claim about the model or the data to a
commit of policyengine-uk, policyengine.py or microcosm. Each has a comment
in `content.ts` naming its source, read on 15 November 2026. Where a point below is not on a slide, it is in the presenter
notes for that slide.

- **Data.** policyengine.py bundle 6.19.0 (released 13 November 2026, data
  build of 7 November) certifies Microcosm UK 2024–25, and the deck describes
  that file. The AI study runs on Microcosm UK for the 2027–28 tax year:
  its figures are those of the published post,
  ["Who bears the AI shock?"](https://www.policyengine.org/uk/research/uk-ai-study)
  (16 November 2026; PolicyEngine/policyengine-app-v2,
  `app/src/data/posts/articles/uk-ai-study.md`), read on 16 November 2026,
  with the paper on
  [SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7174479). The
  slide is tagged "Microcosm UK, 2027–28" and "Illustrative scenario" and
  carries no figure. In the notes: the Exchequer cost of £7.3bn (mean of 50
  draws, standard deviation £1.9bn), absolute poverty before housing costs
  up 2.40 points, poverty after housing costs (+2.57 points), the Gini (+1.76
  points), the three channels (displacement £42.5bn; survivor wages £17.5bn
  and capital income £17.9bn of net receipts) and the incidence scenarios
  (£1.9bn uniform, £7.3bn exposure-proportional, £27.7bn top-loaded; poverty
  before housing costs up 2.40 to 2.65 points). These supersede the figures
  of uk-ai-study `5d75106` (a 2026 scenario on the survey-weighted FRS
  2024–25), which earlier versions quoted and which are no longer in the
  deck. The trade study's slides follow
  its rerun on Microcosm UK (uk-trade-shock-study pull request #46, head
  `778557c`, open and not merged): every microsimulation runs on
  policyengine[uk] 6.20.0 with the certified Microcosm UK 2024–25 build, the
  tariff stage under 2026–27 rules, and both slides carry a "Microcosm UK"
  tag. The earlier "about 60%" energy offset is dropped; the rerun's
  different measure is in the notes.
- **Order.** Seven parts: an introduction (the title, the talk in brief,
  who we are); what PolicyEngine is (what the model computes and how a
  run works, the rules, the Microcosm data, calibration and the live
  dashboard); what we have already (model coverage, including business
  taxes, and what we can share); projects we have done (the Autumn Budget 2026
  dashboard, the AI scenario post, the synthetic firms of the firm-level VAT
  working paper, the trade working paper and its tariff episode); what we
  could explore further (the Economic Prosperity Deal from macro impacts to
  household impacts, and links to macroeconomic models); ideas that fit the
  unit (business policy, agent-based models and one way to link models by
  exchanging tables); and how we could collaborate (two candidate pilots and
  questions). Release gates and certification, assignment variability, data
  access in full and use, evaluation and engagement are under "Backup
  material" in the notes; the deck has no appendix.
- **Status.** Each piece carries its status as a tag: the firm VAT model is a working
  paper, Microcosm's firm support is experimental, OG-UK is an early
  prototype, and no link to a trade, macroeconomic or agent-based model is
  built.
- **Sources by slide.** The slides carry no "Sources" row: the links for
  each slide are the "Sources" bullet at the end of its notes in `NOTES.md`,
  and the source objects stay in `content.ts`. What each source supports:
  - Who we are: "a nonprofit building free, open-source tools" is the
    wording of [policyengine.org/uk/donate](https://www.policyengine.org/uk/donate),
    read on 16 November 2026. UK and US models in one package: the
    policyengine.py paper (Ahmadi et al. 2026, JOSS), which gives the
    package's country coverage as the US and UK; the slide claims no other
    country. Licences: the repositories' LICENSE files. Funding, in the
    nonprofit line: Nuffield Foundation grants made in 2024 and 2026 (the
    supporters page). Government: the No 10 article (10ds-microsim; that it
    is supplementary, experimental analysis is said in the notes). The slide says only that HM
    Treasury, the OBR and Parliament "mention" PolicyEngine: HM Treasury's
    transparency record (a 2024 pilot evaluation; HMT does not currently use
    the model), the OBR's annual report (engagement in 2025–26) and Hansard
    (a House of Lords debate citing House of Commons Library research). The
    caveats are in the notes. Government logos:
    10 Downing Street and the House of Lords (standing for Parliament; the
    Hansard source is a Lords debate) were already in `public/logos/orgs/`.
    The Office for Budget Responsibility wordmark was copied from
    policyengine-app-v2 (`ede5cb3`,
    `app/public/assets/posts/obr-november-2025-projections/obr-logo.png`) to
    `public/logos/orgs/office-for-budget-responsibility.png`; the file is
    white on transparent, so the slide shows it in dark ink. Neither
    repository holds an HM Treasury logo, so its name is set as plain text.
    Think tanks and
    researchers: the logo files in `public/logos/orgs/`, as on the Good
    Growth Foundation deck's community slide. The
    [Centre for Policy Studies](https://cps.org.uk/research/family-friendly-taxation/)
    (July 2023) and the
    [New Economics Foundation](https://neweconomics.org/2026/07/insecure-low-quality-work-a-major-driver-of-uks-neets-and-inactivity-crisis)
    (July 2026) link to their publications; NIESR links to Mosley and
    Cornforth (2023), which combined PolicyEngine UK with NiGEM; the Good
    Growth Foundation and WPI Economics are shown without a link, as in that
    deck. The Good Growth Foundation logo file is white on transparent, so
    the slide shows it in dark ink.
  - The Economic Prosperity Deal, from macro impacts to households: no new
    fact. The deal's terms are from the general terms on GOV.UK; the deal
    schedule without published results is the trade study's
    (uk-trade-shock-study `06c8bbc`); "static, no general equilibrium" is
    the model-run slide's; the feedback arrow is the macro–micro loop of the
    macroeconomic models slide. The path and the feedback are tagged not
    built, and the slide is tagged "Not yet modelled".
  - Linking (slide 19), the mechanism: which records receive each result. Earnings and
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
  - The trade study's US-tariff episode (slide 14): uk-trade-shock-study pull request #46, head `778557c`
    (open, not merged), `results/e3_constants.json`: gross change £1,007.1m
    a year; cushion 41.8% for wage cuts and 32.1% for job losses, standard
    deviation 3.3 points across 20 draws; run on Microcosm UK at 2026 with
    policyengine[uk] 6.20.0 (policyengine-uk 2.174.1). These replace the
    figures of `06c8bbc` (43.7%, 35.4%, 5.1 points across 100 draws).
  - Economic Prosperity Deal (its own slide, the US-tariff episode and pilots): the general terms
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
  - Data access (the row on slide 9, and the notes): licences and READMEs of policyengine-uk, policyengine.py,
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
        [calibration dashboard, pinned to that build](https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk&release=microcosm-uk-2024-25-national/uk-frs-calibration-attempt-20261107T020434Z-eeb6093e)
        with its `release` parameter, read on 15 and 16 November 2026: 1,514
        targets, which the dashboard browses as 44 statistics, 98.7% within
        10%, 78.2 thousand household records, targets by publisher, and the
        targets by publisher on slide 7 and by statistic in its notes (from the page's own
        data for that release; they add up to HMRC 776, ONS 365, DWP 213,
        MHCLG 82 and 78 from ten other publishers). The pinned link is the
        calibration source on the slides, so it keeps showing the certified
        build after newer releases become the dashboard's default;
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
  - Assignment variability (notes only): the AI post (50 draws: mean £7.3bn,
    SD £1.9bn); uk-trade-shock-study `06c8bbc`, `runner.py` and
    `paper/sections/results.tex` (20 assignment draws at PR #46, `778557c`).
  - Trade events (slide 13): uk-trade-shock-study pull request #46,
    `778557c`, `paper/sections/episodes.tex` (each episode's years and
    whether it is price-led or earnings-led). The food price estimate is
    Bakker et al. (2023), as the study cites it.
  - Calibration targets summary (slide 8 in a PDF export): the dashboard's
    data route for the pinned build, read 16 November 2026; the counts by
    statistic sum to each publisher's total and to 1,514, and those within
    10% to 1,495 (98.7%).
  - Local areas: the bundle lists a local-area file for constituencies and
    local authorities, and the dashboard labels that release experimental.
    Each slide that offers constituency, local-authority or local-area
    results as a model output carries the label.
  - Projects we have done. The Autumn Budget 2026 dashboard: its address
    and view links, and what it models, follow the Autumn Budget 2026 deck
    (`slideshows/autumn-budget-2026/content.ts`). The AI post: read on 16
    November 2026 (the channels are displacement, survivor wages and capital
    income; five incidence scenarios). Its title is quoted as a citation; the slide's own title
    says "scenario". Synthetic firms (firm-microsim-paper `e6d5dd6`): the
    method follows `paper/Sections/data.tex` (about 2.94 million records per
    vintage); the accuracy figures are quoted exactly from
    `results/calibration_accuracy.txt`, vintage 2023–24 at the £85,000
    threshold (HMRC turnover bands 100.0%, ONS population 99.7%, employment
    bands 99.8%, sector distribution 93.3%, VAT liability by band 96.9%;
    98.0% overall across the five calibrated dimensions; 2,717,539 weighted
    firms, 2,178,281 registered traders); the paper headlines 98.0% for
    2023–24 and 98.1% for 2024–25. The report's two informational
    diagnostics, which are not calibration targets (VAT liability by sector
    40.4%, below the threshold 31.2%), are in the notes. The cut
    slide on costing threshold changes used the paper's figure and caption
    (`paper/Sections/static.tex`); the related post on
    [VAT thresholds](https://www.policyengine.org/uk/research/uk-vat-thresholds)
    is a source on the synthetic-firms slide.
    Trade changes: uk-trade-shock-study `06c8bbc`, the four episodes and the
    energy offset already in the deck.
  - Business taxes (the "Taxes on business" card of slide 9, and the notes
    of the cut business-side slide): policyengine-uk `d3db7ac` (business
    rates and corporate stamp duty allocated to shareholders; the employer
    NI incidence parameters, all to pay by default). The model has no firm
    entity. The earlier card on linking firms to households, which is not
    built, is in the notes.
  - Linking (slide 19): one way to link, for discussion. What
    runs today is the trade study's code, which applies earnings changes by
    two-digit SIC division to survey employees (uk-trade-shock-study
    `06c8bbc`, `runner.py`), and the outputs on the right are existing
    policyengine.py outputs. Its keys are what the model
    holds (policyengine-uk `d3db7ac`: `sic_industry_division`, twelve
    regions, spending by COICOP division); the nearest existing code is the
    trade study's `apply_shocks`. Mean and SD across draws are in the
    studies' code, not yet in policyengine.py; they and the full field list
    are in the notes. The line under each result names the kinds of model
    that report it, following "Trade-model outputs" above: jobs by sector
    from a CGE model, wages by labour type, not by sector.

PolicyEngine has published no results for the Economic Prosperity Deal or
BICS, and the deck tags both "Not yet modelled".

Earlier PolicyEngine decks describe Microcosm at older commits or for the
US. Where they differ from the code read for this deck, the deck follows the
code: the target counts are the certified build's, the national file uses no
L0 record selection (`l0_lambda` is 0 in the national settings), and no
record count is taken from the 2023 build.

## Review

Earlier versions had four rounds of Fable 5.2 review: facts against the
pinned code, and usefulness, neutrality, privacy and layout. Later passes
cut the text on each slide (the text taken off is in `NOTES.md`), removed
tinted bands, worded titles positively, replaced "shock" with "scenario" or
"change" in slide text and made the ideas slides non-committal ("could",
"for discussion", "a starting point").

The 27-slide version reordered the talk into seven parts and added slides: the
calibration targets and the live calibration dashboard, the Autumn Budget
2026 dashboard, the AI scenario post, the synthetic-firm method and the VAT
threshold costing, the trade working paper (with its figure) and model
coverage (with a row on what we can share). The US-tariff episode (then
called the tariff bridge) is now among the projects we have done. The appendix is gone: its slides' content is on talk
slides or under "Backup material" in the notes. "Who we are" is three facts
over two rows of equal logo cells; the Microcosm build is a snake flow in
two rows; the business-side slide kept to what exists today. Icons are
bare, in the teal ink. Build steps and short motion run when presenting;
exports show each slide once, complete. The calibration slide's bar chart
of targets by publisher moved to the targets slide; the "In brief" slide's
three cards became six, one per part. The AI study's figures were replaced
with those of the published post (Microcosm UK, 2027–28); no other figure
changed. Project slides show what was done and how; results stay where they
show the method's quality (the tariff cushion, the VAT accuracy and the
comparison with HMRC), and the AI figures and the energy offset are in the
notes. Exports at 1920×1080 and 1440×810 were inspected page by page.

## The 22-slide version

An independent review cut the deck from 27 slides to 22, for about 30
minutes, and kept the seven parts in the same order. Nothing was dropped
from the notes: each merged or cut slide's content is in `NOTES.md` under the
slide that replaced it.

- "PolicyEngine UK computes household incomes" and "How a reform or a
  scenario is run" are one slide (4): the rules, the households, run twice,
  the difference.
- "What the weights are fitted to" (a map of targets by publisher and
  statistic) is cut: the live dashboard (8) shows the same map. The
  calibration slide (7) carries the targets by publisher as one stacked bar.
- "What we have on the business side" is folded into the coverage slide (9),
  whose "Taxes on business" card it repeated; the card now says that
  corporation tax and firms as entities are outside the model.
- "Firm-level VAT microsimulation: costing threshold changes" is cut: its
  figure was a result. The synthetic-firms slide (12) keeps the method, the
  calibration accuracy and the comparison with HMRC.
- "Disaggregation: how sector results reach people" and "One way to link:
  tables in, tables out" are one slide (19), in part 6: each kind of result,
  the kinds of model that report it, the key it would be mapped into, the
  records that receive it once mapped and what PolicyEngine already reports. The
  one-wage trade model, the keys and the possible additions of the earlier
  slide are in the notes.
- No slide has a "Sources" row any more; each slide's links are in its notes,
  and there is no closing sources slide, to keep to the time. The freed
  space goes to the content.
- The tariff and trade slides follow the trade study's rerun on Microcosm
  UK (pull request #46, `778557c`, open): 41.8% and 32.1% (SD 3.3 points
  across 20 draws) replace 43.7% and 35.4%, and both slides are tagged
  "Microcosm UK".
- Doability: every "could pass" box was checked against the trade study's
  code and policyengine-uk, and the notes for slides 15, 17, 18, 19 and 20
  record it. Inputs carry "Can take today", "Needs a sector mapping" or
  "Small extension"; profits by sector, sector output and "by region" came
  off the slides.
- Smaller changes: the "In brief" cards follow the new contents; source
  labels say "trade study" and "AI study"; the forecast-scenario card has one
  tag ("Mechanism built; not yet run"), so the three card titles line up; the
  Economic Prosperity Deal slide carries a tag only on the two pieces that
  are not built (now "Not built yet" on the sector mapping and "Idea to
  explore" on the feedback arrow); the agent-based model slide lists outputs in
  short form. No figure changed.

## The review of 16 November

A further independent review checked every figure against its source again
(the counts on slides 5, 7 and 12 were recounted, and the AI post, the GOV.UK
pages and the dashboard's data re-read) and changed four things. No figure
changed.

- The US-tariff episode (formerly called the tariff bridge) is part of the
  trade study, and the deck now says so.
  Slide 13 shows the study's four episodes as cards (years, and whether
  prices or earnings carry the change), with the US tariffs card marked
  "Next slide". Slide 14 is titled "Who bears the cost of trade changes: the
  2025 US tariffs", with the subtitle "Inside the trade study", and carries
  the same "Working paper" and "Microcosm UK" tags as slide 13.
- The trade paper's incidence figure is off slide 13 and its file is
  deleted. It was a result chart, and the file is byte-identical at `06c8bbc`
  and at pull request #46, so it was not regenerated on Microcosm UK and did
  not match the slide's "Microcosm UK" tag. (The pull request regenerates
  `fig_decomp`, `fig_episode_map`, `fig_grid` and `fig_paths` only.)
- Slide 14's tag "Deal not yet modelled" is now "No published results for
  the UK–US deal": the study's code has a schedule for the Economic Prosperity
  Deal and the repository holds a two-draw test file for it
  (`results/epd_displacement.json`), but the paper reports no deal results.
- In a PDF export, slide 8 shows a static summary of the calibration targets
  in place of the live dashboard, which a capture caught before its map had
  drawn. The unused image `firm-vat-revenue-impact-2025-26.png` is deleted.

`bun run export` completes for this deck; nothing in the deck holds the
export open. Against a dev server at `EXPORT_WAIT_MS=12000` it took 5
minutes on a quiet machine and 11 to 33 minutes on a busy one: after a
source change the first captures wait for the dev server to recompile, hit
the script's 132-second watchdog and are retried alone, which succeeds. Run
it in the background or with a long timeout; a command cut off at two or
ten minutes looks like a stall at "22 steps". A dev server draws Next.js's round development badge in the
bottom-left corner of every capture, over the footer logo; an export
without `--url` captures a production build, which should have no badge
(not run in this review, because a dev server was in use).

## The consistency check of 17 November

The deck and the pre-seminar briefing were checked against each other for
figures, names, status words and what each input needs. No figure changed.
On slide 19 the prices row is now tagged "Needs a sector mapping", as on
slide 18 and in the briefing, in place of "Can take today"; the deal is
"the UK–US Economic Prosperity Deal" throughout the notes.

## Privacy

The deck is public: it has no password and appears on the home page.
