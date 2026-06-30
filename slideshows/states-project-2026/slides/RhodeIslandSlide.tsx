import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import StatNumber from '@/components/content/StatNumber';

const stats = [
  { value: '$325', label: 'Per child', sublabel: 'Fully refundable, under 19' },
  { value: '$36.7M', label: 'Annual cost', sublabel: 'To the state' },
  { value: '29.2%', label: 'Of Rhode Islanders', sublabel: 'See a benefit' },
  { value: '−2.1%', label: 'Child poverty', sublabel: 'Supplemental Poverty Measure' },
];

export default function RhodeIslandSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Rhode Island used PolicyEngine to design its first Child Tax Credit</SlideTitle>
      </SlideHeader>

      <p className="text-2xl text-gray-500 -mt-4 mb-9">
        Governor McKee&apos;s office tested options in real time, then put a CTC in his FY2027 budget
      </p>

      <div className="grid grid-cols-4 gap-5">
        {stats.map((s) => (
          <div key={s.label} className="content-card p-5">
            <StatNumber value={s.value} label={s.label} sublabel={s.sublabel} />
          </div>
        ))}
      </div>

      <div className="mt-7 accent-block">
        <p className="text-xl text-pe-dark font-medium leading-snug">
          No household ends up worse off — the credit replaces a personal exemption that left out the
          lowest-income families.
        </p>
        <p className="mt-1 text-sm text-gray-400">
          Commissioned by the Niskanen Center · 2027 estimates, PolicyEngine static modeling.
        </p>
      </div>
    </Slide>
  );
}
