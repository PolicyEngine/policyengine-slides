# APPAM 2026 roundtable: speaker notes

State Policy Impacts on Family Resources: Tools to Improve Policy Analysis. Thursday, November 5, 2026, 10:15 to 11:45am ET, Wellesley room, Boston. Cynthia Osborne moderates. Tara Watson and Linda Giannarelli also present. Each presenter has 10 to 12 minutes.

Thirteen slides in about 11 and a half minutes.

## Before presenting

- If the room's laptop won't have internet, send Cynthia's team the PDF on Thursday morning.
- Before the session, scan slide 13's QR code and check that it opens this deck.
- Before the session, run a report in Build with the credit at $880 and the recording's Nationwide population, and check that it finishes.
- About 15 minutes before the session, click the CliffWatch address on slide 9 and give CliffWatch up to a minute to finish drawing the chart. If it fails, try again a minute later. Slide 9's recording doesn't depend on it.
- Then press next on slide 9 to play its recording once, in the browser you'll present from. If it doesn't start, the slide keeps its screenshots, so talk over those and press next again.
- Keep these notes on your phone and the PDF on your laptop. Present from the live deck at policyengine.org/slides/appam-2026, and if the network fails, present from the PDF.

## 1. PolicyEngine for state policy research (0:00, 15 seconds)

Thanks, Cynthia, for putting this session together, and thanks to Tara and Linda for sharing the table.

## 2. PolicyEngine computes taxes and benefits for a family or a population (0:15, 1 minute)

PolicyEngine is a nonprofit that provides free, open source software to compute the impact of public policy. We calculate federal and state income taxes and credits and the main benefit programs for one household or a whole population.

With it, researchers can compare families, measure their own samples and estimate reforms.

## 3. One family ends up with $27,711 in Ohio and $54,345 in Alaska (1:15, 1 minute 15 seconds)

Take one family under each state's 2026 rules. One parent works full time and earns $40,000, has two young children, and pays $1,500 a month for child care. We put them in each state's largest county and treat them as a new applicant for every program.

The gray base shows earnings after taxes and credits, minus the full child care bill, and benefits sit above it. Ohio and Nevada turn this family down for child care help. Both set a lower income limit for new applicants than for families already enrolled. Alaska pays each person a $1,000 dividend and $200 of energy relief, $3,600 for this family.

The gap between the top and bottom state moves with earnings: $16,404 at $30,000 and $21,670 at $60,000.

## 4. States differ most on child care subsidies, then SNAP and state taxes (2:30, 1 minute 15 seconds)

Each mark shows one state on one line of the family's budget. Federal taxes and credits vary least, and states drive the rest through child care subsidies, SNAP options and their own taxes.

With Texas's subsidy, the family gets $15,791 in child care help and loses $5,598 of SNAP. Congress lets SNAP households deduct their care costs, so this family deducts less when Texas pays for care. The family ends up $10,193 ahead.

## 5. This family loses up to $15,343 at a benefit cliff, at earnings that vary by state (3:45, 1 minute)

Each gray line follows one state as earnings rise. In Maryland, Iowa and Idaho, the family crosses the child care income limit after a $500 raise. It then loses between $14,511 and $15,343. In 46 of 51 jurisdictions, the family's largest drop comes from losing the subsidy.

Across states, the median total effective marginal tax rate falls from 63.6% at $30,000 of earnings to 24.6% at $60,000.

## 6. We record when each value took effect and cite its sources (4:45, 45 seconds)

Look at one parameter, the amount per dependent in the Massachusetts child and family credit. The Legislature raised it to $310 for 2023 and $440 for 2024. We record each value's effective date and cite the session law and tax forms behind it.

## 7. Build simulated eligibility measures on your own microdata (5:30, 1 minute 30 seconds)

To build a simulated eligibility measure, map your survey or administrative file to our variable names, set the state and run it. Keep the people and their incomes fixed and change only the state. Any difference between runs then comes from the rules in that state.

We drew 3,000 households with children from Populace US, our default microdata, and ran them through each state's 2024 rules. The same families pass SNAP's tests at rates from 17.5% in Arkansas and Tennessee to 38.3% in Maryland. Their children qualify for Medicaid or CHIP at rates from 39.8% in Idaho to 66.1% in Hawaii.

