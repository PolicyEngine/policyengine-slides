# APPAM 2026 roundtable: speaker notes

State Policy Impacts on Family Resources: Tools to Improve Policy Analysis. Thursday, November 5, 2026, 10:15 to 11:45am ET, Wellesley room, Boston. Cynthia Osborne moderates. Tara Watson and Linda Giannarelli also present. Each presenter has 10 to 12 minutes.

Sixteen slides in about 12 minutes.

## Before presenting

- If the room's laptop won't have internet, send Cynthia's team the PDF on Thursday morning.
- Before the session, scan slide 16's QR code and check that it opens this deck.
- Before the session, open Build's Massachusetts report at app.policyengine.org/us/report/8adb8bf2-355f-4f00-b7b9-1ef56a1deb77 and check that it loads.
- About 15 minutes before the session, click the CliffWatch address on slide 11 and give CliffWatch up to a minute to finish drawing the chart. If it fails, try again a minute later. Slide 11's recording doesn't depend on it.
- Then press next on slide 11 to play its recording once, in the browser you'll present from. If it doesn't start, the slide keeps its screenshots, so talk over those and press next again.
- Slide 3 opens on the models' answers. Press next once to show PolicyEngine's answer. The PDF shows that second state.
- Keep these notes on your phone and the PDF on your laptop. Present from the live deck at policyengine.org/slides/appam-2026, and if the network fails, present from the PDF.

## 1. PolicyEngine for state policy research (0:00, 30 seconds)

Thanks, Cynthia, for putting this session together, and thanks to Tara and Linda for sharing the table. PolicyEngine is a nonprofit that provides free, open source software to compute the impact of public policy. I'll start with one family and one benefit, then widen to every program, every state and a reform, and finish with the ways you can use it.

## 2. How much SNAP does this family get in a year? (0:30, 30 seconds)

Here's a family in Massachusetts. One parent, 30, earns $40,000 working full time and has a 1-year-old and a 4-year-old. The family pays $1,200 a month in rent, and child care costs $1,500 a month before any subsidy. Assume Massachusetts approves a child care subsidy and the family holds it for all twelve months. Massachusetts keeps a waiting list, so I'll come back to that.

How much SNAP does this family get in a year? Take a guess.

## 3. We didn't survey experts. We surveyed AI models. (1:00, 1 minute 15 seconds)

We didn't survey experts, but we did survey AI models. This morning, we gave this family to the newest versions of seven OpenAI and Anthropic models, five calls each with no tools, in the format of PolicyBench, our tax and benefit eval. We told them to assume the subsidy for all twelve months. Their answers run from $0 to $11,160, and the same model gives different answers on the same prompt. For example, Claude Opus 5.5 runs from $3,551 to $8,651.

*Press next.*

PolicyEngine's answer comes to $3,663: $297 a month through September and $330 from October. Eight of the 35 answers came within 10%, none came within $1, and counting three older versions, 15 of all 50 came within 10%. Massachusetts pays all but $1,058 of the $18,000 bill, so the family deducts $1,058 for SNAP.

We assumed the subsidy for all twelve months to get that $3,663. Massachusetts keeps a waiting list and scheduled its new vouchers to start in October, so a new applicant may not get a full year of the subsidy. Without it, the family deducts $18,000 and SNAP comes to $8,739.

*Massachusetts's early education department schedules new vouchers from October (September 9, 2026 board materials, page 17). The three older versions landed 7 of 15 answers within 10%, a better rate than the newest, so this slide doesn't show models improving. `data/model_answers.json` holds all 50 answers.*

## 4. On PolicyBench, most SNAP and state credit answers land more than 10% from PolicyEngine's (2:15, 40 seconds)

Now take the family's other lines. Of the 35 answers, 34 landed within 10% on payroll tax, 23 on state credits and 8 on SNAP.

For a broader comparison than one family, PolicyBench asks 51 models about 100 public households, which it samples with household weights from an eligible subset of our data. Among households with a positive amount, 65.1% of SNAP answers and 82.3% of state refundable credit answers land more than 10% from PolicyEngine's, against 11.3% of payroll tax answers. These rates describe that sample, and PolicyBench grades against PolicyEngine.

## 5. This family ends up with $49,127 once we compute every line together (2:55, 1 minute)

