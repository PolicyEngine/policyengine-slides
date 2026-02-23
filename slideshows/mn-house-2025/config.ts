import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import CoverSlide from './slides/CoverSlide';
import LiveCodingIntroSlide from './slides/LiveCodingIntroSlide';
import IntroSlide from './slides/IntroSlide';
import WhatIsPolicyEngineSlide from './slides/WhatIsPolicyEngineSlide';
import UsersSlide from './slides/UsersSlide';
import HowDoesItWorkSlide from './slides/HowDoesItWorkSlide';
import MicrosimIntroSlide from './slides/MicrosimIntroSlide';
import MicrosimBaselineSlide from './slides/MicrosimBaselineSlide';
import MicrosimReformStaticSlide from './slides/MicrosimReformStaticSlide';
import MicrosimDynamicsSlide from './slides/MicrosimDynamicsSlide';
import MicrosimDataSlide from './slides/MicrosimDataSlide';
import MicrosimWeightsSlide from './slides/MicrosimWeightsSlide';
import MicrosimAggregateSlide from './slides/MicrosimAggregateSlide';
import OurApproachSlide from './slides/OurApproachSlide';
import HouseholdDemoSlide from './slides/HouseholdDemoSlide';
import PolicyReformDemoSlide from './slides/PolicyReformDemoSlide';
import PythonDemoSlide from './slides/PythonDemoSlide';
import StateMapDemoSlide from './slides/StateMapDemoSlide';
import LiveCodingRevealSlide from './slides/LiveCodingRevealSlide';
import WhatsComingSlide from './slides/WhatsComingSlide';
import EndSlide from './slides/EndSlide';

export const mnHouse2025Config: SlideshowConfig = {
  id: 'mn-house-2025',
  title: 'Modeling Minnesota tax policy with PolicyEngine',
  description: 'Demo of PolicyEngine for the Minnesota House Research Department',
  date: '2025-01-06',
  location: 'Minnesota House Research Department',
  footerText: 'MN House Research \u00b7 January 6, 2025',
  private: true,
  speakers: [
    speakers['max-ghenis'],
    speakers['david-trimmer'],
    speakers['pavel-makarchuk'],
  ],
  slides: [
    CoverSlide,
    LiveCodingIntroSlide,
    IntroSlide,
    WhatIsPolicyEngineSlide,
    UsersSlide,
    HowDoesItWorkSlide,
    MicrosimIntroSlide,
    MicrosimBaselineSlide,
    MicrosimReformStaticSlide,
    MicrosimDynamicsSlide,
    MicrosimDataSlide,
    MicrosimWeightsSlide,
    MicrosimAggregateSlide,
    OurApproachSlide,
    HouseholdDemoSlide,
    PolicyReformDemoSlide,
    PythonDemoSlide,
    StateMapDemoSlide,
    LiveCodingRevealSlide,
    WhatsComingSlide,
    EndSlide,
  ],
};
