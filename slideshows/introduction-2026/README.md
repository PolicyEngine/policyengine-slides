# Analysing the UK Autumn Budget 2026 with PolicyEngine

6 slides at `/slides/introduction-2026`, for the 28 October 2026 webinar:
what PolicyEngine is, how we prepared for Budget day, past Budgets on today's
model, and a slide with the live
[Autumn Budget 2026 dashboard](https://uk-autumn-budget-2026.vercel.app/uk/autumn-budget-2026)
embedded in it, where the analysis is presented.

- `config.ts` controls the slide order and metadata.
- `content.ts` holds the sources, preparation cards and past events.
- `slides/index.tsx` contains the slides. The analysis slide embeds the
  dashboard itself (`slides/DashboardEmbed.tsx`): Expand stretches the same
  frame over the whole screen, so whatever is open in it is kept, and New tab
  opens it in the browser. The deck draws no charts of its own, so nothing
  here goes stale when the dashboard's data change.
- `SPEAKER-NOTES.md` gives the presenter track.

`public/screenshots/introduction-2026/autumn-budget-2025-in-review.png` was
captured from https://autumn-budget-2025-in-review.vercel.app/uk/autumn-budget-2025-in-review
on 25 October 2026. `public/images/introduction-2026/dashboard-qr.svg` encodes
the dashboard's address.
