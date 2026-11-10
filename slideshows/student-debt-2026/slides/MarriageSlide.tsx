'use client';

import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import LineChart from '../components/LineChart';
import { ModelFootnote } from '../components/Footnote';
import { usd0, usdK } from '../components/plans';
import marriage from '../data/marriage.json';

export default function MarriageSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Measure 13: married vs unmarried</SlideTitle>
      </SlideHeader>
      <p className="-mt-4 mb-2 text-xl text-gray-700">
        Same combined AGI, split evenly. Married, the couple files jointly; unmarried, the borrower files as head of household with both
        children and the partner files single.
      </p>
      <LineChart
        x={marriage.agi}
        series={[
          { label: 'Married, filing jointly', color: 'var(--pe-teal)', width: 3.5, y: marriage.married },
          { label: 'Unmarried', color: 'var(--color-gray-600)', width: 2.5, dash: '8 6', y: marriage.unmarried },
        ]}
        xLabel="Couple's combined adjusted gross income"
        yLabel="Borrower's monthly RAP payment"
        xTicks={[0, 50000, 100000, 150000, 200000]}
        yTicks={[0, 400, 800, 1200, 1600]}
        xFormat={usdK}
        yFormat={usd0}
        height={320}
      />
      <ModelFootnote extra="The partner has no student loans. Taxes and benefits are not part of this chart." />
    </Slide>
  );
}
