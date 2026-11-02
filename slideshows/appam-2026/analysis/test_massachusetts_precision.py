"""Standard errors must respect the sample's households."""

import massachusetts_precision as mp
import numpy as np
from hypothesis import given, settings
from hypothesis import strategies as st

values = st.lists(
    st.floats(min_value=-1e6, max_value=1e6), min_size=2, max_size=40
).map(np.array)
positive = st.floats(min_value=0.01, max_value=1e6)


@settings(deadline=None)
@given(values)
def test_a_total_needs_no_negative_variance_and_scales_with_its_values(sample):
    clusters = np.arange(len(sample))
    se = mp.total_se(sample, clusters)
    assert se >= 0
    assert abs(mp.total_se(2 * sample, clusters) - 2 * se) <= 1e-6 * max(se, 1)


@settings(deadline=None)
@given(positive, st.integers(2, 40))
def test_identical_households_leave_a_total_no_sampling_error(value, count):
    assert mp.total_se(np.full(count, value), np.arange(count)) < 1e-6 * value


def test_a_household_counts_once_however_its_people_split_its_value():
    values = np.array([3.0, 1.0, 5.0])
    split = np.array([1.0, 2.0, 1.0, 5.0])
    assert mp.total_se(values, np.arange(3)) == mp.total_se(
        split, np.array([0, 0, 1, 2])
    )


@settings(deadline=None)
@given(values, positive)
def test_a_ratio_keeps_its_value_and_error_when_both_sides_scale(numerator, scale):
    denominator = np.abs(numerator) + 1
    clusters = np.arange(len(numerator))
    ratio, se = mp.ratio_se(numerator, denominator, clusters)
    scaled_ratio, scaled_se = mp.ratio_se(
        scale * numerator, scale * denominator, clusters
    )
    assert abs(ratio - numerator.sum() / denominator.sum()) < 1e-9 * max(abs(ratio), 1)
    assert abs(scaled_ratio - ratio) < 1e-6 * max(abs(ratio), 1)
    assert abs(scaled_se - se) < 1e-6 * max(se, 1)
