'use client';

import LiveAppSlide from './LiveAppSlide';

/**
 * Live demo slides — the actual apps, embedded with Expand. The static
 * screenshot slides that follow each beat are the no-network fallback.
 */

export const DemoAxiomLiveSlide = () => (
  <LiveAppSlide
    title="The Axiom App: Belgium, live"
    url="https://app.axiom-foundation.org/?country=be"
    displayUrl="axiom.org"
  >
    <div className="content-card p-5">
      <div className="slide-tag mb-3">What you are seeing</div>
      <p className="text-base text-gray-700 leading-relaxed">
        107 Belgian provisions, clustered federal, Flanders, Wallonia,
        Brussels, and German-speaking community. Each node is a rule encoded
        from the statute.
      </p>
    </div>

    <div className="content-card p-5">
      <div className="slide-tag mb-3">The walkthrough</div>
      <p className="text-base text-gray-700 leading-relaxed">
        Open a provision &rarr; read the law beside the RuleSpec rule that
        computes it &rarr; trace the computation graph from result back to
        parameters.
      </p>
    </div>

    <div className="pl-5 border-l-4 border-pe-teal mt-auto">
      <p className="text-sm text-gray-600 leading-relaxed italic">
        Live walkthrough &mdash; screenshots follow if the network does not
        cooperate.
      </p>
    </div>
  </LiveAppSlide>
);

export const ScorecardLiveSlide = () => (
  <LiveAppSlide
    title="The scorecard: the rules, graded live"
    url="https://app.axiom-foundation.org/scorecard"
    displayUrl="axiom.org/scorecard"
  >
    <div className="content-card p-5">
      <div className="slide-tag mb-3">What you are seeing</div>
      <p className="text-base text-gray-700 leading-relaxed">
        122K provisions indexed across 154 jurisdictions &mdash; US federal
        and all 50 states, UK, Belgium, Canada, New Zealand, Denmark &mdash;
        each with its rule count, linked to source.
      </p>
    </div>

    <div className="content-card p-5">
      <div className="slide-tag mb-3">Why it matters</div>
      <p className="text-base text-gray-700 leading-relaxed">
        Status is computed from the validation harness &mdash; and the
        registry publishes whatever the computation says, gaps included.
      </p>
    </div>

    <div className="pl-5 border-l-4 border-pe-teal mt-auto">
      <p className="text-sm text-gray-600 leading-relaxed italic">
        The scoreboard grades itself honestly &mdash; that is the point.
      </p>
    </div>
  </LiveAppSlide>
);

export const CalibrationLiveSlide = () => (
  <LiveAppSlide
    title="The calibration dashboard, live"
    url="https://microcosm.institute/calibration/dashboard/microcosm?country=be"
    displayUrl="microcosm.institute"
  >
    <div className="content-card p-5">
      <div className="slide-tag mb-3">What you are seeing</div>
      <p className="text-base text-gray-700 leading-relaxed">
        Every one of the 254 Belgian calibration targets, published with its
        error. The provenance line states the US donor pool and the planned
        Belgian upgrade.
      </p>
    </div>

    <div className="content-card p-5">
      <div className="slide-tag mb-3">Why it matters</div>
      <p className="text-base text-gray-700 leading-relaxed">
        The same harness discipline as the rules layer, applied to the
        microdata underneath the model.
      </p>
    </div>

    <div className="pl-5 border-l-4 border-pe-teal mt-auto">
      <p className="text-sm text-gray-600 leading-relaxed italic">
        You do not have to take my word for any of this &mdash; it is a
        website.
      </p>
    </div>
  </LiveAppSlide>
);
