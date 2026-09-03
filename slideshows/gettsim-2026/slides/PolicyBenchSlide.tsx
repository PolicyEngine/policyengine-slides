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

      <div className="grid grid-cols-[0.8fr_1.2fr] gap-7 mt-3 h-[calc(100vh-300px)]">
        <div className="flex flex-col gap-3 min-h-0">
          <div className="content-card p-4">
            <div className="slide-tag mb-2">PolicyBench.org &middot; v1.1 &middot; 2026-08-22</div>
            <p className="text-sm text-gray-800 leading-relaxed">
              32 frontier models are scored on 100 real households: basic
              tax-and-transfer calculations, the building blocks of any
              microsimulation model.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="content-card p-4 text-center">
              <div className="stat-number text-4xl text-pe-teal">1 in 9</div>
              <p className="text-sm font-semibold text-gray-800 mt-1">
                amounts wrong to the dollar
              </p>
              <p className="text-xs text-gray-500 mt-1">
                best model: 88.7% exact (GPT-5.6 Sol)
              </p>
            </div>
            <div className="content-card p-4 text-center">
              <div className="stat-number text-4xl text-pe-teal">&gt;1 in 3</div>
              <p className="text-sm font-semibold text-gray-800 mt-1">
                amounts wrong
              </p>
              <p className="text-xs text-gray-500 mt-1">
                weakest model: 62.3% exact
              </p>
            </div>
          </div>

          <div
            className="content-card p-3"
            style={{ borderLeftColor: 'var(--pe-amber)' }}
          >
            <div className="slide-tag mb-1" style={{ color: 'var(--pe-amber)' }}>
              SNAP
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Where the family is owed benefits, models mostly answer $0. None
              gets more than 1 in 20 right.
            </p>
          </div>

          <div
            className="rounded-2xl px-6 py-4 text-white mt-auto"
            style={{
              background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)',
            }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-pe-teal mb-2">
              The takeaway
            </p>
            <p className="text-base leading-relaxed font-light">
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
