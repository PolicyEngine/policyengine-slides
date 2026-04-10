import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const lessons = [
  {
    title: 'Structure the work, not just the prompt',
    desc: "The bottleneck isn't AI capability — it's how you break work into chunks an agent can execute reliably. Documentation, evals, and feedback loops matter more than clever prompts.",
  },
  {
    title: 'Skills over agents',
    desc: "Don't start by building an autonomous agent. Start with a skill — one well-defined task with clear instructions. Skills compose into agents naturally once the pieces work.",
  },
  {
    title: 'Embrace the divergence',
    desc: "Your team will split into people who run with AI and people who resist. That's information, not a problem. Use it to reshape roles, not to force uniformity.",
  },
  {
    title: 'Think bigger about your mission',
    desc: "AI didn't just make us faster. It made us split into two organizations and rethink what's possible. If your ambition hasn't changed, you're probably underusing the tools.",
  },
];

export default function LessonsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Design lessons</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-5 mt-6">
        {lessons.map((l, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-6 flex items-start gap-4">
            <span className="flex-shrink-0 text-lg font-bold text-white bg-[var(--pe-teal)] rounded-full w-9 h-9 flex items-center justify-center">
              {i + 1}
            </span>
            <div>
              <h3 className="font-mono text-lg font-bold text-gray-800 mb-2">{l.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{l.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
