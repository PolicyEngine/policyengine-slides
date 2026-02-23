import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideContent from '@/components/content/SlideContent';

export default function PolicyReformDemoSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Demo: Tax rate reform analysis</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p className="font-semibold text-pe-dark">
              Simulating a hypothetical tax rate change in Minnesota
            </p>

            <div className="space-y-4 ml-6">
              <div className="pt-2">
                <p className="font-semibold text-pe-teal mb-2">Analysis includes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Poverty and deep poverty rate changes</li>
                  <li>Income inequality (Gini coefficient)</li>
                  <li>Net income by income decile</li>
                  <li>Winners, losers, and unaffected households</li>
                  <li>Budget impact to Minnesota</li>
                </ul>
              </div>
            </div>

            <p className="text-pe-teal font-semibold pt-4">
              Live demo →
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
