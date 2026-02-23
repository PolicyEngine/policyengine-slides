import React from 'react';
import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideContent from '@/components/content/SlideContent';

export default function LiveCodingRevealSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Let's see what Claude built!</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <p className="mb-8">
            While we were talking, Claude Code was building a custom MN Working Families Credit visualizer.
          </p>

          <div className="space-y-6 text-left">
            <div className="flex items-start gap-4">
              <span className="text-pe-teal text-3xl">→</span>
              <p>Uses real PolicyEngine-US calculations</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-pe-teal text-3xl">→</span>
              <p>Adjustable policy parameters (credit amount, phase-out rate, thresholds)</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-pe-teal text-3xl">→</span>
              <p>Interactive chart showing credit by earnings and number of children</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-pe-teal text-3xl">→</span>
              <p>Model policy reforms in real-time</p>
            </div>
          </div>

          <p className="mt-12 text-2xl text-gray-600">
            localhost:5175
          </p>
        </SlideContent>
      </div>
    </Slide>
  );
}
