"""We count an ASEC record and its clone as one household, and merge nothing else."""

import numpy as np
import pandas as pd
import pytest
from effective_samples import summarize
from state_baseline import kish

COLUMNS = (
    "household_id",
    "household_source_id",
    "household_support_channel",
    "household_support_clone_index",
    "household_weight",
)


def households(rows):
    """Household records from (id, source, channel, clone index, weight) tuples."""
    return pd.DataFrame(rows, columns=COLUMNS)


def people(ages):
    """People from a map of household id to its members' ages."""
    return pd.DataFrame(
        [(household, age) for household, members in ages.items() for age in members],
        columns=["person_household_id", "age"],
    )


def test_an_asec_record_and_its_clone_count_once():
    records = households(
        [
            (1, 7, "asec", 0, 2.0),
            (2, 7, "puf_tax_detail", 1, 1.0),
            (3, 8, "asec", 0, 3.0),
        ]
    )
    row = summarize(records, people({1: [30, 4], 2: [4, 30], 3: [70]}))
    assert row["records"] == 3
    assert row["source_households"] == 2
    assert row["effective_records"] == pytest.approx(kish(np.array([2.0, 1.0, 3.0])))
    assert row["effective_records_with_children"] == pytest.approx(1.8)
    assert row["effective_households"] == pytest.approx(2.0)
    assert row["effective_households_with_children"] == pytest.approx(1.0)


def test_matching_ids_on_different_spines_stay_apart():
    records = households(
        [(1, 7, "acs_2024_1yr", 0, 1.0), (2, 7, "asec", 0, 1.0)]
    ).assign(household_spine=["acs_2024_1yr", "asec_puf"])
    row = summarize(records, people({1: [30], 2: [40]}))
    assert row["source_households"] == 2
    assert row["effective_households"] == pytest.approx(2.0)


@pytest.mark.parametrize(
    "rows, ages",
    [
        pytest.param(
            [(1, 7, "puf_tax_detail", 1, 1.0), (2, 7, "puf_tax_detail", 1, 1.0)],
            {1: [30], 2: [30]},
            id="two clones",
        ),
        pytest.param(
            [(1, 7, "asec", 0, 1.0), (2, 7, "puf_tax_detail", 1, 1.0)],
            {1: [30, 4], 2: [30, 5]},
            id="different ages",
        ),
        pytest.param(
            [
                (1, 7, "asec", 0, 1.0),
                (2, 7, "puf_tax_detail", 1, 1.0),
                (3, 7, "puf_tax_detail", 1, 1.0),
            ],
            {1: [30], 2: [30], 3: [30]},
            id="three records",
        ),
    ],
)
def test_other_records_sharing_a_source_stop_the_run(rows, ages):
    with pytest.raises(AssertionError):
        summarize(households(rows), people(ages))
