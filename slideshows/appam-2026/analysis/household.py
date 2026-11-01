"""The one family every chart in this deck follows.

A single parent works full time all year, rents, and buys full-time care for
two children. Only the state and, on the earnings charts, the earnings change.

Net resources here means earnings, plus benefits, minus taxes net of credits,
minus what the family pays for child care. The child care line comes from
childcare_expenses, which cannot fall below zero, so a subsidy that exceeds the
bill never adds cash. spm_unit_net_income and household_net_income each treat
child care and a few cash payments differently, so test_invariants.py reconciles
net resources with both.
"""

import json
from pathlib import Path

from policyengine_us import Simulation

YEAR = 2026
RENT_PER_MONTH = 1_200
CHILD_CARE_PER_MONTH = 1_500
PARENT_AGE = 30
CHILD_AGES = (1, 4)

STATES = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI",
    "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN",
    "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH",
    "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA",
    "WV", "WI", "WY",
]  # fmt: skip

COUNTIES = json.loads(
    Path(__file__).with_name("largest_counties.json").read_text()
)

# Colorado, Washington and West Virginia pay subsidies that the model also
# lists under spm_unit_benefits. Every state's subsidy shows up here through
# childcare_expenses, so these three leave the benefits line.
SUBSIDIES_IN_SPM_BENEFITS = (
    "co_ccap_subsidy",
    "wa_child_care_subsidies",
    "wv_child_care_subsidies",
)

# Alaska's dividend reaches household_market_income and New Jersey's ANCHOR
# payment reaches household_benefits, but neither reaches the SPM unit totals.
CASH_OUTSIDE_SPM_TOTALS = ("ak_permanent_fund_dividend", "nj_property_tax_relief")


def situation(state, earnings, axes=None, year=YEAR):
    """The family as a PolicyEngine situation, for one state."""
    parent = {
        "age": {year: PARENT_AGE},
        "employment_income": {year: earnings},
        "weekly_hours_worked_before_lsr": {year: 40},
        "weeks_worked": {year: 52},
        "pre_subsidy_rent": {year: RENT_PER_MONTH * 12},
    }
    people = {"parent": parent}
    for i, age in enumerate(CHILD_AGES):
        people[f"child{i + 1}"] = {
            "age": {year: age},
            "childcare_days_per_week": {year: 5},
            "childcare_hours_per_day": {year: 8},
            "childcare_attending_days_per_month": {year: 21},
        }
    members = list(people)
    marital_units = {"parent_unit": {"members": ["parent"]}}
    for name in members[1:]:
        marital_units[f"{name}_unit"] = {"members": [name]}
    spm_unit = {
        "members": members,
        "spm_unit_pre_subsidy_childcare_expenses": {
            year: CHILD_CARE_PER_MONTH * 12
        },
        "has_heating_cooling_expense": {year: True},
        # Both default to a value that misdescribes a parent in a regular job:
        # the activity test defaults to not met, and Wisconsin Works places
        # every family in a Community Service Job.
        "meets_ccdf_activity_test": {year: True},
    }
    if state == "WI":
        spm_unit["wi_works_placement"] = {
            f"{year}-{month:02d}": "NONE" for month in range(1, 13)
        }
    result = {
        "people": people,
        "tax_units": {"tax_unit": {"members": members}},
        "families": {"family": {"members": members}},
        "marital_units": marital_units,
        "spm_units": {"spm_unit": spm_unit},
        "households": {
            "household": {
                "members": members,
                "state_name": {year: state},
                "county": {year: COUNTIES[state]["enum"]},
            }
        },
    }
    if axes is not None:
        result["axes"] = axes
    return result


def earnings_axis(minimum, maximum, count, year=YEAR):
    """A PolicyEngine axis that sweeps the parent's earnings."""
    return [
        [
            {
                "name": "employment_income",
                "min": minimum,
                "max": maximum,
                "count": count,
                "period": year,
            }
        ]
    ]


def simulate(state, earnings=0, axes=None, year=YEAR):
    return Simulation(situation=situation(state, earnings, axes, year))


def net_resources_parts(sim, year=YEAR):
    """Every line of net resources, as one array per line."""

    def get(name):
        return sim.calculate(name, year, map_to="spm_unit").astype(float)

    bill = get("spm_unit_pre_subsidy_childcare_expenses")
    paid = get("childcare_expenses")
    snap, wic, tanf = get("snap"), get("wic"), get("tanf")
    subsidies_in_benefits = sum(get(name) for name in SUBSIDIES_IN_SPM_BENEFITS)
    parts = {
        "earnings": get("spm_unit_market_income"),
        "snap": snap,
        "wic": wic,
        "tanf": tanf,
        "child_care_subsidy": bill - paid,
        "other_benefits": (
            get("spm_unit_benefits")
            + get("acp")
            + get("ebb")
            - snap
            - wic
            - tanf
            - subsidies_in_benefits
            + sum(get(name) for name in CASH_OUTSIDE_SPM_TOTALS)
        ),
        "federal_taxes": -(
            get("spm_unit_federal_tax") + get("spm_unit_payroll_tax")
        ),
        "state_taxes": -(get("spm_unit_state_tax") + get("spm_unit_local_tax")),
        "child_care_bill": -bill,
    }
    parts["net_resources"] = sum(parts.values())
    return parts
