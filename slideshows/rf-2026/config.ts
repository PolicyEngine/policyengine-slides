import type { SlideshowConfig } from "@/lib/types";
import {
  BreakdownsSlide,
  BudgetDashboardSlide,
  BudgetObrSlide,
  CalibrationSlide,
  ClosingSlide,
  CoverageSlide,
  DataCompareSlide,
  EnergySlide,
  InBriefSlide,
  LimitsSlide,
  MethodSlide,
  MicrocosmBuildSlide,
  ModelSlide,
  NuffieldSlide,
  OptionsSlide,
  PilotSlide,
  QuestionsSlide,
  ReportsSlide,
  RoutesSlide,
  RulesCompareSlide,
  RulesSlide,
  StepsSlide,
  TitleSlide,
  UsesSlide,
  WhoSlide,
} from "./slides";

// 25 slides in six parts, shown by the part tracker along the top of each
// slide; there are no divider slides. Slides with "builds" reveal their
// content in steps when presented live; "exportBuilds: 1" gives each one
// page in a PDF export, where every step is shown (slides/Reveal.tsx).
export const rf2026Config: SlideshowConfig = {
  id: "rf-2026",
  title: "PolicyEngine UK and the Resolution Foundation's modelling",
  description:
    "The Nuffield Foundation grants, PolicyEngine UK and its Microcosm data, RF's published analyses mapped to PolicyEngine, and comparisons with the IPPR model and UKMOD.",
  date: "2026-11-30",
  location: "Resolution Foundation (video call)",
  footerText: "Resolution Foundation · 30 November 2026",
  countSlides: true,
  hideNavHint: true,
  slides: [
    // Part 1. Introduction.
    TitleSlide,
    InBriefSlide,
    { component: WhoSlide, builds: 3, exportBuilds: 1 },
    // Part 2. The Nuffield Foundation grants.
    { component: NuffieldSlide, builds: 3, exportBuilds: 1 },
    BudgetDashboardSlide,
    // Part 3. The model and the data.
    { component: ModelSlide, builds: 4, exportBuilds: 1 },
    { component: RulesSlide, builds: 3, exportBuilds: 1 },
    { component: CoverageSlide, builds: 5, exportBuilds: 1 },
    { component: MicrocosmBuildSlide, builds: 5, exportBuilds: 1 },
    { component: BreakdownsSlide, builds: 4, exportBuilds: 1 },
    // Part 4. The Resolution Foundation's research and the IPPR model.
    ReportsSlide,
    { component: MethodSlide, builds: 5, exportBuilds: 1 },
    { component: UsesSlide, builds: 3, exportBuilds: 1 },
    { component: StepsSlide, builds: 3, exportBuilds: 1 },
    { component: EnergySlide, builds: 2, exportBuilds: 1 },
    // Part 5. How PolicyEngine compares.
    { component: DataCompareSlide, builds: 3, exportBuilds: 1 },
    { component: RulesCompareSlide, builds: 3, exportBuilds: 1 },
    { component: CalibrationSlide, builds: 3, exportBuilds: 1 },
    { component: BudgetObrSlide, builds: 3, exportBuilds: 1 },
    { component: LimitsSlide, builds: 2, exportBuilds: 1 },
    // Part 6. Routes in and a possible pilot.
    { component: RoutesSlide, builds: 4, exportBuilds: 1 },
    { component: OptionsSlide, builds: 3, exportBuilds: 1 },
    { component: PilotSlide, builds: 3, exportBuilds: 1 },
    { component: QuestionsSlide, builds: 6, exportBuilds: 1 },
    ClosingSlide,
  ],
};
