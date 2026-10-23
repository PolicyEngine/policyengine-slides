import type { SlideshowConfig } from "@/lib/types";
import {
  ClosingSlide,
  CoverageSlide,
  EnergyDiscountSlide,
  HowSlide,
  MicrosimSlide,
  PipelineSlide,
  PublicationsSlide,
  TargetsSlide,
  TitleSlide,
  UsersSlide,
  WhatSlide,
} from "./slides";
import { MICROSIM_STEPS } from "./slides/microsim";

export const goodGrowthFoundation2026Config: SlideshowConfig = {
  id: "good-growth-foundation-2026",
  title: "PolicyEngine UK: an introduction",
  description:
    "PolicyEngine UK for the Good Growth Foundation: how microsimulation works, the model, its data and calibration targets, an energy discount example and recent UK research.",
  date: "2026-10-23",
  location: "Good Growth Foundation",
  footerText: "Good Growth Foundation · 23 October 2026",
  slides: [
    TitleSlide,
    WhatSlide,
    HowSlide,
    { component: MicrosimSlide, builds: MICROSIM_STEPS },
    CoverageSlide,
    PipelineSlide,
    TargetsSlide,
    EnergyDiscountSlide,
    PublicationsSlide,
    UsersSlide,
    ClosingSlide,
  ],
};
