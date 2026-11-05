"""List the stored columns the fixed sample leaves out, and test whether they matter.

sample_families.py keeps input variables and ids, so the model computes everything
else. This script sorts the rest of the default file's columns, rebuilds the sample
with the computed variables' stored values, and reruns the states it names. Slide 10's
two shares must not move.
"""

import json
import sys
from importlib.metadata import version
from pathlib import Path

import pandas as pd
import sample_families as sf
import simulated_instrument as si
import state_baseline as sb
from policyengine_us import CountryTaxBenefitSystem

YEAR = sf.YEAR
STATES = ("TN", "OR", "HI")
SHARES = ("snap_eligible_share", "child_medicaid_chip_share")


def is_id(name):
    """sample_families.py keeps every *_id column, so only those count as ids here."""
    return name.endswith("_id")


def rerun(sample):
    si.families = sample.drop(
        columns=[f"{name}__{YEAR}" for name in si.FINER_GEOGRAPHY], errors="ignore"
    )
    rows = {state: si.simulate(state) for state in STATES}
    return {state: {key: row[key] for key in SHARES} for state, row in rows.items()}


def main(commit, sample_path):
    variables = CountryTaxBenefitSystem().variables
    inputs = {
        f"{name}__{YEAR}"
        for name, variable in variables.items()
        if variable.is_input_variable()
    }
    sample, draws = sf.build(inputs)
    # Strings reload under whichever storage this environment prefers.
    pd.testing.assert_frame_equal(
        sample,
        pd.read_pickle(sample_path),
        check_dtype=False,
        check_column_type=False,
    )
    stored = {name for table in sb.tables.values() for name in table.columns}
    social_security = {f"social_security_{kind}" for kind in sf.SOCIAL_SECURITY}
    computed = sorted(
        name
        for name in stored - social_security
        if name in variables and not variables[name].is_input_variable()
        if not is_id(name)
    )
    undefined = sorted(
        name for name in stored if name not in variables and not is_id(name)
    )
    restored, _ = sf.build(inputs | {f"{name}__{YEAR}" for name in computed})
    payload = {
        "policyengine_us_version": version("policyengine-us"),
        "policyengine_us_commit": commit,
        "draws": len(draws),
        "distinct_households": len(set(draws)),
        "has_parent_links": any(
            name in sb.tables["person"].columns
            for name in ("parent_1_id", "parent_2_id")
        ),
        "renamed_to_reported": sorted(social_security & stored),
        "computed_by_the_model": computed,
        "undefined_in_this_version": undefined,
        "inputs_only": rerun(sample),
        "with_stored_values": rerun(restored),
    }
    target = Path(__file__).parent.parent / "data" / "sample_columns.json"
    target.write_text(json.dumps(payload, indent=1) + "\n")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
