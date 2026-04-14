import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function OutcomesSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>What changes about the people</SlideTitle>
        </SlideHeader>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">
              There is a growing divergence
            </h3>
            <p className="text-base text-gray-600 leading-relaxed mb-3">
              Within our team, and across the sector. The people who lean in
              treat AI like being put in charge of a team &mdash; new resources
              to accomplish more for the mission. They don&apos;t just use it;
              they want to do more.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              The ROI on investing in those people is enormous. But you also
              can&apos;t leave everyone else behind &mdash; that&apos;s the
              harder leadership work.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">
              The CIO is now setting strategy
            </h3>
            <p className="text-base text-gray-600 leading-relaxed mb-3">
              If the CEO doesn&apos;t know what the tools can do, you end up
              setting the strategy by default. That&apos;s happening to CIOs
              everywhere right now.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              That&apos;s an opportunity, not a burden. You control the
              resources. You understand the capabilities. You should be at the
              table for the biggest questions about what the org attempts next.
            </p>
          </div>
        </div>

        <div
          className="mt-6 rounded-xl p-6 text-white"
          style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}
        >
          <p className="text-lg leading-relaxed">
            <strong>The question for every CIO in this room:</strong> if you
            believed in your mission and suddenly had 5x the capacity to pursue
            it, what would you tell those people to do? That&apos;s the question
            AI is asking you right now.
          </p>
        </div>
      </div>
    </Slide>
  );
}
