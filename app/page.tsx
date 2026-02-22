import { getAllSlideshowMetadata } from '@/lib/slideshows';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const decks = getAllSlideshowMetadata().sort((a, b) => {
    return b.date.localeCompare(a.date);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pe-darker via-pe-dark to-pe-teal/80">
      <main className="px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-5xl font-bold text-white mb-3 tracking-tight">
            Presentations
          </h1>
          <p className="text-xl text-white/60 mb-12">
            Slide decks from PolicyEngine talks, webinars, and meetings
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {decks.map((deck) => (
              <Link
                key={deck.id}
                href={`/${deck.id}`}
                className="group block"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 hover:border-white/20 transition-all duration-200">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-pe-light transition-colors leading-snug">
                      {deck.title}
                    </h2>
                    {deck.private && (
                      <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-white/40 border border-white/15 rounded px-1.5 py-0.5">
                        Private
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/50 mb-4 line-clamp-2">
                    {deck.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {deck.speakers && deck.speakers.slice(0, 3).map((speaker, i) => (
                        <Image
                          key={i}
                          src={speaker.photo}
                          alt={speaker.name}
                          width={28}
                          height={28}
                          className="rounded-full border border-white/20 object-cover w-7 h-7"
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white/40">
                      <span>{deck.date}</span>
                      <span>{deck.slideCount} slides</span>
                    </div>
                  </div>

                  {deck.location && (
                    <div className="mt-3 text-xs text-white/30">
                      {deck.location}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
