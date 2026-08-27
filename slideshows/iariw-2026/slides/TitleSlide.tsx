'use client';

import Image from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import { speakers } from '@/lib/speakers';
import { formatDate } from '@/lib/types';

const speaker = {
  ...speakers['max-ghenis'],
  title: 'Co-founder & CEO, PolicyEngine\nFounder & CEO, Axiom Foundation',
};

export default function TitleSlide() {
  return (
    <Slide isCover>
      <div className="flex flex-col items-center justify-center space-y-6 relative z-10 mt-14">
        <h1 className="font-display text-5xl font-bold text-center text-white max-w-4xl">
          From open models to executable law
        </h1>

        <p className="text-2xl opacity-80 text-center text-white">
          PolicyEngine and Axiom
        </p>

        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 relative overflow-hidden rounded-full border-2 border-white/40 mb-3">
            <Image
              src={speaker.photo}
              alt={speaker.name}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xl font-semibold text-white">{speaker.name}</p>
          <p className="text-sm text-white/70 font-light whitespace-pre-line">
            {speaker.title}
          </p>
        </div>

        <div className="opacity-70 text-center text-white">
          <p>New technologies for evidence-based policy making</p>
          <p className="text-sm opacity-80">
            IARIW–CAPE workshop · UCLouvain Saint-Louis, Brussels ·{' '}
            {formatDate('2026-08-27')}
          </p>
        </div>

        <div className="bg-white/95 rounded-xl px-8 py-3 flex items-center gap-8">
          <Image
            src="/logos/iariw/cape.png"
            alt="CAPE — Center for Applied Public Economics"
            width={640}
            height={233}
            style={{ height: '34px', width: 'auto' }}
          />
          <Image
            src="/logos/iariw/beamm.png"
            alt="BEAMM"
            width={640}
            height={129}
            style={{ height: '26px', width: 'auto' }}
          />
          <Image
            src="/logos/iariw/uclouvain-saint-louis.jpg"
            alt="UCLouvain Saint-Louis Bruxelles"
            width={640}
            height={360}
            style={{ height: '38px', width: 'auto' }}
          />
        </div>
      </div>
    </Slide>
  );
}
