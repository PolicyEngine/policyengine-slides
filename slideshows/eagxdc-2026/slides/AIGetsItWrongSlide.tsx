import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { Kicker } from './WorkshopComponents';

const modelGuesses = [
  { model: 'gpt-5.5', pred: '$0' },
  { model: 'claude-opus-4.7', pred: '$0' },
  { model: 'claude-sonnet-4.6', pred: '$0' },
  { model: 'claude-haiku-4.5', pred: '$0' },
  { model: 'gemini-3.1-pro-preview', pred: '$0' },
  { model: 'gemini-3-flash-preview', pred: '$0' },
  { model: 'gemini-3.1-flash-lite-preview', pred: '$0' },
  { model: 'gpt-5.4-mini', pred: '$0' },
  { model: 'gpt-5.4-nano', pred: '$0' },
  { model: 'grok-4.1-fast', pred: '$0' },
  { model: 'grok-4.3', pred: '$0' },
  { model: 'grok-4.20', pred: '$3,600' },
];

export default function AIGetsItWrongSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Policymakers ask AI — and AI gets the basics wrong</SlideTitle>
        <p className="text-lg text-gray-600 mt-1">
          Real PolicyBench scenario, 2026-05-01 snapshot, no-tools condition.
          12 frontier models, one Ohio household.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-[1fr_1fr] gap-8 mt-4">
        <div className="space-y-4">
          <div>
            <Kicker>Household</Kicker>
            <div
              className="rounded-xl p-4 mt-1 text-white/90"
              style={{
                background: 'linear-gradient(135deg, #5C3D2E 0%, #3E2518 100%)',
              }}
            >
              <p className="text-sm leading-relaxed font-mono">
                Ohio · joint filers<br />
                2 adults (58, 54) · 2 adult dependents (one disabled)<br />
                Wages: $12,072 · S-corp: $13,011<br />
                Capital gains: $9,845 · other: $-1,114<br />
                <span className="text-white/70">Total income: $33,826</span>
              </p>
            </div>
          </div>

          <div>
            <Kicker>Question</Kicker>
            <p className="text-base text-gray-700 mt-1 italic">
              What is this household&apos;s annual SNAP benefit?
            </p>
          </div>

          <div>
            <Kicker>PolicyEngine</Kicker>
            <div className="content-card p-4 border-l-4 border-pe-teal mt-1">
              <p className="text-3xl font-black text-pe-teal mb-1">$6,164 / yr</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Eligible via Ohio broad-based categorical eligibility (no
                asset test); benefit computed from net income after
                SNAP deductions.
              </p>
            </div>
          </div>

          <div className="text-3xl font-black leading-tight text-pe-dark pt-2">
            11 of 12 said{' '}
            <span className="text-amber-700">$0</span>.
            The 12th was <span className="text-amber-700">42% low</span>.
          </div>
        </div>

        <div>
          <Kicker>What 12 frontier models said</Kicker>
          <div className="content-card p-3 mt-1">
            <table className="w-full text-sm">
              <tbody>
                {modelGuesses.map((m) => (
                  <tr
                    key={m.model}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="py-1.5 font-mono text-gray-700">{m.model}</td>
                    <td className="py-1.5 text-right font-mono font-bold text-amber-700">
                      {m.pred}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 italic">
            Source: policybench.org, US 100-household snapshot,
            2026-05-01, no-tools condition.
          </p>
        </div>
      </div>
    </Slide>
  );
}
