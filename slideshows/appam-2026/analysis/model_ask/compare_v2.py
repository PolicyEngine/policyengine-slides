#!/usr/bin/env python3
"""Grade round two (prompt-v2.txt, five calls per model) against PolicyEngine US 2.90.2 for the APPAM family.

Writes comparison-v2.json and comparison-v2.md. See PREREGISTERED.md, amendment 4.
"--partial" rebuilds from answers-v2/ while the run is still going and writes to comparison-v2.partial.json,
so the deck can wire its chart to the schema. Partial numbers support no claim.
"""
import hashlib, json, pathlib, re, statistics, sys

HERE = pathlib.Path(__file__).resolve().parent
PARTIAL = "--partial" in sys.argv
refs = json.loads((HERE / "references-ma-40000.json").read_text())
withs, nos = refs["with_subsidy"]["outputs"], refs["without_subsidy"]["outputs"]
variables = json.loads((HERE / "variables.json").read_text())
AMOUNTS = [v for v in variables if not v.endswith("_eligible")]
NEWEST = {
    "gpt-6.1-sol": "GPT-6.1 Sol",
    "gpt-6.1-terra": "GPT-6.1 Terra",
    "gpt-6-astra": "GPT-6 Astra",
    "gpt-6-luna": "GPT-6 Luna",
    "claude-opus-5-5": "Claude Opus 5.5",
    "claude-sonnet-5-5": "Claude Sonnet 5.5",
    "claude-haiku-5-5": "Claude Haiku 5.5",
}
OLDER = {"gpt-6-sol": "GPT-6 Sol", "gpt-5.6-terra": "GPT-5.6 Terra", "claude-opus-4-7": "Claude Opus 4.7"}
LABELS = {**NEWEST, **OLDER}
CALLS_PER_MODEL = 5
SAFE = {"agent_message", "assistant_message", "reasoning", "error"}


def num(cell):
    value = cell.get("value") if isinstance(cell, dict) else cell
    try:
        return float(value)
    except Exception:
        return None


def parse(text):
    try:
        return json.loads(text[text.index("{"): text.rindex("}") + 1])["outputs"]
    except Exception:
        return None


def within_dollar(pred, truth):
    return pred is not None and abs(pred - truth) <= 1


def within_tenth(pred, truth):
    """PolicyBench's within-10% rule, inclusive, on positive references. A zero reference needs an answer within $1."""
    if pred is None:
        return False
    return abs(pred - truth) <= 0.1 * truth if truth > 0 else abs(pred - truth) <= 1


def right_all(outputs):
    right = 0
    for var in variables:
        pred = num(outputs.get(var)) if outputs.get(var) is not None else None
        truth = withs[var]
        right += pred is not None and (abs(pred - truth) < 0.5 if var.endswith("_eligible") else abs(pred - truth) <= 1)
    return right


def load_partial():
    """Rebuild the results list from the attempt files on disk, using run_ask4.py's parsing."""
    results = {}
    for path in sorted((HERE / "answers-v2").iterdir()):
        match = re.fullmatch(r"(.+)\.call(\d+)\.attempt(\d+)\.(jsonl|json)", path.name)
        if not match or not path.stat().st_size:
            continue
        model, call_no, attempt = match[1], int(match[2]), int(match[3])
        text, tools, served = "", [], None
        if match[4] == "jsonl":
            for line in path.read_text().splitlines():
                try:
                    event = json.loads(line)
                except Exception:
                    continue
                if event.get("type") == "item.completed":
                    item = event["item"]
                    if item.get("type") in ("agent_message", "assistant_message"):
                        text = item.get("text", "")
                    elif item.get("type") not in SAFE:
                        tools.append(item.get("type"))
        else:
            try:
                data = json.loads(path.read_text())
            except Exception:
                continue
            text = data.get("result") or ""
            tools = ["web_search"] if data.get("usage", {}).get("server_tool_use", {}).get("web_search_requests") else []
            served = ",".join((data.get("modelUsage") or {}).keys())
        outputs = parse(text)
        record = dict(model=model, call=call_no, attempt=attempt, rc=None, tools=tools, errors=[], served=served,
                      parsed=outputs is not None, outputs=outputs, raw=None if outputs else text[:3000])
        results.setdefault((model, call_no), []).append(record)
    return dict(prompt="prompt-v2.txt", ended=None, results=[
        dict(model=model, call=call_no, attempts=attempts, final=attempts[-1] if attempts[-1]["parsed"] else None)
        for (model, call_no), attempts in sorted(results.items())
    ])


