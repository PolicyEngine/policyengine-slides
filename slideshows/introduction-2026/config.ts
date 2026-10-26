import type { SlideshowConfig } from "@/lib/types";
import {
  ClosingSlide,
  DashboardSlide,
  PreparationSlide,
  TitleSlide,
  WhatSlide,
} from "./slides";

export const introduction2026Config: SlideshowConfig = {
  id: "introduction-2026",
  title: "Analysing the UK Autumn Budget 2026 with PolicyEngine",
  description:
    "What PolicyEngine is, how we prepared for Budget day, and the analysis, presented live on the dashboard.",
  date: "2026-10-28",
  location: "PolicyEngine",
  // No footer text: the shared viewer's slide counter sits where it would go.
  footerText: "",
  slides: [
    TitleSlide,
    WhatSlide,
    PreparationSlide,
      DashboardSlide,
    ClosingSlide,
  ],
};
