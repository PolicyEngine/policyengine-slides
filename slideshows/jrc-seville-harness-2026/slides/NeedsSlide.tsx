'use client';

import { needs } from '../text';
import PieceCards from './PieceCards';

/** The five pieces a policymaker needs from an analyst, as five cards in a row. */
export default function NeedsSlide() {
  return <PieceCards title={needs.title} cards={needs.cards} />;
}
