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
import {
  LoopsRecapSlide,
  NextSlide,
  QuestionsSlide,
} from "./slides/ClosingSlides";
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
    "Arnold Ventures check-in — the stack, its feedback loops, and progress on districts, tariffs, Social Security, and SNAP QC",
  date: "2026-09-01",
  location: "Arnold Ventures check-in (Google Meet)",
  footerText: "Arnold Ventures check-in · September 2026",
  partnerLogo: {
    src: "/logos/axiom-foundation-white.svg",
    alt: "The Axiom Foundation",
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
    StackIntroSlide,
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
    LoopsRecapSlide,
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
