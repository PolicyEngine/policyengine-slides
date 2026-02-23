import React from 'react';
import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideContent from '@/components/content/SlideContent';

export default function FutureLocalSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Where we're going: more local</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-8">
            <p className="text-2xl text-gray-600">
              Policy impacts vary dramatically by geography
            </p>

            <div className="flex justify-center items-center gap-8 mt-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg w-48">
                <p className="text-lg text-gray-500">Today</p>
                <p className="text-4xl font-bold text-pe-teal mt-2">50</p>
                <p className="text-xl text-gray-700">States</p>
              </div>

              <div className="text-4xl text-gray-400">→</div>

              <div className="text-center p-6 bg-teal-50 rounded-lg w-48 border-2 border-pe-teal">
                <p className="text-lg text-pe-teal font-medium">Coming soon</p>
                <p className="text-4xl font-bold text-pe-teal mt-2">435</p>
                <p className="text-xl text-gray-700">Congressional districts</p>
              </div>

              <div className="text-4xl text-gray-400">→</div>

              <div className="text-center p-6 bg-gray-50 rounded-lg w-48">
                <p className="text-lg text-gray-500">Future</p>
                <p className="text-4xl font-bold text-gray-400 mt-2">3,000+</p>
                <p className="text-xl text-gray-700">Counties & cities</p>
              </div>
            </div>

            <div className="accent-block mt-8">
              <p className="text-pe-dark font-medium text-xl">
                How does this policy affect <em>your</em> district?
              </p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
