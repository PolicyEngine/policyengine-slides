import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import { BaselineSlide, GrowthSlide, EndSlide } from '@/slideshows/overhang-2026/slides/OpeningSlides';
import { SpfTitleSlide, AiGrowthStudiesSlide, SeriesQuestionSlide, SpfChartSlide, SpfRealizedSlide, SpfLoopSlide } from '@/slideshows/overhang-2026/slides/LightningSlides';

// Five-minute lightning talk: AI-growth studies, then a scorable series, then point estimates, bounds, the trend in
// uncertainty, the tail, the backtest, and the Thesis scoreboard as the kicker. Script in LIGHTNING-SPF.md.
export const overhang2026LightningSpfConfig: SlideshowConfig = {
  id: 'overhang-2026-lightning-spf',
  title: 'How sure are the pros?',
  description: 'Five-minute lightning talk: scoring 58 years of probabilistic economic forecasts, and the same rule applied to AI agents.',
  date: '2026-09-19',
  location: 'The Overhang 2026 lightning talks, American Geophysical Union, Washington DC',
  footerText: 'Max Ghenis · The Overhang · September 2026',
  speakers: [speakers['max-ghenis']],
  private: false,
  slides: [
    SpfTitleSlide,
    AiGrowthStudiesSlide,
    SeriesQuestionSlide,
    { component: SpfChartSlide, builds: 2 },
    BaselineSlide,
    GrowthSlide,
    SpfRealizedSlide,
    SpfLoopSlide,
    EndSlide,
  ],
};
