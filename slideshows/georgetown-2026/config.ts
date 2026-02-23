import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import LiveCodingIntroSlide from './slides/LiveCodingIntroSlide';
import WhatIsPolicyEngineSlide from './slides/WhatIsPolicyEngineSlide';
import UsersSlide from './slides/UsersSlide';
import QuestionsWeAnswerSlide from './slides/QuestionsWeAnswerSlide';
import OpenSourceSlide from './slides/OpenSourceSlide';
import DemoRoadmapSlide from './slides/DemoRoadmapSlide';
import ACAIntroSlide from './slides/ACAIntroSlide';
import ACADemoSlide from './slides/ACADemoSlide';
import ACADemoSlide2 from './slides/ACADemoSlide2';
import HouseholdDemoSlide from './slides/HouseholdDemoSlide';
import HowDoesItWorkSlide from './slides/HowDoesItWorkSlide';
import OurApproachSlide from './slides/OurApproachSlide';
import AnalystChoicesSlide from './slides/AnalystChoicesSlide';
import DataSourcesSlide from './slides/DataSourcesSlide';
import PolicyReformDemoSlide from './slides/PolicyReformDemoSlide';
import OBBBAIntroSlide from './slides/OBBBAIntroSlide';
import OBBBADemoSlide from './slides/OBBBADemoSlide';
import LiveCodingRevealSlide from './slides/LiveCodingRevealSlide';
import FutureAISlide from './slides/FutureAISlide';
import FutureLocalSlide from './slides/FutureLocalSlide';
import QuestionsSlide from './slides/QuestionsSlide';
import EndSlide from './slides/EndSlide';

export const georgetown2026Config: SlideshowConfig = {
  id: 'georgetown-2026',
  title: "Simulating tax and transfer policies' inequality impacts with PolicyEngine",
  description: 'Guest lecture for PPOL 6362: Inequality and public policy',
  date: '2026-01-12',
  location: 'Georgetown McCourt School of Public Policy',
  footerText: 'Georgetown PPOL 6362 \u00b7 January 12, 2026',
  speakers: [
    speakers['max-ghenis'],
    speakers['daphne-hansell'],
  ],
  slides: [
    LiveCodingIntroSlide,
    WhatIsPolicyEngineSlide,
    UsersSlide,
    QuestionsWeAnswerSlide,
    OpenSourceSlide,
    DemoRoadmapSlide,
    ACAIntroSlide,
    ACADemoSlide,
    ACADemoSlide2,
    HouseholdDemoSlide,
    HowDoesItWorkSlide,
    OurApproachSlide,
    AnalystChoicesSlide,
    DataSourcesSlide,
    PolicyReformDemoSlide,
    OBBBAIntroSlide,
    OBBBADemoSlide,
    LiveCodingRevealSlide,
    FutureAISlide,
    FutureLocalSlide,
    QuestionsSlide,
    EndSlide,
  ],
};
