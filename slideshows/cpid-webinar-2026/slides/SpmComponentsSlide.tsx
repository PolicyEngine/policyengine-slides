import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

/**
 * Rows follow policyengine-us: spm_unit_net_income = spm_unit_market_income
 * + spm_unit_benefits + ACP/EBB − spm_unit_taxes − spm_unit_spm_expenses;
 * spm_unit_benefits draws on gov/household/household_benefits.yaml plus
 * state programs; health benefits stay out of net income by default
 * (gov/simulation/include_health_benefits_in_net_income = false).
 * "How it enters" per Max's 9/11 review: every in-kind program (SNAP, WIC,
 * school meals, housing via hud_hap + take-up, Head Start, CSFP, and the 51
 * CCDF child care programs) computes from rules; child care contributes
 * zero in the statewide microdata until attendance-days inputs land. SSI
 * and TANF are rules; other cash flows are calibrated survey data;
 * expenses are survey inputs with SPM caps applied by rule.
 */
const rows: { component: string; items: string; how: string }[] = [
  { component: 'Market income', items: 'Wages, self-employment, interest, dividends, pensions, and other cash income', how: 'Survey data, calibrated to administrative totals' },
  { component: 'Cash benefits', items: 'Social Security, SSI and state supplements, TANF, unemployment and workers’ compensation, child support received', how: 'SSI, TANF from rules; rest from data' },
  { component: 'In-kind benefits', items: 'SNAP, WIC, school meals, housing subsidy (capped), CSFP, Head Start, state child care subsidies', how: 'All from rules with take-up; child care inactive in statewide data pending attendance inputs' },
  { component: 'Taxes and credits', items: 'Federal and state income tax net of refundable credits (EITC, CTC), payroll and self-employment tax', how: 'Computed from the rules' },
  { component: 'Necessary expenses', items: 'Child support paid, medical out-of-pocket, work and child care expenses (capped)', how: 'Survey data, imputed where missing; SPM caps by rule' },
  { component: 'Not counted by default', items: 'Medicaid, CHIP, and other health benefit values', how: 'Off unless a reform turns it on' },
];

export default function SpmComponentsSlide() {
  return (
    <Slide center>
      <SlideHeader>
        <SlideTitle>What goes into SPM resources in the model</SlideTitle>
      </SlideHeader>
      <div className="mt-4 content-card overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="text-white" style={{ background: 'var(--pe-dark)' }}>
              <th className="px-4 py-2 text-sm font-semibold w-[200px]">Component</th>
              <th className="px-4 py-2 text-sm font-semibold">What is in it</th>
              <th className="px-4 py-2 text-sm font-semibold w-[250px]">How it enters</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map((r) => (
              <tr key={r.component}>
                <td className="px-4 py-1.5 text-sm font-semibold text-gray-800 align-top">{r.component}</td>
                <td className="px-4 py-1.5 text-sm text-gray-700 align-top">{r.items}</td>
                <td className="px-4 py-1.5 text-sm text-gray-500 align-top">{r.how}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Resources minus the SPM threshold decides whether a household counts as poor. The threshold varies with housing tenure and local costs;
        PolicyEngine computes it with spm-calculator, open source at policyengine.org/us/spm-calculator.
      </p>
    </Slide>
  );
}
