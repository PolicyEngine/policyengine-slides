# Public services in kind: status in PolicyEngine UK and a plan

Nov 21, 2026 · @Vahid Ahmadi

PolicyEngine UK already values five public services for each household. We propose a scoping phase, then three build phases from February 2027, to compare universal services with cash on income, adequacy and carbon.

- **The aim:** one microsimulation in which public services and cash benefits can be compared on household incomes, the Minimum Income Standard and carbon.
- **What exists:** household values for NHS hospital care, state education, funded childcare, local buses and rail, built on official survey and administrative data. Buses and childcare are calibrated to official figures (headcounts for childcare).
- **What is missing:** social care, the value of social rents, in-kind energy, water and food, a single "extended income" measure, and rules that let services respond to policy rather than scale in proportion.
- **The plan:** scope by January; a baseline with extended income, the Minimum Income Standard and carbon by fuel by March; policy levers by May; exploratory work on social care and housing by July 2027.
- **Next steps:** NEF's answers to the open questions at the end of this note, then a short call to agree phase 1.

## What we mean by benefits in kind

This proposal covers public services that households receive in kind from the state, valued in pounds and attributed to the households that use them. It does not cover employer benefits in kind (company cars, medical insurance and other items reported on form P11D), which PolicyEngine treats as part of the tax system.

- **In scope:** health (NHS), education, childcare, school meals, local buses and rail, social housing, social care, and candidate new universal services (energy, water, food).
- **The question:** how public services and cash benefits compare in what they add to household living standards, economic security and adequacy, and at what fiscal and carbon cost.
- **The unit:** households in the Family Resources Survey (FRS), enhanced in PolicyEngine's Microcosm dataset, so every service sits beside the same household's taxes and cash benefits.
- **Out of scope for now:** services that benefit everyone collectively (such as defence and policing), which the ONS and Treasury analyses also leave out; and capital spending, except where it changes what households receive. Social security targeting, including responses to shocks such as pandemics or AI-driven job changes, is a separate strand of the wider programme, outside this note.

## Status today

Five services already have a household-level value in PolicyEngine UK; social care, social housing subsidy and in-kind energy, water and food do not. Only buses and childcare are calibrated to official figures in detail.

| Service | In PolicyEngine UK today | Data source and method | Calibrated to official figures | Main gap |
| --- | --- | --- | --- | --- |
| NHS (hospital care) | Yes: A&E, outpatient and admitted patient spending per person | Average use and cost by age band and sex, scaled to a 2025-26 health budget total | One loose check on the total | No GP, community, mental health, prescribing or dental care; no variation by income, health or region |
| State education | Yes: spending per household | Machine-learning imputation (quantile regression forest) from ONS Effects of Taxes and Benefits (ETB) microdata, 2023-24 | None | No anchor to Department for Education outturn; no split by phase |
| Funded childcare | Yes: universal, extended and targeted hours, modelled from the rules | Eligibility rules in law, valued at DfE hourly funding rates; take-up fitted to DfE and HMRC counts | Yes: DfE headcounts (England, January 2026) and Tax-Free Childcare, mostly within 0.5% | Headcounts only, not hours or spending; funded-hours targets cover England only |
| Free school meals | Partly: value per pupil as reported | Family Resources Survey (FRS) 2024-25, as reported | None | No eligibility rules, so an extension cannot yet be simulated |
| Local buses | Yes: trips, fares paid and subsidy per household | Trips from the National Travel Survey (England); subsidy priced from Department for Transport (DfT) support per boarding | Yes: DfT, Scottish, Welsh and NI bus support, fares and journeys, mostly within 1% | Fare-cap changes do not yet flow into subsidy or household income |
| Rail | Yes: subsidy per household | Imputed from ETB microdata | Not yet matched to the official total | Modelled total is well below published government support (£11.86bn, 2024-25) |
| Social housing | Tenure only | FRS tenure | Only through benefit caseloads | No value for below-market rent; tenure changes and waiting lists not modelled |
| Social care | No | n/a | n/a | Care received is not in our dataset; care-home residents are outside the FRS |
| Energy | Spending and kWh, not an in-kind value | Living Costs and Food Survey (LCFS) 2024-25, converted to kWh with energy department (DESNZ) prices | Electricity spending calibrated to ONS totals; kWh set to DESNZ totals; gas spending not yet | Best covered area; no value for an energy service |
| Water | Bills only | FRS reported charges | None | No volumes or social tariffs |
| Food | Spending only | LCFS 2024-25 | None | No quantities or nutrition |

