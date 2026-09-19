import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import { TitleSlide, AlignmentSlide, DraftingSlide, DiscussionSlide, EndSlide } from './slides/OpeningSlides';
import { PolicyBenchSlide } from './slides/QuestionSlides';
import ConductorSlide from './slides/ConductorSlide';
import BackwardsSlide from './slides/BackwardsSlide';
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
    // 30-minute cut, order per SCRIPT.md. The SPF slides moved to the lightning deck (overhang-2026-lightning-spf).
    // Slide 12 closes the loop that slide 4 opens; slide 14 runs slide 2's loop backwards. Backups live in overhang-2026-backup.
    TitleSlide, AlignmentSlide, DraftingSlide,
    PolicyBenchSlide, PrimitivesSlide, BillSlide, RulesSlide,
    ModelSlide, IndicatorSlide, AudienceSlide, AgentSlide, ConductorSlide, ClosingLoopSlide, BackwardsSlide, DiscussionSlide, EndSlide,
  ],
};
