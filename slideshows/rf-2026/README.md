# PolicyEngine UK and the Resolution Foundation's modelling, 30 November 2026

25 slides at `/slides/rf-2026`, for a video call with the Resolution
Foundation. The deck is private (`private: true`): the page asks for the
deck password. Its title and description still show on the home page, and
this folder is public on GitHub, so everything here is written to be read
publicly.

Six parts, shown by the part tracker along the top of every slide; there
are no divider slides. Tables have horizontal rules only; status tags sit in
the body, never beside a title. Presenter notes, including the full text of
every shortened table cell, are in [NOTES.md](NOTES.md).

1 · Introduction

1. PolicyEngine UK and the Resolution Foundation's modelling (title)
2. In brief
3. Who we are

2 · The model and the data

4. PolicyEngine UK computes household incomes after taxes and benefits
5. How the rules are encoded
6. What the UK model covers
7. Microcosm UK 2024–25: how the household file is built
8. How far results break down

3 · The Nuffield Foundation grants

9. What the Nuffield Foundation grants funded
10. The Autumn Budget 2026 dashboard, by constituency (live page; a
    summary card in a PDF export)

4 · The Resolution Foundation's research and the IPPR model

11. The Resolution Foundation's 2026 research we have read
12. How the Resolution Foundation projects incomes, as we read it
13. Each published use of the IPPR model, mapped to PolicyEngine: analyses
14. Each step of the projection method, mapped to PolicyEngine
15. A Resolution Foundation proposal already modelled: the targeted energy
    bill discount

5 · How PolicyEngine compares

16. The data: PolicyEngine, the IPPR model and UKMOD
17. The rules engine and access: PolicyEngine, the IPPR model and UKMOD
18. Calibration: weights fitted to official statistics
19. Autumn Budget 2026: PolicyEngine's costings beside the OBR's
20. What we do not claim, and known limits

6 · Routes in and a possible pilot

21. Routes in for teams that don't write Python
22. Three ways the Resolution Foundation could use PolicyEngine
23. A possible pilot: one published analysis, side by side
24. Questions for discussion
25. Thank you

## Files

- `config.ts`: slide order, build steps (live only; every slide is one page
  in a PDF export) and the meeting metadata.
- `content.ts`: every figure, label, status tag and source, with a comment
  on where each comes from, and a `sources` map of links pinned to commits
  or publication dates.
- `slides/index.tsx`: the slides and their building blocks (part tracker,
  frame, flow, rules-only table, status tag, logo cell), adapted from the
  BIST deck (`slideshows/bist-2026`).
- `slides/deck.module.css`: copied from the BIST deck, with classes added at
  the end for the tables, the calibration and costing slides and the
  closing credit; logo captions may wrap to two lines.
- `slides/Reveal.tsx`, `slides/Embed.tsx`: unchanged from the BIST deck.

## Where the figures come from

- **Microcosm UK data (slides 7, 16, 18)**: one build only, the certified
  national build of 15 November 2026 (fcfac709, policyengine.py 6.20.1), as
  the BIST deck (commit ed87705) and the public calibration dashboard
  report it.
- **Rule-base counts (slide 5)**: policyengine-uk 2.179.0, from the BIST
  deck; the programme registry line from `programs.yaml` at 2.180.0.
- **Coverage (slide 6)**: `programs.yaml` at policyengine-uk 2.180.0.
- **Mapping tables and routes (slides 13, 14, 21)**: code read on
  25 November 2026 at policyengine-uk 5987eb3, microcosm cac12ab,
  policyengine.py 81bac43 and policyengine-app-v2 d27867f. These describe
  what the code can do, not a build's results.
- **Nuffield grants (slide 9)**: the Nuffield project page for grant 1 and
  policyengine.org/uk/supporters.
- **RF reports and method (slides 11, 12)**: the reports and their figure
  notes, each dated; the method from the Living Standards Outlook 2026,
  Annex 1.
- **IPPR model and UKMOD cells (slides 16, 17)**: the Scottish
  Government's 2018 description and Manchester Metropolitan University's
  staff page for the IPPR model; CeMPA's 2026 UKMOD country report and
  microsimulation.ac.uk for UKMOD.
