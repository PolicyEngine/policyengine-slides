# BLS TAXSIM seminar

Local route: `/slides/bls-taxsim-2026`.

21 slides, with 60 minutes of presentation time and a dedicated final slide for 30 minutes of Q&A.

Agenda: introduction (10 min), the emulator (6 min), live demonstration (13 min), validation (16 min), benefit imputation (10 min), CE pilot (5 min), Q&A (30 min).

- `content.ts`: slide copy, timing, sources, speaker notes, screenshots and live embeds.
- `slides/index.tsx`: React rendering with the repository’s shared slide components. The cover uses the shared `CoverSlide` with speaker headshots.
- `slides/PEIntroSlides.tsx`: PolicyEngine introduction (slides 3–5), adapted from the cpid-webinar-2026 and gettsim-2026 decks.
- `slides/LiveEmbed.tsx`: live iframe with a side column of demo steps (slides 9 and 12).
- `slides/ProcessFlow.tsx`: step-card processes with optional figures, real examples and who-provides-what columns (slides 11, 14 and 20).
- `slides/DetailContent.tsx`: the notable-cases table (slide 13).
- `slides/Visuals.tsx`: the NBER partnership (slide 6), the drop-in code swap (slide 7), the worked example (slide 8), the three-calculations triangle (slide 10), benefit chains (slide 15), imputation sources (slide 16), resource bars (slide 17), cards with a headline figure (slide 18), the comparison diagram (slide 19), and questions with resource links (slide 21).
- `SPEAKER-NOTES.md`: readable presenter track and preparation checklist, kept in step with `content.ts`.
- `VALIDATION-SCRIPT.md`: full speaker script for the validation section (slides 10–14).

The live demo runs the 3-household sample in the web runner at policyengine.org/us/taxsim/run, after the core assumptions and before validation. The validation section starts with the three calculations (TAXSIM, PolicyEngine and TaxAct) and the law as the arbiter, then covers the comparison process, the live public dashboard at policyengine.org/us/taxsim/dashboard, two notable cases (one-time rebates and S-corporation income), and how a reported difference becomes a fix. The CE pilot and benefit extension are proposals, not completed implementations.

The numbers on slide 8 come from a real policyengine-taxsim 3.0.1 run, and the numbers on slides 15 and 17 come from PolicyEngine US 2.25.2, all run on October 5, 2026. The figures on slide 14 come from the policyengine-taxsim GitHub issue tracker on the same day. The notable cases on slide 13 come from policyengine-taxsim issues #1068 and #1053 and PRs #1070, #1074 and #1199.
