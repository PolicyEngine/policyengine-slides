'use client';

// The encoder walkthrough: one build per caption in text.walkthrough.steps.
//
// Most builds show one step of axiom.org's walkthrough in a frame (the caption's `n`). A caption with a `figure` shows
// a figure this deck draws instead (slides/WalkthroughFigures.tsx), adapted from axiom.org's drawing of that step.
//
// The slide prints its title and the card, as large as the slide allows. Our caption for the
// build, title and explanation, is visually hidden text in a polite live region. The slide writes it there once the
// slide is on screen and again at each build, so a screen reader announces it; the frame and the figures are hidden
// from screen readers. The caption axiom.org sends is
// never shown. data-walkthrough-site on the card says whether the frame's picture belongs to the caption: "match",
// "differs" (the site reports another step, or a title other than the caption's `site`), "waiting" or "figure". The
// slide does not act on that value; it is there for a check that loads the page.
//
// data-walkthrough-caption is the build; data-walkthrough-want is the axiom.org step it shows.
import { type CSSProperties, type RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSlideshowContext } from '@/components/core/SlideshowContext';
import { Frame, useBare } from '../deck';
import { WALKTHROUGH_BUILDS } from '../builds';
import { walkthrough } from '../text';
import WalkthroughFigure from './WalkthroughFigures';

/** How many steps axiom.org's walkthrough has. */
const SITE_STEPS = 8;

/**
 * The frame protocol of axiom.org's embeddable walkthrough (WALKTHROUGH_SRC), as postMessage data:
 *   in   { type: "axiom-walkthrough:go", step, play }   step 0 is the start, 1 to 8 the rest of that step;
 *                                                       play moves there as a clip, otherwise it cuts
 *   out  { type: "axiom-walkthrough:ready" }            the frame now listens
 *   out  { type: "axiom-walkthrough:step", step, total, title, about }   on load and on each change of step
 */
const WALKTHROUGH_ORIGIN = (process.env.NEXT_PUBLIC_WALKTHROUGH_ORIGIN ?? 'https://axiom.org').replace(/\/$/, '');
const WALKTHROUGH_SRC = `${WALKTHROUGH_ORIGIN}/present/encoder?embed=1`;
const MSG = 'axiom-walkthrough';
/** How long a caption waits before it enters the live region, so the region is in the page, empty, first. */
export const ANNOUNCE_MS = 150;
/** How long the frame has to say anything before the card shows where to find the walkthrough. */
const ANSWER_MS = 6000;
/**
 * The width, in CSS px, of the window axiom.org lays its picture out in: 937 / 0.72, about 1,301. axiom.org's stage
 * stops growing near this width, so a wider window leaves its picture in the card's top-left corner. The frame keeps
 * this window at every card size and scales it to the card's measured width.
 */
const FRAME_WIDTH = 937 / 0.72;
/**
 * The card's shape, 937 to 435 (width to height), as large as the body allows. FRAME_RATIO sits a little above
 * CARD_RATIO, so the frame's floor stays just under the card and never pokes out of it.
 */
const CARD_RATIO = 937 / 435;
const FRAME_RATIO = 2.16;

/**
 * How far to move the frame up (+) or down (-) at a step, in percent of its height, where the site's picture sits off
 * centre in the card. At step 5 the line under the code card ("the rule quotes the words it encodes") straddles the
 * card's bottom edge unless the frame moves up a little.
 */
const SHIFT: Record<number, number> = { 5: 0.6 };

const NOTICE = 'Walkthrough: axiom.org/slides/encoder-walkthrough';

type WalkthroughStep = { step: number; total: number; title: string; about: string };

/** Our caption for a build (1 to WALKTHROUGH_BUILDS), with the step of axiom.org's walkthrough it shows (n). */
export function captionFor(build: number) {
  return walkthrough.steps[build - 1];
}

/**
 * Drive the frame from the deck's build. `up` is false while the slide is mounted but not on screen; then the frame
 * goes back to the start, so the next visit plays from there. `still` (export and bare captures) cuts to each step's
 * rest instead of playing to it. `live` is false on a build that shows a figure in place of the frame: the frame then
 * stays where it is, and the next live build cuts to its step.
 */
