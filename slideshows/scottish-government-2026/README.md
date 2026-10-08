# Scottish Government meeting, 9 October 2026

14 slides at `/slides/scottish-government-2026`, in three sections:

1. New data pipeline and property income (slides 3–7)
2. Published work over the last six months (slides 8–9)
3. Plan for the Autumn Budget (slides 10–13)

The deck follows two earlier Scottish Government presentations in
`PolicyEngine/policyengine-demo`:

- [February, PR #1](https://github.com/PolicyEngine/policyengine-demo/pull/1)
  (commit `c927448b371013ee428acdb3f2e407b27a01adbe`): methodology, the Enhanced
  FRS pipeline, the 1,428 Scotland calibration targets and the Scottish Budget
  2026-27 dashboard.
- [March, PR #2](https://github.com/PolicyEngine/policyengine-demo/pull/2)
  (commit `159b8bcc469bcee8681972b6046636dfbfc241b0`): Spring Statement 2026,
  research from February and March, and the Claude plugin.

It doesn't repeat that material. Section 1 is framed as what changed since
February, and section 2 starts in April.

## Editing and presenting

- `config.ts` controls the slide order and meeting metadata.
- `content.ts` holds the pinned sources, tables, publication cards and Budget plan.
- `slides/index.tsx` contains the slides.
- `SPEAKER-NOTES.md` gives the presenter track, sources and what not to claim.
- Presenter headshots come from `lib/speakers` (Vahid's is from the app-v2 team page).
- Cover images for section 2 are in `public/screenshots/scottish-government-2026/`,
  copied from `policyengine-app-v2` (`app/public/assets/posts/`) and resized.

Run `bun install --frozen-lockfile`, then `bun dev`. Open
`http://localhost:3000/slides/scottish-government-2026`. Arrow keys move between
slides and `F` enters fullscreen. Links open in a new tab. Export with
`bun run export scottish-government-2026 /path/to/output.pdf`.

## Evidence and status

Checked on 8 October 2026:

- Microcosm main `75167a688ea83316654f1d794542124b4277bda9` and policyengine-uk
  main `f1a9a3cc2885a42e58484d335e8ba0a02509f749`.
- Publications: `policyengine-app-v2` main `c83e129de5b14c0972f3070617490e8100e8fcc8`
  (`app/src/data/posts/posts.json` and `app/src/data/apps/apps.json`). Every
  link on the slides returned HTTP 200.
- Autumn Budget 2026 repository: `eb77d72b5e353b0cb85fecaf806f3a081753bbfa`.
  It still contains the inherited 2025 measures, so section 3 is a plan.

What the deck deliberately does not claim:

- no constituency or council fit figures: the local release isn't certified;
- the Microcosm #1145 property income numbers are from a test build, and are
  labelled as such;
- nothing about Scotland setting its own property income rates;
- no VAT or fuel duty totals from the certified release, which are being fixed
  in open policyengine-uk pull requests.
