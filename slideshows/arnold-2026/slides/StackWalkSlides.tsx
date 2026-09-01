import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { resolveImageSrc } from "@/lib/base-path-image";
import { useSlideshowContextSafe } from "@/components/core/SlideshowContext";

/**
 * The stack walk: one overview with the six layers numbered in walk order,
 * then one slide per layer — that layer lit, the rest faded — with its
 * status, ambition, and feedback loop.
 */

type LayerKey =
  "corollary" | "thesis" | "policyengine" | "microcosm" | "axiom" | "chronicle";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const marks: Record<LayerKey, { src: string; alt: string; height: number }> = {
  corollary: {
    src: "/logos/corollary-wordmark.svg",
    alt: "Corollary",
    height: 16,
  },
  thesis: { src: "/logos/thesis-wordmark.svg", alt: "Thesis", height: 17 },
  policyengine: { src: "/logos/teal.svg", alt: "PolicyEngine", height: 20 },
  microcosm: {
    src: "/logos/microcosm-wordmark.svg",
    alt: "Microcosm",
    height: 14,
  },
  axiom: { src: "/logos/axiom-wordmark-bare.svg", alt: "Axiom", height: 15 },
  chronicle: {
    src: "/logos/chronicle-wordmark.svg",
    alt: "Chronicle",
    height: 14,
  },
};

// Plain <img>: next/image never completed loading these SVGs in the deck.
function Wordmark({
  layer,
  faded,
  scale = 1,
}: {
  layer: LayerKey;
  faded: boolean;
  scale?: number;
}) {
  const m = marks[layer];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolveImageSrc(m.src, BASE_PATH)}
      alt={m.alt}
      className={faded ? "opacity-30 grayscale" : ""}
      style={{ height: `${m.height * scale}px`, width: "auto" }}
    />
  );
}

const megagoals: Record<LayerKey, string> = {
  corollary: "products that follow from the rules",
  thesis: "forecast all government statistics, under current law and reforms",
  policyengine: "replicate all policy scores with flexible open-source models",
  microcosm:
    "build society in miniature, calibrated to all official statistics",
  axiom: "encode the world's rules",
  chronicle: "collect all official statistics",
};

const missions: Record<LayerKey, string> = {
  corollary: "the products that follow from the rules",
  thesis:
    "every government statistic, forecast under current law and every reform",
  policyengine: "every policy score, replicated in the open",
  microcosm: "society in miniature, calibrated to every official statistic",
  axiom: "a computable layer for all law",
  chronicle: "every official statistic, recorded as first published",
};

const loops: Record<LayerKey, string> = {
  corollary: "inherits the checks below — nothing of its own to publish yet",
  thesis:
    "forecasts graded against reality — 35 of 45 witnessed resolutions in interval",
  policyengine:
    "the Scorecard beside JCT, CBO, TPC, Urban, PWBM — explained divergence",
  microcosm:
    "5,659 calibration targets published with their errors — 95.7% within 10%",
  axiom:
    "~900k household cases checked against independent engines and records",
  chronicle:
    "first prints witnessed by two timestamp authorities, checkable offline",
};

const oneLiners: Record<LayerKey, string> = {
  corollary: "products that follow from the rules — applications on top",
  thesis: "judgment and uncertainty — forecasts scored against reality",
  policyengine: "the model that composes them — any reform, any question",
  microcosm: "the world at micro level, calibrated to administrative truth",
  axiom: "computable law — every value cited, every clause dated",
  chronicle: "official statistics as sourced, dated, machine-readable facts",
};

function Box({
  layer,
  focus,
  dotted = false,
}: {
  layer: LayerKey;
  focus?: LayerKey;
  dotted?: boolean;
}) {
  const active = focus === layer;
  const faded = focus !== undefined && !active;
  return (
    <div
      className={`w-full rounded-xl px-5 py-1.5 text-center transition-all ${
        active
          ? "border-2 border-pe-teal bg-teal-50 shadow-md"
          : dotted
            ? "border-2 border-dashed border-gray-300 bg-white"
            : "border border-gray-300 bg-gray-50"
      } ${faded ? "opacity-40" : ""}`}
    >
      <div className="flex items-center justify-center h-6">
        <Wordmark layer={layer} faded={faded} />
      </div>
      <p
        className={`text-xs mt-0.5 leading-snug ${
          active ? "text-gray-700" : "text-gray-500"
        }`}
      >
        {oneLiners[layer]}
      </p>
    </div>
  );
}

