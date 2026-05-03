import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const stages = [
  {
    label: 'Stage 1',
    title: 'Single prompt',
    desc: 'Paste a statute, ask ChatGPT for the code. Quick wins, fragile output, no tests.',
    timeframe: '2023',
  },
  {
    label: 'Stage 2',
    title: 'Pipeline',
    desc: 'Decompose: collect docs → encode parameters → write formulas → generate tests → validate. Each step has its own prompt and quality check.',
    timeframe: '2024–25',
  },
  {
    label: 'Stage 3',
    title: 'Parallel multi-agent',
    desc: 'An orchestrator dispatches specialized agents on independent regulations in parallel, each producing tests and a draft PR. Humans review the final PR rather than every intermediate prompt.',
    timeframe: '2026',
  },
];

export default function EncodingEvolutionSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>AI also expands the model itself</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Same grounding principle, applied to engineering: agents produce
          code, tests, and reviewable artifacts.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-5 mt-8">
        {stages.map((s, i) => (
          <div
            key={s.label}
            className={`rounded-xl p-6 flex flex-col ${
              i === 2 ? 'text-white' : 'border border-gray-200'
            }`}
            style={
              i === 2
                ? {
                    background:
                      'linear-gradient(180deg, #1d4044 0%, #17343a 100%)',
                  }
                : undefined
            }
          >
            <div className="flex items-center justify-between mb-3">
              <p
                className={`text-sm font-semibold uppercase tracking-widest ${
                  i === 2 ? 'text-pe-teal opacity-80' : 'text-pe-teal'
                }`}
              >
                {s.label}
              </p>
              <span
                className={`text-sm font-mono ${
                  i === 2 ? 'text-white/50' : 'text-gray-400'
                }`}
              >
                {s.timeframe}
              </span>
            </div>
            <h3
              className={`text-2xl font-bold mb-3 ${
                i === 2 ? 'text-white' : 'text-pe-dark'
              }`}
            >
              {s.title}
            </h3>
            <p
              className={`text-base leading-relaxed ${
                i === 2 ? 'text-white/85' : 'text-gray-600'
              }`}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="accent-block mt-8 max-w-5xl">
        <p className="text-xl text-gray-700 leading-relaxed">
          The engineering question stops being &quot;how do we cover more
          programs?&quot; and starts being &quot;what if every rule were
          machine-readable?&quot;
        </p>
      </div>
    </Slide>
  );
}
