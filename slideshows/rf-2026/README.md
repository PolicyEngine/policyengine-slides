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
2. In brief (the six parts, and the two answers up front)
3. Who we are

2 · The Nuffield Foundation grants

4. The Nuffield Foundation grants: what they named and what exists today
5. The Autumn Budget 2026 dashboard, by constituency (live page; a
   summary card in a PDF export)

3 · The model and the data

6. PolicyEngine UK computes household incomes after taxes and benefits
7. How the rules are encoded
8. What the UK model covers
9. Microcosm UK 2024–25: how the household file is built
10. How far results break down

4 · The Resolution Foundation's research and the IPPR model

11. The Resolution Foundation's 2026 research we have read
12. How the Resolution Foundation projects incomes, as we read it
13. RF's published analyses, mapped to PolicyEngine
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

21. Four routes in: web app, assistant, plugin, Python
22. Three ways the Resolution Foundation could use PolicyEngine
23. A possible pilot: one published analysis, side by side
24. Questions for discussion
25. Thank you

The spoken path, about 14 minutes, is 1, 2, 4, 12, 13, 14, 9, 19 (with one
line of 20), 22 and 23, and 24; NOTES.md has the timings.

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

- **Microcosm UK data (slides 9, 16, 18)**: one build only, the certified
  national build of 15 November 2026 (fcfac709, policyengine.py 6.20.1), as
  the BIST deck (commit ed87705) and the public calibration dashboard
  report it.
- **Rule-base counts (slide 7)**: policyengine-uk 2.179.0, from the BIST
  deck; the programme registry line from `programs.yaml` at 2.180.0.
- **Coverage (slide 8)**: `programs.yaml` at policyengine-uk 2.180.0.
- **Mapping tables and routes (slides 13, 14, 21)**: code read on
  25 November 2026 at policyengine-uk 5987eb3, microcosm cac12ab,
  policyengine.py 81bac43 and policyengine-app-v2 d27867f. These describe
  what the code can do, not a build's results.
- **Nuffield grants (slide 4)**: the Nuffield project page for grant 1,
  policyengine.org/uk/supporters, and PolicyEngine's event report of
  10 November 2025 for the London event.
- **RF reports and method (slides 11, 12)**: the reports and their figure
  notes, each dated; the method from the Living Standards Outlook 2026,
  Annex 1.
- **IPPR model and UKMOD cells (slides 16, 17)**: the Scottish
  Government's 2018 description, CeMPA working paper 7/21 and Manchester
  Metropolitan University's staff page for the IPPR model; CeMPA's UKMOD
  Country Report 2023–2030 (working paper 8/26, April 2026) and
  microsimulation.ac.uk for UKMOD.
- **Results run on other builds**, each with a run label on its slide:
  Autumn Budget 2026 against the OBR (slides 5, 19: policyengine 6.11.1,
  Microcosm build of 25 October 2026, as published 31 October); the Billing
  me softly dashboard (slide 15: policyengine-uk 2.102.3); the scorecard's
  like-for-like rows (slide 20: policyengine-uk 2.132.6, Microcosm build of
  19 October 2026); the £46k example (slide 20: policyengine-uk 2.89.2, the
  dataset before Microcosm).
- **Scorecard (slides 4, 20)**: policyengine-scorecard 771c028
  (`app/public/data/lanes.json` and `populations.json`).

## Decisions

- Part order: Nuffield second, so the first of the two questions is
  answered by minute 2; slide 2 states both answers up front, with no tally
  of statuses.
- One Microcosm build for every data figure; results from other builds
  always carry a run label.
- Behaviour has one wording everywhere (slides 6, 14, 17, 19, 20 and the
  notes): no labour-supply response by default; two responses are on
  (capital gains realisations, employer NI passed through to pay).
- Status tags: Done, Partly, Not yet; muted Preview (the Claude connector),
  In-sample (calibration), Outside the model, and Different method (savings
  income on slide 14). No tally of statuses anywhere.
- Slide 4 is headed "what exists today" and its foot says it does not show
  what was delivered within the grant period. The London event is shown as
  an event, not as a grant deliverable.
