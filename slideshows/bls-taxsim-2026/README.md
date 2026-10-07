# BLS TAXSIM seminar

Local route: `/slides/bls-taxsim-2026`.

29 slides, including 5 section dividers, with 66 minutes of presentation time and a dedicated final slide for 30 minutes of Q&A.

Agenda: introduction (12 min), the emulator (6 min), live demonstration (13 min), validation (16 min), beyond TAXSIM (14 min), CE pilot (5 min), Q&A (30 min).

- `content.ts`: slide copy, timing, sources, speaker notes, screenshots and live embeds.
- `slides/index.tsx`: React rendering with the repository’s shared slide components. The cover uses the shared `CoverSlide` with speaker headshots.
- `slides/PEIntroSlides.tsx`: PolicyEngine introduction (slides 4–6), adapted from the cpid-webinar-2026 and gettsim-2026 decks.
- `slides/SectionDivider.tsx`: section openers on the cover gradient, with the section number and title (slides 3, 9, 13, 19 and 26).
- `slides/Origins.tsx`: how the collaboration started: the differential-testing process before the emulator and the milestones up to the agreement (slide 7).
- `slides/InputMapping.tsx`: how TAXSIM inputs and outputs map to PolicyEngine, by general area, with what PolicyEngine can model (slide 21).
- `slides/LiveEmbed.tsx`: live iframe with a side column of demo steps (slides 12 and 16).
- `slides/ProcessFlow.tsx`: step-card processes with optional figures, real examples and who-provides-what columns (slides 15, 18 and 28).
- `slides/DetailContent.tsx`: the notable-cases table (slide 17).
- `slides/DropInTabs.tsx`: the TAXSIM site’s Installation section, centered on top (the title and macOS/Linux and Windows tabs above the commands, with the two install steps one under the other) and its Get started section below (CLI, Python, R, Stata, SAS and Julia tabs, with before and after code), as on policyengine.org/us/taxsim (slide 10). Clicks on the tabs and the Copy buttons do not advance the slide. On screens 820px tall or less, the widget scales down a little (0.96, or 0.88 at 740px and on narrow screens) so that it fits.
- `slides/Visuals.tsx`: the NBER partnership: TAXSIM on the left, the agreement and year routing in the middle, PolicyEngine on the right (slide 8), the routing diagram: an example input file, two engines by tax year, an example output file (slide 11), the three-calculations triangle (slide 14), benefit chains (slide 20), imputation sources (slide 23), resource bars (slide 24), cards with a takeaway (slide 22), cards with a headline figure (slide 25), the comparison diagram (slide 27), and questions with resource links (slide 29).
- `SPEAKER-NOTES.md`: readable presenter track and preparation checklist, kept in step with `content.ts`.
- `VALIDATION-SCRIPT.md`: full speaker script for the validation section (slides 14–18).

The live demo runs the 3-household sample in the web runner at policyengine.org/us/taxsim/run, after the core assumptions and before validation. The validation section starts with the three calculations (TAXSIM, PolicyEngine and TaxAct) and the law as the arbiter, then covers the comparison process, the live public dashboard at policyengine.org/us/taxsim/dashboard, two notable cases (one-time rebates and S-corporation income), and how a reported difference becomes a fix. The early-partnership slide (7) is based on policyengine-us issue #704 and discussion #2389, NSF award 2518372 and the PolicyEngine blog posts on the POSE grant and the NBER MOU. The input-mapping and beyond-TAXSIM slides (21 and 22) are based on policyengine-taxsim 3.0.1 (`config/variable_mappings.yaml`, `runners/policyengine_runner.py`), the TAXSIM source (`law87.for`) and PolicyEngine US source as of October 6, 2026. The CE pilot and benefit extension are proposals, not completed implementations.

The example results on slide 11 come from real policyengine-taxsim 3.0.1 runs, and the numbers on slides 20 and 24 come from PolicyEngine US 2.25.2, all run on October 5, 2026. The figures on slide 18 come from the policyengine-taxsim GitHub issue tracker on the same day. The notable cases on slide 17 come from policyengine-taxsim issues #1068 and #1053 and PRs #1070, #1074 and #1199.
