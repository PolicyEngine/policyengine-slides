"""Where the child care cliff falls for a family already enrolled.

The deck's family applies for each program as a new applicant. This script runs the same household with only each
state's "currently enrolled" flag added, on a $500 grid from $0 to $160,000, because Maryland's limit for enrolled
families runs past the deck's own sweep. It covers slide 5's three states and the other states that
set a lower limit for new applicants. Its new-applicant runs must reproduce data/family.json on the grid the two share.

Writes data/enrolled_cliffs.json, which the slides read, and data/enrolled_sweep.json, which the tests read.
"""

import json
from importlib.metadata import version
from multiprocessing import Pool
from pathlib import Path

import household as hh
import numpy as np

EARNINGS_MIN = 0
EARNINGS_MAX = 160_000
EARNINGS_STEP = 500
EARNINGS = list(range(EARNINGS_MIN, EARNINGS_MAX + 1, EARNINGS_STEP))
HEADLINE_EARNINGS = 40_000
WORKERS = 4
FLAGS = {
    "MD": "md_ccs_enrolled",
    "IA": "ia_cca_enrolled",
    "ID": "id_iccp_enrolled",
    "OH": "oh_ccap_enrolled",
    "NV": "nv_ccdp_enrolled",
    "IN": "is_in_ccdf_enrolled",
}
ROOT = Path(__file__).parent.parent / "data"


def run(state, enrolled):
    axes = hh.earnings_axis(EARNINGS_MIN, EARNINGS_MAX, len(EARNINGS))
    situation = hh.situation(state, 0, axes=axes)
    if enrolled:
        situation["spm_units"]["spm_unit"][FLAGS[state]] = {
            f"{hh.YEAR}-{month:02d}": True for month in range(1, 13)
        }
    parts = hh.net_resources_parts(hh.run(state, situation))
    return {
        "subsidy": [round(float(x), 2) for x in parts["child_care_subsidy"]],
        "net_resources": [round(float(x), 2) for x in parts["net_resources"]],
    }


def run_state(state):
    return state, {"new_applicant": run(state, False), "enrolled": run(state, True)}


def exit_step(lines):
    """The last $500 step at which the family still draws a subsidy."""
    subsidy = np.array(lines["subsidy"])
    net = np.array(lines["net_resources"])
    last = int(np.where(subsidy > 0)[0].max())
    return {
        "before": EARNINGS[last],
        "after": EARNINGS[last + 1],
        "subsidy_before": round(float(subsidy[last])),
        "drop": round(float(net[last] - net[last + 1])),
    }


def largest_drop(lines):
    net = np.array(lines["net_resources"])
    i = int(np.argmin(np.diff(net)))
    return {
        "before": EARNINGS[i],
        "after": EARNINGS[i + 1],
        "drop": round(float(net[i] - net[i + 1])),
    }


def summary(state, runs):
    at_headline = EARNINGS.index(HEADLINE_EARNINGS)
    return {
        "code": state,
        "flag": FLAGS[state],
        "new_applicant": {
            "largest_drop": largest_drop(runs["new_applicant"]),
            "subsidy_at_headline": round(runs["new_applicant"]["subsidy"][at_headline]),
        },
        "enrolled": {
            "exit": exit_step(runs["enrolled"]),
            "subsidy_at_headline": round(runs["enrolled"]["subsidy"][at_headline]),
        },
    }


def check_against_family(results):
    """The new-applicant runs must reproduce the deck's own sweep."""
    family = json.loads((ROOT / "family.json").read_text())
    for state, runs in results.items():
        lines = family["states"][state]
        for i, earnings in enumerate(family["earnings"]):
            j = EARNINGS.index(earnings)
            for key in ("subsidy", "net_resources"):
                deck = lines["child_care_subsidy" if key == "subsidy" else key][i]
                assert abs(runs["new_applicant"][key][j] - deck) < 0.02, (state, earnings, key)


def main():
    with Pool(WORKERS) as pool:
        results = dict(pool.map(run_state, FLAGS))
    check_against_family(results)
    model = version("policyengine-us")
    rows = [summary(state, results[state]) for state in FLAGS]
    (ROOT / "enrolled_cliffs.json").write_text(
        json.dumps(
            {"policyengine_us_version": model, "year": hh.YEAR, "headline_earnings": HEADLINE_EARNINGS, "rows": rows},
            indent=1,
        )
        + "\n"
    )
    (ROOT / "enrolled_sweep.json").write_text(
        json.dumps(
            {"policyengine_us_version": model, "earnings": EARNINGS, "states": results},
            separators=(",", ":"),
        )
        + "\n"
    )
    for row in rows:
        print(json.dumps(row))


if __name__ == "__main__":
    main()
