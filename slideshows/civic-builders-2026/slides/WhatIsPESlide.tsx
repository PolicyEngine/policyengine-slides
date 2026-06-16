import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { IconScale, IconUsers, IconArrowsShuffle, type Icon } from '@tabler/icons-react';

const pillars: { icon: Icon; color: string; title: string; items: string[] }[] = [
  {
    icon: IconScale,
    color: 'var(--pe-teal)',
    title: 'Rules',
    items: [
      'Federal + payroll tax',
      'State income tax: all 50 + DC',
      'CTC, EITC, SNAP, Medicaid, SSI, ACA',
      'Thousands of unit-tested parameters',
    ],
  },
  {
    icon: IconUsers,
    color: 'var(--pe-teal-dark)',
    title: 'Households',
    items: [
      'Census survey foundation',
      'Enhanced with IRS, ACS, SCF data',
      'Calibrated to official totals',
      'Or enter any household yourself',
    ],
  },
  {
    icon: IconArrowsShuffle,
    color: 'var(--pe-dark)',
    title: 'Reforms',
    items: [
      'Change any parameter',
      'Budget cost or savings',
      'Poverty and inequality',
      'Winners and losers by group',
    ],
  },
];

export default function WhatIsPESlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>PolicyEngine: free, open-source microsimulation</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-6 mt-2">
        {pillars.map((pillar, i) => (
          <div key={i} className="content-card overflow-hidden">
            <div
              className="text-white text-center py-4"
              style={{ background: pillar.color }}
            >
              <pillar.icon size={28} stroke={1.5} className="mx-auto mb-1" />
              <h3 className="text-xl font-bold">{pillar.title}</h3>
            </div>
            <ul className="p-5 space-y-2">
              {pillar.items.map((item, j) => (
                <li
                  key={j}
                  className="text-sm text-gray-600 leading-relaxed pl-4 relative"
                >
                  <span
                    className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full"
                    style={{ background: pillar.color }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="accent-block mt-7">
        <p className="text-lg text-gray-700 leading-relaxed">
          Five years open source. Used by governments, Congress, researchers, and
          benefit navigators &mdash; from 10 Downing Street to US statehouses.
        </p>
      </div>
    </Slide>
  );
}
