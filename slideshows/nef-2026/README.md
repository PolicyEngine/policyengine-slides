# New Economics Foundation meeting, November 2026

23 slides at `/slides/nef-2026`, for a meeting with the New Economics
Foundation (NEF) on working together on the OBR macroeconomic model. The deck is
public. Slide 17 embeds the in-development macro site
(policyengine-macro.vercel.app) live; the site allows this deck's origins to
frame it (PolicyEngine/macro#276). The exact meeting date isn't fixed, so `config.ts` uses
`2026-11-01`, which renders as "November 2026"; change it, and the footer,
once the date is set.

Five parts, after a title and an agenda. Each part opens with a section slide,
and every slide's header carries a tracker of the five parts:

1. The OBR model in Python (slides 3–7): what the OBR publishes and what we
   built, layer by layer; the model's 12 modules in three groups, and how
   they connect; Thibault's review checked against the code; how our build runs, with three example equations
2. How well it fits (slide 8): anchored and free-running, on one slide, with no divider
3. Policy scenarios and limits (slides 9–14): results against the OBR's
   published multipliers, income tax, investment, Bank Rate, and the known
   limits and whose they are
4. The macro platform (slides 15–19): the seven models, the site live, using
   it from Claude, and one reform taken from the
   microsimulation to GDP. Every slide of this part is marked "Preview, not
   yet launched"
5. Working together (slides 20–22): collaboration areas and questions for NEF

On the slides a simulated change is a "scenario"; `shock` stays in code
identifiers and in the notes where it is the argument's name.

It follows PolicyEngine's July 2025 deck for NEF, which covered the
tax-benefit microsimulation (`NEF x PolicyEngine.pptx` in the private
`PolicyEngine/obr-presentation` repo, commit `f4f819a7`; it isn't linked on
the slides).

## Editing and presenting

- `config.ts` controls the slide order, the build steps and meeting metadata.
  Twelve slides reveal step by step when presenting (`builds`), 44 steps in
  all; a PDF export shows each slide once, complete (`exportBuilds: 1`).
  The viewer's counter shows the slide, not the step (`counter: "slides"`, an
  opt-in in `lib/types.ts`; other decks still count steps).
- `content.ts` holds every number on the slides, each with its source pinned
  to a commit, plus the tables and lists.
- `slides/index.tsx` contains the slides and the deck's components (one list,
  one card, one stat, one table style; every item takes a Tabler icon). Each
  slide is one composition: nothing sits in a separate strip or footnote row
  under it, and detail that doesn't fit goes to the speaker notes. The `agenda` list there drives the agenda slide, the
  section slides and the header tracker. One slide points at another by
  number (`incomeTaxSlideNumber`): update it if
  the order in `config.ts` changes.
- `slides/deck.module.css` sizes the slide body in em of a base that follows
  the viewport (the smaller of its height and width), so a slide looks the same at 1920x1080 and 1440x810. A
  slide's `scale` enlarges a sparse body.
- `slides/BuildScope.tsx` puts the current build step on the slide body. An
  element with `data-step="N"` stays hidden, keeping its place, until step N,
  then animates in (`deck.module.css`); an export shows every step. The same
  stylesheet holds the entrance stagger and the motion inside figures (bars
  grow, marks slide along their track, the two hero numbers count up), all
  off under `prefers-reduced-motion`.
- `slides/SiteEmbed.tsx` frames the live site, with buttons for its main
  pages, Expand and New tab (copied from autumn-budget-2026's `DashboardEmbed`).
- `slides/figures.tsx` draws the multiplier dot plot, the income-tax path,
  the Bank Rate bars and the module map (HTML, CSS and SVG, no chart
  library), and renders the example equations with KaTeX.
- `module-links.json` holds the links between the model's modules, and
  `module-links.py` is the script that counts them from the OBR's listing:
  `python module-links.py /path/to/obr-macroeconomic-model module-links.json`.
  For each pair of modules it counts the equations in the target module whose
  right-hand side uses a variable the source module determines. The script
  also defines the three groups the slide draws (demand: consumption,
  investment and inventories, exports, imports, GDP and output; supply and
  prices: labour market, prices and wages, North Sea oil; income and sectors:
  income accounts, public sector, balance of payments, finance and balance
  sheets) and counts the same thing between groups, an equation counting
  once per source group. The slide shows the six group-to-group counts as
  arrows, and four module-level links inside the demand group, dashed.
- `SPEAKER-NOTES.md` gives the presenter track, the detail behind each slide,
  its sources (the slides carry no source line) and what not to claim. It
  also holds the live-demo checklist and the next steps to propose, which
  are no longer slides.

Run `bun install --frozen-lockfile`, then
`bun dev`. Open
`http://localhost:3000/slides/nef-2026`. Arrow keys, Page Up and Page Down
(a clicker) move between slides. Export with
`bun run export nef-2026 /path/to/output.pdf`.

## Evidence

Checked on 18 November 2026:

- `PolicyEngine/obr-macroeconomic-model` main
  `0fe04c9afa8e4e316d24bae40aacc9bba9cd5084`, after #70 (opt-in VAT price
  pass-through and the capital-spending investment closure), #71 (household
  taxes held on their data path) and #72 (docs and caveats). Every OBR-model
  number comes from this repo: the README limits table,
  `docs/calibration_scorecard.md`, `docs/demo.md`,
  `results/demo_shocks.json` (model commit `f0f61c5`, the #70 branch; demo.md
  says defaults are unchanged by it) and `results/site_figures.json`. The
  module counts and links on slide 5 and the example equations on
  slide 7 come from
  the OBR's listing in that repo
  (`obr_macro/_data/obr_model_code_october_2025.txt`) and what
  `obr_macro/transpiler.py` reads and emits for it; `content.ts` records how
  the listing's groups map to the 12 modules.
- `PolicyEngine/macro` main `2e5dffe7a2b35d189c8df60ff2012abbdb675367`, after
  #275: the README model table, the model comparison
  (`models/index.html`), the Use page (`connect/index.html`), and the tool counts
  (28 `@mcp.tool` functions in `mcp_server.py`, 27 `@main.command` functions
  in `cli.py`; the README's own count of 26 tools is stale).

Where the two repos disagree, the model repo wins: at `2e5dffe7` the macro
site's OBR page still quotes the pre-#71 free-running GDP error (4.25%) and
calls capital spending dead without the #70 investment-closure route.

What the deck deliberately does not claim:

- the free-running GDP error (4.05%) is not an OBR forecast error, and the
  anchored error (0.44%) is not forecast skill;
- the held-add-factor forecast fit (0.35% GDP) is left off the slides: the
  forecasting framework calls its GDP line "close to circular";
- no DEFINE-UK results or multiplier: which one to headline is an open
  decision;
- no result numbers on the Claude slide: it shows the steps and the tools;
- no poverty figures: the platform's population tool returns decile changes and
  winners and losers, not poverty rates (slide 19 names poverty as something
  the microsimulation itself reports, with no number);
- nothing in Thibault's name beyond the review's own wording: the three
  headline points on slide 6 use the text of
  `docs/published_model_review.md` (H1, R1, V2), and the deck attributes no
  views or plans to him.
