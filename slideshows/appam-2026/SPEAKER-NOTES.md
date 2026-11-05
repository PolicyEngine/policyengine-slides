# APPAM 2026 roundtable: speaker notes

State Policy Impacts on Family Resources: Tools to Improve Policy Analysis. Thursday, November 5, 2026, 10:15 to 11:45am ET, Wellesley room, Boston. Cynthia Osborne moderates. Tara Watson and Linda Giannarelli also present. Each presenter has 10 to 12 minutes.

Fifteen slides in about 12 minutes.

## Before presenting

- If the room's laptop won't have internet, send Cynthia's team the PDF on Thursday morning.
- Before the session, scan slide 15's QR code and check that it opens this deck.
- Before the session, run a report in Build with the credit at $880 and the recording's Nationwide population, and check that it finishes.
- About 15 minutes before the session, click the CliffWatch address on slide 11 and give CliffWatch up to a minute to finish drawing the chart. If it fails, try again a minute later. Slide 11's recording doesn't depend on it.
- Then press next on slide 11 to play its recording once, in the browser you'll present from. If it doesn't start, the slide keeps its screenshots, so talk over those and press next again.
- Slide 3 opens on the models' answers. Press next once to show what we compute. The PDF shows that second state.
- Keep these notes on your phone and the PDF on your laptop. Present from the live deck at policyengine.org/slides/appam-2026, and if the network fails, present from the PDF.

## 1. PolicyEngine for state policy research (0:00, 30 seconds)

Thanks, Cynthia, for putting this session together, and thanks to Tara and Linda for sharing the table. PolicyEngine is a nonprofit that provides free, open source software to compute the impact of public policy. I'll start with one family and one benefit, then widen to every program, every state and a reform, and finish with the ways you can use it.

## 2. How much SNAP does this family get in a year? (0:30, 30 seconds)

Here's a family in Massachusetts. One parent, 30, earns $40,000 working full time and has a 1-year-old and a 4-year-old. The family pays $1,200 a month in rent, and child care costs $1,500 a month before any subsidy. Assume the family gets any child care subsidy it qualifies for.

How much SNAP does this family get in a year? Take a guess.

## 3. We didn't survey experts. We surveyed AI models. (1:00, 1 minute)

We didn't survey experts, but we did survey AI models. This morning, we gave this family to the newest versions of seven OpenAI and Anthropic models, one call each with no tools, in the format of PolicyBench, our tax and benefit eval. We told them to assume the family gets any child care subsidy it qualifies for. Their answers run from $721 to $11,100. We also asked three older versions, and the deck's data file, `data/model_answers.json`, holds their answers.

*Press next.*

We compute $3,663, and none of the seven came within 10%. Massachusetts's subsidy cuts the bill the family pays from $18,000 to $1,058, and SNAP's dependent care deduction falls with it. Without the subsidy, SNAP comes to $8,739. The rules affect each other, so the answer needs them computed together.

## 4. Models miss most SNAP and state credit amounts and few payroll tax amounts (2:00, 45 seconds)

Now take the family's other lines. All seven landed within 10% on payroll tax, five on state credits and none on SNAP.

In PolicyBench, we ask 51 models about 100 US households. Among households with a positive amount, 65.1% of their SNAP answers and 82.3% of their state refundable credit answers miss by more than 10%, against 11.3% of their payroll tax answers. We grade those answers against PolicyEngine. The top exact-match score rose from 87.9 among models released by April to 95.2 with GPT-6 Sol in September.

## 5. This family ends up with $49,127 once we compute every line together (2:45, 1 minute)

Here's what we compute, line by line. The family earns $40,000, owes no federal income tax and gets $7,130 in federal refundable credits. It pays $3,244 in payroll tax and $1,260 in Massachusetts income tax and gets $2,449 back in state credits. SNAP adds $3,663, WIC $1,447 and the child care subsidy $16,942, against an $18,000 bill. It ends up with $49,127, and without the subsidy it would end up with $37,455. We didn't ask the models for the WIC amount or the subsidy, because PolicyBench asks for neither.

I expect AI to help a lot with questions like this, and it needs the rules computed at this level. With those rules computed, we can see what changes as a family's state or earnings change, or across a whole population, and this engine runs all of it.

## 6. One family ends up with $28,166 in Idaho and $54,345 in Alaska (3:45, 1 minute 15 seconds)

Now move this family across states, under each state's 2026 rules. We put it in each state's largest county and treat it as a new applicant for every program.

