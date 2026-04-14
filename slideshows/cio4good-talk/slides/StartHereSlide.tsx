import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const steps = [
  {
    eyebrow: 'Step 01',
    title: 'Pick one real bottleneck',
    copy: 'Not an AI strategy doc. A concrete task that\u2019s painful, repeated, and everyone agrees is slow \u2014 client intake, grant reporting, compliance checks, donor matching.',
  },
  {
    eyebrow: 'Step 02',
    title: 'Make the knowledge legible',
    copy: 'If the process lives in someone\u2019s head or scattered across spreadsheets, write it down. That documentation work is 80% of the value \u2014 AI or not.',
  },
  {
    eyebrow: 'Step 03',
    title: 'Give it an owner',
    copy: 'Someone has to maintain this. Not a committee \u2014 a named person who reviews outputs, updates the instructions, and decides when it\u2019s good enough to trust.',
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
