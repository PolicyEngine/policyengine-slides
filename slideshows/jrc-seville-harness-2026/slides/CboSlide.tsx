'use client';

import Shot from './Shot';
import { Frame } from '../deck';
import { cbo } from '../text';

/**
 * Responses, slide 1: CBO's 2012 Table 1, the labor-supply elasticities our US model starts from, as the table alone.
 */
const SHOT = { src: '/images/jrc-seville-harness-2026/cbo-2012-table-1.png', width: 2887, height: 1822 };

export default function CboSlide() {
  return (
    <Frame title={cbo.title}>
      <Shot src={SHOT.src} width={SHOT.width} height={SHOT.height} alt={cbo.alt} />
    </Frame>
  );
}
