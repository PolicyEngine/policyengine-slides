/** The calculator's Berkeley-to-Hoover bridge, as the live page computed it on
 * October 30, 2026, the day of the webinar.
 *
 * Source: PolicyEngine/california-wealth-tax at ff379b2 ("Update Forbes data
 * (2026-10-30)"), Forbes data fetched 2026-10-30 12:10 UTC. Computed with the
 * repo's own code, the way app/page.js does: selectSnapshotRows on
 * data/billionaires_live.json and data/roster_valuations.json, scoreScenario,
 * then scenarioBridge from BERKELEY_ASSUMPTIONS to HOOVER_ASSUMPTIONS
 * (lib/bridge.js). The same harness reproduces paper/paper_numbers.json
 * exactly on the paper's October 23 snapshot.
 *
 * Every value is a net present value as of 2026, in billions of dollars. The
 * numbers move with the daily Forbes data; rerun the computation before
 * reusing them on a later date. */
export const BRIDGE_DATA_DATE = 'October 30, 2026';

export const BRIDGE_START = { label: 'Berkeley assumptions', valueB: 100.1 };
export const BRIDGE_END = { label: 'Hoover assumptions', valueB: -34.4 };

/** Shapley values, largest first. min and max are the smallest and largest
 * marginal effect of the step across every order of the steps.
 *
 * The calculator calls the fifth step "Who pays the cohort's income tax". This
 * deck names what moves it: on October 30 the filings and wealth allocations
 * score the same under both presets, so the whole step comes from the cohort's
 * income tax of $4.3 billion against $4.55 billion a year. */
export const BRIDGE_STEPS: { label: string; valueB: number; minB: number; maxB: number }[] = [
  { label: "Count movers' future income tax", valueB: -66.4, minB: -68.3, maxB: -64.5 },
  { label: 'Legal challenges to collection', valueB: -52.8, minB: -59.8, maxB: -46.3 },
  { label: 'Residency: documented departures', valueB: -21.2, minB: -26.5, maxB: -16.5 },
  { label: 'Avoidance and valuation haircut', valueB: 7.1, minB: 3.4, maxB: 11.2 },
  { label: "Size of the cohort's income tax", valueB: -1.9, minB: -3.8, maxB: 0 },
  { label: 'Real estate exclusion and growth to valuation', valueB: 0.5, minB: 0.2, maxB: 0.9 },
];

/** The working paper's figures on its October 23, 2026 snapshot, for scale.
 * Most of the move in the Berkeley total came on October 30, when Forbes marked
 * Larry Page down $31.5 billion and Sergey Brin down $28.9 billion. */
export const PAPER_BRIDGE = { date: 'October 23, 2026', startB: 103.2, endB: -34.3 };
