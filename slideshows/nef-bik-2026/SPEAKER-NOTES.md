# Speaker notes: modelling benefits in kind in PolicyEngine UK (NEF, November 2026)

A scoping conversation on 19 November 2026. Nothing has been agreed, and no
slide shows PolicyEngine results. Every figure is from the source named here,
read on 18 November 2026; `content.ts` pins each one. Budget 2026 was on 28
October 2026.

## 1. Cover

Vahid Ahmadi and Max Ghenis are both named. Remove Max if he isn't there.

## 2. Today

Three parts: what benefits in kind are and how big; what PolicyEngine covers
today; and scoping the project.

## 3. Part 1: benefits in kind in the UK

## 4. A benefit in kind is pay that isn't cash

- Benefit in kind (BIK): something an employer provides other than cash.
- Each benefit has a taxable value ("cash equivalent"). For cars, fuel, vans,
  loans and living accommodation it is a formula in law (ITEPA 2003); for
  others it is usually the cost to the employer. This general rule was not
  re-read from HMRC's booklet 480 for this deck.
- Company car: list price times the "appropriate percentage", which depends
  on CO2 emissions. In 2026-27 it runs from 4% (zero emission) to 37%
  (Budget 2026 overview, Annex A).
- The employee pays income tax on the taxable value at their marginal rate.
  The employer reports it on a P11D after the year ends, or taxes it through
  payroll ("payrolling").
- The employer pays Class 1A National Insurance contributions (NICs) at 15%
  in 2026-27 (Rates and thresholds for employers 2026 to 2027). There is
  usually no employee NIC on a benefit in kind (some, such as vouchers that
  can be exchanged for cash, are charged Class 1 instead).
- OpRA (optional remuneration arrangement), since 6 April 2017: when an
  employee gives up salary for a benefit, the taxable amount is the greater
  of the salary given up and the normal taxable value. Exempt from this rule:
  employer pension contributions, pensions advice, childcare vouchers and
  workplace nurseries, cycle to work, and cars with CO2 of 75 g/km or less
  (HMRC booklet 480, Appendix 12).

## 5. £9.5bn of benefits liable to Class 1A in 2024-25

- Left: three definitions in plain words. Class 1A has been 15% since April
  2025; it was 13.8% in 2024-25, which is why £1.31bn is 13.8% of £9.5bn.
- Middle, HMRC Benefits in kind statistics, July 2026, tax year 2024-25,
  provisional:
  - £9.5bn taxable value of all benefits liable to Class 1A, and £1.31bn of
    Class 1A due (Table 5, which HMRC labels experimental; it excludes
    termination awards and sporting testimonials);
  - 920,000 people with a company car, £3.07bn taxable value (Table 1). HMRC
    says the count "may be an underestimate", because some payrolled cars
    are not reported (commentary, section 8); the slide says "may be an
    undercount";
  - 51% of company cars are fully electric (Tables 2B and 2D).
- Right, in its own panel: the last year with final figures for every type of
  benefit, 2016-17 (Table 4.5 and commentary, June 2019; the same release
  had provisional figures for 2017-18). Since 2020 the tables cover cars
  and fuel only, plus the Class 1A total. Shares of the £8.25bn total: car
  55%, medical and dental insurance 23%, car fuel 8% (HMRC's own
  percentages), van 2%, beneficial
  loans 2%, accommodation 1%; the rest is mileage allowances, van fuel and
  other benefits. In 2016-17, 3.66 million people had at least one taxable
  benefit, 2.38 million of them medical or dental insurance.
- Do not read the 2016-17 shares against today's pounds: the two panels are
  different years, and the mix has changed (the electric car rate is low).
- If asked how £9.5bn compares with 2016-17: the £8.25bn is what employers
  reported on P11D forms. HMRC's Table 5 puts all benefits liable to Class 1A
  in 2016-17 at £9.1bn; the difference is mostly payrolled benefits. Like for
  like (Table 5): £9.1bn in 2016-17 and £9.5bn in 2024-25.
- Class 1A on cars and fuel was £440m of the £1.31bn in 2024-25 (Tables 1 and
  5), so a model with Class 1A on cars and fuel only covers about a third.
- No final figures since 2016-17 (the June 2019 release had provisional
  2017-18 figures) for the number of people with any benefit in kind, or for
  income tax on all benefits. HMRC's receipts tables do not separate Class
  1A.

## 6. The rules are changing each year to 2030-31

