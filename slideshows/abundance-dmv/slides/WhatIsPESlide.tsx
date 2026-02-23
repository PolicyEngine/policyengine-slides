import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { IconScale, IconUsers, IconTrendingUp } from '@tabler/icons-react';

const pillars = [
  {
    icon: IconScale,
    color: '#319795',
    title: 'Policies',
    items: ['Federal income & payroll tax', 'State income tax (all 50 + DC)', 'CTC, EITC, SNAP, Medicaid, SSI, ACA', 'Thousands of unit-tested rules'],
  },
  {
    icon: IconUsers,
    color: '#2C7A7B',
    title: 'Households',
    items: ['Census CPS foundation', 'Enhanced with IRS, ACS, SCF data', 'State-specific datasets', 'ML-calibrated to official aggregates'],
  },
  {
    icon: IconTrendingUp,
    color: '#234E52',
    title: 'Dynamics',
    items: ['Labor supply elasticities', 'CBO-based behavioral assumptions', 'How people respond to incentives'],
  },
];

export default function WhatIsPESlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>PolicyEngine: free, open-source microsimulation</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-6 mt-4">
        {pillars.map((pillar, i) => (
          <div key={i} className="content-card overflow-hidden">
            <div className="text-white text-center py-4" style={{ background: pillar.color }}>
              <pillar.icon size={28} stroke={1.5} className="mx-auto mb-1" />
              <h3 className="text-xl font-bold">{pillar.title}</h3>
            </div>
            <ul className="p-5 space-y-2">
              {pillar.items.map((item, j) => (
                <li key={j} className="text-sm text-gray-600 leading-relaxed pl-4 relative">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full" style={{ background: pillar.color }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-8">
        <div className="content-card px-6 py-3 text-center">
          <span className="stat-number text-3xl">5</span>
          <span className="text-sm text-gray-500 ml-2">years of development</span>
        </div>
        <div className="content-card px-6 py-3 text-center">
          <span className="stat-number text-3xl">50</span>
          <span className="text-sm text-gray-500 ml-2">states + DC + federal</span>
        </div>
        <div className="content-card px-6 py-3 text-center">
          <span className="stat-number text-3xl">UK + US</span>
          <span className="text-sm text-gray-500 ml-2">country models</span>
        </div>
      </div>
    </Slide>
  );
}
