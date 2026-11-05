"""Run Georgia's SNAP earned income deduction on the Axiom rules engine.

Compile first, from a checkout of TheAxiomFoundation/rulespec-us:

    axiom-rules-engine compile \
      --program /path/to/rulespec-us/us-ga/policies/dfcs/snap/3612.yaml \
      --rulespec-root /path/to/rulespec-us \
      --output ga3612.compiled.json

Then: python axiom_ga_3612.py <engine binary> ga3612.compiled.json
Writes data/axiom_ga_3612.json. The cases cover slide 6's family at $30,000 a
year in Georgia, where PolicyEngine US gives it SNAP, and a month before the
rule's December 2019 effective date.
"""

import json
import subprocess
import sys
from pathlib import Path

MODULE = "us-ga:policies/dfcs/snap/3612"
RULES = (
    "earned_income_deduction_rate",
    "earned_income_deduction_allowed",
    "earned_income_deduction",
)
MONTHLY_EARNINGS = "2500.00"
CASES = (
    ("June 2026", "2026-06"),
    ("before the effective date", "2019-11"),
)


def month_bounds(month):
    number = int(month.split("-")[1])
    end = 30 if number in (4, 6, 9, 11) else 31
    return f"{month}-01", f"{month}-{end:02d}"


def request(month):
    start, end = month_bounds(month)
    interval = {"start": start, "end": end}
    return {
        "mode": "explain",
        "dataset": {
            "inputs": [
                {
                    "name": f"{MODULE}#input.total_countable_gross_earned_income",
                    "entity": "Household",
                    "entity_id": "family",
                    "interval": interval,
                    "value": {"kind": "decimal", "value": MONTHLY_EARNINGS},
                },
                {
                    "name": f"{MODULE}#input.assistance_unit_failed_to_report_earned_income_timely",
                    "entity": "Household",
                    "entity_id": "family",
                    "interval": interval,
                    "value": {"kind": "bool", "value": False},
                },
            ],
            "relations": [],
        },
        "queries": [
            {
                "entity_id": "family",
                "period": {"period_kind": "month", "start": start, "end": end},
                "outputs": [f"{MODULE}#{rule}" for rule in RULES],
            }
        ],
    }


def main(engine, artifact):
    version = subprocess.run(
        [engine, "capabilities"], capture_output=True, text=True, check=True
    ).stdout
    results = []
    for label, month in CASES:
        run = subprocess.run(
            [engine, "run-compiled", "--artifact", artifact],
            input=json.dumps(request(month)),
            capture_output=True,
            text=True,
            check=False,
        )
        results.append(
            {
                "case": label,
                "month": month,
                "exit_code": run.returncode,
                "stdout": json.loads(run.stdout) if run.stdout.strip() else None,
                "stderr": run.stderr.strip(),
            }
        )
    payload = {
        "engine": json.loads(version),
        "monthly_earnings": MONTHLY_EARNINGS,
        "results": results,
    }
    path = Path(__file__).parent.parent / "data" / "axiom_ga_3612.json"
    path.write_text(json.dumps(payload, indent=1) + "\n")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
