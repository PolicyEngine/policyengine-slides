'use client';
import { useState } from 'react';
import FivePrimitivesSlide from '@/slideshows/iariw-2026/slides/FivePrimitivesSlide';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import BasePathImage from '@/components/core/BasePathImage';

const layers = [
  {logo:'/logos/axiom-foundation.svg', name:'the Axiom Foundation', width:1026, height:363, detail:'Encode the rules and compare their outputs.'},
  {logo:'/logos/chronicle.png', name:'Chronicle', width:732, height:160, detail:'Record official statistics with their sources.'},
  {logo:'/logos/microcosm.png', name:'Microcosm', width:608, height:84, detail:'Build populations and publish calibration error.'},
  {logo:'/logos/teal.svg', name:'PolicyEngine', width:350, height:100, detail:'Compute reforms and compare results.'},
  {logo:'/logos/thesis-institute.png', name:'Thesis · prototype', width:532, height:112, detail:'Forecast outcomes and score them as they resolve.'},
];
function RoadmapView({ title, closing }: { title: string; closing?: string }) {
  return <Slide><SlideHeader><SlideTitle>{title}</SlideTitle></SlideHeader><div className="mt-10 grid grid-cols-5 gap-4">{layers.map(layer=><div key={layer.name} className="content-card p-5"><div className="flex h-20 items-center"><BasePathImage src={layer.logo} alt={layer.name} width={layer.width} height={layer.height} className="h-auto max-h-14 w-full object-contain" /></div><p className="mt-5 text-lg leading-relaxed text-gray-600">{layer.detail}</p>{layer.name.includes('prototype') && <p className="mt-4 text-sm font-semibold text-pe-teal">Prototype</p>}</div>)}</div>{closing && <p className="mt-10 border-l-4 border-pe-teal pl-5 text-2xl font-medium text-pe-dark">{closing}</p>}</Slide>;
}

/** Callback to slide 5 before the objections: the five layers, each named, each with its check. */
export function StackRecapSlide() {
  return <RoadmapView title="Every layer of the stack exists today, each with its own check" closing="The scoreboard on the last layer ranks the other four." />;
}

export default function PrimitivesSlide() {
  const [roadmap,setRoadmap]=useState(false);
  return <div className="relative">
    {roadmap ? <RoadmapView title="Give each layer a feedback loop" /> : <FivePrimitivesSlide feedbackLoops={[
      'Check encoded rules against tests and independent outputs.',
      'Check source receipts and the timing of each release.',
      'Compare aggregates and evaluate individual records.',
      'Explain differences across models and reference calculations.',
      'Resolve forecasts and score their calibration.',
    ]} closingText="Each layer gives AI agents and human researchers a way to check their work." />}
    <button type="button" onClick={e=>{e.stopPropagation();setRoadmap(!roadmap);}} className="absolute right-16 bottom-24 z-20 rounded-lg border border-pe-200 bg-white px-4 py-2 text-sm font-semibold text-pe-dark shadow-sm">{roadmap?'Show the five needs':'Show the roadmap'}</button>
  </div>;
}