The gray base shows earnings after taxes and credits, minus the full child care bill, and benefits sit above it. Nevada and Idaho turn this family down for child care help, and Indiana has since April. Each sets its limit for new applicants below this family's $3,333 a month. Alaska pays each person a $1,000 dividend and $200 of energy relief, $3,600 for this family. Federal taxes and credits vary least, and states drive the rest through child care subsidies, SNAP options and their own taxes.

The gap between the top and bottom state moves with earnings: $16,404 at $30,000 and $21,670 at $60,000.

## 7. This family's net resources fall up to $17,808 at a benefit cliff, at earnings that vary by state (5:00, 1 minute)

Each gray line follows one state as a new applicant's earnings rise. In Idaho, Maryland and Iowa, $500 more in earnings puts a new applicant over the child care income limit, and that applicant ends up between $14,967 and $17,808 behind. In Idaho, the same $500 also takes the family past SNAP's gross income limit. For example, we estimate that a family already in the program qualifies up to about $110,000 in Maryland. Since May 2025, Maryland has put applicants who qualify, like this family, on a waiting list. In 46 of 51 jurisdictions, the family's largest drop comes from the subsidy.

Across states, the median total effective marginal tax rate falls from 63.6% at $30,000 of earnings to 24.6% at $60,000.

## 8. Doubling the Massachusetts child and family credit would give this family $880 more (6:00, 45 seconds)

Take one line of that budget, the Massachusetts child and family credit. The Legislature raised the amount per dependent to $310 for 2023 and $440 for 2024, and we record each value's effective date and cite the session law and tax forms behind it. With two children at $440, this family gets $880. Double the amount per dependent, and the family gets another $880 and ends up with $50,007, with every other line unchanged.

## 9. We estimate Massachusetts would forgo $577 million if lawmakers doubled its child and family credit (6:45, 45 seconds)

Now run that change on the whole state. We estimate Massachusetts would forgo $577 million in 2026, and that 29.4% of its households would gain and none would lose.

We ran this on the local-area file of Populace US, our microdata, which we use for state and district results. It holds 36,491 Massachusetts household records, an effective sample of about 301 households, or 132 among those with children.

## 10. You can reach the same PolicyEngine model through Python, TAXSIM, web apps and AI tools (7:30, 1 minute 15 seconds)

The PolicyEngine model behind that SNAP answer ran every result since, and you can reach it several ways. In Python, you can build a simulated eligibility measure: map your survey or administrative file to our variable names, set the state and run it. Keep the people and their incomes fixed and change only the state, and any difference between runs comes from the rules in that state.

For example, we drew 3,000 households with children from Populace US's default file and ran them through each state's 2024 rules. The same families pass SNAP's tests at rates from 17.5% in Arkansas and Tennessee to 38.3% in Maryland. Their children qualify for Medicaid or CHIP at rates from 39.8% in Idaho to 66.1% in Hawaii.

If your pipeline runs on TAXSIM, our TAXSIM-compatible interface at policyengine.org/us/taxsim takes the same files. It runs tax years 2021 onward through PolicyEngine and sends earlier years to TAXSIM35. On our Child Poverty Impact Dashboard, you can run child tax credit, EITC, SNAP and state tax credit reforms state by state. Our Claude Code plugin gives Claude Code our agents, commands and skills, and you can read and edit every rule in the open source code.

## 11. You can find a family's cliffs and build a reform without writing code (8:45, 1 minute)

CliffWatch and Build need no code.

*Press next to play the recording, which runs 47 seconds with no sound, and talk over it.*

CliffWatch charts a household's net income as its earnings rise and marks where a raise leaves it with less. For example, a single parent of two school-age children in Massachusetts loses the state's cash assistance, TAFDC, when earnings pass $18,000. CliffWatch counts health coverage in net income. When you try it, the chart can take up to a minute to finish drawing.

In Build, you can open the same Massachusetts credit, set it to $880 and run a report.

*The recording stops on the button that runs the report. Press next when you finish.*

## 12. We model federal and state taxes and benefits and build microdata to match official totals (9:45, 1 minute)

On policy, we model federal income and payroll taxes and credits and every state income tax, in 44 jurisdictions. We model TANF and child care subsidies in all 50 states and DC, plus SNAP, WIC, SSI, school meals, ACA premium tax credits, Medicaid and CHIP eligibility and local taxes.

