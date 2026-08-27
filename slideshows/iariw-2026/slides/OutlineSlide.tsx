import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const sections = [
  {
    number: '1',
    title: 'Axiom',
    detail: 'The rules, executable — verified against EUROMOD in Belgium.',
  },
  {
    number: '2',
    title: 'Chronicle',
    detail: 'Official statistics as source-backed facts.',
  },
  {
    number: '3',
    title: 'Microcosm',
    detail: 'The world at micro level, calibrated to administrative truth.',
  },
  {
    number: '4',
    title: 'PolicyEngine',
    detail: 'The model that composes them — live, in the browser and in Python.',
  },
  {
    number: '5',
    title: 'Together',
    detail: 'Judgment, uncertainty, and the loop that matters most.',
  },
];

export default function OutlineSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Five primitives, five demos</SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-5 gap-4">
        {sections.map((section) => (
          <div key={section.number} className="content-card p-5">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-mono text-4xl font-bold text-pe-teal">
                {section.number}
              </span>
              <h3 className="font-mono text-lg font-bold text-gray-800">
                {section.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {section.detail}
            </p>
          </div>
        ))}
      </div>
    </Slide>
  );
}
