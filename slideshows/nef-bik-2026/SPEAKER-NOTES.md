# Speaker notes: modelling benefits in kind (NEF, November 2026)

A scoping conversation. Nothing has been agreed and nothing has been run for
this deck: there are no PolicyEngine results on any slide. Every figure is
from the source named here, read on 18 November 2026; `content.ts` pins each
one. Budget 2026 was on 28 October 2026.

## 1. Cover

Vahid Ahmadi and Max Ghenis are both named. Remove Max if he isn't there.

## 2. Today

Three parts: what benefits in kind are and how big; what PolicyEngine covers
today; and scoping the project.

## 3. Part 1: benefits in kind in the UK

## 4. A benefit in kind is pay that isn't cash

- Benefit in kind (BIK): something an employer provides other than cash.
- Each benefit has a taxable value ("cash equivalent"). For cars, fuel, vans,
  loans and living accommodation it is a formula in law (ITEPA 2003); for most
  other benefits it is the cost to the employer.
- Company car: list price times the "appropriate percentage", which depends
  on CO2 emissions. In 2026-27 it runs from 4% (zero emission) to 37%
  (Budget 2026 overview, Annex A).
- The employee pays income tax on the taxable value at their marginal rate.
  The employer reports it on a P11D after the year ends, or taxes it through
  payroll ("payrolling").
- The employer pays Class 1A National Insurance contributions (NICs) at 15%
  in 2026-27 (Rates and thresholds for employers 2026 to 2027). There is no
  employee NIC on a benefit in kind.
- OpRA (optional remuneration arrangement), since 6 April 2017: when an
  employee gives up salary for a benefit, the taxable amount is the greater
  of the salary given up and the normal taxable value. Exempt from this rule:
  employer pension contributions, pensions advice, childcare vouchers and
  workplace nurseries, cycle to work, and cars with CO2 of 75 g/km or less
  (HMRC booklet 480, Appendix 12).

## 5. £9.5bn of taxable benefits in 2024-25

- Left: three definitions in plain words. Class 1A has been 15% since April
  2025; it was 13.8% in 2024-25, which is why £1.31bn is 13.8% of £9.5bn.
- Middle, HMRC Benefits in kind statistics, July 2026, tax year 2024-25,
  provisional:
  - £9.5bn taxable value of all benefits liable to Class 1A, and £1.31bn of
    Class 1A due (Table 5, which HMRC labels experimental; it excludes
    termination awards and sporting testimonials);
  - 920,000 people with a company car, £3.07bn taxable value (Table 1). HMRC
    says the count is probably an underestimate, because some payrolled cars
    are not reported;
  - 51% of company cars are fully electric (Tables 2B and 2D).
- Right, in its own panel: the last year HMRC published every type of
  benefit, 2016-17 (Table 4.5, June 2019). Since 2020 the tables cover cars
  and fuel only, plus the Class 1A total. Shares of the £8,250m total: car
  55%, medical and dental insurance 23%, car fuel 8%, van 2%, beneficial
  loans 2%, accommodation 1%; the rest is mileage allowances, van fuel and
  other benefits. In 2016-17, 3.66 million people had at least one taxable
  benefit, 2.38 million of them medical or dental insurance.
- Do not read the 2016-17 shares against today's pounds: the two panels are
  different years, and the mix has changed (the electric car rate is low).
- Not published: the number of people with any benefit in kind, and income
  tax on all benefits, for any year after 2016-17. HMRC's receipts tables do
  not separate Class 1A.

## 6. The rules are changing each year to 2030-31

- Electric (zero-emission) company car rate: 4% in 2026-27, 5%, 7%, 9%, and
  10% in 2030-31 (Budget 2026 overview, Annex A). The maximum rate is 37% to
  2027-28, then 38%, 39% and 40%.
- 2026-27: car fuel multiplier £29,200; van benefit charge £4,170; van fuel
  £798.
- 6 April 2027: payrolling (taxing benefits through payroll in real time
  rather than on a P11D) becomes mandatory for cars, vans, car and van fuel
  and medical benefits; 6 April 2028 for most other benefits. Loans and
  accommodation stay outside.
