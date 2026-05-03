'use client';

import React, { useState } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const IFRAME_URL = 'https://www.policyengine.org/us/cliff-watch';

const points = [
  {
    label: 'The pattern',
    body: 'Public policy regularly produces outcomes nobody designed for and few defend on the merits. Benefit cliffs are one well-documented instance.',
  },
  {
    label: 'Cliffs as a case',
    body: 'Marginal tax-and-transfer cliffs by household type and state. Phase-outs stack across programs and push effective marginal rates above 100% for working families.',
  },
  {
    label: 'Cross-partisan agreement, persistent failure',
    body: 'Atlanta Fed builds CLIFF tools, used by state workforce agencies. Niskanen designs cliff-aware CTC reforms. Across the spectrum, almost no one defends them. They persist anyway.',
  },
];

export default function CliffWatchDemoSlide() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Evidence of misaligned public policy</SlideTitle>
        <p className="text-lg text-gray-600 mt-1">
          Cliffs are one instance — nobody wants them, every reform proposal
          targets them, and they persist anyway.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[0.85fr_1.15fr] gap-7 mt-4 h-[calc(100vh-300px)]">
        <div className="flex flex-col gap-4">
          {points.map((p) => (
            <div
              key={p.label}
              className="content-card p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-pe-teal mb-1">
                {p.label}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">{p.body}</p>
            </div>
          ))}
          <div className="pl-5 border-l-4 border-pe-teal mt-auto">
            <p className="text-base text-gray-700 leading-relaxed">
              <strong>policyengine.org/us/cliff-watch</strong> — opens in a
              new tab during the talk for live exploration.
            </p>
            <p className="text-sm text-gray-500 italic mt-2">
              Suggested scenario: DC, single parent, kids ages 3 and 6, sweep
              wage income $0–80K. Combined marginal tax rate exceeds 100% in
              the $25–45K band as TANF, SNAP, Medicaid→ACA, and childcare
              subsidy cliffs stack.
            </p>
          </div>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src={IFRAME_URL}
            title="Cliff Watch"
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
              title="Cliff Watch (expanded)"
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
