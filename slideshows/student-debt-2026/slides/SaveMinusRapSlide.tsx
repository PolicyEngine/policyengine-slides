'use client';

import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import LineChart from '../components/LineChart';
import { ModelFootnote } from '../components/Footnote';
import { HOUSEHOLDS, usd0, usdK } from '../components/plans';
import payments from '../data/payments.json';

const data = payments as { agi: number[]; households: Record<string, Record<string, number[]>> };
const colors: Record<string, string> = {
  single: 'var(--pe-teal)',
  single_parent: 'var(--pe-amber)',
  married: 'var(--color-gray-600)',
};

export default function SaveMinusRapSlide() {
  const series = HOUSEHOLDS.map((h) => {
    const p = data.households[h.id];
    return {
      label: h.label,
      color: colors[h.id],
      y: p['SAVE (if available)'].map((v, i) => Math.round((v - p['RAP'][i]) * 100) / 100),
    };
  });
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Measure 5: SAVE minus RAP</SlideTitle>
      </SlideHeader>
      <p className="-mt-4 mb-2 text-xl text-gray-700">
        For all three households, SAVE would charge less than RAP at every income from $0 to $150,000: from $10 less a month (where SAVE
        is $0 and RAP charges its $10 minimum) to as much as $834 less.
      </p>
      <LineChart
        x={data.agi}
        series={series}
        xLabel="Adjusted gross income"
        yLabel="SAVE minus RAP, per month"
        xTicks={[0, 25000, 50000, 75000, 100000, 125000, 150000]}
        yTicks={[-900, -600, -300, 0]}
        xFormat={usdK}
        yFormat={usd0}
        zeroLine={0}
        height={340}
      />
      <ModelFootnote />
    </Slide>
  );
}
