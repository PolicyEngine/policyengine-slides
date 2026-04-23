import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const columns = [
  {
    title: 'What we have today',
    points: [
      'Labor-supply elasticities are user-parameterized per run; defaults are zero.',
      'Substitution effects use simulated effective MTRs; income effects use changes in net income.',
      'Capital-gains realization responses ship as their own module.',
    ],
  },
  {
    title: 'Why rules depth helps',
    points: [
      'Detailed tax-benefit interactions produce realistic effective marginal rates.',
      'Cliffs and phase-outs surface substitution effects that simpler models miss.',
      'Reform-specific elasticities plug in where evidence supports them.',
    ],
  },
  {
    title: 'Where we are underdeveloped',
    points: [
      'No intertemporal optimization or general equilibrium.',
      'Income elasticity is a scalar; substitution can vary by earner role and earnings decile.',
      'Broader savings and capital responses remain out of scope.',
    ],
  },
];

export default function BehavioralResponseSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Behavioral response is our least developed layer</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Rules depth already sharpens the effective-rate picture that
          elasticities multiply against.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-6 mt-8">
        {columns.map((column) => (
          <div key={column.title} className="content-card p-6">
            <h3 className="font-mono text-xl font-bold text-gray-800 mb-4">
              {column.title}
            </h3>
            <ul className="space-y-3 text-lg text-gray-700">
              {column.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-pe-teal flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="accent-block mt-8">
        <p className="text-xl text-gray-700 leading-relaxed">
          Users pick the elasticity assumption. Published outputs can report
          static and behavioral results alongside each other.
        </p>
      </div>
    </Slide>
  );
}
