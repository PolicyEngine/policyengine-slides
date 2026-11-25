import { act, useMemo, useSyncExternalStore } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import SlideshowViewer from '@/components/core/SlideshowViewer';
import type { SlideshowConfig } from '@/lib/types';
import { WALKTHROUGH_BUILDS } from '../builds';
import { walkthrough } from '../text';
import EncoderWalkthroughSlide, { ANNOUNCE_MS } from './EncoderWalkthroughSlide';

// Next's app router mirrors window.history.replaceState into useSearchParams; reproduce that, so the viewer sees its
// own URL writes as it does in the browser.
const locationStore = vi.hoisted(() => {
  const listeners = new Set<() => void>();
  return {
    subscribe(listener: () => void) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    notify() {
      listeners.forEach((listener) => listener());
    },
  };
});

vi.mock('next/navigation', () => ({
  useSearchParams() {
    const search = useSyncExternalStore(locationStore.subscribe, () => window.location.search);
    return useMemo(() => new URLSearchParams(search), [search]);
  },
}));

const Blank = () => null;

// A blank slide, then the walkthrough: the walkthrough mounts as a neighbour before the viewer reaches it.
const deck: SlideshowConfig = {
  id: 'walkthrough-test',
  title: 'Walkthrough test',
  description: 'The walkthrough slide in a mounted viewer',
  date: '2026-11-23',
  slides: [Blank, { component: EncoderWalkthroughSlide, builds: WALKTHROUGH_BUILDS }],
};

const originalReplaceState = window.history.replaceState;
let container: HTMLDivElement;
let root: Root;

const region = () => container.querySelector('[aria-live="polite"]');
const heading = () => region()?.querySelector('h2')?.textContent ?? null;
const body = () => region()?.querySelector('p')?.textContent ?? null;
const figure = () => container.querySelector('[data-walkthrough-figure]')?.getAttribute('data-walkthrough-figure') ?? null;

async function press(key: string) {
  await act(async () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key }));
  });
}

async function wait(ms: number) {
  await act(async () => {
    vi.advanceTimersByTime(ms);
  });
}

beforeEach(async () => {
  (globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
  vi.useFakeTimers();
  vi.stubGlobal(
    'ResizeObserver',
    class {
      observe() {}
      disconnect() {}
    },
  );
  window.history.replaceState = function (...args) {
    originalReplaceState.apply(window.history, args);
    locationStore.notify();
  };
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
  originalReplaceState.call(window.history, null, '', '/slides/walkthrough-test');
  await act(async () => {
    root.render(<SlideshowViewer config={deck} />);
  });
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  window.history.replaceState = originalReplaceState;
  vi.unstubAllGlobals();
  vi.useRealTimers();
});

describe('the walkthrough’s live region in a mounted viewer', () => {
  it('is in the page, polite and empty, before the viewer reaches the slide', async () => {
    await wait(ANNOUNCE_MS * 4);
    expect(region()).not.toBeNull();
    expect(region()?.getAttribute('aria-atomic')).toBe('true');
    expect(heading()).toBe('');
    expect(body()).toBe('');
  });

  it('writes the first caption after the slide comes up, not with it', async () => {
    await press('ArrowRight');
    expect(heading()).toBe('');
    await wait(ANNOUNCE_MS);
    expect(heading()).toBe(walkthrough.steps[0].title);
    expect(body()).toBe(walkthrough.steps[0].about);
  });

  it('writes each build’s caption as the viewer steps through the eight builds', async () => {
    await press('ArrowRight');
    for (const [i, step] of walkthrough.steps.entries()) {
      if (i > 0) await press('ArrowRight');
      await wait(ANNOUNCE_MS);
      expect(region()?.getAttribute('data-walkthrough-caption')).toBe(String(i + 1));
      expect(heading()).toBe(step.title);
      expect(body()).toBe(step.about);
      expect(figure()).toBe(step.figure ?? null);
    }
  });

  it('empties the region when the viewer leaves the slide, and fills it again on return', async () => {
    await press('ArrowRight');
    await wait(ANNOUNCE_MS);
    expect(heading()).toBe(walkthrough.steps[0].title);
    await press('ArrowLeft');
    expect(heading()).toBe('');
    await press('ArrowRight');
    await wait(ANNOUNCE_MS);
    expect(heading()).toBe(walkthrough.steps[0].title);
  });

  it('keeps the frame and the figure out of the accessibility tree', async () => {
    await press('ArrowRight');
    await wait(ANNOUNCE_MS);
    expect(container.querySelector('iframe')?.getAttribute('aria-hidden')).toBe('true');
    for (let i = 1; i < 4; i += 1) await press('ArrowRight');
    await wait(ANNOUNCE_MS);
    expect(figure()).toBe('gates');
    expect(container.querySelector('[data-walkthrough-figure]')?.getAttribute('aria-hidden')).toBe('true');
  });
});
