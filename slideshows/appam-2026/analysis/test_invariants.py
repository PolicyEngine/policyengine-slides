"""Properties the family's numbers must hold at every input.

Run from this folder with pytest. The cases come from Hypothesis, so they cover
states and earnings nobody picked by hand.
"""

import household as hh
import numpy as np
from enrolled_cliffs import FLAGS
from hypothesis import given, settings
from hypothesis import strategies as st
from policyengine_us import Simulation

MAX_EXAMPLES = 40
# The model stores money as 32-bit floats, so totals drift by fractions of a cent.
TOLERANCE = 0.02
states = st.sampled_from(hh.STATES)
earnings = st.integers(min_value=0, max_value=150_000)


def line(sim, name):
    return float(sim.calculate(name, hh.YEAR, map_to="spm_unit")[0])


@settings(max_examples=MAX_EXAMPLES, deadline=None)
@given(states, earnings)
def test_lines_add_up_to_net_resources(state, income):
    parts = hh.net_resources_parts(hh.simulate(state, income))
    total = parts.pop("net_resources")
    assert abs(sum(parts.values())[0] - total[0]) < TOLERANCE


@settings(max_examples=MAX_EXAMPLES, deadline=None)
@given(states, earnings)
def test_family_never_pays_more_than_the_bill(state, income):
    parts = hh.net_resources_parts(hh.simulate(state, income))
    assert parts["child_care_subsidy"][0] >= -TOLERANCE


@settings(max_examples=MAX_EXAMPLES, deadline=None)
@given(states, earnings)
def test_state_payroll_taxes_sit_on_the_state_line(state, income):
    sim = hh.simulate(state, income)
    parts = hh.net_resources_parts(sim)
    state_payroll_tax = line(sim, "employee_state_payroll_tax")
    federal = line(sim, "spm_unit_federal_tax") + line(sim, "spm_unit_payroll_tax")
    state_and_local = line(sim, "spm_unit_state_tax") + line(sim, "spm_unit_local_tax")
    assert abs(parts["federal_taxes"][0] + federal - state_payroll_tax) < TOLERANCE
    assert (
        abs(parts["state_taxes"][0] + state_and_local + state_payroll_tax) < TOLERANCE
    )


@settings(max_examples=MAX_EXAMPLES, deadline=None)
@given(states, earnings)
def test_reconciles_with_spm_net_income(state, income):
    """Differential test against the model's own SPM total.

    spm_unit_net_income subtracts the capped sum of work costs and the full
    child care bill, plus medical costs and child support, and counts three
    states' subsidies as benefits. Net resources subtracts only the part of the
    bill the family pays, leaves those other costs out, and adds two state
    payments the SPM totals miss.
    """
    sim = hh.simulate(state, income)
    net = hh.net_resources_parts(sim)["net_resources"][0]
    subsidies_in_benefits = sum(line(sim, n) for n in hh.SUBSIDIES_IN_SPM_BENEFITS)
    expected_gap = (
        sum(line(sim, name) for name in hh.CASH_OUTSIDE_SPM_TOTALS)
        - subsidies_in_benefits
        - line(sim, "childcare_expenses")
        + line(sim, "spm_unit_capped_work_childcare_expenses")
        + line(sim, "spm_unit_medical_out_of_pocket_expenses")
        + line(sim, "child_support_expense")
    )
    assert abs(net - line(sim, "spm_unit_net_income") - expected_gap) < TOLERANCE


@settings(max_examples=MAX_EXAMPLES, deadline=None)
@given(states, earnings)
def test_reconciles_with_household_net_income(state, income):
    """Differential test against the model's household total.

    household_net_income ignores child care bills and leaves out Alaska's energy
    relief. It also counts the subsidy as a benefit in some states and not in
    others, so the remaining gap must equal either zero or the whole subsidy.
    """
    sim = hh.simulate(state, income)
    parts = hh.net_resources_parts(sim)
    before_child_care = parts["net_resources"][0] + line(sim, "childcare_expenses")
    gap = (
        line(sim, "household_net_income")
        + line(sim, "ak_energy_relief")
        - before_child_care
    )
    subsidy = parts["child_care_subsidy"][0]
    assert min(abs(gap), abs(gap - subsidy)) < TOLERANCE


@settings(max_examples=10, deadline=None)
@given(states, earnings)
def test_axis_and_single_runs_agree(state, income):
    """The earnings grid and a one-household run share every rule."""
    grid = round(income / 500) * 500
    swept = hh.simulate(state, axes=hh.earnings_axis(grid, grid + 500, 2))
    single = hh.simulate(state, grid)
    a = hh.net_resources_parts(swept)["net_resources"][0]
    b = hh.net_resources_parts(single)["net_resources"][0]
    assert np.isclose(a, b, atol=TOLERANCE)


@settings(max_examples=MAX_EXAMPLES, deadline=None)
@given(st.sampled_from(sorted(FLAGS)), earnings)
def test_enrolling_never_lowers_the_subsidy(state, income):
    """A state's enrolled flag only raises its income limit, so it can't cost the family a subsidy."""

    def subsidy(enrolled):
        situation = hh.situation(state, income)
        if enrolled:
            situation["spm_units"]["spm_unit"][FLAGS[state]] = {
                f"{hh.YEAR}-{month:02d}": True for month in range(1, 13)
            }
        return hh.net_resources_parts(Simulation(situation=situation))["child_care_subsidy"][0]

    assert subsidy(True) >= subsidy(False) - TOLERANCE
