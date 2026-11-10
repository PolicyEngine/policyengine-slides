'use client';

import { useState } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import LineChart from '../components/LineChart';
import Tabs from '../components/Tabs';
import { ModelFootnote } from '../components/Footnote';
import { HOUSEHOLDS, HouseholdId, PLAN_STYLES, usd0, usdK } from '../components/plans';
import payments from '../data/payments.json';

const data = payments as { agi: number[]; households: Record<string, Record<string, number[]>> };

export default function PaymentCurvesSlide() {
  const [household, setHousehold] = useState<HouseholdId>('single_parent');
  const plans = data.households[household];
  const series = Object.keys(PLAN_STYLES).map((p) => ({ ...PLAN_STYLES[p], y: plans[p] }));
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Scheduled monthly payment by plan and income</SlideTitle>
      </SlideHeader>
      <div className="-mt-4 mb-2">
        <Tabs options={[...HOUSEHOLDS]} value={household} onChange={setHousehold} />
      </div>
      <LineChart
        x={data.agi}
        series={series}
        xLabel="Adjusted gross income"
        yLabel="Monthly payment"
        xTicks={[0, 25000, 50000, 75000, 100000, 125000, 150000]}
        yTicks={[0, 250, 500, 750, 1000, 1250]}
        xFormat={usdK}
        yFormat={usd0}
        height={360}
      />
      <ModelFootnote extra="The standard payment does not depend on income; IBR is capped at it." />
    </Slide>
  );
}
