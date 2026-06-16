import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import {
  IconCalculator,
  IconRoute,
  IconChartHistogram,
  IconApi,
  type Icon,
} from '@tabler/icons-react';

const uses: { icon: Icon; title: string; detail: string; example: string }[] = [
  {
    icon: IconCalculator,
    title: 'Calculators',
    detail: 'Embeddable tools that show a household its taxes, benefits, and net income.',
    example: 'CTC, SALT, and marriage-penalty calculators',
  },
  {
    icon: IconRoute,
    title: 'Screeners & navigators',
    detail: 'Benefit-access tools call the same rules instead of re-encoding eligibility.',
    example: 'MyFriendBen screens families on PolicyEngine',
  },
  {
    icon: IconChartHistogram,
    title: 'Reform analysis',
    detail: 'Score a policy change: budget, poverty, and winners and losers.',
    example: 'Governors and Congress use it to design credits',
  },
];

export default function CivicStackSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>One engine. Every benefit tool.</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-6 mt-2">
        {uses.map((u, i) => (
          <div key={i} className="content-card p-6 flex flex-col">
            <div
              className="icon-circle mb-4"
              style={{ width: '48px', height: '48px', borderRadius: '14px' }}
            >
              <u.icon size={26} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
            </div>
            <h3 className="text-xl font-bold text-pe-dark mb-2 leading-tight">
              {u.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3 flex-1">
              {u.detail}
            </p>
            <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-100 pt-3">
              {u.example}
            </p>
          </div>
        ))}
      </div>

      <div
        className="content-card mt-7 p-6 flex items-center gap-5"
        style={{ background: 'linear-gradient(135deg, var(--pe-light) 0%, white 100%)' }}
      >
        <IconApi size={40} stroke={1.5} style={{ color: 'var(--pe-teal)' }} className="flex-shrink-0" />
        <p className="text-xl font-semibold text-pe-dark leading-relaxed">
          Build on shared rules instead of rebuilding them &mdash; free API, fully
          open source, Python-native.
        </p>
      </div>
    </Slide>
  );
}
