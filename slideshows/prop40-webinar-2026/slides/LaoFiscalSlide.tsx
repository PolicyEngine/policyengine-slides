import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

/** The Legislative Analyst's fiscal estimate, quoted from its Proposition 40
 * analysis (lao.ca.gov, checked October 29, 2026). */
const cards: { label: string; stat: string; quote: string }[] = [
  {
    label: 'One-time wealth tax',
    stat: 'Tens of billions',
    quote:
      'These wealth tax revenues probably would add up to tens of billions of dollars spread over several years.',
  },
  {
    label: 'Ongoing income tax',
    stat: 'Less than $1 billion a year',
    quote:
      'Possible ongoing decrease of less than $1 billion per year in state income tax revenue collected from billionaires.',
  },
];

export default function LaoFiscalSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What the Legislative Analyst expects</SlideTitle>
      </SlideHeader>

      <div className="-mt-2 grid grid-cols-2 gap-6">
        {cards.map((card) => (
          <div key={card.label} className="content-card px-7 py-6">
            <p className="slide-tag">{card.label}</p>
            <p className="mt-4 text-4xl font-extrabold tracking-tight text-pe-teal">{card.stat}</p>
            <p className="mt-3 text-lg text-gray-700 leading-snug">&ldquo;{card.quote}&rdquo;</p>
          </div>
        ))}
      </div>

      <div className="accent-block mt-7 space-y-2">
        <p className="text-lg text-gray-700 leading-snug">
          &ldquo;Exactly when and how much the state would collect is very hard to predict&rdquo;:
          it turns on what billionaires do to reduce the tax, and on stock prices.
        </p>
        <p className="text-lg text-gray-700 leading-snug">
          If Proposition 41 or 42 gets more yes votes, courts could find a conflict and
          stop Proposition 40 even with a majority yes vote.
        </p>
      </div>

      <p className="mt-5 text-sm text-gray-500">
        Source: Legislative Analyst&apos;s Office, analysis of Proposition 40, November 3, 2026
        ballot (lao.ca.gov).
      </p>
    </Slide>
  );
}
