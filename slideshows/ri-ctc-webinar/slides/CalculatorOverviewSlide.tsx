import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function CalculatorOverviewSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>The Rhode Island CTC Calculator</SlideTitle>
        </SlideHeader>

        <div className="mt-8 px-8">
          <div className="grid grid-cols-2 gap-12">
            {/* Left column - Background */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-pe-dark">Commissioned by Niskanen Center</h3>

              <p className="text-lg">
                PolicyEngine built a Rhode Island–specific policy exploration tool to model
                alternative designs for the state's dependent exemption and potential child
                tax credit reforms.
              </p>

              <div className="space-y-3 text-lg">
                <p className="font-semibold text-pe-teal">Policy options modeled:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Convert personal exemption to refundable CTC</li>
                  <li>Adjust credit amounts and age eligibility</li>
                  <li>Modify refundability and phase-out thresholds</li>
                  <li>Compare multiple reform designs</li>
                </ul>
              </div>
            </div>

            {/* Right column - Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-pe-dark">What users can explore</h3>

              <div className="space-y-4">
                <div className="bg-pe-teal/10 p-4 rounded-lg">
                  <p className="text-xl font-semibold text-pe-teal">Household impacts</p>
                  <p className="text-lg mt-1">See how reforms affect your specific family situation across income levels</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-xl font-semibold text-blue-700">Statewide impacts</p>
                  <p className="text-lg mt-1">Revenue, poverty, inequality, and distributional outcomes for Rhode Island</p>
                </div>
              </div>

              <p className="text-pe-teal font-semibold text-xl pt-2">
                policyengine.org/us/rhode-island-ctc-calculator
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
