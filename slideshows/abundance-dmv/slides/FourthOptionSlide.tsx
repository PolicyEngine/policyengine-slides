import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { IconSparkles } from '@tabler/icons-react';

export default function FourthOptionSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What if there was a fourth option?</SlideTitle>
      </SlideHeader>

      <div className="flex flex-col items-center justify-center mt-4">
        <div className="content-card p-8 max-w-3xl text-center" style={{ background: 'linear-gradient(135deg, var(--pe-light) 0%, white 100%)' }}>
          <div className="icon-circle mx-auto mb-5" style={{ width: '64px', height: '64px' }}>
            <IconSparkles size={32} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
          </div>
          <h2 className="text-3xl font-bold text-pe-dark mb-3">
            Ask AI &mdash; backed by a credible economic model
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Policy analysis was already too slow. AI-driven economic change makes it urgent &mdash; policymakers need to respond at the speed the world is moving.
          </p>
        </div>

        <div className="mt-6 code-block max-w-3xl w-full">
          <div className="code-block-header">
            <div className="code-block-dot bg-red-500" />
            <div className="code-block-dot bg-yellow-500" />
            <div className="code-block-dot bg-green-500" />
            <span className="text-white/50 text-sm ml-2 font-mono">live demo</span>
          </div>
          <div className="code-block-content">
            <p className="text-green-400">
              &gt; What would a $3,000 fully refundable child tax credit cost the federal government, and how would it affect child poverty?
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-3">
          Let&apos;s kick this off and come back for results
        </p>
      </div>
    </Slide>
  );
}
