import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function TeamImpactSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What this changed about how we operate</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-5 mt-6">
        {[
          {
            title: 'Productivity divergence',
            desc: "We gave everyone strong model access and expected them to use it. The people who lean in operate at a visibly different speed. That variation is a signal \u2014 but you can\u2019t just ignore the people who aren\u2019t there yet. You have a responsibility to bring them along, and that\u2019s the harder leadership work.",
          },
          {
            title: 'Interfaces shifted',
            desc: "Users increasingly want explanations, copilots, and tool-based interfaces. We now design products so both humans and AI agents can operate on them, not just one or the other.",
          },
          {
            title: 'Budgets shifted',
            desc: 'A meaningful share of spend now goes to model access and coding agents. That spend does not replace people; it changes the leverage each person has and the speed the org can sustain.',
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
          <strong>The analogy that works:</strong> giving someone strong AI access is like putting them in charge of a small team.
          The people who thrive are the ones who treat it as new mission capacity, not just a faster text editor.
        </p>
      </div>
    </Slide>
  );
}
