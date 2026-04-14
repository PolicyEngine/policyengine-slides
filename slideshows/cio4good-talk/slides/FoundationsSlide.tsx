import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const foundations = [
  {
    eyebrow: 'Foundation 01',
    title: 'Open everything up',
    copy: 'Our entire codebase is open source on GitHub. That means every AI agent can see every file, every rule, every test. The more legible your work is, the more AI can do with it.',
  },
  {
    eyebrow: 'Foundation 02',
    title: 'Require the tools',
    copy: 'We put everyone on Claude Code or Codex from the start. Not optional. The variation in adoption told us more about role fit and ambition than anything else.',
  },
  {
    eyebrow: 'Foundation 03',
    title: 'Build the harness',
    copy: 'Imagine you suddenly had 5x the staff. What would you actually tell them to do? That\u2019s the question AI forces. The mission statement becomes the performance management system.',
  },
];

export default function FoundationsSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>What AI needed from the organization</SlideTitle>
        </SlideHeader>

        <div className="grid grid-cols-3 gap-6 mt-6">
          {foundations.map((f, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-6 flex flex-col">
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--pe-teal)] mb-3">
                {f.eyebrow}
              </p>
              <h3 className="font-mono text-xl font-bold text-gray-800 mb-3">{f.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{f.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 accent-block">
          <p className="text-xl text-gray-700">
            AI becomes operational when humans and machines can navigate the same sources of truth.
          </p>
        </div>
      </div>
    </Slide>
  );
}
