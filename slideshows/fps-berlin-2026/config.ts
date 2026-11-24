import type { SlideshowConfig } from "@/lib/types";
import {
  AbsorptionSlide,
  BreakEvenSlide,
  CentralSlide,
  ClosingSlide,
  ClosureSlide,
  ConclusionsSlide,
  DecompositionBackupSlide,
  ExposureSlide,
  GridBackupSlide,
  InBriefSlide,
  IncidenceFigureSlide,
  IncidenceSlide,
  IndexBackupSlide,
  MarginSlide,
  MethodSlide,
  ObrBackupSlide,
  PolicySlide,
  QuestionsSlide,
  ScenarioSlide,
  TitleSlide,
  TransitionSlide,
} from "./slides";

// A 25-minute paper presentation followed by 20 minutes of discussion. The
// ministry runs the deck from its own machine, so it goes to them as a PDF
// export: no slide has build steps or live embeds. Slides after the closing
// slide are backup for the discussion.
export const fpsBerlin2026Config: SlideshowConfig = {
  id: "fps-berlin-2026",
  title: "Who bears the AI shock?",
  description:
    "The distributional and fiscal incidence in the UK of an AI-driven labour-market shock: who loses the job, how the loss arrives, and what the tax-benefit system absorbs.",
  date: "2026-12-01",
  location: "2026 Franco-German Fiscal Policy Seminar, Federal Ministry of Finance, Berlin",
  footerText: "Franco-German Fiscal Policy Seminar · Berlin · December 2026",
  countSlides: true,
  clickerKeys: true,
  slides: [
    TitleSlide,
    InBriefSlide,
    // 1. The question
    ExposureSlide,
    QuestionsSlide,
    // 2. Data and method
    MethodSlide,
    ScenarioSlide,
    // 3. The central case
    CentralSlide,
    TransitionSlide,
    AbsorptionSlide,
    // 4. Who loses the job, and how
    IncidenceSlide,
    IncidenceFigureSlide,
    MarginSlide,
    // 5. What moves the cost, and policy
    BreakEvenSlide,
    ClosureSlide,
    PolicySlide,
    ConclusionsSlide,
    ClosingSlide,
    // Backup
    ObrBackupSlide,
    IndexBackupSlide,
    DecompositionBackupSlide,
    GridBackupSlide,
  ],
};
