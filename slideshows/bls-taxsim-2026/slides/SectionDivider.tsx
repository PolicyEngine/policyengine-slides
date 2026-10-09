import Slide from '@/components/core/Slide';

/** A section opener on the cover gradient: the section number, title and presenter. The presenter line is the handoff cue. */
export default function SectionDivider({ number, title, presenter }: { number: string; title: string; presenter?: string }) {
  return (
    <Slide isCover>
      <div className="relative z-10 flex flex-col items-center space-y-6 text-center">
        <p className="font-mono text-2xl font-bold tracking-widest text-teal-200">{number}</p>
        <div className="h-1 w-20 rounded-full bg-white/30" />
        <h1 className="font-display text-5xl font-bold text-white lg:text-6xl">{title}</h1>
        {presenter && <p className="text-2xl font-medium text-white/80">{presenter}</p>}
      </div>
    </Slide>
  );
}
