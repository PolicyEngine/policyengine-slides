"""State runs must read parent links, weights and group quarters as the model does."""

import numpy as np
import pandas as pd
import state_baseline as sb
from hypothesis import given, settings
from hypothesis import strategies as st

YEAR = sb.DATA_YEAR
PARENT_LINKS = (f"parent_1_id__{YEAR}", f"parent_2_id__{YEAR}")
parent_ids = st.one_of(st.none(), st.integers(min_value=1, max_value=10_000))


def tables_with(links):
    """One household whose people hold these parent links."""
    people = pd.DataFrame(
        {
            "person_id": range(1, len(links) + 1),
            "person_household_id": 1,
            "parent_1_id": pd.array(links, dtype="Float64").to_numpy(
                dtype=float, na_value=np.nan
            ),
            "parent_2_id": np.nan,
        }
    )
    for group in sb.GROUPS:
        people[f"person_{group}_id"] = 1
    tables = {
        group: pd.DataFrame({f"{group}_id": [1], f"{group}_weight": [1.0]})
        for group in ("household", *sb.GROUPS)
    }
    tables["household"]["state_fips"] = 25
    tables["person"] = people
    return tables


@settings(deadline=None)
@given(st.lists(parent_ids, min_size=1, max_size=8))
def test_blank_links_become_unknown_and_others_stay(links):
    sb.tables = tables_with(links)
    sb.known = {"parent_1_id", "parent_2_id", "state_fips"}
    frame = sb.state_file(25)
    expected = [0 if link is None else link for link in links]
    assert frame[PARENT_LINKS[0]].tolist() == expected
    assert (frame[PARENT_LINKS[1]] == 0).all()
    for name in PARENT_LINKS:
        assert frame[name].dtype == np.int64
        assert (frame[name] >= 0).all()


@settings(deadline=None)
@given(st.lists(st.floats(min_value=0.01, max_value=1e5), min_size=1, max_size=50))
def test_the_effective_sample_stays_between_one_and_the_record_count(weights):
    effective = sb.kish(np.array(weights))
    assert 1 - 1e-9 <= effective <= len(weights) + 1e-9


@settings(deadline=None)
@given(st.floats(min_value=0.01, max_value=1e5), st.integers(1, 50))
def test_equal_weights_keep_every_record(weight, count):
    assert abs(sb.kish(np.full(count, weight)) - count) < 1e-9


def test_group_quarters_take_the_record_type_and_the_relationship():
    households = pd.DataFrame({"household_id": [1, 2, 3], "TYPEHUGQ": [1, 2, 3]})
    people = pd.DataFrame(
        {
            "person_household_id": [1, 1, 2, 2, 3, 3],
            "RELSHIPP": [37, 38, 37, 38, 37, 38],
        }
    )
    assert sb.in_group_quarters(people, households).tolist() == [
        False,
        False,
        True,
        False,
        False,
        True,
    ]


@settings(deadline=None)
@given(
    st.lists(
        st.tuples(st.sampled_from(["acs_2024_1yr", "asec_puf"]), st.integers(0, 5)),
        min_size=1,
        max_size=20,
    )
)
def test_households_share_a_cluster_only_with_their_source_record(rows):
    households = pd.DataFrame(
        {
            "household_id": range(len(rows)),
            "household_spine": [spine for spine, _ in rows],
            "household_source_id": [source for _, source in rows],
        }
    )
    keys = sb.source_households(households)
    for a, first in enumerate(rows):
        for b, second in enumerate(rows):
            assert (keys[a] == keys[b]) == (first == second)


@settings(deadline=None)
@given(st.lists(st.integers(0, 5), min_size=1, max_size=20))
def test_without_a_spine_households_share_a_cluster_only_with_their_source(sources):
    households = pd.DataFrame(
        {"household_id": range(len(sources)), "household_source_id": sources}
    )
    keys = sb.source_households(households)
    for a, first in enumerate(sources):
        for b, second in enumerate(sources):
            assert (keys[a] == keys[b]) == (first == second)


weighted_sources = st.lists(
    st.tuples(st.floats(min_value=0.01, max_value=1e5), st.integers(0, 8)),
    min_size=1,
    max_size=40,
)


def split(rows):
    weights = np.array([weight for weight, _ in rows])
    sources = np.array([str(source) for _, source in rows])
    return weights, sources


@settings(deadline=None)
@given(weighted_sources)
def test_counting_each_source_once_never_raises_the_effective_sample(rows):
    weights, sources = split(rows)
    merged = sb.source_kish(weights, sources)
    assert 1 - 1e-9 <= merged <= len(set(sources)) + 1e-9
    assert merged <= sb.kish(weights) * (1 + 1e-9)


@settings(deadline=None)
@given(st.lists(st.floats(min_value=0.01, max_value=1e5), min_size=1, max_size=40))
def test_distinct_sources_keep_the_record_sample(weights):
    weights = np.array(weights)
    sources = np.array([str(i) for i in range(len(weights))])
    expected = sb.kish(weights)
    assert abs(sb.source_kish(weights, sources) - expected) <= 1e-9 * expected


@settings(deadline=None)
@given(
    weighted_sources,
    st.randoms(use_true_random=False),
    st.floats(min_value=0.1, max_value=10),
)
def test_the_source_sample_ignores_record_order_and_weight_scale(rows, random, scale):
    weights, sources = split(rows)
    order = list(range(len(rows)))
    random.shuffle(order)
    expected = sb.source_kish(weights, sources)
    shuffled = sb.source_kish(weights[order], sources[order])
    assert abs(shuffled - expected) <= 1e-9 * expected
    assert abs(sb.source_kish(scale * weights, sources) - expected) <= 1e-9 * expected
