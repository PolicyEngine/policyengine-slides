'use client';

import { useEffect, useRef, useState } from 'react';
import Image from '@/components/core/BasePathImage';
import { isExportMode } from '@/lib/slide-url';

export const TRACKER_URL = 'https://www.policyengine.org/us/model/rules/coverage';

const STILL = { width: 2343, height: 721 };
/** The frame lays the tracker out at the width of the still's capture. */
const PAGE_WIDTH = 1720;
/**
 * The part of the page the still shows, in the page's pixels. The crop starts
 * past the site's header and sidebar and stops at the tracker's right edge.
 */
const CROP = { left: 404.5, top: 105.5, width: STILL.width / 2, height: STILL.height / 2 };
/**
 * The snapshot line the still shows. The tracker's fallback registry prints
 * other counts under another line, and a loading or error page prints neither,
 * so the still stays until the tracker agrees with it.
 */
const TRACKER_TEXT = 'Coverage reflects policyengine-us 2.72.3 (main @ 4c65c82';
/** The labels on the still's four count cards, which the tracker fades in. */
const COUNT_LABELS = ['Total programs', 'Complete', 'Partial', 'In progress'];
const IDENTITY = 'matrix(1, 0, 0, 1, 0, 0)';

/** Whether an element and everything around it have reached full opacity and size. */
function atRest(element: Element, view: Window) {
  for (let node: Element | null = element; node; node = node.parentElement) {
    const { opacity, transform } = view.getComputedStyle(node);
    if (Number(opacity) < 1 || (transform !== 'none' && transform !== IDENTITY)) return false;
  }
  return true;
}

/** Whether the tracker has finished drawing the four count cards the still shows. */
function countsAtRest(page: Document) {
  const view = page.defaultView;
  if (!view) return false;
  const leaves = [...page.body.querySelectorAll('*')].filter((element) => element.children.length === 0);
  return COUNT_LABELS.every((label) => {
    const card = leaves.find((leaf) => leaf.textContent?.trim() === label);
    return Boolean(card) && atRest(card as Element, view);
  });
}

/**
 * Whether the page in the frame prints the still's snapshot, with no font still
 * loading and its count cards at rest.
 */
export function trackerAgrees(page: Document | null | undefined) {
  if (!page?.body?.innerText?.includes(TRACKER_TEXT)) return false;
  if ((page.fonts?.status ?? 'loaded') !== 'loaded') return false;
  return countsAtRest(page);
}

/** Only a text field keeps the arrows, so the year menu still lets them drive the deck. */
const isTyping = (target: EventTarget | null) => {
  const element = target as HTMLElement | null;
  return Boolean(element?.isContentEditable) || ['INPUT', 'TEXTAREA'].includes(element?.tagName ?? '');
};

/** Hands a key pressed inside the frame to the deck, unless the key is typing. */
export function forwardKey(event: KeyboardEvent) {
  if (isTyping(event.target)) return;
  const copy = new KeyboardEvent('keydown', { key: event.key, code: event.code, bubbles: true, cancelable: true });
  if (!window.dispatchEvent(copy)) event.preventDefault();
}

/**
 * The tracker, live on the slide, over a still of the same crop. The still
 * shows until the tracker prints the still's snapshot and its count cards come
 * to rest, and it stays if they never do. It stays for good on a branch preview,
 * where a cross-origin frame's document reads as null. Clicks and scrolling go
 * to the tracker, and arrow keys still drive the deck after a click in the
 * frame, unless the click lands in a text field.
 */
export default function CoverageEmbed({ alt }: { alt: string }) {
  const box = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const [boxWidth, setBoxWidth] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [ready, setReady] = useState(false);
  const exporting = isExportMode(new URLSearchParams(window.location.search));

  useEffect(() => {
    if (exporting || !box.current || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(([entry]) => setBoxWidth(entry.contentRect.width));
    observer.observe(box.current);
    return () => observer.disconnect();
  }, [exporting]);

  // A hidden frame's cards read as at rest before they fade in, so the check waits for the slide to show.
  const visible = boxWidth > 0;
  useEffect(() => {
    if (!loaded || ready || !visible) return;
    const timer = setInterval(() => {
      if (trackerAgrees(frame.current?.contentDocument)) setReady(true);
    }, 400);
    return () => clearInterval(timer);
  }, [loaded, ready, visible]);

  const handleLoad = () => {
    setLoaded(true);
    try {
      const page = frame.current?.contentWindow;
      page?.addEventListener('keydown', forwardKey);
      // A reload prints the fallback counts first, so the still returns until the check passes again.
      page?.addEventListener('pagehide', () => setReady(false));
    } catch {
      // A cross-origin frame, on a branch preview.
    }
  };

  return (
    <div ref={box} className="pointer-events-auto content-card relative overflow-hidden border border-gray-200">
      <Image
        src="/images/appam-2026/model-coverage.png"
        alt={alt}
        width={STILL.width}
        height={STILL.height}
        loading="eager"
        className="block h-auto w-full"
      />
      {!exporting && (
        <iframe
          ref={frame}
          src={TRACKER_URL}
          title="PolicyEngine’s coverage tracker, live"
          onLoad={handleLoad}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: PAGE_WIDTH,
            height: CROP.top + CROP.height,
            border: 0,
            transformOrigin: '0 0',
            transform: `scale(${boxWidth / CROP.width}) translate(${-CROP.left}px, ${-CROP.top}px)`,
            opacity: ready && visible ? 1 : 0,
            pointerEvents: ready ? 'auto' : 'none',
          }}
        />
      )}
    </div>
  );
}
