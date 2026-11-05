"""What this family's row would show if a state held it to a figure we do not apply.

Each check changes one input and leaves the deck's own runs alone. The notes and the
ledger quote these figures when they say why a state keeps its modeled subsidy.
"""

import json
from pathlib import Path

import household as hh
from policyengine_core.reforms import Reform
from policyengine_us import Simulation

EARNINGS = 40_000
OUTPUT = Path(__file__).parent.parent / "data" / "limit_checks.json"


def row(state, reform=None, earnings=EARNINGS):
    sim = Simulation(situation=hh.situation(state, earnings), reform=reform)
    parts = hh.net_resources_parts(sim)
    return {
        "subsidy": round(float(parts["child_care_subsidy"][0]), 2),
        "net_resources": round(float(parts["net_resources"][0]), 2),
    }


def params(values):
    return Reform.from_dict(values, country_id="us")


class WithoutGeorgiaCaps(Reform):
    def apply(self):
        self.neutralize_variable("ga_child_care_subsidies")


def largest_drop(state, reform, low, high):
    sim = Simulation(
        situation=hh.situation(
            state, 0, hh.earnings_axis(low, high, (high - low) // 500 + 1)
        ),
        reform=reform,
    )
    net = hh.net_resources_parts(sim)["net_resources"].astype(float)
    earnings = list(range(low, high + 1, 500))
    worst = min(range(len(net) - 1), key=lambda i: net[i + 1] - net[i])
    return {
        "before": earnings[worst],
        "after": earnings[worst + 1],
        "drop": round(float(net[worst] - net[worst + 1])),
    }


def main():
    # DESE's chart, updated July 1, 2026, tops out at $3,331 for three, 150% of the 2025
    # guideline of $26,650. The model's parameter multiplies the 2026 guideline.
    missouri_share = 1.5 * 26_650 / hh.POVERTY_GUIDELINE_2026_FOR_THREE
    missouri = params(
        {
            "gov.states.mo.dese.ccs.income.fpl_rate.initial_eligibility": {
                f"{hh.YEAR}-01-01.2100-12-31": missouri_share
            }
        }
    )
    # DHR's fact sheet of June 1, 2026 tops out at $3,331 for three, 150% of last year's
    # guideline, which the model's own formula reads.
    alabama = params(
        {
            "gov.states.al.dhr.ccsp.income.limit.fpl_initial": {
                f"{hh.YEAR}-06-01.2100-12-31": 1.5
            }
        }
    )
    # Maryland Family Network's page and the Department of Legislative Services print
    # $94,026 for three, which equals 75% of the median income of October 2024.
    maryland = params(
        {
            "gov.states.md.msde.ccs.income.smi_freeze_in_effect": {
                f"{hh.YEAR}-01-01.2100-12-31": True
            },
            "gov.states.md.msde.ccs.income.smi_frozen_year": {
                f"{hh.YEAR}-01-01.2100-12-31": 2024
            },
        }
    )
    OUTPUT.write_text(
        json.dumps(
            {
                "earnings": EARNINGS,
                "georgia_without_caps": row("GA", WithoutGeorgiaCaps),
                "ohio_without_voucher": row("OH"),
                "missouri_at_posted": row("MO", missouri),
                "alabama_at_posted": row("AL", alabama),
                "maryland_at_posted": largest_drop("MD", maryland, 90_000, 100_000),
            },
            indent=2,
        )
        + "\n"
    )
    print(OUTPUT.read_text())


if __name__ == "__main__":
    main()
