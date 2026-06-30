import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const attributes = [
  {
    label: 'Open source',
    body: 'Every calculation is transparent and auditable — no black box.',
  },
  {
    label: 'Nonpartisan',
    body: 'Used and trusted across the political spectrum.',
  },
  {
    label: 'The whole system',
    body: 'Federal and all 50 states. Taxes and benefits, together.',
  },
  {
    label: 'Free',
    body: 'Anyone — a voter, an advocate, a legislator — can use it today.',
  },
];

export default function WhatIsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>A free, open-source engine for tax and benefit policy</SlideTitle>
      </SlideHeader>

      <p className="text-2xl text-gray-500 -mt-4 mb-9">
        Trusted by researchers, advocates, and legislators across the country and in the UK
      </p>

      <div className="grid grid-cols-4 gap-6">
        {attributes.map((a) => (
          <div key={a.label} className="content-card p-7">
            <div className="text-2xl font-bold text-pe-dark mb-3">{a.label}</div>
            <p className="text-lg text-gray-600 leading-snug">{a.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-9 text-xl text-gray-500">
        It computes how any policy change would land — not as an average, but for a specific household,
        district, or state.
      </p>
    </Slide>
  );
}