function useWalkthrough({ step, up, still, live }: { step: number; up: boolean; still: boolean; live: boolean }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [now, setNow] = useState<WalkthroughStep | null>(null);
  const [ready, setReady] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [late, setLate] = useState(false);
  const previous = useRef<number | undefined>(undefined);

  const send = useCallback((msg: Record<string, unknown>) => {
    frameRef.current?.contentWindow?.postMessage(msg, WALKTHROUGH_ORIGIN);
  }, []);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== WALKTHROUGH_ORIGIN || e.source !== frameRef.current?.contentWindow) return;
      const d = e.data as ({ type?: unknown } & Partial<WalkthroughStep>) | null;
      if (!d || typeof d.type !== 'string' || !d.type.startsWith(`${MSG}:`)) return;
      setAnswered(true);
      if (d.type === `${MSG}:ready`) setReady(true);
      else if (d.type === `${MSG}:step` && typeof d.step === 'number' && typeof d.title === 'string') {
        setNow({ step: d.step, total: d.total ?? SITE_STEPS, title: d.title, about: d.about ?? '' });
      }
    };
    window.addEventListener('message', onMessage);
    const timer = setTimeout(() => setLate(true), ANSWER_MS);
    return () => {
      window.removeEventListener('message', onMessage);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (!up) {
      if (previous.current !== undefined) send({ type: `${MSG}:go`, step: 0, play: false });
      previous.current = undefined;
      return;
    }
    if (!live) {
      previous.current = undefined;
      return;
    }
    // Unless `still`, a move to axiom.org's next step plays as a clip (the first build plays from the start); any
    // other move cuts. A build that shows a figure clears `previous` above, so the frame build after it cuts to its
    // step and the clip never plays through the step the figure stands for.
    const last = previous.current;
    const play = !still && (last === undefined ? step === 1 : step === last + 1);
    send({ type: `${MSG}:go`, step, play });
    previous.current = step;
  }, [ready, up, step, still, live, send]);

  return { frameRef, now, failed: late && !answered, state: late && !answered ? 'failed' : ready ? 'ready' : answered ? 'answered' : 'waiting' };
}

/** The frame's height and transform for a card of size `box`: FRAME_WIDTH wide, scaled to the card's width. */
function geometry(box: { w: number; h: number }, ratio: number, shift: number) {
  const scale = box.w / FRAME_WIDTH;
  return {
    height: `${Math.max(box.h, box.w / ratio) / scale}px`,
    transform: `scale(${scale}) translateY(${-50 - shift}%)`,
  };
}

/**
 * The frame, laid out FRAME_WIDTH wide (about 1,300 px, a desktop window) and scaled to the card's width, so the site
 * lays its picture out the same way at every card size. A ResizeObserver measures the card, and `geometry` turns its
 * size into the frame's height and scale.
 *
 * Scaled, the frame's height never drops below the card's width over `ratio`; the frame is centred on the card and
 * cropped by it. A headless capture lays the page out in a shorter window and grows it to full height just before the
 * screenshot; with this floor the frame keeps one size through that resize, so the site's picture has no time to fall
 * behind.
 */
