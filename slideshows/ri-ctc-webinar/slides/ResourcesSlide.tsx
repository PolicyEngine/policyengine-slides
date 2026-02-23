import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideContent from '@/components/content/SlideContent';

export default function ResourcesSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Learn more</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-8 text-left">
            <div>
              <p className="font-bold text-pe-teal text-2xl mb-2">Rhode Island CTC Calculator</p>
              <a
                href="https://www.policyengine.org/us/rhode-island-ctc-calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-blue-600 hover:underline"
              >
                policyengine.org/us/rhode-island-ctc-calculator
              </a>
            </div>

            <div>
              <p className="font-bold text-pe-teal text-2xl mb-2">Analysis of the Governor's Proposal</p>
              <a
                href="https://www.policyengine.org/us/research/ri-governor-mckee-child-tax-credit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-blue-600 hover:underline"
              >
                policyengine.org/us/research/ri-governor-mckee-child-tax-credit
              </a>
            </div>

            <div>
              <p className="font-bold text-pe-teal text-2xl mb-2">How the Calculator Came to Be</p>
              <a
                href="https://www.policyengine.org/us/research/ri-ctc-calculator-press-release"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-blue-600 hover:underline"
              >
                policyengine.org/us/research/ri-ctc-calculator-press-release
              </a>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
