'use client';

import React, { useState } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const IFRAME_URL = 'https://farness.ai/markets';

export default function MarketsMockSlide() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>A mockup of what this could look like</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-[0.7fr_1.3fr] gap-7 mt-4 h-[calc(100vh-300px)]">
        <div className="flex flex-col gap-4">
          <div className="content-card p-5">
            <div className="slide-tag mb-3">Conditional forecast markets</div>
            <p className="text-base text-gray-800 leading-relaxed">
              Every cell is a question of the form{' '}
              <span className="font-mono">
                given policy state X, what is outcome Y?
              </span>{' '}
              Quoted by AI agents calling microsim, structural models, and
              published baselines. Each quote carries calibrated uncertainty
              and an audit trail of the tool calls behind it.
            </p>
          </div>

          <div className="content-card p-5">
            <div className="slide-tag mb-3">The discipline</div>
            <p className="text-base text-gray-700 leading-relaxed">
              Every prediction resolves against reality on publication. The
              track record is public. Different institutions&apos; models
              compete openly &mdash; and improve where they need to.
            </p>
          </div>

          <div className="pl-5 border-l-4 border-pe-teal mt-auto">
            <p className="text-sm text-gray-700 leading-relaxed italic">
              Not a product. A sketch of the shape that becomes possible
              when the apparatus is in place.
            </p>
          </div>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src={IFRAME_URL}
            title="Conditional forecast markets mockup"
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
              title="Conditional forecast markets mockup (expanded)"
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