- 6 April 2029: NICs relief on pension salary sacrifice capped at £2,000 a
  year. Budget 2026 recosting (Table 6.4): +£5,350m in 2029-30, +£2,920m in
  2030-31, +£3,665m in 2031-32. The first year is inflated by timing: the
  OBR's supplementary release (5 February 2026) says a switch to
  relief-at-source schemes adds to 2029-30 and takes from 2030-31.
- 6 April 2030: employee car ownership schemes brought into the benefit in
  kind rules (announced; delayed at Budget 2025).
- Chips: Exchequer yield from Budget 2026. "Car rates: +£700m" is the
  2028-29 yield of the rates set for 2028-29 and 2029-30 (Table 6.4; +£975m
  in 2029-30). "Car rates: +£310m" is the 2030-31 yield of the rates
  announced at Budget 2026 (Table 6.1; +£345m in 2031-32).

## 7. Part 2: what PolicyEngine covers

## 8. How the model works: company cars, end to end

Each stage carries a status for company cars. What each rests on:

- **Survey: Done.** Family Resources Survey (FRS) 2024-25 (UKDS SN 9563).
  PolicyEngine/microcosm at `bcb5cba` (main),
  `packages/microcosm-build/src/microcosm/build/uk_runtime/frs_spine.py`,
  reads the job-table items EXPBEN01 (company car), EXPBEN03 (fuel for
  private use), CARVAL (banded list price), FUELTYP, CARCON and CARAMT. The
  FRS question ExpBen lists 13 employer benefits.
- **Imputation: Partly done.** `uk_runtime/company_cars.py`, stage 18 of 56
  in `uk/source_stages.json`. List price is drawn within the FRS band from
  Wealth and Assets Survey round 8 company-car prices; CO2 is assigned to
  match HMRC Table 2A band shares; unknown fuels at Table 2C shares. Not
  imputed: the share of the year the car is available, the employee's
  payments for private use, and electric range (set to 50 miles for 1–50 g/km
  cars), because no survey records them.
- **Calibration: Done.** The certified national build of 15 November 2026
  (policyengine.py 6.20.1) has 1,534 targets. Its five
  `hmrc.benefits_in_kind` targets are included and fitted within 1%:
  recipients 915,708 against 920,000; taxable value £3,068.6m against
  £3,070m; fully electric 465,215 against 465,000; petrol 390,819 against
  390,000; diesel 59,674 against 60,000 (calibration dashboard data route,
  read 18 November 2026). Not targets: car fuel benefit, Class 1A, and
  HMRC's breakdowns by income band and region.
- **Rules: Partly done.** PolicyEngine/policyengine-uk at `98381bf`
  (2.179.2), added in 2.165.0 (29 October 2026):
  `variables/gov/hmrc/income_tax/benefits_in_kind/company_car_benefit.py`,
  `car_fuel_benefit.py`, `company_car_appropriate_percentage.py`,
  `benefits_in_kind.py`, and `national_insurance/class_1a/ni_class_1a.py`.
  53 YAML test cases (24 + 10 + 11 + 8) plus `test_company_car_benefit.py`;
  CI on main passed at that commit. Not modelled, as the code says: optional
  remuneration arrangements for cars, part-year fuel, vans.
- The benefits enter taxable employment income (so the personal allowance
  taper and the High Income Child Benefit Charge see them), not Class 1 NICs
  and not Universal Credit earnings.
- The older Enhanced FRS (policyengine-uk-data 1.59.2) has no company-car
  inputs. This slide is about Microcosm UK.

## 9. What we model today, benefit by benefit

- Company car: rules, data and calibration done, as on slide 8 (the detail
  that is missing is on slide 8).
- Car fuel: rules done; who gets fuel is from the FRS; not a calibration
  target. HMRC Table 1: 40,000 recipients, £140m taxable value in 2024-25.
- Class 1A: computed on car and fuel benefits only
  (`ni_class_1a.py`: rate times `benefits_in_kind`). No target.
