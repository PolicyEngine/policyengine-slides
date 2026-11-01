# APPAM 2026 roundtable: speaker notes

State Policy Impacts on Family Resources: Tools to Improve Policy Analysis. Thursday, November 5, 2026, 10:15 to 11:45am ET, Wellesley room, Boston. Cynthia Osborne moderates. Tara Watson and Linda Giannarelli also present. Each presenter has 10 to 12 minutes.

Twelve slides in 11 minutes. Every figure on a slide traces to `EVIDENCE.md`.

## Before presenting

- Open the deck once on the presentation laptop. It needs no live connection after it loads.
- Keep the PDF backup on the laptop in case the room's network fails.
- Check the slide order against what Cynthia, Tara and Linda present first, and cut slide 9's table to one sentence if they have already covered it.

## 1. PolicyEngine for state policy research (0:00, 15 seconds)

Thanks, Cynthia, for putting this session together, and thanks to Tara and Linda for sharing the table.

## 2. PolicyEngine computes taxes and benefits for a family or a population (0:15, 1 minute)

PolicyEngine is a nonprofit that provides free, open source software to compute the impact of public policy. Our US model calculates federal and state income taxes and credits and the main benefit programs for one household or a whole population.

Researchers use it three ways, and the next few slides take them in order: compare families, measure their own sample, and estimate reforms.

## 3. One family ends up with $27,711 in Ohio and $54,345 in Alaska (1:15, 1 minute 30 seconds)

Here is one family under each state's 2026 rules. One parent works full time and earns $40,000, has two young children, and pays $1,500 a month for child care. We put them in each state's largest county and treat them as a new applicant for every program.

The gray base holds earnings after taxes and credits, minus the full child care bill. Everything above it comes from benefits. Ohio and Nevada turn this family down for child care help because both set a lower income limit for new applicants than for families already enrolled.

$40,000 works out to $19.23 an hour, which exceeds every state's minimum wage on the Department of Labor's July 2026 table. The gap between the top and bottom state moves with earnings: $16,404 at $30,000 and $21,670 at $60,000.

## 4. Child care subsidies move net resources most, then SNAP and state taxes (2:45, 1 minute 15 seconds)

Each mark shows one state on one line of the family's budget, all on the same scale. Federal taxes and credits barely move. State policy moves the rest.

These lines interact. Run Texas with and without its subsidy: the family gets $15,791 in child care help and loses $5,598 of SNAP, because SNAP deducts what the family pays for care. Net resources rise by $10,193.

## 5. Cliffs cost this family up to $15,343, at earnings that vary by state (4:00, 1 minute)

Each gray line follows one state as earnings rise. In Iowa, Minnesota and Maryland, a $500 raise takes the family past the child care income limit, and the family loses between $13,182 and $15,343. Every large drop here comes from the subsidy ending.

Away from the cliffs, the median state's total effective marginal tax rate falls from 63.6% at $30,000 of earnings to 24.6% at $60,000.

## 6. Parameters record when each value took effect and cite their sources (5:00, 45 seconds)

This file holds one real parameter: the Massachusetts child and family credit. The Legislature raised it to $310 for 2023 and $440 for 2024. Each value carries its effective date, and each citation sits next to the values. Ask the model for any date and it reads the value in force on that date.

## 7. Build simulated eligibility measures on your own microdata (5:45, 1 minute 45 seconds)

Many of you build simulated instruments, so here is how that looks. Read in your survey or administrative file, set the state, and run it. Keep the people and their incomes fixed, change only the state, and any difference between runs comes from that state's rules.

We ran 3,000 households with children from Populace US, our default microdata, through each state's 2024 rules. The same families pass SNAP's tests at rates from 17.6% in Tennessee to 37.4% in Oregon. Their children qualify for Medicaid or CHIP at rates from 38.8% in Idaho to 65.7% in Hawaii.

If your pipeline already runs on TAXSIM, our TAXSIM-compatible interface takes the same files. It runs tax years 2021 onward through PolicyEngine and sends earlier years to TAXSIM35.

## 8. Doubling the Massachusetts child and family credit would cost $555 million (7:30, 1 minute 30 seconds)

Take the parameter from a moment ago and double it, from $440 to $880 per dependent. In 2026 that costs $555 million. 29.8% of Massachusetts households gain, none lose, and the SPM poverty gap shrinks by $167 million.

The poverty rate holds still in this run. Populace US holds 1,522 Massachusetts households, an effective sample of about 255, and no record crosses the threshold. For a small reform in one state, read the poverty gap, which moves with every dollar.

The Child Poverty Impact Dashboard applies the model to child tax credit, EITC, SNAP and state tax credit reforms in every state.

## 9. Research questions and the tools that answer them (9:00, 1 minute)

We all work on the same landscape from different angles. The Welfare Rules Database, the CCDF Policies Database and the Policy Tracking System record what states chose. The State Safety Net Interactive and the Policy Impact Calculator show what those choices mean for families, and the Interactive reaches back to 2001. State of the Safety Net shows who qualifies and takes part.

PolicyEngine adds four things: you can change any parameter or write a new rule, run your own microdata, read and edit every line of code, and project current law forward through 2035.

## 10. What these results leave out (10:00, 45 seconds)

Child care subsidies reach all 51 jurisdictions from 2025, and we copy early parameter values back to 2015, so validate any historical run before you use it. Earnings enter as an input, so the model leaves minimum wage and paid leave effects to tools like the Policy Impact Calculator. Hours stay fixed unless you set a labor supply response.

Our default microdata carries thin state samples, about 185 effective households in the median state, and its child poverty rates differ from Census's by 4.8 points on average. For state poverty levels, bring your own microdata.

## 11. The Axiom Foundation encodes rules with their source text and dates (10:45, 1 minute)

I also lead the Axiom Foundation. We publish open, machine-readable encodings of rules, starting with tax and benefit policy. Here is one Georgia SNAP rule. Georgia allows a 20% earned income deduction. Axiom's file records the manual's own words and the effective date beside each value.

We ran this rule through the Axiom engine. A family earning $3,333.33 a month who reports on time gets a $666.67 deduction, and the same family reporting late gets nothing. Ask for November 2019, a month before the rule took effect, and the engine refuses.

The engine reports `parameter earned_income_deduction_rate has no value for key 0 at 2019-11-01`.

Axiom has encoded some state family-program rules, and that coverage remains partial.

## 12. Thank you (11:45)

The QR code opens this deck, with the code behind each chart.
