import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import { TitleSlide, AlignmentSlide, EndSlide } from '@/slideshows/overhang-2026/slides/OpeningSlides';
import { BillSlide, ModelSlide, AgentSlide, ClosingLoopSlide } from '@/slideshows/overhang-2026/slides/BillSlides';
import BackwardsSlide from '@/slideshows/overhang-2026/slides/BackwardsSlide';

// Five-minute lightning cut of the Overhang session (Sat 7:00-8:00 PM block, Volcano/Mountain). Script in LIGHTNING.md.
export const overhang2026LightningConfig: SlideshowConfig = {
  id: 'overhang-2026-lightning',
  title: 'What if every bill had a forecast?',
  description: 'Five-minute lightning talk: law as an alignment loop, one bill through the stack, a forecast the IRS will grade, and the loop run backwards.',
  date: '2026-09-19',
  location: 'The Overhang 2026 lightning talks, American Geophysical Union, Washington DC',
  footerText: 'Max Ghenis · The Overhang · September 2026',
  speakers: [speakers['max-ghenis']],
  private: false,
  slides: [
    TitleSlide,
    AlignmentSlide,
    BillSlide,
    ModelSlide,
    AgentSlide,
    ClosingLoopSlide,
    BackwardsSlide,
    EndSlide,
  ],
};
