import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const milestones = [
  {
    period: 'Late 2024',
    capability: 'Inline autocomplete, single-file edits',
    example: 'Copilot suggesting the next function body.',
  },
  {
    period: 'Mid 2025',
    capability: 'Multi-file edits with human approval',
    example: 'Claude / Cursor proposing diffs across a codebase.',
  },
  {
    period: 'Late 2025',
    capability: 'Agentic tools that plan, edit, run tests, iterate',
    example: 'Claude Code and Codex shipping working PRs end-to-end.',
  },
  {
    period: 'Early 2026',
    capability: 'Multi-hour autonomous tasks, tool orchestration',
    example: 'Agents running our microsim, comparing scenarios, generating reports.',
  },
  {
    period: 'Plausibly 2-5 years out',
    capability: 'Sustained engineering on complex, ambiguous specifications',
    example: 'Encoding a new statute end-to-end with human review only at checkpoints.',
  },
];

export default function AITrajectorySlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How fast this has been moving</SlideTitle>
      </SlideHeader>

      <div className="mt-8 space-y-3">
        {milestones.map((m, i) => (
          <div
            key={i}
            className={`grid grid-cols-[180px_1fr_1fr] gap-6 items-start p-4 rounded-lg ${
              i === milestones.length - 1 ? 'bg-pe-teal/5 border-l-3 border-pe-teal' : ''
            }`}
          >
            <div className="font-mono text-base text-pe-teal font-bold">{m.period}</div>
            <div className="text-lg text-gray-900 font-medium leading-snug">{m.capability}</div>
            <div className="text-base text-gray-600 leading-snug">{m.example}</div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-lg text-gray-600 italic max-w-4xl">
        Hands-on time with each generation recalibrates intuitions about pace in a way reading about benchmarks does not.
      </p>
    </Slide>
  );
}
