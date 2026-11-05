import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import CoverageEmbed, { TRACKER_URL, forwardKey, trackerAgrees } from './CoverageEmbed';

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

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

const SNAPSHOT = 'Coverage reflects policyengine-us 2.72.3 (main @ 4c65c82, fetched 2026-10-27). 109 Total programs';
const FALLBACK = 'Coverage reflects the bundled fallback registry. 64 Total programs';

const card = (label: string, style = '') => `<div ${style}><p>${label}</p></div>`;
/** The tracker's four cards, with the given attributes on the last one. */
const cards = (lastStyle = '') =>
  [card('Total programs'), card('Complete'), card('Partial'), card('In progress', lastStyle)].join('');
const CARD_STATES = {
  'at rest': { html: cards(), rests: true },
  'at rest under an identity matrix': { html: cards('data-transform="matrix(1, 0, 0, 1, 0, 0)"'), rests: true },
  'still fading in': { html: cards('data-opacity="0"'), rests: false },
  'nearly faded in': { html: cards('data-opacity="0.99"'), rests: false },
  'still growing': { html: cards('data-transform="matrix(0.9, 0, 0, 0.9, 0, 0)"'), rests: false },
  'missing a card': { html: [card('Total programs'), card('Complete'), card('Partial')].join(''), rests: false },
  'not drawn yet': { html: '', rests: false },
};

/** A page whose computed styles come from data attributes, since jsdom computes neither property. */
const stubPage = (innerText: string, status = 'loaded', html = cards()) => {
  const body = document.createElement('div');
  body.innerHTML = html;
  Object.defineProperty(body, 'innerText', { value: innerText });
  return {
    body,
    fonts: { status },
    defaultView: {
      getComputedStyle: (element: HTMLElement) => ({
        opacity: element.dataset.opacity ?? '1',
        transform: element.dataset.transform ?? 'none',
      }),
    },
  } as unknown as Document;
};

describe('the check that shows the frame over the still', () => {
  const TEXTS = {
    'the still’s snapshot': { text: SNAPSHOT, matches: true },
    'the fallback counts': { text: FALLBACK, matches: false },
    'another release': { text: 'Coverage reflects policyengine-us 2.95.0 (main @ abc1234). 120 Total programs', matches: false },
    'another commit of the same release': {
      text: 'Coverage reflects policyengine-us 2.72.3 (main @ abc1234, fetched 2026-11-01). 110 Total programs',
      matches: false,
    },
    'nothing yet': { text: '', matches: false },
  };

  it('passes for every page that prints the snapshot, with fonts loaded and cards at rest, and no other', () => {
    for (const [textName, { text, matches }] of Object.entries(TEXTS)) {
      for (const status of ['loaded', 'loading']) {
        for (const [cardName, { html, rests }] of Object.entries(CARD_STATES)) {
          const expected = matches && status === 'loaded' && rests;
          expect(trackerAgrees(stubPage(text, status, html)), `${textName}, ${status}, ${cardName}`).toBe(expected);
        }
      }
    }
  });

  it('holds the still for a fading ancestor of a card', () => {
    const html = `<section data-opacity="0.5">${cards()}</section>`;
    expect(trackerAgrees(stubPage(SNAPSHOT, 'loaded', html))).toBe(false);
  });

  it('keeps the still when it can’t read the page', () => {
    expect(trackerAgrees(null)).toBe(false);
    expect(trackerAgrees(undefined)).toBe(false);
  });

  it('keeps the still when the page has no window to read styles from', () => {
    const page = { ...stubPage(SNAPSHOT), defaultView: null } as unknown as Document;
    expect(trackerAgrees(page)).toBe(false);
  });
});

