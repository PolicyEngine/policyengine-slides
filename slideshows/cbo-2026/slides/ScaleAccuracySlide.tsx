import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

const nodes = [
  {
    label: 'Values',
    detail:
      'Which indicators do we collectively care about? Poverty, mobility, health, fiscal sustainability, opportunity — the work of democratic deliberation.',
  },
  {
    label: 'Policies',
    detail:
      'Which choices move them — and at what cost to other things we value? At scale, we do not just choose from a menu of bills. We can search the design space, simulating millions of candidate policies to surface the ones that best achieve those indicators.',
  },
  {
    label: 'Indicators',
    detail:
      'Are we actually moving them? Predictions get scored against reality. The track record becomes public, contested, and improvable.',
  },
];

export default function ScaleAccuracySlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How this could change democracy</SlideTitle>
      </SlideHeader>

      <div className="mt-6 space-y-7">
        <p className="text-3xl text-gray-900 leading-relaxed font-light">
          Democracy is the work of deciding{' '}
          <span className="font-medium text-pe-teal">
            what we collectively value
          </span>{' '}
          &mdash; and choosing policies that actually move us toward it.
        </p>

        <div className="relative grid grid-cols-[1fr_40px_1fr_40px_1fr] gap-2 items-stretch">
          {nodes.map((n, i) => (
            <React.Fragment key={n.label}>
              <div className="content-card p-6">
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                  Step {i + 1}
                </div>
                <h3 className="text-2xl font-bold text-pe-dark mb-3">
                  {n.label}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {n.detail}
                </p>
              </div>
              {i < nodes.length - 1 && (
                <div className="flex items-center justify-center">
                  <span className="text-3xl text-pe-teal font-bold">
                    &rarr;
                  </span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="accent-block max-w-5xl">
          <p className="text-xl text-gray-800 leading-relaxed">
            The substrate does not decide what we should value. It lets us
            discover policies that match what we said we wanted &mdash; and
            changes the conversation when they do not.
          </p>
        </div>
      </div>
    </Slide>
  );
}
