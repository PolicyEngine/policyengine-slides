import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const sections = [
  {
    number: '1',
    title: 'Rules',
    detail:
      'Law as executable code — the encoder, the Axiom Foundation, and a Belgian income tax validated against EUROMOD.',
  },
  {
    number: '2',
    title: 'Data',
    detail:
      'Populations you can simulate on — imputation, calibration to administrative totals, and Microcosm-BE.',
  },
  {
    number: '3',
    title: 'Live',
    detail:
      'Browse the encoded law, run a Belgian reform, score a policy in a few lines of Python.',
  },
  {
    number: '4',
    title: 'Where this goes',
    detail:
      'Conductors, forecast uncertainty, and what it takes for these tools to enter public administrations.',
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
