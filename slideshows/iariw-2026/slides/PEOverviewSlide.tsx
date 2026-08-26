import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const stats = [
  { value: '95,000+', label: 'parameters in the US model' },
  { value: '5,500+', label: 'variables' },
  { value: '4,693', label: 'test files' },
  { value: '103', label: 'programs in the coverage registry' },
];

const credibility = [
  {
    org: 'No 10 Downing Street',
    detail:
      'The data science team built 10ds-microsim on PolicyEngine; CTO Nikhil Woodruff has served there as an Innovation Fellow since summer 2025.',
  },
  {
    org: 'NBER',
    detail: 'MOU for an open source TAXSIM emulator.',
  },
  {
    org: 'Federal Reserve Bank of Atlanta',
    detail:
      'MOU bringing the Policy Rules Database into our validation infrastructure.',
  },
];

export default function PEOverviewSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>PolicyEngine today</SlideTitle>
      </SlideHeader>

      <p className="text-2xl text-gray-800 leading-relaxed max-w-5xl">
        Free, open source software to compute the impact of public policy.
        US and UK tax-benefit models, public code since June 2021 (AGPL-3.0),
        133 contributors to the US model.
      </p>

      <div className="mt-8 grid grid-cols-[1fr_1.1fr] gap-10 items-start">
        <div className="grid grid-cols-2 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="content-card p-5">
              <div className="text-4xl font-extrabold tracking-tight text-pe-teal">
                {s.value}
              </div>
              <div className="text-base text-gray-600 leading-snug mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl p-7 text-white"
          style={{
            background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)',
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-pe-teal mb-4">
            In other institutions&apos; hands
          </p>
          <div className="space-y-4">
            {credibility.map((c) => (
              <div key={c.org}>
                <p className="text-lg font-semibold">{c.org}</p>
                <p className="text-base leading-snug font-light text-white/80">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 accent-block max-w-5xl">
        <p className="text-xl text-gray-800 leading-relaxed">
          Think of it as an open EUROMOD-family stack for the US and UK, built
          in public.
        </p>
      </div>
    </Slide>
  );
}
