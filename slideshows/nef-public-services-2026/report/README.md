# Proposal report (A4 PDF)

The A4 report version of the proposal "Public services in kind: status in PolicyEngine UK and a plan" (21 November 2026, revised 23 November after review and 24 November). The text is the proposal doc at revision 109, with the phase timings and roadmap chart removed (the proposal gives no timings) and the cover marked as a draft for review and feedback; `PROPOSAL.md` holds it.

Published file: `public/reports/nef-public-services-proposal-2026.pdf` (served at `/reports/nef-public-services-proposal-2026.pdf`).

## Rebuild

```bash
python3 slideshows/nef-public-services-2026/report/build.py
```

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer --virtual-time-budget=8000 --print-to-pdf="$PWD/public/reports/nef-public-services-proposal-2026.pdf" "file://$PWD/slideshows/nef-public-services-2026/report/report.html"
```

Needs Python 3 with `markdown`. Fonts load from Google Fonts at print time.