Here's PolicyEngine's answer, line by line. The family earns $40,000, owes no federal income tax and gets $7,130 in federal refundable credits. It pays $3,244 in payroll tax and $1,260 in Massachusetts income tax and gets $2,449 back in state credits. SNAP adds $3,663, WIC $1,447 and the child care subsidy $16,942, against an $18,000 bill. It ends up with $49,127, and without the subsidy it would end up with $37,455. We didn't ask the models for the WIC amount or the subsidy, because PolicyBench asks for neither.

I expect AI to help a lot with questions like this, but it needs to understand the rules at this computational level. Once we have those rules, we can see what changes as a family's state or earnings change, or across a whole population, and one engine runs all of it.

## 6. One family ends up with $26,562 in Indiana and $54,345 in Alaska (3:55, 1 minute 5 seconds)

Now move this family across states, under each state's 2026 rules. We put it in each state's largest county and treat it as a new applicant for every program.

The gray base shows earnings after taxes and credits, minus the full child care bill, and benefits sit above it. Indiana, Missouri, Idaho and Nevada turn this family down for child care help, and Alabama has since June. Each sets its limit for new applicants below this family's $3,333 a month. In three of those states, $2 a month moves the result: Alabama and Missouri post $3,331, which we also apply to Indiana before its April limit. Alaska pays each person a $1,000 dividend and $200 of energy relief, $3,600 for this family. Federal taxes and credits vary least, and states drive the rest through child care subsidies, SNAP options and their own taxes.

The gap between the top and bottom state moves with earnings: $16,404 at $30,000 and $21,670 at $60,000.

## 7. This family's net resources fall up to $17,808 at a benefit cliff, at earnings that vary by state (5:00, 50 seconds)

Each gray line follows one state as a new applicant's earnings rise. In Idaho, Maryland and Missouri, $500 more in earnings puts a new applicant over the child care income limit, and that applicant ends up between $15,124 and $17,808 behind. In Idaho, the same $500 also takes the family past SNAP's gross income limit. We estimate that a family already in the program qualifies up to about $110,000 in Maryland. Since May 2025, Maryland has put applicants who qualify, like this family, on a waiting list. In 46 of 51 jurisdictions, the family's largest drop comes from the subsidy.

Across states, the median total effective marginal tax rate falls from 63.6% at $30,000 of earnings to 24.6% at $60,000.

## 8. Doubling the Massachusetts child and family credit would give this family $880 more (5:50, 35 seconds)

Take one line of this family's budget, the Massachusetts child and family credit. The Legislature raised the amount per dependent to $310 for 2023 and $440 for 2024, and we record each value's effective date and cite the session law and tax forms behind it. With two children at $440, this family gets $880. Double the amount per dependent, and the family gets another $880 and ends up with $50,007, with every other line unchanged.

## 9. We estimate Massachusetts would forgo $577 million if lawmakers doubled its child and family credit (6:25, 30 seconds)

Now run that change on the whole state. We estimate Massachusetts would forgo $577 million in 2026, and that 29.4% of its households would gain and none would lose.

We ran this on the local-area file of Microcosm, our microdata, which we use for state and district results. It holds 36,491 Massachusetts household records, an effective sample of about 301 households, or 132 among those with children.

## 10. You can reach the same PolicyEngine model through Python, TAXSIM, web apps and AI tools (6:55, 1 minute 15 seconds)

We ran the waterfall, the states, the earnings sweep and the reform on the model behind that SNAP answer, and you can reach it several ways. In Python, you can build a simulated eligibility measure: map your survey or administrative file to our variable names, set the state and run it. Keep the people and their incomes fixed and change only the state, and any difference between runs comes from the rules in that state.

For example, we drew 3,000 households with children from Microcosm's national file and ran them through each state's 2024 rules. We estimate that the same families pass SNAP's tests at rates from 17.5% in Arkansas and Tennessee to 38.3% in Maryland.

If your pipeline runs on TAXSIM, our TAXSIM-compatible interface at policyengine.org/us/taxsim takes the same files. It runs tax years 2021 onward through PolicyEngine and sends earlier years to TAXSIM35. On our Child Poverty Impact Dashboard, you can run child tax credit, EITC, SNAP and state tax credit reforms state by state. Our Claude Code plugin gives Claude Code our agents, commands and skills, and you can read and edit every rule in the open source code.

## 11. You can find a family's cliffs and build a reform without writing code (8:10, 1 minute 15 seconds)

CliffWatch and Build need no code.

*Press next to play the recording, which runs 55 seconds with no sound, and talk over it.*

