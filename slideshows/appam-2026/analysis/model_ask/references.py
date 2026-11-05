"""PolicyEngine's answers for the prompt's outputs, on the deck's own family and pinned model.

Usage: uv run -q --no-project --with policyengine-us==2.90.2 python references.py <deck analysis dir> <out.json>
"""
import json
import sys
from importlib.metadata import version

sys.path.insert(0, sys.argv[1])
import household as hh  # noqa: E402
from policyengine_us import Simulation  # noqa: E402

YEAR = hh.YEAR
SUMS = {
    "federal_income_tax_before_refundable_credits": "income_tax_before_refundable_credits",
    "federal_refundable_credits": "income_tax_refundable_credits",
    "payroll_tax": "spm_unit_payroll_tax",
    "self_employment_tax": "self_employment_tax",
    "state_income_tax_before_refundable_credits": "state_income_tax_before_refundable_credits",
    "state_refundable_credits": "state_refundable_credits",
    "local_income_tax": "local_income_tax",
    "snap": "snap",
    "ssi": "ssi",
    "tanf": "tanf",
}
FLAGS = {
    "wic": "is_wic_eligible",
    "medicaid": "is_medicaid_eligible",
    "chip": "is_chip_eligible",
    "medicare": "is_medicare_eligible",
    "head_start": "is_head_start_eligible",
    "early_head_start": "is_early_head_start_eligible",
}
DETAIL = [
    "adjusted_gross_income",
    "income_tax",
    "eitc",
    "refundable_ctc",
    "non_refundable_ctc",
    "cdcc",
    "ctc",
    "employee_social_security_tax",
    "employee_medicare_tax",
    "state_income_tax",
    "ma_income_tax",
    "ma_income_tax_before_credits",
    "ma_child_and_family_credit",
    "ma_eitc",
    "ma_non_refundable_credits",
    "ma_refundable_credits",
    "wic",
    "childcare_expenses",
    "spm_unit_pre_subsidy_childcare_expenses",
    "child_care_subsidies",
    "ma_child_care_subsidies",
    "snap_dependent_care_deduction",
    "snap_gross_income",
    "snap_net_income",
    "snap_max_allotment",
    "free_school_meals",
    "reduced_price_school_meals",
]


def total(sim, name):
    try:
        return round(float(sim.calculate(name, YEAR, map_to="household").sum()), 2)
    except Exception as error:  # A variable name can change across model versions.
        return f"unavailable: {type(error).__name__}"


def run(situation):
    sim = Simulation(situation=situation)
    out = {key: total(sim, var) for key, var in SUMS.items()}
    people = ["head", "child1", "child2"]
    for short, var in FLAGS.items():
        values = sim.calculate(var, YEAR)
        for person, value in zip(people, values):
            out[f"{person}_{short}_eligible"] = int(bool(value))
    out["free_school_meals_eligible"] = int(total(sim, "free_school_meals") > 0)
    out["reduced_price_school_meals_eligible"] = int(total(sim, "reduced_price_school_meals") > 0)
    detail = {name: total(sim, name) for name in DETAIL}
    parts = {k: round(float(v[0]), 2) for k, v in hh.net_resources_parts(sim).items()}
    return out, detail, parts


with_subsidy = hh.situation("MA", 40_000)
without_subsidy = hh.situation("MA", 40_000)
without_subsidy["spm_units"]["spm_unit"]["child_care_subsidies"] = {YEAR: 0}
outputs, detail, parts = run(with_subsidy)
outputs_0, detail_0, parts_0 = run(without_subsidy)
payload = {
    "policyengine_us_version": version("policyengine-us"),
    "family": "deck household.py, MA, Middlesex County, $40,000, 2026",
    "with_subsidy": {"outputs": outputs, "detail": detail, "net_resources_parts": parts},
    "without_subsidy": {"outputs": outputs_0, "detail": detail_0, "net_resources_parts": parts_0},
}
with open(sys.argv[2], "w") as handle:
    json.dump(payload, handle, indent=1)
print(json.dumps(payload["with_subsidy"], indent=0)[:2500])
print("no subsidy snap", outputs_0["snap"], "net", parts_0.get("net_resources"))
