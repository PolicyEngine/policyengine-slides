import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const sections = [
  {
    number: '1',
    title: 'Rules',
    detail: 'Coverage tracker, multi-model validation, partners, Cliff-Watch.',
  },
  {
    number: '2',
    title: 'Data',
    detail: 'Microdata pipeline, pinned reproducibility, OBBBA distributional viewer.',
  },
  {
    number: '3',
    title: 'Theory',
    detail: 'Behavioral elasticities and the CRFB Social Security project.',
  },
  {
    number: '4',
    title: 'AI',
    detail: 'How we use it for scale; what we study in it; why it expands the mission.',
  },
];

export default function OutlineSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What we’ll cover</SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-2 gap-6">
        {sections.map((section) => (
          <div key={section.number} className="content-card p-8">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-5xl font-bold text-pe-teal">
                {section.number}
              </span>
              <h3 className="font-mono text-2xl font-bold text-gray-800">
                {section.title}
              </h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mt-3">
              {section.detail}
            </p>
          </div>
        ))}
      </div>
    </Slide>
  );
}
