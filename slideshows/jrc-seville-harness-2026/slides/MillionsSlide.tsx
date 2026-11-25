'use client';

import { Statement } from '../deck';
import { millions } from '../text';

/** The turn to the close: what changes when millions of people can run open, tested policy models. */
export default function MillionsSlide() {
  return <Statement title={millions.title} sub={millions.lead} />;
}
