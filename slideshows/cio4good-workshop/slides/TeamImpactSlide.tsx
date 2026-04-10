import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function TeamImpactSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What this changed about our organization</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-5 mt-6">
        {[
          {
            title: 'Productivity divergence',
            desc: "We required everyone to use AI tools from the start. The people who lean in get 5–10x. The people who don't, don't. That variation is now the strongest signal in hiring and role design.",
          },
          {
            title: 'Products shifted',
            desc: "We built a Claude Code plugin because users gravitated to AI interaction more than our web app. The plugin now gets more usage. We're increasingly building for AI agents, not just human users.",
          },
          {
            title: 'Budget rebalanced',
            desc: '$20k+/week in AI tokens. Bigger portions of total budget going to tools rather than payroll — but the tools amplify each person. It\'s new leverage, not replacement.',
          },
        ].map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">{item.title}</h3>
            <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl p-6 text-white" style={{ background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' }}>
        <p className="text-lg leading-relaxed">
          <strong>The analogy that works:</strong> giving someone full AI access is like putting them in charge of a team.
          The people who thrive are the ones who see it as new resources to accomplish more for the mission —
          not a threat, and not just a faster way to do the same work.
        </p>
      </div>
    </Slide>
  );
}
