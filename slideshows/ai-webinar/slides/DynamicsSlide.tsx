import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function DynamicsSlide() {
  const items = [
    {
      bold: 'Labor supply elasticities',
      text: 'to capture behavioral responses to tax and benefit changes',
    },
    {
      bold: 'Intensive and extensive margin responses',
      text: 'account for both hours worked and employment participation decisions',
    },
    {
      bold: 'Income effects',
      text: 'capture how policies affect household income and consumption',
    },
    {
      bold: 'CBO elasticity framework',
      text: 'with adjustable parameters for users to customize behavioral assumptions',
    },
  ];

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Dynamics: behavioral responses to policy changes</SlideTitle>
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
