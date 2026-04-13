'use client';

import React, { useState } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const IFRAME_URL = 'https://policybench.org';

const examples = [
  {
    label: 'Policy domain',
    title: 'PolicyBench',
    desc: 'How accurately can AI compute tax liabilities, benefit eligibility, and policy impacts from legislative text?',
  },
  {
    label: 'CIO application',
    title: 'Your domain',
    desc: 'How well can AI draft a vendor risk assessment from an RFP? Summarize a compliance audit against your policies? Triage intake requests?',
  },
];

export default function PolicyBenchSlide() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Evals: measuring what AI can actually do for your mission</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-[0.9fr_1.1fr] gap-8 mt-4 h-[calc(100vh-300px)]">
        <div className="flex flex-col gap-5">
          <div className="space-y-4">
            {examples.map((ex) => (
              <div key={ex.title} className="border border-gray-200 rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{ex.label}</p>
                <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">{ex.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{ex.desc}</p>
              </div>
            ))}
          </div>

          <div className="pl-5 border-l-4 border-[var(--pe-teal)] mt-auto">
            <p className="text-base text-gray-600 leading-relaxed">
              Define <strong className="text-gray-800">what good looks like</strong> for
              the tasks your org cares about most — then benchmark AI against it.
              That&apos;s how you move from &ldquo;AI is interesting&rdquo; to
              &ldquo;AI is accountable.&rdquo;
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
