# BLS TAXSIM seminar draft

Local route: `/slides/bls-taxsim-2026`.

23 slides, with 60 minutes of presentation time and a dedicated final slide for 30 minutes of Q&A.

Agenda: introduction (10 min), the emulator and its core assumptions (12 min), live demonstration (8 min), validation (15 min), benefit imputation (10 min), CE pilot (5 min), Q&A (30 min).

- `content.ts`: slide copy, timing, sources, speaker notes, screenshots and live embeds.
- `slides/index.tsx`: React rendering with the repository’s shared slide components.
- `slides/LiveEmbed.tsx`: live iframe with a side column of demo steps (slides 11 and 13).
- `slides/ScreenshotContent.tsx`: website captures (slides 5, 6, 10 and 14).
- `SPEAKER-NOTES.md`: readable presenter track and preparation checklist, generated from `content.ts`.

The live demo runs the 3-household sample in the web runner at policyengine.org/us/taxsim/run, after the core assumptions and before validation. The validation section embeds the public dashboard at policyengine.org/us/taxsim/dashboard. Captures in `public/screenshots/bls-taxsim-2026/` were taken on October 5, 2026, and also serve as fallbacks if a frame does not load. The CE pilot and benefit extension are proposals, not completed implementations.

The draft label is editorial, not access control.
