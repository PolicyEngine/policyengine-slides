import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import CoverageEmbed, { TRACKER_URL, forwardKey, trackerAgrees } from './CoverageEmbed';

let container: HTMLDivElement;
let root: Root;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(async () => {
  await act(async () => root.unmount());
  container.remove();
  window.history.replaceState(null, '', '/');
});

const renderEmbed = () => act(async () => root.render(<CoverageEmbed alt="The tracker" />));

describe('the coverage tracker on the rules slide', () => {
  it('loads the live tracker over its still', async () => {
    window.history.replaceState(null, '', '/slides/appam-2026?slide=13');
    await renderEmbed();
    expect(container.querySelector('iframe')?.getAttribute('src')).toBe(TRACKER_URL);
    expect(container.querySelector('img')?.getAttribute('alt')).toBe('The tracker');
  });

  it('keeps the frame hidden until the tracker renders', async () => {
    window.history.replaceState(null, '', '/slides/appam-2026?slide=13');
    await renderEmbed();
    expect(container.querySelector('iframe')?.style.opacity).toBe('0');
    expect(container.querySelector('iframe')?.style.pointerEvents).toBe('none');
  });

  it('prints only the still in an export', async () => {
    window.history.replaceState(null, '', '/slides/appam-2026?slide=11&export=1');
    await renderEmbed();
    expect(container.querySelector('iframe')).toBeNull();
    expect(container.querySelector('img')).not.toBeNull();
  });
});

describe('the check that shows the frame over the still', () => {
  const page = (innerText: string, status = 'loaded') =>
    ({ body: { innerText }, fonts: { status } }) as unknown as Document;
  const snapshot = 'Coverage reflects policyengine-us 2.72.3 (main @ 4c65c82, fetched 2026-10-27). 109 Total programs';

  it('keeps the still while the tracker prints its fallback counts', () => {
    expect(trackerAgrees(page('Coverage reflects the bundled fallback registry. 64 Total programs'))).toBe(false);
  });

  it('keeps the still when the tracker moves to another snapshot', () => {
    expect(trackerAgrees(page('Coverage reflects policyengine-us 2.95.0 (main @ abc1234). 120 Total programs'))).toBe(false);
  });

  it('keeps the still on an empty or unreadable page', () => {
    expect(trackerAgrees(page(''))).toBe(false);
    expect(trackerAgrees(null)).toBe(false);
    expect(trackerAgrees(undefined)).toBe(false);
  });

  it('keeps the still while the page loads its fonts', () => {
    expect(trackerAgrees(page(snapshot, 'loading'))).toBe(false);
  });

  it('shows the frame once the tracker matches the still', () => {
    expect(trackerAgrees(page(snapshot))).toBe(true);
  });
});

describe('a key pressed inside the frame', () => {
  const press = (key: string, target: HTMLElement) => {
    const event = new KeyboardEvent('keydown', { key, cancelable: true });
    Object.defineProperty(event, 'target', { value: target });
    forwardKey(event);
    return event;
  };

  it('reaches the deck, and the frame leaves a key the deck uses alone', () => {
    const deck = vi.fn((event: KeyboardEvent) => event.preventDefault());
    window.addEventListener('keydown', deck);
    const event = press('ArrowRight', document.createElement('div'));
    window.removeEventListener('keydown', deck);
    expect(deck).toHaveBeenCalledOnce();
    expect(deck.mock.calls[0][0].key).toBe('ArrowRight');
    expect(event.defaultPrevented).toBe(true);
  });

  it('leaves a key the deck ignores to the frame', () => {
    const deck = vi.fn();
    window.addEventListener('keydown', deck);
    const event = press('ArrowDown', document.createElement('div'));
    window.removeEventListener('keydown', deck);
    expect(deck).toHaveBeenCalledOnce();
    expect(event.defaultPrevented).toBe(false);
  });

  it('stays in the search box while someone types there', () => {
    const deck = vi.fn();
    window.addEventListener('keydown', deck);
    const event = press('ArrowRight', document.createElement('input'));
    window.removeEventListener('keydown', deck);
    expect(deck).not.toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(false);
  });
});
