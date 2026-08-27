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

export const DemoPeBeLiveSlide = () => (
  <LiveAppSlide
    title="A Belgian reform, live"
    url="https://policyengine.org/be"
    displayUrl="policyengine.org/be"
  >
    <div className="content-card p-5">
      <div className="slide-tag mb-3">What you are seeing</div>
      <p className="text-base text-gray-700 leading-relaxed">
        A prototype on the Axiom rules engine and Microcosm-BE v0.5 &mdash; 28
        encoded CIR 92 parameters, budget, Gini, and poverty impacts, and the
        population checked against administrative truth by both engines.
      </p>
    </div>

    <div className="content-card p-5">
      <div className="slide-tag mb-3">The walkthrough</div>
      <p className="text-base text-gray-700 leading-relaxed">
        Move the top bracket rate &rarr; watch the impacts recompute &rarr;
        scroll to the population table, where the misses are shown in red with
        named mechanisms.
      </p>
    </div>
  </LiveAppSlide>
);

export const DemoDashboardLiveSlide = () => (
  <LiveAppSlide
    title="The data, anchored in public — live"
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

    <div className="pl-5 border-l-4 border-pe-teal mt-auto">
      <p className="text-sm text-gray-600 leading-relaxed italic">
        You do not have to take my word for any of this &mdash; it is a
        website.
      </p>
    </div>
  </LiveAppSlide>
);
