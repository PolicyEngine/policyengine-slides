"""Compare each state's baseline child poverty with Census and measure its sample.

Runs the local-area Populace US file, which policyengine.py uses for state regions,
one state at a time so each run stays small. A Massachusetts file cut from the
default file this way reproduces the national run's reform cost and poverty rates.
Census publishes a 2023 to 2025 average, and this run reports 2025.
"""

import json
import sys
from importlib.metadata import version
from multiprocessing import Pool
from pathlib import Path

import numpy as np
import pandas as pd
from huggingface_hub import hf_hub_download
from policyengine_core.data import Dataset
from policyengine_us import CountryTaxBenefitSystem, Microsimulation
from policyengine_us.system import DEFAULT_DATASET

STATE_DATASET = (
    "hf://datasets/policyengine/populace-us/populace_us_2024_acs_local.h5"
    "@populace-us-2024-buildo-acs-local-766b7c7-20261017T030317Z"
)
YEAR = 2025
DATA_YEAR = 2024
WORKERS = 3
CHILD_AGE_LIMIT = 18
GROUPS = ("tax_unit", "spm_unit", "family", "marital_unit")
TABLES = ("household", "person", *GROUPS)

tables = None
known = None


def kish(weights):
    """Kish's effective sample size, which falls as weights concentrate."""
    return float(weights.sum() ** 2 / (weights**2).sum())


def download(dataset):
    path, tag = dataset.removeprefix("hf://datasets/").rsplit("@", 1)
    owner, repo, filename = path.split("/")
    return hf_hub_download(
        f"{owner}/{repo}", filename, repo_type="dataset", revision=tag
    )


def load():
    """The default file's tables, for draws that span the country."""
    global tables, known
    known = set(CountryTaxBenefitSystem().variables)
    with pd.HDFStore(download(DEFAULT_DATASET), "r") as store:
        tables = {name: store.select(name) for name in TABLES}


def write_by_state(table, fips, name, folder):
    for state, rows in table.groupby(fips.values, sort=False):
        rows.to_pickle(
            folder / f"{int(state):02d}-{name}.pkl.gz",
            compression={"method": "gzip", "compresslevel": 1},
        )


def split_by_state(folder):
    """Split the local-area file by state, holding one table in memory at a time."""
    folder.mkdir(parents=True, exist_ok=True)
    with pd.HDFStore(download(STATE_DATASET), "r") as store:
        households = store.select("household")
        states = households.set_index("household_id")["state_fips"]
        write_by_state(households, households["state_fips"], "household", folder)
        del households
        people = store.select("person")
        fips = people["person_household_id"].map(states)
        write_by_state(people, fips, "person", folder)
        members = {
            group: pd.Series(fips.values, index=people[f"person_{group}_id"].values)
            for group in GROUPS
        }
        del people
        for group in GROUPS:
            state_of = members.pop(group).groupby(level=0).first()
            table = store.select(group)
            write_by_state(table, table[f"{group}_id"].map(state_of), group, folder)
            del table


def load_state(fips, folder):
    global tables, known
    known = known or set(CountryTaxBenefitSystem().variables)
    tables = {
        name: pd.read_pickle(folder / f"{fips:02d}-{name}.pkl.gz") for name in TABLES
    }


def flat_file(households):
    """These households' people, with group columns on each member's row."""
    people = tables["person"]
    people = people[
        people["person_household_id"].isin(households["household_id"])
    ].reset_index(drop=True)
    columns = {
        name: people[name].values
        for name in people.columns
        if name in known or name == "person_id" or name.startswith("person_")
    }

    def add_group(table, group):
        ids = f"{group}_id"
        membership = people[f"person_{group}_id"].values
        rows = table.set_index(ids).index.get_indexer(membership)
        for name in table.columns:
            if name in known:
                columns[name] = table[name].values[rows]
        columns[ids] = membership

    add_group(households, "household")
    for group in GROUPS:
        add_group(tables[group], group)
    frame = pd.DataFrame({f"{k}__{DATA_YEAR}": v for k, v in columns.items()})
    # The local-area file leaves parent links blank; -1 means no parent.
    for name in frame.columns[frame.columns.str.startswith("parent_")]:
        if name.endswith(f"_id__{DATA_YEAR}"):
            frame[name] = frame[name].fillna(-1).astype(np.int64)
    return frame


def state_file(fips):
    households = tables["household"]
    return flat_file(households[households["state_fips"] == fips])


def run(job):
    fips, folder = job
    load_state(fips, folder)
    sim = Microsimulation(dataset=Dataset.from_dataframe(state_file(fips), DATA_YEAR))
    age = sim.calculate("age", YEAR).values
    weight = sim.calculate("person_weight", YEAR).values.astype(float)
    poor = sim.calculate("spm_unit_is_in_spm_poverty", YEAR, map_to="person").values
    households = sim.calculate("household_weight", YEAR).values.astype(float)
    with_children = sim.calculate("is_child", YEAR, map_to="household").values > 0
    children = age < CHILD_AGE_LIMIT
    return {
        "state": str(sim.calculate("state_code_str", YEAR).values[0]),
        "records": len(households),
        "effective_households": kish(households),
        "effective_households_with_children": kish(households[with_children]),
        "child_spm_percent": float(
            100 * np.average(poor[children], weights=weight[children])
        ),
    }


def main(commit, folder):
    data = Path(__file__).parent.parent / "data"
    census = json.loads((data / "census_child_spm.json").read_text())
    published = {row["state"]: row for row in census["rows"]}
    folder = Path(folder)
    if not any(folder.glob("*-household.pkl.gz")):
        split_by_state(folder)
    fips = sorted(int(path.name[:2]) for path in folder.glob("*-household.pkl.gz"))
    # Smallest first, and a fresh worker every few states, so memory stays flat.
    fips.sort(key=lambda state: (folder / f"{state:02d}-person.pkl.gz").stat().st_size)
    with Pool(WORKERS, maxtasksperchild=4) as pool:
        rows = pool.map(run, [(state, folder) for state in fips], chunksize=1)
    for row in rows:
        row["census_percent"] = published[row["state"]]["rate"]
        row["census_margin"] = published[row["state"]]["moe"]
    payload = {
        "policyengine_us_version": version("policyengine-us"),
        "policyengine_us_commit": commit,
        "dataset": STATE_DATASET,
        "year": YEAR,
        "census_source": census["source"],
        "rows": rows,
    }
    (data / "state_baseline.json").write_text(json.dumps(payload, indent=1) + "\n")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
