import type { SlideshowConfig } from "@/lib/types";
import {
  AgendaSlide,
  BudgetAsksSlide,
  BudgetDaySlide,
  BudgetNewSlide,
  ClosingSlide,
  EnergyWorkSlide,
  PipelineChangesSlide,
  PropertyConceptsSlide,
  PropertyFixSlide,
  ReleaseChecksSlide,
  ScotlandDataSlide,
  TitleSlide,
  WorkBenefitsSlide,
} from "./slides";

export const scottishGovernment2026Config: SlideshowConfig = {
  id: "scottish-government-2026",
  title: "PolicyEngine and the Scottish Government",
  description:
    "Follow-up to the February and March meetings: the Microcosm UK data pipeline and property income, UK work published since April, and the Autumn Budget 2026 plan.",
  date: "2026-10-09",
  location: "Scottish Government",
  footerText: "Scottish Government · 9 October 2026",
  slides: [
    TitleSlide,
    AgendaSlide,
    PipelineChangesSlide,
    ScotlandDataSlide,
    ReleaseChecksSlide,
    PropertyConceptsSlide,
    PropertyFixSlide,
    EnergyWorkSlide,
    WorkBenefitsSlide,
    BudgetNewSlide,
    BudgetDaySlide,
    BudgetAsksSlide,
    ClosingSlide,
  ],
};
