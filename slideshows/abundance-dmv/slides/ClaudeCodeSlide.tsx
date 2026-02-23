import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { IconBrandPython, IconRobot, IconArrowRight } from '@tabler/icons-react';

export default function ClaudeCodeSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Built for AI</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-6 mt-4">
        <div className="content-card p-6">
          <div className="flex items-center gap-3 mb-3">
            <IconBrandPython size={24} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
            <h3 className="text-lg font-bold text-pe-dark">Python-native</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Open-source Python framework works natively with AI coding tools. AI can call PolicyEngine just like any library.
          </p>
        </div>

        <div className="content-card p-6">
          <div className="flex items-center gap-3 mb-3">
            <IconRobot size={24} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
            <h3 className="text-lg font-bold text-pe-dark">Models AI can&apos;t memorize</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Tax and benefit rules are too complex and change too often for any LLM to internalize. AI needs high-quality simulation tools.
          </p>
        </div>

        <div className="content-card p-6">
          <div className="flex items-center gap-3 mb-3">
            <IconArrowRight size={24} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
            <h3 className="text-lg font-bold text-pe-dark">Where it&apos;s going</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            AI will change society dramatically. Policymakers need tools to respond equally fast &mdash; and AI needs credible economic models to give good advice.
          </p>
        </div>
      </div>

      <div className="mt-8 content-card p-6 text-center" style={{ background: 'linear-gradient(135deg, var(--pe-light) 0%, white 100%)' }}>
        <p className="text-xl font-bold text-pe-dark">
          Let&apos;s check on our results
        </p>
      </div>
    </Slide>
  );
}
