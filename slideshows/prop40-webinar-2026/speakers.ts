import { speakers } from '@/lib/speakers';
import { SpeakerInfo } from '@/lib/types';

/** The three presenters, in the order the webinar listing names them. */
export const WEBINAR_SPEAKERS: SpeakerInfo[] = [
  { ...speakers['max-ghenis'], title: 'CEO, PolicyEngine' },
  { ...speakers['david-trimmer'], title: 'Research Analyst, PolicyEngine' },
  speakers['fernando-hoces-de-la-guardia'],
];
