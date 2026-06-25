import { SlideshowConfig } from "@/lib/types";
import { speakers } from "@/lib/speakers";
import {
  CoverSlide,
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
  ],
};
