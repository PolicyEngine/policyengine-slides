import { SlideshowConfig } from "@/lib/types";
import { speakers } from "@/lib/speakers";

import TitleSlide from "../arnold-2026/slides/TitleSlide";
import {
  PartnershipSlide,
  WhoUsesSlide,
  FundingSlide,
  PipelineSlide,
} from "../arnold-2026/slides/ContextSlides";
import AgendaSlide from "../arnold-2026/slides/AgendaSlide";
import ScaleSlide from "../arnold-2026/slides/ScaleSlide";
import {
  StackIntroSlide,
  StackPeSlide,
  StackAxiomSlide,
  StackChronicleSlide,
  StackMicrocosmSlide,
  StackThesisSlide,
  StackCorollarySlide,
} from "../arnold-2026/slides/StackWalkSlides";
import {
  ScorecardLiveSlide,
  GraphRandSlide,
  ChronicleLiveSlide,
  CalibrationLiveSlide,
  ThesisLiveSlide,
} from "../arnold-2026/slides/LayerSlides";
import {
  DistrictSlide,
  TariffSlide,
  SocialSecuritySlide,
  SnapQcSlide,
  AiIncomeShiftSlide,
} from "../arnold-2026/slides/ProgressSlides";
import { NextSlide, QuestionsSlide } from "../arnold-2026/slides/ClosingSlides";
import {
  AppendixDividerSlide,
  GraphStaticSlide,
  CalibrationStaticSlide,
  ScorecardStaticSlide,
  SnapSimStaticSlide,
  DistrictStaticSlide,
  CrfbStaticSlide,
  ThesisStaticSlide,
  TariffStaticSlide,
  ChronicleStaticSlide,
  ValidationStaticSlide,
} from "../arnold-2026/slides/AppendixSlides";

/**
 * The conversation cut: their threads first, the stack on one slide plus one
 * recap, one ask — ten slides. Everything else sits in the appendix to pull
 * on demand (layer walk with live embeds, scene-setting, static fallbacks).
 */
export const arnold2026ShortConfig: SlideshowConfig = {
  id: "arnold-2026-short",
  title: "Five projects, one chain of checks",
  description:
    "Private funder check-in — the conversation cut: their threads, the stack, one ask",
  date: "2026-09-01",
  footerText: "Arnold Ventures check-in · September 2026",
  partnerLogo: {
    src: "/logos/axiom-wordmark-bare-white.svg",
    alt: "Axiom",
  },
  speakers: [speakers["max-ghenis"]],
  private: true,
  slides: [
    // Their threads first
    TitleSlide,
    AgendaSlide,
    DistrictSlide,
    SocialSecuritySlide,
    SnapQcSlide,
    TariffSlide,

    // Why the stack, the stack, its checks, the ask
    ScaleSlide,
    { component: StackIntroSlide, builds: 7 },
    GraphRandSlide,
    ScorecardLiveSlide,
    ThesisLiveSlide,
    AiIncomeShiftSlide,
    NextSlide,
    QuestionsSlide,

    // Appendix — pull on demand
    AppendixDividerSlide,
    StackPeSlide,
    StackAxiomSlide,
    StackChronicleSlide,
    ChronicleLiveSlide,
    StackMicrocosmSlide,
    CalibrationLiveSlide,
    StackThesisSlide,
    StackCorollarySlide,
    PartnershipSlide,
    WhoUsesSlide,
    FundingSlide,
    PipelineSlide,
    GraphStaticSlide,
    CalibrationStaticSlide,
    ScorecardStaticSlide,
    SnapSimStaticSlide,
    DistrictStaticSlide,
    CrfbStaticSlide,
    ThesisStaticSlide,
    TariffStaticSlide,
    ChronicleStaticSlide,
    ValidationStaticSlide,
  ],
};
