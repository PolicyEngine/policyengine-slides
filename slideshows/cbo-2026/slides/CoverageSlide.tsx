import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const groups = [
  {
    label: 'Federal taxes',
    items: 'Income tax · Payroll tax · AMT · Estate tax · CTC · EITC · Premium tax credit · OBBBA provisions',
  },
  {
    label: 'State taxes',
    items: '51 state and DC income tax systems · Property tax credits · State EITCs and CTCs',
  },
  {
    label: 'Federal benefits',
    items: 'SNAP · WIC · TANF · ACA · Medicaid · CHIP · Section 8 · LIHEAP',
  },
  {
    label: 'State benefits',
    items: 'State SNAP supplements · State child care subsidies · State energy assistance · State rent relief',
  },
];

export default function CoverageSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What we model</SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-2 gap-6">
        {groups.map((g) => (
          <div key={g.label} className="content-card p-6">
            <div className="slide-tag mb-3">{g.label}</div>
            <p className="text-lg text-gray-700 leading-relaxed">{g.items}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-xl text-gray-600 italic max-w-4xl">
        Coverage grows continuously; every variable is testable against external calculators and statute citations.
      </p>
    </Slide>
  );
}
