'use client';

import { harness } from '../text';
import PieceCards from './PieceCards';

/** The five pieces again, as headings and icons only. */
export default function HarnessSlide() {
  return <PieceCards title={harness.title} cards={harness.pieces.map((tag) => ({ tag }))} />;
}
