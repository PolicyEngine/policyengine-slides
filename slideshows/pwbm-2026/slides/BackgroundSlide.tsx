import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const milestones = [
  {
    year: '2010–2018',
    detail: 'Data scientist at Google.',
  },
  {
    year: '2016',
    detail: 'Started contributing to Tax-Calculator (AEI / Policy Simulation Library) on the side.',
  },
  {
    year: '2018',
    detail: 'Left Google to study economics at MIT.',
  },
  {
    year: '2019',
    detail: 'Founded the UBI Center, a nonpartisan think tank.',
  },
  {
    year: '2020',
    detail: 'Hired Nikhil Woodruff; built the first public calculator to support our UBI research.',
  },
  {
    year: '2021',
    detail: 'Launched the PolicyEngine web app; spun PolicyEngine out as its own 501(c)(3) within a month.',
  },
  {
    year: '2022',
    detail: 'Expanded to the US: policyengine-us, then state-by-state coverage.',
  },
  {
    year: '2026',
    detail: 'Team of nine, split between the US and UK.',
  },
];

export default function BackgroundSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How PolicyEngine got here</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          An open-source side project became a nine-person nonprofit building
          microsimulation infrastructure.
        </p>
      </SlideHeader>

      <div className="mt-8 grid grid-cols-[160px_1fr] gap-x-8 gap-y-5">
        {milestones.map((milestone) => (
          <div key={milestone.year} className="contents">
            <div className="text-right">
              <span className="font-mono text-xl font-bold text-pe-teal">
                {milestone.year}
              </span>
            </div>
            <div className="border-l-4 border-pe-teal/40 pl-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                {milestone.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
