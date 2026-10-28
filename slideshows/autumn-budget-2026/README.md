# Analysing the Autumn Budget 2026 with PolicyEngine

5 slides at `/slides/autumn-budget-2026`, for the 28 October 2026 webinar
(`/slides/introduction-2026` redirects here):
what PolicyEngine is, how we prepared for Budget day, and a slide with the live
[Autumn Budget 2026 dashboard](https://ab2026-local-preview.vercel.app/uk/autumn-budget-2026)
embedded in it, where the analysis is presented. The closing slide links the
same address, with its QR code, and credits the Nuffield Foundation, which
funds our UK Budget analysis.

- `config.ts` controls the slide order and metadata.
- `content.ts` holds the sources, the three pillars of What PolicyEngine is,
  the dates of the Budget-day rehearsals (the mock Budgets) and the
  preparation items, written for a general audience.
- `slides/index.tsx` contains the slides. The analysis slide embeds the
  dashboard itself (`slides/DashboardEmbed.tsx`): Expand stretches the same
  frame over the whole screen, so whatever is open in it is kept, and New tab
  opens it in the browser. Buttons in its bar load the Public finances,
  Pensioners (By age) and Living standards sub-tabs and the Household
  calculator tab into the frame. The deck draws no charts of its own, so nothing
  here goes stale when the dashboard's data change.
- `SPEAKER-NOTES.md` gives the presenter track.

`public/images/autumn-budget-2026/dashboard-qr.svg` encodes
the dashboard's address.

`public/logos/funders/nuffield-foundation-white.svg` is the Nuffield
Foundation's white logo, downloaded from nuffieldfoundation.org on 22 October
2026 (3,432 bytes, SHA-256
`b3727385be9295f8daa3938c745f87b2e00e5675130354f6394ae6b3fec5654c`). That day
its communications team asked for "funded" rather than "supported", and for
its logo, the white version on a dark background. Keep the file as
downloaded; don't recolour or redraw it.
