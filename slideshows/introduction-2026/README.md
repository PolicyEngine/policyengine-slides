# Analysing the UK Autumn Budget 2026 with PolicyEngine

5 slides at `/slides/introduction-2026`, for the 28 October 2026 webinar:
what PolicyEngine is, how we prepared for Budget day, and a slide with the live
Autumn Budget 2026 dashboard embedded in it
([the Drill 5 build](https://uk-autumn-budget-2026-drill-op9iio4el-policy-engine.vercel.app/uk/autumn-budget-2026)),
where the analysis is presented. The closing slide links
[the dashboard](https://uk-autumn-budget-2026.vercel.app/uk/autumn-budget-2026).

- `config.ts` controls the slide order and metadata.
- `content.ts` holds the sources and preparation cards.
- `slides/index.tsx` contains the slides. The analysis slide embeds the
  dashboard itself (`slides/DashboardEmbed.tsx`): Expand stretches the same
  frame over the whole screen, so whatever is open in it is kept, and New tab
  opens it in the browser. Buttons in its bar load the Public finances,
  Pensioners and Living standards sub-tabs and the Household impact tab into
  the frame. The deck draws no charts of its own, so nothing
  here goes stale when the dashboard's data change.
- `SPEAKER-NOTES.md` gives the presenter track.

`public/images/introduction-2026/dashboard-qr.svg` encodes
the dashboard's address.
