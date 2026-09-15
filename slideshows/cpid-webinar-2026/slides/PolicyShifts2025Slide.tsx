import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

/** Candidate policy drivers behind a 2024→2025 move in child SPM —
 * context for the guest reactions, not attribution. Income year 2025 vs
 * 2024; health coverage changes are out of scope for SPM resources. */
const columns: { heading: string; items: { text: string; subtext?: string }[] }[] = [
  {
    heading: 'Federal',
    items: [
      {
        text: 'OBBBA tax provisions took effect for 2025',
        subtext:
          'Child Tax Credit to $2,200, larger standard deduction, new tips and overtime deductions. Largely non-refundable, so limited reach below the poverty line',
      },
      {
        text: 'The last ARPA child care funds expired (September 2024)',
        subtext:
          'Stabilization grants ended in 2023; the supplemental CCDF money ran out September 2024, and child care costs subtract from SPM resources',
      },
      {
        text: 'Summer EBT ran its second summer',
        subtext: 'Alabama and Utah joined the 37 states from the 2024 launch',
      },
    ],
  },
  {
    heading: 'States',
    items: [
      {
        text: 'New York: $1,000 Empire State Child Credit for children under four',
        subtext: 'First effective for tax year 2025',
      },
      {
        text: 'Illinois doubled its new Child Tax Credit',
        subtext: 'From 20% to 40% of the state EITC in its second year',
      },
      {
        text: "Colorado's Family Affordability Credit ramped up",
        subtext: 'First claimed on 2024 returns, paid out during 2025',
      },
      {
        text: 'Minimum wage increases in over 20 states in January 2025',
      },
    ],
  },
];

export default function PolicyShifts2025Slide() {
  return (
    <Slide center>
      <SlideHeader>
        <SlideTitle>What changed between 2024 and 2025</SlideTitle>
      </SlideHeader>
      <div className="mt-4 grid grid-cols-2 gap-6">
        {columns.map((col) => (
          <div key={col.heading} className="content-card px-6 py-4">
            <h3 className="text-xl font-bold text-gray-800 mb-3">{col.heading}</h3>
            <ul className="space-y-3">
              {col.items.map((item) => (
                <li key={item.text} className="flex gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-pe-teal shrink-0" />
                  <div>
                    <p className="text-lg text-gray-800 leading-snug">{item.text}</p>
                    {item.subtext && (
                      <p className="text-base text-gray-600 leading-snug mt-0.5">{item.subtext}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 text-base text-gray-500">
        Candidate drivers, not attribution: the measured change reflects all
        of these plus the labor market.
      </p>
    </Slide>
  );
}
