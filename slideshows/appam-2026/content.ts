import axiomRun from './data/axiom_ga_3612.json';
import charts from './data/charts.json';
import instrumentRun from './data/simulated_instrument.json';
import interactionRun from './data/interaction.json';
import reformRun from './data/massachusetts_reform.json';
import stateBaselineRun from './data/state_baseline.json';

export type StateRow = (typeof charts.cross_section)[number];

export const crossSection = charts.cross_section;
export const lowest = crossSection[0];
export const median = crossSection[Math.floor(crossSection.length / 2)];
export const highest = crossSection[crossSection.length - 1];

export const headlineEarnings = charts.headline_earnings;
export const family = charts.family;
export const childCareBill = family.child_care_per_month * 12;
export const modelVersion = charts.policyengine_us_version;
export const modelCommit = charts.policyengine_us_commit.slice(0, 7);

export const spreads = charts.spreads;
export const programLines = charts.lines_by_program;
export const sweepEarnings = charts.sweep_earnings;
export const sweep = charts.sweep;
export const cliffs = charts.cliffs;
export const medianRates = charts.emtr;

export const cliffRanking = charts.cliff_ranking;
export const largestCliff = cliffRanking[0];

function largestLoss(changes: Record<string, number | undefined>) {
  const losses = Object.entries(changes).filter(
    ([key]) => !['earnings', 'net_resources', 'child_care_bill'].includes(key),
  );
  return losses.reduce((a, b) => ((b[1] ?? 0) < (a[1] ?? 0) ? b : a))[0];
}

export const subsidyDrivenCliffs = cliffRanking.filter(
  (cliff) => largestLoss(cliff.changes) === 'child_care_subsidy',
).length;

export function spreadAt(earnings: number) {
  const row = spreads.find((spread) => spread.earnings === earnings);
  if (!row) throw new Error(`No spread at ${earnings}`);
  return row;
}

export function medianRateAt(earnings: number) {
  const row = medianRates.find((rate) => rate.earnings === earnings);
  if (!row) throw new Error(`No rate at ${earnings}`);
  return row.median;
}

const withSubsidy = interactionRun.with_subsidy;
const withoutSubsidy = interactionRun.without_subsidy;

export const interaction = {
  subsidy: withSubsidy.child_care_subsidy,
  snapChange: withSubsidy.snap - withoutSubsidy.snap,
  netChange: withSubsidy.net_resources - withoutSubsidy.net_resources,
};

function instrumentLine(key: 'snap_eligible_share' | 'child_medicaid_chip_share', label: string) {
  const values = instrumentRun.rows
    .map((row) => ({ code: row.state, value: row[key] }))
    .sort((a, b) => a.value - b.value);
  return { key, label, values };
}

export const instrument = {
  year: instrumentRun.year,
  households: instrumentRun.households,
  people: instrumentRun.people,
  rows: instrumentRun.rows,
  lines: [
    instrumentLine('snap_eligible_share', 'SNAP eligibility'),
    instrumentLine('child_medicaid_chip_share', 'Child Medicaid or CHIP eligibility'),
  ],
};

const massachusettsBaseline = stateBaselineRun.rows.find((row) => row.state === 'MA');
if (!massachusettsBaseline) throw new Error('No Massachusetts baseline');

export const massachusetts = {
  current: reformRun.current,
  reformed: reformRun.reformed,
  cost: reformRun.state_cost,
  householdGain: reformRun.household_gain,
  gainingShare: reformRun.households_gaining_share,
  anyHouseholdLoses: reformRun.any_household_loses,
  gapReduction: reformRun.baseline_poverty_gap - reformRun.reformed_poverty_gap,
  records: reformRun.household_records,
  effectiveHouseholds: Math.round(reformRun.effective_households),
  peopleCrossingThreshold: reformRun.people_crossing_threshold,
  childPoverty: [reformRun.baseline_child_poverty, reformRun.reformed_child_poverty],
  childRateChange: 100 * (reformRun.baseline_child_poverty - reformRun.reformed_child_poverty),
  modelChildRate: massachusettsBaseline.child_spm_percent,
  censusChildRate: massachusettsBaseline.census_percent,
};

const effectiveSamples = stateBaselineRun.rows
  .map((row) => row.effective_households_with_children)
  .sort((a, b) => a - b);
const censusGaps = stateBaselineRun.rows.map((row) =>
  Math.abs(row.child_spm_percent - row.census_percent),
);

export const stateBaseline = {
  rows: stateBaselineRun.rows,
  medianEffective: Math.round(effectiveSamples[Math.floor(effectiveSamples.length / 2)]),
  meanCensusGap: censusGaps.reduce((sum, gap) => sum + gap, 0) / censusGaps.length,
  beyondCensusMargin: stateBaselineRun.rows.filter(
    (row, i) => censusGaps[i] > row.census_margin,
  ).length,
  modelExceedsCensus: stateBaselineRun.rows.filter(
    (row) => row.child_spm_percent > row.census_percent,
  ).length,
};

export const axiomEngineVersion = axiomRun.engine.engine_version;

const DEDUCTION_KEY = 'us-ga:policies/dfcs/snap/3612#earned_income_deduction';

function axiomDeduction(index: number) {
  const outputs = axiomRun.results[index].stdout?.results[0].outputs;
  const output = outputs?.[DEDUCTION_KEY as keyof typeof outputs] as
    | { value: { value: string } }
    | undefined;
  if (!output) throw new Error(`No deduction in Axiom result ${index}`);
  return Number(output.value.value);
}

export const axiomRuns = {
  monthlyEarnings: Number(axiomRun.monthly_earnings),
  onTime: axiomDeduction(0),
  late: axiomDeduction(1),
  beforeEffectiveDate: axiomRun.results[2],
};

export function usd(value: number) {
  const sign = value < 0 ? '−' : '';
  return `${sign}$${Math.abs(Math.round(value)).toLocaleString('en-US')}`;
}

export function usdCents(value: number) {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export function millions(value: number) {
  return `$${Math.round(value / 1_000_000)} million`;
}

export function percent(share: number) {
  return `${(share * 100).toFixed(1)}%`;
}
