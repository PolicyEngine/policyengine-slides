'use client';

import { Statement } from '../deck';
import { deliberation } from '../text';

/**
 * The last turn: abundant analysis still needs a democratic answer about goals. Title only: text.deliberation.lead is
 * not rendered.
 */
export default function DeliberationSlide() {
  return <Statement title={deliberation.title} />;
}
