# BLS TAXSIM seminar

Local route: `/slides/bls-taxsim-2026`.

28 slides, including 5 section dividers, with 58 minutes of presentation time (about 2 minutes of slack) and a dedicated final slide for 30 minutes of Q&A.

Agenda: introduction (12 min), the emulator (6 min), live demonstration (13 min), validation (10 min), beyond TAXSIM (12 min), CE pilot (5 min), Q&A (30 min).

- `content.ts`: slide copy, timing, sources, speaker notes, screenshots and live embeds.
- `slides/index.tsx`: React rendering with the repository’s shared slide components. The cover uses the shared `CoverSlide` with speaker headshots.
- `slides/PEIntroSlides.tsx`: PolicyEngine introduction (slides 4–6), adapted from the cpid-webinar-2026 and gettsim-2026 decks.
- `slides/SectionDivider.tsx`: section openers on the cover gradient, with the section number and title (slides 3, 9, 13, 18 and 25).
- `slides/Origins.tsx`: how the collaboration started: the differential-testing process before the emulator and the milestones up to the agreement (slide 7).
- `slides/InputMapping.tsx`: cards by general area. Slide 19 tells one story per area: the TAXSIM variables, the limit of the TAXSIM format, and the PolicyEngine variables that remove it. Slide 20 joins PolicyEngine concepts to TAXSIM outputs with an arrow and a one-line note. Each ends with a “why it matters” card.
- `slides/DropInTabs.tsx`: the TAXSIM site’s Installation section, centered on top (the title and macOS/Linux and Windows tabs above the commands, with the two install steps one under the other) and its Get started section below (CLI, Python, R, Stata, SAS and Julia tabs, with before and after code), as on policyengine.org/us/taxsim (slide 10). Clicks on the tabs and the Copy buttons do not advance the slide. On screens 820px tall or less, the widget scales down a little so that it fits.
- `slides/LiveEmbed.tsx`: live iframe with a side column of demo steps (slides 12 and 16).
- `slides/ProcessFlow.tsx`: step-card processes with optional figures, real examples and who-provides-what columns (slides 15, 17 and 27).
- `slides/DetailContent.tsx`: a table layout with a footnote; no slide uses it at present.
- `slides/Visuals.tsx`: the NBER partnership: TAXSIM on the left, the agreement and year routing in the middle, PolicyEngine on the right (slide 8), the routing diagram: an example input file, two engines by tax year, an example output file (slide 11), the three-calculations triangle with the validation steps beside it (slide 14), imputation sources (slide 22), resource bars (slide 23), cards with a takeaway (slide 21), cards with a headline figure (slide 24), the comparison diagram (slide 26), and questions with resource links (slide 28). `BenefitChains` is kept but no slide uses it at present.
- `SPEAKER-NOTES.md`: readable presenter track and preparation checklist, kept in step with `content.ts`.
- `VALIDATION-SCRIPT.md`: full speaker script for the validation section (slides 14–17, 10 minutes).

The live demo runs the 3-household sample in the web runner at policyengine.org/us/taxsim/run, after the core assumptions and before validation. The validation section starts with the four steps that resolve a disagreement beside the three calculations (TAXSIM, PolicyEngine and third-party validators such as TaxAct and Axiom) and the law as the arbiter, then covers how resolved cases shape the emulator, the live public dashboard at policyengine.org/us/taxsim/dashboard, and our progress with recent issues. The early-partnership slide (7) is based on policyengine-us issue #704 and discussion #2389, NSF award 2518372 and the PolicyEngine blog posts on the POSE grant and the NBER MOU. The input, output and beyond-TAXSIM slides (19–21) are based on policyengine-taxsim 3.0.1 (`config/variable_mappings.yaml`, `runners/policyengine_runner.py`), the TAXSIM source (`law87.for`) and PolicyEngine US source as of October 6, 2026. The CE pilot and benefit extension are proposals, not completed implementations.

The example results on slide 11 come from real policyengine-taxsim 3.0.1 runs, and the numbers on slide 23 come from PolicyEngine US 2.25.2, all run on October 5, 2026. The figures on slide 17 come from the policyengine-taxsim GitHub issue tracker on the same day.
