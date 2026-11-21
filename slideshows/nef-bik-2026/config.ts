import type { SlideshowConfig } from "@/lib/types";
import {
  AgendaSlide,
  BikSectionSlide,
  ChangesSlide,
  ClosingSlide,
  CoverageSectionSlide,
  CoverageSlide,
  DataSlide,
  ExamplesSlide,
  GapSlide,
  HowItWorksSlide,
  PhasesSlide,
  QuestionsSlide,
  ScopingSectionSlide,
  SizeSlide,
  TitleSlide,
  WhatIsBikSlide,
} from "./slides";

export const nefBik2026Config: SlideshowConfig = {
  id: "nef-bik-2026",
  title: "Modelling benefits in kind in PolicyEngine UK: scoping with NEF",
  description:
    "A scoping meeting with the New Economics Foundation on benefits in kind in PolicyEngine UK: what the model covers today, the data available, and options.",
  date: "2026-11-19",
  location: "New Economics Foundation",
  footerText: "New Economics Foundation · 19 November 2026",
  clickerKeys: true,
  // The counter shows the slide, not the build step within it.
  countSlides: true,
  hideNavHint: true,
  // Builds reveal a slide step by step when presenting; a PDF export shows
  // each slide once, complete (exportBuilds: 1, and BuildScope shows every step).
  slides: [
    TitleSlide,
    AgendaSlide,
    BikSectionSlide,
    { component: WhatIsBikSlide, builds: 3, exportBuilds: 1 },
    { component: SizeSlide, builds: 3, exportBuilds: 1 },
    { component: ChangesSlide, builds: 3, exportBuilds: 1 },
    CoverageSectionSlide,
    { component: HowItWorksSlide, builds: 3, exportBuilds: 1 },
    CoverageSlide,
    ScopingSectionSlide,
    DataSlide,
    { component: GapSlide, builds: 5, exportBuilds: 1 },
    { component: PhasesSlide, builds: 3, exportBuilds: 1 },
    { component: ExamplesSlide, builds: 3, exportBuilds: 1 },
    QuestionsSlide,
    ClosingSlide,
  ],
};
