import { SlideshowConfig } from '@/lib/types';
import { WEBINAR_SPEAKERS } from './speakers';
import CoverSlide from './slides/CoverSlide';
import FlowSlide from './slides/FlowSlide';
import WhatIsPESlide from './slides/WhatIsPESlide';
import WhoUsesItSlide from './slides/WhoUsesItSlide';
import { MeasureDividerSlide, EstimatesDividerSlide, DemoDividerSlide } from './slides/SectionDividers';
import MeasureOverviewSlide from './slides/MeasureOverviewSlide';
import LaoFiscalSlide from './slides/LaoFiscalSlide';
import EstimatesTableSlide from './slides/EstimatesTableSlide';
import WhyTheyDifferSlide from './slides/WhyTheyDifferSlide';
import HowItWorksSlide from './slides/HowItWorksSlide';
import CalculatorLiveSlide from './slides/CalculatorLiveSlide';
import BridgeSlide from './slides/BridgeSlide';
import OpaHandoffSlide from './slides/OpaHandoffSlide';
import WhatsNextSlide from './slides/WhatsNextSlide';
import BallotMeasuresLiveSlide from './slides/BallotMeasuresLiveSlide';
import QuestionsSlide from './slides/QuestionsSlide';
import EndSlide from './slides/EndSlide';

/**
 * Webinar of October 30, 2026 (a Friday), noon PT / 3 pm ET. Sections in
 * David's order: PolicyEngine, the measure, the two estimates, the calculator
 * demo, then Fernando Hoces de la Guardia's Open Policy Analysis segment, what
 * we are doing next, David's ballot measures dashboard, and Q&A. Calculator figures come from the calculator's
 * own code on the October 30 Forbes data (bridgeNumbers.ts); every other
 * figure cites its source on the slide.
 */
export const prop40Webinar2026Config: SlideshowConfig = {
  id: 'prop40-webinar-2026',
  title: 'Why the Prop 40 revenue estimates differ',
  description:
    "Max Ghenis, David Trimmer and Fernando Hoces de la Guardia on why published estimates of California's Proposition 40 differ, with a live demo of PolicyEngine's open calculator.",
  date: '2026-10-30',
  location: 'Webinar',
  footerText: 'Why the Prop 40 revenue estimates differ · October 30, 2026',
  speakers: WEBINAR_SPEAKERS,
  slides: [
    CoverSlide,
    FlowSlide,
    WhatIsPESlide,
    WhoUsesItSlide,
    MeasureDividerSlide,
    MeasureOverviewSlide,
    LaoFiscalSlide,
    EstimatesDividerSlide,
    EstimatesTableSlide,
    WhyTheyDifferSlide,
    DemoDividerSlide,
    HowItWorksSlide,
    CalculatorLiveSlide,
    BridgeSlide,
    OpaHandoffSlide,
    WhatsNextSlide,
    BallotMeasuresLiveSlide,
    QuestionsSlide,
    EndSlide,
  ],
};
