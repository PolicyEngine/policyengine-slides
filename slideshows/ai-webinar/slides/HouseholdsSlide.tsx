import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function HouseholdsSlide() {
  const items = [
    {
      bold: 'Current Population Survey (CPS)',
      text: 'provides detailed income, employment, and demographic data for 200,000+ individuals',
    },
    {
      bold: 'Enhanced microdata',
      text: 'through imputation and calibration to match administrative totals for SNAP, SSI, and other programs',
    },
    {
      bold: 'State-level analysis',
      text: 'enabled by geographic identifiers and state-specific policy parameters',
    },
    {
      bold: 'Reweighting and calibration',
      text: 'using machine learning to match population targets and program participation',
    },
  ];

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Households: survey microdata representing the population</SlideTitle>
      </SlideHeader>

      <div className="space-y-6 px-8 mt-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-pe-teal mt-2.5 flex-shrink-0" />
            <p className="text-xl text-gray-700 leading-relaxed">
              <strong className="text-pe-dark">{item.bold}</strong> {item.text}
            </p>
          </div>
        ))}
      </div>
    </Slide>
  );
}
