import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { IconTool, IconUsersGroup, IconBug, type Icon } from '@tabler/icons-react';

const asks: { icon: Icon; who: string; ask: string }[] = [
  {
    icon: IconTool,
    who: 'Builders',
    ask: 'What would you build on an open tax-and-benefit API?',
  },
  {
    icon: IconUsersGroup,
    who: 'Navigators & orgs',
    ask: 'Screening for a benefit we don’t cover yet? Let’s get its rules into the engine.',
  },
  {
    icon: IconBug,
    who: 'Everyone',
    ask: 'Try it on your own household and tell me where it gets you wrong.',
  },
];

export default function AsksSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What I&apos;m looking for tonight</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-6 mt-2">
        {asks.map((a, i) => (
          <div key={i} className="content-card p-6">
            <div
              className="icon-circle mb-4"
              style={{ width: '48px', height: '48px', borderRadius: '14px' }}
            >
              <a.icon size={26} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
            </div>
            <div className="slide-tag mb-3" style={{ fontSize: '0.7rem' }}>
              {a.who}
            </div>
            <p className="text-lg font-semibold text-pe-dark leading-snug">{a.ask}</p>
          </div>
        ))}
      </div>

      <div
        className="content-card mt-8 p-6 text-center"
        style={{ background: 'linear-gradient(135deg, var(--pe-light) 0%, white 100%)' }}
      >
        <p className="text-xl font-semibold text-pe-dark">
          It&apos;s all open &mdash; use the API, read the rules, or add one:
          <span className="text-pe-teal"> github.com/PolicyEngine</span>
        </p>
      </div>
    </Slide>
  );
}