If your pipeline already runs on TAXSIM, our TAXSIM-compatible interface at policyengine.org/us/taxsim takes the same files. It runs tax years 2021 onward through PolicyEngine and sends earlier years to TAXSIM35.

## 8. We estimate Massachusetts would forgo $577 million if lawmakers doubled its child and family credit (7:00, 1 minute 30 seconds)

Take the parameter from a moment ago and double it, from $440 to $880 per dependent. We estimate Massachusetts would forgo $577 million in 2026, and that 29.4% of its households would gain and none would lose. Under the Supplemental Poverty Measure, or SPM, the poverty gap would shrink by $169 million.

We ran this on the Populace US local-area file, which we use for state and district results. It holds 36,491 Massachusetts household records, an effective sample of about 301 households, or 132 among those with children. We estimate that 21.4% of the state's children lived below the SPM threshold in 2025, and Census reports 12.8% for 2023 to 2025. We estimate that the 2026 child poverty rate would fall by about 0.2 points under the doubled credit.

On our Child Poverty Impact Dashboard, you can run child tax credit, EITC, SNAP and state tax credit reforms state by state.

## 9. You can find a family's cliffs and build a reform without writing code (8:30, 1 minute)

We also built two web tools that need no code.

*Press next to play the recording, which runs 47 seconds with no sound, and talk over it.*

CliffWatch charts a household's net income as its earnings rise and marks where a raise leaves it with less. For example, a single parent of two school-age children in Massachusetts loses the state's cash assistance, TAFDC, when earnings pass $18,000. CliffWatch counts health coverage in net income. When you try it, the chart can take up to a minute to finish drawing.

In Build, you can open the same Massachusetts credit, set it to $880 and run a report.

*The recording stops on the button that runs the report. Press next when you finish.*

## 10. Research questions and the tools that answer them (9:30, 15 seconds)

With PolicyEngine, you can also change any parameter, run your own microdata, read every rule and project current law through 2035.

## 11. What we leave out (9:45, 1 minute)

We model child care subsidies in all 51 jurisdictions from August 2026. We copy each parameter's earliest value back to 2015, so check historical runs against each year's rules. We take earnings and paid leave benefits as inputs and hold them fixed when you change minimum wage or paid leave law. We hold hours fixed unless you set a labor supply response.

Our local-area file holds thin state samples, about 108 effective households with children in the median state. Our child poverty estimates on that file miss Census's 2023 to 2025 averages by 3.2 points on average. In 29 of 51 jurisdictions, they fall outside Census's margin of error. For state child poverty rates, bring your own microdata.

## 12. The Axiom Foundation encodes rules with their source text and dates (10:45, 45 seconds)

I also lead the Axiom Foundation. We publish open, machine-readable encodings of rules, starting with tax and benefit policy. Congress sets SNAP's 20% earned income deduction, and Georgia's Division of Family and Children Services applies it in section 3612 of its SNAP manual. We record the manual's words and effective date beside each value.

When we run this rule through the Axiom engine, a family earning $30,000 a year gets a $500 monthly deduction. Ask for November 2019, before the manual section we encoded took effect, and the engine refuses.

## 13. Thank you (11:30)

Scan the QR code to open this deck. From its last slide, you can open the code behind each chart.

## Questions

**Could sampling error explain the misses against Census?** Our own sampling error could produce misses of that size. We estimate a standard error of 4.6 points on Massachusetts's 2026 child poverty rate, more than twice the 2.0-point margin of error Census reports for the state. Our file holds fewer effective households with children in the median state, about 108 against Massachusetts's 132.

**Why does CliffWatch's net income exceed slide 3's net resources?** CliffWatch counts Medicaid, CHIP and premium tax credits in net income, and we leave health coverage out of net resources. Slide 9's family also pays nothing for child care, and slide 3's family pays $1,500 a month before any subsidy.

**Does CliffWatch use local premiums?** CliffWatch passes PolicyEngine US the state and no county, so in Massachusetts the model computes premium tax credits from Barnstable County's benchmark plan.
