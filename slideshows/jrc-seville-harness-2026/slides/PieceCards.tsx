'use client';

import { Frame } from '../deck';
import { PIECE_ICONS } from './pieces';

/**
 * The five pieces as five cards in a row (NeedsSlide, HarnessSlide and AbundanceSlide); `label` sets a small tag above
 * each card's text. A card with no text shows its icon and heading only, centred (HarnessSlide).
 */
export default function PieceCards({ title, cards, label }: { title: string; cards: { tag: string; text?: string }[]; label?: string }) {
  return (
    <Frame title={title}>
      <div className="flex h-full flex-col justify-center-safe pb-[2vh]">
        <div className="grid grid-cols-5 gap-[1.3vw]">
          {cards.map(({ tag, text }) => {
            const Icon = PIECE_ICONS[tag];
            return (
              <div key={tag} className={`content-card flex flex-col gap-[2vh] !px-[1.2vw] !py-[4vh] ${text ? '' : 'items-center text-center'}`}>
                {Icon && <Icon aria-hidden className={text ? 'h-[6.4vh] w-[6.4vh] text-pe-teal' : 'h-[11vh] w-[11vh] text-pe-teal'} stroke={1.5} />}
                <div className="font-display font-bold leading-tight text-pe-dark" style={{ fontSize: 'clamp(19px, 3.4vh, 40px)' }}>
                  {tag}
                </div>
                {text && <div className="flex flex-col gap-[0.8vh]">
                  {label && (
                    <div className="font-semibold uppercase tracking-[0.12em] text-pe-teal" style={{ fontSize: 'clamp(16px, 2vh, 24px)' }}>
                      {label}
                    </div>
                  )}
                  <p className="leading-snug text-gray-700" style={{ fontSize: 'clamp(16px, 2.75vh, 33px)' }}>
                    {text}
                  </p>
                </div>}
              </div>
            );
          })}
        </div>
      </div>
    </Frame>
  );
}
