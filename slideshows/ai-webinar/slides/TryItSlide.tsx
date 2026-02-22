import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function TryItSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Try it yourself</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">Open source and available today</p>
      </SlideHeader>

      <div className="flex flex-col items-center justify-center flex-1 mt-8">
        <div className="code-block w-full max-w-3xl">
          <div className="code-block-header">
            <div className="code-block-dot bg-red-500"></div>
            <div className="code-block-dot bg-yellow-500"></div>
            <div className="code-block-dot bg-green-500"></div>
            <span className="text-white/40 text-sm ml-2">terminal</span>
          </div>
          <div className="code-block-content">
            <pre className="text-lg">{`# Add the marketplace
/plugin marketplace add \\
  PolicyEngine/policyengine-claude

# Install the complete plugin
/plugin install \\
  complete@policyengine-claude

# Run the workflow
/encode-policy "Iowa TANF"`}</pre>
          </div>
        </div>

        <div className="mt-6 p-5 bg-pe-teal/5 border border-pe-teal/20 rounded-xl w-full max-w-3xl">
          <p className="text-pe-dark text-base">
            The workflow guides you through each phase, checks quality gates, and fixes issues automatically. The final PR is ready for human review.
          </p>
        </div>
      </div>
    </Slide>
  );
}
