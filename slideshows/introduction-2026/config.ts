import type { SlideshowConfig } from "@/lib/types";
import {
  AgeSlide,
  ClosingSlide,
  DecilesSlide,
  HouseholdsSlide,
  IncomesSlide,
  PastBudgetsSlide,
  PovertySlide,
  PreparationSlide,
  RevenueSlide,
  TitleSlide,
  WhatSlide,
} from "./slides";

export const introduction2026Config: SlideshowConfig = {
  id: "introduction-2026",
  title: "Analysing the UK Autumn Budget 2026 with PolicyEngine",
  description:
    "What PolicyEngine is, how we prepared for Budget day, past Budgets on today's model, and the dashboard's analysis of nine candidate measures and the living standards outlook.",
  date: "2026-10-28",
  location: "PolicyEngine",
  // No footer text: the shared viewer's slide counter sits where it would go.
  footerText: "",
  slides: [
    TitleSlide,
    WhatSlide,
    PreparationSlide,
    PastBudgetsSlide,
    RevenueSlide,
    DecilesSlide,
    AgeSlide,
    HouseholdsSlide,
    IncomesSlide,
    PovertySlide,
    ClosingSlide,
  ],
};
