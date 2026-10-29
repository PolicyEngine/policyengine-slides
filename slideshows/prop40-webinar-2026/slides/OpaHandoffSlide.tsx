import Slide from '@/components/core/Slide';
import SpeakerHeadshot from '@/components/media/SpeakerHeadshot';
import { speakers } from '@/lib/speakers';
import { OPA_DISPLAY_URL, OPA_URL } from '../links';

/** Handoff to Fernando, who presents his own material. The report title is
 * the one his overview page uses. */
export default function OpaHandoffSlide() {
  return (
    <Slide isCover>
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 pt-16">
        <p className="text-lg font-semibold uppercase tracking-wider text-white/70">
          Open Policy Analysis
        </p>
        <h1 className="font-display text-5xl font-bold text-white">Reconciling the two analyses</h1>
        <SpeakerHeadshot speaker={speakers['fernando-hoces-de-la-guardia']} size="lg" showTitle={false} />
        <p className="text-2xl text-white/80 max-w-3xl">
          California Proposition 40, Reconciliation of the Two Analyses
        </p>
        <a
          href={OPA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto font-mono text-xl text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
          onClick={(e) => e.stopPropagation()}
        >
          {OPA_DISPLAY_URL}
        </a>
      </div>
    </Slide>
  );
}