CliffWatch charts a household's net income as its earnings rise and marks where a raise leaves it with less. For example, a single parent of two school-age children in Massachusetts loses the state's cash assistance, TAFDC, when earnings pass $18,000. CliffWatch counts health coverage in net income. When you try it, the chart can take up to a minute to finish drawing.

In Build, you can open the same Massachusetts credit, set it to $880, pick Massachusetts and run a report. The run takes about three minutes, so the recording cuts to the finished report. Build runs an older release, PolicyEngine US 2.2.1, which puts the state's cost at $657 million. This deck's 2.90.2 gives the $577 million on slide 9.

*The recording ends on the report's results. Press next when you finish.*

## 12. We model federal, state and local tax and benefit rules (9:25, 25 seconds)

We model federal income and payroll taxes and credits and every state income tax, in 44 jurisdictions. We model TANF and child care subsidies in all 50 states and DC, plus SNAP, WIC, SSI, school meals, ACA premium tax credits, Medicaid and CHIP eligibility and local taxes such as Philadelphia's wage tax. Our coverage tracker lists 109 programs and marks 87 complete, 18 partial and 4 in progress.

*Once the tracker loads, you can click and scroll in the frame, and the left and right arrow keys still move the deck. After you click in its search box, they move the box's cursor until you click elsewhere in the frame. If you pick a year in its menu, the tracker counts only the programs we mark verified for that year.*

## 13. We build Microcosm, our microdata, from surveys and official totals (9:50, 50 seconds)

We build Microcosm in two files. In the national file, we fit household weights against 5,659 targets, including IRS SOI and Census population totals. We use SSA payment totals to rescale four Social Security benefit inputs, and when we draw SNAP and Medicaid take-up, we keep everyone who reports them. We use IRS PUF records to impute 65 tax-detail variables into copies of CPS ASEC households, and add inputs from SCF 2022, SIPP 2023 and CPS ORG 2024. For state results, we build the local-area file. We transfer inputs from a finished ASEC and PUF donor to 1.5 million 2024 ACS records, draw each record's county and district within its PUMA, and fit 4,765 targets by state and congressional district.

## 14. We're working on Medicaid rules, heating assistance, state poverty accuracy and local taxes (10:40, 30 seconds)

On the rules, we're applying each state's Medicaid rule for an applicant whose spouse isn't aged, blind or disabled, and adding LIHEAP in eight more states. In Microcosm, we fix CPS errors, so our state child poverty rates differ from Census's by design, and we're tracing how calibration, sampling noise and rent imputation move each state's rate. We're also placing households in local tax jurisdictions from their geography and imputing student loan balances.

## 15. The Axiom Foundation encodes rules with source text and dates (11:10, 50 seconds)

I also lead the Axiom Foundation. We publish open, machine-readable encodings of rules, starting with tax and benefit policy. Congress sets SNAP's 20% earned income deduction, and Georgia's Division of Family and Children Services applies it in section 3612 of its SNAP manual. We record the manual's words and effective date beside each value, and our site draws the rule as this graph. Georgia allows the deduction when a household has earned income and reports it on time, and applies the rate to its gross earned income.

When we run this rule through the Axiom engine, a family earning $30,000 a year gets a $500 monthly deduction. Ask for November 2019, before the manual section we encoded took effect, and the engine refuses.

## 16. Thank you (12:00)

Scan the QR code to open this deck. From its last slide, you can open the code behind each chart.

## Questions

**Which older versions did you ask?** GPT-5.6 Terra, GPT-6 Sol and Claude Opus 4.7, five calls each. GPT-6 Sol landed 3 of 5 within 10%, Claude Opus 4.7 landed 4 of 5 and GPT-5.6 Terra landed 0 of 5. Together they landed 7 of 15, against 8 of 35 for the newest versions, so slide 3 doesn't show models improving. The answers cover one family, and they don't rank the models. We show the newest version in each family, whatever it answers.

**How do you get $3,663?** From January through September, the family's $3,333 a month falls by the 20% earnings deduction, the $209 standard deduction, $88.14 of parent fee and the $744 shelter cap, to $1,626. SNAP pays the $785 maximum minus 30% of that, or $297. From October, the $808 maximum, the $217 deduction and the $769 cap leave $1,593 of net income and $330 of SNAP. So 9 × $297 + 3 × $330 = $3,663. Without the subsidy, the family deducts $1,500 a month, and SNAP pays $720 and then $753, or $8,739.

**Are the models wrong, or is PolicyEngine?** PolicyBench grades against PolicyEngine, so a model that misses disagrees with the rules as we compute them. For this family's SNAP, you can check our path by hand.

