import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import { TitleSlide, BaselineSlide, GrowthSlide, AlignmentSlide, DraftingSlide, DiscussionSlide, EndSlide } from './slides/OpeningSlides';
import { PolicyBenchSlide } from './slides/QuestionSlides';
import ConductorSlide from './slides/ConductorSlide';
import PrimitivesSlide from './slides/PrimitivesSlide';
import { BillSlide, RulesSlide, ModelSlide, IndicatorSlide, AudienceSlide, AgentSlide, ClosingLoopSlide } from './slides/BillSlides';

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
    // 30-minute cut (Sat 5:45-6:15 PM): claim first, then the two SPF slides as "why now"; order per SCRIPT.md.
    // Slide 14 closes the loop that slide 6 opens. Backups live in overhang-2026-backup.
    TitleSlide, AlignmentSlide, BaselineSlide, GrowthSlide, DraftingSlide,
    PolicyBenchSlide, PrimitivesSlide, BillSlide, RulesSlide,
    ModelSlide, IndicatorSlide, AudienceSlide, AgentSlide, ConductorSlide, ClosingLoopSlide, DiscussionSlide, EndSlide,
  ],
};
