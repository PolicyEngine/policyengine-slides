'use client';

import { useState } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import LineChart from '../components/LineChart';
import Tabs from '../components/Tabs';
import { ModelFootnote } from '../components/Footnote';
import { HOUSEHOLDS, HouseholdId, PLAN_STYLES, usdK } from '../components/plans';
import netIncome from '../data/net_income.json';

type Grid = { earnings: number[]; households: Record<string, Record<string, { net: number[]; emtr: (number | null)[] }>> };
const data = netIncome as Grid;
// The last $1,000 of the grid has no next $1,000 to measure against.
const N = data.earnings.findIndex((e) => e > 149000);
const NONE = { label: 'No loan payment', color: 'var(--color-gray-400)', width: 2, dash: '2 5' };
const PLANS = ['RAP', 'IBR', 'SAVE (if available)'];
const pct = (v: number) => `${Math.round(v)}%`;
const pct1 = (v: number) => `${v.toFixed(1)}%`;

export default function EmtrSlide() {
  const [household, setHousehold] = useState<HouseholdId>('single');
  const h = data.households[household];
  const cut = (v: (number | null)[]) => v.slice(0, N).map((x) => x ?? 0);
  const series = [
    { ...NONE, y: cut(h['No loan payment'].emtr) },
    ...PLANS.map((p) => ({ ...PLAN_STYLES[p], y: cut(h[p].emtr) })),
  ];
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Effective marginal tax rates with loan payments</SlideTitle>
      </SlideHeader>
      <div className="-mt-4 mb-2 flex items-center gap-6">
        <Tabs options={[...HOUSEHOLDS]} value={household} onChange={setHousehold} />
        <p className="text-base text-gray-600">Share of the next $1,000 of earnings lost to taxes, benefit reductions and the loan payment</p>
      </div>
      <LineChart
        x={data.earnings.slice(0, N)}
        series={series}
        xLabel="Earnings"
        yLabel="Effective marginal tax rate"
        xTicks={[0, 25000, 50000, 75000, 100000, 125000, 150000]}
        yTicks={[-50, 0, 50, 100, 150]}
        xFormat={usdK}
        yFormat={pct}
        readoutFormat={pct1}
        zeroLine={0}
        height={330}
      />
      <ModelFootnote extra="The borrower is the only earner, in Texas, which has no state income tax; rates elsewhere would be higher. Rates are measured on $500 steps of earnings; spikes above 150% are cut off at the top of the chart (hover shows the value). The standard plan's payment does not change with income, so its rate matches the no-payment line. Spikes on the no-payment line are benefit cliffs, such as losing reduced-price school meals at 185% of the poverty guideline." />
    </Slide>
  );
}
