# From business shocks to household incomes, 19 November 2026

33 slides at `/slides/bist-2026`: PolicyEngine's seminar for the Modelling
Unit of the Department for Business, Innovation, Science and Trade (BIST).
There is no appendix: backup material for questions is at the end of
[NOTES.md](NOTES.md).

The Modelling Unit introduces its work and models first, without slides of
ours. The deck then has six parts. Parts 2 to 6 each open with a divider
slide (the part's number and title, one line on what it covers, and the
six parts with the current one in teal), and every other slide shows the
six parts along its top by short name, with the current one in teal. Most
slides have no boxes: lists and columns sit under thin rules, flows are
nodes on a line, and tables have horizontal rules only (see "Section
clarity and open layouts" below). Four places where items are read side by
side use one light card (see "Light cards, a VAT costing slide and one part
for the ideas" below).

Each slide carries one message, with icons, short labels and, inside the
slide body only, status tags; no tag sits beside a title or subtitle.
What the presenter says, including every caveat and figure that is not on a
slide, is in [NOTES.md](NOTES.md).

1 · Introduction

1. From business shocks to household incomes (title)
2. In brief
3. Who we are

2 · What PolicyEngine is

4. Part 2: What PolicyEngine is (divider)
5. PolicyEngine UK computes household incomes after taxes and benefits
   (with how a run works)
6. How far results break down
7. How the rules are encoded
8. Microcosm UK 2024–25: how the household file is built
9. Calibration: weights fitted to official statistics
10. What the weights are fitted to: official figures by topic (a table by topic)
11. What the weights are fitted to: the live calibration dashboard (live page)

3 · What we have already

12. Part 3: What we have already (divider)
13. What the UK model covers, and what we can share
14. The Axiom Foundation’s rules, live (live page)
15. Rules as code for firms and employers, from the Axiom Foundation

4 · Projects we have done

16. What exists today, and how a model could call it (the Axiom Foundation)
17. Part 4: Projects we have done (divider)
18. The Autumn Budget 2026 dashboard (live page)
19. An AI adoption scenario: Exchequer cost, poverty and inequality (live page)
20. AI and the UK economy: scenarios from 2027 (live page, provisional)
21. How we built synthetic UK firms
22. What the firm model can cost: thresholds, tapers and reduced rates
23. Who pays for trade shocks? Four UK episodes, 2021–26
24. Who pays for trade shocks? The 2025 US tariffs (the second
    slide of the trade study)

5 · What could be explored

25. Part 5: What could be explored (divider)
26. One way to link: tables in, tables out
27. The UK–US Economic Prosperity Deal: from model results to households
28. Business policy: from firm costs to households
29. Where an agent-based model could link
30. Links to macroeconomic models

6 · Possible next steps

31. Part 6: Possible next steps (divider)
32. Questions for discussion
33. Thank you

- `config.ts` controls the slide order, the build steps (live only) and the
  meeting metadata.
- `content.ts` holds the figures, short labels, icons, status tags and
  sources, with a comment on where each figure and claim comes from. The
  six parts are its `parts` list.
- `slides/index.tsx` contains the slides and the deck's building blocks (part
  navigator, part divider, icon badge, status tag, card, flow, the row of
  build steps, stat, target table, logo cell, figure); icons are bare Tabler icons in the teal token colour,
  with no box behind them, in three sizes;
  `slides/deck.module.css` styles them from one scale unit, so the 1920×1080
  and 1440×810 layouts match.
- `slides/Reveal.tsx` holds the build steps: `Reveal` shows its content from
  a given step and keeps its place before that (hidden, or an empty dashed
  outline where a rule or box remains), so nothing on a slide moves; `CountUp` counts a figure up
  when its step arrives.
- `slides/Embed.tsx` frames a live page with a small toolbar (its address,
  view buttons, "Expand" and "New tab"), after the Autumn Budget 2026 deck's
  `DashboardEmbed`.
- `NOTES.md` holds the presenter notes, slide by slide.

## Builds and motion

Presented live, slides marked with builds reveal their content on clicks
(`builds` in `config.ts`): flows build one node at a time, the calibration
figures and the tariff cushion figures appear on cue and count up, the
ideas slides show one idea at a time, and most other content slides build
by group (logo rows, columns, table rows by publisher or reform, cards,
questions). Every slide's title and body come on with a 250ms fade-up. A step that has not been reached keeps
its place (hidden, or a dashed rule where a table row will be), so nothing
moves. Rows of columns rise in one after another when a slide comes on, and arrows draw in
from the left. Motion lasts about 0.3 seconds and is off under
`prefers-reduced-motion`.

Exports show each slide once, complete. Every slide with builds has
`exportBuilds: 1`, so a PDF has exactly one page per slide (33 pages) and
the deck index counts 33 slides; `countSlides: true` makes the live counter
number slides too, not build steps; in an export `Reveal` shows every step, so
that page is the fully built slide, not its first step. No figure depends on
an animation: the count-up always ends on the exact text, a timer restores
it if the frames do not run, and it does not run in an export.

## Live pages and images

- Four slides embed a live page in a frame with a small toolbar (its
  address, "Expand" and "New tab"): slide 11 the
  [calibration dashboard, pinned to the certified build](https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk&release=microcosm-uk-2024-25-national/uk-frs-calibration-attempt-20261115T104657Z-fcfac709),
  slide 14 [axiom.org](https://axiom.org), the Axiom Foundation's site,
  slide 18 the
  [Autumn Budget 2026 dashboard](https://policyengine.org/uk/budgets/autumn-2026)
  and slide 19 the PolicyEngine post
  ["Who bears the AI shock? Distributional and fiscal incidence in the UK"](https://www.policyengine.org/uk/research/uk-ai-study)
  (16 November 2026). All need an internet connection. An export captures
  them as they are at that moment. The calibration dashboard, axiom.org and the post
  are shown at 80%, 80% and 70% of their size, so more of each fits.
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
    rise; slide 20.
  Two earlier images are deleted: the firm paper's threshold sweep (no slide
  showed it) and the trade paper's incidence figure (see "The review of 16
  November" below).
- The numbers behind the live dashboard are the table on slide 10 (the
  1,534 targets by topic, `targetTable` in `content.ts`). In a PDF export
  the dashboard slide (11) shows a short card in place of the live page: what
  the page offers and its address (`dashboardFeatures`; `Only` in
  `slides/Reveal.tsx` switches between the two). Live, the slide keeps the
  dashboard.

## Sources

Every figure is pinned to a commit of its study (the trade study, the AI
study, the firm VAT paper), and every claim about the model or the data to a
commit of policyengine-uk, policyengine.py or microcosm. Each has a comment
in `content.ts` naming its source, read on 15 November 2026. Where a point below is not on a slide, it is in the presenter
notes for that slide.

- **Data.** policyengine.py 6.20.1 (released 16 November 2026; national
  build of 15 November, policyengine-uk 2.177.7) certifies Microcosm UK
  2024–25, and 6.20.2 keeps the same pair; the deck's data slides describe
  that file. The AI study (policyengine 6.16.1) and the trade rerun
  (policyengine 6.20.0) ran on the earlier certified build of 7 November;
  the notes say so. The AI study runs on Microcosm UK for the 2027–28 tax year:
  its figures are those of the published post,
  ["Who bears the AI shock?"](https://www.policyengine.org/uk/research/uk-ai-study)
  (16 November 2026; PolicyEngine/policyengine-app-v2,
  `app/src/data/posts/articles/uk-ai-study.md`), read on 16 November 2026,
  with the paper on
  [SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7174479). The
  notes say it is an illustrative scenario on Microcosm UK for 2027–28 (no
  tag on the slide), and the slide carries no figure. In the notes: the Exchequer cost of £7.3bn (mean of 50
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
  `d8e01f2`, read 18 November, open and not merged; the earlier heads
  `185ee5f` and `867293f` have the same figures): every microsimulation runs
  on policyengine[uk] 6.20.0 with the Microcosm UK 2024–25 build of 7
  November that 6.20.0 certifies. The tariff stage runs under 2026–27
  rules; the energy episode's main run uses 2023–24 rules, and 2022–23 rules
  only for a comparison. The notes say so for both slides (no tag on the slides). The earlier "about 60%" energy offset is dropped; the rerun's
  different measure is in the notes.
- **Order.** Six parts: an introduction (the title, the talk in brief,
  who we are); what PolicyEngine is (what the model computes and how a
  run works, how far results break down, the rules, the Microcosm data, calibration, the targets by
  topic and the live dashboard); what we have already (model coverage, including business
  taxes, and what we can share, then the Axiom Foundation's rules as code
  for firms and employers and how a model could call them); projects we have
  done (a dashboard for the Autumn Budget 2026, an analysis of the
  potential impact of AI adoption, a firm-level model that costs VAT
  reforms, and who pays in four UK trade episodes); what could be
  explored (one way to link models by exchanging tables, then the
  Economic Prosperity Deal as a trade application, business policy as a
  business application, three kinds of agent-based model and links to
  macroeconomic models); and possible next steps (questions,
  the first of which asks whether there is appetite at all). Release gates and certification, assignment variability, data
  access in full and use, evaluation and engagement are under "Backup
  material" in the notes; the deck has no appendix.
- **Status.** Status sits inside the slide bodies (cards, tables, flows)
  or, where it used to be a tag beside the subtitle or a tagged foot line,
  in the notes as a "Say it" line: the firm VAT model is a working paper,
  Microcosm's firm support is experimental, OG-UK is open source and in use,
  and no link to a trade, macroeconomic or agent-based model is built.
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
    macroeconomic models slide. The sector mapping is tagged "Not built yet" and the feedback "Idea to
    explore"; that the deal is not yet modelled is in the notes.
  - Linking (slide 25), the mechanism: which records receive each result. Earnings and
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
  - The trade study's US-tariff episode (slide 23): "Who pays for trade
    shocks?", uk-trade-shock-study pull request #46, head `d8e01f2`
    (read 18 November 2026, open, not merged), `paper/generated_e3.tex`: gross
    change £1,007m a year; taxes and benefits offset 39.0% for wage cuts and
    34.1% for job losses (the abstract's headline; 41.8% and 37.0% with
    pension contributions); run on Microcosm UK with policyengine[uk] 6.20.0
    (policyengine-uk 2.174.1). These replace the figures of `10dc18826`
    (41.8%, 32.1%) and `06c8bbc` (43.7%, 35.4%).
  - Economic Prosperity Deal (its own slide, the US-tariff episode and the starting points): the general terms
    on GOV.UK (operative 8 May 2025; a 100,000-vehicle quota at a 10% tariff;
    and, subject to supply-chain conditions, a steel and aluminium quota at
    most-favoured-nation rates).
  - British Industrial Competitiveness Scheme (business policy and the starting points):
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
  - Dosi, Fagiolo and Roventini (2010), Caliendo and Parro (2015) and the
    GTAP model page are cited as public references to kinds of model;
    none has been run with PolicyEngine. Caliendo and Parro was checked on
    Crossref (DOI 10.1093/restud/rdu035, The Review of Economic Studies
    82(1), 1–44). An agent-based model of AI and a GTAP run with technology
    sectors are described, in the notes to the agent-based model slide, as
    possible inputs only.
  - How far results break down (slide 6): policyengine.py `810a59e`,
    `src/policyengine/outputs/` and `tax_benefit_models/uk/analysis.py`
    (income and wealth deciles; five gain-and-loss bands; Gini and income
    shares on equivalised HBAI income; four poverty measures, by age group
    and sex; the 14 programme rows of `UK_PROGRAMS`), and
    `uk_geography_disclosure.py` (national, region, constituency and local
    authority levels; at least 10 survey households behind each published
    number, bootstrap intervals). Counts: 650 constituencies
    (`data/uk_geography/constituencies_2024.csv`) and 361 local authorities
    (`local_authorities_2023.csv`), both from the local-area file the
    bundle routes them to, which policyengine.py 6.20.1 certifies
    (`uk-local-candidate-f100-s42-20261116T102715Z-e2745e59`, alongside the
    national build; policyengine.py CHANGELOG, 6.20.1 entry). Household type, tenure and number of
    children are policyengine-uk `d3db7ac` variables (`family_type`,
    deprecated; `tenure_type`; `num_children`) with no standard output, so
    the slide tags them "Custom analysis".
  - The Axiom Foundation (slides 15 and 16): every claim was read on 16
    November 2026 at rulespec-uk `3e07aef` and rulespec-us `8231711` (both
    main), axiom-rules-engine `82cf3aa`, axiom-mcp `cec0d35`, and the public
    pages linked in the notes (axiom.org/about, /coverage, /tariff/schedule,
    the section pages and api.axiom.org/docs, each returning 200). "Encoded"
    appears only where a RuleSpec module exists on main; the comments on
    `axiomRules`, `axiomToday` and `axiomAccess` in `content.ts` give each
    module path. Status tags: VAT liability "Partly encoded" (standard-rated
    supplies only; no module for the registration threshold, zero rating,
    exemption or partial exemption); employer NI "Partly encoded" (the
    conditions of ss.9A and 9B are inputs, queued in rulespec-uk#479, and the
    employment allowance has no module); the small-company test "Encoded,
    checks paused" (an active waiver in `known-validation-gaps.yaml`,
    rulespec-uk#137, to 3 January 2027); the US tariff schedule "Incomplete,
    most checks paused" (the Axiom Foundation's own page: "Coverage status:
    incomplete and not certified"; 296 of its 380 modules, including all 100
    rate tables, carry a validation waiver). The slide gives no tariff line
    count; that page's 13,790 lines match the general-disposition entries in
    the chapter tables at `8231711`, and 12,042 of them carry an ad valorem
    or free rate. The engine is tagged "Open source" (its LICENSE is MIT),
    the hosted API "Trial access" (self-serve trial keys that expire after
    14 days, api.axiom.org/docs) and the MCP server "Developer preview" (the
    axiom-mcp README). The six countries are those axiom.org/coverage shows
    with encodings. The relationship, as axiom.org/about states it, is in the
    presenter notes, not on the slide:
    "Max Ghenis is CEO of both the Axiom Foundation and PolicyEngine, which he
    co-founded."
  - Data access (the row on slide 13, and the notes): licences and READMEs of policyengine-uk, policyengine.py,
    microcosm `429d7a0` and firm-microsim-paper `e6d5dd6`.
  - Rules: policyengine-uk `d3db7ac` (version 2.179.0). The snippet is
    abridged from the personal allowance variable (the parameter and the test
    are linked in the sources row and described in the notes); the
    counts (1,086 parameter files, 998 with a reference; 1,513 variables;
    6,782 YAML test cases under `tests/policy`) were counted at that commit,
    which is version 2.179.0; the bundle certifies 2.177.7.
  - A model run: policyengine-uk `d3db7ac`, the growth parameters (OBR
    forecasts to 2031) and the labour supply elasticities (zero by default).
    An optional response on hours of work uses the OBR's elasticities
    (`dynamics/progression.py`); a participation response is in the code, but
    no run calls it yet (`dynamics/labour_supply.py`, `docs/book/usage/dynamics.md`).
    Two responses run by default: capital gains realisations (elasticity 1)
    and employer NI changes passed to pay. policyengine.py `810a59e`,
    `docs/impact-analysis.md`.
  - Microcosm uses two kinds of number and keeps them apart:
    - *The certified build* (the national build of 15 November 2026 that
      policyengine.py 6.20.1 and 6.20.2 pin,
      `microcosm-uk-2024-25-national/uk-frs-calibration-attempt-20261115T104657Z-fcfac709`,
      built at microcosm `3a7067f` on policyengine-uk 2.177.7), from the public
      [calibration dashboard, pinned to that build](https://calibration-diagnostics.vercel.app/calibration/dashboard/microcosm?country=uk&release=microcosm-uk-2024-25-national/uk-frs-calibration-attempt-20261115T104657Z-fcfac709)
      and its data route for that release (`/calibration/dashboard/api/microcosm`
      and `/api/microcosm/target-diagnostics`), read on 18 November 2026:
      1,534 targets; 98.8% within 10% (1,515); 78,164 household records; the
      table of targets by topic on slide 10 (the `family_fit` rows for the
      counts and the number within 10%, and the target list for where each
      binds: HMRC 776 (761), ONS 365 (365), DWP 233 (230), MHCLG 82 (82) and
      78 (77) from ten other publishers); an effective sample size of about
      7.4 thousand (9.4% of records); 39 target families in the loss, each
      1/39 of the total weight; saved weights from step 1,491 of 1,500. The
      build's commit `3a7067f` declares 56 source stages; its SPI copy code
      (`uk_runtime/spi_support.py`) is the same file as the 7 November
      build's. Against the 7 November build (1,514 targets, 98.7%, 38
      families, step 1,437, ESS 7.2 thousand, 54 stages), the targets add 17
      for Personal Independence Payment and 3 for Universal Credit. The 85
      release checks run and passed are the 7 November build's diagnostics;
      the 15 November build's were not read. The pinned link keeps showing
      the certified build after newer releases become the dashboard's
      default.

      The deck does not quote the solver's final objective, which is not
      comparable across releases. The fit is in-sample; the dashboard has no
      out-of-sample check for the UK; the notes say the fit is in-sample (no
      tag on the slide).
    - *The code* at microcosm `429d7a0` (15 November): 56 source stages,
      as in the certified build (`uk/source_stages.json`;
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
      build's 1,534, so the deck quotes the build.
    - "Certified": policyengine.py `810a59e`, `data/bundle/manifest.json`,
      `docs/bundles.md` and `docs/engineering/skills/data-certification.md`.
  - Assignment variability (notes only): the AI post (50 draws: mean £7.3bn,
    SD £1.9bn); uk-trade-shock-study `06c8bbc`, `runner.py` and
    `paper/sections/results.tex` (20 assignment draws at PR #46, `d8e01f2`).
  - Trade events (slide 22): uk-trade-shock-study pull request #46,
    `d8e01f2`, `paper/sections/episodes.tex` (each episode's years and
    whether it is price-led or earnings-led). The food price estimate is
    Bakker et al. (2023), as the study cites it.
  - Calibration targets by topic (slide 10): the dashboard's data route for
    the pinned build, read 18 November 2026 (`/api/microcosm` with the
    `release` parameter, `family_fit`; where each target binds from
    `/api/microcosm/target-diagnostics` for the same release, all 1,534
    targets). The rows group statistics within each publisher, so the
    publisher totals can be read off the table; the counts sum to 1,534, and
    those within 10% to 1,515 (98.8%).
  - Local areas: the bundle lists a local-area file for constituencies and
    local authorities, and policyengine.py 6.20.1 certifies it alongside the
    national build (`uk-local-candidate-f100-s42-20261116T102715Z-e2745e59`). The deck describes these
    results plainly, with no "Experimental" label: 650 parliamentary
    constituencies and 361 local authorities, from a certified local-area
    file. The thin-cell caveat is in the notes only.
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
    is a source on the synthetic-firms slide. What the firm model can cost
    (slide 21, firm-microsim-paper `e6d5dd6`): the static costs are
    `results/reform_menu_common_base.txt` (the corrected schedule-cost
    table: £85,000 notch, 2023–24 microdata, unaged, in-scope VAT firms, VAT
    base above the threshold £175.105bn), and the responses
    `results/dynamic_reform_results.txt` (an iso-elastic, Kleven–Waseem
    style model of bunching at the notch; elasticity 0.05, 0.17 or 0.32,
    assumed, not estimated from the synthetic data). Firm counts are rounded
    to the nearest hundred.
    Trade changes: uk-trade-shock-study `06c8bbc`, the four episodes and the
    energy offset already in the deck.
  - Business taxes (the "Taxes on business" card of slide 13, and the notes
    of the cut business-side slide): policyengine-uk `d3db7ac` (business
    rates and corporate stamp duty allocated to shareholders; the employer
    NI incidence parameters, all to pay by default). The model has no firm
    entity. The earlier card on linking firms to households, which is not
    built, is in the notes.
  - Linking (slide 25): one way to link, for discussion. What
    runs today is the trade study's code, which applies earnings changes by
    two-digit SIC division to employees in Microcosm UK (uk-trade-shock-study
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
BICS; the notes say both are not yet modelled, and the BICS slide carries
one "Not developed yet" line above its flow.

Earlier PolicyEngine decks describe Microcosm at older commits or for the
US. Where they differ from the code read for this deck, the deck follows the
code: the target counts are the certified build's, the national file uses no
L0 record selection (`l0_lambda` is 0 in the national settings), and no
record count is taken from the 2023 build.

## Review

The dated sections below keep the slide numbers of the version they
describe; the current order is the list at the top of this file and the
headings of `NOTES.md`.

Earlier versions had four rounds of Fable 5.2 review: facts against the
pinned code, and usefulness, neutrality, privacy and layout. Later passes
cut the text on each slide (the text taken off is in `NOTES.md`), removed
tinted bands, worded titles positively, replaced "shock" with "scenario" or
"change" in slide text and made the ideas slides non-committal ("could",
"for discussion", "a starting point").

The version that followed the meeting agenda (commit `516dfa0`) changed
figures, although its README then said that no figure had changed: it
corrected the Microcosm and calibration slides against the certified build's
diagnostics, so the stage count became 54, the checks became 94 declared, of
which the 85 that apply to the build passed, and the calibration tiles
changed (the effective sample size in place of the solver's loss, 38 target
families, the best step kept).

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
  scenario is run" are one slide (5): the rules, the households, run twice,
  the difference.
- "What the weights are fitted to" (a map of targets by publisher and
  statistic) is cut: the live dashboard (10) shows the same map. The
  calibration slide (8) carries the targets by publisher as one stacked bar.
- "What we have on the business side" is folded into the coverage slide (12),
  whose "Taxes on business" card it repeated; the card now says that
  corporation tax and firms as entities are outside the model.
- "Firm-level VAT microsimulation: costing threshold changes" is cut: its
  figure was a result. The synthetic-firms slide (18) keeps the method, the
  calibration accuracy and the comparison with HMRC.
- "Disaggregation: how sector results reach people" and "One way to link:
  tables in, tables out" are one slide (27), in part 6: each kind of result,
  the kinds of model that report it, the key it would be mapped into, the
  records that receive it once mapped and what PolicyEngine already reports. The
  one-wage trade model, the keys and the possible additions of the earlier
  slide are in the notes.
- No slide has a "Sources" row any more; each slide's links are in its notes,
  and there is no closing sources slide, to keep to the time. The freed
  space goes to the content.
- The tariff and trade slides follow the trade study's rerun on Microcosm
  UK (pull request #46, now at `d8e01f2`, open): 39.0% and 34.1% (taxes and
  benefits only) replace 43.7% and 35.4%, and both slides are tagged
  "Microcosm UK".
- Doability: every "could pass" box was checked against the trade study's
  code and policyengine-uk, and the notes for slides 22, 25, 26, 27 and 29
  record it. Inputs carry "Can take today", "Needs a sector mapping" or
  "Small extension"; profits by sector, sector output and "by region" came
  off the slides.
- Smaller changes: the "In brief" cards follow the new contents; source
  labels say "trade study" and "AI study"; the forecast-scenario card has one
  tag ("Mechanism built; not yet run"), so the three card titles line up; the
  Economic Prosperity Deal slide carries a tag only on the two pieces that
  are not built (now "Not built yet" on the sector mapping and "Idea to
  explore" on the feedback arrow); the agent-based model slide lists outputs in
  short form. These smaller changes altered no figure; the tariff figures
  above did change.

## The review of 16 November

A further independent review checked every figure against its source again
(the counts on slides 6, 8 and 18 were recounted, and the AI post, the GOV.UK
pages and the dashboard's data re-read) and changed four things. No figure
changed.

- The US-tariff episode (formerly called the tariff bridge) is part of the
  trade study, and the deck now says so.
  Slide 19 shows the study's four episodes as cards (years, and whether
  prices or earnings carry the change), with the US tariffs card marked
  "Next slide". Slide 20 is titled "Who pays for trade shocks: the
  2025 US tariffs", with the subtitle "Inside the trade study", and carries
  the same "Working paper" and "Microcosm UK" tags as slide 19.
- The trade paper's incidence figure is off slide 19 and its file is
  deleted. It was a result chart, and the file is byte-identical at `06c8bbc`
  and at pull request #46, so it was not regenerated on Microcosm UK and did
  not match the slide's "Microcosm UK" tag. (The pull request regenerates
  `fig_decomp`, `fig_episode_map`, `fig_grid` and `fig_paths` only.)
- Slide 20's tag "Deal not yet modelled" is now "No published results for
  the UK–US deal": the study's code has a schedule for the Economic Prosperity
  Deal and the repository holds a two-draw test file for it
  (`results/epd_displacement.json`), but the paper reports no deal results.
- In a PDF export, slide 10 shows a static summary of the calibration targets
  in place of the live dashboard, which a capture caught before its map had
  drawn. The unused image `firm-vat-revenue-impact-2025-26.png` is deleted.

`bun run export` completes for this deck; nothing in the deck holds the
export open. Against a dev server at `EXPORT_WAIT_MS=12000` it took 5
minutes on a quiet machine and 11 to 33 minutes on a busy one: after a
source change the first captures wait for the dev server to recompile, hit
the script's 132-second watchdog and are retried alone, which succeeds. Run
it in the background or with a long timeout; a command cut off at two or
ten minutes looks like a stall at "24 steps". A dev server draws Next.js's round development badge in the
bottom-left corner of every capture, over the footer logo; an export
without `--url` captures a production build, which should have no badge
(not run in this review, because a dev server was in use).

## The consistency check of 17 November

The deck and the pre-seminar briefing were checked against each other for
figures, names, status words and what each input needs. No figure changed.
On slide 27 the prices row is now tagged "Needs a sector mapping", as on
slide 26 and in the briefing, in place of "Can take today"; the deal is
"the UK–US Economic Prosperity Deal" throughout the notes.

## The Axiom Foundation slides

Two slides follow the coverage slide, in part 3: the Axiom Foundation's
rules as code for firms and employers (13), and what exists today and how a
model could call it (14). The deck then had 25 slides (31 with the part
dividers added later); the slide numbers in this section are
those of that version. The coverage slide's "Outside the model" line (corporation
tax; firms as entities) is the reason for the place: slide 13 shows rules
on a firm entity that exist today, and slide 14 says that corporation tax
is not encoded there either. Slide 13's title, slide 14's subtitle and the
In brief card for part 3 name the Axiom Foundation, and slide 13's foot
gives the relationship as axiom.org/about states it.

## The data review of 17 November

A review by a maintainer of the Microcosm data changed the data slides and
added one, so the deck had 25 slides (31 with the part dividers added
later); the slide numbers in this section are those of that
version. Every figure below is the certified
build's, from the calibration dashboard's data for the pinned release.

- Slide 7 lays the household file's build out on one row, left to right:
  five tall steps and the file itself, with arrows between them, built one
  step at a time. Its caution tag is off the slide; that no target is by
  industry, and that the SPI copies' sectors are imputed, are in the notes.
- Slide 8 has three tiles beside the loss: 1,514 targets in 44 statistics,
  98.7% within 10%, and 78.2k household records. The effective sample size
  moved to the notes, and the bar of targets by publisher is replaced by
  slide 9.
- Slide 9 is new: the 1,514 targets as a table by topic (where each binds,
  the publisher, the number of targets and the share within 10%), after the
  Good Growth Foundation deck's target table. Fourteen rows group the 41
  statistics within each publisher, so the publisher totals stay readable:
  HMRC 776 (761 within 10%), ONS 365 (365), DWP 213 (210), MHCLG 82 (82)
  and ten others 78 (77).
- Slide 10 keeps the live dashboard, pinned to the certified build. In a PDF
  export it shows a short card (what the live page offers and its address)
  in place of the former summary, since slide 9 carries the numbers.
- On slide 20 the last step is "Employees in Microcosm UK", by sector.
- The notes drop a stale line (the trade study is now rerun on Microcosm
  UK), give the SPI copies' occupation as imputed from their incomes, and
  cite pull request #46 at head `185ee5f` (its figures are those of
  `778557c`), with the rule years of the tariff and energy runs.

No existing figure changed; slide 9 adds counts and shares by topic from the
same build.

## Section clarity and open layouts

(Written for the seven-part deck; slide numbers below are those of that
version. The current six-part order, its five dividers and the four light
cards are in "Light cards, a VAT costing slide and one part for the ideas".)

The audience found it hard to tell which part of the talk a slide was in,
and nearly every slide used bordered cards. Options considered: a divider
slide before each part; a persistent navigator of the seven part names; or
both. Both were adopted, with no change to any figure or wording on the
slides.

- Section clarity. Six divider slides (4, 11, 15, 21, 24 and 28) open parts
  2 to 7: a large part number, the title, the part's line from `parts` in
  `content.ts`, its "Idea to explore" tag for parts 5 and 6, and the seven
  parts with the current one in teal and a teal rule. On every other slide
  the small part label and the row of seven unlabelled marks are replaced by
  the seven parts along the top by short name (`short` in `parts`), the
  current one in teal with a filled number, those already covered in a
  lighter grey. The row has the old label's height, so no body moved. The
  dividers add about a minute to the talk.
- Open layouts. Boxes stay only where they carry structure: the code panel,
  the live-page frames and the shared cover and closing slides. In brief is
  a numbered agenda under thin rules; Who we are has its three facts split by
  hairlines and its logo rows under rules; coverage, the two Axiom Foundation
  slides, the trade episodes, the macro links and the pilots are open
  columns under a hairline (the US tariffs episode under a teal rule); the
  calibration figures and the firm accuracy column stand without tiles; the
  questions are a numbered list between rules; the targets table, the
  agent-based model table and the linking table have horizontal rules only,
  with a dashed teal rule for the column a model would supply and a teal
  line beside the shared outputs. The five flows (what PolicyEngine
  computes, the Microcosm build, the US tariffs, the Economic Prosperity Deal
  and BICS) are icon nodes on a line, numbered, with a dashed ring for a step
  outside PolicyEngine or not built; the Microcosm file is a filled node.

## Light cards, a VAT costing slide and one part for the ideas

The sections above this one are a record of earlier versions and use the
slide numbers of their time; the slide list at the top is current.

- Light cards. One card style, `.cardsBoxed > .card` and `.accuracy` in
  `deck.module.css`: white, a 1px border in the deck's line colour, a small
  radius, comfortable padding, no tint, no accent bar and no shadow. It is
  used only where items are read side by side: the six rules on the Axiom
  Foundation slide (13), the two pilots (29), the three macro routes (27,
  tags top right) and the calibration-accuracy column on the synthetic-firms
  slide (18), whose method list and HMRC figure stay open. Every other slide
  stays open; the navigator and dividers are unchanged.
- A VAT costing slide (19), after the synthetic-firms slide: five reforms by
  lever (threshold location, taper shape, a reduced-rate step) with their
  static cost in £m a year for 2023–24 against the £85,000 threshold and
  the firms affected, and, beside it, costs under an assumed turnover
  elasticity for the reduced-rate bands and the threshold raise. The
  elasticity is assumed, not estimated; the tapers are costed statically
  only. Tagged "Working paper". Sources are under "Sources by slide".
- One part for the ideas. "What we could explore further" and "Ideas that
  fit the unit" are one part, "What we could explore together", tagged
  "Idea to explore", so the deck has six parts and five dividers (4, 11, 15,
  22 and 28). Its order reads as one argument: the linking table first, as
  the general mechanism (what a model passes, how it maps, what PolicyEngine
  reports); then the Economic Prosperity Deal as a trade application; BICS as
  a business application, whose pass-through step is the place another
  model could help; the agent-based model, which could supply that
  behaviour; and the macroeconomic routes last, as the longer-term links.
  To avoid repeating the mechanism, the deal's mapping step now reads "As on
  the previous slide", and the agent-based model's BICS row points back to
  the BICS slide. No figure or tag changed.

## The live Axiom Foundation slide and tags that wrap (17 November)

The sections above use the slide numbers of their time; the slide list at
the top is current.

- Slide 15, after the two Axiom Foundation slides, embeds axiom.org live at
  80% (`AxiomLiveSlide`, `sources.axiomSite`), tagged "Live", so each slide
  after it is numbered one higher: 32 slides, with dividers at 4, 11, 16, 23 and 29.
  axiom.org sends no header that forbids framing.
- The forecast-scenario card on the macroeconomic slide (28) is tagged
  "Built, not yet run", in place of "Mechanism built; not yet run", which ran
  past the card's border at narrow widths. A card's tags now sit beside its
  icon when they fit and wrap below it when they do not (`.cardHead` wraps;
  its tags take at most the card's width and wrap their own text), on every
  card slide. No figure changed.

## Fresh-eyes review and audience fit (17 November)

No figure or tag changed.

- Prices lead the trade model's row on the deal slide (25) and the first
  pilot (30): "Prices and jobs by sector". The linking slide (24) names
  partial-equilibrium and CGE trade models as the source of prices. The
  first pilot's starting point is now the trade study's US-tariff and
  UK–India episodes: the India episode already passes duty reductions to
  household spending by decile, the part closest to a trade-agreement
  assessment.
- The deal slide's subtitle points back to the linking table, and its
  mapping step names what is mapped ("Another model’s sectors and products
  to SIC and COICOP divisions").
- The synthetic-firm slide (19) is set larger (body scale 0.95, from 0.9),
  so its method column reads at a distance; it still fits at both sizes.
- Straight apostrophes in slide text are typographic (slides 15 and 28).
- Notes: the questions slide's notes list its six questions, with short
  answers on elasticities, closure, timing, tariff revenue and returns to
  capital; the agent-based slide's notes match its inputs (no "by region",
  no profits by sector); the deal slide's notes give the sector mapping's
  tag as "Not built yet"; the linking notes add non-tariff measures as trade
  costs that reach households the same way.

## Tone, a breakdown slide and kinds of model (17 November)

The slide list at the top is current; earlier sections keep the numbers of
their time. No existing figure changed.

- Tone. Part 6 is "Possible next steps" (navigator "Next steps"), with the
  line "Two possible starting points, and questions".
  "Two candidate pilots" is "Two possible starting points", subtitled "For
  discussion, if there is appetite". The first question asks whether there
  is appetite to explore a link, and on which question; it replaces "Which
  pilot first", so there are still six. Part 5 is "What could be explored"
  (navigator "Ideas to explore"). The second starting point's first row
  names a kind of model, not an organisation. The part keeps the key
  `collaborate` and the symbols `PilotsSlide`, `pilots` and
  `PartCollaborateSlide` in code only.
- A new slide 6, "How far results break down", in part 2 after the run
  slide: four open columns (by income, by people, by programme, by place)
  and a foot on thin cells and disclosure control. It sits in part 2, not
  before the linking slides, because it is what the model does today, and
  part 5 is tagged "Idea to explore"; the linking slide points back to it.
  Every slide from 6 on is one higher: 33 slides, with dividers at 4, 12,
  17, 24 and 30. Sources are under "Sources by slide".
- The agent-based model slide (28) shows three kinds of model: a
  supply-chain network model (the first candidate, under a teal rule with a
  small "First candidate" label), a business-investment model with
  expectations and uncertainty at its core, and an endogenous-growth model
  in the style of Dosi, Fagiolo and Roventini (2010). Each passes in jobs
  and earnings or wages by sector ("Can take today"). The former BICS row
  is in the notes; BICS keeps its own slide.
- The linking slide (25) has a fourth row, "One economy-wide wage", from a
  multi-sector quantitative trade model (input–output links, one wage per
  country, in the style of Caliendo and Parro, 2015), tagged "Can take
  today": the same change in every sector needs no mapping. Prices list
  partial-equilibrium, CGE and quantitative trade models. The deal slide
  and the first starting point say "wages by labour type, or one wage".
  The notes add that such a model also reports sector output and trade
  flows, which stay in it, and that a real wage already nets out prices.

## Status out of the title rows, row icons and corrections (17 November)

- Who we are (slide 3): the three facts across the top, then the two logo
  rows on one grid of equal cells (five columns for both rows), each mark
  in a box of one height (3.1 units, about 62px at 1920) with square marks
  set lower than wide wordmarks, and one-line captions: "Built a tool on
  PolicyEngine", "Transparency record", "Annual report 2025–26", "Cited in
  debate"; think tanks by name only (NIESR's NiGEM link is in the notes).
- No status tag beside any title or subtitle, and none under the titles of
  the part dividers; every tagged foot line ("Thin cells", "Runs today",
  "On axiom.org", "Elasticity assumed", "Method") is off the slides. What
  they said is in the notes, under "Say it" for each slide.
- The VAT slide (21) is the static cost table alone, full width, retitled
  "What the firm model can cost: thresholds, tapers and reduced rates"; the
  turnover responses are in the notes, with their figures.
- Row icons: the VAT table (one per lever) and the target table (one per
  publisher, a sum sign on the total) carry a small bare teal icon on each
  row label; the agent-based model table uses the linking table's small
  icon size.
- The linking slide (25): the second column is "Code in Microcosm UK", and
  the SIC, occupation and COICOP codes carry "In the data" (they are in
  Microcosm UK; the crosswalk from another model is what is not built, which
  the notes say). The SIC and one-wage rows carry "In
  the trade study’s code" in place of "Can take today"; the agent-based
  model slide's inputs carry "Not developed yet". No slide says "Can take
  today".
- Local areas: 650 parliamentary constituencies and 361 local authorities
  come from a certified local-area file (policyengine.py bundle 6.19.0
  certifies `microcosm-uk-2024-25-dense-20261107T173210Z-38605444`
  alongside the national build), so no slide labels them experimental.
- Who we are cites the policyengine.py paper in the "UK and US models"
  fact, linked to its DOI: Ahmadi, V., Ghenis, M., Woodruff, N.,
  Makarchuk, P. and Volk, A. (2026). policyengine: A Microsimulation Tool
  for Tax-Benefit Policy Analysis. Journal of Open Source Software, 11(125),
  11115. https://doi.org/10.21105/joss.11115.
- The Axiom Foundation slides now open with the live site (14), then the
  rules as code (15) and what exists today (16).
- BICS (slide 27): one line above the flow, tagged "Not developed yet": a
  possible extension of the business-tax allocation.
- More builds, live only (each slide stays one page in an export:
  `exportBuilds: 1`): Who we are (facts, government, think tanks), the
  breakdowns (four groups), the rules (code, counts, entities), calibration
  (objective, inputs, fit), the target table (HMRC, ONS, DWP, MHCLG, then
  the rest with the total), coverage (four columns, then data access), the
  two Axiom Foundation slides (two rows of rules; three columns, then
  access), the VAT table (row by row), the trade episodes (card by card),
  BICS (step by step) and the questions (one at a time). Every slide's
  title and body come on with a 250ms fade-up; reduced motion turns all
  of it off.
- The forecast-scenario card on the macroeconomic slide (29) is tagged "Idea
  to explore", as the macro–micro loop is, in place of "Built, not yet run".
- The AI slide's subtitle is "Distributional and fiscal incidence in the
  UK"; the post's date is in the notes.

## Final review (17 November)

- In brief (slide 2): part 5 no longer carries an "Idea to explore" tag, so
  no part in the agenda or on a divider has one, as no title does. The tag
  stays where it marks a piece inside a slide body: the Economic Prosperity
  Deal's feedback arrow (26) and two macroeconomic routes (29).
- Notes: the live pages are slides 11, 14, 18 and 19; the list of tags adds
  "Custom analysis" and "Outside the model" and drops "Proposal", which no
  slide uses. Here, the export card belongs to slide 11.
- Two possible starting points (31): body scale 1.2, from 1.26, so at
  1440×810 the cards no longer press against the accent bar. No figure
  changed.

## Privacy

The deck is public: it has no password and appears on the home page.

## Maria's review and the move to the 15 November build (18 November)

- Data slides (6, 8 to 11) now describe the national build of 15 November
  2026 that policyengine.py 6.20.1 and 6.20.2 certify, with its local-area
  build of 16 November. Figures read from the calibration dashboard for that
  release: 1,534 targets, 98.8% within 10%, 78.2k records, 39 loss
  families, 56 stages; slide 10 adds Personal Independence Payment to the
  DWP row (57) and Universal Credit is 106 (103). The dashboard slide and
  links are pinned to the new release.
- The AI study and the trade rerun ran on the 7 November build; the notes
  for slides 19, 22 and 23 say so.
- Project names in full on slides 2 and 17, and slide 19's title is "The
  potential impact of AI adoption: who bears the cost?".
- "By place" is now "By geography", and the notes say the disclosure floor
  of 10 households is policyengine.py's own, stricter than the UK Data
  Service licence.
- PR #46 is cited at its current head, `d8e01f2` (figures unchanged).

## Two slides removed; the trade study marked preliminary (18 November)

- Removed "What exists today, and how a model could call it" (the Axiom
  Foundation, old slide 16) and "Two possible starting points" (old slide
  31). The deck has 31 slides. Part 6 now holds the questions only, and
  its divider and the "In brief" card read "Questions for discussion."
  `AxiomTodaySlide` and `PilotsSlide` stay in `slides/index.tsx`, unused.
- Slide 10's title no longer carries the target count; the subtitle does.
- The trade slides' subtitles say "Preliminary work, not yet published".
- The last question says "geography".

## Max's review (18 November)

- Slide 3: 10 Downing Street's caption is "Built 10ds-microsim on
  PolicyEngine". Slide 6: geography adds "Published where 10+ survey
  households lie behind each number, with intervals".
- Slide 9: a before-calibration tile, 44% of targets within 10% under the
  starting weights (which include the SPI copies), against 98.8% after,
  in-sample (Universal Credit 17% to 97%, Pension Credit 8% to 100%, PIP
  18% to 100%), from the dashboard's target list for the release.
- The Axiom "what exists today" slide is back (slide 16, 32 slides in
  all); its fuel duty item reads "Fuel duty's statutory rates (not the 5p
  temporary cut)": the encoding holds the 57.95p standing rate
  (rulespec-uk `uk/statutes/ukpga/1979/5/6.yaml`), and 52.95p is in force.
- Slide 25, row 1: "Agent-based model, or a CGE model that reports
  unemployment"; assigned as wage changes, with net job losses drawn at
  random where the model reports them.
- Per-item "Idea to explore", "Not built yet" and "Not developed yet" tags
  removed from slides 26 to 29; slide 25's tags and OG-UK's stay.
- Slide 29: the macro-micro loop was done once by NIESR, without
  iterating; iterating is the idea. The notes for slides 29 and 31 ask
  whether the Unit's Oxford Economics model could supply the scenario.
- Trade study cited at PR #46 head `d8e01f2` (figures unchanged) and linked
  to its paper PDF; the energy notes follow the current abstract (71.8%
  energy-specific, 87.5% with Cost of Living Payments), and the elasticity
  answer uses the paper's OBR-0.4 result (41.9% and 37.0%).
- Notes: a timing checkpoint (divider 24 by about minute 20); the
  participation response is in the code but no run calls it yet; the AI
  study assumes the size of the change; the firm model's 40.4% by-sector
  VAT diagnostic for questions.- Slide 19's title names what the study computes: "An AI adoption
  scenario: Exchequer cost, poverty and inequality", subtitled "Under five
  assumptions about who loses work". The post's title stays as the citation.

## Fable 5.2 review (18 November)

- Slide wording: slide 26's subtitle says how the tables could apply; slide
  21's header is a change in VAT revenue, and "Location" is "Level"; slide
  20's 98.0% says in-sample; "a disruption to one product" (28); "who pays
  in four UK trade episodes" (2, 17); slide 25's row 3 is "of the
  Caliendo–Parro kind", its subtitle "Whichever lens is chosen", and its
  last column "What PolicyEngine reports", as on 28; slide 29's subtitle
  "Three possible routes"; slide 9's chip shortened; slide 23's figures
  top-aligned.
- Notes: the OBR-0.4 rates (41.9%, 37.0%) are pension-inclusive and are
  compared with 41.8% and 37.0% at elasticity 1; "the host presents
  first"; two slide numbers fixed.

## AI and the UK economy slide (19 November)

- New slide 20, after the AI study: the live page "AI and the UK economy"
  (OG-UK and the household study, four scenarios from
  2027), embedded from its Vercel deployment. The subtitle says it is
  provisional and not yet published, and the slide quotes no figure. The
  deck has 33 slides; the notes are renumbered.
