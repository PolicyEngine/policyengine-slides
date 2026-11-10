import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const measures = [
  ['2', 'Liquid assets: the SCF definition (checking, savings, money market and call accounts, prepaid cards), or also stocks and bonds?'],
  ['4', 'Compare RAP against IBR, SAVE, or both?'],
  ['8', 'Female-headed household: an unmarried woman heads the household?'],
  ['10', '“Near” a $10,000 boundary: within $1,000? $2,500?'],
  ['13', 'Unmarried comparison: each partner keeps their own income, and the borrower claims the children?'],
  ['14', 'Incomes 3% higher, as a fixed published scalar?'],
];

const assumptions = [
  ['SAVE version', 'As codified in 2023: 5% on the undergraduate share and 10% on the rest, above 225% of the poverty guideline. The alternative is 10% only.'],
  ['Parent PLUS', 'SCF loans taken for a child’s education count as Parent PLUS, which RAP, IBR and SAVE exclude.'],
  ['Interest rate', 'The preliminary charts use 6.52%, the 2026–27 undergraduate rate. The final analysis uses a portfolio average.'],
  ['IBR new borrower', 'Born in 1996 or later, as a proxy for first borrowing after July 1, 2014.'],
  ['Federal vs private', 'The SCF asks whether each education loan is federal; we keep federal loans and let FSA totals set the level.'],
];

export default function QuestionsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What we&apos;d like to confirm with you</SlideTitle>
      </SlideHeader>
      <div className="grid grid-cols-2 gap-8 -mt-4">
        <div className="content-card px-6 py-4">
          <p className="text-xl font-semibold text-pe-dark mb-3">Measure definitions</p>
          <ul className="space-y-2.5">
            {measures.map(([n, q]) => (
              <li key={n} className="flex gap-3">
                <span className="w-9 shrink-0 text-lg font-semibold text-pe-teal">{n}</span>
                <p className="text-lg text-gray-800 leading-snug">{q}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="content-card px-6 py-4">
          <p className="text-xl font-semibold text-pe-dark mb-3">Proposed assumptions</p>
          <ul className="space-y-2.5">
            {assumptions.map(([k, v]) => (
              <li key={k}>
                <p className="text-lg text-gray-800 leading-snug">
                  <span className="font-semibold">{k}.</span> {v}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-lg text-gray-600">
        The full list, with sources, is in our assumptions document; we&apos;ll publish the final version with the results.
      </p>
    </Slide>
  );
}
