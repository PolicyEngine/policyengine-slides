"""The fixed sample must keep each drawn household whole and count each draw once."""

import pandas as pd
import sample_families as sf
from hypothesis import given, settings
from hypothesis import strategies as st

YEAR = sf.YEAR
HOUSEHOLD = f"person_household_id__{YEAR}"
SPM_UNIT = f"person_spm_unit_id__{YEAR}"


def frame():
    """Five households, the third with two SPM units."""
    sizes = {10: 2, 20: 3, 30: 4, 40: 1, 50: 2}
    rows = []
    for household, size in sizes.items():
        for member in range(size):
            unit = household + (member % 2 if household == 30 else 0)
            ids = {
                "household": household,
                "tax_unit": unit,
                "spm_unit": unit,
                "family": household,
                "marital_unit": household + member,
            }
            row = {f"person_id__{YEAR}": household * 10 + member}
            for group, value in ids.items():
                row[f"person_{group}_id__{YEAR}"] = value
                row[f"{group}_id__{YEAR}"] = value
            rows.append(row)
    return pd.DataFrame(rows), sizes


@settings(deadline=None)
@given(st.lists(st.sampled_from([10, 20, 30, 40, 50]), min_size=1, max_size=30))
def test_each_draw_becomes_its_own_household(draws):
    people, sizes = frame()
    sample = sf.expand(people, draws)
    assert sample[HOUSEHOLD].nunique() == len(draws)
    assert len(sample) == sum(sizes[household] for household in draws)
    assert sample[f"person_id__{YEAR}"].is_unique
    for group in sf.GROUPS:
        assert sample[f"{group}_id__{YEAR}"].equals(
            sample[f"person_{group}_id__{YEAR}"]
        )


@settings(deadline=None)
@given(st.lists(st.sampled_from([30]), min_size=1, max_size=10))
def test_a_repeated_household_keeps_its_units_apart(draws):
    people, _ = frame()
    sample = sf.expand(people, draws)
    assert sample[SPM_UNIT].nunique() == 2 * len(draws)
    assert sample.groupby(SPM_UNIT)[HOUSEHOLD].nunique().max() == 1
