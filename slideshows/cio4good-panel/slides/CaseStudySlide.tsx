import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function CaseStudySlide() {
  return (
    <Slide>
      <SlideHeader>
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--pe-teal)] mb-1">Case study</p>
        <SlideTitle>PolicyEngine at 10 Downing Street</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Our CTO is an Innovation Fellow with 10DS, the No. 10 data science team.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-5 mt-6">
        {[
          {
            label: 'The problem',
            desc: "When the policy process moves fast, there isn't always time for the full analytical process. Decision-makers needed faster access to evidence on how reforms affect living standards and local area incomes.",
          },
          {
            label: 'What they built',
            desc: "The 10DS team built 10ds-microsim on top of PolicyEngine \u2014 rapidly estimating impacts of reforms on living standards, local area incomes, and distributional outcomes. Validated against official forecasts.",
          },
          {
            label: 'The AI shift',
            desc: "We spent a year building a new frontend. Now 10DS largely uses AI with our model on the backend \u2014 answering questions directly or building custom interfaces. We have to adapt: the value is the computation engine, not the UI we built around it.",
          },
        ].map((item, i) => (
          <div key={i} className="rounded-xl p-6" style={{ background: 'linear-gradient(180deg, #f5fffc 0%, #ebfffb 100%)' }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--pe-teal)] mb-3">{item.label}</p>
            <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}
