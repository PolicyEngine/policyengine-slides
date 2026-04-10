import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function OrgTransformSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Invest in your people — the variation tells you everything</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          We give every team member full access to AI tools — hundreds of dollars per person per month.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="space-y-5">
          <div className="rounded-xl p-6" style={{ background: 'linear-gradient(180deg, #f5fffc 0%, #ebfffb 100%)' }}>
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">What we see</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Wide variation across the team. The people who embrace it treat AI like being put in charge of a team — new resources to accomplish more for the mission. They don&rsquo;t just use it; they want to do more.
            </p>
          </div>
          <div className="rounded-xl p-6" style={{ background: 'linear-gradient(180deg, #f5fffc 0%, #ebfffb 100%)' }}>
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">What it tells us</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              AI adoption patterns have reshaped how we think about staffing, roles, and what we look for in people. The best signal is who sees the tool as leverage for mission impact.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-xl p-6 text-white" style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}>
            <h3 className="text-xl font-bold leading-tight mb-3">
              Eventually, we&rsquo;re all just guiding AIs to promote our mission
            </h3>
            <p className="text-base text-white/80 leading-relaxed mb-4">
              The organizational question becomes: how do you define mission precisely enough to be the harness? And how do you build the feedback loops?
            </p>
            <p className="text-base text-white/60 leading-relaxed">
              Budget, staffing, org structure — all of it follows from how well you answer that question.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
