"""SNAP by month for the family, on the deck's own household and pinned model.

Usage: uv run -q --no-project --with policyengine-us==2.90.2 python monthly_snap.py <deck analysis dir> <out.json>
"""
import json
import sys

sys.path.insert(0, sys.argv[1])
import household as hh  # noqa: E402
from policyengine_us import Simulation  # noqa: E402

out = {}
for label, zero in (("with_subsidy", False), ("without_subsidy", True)):
    situation = hh.situation("MA", 40_000)
    if zero:
        situation["spm_units"]["spm_unit"]["child_care_subsidies"] = {hh.YEAR: 0}
    sim = Simulation(situation=situation)
    months = {}
    for month in range(1, 13):
        period = f"{hh.YEAR}-{month:02d}"
        months[period] = {name: round(float(sim.calculate(name, period)[0]), 2)
                          for name in ("snap", "snap_max_allotment", "snap_net_income", "snap_standard_deduction", "snap_excess_shelter_expense_deduction", "snap_dependent_care_deduction", "snap_expected_contribution")}
    out[label] = dict(months=months, annual=round(float(sim.calculate("snap", hh.YEAR)[0]), 2))
json.dump(out, open(sys.argv[2], "w"), indent=1)
for label, data in out.items():
    print(label, "annual", data["annual"])
    for period in (f"{hh.YEAR}-01", f"{hh.YEAR}-09", f"{hh.YEAR}-10", f"{hh.YEAR}-12"):
        print(" ", period, data["months"][period])
