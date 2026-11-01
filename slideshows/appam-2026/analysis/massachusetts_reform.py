"""Double the Massachusetts child and family tax credit and score it.

Runs current law and the reform on the Massachusetts records in Populace US for
2026. The reform assumes no behavioral responses.

Populace US carries few well-weighted records for any one state, so a small reform
can leave a state's poverty rate unchanged because no record crosses the threshold.
The poverty gap moves with each dollar that reaches a family below the threshold,
so the slide reports that alongside cost. Cost means the fall in state income tax,
and household_gain holds the change in household net income beside it.
"""

import json
import sys
from importlib.metadata import version
from pathlib import Path

import numpy as np
from policyengine_core.data import Dataset
from policyengine_core.reforms import Reform
from policyengine_us import Microsimulation

from state_baseline import DATA_YEAR, kish, load, state_file

YEAR = 2026
MASSACHUSETTS_FIPS = 25
PARAMETER = "gov.states.ma.tax.income.credits.child_and_family.amount"
CURRENT = 440
REFORMED = 880
CHILD_AGE_LIMIT = 18


def results(sim):
    weight = sim.calculate("person_weight", YEAR).values
    poor = sim.calculate("spm_unit_is_in_spm_poverty", YEAR, map_to="person").values
    children = sim.calculate("age", YEAR).values < CHILD_AGE_LIMIT
    gap = sim.calculate("poverty_gap", YEAR).values
    return {
        "children": float(weight[children].sum()),
        "people": float(weight.sum()),
        "child_poverty": float(np.average(poor[children], weights=weight[children])),
        "poverty": float(np.average(poor, weights=weight)),
        "poverty_gap": float(
            np.sum(gap * sim.calculate("spm_unit_weight", YEAR).values)
        ),
        "state_income_tax": float(
            np.sum(
                sim.calculate("state_income_tax", YEAR).values
                * sim.calculate("tax_unit_weight", YEAR).values
            )
        ),
        "poor_records": poor,
        "household_weight": sim.calculate("household_weight", YEAR).values,
        "household_net_income": sim.calculate("household_net_income", YEAR).values,
    }


def main(commit):
    load()
    people = state_file(MASSACHUSETTS_FIPS)
    baseline = results(
        Microsimulation(dataset=Dataset.from_dataframe(people, DATA_YEAR))
    )
    reform = Reform.from_dict(
        {PARAMETER: {f"{YEAR}-01-01.2100-12-31": REFORMED}}, country_id="us"
    )
    reformed = results(
        Microsimulation(
            dataset=Dataset.from_dataframe(people, DATA_YEAR), reform=reform
        )
    )
    gains = reformed["household_net_income"] - baseline["household_net_income"]
    weights = baseline["household_weight"]
    payload = {
        "policyengine_us_version": version("policyengine-us"),
        "policyengine_us_commit": commit,
        "dataset": "Populace US",
        "year": YEAR,
        "parameter": PARAMETER,
        "current": CURRENT,
        "reformed": REFORMED,
        "state_cost": baseline["state_income_tax"] - reformed["state_income_tax"],
        "household_gain": float(np.sum(gains * weights)),
        "households_gaining_share": float(np.sum(weights[gains > 1]) / np.sum(weights)),
        "any_household_loses": bool((gains < -1).any()),
        "household_records": len(weights),
        "effective_households": kish(weights),
        "people_crossing_threshold": int(
            np.sum(baseline["poor_records"] != reformed["poor_records"])
        ),
    }
    for key in ("children", "people", "child_poverty", "poverty", "poverty_gap"):
        payload[f"baseline_{key}"] = baseline[key]
        payload[f"reformed_{key}"] = reformed[key]
    target = Path(__file__).parent.parent / "data" / "massachusetts_reform.json"
    target.write_text(json.dumps(payload, indent=1) + "\n")


if __name__ == "__main__":
    main(sys.argv[1])
