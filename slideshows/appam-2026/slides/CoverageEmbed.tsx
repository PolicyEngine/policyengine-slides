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
const TRACKER_TEXT = 'Coverage reflects policyengine-us 2.72.3';

/** Whether the page in the frame shows the still's snapshot in its own fonts. */
export function trackerAgrees(page: Document | null | undefined) {
  if (!page?.body?.innerText?.includes(TRACKER_TEXT)) return false;
  return (page.fonts?.status ?? 'loaded') === 'loaded';
}

const isTyping = (target: EventTarget | null) => {
  const element = target as HTMLElement | null;
  return Boolean(element?.isContentEditable) || ['INPUT', 'TEXTAREA', 'SELECT'].includes(element?.tagName ?? '');
};

/** Hands a key pressed inside the frame to the deck, unless the key is typing. */
export function forwardKey(event: KeyboardEvent) {
  if (isTyping(event.target)) return;
  const copy = new KeyboardEvent('keydown', { key: event.key, code: event.code, bubbles: true, cancelable: true });
  if (!window.dispatchEvent(copy)) event.preventDefault();
}

/**
 * The tracker, live on the slide, over a still of the same crop. The still
 * shows until the tracker prints the still's snapshot, and stays if it never does. Clicks and
 * scrolling go to the tracker. Arrow keys drive the deck after a click in the
 * frame too, because the deck and the tracker share an origin in production;
 * on a branch preview they stay with the frame until the slide is clicked.
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

  // A hidden frame starts no font loads, so the check waits for the slide to show.
  const visible = boxWidth > 0;
  useEffect(() => {
    if (!loaded || ready || !visible) return;
    const sameOrigin = new URL(TRACKER_URL).origin === window.location.origin;
    const timer = setInterval(() => {
      if (!sameOrigin || trackerAgrees(frame.current?.contentDocument)) setReady(true);
    }, 400);
    return () => clearInterval(timer);
  }, [loaded, ready, visible]);

  const handleLoad = () => {
    setLoaded(true);
    try {
      frame.current?.contentWindow?.addEventListener('keydown', forwardKey);
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
