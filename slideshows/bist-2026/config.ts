import type { SlideshowConfig } from "@/lib/types";
import {
  AbmSlide,
  AiPostSlide,
  AiEconomySlide,
  AxiomRulesSlide,
  AxiomTodaySlide,
  AxiomLiveSlide,
  BreakdownsSlide,
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
  PartCollaborateSlide,
  PartExploreSlide,
  PartHaveSlide,
  PartProjectsSlide,
  PartWhatSlide,
  QuestionsSlide,
  RulesSlide,
  TargetsSlide,
  TitleSlide,
  TradeSlide,
  VatReformsSlide,
  WhatSlide,
  WhoSlide,
} from "./slides";

// Slides with "builds" reveal their content in steps on clicks when
// presented live. "exportBuilds: 1" gives each one page in a PDF export and
// one slide in the deck index's count; in an export the build steps are all
// shown (slides/Reveal.tsx), so that page is the complete slide. Parts 2 to 6
// each open with a divider slide (slides/index.tsx, PartDivider).
export const bist2026Config: SlideshowConfig = {
  id: "bist-2026",
  title: "From business shocks to household incomes",
  description:
    "PolicyEngine for the Modelling Unit: what it is, how far its results break down, what we have and have done, what could be explored with trade, macro and agent-based models, and possible next steps.",
  date: "2026-11-19",
  location: "Modelling Unit, Department for Business, Innovation, Science and Trade",
  footerText: "BIST Modelling Unit · 19 November 2026",
  // The live counter numbers slides, not build steps.
  countSlides: true,
  // The footer logo sits where the navigation hint would be.
  hideNavHint: true,
  slides: [
    // Part 1. Introduction.
    TitleSlide,
    InBriefSlide,
    { component: WhoSlide, builds: 3, exportBuilds: 1 },
    // Part 2. What PolicyEngine is.
    PartWhatSlide,
    { component: WhatSlide, builds: 4, exportBuilds: 1 },
    { component: BreakdownsSlide, builds: 4, exportBuilds: 1 },
    { component: RulesSlide, builds: 3, exportBuilds: 1 },
    { component: MicrocosmBuildSlide, builds: 5, exportBuilds: 1 },
    { component: CalibrationSlide, builds: 3, exportBuilds: 1 },
    { component: TargetsSlide, builds: 5, exportBuilds: 1 },
    CalibrationLiveSlide,
    // Part 3. What we have already.
    PartHaveSlide,
    { component: CoverageSlide, builds: 5, exportBuilds: 1 },
    AxiomLiveSlide,
    { component: AxiomRulesSlide, builds: 2, exportBuilds: 1 },
    { component: AxiomTodaySlide, builds: 4, exportBuilds: 1 },
    // Part 4. Projects we have done.
    PartProjectsSlide,
    BudgetSlide,
    AiPostSlide,
    AiEconomySlide,
    { component: FirmMethodSlide, builds: 3, exportBuilds: 1 },
    { component: VatReformsSlide, builds: 5, exportBuilds: 1 },
    { component: TradeSlide, builds: 4, exportBuilds: 1 },
    { component: BridgeSlide, builds: 3, exportBuilds: 1 },
    // Part 5. What could be explored: the mechanism, two applications, then
    // agent-based and macroeconomic models.
    PartExploreSlide,
    { component: LinkSlide, builds: 4, exportBuilds: 1 },
    { component: EpdSlide, builds: 4, exportBuilds: 1 },
    { component: BusinessPolicySlide, builds: 4, exportBuilds: 1 },
    { component: AbmSlide, builds: 3, exportBuilds: 1 },
    { component: MacroSlide, builds: 3, exportBuilds: 1 },
    // Part 6. Possible next steps.
    PartCollaborateSlide,
    { component: QuestionsSlide, builds: 6, exportBuilds: 1 },
    ClosingSlide,
  ],
};
