# Proposed CBO visit outline

Hi Molly,

Here is a proposed outline for the visit, built around what your call surfaced: the goal is to meet the broader CBO audience you described — across the range of comfort with AI, not just the frontier folks — and help move people a little further along without overselling, without scaring anyone, and without flattening the craft of model-building.

The thread that ties the three sessions together: model-building has always been the work of making the consequences of policy visible before the choice is made. AI does not replace that craft. It lets us do it at more scale, more conditionally, and with more calibration. CBO's neutrality, private data, longitudinal models, and review standards become more valuable in that world, not less.

The other thing the talk should do — for an audience that plans years ahead — is give a clear sense of where AI tooling is right now, how fast it is moving, and what the next 2-5 years plausibly look like for modeling shops. That trajectory is part of what is worth tracking, separate from any specific tool.

I assumed the structure we discussed: a two-hour block, roughly 1-3 pm, with a one-hour agency-wide talk followed by two smaller conversations. May 26 or 27 still look plausible on my end if either works for you.

Happy to weight the sessions differently depending on who you expect in each.

## 1. Broad agency talk: model-building and AI

**Length:** 60 minutes

**Audience:** Broader CBO. Modelers, analysts, managers, and people who are AI-curious but not specialists. Built for the broader audience you described — across the apprehension-to-excitement spectrum — rather than the frontier folks who are already moving.

### Goals

- Reinforce model-building as the right starting point — structure, program rules, calibrated data, case studies, validation — and show what changes when agents can poke at every piece of that craft at scale.
- Give the audience a clear picture of where AI tooling for modeling shops is today, how fast it has moved over the last 18 months, and what the next 2-5 years plausibly look like. Concrete and recent, not abstract.
- Engage the distinction you raised between AI as a force in the economy and AI as a tool inside the modeling shop. Be explicit about which this talk is about.
- Land "conductors, not oracles" as the working frame for AI in policy modeling — preserving analyst judgment rather than displacing it.
- Connect PolicyEngine's experience with possible points of overlap in CBO's work, framed as a community of forecasters with distinct contributions, not a race.

### Outline

1. **The craft, scaled**
   - I love building models. The work is structure, program rules, calibrated data, case studies that try to break the model, validation that catches when it does. That is the work CBO has done for decades.
   - What is changing: thousands, then millions, of agents can poke at every piece of that craft from every angle, at a scale no individual analyst can match.
   - The question this talk asks: what does that scale make possible, and what does it not change?

2. **Two AI conversations, kept distinct — but linked in one specific way**
   - AI as a force in the economy — earnings distributions, labor versus capital share, tax base composition, and the long-run social security questions your team works on. Worth naming. Not the focus today.
   - AI as a tool inside the modeling shop — encoding statutes, generating tests, refactoring infrastructure, building interactives. This is the focus.
   - Where they connect, in my experience: anyone — economists or otherwise — who uses the latest coding agents regularly tends to shift their view of how fast AI is progressing, especially when they experience each generation's improvements in real time. Reading about the tools does not produce the same update. Worth naming because these two questions are usually treated as separate but inform each other in practice.

3. **How PolicyEngine approaches microsimulation**
   - Rules, data, and behavioral dynamics as the core model layers.
   - Federal and state tax rules, SNAP, Medicaid, CHIP, ACA, TANF, and other benefit programs.
   - Data integration and calibration across CPS, IRS, ACS, SCF, and SIPP.
   - Validation through tests, benchmarks, transparent assumptions, and reproducible workflows.

4. **Where AI is today, and where it is heading**
   - A PolicyBench-style demonstration of where current AI systems still fail on policy reasoning — in our evaluations, leading models get between one in three and one in seven basic tax-and-transfer calculations wrong, depending on how you measure it. We are aiming to publish this work before the visit.
   - Why AI is not a substitute for analyst judgment, institutional knowledge, or quality-control processes.
   - Where AI is already useful inside a modeling shop today: first drafts, code navigation, test generation, documentation, refactoring, and small interactives.
   - The trajectory: how fast frontier models, agentic coding tools, and tool-orchestration have moved over the last 18 months, and what the next 2-5 years plausibly look like. Concrete examples from work I have shipped recently, with year-over-year changes in what was possible.
   - What that trajectory means for institutions that plan on multi-year horizons.

5. **AI-assisted rules-as-code workflows**
   - Moving from statutes and policy guidance to parameters, executable rules, and test cases.
   - How human review fits into every stage: source interpretation, assumptions, edge cases, validation, sign-off.
   - Examples from recent work, including AI-accelerated TANF encoding.

