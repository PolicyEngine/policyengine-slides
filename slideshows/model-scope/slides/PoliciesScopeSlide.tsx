import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function PoliciesScopeSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>We model dozens of tax and benefit policies</SlideTitle>
        </SlideHeader>

        <div className="space-y-10 text-left px-12 py-6">
          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}>PolicyEngine UK models <strong>direct taxes</strong> including income tax, National Insurance, capital gains tax, and council tax/domestic rates</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}>We model <strong>indirect taxes</strong> such as VAT and fuel duty, and <strong>property and land taxes</strong> across all UK nations</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}><strong>Means-tested benefits</strong> include Universal Credit, Housing Benefit, Tax Credits, and Pension Credit</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}><strong>Non-means-tested benefits</strong> include Personal Independence Payment (PIP), Disability Living Allowance (DLA), Attendance Allowance, Child Benefit, and State Pension</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}>We model <strong>childcare programmes</strong> including tax-free childcare, universal childcare entitlement, and extended childcare entitlement</p>
          </div>

          <div className="flex items-start gap-4 text-2xl">
            <span className="flex-shrink-0" style={{ lineHeight: '1.5' }}>•</span>
            <p style={{ lineHeight: '1.5' }}>All models are validated against <strong>legislative references</strong> and verified through <strong>thousands of unit tests</strong></p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
