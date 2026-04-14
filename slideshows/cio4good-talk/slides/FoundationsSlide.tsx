import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const foundations = [
  {
    eyebrow: 'Foundation 01',
    title: 'Structured data',
    copy: 'If your data lives in spreadsheets and email attachments, AI can\u2019t help you at scale. Clean entities, stable definitions, and datasets that can be re-run and audited.',
  },
  {
    eyebrow: 'Foundation 02',
    title: 'Legible documents',
    copy: 'Your policies, procedures, and references need to be something both humans and machines can trace back to the same source. If the knowledge is in someone\u2019s head, AI can\u2019t use it.',
  },
  {
    eyebrow: 'Foundation 03',
    title: 'Skilled workflows',
    copy: 'A repeatable loop for building, reviewing, and shipping \u2014 with named owners who maintain it. Not a graveyard of abandoned tools two years from now.',
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
