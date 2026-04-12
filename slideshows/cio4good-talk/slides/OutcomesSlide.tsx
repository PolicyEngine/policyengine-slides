import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const columns = [
  {
    title: 'Internal capacity',
    items: [
      'Faster iteration on policy ideas and edge cases',
      'Shared language between domain experts and builders',
      'Less black-box work and easier onboarding',
    ],
  },
  {
    title: 'Mission delivery',
    items: [
      'More consistent answers for users and partners',
      'Results people can inspect, challenge, and trust',
      'A stronger link between data strategy and real decisions',
    ],
  },
];

export default function OutcomesSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>What the organization gets back</SlideTitle>
        </SlideHeader>

        <div className="grid grid-cols-2 gap-8 mt-6">
          {columns.map((col, i) => (
            <div
              key={i}
              className="rounded-xl p-6 flex flex-col"
              style={{ background: 'linear-gradient(180deg, #f5fffc 0%, #ebfffb 100%)' }}
            >
              <h3 className="font-mono text-lg font-bold text-gray-800 mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 text-emerald-600 font-bold">&#10003;</span>
                    <span className="text-base text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 accent-block">
          <p className="text-xl text-gray-700">
            The payoff is not AI theater. It is faster, more accountable decisions.
          </p>
        </div>
      </div>
    </Slide>
  );
}
