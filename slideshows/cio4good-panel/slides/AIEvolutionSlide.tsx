import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const stages = [
  {
    label: 'Stage 1',
    title: 'AI for development',
    desc: 'Started with ChatGPT copy-paste. Now our team lives in Claude Code and Codex. Development velocity increased dramatically.',
  },
  {
    label: 'Stage 2',
    title: 'AI in products',
    desc: 'Built a chat interface that runs microsimulations, and a Claude Code plugin. Users gravitate to AI interaction even more than our web app.',
  },
  {
    label: 'Stage 3',
    title: 'Building for AIs',
    desc: 'The real shift: designing products and mission infrastructure that AIs can operate on. The mission becomes the harness.',
  },
];

export default function AIEvolutionSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Three stages of AI adoption — each reshaped how we think about the mission</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-5 mt-6">
        {stages.map((s, i) => (
          <div
            key={s.label}
            className={`rounded-xl p-6 ${i === 2 ? 'text-white' : 'border border-gray-200'}`}
            style={i === 2 ? { background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)' } : {}}
          >
            <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${i === 2 ? 'text-[var(--pe-teal)] opacity-80' : 'text-[var(--pe-teal)]'}`}>
              {s.label}
            </p>
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
          <strong className="text-gray-800">The question now:</strong> How do we create feedback loops for AI the way we would with a well-designed performance management system for human employees? <span className="text-gray-400 italic">&mdash; more on how we built this in the workshop</span>
        </p>
      </div>
    </Slide>
  );
}
