# APPAM 2026 model ask: registered before any answer came back

Written 2026-11-05T11:59:09Z, before run_ask.py started.

- Prompt: prompt.txt, sha256 d4d403861d0419974e5fa66d89cec1e0257d160a3e4cc2c26399e121cc5f8d99. PolicyBench's no-tools batch prompt (policybench origin/main 8180cde1, make_no_tools_batch_prompt, JSON contract with explanations) for the deck's family, plus a county line, a child care schedule block and one added sentence on subsidy take-up (see build_prompt.py).
- Models, fixed now: GPT-6 Sol, GPT-6.1 Sol, GPT-6.1 Terra, GPT-6 Astra, GPT-6 Luna, GPT-5.6 Terra, GPT-5.5 (Codex CLI on a ChatGPT subscription lane, read-only sandbox, project docs off); Claude Opus 5.5, Claude Sonnet 5.5, Claude Haiku 5.5, Claude Opus 4.7 (Claude Code print mode, all tools disabled, settings off).
- One call per model. A call that fails or returns unparseable JSON gets one retry, and the retry is recorded. A model the account can't serve is recorded as unavailable.
- No re-run because of a value. Every answer gets reported, including any tool use the event log shows.
- These answers are this run's, not PolicyBench board rows: different transport, different serving settings, and one extra sentence in the prompt.
- Reference: references-ma-40000.json, policyengine-us 2.90.2 on the deck's household.py. "Right" follows PolicyBench's rule: within $1 for a dollar amount.

## Amendment, 2026-11-05T12:00:26Z

The first Codex call to finish (GPT-6 Luna) shows shell and web search calls in its event log, so the lane's defaults allowed tools and this batch's Codex answers aren't no-tools answers. Reason for the rerun: tool use, seen before any other answer and regardless of value. I saw that one answer (SNAP $0) before deciding. The first batch stays on disk under answers-first-batch/. The rerun disables shell and web search at the Codex level and audits each event log.

## Amendment 2, 2026-11-05T12:06:23Z

- Codex rerun settings: --ignore-user-config, web_search="disabled", shell_tool, unified_exec and the other tool features disabled. A test prompt asking for a shell command and a web search came back "NO TOOLS." before any model saw the household.
- The first batch's Claude calls never reached a model: "Failed to authenticate", because my script stripped the app's credentials from the environment. No answer came back. The rerun keeps that environment, so the Claude calls run on the app login with no tools offered (--tools "").
- GPT-5.5 returned model_not_found ("not supported when using Codex with a ChatGPT account"), so it stays recorded as unavailable. GPT-5.6 Terra's first call was stopped before it answered.
- Same prompt (sha256 d4d40386...), same one retry on failure or unparseable JSON, no re-run because of a value.

## Amendment 3, 2026-11-05T12:37:46Z

Claude Opus 5.5, Sonnet 5.5 and Haiku 5.5 timed out twice at 15 minutes each with no answer. The session's environment had set effort to max (CLAUDE_EFFORT, CLAUDE_CODE_EFFORT_LEVEL), and the Codex calls ran at each model's default. Opus 4.7 answered in that run. I rerun only those three, with those two variables removed so they use the model's default effort, one call each, one retry on failure. No value came back from any of the timed-out calls.

Correction, 2026-11-05T13:20Z: the last sentence above and the first sentence of this amendment are wrong. The independent review caught it (verify/review-evidence.md, item 2). Opus and Sonnet timed out twice at max effort. Haiku first returned malformed JSON containing SNAP $2,988, then timed out on retry. The attempt sits in answers-claude-maxeffort/claude-haiku-5-5.attempt1.json. The retry followed the stated rule for unparseable answers and didn't depend on the value.

## Result note, 2026-11-05T12:40:06Z

All ten answers sit in comparison.json. Claude 5.5 models: default effort, answered first try in 35 to 72 seconds. Claude Opus 4.7: max effort, from run 2. GPT models: default effort, run 2. First batch stays in answers-first-batch/ and supports no claim, because my setup left tools on with the working folder beside the reference file.

## Amendment 4, 2026-11-05T13:14:09Z, written before any call below

An independent review (verify/review-evidence.md, GPT-6.1 Sol) requested changes. It found that prompt.txt omitted facts the reference uses and that its "unlisted status is false" rule conflicts with the reference's defaults (citizenship, ID, WIC nutritional risk), and that one call per model can't support a statement about a model. So I run a second round, decided because of those two findings and not because of any answer's value:

- Prompt: prompt-v2.txt (sha256 prefix c9233c5b2a8c3419), which states head-of-household filing, citizenship and SSNs, WIC nutritional risk, 52 weeks of work, center-based care 21 days a month, and approved child care assistance for all twelve months, and replaces the "false" rule with "derive eligibility and calculated statuses from the stated facts".
- Models: all ten that answered in the first round, five calls each, tools off, default effort.
- Failure rule: a failed or unparseable call gets one retry. Every attempt stays on disk, including malformed ones, and any value inside a malformed attempt gets reported.
- Reporting: all fifty answers get reported. Slide 3 uses the seven newest versions (Max's rule). Its headline is the count of those 35 calls within 10% of $3,663 and the count within $1, whatever they turn out to be. No further rounds because of any value.
- The earlier round's answers stay in comparison.json, and they get reported as the earlier prompt's results.
