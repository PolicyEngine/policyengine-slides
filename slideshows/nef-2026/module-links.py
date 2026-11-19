"""Count the links between the modules on the NEF deck's module slide.

Usage: python module-links.py /path/to/obr-macroeconomic-model module-links.json

For each pair of modules it counts the equations in the target module whose
right-hand side uses a variable that the source module determines (a
left-hand side there). Lagged terms count; commented-out lines are skipped.
Equations are read with the model repo's own parser
(obr_macro/transpiler.py), and each belongs to the module of the listing
section it sits under (the mapping is in MODULE_OF, and in content.ts). A
variable defined in more than one section belongs to the first.

The slide draws the modules in three groups (GROUPS). The group matrix counts,
for each pair of groups, the equations in the target group whose right-hand
side uses a variable any module of the source group determines; an equation
counts once, however many of the source group's modules it draws on.
"""

import importlib.util
import json
import re
import sys
from pathlib import Path

MODULE_OF = {
    "Group 1:": "Consumption",
    "Group 2:": "Investment and inventories",
    "Group 3:": "Investment and inventories",
    "Group 4:": "Labour market",
    "Group 5:": "Exports",
    "Group 6:": "Imports",
    "Group 7:": "Prices and wages",
    "Group 8:": "North Sea oil",
    "Group 9:": "Public sector",
    "Group 10:": "Public sector",
    "Group 11:": "Balance of payments",
    "Group 12:": "Public sector",
    "Group 14:": "Finance and balance sheets",
    "Group 15:": "Income accounts",
    "Group 16:": "GDP and output",
    "Market sector GVA satellite": "GDP and output",
    "Group 18:": "Finance and balance sheets",
}
ORDER = [
    "GDP and output",
    "Consumption",
    "Investment and inventories",
    "Labour market",
    "Exports",
    "Imports",
    "Balance of payments",
    "North Sea oil",
    "Prices and wages",
    "Income accounts",
    "Public sector",
    "Finance and balance sheets",
]
GROUPS = {
    "Demand": [
        "Consumption",
        "Investment and inventories",
        "Exports",
        "Imports",
        "GDP and output",
    ],
    "Supply and prices": [
        "Labour market",
        "Prices and wages",
        "North Sea oil",
    ],
    "Income and sectors": [
        "Income accounts",
        "Public sector",
        "Balance of payments",
        "Finance and balance sheets",
    ],
}
GROUP_OF = {module: group for group, modules in GROUPS.items() for module in modules}
assert sorted(GROUP_OF) == sorted(ORDER)
HEADER = re.compile(r"^'\s*(Group \d+:|Market sector GVA satellite)")
NAME = re.compile(r"[A-Za-z_][A-Za-z0-9_]*")


def main(repo: str, out: str) -> None:
    root = Path(repo)
    spec = importlib.util.spec_from_file_location(
        "transpiler", root / "obr_macro" / "transpiler.py"
    )
    module = importlib.util.module_from_spec(spec)
    sys.modules["transpiler"] = module
    spec.loader.exec_module(module)
    transpiler = module.EViewsTranspiler()

    listing = root / "obr_macro" / "_data" / "obr_model_code_october_2025.txt"
    equations = []
    current, buffer = None, ""
    for line in listing.read_text().split("\n"):
        line = line.strip()
        if line.startswith("'"):
            header = HEADER.match(line)
            if header:
                current = MODULE_OF[header.group(1)]
            continue
        buffer += " " + line
        if buffer.count("(") == buffer.count(")"):
            if buffer.strip():
                equation = transpiler.parse_equation(buffer.strip())
                if equation:
                    equations.append((current, equation.lhs, equation.rhs))
            buffer = ""
    assert len(equations) == 372, len(equations)

    def lhs_variable(lhs: str):
        names = [
            name
            for name in NAME.findall(lhs)
            if name.lower() not in ("dlog", "d", "log", "identity")
        ]
        return names[0].upper() if names else None

    owner = {}
    for mod, lhs, _ in equations:
        variable = lhs_variable(lhs)
        if variable and variable not in owner:
            owner[variable] = mod

    counts = {a: {b: 0 for b in ORDER} for a in ORDER}
    for mod, _, rhs in equations:
        used = {name.upper() for name in NAME.findall(rhs)}
        for source in {owner[u] for u in used if u in owner and owner[u] != mod}:
            counts[source][mod] += 1

    group_counts = {a: {b: 0 for b in GROUPS} for a in GROUPS}
    for mod, _, rhs in equations:
        used = {name.upper() for name in NAME.findall(rhs)}
        target = GROUP_OF[mod]
        for source in {GROUP_OF[owner[u]] for u in used if u in owner} - {target}:
            group_counts[source][target] += 1

    Path(out).write_text(
        json.dumps(
            {
                "note": "matrix[i][j]: equations in module j that use a variable module i determines",
                "order": ORDER,
                "matrix": [[counts[a][b] for b in ORDER] for a in ORDER],
                "groupNote": "groupMatrix[i][j]: equations in group j that use a variable group i determines",
                "groups": GROUPS,
                "groupOrder": list(GROUPS),
                "groupMatrix": [
                    [group_counts[a][b] for b in GROUPS] for a in GROUPS
                ],
            },
            indent=2,
        )
        + "\n"
    )


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
