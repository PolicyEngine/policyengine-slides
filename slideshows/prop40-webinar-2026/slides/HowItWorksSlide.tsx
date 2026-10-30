import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { IconCoin, IconReceiptTax, type Icon } from '@tabler/icons-react';

/** The model in two stages, as the calculator's README describes it
 * (PolicyEngine/california-wealth-tax, "What the model does"). */
const stages: { icon: Icon; color: string; tag: string; title: string; items: string[] }[] = [
  {
    icon: IconCoin,
    color: 'var(--pe-teal)',
    tag: 'Stage 1',
    title: 'The one-time wealth tax',
    items: [
      'Everyone Forbes listed in California on January 1, 2026, plus newer California entries assumed resident then, at their latest Forbes worth',
      'Directly held real estate out, then the $1 billion threshold and rate ramp, per person or documented married couple',
      'Then an optional erosion haircut, the legal assumptions and the payment election',
    ],
  },
  {
    icon: IconReceiptTax,
    color: 'var(--pe-dark)',
    tag: 'Stage 2, optional',
    title: 'Future California income tax',
    items: [
      "The cohort's income tax is an input: $4.3 billion a year by default",
      'Divided by wealth, or with filings-based estimates for the four largest fortunes',
      "A mover's share is the loss, netted against receipts in present value as of 2026",
    ],
  },
];

export default function HowItWorksSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>One model, scored person by person</SlideTitle>
      </SlideHeader>

      <div className="-mt-2 grid grid-cols-2 gap-6">
        {stages.map((stage) => (
          <div key={stage.tag} className="content-card overflow-hidden">
            <div className="text-white px-6 py-3 flex items-center gap-3" style={{ background: stage.color }}>
              <stage.icon size={28} stroke={1.5} />
              <div>
                <p className="text-sm uppercase tracking-wider text-white/80">{stage.tag}</p>
                <h3 className="text-xl font-bold">{stage.title}</h3>
              </div>
            </div>
            <ul className="px-6 py-4 space-y-2">
              {stage.items.map((item) => (
                <li key={item} className="text-base text-gray-700 leading-snug pl-4 relative">
                  <span
                    className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full"
                    style={{ background: stage.color }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="accent-block mt-6 space-y-2">
        <p className="text-lg text-gray-700 leading-snug">
          The Berkeley and Hoover assumptions are settings in this one model, applied to the
          calculator&apos;s roster. They do not replicate either paper&apos;s own roster.
        </p>
        <p className="text-lg text-gray-700 leading-snug">
          Fifteen documented departure claims, each with its evidence and source, can be
          applied one at a time. The baseline takes no position on contested residency.
        </p>
      </div>
    </Slide>
  );
}
