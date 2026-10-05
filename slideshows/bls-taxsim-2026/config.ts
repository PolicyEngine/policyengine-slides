import type { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import { blsSlideComponents } from './slides';

export const blsTaxsim2026Config: SlideshowConfig = {
  id: 'bls-taxsim-2026',
  title: 'BLS TAXSIM seminar',
  description: 'A 60-minute talk on the TAXSIM emulator, validation, and tax and benefit imputation for the Consumer Expenditure Surveys.',
  date: '2026-10-08',
  location: 'Bureau of Labor Statistics, Suitland',
  footerText: 'BLS · October 8, 2026',
  speakers: [speakers['max-ghenis'], speakers['pavel-makarchuk'], speakers['david-trimmer']],
  slides: blsSlideComponents,
};
