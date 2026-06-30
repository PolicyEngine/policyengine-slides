import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const steps = [
  { n: '1', label: 'Draft an option', body: 'A credit, a rate, a phase-out' },
  { n: '2', label: 'See the impact', body: 'Cost, poverty, who gains' },
  { n: '3', label: 'Pair with polling', body: 'Test how it lands' },
  { n: '4', label: 'Refine', body: 'Adjust and re-run' },
];

export default function SpeedSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Days, not sessions</SlideTitle>
      </SlideHeader>

      <p className="text-2xl text-gray-500 -mt-4 mb-9">
        Test an idea, see the fiscal and distributional picture, refine — before a bill is even drafted
      </p>

      <div className="flex items-stretch gap-3">
        {steps.map((s, i) => (
          <React.Fragment key={s.n}>
            <div className="content-card flex-1 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-pe-teal text-xl font-bold text-white">
                {s.n}
              </div>
              <div className="text-2xl font-bold text-pe-dark mb-1">{s.label}</div>
              <p className="text-lg text-gray-500">{s.body}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center text-3xl font-bold text-pe-teal">›</div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-8 inline-block self-start rounded-full border-2 border-dashed border-pe-teal/40 px-7 py-3 text-xl font-medium text-pe-dark">
        ↻ The whole loop runs in days — fast enough to iterate inside a single legislative session
      </div>

      <p className="mt-7 text-base text-gray-400">
        Rhode Island&apos;s calculator was built quickly on PolicyEngine&apos;s model, accelerated with
        agentic AI.
      </p>
    </Slide>
  );
}
