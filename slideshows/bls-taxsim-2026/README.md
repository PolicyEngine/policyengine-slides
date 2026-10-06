# BLS TAXSIM seminar

Local route: `/slides/bls-taxsim-2026`.

20 slides, with 60 minutes of presentation time and a dedicated final slide for 30 minutes of Q&A.

Agenda: introduction (10 min), the emulator (6 min), live demonstration (13 min), validation (16 min), benefit imputation (10 min), CE pilot (5 min), Q&A (30 min).

- `content.ts`: slide copy, timing, sources, speaker notes, screenshots and live embeds.
- `slides/index.tsx`: React rendering with the repository’s shared slide components. The cover uses the shared `CoverSlide` with speaker headshots.
- `slides/PEIntroSlides.tsx`: PolicyEngine introduction (slides 3–4), adapted from the cpid-webinar-2026 and gettsim-2026 decks, with figures counted on policyengine-us main on October 6, 2026.
- `slides/LiveEmbed.tsx`: live iframe with a side column of demo steps (slides 8 and 11).
- `slides/ProcessFlow.tsx`: step-card processes with optional figures, real examples and who-provides-what columns (slides 10, 13 and 19).
- `slides/DetailContent.tsx`: the notable-cases table (slide 12).
- `slides/Visuals.tsx`: the NBER partnership (slide 5), the drop-in code swap (slide 6), the worked example (slide 7), the three-calculations triangle (slide 9), benefit chains (slide 14), imputation sources (slide 15), resource bars (slide 16), cards with a headline figure (slide 17), the comparison diagram (slide 18), and questions with resource links (slide 20).
- `SPEAKER-NOTES.md`: readable presenter track and preparation checklist, kept in step with `content.ts`.
- `VALIDATION-SCRIPT.md`: full speaker script for the validation section (slides 9–13).

The live demo runs the 3-household sample in the web runner at policyengine.org/us/taxsim/run, after the core assumptions and before validation. The validation section starts with the three calculations (TAXSIM, PolicyEngine and TaxAct) and the law as the arbiter, then covers the comparison process, the live public dashboard at policyengine.org/us/taxsim/dashboard, two notable cases (one-time rebates and S-corporation income), and how a reported difference becomes a fix. The CE pilot and benefit extension are proposals, not completed implementations.

The numbers on slide 7 come from a real policyengine-taxsim 3.0.1 run, and the numbers on slides 14 and 16 come from PolicyEngine US 2.25.2, all run on October 5, 2026. The figures on slide 13 come from the policyengine-taxsim GitHub issue tracker on the same day. The notable cases on slide 12 come from policyengine-taxsim issues #1068 and #1053 and PRs #1070, #1074 and #1199.