- Pension salary sacrifice: the £2,000 cap is baseline law from 6 April 2029
  (`parameters/gov/hmrc/national_insurance/salary_sacrifice_pension_cap.yaml`);
  amounts from FRS `SPNAMT` plus an imputation; seven HMRC and OBR targets
  included in the 15 November build, each within 1%.
- Medical insurance, vans, loans, accommodation, other salary sacrifice:
  no rules, no data in the household file, no targets. The FRS asks who
  receives medical insurance and a van but not the value; the van charge is
  a flat amount in law, so who has one is most of what is needed. Loans and
  accommodation are not separate FRS answers (they fall under "any other
  benefits in kind").

## 10. Part 3: scoping the project

## 11. Data: surveys say who, HMRC says how much

- FRS 2024-25: who receives each of 13 employer benefits; for cars, the
  banded list price, fuel type and employee contribution; amounts for
  pension salary sacrifice and childcare vouchers. No value for medical
  insurance, no CO2.
- Survey of Personal Incomes (SPI) Public Use Tape: one field, `EPB`,
  combines expenses payments and benefits. Confirmed in the 2022-23
  documentation; the 2023-24 tape was released on 5 November 2026 and its
  documentation was not read.
- Annual Survey of Hours and Earnings (ASHE): employers are asked about
  annual benefits in kind and salary sacrifice. Latest results are 2026,
  provisional (22 October 2026). ONS says the salary sacrifice variable is
  collected but not processed for outputs; HM Treasury's cap costing used
  ASHE 2024. Access to the microdata was not checked, so "Impute" is a
  possibility, not a plan.
- HMRC benefits in kind statistics: cars and fuel by CO2 band, fuel type,
  income band and region, and the Class 1A total. Totals only.
- HMRC benefits by type: 2016-17, the last year.
- HMRC tax relief statistics (January 2026): cycle to work £130m and
  employer-supported childcare £180m in 2025-26 (forecasts); NICs relief on
  employer pension contributions.
- Budget and OBR costings: for checking reform results.
- Not checked: Wealth and Assets Survey questionnaire, Understanding
  Society, the Living Costs and Food Survey questionnaire, SMMT. HMRC's
  ready reckoner (June 2025) has no benefit in kind line.

## 12. The gap, in four layers

- Rules: the missing benefits; the OpRA rule; Class 1A on every benefit.
- Data: values for medical insurance; loans and accommodation; the SPI's
  single combined amount, which today sits inside employment income on
  SPI-drawn records.
- Calibration: no by-type totals since 2016-17; car fuel, Class 1A and cars
  by income band are published but not yet targets.
- Validation, known in advance: the repository's own note
  (`docs/uk-company-cars-316.md` in microcosm) expects a static score of the
  2030-31 car-rate rise to fall about 30% to 45% short of the Budget's £310m;
  and the model's test of the salary-sacrifice cap expects about £1.8bn in
  its 2030 run, against the official costings above. Both are open questions
  for the project, not results.

## 13. Options: three phases

- Phase 1, cars, fuel and vans: validate cars against HMRC by income band and
  region; make fuel and Class 1A targets; add the flat van charge.
- Phase 2, other benefits: medical insurance, loans, accommodation; impute
  values; Class 1A on all of them. The largest, because the rules are new and
  the data are thin.
- Phase 3, salary sacrifice and OpRA: salary-sacrifice cars, cycle to work,
  childcare; the OpRA rule.
- Effort is relative. No weeks or costs have been estimated.

## 14. Questions this would answer

Three examples, each with the scenario and the phase it needs. Each would
report revenue, the effect by income decile, winners and losers, and poverty
(before housing costs). None has been run.

## 15. Questions for NEF

## 16. Thank you

vahid@policyengine.org

## Could not be sourced

- The number of people with any benefit in kind, and income tax on all
  benefits, after 2016-17.
- Medical insurance, van, loan and accommodation figures after 2016-17.
- A Class 1A receipts series (only the liability in HMRC's Table 5).
- Whether payrolled benefits appear in the SPI's `EPB` field.
- Company car percentages for 2031-32.
- How UKMOD, the IFS's TAXBEN or HM Treasury's model treat benefits in kind.
