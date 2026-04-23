import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const scenarios = [
  { label: 'Baseline', gini: '0.507', topShare: '38.2%' },
  { label: '10% shift', gini: '0.527', topShare: '40.3%' },
  { label: '50% shift', gini: '0.623', topShare: '51.4%' },
  { label: '50% shift + UBI', gini: '0.608', topShare: '50.4%' },
];

const stakes = [
  'Hold GDP fixed, then shift income from labor to capital.',
  'Rerun the tax-benefit system over representative households.',
  'Test compensating policy responses like UBI against the same shock.',
];

export default function AIInequalitySlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>We score AI-driven distributional shocks on the same stack</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Microsimulation translates income-share shifts into household and
          poverty outcomes.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[0.9fr_1.1fr] gap-8 mt-6">
        <div className="space-y-5">
          <div className="content-card p-6">
            <h3 className="font-mono text-lg font-bold text-gray-800 mb-3">
              Labor-to-capital shift scenario
            </h3>
            <div className="space-y-3 text-lg text-gray-700">
              {stakes.map((stake) => (
                <div key={stake} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-pe-teal flex-shrink-0" />
                  <span>{stake}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-6 text-white"
            style={{ background: 'linear-gradient(135deg, #1d4044 0%, #17343a 100%)' }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-white/55 mb-3">
              Why it matters
            </p>
            <p className="text-2xl leading-relaxed text-white/90">
              When AI shifts the labor-capital split, poverty, tax incidence,
              and the value of countermeasures all move with it.
            </p>
          </div>

        </div>

        <div className="content-card p-6">
          <h3 className="font-mono text-lg font-bold text-gray-800 mb-4">
            Initial AI-inequality results
          </h3>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 text-sm uppercase tracking-wider text-gray-500">
                <th className="pb-3 font-semibold">Scenario</th>
                <th className="pb-3 font-semibold">Net Gini</th>
                <th className="pb-3 font-semibold">Top 10% share</th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map((scenario, index) => (
                <tr
                  key={scenario.label}
                  className={index < scenarios.length - 1 ? 'border-b border-gray-100' : ''}
                >
                  <td className="py-4 text-lg font-semibold text-gray-800">
                    {scenario.label}
                  </td>
                  <td className="py-4 text-lg text-gray-700">{scenario.gini}</td>
                  <td className="py-4 text-lg text-gray-700">{scenario.topShare}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="accent-block mt-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              A 50% labor-to-capital shift raises the net Gini from 0.507 to
              0.623 and the top-10% share from 38.2% to 51.4%. Recycling the
              added revenue as a flat UBI partially offsets both.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
