import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  axiomRuns,
  childCareBill,
  cliffRanking,
  cliffs,
  crossSection,
  headlineEarnings,
  highest,
  instrument,
  interaction,
  largestCliff,
  lowest,
  massachusetts,
  medianRateAt,
  millions,
  modelVersion,
  percent,
  programLines,
  spreadAt,
  spreads,
  stateBaseline,
  subsidyDrivenCliffs,
  sweep,
  sweepEarnings,
  usd,
  usdCents,
} from './content';
import nationalCheck from './data/massachusetts_national_check.json';
import { SERIES } from './slides/FamilyChart';

const read = (path: string) => readFileSync(join(__dirname, path), 'utf8');
const family = JSON.parse(read('data/family.json'));
const census = JSON.parse(read('data/census_child_spm.json'));
const notes = read('SPEAKER-NOTES.md');
const ledger = read('EVIDENCE.md');
const webinarMap = read('../cpid-webinar-2026/slides/StateChildPovertyMapSlide.tsx');

const NET_OF_THE_LOSS = ['earnings', 'net_resources', 'child_care_bill'];

const lineKeys = [
  'earnings',
  'snap',
  'wic',
  'tanf',
  'child_care_subsidy',
  'other_benefits',
  'federal_taxes',
  'state_taxes',
  'child_care_bill',
] as const;

// Each of the nine rounded lines can sit up to 50 cents from its true value.
const ROUNDING = 5;

describe('family cross section', () => {
  it('covers every state once, sorted by net resources', () => {
    expect(new Set(crossSection.map((row) => row.code)).size).toBe(51);
    const net = crossSection.map((row) => row.net_resources);
    expect(net).toEqual([...net].sort((a, b) => a - b));
    expect(lowest.net_resources).toBe(net[0]);
    expect(highest.net_resources).toBe(net[50]);
  });

  it('adds its lines up to net resources in every state', () => {
    for (const row of crossSection) {
      const total = lineKeys.reduce((sum, key) => sum + row[key], 0);
      expect(Math.abs(total - row.net_resources)).toBeLessThanOrEqual(ROUNDING);
    }
  });

  it('stacks every chart segment to the height of net resources', () => {
    for (const row of crossSection) {
      const stack = SERIES.reduce((sum, series) => sum + series.value(row), 0);
      expect(Math.abs(stack - row.net_resources)).toBeLessThanOrEqual(ROUNDING);
    }
  });

  it('keeps each subsidy between zero and the bill', () => {
    for (const row of crossSection) {
      expect(row.child_care_subsidy).toBeGreaterThanOrEqual(0);
      expect(row.child_care_subsidy).toBeLessThanOrEqual(childCareBill);
    }
  });

  it('matches the source sweep at the headline earnings', () => {
    const index = family.earnings.indexOf(headlineEarnings);
    for (const row of crossSection) {
      const source = family.states[row.code];
      for (const key of [...lineKeys, 'net_resources'] as const) {
        expect(Math.abs(row[key] - source[key][index])).toBeLessThanOrEqual(0.5);
      }
    }
  });
});

describe('derived chart data', () => {
  it('takes each spread from the highest and lowest state in the source', () => {
    for (const spread of spreads) {
      const index = family.earnings.indexOf(spread.earnings);
      const net = Object.values<{ net_resources: number[] }>(family.states).map(
        (state) => state.net_resources[index],
      );
      expect(Math.abs(spread.low - Math.min(...net))).toBeLessThanOrEqual(0.5);
      expect(Math.abs(spread.high - Math.max(...net))).toBeLessThanOrEqual(0.5);
    }
  });

  it('keeps a value for every state at every sweep point', () => {
    expect(Object.keys(sweep)).toHaveLength(51);
    for (const values of Object.values(sweep)) {
      expect(values).toHaveLength(sweepEarnings.length);
    }
  });

  it('ranks all 51 states by their largest one-step fall in the sweep', () => {
    expect(cliffRanking).toHaveLength(51);
    for (const cliff of cliffRanking) {
      const series = sweep[cliff.code as keyof typeof sweep];
      const falls = series.slice(1).map((value, i) => series[i] - value);
      expect(cliff.after - cliff.before).toBe(500);
      expect(Math.abs(Math.max(...falls) - cliff.drop)).toBeLessThanOrEqual(1);
    }
    const drops = cliffRanking.map((cliff) => cliff.drop);
    expect(drops).toEqual([...drops].sort((a, b) => b - a));
    expect(largestCliff.drop).toBe(drops[0]);
    expect(cliffs).toEqual(cliffRanking.slice(0, 3));
  });

  it('counts the states where losing the subsidy costs the family most', () => {
    const lossAt = (lines: Record<string, number[]>, before: number, after: number) => {
      const i = family.earnings.indexOf(before);
      const j = family.earnings.indexOf(after);
      const entries = Object.entries(lines).filter(([key]) => !NET_OF_THE_LOSS.includes(key));
      return entries.map(([key, line]) => [key, line[j] - line[i]] as const);
    };
    const driven = cliffRanking.filter((cliff) => {
      const changes = lossAt(family.states[cliff.code], cliff.before, cliff.after);
      return changes.reduce((a, b) => (b[1] < a[1] ? b : a))[0] === 'child_care_subsidy';
    });
    expect(subsidyDrivenCliffs).toBe(driven.length);
    for (const cliff of cliffs) expect(driven).toContainEqual(cliff);
  });

  it('recomputes each median marginal rate from the sweep', () => {
    for (const earnings of [30_000, 60_000]) {
      const i = family.earnings.indexOf(earnings);
      const rates = Object.values<{ net_resources: number[] }>(family.states)
        .map((state) => 1 - (state.net_resources[i + 1] - state.net_resources[i]) / 500)
        .sort((a, b) => a - b);
      expect(medianRateAt(earnings)).toBeCloseTo(rates[25], 3);
    }
  });

  it('sorts every line of the rug plot and covers 51 states', () => {
    for (const line of programLines) {
      const values = line.values.map((entry) => entry.value);
      expect(values).toHaveLength(51);
      expect(values).toEqual([...values].sort((a, b) => a - b));
    }
  });
});

