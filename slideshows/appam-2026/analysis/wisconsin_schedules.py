"""Run the family in Wisconsin in years before its current child care schedules.

Wisconsin Shares' rate parameters start on 2025-10-01, and the model copies each
parameter's earliest value back to 2015, so earlier years return a subsidy too.
"""

import json
import sys
from importlib.metadata import version
from pathlib import Path

import household as hh

STATE = "WI"
EARNINGS = 40_000
YEARS = (2021, 2023, hh.YEAR)


def subsidy(year):
    parts = hh.net_resources_parts(hh.simulate(STATE, EARNINGS, year=year), year)
    return round(float(parts["child_care_subsidy"][0]), 2)


def main(commit):
    payload = {
        "policyengine_us_version": version("policyengine-us"),
        "policyengine_us_commit": commit,
        "state": STATE,
        "earnings": EARNINGS,
        "child_care_subsidy": {str(year): subsidy(year) for year in YEARS},
    }
    path = Path(__file__).parent.parent / "data" / "wisconsin_schedules.json"
    path.write_text(json.dumps(payload, indent=1) + "\n")


if __name__ == "__main__":
    main(sys.argv[1])
