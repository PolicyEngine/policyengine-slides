import type { SlideshowConfig } from "@/lib/types";
import {
  Budget2025Slide,
  Budget2026Slide,
  ClosingSlide,
  HowSlide,
  IdeasSlide,
  PressSlide,
  PublicationsSlide,
  TitleSlide,
  UsersSlide,
  WhatSlide,
} from "./slides";

export const telegraph2026Config: SlideshowConfig = {
  id: "telegraph-2026",
  title: "PolicyEngine: introduction and Budget planning",
  description:
    "A short introduction to PolicyEngine for The Telegraph: what it is, who uses it, recent UK work, the Autumn Budget plan and ideas for working together.",
  date: "2026-10-09",
  location: "The Telegraph",
  footerText: "The Telegraph · 9 October 2026",
  slides: [
    TitleSlide,
    WhatSlide,
    HowSlide,
    UsersSlide,
    PressSlide,
    PublicationsSlide,
    Budget2025Slide,
    Budget2026Slide,
    IdeasSlide,
    ClosingSlide,
  ],
};
