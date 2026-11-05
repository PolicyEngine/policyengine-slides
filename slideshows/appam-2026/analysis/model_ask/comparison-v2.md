# Round two against PolicyEngine US 2.90.2

Status: final. Prompt c9233c5b2a8c3419, ended 2026-11-05T13:26:49Z. Reference SNAP $3,663 with the subsidy, $8,739 without.

## Headline

| Group | Calls | Answered | Within 10% | Within $1 | Low | Median | High |
|---|---:|---:|---:|---:|---:|---:|---:|
| Seven newest | 35 | 35 | 8 | 0 | 0 | 3,800 | 11,160 |
| Three older | 15 | 15 | 7 | 0 | 3,108 | 3,800 | 8,868 |
| All ten | 50 | 50 | 15 | 0 | 0 | 3,800 | 11,160 |

## SNAP by model, in call order

| Model | Group | Calls | Within 10% | Within $1 | Median | Right of 28 |
|---|---|---|---:|---:|---:|---|
| GPT-6.1 Sol | newest | 3,240, 3,480, 3,240, 3,240, 3,251 | 1 | 0 | 3,240 | 26, 25, 26, 26, 26 |
| GPT-6.1 Terra | newest | 3,600, 3,240, 3,252, 4,069, 8,652 | 1 | 0 | 3,600 | 21, 23, 25, 21, 20 |
| GPT-6 Astra | newest | 3,240, 3,240, 3,480, 3,240, 3,251 | 1 | 0 | 3,240 | 26, 26, 26, 25, 26 |
| GPT-6 Luna | newest | 6,000, 0, 0, 9,216, 9,216 | 0 | 0 | 6,000 | 18, 23, 21, 20, 22 |
| Claude Opus 5.5 | newest | 3,551, 3,864, 3,852, 3,610, 8,651 | 4 | 0 | 3,852 | 24, 22, 25, 24, 23 |
| Claude Sonnet 5.5 | newest | 11,000, 3,800, 8,650, 11,160, 6,000 | 1 | 0 | 8,650 | 18, 22, 21, 23, 17 |
| Claude Haiku 5.5 | newest | 5,700, 6,576, 5,112, 6,000, 6,216 | 0 | 0 | 6,000 | 24, 18, 21, 19, 21 |
| GPT-6 Sol | older | 3,851, 3,612, 4,128, 3,371, 4,824 | 3 | 0 | 3,851 | 25, 23, 24, 24, 23 |
| GPT-5.6 Terra | older | 3,252, 3,252, 8,868, 8,652, 8,652 | 0 | 0 | 8,652 | 21, 20, 23, 23, 21 |
| Claude Opus 4.7 | older | 3,700, 3,108, 3,800, 3,800, 4,000 | 4 | 0 | 3,800 | 22, 22, 22, 23, 23 |

## Amounts across calls, seven newest

| Output | Reference | Low | Median | High | Answered | Within $1 | Within 10% |
|---|---:|---:|---:|---:|---:|---:|---:|
| federal_income_tax_before_refundable_credits | 0.00 | 0 | 0 | 0 | 35 | 35 | 35 |
| federal_refundable_credits | 7,129.58 | 6,574 | 7,044 | 8,550 | 35 | 0 | 34 |
| payroll_tax | 3,244.00 | 3,060 | 3,220 | 3,824 | 35 | 14 | 34 |
| self_employment_tax | 0.00 | 0 | 0 | 0 | 35 | 35 | 35 |
| state_income_tax_before_refundable_credits | 1,260.00 | 0 | 1,260 | 1,680 | 35 | 13 | 20 |
| state_refundable_credits | 2,449.29 | 880 | 2,449 | 3,136 | 35 | 17 | 23 |
| local_income_tax | 0.00 | 0 | 0 | 0 | 35 | 35 | 35 |
| snap | 3,663.00 | 0 | 3,800 | 11,160 | 35 | 0 | 8 |
| ssi | 0.00 | 0 | 0 | 0 | 35 | 35 | 35 |
| tanf | 0.00 | 0 | 0 | 0 | 35 | 35 | 35 |

## Amounts across calls, all ten

| Output | Reference | Low | Median | High | Answered | Within $1 | Within 10% |
|---|---:|---:|---:|---:|---:|---:|---:|
| federal_income_tax_before_refundable_credits | 0.00 | 0 | 0 | 0 | 50 | 50 | 50 |
| federal_refundable_credits | 7,129.58 | 6,440 | 7,102 | 8,550 | 50 | 0 | 49 |
| payroll_tax | 3,244.00 | 3,060 | 3,244 | 3,824 | 50 | 20 | 49 |
| self_employment_tax | 0.00 | 0 | 0 | 0 | 50 | 50 | 50 |
| state_income_tax_before_refundable_credits | 1,260.00 | 0 | 1,260 | 1,680 | 50 | 15 | 32 |
| state_refundable_credits | 2,449.29 | 880 | 2,449 | 3,909 | 50 | 20 | 35 |
| local_income_tax | 0.00 | 0 | 0 | 0 | 50 | 50 | 50 |
| snap | 3,663.00 | 0 | 3,800 | 11,160 | 50 | 0 | 15 |
| ssi | 0.00 | 0 | 0 | 0 | 50 | 50 | 50 |
| tanf | 0.00 | 0 | 0 | 0 | 50 | 50 | 50 |

