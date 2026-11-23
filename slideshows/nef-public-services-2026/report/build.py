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

# Roadmap: replace the embedded widget placeholder with an SVG drawn here.
ROADMAP = """
<figure class="roadmap">
<svg viewBox="0 0 705 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four phases, December 2026 to July 2027">
  <g font-family="Inter, sans-serif" font-size="11" fill="#4A5568">
    <text x="20" y="18">Dec 2026</text><text x="105" y="18">Jan 2027</text><text x="190" y="18">Feb</text>
    <text x="275" y="18">Mar</text><text x="360" y="18">Apr</text><text x="445" y="18">May</text>
    <text x="530" y="18">Jun</text><text x="615" y="18">Jul</text>
  </g>
  <g stroke="#E2E8F0">
    <line x1="15" y1="26" x2="15" y2="108"/><line x1="100" y1="26" x2="100" y2="108"/><line x1="185" y1="26" x2="185" y2="108"/>
    <line x1="270" y1="26" x2="270" y2="108"/><line x1="355" y1="26" x2="355" y2="108"/><line x1="440" y1="26" x2="440" y2="108"/>
    <line x1="525" y1="26" x2="525" y2="108"/><line x1="610" y1="26" x2="610" y2="108"/><line x1="695" y1="26" x2="695" y2="108"/>
  </g>
  <g font-family="Inter, sans-serif">
    <rect x="17" y="34" width="166" height="38" rx="5" fill="#E6FFFA" stroke="#319795"/>
    <text x="27" y="51" font-size="12" font-weight="700" fill="#234E52">1 Scope</text>
    <text x="27" y="65" font-size="10" fill="#285E61">services, scenarios, metrics</text>

    <rect x="187" y="34" width="166" height="38" rx="5" fill="#319795"/>
    <text x="197" y="51" font-size="12" font-weight="700" fill="#fff">2 Baseline</text>
    <text x="197" y="65" font-size="10" fill="#fff">extended income, MIS, carbon</text>

    <rect x="357" y="34" width="166" height="38" rx="5" fill="#2C7A7B"/>
    <text x="367" y="51" font-size="12" font-weight="700" fill="#fff">3 Policy levers</text>
    <text x="367" y="65" font-size="10" fill="#fff">fares, social rent, home care</text>

    <rect x="527" y="34" width="166" height="38" rx="5" fill="#fff" stroke="#2C7A7B" stroke-dasharray="4 3"/>
    <text x="537" y="51" font-size="12" font-weight="700" fill="#234E52">4 Hard services</text>
    <text x="537" y="65" font-size="10" fill="#285E61">care homes and housing</text>
  </g>
  <g fill="#D69E2E">
    <polygon points="185,88 191,96 185,104 179,96"/><polygon points="355,88 361,96 355,104 349,96"/>
    <polygon points="525,88 531,96 525,104 519,96"/><polygon points="695,88 701,96 695,104 689,96"/>
  </g>
  <g font-family="Inter, sans-serif" font-size="10" fill="#744210" text-anchor="middle">
    <text x="185" y="120">check-in</text><text x="355" y="120">check-in</text>
    <text x="525" y="120">check-in</text><text x="695" y="120" text-anchor="end">check-in</text>
  </g>
</svg>
<figcaption>Four phases, each ending in a check-in with NEF. Phase 4 is exploratory; timings are estimates until phase 1 is agreed.</figcaption>
</figure>
"""
body_md = re.sub(r"^&#91;embedded content:.*$", "ROADMAP_PLACEHOLDER", body_md, flags=re.M)

# Open questions: task boxes -> numbered list.
body_md = re.sub(r"^- \[ \] ", "1. ", body_md, flags=re.M)
# Nested bullets in the source use 3 spaces; Python-Markdown needs 4.
body_md = re.sub(r"^   - ", "    - ", body_md, flags=re.M)

conv = lambda s: markdown.markdown(s, extensions=["tables", "sane_lists"])
lead_html = conv(lead_md)
body_html = conv(body_md).replace("<p>ROADMAP_PLACEHOLDER</p>", ROADMAP)

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
    <p class="kicker">Proposal for the New Economics Foundation</p>
    <h1>Public services in kind in PolicyEngine&nbsp;UK</h1>
    <p class="subtitle">Status today and a plan to compare universal services with cash on income, adequacy and carbon</p>
  </div>
  <div class="cover-meta">
    <div><span>Authors</span>Vahid Ahmadi, Max Ghenis</div>
    <div><span>Date</span>21 November 2026, revised 23 November</div>
    <div><span>Status</span>Proposal for discussion</div>
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
