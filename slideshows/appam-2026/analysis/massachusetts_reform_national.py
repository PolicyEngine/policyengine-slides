"""Double the Massachusetts credit on the national Microcosm file, at policyengine-us 2.2.1.

Build's report 4940 names this file in its record and prints a state cost, a fall in child poverty
and a share of people gaining, so this run scores all three. Install policyengine-us 2.2.1 first.
Usage: massachusetts_reform_national.py <out.json>
"""
import json
import sys
from importlib.metadata import version
from pathlib import Path

import numpy as np
import pandas as pd

import massachusetts_reform as mr
import state_baseline as sb
from policyengine_core.data import Dataset
from policyengine_core.reforms import Reform
from policyengine_us import CountryTaxBenefitSystem, Microsimulation

NATIONAL = "hf://datasets/policyengine/populace-us/populace_us_2024.h5@populace-us-2024-spm-20260915"

sb.known = set(CountryTaxBenefitSystem().variables)
with pd.HDFStore(sb.download(NATIONAL), "r") as store:
    sb.tables = {name: store.select(name) for name in sb.TABLES}
people = sb.state_file(mr.MASSACHUSETTS_FIPS)
for name in list(sb.tables):
    del sb.tables[name]


def sim(reform=None):
    return Microsimulation(dataset=Dataset.from_dataframe(people, sb.DATA_YEAR), reform=reform)


reform = Reform.from_dict({mr.PARAMETER: {f"{mr.YEAR}-01-01.2100-12-31": mr.REFORMED}}, country_id="us")
base_sim, new_sim = sim(), sim(reform)
base, new = mr.results(base_sim), mr.results(new_sim)
gains = new["household_net_income"] - base["household_net_income"]
weights = base["household_weight"]
heads = base_sim.calculate("household_count_people", mr.YEAR).values
relative = gains / np.maximum(base["household_net_income"], 1)
out = {
    "policyengine_us_version": version("policyengine-us"),
    "dataset": NATIONAL,
    "household_records": len(weights),
    "state_cost": base["state_income_tax"] - new["state_income_tax"],
    "household_gain": float(np.sum(gains * weights)),
    "households_gaining_share": float(np.sum(weights[gains > 1]) / np.sum(weights)),
    "people_gaining_share_over_1_dollar": float(np.sum((weights * heads)[gains > 1]) / np.sum(weights * heads)),
    "people_gaining_share_over_0_1_percent": float(np.sum((weights * heads)[relative > 0.001]) / np.sum(weights * heads)),
    "baseline_child_poverty": base["child_poverty"],
    "reformed_child_poverty": new["child_poverty"],
    "child_poverty_relative_change": (new["child_poverty"] - base["child_poverty"]) / base["child_poverty"],
    "baseline_poverty_gap": base["poverty_gap"],
    "reformed_poverty_gap": new["poverty_gap"],
}
Path(sys.argv[1]).write_text(json.dumps(out, indent=1) + "\n")
print(json.dumps(out, indent=1))
