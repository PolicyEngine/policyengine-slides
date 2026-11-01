"""Each state's most populous county, for placing the family.

Reads the 2017-2021 American Community Survey, the last vintage that reports
Connecticut's eight counties, which PolicyEngine's County variable still uses.
Run with CENSUS_API_KEY set. Writes largest_counties.json next to this file.
"""

import json
import os
import re
import urllib.request
from pathlib import Path

from policyengine_us.variables.household.demographic.geographic.county.county_enum import (
    County,
)

URL = (
    "https://api.census.gov/data/2021/acs/acs5"
    "?get=NAME,B01001_001E&for=county:*&key={key}"
)
STATE_FIPS_TO_CODE = {
    "01": "AL", "02": "AK", "04": "AZ", "05": "AR", "06": "CA", "08": "CO",
    "09": "CT", "10": "DE", "11": "DC", "12": "FL", "13": "GA", "15": "HI",
    "16": "ID", "17": "IL", "18": "IN", "19": "IA", "20": "KS", "21": "KY",
    "22": "LA", "23": "ME", "24": "MD", "25": "MA", "26": "MI", "27": "MN",
    "28": "MS", "29": "MO", "30": "MT", "31": "NE", "32": "NV", "33": "NH",
    "34": "NJ", "35": "NM", "36": "NY", "37": "NC", "38": "ND", "39": "OH",
    "40": "OK", "41": "OR", "42": "PA", "44": "RI", "45": "SC", "46": "SD",
    "47": "TN", "48": "TX", "49": "UT", "50": "VT", "51": "VA", "53": "WA",
    "54": "WV", "55": "WI", "56": "WY",
}  # fmt: skip


def county_enum_name(county, state):
    name = county.upper().replace("'", "").replace(".", "")
    return re.sub(r"[^A-Z0-9]+", "_", name).strip("_") + "_" + state


def main():
    url = URL.format(key=os.environ["CENSUS_API_KEY"])
    with urllib.request.urlopen(url, timeout=120) as response:
        rows = json.load(response)
    largest = {}
    for name, population, state_fips, _ in rows[1:]:
        state = STATE_FIPS_TO_CODE.get(state_fips)
        if state is None:
            continue
        county = name.rsplit(", ", 1)[0]
        population = int(population)
        if state not in largest or population > largest[state]["population"]:
            largest[state] = {"county": county, "population": population}
    valid = {member.name for member in County}
    for state, entry in largest.items():
        entry["enum"] = county_enum_name(entry["county"], state)
        assert entry["enum"] in valid, entry
    assert len(largest) == 51
    path = Path(__file__).with_name("largest_counties.json")
    path.write_text(json.dumps(largest, indent=1, sort_keys=True) + "\n")


if __name__ == "__main__":
    main()
