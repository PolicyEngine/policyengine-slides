import type { SlideshowConfig } from "@/lib/types";
import {
  AgendaSlide,
  BenchmarksSlide,
  CarbonSlide,
  ClosingSlide,
  GapsSlide,
  IncomeSlide,
  MeaningSectionSlide,
  MetricsSlide,
  NotValuedSlide,
  PhasesSlide,
  PlanSectionSlide,
  QuestionsSlide,
  RolesSlide,
  ScopeSlide,
  StatusSectionSlide,
  TitleSlide,
  ValuedSlide,
} from "./slides";

export const nefPublicServices2026Config: SlideshowConfig = {
  id: "nef-public-services-2026",
  title: "Public services in kind in PolicyEngine UK: status and a plan",
  description:
    "A proposal to the New Economics Foundation on valuing public services in kind in PolicyEngine UK: what the model covers today, the gaps, and a four-phase plan.",
  date: "2026-11-21",
  location: "New Economics Foundation",
  footerText: "New Economics Foundation · Proposal · 21 November 2026",
  clickerKeys: true,
  // The counter shows the slide, not the build step within it.
  countSlides: true,
  hideNavHint: true,
  // Builds reveal a slide step by step when presenting; a PDF export shows
  // each slide once, complete (exportBuilds: 1, and BuildScope shows every step).
  slides: [
    TitleSlide,
    AgendaSlide,
    MeaningSectionSlide,
    { component: ScopeSlide, builds: 3, exportBuilds: 1 },
    StatusSectionSlide,
    ValuedSlide,
    NotValuedSlide,
    { component: IncomeSlide, builds: 2, exportBuilds: 1 },
    { component: BenchmarksSlide, builds: 2, exportBuilds: 1 },
    { component: GapsSlide, builds: 2, exportBuilds: 1 },
    { component: CarbonSlide, builds: 2, exportBuilds: 1 },
    { component: MetricsSlide, builds: 2, exportBuilds: 1 },
    PlanSectionSlide,
    { component: PhasesSlide, builds: 4, exportBuilds: 1 },
    { component: RolesSlide, builds: 2, exportBuilds: 1 },
    QuestionsSlide,
    ClosingSlide,
  ],
};
