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
  UsersSlide,
  WhatSlide,
} from "./slides";

export const introduction2026Config: SlideshowConfig = {
  id: "introduction-2026",
  title: "PolicyEngine and the Autumn Budget 2026",
  description:
    "What PolicyEngine is, how we prepared for Budget day, past Budgets on today's model, and the dashboard's analysis of nine candidate measures and the living standards outlook.",
  date: "2026-10-28",
  location: "PolicyEngine",
  footerText: "PolicyEngine · Autumn Budget 2026",
  slides: [
    TitleSlide,
    WhatSlide,
    UsersSlide,
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
