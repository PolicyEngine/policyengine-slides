import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const columns = [
  {
    heading: 'Rules',
    done: [
      'The Repayment Assistance Plan (RAP) encoded in PolicyEngine-US, with 41 tests',
      'IBR, SAVE (as codified) and the 10-year standard plan built on it',
    ],
    next: 'Both are in code review. A second implementation in the Axiom Foundation’s rules engine follows in month 3.',
  },
  {
    heading: 'Data',
    done: ['A borrower profile tabulated from the 2022 Survey of Consumer Finances (SCF)'],
    next: 'Student loan balances into PolicyEngine’s microdata, calibrated to Federal Student Aid portfolio totals; educational attainment for Project 2.',
  },
  {
    heading: 'Analysis',
    done: ['Household examples for five of the eleven agreed measures (4, 5, 7, 10 and 13), plus a comparison of all four plans and marginal tax rates'],
    next: 'Distributional results on all eleven measures by age, income, race and state, with month 2.',
  },
];

export default function StatusSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Where the pilot stands</SlideTitle>
      </SlideHeader>
      <div className="grid grid-cols-3 gap-6">
        {columns.map((c) => (
          <div key={c.heading} className="content-card px-6 py-5">
            <p className="text-2xl font-semibold text-pe-dark mb-3">{c.heading}</p>
            <ul className="space-y-3 mb-4">
              {c.done.map((d) => (
                <li key={d} className="flex gap-3">
                  <span className="mt-2.5 w-2 h-2 rounded-full bg-pe-teal shrink-0" />
                  <p className="text-lg text-gray-800 leading-snug">{d}</p>
                </li>
              ))}
            </ul>
            <p className="text-base text-gray-600 leading-snug">
              <span className="font-semibold">Next:</span> {c.next}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-lg text-gray-600">
        Everything in this deck is preliminary. Charts are interactive: hover to read values, and use the buttons to switch views.
      </p>
    </Slide>
  );
}
