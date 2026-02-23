import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideContent from '@/components/content/SlideContent';

export default function OBBBADemoSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <div className="flex items-center gap-4">
            <span className="slide-tag">Demo 4</span>
            <SlideTitle>20,000 households, one scroll</SlideTitle>
          </div>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="text-center space-y-8">
            <p className="text-2xl text-gray-600">
              See how impacts vary across income levels
            </p>

            <div className="code-block inline-block">
              <div className="code-block-header">
                <div className="code-block-dot bg-[#ff5f57]" />
                <div className="code-block-dot bg-[#febc2e]" />
                <div className="code-block-dot bg-[#28c840]" />
              </div>
              <div className="code-block-content">
                <p className="text-[#7ee787] text-xl">policyengine.org/us/obbba-household-by-household</p>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
