'use client';

import { IconChartBar, IconTarget, IconWritingSign } from '@tabler/icons-react';
import { Fragment } from 'react';
import { Card, Frame } from '../deck';
import { predict } from '../text';

/** Register, grade, compare: three step cards joined by arrows, headings and icons only. */
const icons = [IconWritingSign, IconTarget, IconChartBar];

export default function PredictSlide() {
  return (
    <Frame title={predict.title}>
      <div className="flex h-full flex-col justify-center pb-[4vh]">
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-[1.6vw]">
          {predict.steps.map((tag, i) => {
            const Icon = icons[i];
            return (
              <Fragment key={tag}>
                <Card className="flex flex-col items-center gap-[2.4vh] !py-[5vh] text-center">
                  <Icon className="h-[10vh] w-[10vh] text-pe-teal" stroke={1.5} aria-hidden />
                  <span className="font-display font-bold leading-tight text-pe-dark" style={{ fontSize: '1.5em' }}>
                    {tag}
                  </span>
                </Card>
                {i < predict.steps.length - 1 && (
                  <span aria-hidden className="self-center text-pe-teal" style={{ fontSize: '2em' }}>
                    &rarr;
                  </span>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </Frame>
  );
}
