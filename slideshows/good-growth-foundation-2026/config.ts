import type { SlideshowConfig } from "@/lib/types";
import {
  ClosingSlide,
  CoverageSlide,
  EnergyDiscountSlide,
  HowSlide,
  PipelineSlide,
  TitleSlide,
  UsersSlide,
  WhatSlide,
} from "./slides";

export const goodGrowthFoundation2026Config: SlideshowConfig = {
  id: "good-growth-foundation-2026",
  title: "PolicyEngine UK: an introduction",
  description:
    "An introduction to PolicyEngine UK for the Good Growth Foundation: what PolicyEngine is, the UK model and its data, and a targeted energy bill discount as an example of the analysis.",
  date: "2026-10-23",
  location: "Good Growth Foundation",
  footerText: "Good Growth Foundation · 23 October 2026",
  slides: [
    TitleSlide,
    WhatSlide,
    HowSlide,
    CoverageSlide,
    PipelineSlide,
    EnergyDiscountSlide,
    UsersSlide,
    ClosingSlide,
  ],
};