**Are models getting better?** On PolicyBench's October 23 board of 100 households, the highest score among models released by April 30 came from GPT-5.5, at 87.9, and the highest among all models from GPT-6 Sol, at 95.2. These scores compare release cohorts on one snapshot, and no one measured the board in April at this scoring.

**How do the top models do on SNAP?** On that board, the two highest scorers, GPT-6 Sol and Claude Opus 5.5, miss SNAP by more than 10% in 7 of 13 and 6 of 13 households with a positive reference amount.

**What do PolicyBench's rates count?** PolicyBench pools parsed predictions on positive scored reference amounts, without weights, and leaves out missing or unparseable predictions. Its rates describe 100 public households, which it samples with household weights from an eligible subset of Microcosm.

**Does a newer version always score higher?** No. On PolicyBench's October 23 board, GPT-6.1 Sol scores 90.1, against 95.2 for GPT-6 Sol and 94.1 for Claude Opus 5.5, the top current version on a board that leaves out GPT-6.1 Terra.

**Why do the answers split?** The eight GPT-6.1 Sol and GPT-6 Astra answers near $3,240 write that subsidized care leaves no fee to deduct, and PolicyEngine computes a $1,058 fee. Claude Opus 5.5's $8,651 and Claude Sonnet 5.5's $8,650 write that they deduct the pre-subsidy $1,500 a month, which lands near the $8,739 we compute without the subsidy. Four Claude Haiku 5.5 answers and one Claude Sonnet 5.5 answer write about $994 as the maximum for three people, and we read $785 from USDA's table. One GPT-6 Luna $0 writes that $40,000 exceeds SNAP's gross income limit, and we apply Massachusetts's broad-based categorical eligibility.

**Who checks PolicyBench's answers?** PolicyBench grades against PolicyEngine, and no administrative record stands behind its references. In a September audit, Claude Opus 5.5 flagged 39 references. We affirmed 5, regenerated 6, traced 8 to an input the prompt never states and confirmed 20 as defects in PolicyEngine US 1.755.4. The audit sits at policybench.org/notes/2026-09-22-reference-audit.

**What happens when models get a PolicyEngine tool?** In a 100-household pilot on October 14 and 15, we gave three models the reference engine. Their agreement with that engine rose to between 99.2 and 99.9: GPT-6 Sol from 95.2, Claude Opus 5.5 from 94.1 and Gemini 4 Argon from 88.7. That doesn't independently validate policy accuracy or show that models need such a tool.

**Do you model waiting lists?** No. We model each state's income limits, and none of our take-up flags covers state child care subsidies, so this family gets a subsidy wherever it meets the limit.

Massachusetts's early education department counted 31,724 children on its income-eligible waiting list in July, up from 21,004 in July 2023, with 38,776 in care. It estimates that $31.2 million in new funding will reach about 2,000 children, with new vouchers scheduled from October. This family would hold a priority status there because its income falls below half the state median, and we don't know how long it would wait. Without the subsidy, its SNAP comes to $8,739 and it ends up with $37,455. (Massachusetts Department of Early Education and Care, September 9, 2026 board materials, pages 14 to 17, and Income Eligible Policies, May 6, 2026, page 10. The priority status and the two amounts come from those policies and PolicyEngine US 2.90.2.)

The National Women's Law Center counted 17 states with waiting lists or frozen intake in February 2025. Maryland started its waiting list in May 2025. It now exempts families experiencing homelessness, families on cash assistance or SSI, and siblings of children in the program. Alabama, Indiana and Missouri put new applicants on waiting lists too. The Texas Tribune reported in August that more than 100,000 children wait for Texas's scholarships, and that the state's target falls from 146,736 seats in 2026 to 132,689 in 2027.

**How does a subsidy change SNAP in other states?** With Texas's subsidy, the family gets $15,791 in child care help and loses $5,598 of SNAP. Congress lets SNAP households deduct their care costs, so this family deducts less when Texas pays for care. The family ends up $10,193 ahead.

**Why does Idaho use a different limit?** Idaho sets a ceiling of 175% of the poverty guideline in its rule, and our model follows it. The department moved new applicants to 130% when it reopened applications in January 2025, and it posts $2,888 a month for a family of three. We hold that October 2025 limit fixed through 2026. At 175%, we estimate Idaho's largest drop at $14,511, at $48,000 of earnings, and Maryland's $15,343 would lead the list. At $2,888, the family loses $16,200 of subsidy and, from January through September, its SNAP, because it also passes SNAP's gross income limit.

