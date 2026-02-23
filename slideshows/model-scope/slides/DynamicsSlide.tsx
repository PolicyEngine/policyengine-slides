import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function DynamicsSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>We model behavioural responses to policy changes</SlideTitle>
        </SlideHeader>

        <div className="space-y-10 text-left px-12 py-6">
          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}>PolicyEngine models <strong>labour supply elasticities</strong> and <strong>capital gains elasticities</strong> to capture behavioural responses to tax and benefit changes</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}>We model the <strong>pass-through of employer National Insurance</strong> and <strong>land and carbon taxes</strong> to understand economic incidence</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}><strong>Private school VAT</strong> models enrollment responses to fee changes from VAT application</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}>Follows <strong>Office for Budget Responsibility elasticity framework</strong> with adjustable parameters for users to customise behavioural assumptions</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