**How services count in income today.** NHS, education, transport subsidy and funded childcare are added to household net income, but not to HBAI income (Households Below Average Income, the DWP's official income statistics), which sets poverty rates and deciles. Free school meals are the reverse; Healthy Start vouchers count in both. A single "extended income" measure, with and without services, is the first fix in the plan below.

## Benchmarks

Two official analyses already attribute public services to households, and we would compare our results with them where coverage overlaps. Neither has been compared with PolicyEngine yet.

|  | [ONS Effects of Taxes and Benefits](https://www.ons.gov.uk/peoplepopulationandcommunity/personalandhouseholdfinances/incomeandwealth/bulletins/theeffectsoftaxesandbenefitsonhouseholdincome/2024) | [HM Treasury, Impact on households (Budget 2026)](https://assets.publishing.service.gov.uk/media/6ae1850f16428df53760627d/Impact_on_households.pdf) |
| --- | --- | --- |
| Latest | Financial year ending 2024 (published September 2025); 2024-25 provisionally due December 2026 | October 2026 |
| Services | Education, NHS, rail and bus subsidy, school meals, Healthy Start, housing subsidy, non-residential adult social care, free childcare | Health, education, work and pensions services, transport, justice, culture and some English local government spending |
| Method | Average use by household type (for example pupils for education, age and sex for the NHS), valued at cost | Expected use from the LCFS and FRS, valued one for one as a cash gain |
| Leaves out | Capital, defence, law and order; care homes | Administration, capital, public goods, devolved spending |
| Headline | "Final income": post-tax income plus benefits in kind | Spending gains as a share of net income, by decile |

- **Our services already rest on ETB.** Education and rail (and bus subsidy in Wales and Northern Ireland) are imputed from ETB microdata, so a decile-by-decile match is a check of our method rather than an independent test.
- **Housing subsidy differs.** ETB allocates a notional council housing account subsidy. The Institute for Fiscal Studies instead values the gap between social and market rents: about £40 a week in England in 2015 (29% of market rent) ([IFS, 2015](https://www.ifs.org.uk/sites/default/files/output_url_files/Joyce_social_rents_Nov15.pdf)). We propose the rent-gap approach, reported beside ETB's.
- **Coverage share.** We would report the share of day-to-day departmental spending our services cover. The Treasury last stated its own share, around two-thirds, in its [Spending Review 2010 edition](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/203829/Spending_Review_2010_-_distributional_impact_analysis.pdf).

## Gaps and hard problems

The hardest gaps are social care and social housing, because the survey data do not record what households receive. The others are mostly work we know how to do.

- **Services are values, not rules.** NHS, education and rail are stored as values per household. Policy can only scale them up or down in proportion. Testing a new universal service means writing eligibility, take-up and cost rules, as we have done for childcare.
- **Social care.** Our dataset carries the unpaid care people give. The FRS also records who receives help. We do not yet use it, and would check what it holds on cost and funding. Care-home residents are outside the survey frame, and they are among the heaviest users of care and of the NHS. Options: follow the ONS method (non-residential care spending by two age groups and region, allocated mainly to recipients of specific cash benefits), impute care received from other surveys, add a modelled care-home population, or report care separately with that limit stated.
- **Social housing.** We know who rents from a council or housing association, but not the value of the below-market rent. Valuing it needs a market-rent estimate for each social tenant. Simulating a large expansion also needs rules for who moves tenure and who waits on a list; that is a modelling choice to agree, not a data fix.
- **Rail.** Our total is well below published government support, so rail values should not be used until they are re-anchored. That is not trivial: in earlier tests, forcing the data to match the official total made the household weights less reliable.
- **NHS coverage.** Hospital care only, varying by age and sex. GP, community, mental health and prescribing are missing, and nothing varies by income or health.
- **New candidate services.** Energy is well measured, so an energy service can be valued from existing data. Water and food are recorded as spending only; a water or food service needs a design (what is provided, to whom) before it can be valued.
- **Geography.** The national dataset is calibrated to UK, country and English-region totals. A separate local-area build, still in development, has energy targets for local authorities and constituencies and tenure for local authorities; services have no local targets yet.
- **Sample size.** Small groups (rail users, free school meal recipients, social renters in one region) will have wide uncertainty; results for them should carry ranges.

## Carbon impacts

PolicyEngine UK already estimates each household's consumption carbon footprint, but only at a coarse level. Testing whether collective provision is more carbon-efficient than cash needs finer factors and a footprint for the services themselves.

**What exists**

- A household carbon footprint in tonnes CO2: spending in 12 broad consumption categories (from the LCFS) times a carbon intensity per pound, from an earlier edition of [Defra's UK carbon footprint statistics](https://www.gov.uk/government/statistics/uks-carbon-footprint/carbon-footprint-for-the-uk-and-england-to-2023).
- Household gas and electricity use in kWh, already in Microcosm and checked against DESNZ totals, but not yet used for carbon.
- An optional carbon tax reform.

**What we would add**

1. **Energy by fuel.** Household kWh times official conversion factors, such as [DESNZ's 2026 factor](https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2026) for electricity consumed (0.144 kg CO2e per kWh, including grid losses). Published government projections could supply future factors.
2. **Finer spending categories.** Footprints by detailed category (food, transport fuel, bus, rail, car), following the Defra and University of Leeds input-output method that underlies the official footprint.
3. **Footprint of the services.** Emissions per pound of service spending (NHS, education, transport), so that a universal service and a cash transfer of equal cost can be compared on carbon as well as on income.

Step 1 is in phase 2. Steps 2 and 3 are not yet scheduled; we would agree their timing in phase 1.

We have not found a UK microsimulation that does this third step. The [UCL 2017 universal basic services report](https://basicincome.org/wp-content/uploads/2018/09/Social-prosperity-for-the-future.pdf) modelled the distribution of free transport and communications, not carbon.

## Outcome metrics

We propose four measures, so that services and cash are compared on the same footing. Today PolicyEngine UK reports poverty on HBAI income only, which leaves out most services.

| Measure | What it shows | Status |
| --- | --- | --- |
| Extended income | Disposable income plus the value of services received, by decile and household type | To build: one consistent definition, compared with ONS final income |
| Poverty before and after housing costs (BHC and AHC) | The standard headline measures, unchanged | Exists |
| Minimum Income Standard (MIS) | Share of people below what the public says is needed for a decent standard of living | To build: [MIS 2026](https://www.jrf.org.uk/income-savings-and-debt/a-minimum-income-standard-for-the-united-kingdom-in-2026) budgets by household type |
| Carbon | Household footprint per pound of resources, cash or services | Partly exists (see above) |

- **MIS and services interact.** The MIS budgets already assume some services, such as free childcare hours and pensioner bus passes. A new universal service lowers the cash a household needs to reach MIS, and the model would count that cost saving explicitly rather than add its value to income.
- **MIS has been microsimulated before.** [Scottish Government](https://www.gov.scot/publications/minimum-income-guarantee-level-modelling/) analysts used the 2024 MIS in UKMOD, a UK tax-benefit microsimulation model, for the independent Minimum Income Guarantee Expert Group.
- **Sufficiency and time use** (hours needed to meet basic needs) are worth exploring later; we have not yet found a way to link time-use data to our households.

## Proposed plan

We propose a scoping phase now, then three build phases from February 2027, each ending in something NEF can use, with a check-in at the end of every phase. The timings are estimates and would be fixed once the scope questions below are agreed.

&#91;embedded content: project roadmap · 4 phases, 4 check-ins\]

1. **Scope (December 2026 to January 2027).** Agree priority services, scenarios, metrics and geography (UK, regional or local). Deliver this catalogue in final form, and walk NEF through our existing [carbon code](https://github.com/PolicyEngine/policyengine-uk/blob/main/policyengine_uk/variables/household/consumption/carbon.py).
2. **Baseline (February to March 2027).**
   - One "extended income" measure, with and without services, by decile and household type.
   - The Minimum Income Standard measure, and household carbon by fuel from kWh.
   - Anchor NHS and education to published outturn, and start re-anchoring rail (a known risk).
   - Compare with ONS final income and the Treasury's decile results, and share the comparison with NEF.
3. **Policy levers (April to May 2027).**
   - Rules for free school meal eligibility, bus fares feeding through to subsidy and household income, and childcare expansion.
   - Value social rent as the gap to market rent.
   - Design and value one new universal service with NEF (for example an energy allowance), including its carbon footprint.
4. **Hard services (June to July 2027, exploratory).**
   - Social care received, and a modelled care-home population.
   - Housing expansion scenarios, using tenure-change and waiting-list rules agreed with NEF.
   - Each delivered as a tested method note; results for these may need a later phase.

**What NEF brings:** the policy designs and priorities, the scenarios to test, review of each phase's results, and expertise on adequacy measures and universal services.

**What PolicyEngine brings:** the open-source model and code; a dataset built from licensed survey microdata, shared as results rather than raw data; results as a shareable notebook or dashboard at each phase; and a methods note for each service.

## Open questions for NEF

- [ ] Which services come first? Our suggestion: childcare, buses and energy, where the data are strongest.
- [ ] Which universal service designs should we model, and at what level (for example free buses everywhere, or an energy allowance per household)?
- [ ] How should services be valued: at cost to the state, as ONS and the Treasury do, or with an alternative for some services?
- [ ] Which headline measure matters most: extended income, MIS, poverty or carbon?
- [ ] Is a UK-wide picture enough, or would English regions or local areas (for example Greater Manchester) add value? Local results would need further development.
- [ ] For housing, what expansion scenario and allocation rule should we assume (who moves in, from which tenure)?
- [ ] How will results be published (joint report, NEF report with a PolicyEngine methods note, or an interactive tool), and how will the work be resourced?

## Sources

- PolicyEngine UK, [GitHub repository](https://github.com/PolicyEngine/policyengine-uk), main branch as of 19 November 2026; Microcosm UK 2024-25 dataset, development build, November 2026.
- ONS, [Effects of taxes and benefits on household income, FYE 2024](https://www.ons.gov.uk/peoplepopulationandcommunity/personalandhouseholdfinances/incomeandwealth/bulletins/theeffectsoftaxesandbenefitsonhouseholdincome/2024), [methodology](https://www.ons.gov.uk/peoplepopulationandcommunity/personalandhouseholdfinances/incomeandwealth/methodologies/theeffectsoftaxesandbenefitsonukhouseholdincome) and [technical report, FYE 2020](https://www.ons.gov.uk/peoplepopulationandcommunity/personalandhouseholdfinances/incomeandwealth/methodologies/theeffectsoftaxesandbenefitsonhouseholdincometechnicalreportfinancialyearending2020).
- HM Treasury, [Impact on households: distributional analysis, Budget 2026](https://assets.publishing.service.gov.uk/media/6ae1850f16428df53760627d/Impact_on_households.pdf); [Spending Review 2010 distributional analysis](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/203829/Spending_Review_2010_-_distributional_impact_analysis.pdf).
- DWP, [Households below average income: methodology, FYE 2025](https://www.gov.uk/government/statistics/households-below-average-income-for-financial-years-ending-1995-to-2025/households-below-average-income-background-information-and-methodology-report-fye-2025).
- Adam, Chandler, Hood and Joyce, Institute for Fiscal Studies, [Social rent policy: choices and trade-offs (2015), presentation slides](https://www.ifs.org.uk/sites/default/files/output_url_files/Joyce_social_rents_Nov15.pdf).
- UCL Institute for Global Prosperity, [Social prosperity for the future: a proposal for universal basic services (2017)](https://basicincome.org/wp-content/uploads/2018/09/Social-prosperity-for-the-future.pdf).
- NEF, [Universal basic services](https://neweconomics.org/campaigns/universal-basic-services) and [The universal family childcare promise (2025)](https://neweconomics.org/2025/07/the-universal-family-childcare-promise).
- DESNZ, [Greenhouse gas conversion factors 2026](https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2026); Defra, [UK carbon footprint to 2023](https://www.gov.uk/government/statistics/uks-carbon-footprint/carbon-footprint-for-the-uk-and-england-to-2023).
- JRF and Loughborough University, [Minimum Income Standard 2026](https://www.jrf.org.uk/income-savings-and-debt/a-minimum-income-standard-for-the-united-kingdom-in-2026); Scottish Government, [Minimum income guarantee modelling](https://www.gov.scot/publications/minimum-income-guarantee-level-modelling/).
