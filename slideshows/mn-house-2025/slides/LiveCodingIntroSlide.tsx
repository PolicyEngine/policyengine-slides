import React from 'react';
import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideContent from '@/components/content/SlideContent';

export default function LiveCodingIntroSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <div className="flex items-center gap-4">
            <span className="slide-tag">Live Demo</span>
            <SlideTitle>AI builds a tax credit visualizer</SlideTitle>
          </div>
        </SlideHeader>

        <SlideContent size="md">
          <p className="text-gray-600 mb-8">
            Let's kick off an AI coding exercise while we talk. This prompt will build a
            custom visualization tool for Minnesota's Child & Working Families Credit:
          </p>

          <div className="code-block">
            <div className="code-block-header">
              <div className="code-block-dot bg-[#ff5f57]" />
              <div className="code-block-dot bg-[#febc2e]" />
              <div className="code-block-dot bg-[#28c840]" />
              <span className="ml-4 text-gray-500 text-sm font-mono">claude-code</span>
            </div>
            <div className="code-block-content space-y-4">
              <p className="text-[#7ee787]">Build a Python script that charts Minnesota's Child & Working Families Credit vs earnings using policyengine_us.</p>
              <p className="text-gray-300">Show lines for 1, 2, and 3 children. Save the chart as an image.</p>
            </div>
          </div>

          <div className="accent-block mt-8">
            <p className="text-pe-dark font-medium text-xl">
              We'll check back on the results at the end of the presentation
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
