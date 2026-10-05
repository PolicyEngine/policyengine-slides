# BLS TAXSIM seminar

Local route: `/slides/bls-taxsim-2026`.

19 slides, with 60 minutes of presentation time and a dedicated final slide for 30 minutes of Q&A.

Agenda: introduction (10 min), the emulator (6 min), live demonstration (13 min), validation (16 min), benefit imputation (10 min), CE pilot (5 min), Q&A (30 min).

- `content.ts`: slide copy, timing, sources, speaker notes, screenshots and live embeds.
- `slides/index.tsx`: React rendering with the repository’s shared slide components.
- `slides/PEIntroSlides.tsx`: PolicyEngine introduction (slides 3–5), adapted from the cpid-webinar-2026 and gettsim-2026 decks.
- `slides/LiveEmbed.tsx`: live iframe with a side column of demo steps (slides 9 and 11).
- `slides/ProcessFlow.tsx`: step-card processes with optional figures, real examples and who-provides-what columns (slides 10, 12 and 18).
- `slides/Visuals.tsx`: the NBER partnership (slide 6), the drop-in code swap (slide 7), the worked example (slide 8), benefit chains (slide 13), imputation sources (slide 14), resource bars (slide 15), cards with a headline figure (slide 16), the comparison diagram (slide 17), and questions with resource links (slide 19).
- `SPEAKER-NOTES.md`: readable presenter track and preparation checklist, generated from `content.ts`.

The live demo runs the 3-household sample in the web runner at policyengine.org/us/taxsim/run, after the core assumptions and before validation. The validation section is a process overview: how the two engines are compared, the live public dashboard at policyengine.org/us/taxsim/dashboard, and how a reported difference becomes a fix. The CE pilot and benefit extension are proposals, not completed implementations.

The numbers on slide 8 come from a real policyengine-taxsim 3.0.1 run, and the numbers on slides 13 and 15 come from PolicyEngine US 2.25.2, all run on October 5, 2026. The figures on slide 12 come from the policyengine-taxsim GitHub issue tracker on the same day.
