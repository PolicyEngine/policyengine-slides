import { SlideshowConfig } from "@/lib/types";
import { speakers } from "@/lib/speakers";

import TitleSlide from "./slides/TitleSlide";
import {
  PartnershipSlide,
  WhoUsesSlide,
  FundingSlide,
  PipelineSlide,
} from "./slides/ContextSlides";
import ScaleSlide from "./slides/ScaleSlide";
import {
  StackIntroSlide,
  StackPeSlide,
  StackAxiomSlide,
  StackChronicleSlide,
  StackMicrocosmSlide,
  StackThesisSlide,
  StackCorollarySlide,
} from "./slides/StackWalkSlides";
import {
  ScorecardLiveSlide,
  GraphRandSlide,
  ChronicleLiveSlide,
  CalibrationLiveSlide,
  ThesisLiveSlide,
} from "./slides/LayerSlides";
import {
  DistrictSlide,
  TariffSlide,
  SocialSecuritySlide,
  SnapQcSlide,
} from "./slides/ProgressSlides";
import { NextSlide, QuestionsSlide } from "./slides/ClosingSlides";
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
} from "./slides/AppendixSlides";

export const arnold2026Config: SlideshowConfig = {
  id: "arnold-2026",
  title: "Six projects, one chain of checks",
  description:
    "Private funder check-in — the stack, its feedback loops, and current progress",
  date: "2026-09-01",
  footerText: "Arnold Ventures check-in · September 2026",
  partnerLogo: {
    src: "/logos/axiom-wordmark-bare-white.svg",
    alt: "Axiom",
  },
  speakers: [speakers["max-ghenis"]],
  private: true,
  slides: [
    // Scene-setting
    TitleSlide,
    PartnershipSlide,
    WhoUsesSlide,
    FundingSlide,
    PipelineSlide,

    // The problem, then the stack walk: each layer lit in turn,
    // with its live surface right after
    ScaleSlide,
    { component: StackIntroSlide, builds: 7 },
    StackPeSlide,
    ScorecardLiveSlide,
    StackAxiomSlide,
    GraphRandSlide,
    StackChronicleSlide,
    ChronicleLiveSlide,
    StackMicrocosmSlide,
    CalibrationLiveSlide,
    StackThesisSlide,
    ThesisLiveSlide,
    StackCorollarySlide,

    // Progress since we last talked
    DistrictSlide,
    TariffSlide,
    SocialSecuritySlide,
    SnapQcSlide,

    // Close
    NextSlide,
    QuestionsSlide,

    // Appendix — static fallbacks for the embeds
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
  ],
};
