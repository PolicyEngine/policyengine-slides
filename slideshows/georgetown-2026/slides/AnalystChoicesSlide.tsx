import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function AnalystChoicesSlide() {
  const choices = [
    {
      category: 'Data source',
      options: 'Surveys vs. tax records vs. combined',
    },
    {
      category: 'Income definition',
      options: 'Market income, disposable income, consumption, wealth',
    },
    {
      category: 'What to include',
      options: 'Which taxes? Which transfers? In-kind benefits?',
    },
    {
      category: 'Unit of analysis',
      options: 'Individual, tax unit, family, household',
    },
    {
      category: 'Equivalization',
      options: 'Divide by n, √n, or no adjustment',
    },
    {
      category: 'Weighting',
      options: 'By households, adults, or all people',
    },
    {
      category: 'Metric',
      options: 'Gini, top 1% share, 90/10 ratio, poverty rate',
    },
  ];

  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Analysts have many choices</SlideTitle>
        </SlideHeader>

        <p className="text-center text-2xl text-gray-600 mt-2 mb-8">
          There is no single "correct" way to measure inequality
        </p>

        <div className="px-12">
          <div className="space-y-4">
            {choices.map((choice, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-xl"
              >
                <div className="w-48 text-right font-semibold text-[#319795]">
                  {choice.category}
                </div>
                <div className="w-4 h-4 rounded-full bg-[#319795]" />
                <div className="text-gray-700">
                  {choice.options}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-lg text-gray-500 mt-8 italic">
          This is why economists disagree on inequality trends
        </p>
      </div>
    </Slide>
  );
}
