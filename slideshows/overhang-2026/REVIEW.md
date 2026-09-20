# Overhang 2026 review

20 slides for Max Ghenis at The Overhang, September 19, 2026. The talk runs 22 minutes, including two minutes for the audience to forecast before the agent's figures appear. Speaker notes and source verification accompany the deck.

## View

From this repository, run `bun install` and `bun dev`, then open **http://localhost:3000/slides/overhang-2026**. Use the arrow keys to advance. Slide 12 has a roadmap toggle; slides 14 and 17 offer live embeds with Expand and Open controls. The deck is public in its config.

## Slide list

| # | Slide | Origin |
|---|---|---|
| 1 | Law is an alignment problem | New |
| 2 | If the baseline moves | New; supplied chart |
| 3 | Forecasters marked growth down, and the upper tail with it | New; supplied chart |
| 4 | How well did they do? | New |
| 5 | Law is an alignment problem | New; adapts IARIW values → policies → indicators |
| 6 | AI already drafts bills | New |
| 7 | What if every bill had a score? | Adapted IARIW question |
| 8 | What if every outcome had an estimate? | Adapted IARIW question |
| 9 | What if you cross them? | Adapted IARIW question |
| 10 | How do we get there? | Adapted IARIW |
| 11 | AI alone can’t do it | Adapted PolicyBench; reverified figures and tool condition |
| 12 | What do we arm the AI with? | Reuses IARIW FivePrimitivesSlide with copy overrides; new roadmap toggle |
| 13 | One bill through the stack | New |
| 14 | The rules | New; IARIW live-embed pattern |
| 15 | The model | New |
| 16 | Your number first | New |
| 17 | The agent’s forecast | New; IARIW live-embed pattern |
| 18 | The loop that matters most | Adapted IARIW; current calibration scoreboard |
| 19 | Where does this break? | New |
| 20 | What if every bill had a forecast? | New closing links |

The question sequence drops Belgian audience framing and unsupported scale estimates. The shared five-primitives component has optional copy overrides; its default IARIW HTML is byte-for-byte unchanged.

## Verification

- `bun install`: passed using the existing local dependency cache.
- `bun run lint`: passed, with 32 existing warnings and no errors. Changed-file lint also passed.
- `bun run typecheck`: passed.
- `bun run test --pool=threads --maxWorkers=1`: 114 tests passed. The default fork pool timed out under the sandbox.
- `bun run build --webpack`: passed; the generated routes include `/overhang-2026` and `/overhang-2026/og` under base path `/slides`. Default Turbopack failed because the sandbox disallowed binding a local port.
- All 20 slide components rendered to HTML successfully. The reused component's default HTML matched the original exactly.
- GitNexus upstream checks preceded edits; staged change detection covered the expected deck, registry and optional shared-component props. Existing registry function bodies are unchanged; the detector includes their shifted line positions.

## Open issues

The sandbox prevents local servers from listening and Chromium from launching (macOS Mach bootstrap permission denied). The requested 1280×720 browser walkthrough and screenshots of slides 2, 3, 16 and 17 remain unverified. Playwright capture at 1600×900 was attempted for both live URLs but failed before navigation; no static screenshot fallbacks were fabricated. Live embeds and printed key facts are included.

Shell Git cannot resolve github.com. The GitHub connector's write action requires approval, while this session's approval policy is `never`. The branch is committed locally, but a push, draft PR, remote checks and Vercel preview could not be completed.

## Source changes and conditions

PolicyBench now shows 39 models, 89.2% best exact accuracy and 62.6% weakest (IARIW had 32, 88.7%, 62.3%). Its no-tools condition was verified against the site and repository. The slide says: **“Models answer without tools: no calculator, search, or PolicyEngine.”**

The bill's model and forecast figures and calibration scoreboard match the brief after rounding. The published model uses a $0 threshold while the bill specifies $1; slide 15 discloses this. The forecast was recorded August 4; target registration was August 3. The slide uses “Forecast recorded 4 Aug 2026.” December 31, 2029 is a first-print resolution bound. See `SOURCES.md` for evidence and other wording clarifications.
