import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  axiomRuns,
  childCareBill,
  cliffs,
  crossSection,
  headlineEarnings,
  highest,
  interaction,
  lowest,
  programLines,
  spreads,
  sweep,
  sweepEarnings,
} from './content';
import { SERIES } from './slides/FamilyChart';

const family = JSON.parse(readFileSync(join(__dirname, 'data/family.json'), 'utf8'));

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

  it('reports each cliff as the largest fall in that state, one step wide', () => {
    for (const cliff of cliffs) {
      const series = sweep[cliff.code as keyof typeof sweep];
      const falls = series.slice(1).map((value, i) => series[i] - value);
      expect(cliff.after - cliff.before).toBe(500);
      expect(Math.abs(Math.max(...falls) - cliff.drop)).toBeLessThanOrEqual(1);
      expect(cliff.changes.child_care_subsidy).toBeLessThan(0);
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
