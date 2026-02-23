import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideContent from '@/components/content/SlideContent';

export default function CTCDemoSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Demo 3: Simulate a new Child Tax Credit</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p className="font-semibold text-pe-dark">
              Model a hypothetical CTC for the Montana family
            </p>

            <ul className="list-disc list-inside space-y-4 ml-6">
              <li>Create a new policy reform with custom CTC parameters</li>
              <li>See how the reform changes the family's tax liability</li>
              <li>View the household-level impact: net income change</li>
              <li>Explore how the CTC interacts with other programs</li>
            </ul>

            <p className="text-pe-teal font-semibold pt-2">
              policyengine.org
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
