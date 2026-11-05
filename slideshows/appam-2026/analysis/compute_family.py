"""Run the family through all 51 jurisdictions at every earnings level.

Writes data/family.json: one row per state with each net-resources line on a
$500 grid from $0 to $120,000. The deck's charts read this file.
"""

import json
import sys
from importlib.metadata import version
from multiprocessing import Pool
from pathlib import Path

import household as hh

EARNINGS_MIN = 0
EARNINGS_MAX = 120_000
EARNINGS_STEP = 500
WORKERS = 4


def run_state(state):
    count = (EARNINGS_MAX - EARNINGS_MIN) // EARNINGS_STEP + 1
    axes = hh.earnings_axis(EARNINGS_MIN, EARNINGS_MAX, count)
    sim = hh.simulate(state, axes=axes)
    parts = hh.net_resources_parts(sim)
    return state, {
        key: [round(float(x), 2) for x in value] for key, value in parts.items()
    }


def main():
    # compute_family.py <commit> [STATE ...] reruns the named states and keeps the rest of the file.
    only = sys.argv[2:]
    path = Path(__file__).parent.parent / "data" / "family.json"
    kept = {}
    if only:
        existing = json.loads(path.read_text())
        pin = (existing["policyengine_us_version"], existing["policyengine_us_commit"])
        if pin != (version("policyengine-us"), sys.argv[1]):
            raise SystemExit("A partial rerun needs the pin that computed the other states.")
        kept = existing["states"]
    with Pool(WORKERS) as pool:
        states = {**kept, **dict(pool.map(run_state, only or hh.STATES))}
    payload = {
        "policyengine_us_version": version("policyengine-us"),
        "policyengine_us_commit": sys.argv[1],
        "year": hh.YEAR,
        "family": {
            "parent_age": hh.PARENT_AGE,
            "child_ages": list(hh.CHILD_AGES),
            "rent_per_month": hh.RENT_PER_MONTH,
            "child_care_per_month": hh.CHILD_CARE_PER_MONTH,
        },
        "posted_limits": {"ID": {"monthly": hh.IDAHO_POSTED_MONTHLY_LIMIT}},
        "earnings": list(range(EARNINGS_MIN, EARNINGS_MAX + 1, EARNINGS_STEP)),
        "counties": {state: hh.COUNTIES[state]["county"] for state in hh.STATES},
        "states": states,
    }
    path.write_text(json.dumps(payload, separators=(",", ":")) + "\n")


if __name__ == "__main__":
    main()