- Electric (zero-emission) company car rate: 4% in 2026-27, 5%, 7%, 9%, and
  10% in 2030-31 (Budget 2026 overview, Annex A). Rates to 2029-30 are
  legislated (Finance Acts 2023 and 2025); the 10% is announced, for Finance
  Bill 2026-27 (overview, paragraph 1.25), and PolicyEngine's baseline keeps
  9% with the rise as a scenario
  (`policyengine_uk/scenarios/company_car_tax_rise_2030.py`). The maximum rate is 37% to
  2027-28, then 38% and 39% (legislated) and 40% in 2030-31 (announced, with
  the 10%).
- 2026-27: car fuel multiplier £29,200; van benefit charge £4,170; van fuel
  £798 (The Van Benefit and Car and Van Fuel Benefit Order 2025, SI
  2025/1254, art. 2; Annex A does not list them).
- 6 April 2027: payrolling (taxing benefits through payroll in real time
  rather than on a P11D) becomes mandatory for cars, vans, car and van fuel
  and medical benefits; 6 April 2028 for most other benefits. Both are
  announced (overview, paragraph 1.24). Loans and
  accommodation stay outside.
- 6 April 2029: NICs relief on pension salary sacrifice only on the first
  £2,000 sacrificed a year. Legislated: National Insurance Contributions
  (Employer Pensions Contributions) Act 2026, s. 1; the regulations setting
  the £2,000 limit are still to be made. The OBR certified the official
  costing. Budget 2026 recosting (Table 6.4): +£5,350m in 2029-30, +£2,920m in
  2030-31, +£3,665m in 2031-32. The first year is inflated by timing: the
  OBR's supplementary release (5 February 2026) says a switch to
  relief-at-source schemes adds to 2029-30 and takes from 2030-31.
- 6 April 2030: employee car and van ownership schemes brought into the
  benefit in kind rules. Legislated: Finance Act 2026, s. 17, for 2030-31 on
  (2032-33 for arrangements made before 6 April 2030). Budget 2025 delayed
  the change to 2030.
- Chips: Exchequer yield from Budget 2026. "Rates to 2029-30: +£700m" is the
  2028-29 yield of the rates set for 2028-29 and 2029-30 (Table 6.4; +£975m
  in 2029-30). "Cap: +£5,350m, then +£2,920m" is the pension salary-sacrifice
  cap in 2029-30 and 2030-31 (Table 6.4). "2030-31 rise: +£310m" is the
  2030-31 yield of the rates announced at Budget 2026 (Table 6.1; +£345m in
  2031-32).

## 7. Part 2: what PolicyEngine covers

## 8. How the model works: company cars, end to end

Each stage carries a status for company cars. What each rests on:

- **Survey: Done.** Family Resources Survey (FRS) 2024-25 (UKDS SN 9563).
  PolicyEngine/microcosm at `bcb5cba` (main),
  `packages/microcosm-build/src/microcosm/build/uk_runtime/frs_spine.py`,
  reads the job-table items EXPBEN01 (company car), EXPBEN03 (fuel for
  private use), CARVAL (banded list price), FUELTYP, CARCON and CARAMT. The
  FRS question ExpBen lists 13 employer benefits.
- **Imputation: Partly done.** `uk_runtime/company_cars.py`, the 19th of the
  56 stages listed in `uk/source_stages.json`. List price is drawn within the FRS band from
  Wealth and Assets Survey round 8 company-car prices; CO2 is assigned to
  match HMRC Table 2A band shares; unknown fuels at Table 2C shares. Not
  imputed: the share of the year the car is available, the employee's
  payments for private use, and electric range (set to 50 miles for 1–50 g/km
  cars), because no survey records them.
- **Calibration: Done.** The certified national build of 15 November 2026
  (policyengine.py 6.20.1) has 1,534 targets (the build of 18 November has
  1,535). Its five
  `hmrc.benefits_in_kind` targets are included and fitted within 1%:
  recipients 915,708 against 920,000; taxable value £3,068.6m against
  £3,070m; fully electric 465,215 against 465,000; petrol 390,819 against
  390,000; diesel 59,674 against 60,000, the worst at 0.54% (calibration
  dashboard data route, read 18 November 2026 and again on 19 November:
  1,534 targets, all included; the 18 November build, 1,535). The file
  `uk/hmrc_benefits_in_kind_facts.json` says none of its rows is a
  calibration target. That holds for this copy, which only seeds the stage's
  draws; the calibration takes the same Table 1 and 2C figures from the
  Chronicle feed (`uk/uk_population_targets.json`). Not targets: car fuel
  benefit, Class 1A, and HMRC's breakdowns by income band and region.
