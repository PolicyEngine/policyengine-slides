import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const items = [
  {
    number: 'Millions',
    detail:
      'Federal data points published per year (BLS, BEA, Census, IRS, SSA…).',
  },
  {
    number: '~10,000',
    detail: 'Bills introduced per Congress — CBO scores 6–8%.',
  },
  {
    number: '∞',
    detail: 'Policy ideas that never become bills, never get scored.',
  },
];

export default function ParadigmShiftSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What if we predicted everything?</SlideTitle>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-[1fr_1.05fr] gap-8 items-stretch">
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.number}
              className="grid grid-cols-[220px_1fr] gap-4 items-center p-4 rounded-lg border-l-3 border-pe-teal bg-white shadow-sm"
            >
              <div className="font-mono text-4xl font-bold text-pe-teal leading-none text-center break-words">
                {item.number}
              </div>
              <div className="text-base text-gray-700 leading-snug">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        <div
          className="p-8 rounded-xl text-white shadow-lg flex flex-col"
          style={{
            background:
              'linear-gradient(135deg, var(--pe-teal) 0%, var(--pe-dark) 100%)',
          }}
        >
          <div className="font-mono text-xs uppercase tracking-[0.15em] opacity-80 mb-3">
            A different paradigm
          </div>
          <p className="text-xl leading-relaxed font-light">
            Not incrementally more cost estimates. A fundamentally different
            relationship between policy and its projected consequences.
          </p>
          <p className="text-lg leading-relaxed mt-4 opacity-95">
            Full uncertainty ranges on every prediction. Conditional on every
            policy state. Updated continuously.
          </p>
          <div
            className="mt-auto pt-4 border-t"
            style={{ borderColor: 'rgba(255,255,255,0.25)' }}
          >
            <p className="text-xs italic leading-relaxed opacity-85">
              Two conversations about AI matter here. One is AI as an
              economic force — earnings, labor share, tax base. Important,
              not today&apos;s topic. Today: AI as a modeling tool that
              makes this paradigm possible.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
