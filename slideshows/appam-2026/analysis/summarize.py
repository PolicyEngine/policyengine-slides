"""Cut data/family.json down to what the deck's charts draw.

Writes data/charts.json. The earnings, the sweep range and the cliff states
sit here so one edit changes every chart and the numbers beside them.
"""

import json
from pathlib import Path
from statistics import median, pstdev

HEADLINE_EARNINGS = 40_000
SPREAD_EARNINGS = (30_000, 40_000, 50_000, 60_000)
SWEEP_MIN = 15_000
SWEEP_MAX = 100_000
CLIFF_STATES = ("IA", "MN", "MD")
EMTR_EARNINGS = (30_000, 60_000)
SPREAD_LINES = ("child_care_subsidy", "snap", "state_taxes", "federal_taxes")

STATE_NAMES = {
    "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas",
    "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware",
    "DC": "District of Columbia", "FL": "Florida", "GA": "Georgia", "HI": "Hawaii",
    "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas",
    "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland",
    "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi",
    "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada",
    "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York",
    "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio", "OK": "Oklahoma",
    "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina",
    "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah",
    "VT": "Vermont", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia",
    "WI": "Wisconsin", "WY": "Wyoming",
}  # fmt: skip


def rounded(value):
    return int(round(value))


def main():
    root = Path(__file__).parent.parent / "data"
    family = json.loads((root / "family.json").read_text())
    earnings, states = family["earnings"], family["states"]
    at = {value: earnings.index(value) for value in earnings}
    i = at[HEADLINE_EARNINGS]

    cross_section = []
    for code, lines in states.items():
        row = {key: rounded(lines[key][i]) for key in lines}
        row["code"] = code
        row["name"] = STATE_NAMES[code]
        row["county"] = family["counties"][code]
        row["base"] = rounded(
            lines["earnings"][i]
            + lines["child_care_bill"][i]
            + lines["federal_taxes"][i]
            + lines["state_taxes"][i]
        )
        cross_section.append(row)
    cross_section.sort(key=lambda row: row["net_resources"])

    spreads = []
    for value in SPREAD_EARNINGS:
        ranked = sorted(
            (lines["net_resources"][at[value]], code) for code, lines in states.items()
        )
        spreads.append(
            {
                "earnings": value,
                "low": rounded(ranked[0][0]),
                "low_state": ranked[0][1],
                "high": rounded(ranked[-1][0]),
                "high_state": ranked[-1][1],
                "spread": rounded(ranked[-1][0] - ranked[0][0]),
            }
        )

    lines_by_program = []
    for key in SPREAD_LINES:
        ranked = sorted((row[key], row["code"]) for row in cross_section)
        lines_by_program.append(
            {
                "key": key,
                "values": [{"code": code, "value": value} for value, code in ranked],
                "standard_deviation": rounded(pstdev(value for value, _ in ranked)),
            }
        )

    start, stop = at[SWEEP_MIN], at[SWEEP_MAX]
    sweep_earnings = earnings[start : stop + 1]
    sweep = {
        code: [rounded(x) for x in lines["net_resources"][start : stop + 1]]
        for code, lines in states.items()
    }

    cliffs = []
    for code in CLIFF_STATES:
        net = states[code]["net_resources"]
        drops = [
            (net[j + 1] - net[j], earnings[j], earnings[j + 1])
            for j in range(start, stop)
        ]
        drop, before, after = min(drops)
        changes = {
            key: rounded(line[at[after]] - line[at[before]])
            for key, line in states[code].items()
        }
        cliffs.append(
            {
                "code": code,
                "name": STATE_NAMES[code],
                "before": before,
                "after": after,
                "drop": rounded(-drop),
                "net_before": rounded(net[at[before]]),
                "net_after": rounded(net[at[after]]),
                "changes": {k: v for k, v in changes.items() if abs(v) >= 100},
            }
        )

    emtr = []
    for value in EMTR_EARNINGS:
        j = at[value]
        step = earnings[j + 1] - earnings[j]
        rates = [
            1 - (lines["net_resources"][j + 1] - lines["net_resources"][j]) / step
            for lines in states.values()
        ]
        emtr.append({"earnings": value, "median": round(median(rates), 3)})

    payload = {
        "policyengine_us_version": family["policyengine_us_version"],
        "policyengine_us_commit": family["policyengine_us_commit"],
        "year": family["year"],
        "family": family["family"],
        "headline_earnings": HEADLINE_EARNINGS,
        "cross_section": cross_section,
        "spreads": spreads,
        "lines_by_program": lines_by_program,
        "sweep_earnings": sweep_earnings,
        "sweep": sweep,
        "cliffs": cliffs,
        "emtr": emtr,
    }
    (root / "charts.json").write_text(json.dumps(payload, separators=(",", ":")) + "\n")


if __name__ == "__main__":
    main()
