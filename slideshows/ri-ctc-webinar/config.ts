import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import IntroSlide from './slides/IntroSlide';
import WhatIsPolicyEngineSlide from './slides/WhatIsPolicyEngineSlide';
import UsersSlide from './slides/UsersSlide';
import HowDoesItWorkSlide from './slides/HowDoesItWorkSlide';
import MicrosimIntroSlide from './slides/MicrosimIntroSlide';
import MicrosimBaselineSlide from './slides/MicrosimBaselineSlide';
import MicrosimAggregateSlide from './slides/MicrosimAggregateSlide';
import OurApproachSlide from './slides/OurApproachSlide';
import CalculatorOverviewSlide from './slides/CalculatorOverviewSlide';
import McKeeProposalSlide from './slides/McKeeProposalSlide';
import CalculatorDemoSlide from './slides/CalculatorDemoSlide';
import ResourcesSlide from './slides/ResourcesSlide';
import WhatsNextSlide from './slides/WhatsNextSlide';
import EndSlide from './slides/EndSlide';

export const riCtcWebinarConfig: SlideshowConfig = {
  id: 'ri-ctc-webinar',
  title: 'Rhode Island child tax credit calculator',
  description: "Live demonstration of the RI CTC calculator and Governor McKee's proposal",
  date: '2026-02-05',
  location: 'Virtual Webinar',
  footerText: 'RI CTC Webinar \u00b7 February 5, 2026',
  speakers: [
    speakers['max-ghenis'],
  ],
  slides: [
    IntroSlide,
    WhatIsPolicyEngineSlide,
    UsersSlide,
    HowDoesItWorkSlide,
    MicrosimIntroSlide,
    MicrosimBaselineSlide,
    MicrosimAggregateSlide,
    OurApproachSlide,
    CalculatorOverviewSlide,
    McKeeProposalSlide,
    CalculatorDemoSlide,
    ResourcesSlide,
    WhatsNextSlide,
    EndSlide,
  ],
};
