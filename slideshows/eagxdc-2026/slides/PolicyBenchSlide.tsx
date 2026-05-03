import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const leaderboard: { model: string; score: number; mae: string; isTop?: boolean }[] = [
  { model: 'gpt-5.5', score: 0.632, mae: '$316', isTop: true },
  { model: 'grok-4.20', score: 0.581, mae: '$242' },
  { model: 'gemini-3.1-pro-preview', score: 0.574, mae: '$440' },
  { model: 'gemini-3-flash-preview', score: 0.560, mae: '$385' },
  { model: 'claude-opus-4.7', score: 0.555, mae: '$412' },
  { model: 'grok-4.3', score: 0.537, mae: '$446' },
  { model: 'claude-sonnet-4.6', score: 0.504, mae: '$580' },
  { model: 'gemini-3.1-flash-lite-preview', score: 0.483, mae: '$432' },
  { model: 'grok-4.1-fast', score: 0.471, mae: '$1,051' },
  { model: 'claude-haiku-4.5', score: 0.451, mae: '$678' },
  { model: 'gpt-5.4-mini', score: 0.430, mae: '$938' },
  { model: 'gpt-5.4-nano', score: 0.391, mae: '$1,019' },
];

const variableMisses: { variable: string; score: string; mae: string; emphasis: 'worst' | 'mid' | 'mild' }[] = [
  { variable: 'Federal income tax', score: '0.42', mae: '$5,597', emphasis: 'worst' },
  { variable: 'State income tax', score: '0.47', mae: '$1,335', emphasis: 'worst' },
  { variable: 'Payroll tax', score: '0.56', mae: '$796', emphasis: 'mid' },
  { variable: 'SNAP', score: '0.66', mae: '$975', emphasis: 'mild' },
];

const emphasisClasses: Record<'worst' | 'mid' | 'mild', { name: string; cell: string }> = {
  worst: { name: 'text-amber-700 font-bold', cell: 'text-amber-700 font-bold' },
  mid: { name: 'text-gray-700 font-medium', cell: 'text-gray-700 font-medium' },
  mild: { name: 'text-gray-500', cell: 'text-gray-500' },
};

export default function PolicyBenchSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>PolicyBench: AIs miss basic tax-and-benefit math</SlideTitle>
        <p className="text-lg text-gray-600 mt-1">
          US 100-household snapshot, 2026-05-01, no-tools condition.
          Top model tops out at 63% on impact-weighted accuracy.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[0.95fr_1.05fr] gap-7 mt-4">
        <div className="content-card p-4">
          <div className="text-xs uppercase tracking-[0.16em] font-bold text-pe-teal mb-3">
            Impact-weighted leaderboard (12 frontier models)
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                <th className="pb-2 font-medium">Model</th>
                <th className="pb-2 text-right font-medium">Score</th>
                <th className="pb-2 text-right font-medium">MAE</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((m) => (
                <tr
                  key={m.model}
                  className="border-b border-gray-100 last:border-0"
                >
                  <td
                    className={`py-1.5 font-mono ${m.isTop ? 'font-bold text-pe-teal' : 'text-gray-700'}`}
                  >
                    {m.model}
                  </td>
                  <td
                    className={`py-1.5 text-right font-mono ${m.isTop ? 'font-bold text-pe-teal' : 'text-gray-700'}`}
                  >
                    {m.score.toFixed(3)}
                  </td>
                  <td className="py-1.5 text-right font-mono text-gray-500">
                    {m.mae}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-4">
          <div className="content-card p-4">
            <div className="text-xs uppercase tracking-[0.16em] font-bold text-pe-teal mb-3">
              Where models miss the most (mean across 12 models)
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                  <th className="pb-2 font-medium">Variable</th>
                  <th className="pb-2 text-right font-medium">Score</th>
                  <th className="pb-2 text-right font-medium">MAE</th>
                </tr>
              </thead>
              <tbody>
                {variableMisses.map((v) => {
                  const cls = emphasisClasses[v.emphasis];
                  return (
                    <tr
                      key={v.variable}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <td className={`py-2 font-mono ${cls.name}`}>
                        {v.variable}
                      </td>
                      <td className={`py-2 text-right font-mono ${cls.cell}`}>
                        {v.score}
                      </td>
                      <td className={`py-2 text-right font-mono ${cls.cell}`}>
                        {v.mae}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="accent-block">
            <p className="text-base text-gray-700 leading-relaxed">
              The basic dollar amounts policymakers ask about — federal
              income tax, payroll, state, SNAP — are precisely where models
              drift the most. The fix isn&apos;t a smarter model; it&apos;s
              the right tool plugged in.
            </p>
          </div>

          <p className="text-xs text-gray-500 italic">
            policybench.org · 12 models · 100 households · 2,180 variables ·
            frozen snapshot 2026-05-01.
          </p>
        </div>
      </div>
    </Slide>
  );
}
