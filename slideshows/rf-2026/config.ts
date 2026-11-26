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
  whole,
} from "./slides";

// 25 slides in six parts, shown by the part tracker along the top of each
// slide; there are no divider slides. Builds only where the order carries
// meaning (slides 4, 12, 14's second group, 22 and 23); reference slides,
// which are jumped to in discussion, are shown whole ("whole"). Slides with
// "builds" reveal their content in steps when presented live;
// "exportBuilds: 1" gives each one page in a PDF export, where every step is
// shown (slides/Reveal.tsx).
export const rf2026Config: SlideshowConfig = {
  id: "rf-2026",
  title: "PolicyEngine UK and the Resolution Foundation's modelling",
  description:
    "The Nuffield Foundation grants, PolicyEngine UK and its Microcosm data, RF's published analyses mapped to PolicyEngine, and checks against official figures.",
  date: "2026-11-30",
  location: "Resolution Foundation",
  footerText: "Resolution Foundation · 30 November 2026",
  countSlides: true,
  hideNavHint: true,
  slides: [
    // Part 1. Introduction.
    TitleSlide,
    InBriefSlide,
    whole(WhoSlide),
    // Part 2. The Nuffield Foundation grants.
    { component: NuffieldSlide, builds: 3, exportBuilds: 1 },
    BudgetDashboardSlide,
    // Part 3. The model and the data.
    whole(ModelSlide),
    whole(RulesSlide),
    whole(CoverageSlide),
    whole(MicrocosmBuildSlide),
    whole(BreakdownsSlide),
    // Part 4. The Resolution Foundation's research.
    ReportsSlide,
    { component: MethodSlide, builds: 5, exportBuilds: 1 },
    whole(UsesSlide),
    { component: StepsSlide, builds: 2, exportBuilds: 1 },
    whole(EnergySlide),
    // Part 5. How PolicyEngine compares.
    whole(DataCompareSlide),
    whole(RulesCompareSlide),
    whole(CalibrationSlide),
    { component: whole(BudgetObrSlide) },
    LimitsSlide,
    // Part 6. Routes in and a possible pilot.
    whole(RoutesSlide),
    { component: OptionsSlide, builds: 3, exportBuilds: 1 },
    { component: PilotSlide, builds: 3, exportBuilds: 1 },
    QuestionsSlide,
    ClosingSlide,
  ],
};
