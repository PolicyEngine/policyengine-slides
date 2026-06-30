import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import StatNumber from '@/components/content/StatNumber';

const stats = [
  { value: '$500', label: 'Per child', sublabel: 'Refundable' },
  { value: '$27M', label: 'Annual cost', sublabel: 'Estimated' },
  { value: '1 in 5', label: 'Washingtonians', sublabel: 'See a benefit' },
  { value: '−5%', label: 'Child poverty', sublabel: 'Supplemental Poverty Measure' },
];

export default function DCSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Washington, DC: scoring a Council proposal</SlideTitle>
      </SlideHeader>

      <p className="text-2xl text-gray-500 -mt-4 mb-9">
        PolicyEngine analyzed Councilmember Parker&apos;s District Child Tax Credit
      </p>

      <div className="grid grid-cols-4 gap-5">
        {stats.map((s) => (
          <div key={s.label} className="content-card p-5">
            <StatNumber value={s.value} label={s.label} sublabel={s.sublabel} />
          </div>
        ))}
      </div>

      <div className="mt-7">
        <div className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">
          The same analysis goes deeper — from a governor&apos;s budget to a single council bill
        </div>
        <div className="flex gap-4">
          {[
            'Impact by income decile',
            'Poverty effects by race and sex',
            'Whether it adds or avoids benefit cliffs',
          ].map((t) => (
            <div
              key={t}
              className="flex-1 rounded-xl border border-pe-200 bg-pe-50 px-5 py-4 text-lg font-medium text-pe-dark"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
