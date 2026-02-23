import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { IconBuilding, IconBriefcase, IconCalculator, type Icon } from '@tabler/icons-react';

const options: { icon: Icon; title: string; verdict: string; problems: string[] }[] = [
  {
    icon: IconBuilding,
    title: 'Ask CBO',
    verdict: 'Gatekept and slow',
    problems: [
      'Not on Ways & Means or Senate Finance? Good luck.',
      'Months-long queue, even for top committees',
      'Usually just a budget number \u2014 no winners/losers breakdown',
    ],
  },
  {
    icon: IconBriefcase,
    title: 'Go to a think tank',
    verdict: 'Black box and one-shot',
    problems: [
      'Back-and-forth process, not interactive',
      'Proprietary models you can\u2019t inspect or adjust',
      'Others can\u2019t critique or iterate on your proposal',
    ],
  },
  {
    icon: IconCalculator,
    title: 'DIY with a staffer',
    verdict: 'Uncertain, not credible',
    problems: [
      'Tax and transfer policy is enormously complex',
      'Back-of-envelope won\u2019t match CBO\u2019s eventual score',
      'No external credibility for your numbers',
    ],
  },
];

export default function ProblemSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>You want to expand the child tax credit. Now what?</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-6 mt-4">
        {options.map((option, i) => (
          <div key={i} className="content-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="icon-circle" style={{ width: '40px', height: '40px', borderRadius: '12px' }}>
                <option.icon size={22} stroke={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-pe-dark">{option.title}</h3>
                <p className="text-sm font-medium" style={{ color: 'var(--warning)' }}>{option.verdict}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {option.problems.map((problem, j) => (
                <li key={j} className="text-sm text-gray-600 leading-relaxed pl-4 relative">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300" />
                  {problem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center text-lg text-gray-500 mt-6">
        This is a state capacity problem: governments can&apos;t analyze their own policy options fast enough.
      </p>
    </Slide>
  );
}
