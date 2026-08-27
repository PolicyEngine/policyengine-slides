import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const examples = [
  'Employment by industry and place',
  'Income by source and percentile',
  'Program participation by household type',
  'Prices, wages, demographics, health, housing',
];

export default function WhatIfEverySeriesSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What if every outcome had an estimate?</SlideTitle>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-[1fr_1fr] gap-10 items-stretch">
        <div className="space-y-5 flex flex-col justify-center">
          <p className="text-2xl text-gray-800 leading-relaxed">
            A fiscal score is one number. Policy also moves poverty,
            inequality, regions, take-up &mdash; and statistical systems
            already publish millions of cells that could each carry a
            forecast. This room produces many of them.
          </p>

          <div className="content-card p-7">
            <div className="text-xs uppercase tracking-[0.16em] font-bold text-pe-teal mb-4">
              What counts as a cell?
            </div>
            <ul className="space-y-3">
              {examples.map((example) => (
                <li key={example} className="flex gap-3 text-lg text-gray-700">
                  <span className="text-pe-teal font-bold">+</span>
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="content-card p-10 flex flex-col justify-center text-center">
          <div className="stat-number text-7xl text-pe-teal">&gt;10m</div>
          <p className="text-2xl font-semibold text-gray-800 mt-4">
            forecast cells
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            1m public statistical cells x a 10-year horizon, before uncertainty
            intervals or conditional scenarios.
          </p>
          <p className="text-sm text-gray-500 italic leading-snug mt-8">
            A conservative order-of-magnitude floor: a single large household
            survey can produce millions of geography-by-variable cells.
          </p>
        </div>
      </div>
    </Slide>
  );
}
