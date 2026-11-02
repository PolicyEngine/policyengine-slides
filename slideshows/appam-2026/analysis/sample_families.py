"""Draw a fixed sample of families from Populace US.

Draws households with children in proportion to their weights, with replacement,
and writes every person in each draw to one flat file. A household drawn twice
enters twice with fresh ids, so each entry in the file counts once.
simulated_instrument.py then treats that file the way a researcher would treat
a survey extract.
"""

import sys

import numpy as np
import pandas as pd

SAMPLE_SIZE = 3_000
SEED = 2026
YEAR = 2024
CHILD_AGE_LIMIT = 18
SOCIAL_SECURITY = ("retirement", "disability", "survivors", "dependents")
GROUPS = ("household", "tax_unit", "spm_unit", "family", "marital_unit")


def expand(frame, draws):
    """One copy of each drawn household's people, with ids unique to each draw."""
    by_household = dict(list(frame.groupby(f"person_household_id__{YEAR}")))
    sample = pd.concat(
        [by_household[household].assign(draw=i) for i, household in enumerate(draws)],
        ignore_index=True,
    )
    for group in GROUPS:
        ids = sample.groupby(["draw", f"person_{group}_id__{YEAR}"]).ngroup()
        sample[f"person_{group}_id__{YEAR}"] = ids
        sample[f"{group}_id__{YEAR}"] = ids
    sample[f"person_id__{YEAR}"] = sample.index
    return sample.drop(columns="draw")


def inputs_only(frame, inputs):
    """Keep what a survey extract would hold, in the names the model reads."""
    # The file stores these benefits under names the model now computes, and the
    # model reads stored amounts through the reported variables.
    frame = frame.rename(
        columns={
            f"social_security_{kind}__{YEAR}": f"social_security_{kind}_reported__{YEAR}"
            for kind in SOCIAL_SECURITY
        }
    )
    columns = [c for c in frame.columns if c in inputs or c.endswith(f"_id__{YEAR}")]
    return frame[columns].copy()


def main(path):
    import state_baseline as sb
    from policyengine_us import CountryTaxBenefitSystem

    sb.load()
    people = sb.tables["person"]
    households = sb.tables["household"]
    has_child = people.loc[people["age"] < CHILD_AGE_LIMIT, "person_household_id"]
    households = households[households["household_id"].isin(has_child)]
    weights = households["household_weight"].values.astype(float)
    rng = np.random.default_rng(SEED)
    draws = rng.choice(
        households["household_id"].values,
        size=SAMPLE_SIZE,
        replace=True,
        p=weights / weights.sum(),
    )
    # A researcher's file holds inputs, so the model recomputes everything else
    # under each state's rules.
    variables = CountryTaxBenefitSystem().variables
    inputs = {
        f"{name}__{YEAR}"
        for name, variable in variables.items()
        if variable.is_input_variable()
    }
    sample = expand(inputs_only(sb.flat_file(households), inputs), draws)
    sample.to_pickle(path)
    print(sample.shape, len(set(draws)))


if __name__ == "__main__":
    main(sys.argv[1])
