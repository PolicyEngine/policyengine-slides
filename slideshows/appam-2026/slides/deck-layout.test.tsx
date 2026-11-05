import { readFileSync } from 'node:fs';
import path from 'node:path';
import postcss, { type AtRule, type ChildNode, type Container, type Rule } from 'postcss';
import { act, useMemo } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import SlideshowViewer from '@/components/core/SlideshowViewer';
import { flattenSlides, getSlideComponent } from '@/lib/types';
import { appam2026Config } from '../config';

vi.mock('next/navigation', () => ({
  useSearchParams() {
    const search = window.location.search;
    return useMemo(() => new URLSearchParams(search), [search]);
  },
}));

const css = postcss.parse(
  readFileSync(path.join(__dirname, 'deck.module.css'), 'utf8'),
);
const frameSource = readFileSync(path.join(__dirname, 'Frame.tsx'), 'utf8');
const topLevel = css.nodes.filter((node) => node.type !== 'comment') as ChildNode[];
const blocks = topLevel.filter((node): node is AtRule => node.type === 'atrule');
const rules = topLevel.filter((node): node is Rule => node.type === 'rule');
const [smallScreens, widthCaps, shortWindows, wideWindows] = blocks;

// The value one rule gives one property.
function declared(container: Container, selector: string, property: string) {
  let value: string | undefined;
  container.walkRules((rule) => {
    if (rule.selector !== selector) return;
    rule.walkDecls(property, (decl) => {
      value = decl.value;
    });
  });
  return value;
}

// Evaluates the only media conditions this file may use, in whole numbers, as a browser compares ratios.
function matches(query: string, width: number, height: number) {
  return query.split(',').some((alternative) =>
    alternative.split(' and ').every((condition) => {
      const parsed = condition.trim().match(/^\((min|max)-(width|height|aspect-ratio): (\d+)(?:px|\/(\d+))\)$/);
      if (!parsed) throw new Error(`Unexpected media condition: ${condition.trim()}`);
      const [, side, feature, first, second] = parsed;
      const [actual, limit] =
        feature === 'aspect-ratio'
          ? [width * Number(second), height * Number(first)]
          : [feature === 'width' ? width : height, Number(first)];
      return side === 'min' ? actual >= limit : actual <= limit;
    }),
  );
}

