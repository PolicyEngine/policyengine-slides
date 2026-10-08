# Scottish Government meeting, 9 October 2026

12 slides at `/slides/scottish-government-2026`.

The deck covers the Microcosm UK pipeline, a reserved property-income slide,
and a proposed Autumn Budget 2026 workflow. The final slide summarises recent
UK research, including interactive studies listed alongside articles.

## Editing and presenting

- `config.ts` controls the slide order and meeting metadata.
- `content.ts` holds the pipeline, source table, Budget plan and research links.
- `slides/index.tsx` contains the editable React slides.
- `SPEAKER-NOTES.md` gives the presenter track and slide-specific sources.

Run `bun install --frozen-lockfile`, then `bun dev`. Open
`http://localhost:3000/slides/scottish-government-2026`. Arrow keys move between
slides, and `F` enters fullscreen. Source and research links open in a new tab.
Export with `bun run export scottish-government-2026 /path/to/output.pdf`.

Slide 8 deliberately contains no property-income methodology or results. Replace
`PropertyIncomeSlide` when the in-flight modelling PR is ready. Confirm presenters
and timing before adding speaker metadata.

## Earlier Scottish Government presentations

The two supplied Vercel preview URLs did not return usable content through the
web lookup. The source remains available in `PolicyEngine/policyengine-demo`:

- [February presentation, PR #1](https://github.com/PolicyEngine/policyengine-demo/pull/1),
  branch `scottish-government-presentation`, commit
  `c927448b371013ee428acdb3f2e407b27a01adbe`.
- [March update, PR #2](https://github.com/PolicyEngine/policyengine-demo/pull/2),
  branch `scottish-government-march-2026`, commit
  `159b8bcc469bcee8681972b6046636dfbfc241b0`.

The February deck's `DataMethodologySlide`, `ScotlandCalibrationSlide` and
`ScottishBudgetSlide` establish the earlier methodology and Scotland emphasis.
The March deck's `AlsoFromPESlide` provides the precedent for a recent-research
summary. This deck uses current Microcosm documentation rather than carrying
forward the earlier survey vintages or target counts.

## Evidence and status

Sources were checked on 8 October 2026:

- Microcosm: `e3e3d881f0fdaf8d4796dea25ed4b72deb52cb6e`, especially the UK
  full-build graph, source manifest, FRS release pin and release assembly runbook.
- Autumn Budget 2026 repository: `eb77d72b5e353b0cb85fecaf806f3a081753bbfa`.
  Its application still contains inherited 2025 measures and data. Slides 10–11
  describe a proposed plan, not completed 2026 analysis or announced measures.
- Research metadata: `policyengine-app-v2` at
  `c83e129de5b14c0972f3070617490e8100e8fcc8`, using both
  `app/src/data/posts/posts.json` and `app/src/data/apps/apps.json`.
- The 2025 dashboard screenshot is a live capture from
  <https://www.policyengine.org/uk/autumn-budget-2025> on 8 October 2026.
  It illustrates the interface. The deck does not treat its historical estimates
  as a forecast for the 2026 Budget.

The Microcosm section distinguishes implemented build mechanics from candidate
certification and production promotion. It makes no claim that the latest
national or local candidate has passed release gates, and gives no unverified
calibration accuracy figures. Research summaries describe the published studies'
questions and policy scenarios, without inventing outcome estimates.
