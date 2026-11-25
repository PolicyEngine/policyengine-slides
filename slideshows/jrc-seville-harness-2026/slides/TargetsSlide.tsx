'use client';

import { Frame, Steps } from '../deck';
import { targets } from '../text';

/** Concept alignment before calibration: the four steps from an official total to reweighted households, alone.
 * text.targets.example, text.targets.counts and text.targets.footnotes are not rendered. */
export default function TargetsSlide() {
  return (
    <Frame title={targets.title}>
      <div className="flex h-full flex-col justify-center pb-[4vh]" style={{ fontSize: '1.15em' }}>
        <Steps steps={targets.steps} />
      </div>
    </Frame>
  );
}