## Attempt audit

- Attempts: 50.
- Retried calls: none.
- Calls with no answer after the retry: none.
- Malformed or failed attempts, with any SNAP value in their text: none.
- Tool use in any event log: none.
- Claude models served: {'claude-opus-5-5': ['claude-opus-5-5'], 'claude-sonnet-5-5': ['claude-sonnet-5-5'], 'claude-haiku-5-5': ['claude-haiku-5-5'], 'claude-opus-4-7': ['claude-opus-4-7']}.

## What each model wrote about SNAP

Descriptions of what the models wrote, not verified reasoning traces.

- GPT-6.1 Sol call 1 ($3,240): Using FY2026 parameters, the earned-income and standard deductions and capped shelter deduction produce approximately $1,713.67 monthly net income and $270 monthly SNAP; subsidized care requires no family payment. value = 3240
- GPT-6.1 Terra call 1 ($3,600): Estimated annual SNAP benefits reflect earnings, the earned-income deduction, shelter costs, and an allowance for the family's child care copayment. value = 3600
- GPT-6 Astra call 1 ($3,240): Estimated using FY2026 parameters throughout the year and assuming assistance leaves no child care copayment: monthly net income is $1,713.67 after the earned-income, $209 standard, and $744 shelter deductions; $785 maximum minus $515 gives $270 monthly. value = 3240
- GPT-6 Luna call 1 ($6,000): Estimated SNAP benefits are about $500 per month after income deductions and the household’s reported heating and childcare costs. value = 6000
- GPT-6 Sol call 1 ($3,851): Estimated SNAP is about $321 per month after the earned-income, standard, child care copay, and capped shelter deductions. value = 3851
- GPT-5.6 Terra call 1 ($3,252): The household qualifies for SNAP; the calculated monthly benefit is $271. value = 3252
- Claude Opus 5.5 call 1 ($3,551): Gross income is $3,333 a month. Subtract the 20% earned income deduction, the $209 standard deduction and about $83 a month of out-of-pocket childcare, giving about $2,374. The shelter deduction is capped at $744, so net income is about $1,630. Benefit is $785 - 30% of net, about $296 a month, or $3,551 a year. value = 3551
- Claude Sonnet 5.5 call 1 ($11,000): Income is under the MA broad-based categorical eligibility limit. After the 20% earned income deduction, standard deduction, dependent care deduction and capped excess shelter deduction, net income is very low. The estimated benefit is about $900+ per month, roughly $11,000 per year. value = 11000
- Claude Haiku 5.5 call 1 ($5,700): Household of 3 qualifies through MA broad-based categorical eligibility. Net income after the 20 percent earned deduction, standard deduction, and excess shelter deduction is about 1650 per month, so benefit is the maximum allotment of about 994 less 30 percent of net, about 475 per month. value = 5700
- Claude Opus 4.7 call 1 ($3,700): Household of 3 passes MA BBCE gross-income test (200% FPL). Monthly gross $3,333; after 20% earned-income deduction, standard deduction (~$220), dependent care (~$170), and capped excess shelter (~$700 with HCSUA + rent), net income ≈ $1,580. Benefit = max allotment (~$800) − 30% × net ≈ $326/mo × 12 ≈ $3,700. value = 3700
- GPT-6.1 Sol call 2 ($3,480): Estimated SNAP is 290 monthly after the earned-income, standard, estimated child care copayment, and capped excess-shelter deductions. value = 3480
- GPT-6.1 Terra call 2 ($3,240): Estimated SNAP benefits reflect earned-income and standard deductions, the capped shelter deduction, and the three-person maximum benefit. value = 3240
- GPT-6 Astra call 2 ($3,240): Estimated using FY2026 parameters and no child care parent fee: monthly gross wages of $3,333.33, the 20% earnings deduction, $209 standard deduction, and $744 capped shelter deduction produce a $270 monthly benefit. value = 3240
- GPT-6 Luna call 2 ($0): Estimated countable monthly income after deductions exceeds the household SNAP maximum allotment threshold for a positive benefit. value = 0
- GPT-6 Sol call 2 ($3,612): Estimated annual SNAP allotment after the earned-income, standard, subsidized child care copayment, and capped shelter deductions. value = 3612
- GPT-5.6 Terra call 2 ($3,252): The household qualifies under Massachusetts SNAP rules; the annualized monthly allotment after income, standard, and capped shelter deductions is 3252. value = 3252
- Claude Opus 5.5 call 2 ($3,864): Eligible under broad-based categorical eligibility. Net income is about $1,544/month after the earned income, standard, child care copay and capped shelter deductions. Benefit is $785 − 30% × $1,544 ≈ $322/month. value = 3864
- Claude Sonnet 5.5 call 2 ($3,800): Gross income is under 200% FPL. Net income is about 1,550 a month after the 20% earned income deduction, standard deduction, childcare copay and excess shelter deduction. The 3-person maximum allotment is about 785, less 30% of net income, giving about 320 a month. value = 3800
- Claude Haiku 5.5 call 2 ($6,576): Household of three with 40,000 gross earnings has about 2,458 monthly net income after the 20% earned deduction and standard deduction. Shelter costs of about 2,200 monthly (rent 1,200 plus heating/cooling allowance) yield excess shelter of about 971. Benefit is about 994 max minus 30% of net income, or about 548 monthly, totaling 6,576 annually. value = 657
- Claude Opus 4.7 call 2 ($3,108): MA uses BBCE (200% FPL gross limit). Gross monthly $3,333; after 20% earned deduction ($667) and standard deduction (~$210) = $2,456. Shelter ($1,200 rent + ~$900 heating SUA = $2,100) excess over half-income capped at ~$720 shelter deduction. Net ≈ $1,736. Benefit = $780 max − 30% × $1,736 ≈ $259/mo × 12. value = 3108
- GPT-6.1 Sol call 3 ($3,240): Estimated SNAP is $270 monthly using the three-person maximum, earned-income and standard deductions, capped excess-shelter deduction, and no childcare copayment deduction. value = 3240
- GPT-6.1 Terra call 3 ($3,252): Estimated SNAP benefit of 271 per month after the earned-income, standard, and capped shelter deductions. value = 3252
- GPT-6 Astra call 3 ($3,480): Estimated using FY2026 parameters and an estimated $800 annual child care parent fee: monthly net income after earned-income, standard, dependent-care, and capped shelter deductions is approximately $1,647.33, yielding $290 monthly. value = 3480
- GPT-6 Luna call 3 ($0): At $40,000 annual gross wages, the household exceeds the SNAP gross-income limit for a three-person household. value = 0
- GPT-6 Sol call 3 ($4,128): Estimated SNAP is $344 per month after earned-income, child care, and shelter deductions, including a heating and cooling allowance. value = 4128
- GPT-5.6 Terra call 3 ($8,868): The household qualifies under Massachusetts SNAP categorical eligibility; after deductions including child-care costs, the annual benefit is 739 per month. value = 8868
- Claude Opus 5.5 call 3 ($3,852): Monthly gross income is $3,333. After the 20% earnings deduction, the standard deduction, the childcare copay deduction and the capped excess shelter deduction (with the heating utility allowance), net income is about $1,547. The monthly benefit is $785 - 30% of net, about $321. That is about $321 x 12 per year. value = 3852
- Claude Sonnet 5.5 call 3 ($8,650): Gross income is under 200% FPL, so the household is eligible. Net income is about 214 per month after the earned income deduction, standard deduction, childcare deduction and capped shelter deduction. Benefit is about 785 - 0.3 x 214 = 721 per month, times 12. This assumes the childcare deduction uses the full pre-subsidy 18,000. value = 8650
- Claude Haiku 5.5 call 3 ($5,112): Estimated FY2026 maximum allotment for a household of 3 ($994/month) less 30% of net income of about $1,894/month after the earned income, standard, and excess shelter deductions, giving about $426/month. value = 5112
- Claude Opus 4.7 call 3 ($3,800): MA uses BBCE (200% FPL gross test) — passes at $40,000 for 3 persons. Monthly net income: $3,333 earnings − 20% earned income deduction − standard deduction ~$225 − modest childcare out-of-pocket − shelter excess (capped ~$700 with heating SUA) ≈ $1,450. Max benefit for 3 ~$800/mo. Benefit ≈ $800 − 0.30 × $1,450 ≈ $365/mo × 12 ≈ $3,800. value = 3800
- GPT-6.1 Sol call 4 ($3,240): Estimated SNAP is $270 monthly using the three-person maximum allotment, earned-income and standard deductions, and the capped excess-shelter deduction; subsidized child care leaves no deductible copayment. value = 3240
- GPT-6.1 Terra call 4 ($4,069): Estimated annual SNAP benefits reflect earned-income, standard, and shelter deductions; the estimate uses an assumed $1,000 monthly heating and cooling utility allowance. value = 4068.6
- GPT-6 Astra call 4 ($3,240): Using FY2026 parameters throughout the estimate, monthly earned-income and standard deductions and the capped shelter deduction produce $1,713.67 net income. The $785 maximum less $515 yields $270 monthly. Childcare is assumed fully subsidized under the 2026 fee threshold. value = 3240
- GPT-6 Luna call 4 ($9,216): Estimated annual SNAP at the three-person maximum of $768 per month, assuming allowable income deductions reduce net income to zero. value = 9216
- GPT-6 Sol call 4 ($3,371): Estimated annual SNAP allotment after earned-income, standard, childcare, and capped shelter deductions, using an estimated 400 annual childcare copayment. value = 3370.8
- GPT-5.6 Terra call 4 ($8,652): Broad-based categorical eligibility applies, and the calculated SNAP benefit is $721 per month for twelve months. value = 8652
- Claude Opus 5.5 call 4 ($3,610): The household passes the 200% FPL gross test through broad-based categorical eligibility. Net income: $3,333 monthly earnings x 0.8, minus the $209 standard deduction, minus about $100 of childcare, minus the capped $744 shelter deduction, is about $1,614. Benefit is $785 - 30% x $1,614 = about $301 per month. value = 3610
- Claude Sonnet 5.5 call 4 ($11,160): Net income is about $213/month after the earned income, standard, childcare and capped shelter deductions. Benefit is the 3-person maximum of about $994 less 30% of net income, or about $930/month. value = 11160
- Claude Haiku 5.5 call 4 ($6,000): Gross monthly income of about 3,333 less 20% earned-income deduction, standard deduction, and an estimated childcare deduction gives about 2,224. Excess shelter deduction then leaves net income near 1,636, so benefit is about 994 max allotment minus 30% of net, about 503 per month. Annual value is about 6,000. value = 6000
- Claude Opus 4.7 call 4 ($3,800): Gross income $3,333/mo passes MA BBCE (200% FPL). After 20% earned income deduction, standard deduction (~$217), dependent care deduction (~$240 post-subsidy copay), and capped shelter deduction (~$712 with MA SUA for heating/cooling), net income ~$1,497/mo. Benefit = max ($768) − 0.3 × net ≈ $319/mo × 12. value = 3800
- GPT-6.1 Sol call 5 ($3,251): Using FY2026 parameters, subsidized child care with no family fee, the earned-income and standard deductions, and the maximum excess-shelter deduction gives an estimated monthly SNAP benefit of $270.90. value = 3250.8
- GPT-6.1 Terra call 5 ($8,652): Estimated SNAP benefits are $8,652 annually after earned income, standard, dependent-care, and shelter deductions; the actual amount depends on the child care copayment and applicable utility allowance. value = 8652
- GPT-6 Astra call 5 ($3,251): Estimated annual SNAP uses a $785 monthly maximum, $209 standard deduction, 20% earned-income deduction, and $744 capped shelter deduction. This unrounded estimate assumes zero child care copayment and applies fiscal-year 2026 parameters throughout. value = 3250.8
- GPT-6 Luna call 5 ($9,216): Estimated SNAP is the maximum monthly benefit for a three-person household, 768 per month, because earned-income, childcare, and shelter deductions reduce countable net income to zero. value = 9216
- GPT-6 Sol call 5 ($4,824): Estimated SNAP is 402 per month after the earned-income, child-care-copay, rent, and heating or cooling deductions. value = 4824
- GPT-5.6 Terra call 5 ($8,652): After earned-income, child-care, standard, and capped shelter deductions, the household receives a monthly SNAP allotment of 721. value = 8652
- Claude Opus 5.5 call 5 ($8,651): Monthly gross income is $3,333. Subtract the 20% earned income deduction, the $209 standard deduction, and $1,500 in pre-subsidy child care. The shelter deduction is capped at $744, leaving net income of about $214. The benefit is $785 - 30% of $214, or about $721 a month. value = 8651
- Claude Sonnet 5.5 call 5 ($6,000): Income passes the gross test. After the earned-income, standard, and excess shelter deductions (rent plus heating/cooling), net income is about 1,600 a month. The benefit is the 3-person maximum less 30% of net income, roughly 500 a month. value = 6000
- Claude Haiku 5.5 call 5 ($6,216): Household of three with $40,000 gross earned income, a 20% earned-income deduction, a standard deduction, and shelter costs for $14,400 rent plus heating/cooling utility allowance. Net income of about $1,587 per month yields a benefit of about $518 per month. value = 6216
- Claude Opus 4.7 call 5 ($4,000): 3-person household, MA BBCE eligible. Monthly gross $3,333; after 20% earned deduction, standard deduction ~$217, small dependent-care deduction (subsidized care leaves modest out-of-pocket), and capped excess shelter deduction (~$700 cap given rent $1,200 + heating SUA), net income ≈ $1,550. Benefit = max allotment (~$800) − 30% × net ≈ $335/month × 12 ≈ $4
