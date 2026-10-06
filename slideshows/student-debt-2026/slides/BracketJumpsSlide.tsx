'use client';

import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import LineChart from '../components/LineChart';
import { ModelFootnote } from '../components/Footnote';
import { usd0, usd2, usdK } from '../components/plans';
import fine from '../data/rap_single_fine.json';
import jumps from '../data/rap_bracket_jumps.json';

export default function BracketJumpsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Measure 10: RAP jumps at every $10,000 of AGI</SlideTitle>
      </SlideHeader>
      <div className="grid grid-cols-[1.6fr_1fr] gap-8 items-start -mt-4">
        <div>
          <p className="mb-2 text-xl text-gray-700">Single filer, no children, $100 steps of AGI</p>
          <LineChart
            x={fine.agi}
            series={[{ label: 'RAP', color: 'var(--pe-teal)', width: 3, y: fine.rap }]}
            xLabel="Adjusted gross income"
            yLabel="Monthly payment"
            xTicks={[0, 20000, 40000, 60000, 80000, 100000]}
            yTicks={[0, 250, 500, 750, 1000]}
            xFormat={usdK}
            yFormat={usd0}
            height={460}
          />
        </div>
        <div className="content-card overflow-hidden">
          <table className="w-full text-right">
            <thead>
              <tr className="text-white" style={{ background: 'var(--pe-dark)' }}>
                <th className="px-3 py-2 text-sm font-semibold text-left">AGI boundary</th>
                <th className="px-3 py-2 text-sm font-semibold">Jump at $1 above, monthly</th>
                <th className="px-3 py-2 text-sm font-semibold">Yearly</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {jumps.map((j) => (
                <tr key={j.boundary}>
                  <td className="px-3 py-1.5 text-base text-gray-800 text-left">{usd0(j.boundary)}</td>
                  <td className="px-3 py-1.5 text-base font-semibold text-pe-teal tabular-nums">{usd2(j.monthly_jump)}</td>
                  <td className="px-3 py-1.5 text-base text-gray-700 tabular-nums">{usd0(j.annual_jump)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ModelFootnote extra="There is no jump at $10,000: the payment is $10 on both sides ($120 a year is $10 a month, and 1% of $10,001 is $8.33 a month, raised to the $10 minimum)." />
    </Slide>
  );
}
