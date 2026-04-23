import Slide from '@/components/core/Slide';

export default function CliffWatchDemoSlide() {
  return (
    <Slide showFooter={false} fullBleed>
      <iframe
        src="https://www.policyengine.org/us/cliff-watch"
        className="w-full h-full border-0 block pointer-events-none"
        title="Cliff-Watch"
      />
    </Slide>
  );
}
