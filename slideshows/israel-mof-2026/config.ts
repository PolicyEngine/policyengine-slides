import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import { iariw2026Config } from '@/slideshows/iariw-2026/config';
import IariwTitleSlide from '@/slideshows/iariw-2026/slides/TitleSlide';
import CertificationLadderSlide from '@/slideshows/iariw-2026/slides/CertificationLadderSlide';
import TitleSlide from './slides/TitleSlide';
import {
  IsraelDividerSlide,
  IsraelEncodedSlide,
  IsraelExampleSlide,
  IsraelNextSlide,
} from './slides/IsraelSlides';

// The IARIW 2026 deck, re-titled for the Israel Ministry of Finance call,
// with an Israel section after the Axiom section.
const base = iariw2026Config.slides;
const titleIndex = base.indexOf(IariwTitleSlide);
const axiomEnd = base.indexOf(CertificationLadderSlide);
if (titleIndex !== 0 || axiomEnd < 0) {
  throw new Error('israel-mof-2026: IARIW slide order changed; update config');
}

const slides = [
  TitleSlide,
  ...base.slice(1, axiomEnd + 1),
  IsraelDividerSlide,
  IsraelEncodedSlide,
  IsraelExampleSlide,
  IsraelNextSlide,
  ...base.slice(axiomEnd + 1),
];

export const israelMof2026Config: SlideshowConfig = {
  id: 'israel-mof-2026',
  title: 'From open models to executable law: Israel',
  description:
    'PolicyEngine and Axiom, with Israeli income tax and National Insurance law encoded as executable code',
  date: '2026-10-14',
  location: "Chief Economist's Department, Israel Ministry of Finance (video call)",
  footerText: 'PolicyEngine · Israel Ministry of Finance · October 2026',
  partnerLogo: iariw2026Config.partnerLogo,
  speakers: [speakers['max-ghenis']],
  private: false,
  slides,
};
