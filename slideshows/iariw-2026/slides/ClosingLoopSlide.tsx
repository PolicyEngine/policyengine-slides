import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function ClosingLoopSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The loop that matters most</SlideTitle>
      </SlideHeader>

      <div className="mt-10 max-w-5xl space-y-8">
        <p className="text-2xl text-gray-800 leading-relaxed">
          Every primitive has its gauge &mdash; conformance suites, provenance,
          calibration error, cross-engine agreement. The one that ranks them
          all: <span className="font-medium text-pe-teal">do the forecasts
          resolve against reality?</span>
        </p>

        <div className="content-card p-7">
          <div className="slide-tag mb-3">The measurable question</div>
          <p className="text-xl text-gray-700 leading-relaxed">
            When this stack covers a new country, do calibrated agents predict
            outcomes there better? We built the Belgian prototype in weeks
            because Microcosm calibrates to official statistics rather than
            rebuilding a survey pipeline &mdash; the same recipe now applies
            country by country. Whether that improves resolved forecasts is a
            question we can score, and intend to.
          </p>
        </div>

        <div className="accent-block">
          <p className="text-xl text-gray-800 leading-relaxed">
            And policy takes a different shape when baseline conditions change
            quickly. If you assign any real probability to rapid AI-driven
            change, the question for this community is how policy analysis
            arms policymakers to respond &mdash; a thread for the roundtable
            at 16:00.
          </p>
        </div>
      </div>
    </Slide>
  );
}
