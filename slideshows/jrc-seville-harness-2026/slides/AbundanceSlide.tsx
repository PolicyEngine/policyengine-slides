'use client';

import PieceCards from './PieceCards';
import { abundance } from '../text';

/** What abundant policy analysis could look like, one card per piece of the stack, in NeedsSlide's format. */
export default function AbundanceSlide() {
  return <PieceCards title={abundance.title} cards={abundance.cards} />;
}
