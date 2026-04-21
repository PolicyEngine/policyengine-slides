import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const lessons = [
  {
    title: 'Start with one repeated workflow',
    desc: "Pick a document-heavy task that happens every week and already has a clear owner. Strategy becomes real when it attaches to a workflow people can point to.",
  },
  {
    title: 'Make the workflow legible first',
    desc: "If the process lives in people's heads, AI cannot help much. Source docs, examples, review criteria, and fallback rules are the real foundation.",
  },
  {
    title: 'Create an opportunity mindset, not a fear spiral',
    desc: "This is a cultural change problem as much as a technical one. People need permission, budget, and examples that make the upside concrete before they will change how they work.",
  },
  {
    title: 'Measure reliability before you scale',
    desc: "Evals turn AI from a cool demo into an accountable system. Define what good looks like for your mission, then benchmark the model and the workflow against it.",
  },
];

export default function LessonsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What I&apos;d tell a CIO to do next</SlideTitle>
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
