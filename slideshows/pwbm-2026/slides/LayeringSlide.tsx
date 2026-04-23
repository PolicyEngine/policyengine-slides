import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const columns = [
  {
    tag: 'PolicyEngine',
    title: 'Where we go deep',
    points: [
      'Household-level tax and benefit rules',
      'Federal plus state interactions and eligibility logic',
      'Open, versioned code and calibrated data artifacts',
      'Fast reform iteration for analysts and product surfaces',
    ],
  },
  {
    tag: 'PWBM',
    title: 'Where they go deep',
    points: [
      'Structural dynamic modeling on top of policy modules',
      'Savings, labor supply, capital, debt, and welfare effects',
      'Long-run intertemporal and macro incidence',
      'A richer frame for decades-long policy tradeoffs',
    ],
  },
];

export default function LayeringSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>We sit at a different layer of the stack</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          The fit with PWBM is complementarity, not substitution.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8 mt-8">
        {columns.map((column) => (
          <div key={column.tag} className="content-card p-8">
            <div className="slide-tag mb-5">{column.tag}</div>
            <h3 className="font-mono text-2xl font-bold text-gray-800 mb-5">
              {column.title}
            </h3>
            <ul className="slide-list text-xl text-gray-700 space-y-4">
              {column.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="mt-8 rounded-2xl px-8 py-7 text-white"
        style={{ background: 'linear-gradient(135deg, #1d4044 0%, #17343a 100%)' }}
      >
        <p className="text-2xl leading-relaxed text-white/90">
          <span className="text-[var(--pe-teal-light)] font-semibold">
            The pitch:
          </span>{' '}
          PolicyEngine can be the open household-policy engine below, while PWBM
          adds the structural dynamic layer above.
        </p>
      </div>
    </Slide>
  );
}
