import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { IconAdjustments, IconChartBar, IconLink, type Icon } from '@tabler/icons-react';

/** Reform and output lists follow the dashboard README (PolicyEngine/child-poverty-impact-dashboard). */
const cards: { icon: Icon; title: string; items: string[] }[] = [
  {
    icon: IconAdjustments,
    title: 'Pick a reform',
    items: [
      'Implement a federal proposal like the American Family Act or the Tax Cuts for Workers Act',
      'A child allowance, with age tiers and an optional income phase-out',
      'Create or modify a state CTC or EITC, across all states',
    ],
  },
  {
    icon: IconChartBar,
    title: 'See what it does',
    items: [
      'Child poverty, overall and ages 0 to 3',
      'Cost to the state and federal budgets',
      'Who gains, by income decile',
      'Impacts by congressional district',
    ],
  },
  {
    icon: IconLink,
    title: 'Take it with you',
    items: [
      'Every result has a short shareable link',
      'Statewide and household views from one setup',
      'Estimates come from PolicyEngine’s open-source model',
    ],
  },
];

export default function DashboardWhatSlide() {
  return (
    <Slide center>
      <SlideHeader>
        <SlideTitle>What the dashboard does</SlideTitle>
      </SlideHeader>
      <div className="mt-6 grid grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.title} className="content-card px-6 py-6">
            <card.icon size={32} stroke={1.5} className="text-pe-teal mb-3" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
            <ul className="space-y-2">
              {card.items.map((item) => (
                <li key={item} className="text-lg text-gray-700 leading-snug">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Slide>
  );
}
