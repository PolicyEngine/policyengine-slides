import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

/** The disputed choices, in the order the calculator's bridge ranks them (see
 * BridgeSlide). The $68 billion is Jaros and Rauh's formula at the centers of
 * their ranges: 0.45 × $4.55 billion ÷ 0.03 = $68.25 billion. */
const choices: { question: string; berkeley: string; hoover: string }[] = [
  {
    question: 'Count the income tax that movers take with them?',
    berkeley: 'Not in the score',
    hoover: 'Yes, for good: f × C ÷ (r − g) = 0.45 × $4.55 billion ÷ 3% ≈ $68 billion today',
  },
  {
    question: 'Will the tax survive legal challenge?',
    berkeley: 'No discount',
    hoover: 'Collection weighted at 50%',
  },
  {
    question: 'Who had left California by January 1, 2026?',
    berkeley: 'Departures “very unlikely in most cases”',
    hoover: 'Seven confirmed departures and three earlier exits out; Mark Zuckerberg, who announced his move in February 2026, out too',
  },
  {
    question: 'Smaller: avoidance and valuation',
    berkeley: '10% avoidance and evasion haircut; real estate not subtracted',
    hoover: '7% a year wealth growth; directly held real estate subtracted',
  },
];

export default function WhyTheyDifferSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Why they differ: a few disputed choices</SlideTitle>
      </SlideHeader>

      <div className="-mt-2 space-y-3">
        {choices.map((choice, i) => (
          <div key={choice.question} className="content-card px-6 py-3 grid grid-cols-[44px_1fr] gap-4 items-start">
            <span className="font-mono text-2xl text-pe-teal leading-tight">{i + 1}</span>
            <div>
              <p className="text-xl font-bold text-gray-800">{choice.question}</p>
              <div className="mt-1 grid grid-cols-[2fr_3fr] gap-6 text-base leading-snug">
                <p className="text-gray-700">
                  <span className="font-semibold text-pe-dark">Berkeley: </span>
                  {choice.berkeley}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-pe-dark">Hoover: </span>
                  {choice.hoover}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Other comparisons of the two: Hoopes, SSRN Working Paper 6428578 (March 2026), and
        Hoces de la Guardia&apos;s Open Policy Analysis (October 2026), later in this session.
      </p>
    </Slide>
  );
}
