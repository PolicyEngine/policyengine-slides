import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function DesignPrinciplesSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Design principles</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">These principles emerged from the evolution:</p>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-5 mt-6">
        {[
          {
            title: 'Source authority',
            icon: '\uD83D\uDCC4',
            desc: 'Collect only primary sources. Anchor parameters to legal documents\u2014statutes, regulations, state plans\u2014and use forms and benefit calculators as supporting references.',
          },
          {
            title: 'Isolation',
            icon: '\uD83D\uDD32',
            desc: 'Certain agents operate in isolation to prevent confirmation bias. When agents cannot see each other\u2019s output, mismatches reveal actual bugs rather than shared misconceptions.',
          },
          {
            title: 'Shared knowledge',
            icon: '\uD83D\uDCDA',
            desc: 'Domain expertise lives in reusable modules shared by agents throughout the workflow. No redundancy, no forgetting.',
          },
        ].map((p, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-6 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-light)] flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {i === 0 && <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>}
                {i === 1 && <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>}
                {i === 2 && <><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></>}
              </svg>
            </div>
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">{p.title}</h3>
            <p className="text-base text-gray-600 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-5 mt-5">
        {[
          {
            title: 'Orchestrator pattern',
            desc: 'The orchestrator coordinates without implementing. It invokes specialized agents, checks quality gates, and manages workflow state\u2014but never writes code itself.',
          },
          {
            title: 'Composability',
            desc: (<>Agents and skills are primitives that can be combined into different workflows. A validator agent works in <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded font-mono text-[var(--accent)]">/encode-policy</code>, <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded font-mono text-[var(--accent)]">/review-pr</code>, and <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded font-mono text-[var(--accent)]">/fix-pr</code> alike.</>),
          },
        ].map((p, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-6 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-light)] flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {i === 0 && <><circle cx="12" cy="12" r="3"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>}
                {i === 1 && <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>}
              </svg>
            </div>
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">{p.title}</h3>
            <p className="text-base text-gray-600 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}