- **Results run on other builds**, each with a run label on its slide:
  Autumn Budget 2026 against the OBR (slides 10, 19: policyengine 6.11.1,
  Microcosm build of 25 October 2026, as published 31 October); the Billing
  me softly dashboard (slide 15: policyengine-uk 2.102.3); the scorecard's
  like-for-like rows (slide 20: policyengine-uk 2.132.6, Microcosm build of
  19 October 2026).
- **Scorecard (slides 9, 20)**: policyengine-scorecard 771c028
  (`app/public/data/lanes.json` and `populations.json`).

## Decisions

- One Microcosm build for every data figure; results from other builds
  always carry a run label.
- Status tags: Done, Partly, Not yet; muted Preview (the Claude connector),
  In-sample (calibration), Outside the model, and Being checked (one cell on
  slide 9). No tally of statuses anywhere.
- Table cells on slides 13, 14, 16 and 17 are shortened to fit; the full
  wording is in NOTES.md. The method flow on slide 12 is shortened the same
  way.
- HM Treasury's 2024 trial is stated once, as its record has it (slide 3
  caption, slide 20).
- TAXBEN has no column: too little is published for a fair one. NOTES.md
  says so on slide 17.
- Slide 10 gives no count of Budget measures, because sources differ.
- The 1p basic-rate comparison is left off slide 19 until the build behind
  it is named.
- The Nuffield credit on the closing slide follows the Autumn Budget 2026
  deck: "Funded by" with the Foundation's white logo.
- The config description is shorter than first drafted, to fit the
  200-character limit the registry tests set.

## Open checks

- Nuffield: whether the London event of 3 November 2025 counts under grant
  1 (slide 9, "Being checked"); whether each "Done" area on slide 9 was
  delivered inside grant 1's dates (the column is headed "What exists
  today"); grant 2's end date (June 2029) against the Nuffield page;
  whether Nuffield's disclaimer wording is needed beside "Funded by"; what
  AI interface work counts under grant 1; whether the scorecard counts as
  grant 1's comparison dashboard.
- Scorecard: re-read the counts at the commit shown and how it quotes RF's
  and the IPPR model's figures before the meeting.
- Mapping rows to confirm in code: A7 (whether "The adjusted Triple Lock"
  post is a model costing; NOTES.md only), A8 (running the file on
  counterfactual earlier paths), B4 (series for dividends and property
  income), B5 (no minimum-wage floor), B7 (AHC deflator), B10 (nothing in
  policyengine.py anchors to outturn), sanctions in PolicyEngine (slide 14
  foot), and whether alcohol, tobacco and gambling duties should be
  "partial" in the registry.
- Billing me softly: which benefits its non-take-up estimate covers; the
  dashboard pin (policyengine-uk 2.102.3) and its Microcosm build.
- 1p basic-rate comparison: the build and ready-reckoner edition, before it
  goes back on slide 19.
- Comparison cells: UKMOD's FRS year, sample size, wealth variables and
  projection years; the exact title of CeMPA's 2026 country report; any
  public description of the IPPR model newer than 2018; whether Home
  economics states the model it used; whether RF's top-income treatment can
  be described more precisely than "HBAI incomes".
- Sources without a pinned link in `content.ts`: Counting the cost, What a
  ratchet, CeMPA's 2026 country report and the JRF note of June 2026 are
  cited by title and date.
- How a user switches off the two default responses (capital gains,
  employer NI).
- RF figures and figure numbers: re-read against the published PDFs.
- The Claude connector's status on the day.
- Slide 10's live frame: load it once on the day (it needs a network
  connection); no view button opens the constituency map tab directly, so
  open that tab inside the frame.
- Re-read the version pins on the morning of the meeting.

## Exporting

Private decks need the password at build and export time:

```bash
NEXT_PUBLIC_PRIVATE_PASSWORD=... bun run export rf-2026 rf-2026.pdf --size 1440x810 --scale 2
```
