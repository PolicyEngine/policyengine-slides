import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const columns = [
  {
    title: 'Governance',
    items: [
      'Clear owners for statutes, parameters, and datasets',
      'Version control for rules and assumptions',
      'Explicit decisions about what counts as source of truth',
    ],
  },
  {
    title: 'Builder loop',
    items: [
      'Analysts and engineers working from the same references',
      'Tests around edge cases, effective dates, and expected outputs',
      'A fast path from draft logic to inspectable results',
    ],
  },
  {
    title: 'Adoption',
    items: [
      'Leadership has to use the tools, not just approve them \u2014 otherwise you\u2019re setting strategy blind',
      'Give people a sandbox and real problems, not a training course and a policy memo',
      'Expect divergence \u2014 use it as a signal, but take responsibility for bringing people along',
    ],
  },
];

export default function OperatingModelSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>What made it work organization-wide</SlideTitle>
        </SlideHeader>

        <div className="grid grid-cols-3 gap-6 mt-6">
          {columns.map((col, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 flex flex-col ${i === 2 ? 'text-white' : 'border border-gray-200'}`}
              style={i === 2 ? { background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' } : {}}
            >
              <h3 className={`font-mono text-lg font-bold mb-4 ${i === 2 ? 'text-white' : 'text-gray-800'}`}>
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className={`mt-1 flex-shrink-0 ${i === 2 ? 'text-[var(--pe-teal)]' : 'text-[var(--pe-teal)]'}`}>
                      &bull;
                    </span>
                    <span className={`text-base leading-relaxed ${i === 2 ? 'text-white/85' : 'text-gray-600'}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 accent-block">
          <p className="text-xl text-gray-700">
            Treat AI adoption as operating-model design, not just model procurement.
          </p>
        </div>
      </div>
    </Slide>
  );
}
