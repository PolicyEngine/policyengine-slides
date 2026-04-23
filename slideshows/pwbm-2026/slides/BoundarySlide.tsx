import { Fragment } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const columns = [
  {
    title: 'PolicyEngine layer',
    points: [
      'Cited policy rules',
      'Calibrated household microdata',
      'Tax-benefit interactions',
      'State and program detail',
    ],
  },
  {
    title: 'Shared interface',
    points: [
      'Per-household outputs',
      'Marginal-rate and subgroup surfaces',
      'Aggregate tables built from the same micro runs',
      'Citable, reproducible artifacts',
    ],
  },
  {
    title: 'PWBM layer',
    points: [
      'Dynamic labor and savings responses',
      'Capital, debt, and openness assumptions',
      'Long-run welfare and macro incidence',
      'Intergenerational framing over decades',
    ],
  },
];

export default function BoundarySlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The natural handoff is higher in the stack</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          We do not need to solve the same problem twice.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[1fr_120px_1fr_120px_1fr] gap-4 mt-10 items-stretch">
        {columns.map((column, index) => (
          <Fragment key={column.title}>
            <div key={column.title} className="content-card p-6">
              <h3 className="font-mono text-xl font-bold text-gray-800 mb-5">
                {column.title}
              </h3>
              <ul className="space-y-3 text-lg text-gray-700">
                {column.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-pe-teal flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            {index < columns.length - 1 && (
              <div
                key={`${column.title}-arrow`}
                className="flex items-center justify-center text-6xl font-light text-pe-teal/70"
              >
                →
              </div>
            )}
          </Fragment>
        ))}
      </div>

      <div
        className="mt-8 rounded-2xl px-8 py-6 text-white"
        style={{ background: 'linear-gradient(135deg, #5c3d2e 0%, #3e2518 100%)' }}
      >
        <p className="text-2xl leading-relaxed text-white/90">
          PolicyEngine should not pretend to be an OLG. PWBM should not need to
          rebuild detailed benefit logic from scratch.
        </p>
      </div>
    </Slide>
  );
}
