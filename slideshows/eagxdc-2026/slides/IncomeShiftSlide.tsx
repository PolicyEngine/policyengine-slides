import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

interface Row {
  label: string;
  description: string;
  mktTop1: string;
  netTop1: string;
  mktChange: string;
  netChange: string;
  ratio: string;
  fedRevDelta: string;
}

const rows: Row[] = [
  {
    label: 'Baseline',
    description: 'Current 2026 US labor and capital income mix',
    mktTop1: '26.6%',
    netTop1: '21.3%',
    mktChange: '—',
    netChange: '—',
    ratio: '0.80',
    fedRevDelta: '—',
  },
  {
    label: '10% shift',
    description: '10% of labor income redirected to capital',
    mktTop1: '30.3%',
    netTop1: '24.2%',
    mktChange: '+3.7 pp',
    netChange: '+3.0 pp',
    ratio: '0.80',
    fedRevDelta: '−$98B',
  },
  {
    label: '30% shift',
    description: '30% of labor income redirected to capital',
    mktTop1: '38.2%',
    netTop1: '30.6%',
    mktChange: '+11.7 pp',
    netChange: '+9.4 pp',
    ratio: '0.80',
    fedRevDelta: '−$234B',
  },
  {
    label: '50% shift',
    description: '50% of labor income redirected to capital',
    mktTop1: '46.6%',
    netTop1: '37.3%',
    mktChange: '+20.0 pp',
    netChange: '+16.0 pp',
    ratio: '0.80',
    fedRevDelta: '−$335B',
  },
];

export default function IncomeShiftSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Case study: stress-testing under an AI labor-to-capital shift</SlideTitle>
        <p className="text-lg text-gray-600 mt-1">
          PolicyEngine US 2026, Enhanced CPS. Static, no behavioral response.
          The kind of scenario you can&apos;t run from outside a closed model.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[0.7fr_1.3fr] gap-9 mt-7 items-center">
        <div>
          <div className="text-5xl font-black leading-tight text-pe-dark">
            The current system{' '}
            <span className="text-pe-teal">passes the shock through.</span>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            Post-tax top-1% share stays at ~80% of pre-tax across every
            shift level — the baseline ratio is preserved, not improved on.
            Federal income tax rises with capital concentration but payroll
            receipts fall by more, so combined federal income + payroll
            revenue declines.
          </p>
          <p className="text-sm text-gray-500 italic mt-4">
            policyengine.org/us/ai-inequality/income-shift
          </p>
        </div>

        <div className="content-card p-5">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                <th className="pb-3" rowSpan={2}>Scenario</th>
                <th className="pb-1 px-2 text-center" colSpan={2}>
                  Top 1% income share
                </th>
                <th className="pb-3 text-right" rowSpan={2}>Post / Pre</th>
                <th className="pb-3 text-right" rowSpan={2}>Δ Fed inc + payroll</th>
              </tr>
              <tr className="border-b border-gray-200 text-[10px] uppercase tracking-wider text-gray-400">
                <th className="pb-2 text-right">Pre-tax</th>
                <th className="pb-2 text-right">Post-tax</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i < rows.length - 1 ? 'border-b border-gray-100' : ''}
                >
                  <td className="py-3">
                    <div className="text-base font-bold text-pe-dark">
                      {row.label}
                    </div>
                    <div className="text-[11px] text-gray-500 mt-0.5">
                      {row.description}
                    </div>
                  </td>
                  <td className="py-3 px-2 text-right">
                    <div className="text-lg font-mono font-bold text-pe-dark">
                      {row.mktTop1}
                    </div>
                    {row.mktChange !== '—' && (
                      <div className="text-[10px] text-gray-500 font-mono">
                        {row.mktChange}
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-2 text-right">
                    <div className="text-lg font-mono font-bold text-pe-dark">
                      {row.netTop1}
                    </div>
                    {row.netChange !== '—' && (
                      <div className="text-[10px] text-gray-500 font-mono">
                        {row.netChange}
                      </div>
                    )}
                  </td>
                  <td className="py-3 text-right text-lg font-mono font-bold text-pe-teal">
                    {row.ratio}
                  </td>
                  <td className="py-3 text-right text-lg font-mono font-bold text-amber-700">
                    {row.fedRevDelta}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[11px] text-gray-500 mt-3 italic">
            Post / Pre = post-tax top-1% share ÷ pre-tax top-1% share. Last
            column = change in federal income tax + payroll tax (employee +
            employer + self-employment), vs baseline.
          </p>
        </div>
      </div>
    </Slide>
  );
}
