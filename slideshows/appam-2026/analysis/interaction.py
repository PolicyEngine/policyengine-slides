"""Measure how a child care subsidy changes the family's other lines.

Runs the family twice in one state and changes nothing but the subsidy, which
the second run fixes at zero as an input.
"""

import json
import sys
from importlib.metadata import version
from pathlib import Path

from policyengine_us import Simulation

import household as hh

STATE = "TX"
EARNINGS = 40_000


def run(without_subsidy):
    situation = hh.situation(STATE, EARNINGS)
    if without_subsidy:
        situation["spm_units"]["spm_unit"]["child_care_subsidies"] = {hh.YEAR: 0}
    parts = hh.net_resources_parts(Simulation(situation=situation))
    return {key: round(float(value[0]), 2) for key, value in parts.items()}


def main(commit):
    payload = {
        "policyengine_us_version": version("policyengine-us"),
        "policyengine_us_commit": commit,
        "year": hh.YEAR,
        "earnings": EARNINGS,
        "state": STATE,
        "with_subsidy": run(without_subsidy=False),
        "without_subsidy": run(without_subsidy=True),
    }
    path = Path(__file__).parent.parent / "data" / "interaction.json"
    path.write_text(json.dumps(payload, indent=1) + "\n")


if __name__ == "__main__":
    main(sys.argv[1])
