"""This family in Massachusetts, line by line.

Slide 3 reveals SNAP, slide 5 draws the waterfall and slide 8 doubles the credit. Each run
takes the deck's own household at the headline earnings, so its total matches slide 6's row.
"""

import json
from importlib.metadata import version
from pathlib import Path

import household as hh
from policyengine_core.reforms import Reform
from policyengine_us import Simulation

STATE = "MA"
EARNINGS = 40_000
CREDIT = "gov.states.ma.tax.income.credits.child_and_family.amount"
DOUBLED = 880
OUT = Path(__file__).parents[1] / "data" / "family_lines.json"


def total(sim, name):
    return round(float(sim.calculate(name, hh.YEAR, map_to="spm_unit").sum()), 2)


def waterfall(sim):
    """Every line from earnings to net resources, signed as it moves net resources."""
    parts = hh.net_resources_parts(sim)
    part = lambda name: round(float(parts[name][0]), 2)
    payroll = total(sim, "spm_unit_payroll_tax")
    return {
        "earnings": part("earnings"),
        "federal_income_tax_before_refundable_credits": -total(sim, "income_tax_before_refundable_credits"),
        "federal_refundable_credits": total(sim, "income_tax_refundable_credits"),
        "payroll_tax": -payroll,
        "state_income_tax_before_refundable_credits": -total(sim, "state_income_tax_before_refundable_credits"),
        "state_refundable_credits": total(sim, "state_refundable_credits"),
        "snap": part("snap"),
        "wic": part("wic"),
        "child_care_subsidy": part("child_care_subsidy"),
        "child_care_bill": part("child_care_bill"),
        "net_resources": part("net_resources"),
    }


def detail(sim):
    names = [
        "eitc",
        "refundable_ctc",
        "employee_social_security_tax",
        "employee_medicare_tax",
        "employee_state_payroll_tax",
        "ma_child_and_family_credit",
        "ma_eitc",
        "childcare_expenses",
        "snap_dependent_care_deduction",
        "tanf",
    ]
    return {name: total(sim, name) for name in names}


def monthly_snap(sim):
    return [round(float(sim.calculate("snap", f"{hh.YEAR}-{month:02d}")[0]), 2) for month in range(1, 13)]


def main():
    situation = hh.situation(STATE, EARNINGS)
    sim = hh.run(STATE, situation)

    # The prompt's other reading: the family pays the whole bill. As references.py runs it.
    unsubsidized = hh.situation(STATE, EARNINGS)
    unsubsidized["spm_units"]["spm_unit"]["child_care_subsidies"] = {hh.YEAR: 0}
    without = hh.run(STATE, unsubsidized)

    reform = Reform.from_dict({CREDIT: {f"{hh.YEAR}-01-01.2100-12-31": DOUBLED}}, country_id="us")
    doubled = Simulation(situation=hh.situation(STATE, EARNINGS), reform=reform)

    payload = {
        "policyengine_us_version": version("policyengine-us"),
        "state": STATE,
        "earnings": EARNINGS,
        "year": hh.YEAR,
        "lines": waterfall(sim),
        "detail": detail(sim),
        "monthly_snap": monthly_snap(sim),
        "without_subsidy": {
            "monthly_snap": monthly_snap(without),
            "net_resources": round(float(hh.net_resources_parts(without)["net_resources"][0]), 2),
            "snap": total(without, "snap"),
            "federal_refundable_credits": total(without, "income_tax_refundable_credits"),
            "snap_dependent_care_deduction": total(without, "snap_dependent_care_deduction"),
        },
        "doubled_credit": {
            "per_dependent": DOUBLED,
            "lines": waterfall(doubled),
            "ma_child_and_family_credit": total(doubled, "ma_child_and_family_credit"),
        },
    }
    OUT.write_text(json.dumps(payload, indent=2) + "\n")
    print(json.dumps(payload, indent=1))


if __name__ == "__main__":
    main()
