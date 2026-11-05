"""Kish effective samples by state, with each surveyed household counted once.

Some survey households appear twice in Microcosm, once as the survey record and once as
a tax-data clone with the same source id and members of the same ages. We add each
clone's weight to its source record's before taking Kish's measure. We read the
local-area file's state cuts one state at a time and only a few columns of the default
file, so we never load a whole national table.
"""

import gc
import json
import sys
from pathlib import Path

import h5py
import pandas as pd
from policyengine_us.system import DEFAULT_DATASET
from simulated_instrument import STATE_FIPS
from state_baseline import (
    CHILD_AGE_LIMIT,
    STATE_DATASET,
    download,
    kish,
    source_households,
    source_kish,
)

POSTAL = {fips: code for code, fips in STATE_FIPS.items()}
HOUSEHOLD_COLUMNS = (
    "household_id",
    "state_fips",
    "household_weight",
    "household_source_id",
    "household_support_channel",
    "household_support_clone_index",
)
PERSON_COLUMNS = ("person_household_id", "age")
CLONE_PAIR = (("asec", 0), ("puf_tax_detail", 1))


def check_pairs(households, people, sources):
    """Records that share a source must be a survey record and its clone, with members of the same ages."""
    shared = pd.Series(sources).duplicated(keep=False).to_numpy()
    if not shared.any():
        return
    pairs = households[shared].assign(source=sources[shared])
    kinds = pairs.groupby("source").apply(
        lambda pair: tuple(
            sorted(
                zip(
                    pair["household_support_channel"],
                    pair["household_support_clone_index"].astype(int),
                )
            )
        ),
        include_groups=False,
    )
    assert kinds.map(CLONE_PAIR.__eq__).all(), kinds.value_counts()
    members = people[people["person_household_id"].isin(pairs["household_id"])]
    ages = members.groupby("person_household_id")["age"].apply(
        lambda age: tuple(sorted(age))
    )
    profiles = pairs["household_id"].map(ages)
    assert profiles.groupby(pairs["source"].to_numpy()).nunique().eq(1).all()


def summarize(households, people):
    sources = source_households(households)
    check_pairs(households, people, sources)
    weights = households["household_weight"].to_numpy(dtype=float)
    homes = people.loc[people["age"] < CHILD_AGE_LIMIT, "person_household_id"]
    with_children = households["household_id"].isin(homes).to_numpy()
    return {
        "records": len(households),
        "source_households": len(set(sources)),
        "effective_records": kish(weights),
        "effective_records_with_children": kish(weights[with_children]),
        "effective_households": source_kish(weights, sources),
        "effective_households_with_children": source_kish(
            weights[with_children], sources[with_children]
        ),
    }


def local_area_rows(folder):
    rows = []
    for path in sorted(folder.glob("*-household.pkl.gz")):
        fips = int(path.name[:2])
        households = pd.read_pickle(path)[["household_spine", *HOUSEHOLD_COLUMNS]]
        people = pd.read_pickle(folder / f"{fips:02d}-person.pkl.gz")
        people = people[list(PERSON_COLUMNS)].copy()
        gc.collect()
        spines = households.groupby("household_source_id")["household_spine"].nunique()
        rows.append(
            {
                "state": POSTAL[fips],
                **summarize(households, people),
                "source_ids_on_both_spines": int(spines.gt(1).sum()),
            }
        )
    return rows


def default_rows():
    with h5py.File(download(DEFAULT_DATASET), "r") as store:
        households = pd.DataFrame(
            {
                name: store["household/table"].fields(name)[:]
                for name in HOUSEHOLD_COLUMNS
            }
        )
        people = pd.DataFrame(
            {name: store["person/table"].fields(name)[:] for name in PERSON_COLUMNS}
        )
    channel = households["household_support_channel"]
    households["household_support_channel"] = channel.str.decode("utf-8")
    return [
        {
            "state": POSTAL[int(fips)],
            **summarize(
                group, people[people["person_household_id"].isin(group["household_id"])]
            ),
        }
        for fips, group in households.groupby("state_fips")
    ]


def main(folder):
    payload = {
        "local_area": {
            "dataset": STATE_DATASET,
            "rows": local_area_rows(Path(folder)),
        },
        "default": {"dataset": DEFAULT_DATASET, "rows": default_rows()},
    }
    target = Path(__file__).parent.parent / "data" / "effective_samples.json"
    target.write_text(json.dumps(payload, indent=1) + "\n")


if __name__ == "__main__":
    main(sys.argv[1])
