import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';

export default function EndSlide() {
  return (
    <Slide isEnd showFooter={false}>
      <div className="flex flex-col items-center justify-center space-y-10">
        <SlideTitle className="text-white">How we can help</SlideTitle>
        <div className="text-xl text-white space-y-8 text-center max-w-4xl">
          <p className="text-2xl font-medium text-white/90">
            PolicyEngine is free and open source - we welcome you to use it
          </p>

          <div className="grid grid-cols-3 gap-8 pt-4">
            <div className="space-y-2">
              <p className="text-2xl font-semibold">Analysis</p>
              <p className="text-white/70">Custom policy research and impact analysis</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-semibold">Tool Building</p>
              <p className="text-white/70">Custom calculators and dashboards</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-semibold">On-site Installation</p>
              <p className="text-white/70">Deploy PolicyEngine in your infrastructure</p>
            </div>
          </div>

          <div className="pt-6 space-y-2">
            <p className="text-2xl">PolicyEngine.org</p>
            <p className="text-white/70">max@policyengine.org</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
