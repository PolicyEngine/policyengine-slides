import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import {
  IconCalendarDue,
  IconHeartbeat,
  IconHomeOff,
  IconPercentage,
  IconUsers,
  type Icon,
} from '@tabler/icons-react';

/** The measure as written: Initiative 25-0024A1 (Revenue and Taxation Code
 * §50301 et seq. as proposed), as summarized in the calculator's README and
 * working paper, and the Legislative Analyst's description of where the money
 * goes. */
const facts: { icon: Icon; label: string; text: string }[] = [
  {
    icon: IconUsers,
    label: 'Who owes it',
    text: 'People who were California residents on January 1, 2026 and are worth $1 billion or more',
  },
  {
    icon: IconPercentage,
    label: 'How much',
    text: 'A one-time 5% of entire net worth, valued December 31, 2026. The rate ramps from 0% at $1.0 billion to 5% at $1.1 billion',
  },
  {
    icon: IconHomeOff,
    label: 'What is left out',
    text: 'Real property held directly or in a revocable trust; pensions and retirement accounts, generally',
  },
  {
    icon: IconCalendarDue,
    label: 'When it is paid',
    text: 'With the 2026 return, in 2027: in full, or in five annual installments with a 7.5% charge on the unpaid balance',
  },
];

export default function MeasureOverviewSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Proposition 40 in brief</SlideTitle>
      </SlideHeader>

      <div className="-mt-2 grid grid-cols-[1.5fr_1fr] gap-8">
        <div className="space-y-5">
          {facts.map((fact) => (
            <div key={fact.label} className="flex gap-4 items-start">
              <fact.icon size={30} stroke={1.5} className="text-pe-teal shrink-0 mt-0.5" />
              <div>
                <p className="text-lg font-bold text-gray-800">{fact.label}</p>
                <p className="text-lg text-gray-700 leading-snug">{fact.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="content-card px-7 py-6 self-start">
          <div className="flex items-center gap-3 mb-3">
            <IconHeartbeat size={30} stroke={1.5} className="text-pe-teal" />
            <h3 className="text-xl font-bold text-gray-800">Where the money goes</h3>
          </div>
          <p className="stat-number leading-none">90%</p>
          <p className="mt-2 text-lg text-gray-700 leading-snug">
            to health care services for the public
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-snug">
            The rest to education, food assistance, and administration of the tax
          </p>
          <p className="mt-4 text-sm text-gray-500">Legislative Analyst&apos;s Office</p>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Sources: Initiative 25-0024A1, Revenue and Taxation Code §50301 as proposed;
        Legislative Analyst&apos;s Office, analysis of Proposition 40 (lao.ca.gov).
      </p>
    </Slide>
  );
}
