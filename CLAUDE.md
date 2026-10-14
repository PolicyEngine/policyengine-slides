# PolicyEngine Slides

Monorepo for all PolicyEngine presentation decks.

## Stack

- **Next.js 16** + React 19 + TypeScript + Tailwind CSS v4
- **Design tokens** from `@policyengine/ui-kit` (`@import "@policyengine/ui-kit/theme.css"` in `app/globals.css`). Slide markup uses legacy `pe-*` Tailwind classes (e.g. `bg-pe-teal`, `text-pe-500`); these alias to the ui-kit teal scale via the `@theme {}` block in `globals.css`.
- **Fonts**: Inter (everything), JetBrains Mono (code) — matches design system
- **Icons**: `@tabler/icons-react` (never emoji)

## Architecture

```
components/
  core/       # Slide, SlideshowViewer, SlideshowContext, BuildReveal
  layout/     # SlideHeader, SlideTitle, CoverSlide, EndSlide
  content/    # BulletList, CodeBlock, ContentCard, StatNumber
  media/      # SpeakerHeadshot

slideshows/
  {id}/
    config.ts           # SlideshowConfig (id, title, date, speakers, slides)
    slides/*.tsx         # Individual slide components

lib/
  types.ts              # SlideshowConfig, SlideEntry, build step helpers
  slideshows.ts         # Registry of all slideshows
  speakers.ts           # Global speaker registry
```

## Key patterns

- **SlideshowContext** provides `footerText`, `buildStep`, `currentSlide`, etc. to all slides via React context. Slides do not need manual `footerText` props.
- **Build steps**: Use `{ component: MySlide, builds: N }` in config for progressive reveals. Use `<BuildReveal step={N}>` wrapper in slide content.
- **Lazy mounting**: Only current slide +/- 1 neighbor is mounted.
- **Slide transitions**: CSS-only 150ms crossfade.
- Footer reads `footerText` from context; explicit prop wins if passed.

## Commands

```bash
bun dev                           # Dev server at localhost:3000
bun run build                     # Production build
bun run new-slideshow <id> <title> # Scaffold new slideshow
bun run export <id> [output.pdf] [--url <origin>]  # Export slideshow to PDF (headless Chrome CLI)
```

## Exporting to PDF

`bun run export` drives headless Chrome through its command line only (`--dump-dom`, `--screenshot`, `--print-to-pdf`), never through a DevTools connection, so it works where remote debugging is disabled.

- `?slide=N&export=1` renders step N without the navigation bar and mounts only that slide (no neighbors); the viewer's `<main>` carries `data-total-steps` and `data-current-step`.
- Chrome captures a page when its `load` event fires. With `&settle=<ms>` (0 included), export mode holds that event until the slide has been in the DOM for that many milliseconds of real time, so live embeds have that long to render (`lib/export-hold.ts`: an inline script in `<head>` opens the hold, and the viewer releases it once mounted). A hold that a release ends marks `<html>` with `data-export-settled`. Chrome's `--timeout` ends a hold that outlasts it, unmarked, so a capture cannot wait forever.
- Each capture also dumps the DOM, and the script rejects a capture that does not show the requested step with the settled mark (a slide that never mounted, or one the timeout cut off); the step is retried.
- Without `--url`, the script runs `next build`, serves the build on a free port and captures it, so unmerged changes export too. With `--url https://www.policyengine.org`, it captures the deployed site.
- `--size 1440x810 --scale 2` suits decks laid out for a laptop: the content fills the page and text stays sharp. The default is `1920x1080` at scale 1.
- Private decks: set `NEXT_PUBLIC_PRIVATE_PASSWORD`. The script passes it in the URL fragment (`#password=...`), which `PasswordGate` accepts and the browser never sends to the server. A local build also needs the variable at build time, as any build of a private deck does.
- `EXPORT_WAIT_MS` (default 8000, 0 to 60000) is the settle time; raise it for slow embeds or long intro animations. `EXPORT_CONCURRENCY` (default 3) sets how many slides are captured at once. `CHROME_PATH` overrides the Chrome binary.
- A watchdog stops a Chrome that hangs. A step that fails in the parallel pass is retried afterwards on its own with twice the time, up to three attempts in all. A failure, Ctrl-C or SIGTERM stops the build, every Chrome the script started and the server, and removes the screenshots. Error messages never include a URL fragment, so a deck password stays out of logs.
- The script checks that the PDF has one page per step before it reports success.

## Adding a new slideshow

1. `bun run new-slideshow my-talk "My talk title"`
2. Add slides in `slideshows/my-talk/slides/`
3. Update `slideshows/my-talk/config.ts` with slide imports
4. Register in `lib/slideshows.ts`

## Private slideshows

- Set `private: true` in a slideshow's `config.ts` to require a password before viewing
- Set the `NEXT_PUBLIC_PRIVATE_PASSWORD` env var (in Vercel and locally) to define the password
- Private decks show a "Private" badge on the home page card grid

## Hosting and basePath

