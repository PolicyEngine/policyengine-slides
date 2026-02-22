import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function ScaleChallengeSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The scale challenge</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-10 mt-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">The manual process</h3>
          <div className="space-y-4">
            {[
              'Research official sources (statutes, regulations, state plans)',
              'Extract eligibility rules and benefit formulas',
              'Write YAML parameters with legal citations',
              'Implement calculation logic in Python',
              'Create integration tests',
              'Validate against source documents',
              'Handle multiple rounds of review',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-pe-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-pe-teal text-sm font-bold">{i + 1}</span>
                </div>
                <p className="text-gray-700 text-lg">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Time and complexity</h3>
          <div className="space-y-6">
            <div className="content-card p-5">
              <div className="stat-number text-5xl">2-3 weeks</div>
              <p className="text-gray-600 mt-2">Per program implementation</p>
            </div>
            <div className="content-card p-5">
              <div className="stat-number text-5xl">~1,500</div>
              <p className="text-gray-600 mt-2">Lines of code per program</p>
            </div>
            <div className="content-card p-5">
              <div className="stat-number text-5xl">50+</div>
              <p className="text-gray-600 mt-2">States with unique program rules</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