describe('deck.module.css', () => {
  it('holds its layout rules in four media blocks', () => {
    expect(blocks.map((block) => block.name)).toEqual(['media', 'media', 'media', 'media']);
  });

  it.each([
    [1440, 810, 'the PDF export'],
    [1366, 768, 'a small laptop'],
    [1280, 720, 'a 720p projector'],
    [1920, 1080, 'a 1080p projector'],
    [1280, 800, 'a 16:10 projector'],
    [1440, 900, 'a 16:10 laptop'],
    [1920, 1200, 'a large 16:10 projector'],
    [1470, 956, 'a 13-inch MacBook Air'],
    [1512, 982, 'a 14-inch MacBook Pro'],
    [1728, 1117, 'a 16-inch MacBook Pro'],
    [2560, 1440, 'a large monitor'],
    [1470, 919, 'a 13-inch MacBook Air below its notch'],
    [1512, 945, 'a 14-inch MacBook Pro below its notch'],
  ])('leaves %ix%i, %s, out of every block', (width, height) => {
    for (const block of blocks) expect(matches(block.params, width, height), block.params).toBe(false);
  });

  it.each([
    [375, 812, 'a phone'],
    [320, 568, 'a small phone'],
    [812, 375, 'a phone on its side'],
    [768, 1024, 'a tablet held upright'],
    [1024, 576, 'a low-resolution 16:9 projector'],
    [1000, 520, 'a small window'],
  ])('puts %ix%i, %s, in the small-screen block', (width, height) => {
    expect(matches(smallScreens.params, width, height)).toBe(true);
    expect(matches(widthCaps.params, width, height)).toBe(false);
  });

  it.each([
    [1024, 768, 'a 4:3 projector'],
    [1280, 960, 'a 4:3 projector'],
    [1400, 1050, 'a 4:3 projector'],
    [1600, 1200, 'a 4:3 projector'],
    [1280, 1024, 'a 5:4 monitor'],
    [1180, 820, 'a tablet on its side'],
    [1366, 1024, 'a large tablet on its side'],
    [1280, 853, 'a 3:2 laptop'],
    [1500, 1000, 'a 3:2 laptop'],
  ])('puts %ix%i, %s, in the width-capped block', (width, height) => {
    expect(matches(widthCaps.params, width, height)).toBe(true);
    expect(matches(smallScreens.params, width, height)).toBe(false);
  });

  it('never mixes the small-screen block with another, and leaves only wide screens uncapped', () => {
    const both: string[] = [];
    const uncovered: string[] = [];
    for (let width = 200; width <= 2800; width += 3) {
      for (let height = 200; height <= 2000; height += 3) {
        const small = matches(smallScreens.params, width, height);
        const capped = matches(widthCaps.params, width, height);
        const others = [widthCaps, shortWindows, wideWindows].some((block) => matches(block.params, width, height));
        if (small && others) both.push(`${width}x${height}`);
        // A sliver within 0.1% of square falls between the blocks, so it needs a window over 1000 px on each side.
        const sliver = width > height && width * 1000 < height * 1001;
        if (!small && !capped && width * 100 <= height * 153 && !sliver) uncovered.push(`${width}x${height}`);
      }
    }
    expect(both).toEqual([]);
    expect(uncovered).toEqual([]);
  });

  it.each([
    [1366, 650, 'a 1366x768 laptop under a toolbar'],
    [1280, 600, 'a 1280x720 laptop under a toolbar'],
    [1024, 694, 'a 1024x768 screen under a toolbar'],
  ])('puts %ix%i, %s, in the short-window block', (width, height) => {
    expect(matches(shortWindows.params, width, height)).toBe(true);
    expect(matches(smallScreens.params, width, height)).toBe(false);
  });

  it('closes the gap under the title in a short window', () => {
    // The largest overrun left at 1280x600 before this rule: slide 8's caption ran 24 px under the footer.
    const gap = 2.5 - parseFloat(declared(shortWindows, '.frame > div:first-child', 'margin-bottom') ?? '2.5');
    expect(gap * 16).toBeGreaterThanOrEqual(24);
  });

  it("trims the code blocks' padding in a short window", () => {
    expect(declared(shortWindows, '.deck :global(.code-block-content)', 'padding')).toBe('1rem');
  });

  it.each([
    [1536, 730, 'a 125% laptop under a toolbar'],
    [1920, 950, 'a 1080p monitor under a toolbar'],
    [2560, 1080, 'an ultrawide monitor'],
  ])('puts %ix%i, %s, in the wide-window block', (width, height) => {
    expect(matches(wideWindows.params, width, height)).toBe(true);
    expect(matches(smallScreens.params, width, height)).toBe(false);
  });

  it('holds the screenshots at their 16:9 width, so a 16:9 screen never meets the limit', () => {
    // Below 16:9 the limit can't bind either: a 1440x810 page holds 1312 px between its margins.
    const limit = parseFloat(declared(wideWindows, '.shots', 'max-width') ?? '0');
    expect((limit * 810) / 100).toBeGreaterThan(1312);
    expect((limit * 810) / 100).toBeLessThan(1320);
  });

  it('applies outside those blocks only while the viewer shows its controls', () => {
    // A PDF export and full screen drop the controls from the page, so these rules can't reach them.
    expect(rules.map((rule) => rule.selector)).toEqual([
      "main:has(button[aria-label='Next slide']) .deck > div:last-child",
      'main:has(:global(.slide-active) .deck) > :global(.fixed) > div:first-child',
      "main:has(button[aria-label='Next slide']) .deck pre",
    ]);
  });

  it("moves the footer's text clear of the viewer's arrows and hides the keyboard hint", () => {
    // In a browser at 1366x768, the arrows start 208px from the right edge.
    const arrows = 208;
    const padding = declared(css, rules[0].selector, 'padding-right');
    expect(parseFloat(padding ?? '0') * 16).toBeGreaterThan(arrows);
    expect(declared(css, rules[1].selector, 'visibility')).toBe('hidden');
  });

  it('lets code scroll in a window too small to hold it', () => {
    expect(declared(css, rules[2].selector, 'overflow-x')).toBe('auto');
  });

  it('lets a chart scroll sideways, and pins its hint to the left edge', () => {
    expect(declared(smallScreens, '.chart', 'overflow-x')).toBe('auto');
    expect(declared(smallScreens, '.chart::after', 'content')).toMatch(/^'.+'$/);
    expect(declared(smallScreens, '.chart::after', 'position')).toBe('sticky');
    expect(declared(smallScreens, '.chart::after', 'left')).toBe('0');
  });

  it('keeps the phone bar below the padding at the end of each scroller', () => {
    const bar = parseFloat(declared(smallScreens, "main:has(.deck, .title) > :global(.fixed)", 'height') ?? '0');
    expect(bar).toBeGreaterThan(0);
    expect(parseFloat(declared(smallScreens, '.deck > div:first-child', 'padding-bottom') ?? '0')).toBeGreaterThan(bar);
    expect(parseFloat(declared(smallScreens, '.title > div > div:last-child', 'padding-bottom') ?? '0')).toBeGreaterThanOrEqual(bar);
  });

  it("shows each chart's swipe hint exactly where the chart outgrows the screen", () => {
    const columnPadding = 40;
    const widths = new Map<string, number>();
    smallScreens.walkDecls('min-width', (decl) => {
      const chart = (decl.parent as Rule).selector.match(/^\.(\w+Chart) svg$/)?.[1];
      if (chart) widths.set(chart, parseFloat(decl.value) * 16);
    });
    const limits = new Map<string, number>();
    smallScreens.walkAtRules('media', (media) => {
      const limit = Number(media.params.match(/^\(max-width: (\d+)px\)$/)![1]);
      media.walkRules((rule) => {
        limits.set(rule.selector.match(/^\.(\w+Chart)::after$/)![1], limit);
      });
    });
    expect(widths.size).toBe(4);
    for (const [chart, width] of widths) {
      expect(limits.get(chart), chart).toBe(width + columnPadding);
    }
  });

  it.each([
    ['the title', '.frame h1', /clamp\(\d+px, ([\d.]+)vh, (\d+)px\)'\s*}}\s*>\s*\{title\}/],
    ['the body', '.body', /clamp\(\d+px, ([\d.]+)vh, (\d+)px\)'\s*}}\s*>\s*\{children\}/],
  ])("caps %s by width where its height-based size meets it at 3:2, under Frame's own limit", (_name, selector, pattern) => {
    const [, heightShare, largest] = frameSource.match(pattern)!;
    const value = declared(widthCaps, selector, 'font-size') ?? '';
    const [, capHeight, capWidth, capLargest] = value.match(/^min\(([\d.]+)vh, ([\d.]+)vw, (\d+)px\)$/)!;
    expect(capHeight).toBe(heightShare);
    expect(capLargest).toBe(largest);
    expect(Number(capWidth)).toBeCloseTo(Number(heightShare) / 1.5, 2);
  });
});

describe('links', () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeEach(() => {
    (globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
    window.history.replaceState(null, '', '/slides/appam-2026');
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(async () => {
    await act(async () => root.unmount());
    container.remove();
  });

  it("carry the mark the viewer's click guard reads", async () => {
    let total = 0;
    for (const slide of appam2026Config.slides) {
      const Component = getSlideComponent(slide);
      await act(async () => {
        root.render(<Component />);
      });
      const links = [...container.querySelectorAll('a')];
      total += links.length;
      for (const link of links) {
        expect(link.closest('.pointer-events-auto'), link.href).not.toBeNull();
      }
    }
    expect(total).toBeGreaterThanOrEqual(10);
  });

  describe('in the viewer', () => {
    // jsdom can't follow a link, so stop it here. The click still bubbles to the viewer.
    const stopNavigation = (event: Event) => event.preventDefault();
    const click = (element: Element) =>
      act(async () => {
        element.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
      });

    beforeEach(() => {
      document.addEventListener('click', stopNavigation, true);
      vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue(undefined);
      vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => undefined);
      vi.spyOn(HTMLMediaElement.prototype, 'load').mockImplementation(() => undefined);
    });

    afterEach(() => {
      document.removeEventListener('click', stopNavigation, true);
      vi.restoreAllMocks();
    });

    it('leave the deck where it stands on a click or a tap', async () => {
      const steps = flattenSlides(appam2026Config.slides).length;
      let total = 0;
      for (let step = 0; step < steps; step += 1) {
        window.history.replaceState(null, '', `/slides/appam-2026?slide=${step}`);
        await act(async () => {
          root.render(<SlideshowViewer key={step} config={appam2026Config} />);
        });
        const main = container.querySelector('main')!;
        expect(main.dataset.currentStep).toBe(String(step));
        for (const link of main.querySelectorAll('.slide-active a')) {
          await click(link);
          expect(main.dataset.currentStep, (link as HTMLAnchorElement).href).toBe(String(step));
          total += 1;
        }
      }
      expect(total).toBeGreaterThanOrEqual(10);
    });

    it('still lets a click on the slide itself move the deck', async () => {
      window.history.replaceState(null, '', '/slides/appam-2026?slide=1');
      await act(async () => {
        root.render(<SlideshowViewer config={appam2026Config} />);
      });
      const main = container.querySelector('main')!;
      await click(main.querySelector('.slide-active h1')!);
      expect(main.dataset.currentStep).toBe('2');
    });
  });
});
