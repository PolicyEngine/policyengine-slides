# BLS TAXSIM seminar

Local route: `/slides/bls-taxsim-2026`.

19 slides, with 51 minutes of presentation time (about 9 minutes of slack) and a dedicated final slide for 30 minutes of Q&A.

Agenda: introduction (10 min), the emulator (6 min), live demonstration (13 min), validation (10 min), benefit imputation (7 min), CE pilot (5 min), Q&A (30 min).

- `content.ts`: slide copy, timing, sources, speaker notes, screenshots and live embeds.
- `slides/index.tsx`: React rendering with the repository’s shared slide components. The cover uses the shared `CoverSlide` with speaker headshots.
- `slides/PEIntroSlides.tsx`: PolicyEngine introduction (slides 3–5), adapted from the cpid-webinar-2026 and gettsim-2026 decks.
- `slides/LiveEmbed.tsx`: live iframe with a side column of demo steps (slides 9 and 12).
- `slides/ProcessFlow.tsx`: step-card processes with optional figures, real examples and who-provides-what columns (slides 11, 13 and 18).
- `slides/DetailContent.tsx`: a table layout with a footnote; no slide uses it at present.
- `slides/Visuals.tsx`: the NBER partnership: TAXSIM on the left, the agreement and year routing in the middle, PolicyEngine on the right (slide 6), the drop-in code swap (slide 7), the routing diagram: one input file, two engines by tax year, one output file (slide 8), the three-calculations triangle with the validation steps beside it (slide 10), imputation sources (slide 14), resource bars (slide 15), cards with a headline figure (slide 16), the comparison diagram (slide 17), and questions with resource links (slide 19). `BenefitChains` is kept but no slide uses it at present.
- `SPEAKER-NOTES.md`: readable presenter track and preparation checklist, kept in step with `content.ts`.
- `VALIDATION-SCRIPT.md`: full speaker script for the validation section (slides 10–13, 10 minutes).

The live demo runs the 3-household sample in the web runner at policyengine.org/us/taxsim/run, after the core assumptions and before validation. The validation section starts with the four steps that resolve a disagreement beside the three calculations (TAXSIM, PolicyEngine and third-party validators such as TaxAct and Axiom) and the law as the arbiter, then covers how resolved cases shape the emulator, the live public dashboard at policyengine.org/us/taxsim/dashboard, and our progress with recent issues. The CE pilot and benefit extension are proposals, not completed implementations.

The example results on slide 8 come from real policyengine-taxsim 3.0.1 runs, and the numbers on slide 15 come from PolicyEngine US 2.25.2, all run on October 5, 2026. The figures on slide 13 come from the policyengine-taxsim GitHub issue tracker on the same day.
