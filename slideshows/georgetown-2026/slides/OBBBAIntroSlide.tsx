import React from 'react';
import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideContent from '@/components/content/SlideContent';

export default function OBBBAIntroSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <div className="flex items-center gap-4">
            <span className="slide-tag">Demo 4</span>
            <SlideTitle>Going deep on a major bill</SlideTitle>
          </div>
        </SlideHeader>

        <SlideContent size="md">
          <p className="text-gray-600 mb-8">
            The "One Big Beautiful Bill Act" — signed into law July 2025
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-pe-teal">Provisions we modeled</h3>
              <ul className="space-y-3 text-xl text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pe-teal">•</span>
                  <span>TCJA extensions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pe-teal">•</span>
                  <span>SALT cap changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pe-teal">•</span>
                  <span>Child Tax Credit expansion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pe-teal">•</span>
                  <span>Medicaid & SNAP changes</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-pe-teal">What we built</h3>
              <ul className="space-y-3 text-xl text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pe-teal">•</span>
                  <span>20,000 representative households</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pe-teal">•</span>
                  <span>Scrollytelling visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pe-teal">•</span>
                  <span>Winners & losers by income</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pe-teal">•</span>
                  <span>Compare TCJA baselines</span>
                </li>
              </ul>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
