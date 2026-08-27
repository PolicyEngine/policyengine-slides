import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';

export default function ClosingLoopSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The loop that matters most</SlideTitle>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-[1.35fr_0.65fr] gap-8 items-start">
        <div className="space-y-6">
          <p className="text-2xl text-gray-800 leading-relaxed">
            Every primitive has its gauge &mdash; conformance suites,
            provenance, calibration error, cross-engine agreement. The one
            that ranks them all:{' '}
            <span className="font-medium text-pe-teal">
              do the forecasts resolve against reality?
            </span>
          </p>

          <div className="content-card p-7">
            <div className="slide-tag mb-3">The measurable question</div>
            <p className="text-xl text-gray-700 leading-relaxed">
              When this stack covers a new country, does Thesis predict
              outcomes there better? We built the Belgian prototype in weeks
              because Microcosm calibrates to official statistics rather than
              rebuilding a survey pipeline &mdash; the same recipe now applies
              country by country. Whether that improves resolved forecasts is
              a question we can score, and intend to.
            </p>
          </div>

          <div className="accent-block">
            <p className="text-xl text-gray-800 leading-relaxed">
              And policy takes a different shape when baseline conditions
              change quickly. If you assign any real probability to rapid
              AI-driven change, the question for this community is how policy
              analysis arms policymakers to respond &mdash; a thread for the
              roundtable at 16:00.
            </p>
          </div>
        </div>

        <div className="content-card p-7 flex flex-col items-center text-center gap-4">
          <Image
            src="/logos/thesis-institute.png"
            alt="The Thesis Institute"
            width={532}
            height={112}
            style={{ width: '260px', height: 'auto' }}
          />
          <p className="text-lg text-gray-700 leading-relaxed">
            Open forecasts of public outcomes, scored against reality.
          </p>
          <p className="text-base text-gray-500 leading-snug">
            Every prediction published with its chain of reasoning, graded
            when the official number lands. The track record is the product.
          </p>
          <p className="font-mono text-sm text-pe-teal mt-auto">
            thesisinstitute.org
          </p>
        </div>
      </div>
    </Slide>
  );
}