- **basePath**: `/slides` (configured in `next.config.js`). All URLs on production are `/slides/...`
- **Served via Vercel rewrite** from `policyengine.org/slides/*` → `policyengine-slides.vercel.app/slides/*`
- **Images**: Use `BasePathImage` (not `next/image` directly). `next/image` with `unoptimized: true` + `basePath` doesn't prepend basePath to `<img src>`. `BasePathImage` wraps `next/image` and uses `resolveImageSrc()` to fix this.
- **URL updates**: Use `buildSlideUrl()` from `lib/slide-url.ts` (not manual string building) to preserve basePath in `window.history.replaceState`.
- **`.env.local` is gitignored** — Vercel CLI creates this with OIDC tokens; never commit it.
- **After deploying**: Check `curl -sI <url> | grep age` — if stale, run `bunx vercel --prod --force`.

## Style guidelines

- **Sentence case** for all headings and UI text
- Use design system colors via CSS variables (e.g., `var(--pe-teal)`) or Tailwind classes (`text-pe-teal`)
- Never hardcode color values; use the variables defined in `globals.css`
- Accent bar uses teal-to-amber gradient
- Content cards have teal left border

<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **policyengine-slides** (492 symbols, 1205 relationships, 3 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> If any GitNexus tool warns the index is stale, run `npx gitnexus analyze` in terminal first.

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `gitnexus_impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `gitnexus_detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `gitnexus_query({query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `gitnexus_context({name: "symbolName"})`.

## When Debugging

1. `gitnexus_query({query: "<error or symptom>"})` — find execution flows related to the issue
2. `gitnexus_context({name: "<suspect function>"})` — see all callers, callees, and process participation
3. `READ gitnexus://repo/policyengine-slides/process/{processName}` — trace the full execution flow step by step
4. For regressions: `gitnexus_detect_changes({scope: "compare", base_ref: "main"})` — see what your branch changed

## When Refactoring

- **Renaming**: MUST use `gitnexus_rename({symbol_name: "old", new_name: "new", dry_run: true})` first. Review the preview — graph edits are safe, text_search edits need manual review. Then run with `dry_run: false`.
- **Extracting/Splitting**: MUST run `gitnexus_context({name: "target"})` to see all incoming/outgoing refs, then `gitnexus_impact({target: "target", direction: "upstream"})` to find all external callers before moving code.
- After any refactor: run `gitnexus_detect_changes({scope: "all"})` to verify only expected files changed.

## Never Do

- NEVER edit a function, class, or method without first running `gitnexus_impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `gitnexus_rename` which understands the call graph.
- NEVER commit changes without running `gitnexus_detect_changes()` to check affected scope.

## Tools Quick Reference

| Tool | When to use | Command |
|------|-------------|---------|
| `query` | Find code by concept | `gitnexus_query({query: "auth validation"})` |
| `context` | 360-degree view of one symbol | `gitnexus_context({name: "validateUser"})` |
| `impact` | Blast radius before editing | `gitnexus_impact({target: "X", direction: "upstream"})` |
| `detect_changes` | Pre-commit scope check | `gitnexus_detect_changes({scope: "staged"})` |
| `rename` | Safe multi-file rename | `gitnexus_rename({symbol_name: "old", new_name: "new", dry_run: true})` |
| `cypher` | Custom graph queries | `gitnexus_cypher({query: "MATCH ..."})` |

## Impact Risk Levels

| Depth | Meaning | Action |
|-------|---------|--------|
| d=1 | WILL BREAK — direct callers/importers | MUST update these |
| d=2 | LIKELY AFFECTED — indirect deps | Should test |
| d=3 | MAY NEED TESTING — transitive | Test if critical path |

## Resources

| Resource | Use for |
|----------|---------|
| `gitnexus://repo/policyengine-slides/context` | Codebase overview, check index freshness |
| `gitnexus://repo/policyengine-slides/clusters` | All functional areas |
| `gitnexus://repo/policyengine-slides/processes` | All execution flows |
| `gitnexus://repo/policyengine-slides/process/{name}` | Step-by-step execution trace |

## Self-Check Before Finishing

Before completing any code modification task, verify:
1. `gitnexus_impact` was run for all modified symbols
2. No HIGH/CRITICAL risk warnings were ignored
3. `gitnexus_detect_changes()` confirms changes match expected scope
4. All d=1 (WILL BREAK) dependents were updated

## Keeping the Index Fresh

After committing code changes, the GitNexus index becomes stale. Re-run analyze to update it:

```bash
npx gitnexus analyze
```

If the index previously included embeddings, preserve them by adding `--embeddings`:

```bash
npx gitnexus analyze --embeddings
```

To check whether embeddings exist, inspect `.gitnexus/meta.json` — the `stats.embeddings` field shows the count (0 means no embeddings). **Running analyze without `--embeddings` will delete any previously generated embeddings.**

> Claude Code users: A PostToolUse hook handles this automatically after `git commit` and `git merge`.

## CLI

| Task | Read this skill file |
|------|---------------------|
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.claude/skills/gitnexus/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.claude/skills/gitnexus/gitnexus-cli/SKILL.md` |

<!-- gitnexus:end -->
