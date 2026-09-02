'use client';

import Image from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import { speakers } from '@/lib/speakers';

const speaker = {
  ...speakers['pavel-makarchuk'],
  title: 'Director of Product, The Axiom Foundation',
};

/**
 * Hybrid cover: two parallel halves — PolicyEngine teal, Axiom paper —
 * mirrored layout, wordmarks at identical height, and the title reading
 * across the seam: "Encoding statutes" → "into executable rules".
 */
export default function TitleSlide() {
  return (
    <Slide fullBleed showFooter={false}>
      <div className="absolute inset-0 grid grid-cols-2">
        {/* PolicyEngine half */}
        <div className="gradient-bg flex flex-col px-16 pt-24 pb-14">
          <div className="h-[140px] flex items-center justify-center">
            <Image
              src="/logos/white.svg"
              alt="PolicyEngine"
              width={350}
              height={100}
              priority
              style={{ height: '64px', width: 'auto' }}
            />
          </div>

          <div className="flex-1 flex items-center justify-end pr-8">
            <h1 className="font-display text-5xl font-bold text-white whitespace-nowrap">
              Encoding statutes
            </h1>
          </div>

          <div className="h-[88px] flex items-center gap-5">
            <div className="w-20 h-20 relative overflow-hidden rounded-full border-2 border-white/40 shrink-0">
              <Image
                src={speaker.photo}
                alt={speaker.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xl font-semibold text-white">
                {speaker.name}
              </p>
              <p className="text-sm text-white/70 font-light whitespace-pre-line leading-snug mt-1">
                {speaker.title}
              </p>
            </div>
          </div>
        </div>

        {/* Axiom half */}
        <div className="bg-[#f8f5ef] flex flex-col px-16 pt-24 pb-14">
          <div className="h-[140px] flex items-center justify-center">
            <Image
              src="/logos/axiom-foundation.svg"
              alt="The Axiom Foundation"
              width={1026}
              height={363}
              priority
              style={{ height: '84px', width: 'auto' }}
            />
          </div>

          <div className="flex-1 flex items-center justify-start pl-8">
            <h1 className="font-display text-5xl font-bold text-[#17343a] whitespace-nowrap">
              into executable rules
            </h1>
          </div>

          <div className="h-[88px] flex flex-col justify-center">
            <p className="text-lg text-gray-700">
              AI-driven rules engine development &mdash; executable,
              verifiable rules
            </p>
            <p className="text-sm text-gray-500 mt-1">
              GETTSIM workshop &middot; Digital Hub Bonn &middot; September
              3&ndash;4, 2026
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
