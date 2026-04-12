import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const lessons = [
  {
    title: 'Pick one broken workflow, not a strategy',
    desc: "AI strategy documents are a distraction. Find the most painful, most-repeated task your team does and start there. The insight comes from doing, not planning.",
  },
  {
    title: 'Write down the rules before automating them',
    desc: "If the process lives in someone's head, AI can't help you. Documentation is the unlock — not the model. The work of making your rules explicit is 80% of the value.",
  },
  {
    title: 'Make the CEO use coding agents',
    desc: "The CIO's job is to close the awareness gap between what AI can actually do and what leadership imagines. That gap compounds every month. The fastest fix is a hands-on demo that makes it personal.",
  },
  {
    title: 'The divergence is a signal, not a problem',
    desc: "When you give everyone AI access, some people run with it and some don't. That split tells you more about role fit and ambition than any org chart review. Use it.",
  },
];

export default function LessonsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What I&apos;d tell you to try first</SlideTitle>
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