def snap_in_raw(raw):
    """Any SNAP amount a malformed attempt states, for the disclosure the registration promises."""
    found = []
    for pattern in (r'"snap"\s*:\s*\{[^{}]*?"value"\s*:\s*"?\$?([0-9][0-9,\.]*)', r'"snap"\s*:\s*"?\$?([0-9][0-9,\.]*)'):
        found += re.findall(pattern, raw or "")
    return sorted(set(found))


result = load_partial() if PARTIAL else json.loads((HERE / "answers-v2.json").read_text())
calls, audit = [], dict(attempts=0, retried=[], unanswered=[], malformed=[], tools_seen=[], served={})
for rec in result["results"]:
    for attempt in rec["attempts"]:
        audit["attempts"] += 1
        if attempt.get("tools"):
            audit["tools_seen"].append(dict(model=rec["model"], call=rec["call"], attempt=attempt["attempt"], tools=attempt["tools"]))
        if attempt.get("served"):
            audit["served"].setdefault(rec["model"], set()).add(attempt["served"])
        if not attempt.get("parsed"):
            audit["malformed"].append(dict(model=rec["model"], call=rec["call"], attempt=attempt["attempt"], rc=attempt.get("rc"),
                                           errors=attempt.get("errors"), snap_values_in_text=snap_in_raw(attempt.get("raw")),
                                           raw_chars=len(attempt.get("raw") or "")))
    if len(rec["attempts"]) > 1:
        audit["retried"].append(dict(model=rec["model"], call=rec["call"], attempts=len(rec["attempts"])))
    final = rec.get("final")
    if not final:
        audit["unanswered"].append(dict(model=rec["model"], call=rec["call"]))
        continue
    out = final["outputs"]
    snap = num(out.get("snap")) if out.get("snap") is not None else None
    calls.append(dict(model=rec["model"], label=LABELS[rec["model"]], newest=rec["model"] in NEWEST, call=rec["call"],
                      snap=snap, off_by=None if snap is None else round(snap - withs["snap"], 2),
                      within_1=within_dollar(snap, withs["snap"]), within_10pct=within_tenth(snap, withs["snap"]),
                      right=right_all(out), of=len(variables),
                      amounts={v: (num(out.get(v)) if out.get(v) is not None else None) for v in AMOUNTS},
                      attempts=len(rec["attempts"]), snap_explanation=(out.get("snap") or {}).get("explanation") if isinstance(out.get("snap"), dict) else None))
audit["served"] = {model: sorted(names) for model, names in audit["served"].items()}


def tally(rows):
    values = [row["snap"] for row in rows if row["snap"] is not None]
    return dict(answered=len(values), within_10pct=sum(row["within_10pct"] for row in rows), within_1=sum(row["within_1"] for row in rows),
                low=min(values, default=None), high=max(values, default=None), median=statistics.median(values) if values else None)


models = []
for model, label in LABELS.items():
    rows = sorted((row for row in calls if row["model"] == model), key=lambda row: row["call"])
    models.append(dict(model=model, label=label, newest=model in NEWEST, snap_values=[row["snap"] for row in rows],
                       right_of_28=[row["right"] for row in rows], of_calls=CALLS_PER_MODEL, **tally(rows)))


def by_output(rows):
    table = {}
    for var in AMOUNTS:
        truth, values = withs[var], [row["amounts"][var] for row in rows if row["amounts"][var] is not None]
        table[var] = dict(reference=truth, answered=len(values), low=min(values, default=None), high=max(values, default=None),
                          median=statistics.median(values) if values else None,
                          within_1=sum(within_dollar(v, truth) for v in values), within_10pct=sum(within_tenth(v, truth) for v in values))
    return table


