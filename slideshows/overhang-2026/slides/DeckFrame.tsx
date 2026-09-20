import { ReactNode } from 'react';
import Slide from '@/components/core/Slide';

/** One frame for every content slide in the Overhang decks, so titles sit at the same height and size. */
export default function DeckFrame({
  title,
  badge,
  children,
  source,
  sourceUrl,
}: {
  title: string;
  badge?: ReactNode;
  children: ReactNode;
  source?: ReactNode;
  sourceUrl?: string;
}) {
  return (
    <Slide fullBleed>
      <div className="absolute inset-x-16 top-14 bottom-[104px] flex flex-col">
        <header className="mb-6 shrink-0">
          <div className="flex items-start justify-between gap-6">
            <h1 className="font-display text-[38px] font-bold leading-tight tracking-tight text-pe-dark">{title}</h1>
            {badge}
          </div>
          <div className="accent-bar mt-4 w-32" />
        </header>
        <div className="relative min-h-0 flex-1">{children}</div>
        {source && (sourceUrl ? (
          <a href={sourceUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="mt-3 shrink-0 text-xs leading-snug text-gray-500 hover:text-pe-teal">{source}</a>
        ) : (
          <div className="mt-3 shrink-0 text-xs leading-relaxed text-gray-500">{source}</div>
        ))}
      </div>
    </Slide>
  );
}
