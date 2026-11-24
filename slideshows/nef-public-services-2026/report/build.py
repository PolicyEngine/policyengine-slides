"""Build the A4 report HTML for the public services in kind proposal (doc rev 109, revised 23 Nov 2026 after review).

Run from the repo root:
    python3 slideshows/nef-public-services-2026/report/build.py
then print report.html to public/reports/nef-public-services-proposal-2026.pdf
with headless Chrome (see README.md in this folder).
"""
import re
import html
from pathlib import Path

import markdown

HERE = Path(__file__).parent
SRC = HERE / "PROPOSAL.md"  # the proposal doc at rev 109, 23 Nov 2026
REPO = HERE.parents[2]
LOGO = REPO / "public/logos/teal.svg"
OUT_DIR = REPO / "public/reports"

md = SRC.read_text()
lines = md.split("\n")
title = lines[0].lstrip("# ").strip()

# Split: lead (summary) up to first "## ", body after.
first_h2 = next(i for i, l in enumerate(lines) if l.startswith("## "))
lead_md = "\n".join(lines[4:first_h2]).strip()
body_md = "\n".join(lines[first_h2:])


# Open questions: task boxes -> numbered list.
body_md = re.sub(r"^- \[ \] ", "1. ", body_md, flags=re.M)
# Nested bullets in the source use 3 spaces; Python-Markdown needs 4.
body_md = re.sub(r"^   - ", "    - ", body_md, flags=re.M)

conv = lambda s: markdown.markdown(s, extensions=["tables", "sane_lists"])
lead_html = conv(lead_md)
body_html = conv(body_md)

# Number the h2 sections and build a contents list.
sections = []
def number(m):
    n = len(sections) + 1
    text = m.group(1)
    slug = re.sub(r"[^a-z0-9]+", "-", html.unescape(text).lower()).strip("-")
    sections.append((n, text, slug))
    num = "" if text == "Sources" else f'<span class="num">{n}</span>'
    return f'<h2 id="{slug}">{num}{text}</h2>'
body_html = re.sub(r"<h2>(.*?)</h2>", number, body_html)

toc = "\n".join(
    f'<li><a href="#{s}"><span class="n">{"" if t == "Sources" else n}</span>{t}</a></li>'
    for n, t, s in sections
)

# Make the Sources section a smaller, separate block.
body_html = body_html.replace('<h2 id="sources">', '<section class="sources"><h2 id="sources">') + "</section>"

# Wrap wide status table.
body_html = body_html.replace("<table>", '<div class="tbl"><table>', ).replace("</table>", "</table></div>")
body_html = body_html.replace('<div class="tbl"><table>', '<div class="tbl status"><table>', 1)

logo_svg = LOGO.read_text()

page = f"""<!doctype html>
<html lang="en-GB"><head><meta charset="utf-8">
<title>{title}</title>
<link rel="stylesheet" href="report.css">
</head><body>

<section class="cover">
  <div class="logo">{logo_svg}</div>
  <div class="cover-main">
    <p class="draft-tag">Draft, not a finished proposal: shared for review and feedback only</p>
    <p class="kicker">Proposal for the New Economics Foundation</p>
    <h1>Public services in kind in PolicyEngine&nbsp;UK</h1>
    <p class="subtitle">Status today and a plan to compare universal services with cash on income, adequacy and carbon</p>
  </div>
  <div class="cover-meta">
    <div><span>Author</span>Vahid Ahmadi</div>
    <div><span>Date</span>21 November 2026, revised 24 November</div>
    <div><span>Status</span>Draft for review and feedback</div>
  </div>
</section>

<section class="front">
  <h2 class="summary-h">Summary</h2>
  <div class="summary">{lead_html}</div>
  <h2 class="toc-h">Contents</h2>
  <ol class="toc">{toc}</ol>
</section>

<main>
{body_html}
</main>
</body></html>
"""
(HERE / "report.html").write_text(page)
print("wrote", HERE / "report.html")
print("sections:", [t for _, t, _ in sections])
