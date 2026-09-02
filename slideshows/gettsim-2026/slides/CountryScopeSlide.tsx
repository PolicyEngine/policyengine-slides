import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const rows = [
  { country: 'United States', params: '5,956', vars: '5,981', note: '' },
  { country: 'United Kingdom', params: '597', vars: '872', note: '' },
  { country: 'Canada', params: '395', vars: '393', note: '' },
  { country: 'Israel', params: '2', vars: '19', note: 'early' },
  { country: 'Nigeria', params: '6', vars: '17', note: 'early' },
];

export default function CountryScopeSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The models, by country</SlideTitle>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-[1.15fr_0.85fr] gap-10 items-start">
        <div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left text-sm uppercase tracking-wide text-gray-500 pb-3">
                  Country
                </th>
                <th className="text-right text-sm uppercase tracking-wide text-gray-500 pb-3">
                  Parameter files
                </th>
                <th className="text-right text-sm uppercase tracking-wide text-gray-500 pb-3">
                  Variables
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.country} className="border-b border-gray-100">
                  <td className="py-3 text-xl text-gray-800">
                    {r.country}
                    {r.note && (
                      <span className="ml-3 text-xs uppercase tracking-wide text-gray-400 align-middle">
                        {r.note}
                      </span>
                    )}
                  </td>
                  <td className="py-3 text-xl font-mono text-right text-pe-teal">
                    {r.params}
                  </td>
                  <td className="py-3 text-xl font-mono text-right text-pe-teal">
                    {r.vars}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="py-3 text-xl text-gray-800">
                  Belgium{' '}
                  <span className="ml-3 text-xs uppercase tracking-wide text-gray-400 align-middle">
                    via Axiom
                  </span>
                </td>
                <td
                  className="py-3 text-xl font-mono text-right text-pe-teal"
                  colSpan={2}
                >
                  107 encoded provisions
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-sm text-gray-500 leading-snug">
            File counts on each repository&apos;s main branch, 27 August 2026;
            one file per variable. The 5,956 US parameter files define the
            95,000+ dated parameter values.
          </p>
        </div>

        <div className="space-y-5">
          <div className="content-card p-6">
            <div className="slide-tag mb-3">The shape of the gap</div>
            <p className="text-base text-gray-700 leading-relaxed">
              Depth follows demand: the US and UK models are
              production-grade; Canada is substantial; Israel and Nigeria are
              community seeds awaiting the same treatment.
            </p>
          </div>
          <div className="accent-block">
            <p className="text-base text-gray-700 leading-relaxed">
              The encoder evolution changes this arithmetic: the Belgian
              provisions arrived in weeks, verified against EUROMOD:
              the recipe every next country inherits.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
