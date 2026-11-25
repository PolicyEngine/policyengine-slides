import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import CoverSlide from './slides/CoverSlide';
import NeedsSlide from './slides/NeedsSlide';
import AiChangeSlide from './slides/AiChangeSlide';
import HarnessSlide from './slides/HarnessSlide';
import {
  CommunicationSection,
  DataSection,
  PredictionsSection,
  ResponsesSection,
  RulesSection,
} from './slides/SectionSlide';
import EncoderWalkthroughSlide from './slides/EncoderWalkthroughSlide';
import LadderSlide from './slides/LadderSlide';
import SurveysSlide from './slides/SurveysSlide';
import TargetsSlide from './slides/TargetsSlide';
import DashboardSlide from './slides/DashboardSlide';
import CboSlide from './slides/CboSlide';
import BeliefsSlide from './slides/BeliefsSlide';
import SsppSlide from './slides/SsppSlide';
import MacroSlide from './slides/MacroSlide';
import PredictSlide from './slides/PredictSlide';
import ForecastSlide from './slides/ForecastSlide';
import { ThesisBill, ThesisConditional, ThesisUnconditional } from './slides/ThesisSlides';
import PolicyBenchNonzeroSlide from './slides/PolicyBenchNonzeroSlide';
import NextSkillsSlide from './slides/NextSkillsSlide';
import MillionsSlide from './slides/MillionsSlide';
import AbundanceSlide from './slides/AbundanceSlide';
import DeliberationSlide from './slides/DeliberationSlide';
import EndSlide from './slides/EndSlide';
import { POLICYBENCH_BUILDS, WALKTHROUGH_BUILDS } from './builds';
import { cover } from './text';

/**
 * Max Ghenis at the JRC workshop in Seville, 23 November 2026: what a policymaker needs (rules, data, responses,
 * predictions, communication), how AI changes that, the five pieces again as what AI needs to hill-climb on, then one
 * section per piece; PolicyBench, alone and then with a tool (two builds of one slide), opens the fifth, and a slide on
 * what AI should get right next follows it. Three slides on abundant policy analysis and a thank-you slide close the
 * deck. Most slides are headings, icons, charts or screenshots. Their words come from text.ts; chart tick labels and a
 * few other strings sit in the slide files.
 */
export const jrcSevilleHarness2026Config: SlideshowConfig = {
  id: 'jrc-seville-harness-2026',
  title: cover.title,
  description:
    'Max Ghenis at the JRC workshop "Building blocks for future economic analysis and modelling: the role of AI": evals for the rules, data, responses, predictions and communication behind policy analysis.',
  date: '2026-11-23',
  location: 'JRC workshop, Seville',
  footerText: `${cover.title} · Seville · 23 November 2026`,
  partnerLogo: { src: '/logos/axiom-foundation-white.svg', alt: 'Axiom Foundation' },
  speakers: [{ ...speakers['max-ghenis'], title: 'PolicyEngine and the Axiom Foundation' }],
  clickerKeys: true,
  slides: [
    CoverSlide,
    NeedsSlide,
    AiChangeSlide,
    HarnessSlide,
    RulesSection,
    { component: EncoderWalkthroughSlide, builds: WALKTHROUGH_BUILDS },
    LadderSlide,
    DataSection,
    SurveysSlide,
    TargetsSlide,
    DashboardSlide,
    ResponsesSection,
    CboSlide,
    BeliefsSlide,
    SsppSlide,
    MacroSlide,
    PredictionsSection,
    PredictSlide,
    ForecastSlide,
    ThesisUnconditional,
    ThesisConditional,
    ThesisBill,
    CommunicationSection,
    { component: PolicyBenchNonzeroSlide, builds: POLICYBENCH_BUILDS },
    NextSkillsSlide,
    MillionsSlide,
    AbundanceSlide,
    DeliberationSlide,
    EndSlide,
  ],
};
