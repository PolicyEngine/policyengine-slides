import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import CoverSlide from './slides/CoverSlide';
import EndSlide from './slides/EndSlide';

export const appam2026Config: SlideshowConfig = {
  id: 'appam-2026',
  title: 'PolicyEngine for state policy research',
  description:
    'Max Ghenis on the APPAM 2026 roundtable "State Policy Impacts on Family Resources: Tools to Improve Policy Analysis".',
  date: '2026-11-05',
  location: 'APPAM 2026, Boston',
  footerText: 'PolicyEngine for state policy research · APPAM · November 5, 2026',
  speakers: [speakers['max-ghenis']],
  slides: [CoverSlide, EndSlide],
};
