import Slide from '@/components/core/Slide';
import { BigStatement } from './WorkshopComponents';
import {
  IconLockOpen2,
  IconWorld,
  IconRobot,
} from '@tabler/icons-react';

const requirements = [
  {
    icon: IconLockOpen2,
    title: 'Open',
    body: 'Anyone can read the rules, run the model, and propose a change.',
  },
  {
    icon: IconWorld,
    title: 'Pluralistic',
    body: 'Forecasters, economists, advocates, and policymakers can all contribute assumptions and stress-test scenarios.',
  },
  {
    icon: IconRobot,
    title: 'Agent-callable',
    body: 'AI agents can query the same calculator that analysts use — and produce verifiable answers.',
  },
];

export default function NeedOpenToolsSlide() {
  return (
    <Slide>
      <div className="h-full flex flex-col justify-center">
        <BigStatement>
          Policy under AI uncertainty needs
          <br />
          <span className="text-pe-teal">open epistemic tools.</span>
        </BigStatement>
        <p className="text-2xl text-gray-600 leading-relaxed mt-7 max-w-4xl">
          The same forces that make AI a bigger policy challenge — speed,
          scope, distributional pressure — also make AI a critical part of
          the response. But only if the tools the AI relies on are public,
          inspectable, and built for stress-testing.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-12">
          {requirements.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="content-card p-6">
                <div className="icon-circle mb-4">
                  <Icon className="h-7 w-7 text-pe-teal" stroke={1.8} />
                </div>
                <div className="text-2xl font-black text-pe-dark mb-3">
                  {r.title}
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  {r.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}
