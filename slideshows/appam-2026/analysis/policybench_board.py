"""Read PolicyBench's board figures for slide 4.

Usage: python3 policybench_board.py <saved policybench.org page> <board copy> <modelMeta.ts>

The saved page gives the snapshot, the model and household counts, and each dollar output's
share of positive-amount cases within 10%. The board copy, PolicyBench's dashboard-data.json of
October 23, 2026, gives each model's exact score, and modelMeta.ts its release date. Writes
data/policybench_board.json. PolicyBench grades against PolicyEngine.
"""

import html
import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).parent
CARDS = {
    "state_refundable_credits": "State refundable credits",
    "snap": "SNAP",
    "federal_income_tax_before_refundable_credits": "Federal tax before refundable credits",
    "state_income_tax_before_refundable_credits": "State tax before refundable credits",
    "federal_refundable_credits": "Federal refundable credits",
    "payroll_tax": "Payroll tax",
}
# The months each score line compares: models out by the end of April, and the whole board.
APRIL_END = "2026-04-30"
SHOWN_SCORES = ["gpt-6-sol", "claude-opus-5.5", "gpt-6.1-sol"]


def page_text(path):
    raw = Path(path).read_text()
    raw = re.sub(r"<script.*?</script>", " ", raw, flags=re.S)
    raw = re.sub(r"<[^>]+>", " ", raw)
    return re.sub(r"\s+", " ", html.unescape(raw))


def cards(text):
    start = text.index("Where models still break")
    rows = []
    for key, label in CARDS.items():
        found = re.search(
            re.escape(label) + r" Overall [\d.]+% Positive-amount cases ([\d.]+)%",
            text[start:],
        )
        if not found:
            raise ValueError(f"No card for {label}")
        within = float(found.group(1))
        rows.append(
            {
                "key": key,
                "label": label,
                "positive_within_10": within,
                "positive_wrong_by_more_than_10": round(100 - within, 1),
            }
        )
    return rows


def release_dates(path):
    source = Path(path).read_text()
    # The date table is the one whose values are all ISO dates.
    return {
        name: date
        for name, date in re.findall(
            r'^\s*"?([a-z0-9.\-]+)"?:\s*"(\d{4}-\d{2}-\d{2})",?$', source, flags=re.M
        )
    }


def main(page, board, meta):
    text = page_text(page)
    counts = re.search(r"(\d+) Models / (\d+) Households / (\d+) Outputs Snapshot ([\d-]+)", text)
    if not counts:
        raise ValueError("No counts line on the saved page")
    stats = json.loads(Path(board).read_text())["countries"]["us"]["modelStats"]
    dates = release_dates(meta)
    scores = [
        {"model": row["model"], "exact": round(row["exact"], 1), "released": dates.get(row["model"])}
        for row in stats
        if row.get("condition", "no_tools") == "no_tools"
    ]
    undated = [row["model"] for row in scores if row["released"] is None]
    if undated:
        raise ValueError(f"No release date for {undated}")
    best = max(scores, key=lambda row: row["exact"])
    by_april = max(
        (row for row in scores if row["released"] <= APRIL_END), key=lambda row: row["exact"]
    )
    by_name = {row["model"]: row for row in scores}
    result = {
        "source": "https://policybench.org",
        "snapshot": counts.group(4),
        "models": int(counts.group(1)),
        "households": int(counts.group(2)),
        "outputs": int(counts.group(3)),
        "cards": cards(text),
        "scores_source": "PolicyBench dashboard-data.json, October 23, 2026 copy",
        "scores_models": len(scores),
        "best_score": best,
        "best_score_by_april": by_april,
        "named_scores": {name: by_name[name] for name in SHOWN_SCORES},
    }
    (HERE.parent / "data" / "policybench_board.json").write_text(json.dumps(result, indent=2) + "\n")
    print(json.dumps(result, indent=1))


if __name__ == "__main__":
    main(*sys.argv[1:4])
