'use client';

import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';

/**
 * Shared pieces for this deck. Sizes are in vh so a slide fits a laptop and a projector alike, as in the APPAM
 * deck's frame. Slides take their words from text.ts, apart from a few labels that a slide file defines for itself.
 */

/**
 * On a slide built on Frame, `?bare=1` renders the body alone, with no title, sources or footer, so a picture of it
 * can sit in another deck's template under that template's own title. Slides that do not use Frame ignore it. It has
 * no effect on normal viewing or export.
 */
/**
 * The bare body's height, about 465 px at 810: close to the height a body has under a title (about 493 px under a
 * one-line title, about 451 px under a two-line one), so its type stays close to its size.
 */
export const BARE_BODY_HEIGHT = '57.4vh';

export function useBare(): boolean {
  return useSearchParams()?.get('bare') === '1';
}

/**
 * `&bzoom=Z` (1 to 1.6) zooms the bare body by Z, so its type is Z times larger, in a box of the same rendered size:
 * CSS zoom scales the height given in vh, so that is divided by Z, while a percentage width is left as it is.
 */
function useBareZoom(): number {
  const z = parseFloat(useSearchParams()?.get('bzoom') ?? '1');
  return Number.isFinite(z) ? Math.min(Math.max(z, 1), 1.6) : 1;
}

type BareReport = { view: number[]; box: number[]; spill: number; minPx: number; minSvgPx: number; images: number };

/**
 * A report on `root`: the smallest rendered type inside it (HTML and SVG text apart), how far anything reaches past
 * its box, the window's and the box's sizes, and the image count.
 */
function measureBare(root: HTMLElement): BareReport {
  const box = root.getBoundingClientRect();
  let spill = 0;
  let minPx = Infinity;
  let minSvgPx = Infinity;
  root.querySelectorAll<Element>('*').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;
    spill = Math.max(spill, r.bottom - box.bottom, r.right - box.right, box.top - r.top, box.left - r.left);
    const ownText = Array.from(el.childNodes).some((n) => n.nodeType === Node.TEXT_NODE && n.textContent?.trim());
    if (!ownText) return;
    if (el instanceof SVGTextContentElement) {
      minSvgPx = Math.min(minSvgPx, r.height / 1.2);
    } else {
      const zoom = (el as HTMLElement & { currentCSSZoom?: number }).currentCSSZoom ?? 1;
      minPx = Math.min(minPx, parseFloat(getComputedStyle(el).fontSize) * zoom);
    }
  });
  const round = (x: number) => (Number.isFinite(x) ? Math.round(x * 10) / 10 : -1);
  return { view: [window.innerWidth, window.innerHeight], box: [round(box.width), round(box.height)], spill: round(spill), minPx: round(minPx), minSvgPx: round(minSvgPx), images: root.querySelectorAll('img').length };
}

/**
 * The bare body's box. With `&measure=1` it also writes a JSON report into a hidden element after layout (how far
 * anything reaches past the box, in CSS px, and the smallest type), for a script that loads the page to read.
 */
