import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const sections = [
  {
    number: '1',
    title: 'Rules',
    org: 'The Axiom Foundation',
    detail:
      'How AI encodes law — six stages of evolution — and the Axiom rules engine: statute, rules, and computation graph published together, validated against EUROMOD.',
  },
  {
    number: '2',
    title: 'Data',
    org: 'Microcosm',
    detail:
      'The microdata underneath the models — calibrated to what the statistical agencies publish, every target and its error in the open.',
  },
  {
    number: '3',
    title: 'Microsimulation',
    org: 'PolicyEngine',
    detail:
      'Rules plus data at population scale — and the scorecard that grades the model against external scorekeepers.',
  },
];

export default function AgendaSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Today: rules, data, microsimulation</SlideTitle>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-3 gap-7 items-stretch">
        {sections.map((s) => (
          <div key={s.number} className="content-card p-7 flex flex-col">
            <div className="font-mono text-6xl font-bold text-pe-teal/25 leading-none">
              {s.number}
            </div>
            <h3 className="text-3xl font-bold text-pe-dark mt-3">{s.title}</h3>
            <div className="slide-tag mt-2">{s.org}</div>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              {s.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="accent-block mt-8 max-w-5xl">
        <p className="text-xl text-gray-800 leading-relaxed">
          AI builds at every layer &mdash; and every layer ships with a public
          harness that grades it.
        </p>
      </div>
    </Slide>
  );
}