describe('when the frame shows', () => {
  let resize: (width: number) => void;

  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['setInterval', 'clearInterval'] });
    vi.stubGlobal(
      'ResizeObserver',
      class {
        constructor(callback: (entries: { contentRect: { width: number } }[]) => void) {
          resize = (width) => callback([{ contentRect: { width } }]);
        }
        observe() {}
        disconnect() {}
      },
    );
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  const mount = async (page: Document | null) => {
    window.history.replaceState(null, '', '/slides/appam-2026?slide=13');
    await renderEmbed();
    const frame = container.querySelector('iframe') as HTMLIFrameElement;
    setPage(frame, page);
    return frame;
  };
  const setPage = (frame: HTMLIFrameElement, page: Document | null) =>
    Object.defineProperty(frame, 'contentDocument', { value: page, configurable: true });
  const show = (width: number) => act(async () => resize(width));
  const load = (frame: HTMLIFrameElement) => act(async () => void frame.dispatchEvent(new Event('load')));
  const poll = () => act(async () => void vi.advanceTimersByTime(1200));
  const shown = (frame: HTMLIFrameElement) => frame.style.opacity === '1' && frame.style.pointerEvents === 'auto';
  const hidden = (frame: HTMLIFrameElement) => frame.style.opacity === '0' && frame.style.pointerEvents === 'none';

  it('needs the frame loaded, the slide showing and a page that agrees, in every combination', async () => {
    const pages = { agreeing: true, fallback: false, unreadable: false };
    for (const loaded of [false, true]) {
      for (const showing of [false, true]) {
        for (const [name, agrees] of Object.entries(pages)) {
          const page = name === 'agreeing' ? stubPage(SNAPSHOT) : name === 'fallback' ? stubPage(FALLBACK) : null;
          const frame = await mount(page);
          if (showing) await show(1171.5);
          if (loaded) await load(frame);
          await poll();
          const label = `loaded ${loaded}, showing ${showing}, ${name}`;
          expect(shown(frame), label).toBe(loaded && showing && agrees);
          expect(hidden(frame) || shown(frame), label).toBe(true);
          await act(async () => root.unmount());
          root = createRoot(container);
        }
      }
    }
  });

  it('waits for the slide to show even when the hidden page already agrees', async () => {
    const frame = await mount(stubPage(SNAPSHOT));
    await load(frame);
    await poll();
    expect(hidden(frame)).toBe(true);
    await show(1171.5);
    expect(hidden(frame)).toBe(true);
    await poll();
    expect(shown(frame)).toBe(true);
  });

  it('holds the still until the cards come to rest', async () => {
    const frame = await mount(stubPage(SNAPSHOT, 'loaded', cards('data-opacity="0"')));
    await show(1171.5);
    await load(frame);
    await poll();
    expect(hidden(frame)).toBe(true);
    setPage(frame, stubPage(SNAPSHOT));
    await poll();
    expect(shown(frame)).toBe(true);
  });

  it('brings the still back when the frame’s page goes away, until the check passes again', async () => {
    const frame = await mount(stubPage(SNAPSHOT));
    await show(1171.5);
    await load(frame);
    await poll();
    expect(shown(frame)).toBe(true);

    setPage(frame, stubPage(FALLBACK));
    await act(async () => void frame.contentWindow?.dispatchEvent(new Event('pagehide')));
    expect(hidden(frame)).toBe(true);
    await load(frame);
    await poll();
    expect(hidden(frame)).toBe(true);

    setPage(frame, stubPage(SNAPSHOT));
    await poll();
    expect(shown(frame)).toBe(true);
  });

  it('stays on the still across origins, where the browser denies the frame’s window and document', async () => {
    const frame = await mount(null);
    const denied = new Proxy(
      {},
      {
        get() {
          throw new DOMException('Blocked a frame with another origin', 'SecurityError');
        },
      },
    );
    Object.defineProperty(frame, 'contentWindow', { value: denied, configurable: true });
    await show(1171.5);
    await load(frame);
    await poll();
    expect(hidden(frame)).toBe(true);
  });

  it('keeps showing the frame when the slide leaves and comes back', async () => {
    const frame = await mount(stubPage(SNAPSHOT));
    await show(1171.5);
    await load(frame);
    await poll();
    await show(0);
    expect(frame.style.opacity).toBe('0');
    await show(1171.5);
    expect(shown(frame)).toBe(true);
  });
});

describe('a key pressed inside the frame', () => {
  const press = (key: string, target: HTMLElement) => {
    const event = new KeyboardEvent('keydown', { key, cancelable: true });
    Object.defineProperty(event, 'target', { value: target });
    forwardKey(event);
    return event;
  };

  it('reaches the deck from every element except a text field', () => {
    const editable = document.createElement('div');
    Object.defineProperty(editable, 'isContentEditable', { value: true });
    const targets: [HTMLElement, boolean][] = [
      [document.createElement('div'), true],
      [document.createElement('select'), true],
      [document.createElement('button'), true],
      [document.createElement('a'), true],
      [document.createElement('input'), false],
      [document.createElement('textarea'), false],
      [editable, false],
    ];
    for (const key of ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' ', 'PageDown', 'Home', 'f']) {
      for (const [target, reaches] of targets) {
        const deck = vi.fn();
        window.addEventListener('keydown', deck);
        press(key, target);
        window.removeEventListener('keydown', deck);
        expect(deck.mock.calls.length, `${key} on ${target.tagName}`).toBe(reaches ? 1 : 0);
      }
    }
  });

  it('moves the deck from the year menu, and leaves the menu the keys the deck ignores', () => {
    const deck = vi.fn((event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') event.preventDefault();
    });
    window.addEventListener('keydown', deck);
    const right = press('ArrowRight', document.createElement('select'));
    const down = press('ArrowDown', document.createElement('select'));
    window.removeEventListener('keydown', deck);
    expect(right.defaultPrevented).toBe(true);
    expect(down.defaultPrevented).toBe(false);
  });

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
