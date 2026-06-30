'use client';

import { useState } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const IFRAME_URL = 'https://www.policyengine.org/us/rhode-island-ctc-calculator';

export default function RICalculatorSlide() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The same calculator the Governor&apos;s office used</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-[0.78fr_1.22fr] gap-8 h-[calc(100vh-300px)]">
        <div className="flex flex-col gap-4">
          <div className="content-card p-6">
            <div className="slide-tag mb-3">Set the design</div>
            <p className="text-lg text-gray-700 leading-snug">
              Credit amount, age cutoff, refundability, phase-out — change any lever and the results
              update.
            </p>
          </div>
          <div className="content-card p-6">
            <div className="slide-tag mb-3">See the impact</div>
            <p className="text-lg text-gray-700 leading-snug">
              Statewide cost, poverty, and who benefits — or switch to a single household and see its
              bottom line.
            </p>
          </div>
          <div className="accent-block mt-auto">
            <p className="text-base text-gray-600 leading-snug italic">
              Commissioned by the Niskanen Center, then handed to the Governor&apos;s office. Same tool,
              in your hands.
            </p>
          </div>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src={IFRAME_URL}
            title="Rhode Island CTC Calculator"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-3 right-3 z-10 flex gap-2">
            <a
              href={IFRAME_URL}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-white/90 hover:bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm transition-colors"
            >
              Open in new tab ↗
            </a>
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
            className="relative w-full h-full max-w-[95vw] max-h-[92vh] rounded-2xl overflow-hidden bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={IFRAME_URL}
              title="Rhode Island CTC Calculator (expanded)"
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
