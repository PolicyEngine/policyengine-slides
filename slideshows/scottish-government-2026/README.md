# Scottish Government meeting, 9 October 2026

18 slides at `/slides/scottish-government-2026`, in five parts, each opened by a
section slide:

1. How we build the UK's microdata: the pipeline with the sources that feed
   each stage, the Scottish target table and live diagnostics (slides 3–6)
2. Modelling property income: a waterfall of what each source measures, and the
   steps that build landlords' income (slides 7–9)
3. An analysis example: the targeted energy bill discount, by region and across
   Scotland's income distribution (slides 10–11)
4. Published work since April (slides 12–14)
5. Plan for the Autumn Budget (slides 15–17)

The deck follows two earlier Scottish Government presentations in
`PolicyEngine/policyengine-demo`:

- [February, PR #1](https://github.com/PolicyEngine/policyengine-demo/pull/1)
  (commit `c927448b371013ee428acdb3f2e407b27a01adbe`): methodology, the Enhanced
  FRS pipeline, the 1,428 Scotland calibration targets and the Scottish Budget
  2026-27 dashboard.
- [March, PR #2](https://github.com/PolicyEngine/policyengine-demo/pull/2)
  (commit `159b8bcc469bcee8681972b6046636dfbfc241b0`): Spring Statement 2026,
  research from February and March, and the Claude plugin.

It doesn't repeat that material. Part 1 is framed as what changed since
February, and part 4 starts in April.

## Editing and presenting

- `config.ts` controls the slide order and meeting metadata.
- `content.ts` holds the pinned sources, tables, publication cards and Budget plan.
- `slides/index.tsx` contains the slides.
- `slides/figures.tsx` draws the pipeline graph, the target table, the property
  income waterfall and step diagram, and the two energy charts (HTML and CSS, no chart
  library). The pipeline and target table follow
  [l0-ima-2026](https://github.com/PolicyEngine/policyengine-slides/tree/main/slideshows/l0-ima-2026).
- `SPEAKER-NOTES.md` gives the presenter track, sources and what not to claim.
- Presenter headshots come from `lib/speakers` (Vahid's is from the app-v2 team page).
- Cover images for part 4 are in `public/screenshots/scottish-government-2026/`,
  copied from `policyengine-app-v2` (`app/public/assets/posts/`) and resized.
  `autumn-budget-2025-in-review.jpg` is a 1600×1000 screenshot of the live review
  dashboard, taken on 8 October 2026.

Run `bun install --frozen-lockfile`, then `bun dev`. Open
`http://localhost:3000/slides/scottish-government-2026`. Arrow keys move between
slides and `F` enters fullscreen. Links open in a new tab. Export with
`bun run export scottish-government-2026 /path/to/output.pdf`.

Slide 6 embeds the UK calibration diagnostics site and links to it separately.
The iframe is interactive and scrolls independently; use the deck's next-slide
button to leave it. On 8 October the page loaded, but the UK release and summary
API endpoints returned HTTP 502. The preceding Scottish target table remains
available without the external site. Check the live dashboard before presenting.

Slide 11 charts the targeted energy bill discount and links its dashboard. Slide
16 links both the 2025
Budget dashboard and [Autumn Budget 2025 in review](https://github.com/PolicyEngine/autumn-budget-2025-in-review),
including its public review dashboard.

## Evidence and status

Checked on 8 October 2026:

- Microcosm main `75167a688ea83316654f1d794542124b4277bda9` and policyengine-uk
  main `f1a9a3cc2885a42e58484d335e8ba0a02509f749`.
- Publications: `policyengine-app-v2` main `c83e129de5b14c0972f3070617490e8100e8fcc8`
  (`app/src/data/posts/posts.json` and `app/src/data/apps/apps.json`). Every
  link on the slides returned HTTP 200.
- Autumn Budget 2026 repository: `eb77d72b5e353b0cb85fecaf806f3a081753bbfa`.
  It still contains the inherited 2025 measures, so part 5 is a plan.
- Scottish target inventory at the pinned Microcosm commit: 58 national rows for
  `S92000003`; 831 local-authority rows across 32 Scottish councils; 1,026
  constituency rows across 57 Scottish Westminster constituencies. Counts refer
  to target definitions, rather than passed fit checks. Council-tax band H has
  31 local-authority rows; other council-tax bands have 32.

- Property income: HMRC Property Rental Income Statistics 2026 (individual
  landlords, 2024-25: rent received £49.81bn, expenses £30.03bn; finance costs
  pro-rated from all landlords' £12.82bn of £34.75bn). The step diagram
  follows Microcosm #1145 as of 8 October, with HMRC's rental statistics kept as
  a check rather than a calibration target.
- Energy discount: `uk-energy-reforms` main `14bf3b0afc121b092bbd7545c9fb4963e8ab5c72`,
  results for 2026-27, Resolution Foundation flat option (`rf_flat`), Microcosm
  UK national release (`aa31bdf6`), policyengine-uk 2.102.3. Region rows are the
  published `by_region` results. Scotland's deciles were computed from the same
  run, after checking that it reproduces the published GB deciles and Scotland's
  region row; each decile's effective sample is 38 to 102 households.

What the deck deliberately does not claim:

- no constituency or council fit figures: the local release isn't certified;
- no property income results from the #1145 test builds: the decisions are
  still open;
- nothing about Scotland setting its own property income rates;
- no VAT or fuel duty totals from the certified release, which are being fixed
  in open policyengine-uk pull requests.
