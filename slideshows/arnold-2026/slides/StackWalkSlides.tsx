import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import Image from "@/components/core/BasePathImage";

/**
 * The stack walk: one overview with the six layers numbered in walk order,
 * then one slide per layer — that layer lit, the rest faded — with its
 * status, ambition, and feedback loop.
 */

type LayerKey =
  "corollary" | "thesis" | "policyengine" | "microcosm" | "axiom" | "chronicle";

function Wordmark({ layer, faded }: { layer: LayerKey; faded: boolean }) {
  const cls = faded ? "opacity-30 grayscale" : "";
  switch (layer) {
    case "corollary":
      return (
        <Image
          src="/logos/corollary-wordmark.svg"
          alt="Corollary"
          width={540}
          height={150}
          className={cls}
          style={{ height: "16px", width: "auto" }}
        />
      );
    case "thesis":
      return (
        <Image
          src="/logos/thesis-wordmark.svg"
          alt="Thesis"
          width={93}
          height={28}
          className={cls}
          style={{ height: "17px", width: "auto" }}
        />
      );
    case "policyengine":
      return (
        <Image
          src="/logos/teal.svg"
          alt="PolicyEngine"
          width={350}
          height={100}
          className={cls}
          style={{ height: "20px", width: "auto" }}
        />
      );
    case "microcosm":
      return (
        <Image
          src="/logos/microcosm-wordmark.svg"
          alt="Microcosm"
          width={5245}
          height={726}
          className={cls}
          style={{ height: "14px", width: "auto" }}
        />
      );
    case "axiom":
      return (
        <Image
          src="/logos/axiom-wordmark-bare.svg"
          alt="Axiom"
          width={964}
          height={244}
          className={cls}
          style={{ height: "15px", width: "auto" }}
        />
      );
    case "chronicle":
      return (
        <Image
          src="/logos/chronicle-wordmark.svg"
          alt="Chronicle"
          width={6162}
          height={818}
          className={cls}
          style={{ height: "14px", width: "auto" }}
        />
      );
  }
}

const oneLiners: Record<LayerKey, string> = {
  corollary: "applications and delivery on top of the stack",
  thesis: "judgment and uncertainty — forecasts scored against reality",
  policyengine: "the model that composes them — any reform, any question",
  microcosm: "the world at micro level, calibrated to administrative truth",
  axiom: "the rules, executable — every value cited, every clause dated",
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
      <div className="grid grid-cols-2 gap-2 w-full">
        <Box layer="axiom" focus={focus} />
        <Box layer="chronicle" focus={focus} />
      </div>
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

const walkOrder: { n: number; layer: LayerKey; name: string }[] = [
  { n: 1, layer: "policyengine", name: "PolicyEngine" },
  { n: 2, layer: "axiom", name: "Axiom" },
  { n: 3, layer: "chronicle", name: "Chronicle" },
  { n: 4, layer: "microcosm", name: "Microcosm" },
  { n: 5, layer: "thesis", name: "Thesis" },
  { n: 6, layer: "corollary", name: "Corollary" },
];

export function StackIntroSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Six projects, one stack</SlideTitle>
      </SlideHeader>

      <div className="mt-4 grid grid-cols-[0.85fr_1.15fr] gap-8 items-start">
        <StackDiagram />
        <div className="flex flex-col gap-2">
          {walkOrder.map((w) => (
            <div key={w.layer} className="flex items-baseline gap-4">
              <span className="font-mono text-xl font-bold text-pe-teal w-6 shrink-0 text-right">
                {w.n}
              </span>
              <div>
                <span className="text-lg font-bold text-pe-dark">{w.name}</span>
                <span className="text-base text-gray-600">
                  {" "}
                  &mdash; {oneLiners[w.layer]}
                </span>
              </div>
            </div>
          ))}
          <div className="accent-block mt-3">
            <p className="text-base text-gray-800 leading-relaxed">
              For each: where it stands, where it&apos;s going, and the feedback
              loop that keeps it honest. The district grant funds
              PolicyEngine&apos;s data layer &mdash; number 4.
            </p>
          </div>
        </div>
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
        Any reform, any question, on the fly &mdash; for analysts, agencies, and
        AI agents, with the same rules and data underneath.
      </>
    }
    loop={
      <>
        The Scorecard: estimates from Urban, JCT, TPC, CBO, PWBM, and state
        fiscal notes beside PolicyEngine&apos;s counterpart &mdash; each pair
        labeled comparable, constructed, or concept mismatch. The metric is
        explained divergence, not a scoreboard.
      </>
    }
  />
);

export const StackAxiomSlide = () => (
  <WalkSlide
    n={2}
    title="Axiom — the rules, executable"
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
        The reference encoding of the law &mdash; the layer models, government
        tools, and AI agents all read from, instead of each re-implementing the
        statute.
      </>
    }
    loop={
      <>
        About 900,000 household cases checked against independent calculators
        and records &mdash; PolicyEngine, SPSD/M, EUROMOD, SNAP QC files &mdash;
        on a public dashboard. Certified is computed, never set by hand; today
        it reads 0 of 13, and publishing that honestly is the point.
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
        Official statistics as sourced, dated, machine-readable facts &mdash;
        recorded as published, never reconciled or modeled. The ground truth the
        rest of the stack calibrates and grades against.
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
        Working name. The data under PolicyEngine&apos;s US model today &mdash;
        calibrated synthetic people and households in one national file,
        filtered by state and congressional district. Private by construction.
        This is the layer the district grant funds.
      </>
    }
    ambition={
      <>
        Every cell of the simulated world traceable to the administrative total
        it was calibrated against &mdash; households first, other unit families
        (like import entries for tariff analysis) joining the same discipline.
      </>
    }
    loop={
      <>
        The calibration dashboard: 5,659 national and state targets in the July
        28 US release, 95.7% within 10% of the administrative value &mdash;
        every target published with its error, nothing summarized away.
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
        In formation. AI agents publish probabilistic forecasts of official
        statistics and bill outcomes with their full reasoning, preregistered
        &mdash; so the future is never in the training data.
      </>
    }
    ambition={
      <>
        Forecast accuracy as the end-to-end test of the whole stack: when a new
        country or program comes online, do resolved forecasts get better? The
        track record is the product.
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
        Earliest stage &mdash; scoping. The delivery layer for parties whose
        rules are private: contracts and agreements that reference public law,
        situated against the open graph.
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
