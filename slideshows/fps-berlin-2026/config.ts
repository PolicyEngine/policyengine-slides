import type { SlideshowConfig } from "@/lib/types";
import {
  AbsorptionSlide,
  BreakEvenSlide,
  CalibrationSlide,
  CentralSlide,
  ClosingSlide,
  ClosureSlide,
  ConclusionsSlide,
  DataSlide,
  DirectionsSlide,
  DrawsSlide,
  ExposureMethodSlide,
  ExposureSlide,
  AgendaSlide,
  SectionCentralSlide,
  SectionComparisonsSlide,
  SectionMethodSlide,
  SectionQuestionSlide,
  SectionSensitivitySlide,
  IncidenceSlide,
  ImputationSlide,
  IndexBackupSlide,
  MarginSlide,
  MethodSlide,
  PolicyEngineSlide,
  PolicySlide,
  QuestionsSlide,
  ScenarioSlide,
  TitleSlide,
  TransitionSlide,
} from "./slides";

// A 25-minute paper presentation followed by 20 minutes of discussion. The
// ministry runs the deck from its own machine, so it goes to them as a PDF
// export: no slide has build steps; slide 28 embeds a live dashboard (a screenshot in the PDF).
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
    PolicyEngineSlide,
    AgendaSlide,
    // 1. The question
    SectionQuestionSlide,
    ExposureSlide,
    QuestionsSlide,
    // 2. Data and method
    SectionMethodSlide,
    MethodSlide,
    DataSlide,
    ImputationSlide,
    CalibrationSlide,
    ExposureMethodSlide,
    ScenarioSlide,
    DrawsSlide,
    // 3. The central case
    SectionCentralSlide,
    CentralSlide,
    TransitionSlide,
    AbsorptionSlide,
    // 4. Who loses the job, and how
    SectionComparisonsSlide,
    IncidenceSlide,
    MarginSlide,
    // 5. What moves the cost, and policy
    SectionSensitivitySlide,
    BreakEvenSlide,
    IndexBackupSlide,
    ClosureSlide,
    PolicySlide,
    // Close
    ConclusionsSlide,
    DirectionsSlide,
    ClosingSlide,
  ],
};
