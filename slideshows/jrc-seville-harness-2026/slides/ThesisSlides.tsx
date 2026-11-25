'use client';

import BasePathImage from '@/components/core/BasePathImage';
import { Frame } from '../deck';
import { thesisSlides } from '../text';
import FittedShot from './Shot';

/**
 * Three forecast slides in the Predictions section: an unconditional forecast, a conditional one that calls
 * PolicyEngine, and a bill page with both arms. Screenshots of the live app only, taken headless on 22 November 2026;
 * the points and footnotes in text.thesisSlides are not rendered.
 */
type Shot = { src: string; width: number; height: number };

/** A screenshot at its own shape, as large as `maxH` and the column allow, never cropped. */
function Screenshot({ shot, alt, maxH }: { shot: Shot; alt: string; maxH: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
      <BasePathImage
        src={shot.src}
        width={shot.width}
        height={shot.height}
        alt={alt}
        className="block h-auto w-auto max-w-full"
        style={{ maxHeight: maxH }}
        priority
      />
    </div>
  );
}

export function ThesisUnconditional() {
  const s = thesisSlides.unconditional;
  return (
    <Frame title={s.title}>
      <FittedShot src={s.image.src} width={s.image.width} height={s.image.height} alt={s.alt} />
    </Frame>
  );
}

/** The conditional forecast as two panels: the page's head with the forecast, then two excerpts of its analysis (the
 * PolicyEngine call and the agent's arithmetic). */
export function ThesisConditional() {
  const s = thesisSlides.conditional;
  return (
    <Frame title={s.title}>
      <div className="grid h-full grid-cols-[52fr_48fr] items-center gap-[1.6vw]">
        <Screenshot shot={s.images[0]} alt={s.alts[0]} maxH="56vh" />
        <div className="flex flex-col gap-[2vh]">
          <Screenshot shot={s.images[1]} alt={s.alts[1]} maxH="24vh" />
          <Screenshot shot={s.images[2]} alt={s.alts[2]} maxH="20vh" />
        </div>
      </div>
    </Frame>
  );
}

export function ThesisBill() {
  const s = thesisSlides.bill;
  return (
    <Frame title={s.title}>
      <FittedShot src={s.image.src} width={s.image.width} height={s.image.height} alt={s.alt} />
    </Frame>
  );
}
