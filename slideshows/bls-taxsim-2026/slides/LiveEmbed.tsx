'use client';

import { useState } from 'react';
import type { BlsSlideContent } from '../content';

type Embed = NonNullable<BlsSlideContent['embed']>;

/**
 * Live iframe at full width with a one-line caption, based on the
 * gettsim-2026 LiveAppSlide pattern. Clicks inside the frame stop
 * propagation so they do not advance the deck.
 */
export default function LiveEmbed({ title, embed }: { title: string; embed: Embed }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="mt-2 flex h-[calc(100vh-330px)] flex-col gap-2">
        <div
          className="relative min-h-0 flex-1 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src={embed.url}
            title={title}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(true);
            }}
            className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm transition-colors"
          >
            Expand
          </button>
        </div>
        {embed.footnote && <p className="text-sm leading-snug text-gray-500">{embed.footnote}</p>}
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
            <iframe
              src={embed.url}
              title={`${title} (expanded)`}
              className="absolute inset-0 w-full h-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
    </>
  );
}
