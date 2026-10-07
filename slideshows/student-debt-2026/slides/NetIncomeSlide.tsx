'use client';

import { useState } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import LineChart from '../components/LineChart';
import Tabs from '../components/Tabs';
import { ModelFootnote } from '../components/Footnote';
import { HOUSEHOLDS, HouseholdId, PLAN_STYLES, usd0, usdK } from '../components/plans';
import netIncome from '../data/net_income.json';

type Grid = { earnings: number[]; households: Record<string, Record<string, { net: number[]; emtr: (number | null)[] }>> };
const data = netIncome as Grid;
const NONE = { label: 'No loan payment', color: 'var(--color-gray-400)', width: 2, dash: '2 5' };
const PLANS = ['RAP', 'IBR', 'SAVE (if available)', 'Standard 10-year'];

export default function NetIncomeSlide() {
  const [household, setHousehold] = useState<HouseholdId>('single_parent');
  const h = data.households[household];
  const series = [
    { ...NONE, y: h['No loan payment'].net },
    ...PLANS.map((p) => ({ ...PLAN_STYLES[p], y: h[p].net })),
  ];
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Measure 7: net income after taxes, benefits and loan payments</SlideTitle>
      </SlideHeader>
      <div className="-mt-4 mb-2">
        <Tabs options={[...HOUSEHOLDS]} value={household} onChange={setHousehold} />
      </div>
      <LineChart
        x={data.earnings}
        series={series}
        xLabel="Earnings"
        yLabel="Net income after loan payments, per year"
        xTicks={[0, 25000, 50000, 75000, 100000, 125000, 150000]}
        yTicks={[0, 25000, 50000, 75000, 100000, 125000]}
        xFormat={usdK}
        yFormat={usdK}
        readoutFormat={usd0}
        height={340}
      />
      <ModelFootnote agiDirect={false} extra="The borrower is the only earner. Texas has no state income tax. Net income is PolicyEngine's household net income for 2026 (market income plus benefits and refundable credits, minus taxes; health coverage not valued), minus 12 times the October payment." />
    </Slide>
  );
}
