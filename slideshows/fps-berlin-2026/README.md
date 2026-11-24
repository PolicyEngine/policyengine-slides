# Who bears the AI shock?, Berlin, December 2026

29 slides at `/slides/fps-berlin-2026`: Vahid Ahmadi's paper at the 2026
Franco-German Fiscal Policy Seminar, "AI and the Future of Public Finances:
Opportunities, Risks, and Policy Choices" (Federal Ministry of Finance,
Berlin, 1–2 December 2026). The format is a 25-minute presentation and 20
minutes of discussion.

All 29 slides are in the talk; there is no backup section. The ministry
runs the deck from its own machine, so it is sent as a PDF:

```bash
bun run export fps-berlin-2026 fps-berlin-2026.pdf --size 1440x810 --scale 2
```

No slide has build steps or live embeds, so the export and the live deck
match. Every number comes from the merged paper (PolicyEngine/uk-ai-study
main at c42be9f, tax year 2027–28); `content.ts` names the table each comes
from. The figures in `public/images/fps-berlin-2026/` come from the same
commit. Speaker notes and timings are in [NOTES.md](NOTES.md).

The design follows the BIST deck (`bist-2026`): `slides/deck.module.css`
is copied from it, and `slides/fps.module.css` adds this deck's tables,
headline numbers, waterfall and range.
