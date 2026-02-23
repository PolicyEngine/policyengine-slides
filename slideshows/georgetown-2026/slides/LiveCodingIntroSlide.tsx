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
            <span className="slide-tag">Live demo</span>
            <SlideTitle>Let's kick off an AI coding task</SlideTitle>
          </div>
        </SlideHeader>

        <SlideContent size="md">
          <p className="text-gray-600 mb-8">
            While we talk, Claude will build something for the class using PolicyEngine...
          </p>

          <div className="code-block">
            <div className="code-block-header">
              <div className="code-block-dot bg-[#ff5f57]" />
              <div className="code-block-dot bg-[#febc2e]" />
              <div className="code-block-dot bg-[#28c840]" />
              <span className="ml-4 text-gray-500 text-sm font-mono">claude-code</span>
            </div>
            <div className="code-block-content">
              <p className="text-[#7ee787]">I'm giving a talk at Laura Blessing's inequality class at Georgetown right now. Let's build a React app using the policyengine-us Python package showing some topic from the syllabus...</p>
              <span className="inline-block w-2 h-5 bg-white animate-pulse ml-1" />
            </div>
          </div>

          <div className="accent-block mt-8">
            <p className="text-pe-dark font-medium text-xl">
              We'll check back later to see what it built
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