newest_rows, all_rows = [row for row in calls if row["newest"]], calls
headline = dict(
    newest=dict(of_calls=CALLS_PER_MODEL * len(NEWEST), **tally(newest_rows)),
    all=dict(of_calls=CALLS_PER_MODEL * len(LABELS), **tally(all_rows)),
    older=dict(of_calls=CALLS_PER_MODEL * len(OLDER), **tally([row for row in calls if not row["newest"]])),
)
doc = dict(
    status="PARTIAL: the run has not finished; these numbers support no claim" if PARTIAL else "final",
    prompt="prompt-v2.txt", prompt_sha256=hashlib.sha256((HERE / "prompt-v2.txt").read_bytes()).hexdigest(), ended=result.get("ended"),
    policyengine_us_version=refs.get("policyengine_us_version"),
    reference=dict(snap_with_subsidy=withs["snap"], snap_without_subsidy=nos["snap"], outputs={v: withs[v] for v in AMOUNTS}),
    newest_versions=list(NEWEST.values()), older_versions=list(OLDER.values()),
    headline=headline, models=models, by_output=dict(newest=by_output(newest_rows), all=by_output(all_rows)), attempt_audit=audit, calls=calls,
)
(HERE / ("comparison-v2.partial.json" if PARTIAL else "comparison-v2.json")).write_text(json.dumps(doc, indent=1))

if not PARTIAL:
    # Invariants of the graded file; a failure stops the report rather than printing a wrong count.
    assert len(result["results"]) == CALLS_PER_MODEL * len(LABELS), "expected fifty call records"
    assert len(calls) + len(audit["unanswered"]) == CALLS_PER_MODEL * len(LABELS)
    assert headline["newest"]["answered"] + headline["older"]["answered"] == headline["all"]["answered"]
    assert headline["newest"]["within_10pct"] + headline["older"]["within_10pct"] == headline["all"]["within_10pct"]
    assert all(row["within_10pct"] or not row["within_1"] for row in calls), "within $1 implies within 10% at $3,663"
    assert not audit["tools_seen"], "a call used a tool"

lines = [f"# Round two against PolicyEngine US {refs.get('policyengine_us_version')}", "",
         f"Status: {doc['status']}. Prompt {doc['prompt_sha256'][:16]}, ended {doc['ended']}. Reference SNAP ${withs['snap']:,.0f} with the subsidy, ${nos['snap']:,.0f} without.", "",
         "## Headline", "",
         "| Group | Calls | Answered | Within 10% | Within $1 | Low | Median | High |", "|---|---:|---:|---:|---:|---:|---:|---:|"]
for key, name in (("newest", "Seven newest"), ("older", "Three older"), ("all", "All ten")):
    h = headline[key]
    lines.append(f"| {name} | {h['of_calls']} | {h['answered']} | {h['within_10pct']} | {h['within_1']} | {h['low'] or 0:,.0f} | {h['median'] or 0:,.0f} | {h['high'] or 0:,.0f} |")
lines += ["", "## SNAP by model, in call order", "", "| Model | Group | Calls | Within 10% | Within $1 | Median | Right of 28 |", "|---|---|---|---:|---:|---:|---|"]
for m in models:
    lines.append(f"| {m['label']} | {'newest' if m['newest'] else 'older'} | {', '.join('-' if v is None else f'{v:,.0f}' for v in m['snap_values'])} | {m['within_10pct']} | {m['within_1']} | {m['median'] or 0:,.0f} | {', '.join(map(str, m['right_of_28']))} |")
for key, name in (("newest", "seven newest"), ("all", "all ten")):
    lines += ["", f"## Amounts across calls, {name}", "", "| Output | Reference | Low | Median | High | Answered | Within $1 | Within 10% |", "|---|---:|---:|---:|---:|---:|---:|---:|"]
    for var, row in doc["by_output"][key].items():
        lines.append(f"| {var} | {row['reference']:,.2f} | {row['low'] or 0:,.0f} | {row['median'] or 0:,.0f} | {row['high'] or 0:,.0f} | {row['answered']} | {row['within_1']} | {row['within_10pct']} |")
lines += ["", "## Attempt audit", "", f"- Attempts: {audit['attempts']}.", f"- Retried calls: {audit['retried'] or 'none'}.", f"- Calls with no answer after the retry: {audit['unanswered'] or 'none'}.",
          f"- Malformed or failed attempts, with any SNAP value in their text: {audit['malformed'] or 'none'}.", f"- Tool use in any event log: {audit['tools_seen'] or 'none'}.", f"- Claude models served: {audit['served']}.", "",
          "## What each model wrote about SNAP", "", "Descriptions of what the models wrote, not verified reasoning traces.", ""]
for row in calls:
    lines.append(f"- {row['label']} call {row['call']} (${(row['snap'] or 0):,.0f}): {(row['snap_explanation'] or '')[:360]}")
target = HERE / ("comparison-v2.partial.md" if PARTIAL else "comparison-v2.md")
target.write_text("\n".join(lines) + "\n")
print(target)
