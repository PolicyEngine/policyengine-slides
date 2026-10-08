import type { SlideshowConfig } from "@/lib/types";
import {
  AgendaSlide,
  Budget2025Slide,
  Budget2026Slide,
  BudgetScotlandSlide,
  EnrichmentSlide,
  InputsSlide,
  PipelineSlide,
  PropertyIncomeSlide,
  ResearchSlide,
  ScotlandSlide,
  TitleSlide,
  ValidationSlide,
} from "./slides";

export const scottishGovernment2026Config: SlideshowConfig = {
  id: "scottish-government-2026",
  title: "PolicyEngine and the Scottish Government",
  description:
    "Microcosm UK, a property-income modelling placeholder, plans for Autumn Budget 2026 and recent UK research.",
  date: "2026-10-09",
  location: "Scottish Government",
  footerText: "Scottish Government · 9 October 2026",
  slides: [
    TitleSlide,
    AgendaSlide,
    PipelineSlide,
    InputsSlide,
    EnrichmentSlide,
    ScotlandSlide,
    ValidationSlide,
    PropertyIncomeSlide,
    Budget2025Slide,
    Budget2026Slide,
    BudgetScotlandSlide,
    ResearchSlide,
  ],
};
