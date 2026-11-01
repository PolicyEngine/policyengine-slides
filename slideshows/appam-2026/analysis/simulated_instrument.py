"""Run one fixed sample of families through every state's rules.

Each run keeps the same people and the same incomes and changes only the state,
so the differences between runs come from each state's rules.

families.pkl stands in for a survey extract: one row per person, with columns
named variable__year. sample_families.py builds it from Populace US.
"""

import json
import sys
from importlib.metadata import version
from multiprocessing import Pool
from pathlib import Path

import pandas as pd
from policyengine_core.data import Dataset
from policyengine_us import Microsimulation

SAMPLE_YEAR = 2024
WORKERS = 4
CHILD_AGE_LIMIT = 19
# A family keeps its state only, so a county from one state never reaches another
# state's county-level rules.
FINER_GEOGRAPHY = (
    "county", "county_fips", "congressional_district_geoid", "block_geoid",
    "tract_geoid", "cbsa_code", "place_fips",
)  # fmt: skip
STATE_FIPS = {
    "AL": 1, "AK": 2, "AZ": 4, "AR": 5, "CA": 6, "CO": 8, "CT": 9, "DE": 10,
    "DC": 11, "FL": 12, "GA": 13, "HI": 15, "ID": 16, "IL": 17, "IN": 18,
    "IA": 19, "KS": 20, "KY": 21, "LA": 22, "ME": 23, "MD": 24, "MA": 25,
    "MI": 26, "MN": 27, "MS": 28, "MO": 29, "MT": 30, "NE": 31, "NV": 32,
    "NH": 33, "NJ": 34, "NM": 35, "NY": 36, "NC": 37, "ND": 38, "OH": 39,
    "OK": 40, "OR": 41, "PA": 42, "RI": 44, "SC": 45, "SD": 46, "TN": 47,
    "TX": 48, "UT": 49, "VT": 50, "VA": 51, "WA": 53, "WV": 54, "WI": 55,
    "WY": 56,
}  # fmt: skip

families = None


def load(path):
    global families
    families = pd.read_pickle(path).drop(
        columns=[f"{name}__{SAMPLE_YEAR}" for name in FINER_GEOGRAPHY], errors="ignore"
    )


def run(state):
    # A worker's exception that fails to unpickle hangs the whole pool, so each
    # state reports its own failure as text.
    try:
        return simulate(state)
    except Exception as error:
        return {"state": state, "error": repr(error)}


def simulate(state):
    people = families.copy()
    people[f"state_fips__{SAMPLE_YEAR}"] = STATE_FIPS[state]
    sim = Microsimulation(dataset=Dataset.from_dataframe(people, SAMPLE_YEAR))
    month = f"{SAMPLE_YEAR}-01"

    # sample_families.py draws households in proportion to their weights, with
    # replacement, so each household in the file counts once.
    def household_mean(name):
        return float(sim.calculate(name, SAMPLE_YEAR, map_to="household").values.mean())

    children = sim.calculate("age", SAMPLE_YEAR).values < CHILD_AGE_LIMIT
    units_with_children = (
        sim.calculate("is_child", SAMPLE_YEAR, map_to="spm_unit").values > 0
    )
    snap = sim.calculate("is_snap_eligible", month).values
    covered = (
        sim.calculate("is_medicaid_eligible", SAMPLE_YEAR).values
        | sim.calculate("is_chip_eligible", SAMPLE_YEAR).values
    )
    return {
        "state": state,
        "state_check": str(sim.calculate("state_code_str", SAMPLE_YEAR).values[0]),
        "snap_eligible_share": float(snap[units_with_children].mean()),
        "child_medicaid_chip_share": float(covered[children].mean()),
        "state_income_tax": household_mean("state_income_tax"),
        "state_refundable_credits": household_mean("state_refundable_credits"),
        "earnings_check": household_mean("employment_income"),
    }


def main(path, commit):
    with Pool(WORKERS, initializer=load, initargs=(path,)) as pool:
        rows = pool.map(run, STATE_FIPS)
    sample = pd.read_pickle(path)
    payload = {
        "policyengine_us_version": version("policyengine-us"),
        "policyengine_us_commit": commit,
        "year": SAMPLE_YEAR,
        "households": int(sample[f"person_household_id__{SAMPLE_YEAR}"].nunique()),
        "people": len(sample),
        "rows": rows,
    }
    target = Path(__file__).parent.parent / "data" / "simulated_instrument.json"
    target.write_text(json.dumps(payload, indent=1) + "\n")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
