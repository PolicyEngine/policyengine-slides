import type { SlideshowConfig } from "@/lib/types";
import {
  AbsorptionSlide,
  BreakEvenSlide,
  CentralSlide,
  ClosingSlide,
  ClosureSlide,
  ConclusionsSlide,
  DataSlide,
  DecompositionBackupSlide,
  DrawsSlide,
  ExposureMethodSlide,
  ExposureSlide,
  GridBackupSlide,
  InBriefSlide,
  IncidenceFigureSlide,
  IncidenceSlide,
  IndexBackupSlide,
  MarginSlide,
  MethodSlide,
  MicrosimSlide,
  ObrBackupSlide,
  PolicyEngineSlide,
  PolicySlide,
  QuestionsSlide,
  ScenarioSlide,
  ShockSlide,
  TitleSlide,
  TransitionSlide,
} from "./slides";

// A 25-minute paper presentation followed by 20 minutes of discussion. The
// ministry runs the deck from its own machine, so it goes to them as a PDF
// export: no slide has build steps or live embeds.
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
    PolicyEngineSlide,
    MethodSlide,
    ExposureMethodSlide,
    DataSlide,
    ScenarioSlide,
    ShockSlide,
    MicrosimSlide,
    DrawsSlide,
    // 3. The central case
    CentralSlide,
    TransitionSlide,
    DecompositionBackupSlide,
    AbsorptionSlide,
    ObrBackupSlide,
    // 4. Who loses the job, and how
    IncidenceSlide,
    IncidenceFigureSlide,
    MarginSlide,
    // 5. What moves the cost, and policy
    BreakEvenSlide,
    GridBackupSlide,
    IndexBackupSlide,
    ClosureSlide,
    PolicySlide,
    ConclusionsSlide,
    ClosingSlide,
  ],
};
