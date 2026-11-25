import { IconArrowsShuffle, IconMessages, IconScale, IconTargetArrow, IconUsers, type Icon } from '@tabler/icons-react';

/** One icon per piece, in text.needs order: rules, data, responses, predictions, communication. */
export const PIECE_ICONS: Record<string, Icon> = {
  Rules: IconScale,
  Data: IconUsers,
  Responses: IconArrowsShuffle,
  Predictions: IconTargetArrow,
  Communication: IconMessages,
};
