"""Run one fixed sample of families through every state's rules.

Each run keeps the same people, the same incomes and the same weights, and
changes only the state and the tax year. The variation in the results therefore
comes from the rules alone, which is the logic of a simulated instrument.

families.pkl stands in for a survey extract: one row per person, with columns
named variable__year. sample_families.py builds it from Populace US.
"""

import json
import sys
from importlib.metadata import version
from itertools import product
from multiprocessing import Pool
from pathlib import Path

import numpy as np
import pandas as pd
from policyengine_core.data import Dataset
from policyengine_us import Microsimulation

SAMPLE_YEAR = 2024
YEARS = (2022, 2026)
WORKERS = 4
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
    families = pd.read_pickle(path)


def run(state, year):
    # A worker's exception that fails to unpickle hangs the whole pool, so each
    # state and year reports its own failure as text.
    try:
        return simulate(state, year)
    except Exception as error:
        return {"state": state, "year": year, "error": repr(error)}


def simulate(state, year):
    people = families.rename(
        columns=lambda name: name.replace(f"__{SAMPLE_YEAR}", f"__{year}")
    )
    people[f"state_fips__{year}"] = STATE_FIPS[state]
    sim = Microsimulation(dataset=Dataset.from_dataframe(people, year))

    def mean(name):
        values = sim.calculate(name, year, map_to="household").values
        return values.astype(float)

    weights = sim.calculate("household_weight", year).values
    snap_eligible = sim.calculate("is_snap_eligible", f"{year}-01").values
    spm_weights = sim.calculate("spm_unit_weight", year).values
    return {
        "state": state,
        "year": year,
        "state_income_tax": float(np.average(mean("state_income_tax"), weights=weights)),
        "state_refundable_credits": float(
            np.average(mean("state_refundable_credits"), weights=weights)
        ),
        "snap_eligible_share": float(np.average(snap_eligible, weights=spm_weights)),
        "earnings_check": float(np.average(mean("employment_income"), weights=weights)),
    }


def main(path, commit):
    with Pool(WORKERS, initializer=load, initargs=(path,)) as pool:
        rows = pool.starmap(run, product(STATE_FIPS, YEARS))
    sample = pd.read_pickle(path)
    payload = {
        "policyengine_us_version": version("policyengine-us"),
        "policyengine_us_commit": commit,
        "households": int(sample[f"person_household_id__{SAMPLE_YEAR}"].nunique()),
        "people": len(sample),
        "rows": rows,
    }
    target = Path(__file__).parent.parent / "data" / "simulated_instrument.json"
    target.write_text(json.dumps(payload, indent=1) + "\n")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
