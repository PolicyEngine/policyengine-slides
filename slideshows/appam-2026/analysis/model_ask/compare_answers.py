#!/usr/bin/env python3
"""Compare the no-tools answers with PolicyEngine US 2.90.2 for the APPAM family, and list the tools-on first batch."""
import json, pathlib, re, glob
HERE = pathlib.Path(__file__).resolve().parent
refs = json.loads((HERE / "references-ma-40000.json").read_text())
withs, nos = refs["with_subsidy"]["outputs"], refs["without_subsidy"]["outputs"]
variables = json.loads((HERE / "variables.json").read_text())
variables = variables if isinstance(variables, list) else list(variables)
ELIG = lambda v: v.endswith("_eligible")


def num(cell):
    value = cell.get("value") if isinstance(cell, dict) else cell
    try:
        return float(value)
    except Exception:
        return None


def score(outputs):
    right, wrong = 0, []
    for var in variables:
        pred = num(outputs.get(var)) if outputs.get(var) is not None else None
        truth = withs[var]
        ok = pred is not None and (abs(pred - truth) < 0.5 if ELIG(var) else abs(pred - truth) <= 1)
        right += ok
        if not ok:
            wrong.append((var, pred, truth))
    return right, wrong


result = json.loads((HERE / "answers.json").read_text())
rows, table = [], []
for rec in result["results"]:
    out = rec.get("outputs")
    if not out:
        rows.append(dict(model=rec["model"], answered=False, errors=rec.get("errors"), tools=rec.get("tools")))
        continue
    right, wrong = score(out)
    snap = num(out.get("snap"))
    rows.append(dict(model=rec["model"], served=rec.get("served"), answered=True, tools=rec.get("tools"), snap=snap,
                     snap_explanation=(out.get("snap") or {}).get("explanation"),
                     right=right, of=len(variables), wrong=wrong,
                     amounts={v: num(out.get(v)) for v in variables if not ELIG(v)}))
(HERE / "comparison.json").write_text(json.dumps(dict(references=dict(with_subsidy=withs, without_subsidy=nos), rows=rows, prompt_sha256_prefix=result.get("prompt_sha256_prefix"), ended=result.get("ended")), indent=1))

print("Reference SNAP", withs["snap"], "with subsidy;", nos["snap"], "without")
print()
print("| model | SNAP | off by | within $1 | within 10% | all 28 right | tools |")
print("|---|---:|---:|---|---|---:|---|")
for row in rows:
    if not row["answered"]:
        print(f"| {row['model']} | no answer ({row['errors']}) |  |  |  |  |  |")
        continue
    gap = row["snap"] - withs["snap"]
    print(f"| {row['model']} | {row['snap']:,.0f} | {gap:+,.0f} | {'yes' if abs(gap) <= 1 else 'no'} | {'yes' if abs(gap) <= 0.1 * withs['snap'] else 'no'} | {row['right']} of {row['of']} | {','.join(row['tools']) or 'none'} |")
print()
AMT = [v for v in variables if not ELIG(v)]
print("Amount outputs (reference in the first row)")
print("| model | " + " | ".join(AMT) + " |")
print("|---|" + "---:|" * len(AMT))
print("| REFERENCE | " + " | ".join(f"{withs[v]:,.0f}" for v in AMT) + " |")
for row in rows:
    if row["answered"]:
        print(f"| {row['model']} | " + " | ".join("-" if row['amounts'][v] is None else f"{row['amounts'][v]:,.0f}" for v in AMT) + " |")
print()
print("Eligibility misses by model")
for row in rows:
    if row["answered"]:
        print(row["model"], [(v, p) for v, p, t in row["wrong"] if ELIG(v)])
print()
print("SNAP explanations")
for row in rows:
    if row["answered"]:
        print("-", row["model"], ":", (row["snap_explanation"] or "")[:420])
print()
print("First batch: tools on, same prompt, stopped once I saw tool use. Reported as preregistered and invalid for any claim: my setup left a shell and web search on, with the working folder beside the reference file. GPT-6 Sol read references-ma-40000.json. GPT-6 Astra and GPT-6.1 Sol found and ran the policyengine-us clone on this Mac.")
for path in sorted(glob.glob(str(HERE / "answers-first-batch/*.attempt1.jsonl"))):
    model = pathlib.Path(path).name.split(".attempt")[0]
    text, tools = "", []
    for line in open(path):
        try:
            event = json.loads(line)
        except Exception:
            continue
        if event.get("type") == "item.completed":
            item = event["item"]
            if item.get("type") in ("agent_message", "assistant_message"):
                text = item.get("text", "")
            elif item.get("type") not in ("reasoning", "error"):
                tools.append(item.get("type"))
    try:
        out = json.loads(text[text.index("{"): text.rindex("}") + 1])["outputs"]
    except Exception:
        print("-", model, "no parsed answer; tool calls:", len(tools))
        continue
    right, _ = score(out)
    searches = sum(t == "web_search" for t in tools); commands = sum(t == "command_execution" for t in tools)
    print(f"- {model}: SNAP {num(out.get('snap')):,.0f}; {right} of {len(variables)} right; {commands} shell commands, {searches} web searches")
