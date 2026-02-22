import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function SolutionOverviewSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The solution: multi-agent AI</SlideTitle>
      </SlideHeader>

      <div className="flex items-center justify-center mt-32">
        <div className="code-block w-full max-w-3xl mx-auto">
          <div className="code-block-header">
            <div className="code-block-dot bg-red-500"></div>
            <div className="code-block-dot bg-yellow-500"></div>
            <div className="code-block-dot bg-green-500"></div>
            <span className="text-white/40 text-sm ml-2">terminal</span>
          </div>
          <div className="code-block-content">
            <pre className="text-lg">
              <span className="text-gray-500"># Run the workflow</span>{'\n'}
              <span className="text-green-400">$</span> <span className="text-blue-300">/encode-policy</span> <span className="text-yellow-300">{'"New Hampshire TANF"'}</span>
            </pre>
          </div>
        </div>
      </div>

      <p className="text-xl text-gray-400 mt-10 italic text-center">One command, 90 minutes, a complete pull request</p>
    </Slide>
  );
}
