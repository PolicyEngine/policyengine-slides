import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const stages = [
  {
    label: 'Stage 1',
    title: 'Single prompt',
    desc: 'Give ChatGPT a statute, ask it to write the code. Copy-paste the result. Quick wins, but fragile — no tests, no validation, no consistency across rules.',
    timeframe: '2023',
  },
  {
    label: 'Stage 2',
    title: 'Pipeline',
    desc: 'Break encoding into steps: collect docs → encode parameters → write formulas → generate tests → validate. Each step has its own prompt and quality checks.',
    timeframe: '2024–25',
  },
  {
    label: 'Stage 3',
    title: 'Parallel multi-agent',
    desc: 'An orchestrator dispatches 100+ AI agents in parallel — like sending 100 interns to each work on one regulation independently. Human review at the end, not every step.',
    timeframe: '2026',
  },
];

export default function EvolutionSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Under the hood of the three stages from earlier</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-5 mt-6">
        {stages.map((s, i) => (
          <div
            key={s.label}
            className={`rounded-xl p-6 flex flex-col ${i === 2 ? 'text-white' : 'border border-gray-200'}`}
            style={i === 2 ? { background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' } : {}}
          >
            <div className="flex items-center justify-between mb-3">
              <p className={`text-sm font-semibold uppercase tracking-widest ${i === 2 ? 'text-[var(--pe-teal)] opacity-80' : 'text-[var(--pe-teal)]'}`}>
                {s.label}
              </p>
              <span className={`text-sm font-mono ${i === 2 ? 'text-white/50' : 'text-gray-400'}`}>{s.timeframe}</span>
            </div>
            <h3 className={`text-xl font-bold mb-3 ${i === 2 ? 'text-white' : 'text-gray-800'}`}>
              {s.title}
            </h3>
            <p className={`text-base leading-relaxed ${i === 2 ? 'text-white/80' : 'text-gray-600'}`}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 pl-5 border-l-4 border-[var(--pe-teal)]">
        <p className="text-lg text-gray-700">
          <strong className="text-gray-800">The pattern:</strong> at each stage, the bottleneck shifted from &ldquo;can the AI do this?&rdquo; to &ldquo;how do we structure work so it can do this reliably at scale?&rdquo;
        </p>
      </div>
    </Slide>
  );
}
