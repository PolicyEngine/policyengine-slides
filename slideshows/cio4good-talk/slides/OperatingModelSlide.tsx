import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function OperatingModelSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>If I were a CIO</SlideTitle>
        </SlideHeader>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="space-y-5">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">
                Make the CEO use coding agents
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Not because they need to write code. Because software is part of
                every organization&apos;s job, and if leadership doesn&apos;t know what
                the tools can do, they can&apos;t set the right strategy. You end up
                setting it for them &mdash; and that&apos;s not sustainable.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">
                Set the example, then put it in performance reviews
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                I use $60K/week in AI coding tokens. I&apos;m #1 globally on the
                Straude leaderboard by 6x. I can require this of my team because
                I do it myself. It puts people out of their comfort zone &mdash;
                and makes them feel more accomplished.
              </p>
            </div>
          </div>

          <div
            className="rounded-xl p-8 text-white flex flex-col justify-center"
            style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}
          >
            <h3 className="text-2xl font-bold leading-tight mb-5">
              My almost-primary mission is getting my colleagues to use AI more
            </h3>
            <p className="text-base text-white/80 leading-relaxed mb-4">
              Because the mission we have is enormous. AI is what makes it not
              insane for a 10-person team to attempt it. Every person who leans
              in gets dramatically more leverage toward what we&apos;re trying to
              accomplish.
            </p>
            <p className="text-base text-white/60 leading-relaxed">
              Incorporate it into planning, roadmaps, resourcing. Not as a side
              project &mdash; as the operating model.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
