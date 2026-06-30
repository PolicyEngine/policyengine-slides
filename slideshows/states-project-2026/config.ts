import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import WhatIsSlide from './slides/WhatIsSlide';
import ThreeLevelsSlide from './slides/ThreeLevelsSlide';
import HouseholdSlide from './slides/HouseholdSlide';
import RhodeIslandSlide from './slides/RhodeIslandSlide';
import GovernorQuoteSlide from './slides/GovernorQuoteSlide';
import RICalculatorSlide from './slides/RICalculatorSlide';
import SpeedSlide from './slides/SpeedSlide';
import DCSlide from './slides/DCSlide';
import TrackerSlide from './slides/TrackerSlide';
import DistrictsSlide from './slides/DistrictsSlide';
import FederalSlide from './slides/FederalSlide';
import OpportunitySlide from './slides/OpportunitySlide';
import EndSlide from './slides/EndSlide';

export const statesProject2026Config: SlideshowConfig = {
  id: 'states-project-2026',
  title: 'Modeling the real-world impact of policy',
  description:
    'How PolicyEngine helps state legislators and their partners model the impact of tax and benefit policy — household, district, and state.',
  date: '2026-06-01',
  location: 'The States Project · States Forum · FutureNow',
  footerText: 'PolicyEngine · The States Project · June 2026',
  private: true,
  slides: [
    CoverSlide,
    WhatIsSlide,
    ThreeLevelsSlide,
    HouseholdSlide,
    RhodeIslandSlide,
    GovernorQuoteSlide,
    RICalculatorSlide,
    SpeedSlide,
    DCSlide,
    TrackerSlide,
    DistrictsSlide,
    FederalSlide,
    OpportunitySlide,
    EndSlide,
  ],
};
