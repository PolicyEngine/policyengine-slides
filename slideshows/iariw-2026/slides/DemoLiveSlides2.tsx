'use client';

import LiveAppSlide from './LiveAppSlide';

/** Chronicle, Axiom cliff explorer, and Axiom chatbot live embeds. */

export const ChronicleLiveSlide = () => (
  <LiveAppSlide
    title="Chronicle, live"
    url="https://chronicle.institute"
    displayUrl="chronicle.institute"
  >
    <div className="content-card p-5 text-center">
      <div className="stat-number text-6xl">171,855</div>
      <p className="text-lg text-gray-700 mt-2 leading-snug">
        official statistics ingested as facts
      </p>
      <p className="text-sm text-gray-500 mt-2 leading-snug">
        from 40 official publishers &mdash; 39,173 of them in the witnessed
        first-print store on screen
      </p>
    </div>

    <div className="content-card p-5">
      <div className="slide-tag mb-3">What you are seeing</div>
      <p className="text-base text-gray-700 leading-relaxed">
        A record of what official sources printed, and when &mdash;
        first-print values with provenance, revision history, and a stable
        address for every fact. Recorded as published; never reconciled,
        imputed, or modeled.
      </p>
    </div>

    <div className="pl-5 border-l-4 border-pe-teal mt-auto">
      <p className="text-sm text-gray-600 leading-relaxed italic">
        Also a public repo:{' '}
        <span className="font-mono not-italic">
          github.com/PolicyEngine/chronicle
        </span>
      </p>
    </div>
  </LiveAppSlide>
);

export const ThesisLiveSlide = () => (
  <LiveAppSlide
    title="Thesis: start from the bill, derive the outcomes"
    url="https://app.thesisinstitute.org/bills"
    displayUrl="app.thesisinstitute.org/bills"
  >
    <div className="content-card p-5">
      <div className="slide-tag mb-3">What you are seeing</div>
      <p className="text-base text-gray-700 leading-relaxed">
        Each analysis reads a bill&apos;s provisions, separates what its
        authors would sign their names to from what the text does regardless,
        and maps candidate outcome metrics against the live forecast registry.
      </p>
    </div>

    <div className="content-card p-5">
      <div className="slide-tag mb-3">The loop, closing</div>
      <p className="text-base text-gray-700 leading-relaxed">
        This is where the opening question becomes practice: bills in, scored
        forecasts out &mdash; every prediction graded when the official number
        lands. A prototype, labeled as one.
      </p>
    </div>
  </LiveAppSlide>
);

export const AxiomCliffLiveSlide = () => (
  <LiveAppSlide
    title="The cliff analyzer: reform the rules, watch the cliffs move"
    url="https://axiom.org/snap"
    displayUrl="axiom.org/snap"
  >
    <div className="content-card p-5">
      <div className="slide-tag mb-3">What you are seeing</div>
      <p className="text-base text-gray-700 leading-relaxed">
        SNAP allotments and marginal rates across an earnings sweep, computed
        from the encoded rules. Drag a reform parameter &mdash; the allotment
        curve and the cliff threshold recompute live.
      </p>
    </div>

    <div className="content-card p-5">
      <div className="slide-tag mb-3">Why it matters</div>
      <p className="text-base text-gray-700 leading-relaxed">
        The same encodings that score budgets expose where programs interact
        &mdash; where marginal rates pass 100% and benefits cliff as earnings
        rise.
      </p>
    </div>

    <div className="pl-5 border-l-4 border-pe-teal mt-auto">
      <p className="text-sm text-gray-600 leading-relaxed italic">
        Same rules, a completely different question.
      </p>
    </div>
  </LiveAppSlide>
);

export const AxiomChatbotLiveSlide = () => (
  <LiveAppSlide
    title="The chatbot: answers computed, not generated"
    url="https://axiom.org/chatbot"
    displayUrl="axiom.org/chatbot"
  >
    <div className="content-card p-5">
      <div className="slide-tag mb-3">What you are seeing</div>
      <p className="text-base text-gray-700 leading-relaxed">
        A benefits assistant on the Axiom rules engine: every euro &mdash;
        dollar, here &mdash; and eligibility verdict is computed against the
        encoded rules, with citations. The language model narrates; it never
        does the arithmetic.
      </p>
    </div>

    <div className="content-card p-5">
      <div className="slide-tag mb-3">The comparison toggle</div>
      <p className="text-base text-gray-700 leading-relaxed">
        Side-by-side with plain AI on the same question &mdash; the
        PolicyBench failure and the fix, in one screen.
      </p>
    </div>
  </LiveAppSlide>
);
