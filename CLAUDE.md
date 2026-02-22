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
```

## Adding a new slideshow

1. `bun run new-slideshow my-talk "My talk title"`
2. Add slides in `slideshows/my-talk/slides/`
3. Update `slideshows/my-talk/config.ts` with slide imports
4. Register in `lib/slideshows.ts`

## Style guidelines

- **Sentence case** for all headings and UI text
- Use design system colors via CSS variables (e.g., `var(--pe-teal)`) or Tailwind classes (`text-pe-teal`)
- Never hardcode color values; use the variables defined in `globals.css`
- Accent bar uses teal-to-amber gradient
- Content cards have teal left border
