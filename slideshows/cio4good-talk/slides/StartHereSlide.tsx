import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const steps = [
  {
    eyebrow: 'Step 01',
    title: 'Pick one workflow',
    copy: 'Choose a concrete, high-friction task where better structure would obviously save time or improve quality.',
  },
  {
    eyebrow: 'Step 02',
    title: 'Name one source of truth',
    copy: 'Make the rules, documents, and data behind that workflow legible and versioned.',
  },
  {
    eyebrow: 'Step 03',
    title: 'Require one review loop',
    copy: 'Keep humans in the loop with tests, citations, and a clear owner for final judgment.',
  },
];

export default function StartHereSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>If I were starting today</SlideTitle>
        </SlideHeader>

        <div className="grid grid-cols-3 gap-6 mt-6">
          {steps.map((s, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-6 flex flex-col">
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--pe-teal)] mb-3">
                {s.eyebrow}
              </p>
              <h3 className="font-mono text-xl font-bold text-gray-800 mb-3">{s.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{s.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 accent-block">
          <p className="text-xl text-gray-700">Start small, but make the workflow real.</p>
        </div>
      </div>
    </Slide>
  );
}
