'use client';

import { IconFileText } from '@tabler/icons-react';
import { Fragment } from 'react';
import { Frame } from '../deck';
import { ladder } from '../text';

/**
 * Axiom's Silver/Gold slide (axiom.org/slides/gravity-project-2026-11, slide 8) in this deck's type: a starting point
 * and two goal tiers, joined by arrows. Each card shows an icon and the tier's name. A goal tier's tag picks its metal
 * (the starting point takes teal) and is not printed, and the sentences, programs and footnotes in text.ladder are
 * not rendered.
 *
 * MARK_PATH is the Axiom mark, the same path public/logos/axiom-foundation.svg draws, inlined so it can take the
 * tier's metal. The brand never sets the mark in a live font, so a tier tag's "∀" is drawn with this path instead.
 */
const MARK_PATH = 'M21 0L278 710L381 710L638 0L554 0L481 207L178 207L105 0ZM204 283L455 283L329 642Z';
const METAL: Record<string, string> = { Silver: '#9ca3af', Gold: '#c9a227' };

function AxiomMark({ fill }: { fill: string }) {
  return (
    <svg viewBox="21 0 617 710" aria-hidden className="inline-block h-[0.95em] w-auto shrink-0" style={{ aspectRatio: '617 / 710' }}>
      <path fill={fill} d={MARK_PATH} />
    </svg>
  );
}

/** The metal a tier tag names ("Goal: Silver ∀"), or none for the starting point. */
function metalOf(tag: string): string | undefined {
  if (!tag.endsWith('∀')) return undefined;
  const metal = METAL[tag.replace(/\s*∀\s*$/, '').split(/\s+/).at(-1) ?? ''];
  if (!metal) throw new Error(`no metal for tier tag: ${tag}`);
  return metal;
}

export default function LadderSlide() {
  return (
    <Frame title={ladder.title}>
      <div className="flex h-full flex-col justify-center pb-[4vh]">
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-[1.4vw]">
          {ladder.tiers.map((tier, i) => {
            const metal = metalOf(tier.tag);
            const top = metal ?? 'var(--pe-teal)';
            return (
              <Fragment key={tier.tag}>
                <div
                  className="flex flex-col items-center justify-start gap-[3vh] rounded-xl border border-gray-200 bg-white text-center shadow-sm"
                  style={{ padding: '5vh 1.4vw', borderTop: `0.8vh solid ${top}`, background: tier.tag.includes('Gold') ? '#fbf6e8' : tier.tag.includes('Silver') ? '#f3f4f6' : undefined }}
                >
                  <div
                    aria-hidden
                    className="flex h-[11vh] w-[11vh] shrink-0 items-center justify-center rounded-full border-[3px] bg-white"
                    style={{ borderColor: top, color: top }}
                  >
                    {metal ? <span style={{ fontSize: '2.1em', lineHeight: 1 }}><AxiomMark fill={metal} /></span> : <IconFileText className="h-[6vh] w-[6vh]" stroke={1.6} />}
                  </div>
                  <div className="font-display font-bold leading-tight text-pe-dark" style={{ fontSize: '1.25em' }}>
                    {tier.name}
                  </div>
                </div>
                {i < ladder.tiers.length - 1 && (
                  <span aria-hidden className="self-center text-pe-teal" style={{ fontSize: '2em' }}>
                    &rarr;
                  </span>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </Frame>
  );
}
