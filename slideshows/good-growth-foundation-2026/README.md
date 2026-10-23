# PolicyEngine UK: an introduction, 23 October 2026

10 slides at `/slides/good-growth-foundation-2026`: an introduction to
PolicyEngine UK for the Good Growth Foundation, for a 20 to 30 minute slot.

1. Title
2. What PolicyEngine is (the rules, the households and the results)
3. How microsimulation works (six build steps)
4. What the UK model covers
5. From surveys to a population that represents the UK (the data)
6. What the weights are calibrated to (UK calibration targets)
7. A targeted energy bill discount (an analysis example)
8. Recent UK research
9. Who uses PolicyEngine UK
10. Thank you, with the Autumn Budget webinar invitation and its registration QR code

Slides 2 and 9 come from the 9 October introduction deck
(`introduction-2026`, policyengine-slides #77); slide 2 merges its "What
PolicyEngine is" and "How it works" slides. Slides 5 and 7 come from the
Scottish Government deck of the same day (`scottish-government-2026`), told
for the whole UK: the pipeline drops the Scotland-only stage, and the decile
chart covers Great Britain. Slide 3 follows the microsimulation walkthrough in
the UK event 2025 deck (`model-scope`, slide 2), with illustrative households
and figures rather than survey records.

- `config.ts` controls the slide order and meeting metadata.
- `content.ts` holds the sources, model coverage, pipeline stages, energy
  figures and the community list, with a comment on where each comes from.
- `slides/index.tsx` contains the slides; `slides/figures.tsx` draws the
  pipeline, the target table and the two energy charts in HTML;
  `slides/microsim.tsx` is the walkthrough, which reveals one step per build.

Figures and sources:

- Model coverage is read from the policyengine-uk 2.146.6 parameter tree;
  732 of its 795 parameter files carry a reference, and its YAML tests hold
  over 4,000 cases.
- The pipeline and target table cite Microcosm at the commit the Scottish
  Government deck used (main on 8 October 2026). The table groups the 31
  families of the national target references (1,231 rows) and the six of the
  local ones (20,885 rows), with one row count for each dataset: the
  local-area dataset binds every national target as well as its own. The
  national file has held over 1,000 rows in every build since the 4 October
  release.
- The energy figures are the Resolution Foundation's flat option in 2026-27
  from uk-energy-reforms 14bf3b0 (Microcosm UK 2024-25 national release,
  policyengine-uk 2.102.3), and match the dashboard's data file. The slide
  shows the Great Britain total, the eleven regions (each with an effective
  sample of 273 to 734 households) and national income deciles; it leaves
  poverty changes out.
- Recent research shows the eight newest UK items on
  policyengine.org/uk/research on 23 October 2026, newest first, with covers
  from policyengine-app-v2 (`website/public/assets/posts`).

The closing slide invites the audience to the Autumn Budget 2026 webinar
(Wednesday 28 October, 4:30pm UK time), as announced on the policyengine.org
home page. `public/images/good-growth-foundation-2026/qr-autumn-budget-webinar.svg`
encodes the Zoom registration link; it was generated locally with segno and
checked by decoding it from slide screenshots at three screen sizes.

Logos in `public/logos/orgs/` come from the introduction deck, except NIESR's,
which comes from policyengine-app-v2. The community grid leaves out the Good
Growth Foundation itself.
