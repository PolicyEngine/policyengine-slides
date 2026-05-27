import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const sections = [
  {
    number: '1',
    title: 'Where AI is',
    detail: 'What current models can and cannot do, where they are useful inside a modeling shop today, and how fast that has been moving.',
  },
  {
    number: '2',
    title: 'How PolicyEngine and Axiom work',
    detail: 'Three layers — rules (encoded law, increasingly via Axiom as a public good), calibrated data, behavioral dynamics — and where AI is changing how each is built.',
  },
  {
    number: '3',
    title: 'Uncertainty',
    detail: 'Parameter versus model uncertainty, domains of validity, and the backtesting we are setting up.',
  },
  {
    number: '4',
    title: 'The community is scaling',
    detail: 'What the wider community of policy forecasters is already producing — and the bigger picture it points toward: dramatically more evidence for the people setting policy.',
  },
];

export default function OutlineSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What we&apos;ll cover</SlideTitle>
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
