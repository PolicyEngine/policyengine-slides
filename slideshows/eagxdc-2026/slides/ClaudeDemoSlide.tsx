'use client';

import React, { useState } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const IFRAME_URL = 'https://www.policyengine.org/us/claude-plugin';

const stats = [
  { value: '24', label: 'Skills' },
  { value: '21', label: 'Agents' },
  { value: '4', label: 'Commands' },
  { value: '7', label: 'Bundles' },
];

const capabilities = [
  'Model a reform from a plain-English description',
  'Analyze historical policy across program changes',
  'Build a household calculator for a specific family',
  'Generate an interactive dashboard from a prompt',
  'Write a research-quality policy brief with charts',
  'Run congressional district analyses',
];

export default function ClaudeDemoSlide() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>PolicyEngine Claude plugin: agent as the new interface</SlideTitle>
        <p className="text-lg text-gray-600 mt-1">
          From a Python package for researchers (2021), to a web app (2022),
          to a coding agent driving the simulator (2024 onward).
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[0.85fr_1.15fr] gap-7 mt-4 h-[calc(100vh-300px)]">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-4 gap-2">
            {stats.map((s) => (
              <div key={s.label} className="content-card p-3 text-center">
                <div className="text-2xl font-black text-pe-teal">{s.value}</div>
                <div className="text-[11px] text-gray-500 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="content-card p-4">
            <div className="text-xs uppercase tracking-[0.16em] font-bold text-pe-teal mb-2">
              What you can do
            </div>
            <ul className="space-y-1.5 text-sm text-gray-700">
              {capabilities.map((c) => (
                <li key={c} className="flex gap-2 items-start">
                  <span className="text-pe-teal font-bold mt-0.5">→</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pl-5 border-l-4 border-pe-teal mt-auto">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>policyengine.org/us/claude-plugin</strong> — install
              instructions, demo video, and example outputs.
            </p>
          </div>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src={IFRAME_URL}
            title="PolicyEngine Claude plugin"
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
              title="PolicyEngine Claude plugin (expanded)"
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
