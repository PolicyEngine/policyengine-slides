"""What each state pays the $40,000 family in each month of 2026.

Writes data/subsidy_months.json. Slide 6 names the states whose subsidy covers part of the year, and this script
finds them: it reads each state's own monthly program variables and counts the months that pay anything. It also
runs Indiana under the limit it set for new applicants on April 5, 2026 in all twelve months.
"""

import json
from importlib.metadata import version
from multiprocessing import Pool
from pathlib import Path

import household as hh
import numpy as np
from policyengine_core.reforms import Reform
from policyengine_us import Simulation

MONTHS = [f"{hh.YEAR}-{month:02d}" for month in range(1, 13)]
EARNINGS = 40_000
WORKERS = 4
INDIANA_LIMIT = "gov.states.in.fssa.ccdf.income.get_on_fpg_rate"


def scalar(values):
    return float(np.ravel(values)[0])


def monthly_variables(system, name):
    """The monthly variables behind a yearly total, following each adds list."""
    variable = system.variables[name]
    if variable.definition_period == "month":
        return [name]
    return [leaf for child in variable.adds for leaf in monthly_variables(system, child)]


def run_state(state):
    sim = hh.simulate(state, EARNINGS)
    parts = hh.net_resources_parts(sim)
    name = f"{state.lower()}_child_care_subsidies"
    monthly = np.zeros(len(MONTHS))
    for variable in monthly_variables(sim.tax_benefit_system, name):
        monthly += np.array(
            [scalar(sim.calculate(variable, month, map_to="spm_unit")) for month in MONTHS]
        )
    return {
        "code": state,
        "subsidy": round(scalar(parts["child_care_subsidy"]), 2),
        "net_resources": round(scalar(parts["net_resources"]), 2),
        "monthly": [round(float(amount), 2) for amount in monthly],
        "months_paid": int((monthly > 0).sum()),
    }


def indiana():
    """Indiana's limit for new applicants, the family's income, and the April limit in all twelve months."""
    reform = Reform.from_dict(
        {INDIANA_LIMIT: {f"{hh.YEAR}-01-01.2100-12-31": 1.35}}, country_id="us"
    )
    current = Simulation(situation=hh.situation("IN", EARNINGS))
    april_rule = Simulation(situation=hh.situation("IN", EARNINGS), reform=reform)
    parameters = current.tax_benefit_system.parameters

    def rate(date):
        return float(parameters(date).gov.states["in"].fssa.ccdf.income.get_on_fpg_rate)

    poverty_guideline = scalar(current.calculate("spm_unit_fpg", hh.YEAR))
    parts = hh.net_resources_parts(april_rule)
    return {
        "rate_january": rate(f"{hh.YEAR}-01-01"),
        "rate_may": rate(f"{hh.YEAR}-05-01"),
        "poverty_guideline": round(poverty_guideline, 2),
        "monthly_limit_from_april": round(poverty_guideline * rate(f"{hh.YEAR}-05-01") / 12, 2),
        "monthly_income": round(scalar(current.calculate("in_ccdf_countable_income", f"{hh.YEAR}-06")), 2),
        "april_limit_all_year": {
            "subsidy": round(scalar(parts["child_care_subsidy"]), 2),
            "net_resources": round(scalar(parts["net_resources"]), 2),
        },
    }


def main():
    with Pool(WORKERS) as pool:
        rows = pool.map(run_state, hh.STATES)
    payload = {
        "policyengine_us_version": version("policyengine-us"),
        "year": hh.YEAR,
        "earnings": EARNINGS,
        "rows": rows,
        "indiana": indiana(),
    }
    out = Path(__file__).parent.parent / "data" / "subsidy_months.json"
    out.write_text(json.dumps(payload, indent=1) + "\n")
    for row in rows:
        if row["months_paid"] != 12:
            print(row["code"], row["months_paid"], row["subsidy"], row["net_resources"])
    print(json.dumps(payload["indiana"]))


if __name__ == "__main__":
    main()
