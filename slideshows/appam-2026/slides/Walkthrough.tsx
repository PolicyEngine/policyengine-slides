'use client';

import { useEffect, useRef, useState } from 'react';
import { resolveImageSrc } from '@/lib/base-path-image';
import { isExportMode } from '@/lib/slide-url';
import styles from './deck.module.css';

const SOURCE = resolveImageSrc(
  '/videos/appam-2026/walkthrough.mp4',
  process.env.NEXT_PUBLIC_BASE_PATH ?? '',
);

/**
 * Plays the screen recording over its slide, above the footer. The slide stays on
 * screen until the first frame plays, so a slow or failed load leaves its screenshots
 * in place. The element mounts with the slide before it, so the file has loaded by the
 * time the talk reaches it, and a PDF export never loads it.
 */
export default function Walkthrough({ play }: { play: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = video.current;
    if (!play || !element) return;
    element.currentTime = 0;
    element.play().catch(() => setShown(false));
    return () => {
      element.pause();
      setShown(false);
    };
  }, [play]);

  if (isExportMode(new URLSearchParams(window.location.search))) return null;

  return (
    <div
      className={`absolute inset-x-0 top-0 bottom-20 z-10 bg-white ${styles.walkthrough}`}
      style={{ visibility: shown ? 'visible' : 'hidden' }}
    >
      <video
        ref={video}
        className="h-full w-full object-contain"
        src={SOURCE}
        muted
        playsInline
        preload="auto"
        aria-label="We enter a Massachusetts household in CliffWatch and read its chart, then set the Massachusetts child and family credit to $880 in Build."
        onPlaying={(event) => setShown(!event.currentTarget.paused)}
        onError={() => setShown(false)}
      />
    </div>
  );
}
