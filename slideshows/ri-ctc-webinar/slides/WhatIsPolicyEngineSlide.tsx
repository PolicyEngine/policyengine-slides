import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideContent from '@/components/content/SlideContent';

export default function WhatIsPolicyEngineSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>What is PolicyEngine?</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p>
              A free, open-source platform for computing the impact of public policy
            </p>

            <ul className="list-disc list-inside space-y-4 ml-6">
              <li>Calculate tax and benefit eligibility and amounts</li>
              <li>Model federal and state policy reforms</li>
              <li>Analyze household-level and population-wide impacts</li>
              <li>Measure effects on poverty, inequality, and budgets</li>
            </ul>

            <p className="text-pe-teal font-semibold pt-4">
              policyengine.org
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
