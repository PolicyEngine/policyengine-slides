import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import { BacktestSlide } from '@/slideshows/overhang-2026/slides/OpeningSlides';
import { WhatIfEveryBillSlide, WhatIfEverySeriesSlide, CrossScaleSlide, HowWeGetThereSlide } from '@/slideshows/overhang-2026/slides/QuestionSlides';

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
    BacktestSlide,
    WhatIfEveryBillSlide,
    WhatIfEverySeriesSlide,
    CrossScaleSlide,
    HowWeGetThereSlide,
  ],
};