On data, we reweight Populace US's 57,240 households to 5,659 targets from the IRS, Census, USDA, CMS, SSA and others. People underreport SNAP and Medicaid in the CPS, so we keep everyone who reports them and draw take-up among the rest to match USDA's participation rate and CMS's enrollment counts. We impute what the CPS doesn't ask, such as tax detail from the IRS Public Use File, financial assets from the SCF and tips from the SIPP. For state results, we add 1.5 million American Community Survey households, draw each one's county and district within its PUMA, and fit 4,765 targets by state and congressional district.

## 13. We're working on state poverty accuracy, Medicaid rules, heating assistance and local taxes (10:45, 30 seconds)

We're working on state poverty accuracy, starting with a diagnosis of why our state child poverty rates differ from Census's. We're also applying each state's Medicaid rule for an applicant whose spouse isn't aged, blind or disabled. And we're adding LIHEAP in five more states, placing households in local tax jurisdictions from their geography and imputing student loan balances.

## 14. The Axiom Foundation encodes rules with their source text and dates (11:15, 40 seconds)

I also lead the Axiom Foundation. We publish open, machine-readable encodings of rules, starting with tax and benefit policy. Congress sets SNAP's 20% earned income deduction, and Georgia's Division of Family and Children Services applies it in section 3612 of its SNAP manual. We record the manual's words and effective date beside each value.

When we run this rule through the Axiom engine, a family earning $30,000 a year gets a $500 monthly deduction. Ask for November 2019, before the manual section we encoded took effect, and the engine refuses.

## 15. Thank you (11:55)

Scan the QR code to open this deck. From its last slide, you can open the code behind each chart.

## Questions

**Which older versions did you ask?** GPT-5.6 Terra answered $3,838, GPT-6 Sol $4,000 and Claude Opus 4.7 $4,500, so the first two came within 10%. We show the newest version in each family, whatever it answers. One call gives one draw from each model, so these answers don't rank the models.

**Why does GPT-6.1 Sol score below GPT-6 Sol?** On PolicyBench, GPT-6.1 Sol scores 90.1, against 95.2 for GPT-6 Sol and 94.1 for Claude Opus 5.5, the top current version. A newer version can score lower.

**Who checks PolicyBench's answers?** PolicyBench grades against PolicyEngine, and no administrative record stands behind its references. In a September audit, Claude Opus 5.5 flagged 39 references. We affirmed 5, regenerated 6, traced 8 to an input the prompt never states and confirmed 20 as defects in PolicyEngine US 1.755.4. The audit sits at policybench.org/notes/2026-09-22-reference-audit.

**What happens when models get a PolicyEngine tool?** In a pilot on October 14 and 15, graded against the same engine, GPT-6 Sol rose from 95.2 to 99.2, Claude Opus 5.5 from 94.1 to 99.8 and Gemini 4 Argon from 88.7 to 99.9.

**Do you model waiting lists?** No. We model each state's income limits, and none of our take-up flags covers state child care subsidies, so this family gets a subsidy wherever it meets the limit. The National Women's Law Center counted 17 states with waiting lists or frozen intake in February 2025. Maryland started its waiting list in May 2025. It now exempts families experiencing homelessness, families on cash assistance or SSI, and siblings of children in the program. Alabama, Indiana and Missouri put new applicants on waiting lists too. The Texas Tribune reported in August that more than 100,000 children wait for Texas's scholarships, and that the state's target falls from 146,736 seats in 2026 to 132,689 in 2027.

**How does a subsidy change SNAP in other states?** With Texas's subsidy, the family gets $15,791 in child care help and loses $5,598 of SNAP. Congress lets SNAP households deduct their care costs, so this family deducts less when Texas pays for care. The family ends up $10,193 ahead.

**Why does Idaho use a different limit?** Idaho sets a ceiling of 175% of the poverty guideline in its rule, and our model follows it. The department moved new applicants to 130% when it reopened applications in January 2025, and it posts $2,888 a month for a family of three. So we set that limit for this family. At 175%, we estimate Idaho's largest drop at $14,511, at $48,000 of earnings, and Maryland's $15,343 would lead the list. At $2,888, the family loses $16,200 of subsidy and, from January through September, its SNAP, because it also passes SNAP's gross income limit.

**Why does Ohio pay this family?** Ohio runs two programs. Publicly Funded Child Care stops at 145% of the poverty guideline for new applicants, $3,302 a month for a family of three since October. The Child Care Choice Voucher takes families over that limit up to 200%, or $4,554 a month, and a county that turns a family down for income checks the voucher automatically. Ohio pays a center at least $800 a month for a child of 1 and $750 for a child of 4, which covers this family's $1,500 bill. We add the voucher to the program our model carries. Without it, the family would end up with $27,711, below Idaho's $28,166.

