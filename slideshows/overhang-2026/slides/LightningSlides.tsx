import BasePathImage from '@/components/core/BasePathImage';
import Slide from '@/components/core/Slide';
import { speakers } from '@/lib/speakers';

/** Title for the Expectations lightning talk: the same frame as the session title slide, different claim. */
export function SpfTitleSlide() {
  return (
    <Slide fullBleed showFooter={false}>
      <div className="gradient-bg absolute inset-0 flex flex-col px-16 py-12 text-white">
        <div className="flex items-center gap-10">
          <BasePathImage src="/logos/white.svg" alt="PolicyEngine" width={280} height={80} className="h-12 w-auto" priority />
          <span className="h-10 w-px bg-white/30" aria-hidden="true" />
          <BasePathImage src="/logos/axiom-foundation-white.svg" alt="The Axiom Foundation" width={260} height={90} className="h-14 w-auto" priority />
        </div>
        <div className="my-auto py-9">
          <h1 className="max-w-5xl font-display text-[68px] font-bold leading-[1.08] tracking-tight">How sure are<br />the pros?</h1>
          <p className="mt-7 text-3xl text-white/85">58 years of forecasters’ probability distributions, scored</p>
        </div>
        <div className="flex items-end justify-between gap-8">
          <div className="flex items-center gap-4">
            <BasePathImage src={speakers['max-ghenis'].photo} alt="Max Ghenis" width={64} height={64} className="h-16 w-16 rounded-full object-cover border border-white/40" />
            <div><p className="text-2xl font-semibold">Max Ghenis</p><p className="mt-1 text-base text-white/70">maxghenis.com/expectations</p></div>
          </div>
          <div className="text-right text-sm leading-relaxed text-white/70">
            <p>The Overhang 2026 · Lightning talks</p><p>American Geophysical Union, Washington DC</p><p>September 19, 2026</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