- Slide 13 lists RF's published analyses; slide 14 follows slide 12's five
  steps, then a separate group, "Also in RF's analysis", for rows outside
  them (indirect taxes, Council Tax Support, running PolicyEngine's rules
  on RF's own file).
- Slide 12 marks step 3 as largely the IPPR model's, as Annex 1 says
  ("largely through the IPPR Tax Benefit Model"), with the WAS savings
  imputation RF's own.
- Slide 19 shows all seven measures, each with its year (2026–27 for the
  three with a figure that year; 2029–30 for the three income tax
  measures; 2031–32 for the Carer's Allowance taper), a main reason
  per row ("not yet explained" where the briefing gives none) and
  like-for-like rows: the Pension Tax Allowance as income tax only and the
  Carer's Allowance taper before income tax, each footnoted with its net
  figure. Fuel duty is footnoted: the OBR used the government's estimate.
- Slide 20's centre panel is "the only like-for-like model runs against
  RF", with the run label naming RF's report and PolicyEngine's build, and
  a note that most of the 755 rows ran on the earlier dataset.
- IPPR model column: headed "what we found published", with "please
  correct us"; empty cells read "Not found in published sources". No quote
  from the 2018 description.
- UKMOD column: headed "as we read CeMPA's 2026 country report".
- Think tanks on slide 3: only those with a public source.
- Table cells on slides 13, 14, 16 and 17 are shortened to fit; the full
  wording is in NOTES.md. The method flow on slide 12 is shortened the same
  way. Commit hashes and file pins sit in the notes, except the "Checked
  against" foot on slide 13 and the version labels on slides 7 and 15.
- HM Treasury's pilot is stated as its record has it (slide 3 caption,
  slide 20), with no year the record does not give.
- TAXBEN has no column: too little is published for a fair one. NOTES.md
  says so on slide 17.
- Slide 5 gives no count of Budget measures, because sources differ.
- The 1p basic-rate comparison is left off slide 19 until the build behind
  it is named.
- Slide 23 gives an indicative scope (one chart; who does what; about two
  short calls) and no dates, prices or commitments.
- The Nuffield credit on the closing slide follows the Autumn Budget 2026
  deck: "Funded by" with the Foundation's white logo.
- The config description is shorter than first drafted, to fit the
  200-character limit the registry tests set.

## Open checks

- Nuffield: whether each area on slide 4 was delivered inside grant 1's
  dates (the slide says it shows what exists today); grant 2's end date
  (June 2029) against the Nuffield page; whether Nuffield's disclaimer
  wording is needed beside "Funded by"; what AI interface work counts
  under grant 1; whether the scorecard counts as grant 1's comparison
  dashboard; whether training and beta testing have a public record.
- Slide 3: confirm that Mosley and Cornforth (2023) is NIESR work (the
  caption says only that it used NIESR's NiGEM).
- Scorecard: re-read the counts at the commit shown before the meeting.
- Slide 18: the raw FRS 2024–25 household count, as a comparator for
  78,164 records and an effective sample of about 7,400, once sourced.
- Slide 19: the Pension Tax Allowance net cost in the briefing's Table 6
  equals the OBR's income tax line in 2028–29 and 2029–30; confirm that it
  is a coincidence and not a copying error in the briefing.
- Slide 19: the briefing calls the dashboard's run static, while the deck's
  one behaviour wording says two responses are on by default; confirm
  whether the run kept them on (neither is likely to touch these
  measures).
- Slide 16: whether UKMOD's regional models use reweighted data (not found
  in the 2026 country report); whether its input data hold any wealth
  variables.
- Mapping rows to confirm in code: A7 (whether "The adjusted Triple Lock"
  post is a model costing; NOTES.md only), A8 (running the file on
  counterfactual earlier paths), B4 (series for dividends and property
  income), B5 (no minimum-wage floor), B7 (AHC deflator), B10 (nothing in
  policyengine.py anchors to outturn), B12 (running PolicyEngine's rules on
  an outside file has not been tried on an RF-shaped file), and whether
  alcohol, tobacco and gambling duties should be "partial" in the registry.
- Billing me softly: which benefits its non-take-up estimate covers; the
  dashboard pin (policyengine-uk 2.102.3) and its Microcosm build.
- 1p basic-rate comparison: the build and ready-reckoner edition, before it
  goes back on slide 19.
- Comparison cells: any public description of the IPPR model newer than
  2018; whether Home economics states the model it used; whether RF's
  top-income treatment can be described more precisely than "HBAI
  incomes".
- Sources without a pinned link in `content.ts`: Counting the cost (RF's
  2019 report of the same name is not linked), What a ratchet, CeMPA's
  2026 country report and the JRF note of June 2026 are cited by title and
  date.
- RF figures and figure numbers: re-read against the published PDFs.
- The Claude connector's status on the day.
- Slide 5's live frame: load it once on the day (it needs a network
  connection); no view button opens the constituency map tab directly, so
  open that tab inside the frame.
- Re-read the version pins on the morning of the meeting.

## Exporting

Private decks need the password at build and export time:

```bash
NEXT_PUBLIC_PRIVATE_PASSWORD=... bun run export rf-2026 rf-2026.pdf --size 1440x810 --scale 2
```
