import type { SlideshowConfig } from "@/lib/types";
import {
  ClosingSlide,
  DashboardSlide,
  MeasuresSlide1,
  MeasuresSlide2,
  PreparationSlide,
  TitleSlide,
  WhatSlide,
} from "./slides";

export const autumnBudget2026Config: SlideshowConfig = {
  id: "autumn-budget-2026",
  title: "Analysing the Autumn Budget 2026 with PolicyEngine",
  description:
    "What PolicyEngine is, how we prepared for Budget day, the Budget measures we model, and the analysis, presented live on the dashboard.",
  date: "2026-10-28",
  location: "PolicyEngine",
  // The slides keep this clear of the viewer's slide counter (deck.module.css).
  footerText: "Autumn Budget 2026 webinar · 28 October 2026",
  slides: [
    TitleSlide,
    WhatSlide,
    PreparationSlide,
    MeasuresSlide1,
    MeasuresSlide2,
    DashboardSlide,
    ClosingSlide,
  ],
};
