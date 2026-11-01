import axiomRun from './data/axiom_ga_3612.json';
import charts from './data/charts.json';
import interactionRun from './data/interaction.json';

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

export const largestCliff = cliffs.reduce((a, b) => (b.drop > a.drop ? b : a));

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

export function percent(share: number) {
  return `${(share * 100).toFixed(1)}%`;
}
