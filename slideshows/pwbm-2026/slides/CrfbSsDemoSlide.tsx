import Slide from '@/components/core/Slide';

export default function CrfbSsDemoSlide() {
  return (
    <Slide showFooter={false} fullBleed>
      <iframe
        src="https://www.policyengine.org/us/taxation-of-benefits-reforms"
        className="w-full h-full border-0 block pointer-events-none"
        title="CRFB Social Security TOB impacts"
      />
    </Slide>
  );
}
