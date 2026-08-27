import ScreenshotSlide from './ScreenshotSlide';

/**
 * Demo fallback slides — one per live demo beat, presentable if the venue
 * network fails. Screenshots captured 2026-08-26 from the live sites.
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

export const DemoPeBeSlide = () => (
  <ScreenshotSlide
    title="A Belgian reform, computed"
    url="policyengine.org/be"
    src="/screenshots/iariw-2026/pe-be-demo.png"
    alt="PolicyEngine Belgium prototype"
    caption="Prototype on the Axiom rules engine and Microcosm-BE v0.5 — policy levers, distributional impacts, and the population checked against administrative truth."
  />
);

export const ChronicleTargetsStaticSlide = () => (
  <ScreenshotSlide
    title="Chronicle, drilled to source"
    url="microcosm.institute"
    src="/screenshots/iariw-2026/chronicle-targets.png"
    alt="Target diagnostics page for Microcosm Belgium"
    caption="252 statistics, 254 targets for Belgium alone — each drills to the Chronicle fact and the publisher behind it."
  />
);

export const AxiomCliffStaticSlide = () => (
  <ScreenshotSlide
    title="The cliff analyzer"
    url="axiom.org/snap"
    src="/screenshots/iariw-2026/axiom-cliff.png"
    alt="Axiom benefits cliff explorer with SNAP allotment and marginal rate charts"
    caption="A New York single adult: the SNAP allotment falls to a hard cliff near $2,100 of monthly earnings, and the marginal rate spikes past the cliff threshold — computed from the encoded rules, reform sliders on the left."
  />
);

export const AxiomChatbotStaticSlide = () => (
  <ScreenshotSlide
    title="The chatbot"
    url="axiom.org/chatbot"
    src="/screenshots/iariw-2026/axiom-chatbot.png"
    alt="Axiom chatbot: a benefits assistant powered by the Axiom rules engine"
    caption="Every amount and eligibility verdict is computed against the encoded rules; the language model narrates. The toggle compares side-by-side with plain AI."
  />
);

export const MicrocosmDashboardSlide = () => (
  <ScreenshotSlide
    title="The data, anchored in public"
    url="microcosm.institute/calibration/dashboard"
    src="/screenshots/iariw-2026/calibration-dashboard-be.png"
    alt="Microcosm Belgium calibration dashboard"
    caption="Every calibration target published with its error — the provenance line states the US donor pool and the planned Belgian upgrade."
  />
);
