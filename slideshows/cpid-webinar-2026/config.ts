import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import WhatIsPESlide from '@/slideshows/civic-builders-2026/slides/WhatIsPESlide';
import WhoUsesItSlide from '@/slideshows/cbo-2026/slides/WhoUsesItSlide';
import CoverSlide from './slides/CoverSlide';
import FlowSlide from './slides/FlowSlide';
import WhyTodaySlide from './slides/WhyTodaySlide';
import { CynthiaRemarksSlide, JoshRemarksSlide } from './slides/GuestRemarksSlides';
import { MicrosimulationDividerSlide, DashboardDividerSlide, LookingAheadDividerSlide } from './slides/SectionDividers';
import OpmVsSpmSlide from './slides/OpmVsSpmSlide';
import SpmComponentsSlide from './slides/SpmComponentsSlide';
import Spm2025ProjectionSlide from './slides/Spm2025ProjectionSlide';
import DashboardWhatSlide from './slides/DashboardWhatSlide';
import DashboardLiveSlide from './slides/DashboardLiveSlide';
import DashboardScreenshotSlide from './slides/DashboardScreenshotSlide';
import HowItRunsSlide from './slides/HowItRunsSlide';
import WhatsNextSlide from './slides/WhatsNextSlide';
import QuestionsSlide from './slides/QuestionsSlide';
import EndSlide from './slides/EndSlide';

/**
 * Skeleton for the September 15, 2026 launch webinar. Flow agreed at the
 * September 11 stand-up: Max welcome → Cynthia and Josh remarks →
 * PolicyEngine and microsimulation overview → David's dashboard demo.
 * Bracketed [fill] text marks numbers that land the morning of the webinar.
 */
export const cpidWebinar2026Config: SlideshowConfig = {
  id: 'cpid-webinar-2026',
  title: 'The new child poverty numbers, and how state reforms would affect them',
  description:
    'Launch webinar for the Child Poverty Impact Dashboard, four hours after the Census Bureau publishes the 2025 income and poverty estimates.',
  date: '2026-09-15',
  location: 'Webinar',
  footerText: 'Child Poverty Impact Dashboard launch · September 15, 2026',
  speakers: [
    speakers['cynthia-osborne'],
    speakers['joshua-mccabe'],
    { ...speakers['david-trimmer'], title: 'Research Analyst, PolicyEngine' },
    { ...speakers['max-ghenis'], title: 'CEO, PolicyEngine' },
  ],
  slides: [
    CoverSlide,
    FlowSlide,
    WhyTodaySlide,
    CynthiaRemarksSlide,
    JoshRemarksSlide,
    MicrosimulationDividerSlide,
    WhatIsPESlide,
    WhoUsesItSlide,
    OpmVsSpmSlide,
    SpmComponentsSlide,
    Spm2025ProjectionSlide,
    DashboardDividerSlide,
    DashboardWhatSlide,
    DashboardLiveSlide,
    DashboardScreenshotSlide,
    HowItRunsSlide,
    LookingAheadDividerSlide,
    WhatsNextSlide,
    QuestionsSlide,
    EndSlide,
  ],
};
