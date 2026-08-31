'use client';

import LiveAppSlide from './LiveAppSlide';

export const CliffWatchLiveSlide = () => (
  <LiveAppSlide
    title="PolicyEngine in action: where benefits cliff"
    url="https://www.policyengine.org/us/cliffwatch"
    displayUrl="policyengine.org/us/cliffwatch"
  >
    <div className="content-card p-5">
      <div className="slide-tag mb-3">What you are seeing</div>
      <p className="text-base leading-relaxed text-gray-700">
        Taxes, benefits, refundable credits, and net income as earnings rise
        for a household in any state &mdash; including the exact points where
        programs interact to create cliffs.
      </p>
    </div>

    <div className="content-card p-5">
      <div className="slide-tag mb-3">The harness connection</div>
      <p className="text-base leading-relaxed text-gray-700">
        Every bend in the curve is a reproducible model result. The same
        encoded rules used for national scores remain inspectable one
        household and one earnings increment at a time.
      </p>
    </div>

    <div className="mt-auto border-l-4 border-pe-teal pl-5">
      <p className="text-sm italic leading-relaxed text-gray-600">
        Same rules engine, a question the aggregate alone cannot answer.
      </p>
    </div>
  </LiveAppSlide>
);

export const ObbbaExplorerLiveSlide = () => (
  <LiveAppSlide
    title="PolicyEngine in action: one law, household by household"
    url="https://www.policyengine.org/us/obbba-household-explorer"
    displayUrl="policyengine.org/us/obbba-household-explorer"
  >
    <div className="content-card p-5">
      <div className="slide-tag mb-3">What you are seeing</div>
      <p className="text-base leading-relaxed text-gray-700">
        The distribution of household-level impacts from the One Big Beautiful
        Bill Act. Select a household to move from the national pattern to a
        concrete, traceable case.
      </p>
    </div>

    <div className="content-card p-5">
      <div className="slide-tag mb-3">The harness connection</div>
      <p className="text-base leading-relaxed text-gray-700">
        The same model and calibrated microdata support the aggregate score
        and every household result, so analysts can inspect who drives the
        total instead of treating it as a black box.
      </p>
    </div>

    <div className="mt-auto border-l-4 border-pe-teal pl-5">
      <p className="text-sm italic leading-relaxed text-gray-600">
        Same national reform, viewed from the population down to one
        household.
      </p>
    </div>
  </LiveAppSlide>
);
