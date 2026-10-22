# PolicyEngine UK: an introduction, 23 October 2026

8 slides at `/slides/good-growth-foundation-2026`: an introduction to
PolicyEngine UK for the Good Growth Foundation, for a 20 to 30 minute slot.

1. Title
2. What PolicyEngine is
3. How it works
4. What the UK model covers
5. From surveys to a population that represents the UK (the data)
6. A targeted energy bill discount (an analysis example)
7. Who uses PolicyEngine UK
8. Thank you

Slides 2, 3 and 7 come from the 9 October introduction deck
(`introduction-2026`, policyengine-slides #77). Slides 5 and 6 come from the
Scottish Government deck of the same day (`scottish-government-2026`), told
for the whole UK: the pipeline drops the Scotland-only stage, and the decile
chart covers Great Britain.

- `config.ts` controls the slide order and meeting metadata.
- `content.ts` holds the sources, model coverage, pipeline stages, energy
  figures and the community list, with a comment on where each comes from.
- `slides/index.tsx` contains the slides; `slides/figures.tsx` draws the
  pipeline and the two energy charts in HTML.

Figures and sources:

- Model coverage is read from the policyengine-uk 2.146.6 parameter tree;
  732 of its 795 parameter files carry a reference, and its YAML tests hold
  over 4,000 cases.
- The pipeline cites Microcosm at the commit the Scottish Government deck
  used (main on 8 October 2026). Its national target file has held over
  1,000 rows in every build since the 4 October release.
- The energy figures are the Resolution Foundation's flat option in 2026-27
  from uk-energy-reforms 14bf3b0 (Microcosm UK 2024-25 national release,
  policyengine-uk 2.102.3), and match the dashboard's data file. The slide
  shows the Great Britain total, the eleven regions (each with an effective
  sample of 273 to 734 households) and national income deciles; it leaves
  poverty changes out.

Logos in `public/logos/orgs/` come from the introduction deck. The House of
Lords card shows initials, since the crowned portcullis is a restricted mark,
and the community grid leaves out the Good Growth Foundation itself.
