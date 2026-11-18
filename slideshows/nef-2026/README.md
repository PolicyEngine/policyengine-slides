# New Economics Foundation meeting, November 2026

29 slides at `/slides/nef-2026`, for a meeting with the New Economics
Foundation (NEF) on working together on the OBR macroeconomic model. The deck is
public. Slide 20 embeds the in-development macro site
(policyengine-macro.vercel.app) live; the site allows this deck's origins to
frame it (PolicyEngine/macro#276). The exact meeting date isn't fixed, so `config.ts` uses
`2026-11-01`, which renders as "November 2026"; change it, and the footer,
once the date is set.

Five parts, after a title and an agenda:

1. The OBR model in Python: why an open version, what the OBR publishes and
   what we built, the inputs, how it runs, and Thibault's review of the published code
   and our answer (slides 3–10)
2. How well it fits: anchoring to the October 2026 EFO, the two numbers that
   are easy to misread, and the free-running scorecard (slides 11–13)
3. Policy shocks and limits: results against the OBR's published multipliers,
   income tax, corporation tax and capital spending, Bank Rate, and the known
   limits (slides 14–18)
4. The macro platform: the seven models, the site live, a DEFINE-UK green investment example,
   the forecast record, code and AI-agent access, and the link from
   microsimulation to the OBR model (slides 19–24)
5. Working together: a demo plan, collaboration areas, questions for NEF and
   proposed next steps (slides 25–28)

It follows PolicyEngine's July 2025 deck for NEF, which covered the
tax-benefit microsimulation (`NEF x PolicyEngine.pptx` in the private
`PolicyEngine/obr-presentation` repo, commit `f4f819a7`; it isn't linked on
the slides).

## Editing and presenting

- `config.ts` controls the slide order and meeting metadata.
- `content.ts` holds every number on the slides, each with its source pinned
  to a commit, plus the tables and lists.
- `slides/index.tsx` contains the slides.
- `slides/SiteEmbed.tsx` frames the live site, with buttons for its main
  pages, Expand and New tab (copied from autumn-budget-2026's `DashboardEmbed`).
- `slides/figures.tsx` draws the scorecard table, the multiplier dot plot, the
  income-tax bars and the Bank Rate bars (HTML and CSS, no chart library).
- `SPEAKER-NOTES.md` gives the presenter track, the detail behind each slide
  and what not to claim.

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
  says defaults are unchanged by it) and `results/site_figures.json`.
- `PolicyEngine/macro` main `2e5dffe7a2b35d189c8df60ff2012abbdb675367`, after
  #275: the README model table, the model comparison
  (`models/index.html`), the DEFINE-UK page, the forecast record
  (`forecasts/scorecard.json` and `forecasts/index.html`), and the tool counts
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
- the forecast record contains no OBR-emulator forecasts;
- no DEFINE-UK multiplier: which one to headline is an open decision;
- no poverty figures: the platform's population tool returns decile changes and
  winners and losers, not poverty rates.
