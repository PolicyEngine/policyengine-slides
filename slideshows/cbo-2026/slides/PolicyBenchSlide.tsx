'use client';

import React, { useState } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const IFRAME_URL = 'https://policybench.org';

export default function PolicyBenchSlide() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>AI cannot calculate taxes and benefits accurately today</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-[0.8fr_1.2fr] gap-7 mt-4 h-[calc(100vh-300px)]">
        <div className="flex flex-col gap-4">
          <div className="content-card p-5">
            <div className="slide-tag mb-3">PolicyBench.org</div>
            <p className="text-xl text-gray-800 leading-relaxed">
              Frontier models are evaluated on basic tax-and-transfer
              calculations — the building blocks of any microsimulation model.
            </p>
          </div>

          <div className="content-card p-5 text-center">
            <div className="stat-number text-6xl text-pe-teal">1 in 3</div>
            <p className="text-lg text-gray-700 mt-1">to</p>
            <div className="stat-number text-6xl text-pe-teal">1 in 7</div>
            <p className="text-base text-gray-700 leading-relaxed mt-3">
              basic calculations wrong, depending on the accuracy threshold.
            </p>
          </div>

          <div className="pl-5 border-l-4 border-pe-teal mt-auto">
            <p className="text-base text-gray-700 leading-relaxed">
              AI is impressive at code, search, and summarization. It is not a
              substitute for analyst judgment, institutional knowledge, or
              quality-control processes.
            </p>
          </div>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src={IFRAME_URL}
            title="PolicyBench"
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
              src={IFRAME_URL}
              title="PolicyBench (expanded)"
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
