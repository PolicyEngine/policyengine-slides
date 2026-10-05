# BLS TAXSIM seminar

Local route: `/slides/bls-taxsim-2026`.

23 slides, with 60 minutes of presentation time and a dedicated final slide for 30 minutes of Q&A.

Agenda: introduction (10 min), the emulator and its core assumptions (12 min), live demonstration (10 min), validation (13 min), benefit imputation (10 min), CE pilot (5 min), Q&A (30 min).

- `content.ts`: slide copy, timing, sources, speaker notes, screenshots and live embeds.
- `slides/index.tsx`: React rendering with the repository’s shared slide components.
- `slides/PEIntroSlides.tsx`: PolicyEngine introduction (slides 3–5), adapted from the cpid-webinar-2026 and gettsim-2026 decks.
- `slides/LiveEmbed.tsx`: live iframe with a side column of demo steps (slides 13 and 15).
- `slides/ProcessFlow.tsx`: step-card process diagrams (slides 9, 10, 14, 16 and 22).
- `slides/ScreenshotContent.tsx`: website captures at 4× density (slides 7, 8 and 12).
- `slides/Visuals.tsx`: icon cards (slide 20), the year-coverage bar (slide 11), the comparison diagram (slide 21), and questions with resource links (slide 23).
- `SPEAKER-NOTES.md`: readable presenter track and preparation checklist, generated from `content.ts`.

The live demo runs the 3-household sample in the web runner at policyengine.org/us/taxsim/run, after the core assumptions and before validation. The validation section is a process overview: how the two engines are compared, the live public dashboard at policyengine.org/us/taxsim/dashboard, and how a reported difference becomes a fix. Captures in `public/screenshots/bls-taxsim-2026/` were taken on October 5, 2026. The CE pilot and benefit extension are proposals, not completed implementations.
