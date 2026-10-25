"""Copy the Autumn Budget 2026 dashboard's published figures into this deck.

Reads public/data at one commit of PolicyEngine/uk-autumn-budget-dashboard-2026
(a local clone) and writes dashboardData.ts beside this file, so the analysis
slides show the same numbers as the live dashboard. Each series is built the
way the dashboard builds it: the net line and the decile, age and household
totals are sums of the nine measures' own runs, as on the page.

    python3 build_dashboard_data.py <dashboard clone> [ref]   # ref defaults to origin/main
"""

import csv
import io
import json
import subprocess
import sys
from collections import defaultdict
from pathlib import Path

YEAR = 2027  # 2027-28, the dashboard's default year
COMBINED = "autumn_budget_2026_combined"

# The dashboard's order and colours (src/utils/policyConfig.js): revenue
# raisers in amber, measures that cost revenue in teal.
MEASURES = [
    ("threshold_freeze_2031_32", "Threshold freeze to 2031-32", "#78350F", "raise"),
    ("badr_lifetime_limit_cut", "Business Asset Disposal Relief restricted", "#B45309", "raise"),
    ("fuel_duty_rise_deferral", "Fuel duty rises deferred", "#115E59", "cost"),
    ("road_fuel_vat_cut", "VAT cut on road fuel", "#2DD4BF", "cost"),
    ("domestic_electricity_zero_vat", "Zero VAT on domestic electricity", "#0F766E", "cost"),
    ("warm_home_discount_top_up", "Warm Home Discount top-up", "#5EEAD4", "cost"),
    ("state_pension_income_tax_protection", "State Pension income tax protection", "#0D9488", "cost"),
    ("employer_ni_relief_under_25s", "Employer NI relief for under-25s", "#99F6E4", "cost"),
    ("plan_2_threshold_unfreeze", "Plan 2 student loan threshold unfrozen", "#14B8A6", "cost"),
]
IDS = [m[0] for m in MEASURES]
AGE_BANDS = ["0-15", "16-24", "25-34", "35-49", "50-64", "65+"]
HOUSEHOLDS = [
    "single_renter",
    "couple_three_children",
    "lone_parent",
    "pensioner_couple",
    "higher_income_saver",
]


def show(repo, ref, path):
    return subprocess.run(
        ["git", "-C", repo, "show", f"{ref}:{path}"],
        check=True, capture_output=True, text=True,
    ).stdout


def rows(repo, ref, name):
    return list(csv.DictReader(io.StringIO(show(repo, ref, f"public/data/{name}"))))


def r(x, n=4):
    return round(float(x), n)


