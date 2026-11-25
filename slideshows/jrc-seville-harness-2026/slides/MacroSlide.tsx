'use client';

import Shot from './Shot';
import { Frame } from '../deck';
import { macro } from '../text';

/**
 * Responses, slide 4: the six macro models as the cards on our own site's models page. The site's cards stand in for
 * logos, which are restricted marks or do not exist.
 */
const SHOT = { src: '/images/jrc-seville-harness-2026/macro-models.png', width: 2208, height: 1054 };

export default function MacroSlide() {
  return (
    <Frame title={macro.title}>
      <Shot src={SHOT.src} width={SHOT.width} height={SHOT.height} alt={macro.alt} frame={false} />
    </Frame>
  );
}
