"""Compare each state's baseline child poverty with Census and measure its sample.

Cuts the pinned Populace US file to one state at a time, so each run stays small.
A Massachusetts file cut this way reproduces the national run's reform cost and
poverty rates. Census publishes a 2023 to 2025 average, and this run reports 2025.
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

YEAR = 2025
DATA_YEAR = 2024
WORKERS = 3
CHILD_AGE_LIMIT = 18
GROUPS = ("tax_unit", "spm_unit", "family", "marital_unit")

tables = None
known = None


def kish(weights):
    """Kish's effective sample size, which falls as weights concentrate."""
    return float(weights.sum() ** 2 / (weights**2).sum())


def load():
    global tables, known
    known = set(CountryTaxBenefitSystem().variables)
    path, tag = DEFAULT_DATASET.removeprefix("hf://datasets/").rsplit("@", 1)
    owner, repo, filename = path.split("/")
    local = hf_hub_download(
        f"{owner}/{repo}", filename, repo_type="dataset", revision=tag
    )
    with pd.HDFStore(local, "r") as store:
        tables = {name: store.select(name) for name in ("household", "person", *GROUPS)}


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
    return pd.DataFrame({f"{k}__{DATA_YEAR}": v for k, v in columns.items()})


def state_file(fips):
    households = tables["household"]
    return flat_file(households[households["state_fips"] == fips])


def run(fips):
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


def main(commit):
    data = Path(__file__).parent.parent / "data"
    census = json.loads((data / "census_child_spm.json").read_text())
    published = {row["state"]: row for row in census["rows"]}
    load()
    fips = sorted(int(value) for value in tables["household"]["state_fips"].unique())
    with Pool(WORKERS, initializer=load) as pool:
        rows = pool.map(run, fips)
    for row in rows:
        row["census_percent"] = published[row["state"]]["rate"]
        row["census_margin"] = published[row["state"]]["moe"]
    payload = {
        "policyengine_us_version": version("policyengine-us"),
        "policyengine_us_commit": commit,
        "dataset": "Populace US",
        "year": YEAR,
        "census_source": census["source"],
        "rows": rows,
    }
    (data / "state_baseline.json").write_text(json.dumps(payload, indent=1) + "\n")


if __name__ == "__main__":
    main(sys.argv[1])
