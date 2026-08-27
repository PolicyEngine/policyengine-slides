'use client';

import Image from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import { speakers } from '@/lib/speakers';
import { formatDate } from '@/lib/types';

const speaker = {
  ...speakers['max-ghenis'],
  title: 'Co-founder & CEO, PolicyEngine\nFounder & CEO, Axiom Foundation',
};

/**
 * Hybrid cover: two parallel halves — PolicyEngine teal, Axiom paper —
 * mirrored layout, wordmarks at identical height, and the title reading
 * across the seam: "From open models" → "to executable law".
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

          <div className="mt-20 text-right pr-8">
            <h1 className="font-display text-6xl font-bold text-white whitespace-nowrap">
              From open models
            </h1>
          </div>

          <div className="mt-auto flex items-center gap-5">
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

          <div className="mt-20 text-left pl-8">
            <h1 className="font-display text-6xl font-bold text-[#17343a] whitespace-nowrap">
              to executable law
            </h1>
          </div>

          <div className="mt-auto">
            <p className="text-lg text-gray-700">
              New technologies for evidence-based policy making
            </p>
            <p className="text-sm text-gray-500 mt-1">
              IARIW&ndash;CAPE workshop &middot; UCLouvain Saint-Louis,
              Brussels &middot; {formatDate('2026-08-27')}
            </p>
            <div className="mt-6 flex items-center gap-9">
              <Image
                src="/logos/iariw/cape.png"
                alt="CAPE — Center for Applied Public Economics"
                width={640}
                height={233}
                style={{ height: '30px', width: 'auto' }}
              />
              <Image
                src="/logos/iariw/beamm.png"
                alt="BEAMM"
                width={640}
                height={129}
                style={{ height: '22px', width: 'auto' }}
              />
              <Image
                src="/logos/iariw/uclouvain-saint-louis.jpg"
                alt="UCLouvain Saint-Louis Bruxelles"
                width={640}
                height={360}
                style={{ height: '34px', width: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
