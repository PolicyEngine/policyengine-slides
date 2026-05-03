import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import {
  IconBrandGithub,
  IconChartDots3,
  IconCpu,
  IconScale,
  IconUsersGroup,
} from '@tabler/icons-react';

const communities = [
  {
    icon: IconChartDots3,
    title: 'Forecasters',
    body: 'Bring scenario distributions and elicited beliefs into the policy stack.',
  },
  {
    icon: IconScale,
    title: 'Economists',
    body: 'Encode behavioral responses, dynamic models, and macro feedbacks as toggleable assumptions.',
  },
  {
    icon: IconCpu,
    title: 'CS / AI builders',
    body: 'Wire structured calculators, benchmarks, and elicited priors into the agents people actually use.',
  },
  {
    icon: IconUsersGroup,
    title: 'AI alignment',
    body: 'Treat public policy as one of the systems worth interpreting and aligning — and as a benchmark for the AIs you ship.',
  },
];

export default function CallToActionSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Aligning policy in the AI transition takes all of us</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Forecasters, economists, software builders, and alignment
          researchers — connected by a shared open simulation substrate.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-4 gap-5 mt-8">
        {communities.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="content-card p-5 flex flex-col">
              <div className="icon-circle mb-4">
                <Icon className="h-7 w-7 text-pe-teal" stroke={1.8} />
              </div>
              <div className="text-xl font-black text-pe-dark mb-3">
                {c.title}
              </div>
              <p className="text-base text-gray-600 leading-relaxed">{c.body}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-6 mt-9">
        <div
          className="rounded-xl p-6 text-white"
          style={{
            background: 'linear-gradient(180deg, #1d4044 0%, #17343a 100%)',
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <IconBrandGithub className="h-6 w-6 text-pe-teal" stroke={1.8} />
            <p className="text-sm font-semibold uppercase tracking-widest text-pe-teal">
              Get involved
            </p>
          </div>
          <div className="space-y-2 text-lg text-white/90">
            <p className="font-mono">policyengine.org</p>
            <p className="font-mono">policybench.org</p>
            <p className="font-mono">economic-parameter-atlas.vercel.app</p>
            <p className="font-mono">axiom-foundation.org</p>
          </div>
        </div>

        <div className="accent-block flex items-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            When the AGI moment arrives, the public policy in effect will be
            whatever was on the books. Build the tools so the choices
            policymakers make are grounded, transparent, and aligned to
            stated values.
          </p>
        </div>
      </div>
    </Slide>
  );
}
