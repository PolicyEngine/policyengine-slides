import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

/**
 * SPM resources as Census defines them, not as any model implements them.
 * Elements follow P60-290 Table 5 ("Effect of individual elements on SPM
 * rates"): additions are Social Security, refundable tax credits (EITC and
 * the refundable CTC), SNAP, SSI, housing subsidies, school lunch, child
 * support received, TANF/general assistance, unemployment insurance, energy
 * assistance, WIC, and workers' compensation; subtractions are child support
 * paid, income taxes, work expenses (including child care), payroll taxes,
 * and medical expenses. The report's own summary: the SPM "subtracts amounts
 * paid for child support, income and payroll taxes, work-related expenses,
 * and medical expenses" and counts in-kind benefits the official measure
 * leaves out. Health coverage is not valued as a resource.
 */
const rows: { component: string; items: string }[] = [
  { component: 'Cash income', items: 'Wages, self-employment, interest, dividends, pensions, Social Security, SSI, TANF and general assistance, unemployment and workers’ compensation, child support received' },
  { component: 'In-kind benefits (added)', items: 'SNAP, WIC, school lunch, housing subsidies, energy assistance' },
  { component: 'Refundable tax credits (added)', items: 'EITC and the refundable portion of the Child Tax Credit' },
  { component: 'Taxes (subtracted)', items: 'Income and payroll taxes' },
  { component: 'Necessary expenses (subtracted)', items: 'Work expenses including child care, child support paid, medical out-of-pocket spending including premiums' },
  { component: 'Not counted', items: 'Medicaid, Medicare, and other health coverage' },
];

export default function SpmComponentsSlide() {
  return (
    <Slide center>
      <SlideHeader>
        <SlideTitle>What goes into SPM resources</SlideTitle>
      </SlideHeader>
      <div className="mt-4 content-card overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="text-white" style={{ background: 'var(--pe-dark)' }}>
              <th className="px-4 py-2 text-sm font-semibold w-[300px]">Component</th>
              <th className="px-4 py-2 text-sm font-semibold">What is in it</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map((r) => (
              <tr key={r.component}>
                <td className="px-4 py-2 text-base font-semibold text-gray-800 align-top">{r.component}</td>
                <td className="px-4 py-2 text-base text-gray-700 align-top">{r.items}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Resources below the SPM threshold means the unit is in poverty. The threshold varies with housing tenure and local rents;
        PolicyEngine computes it with spm-calculator, open source at policyengine.org/us/spm-calculator.
      </p>
    </Slide>
  );
}
