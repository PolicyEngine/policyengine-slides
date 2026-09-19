import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import { BaselineSlide, GrowthSlide, BacktestSlide, EndSlide } from '@/slideshows/overhang-2026/slides/OpeningSlides';
import { ClosingLoopSlide } from '@/slideshows/overhang-2026/slides/BillSlides';
import { SpfTitleSlide } from '@/slideshows/overhang-2026/slides/LightningSlides';

// Alternative five-minute lightning talk: the Expectations results, with the Thesis scoreboard as the kicker. Script in LIGHTNING-SPF.md.
export const overhang2026LightningSpfConfig: SlideshowConfig = {
  id: 'overhang-2026-lightning-spf',
  title: 'How sure are the pros?',
  description: 'Five-minute lightning talk: 58 years of professional forecasters’ probability distributions, scored, and the same rule applied to AI agents.',
  date: '2026-09-19',
  location: 'The Overhang 2026 lightning talks, American Geophysical Union, Washington DC',
  footerText: 'Max Ghenis · The Overhang · September 2026',
  speakers: [speakers['max-ghenis']],
  private: false,
  slides: [
    SpfTitleSlide,
    BaselineSlide,
    GrowthSlide,
    BacktestSlide,
    ClosingLoopSlide,
    EndSlide,
  ],
};