**Why does Ohio pay this family?** Ohio runs two programs. Publicly Funded Child Care stops at 145% of the poverty guideline for new applicants, $3,302 a month for a family of three since October. Its $3,221 limit through September comes to 141% of the 2026 guideline, the figure PN3 prints in its Roadmap. The Child Care Choice Voucher takes families over that limit up to 200%, or $4,554 a month, and a county that turns a family down for income checks the voucher automatically. Ohio pays a center at least $800 a month for a child of 1 and $750 for a child of 4, which covers this family's $1,500 bill. We add the voucher to the program our model carries. We assume $750 of care per child at an open center with a Publicly Funded Child Care provider agreement, and that the family gets a voucher from the available funding. Without it, we estimate the family would end up with $27,711. The 27% copay in the Roadmap belongs to Publicly Funded Child Care. When the voucher leaves tuition uncovered, Ohio encourages programs in Procedure Letter 36 to charge no more than 9% of monthly gross income.

**Why does Nevada turn this family down?** Nevada sets its limit for new applicants at 41% of state median income, $2,890 a month for three on its October 2025 chart. PN3 prints the same 41%, or 127% of poverty, in its Roadmap. Urban lists $5,315 a month for October 2023, when Nevada set its limit at 85% of the median.

**Why does South Dakota pay only five months?** We model South Dakota's program from August 2026, so $7,500 equals five months at $1,500. PN3 prints its limit at 209% of poverty in its Roadmap, so this family qualifies on income all year, and we leave out January through July.

**Does Georgia pay this family?** We count $15,244 in Georgia, and Georgia may turn the family down. The family meets Georgia's $48,350 income limit for three. But Georgia denies new applicants outside its priority groups, and its very low income group stops at $13,660. This family would qualify through another group if, for example, its 4-year-old attends Georgia's Pre-K. We don't model priority groups. Without the subsidy, we estimate the family would end up with $27,711.

**Does any posted limit sit close to this family's income?** Yes, in three states $2 a month moves the result. Alabama, since June 1, and Missouri post $3,331 a month for new applicants, 150% of the 2025 guideline, and this family earns $3,333. We apply both limits and hold Indiana to the same $3,331 before April. At the limits our model reads, we estimate it would end up with $40,722 in Alabama, $41,931 in Missouri and $31,487 in Indiana. So $2 a month moves Missouri's figure by $14,220, Alabama's by $8,498 and Indiana's, which slide 6's title prints, by $4,925. In Indiana, only January through April turn on the $2, because this family also exceeds the $3,074 limit Indiana has applied since April 5. PN3's 137% comes to about $3,119 a month, so on PN3's figure the $2 doesn't decide Indiana's result.

We test a new applicant in every month, so Alabama's five months don't describe a real family's year. A family Alabama approves in May would keep the subsidy in June, because Alabama sets a higher limit for families in the program. Our model reads that limit as 200% of the guideline from its state plan. We estimate $14,568 for a family in the program all year.

**Does Maryland's limit match what it posts?** Sources differ. Maryland Family Network and the Department of Legislative Services print $94,026 for a family of three and $106,563 at redetermination, 75% and 85% of the median income for federal fiscal 2025. PN3 prints 344% of poverty in its Roadmap, which matches $94,026. In its February 2026 briefing, Maryland also gives $115,587 for a family of four, which matches our limit of about $97,000 for three. At $94,026, we estimate the drop at $15,197, at $94,500 of earnings. For a family already in the program, our limit of about $110,000 exceeds that $106,563.

**Why does Oklahoma sit fifth from the bottom?** The family qualifies, since PN3 prints Oklahoma's limit at 245% of poverty in its Roadmap. At Oklahoma's default one-star center rates, the state pays $555 a month after the family's copay, and we hold the bill at $1,500, so the family pays the rest. PN3 says in its methods that Oklahoma and ten other jurisdictions allow no additional fees, and we hold the bill at $1,500 in all of them. On that reading, this family would pay only the copay in Oklahoma and end up with more than our $34,051.

**Does Pennsylvania's figure count Philadelphia's wage tax?** No. We place this family in Philadelphia County and don't set the model's wage tax inputs, so we leave out the city's wage tax. At the 3.74% resident rate, that tax comes to $1,496 on $40,000, which would take Pennsylvania from $47,244 to $45,748 and move the median from Delaware's $46,920 to Wisconsin's $46,898.

