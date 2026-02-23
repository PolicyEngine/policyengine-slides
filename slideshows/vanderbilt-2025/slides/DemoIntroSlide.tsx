import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideContent from '@/components/content/SlideContent';

export default function DemoIntroSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Hands-on demonstration</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p className="text-3xl font-semibold text-pe-teal">
              Demo sequence
            </p>

            <ol className="list-decimal list-inside space-y-4 ml-6 text-2xl">
              <li>Explore household-by-household impacts to see the microfounded nature</li>
              <li>Create a Montana family of four to calculate taxes and benefits</li>
              <li>Simulate a new hypothetical Child Tax Credit for the family</li>
              <li>Analyze the statewide impact of the new CTC</li>
            </ol>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
