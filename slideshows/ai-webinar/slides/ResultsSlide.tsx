import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function ResultsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Results</SlideTitle>
      </SlideHeader>

      <div className="flex flex-col justify-center flex-1 mt-32">
        <div className="grid grid-cols-3 gap-8">
          <div className="content-card p-8 text-center">
            <div className="stat-number">90 min</div>
            <p className="text-gray-800 font-semibold text-lg mt-3">Per implementation</p>
            <p className="text-gray-500 mt-1">Down from 2-3 weeks</p>
          </div>

          <div className="content-card p-8 text-center">
            <div className="stat-number">45+</div>
            <p className="text-gray-800 font-semibold text-lg mt-3">Programs in production</p>
            <p className="text-gray-500 mt-1">TANF across states and Illinois programs</p>
          </div>

          <div className="content-card p-8 text-center">
            <div className="stat-number">60K+</div>
            <p className="text-gray-800 font-semibold text-lg mt-3">Lines of code</p>
            <p className="text-gray-500 mt-1">Consistent patterns and quality</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="accent-block">
            <p className="text-gray-700 text-lg">
              Specialized agents handle the mechanical work &mdash; research, parameterization, testing, documentation &mdash; while <strong>humans review the final PR</strong> and make the merge decision.
            </p>
          </div>

          <div className="accent-block">
            <p className="text-gray-700 text-lg">
              API partner <strong>MyFriendBen</strong> uses the Illinois implementations to power their benefits screening tool, helping families discover programs they qualify for.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
