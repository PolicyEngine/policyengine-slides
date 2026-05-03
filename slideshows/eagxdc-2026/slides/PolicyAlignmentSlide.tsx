import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { Kicker } from './WorkshopComponents';

const evidence = [
  {
    label: 'Federal Reserve',
    body: 'The Atlanta Fed CLIFF tools, used by state workforce agencies in Colorado and New Mexico, exist precisely to help workers see and avoid benefit cliffs.',
  },
  {
    label: 'Right-of-center policy',
    body: 'Niskanen Center used PolicyEngine to design a CTC expansion that cuts child poverty 31% while reducing marriage penalties and cliffs.',
  },
  {
    label: 'Researchers across the spectrum',
    body: 'Scott Winship (AEI), Niskanen, ITEP, and Tax Policy Center all publish reform proposals that explicitly aim to flatten cliffs.',
  },
];

const stages = [
  'Interpret the system — show the cliffs households are actually facing.',
  'Align the system — change the parameters so cliffs disappear.',
  'Re-evaluate — measure who gains, who loses, and at what cost.',
];

export default function PolicyAlignmentSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Public policy has its own alignment problem</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Researchers, advocates, and government agencies broadly agree
          benefit cliffs shouldn&apos;t exist. The cliffs persist anyway.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[1fr_1fr] gap-9 mt-7">
        <div>
          <Kicker>Alignment loop for policy</Kicker>
          <p className="text-2xl text-pe-dark font-semibold leading-snug mt-3 mb-7">
            Mechanistic interpretability for the tax-and-transfer system.
          </p>
          <div className="space-y-4">
            {stages.map((s, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-lg bg-pe-light text-pe-teal flex items-center justify-center font-black text-lg shrink-0">
                  {i + 1}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed pt-1.5">{s}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm uppercase tracking-[0.16em] font-bold text-gray-500 mb-1">
            Cross-partisan agreement, persistent failure
          </div>
          {evidence.map((e) => (
            <div key={e.label} className="content-card p-4">
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-pe-teal mb-1">
                {e.label}
              </div>
              <p className="text-base text-gray-700 leading-snug">{e.body}</p>
            </div>
          ))}
          <div className="accent-block">
            <p className="text-base text-gray-700 leading-relaxed">
              The values are aligned. The mechanism people are actually
              optimizing — eligibility tests, phase-outs, interactions —
              is not.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
