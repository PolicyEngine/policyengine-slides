import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const plans = [
  {
    plan: 'RAP',
    status: 'From July 1, 2026',
    rule: '1% to 10% of total AGI, by $10,000 bracket ($120 a year at AGI up to $10,000), divided by 12, minus $50 a month per dependent; at least $10 a month',
    source: '20 U.S.C. 1087e(q)',
  },
  {
    plan: 'IBR',
    status: 'Continues for existing loans',
    rule: '15% of AGI above 150% of the poverty guideline (10% for new borrowers), divided by 12, capped at the 10-year standard payment',
    source: '20 U.S.C. 1098e',
  },
  {
    plan: 'SAVE',
    status: 'Blocked by the courts; shown as if available',
    rule: '5% (undergraduate loans) to 10% (other loans) of AGI above 225% of the poverty guideline, divided by 12',
    source: '34 CFR 685.209(f)(1)',
  },
  {
    plan: 'Standard 10-year',
    status: 'Loans made before July 1, 2026',
    rule: 'A fixed payment that repays the balance with interest over 10 years',
    source: '34 CFR 685.208',
  },
];

export default function PlanRulesSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How each plan sets the monthly payment</SlideTitle>
      </SlideHeader>
      <div className="content-card overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="text-white" style={{ background: 'var(--pe-dark)' }}>
              <th className="px-4 py-2 text-base font-semibold w-44">Plan</th>
              <th className="px-4 py-2 text-base font-semibold">Payment</th>
              <th className="px-4 py-2 text-base font-semibold w-52">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {plans.map((p) => (
              <tr key={p.plan}>
                <td className="px-4 py-3 align-top">
                  <p className="text-xl font-semibold text-gray-900">{p.plan}</p>
                  <p className="text-sm text-gray-500">{p.status}</p>
                </td>
                <td className="px-4 py-3 text-lg text-gray-800 leading-snug align-top">{p.rule}</td>
                <td className="px-4 py-3 text-base text-gray-600 align-top">{p.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-lg text-gray-600 leading-snug">
        Under RAP, IBR and SAVE, married borrowers filing jointly use the couple&apos;s combined AGI. Because RAP applies its rate to all of AGI, not just the
        income above a threshold, the payment jumps each time AGI crosses a multiple of $10,000.
      </p>
    </Slide>
  );
}