function StackDiagram({ focus }: { focus?: LayerKey }) {
  return (
    <div className="flex flex-col items-center gap-1 w-full">
      <Box layer="corollary" focus={focus} dotted />
      <div className="text-gray-300 text-sm leading-none">┊</div>
      <Box layer="thesis" focus={focus} dotted />
      <div className="text-gray-400 text-sm leading-none">↑</div>
      <Box layer="policyengine" focus={focus} />
      <div className="text-gray-400 text-sm leading-none">↑</div>
      <Box layer="microcosm" focus={focus} />
      <div className="text-gray-400 text-sm leading-none">↑</div>
      <Box layer="chronicle" focus={focus} />
      <div className="text-gray-400 text-sm leading-none">↑</div>
      <Box layer="axiom" focus={focus} />
    </div>
  );
}

function WalkCard({
  tag,
  children,
}: {
  tag: string;
  children: React.ReactNode;
}) {
  return (
    <div className="content-card p-4">
      <div className="slide-tag mb-1.5">{tag}</div>
      <p className="text-sm text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}

function WalkSlide({
  n,
  title,
  focus,
  status,
  ambition,
  loop,
}: {
  n: number;
  title: string;
  focus: LayerKey;
  status: React.ReactNode;
  ambition: React.ReactNode;
  loop: React.ReactNode;
}) {
  return (
    <Slide>
      <SlideHeader>
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-3xl font-bold text-pe-teal">{n}</span>
          <SlideTitle>{title}</SlideTitle>
        </div>
      </SlideHeader>

      <div className="mt-4 grid grid-cols-[0.85fr_1.15fr] gap-8 items-start">
        <StackDiagram focus={focus} />
        <div className="flex flex-col gap-3">
          <WalkCard tag="Status">{status}</WalkCard>
          <WalkCard tag="Ambition">{ambition}</WalkCard>
          <WalkCard tag="The feedback loop">{loop}</WalkCard>
        </div>
      </div>
    </Slide>
  );
}

function IntegratedRow({
  layer,
  visible,
  dotted = false,
}: {
  layer: LayerKey;
  visible: boolean;
  dotted?: boolean;
}) {
  return (
    <div
      className={`w-full rounded-xl px-6 py-2.5 grid items-center gap-6 transition-opacity duration-500 ${
        visible ? "animate-fade-in-up opacity-100" : "opacity-0"
      } ${
        dotted
          ? "border-2 border-dashed border-gray-300 bg-white"
          : "border border-gray-300 bg-gray-50"
      }`}
      style={{ gridTemplateColumns: "11rem 1.1fr 1fr" }}
    >
      <div className="flex items-center">
        <Wordmark layer={layer} faded={false} scale={1.6} />
      </div>
      <div className="text-lg text-pe-dark font-semibold leading-snug">
        {missions[layer]}
      </div>
      <div className="text-sm text-gray-600 leading-snug">{loops[layer]}</div>
    </div>
  );
}

function Arrow({ dashed = false }: { dashed?: boolean }) {
  return (
    <div
      className={`text-sm leading-none ${dashed ? "text-gray-300" : "text-gray-400"}`}
    >
      {dashed ? "┊" : "↑"}
    </div>
  );
}

/** Builds bottom-up, one project per step; the closing line is step 7. */
export function StackIntroSlide() {
  const ctx = useSlideshowContextSafe();
  const step = ctx?.buildStep ?? 7;
  const on = (n: number) => step >= n;
  return (
    <Slide>
      <SlideHeader>
        <div className="flex items-baseline justify-between">
          <SlideTitle>Six projects, one chain of checks</SlideTitle>
          <span className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
            mission · what grades it, in public
          </span>
        </div>
      </SlideHeader>

      <div className="mt-3 flex flex-col items-center gap-1 max-w-6xl mx-auto">
        <IntegratedRow layer="corollary" visible={on(6)} dotted />
        <Arrow dashed />
        <IntegratedRow layer="thesis" visible={on(5)} dotted />
        <Arrow />
        <IntegratedRow layer="policyengine" visible={on(4)} />
        <Arrow />
        <IntegratedRow layer="microcosm" visible={on(3)} />
        <Arrow />
        <IntegratedRow layer="chronicle" visible={on(2)} />
        <Arrow />
        <IntegratedRow layer="axiom" visible={on(1)} />
      </div>

      <div
        className={`accent-block mt-4 max-w-6xl mx-auto transition-opacity duration-500 ${
          on(7) ? "animate-fade-in-up opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-base text-gray-800 leading-relaxed">
          The primitives of policy analysis in the AI era, each publishing its
          own checks. Certified is computed, never set by hand, and the
          dashboard publishes whatever the computation says. The district grant
          funds PolicyEngine&apos;s data layer &mdash; Microcosm.
        </p>
      </div>
    </Slide>
  );
}

export const StackPeSlide = () => (
  <WalkSlide
    n={1}
    title="PolicyEngine — the model you fund"
    focus="policyengine"
    status={
      <>
        Free, open-source tax and benefit analysis since 2021 &mdash; one
        household or the whole population, all 50 states and the UK, now by
        state and congressional district. The interface researchers,
        governments, and screeners already use.
      </>
    }
    ambition={
      <>
        Replicate all policy scores with flexible open-source models &mdash; any
        reform, any question, on the fly, for analysts, agencies, and AI agents,
        with the same rules and data underneath.
      </>
    }
    loop={
      <>
        The Scorecard: estimates from Urban, JCT, TPC, CBO, PWBM, and state
        fiscal notes beside PolicyEngine&apos;s counterpart &mdash; each pair
        labeled comparable, constructed, or concept mismatch. The metric is
        explained divergence.
      </>
    }
  />
);

export const StackAxiomSlide = () => (
  <WalkSlide
    n={2}
    title="Axiom — computable law"
    focus="axiom"
    status={
      <>
        Launched July 2026. Open encodings of US federal and state tax and
        benefit law &mdash; plus the UK, New Zealand, Denmark, and counting.
        Every value cited to its source, every clause dated, all of it
        executable. PolicyEngine is migrating onto these encodings.
      </>
    }
    ambition={
      <>
        Encode the world&rsquo;s rules &mdash; the reference encoding models,
        government tools, and AI agents all read from, instead of each
        re-implementing the statute.
      </>
    }
    loop={
      <>
        About 900,000 household cases checked against independent calculators
        and records &mdash; PolicyEngine, SPSD/M, EUROMOD, SNAP QC files &mdash;
        on a public dashboard. Certified is computed, never set by hand; today
        it reads 0 of 13.
      </>
    }
  />
);

export const StackChronicleSlide = () => (
  <WalkSlide
    n={3}
    title="Chronicle — what happened, witnessed"
    focus="chronicle"
    status={
      <>
        Preview, under a working name. Two registers: a store of 39,000+ facts
        from archived source packages (IRS SOI, Census, BEA, CMS, SSA, HMRC,
        ONS), and a first-print journal witnessed by two independent timestamp
        authorities and a pinned signing key.
      </>
    }
    ambition={
      <>
        Collect all official statistics &mdash; sourced, dated,
        machine-readable, recorded as published, never reconciled or modeled.
        The ground truth the rest of the stack calibrates and grades against
        &mdash; and, next, each fact tied to the concepts Axiom encodes, so the
        record and the law share one vocabulary.
      </>
    }
    loop={
      <>
        Witnessing is the loop: anyone can verify a copy offline against the
        cryptographic receipts. Microcosm calibrates to these facts; Thesis
        grades forecasts against the first prints.
      </>
    }
  />
);

export const StackMicrocosmSlide = () => (
  <WalkSlide
    n={4}
    title="Microcosm — the world at micro level"
    focus="microcosm"
    status={
      <>
        Preview, under a working name. The data under PolicyEngine&apos;s US
        model today &mdash; calibrated synthetic people and households in one
        national file, filtered by state and congressional district. Private by
        construction. This is the layer the district grant funds.
      </>
    }
    ambition={
      <>
        Build society in miniature, calibrated to all official statistics
        &mdash; every cell traceable to the administrative total behind it;
        households first, other unit families (like import entries for tariff
        analysis) joining the same discipline.
      </>
    }
    loop={
      <>
        The calibration dashboard: 5,659 national and state targets in the July
        28 US release, 95.7% within 10% of the administrative value &mdash;
        every target published with its error, nothing summarized away. The
        calibration now under way passes 30,000 targets, congressional-district
        rows included.
      </>
    }
  />
);

export const StackThesisSlide = () => (
  <WalkSlide
    n={5}
    title="Thesis — does any of it predict reality?"
    focus="thesis"
    status={
      <>
        Preview, ahead of announcement. AI agents publish probabilistic
        forecasts of official statistics and bill outcomes with their full
        reasoning, preregistered &mdash; so the future is never in the training
        data.
      </>
    }
    ambition={
      <>
        Forecast all government statistics, under current law and under reforms
        &mdash; accuracy as the end-to-end test of the whole stack: when a new
        country or program comes online, do resolved forecasts get better?
      </>
    }
    loop={
      <>
        Each forecast graded against the official first print Chronicle records
        &mdash; 45 witnessed resolutions so far, 35 inside their 80% intervals,
        950+ awaiting resolution.
      </>
    }
  />
);

export const StackCorollarySlide = () => (
  <WalkSlide
    n={6}
    title="Corollary — applications on top"
    focus="corollary"
    status={
      <>
        Earliest stage &mdash; scoping, as a for-profit. The delivery layer for
        parties whose rules are private: contracts and agreements that reference
        public law, situated against the open graph.
      </>
    }
    ambition={
      <>
        The same discipline the public stack applies to statutes, applied to
        private documents &mdash; computed outcomes, change propagation when the
        law moves, and verification a counterparty can trust.
      </>
    }
    loop={
      <>
        Inherited from below: conformance checks against independent records,
        with results issued only where the checks pass &mdash; never
        self-certified.
      </>
    }
  />
);
