# Who bears the AI shock?, Berlin, December 2026

26 slides at `/slides/fps-berlin-2026`: Vahid Ahmadi's paper at the 2026
Franco-German Fiscal Policy Seminar, "AI and the Future of Public Finances:
Opportunities, Risks, and Policy Choices" (Federal Ministry of Finance,
Berlin, 1–2 December 2026). The format is a 25-minute presentation and 20
minutes of discussion.

All 26 slides are in the talk (five are section dividers); there is no backup section. The ministry
runs the deck from its own machine, so it is sent as a PDF:

```bash
bun run export fps-berlin-2026 fps-berlin-2026.pdf --size 1440x810 --scale 2
```

No slide has build steps. Slide 25 embeds a live dashboard; the PDF shows
a screenshot. Every number comes from the merged paper (PolicyEngine/uk-ai-study
main at c42be9f, tax year 2027–28); `content.ts` names the table each comes
from. The figures in `public/images/fps-berlin-2026/` come from the same
commit. Speaker notes and timings are in [NOTES.md](NOTES.md).

Slides use short icon rows and chips rather than sentences; the fuller
wording is in the notes. The closing slide links the paper on SSRN, with a
QR code (`public/images/fps-berlin-2026/ssrn-qr.svg`, made with segno).

The design follows the BIST deck (`bist-2026`): `slides/deck.module.css`
is copied from it, and `slides/fps.module.css` adds this deck's tables,
headline numbers, waterfall and range.
