import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import { TitleSlide, BaselineSlide, GrowthSlide, BacktestSlide, AlignmentSlide, DraftingSlide, DiscussionSlide, EndSlide } from './slides/OpeningSlides';
import { WhatIfEveryBillSlide, WhatIfEverySeriesSlide, CrossScaleSlide, HowWeGetThereSlide, PolicyBenchSlide } from './slides/QuestionSlides';
import PrimitivesSlide from './slides/PrimitivesSlide';
import { BillSlide, RulesSlide, ModelSlide, AudienceSlide, AgentSlide, ClosingLoopSlide } from './slides/BillSlides';

export const overhang2026Config: SlideshowConfig = {
  id: 'overhang-2026',
  title: 'Law is an alignment problem',
  description: 'What if every bill had a forecast? Policy rules, models, and forecasts that resolve against reality.',
  date: '2026-09-19',
  location: 'The Overhang 2026, American Geophysical Union, Washington DC',
  footerText: 'Max Ghenis · The Overhang · September 2026',
  speakers: [speakers['max-ghenis']],
  private: false,
  slides: [
    TitleSlide, BaselineSlide, GrowthSlide, BacktestSlide, AlignmentSlide,
    DraftingSlide, WhatIfEveryBillSlide, WhatIfEverySeriesSlide, CrossScaleSlide,
    HowWeGetThereSlide, PolicyBenchSlide, PrimitivesSlide, BillSlide, RulesSlide,
    ModelSlide, AudienceSlide, AgentSlide, ClosingLoopSlide, DiscussionSlide, EndSlide,
  ],
};
