/** The calculator's Berkeley-to-Hoover bridge, as the live page computed it on
 * October 29, 2026, the day before the webinar.
 *
 * Source: PolicyEngine/california-wealth-tax at dde99c2 ("Update Forbes data
 * (2026-10-29)"), Forbes data fetched 2026-10-29 12:10 UTC. Computed with the
 * repo's own code, the way app/page.js does: selectSnapshotRows on
 * data/billionaires_live.json and data/roster_valuations.json, scoreScenario,
 * then scenarioBridge from BERKELEY_ASSUMPTIONS to HOOVER_ASSUMPTIONS
 * (lib/bridge.js). The same harness reproduces paper/paper_numbers.json
 * exactly on the paper's October 23 snapshot.
 *
 * Every value is a net present value as of 2026, in billions of dollars. The
 * numbers move with the daily Forbes data; rerun the computation before
 * reusing them on a later date. */
export const BRIDGE_DATA_DATE = 'October 29, 2026';

export const BRIDGE_START = { label: 'Berkeley assumptions', valueB: 103.1 };
export const BRIDGE_END = { label: 'Hoover assumptions', valueB: -34.1 };

/** Shapley values, largest first. min and max are the smallest and largest
 * marginal effect of the step across every order of the steps. */
export const BRIDGE_STEPS: { label: string; valueB: number; minB: number; maxB: number }[] = [
  { label: "Count movers' future income tax", valueB: -66.4, minB: -68.3, maxB: -64.5 },
  { label: 'Legal challenges to collection', valueB: -53.7, minB: -61.6, maxB: -46.4 },
  { label: 'Residency: documented departures', valueB: -23.2, minB: -29.4, maxB: -17.7 },
  { label: 'Avoidance and valuation haircut', valueB: 7.3, minB: 3.4, maxB: 11.6 },
  { label: "Who pays the cohort's income tax", valueB: -1.9, minB: -3.8, maxB: 0 },
  { label: 'Real estate exclusion and growth to valuation', valueB: 0.6, minB: 0.2, maxB: 1.0 },
];

/** The working paper's figures on its October 23, 2026 snapshot, for scale:
 * a week of Forbes data moved each end by about $0.1 to $0.2 billion. */
export const PAPER_BRIDGE = { date: 'October 23, 2026', startB: 103.2, endB: -34.3 };
