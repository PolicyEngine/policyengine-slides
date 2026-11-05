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

import numpy as np
from policyengine_core.reforms import Reform
from policyengine_us import Simulation
from policyengine_us.model_api import MONTH, USD, YEAR as PERIOD_YEAR, SPMUnit, StateCode, Variable, where

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

COUNTIES = json.loads(Path(__file__).with_name("largest_counties.json").read_text())

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
# policyengine-us#10573 adds both to the SPM unit totals, so empty this tuple
# when the pin moves past it.
CASH_OUTSIDE_SPM_TOTALS = ("ak_permanent_fund_dividend", "nj_property_tax_relief")

# The model reads Idaho's limit for new applicants from IDAPA 16.06.12.070.01, which
# caps income at 175% of the poverty guideline. The Department of Health and Welfare
# moved new applicants to 130% when it reopened applications on January 13, 2025, and
# its apply page posts $2,888 a month for a family of three, effective October 2025.
# The parameter takes a share of the guideline, so this deck sets the share that gives
# the posted limit for this family of three in 2026.
IDAHO_LIMIT_PARAMETER = "gov.states.id.dhw.iccp.income.fpl_rate.initial_eligibility"
IDAHO_POSTED_MONTHLY_LIMIT = 2_888
INDIANA_LIMIT_PARAMETER = "gov.states.in.fssa.ccdf.income.get_on_fpg_rate"
MISSOURI_LIMIT_PARAMETER = "gov.states.mo.dese.ccs.income.fpl_rate.initial_eligibility"
ALABAMA_LIMIT_PARAMETER = "gov.states.al.dhr.ccsp.income.limit.fpl_initial"
POVERTY_GUIDELINE_2025_FOR_THREE = 26_650
POVERTY_GUIDELINE_2026_FOR_THREE = 27_320

# The model carries Ohio's Publicly Funded Child Care and not its Child Care Choice
# Voucher, which pays families the first program turns down for income, up to 200% of
# the poverty guideline (Procedure Letters 36 and 45). Letter 36 pays a center at least
# $800 a month for a child of 1 and $750 for a child of 4, and H.B. 96 moves the voucher
# to the first program's rates by November 1, 2026, which also exceed this family's
# bill. The voucher and the family's share may not exceed the provider's private rate,
# so the voucher pays the bill.
OHIO_VOUCHER_POVERTY_SHARE = 2
OHIO_VOUCHER_MONTHLY_FOR_THESE_CHILDREN = 800 + 750


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
        "spm_unit_pre_subsidy_childcare_expenses": {year: CHILD_CARE_PER_MONTH * 12},
        "has_heating_cooling_expense": {year: True},
        # Both default to a value that misdescribes a parent in a regular job:
        # the activity test defaults to not met, and the Wisconsin Works
        # placement puts a family with no child under 1 and no third-trimester
        # pregnancy in a Community Service Job.
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


class oh_child_care_choice_voucher(Variable):
    value_type = float
    entity = SPMUnit
    unit = USD
    label = "Ohio Child Care Choice Voucher"
    definition_period = MONTH
    defined_for = StateCode.OH

    def formula(spm_unit, period, parameters):
        income = spm_unit("oh_ccap_countable_income", period)
        # Ohio rounds its monthly standards up to a whole dollar, as the model does
        # for the first program's limit.
        ceiling = np.ceil(spm_unit("oh_ccap_fpg", period) * OHIO_VOUCHER_POVERTY_SHARE)
        turned_down_for_income = ~spm_unit("oh_ccap_income_eligible", period)
        has_child = spm_unit.sum(spm_unit.members("oh_ccap_eligible_child", period)) > 0
        works = spm_unit("oh_ccap_activity_eligible", period)
        monthly_bill = (
            spm_unit("spm_unit_pre_subsidy_childcare_expenses", period.this_year) / 12
        )
        return where(
            turned_down_for_income & (income <= ceiling) & has_child & works,
            np.minimum(monthly_bill, OHIO_VOUCHER_MONTHLY_FOR_THESE_CHILDREN),
            0,
        )


class oh_child_care_subsidies(Variable):
    value_type = float
    entity = SPMUnit
    label = "Ohio child care subsidies"
    unit = USD
    definition_period = PERIOD_YEAR
    defined_for = StateCode.OH
    adds = ["oh_ccap", "oh_child_care_choice_voucher"]


class OhioVoucher(Reform):
    def apply(self):
        self.update_variable(oh_child_care_choice_voucher)
        self.update_variable(oh_child_care_subsidies)


def posted_limits():
    """Limits for new applicants where a state posts less than the model reads, by state.

    Each parameter multiplies a poverty guideline. Missouri's chart, updated July 1, 2026, tops
    out at $3,331 for three, 150% of the 2025 guideline, and the model multiplies the 2026 one.
    Alabama's fact sheet of June 1, 2026 tops out at the same $3,331, 150% of last year's
    guideline, which the model's own formula reads. Indiana's chart starts April 5, 2026; before
    then, we use the same 150% of the 2025 guideline, since no dated source supports more.
    """
    of_2025 = 1.5 * POVERTY_GUIDELINE_2025_FOR_THREE / POVERTY_GUIDELINE_2026_FOR_THREE
    idaho = IDAHO_POSTED_MONTHLY_LIMIT * 12 / POVERTY_GUIDELINE_2026_FOR_THREE
    return {
        "ID": {IDAHO_LIMIT_PARAMETER: {f"{YEAR}-01-01.2100-12-31": idaho}},
        "IN": {INDIANA_LIMIT_PARAMETER: {f"{YEAR}-01-01.{YEAR}-04-04": of_2025}},
        "MO": {MISSOURI_LIMIT_PARAMETER: {f"{YEAR}-01-01.2100-12-31": of_2025}},
        "AL": {ALABAMA_LIMIT_PARAMETER: {f"{YEAR}-06-01.2100-12-31": 1.5}},
    }


def state_updates(state):
    """The reform a state's runs take: a posted limit, Ohio's voucher, or none."""
    if state == "OH":
        return OhioVoucher
    limits = posted_limits().get(state)
    return Reform.from_dict(limits, country_id="us") if limits else None


def run(state, household):
    """Every run of the family goes through here, so posted limits and Ohio's voucher reach them all."""
    return Simulation(situation=household, reform=state_updates(state))


def simulate(state, earnings=0, axes=None, year=YEAR):
    return run(state, situation(state, earnings, axes, year))


def net_resources_parts(sim, year=YEAR):
    """Every line of net resources, as one array per line."""

    def get(name):
        return sim.calculate(name, year, map_to="spm_unit").astype(float)

    bill = get("spm_unit_pre_subsidy_childcare_expenses")
    paid = get("childcare_expenses")
    snap, wic, tanf = get("snap"), get("wic"), get("tanf")
    subsidies_in_benefits = sum(get(name) for name in SUBSIDIES_IN_SPM_BENEFITS)
    # spm_unit_payroll_tax includes state payroll taxes and paid leave contributions.
    state_payroll_tax = get("employee_state_payroll_tax")
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
            get("spm_unit_federal_tax")
            + get("spm_unit_payroll_tax")
            - state_payroll_tax
        ),
        "state_taxes": -(
            get("spm_unit_state_tax") + get("spm_unit_local_tax") + state_payroll_tax
        ),
        "child_care_bill": -bill,
    }
    parts["net_resources"] = sum(parts.values())
    return parts