function ScaledFrame({
  frameRef,
  hidden,
  ratio,
  shift,
}: {
  frameRef: RefObject<HTMLIFrameElement | null>;
  hidden: boolean;
  ratio: number;
  shift: number;
}) {
  // The card's size, measured; the frame stays hidden until the first measure, so it never shows at the wrong scale.
  const holder = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<{ w: number; h: number } | null>(null);
  const shape = useRef({ ratio, shift });
  useEffect(() => {
    shape.current = { ratio, shift };
  }, [ratio, shift]);
  useEffect(() => {
    const el = holder.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const next = { w: entry.contentRect.width, h: entry.contentRect.height };
      // Apply the new size to the frame at once, inside the observer's callback, which runs before the browser paints:
      // a headless capture grows the window just before its screenshot, and a React render scheduled from here could
      // land a frame late, leaving the frame at the old, smaller scale. React's own render below sets the same values.
      const frame = frameRef.current;
      if (frame && next.w > 0) {
        const g = geometry(next, shape.current.ratio, shape.current.shift);
        frame.style.height = g.height;
        frame.style.transform = g.transform;
      }
      setBox(next);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [frameRef]);
  const g = box && box.w > 0 ? geometry(box, ratio, shift) : null;
  // Before the first measure the frame takes its final shape (FRAME_WIDTH by FRAME_WIDTH / ratio), not a height of zero.
  const style: CSSProperties = {
    width: `${FRAME_WIDTH}px`,
    height: g ? g.height : `${FRAME_WIDTH / ratio}px`,
    top: '50%',
    transform: g ? g.transform : `translateY(${-50 - shift}%)`,
    transformOrigin: '0 0',
    visibility: hidden || !box ? 'hidden' : undefined,
  };
  return (
    <div ref={holder} className="absolute inset-0">
      <iframe
        ref={frameRef}
        src={WALKTHROUGH_SRC}
        title={walkthrough.title}
        aria-hidden={true}
        tabIndex={-1}
        loading="eager"
        sandbox="allow-scripts allow-same-origin"
        className="pointer-events-none absolute left-0 border-0"
        style={style}
      />
    </div>
  );
}

/**
 * Write the caption into the live region while the slide is on screen. The region stays in the page between builds
 * and holds nothing until the slide comes up, so a screen reader announces every caption, the first one included: a
 * region that arrives already filled can go unannounced. Leaving the slide empties it, so the next visit announces
 * again.
 */
function useAnnounce({ up, title, about }: { up: boolean; title: string; about: string }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const write = (heading: string, body: string) => {
      if (titleRef.current) titleRef.current.textContent = heading;
      if (aboutRef.current) aboutRef.current.textContent = body;
    };
    if (!up) {
      write('', '');
      return;
    }
    const timer = setTimeout(() => write(title, about), ANNOUNCE_MS);
    return () => clearTimeout(timer);
  }, [up, title, about]);
  return { titleRef, aboutRef };
}

export default function EncoderWalkthroughSlide({ buildStep }: { buildStep?: number }) {
  // The deck's build step (1 to WALKTHROUGH_BUILDS) picks the caption, and the caption names axiom.org's step (n). The
  // prop is set only while this slide is on screen.
  const { buildStep: deckStep } = useSlideshowContext();
  const build = Math.min(Math.max(deckStep, 1), WALKTHROUGH_BUILDS);
  const caption = captionFor(build);
  const step = caption.n;
  const params = useSearchParams();
  const bare = useBare();
  const still = params?.get('export') === '1' || bare;
  const figure = caption.figure;
  const up = buildStep !== undefined;
  const { frameRef, now, failed, state } = useWalkthrough({ step, up, still, live: !figure });
  const { titleRef, aboutRef } = useAnnounce({ up, title: caption.title, about: caption.about });
  // Does the picture in the frame belong to the caption? Unknown until the site reports its step. A figure is ours.
  const site = figure ? 'figure' : !now ? 'waiting' : now.step === step && now.title === caption.site ? 'match' : 'differs';

  return (
    <Frame title={walkthrough.title}>
      {/* The card reaches 2vh into the space above (the header's margin) and below (the slide's bottom padding), so
          it shows larger; a bare capture has neither, so there it keeps to its box. */}
      <div className={`flex flex-col ${bare ? 'h-full' : '-my-[2vh] h-[calc(100%+4vh)]'}`}>
        <div className="flex min-h-0 flex-1 items-center justify-center" style={{ containerType: 'size' }}>
          {/* The card's fill is axiom.org's stage colour, so a few pixels the frame leaves at an edge do not show. */}
          <div
            className="relative overflow-hidden rounded-2xl border border-gray-200 bg-[#eae9e6] shadow-sm"
            style={{
              width: `min(100cqw, 100cqh * ${CARD_RATIO})`,
              height: `min(100cqh, 100cqw / ${CARD_RATIO})`,
            }}
            data-walkthrough={state}
            data-walkthrough-step={now?.step ?? 0}
            data-walkthrough-want={step}
            data-walkthrough-site={site}
          >
            <div className="sr-only" aria-live="polite" aria-atomic="true" data-walkthrough-caption={build}>
              <h2 ref={titleRef} />
              <p ref={aboutRef} />
            </div>
            <ScaledFrame frameRef={frameRef} hidden={failed || !!figure} ratio={FRAME_RATIO} shift={SHIFT[step] ?? 0} />
            {figure && <WalkthroughFigure id={figure} />}
            {failed && !figure && (
              <div className="absolute inset-0 flex items-center justify-center p-[3vh] text-center text-gray-500">{NOTICE}</div>
            )}
          </div>
        </div>
      </div>
    </Frame>
  );
}
