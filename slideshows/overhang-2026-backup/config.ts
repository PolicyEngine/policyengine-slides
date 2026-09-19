import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import { BacktestSlide } from '@/slideshows/overhang-2026/slides/OpeningSlides';
import { WhatIfEveryBillSlide, WhatIfEverySeriesSlide, CrossScaleSlide, HowWeGetThereSlide } from '@/slideshows/overhang-2026/slides/QuestionSlides';
import CboScaleSlide from '@/slideshows/cbo-2026/slides/CboScaleSlide';
import ScaleOpportunitySlide from '@/slideshows/cbo-2026/slides/ScaleOpportunitySlide';
import EverySeriesForecastSlide from '@/slideshows/cbo-2026/slides/EverySeriesForecastSlide';
import ScaleAccuracySlide from '@/slideshows/cbo-2026/slides/ScaleAccuracySlide';

// Backup slides for the Overhang session's objections; the talk deck is overhang-2026.
export const overhang2026BackupConfig: SlideshowConfig = {
  id: 'overhang-2026-backup',
  title: 'Law is an alignment problem: backup slides',
  description: 'Backup slides for questions after "Law is an alignment problem" at The Overhang 2026.',
  date: '2026-09-19',
  location: 'The Overhang 2026, American Geophysical Union, Washington DC',
  footerText: 'Max Ghenis · The Overhang · September 2026 · Backup',
  speakers: [speakers['max-ghenis']],
  private: false,
  slides: [
    // The CBO scale series (about 1,000 public cost estimates a year, then 300k bills, then 10m series), for the scaling objection.
    CboScaleSlide,
    ScaleOpportunitySlide,
    EverySeriesForecastSlide,
    ScaleAccuracySlide,
    BacktestSlide,
    WhatIfEveryBillSlide,
    WhatIfEverySeriesSlide,
    CrossScaleSlide,
    HowWeGetThereSlide,
  ],
};
