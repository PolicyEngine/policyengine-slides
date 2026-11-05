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
const topLevel = css.nodes.filter((node) => node.type !== 'comment') as ChildNode[];
const blocks = topLevel.filter((node): node is AtRule => node.type === 'atrule');
const rules = topLevel.filter((node): node is Rule => node.type === 'rule');

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

// Evaluates the only media conditions this file may use.
function matches(query: string, width: number, height: number) {
  return query.split(',').some((condition) => {
    const trimmed = condition.trim();
    const maxWidth = trimmed.match(/^\(max-width: (\d+)px\)$/);
    if (maxWidth) return width <= Number(maxWidth[1]);
    const maxHeight = trimmed.match(/^\(max-height: (\d+)px\)$/);
    if (maxHeight) return height <= Number(maxHeight[1]);
    const maxRatio = trimmed.match(/^\(max-aspect-ratio: (\d+)\/(\d+)\)$/);
    if (maxRatio) return width / height <= Number(maxRatio[1]) / Number(maxRatio[2]);
    throw new Error(`Unexpected media condition: ${trimmed}`);
  });
}

describe('deck.module.css', () => {
  it('holds its small-screen rules in one media block', () => {
    expect(blocks.map((block) => block.name)).toEqual(['media']);
  });

  it.each([
    [1440, 810, 'the PDF export'],
    [1366, 768, 'a small laptop'],
    [1280, 720, 'a 720p projector'],
    [1920, 1080, 'a 1080p projector'],
    [1024, 768, 'a 4:3 projector'],
  ])('leaves %ix%i, %s, out of that block', (width, height) => {
    expect(matches(blocks[0].params, width, height)).toBe(false);
  });

  it.each([
    [375, 812, 'a phone'],
    [320, 568, 'a small phone'],
    [812, 375, 'a phone on its side'],
    [768, 1024, 'a tablet held upright'],
  ])('puts %ix%i, %s, in that block', (width, height) => {
    expect(matches(blocks[0].params, width, height)).toBe(true);
  });

  it('applies outside that block only while the viewer shows its controls', () => {
    // A PDF export and full screen drop the controls from the page, so these rules can't reach them.
    expect(rules.map((rule) => rule.selector)).toEqual([
      "main:has(button[aria-label='Next slide']) .deck > div:last-child",
      'main:has(:global(.slide-active) .deck) > :global(.fixed) > div:first-child',
    ]);
  });

  it("moves the footer's text clear of the viewer's arrows and hides the keyboard hint", () => {
    // In a browser at 1366x768, the arrows start 208px from the right edge.
    const arrows = 208;
    const padding = declared(css, rules[0].selector, 'padding-right');
    expect(parseFloat(padding ?? '0') * 16).toBeGreaterThan(arrows);
    expect(declared(css, rules[1].selector, 'visibility')).toBe('hidden');
  });

  it('lets a chart scroll sideways, and pins its hint to the left edge', () => {
    expect(declared(blocks[0], '.chart', 'overflow-x')).toBe('auto');
    expect(declared(blocks[0], '.chart::after', 'content')).toMatch(/^'.+'$/);
    expect(declared(blocks[0], '.chart::after', 'position')).toBe('sticky');
    expect(declared(blocks[0], '.chart::after', 'left')).toBe('0');
  });

  it('keeps the phone bar below the padding at the end of each scroller', () => {
    const bar = parseFloat(declared(blocks[0], "main:has(.deck, .title) > :global(.fixed)", 'height') ?? '0');
    expect(bar).toBeGreaterThan(0);
    expect(parseFloat(declared(blocks[0], '.deck > div:first-child', 'padding-bottom') ?? '0')).toBeGreaterThan(bar);
    expect(parseFloat(declared(blocks[0], '.title > div > div:last-child', 'padding-bottom') ?? '0')).toBeGreaterThanOrEqual(bar);
  });

  it("shows each chart's swipe hint exactly where the chart outgrows the screen", () => {
    const columnPadding = 40;
    const widths = new Map<string, number>();
    blocks[0].walkDecls('min-width', (decl) => {
      const chart = (decl.parent as Rule).selector.match(/^\.(\w+Chart) svg$/)?.[1];
      if (chart) widths.set(chart, parseFloat(decl.value) * 16);
    });
    const limits = new Map<string, number>();
    blocks[0].walkAtRules('media', (media) => {
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
