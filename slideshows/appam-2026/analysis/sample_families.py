"""Draw a fixed sample of families from Populace US.

Takes every person in a weighted random sample of households with children and
writes them as one flat file. simulated_instrument.py then treats that file the
way a researcher would treat a survey extract.
"""

import sys

import numpy as np
from policyengine_us import Microsimulation

SAMPLE_SIZE = 3_000
SEED = 2026
YEAR = 2024


def main(path):
    sim = Microsimulation()
    weights = sim.calculate("household_weight", YEAR).values.astype(float)
    children = sim.calculate("is_child", YEAR, map_to="household").values
    households = sim.calculate("household_id", YEAR).values
    weights = np.where(children > 0, weights, 0)
    rng = np.random.default_rng(SEED)
    chosen = rng.choice(
        households, size=SAMPLE_SIZE, replace=False, p=weights / weights.sum()
    )
    frame = sim.to_input_dataframe()
    sample = frame.loc[frame[f"person_household_id__{YEAR}"].isin(chosen)]
    # Household roles such as is_household_head hold for all time, not one year.
    columns = [c for c in sample.columns if c.endswith((f"__{YEAR}", "__ETERNITY"))]
    sample = sample[columns].reset_index(drop=True)
    sample[f"person_id__{YEAR}"] = sample.index
    sample.to_pickle(path)
    print(sample.shape)


if __name__ == "__main__":
    main(sys.argv[1])
