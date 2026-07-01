"use client";

import type { ReactNode } from "react";
import BulletList from "../components/BulletList";
import ContentCard from "../components/ContentCard";
import DonorFusion from "../components/DonorFusion";
import EquationCard from "../components/EquationCard";
import FactAnatomy from "../components/FactAnatomy";
import Figure from "../components/Figure";
import FrameAnatomy from "../components/FrameAnatomy";
import HardConcreteGate from "../components/HardConcreteGate";
import LossBars from "../components/LossBars";
import PipelineDiagram from "../components/PipelineDiagram";
import StatNumber from "../components/StatNumber";
import TranslationTable from "../components/TranslationTable";
import WeightFormats from "../components/WeightFormats";
import Slide from "@/components/core/Slide";
import CoverSlide from "@/components/layout/CoverSlide";
import EndSlide from "@/components/layout/EndSlide";
import SlideHeader from "@/components/layout/SlideHeader";
import SharedSlideTitle from "@/components/layout/SlideTitle";

const speakers = [
  {
    name: "Maria Juaristi",
    title: "PolicyEngine",
    photo: "/headshots/maria-juaristi.png",
  },
];

function SlideTitle({
  kicker,
  children,
}: {
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <SlideHeader>
      {kicker && (
        <div className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-pe-teal">
          {kicker}
        </div>
      )}
      <SharedSlideTitle className="max-w-7xl text-pe-dark">
        {children}
      </SharedSlideTitle>
    </SlideHeader>
  );
}

/**
 * Standard content-slide shell: the title stays pinned at the top of the slide
 * (consistent position across the deck) while the body fills the remaining
 * space and is vertically centered. In two-column bodies this keeps the text
 * column aligned with its figure/card, since both center in the same region.
 */
function SlideFrame({
  header,
  children,
  className,
}: {
  header: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Slide className={className}>
      <div className="flex h-full flex-col">
        {header}
        <div className="flex min-h-0 flex-1 flex-col justify-center">
          {children}
        </div>
      </div>
    </Slide>
  );
}

