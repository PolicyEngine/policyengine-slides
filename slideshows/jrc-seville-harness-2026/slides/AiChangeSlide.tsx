'use client';

import { Frame } from '../deck';
import { aiChange } from '../text';

/** Three points on how AI changes the analyst's job, each with a large numeral. */
export default function AiChangeSlide() {
  return (
    <Frame title={aiChange.title}>
      <ol className="flex h-full flex-col justify-center-safe gap-[4.4vh] pb-[2vh]">
        {aiChange.points.map((point, i) => (
          <li key={point} className="grid grid-cols-[7vw_1fr] items-center">
            <span aria-hidden className="font-extrabold leading-none tabular-nums text-pe-teal" style={{ fontSize: 'clamp(40px, 9vh, 104px)' }}>
              {i + 1}
            </span>
            <p className="font-semibold leading-snug text-pe-dark" style={{ fontSize: 'clamp(20px, 3.9vh, 46px)' }}>
              {point}
            </p>
          </li>
        ))}
      </ol>
    </Frame>
  );
}
