import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function CalculatorDemoSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Rhode Island CTC Calculator</SlideTitle>
        </SlideHeader>

        <div className="flex flex-col items-center justify-center mt-8 space-y-8">
          <div className="border-4 border-pe-teal rounded-lg p-8 bg-gray-50 max-w-4xl w-full">
            <div className="text-center space-y-6">
              <p className="text-4xl font-bold text-pe-dark">
                Live Demo
              </p>
              <p className="text-2xl text-gray-600">
                policyengine.org/us/rhode-island-ctc-calculator
              </p>
              <div className="pt-4">
                <p className="text-xl text-pe-teal">
                  Using Governor McKee's $325 CTC proposal
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 text-center max-w-4xl">
            <div className="bg-pe-teal/10 p-4 rounded-lg">
              <p className="font-semibold text-pe-dark">Step 1</p>
              <p className="text-sm text-gray-600">Configure household</p>
            </div>
            <div className="bg-pe-teal/10 p-4 rounded-lg">
              <p className="font-semibold text-pe-dark">Step 2</p>
              <p className="text-sm text-gray-600">View household impact</p>
            </div>
            <div className="bg-pe-teal/10 p-4 rounded-lg">
              <p className="font-semibold text-pe-dark">Step 3</p>
              <p className="text-sm text-gray-600">See statewide analysis</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
