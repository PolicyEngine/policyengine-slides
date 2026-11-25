'use client';

// Strings defined in this file: the count ("1 of 5", the card's place among text.needs.cards) and the list's
// aria-label, "The five pieces". Each section's name and line come from its text.needs card.
import Slide from '@/components/core/Slide';
import { needs } from '../text';
import { PIECE_ICONS } from './pieces';

/** A section break for one of the five pieces: its name and line, and the five pieces with this one lit. */
function Section({ index }: { index: number }) {
  const { tag, text } = needs.cards[index];
  return (
    <Slide fullBleed>
      <div className="gradient-bg flex h-full w-full flex-col justify-center px-[9vw] pb-[6vh] text-white">
        <div className="mb-[3vh] font-mono uppercase tracking-[0.2em] text-white/70" style={{ fontSize: 'clamp(14px, 2vh, 24px)' }}>
          {`${index + 1} of ${needs.cards.length}`}
        </div>
        <h1 className="font-bold leading-[1.1] tracking-tight" style={{ fontSize: 'clamp(44px, 10vh, 120px)' }}>
          {tag}
        </h1>
        <div className="accent-bar mt-[3.5vh] w-32" />
        <p className="mt-[3.5vh] max-w-[70vw] leading-snug text-white/90" style={{ fontSize: 'clamp(20px, 3.6vh, 42px)' }}>
          {text}
        </p>
        <ol className="mt-[8vh] flex gap-[2.4vw]" aria-label="The five pieces">
          {needs.cards.map((card, i) => {
            const Icon = PIECE_ICONS[card.tag];
            const lit = i === index;
            return (
              <li
                key={card.tag}
                aria-current={lit ? 'step' : undefined}
                className={`flex items-center gap-[0.6vw] font-semibold ${lit ? 'text-white' : 'text-white/45'}`}
                style={{ fontSize: 'clamp(16px, 2.4vh, 28px)' }}
              >
                {Icon && <Icon aria-hidden className="h-[1.2em] w-[1.2em]" stroke={1.7} />}
                {card.tag}
              </li>
            );
          })}
        </ol>
      </div>
    </Slide>
  );
}

export const RulesSection = () => <Section index={0} />;
export const DataSection = () => <Section index={1} />;
export const ResponsesSection = () => <Section index={2} />;
export const PredictionsSection = () => <Section index={3} />;
export const CommunicationSection = () => <Section index={4} />;
