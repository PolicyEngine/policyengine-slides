# Speaker notes: public services in kind in PolicyEngine UK (NEF proposal, November 2026)

A proposal to the New Economics Foundation, dated 21 November 2026. Every
claim and number on the slides is from that proposal, condensed; the notes
below give its fuller wording where a slide shortens it. No slide shows new
PolicyEngine results.

## 1. Cover

Vahid Ahmadi and Max Ghenis are both named. Remove Max if needed.

## 2. In this proposal

Three parts: what we mean; status today; the plan. In one line: PolicyEngine
UK already values five public services for each household; we propose a
scoping phase, then three build phases from February 2027, to compare
universal services with cash on income, adequacy and carbon. The aim is one
microsimulation in which public services and cash benefits can be compared
on household incomes, the Minimum Income Standard and carbon.

## 3. Part 1: what we mean

## 4. Public services received in kind, valued in pounds

- Public services that households receive in kind from the state, valued in
  pounds and attributed to the households that use them.
- In scope: health (NHS), education, childcare, school meals, local buses
  and rail, social housing, social care, and candidate new universal
  services (energy, water, food).
- The question: how public services and cash benefits compare in what they
  add to household living standards, economic security and adequacy, and at
  what fiscal and carbon cost.
- The unit: households in the Family Resources Survey (FRS), enhanced in
  PolicyEngine's Microcosm dataset, so every service sits beside the same
  household's taxes and cash benefits.
- Out of scope for now: services that benefit everyone collectively (such as
  defence and policing), which the ONS and Treasury analyses also leave out;
  capital spending, except where it changes what households receive. Social
  security targeting, including responses to shocks such as pandemics or
  AI-driven job changes, is a separate strand of the wider programme.
- Not employer benefits in kind (company cars, medical insurance and other
  items reported on form P11D), which PolicyEngine treats as part of the tax
  system.

## 5. Part 2: status today

## 6. Valued today: five services, and school meals in part

The proposal's 11-row status table, first half. Full wording:

- NHS (hospital care): A&E, outpatient and admitted patient spending per
  person. Average use and cost by age band and sex, scaled to a 2025-26
  health budget total. One loose check on the total. No GP, community,
  mental health, prescribing or dental care; no variation by income, health
  or region.
- State education: spending per household. Machine-learning imputation
  (quantile regression forest) from ONS Effects of Taxes and Benefits (ETB)
  microdata, 2023-24. Not calibrated. No anchor to Department for Education
  outturn; no split by phase.
- Funded childcare: universal, extended and targeted hours, modelled from
  the rules. Eligibility rules in law, valued at DfE hourly funding rates;
  take-up fitted to DfE and HMRC counts. Calibrated to DfE headcounts
  (England, January 2026) and Tax-Free Childcare, mostly within 0.5%.
  Headcounts only, not hours or spending; funded-hours targets cover England
  only.
- Free school meals: partly, value per pupil as reported, from FRS 2024-25.
  Not calibrated. No eligibility rules, so an extension cannot yet be
  simulated.
- Local buses: trips, fares paid and subsidy per household. Trips from the
  National Travel Survey (England); subsidy priced from Department for
  Transport (DfT) support per boarding. Calibrated to DfT, Scottish, Welsh
  and Northern Ireland bus support, fares and journeys, mostly within 1%.
  Fare-cap changes do not yet flow into subsidy or household income.
- Rail: subsidy per household, imputed from ETB microdata. Not yet matched to
  the official total. Modelled total is well below published government
  support (£11.86bn, 2024-25).

Chips: "Yes", "Partly" and "No" restate the table. Only buses and childcare
are calibrated to official figures in detail; the NHS "loose check" shows as
"Partly".

## 7. Not yet valued in kind: housing, care, energy, water, food

Second half of the table:

- Social housing: tenure only, from FRS tenure; calibrated only through
  benefit caseloads. No value for below-market rent; tenure changes and
  waiting lists not modelled.
- Social care: no, not in PolicyEngine UK today. Care received is not in our dataset;
  care-home residents are outside the FRS.
- Energy: spending and kWh, not an in-kind value. Living Costs and Food
  Survey (LCFS) 2024-25, converted to kWh with energy department (DESNZ)
  prices. Electricity spending calibrated to ONS totals; kWh set to DESNZ
  totals; gas spending not yet. The best covered area; no value for an
  energy service.
- Water: bills only, FRS reported charges; not calibrated. No volumes or
  social tariffs.
