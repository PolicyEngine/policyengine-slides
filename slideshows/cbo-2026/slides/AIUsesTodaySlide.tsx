import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const uses = [
  { title: 'First drafts', detail: 'Variable definitions, parameter YAML, test cases, documentation, code reviews.' },
  { title: 'Code navigation', detail: 'Finding implementations across a million lines of microsim code in seconds.' },
  { title: 'Test generation', detail: 'Edge cases, regression coverage, validation against external calculators.' },
  { title: 'Refactoring', detail: 'Moving modules, renaming variables, updating call sites consistently.' },
  { title: 'Custom interactives', detail: 'Bespoke analyses and visualizations on demand for specific questions.' },
  { title: 'Statute encoding', detail: 'Translating regulatory text into structured parameters and executable rules.' },
];

export default function AIUsesTodaySlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Where AI is useful, inside a modeling shop, today</SlideTitle>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-3 gap-5">
        {uses.map((use) => (
          <div key={use.title} className="content-card p-6">
            <h3 className="text-xl font-bold text-pe-dark mb-2">{use.title}</h3>
            <p className="text-base text-gray-600 leading-relaxed">{use.detail}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-xl text-gray-600 italic max-w-4xl">
        Each of these used to be a half-day of analyst attention. They are now a few minutes &mdash; with human review at every step.
      </p>
    </Slide>
  );
}
