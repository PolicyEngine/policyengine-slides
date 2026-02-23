import React from 'react';
import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideContent from '@/components/content/SlideContent';

export default function FutureAISlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Where we're going: AI meets economic modeling</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-8">
            <p className="text-2xl text-gray-600">
              Arming agentic AIs with rigorous economic models
            </p>

            <div className="grid grid-cols-2 gap-12 mt-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-pe-teal">Today</h3>
                <ul className="space-y-3 text-xl text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pe-teal">•</span>
                    <span>AI answers policy questions with vibes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pe-teal">•</span>
                    <span>"This policy might help families"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pe-teal">•</span>
                    <span>No quantitative grounding</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-pe-teal">With PolicyEngine</h3>
                <ul className="space-y-3 text-xl text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pe-teal">•</span>
                    <span>AI runs actual simulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pe-teal">•</span>
                    <span>"This cuts poverty by 12% at a cost of $50B"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pe-teal">•</span>
                    <span>Grounded in data and law</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="accent-block mt-8">
              <p className="text-pe-dark font-medium text-xl">
                Better AI policy advice through better tools
              </p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
