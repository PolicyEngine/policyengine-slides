'use client';

import Shot from './Shot';
import { Frame } from '../deck';
import { dashboard } from '../text';

/** The public calibration dashboard's calibration map, alone. */
// The map is sized by weighted target error, so it shows where the release misses its targets. The screenshot was
// taken in a 1640x700 CSS window so the map is wide enough for a 1312x465 body. It hides the page's one line that
// names the parent build by an internal id.
const MAP = { src: '/images/jrc-seville-harness-2026/dashboard-calibration-error-map.png', width: 2708, height: 1084 };

export default function DashboardSlide() {
  return (
    <Frame title={dashboard.title}>
      <Shot src={MAP.src} width={MAP.width} height={MAP.height} alt={dashboard.mapAlt} />
    </Frame>
  );
}
