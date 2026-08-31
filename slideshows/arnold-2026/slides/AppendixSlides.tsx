import Slide from "@/components/core/Slide";
import ScreenshotSlide from "./ScreenshotSlide";

/**
 * Static fallbacks for every live embed — presentable if the network dies.
 * Screenshots captured 2026-08-30 from the live sites.
 */

export function AppendixDividerSlide() {
  return (
    <Slide isEnd>
      <h1 className="font-display text-5xl font-bold text-center">Appendix</h1>
      <p className="text-2xl opacity-80 mt-4 text-center">
        Static fallbacks for the live embeds
      </p>
    </Slide>
  );
}

export const GraphStaticSlide = () => (
  <ScreenshotSlide
    title="The law as a graph"
    url="axiom.org"
    src="/screenshots/arnold-2026/axiom-graph.png"
    alt="Axiom graph view of 3,309 US provisions"
    caption="3,309 US provisions — federal tax credits ringed by all 50 states' statutes, regulations, and agency manuals."
  />
);

export const CalibrationStaticSlide = () => (
  <ScreenshotSlide
    title="Microcosm (working name) calibration dashboard"
    url="microcosm.institute"
    src="/screenshots/arnold-2026/calibration-dashboard-us.png"
    alt="Microcosm US calibration dashboard"
    caption="5,659 national and state targets in the July 28 US release — 95.7% within 10% of the administrative value."
  />
);

export const ScorecardStaticSlide = () => (
  <ScreenshotSlide
    title="PolicyEngine Scorecard"
    url="policyengine.org/scorecard"
    src="/screenshots/arnold-2026/scorecard.png"
    alt="PolicyEngine Scorecard beside Urban Institute's State of the Safety Net"
    caption="Published estimates beside PolicyEngine's counterpart — comparable, constructed, or concept mismatch; held-out record shown separately."
  />
);

export const SnapSimStaticSlide = () => (
  <ScreenshotSlide
    title="SNAP payment error simulator"
    url="policyengine.org/us/snap-payment-error-simulator"
    src="/screenshots/arnold-2026/snap-simulator.png"
    alt="SNAP payment error simulator"
    caption="Per-state measured-rate distributions, tier odds, and expected bills under the FY 2028 cost-sharing regime — benefit computations verified against QC files."
  />
);

export const DistrictStaticSlide = () => (
  <ScreenshotSlide
    title="SNAP benefits by congressional district"
    url="policyengine.org/us/snap-district-map"
    src="/screenshots/arnold-2026/snap-district-map.png"
    alt="SNAP benefits by congressional district"
    caption="436 congressional districts in the app today — the layer the district grant funds."
  />
);

export const CrfbStaticSlide = () => (
  <ScreenshotSlide
    title="Taxation of Social Security benefits"
    url="policyengine.org/us/taxation-of-benefits-reforms"
    src="/screenshots/arnold-2026/crfb-dashboard.png"
    alt="Taxation of Social Security benefits dashboard"
    caption="CRFB's benefit-taxation designs, scored year by year through 2100."
  />
);

export const ThesisStaticSlide = () => (
  <ScreenshotSlide
    title="Thesis forecasts"
    url="app.thesisinstitute.org"
    src="/screenshots/arnold-2026/thesis-app.png"
    alt="Thesis forecast cards"
    caption="Probabilistic forecasts on government data cells, with 80% intervals, graded on resolution."
  />
);

export const TariffStaticSlide = () => (
  <ScreenshotSlide
    title="Tariff schedule and coverage browser"
    url="axiom.org/tariff/schedule"
    src="/screenshots/arnold-2026/tariff-schedule.png"
    alt="Tariff schedule and coverage browser"
    caption="13,790 rated HTS lines with statutory rate text and named coverage status — incomplete and not certified, and it says so."
  />
);

export const ChronicleStaticSlide = () => (
  <ScreenshotSlide
    title="Chronicle (working name)"
    url="chronicle.institute"
    src="/screenshots/arnold-2026/chronicle.png"
    alt="Chronicle — a record of what official sources printed, and when"
    caption="The fact store and the witnessed first-print journal — recorded as published, never reconciled or modeled."
  />
);

export const ValidationStaticSlide = () => (
  <ScreenshotSlide
    title="Axiom validation dashboard"
    url="axiom.org/validation"
    src="/screenshots/arnold-2026/axiom-validation.png"
    alt="Axiom validation dashboard"
    caption="About 900,000 household cases checked against independent calculators and records — published for anyone to re-run."
  />
);
