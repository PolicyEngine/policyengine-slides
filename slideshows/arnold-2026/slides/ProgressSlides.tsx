"use client";

import LiveAppSlide from "./LiveAppSlide";

/** Progress since we last talked: districts, tariffs, Social Security, SNAP QC. */

function Card({ tag, children }: { tag: string; children: React.ReactNode }) {
  return (
    <div className="content-card p-5">
      <div className="slide-tag mb-2">{tag}</div>
      <p className="text-base text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}

export const DistrictSlide = () => (
  <LiveAppSlide
    title="Your grant at work — the district layer"
    url="https://www.policyengine.org/us/snap-district-map"
    displayUrl="policyengine.org/us/snap-district-map"
  >
    <Card tag="Live today">
      436 congressional districts in the API and app &mdash; district maps, the
      NJ child tax credit calculator&apos;s district tab, the state legislative
      tracker. One national file, filtered by state and district.
    </Card>
    <Card tag="Straight talk on calibration">
      The current default release is calibrated to national and state totals.
      The August build carries the first 436 district population targets, with
      IRS SOI district income following &mdash; full district rows are expected
      in the next release.
    </Card>
    <Card tag="Through December">
      Spending runs through December 31, with the final hand-off report and
      dashboard link due then.
    </Card>
  </LiveAppSlide>
);

export const TariffSlide = () => (
  <LiveAppSlide
    title="New: the tariff schedule, encoded and checked"
    url="https://axiom.org/tariff/schedule"
    displayUrl="axiom.org/tariff/schedule"
  >
    <Card tag="What's encoded">
      The full Harmonized Tariff Schedule &mdash; 13,790 rated lines with every
      2025&ndash;26 action layered on top, each cell carrying its authority
      chain (and IEEPA actions, including refund scenarios, computable by date).
    </Card>
    <Card tag="The check">
      216 million row-level comparisons against the Yale Budget Lab&apos;s
      statutory panel: zero unexplained mismatches &mdash; and the machine
      certificate still says no, with the remaining open units named. Complete
      is not certified.
    </Card>
    <Card tag="Cross-model dividend">
      Yale and TPC diverged about 1.3 points on the average tariff rate this
      spring; our decomposition attributes essentially all of it to the weight
      year &mdash; 1.34 points, with an offsetting 0.08-point residual &mdash;
      and we shared the result with both teams. Working paper:
      axiom.org/tariff/paper.
    </Card>
  </LiveAppSlide>
);

export const SocialSecuritySlide = () => (
  <LiveAppSlide
    title="Social Security — the run-through you asked for"
    url="https://www.policyengine.org/us/taxation-of-benefits-reforms/"
    displayUrl="policyengine.org/us/taxation-of-benefits-reforms"
  >
    <Card tag="Cross-sectional, shipped">
      CRFB&apos;s benefit-taxation designs scored year by year through 2100
      &mdash; revenue, trust-fund split, and distribution &mdash; on this public
      dashboard, with the paper alongside.
    </Card>
    <Card tag="Dynamic, first estimates">
      The dynamic layer&apos;s first estimates are up at
      microcosm.institute/dynamics &mdash; person-level histories, the machinery
      that survivor-benefit composition and claiming questions actually need.
    </Card>
    <Card tag="Your threads">
      Hana&apos;s generation-level incidence view is on the roadmap; the $100k
      cap&apos;s survivor composition is exactly what person-level histories
      unlock. Next stop: Gopi Shah Goda&apos;s February LTSS convening.
    </Card>
  </LiveAppSlide>
);

export const SnapQcSlide = () => (
  <LiveAppSlide
    title="New: SNAP payment error rates, simulated"
    url="https://www.policyengine.org/us/snap-payment-error-simulator"
    displayUrl="policyengine.org/us/snap-payment-error-simulator"
  >
    <Card tag="What it does">
      A public simulator for the FY 2028 SNAP cost-sharing regime: each
      state&apos;s measured-rate distribution, tier odds, delay odds, and
      expected bill &mdash; drawn from the state&apos;s own USDA quality control
      sample.
    </Card>
    <Card tag="Grounded in exact replay">
      The rules engine reproduces the recorded benefit computation for all 6,081
      cases in seven states&apos; FY 2024 QC files &mdash; every stage in the QC
      record, to the dollar, at zero tolerance.
    </Card>
    <Card tag="Forecast discipline">
      A pre-registered prediction at the FY 2026 policy boundary is on the
      record &mdash; filed before the outcome publishes, graded when it does.
    </Card>
  </LiveAppSlide>
);
