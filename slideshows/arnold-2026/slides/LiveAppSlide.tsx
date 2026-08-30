"use client";

import { type ReactNode, useState } from "react";
import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";

interface LiveAppSlideProps {
  title: string;
  url: string;
  displayUrl?: string;
  /** Side-column content (cards, notes). */
  children?: ReactNode;
  /** Grid split, defaults to narrow side / wide iframe. */
  sideWidth?: string;
}

/**
 * Live embedded app with an Expand button — the cbo-2026 AxiomDemoSlide
 * pattern. The screenshot fallback slides that follow in the deck cover the
 * no-network case.
 */
export default function LiveAppSlide({
  title,
  url,
  displayUrl,
  children,
  sideWidth = "0.62fr",
}: LiveAppSlideProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Slide>
      <SlideHeader>
        <div className="flex items-baseline justify-between">
          <SlideTitle>{title}</SlideTitle>
          {displayUrl && (
            <span className="font-mono text-lg text-pe-teal">{displayUrl}</span>
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
          <iframe
            src={url}
            title={title}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17343A]/12 via-transparent to-transparent pointer-events-none" />
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
              src={url}
              title={`${title} (expanded)`}
              className="w-full h-full border-0"
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
    </Slide>
  );
}
