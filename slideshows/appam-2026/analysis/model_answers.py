"""Copy what the models answered about the family into the deck's data.

Usage: python3 model_answers.py <the ask's comparison.json>

The ask ran once per model with no tools, in PolicyBench's format, for slide 2's family
(analysis/model_ask/). Its references come from this deck's household.py at PolicyEngine US
2.90.2. This script keeps every answer, marks the newest version in each family as shown on
slide 3, and writes data/model_answers.json. It counts answers within $1, PolicyBench's rule
for an exact dollar amount, and within 10%, its rule for where models still break.
"""

import json
import sys
from pathlib import Path

HERE = Path(__file__).parent

# Newest version in each family, in the ask's spelling, with the name the slide prints.
SHOWN = {
    "gpt-6.1-sol": "GPT-6.1 Sol",
    "gpt-6.1-terra": "GPT-6.1 Terra",
    "gpt-6-astra": "GPT-6 Astra",
    "gpt-6-luna": "GPT-6 Luna",
    "claude-opus-5-5": "Claude Opus 5.5",
    "claude-sonnet-5-5": "Claude Sonnet 5.5",
    "claude-haiku-5-5": "Claude Haiku 5.5",
}
OLDER = {
    "gpt-5.6-terra": "GPT-5.6 Terra",
    "gpt-6-sol": "GPT-6 Sol",
    "claude-opus-4-7": "Claude Opus 4.7",
}
# The dollar lines slide 4 lists, starting from slide 3's question.
LINES = {
    "snap": "SNAP",
    "federal_refundable_credits": "Federal refundable credits",
    "state_refundable_credits": "State refundable credits",
    "state_income_tax_before_refundable_credits": "State income tax before refundable credits",
    "payroll_tax": "Payroll tax",
    "federal_income_tax_before_refundable_credits": "Federal income tax before refundable credits",
}
WITHIN = 1
WITHIN_TEN_PERCENT = 0.1


def main(path):
    comparison = json.loads(Path(path).read_text())
    truth = comparison["references"]["with_subsidy"]
    without = comparison["references"]["without_subsidy"]
    rows = []
    for row in comparison["rows"]:
        model = row["model"]
        if model not in SHOWN and model not in OLDER:
            raise ValueError(f"Unnamed model {model}")
        record = {
            "model": model,
            "name": SHOWN.get(model) or OLDER[model],
            "shown": model in SHOWN,
            "answered": row["answered"],
            "tools": row.get("tools"),
        }
        if row["answered"]:
            record["served"] = row.get("served")
            record["amounts"] = {line: row["amounts"][line] for line in LINES}
            record["right_of_all_outputs"] = row["right"]
            record["all_outputs"] = row["of"]
        rows.append(record)
    shown = [row for row in rows if row["shown"]]
    missing = [row["name"] for row in shown if not row["answered"]]
    if len(shown) != len(SHOWN):
        raise ValueError("A model the slide names has no row")
    answered = [row for row in shown if row["answered"]]
    table = []
    for line, label in LINES.items():
        values = [row["amounts"][line] for row in answered]
        table.append(
            {
                "key": line,
                "label": label,
                "reference": truth[line],
                "low": min(values),
                "high": max(values),
                "within_one_dollar": sum(abs(value - truth[line]) <= WITHIN for value in values),
                "within_ten_percent": sum(abs(value - truth[line]) <= WITHIN_TEN_PERCENT * truth[line] for value in values),
                "answers": len(values),
            }
        )
    result = {
        "prompt_sha256_prefix": comparison["prompt_sha256_prefix"],
        "policyengine_us_version": "2.90.2",
        "reference_snap": truth["snap"],
        "reference_snap_without_subsidy": without["snap"],
        "not_answered": missing,
        "rows": rows,
        "table": table,
    }
    out = HERE.parent / "data" / "model_answers.json"
    out.write_text(json.dumps(result, indent=2) + "\n")
    print(json.dumps({key: result[key] for key in ("reference_snap", "not_answered", "table")}, indent=1))
    for row in rows:
        print(row["name"], row["shown"], row.get("amounts", {}).get("snap"))


if __name__ == "__main__":
    main(sys.argv[1])
