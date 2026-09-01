import { Fragment } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { IconChevronRight } from '@tabler/icons-react';

const stages = [
  {
    step: '1',
    title: 'Targets from administrative truth',
    detail:
      'Every calibration target is a sum of Chronicle facts — administrative and national-accounts figures the agencies print, each with its source and date. Surveys never set a target.',
  },
  {
    step: '2',
    title: 'Support records from a donor pool',
    detail:
      'Survey households supply the joint distribution the aggregates lack. Today a reweighted US survey donor pool; a native donor pool is the planned upgrade for each new country.',
  },
  {
    step: '3',
    title: 'Calibrate the weights',
    detail:
      'Reweight the support records so the population reproduces every target at once — programs, incomes, demographics, geography — and publish each target with its residual error.',
  },
  {
    step: '4',
    title: 'Validate against what was held out',
    detail:
      'Surveys enter as validation only. Releases are compared side by side, and the same calibrated population is run through two engines to separate data error from rules error.',
  },
];

export default function MicrodataPipelineSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How Microcosm builds the microdata</SlideTitle>
      </SlideHeader>

      <p className="text-2xl text-gray-800 leading-relaxed max-w-5xl">
        The rules need a population to run on. Microcosm builds one from
        administrative totals down &mdash; not from a survey up.
      </p>

      <div className="mt-6 flex items-stretch gap-2">
        {stages.map((s, i) => (
          <Fragment key={s.step}>
            {i > 0 && (
              <div className="flex items-center shrink-0">
                <IconChevronRight size={28} className="text-gray-400" />
              </div>
            )}
            <div className="flex-1 content-card p-5 flex flex-col">
              <div className="font-mono text-4xl font-bold text-pe-teal/30 leading-none">
                {s.step}
              </div>
              <h3 className="text-lg font-bold text-pe-dark mt-3 mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="text-base text-gray-700 leading-snug">{s.detail}</p>
            </div>
          </Fragment>
        ))}
      </div>

      <div className="accent-block mt-6 max-w-5xl">
        <p className="text-lg text-gray-800 leading-relaxed">
          AI agents do the assembly &mdash; matching facts to targets, running
          the calibration, filing the residuals &mdash; and the dashboard on
          the next slides is where the result is graded in public.
        </p>
      </div>
    </Slide>
  );
}
