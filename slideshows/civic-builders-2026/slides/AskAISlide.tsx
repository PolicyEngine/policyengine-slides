import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { IconSparkles } from '@tabler/icons-react';

export default function AskAISlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Now, in plain English</SlideTitle>
      </SlideHeader>

      <div className="flex flex-col items-center">
        <div
          className="content-card px-8 py-5 max-w-3xl text-center"
          style={{ background: 'linear-gradient(135deg, var(--pe-light) 0%, white 100%)' }}
        >
          <div className="icon-circle mx-auto mb-3" style={{ width: '52px', height: '52px' }}>
            <IconSparkles size={28} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
          </div>
          <h2 className="text-2xl font-bold text-pe-dark mb-2">
            Ask a question &mdash; get a computed answer
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Tax and benefit rules are too complex and change too often for any model
            to memorize. PolicyEngine is the layer underneath &mdash; so the answer is
            calculated, not guessed.
          </p>
        </div>

        <div className="mt-5 code-block max-w-3xl w-full">
          <div className="code-block-header">
            <div className="code-block-dot bg-red-500" />
            <div className="code-block-dot bg-yellow-500" />
            <div className="code-block-dot bg-green-500" />
            <span className="text-white/50 text-sm ml-2 font-mono">live demo</span>
          </div>
          <div className="code-block-content" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
            <p className="text-green-400">
              &gt; If DC raised its Earned Income Tax Credit, who would benefit &mdash;
              and what would it cost the District?
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-3">Let&apos;s look.</p>
      </div>
    </Slide>
  );
}
