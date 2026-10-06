'use client';

import { useState } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Tabs from '../components/Tabs';
import { usd0 } from '../components/plans';
import rows from '../data/scf_profile.json';

type Breakdown = 'race_ethnicity' | 'net_worth_quintile' | 'age_of_reference_person' | 'income_quintile';

const TABS: { id: Breakdown; label: string }[] = [
  { id: 'race_ethnicity', label: 'Race or ethnicity' },
  { id: 'net_worth_quintile', label: 'Net worth quintile' },
  { id: 'income_quintile', label: 'Income quintile' },
  { id: 'age_of_reference_person', label: 'Age' },
];

const MEASURES = [
  { id: 'pct_families_with_education_debt', label: 'Families with education debt', pct: true },
  { id: 'median_education_debt_among_borrowers', label: 'Median education debt, families with it', pct: false },
  { id: 'pct_borrowers_liq_under_2000', label: 'Of those, liquid assets under $2,000', pct: true },
  { id: 'pct_borrowers_any_loan_income_driven', label: 'Of those, any loan on an income-driven plan (lower bound)', pct: true },
];

type Row = { breakdown: string; group: string; measure: string; estimate: string; suppressed: string; flag_20_to_49_borrower_families: string };

function cell(group: string, breakdown: string, measure: string, pct: boolean) {
  const r = (rows as Row[]).find((x) => x.breakdown === breakdown && x.group === group && x.measure === measure);
  if (!r || r.suppressed === 'True' || r.estimate === '') return '—';
  const v = Number(r.estimate);
  const text = pct ? `${v.toFixed(1)}%` : usd0(v);
  return r.flag_20_to_49_borrower_families === 'True' ? `${text} †` : text;
}

export default function ScfProfileSlide() {
  const [breakdown, setBreakdown] = useState<Breakdown>('race_ethnicity');
  const groups = Array.from(
    new Set((rows as Row[]).filter((r) => r.breakdown === breakdown).map((r) => r.group)),
  );
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Who holds education debt today: the 2022 SCF</SlideTitle>
      </SlideHeader>
      <div className="-mt-4 mb-3">
        <Tabs options={TABS} value={breakdown} onChange={setBreakdown} />
      </div>
      <div className="content-card overflow-hidden">
        <table className="w-full text-right">
          <thead>
            <tr className="text-white" style={{ background: 'var(--pe-dark)' }}>
              <th className="px-4 py-2 text-base font-semibold text-left">Group</th>
              {MEASURES.map((m) => (
                <th key={m.id} className="px-4 py-2 text-sm font-semibold leading-tight">
                  {m.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {['All families', ...groups].map((g) => (
              <tr key={g} className={g === 'All families' ? 'bg-gray-50' : ''}>
                <td className="px-4 py-2 text-lg text-gray-800 text-left">{g}</td>
                {MEASURES.map((m) => (
                  <td key={m.id} className="px-4 py-2 text-lg text-gray-800 tabular-nums">
                    {cell(g, g === 'All families' ? 'all' : breakdown, m.id, m.pct)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500 leading-snug">
        Preliminary. A direct tabulation of the Federal Reserve&apos;s 2022 Survey of Consumer Finances public data, not PolicyEngine model
        output: families, weighted, all five implicates; 2022 dollars. Education debt is the SCF&apos;s EDN_INST and includes loans for a
        child&apos;s education. Liquid assets are the SCF&apos;s LIQ (checking, savings, money market and call accounts, prepaid cards). The
        income-driven share is a lower bound: the survey ran during the payment pause, and its plan question skipped loans in forbearance.
        — fewer than 20 families with education debt; † 20 to 49.
      </p>
    </Slide>
  );
}