describe('Texas interaction', () => {
  it('explains the change in net resources with the subsidy and SNAP', () => {
    const total = interaction.subsidy + interaction.snapChange;
    expect(Math.abs(total - interaction.netChange)).toBeLessThanOrEqual(1);
  });

  it('shrinks SNAP as the subsidy grows', () => {
    expect(interaction.subsidy).toBeGreaterThan(0);
    expect(interaction.snapChange).toBeLessThan(0);
  });
});

describe('Axiom run', () => {
  it('pays 20% of earnings on time and nothing when reported late', () => {
    expect(axiomRuns.onTime).toBeCloseTo(axiomRuns.monthlyEarnings * 0.2, 6);
    expect(axiomRuns.late).toBe(0);
  });

  it('refuses a month before the effective date', () => {
    expect(axiomRuns.beforeEffectiveDate.exit_code).not.toBe(0);
    expect(axiomRuns.beforeEffectiveDate.stderr).toContain('2019-11-01');
  });
});

describe('fixed-sample microdata run', () => {
  const STATE_COUNT = 51;
  const CENT = 0.01;

  it('reports every state, with no failed run', () => {
    const codes = instrument.rows.map((row) => row.state);
    expect(new Set(codes).size).toBe(STATE_COUNT);
    for (const row of instrument.rows) expect(row).not.toHaveProperty('error');
    expect(instrument.households).toBe(3_000);
  });

  it('runs each state under that state’s own rules', () => {
    const tax = (code: string) => {
      const row = instrument.rows.find((candidate) => candidate.state === code);
      if (!row) throw new Error(`No run for ${code}`);
      return row.state_income_tax;
    };
    for (const row of instrument.rows) expect(row.state_check).toBe(row.state);
    for (const code of ['AK', 'FL', 'TX']) expect(tax(code)).toBe(0);
    for (const code of ['AL', 'CA']) expect(tax(code)).toBeGreaterThan(0);
  });

  it('keeps the same earnings in every state, because only the state changes', () => {
    const earnings = instrument.rows.map((row) => row.earnings_check);
    expect(Math.max(...earnings) - Math.min(...earnings)).toBeLessThan(CENT);
  });

  it('holds each share between zero and one, sorted for the rug plot', () => {
    for (const line of instrument.lines) {
      const values = line.values.map((entry) => entry.value);
      expect(values).toHaveLength(STATE_COUNT);
      expect(values).toEqual([...values].sort((a, b) => a - b));
      expect(values[0]).toBeGreaterThanOrEqual(0);
      expect(values[STATE_COUNT - 1]).toBeLessThanOrEqual(1);
    }
  });
});