- Food: spending only, LCFS 2024-25; not calibrated. No quantities or
  nutrition.

## 8. Most services count in net income, but not in HBAI income

- NHS, education, transport subsidy and funded childcare are added to
  household net income, but not to HBAI income (Households Below Average
  Income, the DWP's official income statistics), which sets poverty rates and
  deciles.
- Free school meals are the reverse; Healthy Start vouchers count in both.
- A single "extended income" measure, with and without services, is the
  first fix in the plan.

## 9. Two official analyses to compare against

Both attribute public services to households; we would compare our results
with them where coverage overlaps. Neither has been compared with
PolicyEngine yet.

- ONS ETB method in full: average use by household type (for example pupils
  for education, age and sex for the NHS), valued at cost.
- Treasury, services: health, education, work and pensions services,
  transport, justice, culture and some English local government spending.
- Our services already rest on ETB: education and rail (and bus subsidy in
  Wales and Northern Ireland) are imputed from ETB microdata, so a
  decile-by-decile match is a check of our method rather than an independent
  test.
- Housing subsidy differs: ETB allocates a notional council housing account
  subsidy. The Institute for Fiscal Studies instead values the gap between
  social and market rents: about £40 a week in England in 2015 (29% of market
  rent). We propose the rent-gap approach, reported beside ETB's.
- Coverage share: we would report the share of day-to-day departmental
  spending our services cover. The Treasury last stated its own share,
  around two-thirds, in its Spending Review 2010 edition.

## 10. Gaps: social care and social housing are the hardest

Build: the two hardest first, then the rest ("mostly work we know how to
do").

- Social care: our dataset carries the unpaid care people give. The FRS also
  records who receives help; we do not yet use it, and would check what it
  holds on cost and funding. Care-home residents are outside the survey
  frame, and they are among the heaviest users of care and of the NHS.
  Options: follow the ONS method (non-residential care spending by two age
  groups and region, allocated mainly to recipients of specific cash
  benefits), impute care received from other surveys, add a modelled
  care-home population, or report care separately with that limit stated.
- Social housing: we know who rents from a council or housing association,
  but not the value of the below-market rent. Valuing it needs a market-rent
  estimate for each social tenant. Simulating a large expansion also needs
  rules for who moves tenure and who waits on a list; that is a modelling
  choice to agree, not a data fix.
- Values, not rules: NHS, education and rail are stored as values per
  household, so policy can only scale them up or down in proportion. Testing
  a new universal service means writing eligibility, take-up and cost rules,
  as we have done for childcare.
- Rail: our total is well below published government support, so rail values
  should not be used until re-anchored. Not trivial: in earlier tests,
  forcing the data to match the official total made the household weights
  less reliable.
- NHS coverage: hospital care only, varying by age and sex. GP, community,
  mental health and prescribing are missing, and nothing varies by income or
  health.
- New candidate services: energy is well measured, so an energy service can
  be valued from existing data. Water and food are recorded as spending
  only; a water or food service needs a design (what is provided, to whom)
  before it can be valued.
- Geography: the national dataset is calibrated to UK, country and
  English-region totals. A separate local-area build, still in development,
  has energy targets for local authorities and constituencies and tenure for
  local authorities; services have no local targets yet.
- Sample size: small groups (rail users, free school meal recipients, social
  renters in one region) will have wide uncertainty; results for them should
  carry ranges.

## 11. Carbon: a coarse footprint today, three steps to refine it

- What exists: a household carbon footprint in tonnes CO2 (spending in 12
  broad consumption categories from the LCFS, times a carbon intensity per
  pound from an earlier edition of Defra's UK carbon footprint statistics);
  household gas and electricity use in kWh, in Microcosm and checked against
  DESNZ totals, not yet used for carbon; an optional carbon tax reform.
- What we would add: (1) energy by fuel, household kWh times official
  conversion factors, such as DESNZ's 2026 factor for electricity consumed
  (0.144 kg CO2e per kWh, including grid losses); published government
  projections could supply future factors. (2) Finer spending categories
  (food, transport fuel, bus, rail, car), following the Defra and University
  of Leeds input-output method that underlies the official footprint. (3)
  Footprint of the services: emissions per pound of service spending (NHS,
  education, transport), so a universal service and a cash transfer of equal
  cost can be compared on carbon as well as income.
- Step 1 is in phase 2. Steps 2 and 3 are not yet scheduled; we would agree
  their timing in phase 1.
- We have not found a UK microsimulation that does step 3. The UCL 2017
  universal basic services report modelled the distribution of free
  transport and communications, not carbon.

## 12. Four measures to compare services and cash

- Today PolicyEngine UK reports poverty on HBAI income only, which leaves out
  most services.
- Extended income: to build, one consistent definition, compared with ONS
  final income. Poverty before housing costs (BHC) and after (AHC): exists,
  the standard headline measures, unchanged. Minimum Income Standard (MIS):
  to build, from the MIS 2026 budgets by household type. Carbon: partly
  exists.
- MIS and services interact: the MIS budgets already assume some services,
  such as free childcare hours and pensioner bus passes. A new universal
  service lowers the cash a household needs to reach MIS, and the model would
  count that cost saving explicitly rather than add its value to income.
- MIS has been microsimulated before: Scottish Government analysts used the
  2024 MIS in UKMOD, a UK tax-benefit microsimulation model, for the
  independent Minimum Income Guarantee Expert Group.
- Sufficiency and time use (hours needed to meet basic needs) are worth
  exploring later; we have not yet found a way to link time-use data to our
  households.

## 13. Part 3: the plan

## 14. Four phases, each ending in a check-in with NEF

A scoping phase now, then three build phases from February 2027, each ending
in something NEF can use. The timings are estimates and would be fixed once
the scope questions are agreed.

1. Scope (December 2026 to January 2027): agree priority services, scenarios,
   metrics and geography (UK, regional or local); deliver this catalogue in
   final form; walk NEF through our existing carbon code.
2. Baseline (February to March 2027): one extended income measure, with and
   without services, by decile and household type; the MIS measure and
   household carbon by fuel from kWh; anchor NHS and education to published
   outturn and start re-anchoring rail (a known risk); compare with ONS final
   income and the Treasury's decile results, and share the comparison with
   NEF.
3. Policy levers (April to May 2027): rules for free school meal eligibility,
   bus fares feeding through to subsidy and household income, and childcare
   expansion; value social rent as the gap to market rent; design and value
   one new universal service with NEF (for example an energy allowance),
   including its carbon footprint.
4. Hard services (June to July 2027, exploratory): social care received and a
   modelled care-home population; housing expansion scenarios using
   tenure-change and waiting-list rules agreed with NEF; each delivered as a
   tested method note; results for these may need a later phase.

## 15. NEF brings the policy designs, PolicyEngine the model and results

- NEF: the policy designs and priorities, the scenarios to test, review of
  each phase's results, and expertise on adequacy measures and universal
  services.
- PolicyEngine: the open-source model and code; a dataset built from licensed
  survey microdata, shared as results rather than raw data; results as a
  shareable notebook or dashboard at each phase; and a methods note for each
  service.

## 16. Seven open questions for NEF

All seven, as in the proposal. Next steps: NEF's answers, then a short call
to agree phase 1.

## 17. Thank you

## What the slides condense or leave out

- The status table is split over two slides; its cells are shortened (full
  wording under slides 6 and 7). The quantile regression forest, "per
  person" and "age band" for NHS spending, and "England, January 2026" for
  the DfE headcounts are in these notes only.
- Benchmarks: the ONS method's examples (pupils, age and sex) and "account"
  in "council housing account subsidy" are left off the slide. The links on
  the proposal's two column headings are in `content.ts` and the README.
- Gaps: "in proportion" (values can only be scaled) and "that is not
  trivial" (re-anchoring rail) are left off the slide.
- Measures: "independent" before the Minimum Income Guarantee Expert Group
  is left off the slide.
- Gaps: the social care options are listed without the ONS method's detail
  (two age groups and region, allocated mainly to recipients of specific cash
  benefits) and without "with that limit stated"; the FRS check on cost and
  funding is left out.
- Carbon: "published government projections could supply future factors"
  and the UCL 2017 report are in the notes only.
- Out of scope: the examples of shocks (pandemics, AI-driven job changes)
  are in the notes only.
- Plan: "(UK, regional or local)" after geography, "by decile and household
  type", "to published outturn", "share the comparison with NEF" and "for
  example an energy allowance" are in the notes only.
- Geography: "local authorities and constituencies" (energy targets) and
  "tenure for local authorities" are shortened to "energy and tenure
  targets".
- The proposal's summary bullets ("the aim", "what is missing") appear in
  the notes to slide 2, not on a slide.
- The proposal's NEF publications (universal basic services; the universal
  family childcare promise) are cited in `content.ts` and the README; no
  slide draws on them.
