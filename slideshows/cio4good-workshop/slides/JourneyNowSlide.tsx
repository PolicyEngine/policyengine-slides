import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function JourneyNowSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Where we landed</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-5 mt-6">
        <div className="content-card p-7 text-center flex flex-col items-center justify-center">
          <div className="stat-number text-emerald-500">15%</div>
          <p className="text-gray-800 font-semibold text-lg mt-2">Error rate</p>
          <p className="text-gray-500 mt-1 text-sm">Down from 70%</p>
        </div>
        <div className="content-card p-7 text-center flex flex-col items-center justify-center">
          <div className="stat-number">90 min</div>
          <p className="text-gray-800 font-semibold text-lg mt-2">Per policy program</p>
          <p className="text-gray-500 mt-1 text-sm">Was 2–3 weeks</p>
        </div>
        <div className="content-card p-7 text-center flex flex-col items-center justify-center">
          <div className="stat-number">45+</div>
          <p className="text-gray-800 font-semibold text-lg mt-2">Programs in production</p>
          <p className="text-gray-500 mt-1 text-sm">Welfare programs across states</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className="rounded-xl p-5" style={{ background: 'linear-gradient(180deg, #f5fffc 0%, #ebfffb 100%)' }}>
          <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">The key innovation: skills</h3>
          <p className="text-base text-gray-700 leading-relaxed">
            Instead of repeating instructions in every agent, we extracted shared knowledge into
            focused &ldquo;skill&rdquo; files. Each agent loads only what it needs — like giving staff the
            right handbook for their specific task, not the entire operations manual.
          </p>
        </div>

        <div className="pl-5 border-l-4 border-[var(--pe-teal)] flex flex-col justify-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            The improvement came from <strong>restructuring the work</strong> — not from a better AI.
            The same models. Different organization.
          </p>
          <p className="text-base text-gray-500 mt-3">
            API partner MyFriendBen now uses our Illinois implementations to help families discover programs they qualify for.
          </p>
        </div>
      </div>
    </Slide>
  );
}
