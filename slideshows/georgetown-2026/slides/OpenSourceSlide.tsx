import React from 'react';
import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideContent from '@/components/content/SlideContent';

export default function OpenSourceSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Free and transparent</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="flex justify-center gap-12">
            <div className="text-center space-y-4">
              <div className="text-6xl">🆓</div>
              <p className="text-2xl font-semibold text-pe-teal">Free forever</p>
              <p className="text-lg text-gray-600">No paywall, no login required</p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-6xl">📖</div>
              <p className="text-2xl font-semibold text-pe-teal">Open source</p>
              <p className="text-lg text-gray-600">All code public on GitHub</p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-6xl">📜</div>
              <p className="text-2xl font-semibold text-pe-teal">Cited rules</p>
              <p className="text-lg text-gray-600">Legislative references for every parameter</p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-6xl">✅</div>
              <p className="text-2xl font-semibold text-pe-teal">Verifiable</p>
              <p className="text-lg text-gray-600">You can check our work</p>
            </div>
          </div>

          <div className="accent-block mt-12">
            <p className="text-pe-dark font-medium text-xl">
              Policy analysis shouldn't be a black box
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
