# APPAM 2026 roundtable: speaker notes

State Policy Impacts on Family Resources: Tools to Improve Policy Analysis. Thursday, November 5, 2026, 10:15 to 11:45am ET, Wellesley room, Boston. Cynthia Osborne moderates. Tara Watson and Linda Giannarelli also present. Each presenter has 10 to 12 minutes.

Twelve slides in about 11 minutes.

## Before presenting

- Open the deck once on the presentation laptop. It needs no live connection after it loads.
- Press F for fullscreen, and the page control leaves the footer.
- Keep the PDF backup on the laptop in case the room's network fails.
- Check the slide order against what Cynthia, Tara and Linda present first, and cut slide 9's table to one sentence if they have already covered it.

## 1. PolicyEngine for state policy research (0:00, 15 seconds)

Thanks, Cynthia, for putting this session together, and thanks to Tara and Linda for sharing the table.

## 2. PolicyEngine computes taxes and benefits for a family or a population (0:15, 1 minute)

PolicyEngine is a nonprofit that provides free, open source software to compute the impact of public policy. We calculate federal and state income taxes and credits and the main benefit programs for one household or a whole population.

Researchers use it three ways: they compare families, measure their own samples and estimate reforms.

## 3. One family ends up with $27,711 in Ohio and $54,345 in Alaska (1:15, 1 minute 15 seconds)

Take one family under each state's 2026 rules. One parent works full time and earns $40,000, has two young children, and pays $1,500 a month for child care. We put them in each state's largest county and treat them as a new applicant for every program.

The gray base shows earnings after taxes and credits, minus the full child care bill, and benefits sit above it. Ohio and Nevada turn this family down for child care help because both set a lower income limit for new applicants than for families already enrolled.

The gap between the top and bottom state moves with earnings: $16,404 at $30,000 and $21,670 at $60,000.

## 4. States differ most on child care subsidies, then SNAP and state taxes (2:30, 1 minute 15 seconds)

Each mark shows one state on one line of the family's budget. Federal taxes and credits move least across states, and states drive the rest through child care subsidies, SNAP options and their own taxes.

Run Texas with and without its subsidy, and the lines interact: the family gets $15,791 in child care help and loses $5,598 of SNAP. Congress lets SNAP households deduct their care costs, so this family deducts less when Texas pays for care. The family ends up $10,193 ahead.

## 5. This family loses up to $15,343 at a benefit cliff, at earnings that vary by state (3:45, 1 minute)

Each gray line follows one state as earnings rise. In Maryland, Iowa and Idaho, a $500 raise takes the family past the child care income limit, and the family loses between $14,511 and $15,343. In 46 of 51 jurisdictions, the family's largest drop comes from losing the subsidy.

Across states, the median total effective marginal tax rate falls from 63.6% at $30,000 of earnings to 24.6% at $60,000.

## 6. Parameters record when each value took effect and cite their sources (4:45, 45 seconds)

Here's one parameter, the amount per dependent in the Massachusetts child and family credit. The Legislature raised it to $310 for 2023 and $440 for 2024. We record each value's effective date and cite the session law and tax forms behind it. Ask for any date and you get the value in force on that date.

## 7. Build simulated eligibility measures on your own microdata (5:30, 1 minute 30 seconds)

To build a simulated instrument, read your survey or administrative file, set the state and run it. Keep the people and their incomes fixed, change only the state, and any difference between runs comes from that state's rules.

We drew 3,000 households with children from Populace US, our default microdata, and ran them through each state's 2024 rules. The same families pass SNAP's tests at rates from 17.5% in Arkansas and Tennessee to 38.3% in Maryland. Their children qualify for Medicaid or CHIP at rates from 39.8% in Idaho to 66.1% in Hawaii.

If your pipeline already runs on TAXSIM, our TAXSIM-compatible interface takes the same files. It runs tax years 2021 onward through PolicyEngine and sends earlier years to TAXSIM35.

## 8. We estimate Massachusetts would forgo $577 million if lawmakers doubled its child and family credit (7:00, 1 minute 30 seconds)

Take the parameter from a moment ago and double it, from $440 to $880 per dependent. We estimate Massachusetts would forgo $577 million in 2026. Of Massachusetts households, 29.4% would gain and none would lose, and under the Supplemental Poverty Measure, or SPM, the poverty gap would shrink by $169 million.

We ran this on the Populace US local-area file, which we use for state and district results. It holds 36,491 Massachusetts households, an effective sample of about 395. We estimate 21.4% of the state's children below the threshold in 2025, and Census reports 12.8% for 2023 to 2025. We estimate that the 2026 child poverty rate would fall by about 0.2 points under the doubled credit, from that high baseline.

On our Child Poverty Impact Dashboard, you can run child tax credit, EITC, SNAP and state tax credit reforms state by state.

## 9. Research questions and the tools that answer them (8:30, 45 seconds)

The Welfare Rules Database, the CCDF Policies Database and the Policy Tracking System record what states chose. The State Safety Net Interactive and the Policy Impact Calculator show what those choices mean for families, and the Interactive reaches back to 2001. State of the Safety Net shows who qualifies and takes part.

With PolicyEngine, you can change any parameter, write new rules, run your own microdata, read and edit every line of code, and project current law through 2035.

## 10. What these results leave out (9:15, 45 seconds)

We model child care subsidies in all 51 jurisdictions from August 2026. We copy early parameter values back to 2015, so validate any historical run before you use it. We take earnings and paid leave benefits as inputs and hold them fixed when you change minimum wage or paid leave law. We hold hours fixed unless you set a labor supply response.

Our local-area file holds thin state samples, about 125 effective households with children in the median state. Our child poverty estimates on that file miss Census's 2023 to 2025 averages by 3.2 points on average, and 29 of 51 jurisdictions fall outside Census's margin. For state child poverty rates, bring your own microdata.

## 11. The Axiom Foundation encodes rules with their source text and dates (10:00, 1 minute)

I also lead the Axiom Foundation. We publish open, machine-readable encodings of rules, starting with tax and benefit policy. Georgia's Division of Family and Children Services applies a 20% earned income deduction in section 3612 of its SNAP manual. We record the manual's words and effective date beside each value.

We ran this rule through the Axiom engine. A family earning about $40,000 a year who reports on time gets a $666.67 monthly deduction, and the same family reporting late gets nothing. Ask for November 2019, before the manual section we encoded took effect, and the engine refuses.

## 12. Thank you (11:00)

Scan the QR code to open this deck, and follow the GitHub link to read the code behind each chart.
