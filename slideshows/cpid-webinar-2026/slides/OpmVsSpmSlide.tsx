import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const columns: { title: string; tone: string; rows: string[] }[] = [
  {
    title: 'Official poverty measure',
    tone: 'var(--pe-dark)',
    rows: [
      'Resources: pre-tax cash income only',
      'Thresholds: three times a 1963 minimum food budget, updated for inflation',
      'Same threshold everywhere in the country',
      'Unit: family related by blood, marriage, or adoption',
      'Misses taxes, tax credits, SNAP, housing aid, and expenses',
    ],
  },
  {
    title: 'Supplemental Poverty Measure',
    tone: 'var(--pe-teal)',
    rows: [
      'Resources: cash plus in-kind benefits and refundable credits, minus taxes and necessary expenses',
      'Thresholds: recent spending on food, clothing, shelter, and utilities',
      'Adjusted for local housing costs and for renting versus owning',
      'Unit: everyone sharing a home, including cohabiting partners and unrelated children',
      'Shows what tax and benefit policy does to poverty',
    ],
  },
];

export default function OpmVsSpmSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Two poverty measures</SlideTitle>
      </SlideHeader>
      <div className="mt-6 grid grid-cols-2 gap-8">
        {columns.map((col) => (
          <div key={col.title} className="content-card overflow-hidden">
            <div className="px-6 py-4 text-white" style={{ background: col.tone }}>
              <h3 className="text-2xl font-bold">{col.title}</h3>
            </div>
            <ul className="px-6 py-5 space-y-3">
              {col.rows.map((row) => (
                <li key={row} className="text-lg text-gray-700 leading-snug pl-4 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:rounded-full before:bg-pe-teal">
                  {row}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-5 text-base text-gray-500">
        The dashboard reports the SPM, because that is the measure a state credit, a SNAP change, or a child allowance can move.
      </p>
    </Slide>
  );
}
