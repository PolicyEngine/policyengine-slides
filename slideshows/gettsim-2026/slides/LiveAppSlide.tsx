'use client';

import React, { ReactNode, useState } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';

interface LiveAppSlideProps {
  title: string;
  url: string;
  displayUrl?: string;
  /**
   * Captured screenshot shown by default when provided. The embedded apps
   * can paint a blank document when framed (storage-partitioned third-party
   * context), so the live iframe only mounts when the presenter clicks
   * "Go live" — and one more click returns to the capture if the venue
   * embed misbehaves.
   */
  fallbackSrc?: string;
  /** Side-column content (cards, notes). */
  children?: ReactNode;
  /** Grid split, defaults to narrow side / wide iframe. */
  sideWidth?: string;
}

/**
 * Live embedded app with an Expand button — the cbo-2026 AxiomDemoSlide
 * pattern, plus a capture-first mode when fallbackSrc is set. The static
 * screenshot slides that follow in the deck remain the deep-dive fallback.
 */
export default function LiveAppSlide({
  title,
  url,
  displayUrl,
  fallbackSrc,
  children,
  sideWidth = '0.62fr',
}: LiveAppSlideProps) {
  const [expanded, setExpanded] = useState(false);
  const [live, setLive] = useState(!fallbackSrc);

  return (
    <Slide>
      <SlideHeader>
        <div className="flex items-baseline justify-between">
          <SlideTitle>{title}</SlideTitle>
          {displayUrl && (
            <span className="font-mono text-lg text-pe-teal">
              {displayUrl}
            </span>
          )}
        </div>
      </SlideHeader>

      <div
        className="grid gap-7 mt-4 h-[calc(100vh-300px)]"
        style={{ gridTemplateColumns: `${sideWidth} 1.38fr` }}
      >
        <div className="flex flex-col gap-4">{children}</div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {fallbackSrc && !live && (
            <Image
              src={fallbackSrc}
              alt=""
              fill
              className="object-cover object-top"
            />
          )}
          {live && (
            <iframe
              src={url}
              title={title}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#17343A]/12 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-3 right-3 z-10 flex gap-2">
            {fallbackSrc && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLive((v) => !v);
                }}
                className="bg-white/90 hover:bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm transition-colors"
              >
                {live ? 'Show capture' : 'Go live'}
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(true);
              }}
              className="bg-white/90 hover:bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm transition-colors"
            >
              Expand
            </button>
          </div>
        </div>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-[200] bg-black/60 flex items-center justify-center p-8"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(false);
          }}
        >
          <div
            className="relative w-full h-full max-w-[95vw] max-h-[90vh] rounded-2xl overflow-hidden bg-white shadow-2xl pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {fallbackSrc && !live && (
              <Image
                src={fallbackSrc}
                alt=""
                fill
                className="object-contain"
              />
            )}
            {live && (
              <iframe
                src={url}
                title={`${title} (expanded)`}
                className="absolute inset-0 w-full h-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(false);
              }}
              className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 shadow-md transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Slide>
  );
}