6. **Uncertainty and model validity**
   - Parameter uncertainty versus model uncertainty — useful as a frame, but in practice entangled.
   - Domains of validity: when a model can mechanically produce outputs but the embedded relationships may no longer be credible. The example you mentioned of capping reported debt/GDP at 250% is a clear case of marking that boundary explicitly.
   - Backtesting as the approach we are setting up to reason about total model uncertainty: simulating PolicyEngine over historical years and comparing to published series (SOI tabs, CPS poverty rates, and other public references), with the goal of decomposing residuals across rules, data, behavior, and structural error. This is on our near-term roadmap, not a routine practice yet.
   - How institutions can communicate uncertainty while still meeting Congress's need for a single number.

7. **Toward a shared forecasting infrastructure**
   - Different institutions hold different pieces: encoded rules, calibrated populations, behavioral models, longitudinal projections, and feedback from real-world resolution against observed outcomes.
   - A sketch of how those pieces could fit together — continuously-updated, calibrated, conditional forecasts on agreed-upon cells of public government data (BLS, BEA, Census, SOI, CBO baselines) and on specific policy parameters. Conditional structure ("given policy state X, what is outcome Y at time T?") gives policy makers what a lookup table cannot, while keeping each model inside its domain of validity.
   - CBO's distinctive contributions in that ecosystem: neutrality, private microdata, longitudinal models, review standards. These get more valuable as the rest of the ecosystem speeds up, not less.
   - "Conductors, not oracles" — AI as the layer that knows when to call which model, with calibrated uncertainty propagated across composed results. Analyst judgment lives at every routing decision.
   - The judgment-to-mechanism loop: where LLM judgment captures something current models miss, that judgment eventually gets formalized into the next generation of models. Analyst intuition becomes mechanism over time, not the other way around.

8. **Closing**
   - Model-building has always been about making the consequences of policy visible before the choice is made. AI lets us do that at more scale, more conditionally, and with more calibration.
   - The work is not choosing a policy. The work is knowing what each policy will actually do, so the people who do choose can align outcomes with what they are trying to achieve.
   - That takes all of us — neutrality, private data, longitudinal craft, microsim, calibration against observed outcomes — doing what each does best. It is the work of a community, not any one institution.

## 2. Technical discussion with AI and model-development group

**Length:** 30 minutes

**Audience:** Staff working directly on modeling, AI tooling, code modernization, or model infrastructure.

### Topics

- Practical AI-assisted coding workflows for model development.
- What current agentic coding tools (Claude Code, Codex, and similar) actually do — planning, editing, running tests, iterating across a codebase — and how that changes the shape of modeler work compared with assistant-style tools (Copilot, IDE-integrated chat).
- Where these tools have moved over the past 12-18 months and where they look likely to go next, so the group has a working picture of the industry trajectory regardless of when any particular tool is available locally.
- Why regular hands-on use of these tools — including on personal projects — shifts intuitions in ways reading about them does not. Especially: experiencing each new generation's improvements in real time recalibrates views on the pace of progress in a way no benchmark or write-up conveys. Relevant both for evaluating institutional rollouts when the time comes, and for sharpening macro views on AI.
- Rules-as-code patterns for tax and benefit policy, including statute-to-parameter translation and test-case generation.
- Testing strategy: unit tests, integration tests, benchmarks, and model comparison.
- Documentation workflows that keep assumptions close to code.
- Where lightweight pilots can be useful without creating procurement or governance overhead.

## 3. Conversation with assistant analysts

**Length:** 30 minutes

**Audience:** Assistant analysts and early-career staff. No slides, per our conversation.

### Topics if they come up

Primarily their questions. If useful threads to pull on:

- Career path: how I got into policy modeling and what shaped the trajectory.
- Skills that compound: Python, GitHub, testing, documentation, data pipelines, and model validation.
- What open-source policy modeling looks like in practice.
- AI in day-to-day analyst work, if they ask.

## Possible demos

I would lean on screenshots and short recorded clips over live demos given the network and security environment, and fall back further if helpful.

- PolicyBench example showing where current AI systems still fail on basic policy reasoning.
- A rules-as-code walkthrough from policy text to parameters, tests, and model output.
- A small custom interactive showing how quickly an analysis becomes reusable.
- A mockup of a possible future vision of what shared forecasting infrastructure could look like — a conditional forecast on a non-politically-loaded outcome (e.g., a specific BLS or SOI cell), showing the audit trail of tool calls (microsim, structural baselines, statistical methods) behind a calibrated distribution rather than the headline price.

## Open questions

- How technical can the broader talk go without losing the apprehensive half of the audience?
- Do May 26 or 27 still work for a two-hour 1-3pm visit, or should we look later?
- Are there CBO model families, modernization efforts, or cross-shop comparisons I should treat as off-limits, or use only as general motivation?
- Would the AI-and-modeling 30 minutes be most useful focused on coding workflows, on rules-as-code patterns, or on uncertainty?
- Anything you want me to send as a pre-read for the broader audience?

Best,
Max
