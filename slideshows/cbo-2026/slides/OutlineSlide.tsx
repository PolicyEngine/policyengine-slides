import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const sections = [
  {
    number: '1',
    title: 'Rules',
    detail:
      'Encoded law — what we have, how AI is helping us scale it, and where Axiom takes it next.',
  },
  {
    number: '2',
    title: 'Data',
    detail:
      'Calibrated microdata — fused with machine learning, reweighted to administrative totals, now moving to a new paradigm.',
  },
  {
    number: '3',
    title: 'Theory',
    detail:
      'Behavioral responses — elasticities, take-up, and where LLMs are starting to help us study them.',
  },
  {
    number: '4',
    title: 'Analysis',
    detail:
      'Putting it together — how the rules, data, and theory turn into projections worth acting on.',
  },
];

export default function OutlineSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What we&apos;ll cover</SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-4 gap-5">
        {sections.map((section) => (
          <div key={section.number} className="content-card p-6">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-mono text-4xl font-bold text-pe-teal">
                {section.number}
              </span>
              <h3 className="font-mono text-xl font-bold text-gray-800">
                {section.title}
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              {section.detail}
            </p>
          </div>
        ))}
      </div>
    </Slide>
  );
}
