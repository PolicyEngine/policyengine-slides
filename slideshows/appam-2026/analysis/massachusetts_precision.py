"""Standard errors for slide 8's Massachusetts figures, clustered by household.

Linearizes each figure over the local-area file's Massachusetts households. It treats
the weights as fixed, so it leaves out what calibration adds, and it leaves out errors
that every record shares, such as a data-wide error in rent.
"""

import json
import sys
from importlib.metadata import version
from pathlib import Path

from massachusetts_reform import MASSACHUSETTS_FIPS, PARAMETER, REFORMED, YEAR
from policyengine_core.data import Dataset
from policyengine_core.reforms import Reform
from policyengine_us import Microsimulation
from standard_errors import ratio_se, total_se
from state_baseline import DATA_YEAR, STATE_DATASET, load_state, state_file

CHILD_AGE_LIMIT = 18


def read(sim):
    return {
        "poor": sim.calculate(
            "spm_unit_is_in_spm_poverty", YEAR, map_to="person"
        ).values.astype(float),
        "gap": sim.calculate("poverty_gap", YEAR).values,
        "tax": sim.calculate("state_income_tax", YEAR).values,
    }


def main(commit, folder):
    load_state(MASSACHUSETTS_FIPS, Path(folder))
    people = state_file(MASSACHUSETTS_FIPS)
    sim = Microsimulation(dataset=Dataset.from_dataframe(people, DATA_YEAR))
    reform = Reform.from_dict(
        {PARAMETER: {f"{YEAR}-01-01.2100-12-31": REFORMED}}, country_id="us"
    )
    baseline = read(sim)
    reformed = read(
        Microsimulation(
            dataset=Dataset.from_dataframe(people, DATA_YEAR), reform=reform
        )
    )

    def households(entity):
        return sim.calculate("household_id", YEAR, map_to=entity).values

    is_child = sim.calculate("age", YEAR).values < CHILD_AGE_LIMIT
    children = sim.calculate("person_weight", YEAR).values * is_child
    child_rate, child_rate_se = ratio_se(
        children * baseline["poor"], children, households("person")
    )
    fall, fall_se = ratio_se(
        children * (baseline["poor"] - reformed["poor"]),
        children,
        households("person"),
    )
    crossing = is_child & (baseline["poor"] != reformed["poor"])
    gap_fall = (baseline["gap"] - reformed["gap"]) * sim.calculate(
        "spm_unit_weight", YEAR
    ).values
    cost = (baseline["tax"] - reformed["tax"]) * sim.calculate(
        "tax_unit_weight", YEAR
    ).values
    payload = {
        "policyengine_us_version": version("policyengine-us"),
        "policyengine_us_commit": commit,
        "dataset": STATE_DATASET,
        "year": YEAR,
        "child_rate_percent": 100 * child_rate,
        "child_rate_se_points": 100 * child_rate_se,
        "child_rate_fall_points": 100 * fall,
        "child_rate_fall_se_points": 100 * fall_se,
        "child_records_crossing": int(crossing.sum()),
        "households_with_a_child_crossing": len(
            set(households("person")[crossing].tolist())
        ),
        "poverty_gap_fall": float(gap_fall.sum()),
        "poverty_gap_fall_se": total_se(gap_fall, households("spm_unit")),
        "state_cost": float(cost.sum()),
        "state_cost_se": total_se(cost, households("tax_unit")),
    }
    target = Path(__file__).parent.parent / "data" / "massachusetts_precision.json"
    target.write_text(json.dumps(payload, indent=1) + "\n")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
