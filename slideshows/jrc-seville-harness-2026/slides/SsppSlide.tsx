'use client';

import Shot from './Shot';
import { Frame } from '../deck';
import { sspp } from '../text';

/**
 * Responses, slide 3: predicting new studies before they report, as the SSPP's open-surveys page alone. The shot
 * stops after the first two surveys, so its rows read larger than they would in a shot of the whole page.
 */
const SHOT = { src: '/images/jrc-seville-harness-2026/sspp-bulletin-top.png', width: 1600, height: 597 };

export default function SsppSlide() {
  return (
    <Frame title={sspp.title}>
      <Shot src={SHOT.src} width={SHOT.width} height={SHOT.height} alt={sspp.alt} />
    </Frame>
  );
}
