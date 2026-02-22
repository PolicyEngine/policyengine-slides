import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function PoliciesSlide() {
  const items = [
    {
      bold: 'Federal taxes',
      text: 'including income tax, payroll tax, and capital gains tax',
    },
    {
      bold: 'State income taxes',
      text: 'for all 50 states and DC, including state EITCs and CTCs',
    },
    {
      bold: 'Federal benefits',
      text: 'including SNAP, SSI, TANF, WIC, and housing assistance',
    },
    {
      bold: 'Legislative references',
      text: 'and IRS documentation, verified through thousands of unit tests',
    },
  ];

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Policies: federal and state tax and benefit rules</SlideTitle>
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

      <div className="mt-8 mx-8 p-4 bg-pe-teal/5 border border-pe-teal/20 rounded-xl">
        <p className="text-pe-dark text-sm">
          All models are encoded as <strong>YAML parameters</strong> (thresholds, rates, dates) and <strong>Python variables</strong> (eligibility logic, formulas). This is what our AI agents automate.
        </p>
      </div>
    </Slide>
  );
}