export function BareBody({ children, className = '', style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  const zoom = useBareZoom();
  const measure = useSearchParams()?.get('measure') === '1';
  const ref = useRef<HTMLDivElement>(null);
  const [report, setReport] = useState<BareReport | null>(null);
  useEffect(() => {
    if (!measure) return;
    const timer = setTimeout(() => ref.current && setReport(measureBare(ref.current)), 400);
    return () => clearTimeout(timer);
  }, [measure]);
  return (
    <>
      <div
        ref={ref}
        className={className}
        style={{ ...style, height: `calc(${BARE_BODY_HEIGHT} / ${zoom})`, width: '100%', zoom }}
      >
        {children}
      </div>
      {report && (
        <pre id="bare-measure" hidden>
          {JSON.stringify({ zoom, ...report })}
        </pre>
      )}
    </>
  );
}

export function Frame({
  title,
  kicker,
  sources,
  children,
}: {
  title: string;
  kicker?: string;
  sources?: ReactNode;
  children: ReactNode;
}) {
  const bare = useBare();
  if (bare) {
    return (
      <Slide showFooter={false}>
        <BareBody className="text-gray-800" style={{ fontSize: 'clamp(16px, 2.7vh, 32px)' }}>
          {children}
        </BareBody>
      </Slide>
    );
  }
  return (
    <Slide>
      <div className="flex h-full flex-col">
        <SlideHeader>
          {kicker && <div className="slide-tag mb-[1.2vh]">{kicker}</div>}
          <h1
            className="font-display font-bold leading-tight tracking-tight text-pe-dark"
            style={{ fontSize: 'clamp(26px, 4.2vh, 46px)' }}
          >
            {title}
          </h1>
        </SlideHeader>
        <div className="min-h-0 flex-1 text-gray-800" style={{ fontSize: 'clamp(16px, 2.7vh, 32px)' }}>
          {children}
        </div>
        {sources && <Sources>{sources}</Sources>}
      </div>
    </Slide>
  );
}

/** Small print at the foot of a slide: sources, definitions and the qualifications a claim needs. */
export function Sources({ children }: { children: ReactNode }) {
  return (
    <div
      className="mt-[1.2vh] space-y-[0.5vh] border-t border-gray-200 pt-[1vh] leading-snug text-gray-500"
      style={{ fontSize: 'clamp(10px, 1.45vh, 17px)' }}
    >
      {children}
    </div>
  );
}

/** A full-bleed statement, for the turns in the talk. */
export function Statement({ title, sub, kicker }: { title: string; sub?: string; kicker?: string }) {
  return (
    <Slide fullBleed>
      <div className="gradient-bg flex h-full w-full flex-col justify-center px-[9vw] pb-[10vh] text-white">
        {kicker && (
          <div className="mb-[3vh] font-mono uppercase tracking-[0.2em] text-white/60" style={{ fontSize: 'clamp(12px, 1.8vh, 20px)' }}>
            {kicker}
          </div>
        )}
        <h1 className="max-w-[80vw] font-bold leading-[1.12] tracking-tight" style={{ fontSize: 'clamp(34px, 7vh, 84px)' }}>
          {title}
        </h1>
        <div className="accent-bar mt-[4vh] w-32" />
        {sub && (
          <p className="mt-[4vh] max-w-[70vw] leading-snug text-white/85" style={{ fontSize: 'clamp(18px, 3.3vh, 38px)' }}>
            {sub}
          </p>
        )}
      </div>
    </Slide>
  );
}

/** A card with the deck's teal left rule; `tone` swaps the rule to amber or gray. */
export function Card({
  children,
  tone = 'teal',
  tag,
  className = '',
}: {
  children: ReactNode;
  tone?: 'teal' | 'amber' | 'gray';
  tag?: string;
  className?: string;
}) {
  const rule = tone === 'amber' ? 'var(--pe-amber)' : tone === 'gray' ? 'var(--color-gray-300)' : undefined;
  return (
    <div className={`content-card !p-[2.6vh] ${className}`} style={rule ? { borderLeftColor: rule } : undefined}>
      {tag && (
        <div className="slide-tag mb-[1.2vh]" style={tone === 'amber' ? { color: 'var(--pe-amber)' } : undefined}>
          {tag}
        </div>
      )}
      {children}
    </div>
  );
}

/** A row of steps joined by arrows. */
export function Steps({ steps, active }: { steps: string[]; active?: number }) {
  return (
    <div className="flex items-stretch gap-[1vw]">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-1 items-center gap-[1vw]">
          <div
            className={`flex h-full flex-1 items-center justify-center rounded-xl border px-[1vw] py-[2vh] text-center font-semibold leading-snug ${
              active === i ? 'border-pe-teal bg-pe-teal text-white' : 'border-gray-200 bg-white text-pe-dark'
            }`}
          >
            {step}
          </div>
          {i < steps.length - 1 && (
            <span aria-hidden className="text-pe-teal" style={{ fontSize: '1.4em' }}>
              &rarr;
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
