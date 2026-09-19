'use client';

import { useState } from 'react';
import Slide from '@/components/core/Slide';
import { LivePanel } from './BillSlides';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { IconArrowRight, IconChartDots, IconFileText, IconWorld } from '@tabler/icons-react';

// Adapted from the IARIW question sequence; the prompts carry across audiences.
export function WhatIfEveryBillSlide() {
  return <Slide><SlideHeader><SlideTitle>What if every bill had a score?</SlideTitle></SlideHeader>
    <div className="mt-10 grid grid-cols-[0.8fr_1.2fr] gap-12 items-center">
      <div className="content-card p-10"><IconFileText size={76} stroke={1.25} className="text-pe-teal" /><p className="mt-7 text-4xl font-bold text-pe-dark">Every bill</p><p className="mt-3 text-xl text-gray-500">A proposal we can examine</p></div>
      <div className="space-y-7"><p className="text-3xl leading-snug text-pe-dark">Before we vote, estimate what the bill would change.</p><p className="text-2xl leading-relaxed text-gray-600">Publish the assumptions, the budget effects, and the uncertainty beside the text.</p><p className="border-l-4 border-pe-teal pl-5 text-xl text-gray-700">A score gives people a claim they can question.</p></div>
    </div></Slide>;
}

export function WhatIfEverySeriesSlide() {
  return <Slide><SlideHeader><SlideTitle>What if every outcome had an estimate?</SlideTitle></SlideHeader>
    <div className="mt-10 grid grid-cols-2 gap-10 items-center">
      <div className="space-y-7"><IconChartDots size={64} stroke={1.25} className="text-pe-teal" /><p className="text-3xl leading-snug text-pe-dark">Policy moves lives as well as budgets.</p><p className="text-2xl leading-relaxed text-gray-600">Connect each goal to an observable outcome and a forecast that can resolve.</p></div>
      <div className="space-y-3">{['Employment by industry and place', 'Income by source and percentile', 'Program participation by household type', 'Prices, wages, health, and housing'].map(text=><div key={text} className="content-card p-5 text-xl text-gray-700">{text}</div>)}</div>
    </div></Slide>;
}

export function CrossScaleSlide() {
  return <Slide><SlideHeader><SlideTitle>What if you cross them?</SlideTitle></SlideHeader>
    <div className="mt-10 space-y-8"><div className="flex items-center justify-between rounded-xl bg-pe-light p-8 text-3xl font-semibold text-pe-dark"><span>Bills</span><IconArrowRight className="text-pe-teal" /><span>Outcomes</span><IconArrowRight className="text-pe-teal" /><span>Forecasts</span><IconWorld size={42} stroke={1.25} className="text-pe-teal" /></div>
      <p className="max-w-5xl text-3xl leading-snug text-pe-dark">Which outcomes deserve estimates? Which need wider intervals? Where is the model out of its domain?</p>
      <p className="max-w-5xl border-l-4 border-pe-teal pl-6 text-2xl leading-relaxed text-gray-600">AI can help route questions, check assumptions, and surface cases that need judgment.</p>
    </div></Slide>;
}

// Adapted to remove institutional claims that do not apply across the stack.
export function HowWeGetThereSlide() {
  return <Slide><SlideHeader><SlideTitle>How do we get there?</SlideTitle></SlideHeader>
    <p className="mt-8 text-2xl text-gray-700">Build the apparatus, then equip AI to use it.</p>
    <div className="mt-7 grid grid-cols-2 gap-7"><div className="content-card p-8"><h2 className="text-3xl font-bold text-pe-dark">Use AI to build the apparatus</h2><p className="mt-5 text-xl leading-relaxed text-gray-600">Encode rules, assemble data, and build tests. Compare outputs against independent sources and publish the gaps.</p></div><div className="content-card p-8" style={{borderLeftColor:'var(--pe-amber)'}}><h2 className="text-3xl font-bold text-pe-dark">Equip AI to make projections</h2><p className="mt-5 text-xl leading-relaxed text-gray-600">Call the models, integrate baselines, and propagate uncertainty. Score forecasts when outcomes arrive.</p></div></div>
  </Slide>;
}

export function PolicyBenchSlide() {
  const [live, setLive] = useState(false);
  return <Slide><SlideHeader><SlideTitle>Without tools, the best model gets 89% of household answers right</SlideTitle></SlideHeader>
    <button
      type="button"
      onClick={(event) => { event.stopPropagation(); setLive(!live); }}
      className="absolute right-16 top-12 z-20 rounded-lg border border-pe-200 bg-white px-4 py-2 text-sm font-semibold text-pe-dark shadow-sm pointer-events-auto"
    >
      {live ? 'Show the numbers' : 'Show the live board'}
    </button>
    {live ? (
      <div className="mt-6 h-[520px]"><LivePanel url="https://policybench.org" title="PolicyBench leaderboard, live" /></div>
    ) : (<>
    <p className="mt-6 rounded-lg bg-pe-light px-6 py-4 text-2xl font-semibold text-pe-dark">Models answer without tools: no calculator, search, or PolicyEngine.</p>
    <div className="mt-6 grid grid-cols-3 gap-5"><div className="content-card p-6"><p className="text-6xl font-bold text-pe-teal">89.2%</p><p className="mt-3 text-lg text-gray-700">Best exact accuracy<br />GPT-5.6 Sol</p></div><div className="content-card p-6"><p className="text-6xl font-bold text-pe-dark">62.6%</p><p className="mt-3 text-lg text-gray-700">Lowest exact accuracy<br />GPT-5.4 nano</p></div><div className="content-card p-6"><p className="text-6xl font-bold text-pe-dark">39</p><p className="mt-3 text-lg text-gray-700">Models tested on<br />100 households</p></div></div>
    <p className="mt-6 text-xl text-gray-600">The answer key is PolicyEngine’s own output. What changes when a model can call it?</p>
    <p className="mt-4 text-sm text-gray-500">Exact: amounts within $1; eligibility matches exactly. Weighted across targets.</p>
    <p className="mt-3 text-xs text-gray-500"><a href="https://policybench.org" target="_blank" rel="noreferrer">policybench.org · v1.1, 5 September 2026 snapshot</a> · <a href="https://github.com/PolicyEngine/policybench" target="_blank" rel="noreferrer">Methodology: PolicyEngine/policybench</a> · checked 19 September 2026</p>
  
    </>)}
  </Slide>;
}
