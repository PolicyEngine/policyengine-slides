'use client';

import Image from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import { speakers } from '@/lib/speakers';
import { formatDate } from '@/lib/types';

const speaker = {
  ...speakers['max-ghenis'],
  title: 'Co-founder & CEO, PolicyEngine\nFounder & CEO, Axiom Foundation',
};

/** Hybrid cover: PolicyEngine teal meets Axiom paper. */
export default function TitleSlide() {
  return (
    <Slide fullBleed showFooter={false}>
      <div className="absolute inset-0 grid grid-cols-[1.08fr_0.92fr]">
        {/* PolicyEngine side */}
        <div className="gradient-bg relative flex flex-col justify-center px-20">
          <div className="absolute top-12 left-20">
            <Image
              src="/logos/white.svg"
              alt="PolicyEngine"
              width={260}
              height={74}
              priority
              style={{ height: 'auto' }}
            />
          </div>

          <h1 className="font-display text-6xl font-bold text-white leading-tight max-w-xl">
            From open models to executable law
          </h1>

          <div className="mt-12 flex items-center gap-5">
            <div className="w-24 h-24 relative overflow-hidden rounded-full border-2 border-white/40 shrink-0">
              <Image
                src={speaker.photo}
                alt={speaker.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">
                {speaker.name}
              </p>
              <p className="text-base text-white/70 font-light whitespace-pre-line leading-snug mt-1">
                {speaker.title}
              </p>
            </div>
          </div>
        </div>

        {/* Axiom side */}
        <div className="relative bg-[#f8f5ef] flex flex-col items-center justify-center px-16 text-center">
          <Image
            src="/logos/axiom-foundation.svg"
            alt="The Axiom Foundation"
            width={1026}
            height={363}
            priority
            style={{ width: '300px', height: 'auto' }}
          />

          <p className="font-mono text-sm uppercase tracking-[0.28em] text-[#8a3d08] mt-6">
            The world&apos;s rules, encoded
          </p>

          <div className="w-16 h-px bg-[#b45309]/30 my-10" />

          <p className="text-lg text-gray-700">
            New technologies for evidence-based policy making
          </p>
          <p className="text-sm text-gray-500 mt-1">
            IARIW&ndash;CAPE workshop &middot; UCLouvain Saint-Louis, Brussels
            &middot; {formatDate('2026-08-27')}
          </p>

          <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center gap-10">
            <Image
              src="/logos/iariw/cape.png"
              alt="CAPE — Center for Applied Public Economics"
              width={640}
              height={233}
              style={{ height: '32px', width: 'auto' }}
            />
            <Image
              src="/logos/iariw/beamm.png"
              alt="BEAMM"
              width={640}
              height={129}
              style={{ height: '24px', width: 'auto' }}
            />
            <Image
              src="/logos/iariw/uclouvain-saint-louis.jpg"
              alt="UCLouvain Saint-Louis Bruxelles"
              width={640}
              height={360}
              style={{ height: '36px', width: 'auto' }}
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
