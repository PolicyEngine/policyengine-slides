import ScreenshotSlide from './ScreenshotSlide';

/**
 * Demo fallback slides — one per live demo beat, presentable if the venue
 * network fails. Screenshots captured 2026-08-26 from the live sites
 * (shared with the iariw-2026 deck).
 */

export const DemoAxiomBrowseSlide = () => (
  <ScreenshotSlide
    title="Browse the encoded law"
    url="axiom.org"
    src="/screenshots/iariw-2026/axiom-browse.png"
    alt="Axiom App field view of Belgian provisions"
    caption="Belgium in the Axiom App: 107 provisions across the federal, Flanders, Wallonia, Brussels, and German-speaking community clusters."
  />
);

export const DemoAxiomProvisionSlide = () => (
  <ScreenshotSlide
    title="The law at the node"
    url="axiom.org"
    src="/screenshots/iariw-2026/axiom-provision.png"
    alt="Statute text beside the RuleSpec rule in the Axiom App"
    caption="CIR 92, art. 36 §2 — the statute text beside the RuleSpec rule that computes it, with entity, unit, and effective dates."
  />
);

export const DemoAxiomGraphSlide = () => (
  <ScreenshotSlide
    title="The computation graph"
    url="axiom.org"
    src="/screenshots/iariw-2026/axiom-graph.png"
    alt="Computation graph for the Belgian company car taxable benefit"
    caption="Every result traces to its parameters and inputs — the dependency structure of the law, as data."
  />
);

export const DemoAxiomValidationSlide = () => (
  <ScreenshotSlide
    title="Validation, in the open"
    url="axiom.org/validation"
    src="/screenshots/iariw-2026/axiom-validation.png"
    alt="Axiom validation page"
    caption="Cross-engine comparisons published for anyone to re-run — the model that wrote the rules never grades its own work."
  />
);

export const ScorecardStaticSlide = () => (
  <ScreenshotSlide
    title="The scorecard: the rules, graded"
    url="axiom.org/scorecard"
    src="/screenshots/gettsim-2026/axiom-scorecard.png"
    alt="Axiom scorecard: per-jurisdiction encoded coverage"
    caption="122K provisions indexed across 154 jurisdictions — US federal and all 50 states, UK, Belgium, Canada, New Zealand — each with its rule count, linked to source. Captured 31 Aug from the live page."
  />
);

export const CalibrationDashboardStaticSlide = () => (
  <ScreenshotSlide
    title="The calibration dashboard"
    url="microcosm.institute/calibration/dashboard"
    src="/screenshots/iariw-2026/calibration-dashboard-be.png"
    alt="Microcosm Belgium calibration dashboard"
    caption="Every calibration target published with its error — the provenance line states the US donor pool and the planned Belgian upgrade."
  />
);
