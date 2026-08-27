import { IconArrowUp } from '@tabler/icons-react';
import Slide from '@/components/core/Slide';
import Image from '@/components/core/BasePathImage';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

interface StackLayerProps {
  eyebrow: string;
  logo: string;
  alt: string;
  width: number;
  height: number;
  displayHeight: number;
  detail: string;
  className?: string;
}

function StackLayer({
  eyebrow,
  logo,
  alt,
  width,
  height,
  displayHeight,
  detail,
  className = '',
}: StackLayerProps) {
  return (
    <div
      className={`min-h-[76px] rounded-2xl border bg-white px-6 py-3 grid grid-cols-[0.8fr_1.2fr] gap-6 items-center ${className}`}
    >
      <div>
        <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500 mb-1.5">
          {eyebrow}
        </div>
        <Image
          src={logo}
          alt={alt}
          width={width}
          height={height}
          style={{ height: `${displayHeight}px`, width: 'auto' }}
        />
      </div>
      <p className="text-base text-gray-700 leading-snug">{detail}</p>
    </div>
  );
}

function UpConnector() {
  return (
    <div className="h-7 flex items-center justify-center" aria-hidden="true">
      <IconArrowUp size={22} stroke={1.7} className="text-pe-teal/60" />
    </div>
  );
}

export default function StackRecapSlide() {
  return (
    <Slide>
      <SlideHeader>
        <div className="slide-tag mb-3">6 &middot; Looking forward</div>
        <SlideTitle>The five blocks form one stack</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Two trusted substrates, a construction layer, and everything that
          asks it questions.
        </p>
      </SlideHeader>

      <div className="flex-1 flex flex-col items-center justify-center mt-[-1rem]">
        <div className="w-full max-w-6xl flex flex-col items-center">
          <StackLayer
            eyebrow="Agentic forecasts · in progress"
            logo="/logos/thesis-institute.png"
            alt="The Thesis Institute"
            width={532}
            height={112}
            displayHeight={27}
            detail="AI analysts combine the stack into forecasts that can resolve against reality."
            className="w-[48%] border-2 border-dashed border-gray-300"
          />

          <UpConnector />

          <StackLayer
            eyebrow="Applications"
            logo="/logos/teal.svg"
            alt="PolicyEngine"
            width={350}
            height={100}
            displayHeight={31}
            detail="Apps, APIs, and analysts ask any reform question on the fly."
            className="w-[60%] border-gray-200 shadow-sm"
          />

          <UpConnector />

          <StackLayer
            eyebrow="Construction and certification"
            logo="/logos/microcosm.png"
            alt="Microcosm"
            width={608}
            height={84}
            displayHeight={25}
            detail="Constructs, selects, and calibrates the microdata; certifies each release."
            className="w-[72%] border-pe-teal/40 bg-pe-teal/10 shadow-sm"
          />

          <UpConnector />

          <div className="w-[88%] grid grid-cols-2 gap-5">
            <StackLayer
              eyebrow="Rules substrate"
              logo="/logos/axiom-foundation.svg"
              alt="The Axiom Foundation"
              width={1026}
              height={363}
              displayHeight={34}
              detail="Law as computation: executable rules with external answer keys."
              className="border-gray-200 shadow-sm"
            />
            <StackLayer
              eyebrow="Facts substrate"
              logo="/logos/chronicle.png"
              alt="Chronicle"
              width={732}
              height={160}
              displayHeight={27}
              detail="Official statistics as sourced, dated, machine-readable facts."
              className="border-gray-200 shadow-sm"
            />
          </div>
        </div>
      </div>

      <p className="text-center text-lg text-pe-teal font-medium mt-5">
        Rules + facts &rarr; synthetic population &rarr; policy answers &rarr;
        forecasts
      </p>
    </Slide>
  );
}
