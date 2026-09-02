import ScreenshotSlide from './ScreenshotSlide';

/**
 * Demo fallback slides — one per live demo beat, presentable if the venue
 * network fails. Screenshots captured 2026-08-26 from the live sites
 * (shared with the iariw-2026 deck).
 */

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
