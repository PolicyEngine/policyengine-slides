# Public services in kind in PolicyEngine UK: status and a plan

17 slides at `/slides/nef-public-services-2026`: PolicyEngine's proposal to
the New Economics Foundation (NEF) on valuing public services that households
receive in kind (NHS, education, childcare, school meals, buses and rail,
social housing, social care, and candidate new services) in PolicyEngine UK.
It is not about employer benefits in kind (the items reported on form
P11D); that is the separate `nef-bik-2026` deck, which is on its own branch
and not on main yet. The deck is public.

The deck follows one document, the proposal of 21 November 2026 (`config.ts`,
its footer and `cover.date` in `content.ts`). Every claim and number on the
slides comes from it, condensed; nothing is added. The cover names Vahid
Ahmadi. The deck reflects the proposal as revised after review
(NHS valued from England's health budget, devolved coverage of education and
childcare, rail fares, social care in the FRS, the local-area dataset, and
the revised phases and open questions).

Three parts, after a title and an agenda. Each part opens with a section
slide, and every slide's header carries a tracker of the three parts:

1. What we mean (slides 3 to 4): the scope, the question, the unit, what is
   out of scope, and that this is not employer benefits in kind
2. Status today (slides 5 to 12): the status table in two halves (services
   valued today, services not yet valued); how services count in income;
   the two official benchmarks; gaps; carbon; outcome measures
3. The plan (slides 13 to 16): four phases with check-ins; who
   brings what; the seven open questions for NEF, with the next steps

## Editing and presenting

- `config.ts` controls the slide order, the build steps and metadata. Eight
  slides reveal step by step when presenting (`builds`; the status tables
  appear whole); a PDF export shows each slide once, complete
  (`exportBuilds: 1`). The counter shows the slide, not the step
  (`countSlides: true`), and the controls hint is hidden
  (`hideNavHint: true`); both are opt-ins in `lib/types.ts`.
- `content.ts` holds every string and figure on the slides, with comments
  naming the proposal section each comes from, and `sources`: the links the
  proposal cites.
- `slides/index.tsx` contains the slides and the deck's components (one list,
  one card, one table, one chip style; every item takes a Tabler icon). The
  `agenda` list drives the agenda slide, the section slides and the header
  tracker. Status chips are one component, `StatusChip`, in three tones
  (yes, partly, no), with its key (`StatusLegend`) inside the figure; the
  label names what the tone means on that slide.
- `slides/BuildScope.tsx` and `slides/deck.module.css` are copied from the
  NEF benefits-in-kind deck (`nef-bik-2026`, not on main yet), keeping only
  the styles this deck uses, with its own styles at the end of the
  stylesheet. This deck does not import from that one.
- `SPEAKER-NOTES.md` has the fuller proposal wording behind each slide and
  lists what the slides condense or leave out.

## What a status means

On the status tables, "Yes", "Partly" and "No" restate the proposal's table.
"In-kind value today" follows its lead sentence: five services (NHS, state
education, funded childcare, local buses, rail) have a household
value; free school meals have a value per pupil as reported; social housing,
social care, energy, water and food do not. "Calibrated to official figures"
is "Yes" for the two the proposal calls calibrated in detail (childcare and
buses), "Partly" where it describes a partial or indirect link (NHS:
total set to the budget before calibration, not held after; social housing: only through benefit caseloads;
energy: electricity spending and kWh, gas spending not yet), and "No" where
it says none or not yet. The proposal's words sit under each chip.

## Sources

All from the proposal's own source list. The model and data:

- PolicyEngine UK, GitHub repository, main branch as of 19 November 2026:
  https://github.com/PolicyEngine/policyengine-uk ; Microcosm UK 2024-25
  dataset, development build, November 2026
- Household carbon code:
  https://github.com/PolicyEngine/policyengine-uk/blob/main/policyengine_uk/variables/household/consumption/carbon.py

Official analyses and statistics:

- ONS, Effects of taxes and benefits on household income, FYE 2024:
  https://www.ons.gov.uk/peoplepopulationandcommunity/personalandhouseholdfinances/incomeandwealth/bulletins/theeffectsoftaxesandbenefitsonhouseholdincome/2024 ;
  methodology
  https://www.ons.gov.uk/peoplepopulationandcommunity/personalandhouseholdfinances/incomeandwealth/methodologies/theeffectsoftaxesandbenefitsonukhouseholdincome ;
  technical report, FYE 2020
  https://www.ons.gov.uk/peoplepopulationandcommunity/personalandhouseholdfinances/incomeandwealth/methodologies/theeffectsoftaxesandbenefitsonhouseholdincometechnicalreportfinancialyearending2020
- HM Treasury, Impact on households: distributional analysis, Budget 2026:
  https://assets.publishing.service.gov.uk/media/6ae1850f16428df53760627d/Impact_on_households.pdf ;
  Spending Review 2010 distributional analysis
  https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/203829/Spending_Review_2010_-_distributional_impact_analysis.pdf
- DWP, Households below average income: methodology, FYE 2025:
  https://www.gov.uk/government/statistics/households-below-average-income-for-financial-years-ending-1995-to-2025/households-below-average-income-background-information-and-methodology-report-fye-2025
- Adam, Chandler, Hood and Joyce, IFS, Social rent policy: choices and
  trade-offs (2015), presentation slides:
  https://www.ifs.org.uk/sites/default/files/output_url_files/Joyce_social_rents_Nov15.pdf
- UCL Institute for Global Prosperity, Social prosperity for the future: a
  proposal for universal basic services (2017):
  https://basicincome.org/wp-content/uploads/2018/09/Social-prosperity-for-the-future.pdf
- NEF, Universal basic services
  https://neweconomics.org/campaigns/universal-basic-services ; The universal
  family childcare promise (2025)
  https://neweconomics.org/2025/07/the-universal-family-childcare-promise
- DESNZ, Greenhouse gas conversion factors 2026:
  https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2026 ;
  Defra, UK carbon footprint to 2023:
  https://www.gov.uk/government/statistics/uks-carbon-footprint/carbon-footprint-for-the-uk-and-england-to-2023
- JRF and Loughborough University, Minimum Income Standard 2026:
  https://www.jrf.org.uk/income-savings-and-debt/a-minimum-income-standard-for-the-united-kingdom-in-2026 ;
  Scottish Government, Minimum income guarantee modelling:
  https://www.gov.scot/publications/minimum-income-guarantee-level-modelling/
- Office of Rail and Road, table 7271, government support to the rail
  industry by source, all sources, 2024-25 (£11.86bn)
- HM Treasury, Spending Review 2025 (June 2025): England's 2025-26 health
  budget, £202bn
- DHSC, Adult social care finance report, England, 2024 to 2025:
  https://www.gov.uk/government/statistics/adult-social-care-finance-report-england-2024-to-2025 ;
  NHS England, Technical guide to allocation formulae, 2026-27:
  https://www.england.nhs.uk/wp-content/uploads/2025/12/allocations-2627-technical-guide-to-formulae-v2.pdf
