"use client";

import LiveAppSlide from "./LiveAppSlide";

/**
 * "See it live" embeds — one per stack layer, following that layer's walk
 * slide. Static fallbacks live in the appendix.
 */

function Card({ tag, children }: { tag: string; children: React.ReactNode }) {
  return (
    <div className="content-card p-5">
      <div className="slide-tag mb-2">{tag}</div>
      <p className="text-base text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}

export const ScorecardLiveSlide = () => (
  <LiveAppSlide
    title="The Scorecard, live"
    url="https://www.policyengine.org/scorecard"
    displayUrl="policyengine.org/scorecard"
  >
    <Card tag="What you're seeing">
      Urban&apos;s State of the Safety Net beside PolicyEngine&apos;s
      counterpart &mdash; 24,717 published cells, each pair labeled, with a
      held-out record that only counts numbers PolicyEngine never calibrated
      toward.
    </Card>
    <Card tag="Worth clicking">
      The divergences tab &mdash; the freshest disagreements shown first, with
      consumed-target tautologies labeled instead of counted. Reform validation
      covers JCT, TPC, CBO, PWBM, and state fiscal notes.
    </Card>
  </LiveAppSlide>
);

export const GraphRandSlide = () => (
  <LiveAppSlide
    title="The law as a graph, live"
    url="https://axiom.org/graph"
    displayUrl="axiom.org"
  >
    <Card tag="What you're seeing">
      3,309 US provisions as one navigable graph &mdash; federal tax credits (26
      USC &sect;&sect;21, 22, 25A, 32) ringed by all 50 states&apos; statutes,
      regulations, and agency manuals. Every node carries the source text and
      the rule that computes it.
    </Card>
    <Card tag="The RAND connection">
      RAND&apos;s Tax Code Analysis Tool maps Title 26 the same way &mdash;
      sections, entities, and concepts as a network. Axiom&apos;s graph is the
      executable complement: each node computes, so the structure can be checked
      against outcomes, not only read.
    </Card>
  </LiveAppSlide>
);

export const ChronicleLiveSlide = () => (
  <LiveAppSlide
    title="Chronicle, live"
    url="https://chronicle.institute"
    displayUrl="chronicle.institute"
  >
    <Card tag="What you're seeing">
      The two registers &mdash; the fact store and the witnessed first-print
      journal &mdash; with the verification page showing the RFC 3161 receipts
      anyone can check offline.
    </Card>
    <Card tag="Why it matters here">
      When Thesis says a forecast resolved, or Microcosm says a target was hit,
      the number being compared against is this record &mdash; as published,
      never reconciled or modeled.
    </Card>
  </LiveAppSlide>
);

export const CalibrationLiveSlide = () => (
  <LiveAppSlide
    title="The calibration dashboard, live"
    url="https://microcosm.institute/calibration/dashboard"
    displayUrl="microcosm.institute"
  >
    <Card tag="What you're seeing">
      Every calibration target in the current US release, grouped by program and
      geography, sized by count or weight, colored by error &mdash; IRS SOI,
      Census population, and the rest of the administrative record.
    </Card>
    <Card tag="Worth clicking">
      Breakdown by geography &mdash; the state surface the district layer
      extends. External checks link out to the held-out comparisons.
    </Card>
  </LiveAppSlide>
);

export const ThesisLiveSlide = () => (
  <LiveAppSlide
    title="Thesis forecasts, live"
    url="https://app.thesisinstitute.org"
    displayUrl="app.thesisinstitute.org"
  >
    <Card tag="What you're seeing">
      Forecast cells on published government data points &mdash; each with an
      80% interval stated before resolution, graded against the official first
      print when it lands.
    </Card>
    <Card tag="Worth clicking">
      The calibration page: interval coverage, CRPS against a persistence
      baseline, and the witnessed-custody rules that keep the scoreboard from
      grading itself on a curve.
    </Card>
  </LiveAppSlide>
);
