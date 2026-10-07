# Validation section: speaker script (David)

Slides 14–17, 10 minutes in total. Spoken pace is about 130 words a minute; the rest of the time is for pointing at the slide and clicking through the live dashboard. Timings: validation steps and triangle 3 min, shaping the emulator 2 min, dashboard 3 min, progress and recent issues 2 min.

## Slide 14. Three calculations, one arbiter (29–32 min)

Validation for us isn't a single benchmark number. It's a process we run on every disagreement, and it has four steps.

*Point to step 1.* It starts with an issue. Every CPS record goes through TAXSIM and PolicyEngine with exactly the same input row. When the two disagree, that record becomes a GitHub issue. Dan Feenberg at NBER files most of them.

*Point to step 2.* An agentic workflow then explores the disagreement. It reruns the record in both engines, brings in third-party validators, and reads the statute and the official instructions to find the line where the calculations diverge.

*Point to the triangle.* The triangle shows who takes part. At the top is TAXSIM35, NBER's calculator and our reference engine. On the left is PolicyEngine, run through the emulator. Those two are compared on every record. On the right are the third-party validators: TaxAct, where Dan enters the household and posts the completed federal and state returns, and Axiom, which encodes the statute independently. They give us an independent check when the engines disagree.

*Point to the center.* None of the three gets a vote. The tiebreaker is the statute and the official instructions, because two engines can share the same mistake, and no agreement rate would ever catch that.

*Point to step 3.* The findings become a recommendation: adjust PolicyEngine, adjust TAXSIM, or, when TAXSIM's inputs can't carry what the law needs, agree a convention with NBER and write it down. A person reviews every recommendation before anything is posted or merged.

*Point to step 4.* Once the fix ships, we rerun the record to confirm the disagreement is gone.

## Slide 15. How this process shapes the emulator (32–34 min)

A resolved case doesn't end with the fix.

*Compile.* Every case stays on the emulator's GitHub tracker, with the input row, both engines' results and the resolution. Together they're the record of how TAXSIM's inputs map onto the law, decision by decision.

*Lock in.* Every PolicyEngine fix ships with a test whose expected value comes from the form or the statute, so a disagreement we've resolved can't quietly come back.

*Compare by area.* *Point to the figures.* The comparison covers 111,347 Enhanced CPS households, tax years 2021 to 2025, and all 50 states and DC. Because it reruns every state and year, we can see how complete agreement is in each area: by state, by year, and federal against state.

*Prioritize.* The areas with the lowest agreement set what we look at next.

*Point to the line at the bottom.* The loop never closes for good. Every PolicyEngine release and every TAXSIM update reruns the comparison.

## Slide 16. The public validation dashboard (34–37 min, live)

This is where that comparison lives, and it's public. A quick overview, then one or two examples.

*Pick a tax year.* Any year from 2021 to 2025.

*Change the tolerance.* Moving between $15 and 1% of income shows how much of the disagreement is small and how much is structural.

*Scroll the state table.* Each row is a state, with its federal and state agreement.

*Example 1: inspect a state with open disagreements.* Every row here is a household, with both engines' results side by side. This list is where issues start: Dan or one of us picks a household, and it goes through the four steps from two slides ago.

*Example 2, if time: inspect a state with near-complete agreement.* This is what an area looks like after its cases have been worked through.

One caution: these numbers move whenever either engine changes. That's the point of running the comparison continuously.

*If asked for headline figures:* for 2023, 89.8% of households agree on federal tax and 94.9% on state tax, within 1% of gross income (data update of September 23, 2026). Choose the two example states on the morning of the talk, after checking that the page loads.

## Slide 17. From a reported difference to a fix (37–39 min)

Here's where we are. *Point to the figures.* Since July 2024 there have been more than 1,100 issues on the emulator's public tracker, and more than 1,000 are resolved. Differences run both ways: we've sent NBER more than 150 questions about TAXSIM's own rules, and NBER has confirmed more than 100 TAXSIM corrections on the tracker. That last number is a floor. TAXSIM's working builds aren't public, so we only count the corrections NBER mentions in a comment.

*Point to the examples.* Three recent issues show the three outcomes. In Oregon, the emulator put the kicker refund inside state tax but not in the rebate field, and we fixed it in four days. In Massachusetts, TAXSIM still applied a bank-interest deduction that Massachusetts repealed in 2024, and NBER corrected it the next day. In Minnesota, PolicyEngine found more credits than the comparison return, because the return left out the renter's credit. That one was explained with no code change.

For BLS, the takeaway is that the emulator isn't validated once. It's validated continuously and in public, and every disagreement is traced to a line on a form.
