import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import TitleSlide from './slides/TitleSlide';
import OutlineSlide from './slides/OutlineSlide';
import CraftScaledSlide from './slides/CraftScaledSlide';
import TwoAIConversationsSlide from './slides/TwoAIConversationsSlide';
import {
  ProgressDividerSlide,
  MicrosimDividerSlide,
  UncertaintyDividerSlide,
  InfraDividerSlide,
} from './slides/SectionDivider';
import PolicyBenchSlide from './slides/PolicyBenchSlide';
import AIUsesTodaySlide from './slides/AIUsesTodaySlide';
import AITrajectorySlide from './slides/AITrajectorySlide';
import PEOverviewSlide from './slides/PEOverviewSlide';
import CoverageSlide from './slides/CoverageSlide';
import DataPipelineSlide from './slides/DataPipelineSlide';
import ValidationSlide from './slides/ValidationSlide';
import RulesAsCodeSlide from './slides/RulesAsCodeSlide';
import TANFExampleSlide from './slides/TANFExampleSlide';
import ParamVsModelSlide from './slides/ParamVsModelSlide';
import DebtGdpSlide from './slides/DebtGdpSlide';
import BacktestingSlide from './slides/BacktestingSlide';
import DifferentPiecesSlide from './slides/DifferentPiecesSlide';
import ConditionalForecastsSlide from './slides/ConditionalForecastsSlide';
import ConductorsSlide from './slides/ConductorsSlide';
import CommunityClosingSlide from './slides/CommunityClosingSlide';
import QuestionsSlide from './slides/QuestionsSlide';

export const cbo2026Config: SlideshowConfig = {
  id: 'cbo-2026',
  title: 'Model-building and AI',
  description:
    'Where AI is, where it is heading, and what it could mean for federal policy modeling',
  date: '2026-05-27',
  location: 'Congressional Budget Office',
  footerText: 'PolicyEngine · CBO · May 2026',
  speakers: [speakers['max-ghenis']],
  private: true,
  slides: [
    TitleSlide,
    OutlineSlide,

    CraftScaledSlide,
    TwoAIConversationsSlide,

    ProgressDividerSlide,
    PolicyBenchSlide,
    AIUsesTodaySlide,
    AITrajectorySlide,

    MicrosimDividerSlide,
    PEOverviewSlide,
    CoverageSlide,
    DataPipelineSlide,
    ValidationSlide,
    RulesAsCodeSlide,
    TANFExampleSlide,

    UncertaintyDividerSlide,
    ParamVsModelSlide,
    DebtGdpSlide,
    BacktestingSlide,

    InfraDividerSlide,
    DifferentPiecesSlide,
    ConditionalForecastsSlide,
    ConductorsSlide,
    CommunityClosingSlide,

    QuestionsSlide,
  ],
};
