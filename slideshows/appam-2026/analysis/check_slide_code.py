"""Run the code on slides 7 and 8 as the slides print it.

Slide 7's loop reads a CSV of the fixed sample. Slide 8's reform dictionary runs on
the Massachusetts rows of the local-area file. content.test.ts compares the results
with the deck's own runs.
"""

import json
import sys
import tempfile
from importlib.metadata import version
from pathlib import Path

import pandas as pd
from policyengine_core.data import Dataset
from policyengine_core.reforms import Reform
from policyengine_us import Microsimulation
from simulated_instrument import FINER_GEOGRAPHY, SAMPLE_YEAR
from simulated_instrument import STATE_FIPS as ALL_STATES
from state_baseline import DATA_YEAR, load_state, state_file

STATE_FIPS = {code: ALL_STATES[code] for code in ("AR", "MD")}
MASSACHUSETTS_FIPS = 25


def slide_7(sample_path):
    survey = pd.read_pickle(sample_path).drop(
        columns=[f"{name}__{SAMPLE_YEAR}" for name in FINER_GEOGRAPHY], errors="ignore"
    )
    shares = {}
    with tempfile.TemporaryDirectory() as folder:
        csv = Path(folder) / "your_survey.csv"
        survey.to_csv(csv, index=False)
        people = pd.read_csv(csv)
    for code, fips in STATE_FIPS.items():
        people["state_fips__2024"] = fips
        data = Dataset.from_dataframe(people, 2024)
        sim = Microsimulation(dataset=data)
        snap = sim.calculate("is_snap_eligible", "2024-01")
        units = sim.calculate("is_child", 2024, map_to="spm_unit").values > 0
        shares[code] = float(snap.values[units].mean())
    return shares


def state_income_tax(sim):
    return float(
        (
            sim.calculate("state_income_tax", 2026).values
            * sim.calculate("tax_unit_weight", 2026).values
        ).sum()
    )


def slide_8(folder):
    load_state(MASSACHUSETTS_FIPS, Path(folder))
    massachusetts = Dataset.from_dataframe(state_file(MASSACHUSETTS_FIPS), DATA_YEAR)
    reform = Reform.from_dict({
        "gov.states.ma.tax.income.credits"
        ".child_and_family.amount": {
            "2026-01-01.2100-12-31": 880
        }
    }, country_id="us")  # fmt: skip

    baseline = Microsimulation(dataset=massachusetts)
    reformed = Microsimulation(dataset=massachusetts, reform=reform)
    return state_income_tax(baseline) - state_income_tax(reformed)


def main(commit, sample_path, folder):
    payload = {
        "policyengine_us_version": version("policyengine-us"),
        "policyengine_us_commit": commit,
        "slide_7_snap_eligible_share": slide_7(sample_path),
        "slide_8_state_cost": slide_8(folder),
    }
    target = Path(__file__).parent.parent / "data" / "slide_code_check.json"
    target.write_text(json.dumps(payload, indent=1) + "\n")


if __name__ == "__main__":
    main(*sys.argv[1:4])
