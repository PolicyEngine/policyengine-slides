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
          <div className="flex items-center gap-4">
            <span className="slide-tag">Live demo</span>
            <SlideTitle>Let's see what Claude built</SlideTitle>
          </div>
        </SlideHeader>

        <SlideContent size="lg">
          <p className="mb-8 text-gray-600">
            While we were talking, Claude was building a custom app for this class...
          </p>

          <div className="accent-block">
            <p className="text-pe-dark font-medium text-2xl">
              🔗 Let's check it out
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
