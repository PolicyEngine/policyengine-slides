"""Count what slide 12 says about the model and the data.

Usage: python3 coverage_counts.py <policyengine_us package> <saved manifests> <microcosm clone>

Counts files in the installed PolicyEngine US package, reads the build and calibration
manifests Populace US publishes on Hugging Face for the deck's two files, and reads the donor
table in the microcosm build code at the local-area file's commit. Writes data/coverage.json.
"""

import json
import re
import subprocess
import sys
from collections import Counter
from pathlib import Path

HERE = Path(__file__).parent
JURISDICTIONS = (
    "ak al ar az ca co ct dc de fl ga hi ia id il in ks ky la ma md me mi mn mo ms mt nc nd ne nh "
    "nj nm nv ny oh ok or pa ri sc sd tn tx ut va vt wa wi wv wy"
).split()
LOCAL_FILE = "populace-us-2024-buildo-acs-local-766b7c7-20261017T030317Z"
DEFAULT_FILE = "populace-us-2024-spm-20260915"
DONOR_COMMIT = "766b7c792"
DONORS = "packages/microcosm-build/src/microcosm/build/us_runtime/__init__.py"


def model_counts(package):
    package = Path(package)
    with_income_tax = [
        code
        for code in JURISDICTIONS
        if (package / "parameters/gov/states" / code / "tax/income").is_dir()
    ]
    tanf = (package / "variables/gov/hhs/tanf/cash/tanf_if_takes_up.py").read_text()
    tanf_list = re.search(r"STATE_TANF_VARIABLES = \[(.*?)\]", tanf, flags=re.S).group(1)
    programs = (package / "parameters/gov/hhs/ccdf/child_care_subsidy_programs.yaml").read_text()
    # The list under the file's last date.
    latest_values = re.split(r"^\s+\d{4}-\d{2}-\d{2}:\s*$", programs.split("metadata:")[0], flags=re.M)[-1]
    return {
        "variable_files": sum(1 for path in (package / "variables").rglob("*.py") if path.name != "__init__.py"),
        "parameter_files": sum(1 for _ in (package / "parameters").rglob("*.yaml")),
        "jurisdictions_with_income_tax": len(with_income_tax),
        "jurisdictions_without_income_tax": [code for code in JURISDICTIONS if code not in with_income_tax],
        "state_tanf_variables": len(re.findall(r'"[a-z_0-9]+"', tanf_list)),
        "child_care_programs_latest": len(re.findall(r"^\s+- ", latest_values, flags=re.M)),
    }


def local_file(manifests):
    build = json.loads((Path(manifests) / f"{LOCAL_FILE}-build_manifest.json").read_text())
    calibration = build["calibration"]
    spines = build["gates"]["spine_composition"]["detail"]
    rows = calibration["target_loss"]["distribution"]["by_family_level_basis"]
    return {
        "revision": LOCAL_FILE,
        "households": build["dataset"]["households"],
        "households_by_spine": {name: spines[name]["households"] for name in ("acs_2024_1yr", "asec_puf")},
        "targets": calibration["n_targets"],
        "targets_by_family_and_level": [
            {key: row[key] for key in ("family", "geography_level", "basis", "n_targets")} for row in rows
        ],
        "share_within_10_percent": calibration["fraction_within_10pct"],
        "effective_sample_over_records": calibration["effective_sample_size"],
    }


def default_file(manifests):
    diagnostics = json.loads((Path(manifests) / f"{DEFAULT_FILE}-calibration_diagnostics.json").read_text())
    parent = json.loads((Path(manifests) / f"{DEFAULT_FILE}-parent_build_manifest.json").read_text())
    agencies = Counter(target["source"].split(" | ")[0] for target in diagnostics["targets"])
    return {
        "revision": DEFAULT_FILE,
        "parent_build": parent["build_id"],
        "households": diagnostics["n_records"],
        "targets": len(diagnostics["targets"]),
        "targets_by_agency": dict(agencies.most_common()),
        "share_within_10_percent": diagnostics["fraction_within_10pct"],
        "effective_sample_over_records": diagnostics["effective_sample_size"],
        "snap_take_up_gate": parent["gates"]["snap_take_up_signal"]["details"],
    }


def donors(clone):
    source = subprocess.run(
        ["git", "-C", clone, "show", f"{DONOR_COMMIT}:{DONORS}"], capture_output=True, text=True, check=True
    ).stdout
    table = source[source.index("US_DONORS: Mapping[str, DonorSpec] = {") :]
    table = table[: table.index("\n}\n")]
    return {
        "commit": DONOR_COMMIT,
        "imputation_stages": len(re.findall(r"DonorSpec\(", table)),
        "surveys": sorted(set(re.findall(r'survey="([^"]+)"', table))),
    }


def main(package, manifests, clone):
    result = {
        "policyengine_us": model_counts(package),
        "local_area_file": local_file(manifests),
        "default_file": default_file(manifests),
        "donors": donors(clone),
    }
    (HERE.parent / "data" / "coverage.json").write_text(json.dumps(result, indent=2) + "\n")
    print(json.dumps(result, indent=1))


if __name__ == "__main__":
    main(*sys.argv[1:4])
