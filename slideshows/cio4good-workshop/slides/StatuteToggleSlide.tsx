'use client';

import React, { useState } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const statuteText = `(a) Allowance of credit.\u2014 There shall be allowed as a credit against the tax imposed by this chapter for the taxable year an amount equal to the sum of $2,000 multiplied by the number of qualifying children of the taxpayer.`;

const racCode = `ctc_amount_per_child:
  from 2018-01-01: 2000

child_tax_credit:
  imports:
    - 26/24/c#qualifying_children
  entity: TaxUnit
  from 1998-01-01:
    ctc_amount_per_child * qualifying_children`;

export default function StatuteToggleSlide() {
  const [showRac, setShowRac] = useState(false);

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Same law, two representations</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          What if every rule were machine-readable?
        </p>
      </SlideHeader>

      <div className="mt-6 flex flex-col gap-4">
        {/* Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => { e.stopPropagation(); setShowRac(false); }}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
              !showRac
                ? 'bg-[#5C3D2E] text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            26 USC &sect; 24(a)
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setShowRac(true); }}
            className={`px-4 py-2 rounded-lg text-sm font-mono font-semibold transition-colors ${
              showRac
                ? 'bg-[#5C3D2E] text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            statute/26/24/a.rac
          </button>
        </div>

        {/* Content */}
        <div
          className="rounded-2xl p-10 min-h-[20rem] flex items-center transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, #5C3D2E 0%, #3E2518 100%)' }}
        >
          {!showRac ? (
            <p className="text-2xl text-white/90 leading-relaxed font-serif italic">
              {statuteText}
            </p>
          ) : (
            <pre className="text-lg text-white/90 leading-relaxed font-mono whitespace-pre">
              {racCode}
            </pre>
          )}
        </div>

        <p className="text-center text-sm font-mono uppercase tracking-[0.2em] text-gray-400">
          Same law, two representations
        </p>
      </div>

      <div className="mt-4 pl-5 border-l-4 border-[var(--pe-teal)]">
        <p className="text-base text-gray-600 leading-relaxed">
          <strong className="text-gray-800">axiom-foundation.org</strong> &mdash;
          encoding the world&apos;s rules as open-source, machine-readable code.
          AI does the encoding; deterministic software does the computation.
        </p>
      </div>
    </Slide>
  );
}
