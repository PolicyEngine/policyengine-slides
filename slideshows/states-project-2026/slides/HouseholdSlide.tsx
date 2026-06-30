import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function HouseholdSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Not an average. Yours.</SlideTitle>
      </SlideHeader>

      <p className="text-2xl text-gray-500 -mt-4 mb-9">
        Any voter can see exactly how a proposal changes their own family&apos;s bottom line
      </p>

      <div className="grid grid-cols-[1fr_auto_1.45fr] items-center gap-8">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-7">
          <div className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
            A household enters
          </div>
          <ul className="space-y-3 text-xl text-gray-700">
            <li><span className="text-gray-400">Who&apos;s in the home —</span> 2 adults, 2 kids</li>
            <li><span className="text-gray-400">Earnings —</span> $48,000</li>
            <li><span className="text-gray-400">State —</span> their own</li>
          </ul>
        </div>

        <div className="text-5xl font-bold text-pe-teal">›</div>

        <div className="content-card p-7">
          <div className="text-sm font-semibold uppercase tracking-wider text-pe-teal mb-4">
            PolicyEngine returns — to the dollar
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xl text-gray-800">
            <div>Federal &amp; state taxes</div>
            <div>SNAP, Medicaid, EITC, CTC</div>
            <div>Net income, before vs. after</div>
            <div>Marginal tax rate</div>
            <div className="col-span-2 pt-1 font-semibold text-pe-dark">
              Benefit cliffs they&apos;d hit as earnings rise
            </div>
          </div>
        </div>
      </div>

      <p className="mt-9 text-xl text-gray-500">
        Change one rule — a credit, a phase-out, a threshold — and the family&apos;s number updates instantly.
      </p>
    </Slide>
  );
}