- **Rules: Partly done.** PolicyEngine/policyengine-uk at `98381bf`
  (2.179.2), added in 2.165.0 (29 October 2026):
  `variables/gov/hmrc/income_tax/benefits_in_kind/company_car_benefit.py`,
  `car_fuel_benefit.py`, `company_car_appropriate_percentage.py`,
  `benefits_in_kind.py`, and `national_insurance/class_1a/ni_class_1a.py`.
  53 YAML test cases (24 + 10 + 11 + 8) plus `test_company_car_benefit.py`.
  The pull request that added them (#2750) passed its checks; CI at `98381bf`
  itself mostly skipped, and the independent check ran the 53 YAML cases and
  the 37 cases of `test_company_car_benefit.py` locally, all passing. Not
  modelled, as the code says: optional remuneration arrangements (ITEPA
  s. 120A), classic, shared and pool cars, part-year fuel, vans.
- The benefits enter taxable employment income (so the personal allowance
  taper and the High Income Child Benefit Charge see them), not Class 1 NICs
  and not Universal Credit earnings.

## 9. What we model today, benefit by benefit

- Company car: calibration done; rules and data partly done, for the reasons
  on slide 8 (no OpRA, classic, shared or pool cars; availability and
  private-use payments at defaults).
- Car fuel: rules and data partly done. Who gets fuel is from the FRS, but
  the code has no part-year fuel, and the fuel benefit reads the same imputed
  CO2 and default availability as the car. Not a calibration target. HMRC
  Table 1: 40,000 recipients, £140m taxable value in 2024-25.
- Class 1A: computed on car and fuel benefits only
  (`ni_class_1a.py`: rate times `benefits_in_kind`). No target.
- Pension salary sacrifice: the £2,000 cap is baseline law from 6 April 2029
  (`parameters/gov/hmrc/national_insurance/salary_sacrifice_pension_cap.yaml`);
  amounts from FRS `SPNAMT` plus an imputation in Microcosm's own
  `salary_sacrifice` stage (`uk_runtime/salary_sacrifice.py`); seven HMRC and
  OBR targets included in the 15 November build, each within 1%.
- Medical insurance, vans, loans, accommodation, other salary sacrifice:
  no rules, no data in the household file, no targets. The FRS asks whether
  a benefit replaces salary (yes or no: SalSac, FuelBn, VchSac, question
  instructions pp. 226 to 230). Of the salary-sacrifice arrangements it gives
  amounts only for pensions and childcare vouchers; it also asks the value of
  private fuel and of other vouchers. The FRS asks who
  receives medical insurance and a van but not the value; the van charge is
  a flat amount in law, so who has one is most of what is needed. Loans and
  accommodation have no ExpBen code, but the FRS asks about both elsewhere:
  whether the home goes with a household member's job (AccJob, p. 52),
  whether the landlord employs someone in the household (p. 49), and loans
  from an employer (OthDed, p. 208; DLOANTY, p. 359). It lacks the value: no
  loan balance or interest rate, and no annual value of the home.

## 10. Part 3: scoping the project

## 11. Data: surveys mostly say who, HMRC says how much

- FRS 2024-25: the base dataset. Microcosm UK builds on it (`frs_spine`,
  stage 1 of 56); the SPI is imputed onto it from stage 16. It records who
  receives each of 13 employer benefits; for cars, the
  banded list price, fuel type and employee contribution; amounts for
  pension salary sacrifice, childcare vouchers, other vouchers and private
  fuel. No value for medical
  insurance, no CO2.
- Survey of Personal Incomes (SPI) Public Use Tape: one field, `EPB`,
  combines expenses payments and benefits. Confirmed in the 2022-23
  documentation; the 2023-24 tape was released on 5 November 2026 and its
  documentation was not read.
- Annual Survey of Hours and Earnings (ASHE): employers report whether the
  employee received benefits in kind in the last tax year and their total
  value, one amount per job, and whether pension contributions went through
  salary sacrifice. It is the only record-level value of benefits in kind on
  the slide. Latest results are 2026, provisional (22 October 2026). ONS says
  the salary sacrifice variable is collected but not processed for outputs;
  the official cap costing used ASHE 2024. Access to the microdata was not
  checked, so the slide says "Possible".
- HMRC benefits in kind statistics: cars and fuel by CO2 band, fuel type,
  income band and region, and the Class 1A total. Totals only.
- HMRC benefits by type: 2016-17, the last final year (2017-18 provisional);
  P11D-only, so it is for validation, or for calibration only with
  assumptions.
- The Use chips are our assessment, in one neutral style so they don't read
  as the status chips of slides 8 and 9.
- HMRC tax relief statistics (January 2026): cycle to work £130m and
  employer-supported childcare £180m in 2025-26 (forecasts); NICs relief on
  employer pension contributions.
- Budget and OBR costings: for checking reform results.
- Not checked: Wealth and Assets Survey questionnaire, Understanding
  Society, the Living Costs and Food Survey questionnaire, SMMT. HMRC's
  ready reckoner (June 2025) has no benefit in kind line.

## 12. The gap, in five layers

- Rules: the missing benefits; the OpRA rule; Class 1A on every benefit.
- Data: values for medical insurance, loans and accommodation; the SPI's
  single combined amount, which today sits inside employment income on
  SPI-drawn records; no car CO2 or part-year use in the FRS.
- Calibration: no final by-type totals since 2016-17; car fuel, Class 1A and
  cars by income band are published but not yet targets.
- Validation: compare model scores with the official costings. A static
  score holds behaviour fixed (no one changes car, pay or pension
  contributions in response); the official costings net off responses.
- We have scored the 2030-31 car-rate rise on the 3 November national, and
  both runs come in below the Budget's figures
  (PolicyEngine/policyengine.py#731,
  PolicyEngine/uk-autumn-budget-dashboard-2026#392). We haven't established
  why. Keep the figures off the slides and out of these notes.
- policyengine-uk's regression test of the pension cap pins about £1.8bn in
  2030 with a tolerance of £1.0bn either way, set in February 2026. It runs
  on an older data file, not Microcosm UK, and it isn't static: whenever the
  cap applies, policyengine-uk cuts every worker's employment income by
  0.16% (`gov.contrib.behavioral_responses.salary_sacrifice_broad_base_haircut_rate`).
- Behaviour, the fifth layer. Budget 2025 policy costings (pp. 47-48): the
  £2,000 cap raises £5,070m static in 2030-31 and £2,585m after responses.
  The OBR's note of 5 February 2026 (Table 1.6) splits the 2030-31 drop:
  employers switching to ordinary contributions £0.7bn, pass-through to
  wages and profits £0.7bn, employees moving to relief-at-source schemes
  £0.6bn (partly timing), other responses £0.3bn. The Budget 2026 costing of
  the 2030-31 car rates (p. 95) nets off company car users switching to
  cheaper cars. The £5,350m and £2,920m on slide 6 are after responses.

## 13. Options: three phases

- Phase 1, cars, fuel and vans: validate cars against HMRC by income band and
  region; make fuel and Class 1A targets; add the flat van charge.
- Phase 2, other benefits: medical insurance, loans, accommodation; impute
  values; Class 1A on all of them. The largest, because the rules are new and
  the data are thin.
- Phase 3, salary sacrifice and OpRA: salary-sacrifice cars, cycle to work,
  childcare; the OpRA rule.
- Effort is our rough ranking. No weeks or costs have been estimated.
- Outputs: static scores, except that the pension cap run includes
  policyengine-uk's 0.16% pay cut. Which responses to add is a question for
  NEF (slide 15). For both the car rates and the pension cap, the gap to the
  official costings is open, and the project would have to explain it.
- Class 1A results would be revenue only: the model assigns Class 1A to no
  household (it stays with employers; policyengine-uk issue #2752).

## 14. Questions this would answer

Three examples, each with the scenario and the phase it needs. Each would
report revenue, the effect by income decile, winners and losers, and poverty
(before housing costs). None has been run for this deck. Compare each with
the official costing; the notes to slide 12 give what we know so far.

## 15. Questions for NEF

- Responses: in the official pension cap costing the largest were employers
  switching to ordinary contributions and pass-through to pay; for the car
  rates, switching to cheaper cars (notes to slide 12).
- On publishing: the SPI licence requires us to submit any material that
  includes analyses of the SPI to HMRC at least 10 working days before
  distribution (including a conference or seminar presentation) or
  publication, and to annex HMRC's comments if asked (UK Data Service, SN
  9638 conditions of use).

## 16. Thank you

vahid@policyengine.org

## Could not be sourced

- Final figures after 2016-17 for the number of people with any benefit in
  kind, and for income tax on all benefits.
- Final medical insurance, van, loan and accommodation figures after
  2016-17.
- A Class 1A receipts series (only the liability in HMRC's Table 5).
- Whether payrolled benefits appear in the SPI's `EPB` field.
- Company car percentages for 2031-32.
- How UKMOD, the IFS's TAXBEN or HM Treasury's model treat benefits in kind.