**Why does Indiana turn this family down all year?** Indiana's limit since April 5, 135% of the poverty guideline, comes to $3,074 a month for a family of three, and this family earns $3,333. We found no chart Indiana posted before April. Our model reads 150% of the 2026 guideline through April, or $3,415 a month. But 150% of the 2025 guideline gives $3,331, $2 under this family's income. PN3 prints 140% of poverty for 2025 and 137% for 2026 in its Roadmap, and reports that a bill to raise the limit to 150% didn't pass. So we hold Indiana to $3,331 before April. Chalkbeat reported in April that Indiana would restart child care help in May after a 15-month freeze. At the model's limit, we estimate four months of subsidy and $31,487.

**Why does Indiana sit below Idaho when PN3 calls Idaho's limit the lowest?** This family misses the limit in both states, so neither pays any of its child care bill, and taxes set the order. Indiana collects $522 in state income tax after its $392 earned income credit, plus $626 in Marion County income tax. Idaho pays the family a net $455: a $465 grocery credit less a $10 building tax. Those amounts make up the $1,603 gap. Without the county tax, Indiana would still sit lowest, at $27,188.

**What about a family already in the program?** It keeps the subsidy to a higher limit, then meets its own cliff. We estimate that cliff at $15,572 past about $110,000 in Maryland and $6,817 past about $68,000 in Iowa. Idaho's department told families in the program that it applies the lower limit when they recertify, and said it was preparing a phase-out. At $40,000, we estimate that a family in the program gets $16,200 in Nevada, $14,776 in Indiana and $14,394 in Ohio, whose first program charges a copay.

**What does the doubled credit do to poverty?** Under the Supplemental Poverty Measure, or SPM, we estimate the poverty gap would shrink by $169 million. We estimate that 21.4% of the state's children lived below the SPM threshold in 2025, and Census reports 12.8% for 2023 to 2025. We estimate that the 2026 child poverty rate would fall by about 0.2 points under the doubled credit.

**How accurate are your state poverty rates?** Our local-area file holds thin state samples, about 108 effective households with children in the median state. Our child poverty estimates on that file differ from Census's 2023 to 2025 averages by 3.2 points on average. In 29 of 51 jurisdictions, they fall outside Census's margin of error. For state child poverty rates, bring your own microdata.

**Could sampling error explain the misses against Census?** Our own sampling error could produce misses of that size. We estimate a standard error of 4.6 points on Massachusetts's 2026 child poverty rate, more than twice the 2.0-point margin of error Census reports for the state. Our file holds fewer effective households with children in the median state, about 108 against Massachusetts's 132.

**How well do your weights fit?** We fit 95.69% of the national file's 5,659 targets within 10%, and 96.08% of the local-area file's 4,765. Those shares describe the fit in sample. The two files hold effective samples of 9,174 and about 12,124 households.

**What do you leave out?** We model child care subsidies in all 51 jurisdictions from August 2026. We copy each parameter's earliest value back to 2015, so check historical runs against each year's rules. We take earnings and paid leave benefits as inputs and hold them fixed when you change minimum wage or paid leave law. We hold hours fixed unless you set a labor supply response. We leave health coverage out of net resources.

**What else does the simulated eligibility measure show?** We estimate that the same 3,000 households' children qualify for Medicaid or CHIP at rates from 39.8% in Idaho to 66.1% in Hawaii.

**Do all these interfaces run one version?** They run different releases of the same code. This deck runs PolicyEngine US 2.90.2, CliffWatch ran 1.755.5 on November 4, Build ran 2.2.1 on November 5, and PyPI carried 2.95.0 on November 5.

**Why does Build's report show $657.4 million and slide 9 show $577 million?** Build runs PolicyEngine US 2.2.1, and slide 9 runs 2.90.2. When we run 2.2.1 on slide 9's local-area file, we also estimate $657.4 million. Between those releases, we changed which filers and dependents the credit counts, and we haven't separated how much of the difference those changes explain. Build's 45.7% counts people, and slide 9's 29.4% counts households.

**Why does CliffWatch's net income exceed slide 5's net resources?** CliffWatch counts Medicaid, CHIP and premium tax credits in net income, and we leave health coverage out of net resources. Slide 11's family also pays nothing for child care, and slide 5's family pays $1,500 a month before any subsidy.

**Does CliffWatch use local premiums?** CliffWatch passes PolicyEngine US the state and no county, so in Massachusetts the model computes premium tax credits from Barnstable County's benchmark plan.
