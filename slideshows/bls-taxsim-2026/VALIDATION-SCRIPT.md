# Validation section: speaker script (David)

Slides 10–14, 16 minutes in total. Spoken pace is about 130 words a minute; the rest of the time is for pointing at the slide and the live dashboard. Timings: triangle 2 min, process 2 min, dashboard 5 min, notable cases 4 min, reported difference to fix 3 min.

## Slide 10. Three calculations, one arbiter (29–31 min)

Validation for us isn't a single benchmark number. It's a loop we run continuously, and it rests on three independent calculations.

*Point to the top and the left corner.* The first two are the engines: TAXSIM35, NBER's program, and PolicyEngine running through the emulator. They're compared automatically on every household.

*Point to the right corner.* The third comes in when the engines disagree on a specific household. Dan Feenberg at NBER enters that household into TaxAct, a commercial tax preparation package, and posts the completed federal and state returns. That gives us an independent return we can reconcile line by line against the actual state form.

*Point to the center.* The three don't vote. The tiebreaker is the statute and the official instructions. Two engines can share the same mistake, and an agreement rate will never catch that. So every difference is traced back to a specific line on a specific form, and every fix carries a test whose expected value comes from the form or the statute, not from our own model.

## Slide 11. How we validate the emulator (31–33 min)

Here's the loop. Every household goes through both engines with exactly the same input row: 111,347 Enhanced CPS households, tax years 2021 to 2025, all 50 states and DC. A household matches when federal and state income tax agree within $15, or within 1% of income on the dashboard.

When they differ, the cause falls into one of four groups:
- an input question: how a TAXSIM variable should map into the tax law;
- a PolicyEngine rule error;
- a TAXSIM rule error; or
- a convention: the law is clear, but TAXSIM's inputs don't carry the detail it needs, so we agree a rule with NBER and write it down.

Fixes ship with a test, the dashboard reruns, and every new PolicyEngine release or TAXSIM update starts the loop again.

## Slide 12. The public validation dashboard (33–38 min, live)

This is the output of that loop, and it's public.

*Pick 2023.* For 2023, 89.8% of households agree on federal tax and 94.9% on state tax, within 1% of income. Once one-time rebates are reported the same way on both sides, state agreement rises to 95.9%. I'll come back to rebates in a moment.

*Change the tolerance.* Moving from $15 to 1% of income shows how much of the disagreement is small and how much is structural.

*Scroll the state table, then open a state.* Every row here is a household, with both engines' results side by side. This list is where most issues start: Dan or one of us picks a household, and it becomes a GitHub issue.

One caution: these numbers move when either engine changes. That's the point of running it continuously.

## Slide 13. Two notable cases (38–42 min)

Two cases show what "explain the cause" looks like in practice.

**One-time state rebates.** In 2022 many states sent one-time rebates: Georgia, Virginia, New Mexico, Maine, Colorado, Massachusetts and Idaho, among others. When we ran 2022, about a fifth of households disagreed on state tax, and the differences clustered at flat amounts: $250, $500, $1,000. The arithmetic wasn't the problem; the timing was. By default, TAXSIM subtracts a rebate in the year it's paid. PolicyEngine books it to the tax year whose liability determines it. Virginia's 2022 rebate, for example, was capped at 2021 liability.

Neither convention is wrong, so we made them comparable instead of changing either model. TAXSIM already had an option that books rebates in the eligibility year, and its option 30 turns that on together with related settings for this comparison. On our side, the emulator reports one-time rebates separately in the `srebate` column, and the comparison scores state tax plus rebates on both sides. In our 8,000-household test, that raised 2021 state agreement from 75.5% to 87.1%, with no change to either model's tax law. For CE work, the practical point is that you need to choose which convention fits the year you're measuring.

**S-corporation income.** TAXSIM has one `scorp` input. Its documentation describes it as passive business income, which means it's subject to the 3.8% net investment income tax and the passive-loss limitation. PolicyEngine originally treated that income as active, as if the owner materially participates, so no investment income tax. For a single filer with $300,000 of S-corporation income in 2025, that's $3,800 of tax in TAXSIM and none in PolicyEngine. This affects a large share of the high-income households in the sample.

The emulator now has an explicit switch for S-corporation treatment. Since September the default is passive, matching TAXSIM's documentation, and anyone who believes their owners are active can change it. Working through this case also turned up fixes on both sides. In PolicyEngine, passive losses no longer count against the EITC's investment-income test. On both sides, we found problems in how qualified business income losses are netted.

*Point to the line under the table.* Both cases end in a convention we've agreed with NBER and written down, and there are others: rent paid includes utilities, and a single pension amount is split between spouses by age. If you're building TAXSIM inputs from the CE, those conventions are the part to check.

## Slide 14. From a reported difference to a fix (42–45 min)

Here's the process for a single household.

*Report.* Dan files most of these: 829 of the 1,063 issues since July 2024. Each one comes with the TAXSIM input row, our output, and the TaxAct return.

*Reproduce.* We run the exact row ourselves.

*Classify.* We reconcile against the form, line by line, until we can name the line where the calculations diverge.

*Resolve.* Depending on the cause, that's a PolicyEngine fix with a test, a note to NBER, or a written convention.

*Confirm.* Dan reruns the household the next day.

The three examples on the slide show the three outcomes. In Oregon, our emulator put the kicker refund inside state tax but not in the rebate field, and we fixed it in four days. In Massachusetts, TAXSIM still applied a bank-interest deduction that Massachusetts repealed in 2024, and NBER corrected it the next day. In Minnesota, PolicyEngine found more credits: the renter's credit, which the comparison return had left out. That one was explained with no code change.

Differences also run in both directions. We've sent NBER more than 52 questions about TAXSIM's own rules. Just last week, a Maryland case went the other way: TaxAct was right and PolicyEngine had given a childless 65-year-old the state EITC, because we dropped the federal age cap along with the minimum age. That fix is in review now.

For BLS, the takeaway is that the emulator isn't validated once. It's validated continuously and in public, and every disagreement is traced to a line on a form.
