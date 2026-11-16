import type { SlideshowConfig } from "@/lib/types";
import {
  AbmSlide,
  AiPostSlide,
  BridgeSlide,
  BudgetSlide,
  BusinessPolicySlide,
  CalibrationLiveSlide,
  CalibrationSlide,
  ClosingSlide,
  CoverageSlide,
  EpdSlide,
  FirmMethodSlide,
  InBriefSlide,
  LinkSlide,
  MacroSlide,
  MicrocosmBuildSlide,
  PilotsSlide,
  QuestionsSlide,
  RulesSlide,
  TitleSlide,
  TradeSlide,
  WhatSlide,
  WhoSlide,
} from "./slides";

// Slides with "builds" reveal their content in steps on clicks when
// presented live. "exportBuilds: 1" gives each one page in a PDF export and
// one slide in the deck index's count; in an export the build steps are all
// shown (slides/Reveal.tsx), so that page is the complete slide.
export const bist2026Config: SlideshowConfig = {
  id: "bist-2026",
  title: "From business shocks to household incomes",
  description:
    "PolicyEngine for the Modelling Unit: what it is, what we have and have done, what we could explore with trade, macro and agent-based models, and how we could collaborate.",
  date: "2026-11-19",
  location: "Modelling Unit, Department for Business, Innovation, Science and Trade",
  footerText: "BIST Modelling Unit · 19 November 2026",
  // The live counter numbers slides, not build steps.
  countSlides: true,
  slides: [
    // Part 1. Introduction.
    TitleSlide,
    InBriefSlide,
    WhoSlide,
    // Part 2. What PolicyEngine is.
    { component: WhatSlide, builds: 4, exportBuilds: 1 },
    RulesSlide,
    { component: MicrocosmBuildSlide, builds: 5, exportBuilds: 1 },
    { component: CalibrationSlide, builds: 2, exportBuilds: 1 },
    CalibrationLiveSlide,
    // Part 3. What we have already.
    CoverageSlide,
    // Part 4. Projects we have done.
    BudgetSlide,
    AiPostSlide,
    { component: FirmMethodSlide, builds: 3, exportBuilds: 1 },
    TradeSlide,
    { component: BridgeSlide, builds: 3, exportBuilds: 1 },
    // Part 5. What we could explore further.
    { component: EpdSlide, builds: 4, exportBuilds: 1 },
    { component: MacroSlide, builds: 3, exportBuilds: 1 },
    // Part 6. Ideas that fit the unit.
    BusinessPolicySlide,
    { component: AbmSlide, builds: 3, exportBuilds: 1 },
    { component: LinkSlide, builds: 4, exportBuilds: 1 },
    // Part 7. How we could collaborate.
    { component: PilotsSlide, builds: 2, exportBuilds: 1 },
    QuestionsSlide,
    ClosingSlide,
  ],
};
