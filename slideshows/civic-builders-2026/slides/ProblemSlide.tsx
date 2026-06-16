import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { IconHome, IconCode, IconBuildingBank, type Icon } from '@tabler/icons-react';

const pains: { icon: Icon; who: string; headline: string; detail: string }[] = [
  {
    icon: IconHome,
    who: 'Households',
    headline: "Can't see what they're owed",
    detail:
      'Families can’t tell how a raise, a move, or a new baby changes their taxes — or which benefits they already qualify for.',
  },
  {
    icon: IconCode,
    who: 'Builders & agencies',
    headline: 'Rebuild the same rules',
    detail:
      'Every screener, calculator, and eligibility system re-encodes SNAP, the EITC, Medicaid, and the tax code — then drifts out of sync.',
  },
  {
    icon: IconBuildingBank,
    who: 'Policymakers',
    headline: "Can't see who wins or loses",
    detail:
      'A bill becomes law before anyone can show how it actually lands on real households.',
  },
];

export default function ProblemSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The rules are public. Computing them isn&apos;t.</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-6 mt-2">
        {pains.map((p, i) => (
          <div key={i} className="content-card p-6">
            <div
              className="icon-circle mb-4"
              style={{ width: '48px', height: '48px', borderRadius: '14px' }}
            >
              <p.icon size={26} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
            </div>
            <div className="slide-tag mb-3" style={{ fontSize: '0.7rem' }}>
              {p.who}
            </div>
            <h3 className="text-xl font-bold text-pe-dark mb-2 leading-tight">
              {p.headline}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{p.detail}</p>
          </div>
        ))}
      </div>

      <div className="accent-block mt-8">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          The tax-and-benefit code shapes every household &mdash; but the power to
          compute it has been locked inside agencies and consultancies.
        </p>
      </div>
    </Slide>
  );
}
