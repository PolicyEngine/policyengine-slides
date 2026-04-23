import Slide from '@/components/core/Slide';

export default function OBBBADemoSlide() {
  return (
    <Slide showFooter={false} fullBleed>
      <iframe
        src="https://www.policyengine.org/us/obbba-household-by-household"
        className="w-full h-full border-0 block pointer-events-none"
        title="OBBBA household-by-household"
      />
    </Slide>
  );
}