function SectionSlide({
  section,
  title,
  subtitle,
}: {
  section: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Slide className="bg-pe-light">
      <div className="flex h-full flex-col justify-center">
        <SlideTitle kicker={section}>{title}</SlideTitle>
        {subtitle && (
          <p className="max-w-4xl text-2xl leading-snug text-slate-600">
            {subtitle}
          </p>
        )}
      </div>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/* Section dividers — title only, no body text                        */
/* ------------------------------------------------------------------ */

export function SectionModelSlide() {
  return <SectionSlide section="Part 1" title="What PolicyEngine models" />;
}

export function SectionSupportSlide() {
  return <SectionSlide section="Part 2" title="Constructing the support" />;
}

export function SectionCalibrationSlide() {
  return <SectionSlide section="Part 3" title="Calibration" />;
}

export function SectionPruningSlide() {
  return <SectionSlide section="Part 4" title="Simple pruning methods" />;
}

export function SectionL0Slide() {
  return <SectionSlide section="Part 5" title="L0 regularization" />;
}

export function SectionNextStepsSlide() {
  return <SectionSlide section="Part 6" title="Next steps" />;
}

/* ------------------------------------------------------------------ */
/* 0 · Open                                                            */
/* ------------------------------------------------------------------ */

export function TitleSlide() {
  return (
    <CoverSlide
      title="L0 regularization for subnational microsimulation calibration"
      subtitle="Selecting which microdata records survive when a faithful candidate population has to become a deployable dataset."
      event="IMA 2026, Brussels"
      date="2026-07-01"
      speakers={speakers}
    />
  );
}

export function RoadmapSlide() {
  return (
    <SlideFrame header={<SlideTitle kicker="Roadmap">What this talk covers</SlideTitle>}>
      <BulletList
        className="max-w-5xl"
        items={[
          "The institutional setting: PolicyEngine in the United States and United Kingdom.",
          "The modeling problem: local-area weights worked in the UK, but not as a direct US template.",
          "The data engine: Ledger facts and the Populace sampling frame.",
          "Why a faithful candidate dataset grows too large to ship.",
          "L0 regularization, from Louizos et al. to record selection.",
          "A proof-of-concept comparison, and where it goes next.",
        ]}
      />
    </SlideFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 1 · Motivation                                                      */
/* ------------------------------------------------------------------ */

export function PolicyGoalSlide() {
  return (
    <SlideFrame
      header={
        <SlideTitle kicker="Motivation">
          Policy questions arrive at every level of geography
        </SlideTitle>
      }
    >
      <div className="grid h-full grid-cols-[1fr_1fr] items-center gap-12">
        <div>
          <p className="max-w-2xl text-2xl leading-snug text-slate-600">
            PolicyEngine runs live tax-and-benefit simulations in the United States and the
            United Kingdom, encoding 80,000+ policy parameters across federal, state, and local
            levels in the US, with the UK modeled in comparable detail. Analysts ask the same
            reform question nationally, by state or region, and by local constituency.
          </p>
          <p className="mt-6 max-w-2xl text-xl leading-snug text-slate-500">
            Each answer needs microdata that represents that geography, not a national average
            stretched to fit.
          </p>
        </div>
        <Figure
          src="/images/l0-ima-2026/snap_benefits_by_district.png"
          width={4788}
          height={3431}
          alt="Hexagonal cartogram of estimated SNAP benefits for every US congressional district"
        />
      </div>
    </SlideFrame>
  );
}

export function WeightLayoutWideSlide() {
  return (
    <SlideFrame
      header={
        <SlideTitle kicker="Weight layout">
          Two matrix representations of subnational weights
        </SlideTitle>
      }
    >
      <WeightFormats showLong={false} />
    </SlideFrame>
  );
}

export function WeightLayoutBothSlide() {
  return (
    <SlideFrame
      header={
        <SlideTitle kicker="Weight layout">
          Two matrix representations of subnational weights
        </SlideTitle>
      }
    >
      <WeightFormats showLong />
    </SlideFrame>
  );
}

export function BuildBigThenPruneSlide() {
  return (
    <SlideFrame header={<SlideTitle kicker="The tension">Build big, then prune</SlideTitle>}>
      <div className="grid h-full grid-cols-[0.95fr_1.05fr] items-center gap-12">
        <div>
          <p className="text-2xl leading-snug text-slate-600">
            A pipeline built for fidelity combines many sources and adds record-level variation. That
            makes the candidate dataset rich enough to represent the targets, and also too large to
            store and simulate.
          </p>
        </div>
        <div className="space-y-5">
          <ContentCard title="Build big" accent="teal">
            <p className="text-xl leading-snug text-slate-600">
              Pool survey records, attach imputations, add geography, and oversample rare support where
              the population needs detail.
            </p>
          </ContentCard>
          <ContentCard title="The pressure point" accent="amber">
            <p className="text-xl leading-snug text-slate-600">
              Calibration memory scales with targets times records; the shipped file still has to be
              cheap to store, load, and simulate.
            </p>
          </ContentCard>
          <ContentCard title="Prune with evidence" accent="slate">
            <p className="text-xl leading-snug text-slate-600">
              Keep records because they help reproduce source-backed targets, not because they won an
              arbitrary random draw.
            </p>
          </ContentCard>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 2 · The data engine: Ledger + Populace                                */
/* ------------------------------------------------------------------ */

export function LedgerSlide() {
  return (
    <SlideFrame header={<SlideTitle kicker="Ledger">Source-backed facts, provenance intact</SlideTitle>}>
      <div className="grid h-full grid-cols-[1fr_1fr] items-center gap-12">
        <div>
          <BulletList
            items={[
              "A fact pins a value to its geography, entity, measure, aggregation, and source.",
              "Ledger re-expresses published values; it never reconciles, ages, or imputes.",
            ]}
          />
          <p className="mt-7 text-lg text-slate-400">
            Current run: 37,053 Ledger facts compile to 32,633 active targets, including 24,340
            congressional-district targets.
          </p>
        </div>
        <FactAnatomy />
      </div>
    </SlideFrame>
  );
}

export function TargetSurfaceSlide() {
  const rows = [
    { family: "IRS Statistics of Income", code: "irs_soi", geo: "National, state, district", targets: "31,350" },
    { family: "Census population estimates", code: "census_pep", geo: "National, state", targets: "936" },
    { family: "Medicaid and CHIP, CMS", code: "cms_medicaid", geo: "National, state", targets: "102" },
    { family: "ACA marketplace, CMS", code: "cms_aca", geo: "State", targets: "102" },
    { family: "SNAP, USDA", code: "usda_snap", geo: "National, state", targets: "52" },
    { family: "State tax collections, Census STC", code: "census_stc", geo: "State", targets: "44" },
    { family: "TANF, HHS ACF", code: "hhs_acf_tanf", geo: "National, state", targets: "30" },
    { family: "Social Security supplement, SSA", code: "ssa_supplement", geo: "National", targets: "6" },
    { family: "JCT tax expenditures", code: "jct", geo: "National", targets: "5" },
    { family: "CBO revenue projections", code: "cbo", geo: "National", targets: "5" },
    { family: "Medicare, CMS", code: "cms_medicare", geo: "National", targets: "1" },
  ];
  return (
    <SlideFrame
      header={
        <SlideTitle kicker="Targets">The target surface, by source family</SlideTitle>
      }
    >
      <div className="overflow-hidden rounded-lg border border-slate-200">
        <div className="grid grid-cols-[2fr_1.2fr_0.6fr] bg-slate-50 px-6 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-pe-dark">
          <div>Target family</div>
          <div>Geographic level</div>
          <div className="text-right">Targets</div>
        </div>
        {rows.map((r) => (
          <div
            key={r.code}
            className="grid grid-cols-[2fr_1.2fr_0.6fr] items-baseline border-t border-slate-100 px-6 py-2.5 text-base text-slate-700"
          >
            <div>
              <span className="font-semibold text-pe-dark">{r.family}</span>{" "}
              <span className="font-mono text-xs text-slate-400">{r.code}</span>
            </div>
            <div className="text-slate-600">{r.geo}</div>
            <div className="text-right font-medium tabular-nums">{r.targets}</div>
          </div>
        ))}
        <div className="grid grid-cols-[2fr_1.2fr_0.6fr] border-t-2 border-slate-200 bg-pe-light/40 px-6 py-2.5 text-base font-bold text-pe-dark">
          <div>Total</div>
          <div />
          <div className="text-right tabular-nums text-pe-teal">32,633</div>
        </div>
      </div>
      <p className="mt-5 text-base text-slate-400">
        24,340 congressional-district, 7,815 state, and 478 national targets across eleven source families.
      </p>
    </SlideFrame>
  );
}

export function PopulaceValueSlide() {
  return (
    <SlideFrame header={<SlideTitle kicker="Populace">A population is a weighted sampling frame</SlideTitle>}>
      <div className="grid h-full grid-cols-[0.95fr_1.05fr] items-center gap-12">
        <div>
          <BulletList
            items={[
              "Entity tables preserve household, person, tax-unit, and family structure.",
              "Generation sets which records exist; calibration sets how much each counts. Keeping the two separate is what lets us prune records safely.",
            ]}
          />
        </div>
        <FrameAnatomy />
      </div>
    </SlideFrame>
  );
}

export function PipelineSlide() {
  return (
    <SlideFrame header={<SlideTitle kicker="Data pipeline">Populace carries one frame through the build</SlideTitle>}>
      <PipelineDiagram />
    </SlideFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 3 · Imputation mechanics                                            */
/* ------------------------------------------------------------------ */

export function RepresentativenessSlide() {
  return (
    <SlideFrame
      header={
        <SlideTitle kicker="Imputation">
          Borrow whole distributions from many surveys
        </SlideTitle>
      }
    >
      <div className="grid h-full grid-cols-[0.95fr_1.05fr] items-center gap-12">
        <div>
          <BulletList
            items={[
              "The spine is three years of CPS ASEC pooled and aged to one period — more households and variability, while keeping the CPS survey design.",
              "Fill each gap from whichever survey measures it best — many surveys can be donors.",
              "The fitting step learns a conditional distribution on the donor data, not a single prediction.",
              "Predicting the whole distribution and sampling a draw per record preserves real variability.",
            ]}
          />
        </div>
        <DonorFusion />
      </div>
    </SlideFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 4 · Reduction problem + Louizos + our method                        */
/* ------------------------------------------------------------------ */

export function SamplingQuestionSlide() {
  return (
    <SlideFrame header={<SlideTitle kicker="The reduction problem">A sampling problem with fitted weights</SlideTitle>}>
      <div className="grid h-full grid-cols-[0.95fr_1.05fr] items-center gap-12">
        <div>
          <p className="text-2xl leading-snug text-slate-600">
            With a candidate universe and a target system fixed, reducing the dataset becomes a sampling
            problem with fitted weights and geographic representativeness constraints.
          </p>
        </div>
        <ContentCard accent="teal">
          <div className="space-y-6 text-2xl leading-snug text-slate-700">
            <div>
              <span className="font-bold text-pe-dark">Input:</span> candidate records, uniform weights,
              calibration targets
            </div>
            <div>
              <span className="font-bold text-pe-dark">Constraint:</span> retain a deployable number of
              records
            </div>
            <div>
              <span className="font-bold text-pe-dark">Goal:</span> preserve target fit for each
              represented geography
            </div>
            <div>
              <span className="font-bold text-pe-dark">Output:</span> selected records and calibrated
              positive weights
            </div>
          </div>
        </ContentCard>
      </div>
    </SlideFrame>
  );
}

export function BaselinesSlide() {
  return (
    <SlideFrame header={<SlideTitle kicker="Baselines">Three simple ways to shrink the dataset</SlideTitle>}>
      <div className="grid grid-cols-3 gap-5">
        <ContentCard title="Full candidate dataset" accent="teal">
          <p className="text-lg leading-snug text-slate-600">
            Keep every record and fit ordinary calibration weights on the whole candidate universe —
            the reference point, not a deployable budget.
          </p>
        </ContentCard>
        <ContentCard title="Random + reweight" accent="slate">
          <p className="text-lg leading-snug text-slate-600">
            Draw a random subset to the record budget, then fit fresh calibration weights on that
            fixed subset.
          </p>
        </ContentCard>
        <ContentCard title="Random + rescale" accent="amber">
          <p className="text-lg leading-snug text-slate-600">
            Draw a random subset, keep its dense calibrated weights, and rescale them back to the
            population total — no refit.
          </p>
        </ContentCard>
      </div>
    </SlideFrame>
  );
}

export function L0ArmsSlide() {
  return (
    <SlideFrame header={<SlideTitle kicker="L0 arms">Two target-informed L0 selectors</SlideTitle>}>
      <div className="grid grid-cols-2 gap-6">
        <ContentCard title="L0" accent="teal">
          <p className="text-xl leading-snug text-slate-600">
            Hard-concrete gates select records and fit their weights jointly; the L0 penalty sets an
            exact retained count. The gated weights are published directly.
          </p>
        </ContentCard>
        <ContentCard title="L0 + refit" accent="teal">
          <p className="text-xl leading-snug text-slate-600">
            Keep the records L0 selected, drop the gates, and refit ordinary calibration weights on
            that subset — selection from L0, weights from the shared calibrator.
          </p>
        </ContentCard>
      </div>
    </SlideFrame>
  );
}

export function LouizosFoundationSlide() {
  return (
    <SlideFrame header={<SlideTitle kicker="Foundation">Louizos, Welling and Kingma (2018)</SlideTitle>}>
      <div className="grid h-full grid-cols-[0.9fr_1.1fr] items-center gap-12">
        <div>
          <p className="text-2xl leading-snug text-slate-600">
            Their problem was network sparsification: automatically zeroing weights in a neural network.
            The L0 norm counts non-zeros, but it is non-differentiable and combinatorial.
          </p>
          <BulletList
            className="mt-7"
            items={[
              "A hard-concrete gate stretches a continuous value past [0,1], then clips it back.",
              "Clipping creates point masses at exactly 0 and exactly 1.",
              "The probability a gate is open is closed-form and differentiable.",
            ]}
          />
        </div>
        <HardConcreteGate />
      </div>
    </SlideFrame>
  );
}

export function TranslationSlide() {
  return (
    <SlideFrame
      header={
        <SlideTitle kicker="From their setting to ours">
          Translating L0 from weights to records
        </SlideTitle>
      }
    >
      <TranslationTable />
    </SlideFrame>
  );
}

export function L0MathSlide() {
  return (
    <SlideFrame
      header={
        <SlideTitle kicker="Our method · training objective">
          L0 is the same loss, plus a penalty for keeping records
        </SlideTitle>
      }
    >
      <div className="mx-auto w-full max-w-4xl">
        <EquationCard
          title="What the optimizer minimizes"
          equation="\mathcal{L}(w,\alpha)=\underbrace{\frac{\sum_j \omega_j\,\min\!\left(\left|\frac{\hat{t}_j-t_j}{s_j}\right|,\,c\right)}{\sum_j \omega_j}}_{\text{shared calibration loss}}\;+\;\lambda_{L_0}\textstyle\sum_i \Pr(z_i\neq 0)"
          note="The first term is exactly the shared calibration loss, now on gated estimates — a record contributes only through its gate z_i. The added L0 term prices the expected number of kept records, and λ_L0 sets the retained count. At publication the gates are evaluated deterministically, giving an ordinary sparse dataset with calibrated positive weights."
        />
      </div>
    </SlideFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 5 · Proof of concept: design + results                              */
/* ------------------------------------------------------------------ */

export function ExperimentDesignSlide() {
  return (
    <SlideFrame
      header={
        <SlideTitle kicker="Calibration">
          Calibrating at this scale needs gradient descent
        </SlideTitle>
      }
    >
      <div className="grid grid-cols-2 gap-6">
        <StatNumber value="337,704" label="candidate records" sublabel="three-year ASEC support, cloned" />
        <StatNumber value="32,633" label="calibration targets" sublabel="nested national → state → district" />
      </div>
      <ContentCard className="mt-8" accent="teal">
        <p className="text-2xl leading-snug text-slate-700">
          Calibration finds a weight for every record so the weighted dataset reproduces every
          published target. At this scale — hundreds of thousands of records against tens of
          thousands of hierarchical targets — classical survey calibration does not fit, so we
          minimize a single loss by gradient descent.
        </p>
      </ContentCard>
    </SlideFrame>
  );
}

export function CalibrationObjectiveSlide() {
  return (
    <SlideFrame
      header={
        <SlideTitle kicker="The loss">
          The calibration loss, weighted by target
        </SlideTitle>
      }
    >
      <div className="grid grid-cols-[1.05fr_0.95fr] items-center gap-10">
        <EquationCard
          title="The calibration loss: capped weighted MAPE"
          equation="\mathcal{L}_{\mathrm{cal}}(w)=\frac{\sum_j \omega_j\,\min\!\left(\left|\frac{\hat{t}_j-t_j}{s_j}\right|,\,c\right)}{\sum_j \omega_j}"
          note="Relative error puts count and dollar targets on one scale; the cap c limits any single hard-to-fit target. The reported runs use the production value c = 1."
        />
        <div>
          <div className="mb-4 text-base font-bold uppercase tracking-[0.16em] text-pe-teal">
            How the target weights ω are set
          </div>
          <div className="space-y-3">
            {[
              "Each target joins a count basis (indicators, enrollment, recipients, return counts) or an amount basis (dollar totals).",
              "Within a basis, weight ∝ √|target| — larger aggregates count more, but sublinearly — then normalized to mean one.",
              "The two bases are rescaled to contribute equal total weight, so dollar cells do not swamp the count targets.",
              "A final step sets the mean weight to one; only the relative weights enter the loss.",
            ].map((t, i) => (
              <div key={i} className="flex gap-3 text-lg leading-snug text-slate-600">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-pe-teal/10 text-sm font-bold text-pe-teal">
                  {i + 1}
                </span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

// --- Main result: progressive loss-bar arc (one beat per slide; the deck has no
// in-slide reveal, so each beat is its own slide sharing the LossBars component). ---

export function ResultsArcBaselinesSlide() {
  return (
    <SlideFrame
      header={
        <SlideTitle kicker="Main result · where we start">
          Keeping everything, versus a naive rescale
        </SlideTitle>
      }
    >
      <div className="grid h-full grid-cols-[0.78fr_1.22fr] items-center gap-10">
        <div>
          <p className="text-2xl leading-snug text-slate-600">
            Keep every record and calibrate — the full candidate dataset — and you reach 5.07% on the
            full Populace surface. It uses all 337,704 records, so it is a reference, not a deployable
            budget.
          </p>
          <p className="mt-6 text-xl leading-snug text-slate-500">
            Take a random 57,240-record sample, keep its dense weights, and just rescale them to the
            population total with no refit, and the loss is 24.24%.
          </p>
        </div>
        <LossBars revealed={["full", "rescale"]} />
      </div>
    </SlideFrame>
  );
}

export function ResultsArcScaledSlide() {
  return (
    <SlideFrame
      header={
        <SlideTitle kicker="Main result · the reweighting">
          Refitting the random sample does the work
        </SlideTitle>
      }
    >
      <div className="grid h-full grid-cols-[0.78fr_1.22fr] items-center gap-10">
        <div>
          <p className="text-2xl leading-snug text-slate-600">
            Take the same random 57,240-record sample, but this time refit calibration weights on it.
            The loss drops from 24.24% to 7.55%.
          </p>
          <p className="mt-6 text-xl leading-snug text-slate-500">
            So the gain came from re-fitting the weights on the retained subset, not from the random
            sample itself.
          </p>
        </div>
        <LossBars revealed={["full", "rescale", "reweight"]} />
      </div>
    </SlideFrame>
  );
}

export function ResultsArcL0Slide() {
  return (
    <SlideFrame
      header={
        <SlideTitle kicker="Main result · L0 alone">
          A target-informed selector &mdash; yet it underperforms
        </SlideTitle>
      }
    >
      <div className="grid h-full grid-cols-[0.78fr_1.22fr] items-center gap-10">
        <div>
          <p className="text-2xl leading-snug text-slate-600">
            L0 chooses the 57,240 records jointly with their gated weights. It should beat a blind
            random sample &mdash; but the raw gated weights score 9.86%, worse than random + reweight.
          </p>
          <p className="mt-6 text-xl leading-snug text-slate-500">
            The gates select the support well, but the gated weights they return are not publication
            weights.
          </p>
        </div>
        <LossBars revealed={["full", "rescale", "reweight", "l0"]} />
      </div>
    </SlideFrame>
  );
}

export function ResultsArcRefitSlide() {
  return (
    <SlideFrame
      header={
        <SlideTitle kicker="Main result · L0 + refit">
          Refit the selected records and L0 wins
        </SlideTitle>
      }
    >
      <div className="grid h-full grid-cols-[0.78fr_1.22fr] items-center gap-10">
        <div>
          <p className="text-2xl leading-snug text-slate-600">
            Keep the records the gates chose, drop the gates, and refit ordinary calibration weights on
            that subset. Loss drops to 4.74% &mdash; below the full candidate dataset&rsquo;s 5.07%, and
            well below every sampling baseline.
          </p>
          <p className="mt-6 text-xl leading-snug text-slate-500">
            L0&rsquo;s value is support selection,
            realized only after one more calibration pass.
          </p>
        </div>
        <LossBars revealed={["full", "rescale", "reweight", "l0", "l0_refit"]} />
      </div>
    </SlideFrame>
  );
}

export function GeographyAccuracySlide() {
  const rows = [
    { level: "National", targets: "478", objectiveWeightShare: "19.94", loss: "6.18" },
    { level: "State", targets: "7,815", objectiveWeightShare: "67.85", loss: "4.88" },
    { level: "Congressional district", targets: "24,340", objectiveWeightShare: "12.21", loss: "9.07" },
  ];
  return (
    <SlideFrame
      header={
        <SlideTitle kicker="Main result · by geography">
          The fit holds at every geographic level
        </SlideTitle>
      }
    >
      <div className="overflow-hidden rounded-lg border border-slate-200">
        <div className="grid grid-cols-[1.8fr_1fr_1fr_1fr] bg-slate-50 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-pe-dark">
          <div>Geographic level</div>
          <div className="text-right">Targets</div>
          <div className="text-right">Objective weight share</div>
          <div className="text-right">Populace loss</div>
        </div>
        {rows.map((r) => (
          <div
            key={r.level}
            className="grid grid-cols-[1.8fr_1fr_1fr_1fr] border-t border-slate-100 px-6 py-4 text-xl text-slate-700"
          >
            <div className="font-semibold text-pe-dark">{r.level}</div>
            <div className="text-right tabular-nums">{r.targets}</div>
            <div className="text-right tabular-nums text-slate-500">{r.objectiveWeightShare}%</div>
            <div className="text-right font-bold tabular-nums text-pe-teal">{r.loss}%</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}

export function GeneralizationSlide() {
  return (
    <SlideFrame header={<SlideTitle kicker="Diagnostics">Median and mean tell different stories</SlideTitle>}>
      <div className="grid h-full grid-cols-[1.1fr_0.9fr] items-center gap-10">
        <Figure
          src="/images/l0-ima-2026/f1_frontier.png"
          width={2168}
          height={886}
          alt="Full-surface median and mean absolute relative error versus retained records for the four samplers"
        />
        <div>
          <BulletList
            items={[
              "The Populace loss is the headline score; raw ARE is supplemental.",
              "Median ARE shows typical target fit across the full surface.",
              "Mean ARE remains tail-sensitive, so we report it as a diagnostic rather than the main score.",
            ]}
          />
        </div>
      </div>
    </SlideFrame>
  );
}

export function OperabilitySlide() {
  return (
    <SlideFrame header={<SlideTitle kicker="Concentration">The selected subset is also better conditioned</SlideTitle>}>
      <div className="grid h-full grid-cols-[0.78fr_1.22fr] items-center gap-10">
        <div>
          <BulletList
            items={[
              "Effective sample size is a primary result, not a footnote.",
              "The raw L0-gated weights are the ones with highest ESS, lowest max weight, as the L0 selects the most informative records.",
              "The refit that restores accuracy gives some of that concentration back, but L0 + refit still beats the matched random support.",
            ]}
          />
        </div>
        <Figure
          src="/images/l0-ima-2026/f2_usability.png"
          width={2168}
          height={886}
          alt="Effective sample size and largest household weight across the five method arms"
        />
      </div>
    </SlideFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 6 · Close                                                           */
/* ------------------------------------------------------------------ */

export function FutureWorkSlide() {
  return (
    <SlideFrame header={<SlideTitle kicker="Future work">From proof of concept to production-scale pruning</SlideTitle>}>
      <div className="grid grid-cols-2 gap-5">
        <ContentCard title="Build really large, then prune" accent="teal">
          <p className="text-lg leading-snug text-slate-600">
            Sweep normalized L0 penalties on the three-year support and larger over-built pools, then
            prune back to a publishable artifact.
          </p>
        </ContentCard>
        <ContentCard title="Contrast penalty designs" accent="teal">
          <p className="text-lg leading-snug text-slate-600">
            Sweep the
              &lambda;<sub>L2</sub> penalty and weight cap against &lambda;<sub>L0</sub>
            to trace the accuracy&ndash;concentration trade-off.
          </p>
        </ContentCard>
        <ContentCard title="Complete the comparator set" accent="amber">
          <p className="text-lg leading-snug text-slate-600">
            Ensure robustness comparing against other calibration approaches (eg. IPF, combinatorial optimization)
            on tractable subsets of the calibration problem where their assumptions hold.
          </p>
        </ContentCard>
        <ContentCard title="Targeted robustness" accent="slate">
          <p className="text-lg leading-snug text-slate-600">
            Keep family holdouts separate from the headline fit; use them to test robustness, not as the
            production objective.
          </p>
        </ContentCard>
      </div>
    </SlideFrame>
  );
}

export function PlatformFutureWorkSlide() {
  return (
    <SlideFrame header={<SlideTitle kicker="Future work">Where production-ready microdata takes PolicyEngine</SlideTitle>}>
      <div className="grid grid-cols-2 gap-6">
        <ContentCard title="Even more granular calibration and analysis" accent="teal">
          <p className="text-xl leading-snug text-slate-600">
            Push calibration below the current surface now that a sparse, deployable 
            file can carry that much geographic detail. The immidiate next level is state
            legislative districs.
          </p>
        </ContentCard>
        <ContentCard title="Populace as a multi-country platform" accent="teal">
          <p className="text-xl leading-snug text-slate-600">
            Make Populace a platform that expands easily to build calibrated microdata for many 
            other countries, reusing the same frame, calibration, and pruning pipeline.
          </p>
        </ContentCard>
      </div>
    </SlideFrame>
  );
}

export function TakeawaySlide() {
  return (
    <SectionSlide
      section="In closing"
      title="Target-informed pruning works as support selection"
      subtitle="The full-surface probe says: choosing a sparse support with L0 and then refitting reaches lower completed-run loss than dense no-L0 and matched random baselines, at the production scale."
    />
  );
}

export function QuestionsSlide() {
  return (
    <EndSlide
      qr={{
        src: "/images/l0-ima-2026/qr-populace-l0.png",
        caption: "Read the paper — populace.dev/papers/l0",
      }}
    />
  );
}
