'use client';

import LiveAppSlide from './LiveAppSlide';

/**
 * Live demo slides — the actual apps, embedded with Expand. The static
 * screenshot slides that follow each beat are the no-network fallback.
 */

export const DemoAxiomLiveSlide = () => (
  <LiveAppSlide
    title="The Axiom App, live"
    url="https://app.axiom-foundation.org/"
    displayUrl="axiom.org"
    fallbackSrc="/screenshots/gettsim-2026/axiom-app.png"
  >
    <div className="content-card p-5">
      <div className="slide-tag mb-3">What you are seeing</div>
      <p className="text-base text-gray-700 leading-relaxed">
        The US corpus &mdash; 3,309 provisions across federal and all 50
        states, clustered by jurisdiction. Each node is a rule encoded from
        the statute; the country picker switches corpora, Belgium included.
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
    title="The scorecard: the model, graded"
    url="https://policyengine-scorecard.vercel.app/"
    displayUrl="policyengine-scorecard.vercel.app"
    fallbackSrc="/screenshots/gettsim-2026/scorecard-sotsn.png"
  >
    <div className="content-card p-5">
      <div className="slide-tag mb-3">What you are seeing</div>
      <p className="text-base text-gray-700 leading-relaxed">
        Urban Institute publishes 24,717 cells across 9 US safety-net
        programs. The model produces a counterpart for 7,850 of them;
        1,249 land within tolerance. LIHEAP and CCDF are honest gaps.
      </p>
    </div>

    <div className="content-card p-5">
      <div className="slide-tag mb-3">Why it matters</div>
      <p className="text-base text-gray-700 leading-relaxed">
        The held-out record — 1,031 of 4,792 — counts only comparisons
        the model was never calibrated toward. Agreement on a consumed
        target is labeled a tautology and never counted.
      </p>
    </div>

    <div className="pl-5 border-l-4 border-pe-teal mt-auto">
      <p className="text-sm text-gray-600 leading-relaxed italic">
        The BE tab holds the Belgian lanes &mdash; SPF Finances, Cour des
        comptes, and JRC EUROMOD-BE claims on the 15 July 2026 PIT reform.
      </p>
    </div>
  </LiveAppSlide>
);

export const CalibrationLiveSlide = () => (
  <LiveAppSlide
    title="The calibration dashboard, live"
    url="https://microcosm.institute/calibration/dashboard/microcosm?country=be"
    displayUrl="microcosm.institute"
    fallbackSrc="/screenshots/iariw-2026/calibration-dashboard-be.png"
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
