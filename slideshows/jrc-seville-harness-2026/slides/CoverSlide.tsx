'use client';

import Image from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import { speakers } from '@/lib/speakers';
import { cover } from '../text';

/**
 * The cover, in markup of its own rather than the shared cover template: the template sets the event line in title
 * case (CSS `capitalize`), which would turn the workshop's name into "Building Blocks For Future…".
 */
export default function CoverSlide() {
  const max = speakers['max-ghenis'];
  const { name, affiliation, event } = cover;
  return (
    <Slide isCover>
      <div className="relative z-10 flex flex-col items-center justify-center space-y-10">
        <div className="h-1 w-20 rounded-full bg-white/30" />
        <h1 className="font-display text-center text-5xl font-bold text-white">{cover.title}</h1>
        <p className="text-balance text-center text-2xl text-white opacity-80">{cover.subtitle}</p>
        <div className="mt-4 flex flex-col items-center text-center">
          <div className="relative mb-3 h-28 w-28 overflow-hidden rounded-full border-2 border-white/40">
            <Image src={max.photo} alt={name} fill className="object-cover" />
          </div>
          <p className="text-xl font-semibold text-white">{name}</p>
          <p className="text-base font-light text-white/75">{affiliation}</p>
        </div>
        <div className="pt-2 text-center text-white opacity-60">
          <p>{event[0]}</p>
          <p>{event[1]}</p>
        </div>
      </div>
    </Slide>
  );
}
