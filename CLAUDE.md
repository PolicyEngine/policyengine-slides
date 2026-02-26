# PolicyEngine Slides

Monorepo for all PolicyEngine presentation decks.

## Stack

- **Next.js 14** + TypeScript + Tailwind CSS
- **Design tokens** from `@policyengine/design-system`
- **Fonts**: Plus Jakarta Sans (headings), Inter (body), JetBrains Mono (code)
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
bun run export <id> [output.pdf]  # Export slideshow to PDF
```

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
