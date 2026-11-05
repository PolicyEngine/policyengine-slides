"""Properties the family's numbers must hold at every input.

Run from this folder with pytest. The cases come from Hypothesis, so they cover
states and earnings nobody picked by hand.
"""

import household as hh
import numpy as np
import pytest
from enrolled_cliffs import FLAGS
from hypothesis import given, settings
from hypothesis import strategies as st

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


def enrolled_run(state, income, enrolled):
    situation = hh.situation(state, income)
    if enrolled:
        situation["spm_units"]["spm_unit"][FLAGS[state]] = {
            f"{hh.YEAR}-{month:02d}": True for month in range(1, 13)
        }
    return hh.run(state, situation)


def subsidy(state, income, enrolled):
    parts = hh.net_resources_parts(enrolled_run(state, income, enrolled))
    return parts["child_care_subsidy"][0]


# Ohio's voucher covers this bill and its first program charges a copay, so a new
# applicant can draw more than a family in that program. That gap is intended, and
# test_enrolling_never_lowers_ohios_first_program holds the first program to the rule.
@settings(max_examples=MAX_EXAMPLES, deadline=None)
@given(st.sampled_from(sorted(set(FLAGS) - {"OH"})), earnings)
def test_enrolling_never_lowers_the_subsidy(state, income):
    assert subsidy(state, income, True) >= subsidy(state, income, False) - TOLERANCE


@settings(max_examples=MAX_EXAMPLES, deadline=None)
@given(earnings)
def test_enrolling_never_lowers_ohios_first_program(income):
    def first_program(enrolled):
        return sum(months(enrolled_run("OH", income, enrolled), "oh_ccap"))

    assert first_program(True) >= first_program(False) - TOLERANCE


@pytest.mark.parametrize(
    "state, income",
    [
        ("MD", 100_000),
        ("IA", 50_000),
        ("ID", 60_000),
        ("OH", 60_000),
        ("NV", 40_000),
        ("IN", 40_000),
    ],
)
def test_enrolling_raises_the_subsidy_past_the_limit_for_new_applicants(state, income):
    assert subsidy(state, income, True) > subsidy(state, income, False) + TOLERANCE


def months(sim, name):
    return [
        float(sim.calculate(name, f"{hh.YEAR}-{month:02d}", map_to="spm_unit")[0])
        for month in range(1, 13)
    ]


def test_only_idaho_and_ohio_take_an_update():
    assert {s for s in hh.STATES if hh.state_updates(s) is not None} == {"ID", "OH"}


def test_idaho_limit_matches_the_posted_figure():
    def eligible(annual):
        sim = hh.simulate("ID", annual)
        return bool(sim.calculate("id_iccp_income_eligible", f"{hh.YEAR}-01")[0])

    sim = hh.simulate("ID", 40_000)
    assert float(sim.calculate("spm_unit_fpg", hh.YEAR)[0]) == pytest.approx(
        hh.POVERTY_GUIDELINE_2026_FOR_THREE
    )
    assert eligible((hh.IDAHO_POSTED_MONTHLY_LIMIT - 1) * 12)
    assert not eligible((hh.IDAHO_POSTED_MONTHLY_LIMIT + 1) * 12)


def test_idaho_step_also_passes_snaps_gross_limit_until_october():
    def passes(annual, month):
        sim = hh.simulate("ID", annual)
        return bool(sim.calculate("meets_snap_gross_income_test", f"{hh.YEAR}-{month:02d}")[0])

    assert passes(34_500, 1)
    assert not passes(35_000, 1)
    assert passes(35_000, 10)


def test_voucher_rates_cover_this_bill():
    assert hh.OHIO_VOUCHER_MONTHLY_FOR_THESE_CHILDREN >= hh.CHILD_CARE_PER_MONTH


@pytest.mark.parametrize(
    "annual, first_program_months, voucher_months",
    [
        # Ohio's posted limits: $3,221 and $4,442 through September, $3,302 and $4,554 after.
        (38_500, 12, 0),
        (39_000, 3, 9),
        (40_000, 0, 12),
        (53_000, 0, 12),
        (53_500, 0, 3),
        (55_000, 0, 0),
    ],
)
def test_ohio_voucher_follows_the_posted_limits(annual, first_program_months, voucher_months):
    sim = hh.simulate("OH", annual)
    first_program = months(sim, "oh_ccap")
    voucher = months(sim, "oh_child_care_choice_voucher")
    assert sum(amount > 0 for amount in first_program) == first_program_months
    assert sum(amount > 0 for amount in voucher) == voucher_months
    assert all(amount in (0, hh.CHILD_CARE_PER_MONTH) for amount in voucher)


@settings(max_examples=MAX_EXAMPLES, deadline=None)
@given(earnings)
def test_ohios_programs_never_pay_in_the_same_month(income):
    sim = hh.simulate("OH", income)
    pairs = zip(months(sim, "oh_ccap"), months(sim, "oh_child_care_choice_voucher"))
    assert all(first == 0 or voucher == 0 for first, voucher in pairs)


def test_family_already_in_ohios_first_program_draws_no_voucher():
    sim = enrolled_run("OH", 40_000, True)
    assert sum(months(sim, "oh_child_care_choice_voucher")) == 0
    assert sum(months(sim, "oh_ccap")) > 0
