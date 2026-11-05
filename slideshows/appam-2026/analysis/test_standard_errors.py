"""Standard errors must respect the sample's households."""

import numpy as np
import pandas as pd
import pytest
from hypothesis import given, settings
from hypothesis import strategies as st
from policyengine_us import Simulation
from standard_errors import ratio_se, total_se, unit_clusters

values = st.lists(
    st.floats(min_value=-1e6, max_value=1e6), min_size=2, max_size=40
).map(np.array)
positive = st.floats(min_value=0.01, max_value=1e6)


def test_a_total_and_a_ratio_return_their_values_worked_by_hand():
    # Totals 1 and 3 around a mean of 2, scaled by 2/1: the square root of 4.
    assert total_se(np.array([1.0, 3.0]), np.array([0, 1])) == pytest.approx(
        2.0, rel=1e-12
    )
    # Residuals of 1/6, -1/12 and -1/12 square to 1/24, and 3/2 of that is 1/16.
    ratio, se = ratio_se(
        np.array([2.0, 0.0, 1.0]), np.array([2.0, 1.0, 3.0]), np.array([0, 1, 2])
    )
    assert ratio == pytest.approx(0.5, rel=1e-12)
    assert se == pytest.approx(0.25, rel=1e-12)


def test_a_ratio_error_agrees_with_a_jackknife_that_drops_one_household_at_a_time():
    rng = np.random.default_rng(5)
    count = 300
    sizes = rng.integers(1, 5, size=count)
    clusters = np.repeat(np.arange(count), sizes)
    weights = np.repeat(rng.uniform(50, 500, size=count), sizes)
    poor = np.repeat(rng.random(count) < 0.2, sizes)
    numerator, denominator = weights * poor, weights
    _, se = ratio_se(numerator, denominator, clusters)
    numerators = np.bincount(clusters, weights=numerator)
    denominators = np.bincount(clusters, weights=denominator)
    dropped = (numerators.sum() - numerators) / (denominators.sum() - denominators)
    jackknife = np.sqrt((count - 1) / count * np.sum((dropped - dropped.mean()) ** 2))
    assert se == pytest.approx(jackknife, rel=0.02)


@settings(deadline=None)
@given(values)
def test_a_total_needs_no_negative_variance_and_scales_with_its_values(sample):
    clusters = np.arange(len(sample))
    se = total_se(sample, clusters)
    assert se >= 0
    assert abs(total_se(2 * sample, clusters) - 2 * se) <= 1e-6 * max(se, 1)


@settings(deadline=None)
@given(positive, st.integers(2, 40))
def test_identical_households_leave_a_total_no_sampling_error(value, count):
    assert total_se(np.full(count, value), np.arange(count)) < 1e-6 * value


def test_a_household_counts_once_however_its_people_split_its_value():
    values = np.array([3.0, 1.0, 5.0])
    split = np.array([1.0, 2.0, 1.0, 5.0])
    assert total_se(values, np.arange(3)) == total_se(split, np.array([0, 0, 1, 2]))


@settings(deadline=None)
@given(values, positive)
def test_a_ratio_keeps_its_value_and_error_when_both_sides_scale(numerator, scale):
    denominator = np.abs(numerator) + 1
    clusters = np.arange(len(numerator))
    ratio, se = ratio_se(numerator, denominator, clusters)
    scaled_ratio, scaled_se = ratio_se(scale * numerator, scale * denominator, clusters)
    assert abs(ratio - numerator.sum() / denominator.sum()) < 1e-9 * max(abs(ratio), 1)
    assert abs(scaled_ratio - ratio) < 1e-6 * max(abs(ratio), 1)
    assert abs(scaled_se - se) < 1e-6 * max(se, 1)


def test_units_of_any_size_take_their_households_source():
    # Household 10 is a survey record and 11 its tax-data clone, so both come from
    # source "a". Household 10 splits into SPM units of one and two people.
    person_households = np.array([10, 10, 10, 11, 11, 12])
    source = pd.Series(["a", "a", "b"], index=[10, 11, 12])
    spm_units = np.array([0, 1, 1, 2, 2, 3])
    assert unit_clusters(person_households, spm_units, source).tolist() == [
        "a",
        "a",
        "a",
        "b",
    ]
    people = np.arange(len(person_households))
    assert unit_clusters(person_households, people, source).tolist() == ["a"] * 5 + [
        "b"
    ]


def test_a_unit_that_spans_households_stops_the_run():
    source = pd.Series(["a", "b"], index=[10, 11])
    with pytest.raises(ValueError, match="spans households"):
        unit_clusters(np.array([10, 11]), np.array([0, 0]), source)


@settings(deadline=None)
@given(
    st.lists(st.lists(st.integers(1, 4), min_size=1, max_size=3), min_size=1, max_size=12),
    st.randoms(use_true_random=False),
)
def test_every_unit_takes_its_households_source_in_any_member_order(households, rng):
    # Each inner list holds one household's unit sizes; households 0 and 1 share a
    # source, as a survey record and its clone do, and so on in pairs.
    person_households, unit_of_person, unit_households = [], [], []
    for household, sizes in enumerate(households):
        for size in sizes:
            person_households += [household] * size
            unit_of_person += [len(unit_households)] * size
            unit_households.append(household)
    order = list(range(len(person_households)))
    rng.shuffle(order)
    source = pd.Series([f"s{household // 2}" for household in range(len(households))])
    clusters = unit_clusters(
        np.array(person_households)[order], np.array(unit_of_person)[order], source
    )
    assert clusters.tolist() == source.loc[unit_households].tolist()


def test_unit_clusters_agree_with_policyengine_cores_first_member_and_not_map_to():
    year = 2026
    adult = {"age": {year: 40}}
    situation = {
        "people": {"a": adult, "b": adult, "c": adult, "d": {"age": {year: 6}}},
        "tax_units": {
            "ta": {"members": ["a"]},
            "tb": {"members": ["b"]},
            "tc": {"members": ["c", "d"]},
        },
        "families": {"fa": {"members": ["a"]}, "fb": {"members": ["b", "c", "d"]}},
        "marital_units": {name: {"members": [name]} for name in "abcd"},
        "spm_units": {
            "sa": {"members": ["a"]},
            "sb": {"members": ["b"]},
            "sc": {"members": ["c", "d"]},
        },
        "households": {
            "alone": {"members": ["a"], "household_id": {year: 5}},
            "shared": {"members": ["b", "c", "d"], "household_id": {year: 7}},
        },
    }
    sim = Simulation(situation=situation)
    person_households = sim.calculate("household_id", year, map_to="person")
    source = pd.Series(["s5", "s7"], index=[5, 7])
    for entity in ("spm_unit", "tax_unit"):
        units = sim.populations[entity]
        first = units.value_from_first_person(person_households)
        clusters = unit_clusters(person_households, units.members_entity_id, source)
        assert clusters.tolist() == source.loc[first].tolist() == ["s5", "s7", "s7"]
    # map_to between two groups gives each member a share of household 7's id, so
    # the units that split it get 7/3 and 14/3, which name no household.
    shares = sim.calculate("household_id", year, map_to="spm_unit")
    assert shares.tolist() == pytest.approx([5, 7 / 3, 14 / 3])
