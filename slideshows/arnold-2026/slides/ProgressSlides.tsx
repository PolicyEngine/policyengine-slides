"use client";

import LiveAppSlide from "./LiveAppSlide";
import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { resolveImageSrc } from "@/lib/base-path-image";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
  <Slide>
    <SlideHeader>
      <div className="flex items-baseline justify-between">
        <SlideTitle>Your grant at work &mdash; the district layer</SlideTitle>
        <span className="font-mono text-lg text-pe-teal">
          IARIW 2026, Brussels
        </span>
      </div>
    </SlideHeader>

    <div
      className="grid gap-7 mt-4 h-[calc(100vh-300px)]"
      style={{ gridTemplateColumns: "0.62fr 1.38fr" }}
    >
      <div className="flex flex-col gap-4">
        <Card tag="Live today">
          436 congressional districts in the API and app &mdash; district maps,
          the NJ child tax credit calculator&apos;s district tab, the state
          legislative tracker. One national file, filtered by state and
          district.
        </Card>
        <Card tag="Calibration">
          The current default release is calibrated to national and state
          totals; the calibration now under way passes 30,000 targets,
          congressional-district rows included.
        </Card>
        <Card tag="Two papers last week">
          The OBBBA analysis of household and geographic variation &mdash;
          results by state and congressional district &mdash; and a methods
          paper on the imputation machinery beneath the calibrated file. Final
          hand-off report and dashboard link due December 31.
        </Card>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white flex flex-col">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolveImageSrc(
            "/screenshots/arnold-2026/obbba-district-map.png",
            BASE_PATH,
          )}
          alt="OBBBA average household net income change in 2026, by congressional district"
          className="w-full h-full object-contain p-4"
        />
        <div className="px-5 py-3 border-t border-gray-100 text-sm text-gray-600">
          OBBBA&apos;s average household net income change in 2026, by
          congressional district &mdash; from the paper presented at IARIW.
        </div>
      </div>
    </div>
  </Slide>
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
    url="https://microcosm.institute/dynamics"
    displayUrl="microcosm.institute/dynamics"
  >
    <Card tag="Cross-sectional, shipped">
      CRFB&apos;s benefit-taxation designs scored year by year through 2100
      &mdash; revenue, trust-fund split, and distribution &mdash; on the public
      dashboard at policyengine.org/us/taxation-of-benefits-reforms.
    </Card>
    <Card tag="Dynamic — the harness comes first">
      The longitudinal layer is specified before it is built: one weight per
      full trajectory, transitions as conditional models, sensitivity surfaces
      instead of 75-year point forecasts, and a scoring protocol under which
      every claim resolves against administrative publications, backtests with
      leakage control, or computes exactly from statute. Contributions merge
      only on held-out score.
    </Card>
    <Card tag="A preview of how the bigger changes land">
      No trajectory has been scored against administrative outcomes yet, and the
      page says so. The same discipline built the cross-sectional file (0.038
      holdout loss, against 0.317 for the enhanced CPS it replaced).
      Person-level histories are what Hana&apos;s generation-level view and the
      $100k cap&apos;s survivor composition run on; next stop, Gopi Shah
      Goda&apos;s February convening.
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

export const AiIncomeShiftSlide = () => (
  <LiveAppSlide
    title="AI and the tax base — the roundtable question"
    url="https://www.policyengine.org/us/ai-inequality/income-shift"
    displayUrl="policyengine.org/us/ai-inequality/income-shift"
  >
    <Card tag="The July 30 companion">
      The Budget Lab&apos;s Slow, Moderate, and Rapid AI scenarios run through
      PolicyEngine at 2030 &mdash; who gains, who loses, and what happens to the
      tax base under each.
    </Card>
    <Card tag="The spread">
      Published estimates of AI&apos;s growth effect differ by more than two
      orders of magnitude. That is the case for scoring policy against many
      futures rather than one &mdash; and for grading the calls afterward, which
      is what Thesis does.
    </Card>
    <Card tag="The gap this exposes">
      The write-up&apos;s own known limits: the incremental capital flow is
      apportioned by households&apos; existing realized capital income, where
      the Budget Lab apportions by SCF-imputed assets. Closing that gap means
      capital income and wealth in the calibrated population, plus realization
      responses &mdash; the near-term picture, next.
    </Card>
  </LiveAppSlide>
);
