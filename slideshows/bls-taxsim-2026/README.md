# BLS TAXSIM seminar

Local route: `/slides/bls-taxsim-2026`.

35 slides, including 6 section dividers and a closing slide, with 60 minutes of presentation time (no slack) and a dedicated final slide for 30 minutes of Q&A.

Agenda and presenters: introduction (Max Ghenis, 11 min); the TAXSIM emulator with versions and releases and the live demo (Pavel Makarchuk, 18 min); beyond TAXSIM (Pavel Makarchuk, 5 min); validation and the 2026 tax rules (David Trimmer, 12 min); benefit imputation (Max Ghenis, 6 min); what’s next: Axiom with a live walk-through, and a possible CE pilot (Max Ghenis, 8 min); Q&A (30 min). Speakers change only at section dividers. Thesia Garner’s question list (October 7) is answered in the notes of the slides that cover each question; the agenda slide’s notes map them.

- `content.ts`: slide copy, timing, sources, speaker notes, screenshots and live embeds.
- `slides/index.tsx`: React rendering with the repository’s shared slide components. The cover uses the shared `CoverSlide` with speaker headshots.
- `slides/PEIntroSlides.tsx`: PolicyEngine introduction (slides 4–6), adapted from the cpid-webinar-2026 and gettsim-2026 decks.
- `slides/SectionDivider.tsx`: section openers on the cover gradient, with the section number and title (slides 3, 10, 15, 19, 25 and 29), each naming its presenter, which is where the speakers hand off.
- `slides/Origins.tsx`: how the collaboration started: the record-by-record testing before the emulator, a real YAML test from policyengine-us issue #1504 beside it, and the milestones up to the agreement (slide 8).
- `slides/InputMapping.tsx`: story cards by general area, aligned across each row with CSS subgrid. Slide 16: the TAXSIM variables, the limit of the TAXSIM format, and the PolicyEngine variables that remove it. Slide 18: what PolicyEngine calculates beyond TAXSIM (benefit programs, health coverage, additional state tax credits and federal provisions), how the emulator handles each, and the PolicyEngine variables. Each ends with a “why it matters” card.
- `slides/DropInTabs.tsx`: the TAXSIM site’s Installation section on top and its Get started section below, as on policyengine.org/us/taxsim (slide 11). Each section has its title centered above its tabs: macOS/Linux and Windows for the two install steps, and CLI, Python, R, Stata, SAS and Julia for the before and after code. Clicks on the tabs and the Copy buttons do not advance the slide. On screens 820px tall or less, the widget scales down so that it fits.
- `slides/ThankYouSlide.tsx`: the closing slide, with each speaker’s photo, name and email (slide 35).
- `slides/UpdateTimeline.tsx`: when the 2026 tax rules will be ready: the 2025 state update’s figures, the 2025 cycle and the 2026 plan on one November-to-March axis in half-month slots, the major changes, and the March 31, 2027 commitment (slide 24).
- `slides/CeInputsTable.tsx`: CE inputs that PolicyEngine can use and TAXSIM cannot: CE variables, PolicyEngine inputs, what PolicyEngine does with them and TAXSIM’s limit (slide 17). CE variable names are from the 2024 Interview public-use microdata dictionary.
- `slides/LiveEmbed.tsx`: live iframe with a side column of demo steps (slides 14, 22 and 31).
- `slides/ProcessFlow.tsx`: step-card processes with optional figures, real examples and who-provides-what columns (slides 21, 23 and 33).
- `slides/Releases.tsx`: versions and releases: release figures, the command that pins both packages, and what ships with every release (slide 13).
- `slides/AxiomPlan.tsx`: the move to Axiom in three stages: today, planned and throughout (slide 30).
- `slides/DetailContent.tsx`: a table layout with a footnote; no slide uses it at present.
- `slides/Visuals.tsx`: the NBER partnership: TAXSIM on the left, the agreement and year routing in the middle, PolicyEngine on the right (slide 9), the routing diagram: an example input file, two engines by tax year, an example output file (slide 12), the three-calculations triangle with the validation steps beside it (slide 20), imputation sources (slide 26), resource bars (slide 27), cards with a headline figure (slide 28) and without one (slide 7), the comparison diagram (slide 32), and questions with resource links (slide 34). `BenefitChains` is kept but no slide uses it at present.
- `SPEAKER-NOTES.md`: readable presenter track and preparation checklist, kept in step with `content.ts`.
- `VALIDATION-SCRIPT.md`: full speaker script for the validation section (slides 20–23, 10 minutes).

The live demo runs the 3-household sample in the web runner at policyengine.org/us/taxsim/run, at the end of the emulator section, before Beyond TAXSIM. The validation section starts with the four steps that resolve a disagreement beside the three calculations (TAXSIM, PolicyEngine and third-party validators such as TaxAct and Axiom) and the law as the arbiter, then covers how resolved cases shape the emulator, the live public dashboard at policyengine.org/us/taxsim/dashboard, and our progress with recent issues. The early-partnership slide (8) is based on policyengine-us issues #704 and #1504 (with PR #1505) and discussion #2389, NSF award 2518372 and the PolicyEngine blog posts on the POSE grant and the NBER MOU. The input and output slides (16 and 18) are based on policyengine-taxsim 3.0.1 (`config/variable_mappings.yaml`, `runners/policyengine_runner.py`), the TAXSIM source (`law87.for`) and PolicyEngine US source as of October 6, 2026. The CE pilot and benefit extension are proposals, not completed implementations.

The example results on slide 12 come from real policyengine-taxsim 3.0.1 runs, and the numbers on slide 27 come from PolicyEngine US 2.25.2, all run on October 5, 2026. The figures on slide 23 come from the policyengine-taxsim GitHub issue tracker on the same day. The 2025 timeline on slide 24 comes from the PolicyEngine US pull requests and issues for each state’s 2025 update (PRs #6898 to #7421), pulled on October 7, 2026.
