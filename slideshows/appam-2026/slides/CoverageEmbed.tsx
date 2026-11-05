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
/** Any text on the rendered tracker, to tell it from a loading or error page. */
const TRACKER_TEXT = 'Total programs';

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
 * shows until the tracker renders, and stays if it never does. Clicks and
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

  useEffect(() => {
    if (!loaded || ready) return;
    const sameOrigin = new URL(TRACKER_URL).origin === window.location.origin;
    const timer = setInterval(() => {
      const text = frame.current?.contentDocument?.body?.innerText ?? '';
      if (!sameOrigin || text.includes(TRACKER_TEXT)) setReady(true);
    }, 400);
    return () => clearInterval(timer);
  }, [loaded, ready]);

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
            opacity: ready && boxWidth > 0 ? 1 : 0,
            pointerEvents: ready ? 'auto' : 'none',
          }}
        />
      )}
    </div>
  );
}
