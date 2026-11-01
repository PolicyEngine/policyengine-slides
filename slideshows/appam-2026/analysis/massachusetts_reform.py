"""Double the Massachusetts child and family tax credit and score it.

Runs current law and the reform on Populace US for 2026 and reports Massachusetts
only. The reform assumes no behavioural responses.
"""

import json
import sys
from importlib.metadata import version
from pathlib import Path

import numpy as np
from policyengine_core.reforms import Reform
from policyengine_us import Microsimulation

YEAR = 2026
PARAMETER = "gov.states.ma.tax.income.credits.child_and_family.amount"
CURRENT = 440
REFORMED = 880
CHILD_AGE_LIMIT = 18


def massachusetts_results(sim):
    in_state = sim.calculate("state_code_str", YEAR, map_to="person").values == "MA"
    weight = sim.calculate("person_weight", YEAR).values
    age = sim.calculate("age", YEAR).values
    poor = sim.calculate("spm_unit_is_in_spm_poverty", YEAR, map_to="person").values
    deep = sim.calculate("spm_unit_is_in_deep_spm_poverty", YEAR, map_to="person").values
    household_in_state = (
        sim.calculate("state_code_str", YEAR, map_to="household").values == "MA"
    )
    children = in_state & (age < CHILD_AGE_LIMIT)
    return {
        "children": float(weight[children].sum()),
        "people": float(weight[in_state].sum()),
        "child_poverty": float(np.average(poor[children], weights=weight[children])),
        "child_deep_poverty": float(
            np.average(deep[children], weights=weight[children])
        ),
        "poverty": float(np.average(poor[in_state], weights=weight[in_state])),
        "household_weight": sim.calculate("household_weight", YEAR).values[
            household_in_state
        ],
        "household_net_income": sim.calculate(
            "household_net_income", YEAR, map_to="household"
        ).values[household_in_state],
        "household_records": int(household_in_state.sum()),
    }


def main(commit):
    baseline = massachusetts_results(Microsimulation())
    reform = Reform.from_dict(
        {PARAMETER: {f"{YEAR}-01-01.2100-12-31": REFORMED}}, country_id="us"
    )
    reformed = massachusetts_results(Microsimulation(reform=reform))
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
        "cost": float(np.sum(gains * weights)),
        "households_gaining_share": float(
            np.sum(weights[gains > 1]) / np.sum(weights)
        ),
        "any_household_loses": bool((gains < -1).any()),
        "household_records": baseline["household_records"],
    }
    for key in ("children", "people", "child_poverty", "child_deep_poverty", "poverty"):
        payload[f"baseline_{key}"] = baseline[key]
        payload[f"reformed_{key}"] = reformed[key]
    target = Path(__file__).parent.parent / "data" / "massachusetts_reform.json"
    target.write_text(json.dumps(payload, indent=1) + "\n")


if __name__ == "__main__":
    main(sys.argv[1])