def main():
    repo = sys.argv[1]
    ref = sys.argv[2] if len(sys.argv) > 2 else "origin/main"
    commit = subprocess.run(
        ["git", "-C", repo, "rev-parse", ref], check=True, capture_output=True, text=True
    ).stdout.strip()

    budget = rows(repo, ref, "budgetary_impact.csv")
    years = sorted({int(x["year"]) for x in budget})
    revenue = []
    for year in years:
        values = {}
        for row in budget:
            if int(row["year"]) == year and row["reform_id"] in IDS:
                values[row["reform_id"]] = r(row["value"])
        revenue.append({"year": year, "values": values, "net": r(sum(values.values()))})

    def by_decile(name, column, key):
        out = {}
        for row in rows(repo, ref, name):
            if int(row["year"]) == YEAR and row["reform_id"] in IDS and row["decile"] != "all":
                out.setdefault(row[key], {})[row["reform_id"]] = r(row[column], 6)
        return out

    relative = by_decile("distributional_impact.csv", "value", "decile")
    absolute = by_decile("winners_losers.csv", "avg_change", "decile")
    rel_order = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"]
    deciles = [
        {
            "decile": i + 1,
            "absolute": absolute[str(i + 1)],
            "absoluteNet": r(sum(absolute[str(i + 1)].values()), 2),
            "relative": relative[rel_order[i]],
            "relativeNet": r(sum(relative[rel_order[i]].values()), 6),
        }
        for i in range(10)
    ]

    age = defaultdict(dict)
    for row in rows(repo, ref, "age_impact.csv"):
        if int(row["year"]) == YEAR and row["reform_id"] in IDS and row["age_band"] in AGE_BANDS:
            age[row["age_band"]][row["reform_id"]] = r(row["mean_change"], 2)
    ages = [
        {"band": band, "values": age[band], "net": r(sum(age[band].values()), 2)}
        for band in AGE_BANDS
    ]

    curves = defaultdict(dict)
    for row in rows(repo, ref, "income_curve.csv"):
        if int(row["year"]) != YEAR or row["household"] not in HOUSEHOLDS:
            continue
        point = curves[row["household"]].setdefault(
            float(row["income"]), {"baseline": None, "change": 0.0}
        )
        if row["reform_id"] == COMBINED:
            point["baseline"] = float(row["baseline_net_income"])
        if row["reform_id"] in IDS:
            point["change"] += float(row["reform_net_income"]) - float(row["baseline_net_income"])
    contract = json.loads(show(repo, ref, "src/utils/publication/contract.json"))
    defs = {}

    def find(o):
        if isinstance(o, dict):
            if o.get("id") in HOUSEHOLDS and "definition" in o:
                defs[o["id"]] = o
            for v in o.values():
                find(v)
        elif isinstance(o, list):
            for v in o:
                find(v)

    find(contract)
    households = [
        {
            "id": h,
            "label": defs[h]["label"],
            "definition": defs[h]["definition"],
            "xLabel": defs[h]["x_label"],
            "xMax": defs[h]["x_max"],
            "points": [
                [int(x), round(p["change"], 2)]
                for x, p in sorted(curves[h].items())
                if x <= defs[h]["x_max"]
            ],
        }
        for h in HOUSEHOLDS
    ]

    ls = json.loads(show(repo, ref, "public/data/living_standards_outlook.json"))
    median = ls["living_standards"]
    poverty = ls["poverty"]
    family = ls["poverty_by_group"]["breakdowns"]["family_type"]
    living = {
        "medianOutturn": [[p["year"], p["real"]] for p in median["outturn"]["median_equivalised_income"]],
        "medianProjection": [[p["year"], p["real"]] for p in median["projection"]["median_equivalised_income"]],
        "povertyOutturn": [[p["year"], p["rate"]] for p in poverty["outturn"]["absolute_bhc"]["all"]],
        "povertyProjection": [[p["year"], p["rate"]] for p in poverty["projection"]["absolute_bhc"]["all"]],
        "decileGrowth": ls["income_by_decile"]["bhc"]["cumulative_growth_to_end"],
        "families": sorted(
            (
                {
                    "label": label,
                    "start": family["cells"][key]["2027-28"]["relative_ahc"],
                    "end": family["cells"][key]["2031-32"]["relative_ahc"],
                }
                for key, label in family["groups"].items()
            ),
            key=lambda g: -g["end"],
        ),
        "forecast": ls["meta"].get("headline_end_year_note", ""),
    }

    data = {
        "source": {
            "repo": "PolicyEngine/uk-autumn-budget-dashboard-2026",
            "commit": commit,
            "policyengine": ls["meta"]["policyengine"],
            "dataset": ls["meta"]["dataset"]["name"],
        },
        "year": YEAR,
        "measures": [
            {"id": i, "name": n, "color": c, "kind": k} for i, n, c, k in MEASURES
        ],
        "revenue": revenue,
        "deciles": deciles,
        "ages": ages,
        "households": households,
        "living": living,
    }
    out = Path(__file__).with_name("dashboardData.ts")
    out.write_text(
        "// Generated by build_dashboard_data.py from\n"
        f"// PolicyEngine/uk-autumn-budget-dashboard-2026 public/data at {commit}.\n"
        "// Do not edit by hand; rerun the script.\n\n"
        f"export const dashboard = {json.dumps(data, ensure_ascii=False, separators=(",", ":"))} as const;\n"
    )
    print(f"wrote {out} from {commit}")


if __name__ == "__main__":
    main()
