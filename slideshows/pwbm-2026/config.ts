import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import TitleSlide from './slides/TitleSlide';
import BackgroundSlide from './slides/BackgroundSlide';
import OutlineSlide from './slides/OutlineSlide';
import {
  RulesDividerSlide,
  DataDividerSlide,
  TheoryDividerSlide,
  AIDividerSlide,
} from './slides/SectionDivider';
import ModelBreadthSlide from './slides/ModelBreadthSlide';
import ValidationSlide from './slides/ValidationSlide';
import PartnersSlide from './slides/PartnersSlide';
import CliffWatchDemoSlide from './slides/CliffWatchDemoSlide';
import MicrodataPipelineSlide from './slides/MicrodataPipelineSlide';
import CalibrationTechSlide from './slides/CalibrationTechSlide';
import ReproducibilitySlide from './slides/ReproducibilitySlide';
import OBBBADemoSlide from './slides/OBBBADemoSlide';
import BehavioralResponseSlide from './slides/BehavioralResponseSlide';
import CrfbSsDemoSlide from './slides/CrfbSsDemoSlide';
import AIInternalWorkflowSlide from './slides/AIInternalWorkflowSlide';
import AIInequalitySlide from './slides/AIInequalitySlide';
import AIResearchSlide from './slides/AIResearchSlide';
import HouseholdAIDemoSlide from './slides/HouseholdAIDemoSlide';
import AxiomFutureSlide from './slides/AxiomFutureSlide';
import QuestionsSlide from './slides/QuestionsSlide';

export const pwbm2026Config: SlideshowConfig = {
  id: 'pwbm-2026',
  title: 'PolicyEngine',
  description:
    'Open microsimulation for US tax-benefit policy analysis',
  date: '2026-04-23',
  location: 'Penn Wharton Budget Model',
  footerText: 'PolicyEngine · PWBM · April 23, 2026',
  speakers: [speakers['max-ghenis']],
  slides: [
    TitleSlide,
    BackgroundSlide,
    PartnersSlide,
    OutlineSlide,

    RulesDividerSlide,
    ModelBreadthSlide,
    ValidationSlide,
    CliffWatchDemoSlide,

    DataDividerSlide,
    MicrodataPipelineSlide,
    CalibrationTechSlide,
    ReproducibilitySlide,
    OBBBADemoSlide,

    TheoryDividerSlide,
    BehavioralResponseSlide,
    CrfbSsDemoSlide,

    AIDividerSlide,
    HouseholdAIDemoSlide,
    AIInequalitySlide,
    AIResearchSlide,
    AIInternalWorkflowSlide,
    AxiomFutureSlide,

    QuestionsSlide,
  ],
};
