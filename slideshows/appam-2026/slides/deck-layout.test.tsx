import { readFileSync } from 'node:fs';
import path from 'node:path';
import postcss, { type AtRule, type ChildNode, type Rule } from 'postcss';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { getSlideComponent } from '@/lib/types';
import { appam2026Config } from '../config';

const css = postcss.parse(
  readFileSync(path.join(__dirname, 'deck.module.css'), 'utf8'),
);
const topLevel = css.nodes.filter((node) => node.type !== 'comment') as ChildNode[];
const blocks = topLevel.filter((node): node is AtRule => node.type === 'atrule');
const rules = topLevel.filter((node): node is Rule => node.type === 'rule');

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

  it('never also move the deck on a click or a tap', async () => {
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
});
