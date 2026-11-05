"""Copy what the models answered about the family into the deck's data.

Usage: python3 model_answers.py model_ask/comparison-v2.json

The ask ran five calls per model with no tools, in PolicyBench's format, for slide 2's family
(analysis/model_ask/, whose PREREGISTERED.md records the method). Its references come from this
deck's household.py at PolicyEngine US 2.90.2. This script keeps every answer, marks the newest
version in each family as shown on slide 3, and writes data/model_answers.json. It counts answers
within $1, PolicyBench's rule for an exact dollar amount, and within 10%, its rule for where
models still break. model_ask/comparison.json holds the earlier round, on an earlier prompt.
"""

import json
import sys
from pathlib import Path

HERE = Path(__file__).parent

LINES = {
    "snap": "SNAP",
    "federal_refundable_credits": "Federal refundable credits",
    "state_refundable_credits": "State refundable credits",
    "state_income_tax_before_refundable_credits": "State income tax",
    "payroll_tax": "Payroll tax",
    "federal_income_tax_before_refundable_credits": "Federal income tax",
}


def summary(group):
    return {
        "calls": group["of_calls"],
        "answers": group["answered"],
        "low": group["low"],
        "median": group["median"],
        "high": group["high"],
        "within_one_dollar": group["within_1"],
        "within_ten_percent": group["within_10pct"],
    }


def table(group):
    return [
        {
            "key": key,
            "label": label,
            "reference": group[key]["reference"],
            "low": group[key]["low"],
            "high": group[key]["high"],
            "within_one_dollar": group[key]["within_1"],
            "within_ten_percent": group[key]["within_10pct"],
            "answers": group[key]["answered"],
        }
        for key, label in LINES.items()
    ]


def main(path):
    run = json.loads(Path(path).read_text())
    if run["status"] != "final":
        raise SystemExit(f"{path} says {run['status']!r}; the deck takes only a final file")
    result = {
        "prompt_sha256_prefix": run["prompt_sha256"][:16],
        "policyengine_us_version": run["policyengine_us_version"],
        "reference_snap": run["reference"]["snap_with_subsidy"],
        "reference_snap_without_subsidy": run["reference"]["snap_without_subsidy"],
        "snap": {
            "shown": summary(run["headline"]["newest"]),
            "older": summary(run["headline"]["older"]),
            "all": summary(run["headline"]["all"]),
        },
        "rows": [
            {
                "model": row["model"],
                "name": row["label"],
                "shown": row["newest"],
                "answers": row["snap_values"],
                "within_ten_percent": row["within_10pct"],
                "within_one_dollar": row["within_1"],
                "low": row["low"],
                "median": row["median"],
                "high": row["high"],
            }
            for row in run["models"]
        ],
        "table": table(run["by_output"]["newest"]),
    }
    out = HERE.parent / "data" / "model_answers.json"
    out.write_text(json.dumps(result, indent=2) + "\n")
    return result


if __name__ == "__main__":
    print(json.dumps(main(sys.argv[1]), indent=1))