describe('Massachusetts reform', () => {
  it('costs money, helps some households and hurts none', () => {
    expect(massachusetts.cost).toBeGreaterThan(0);
    expect(massachusetts.gainingShare).toBeGreaterThan(0);
    expect(massachusetts.gainingShare).toBeLessThan(1);
    expect(massachusetts.anyHouseholdLoses).toBe(false);
  });

  it('closes no more of the poverty gap than it spends', () => {
    expect(massachusetts.gapReduction).toBeGreaterThan(0);
    expect(massachusetts.gapReduction).toBeLessThanOrEqual(massachusetts.cost);
  });

  it('lowers the child rate because records cross the threshold', () => {
    expect(massachusetts.peopleCrossingThreshold).toBeGreaterThan(0);
    expect(massachusetts.childRateChange).toBeGreaterThan(0);
  });

  it('runs on the file policyengine.py uses for state regions', () => {
    const baselines = JSON.parse(read('data/state_baseline.json'));
    const run = JSON.parse(read('data/massachusetts_reform.json'));
    expect(run.dataset).toContain('populace_us_2024_acs_local.h5');
    expect(baselines.dataset).toBe(run.dataset);
    expect(run.policyengine_us_version).toBe(modelVersion);
    expect(baselines.policyengine_us_version).toBe(modelVersion);
  });

  it('scores the same on a default-file state cut as on a national run', () => {
    const run = JSON.parse(read('data/massachusetts_reform_default.json'));
    expect(run.household_gain).toBe(nationalCheck.household_gain);
    expect(run.households_gaining_share).toBeCloseTo(nationalCheck.households_gaining_share, 6);
    expect(run.baseline_child_poverty).toBeCloseTo(nationalCheck.baseline_child_poverty, 6);
    expect(run.baseline_poverty).toBeCloseTo(nationalCheck.baseline_poverty, 6);
  });

  it('costs the state what households gain', () => {
    expect(Math.abs(massachusetts.cost - massachusetts.householdGain)).toBeLessThan(1e-4 * massachusetts.cost);
  });
});

describe('state baselines', () => {
  it('covers every state, with rates in range and effective samples below records', () => {
    expect(new Set(stateBaseline.rows.map((row) => row.state)).size).toBe(51);
    for (const row of stateBaseline.rows) {
      expect(row.child_spm_percent).toBeGreaterThanOrEqual(0);
      expect(row.child_spm_percent).toBeLessThanOrEqual(100);
      expect(row.effective_households_with_children).toBeLessThanOrEqual(row.effective_households);
      expect(row.census_margin).toBeGreaterThan(0);
    }
  });

  it('copies Census’s rates from the table the webinar deck maps', () => {
    expect(census.rows).toHaveLength(51);
    for (const row of census.rows) {
      expect(webinarMap).toContain(`st: '${row.state}', rate: ${row.rate.toFixed(1)}, moe: ${row.moe.toFixed(1)}`);
    }
  });

  it('keeps the direction of the gap with its size', () => {
    const differences = stateBaseline.rows.map((row) => row.child_spm_percent - row.census_percent);
    expect(differences.filter((value) => value > 0)).toHaveLength(stateBaseline.modelExceedsCensus);
    const net = differences.reduce((sum, value) => sum + value, 0) / differences.length;
    expect(net).toBeGreaterThan(0);
    expect(net).toBeLessThanOrEqual(stateBaseline.meanCensusGap);
  });
});

describe('typed figures', () => {
  const name = (code: string) => {
    const row = crossSection.find((candidate) => candidate.code === code);
    if (!row) throw new Error(`No state ${code}`);
    return row.name;
  };
  const endpoints = instrument.lines.flatMap((line) => {
    const first = line.values[0];
    const last = line.values[line.values.length - 1];
    return [
      `${percent(first.value)} in ${name(first.code)}`,
      `${percent(last.value)} in ${name(last.code)}`,
    ];
  });
  const shared = [
    usd(highest.net_resources),
    usd(lowest.net_resources),
    usd(spreadAt(30_000).spread),
    usd(spreadAt(60_000).spread),
    usd(interaction.subsidy),
    usd(-interaction.snapChange),
    usd(interaction.netChange),
    usd(largestCliff.drop),
    `${subsidyDrivenCliffs} of 51 states`,
    percent(medianRateAt(30_000)),
    percent(medianRateAt(60_000)),
    percent(massachusetts.gainingShare),
    millions(massachusetts.gapReduction),
    `${massachusetts.modelChildRate.toFixed(1)}%`,
    `${massachusetts.censusChildRate.toFixed(1)}%`,
    `${stateBaseline.beyondCensusMargin} of 51 jurisdictions`,
    `${stateBaseline.meanCensusGap.toFixed(1)} points`,
    `${massachusetts.childRateChange.toFixed(1)} points`,
    `about ${massachusetts.effectiveHouseholds}`,
    ...endpoints,
  ];

  it('match the data in the speaker notes', () => {
    for (const figure of [
      ...shared,
      usd(cliffs[2].drop),
      millions(massachusetts.cost),
      `about ${stateBaseline.medianEffective} effective households`,
      usdCents(axiomRuns.onTime),
      usdCents(axiomRuns.monthlyEarnings),
    ]) {
      expect(notes).toContain(figure);
    }
  });

  it('match the data in the evidence ledger', () => {
    for (const figure of [
      ...shared,
      `${stateBaseline.modelExceedsCensus} of 51 jurisdictions`,
      `median of ${stateBaseline.medianEffective}`,
    ]) {
      expect(ledger).toContain(figure);
    }
  });
});
