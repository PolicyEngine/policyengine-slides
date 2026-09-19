'use client';

import { useState, type ReactNode } from 'react';
import { LivePanel } from './BillSlides';
import { IconArrowRight, IconScale, IconTargetArrow, IconUsers } from '@tabler/icons-react';
import BasePathImage from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import { speakers } from '@/lib/speakers';

function Frame({ title, children, source }: { title: string; children: ReactNode; source?: ReactNode }) {
  return (
    <Slide fullBleed>
      <div className="absolute inset-0 flex flex-col px-14 pt-10 pb-24">
        <header className="shrink-0 mb-5">
          <h1 className="font-display text-[38px] font-bold leading-tight tracking-tight text-pe-dark">{title}</h1>
          <div className="accent-bar mt-4 w-32" />
        </header>
        <div className="min-h-0 flex-1">{children}</div>
        {source && <div className="mt-3 shrink-0 text-xs leading-relaxed text-gray-500">{source}</div>}
      </div>
    </Slide>
  );
}

const expectationsSource = (
  <a href="https://maxghenis.com/expectations" target="_blank" rel="noreferrer">
    Philadelphia Fed and ECB Surveys of Professional Forecasters; maxghenis.com/expectations
  </a>
);

export function TitleSlide() {
  return (
    <Slide fullBleed showFooter={false}>
      <div className="gradient-bg absolute inset-0 flex flex-col px-16 py-12 text-white">
        <div className="flex items-center gap-10">
          <BasePathImage src="/logos/white.svg" alt="PolicyEngine" width={280} height={80} className="h-12 w-auto" priority />
          <span className="h-10 w-px bg-white/30" aria-hidden="true" />
          <BasePathImage src="/logos/axiom-foundation-white.svg" alt="The Axiom Foundation" width={260} height={90} className="h-14 w-auto" priority />
        </div>
        <div className="my-auto py-9">
          <h1 className="max-w-5xl font-display text-[68px] font-bold leading-[1.08] tracking-tight">Law is an<br />alignment problem</h1>
          <p className="mt-7 text-3xl text-white/85">What if every bill had a forecast?</p>
        </div>
        <div className="flex items-end justify-between gap-8">
          <div className="flex items-center gap-4">
            <BasePathImage src={speakers['max-ghenis'].photo} alt="Max Ghenis" width={64} height={64} className="h-16 w-16 rounded-full object-cover border border-white/40" />
            <div><p className="text-2xl font-semibold">Max Ghenis</p><p className="mt-1 text-base text-white/70">PolicyEngine · the Axiom Foundation</p></div>
          </div>
          <div className="text-right text-sm leading-relaxed text-white/70">
            <p>The Overhang 2026</p><p>American Geophysical Union, Washington DC</p><p>September 19, 2026</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function BaselineSlide() {
  const [live, setLive] = useState(false);
  const trackerUrl = 'https://maxghenis.com/expectations/';
  return (
    <Frame title="Forecasters are less sure about next year than in 1992–2020" source={expectationsSource}>
      <div className="relative h-full">
        <button
          type="button"
          onClick={(event) => { event.stopPropagation(); setLive(!live); }}
          className="absolute right-0 -top-16 z-20 rounded-lg border border-pe-200 bg-white px-4 py-2 text-sm font-semibold text-pe-dark shadow-sm pointer-events-auto"
        >
          {live ? 'Show the chart' : 'Show the live tracker'}
        </button>
        {live ? (
          <LivePanel url={trackerUrl} title="Expectations tracker, live" />
        ) : (
          <div className="flex h-full flex-col">
        <p className="text-xl text-gray-600">Professional forecasters’ stated uncertainty about next-year US real GDP growth</p>
        <div className="mt-4 grid min-h-0 flex-1 grid-cols-[1fr_245px] items-center gap-8">
          <div className="relative h-full min-h-0">
            <BasePathImage src="/images/overhang-2026/expectations-us-ea-sd.png" alt="Pooled forecast standard deviations in the US and euro area over time, with a US spike in 2021." fill className="object-contain" priority />
          </div>
          <div className="space-y-5 border-l border-gray-200 pl-7">
            <div><p className="text-5xl font-bold text-pe-teal">1.41</p><p className="mt-1 text-base text-gray-700">2026</p></div>
            <div><p className="text-4xl font-semibold text-pe-dark">1.29</p><p className="mt-1 text-base text-gray-700">1992–2020 average</p></div>
            <div><p className="text-4xl font-semibold text-pe-amber">2.18</p><p className="mt-1 text-base text-gray-700">2021 spike</p></div>
            <p className="text-sm leading-relaxed text-gray-500">Pooled standard deviation,<br />percentage points.<br />First-quarter survey rounds.</p>
          </div>
        </div>
      </div>
    
        )}
      </div>
    </Frame>
  );
}

export function GrowthSlide() {
  return (
    <Frame title="Forecasters marked growth down, and the upper tail with it" source={
      <>{expectationsSource}<br /><a href="https://forecastingresearch.org/research/economic-effects-of-ai" target="_blank" rel="noreferrer">Karger et al. (2026), Forecasting Research Institute · forecastingresearch.org/research/economic-effects-of-ai</a></>
    }>
      <div className="flex h-full flex-col gap-4">
        <div className="grid min-h-0 flex-1 grid-cols-[1fr_270px] items-center gap-7">
          <div className="relative h-full min-h-0">
            <BasePathImage src="/images/overhang-2026/expectations-growth-density.png" alt="US next-year growth forecast distribution: the mean falls from 2.19% in 2015–19 to 1.89% in 2025–26, and probability above 4% falls from 5.6% to 4.2%." fill className="object-contain" priority />
          </div>
          <div className="space-y-6">
            <p className="text-base font-medium text-gray-600">2015–19 → 2025–26</p>
            <div><p className="text-sm text-gray-500">Mean next-year growth</p><p className="mt-1 text-3xl font-bold text-pe-dark">2.19% → 1.89%</p></div>
            <div><p className="text-sm text-gray-500">Probability of growth above 4%</p><p className="mt-1 text-3xl font-bold text-pe-teal">5.6% → 4.2%</p></div>
            <p className="border-l-4 border-pe-amber pl-3 text-sm leading-relaxed text-gray-600">First-quarter rounds. The later window covers only two survey rounds.</p>
          </div>
        </div>
        <p className="shrink-0 rounded-lg bg-pe-light px-5 py-3 text-[17px] leading-relaxed text-pe-dark">
          FRI’s AI expert forecasts imply a probability that rounds to <strong>0.0%</strong> of US growth averaging above <strong>10%</strong> a year over <strong>2025–29</strong>, and <strong>3.5%</strong> if AI progress is rapid.
        </p>
      </div>
    </Frame>
  );
}

export function BacktestSlide() {
  return (
    <Frame title="How well did they do?" source={expectationsSource}>
      <div className="flex h-full flex-col justify-center gap-9">
        <div className="flex items-center gap-9">
          <p className="shrink-0 text-[100px] font-bold leading-none tracking-tight text-pe-teal">22<span className="text-6xl font-light text-gray-400"> / 33</span></p>
          <p className="max-w-xl text-3xl leading-snug text-pe-dark">Years in which next-year US growth landed inside the pooled one-standard-deviation band.</p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {[
            ['1996–2001', 'Six straight misses'],
            ['2008–09', 'Misses'],
            ['2011', 'Miss'],
            ['2020–21', 'Misses'],
          ].map(([years, label]) => <div key={years} className="border-t-4 border-pe-amber pt-4"><p className="text-2xl font-semibold text-pe-dark">{years}</p><p className="mt-2 text-lg text-gray-500">{label}</p></div>)}
        </div>
        <p className="max-w-5xl text-3xl font-medium leading-snug text-pe-dark">If conditions change quickly, policy has to move faster than it does.</p>
      </div>
    </Frame>
  );
}

export function AlignmentSlide() {
  return (
    <Frame title="Law is an alignment problem">
      <div className="flex h-full flex-col justify-center gap-7">
        <p className="max-w-5xl text-3xl leading-snug text-pe-dark">We use laws to align collective goals with outcomes.</p>
        <div className="grid grid-cols-[1fr_36px_1fr_36px_1fr] items-center gap-4">
          {[
            { label: 'Values', detail: 'Decide what we want', Icon: IconUsers },
            { label: 'Policies', detail: 'Choose how to act', Icon: IconScale },
            { label: 'Indicators', detail: 'Check what happened', Icon: IconTargetArrow },
          ].map(({ label, detail, Icon }, i) => <div key={label} className="contents"><div className="rounded-xl border border-pe-100 bg-pe-light p-6"><Icon className="mb-4 text-pe-teal" size={36} stroke={1.5} /><h2 className="text-2xl font-bold text-pe-dark">{label}</h2><p className="mt-2 text-lg text-gray-600">{detail}</p></div>{i < 2 && <IconArrowRight className="text-pe-teal" size={30} />}</div>)}
        </div>
        <p className="max-w-5xl text-2xl leading-relaxed text-gray-700">We write laws in prose, change them slowly, and rarely score them against their goals.</p>
        <p className="border-l-4 border-pe-teal pl-5 text-2xl font-medium text-pe-dark">The substrate never decides what to value.</p>
      </div>
    </Frame>
  );
}

export function DraftingSlide() {
  return (
    <Frame title="AI already drafts bills" source={<a href="https://www.effort.news/ai-congress" target="_blank" rel="noreferrer">Effort, “Is AI writing American law?”, 16 September 2026 · effort.news/ai-congress</a>}>
      <div className="flex h-full flex-col justify-center gap-8">
        <div className="flex items-baseline gap-7"><p className="text-[88px] font-bold leading-none text-pe-teal">117 <span className="text-5xl font-light text-gray-400">/ 2,994</span></p><p className="text-4xl font-semibold text-pe-dark">3.9%</p></div>
        <p className="text-2xl leading-relaxed text-gray-700">Bills in the 119th Congress flagged by Effort’s Pangram-based AI-text detector.</p>
        <div className="grid grid-cols-2 gap-7">
          <div className="rounded-xl border border-pe-100 bg-pe-light p-6"><p className="text-5xl font-bold text-pe-teal">6.4%</p><p className="mt-3 text-xl text-pe-dark">Findings and preamble text</p></div>
          <div className="rounded-xl border border-gray-200 p-6"><p className="text-5xl font-bold text-pe-dark">0.6%</p><p className="mt-3 text-xl text-gray-600">Statutory text</p></div>
        </div>
        <p className="text-base text-gray-500">2026 Q2 · Detector classifications provide evidence of AI use; they do not establish authorship.</p>
      </div>
    </Frame>
  );
}

export function DiscussionSlide() {
  return (
    <Frame title="Where does this break?">
      <div className="flex h-full flex-col justify-center gap-12">
        <div className="grid grid-cols-3 gap-7">
          <div className="border-t-4 border-pe-teal pt-6"><h2 className="text-3xl font-bold text-pe-dark">Goodhart</h2><p className="mt-4 text-xl leading-relaxed text-gray-600">What happens when the measure becomes the target?</p></div>
          <div className="border-t-4 border-pe-teal pt-6"><h2 className="text-3xl font-bold text-pe-dark">Who sets the objectives?</h2><p className="mt-4 text-xl leading-relaxed text-gray-600">Whose goals enter the system?</p></div>
          <div className="border-t-4 border-pe-teal pt-6"><h2 className="text-3xl font-bold text-pe-dark">Legitimacy</h2><p className="mt-4 text-xl leading-relaxed text-gray-600">Who can contest the assumptions and the choices?</p></div>
        </div>
        <p className="rounded-xl bg-pe-light px-8 py-7 text-3xl font-medium text-pe-dark">Which bill should get a forecast next?</p>
      </div>
    </Frame>
  );
}

export function EndSlide() {
  return (
    <Slide fullBleed showFooter={false}>
      <div className="gradient-bg absolute inset-0 flex flex-col justify-center px-20 text-white">
        <BasePathImage src="/logos/white.svg" alt="PolicyEngine" width={280} height={80} className="absolute left-20 top-12 h-12 w-auto" />
        <h1 className="font-display text-5xl font-bold tracking-tight">What if every bill had a forecast?</h1>
        <div className="mt-10 grid grid-cols-2 gap-x-12 gap-y-7 text-2xl">
          <a href="https://maxghenis.com/expectations" target="_blank" rel="noreferrer" className="border-t border-white/25 pt-4">maxghenis.com/expectations</a>
          <a href="https://axiom.org" target="_blank" rel="noreferrer" className="border-t border-white/25 pt-4">axiom.org</a>
          <a href="https://policyengine.org" target="_blank" rel="noreferrer" className="border-t border-white/25 pt-4">policyengine.org</a>
          <a href="https://thesisinstitute.org" target="_blank" rel="noreferrer" className="border-t border-white/25 pt-4">thesisinstitute.org <span className="ml-2 text-sm text-white/65">Prototype</span></a>
        </div>
        <p className="absolute bottom-12 left-20 text-base text-white/65">Max Ghenis · The Overhang · September 2026</p>
      </div>
    </Slide>
  );
}