**Does Georgia pay this family?** We count $15,244 in Georgia, and Georgia may turn the family down. Georgia's income limit admits it, at $48,350 for a family of three. But Georgia denies new applicants outside its priority groups, and its very low income group stops at $13,660. This family would need another group, such as a child enrolled in Georgia's Pre-K. We don't model priority groups. Without the subsidy, the family would end up with $27,711, below Idaho's $28,166.

**Does any posted limit sit close to this family's income?** Yes. Alabama, since June 1, and Missouri post $3,331 a month for new applicants, and this family earns $3,333. We keep both subsidies rather than let a $2 gap decide a row. If both states hold this family to those limits, we estimate it ends up with $32,224 in Alabama and $27,711 in Missouri, below Idaho's $28,166.

**Does Maryland's limit match what it posts?** Sources differ. Maryland Family Network and the Department of Legislative Services print $94,026 for a family of three, 75% of the median income for federal fiscal 2025. Maryland's February 2026 briefing also gives $115,587 for a family of four, which matches our limit of about $97,000 for three. At $94,026, we estimate the drop at $15,197, at $94,500 of earnings.

**Why do you count four months in Indiana?** Our model reads 150% of the poverty guideline, from Indiana's 2023 bulletin, through April, then Indiana's April 5 limit of 135%, or $3,074 a month for a family of three. This family earns $3,333 a month. We read each month's limit on its first day, so we count the subsidy from January through April. The PN3 Roadmap prints 140% of poverty for 2025, which would turn this family down. With the April limit in all twelve months, the family would end up with $26,562, below Idaho's $28,166.

**What about a family already in the program?** It keeps the subsidy to a higher limit, then meets its own cliff. We estimate that cliff at $15,572 past about $110,000 in Maryland and $6,817 past about $68,000 in Iowa. Idaho's department told families in the program that the lower limit reaches them when they recertify, and said it was preparing a phase-out. At $40,000, we estimate that a family in the program gets $16,200 in Nevada, $14,776 in Indiana and $14,394 in Ohio, whose first program charges a copay.

**What does the doubled credit do to poverty?** Under the Supplemental Poverty Measure, or SPM, we estimate the poverty gap would shrink by $169 million. We estimate that 21.4% of the state's children lived below the SPM threshold in 2025, and Census reports 12.8% for 2023 to 2025. We estimate that the 2026 child poverty rate would fall by about 0.2 points under the doubled credit.

**How accurate are your state poverty rates?** Our local-area file holds thin state samples, about 108 effective households with children in the median state. Our child poverty estimates on that file miss Census's 2023 to 2025 averages by 3.2 points on average. In 29 of 51 jurisdictions, they fall outside Census's margin of error. For state child poverty rates, bring your own microdata.

**Could sampling error explain the misses against Census?** Our own sampling error could produce misses of that size. We estimate a standard error of 4.6 points on Massachusetts's 2026 child poverty rate, more than twice the 2.0-point margin of error Census reports for the state. Our file holds fewer effective households with children in the median state, about 108 against Massachusetts's 132.

**How well do your weights fit?** We fit 95.69% of the default file's 5,659 targets within 10%, and 96.08% of the local-area file's 4,765. Those shares describe the fit in sample. The two files hold effective samples of 9,174 and about 12,124 households.

**What do you leave out?** We model child care subsidies in all 51 jurisdictions from August 2026. We copy each parameter's earliest value back to 2015, so check historical runs against each year's rules. We take earnings and paid leave benefits as inputs and hold them fixed when you change minimum wage or paid leave law. We hold hours fixed unless you set a labor supply response. We leave health coverage out of net resources.

**Do all these interfaces run one version?** They run different releases of the same code. This deck runs PolicyEngine US 2.90.2, CliffWatch ran 1.755.5 on November 4, Build ran 2.2.1 on November 5, and PyPI carried 2.95.0 on November 5.

**Why does CliffWatch's net income exceed slide 5's net resources?** CliffWatch counts Medicaid, CHIP and premium tax credits in net income, and we leave health coverage out of net resources. Slide 11's family also pays nothing for child care, and slide 5's family pays $1,500 a month before any subsidy.

**Does CliffWatch use local premiums?** CliffWatch passes PolicyEngine US the state and no county, so in Massachusetts the model computes premium tax credits from Barnstable County's benchmark plan.
