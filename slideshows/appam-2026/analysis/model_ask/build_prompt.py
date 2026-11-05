"""Render the deck's family in PolicyBench's no-tools prompt (policybench origin/main 8180cde1).

The family matches slideshows/appam-2026/analysis/household.py. One sentence is added to
PolicyBench's text: the deck's references assume a new applicant takes up child care
subsidies, and PolicyBench's preface otherwise tells models not to infer benefit receipt.
"""
import hashlib
import json
import pathlib

from policybench.prompts import describe_household, make_no_tools_batch_prompt
from policybench.scenarios import Person, Scenario

HERE = pathlib.Path(__file__).parent
ADDED = "Assume the household receives any child care subsidy it qualifies for as a new applicant."

parent = Person(
    name="adult1",
    age=30,
    employment_income=40_000,
    inputs={
        "is_tax_unit_head": True,
        "hours_worked_last_week": 40,
        "pre_subsidy_rent": 14_400,
    },
)
children = [
    Person(name="child1", age=1, employment_income=0, inputs={}),
    Person(name="child2", age=4, employment_income=0, inputs={}),
]
scenario = Scenario(
    id="appam_ma_40000",
    state="MA",
    filing_status="head_of_household",
    adults=[parent],
    children=children,
    spm_unit_inputs={
        "spm_unit_pre_subsidy_childcare_expenses": 18_000,
        "has_heating_cooling_expense": True,
        "meets_ccdf_activity_test": True,
    },
)
variables = [
    "federal_income_tax_before_refundable_credits",
    "federal_refundable_credits",
    "payroll_tax",
    "self_employment_tax",
    "state_income_tax_before_refundable_credits",
    "state_refundable_credits",
    "local_income_tax",
    "snap",
    "ssi",
    "tanf",
    "head_wic_eligible",
    "head_medicaid_eligible",
    "head_chip_eligible",
    "head_medicare_eligible",
    "child1_wic_eligible",
    "child1_medicaid_eligible",
    "child1_chip_eligible",
    "child1_medicare_eligible",
    "child1_head_start_eligible",
    "child1_early_head_start_eligible",
    "child2_wic_eligible",
    "child2_medicaid_eligible",
    "child2_chip_eligible",
    "child2_medicare_eligible",
    "child2_head_start_eligible",
    "child2_early_head_start_eligible",
    "free_school_meals_eligible",
    "reduced_price_school_meals_eligible",
]
text = make_no_tools_batch_prompt(scenario, variables, answer_contract="json", include_explanations=True)
marker = "\n\nProvide the following policy quantities"
assert text.count(marker) == 1
text = text.replace(marker, "\n\nChild care:\n- both children attend full time: 5 days a week, 8 hours a day\n\n" + ADDED + marker)
assert text.count("- tax year: 2026\n") == 1
text = text.replace("- tax year: 2026\n", "- tax year: 2026\n- county: Middlesex County\n")
(HERE / "prompt.txt").write_text(text)
(HERE / "variables.json").write_text(json.dumps(variables, indent=1) + "\n")
print(text)
print("sha256", hashlib.sha256(text.encode()).hexdigest())
