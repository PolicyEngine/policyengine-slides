"""Standard errors must respect the sample's households."""

import numpy as np
import pytest
from hypothesis import given, settings
from hypothesis import strategies as st
from standard_errors import ratio_se, total_se

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
