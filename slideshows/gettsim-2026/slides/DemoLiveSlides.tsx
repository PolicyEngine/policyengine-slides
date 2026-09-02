'use client';

import LiveAppSlide from './LiveAppSlide';

/**
 * Live demo slides — the actual apps, embedded with Expand. Each carries a
 * captured screenshot behind the Show capture toggle for the no-network case.
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

export const ValidationLiveSlide = () => (
  <LiveAppSlide
    title="Validation, in the open"
    url="https://axiom.org/validation"
    displayUrl="axiom.org/validation"
    fallbackSrc="/screenshots/gettsim-2026/axiom-validation.png"
  >
    <div className="content-card p-5">
      <div className="slide-tag mb-3">What you are seeing</div>
      <p className="text-base text-gray-700 leading-relaxed">
        902,239 households checked against four independent engines
        &mdash; PolicyEngine, Statistics Canada&apos;s SPSD/M, USDA SNAP
        quality-control records among them &mdash; published for anyone to
        re-run.
      </p>
    </div>

    <div className="content-card p-5">
      <div className="slide-tag mb-3">Why it matters</div>
      <p className="text-base text-gray-700 leading-relaxed">
        The model that wrote the rules never grades its own work. Every
        disagreement is dispositioned, and findings flow both directions.
      </p>
    </div>

    <div className="pl-5 border-l-4 border-pe-teal mt-auto">
      <p className="text-sm text-gray-600 leading-relaxed italic">
        Live walkthrough &mdash; the capture is one click away if the
        network does not cooperate.
      </p>
    </div>
  </LiveAppSlide>
);

export const PEAppLiveSlide = () => (
  <LiveAppSlide
    title="The PolicyEngine app, live"
    url="https://www.policyengine.org/us"
    displayUrl="policyengine.org"
    fallbackSrc="/screenshots/gettsim-2026/pe-app-us.png"
  >
    <div className="content-card p-5">
      <div className="slide-tag mb-3">What you are seeing</div>
      <p className="text-base text-gray-700 leading-relaxed">
        The public front door: compute any household&apos;s taxes and
        benefits, or design a reform and see its budgetary, distributional,
        and poverty impacts &mdash; US and UK.
      </p>
    </div>

    <div className="content-card p-5">
      <div className="slide-tag mb-3">Why it matters</div>
      <p className="text-base text-gray-700 leading-relaxed">
        Every number traces to the same open rules and calibrated data the
        rest of this talk is about &mdash; free, no login, same engine the
        researchers use.
      </p>
    </div>

    <div className="pl-5 border-l-4 border-pe-teal mt-auto">
      <p className="text-sm text-gray-600 leading-relaxed italic">
        Live walkthrough &mdash; the capture is one click away if the
        network does not cooperate.
      </p>
    </div>
  </LiveAppSlide>
);

export const UKChatLiveSlide = () => (
  <LiveAppSlide
    title="PolicyEngine UK chat, live"
    url="https://policyengine-uk-chat.vercel.app/uk/chat"
    displayUrl="policyengine-uk-chat.vercel.app"
    fallbackSrc="/screenshots/gettsim-2026/uk-chat.png"
  >
    <div className="content-card p-5">
      <div className="slide-tag mb-3">What you are seeing</div>
      <p className="text-base text-gray-700 leading-relaxed">
        A UK tax and benefit assistant: ask in plain English about a
        household or a reform, and it runs the PolicyEngine UK model to
        answer &mdash; with the calculation, not a guess.
      </p>
    </div>

    <div className="content-card p-5">
      <div className="slide-tag mb-3">Why it matters</div>
      <p className="text-base text-gray-700 leading-relaxed">
        The language model never computes policy itself. It calls the same
        encoded rules and calibrated data, so every figure is reproducible
        outside the chat.
      </p>
    </div>

    <div className="pl-5 border-l-4 border-pe-teal mt-auto">
      <p className="text-sm text-gray-600 leading-relaxed italic">
        Live walkthrough &mdash; the capture is one click away if the
        network does not cooperate.
      </p>
    </div>
  </LiveAppSlide>
);

export const StateTrackerLiveSlide = () => (
  <LiveAppSlide
    title="The state legislative tracker, live"
    url="https://www.policyengine.org/us/bill-tracker"
    displayUrl="policyengine.org/us/bill-tracker"
    fallbackSrc="/screenshots/gettsim-2026/state-tracker.png"
  >
    <div className="content-card p-5">
      <div className="slide-tag mb-3">What you are seeing</div>
      <p className="text-base text-gray-700 leading-relaxed">
        State tax and benefit bills across all 50 states, each scored as it
        moves: fiscal impact, winners and losers, district-level analysis.
      </p>
    </div>

    <div className="content-card p-5">
      <div className="slide-tag mb-3">Why it matters</div>
      <p className="text-base text-gray-700 leading-relaxed">
        AI agents read the bill text, locate the parameters, and run the
        microsimulation &mdash; the same encode-and-verify loop, pointed at
        legislation as it is introduced.
      </p>
    </div>

    <div className="pl-5 border-l-4 border-pe-teal mt-auto">
      <p className="text-sm text-gray-600 leading-relaxed italic">
        Live walkthrough &mdash; the capture is one click away if the
        network does not cooperate.
      </p>
    </div>
  </LiveAppSlide>
);

export const ScorecardLiveSlide = () => (
  <LiveAppSlide
    title="The scorecard: the model, graded"
    url="https://www.policyengine.org/scorecard"
    displayUrl="policyengine.org/scorecard"
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
