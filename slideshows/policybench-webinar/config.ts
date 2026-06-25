import { SlideshowConfig } from "@/lib/types";
import { speakers } from "@/lib/speakers";
import {
  CoverSlide,
  GuessSlide,
  RevealSlide,
  QuestionSlide,
  SetupSlide,
  LeaderboardSlide,
  BreakdownSlide,
  ThesisSlide,
  CredibilitySlide,
  DemoSlide,
  OpenSlide,
  NextSlide,
  EndSlide,
} from "./slides";
import WhatIsPESlide from "@/slideshows/civic-builders-2026/slides/WhatIsPESlide";
import WhoUsesItSlide from "@/slideshows/cbo-2026/slides/WhoUsesItSlide";

export const policybenchWebinarConfig: SlideshowConfig = {
  id: "policybench-webinar",
  title: "PolicyBench",
  description: "PolicyEngine webinar — can AI calculate taxes and benefits?",
  date: "2026-06-25",
  location: "Webinar",
  footerText: "PolicyBench · June 25, 2026",
  speakers: [speakers["max-ghenis"]],
  slides: [
    CoverSlide,
    GuessSlide,
    RevealSlide,
    QuestionSlide,
    SetupSlide,
    LeaderboardSlide,
    BreakdownSlide,
    ThesisSlide,
    WhatIsPESlide,
    WhoUsesItSlide,
    CredibilitySlide,
    DemoSlide,
    OpenSlide,
    NextSlide,
    EndSlide,
  ],
};
