import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  alaska,
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
} from './content';
import nationalCheck from './data/massachusetts_national_check.json';
import { SERIES } from './slides/FamilyChart';
import { endLabel } from './slides/LineRugs';

const read = (path: string) => readFileSync(join(__dirname, path), 'utf8');
const family = JSON.parse(read('data/family.json'));
const census = JSON.parse(read('data/census_child_spm.json'));
const reformRun = JSON.parse(read('data/massachusetts_reform.json'));
const defaultReform = JSON.parse(read('data/massachusetts_reform_default.json'));
const pinnedReform = JSON.parse(read('data/massachusetts_reform_221.json'));
const precision = JSON.parse(read('data/massachusetts_precision.json'));
const defaultBaseline = JSON.parse(read('data/state_baseline_default.json'));
const localBaseline = JSON.parse(read('data/state_baseline.json'));
const samples = JSON.parse(read('data/effective_samples.json'));
const sampleColumns = JSON.parse(read('data/sample_columns.json'));
const slideCode = JSON.parse(read('data/slide_code_check.json'));
const wisconsin = JSON.parse(read('data/wisconsin_schedules.json'));
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

type BaselineRow = (typeof stateBaseline.rows)[number];
type SampleRow = {
  state: string;
  records: number;
  source_households: number;
  effective_records: number;
  effective_records_with_children: number;
  effective_households: number;
  effective_households_with_children: number;
  source_ids_on_both_spines?: number;
};

const medianOf = (values: number[]) =>
  [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];

function baselineSummary(rows: BaselineRow[]) {
  const gaps = rows.map((row) => row.child_spm_percent - row.census_percent);
  return {
    meanGap: gaps.reduce((sum, gap) => sum + Math.abs(gap), 0) / rows.length,
    exceedsCensus: gaps.filter((gap) => gap > 0).length,
    beyondMargin: rows.filter((row, i) => Math.abs(gaps[i]) > row.census_margin).length,
  };
}

function extreme(rows: SampleRow[], key: 'effective_households' | 'effective_households_with_children') {
  const sorted = [...rows].sort((a, b) => a[key] - b[key]);
  return [sorted[0], sorted[sorted.length - 1]].map((row) => ({
    state: row.state,
    value: Math.round(row[key]).toLocaleString('en-US'),
  }));
}

const groupQuartersMoves = stateBaseline.rows
  .map((row) => ({
    state: row.state,
    move: Math.abs(row.child_spm_percent - row.child_spm_percent_without_group_quarters),
  }))
  .sort((a, b) => b.move - a.move);

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

  it('prints the sweep’s step on slide 5', () => {
    const slide = read('slides/CliffsSlide.tsx');
    const step = usd(sweepEarnings[1] - sweepEarnings[0]);
    for (const phrase of [`after a ${step} raise`, `on a ${step} raise`]) expect(slide).toContain(phrase);
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

  it('counts DC apart from the states in the rug plot labels', () => {
    const line = (key: string) => programLines.find((entry) => entry.key === key)!.values;
    expect(endLabel(line('child_care_subsidy'), 18_000)).toBe('5 states and DC $18,000');
    expect(endLabel(line('child_care_subsidy'), 0)).toBe('NV, OH $0');
    expect(endLabel(line('federal_taxes'), 3_678)).toBe('5 states and DC $3,678');
    expect(endLabel(line('federal_taxes'), 4_263)).toBe('27 states $4,263');
    expect(endLabel(line('snap'), 0)).toBe('15 states $0');
  });

  it('names both states that tie at the low end of slide 7’s SNAP strip', () => {
    const [snap, medicaid] = instrument.lines.map((line) => line.values);
    const ends = (values: typeof snap) => [values[0].value, values[values.length - 1].value].map((value) => endLabel(values, value, percent));
    expect(ends(snap)).toEqual(['AR, TN 17.5%', 'MD 38.3%']);
    expect(ends(medicaid)).toEqual(['ID 39.8%', 'HI 66.1%']);
  });

  it('pays Alaska’s family the dividend and energy relief for each person', () => {
    const people = 1 + family.family.child_ages.length;
    expect(alaska.payments).toBe(people * (alaska.dividend + alaska.energyRelief));
    for (const text of [notes, ledger]) {
      for (const amount of [alaska.dividend, alaska.energyRelief, alaska.payments]) expect(text).toContain(usd(amount));
    }
  });
});

describe('links', () => {
  const finishPdf = read('analysis/finish_pdf.py');
  const HREF = /href[=:]\s*["']([^"']+)["']/g;
  const order = read('config.ts')
    .match(/slides:\s*\[([^\]]*)\]/)![1]
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean);
  const slideSource = (name: string) => read(`slides/${name}.tsx`);
  const deck = finishPdf.match(/^DECK = "([^"]+)"$/m)![1];
  const deckAddress = deck.replace(/^https:\/\//, '');
  const table = finishPdf.match(/^LINKS = \[([\s\S]*?)^\]/m)![1];
  const entries = [...table.matchAll(/\(\s*(\d+),\s*\([\d.,\s]+\),\s*(?:"([^"]+)"|DECK),?\s*\)/g)].map((match) => ({
    page: Number(match[1]),
    target: match[2] ?? deck,
  }));

  it('reads every entry in the PDF link table', () => {
    expect(Number(finishPdf.match(/^SLIDES = (\d+)$/m)![1])).toBe(order.length);
    expect(entries).toHaveLength(table.match(/"(?:https|mailto):|\bDECK\b/g)!.length);
  });

  it('links each target on the page of the slide that sends the live page there, and nowhere else', () => {
    const expected = order.flatMap((name, i) => {
      const source = slideSource(name);
      const targets = [...source.matchAll(HREF)].map((match) => match[1]);
      if (source.includes(`'${deckAddress}'`)) targets.push(deck);
      return targets.map((target) => `${i + 1} ${target}`);
    });
    const actual = entries.map(({ page, target }) => `${page} ${target}`);
    expect(new Set(actual)).toEqual(new Set(expected));
  });

  it('prints each address the PDF links to, on the slide that links to it', () => {
    const printed: Record<string, string[]> = {
      ParametersSlide: ['github.com/PolicyEngine/policyengine-us'],
      MicrodataSlide: ['policyengine.org/us/taxsim'],
      ReformSlide: ['policyengine.org/us/child-poverty-impact-dashboard'],
      AxiomSlide: ['axiom.org'],
      EndSlide: ['policyengine.org', 'github.com/PolicyEngine/policyengine-slides', 'max@policyengine.org', deckAddress],
    };
    for (const [slide, addresses] of Object.entries(printed)) {
      // Drop each link target, so an address counts only where the slide prints it.
      const text = slideSource(slide).replace(HREF, '');
      for (const address of addresses) {
        const escaped = address.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        expect(text).toMatch(new RegExp(`(?<![\\w@./:-])${escaped}(?![\\w/-])`));
      }
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
  it('deducts 20% of earnings', () => {
    expect(axiomRuns.deduction).toBeCloseTo(axiomRuns.monthlyEarnings * 0.2, 6);
  });

  it('refuses a month before the effective date', () => {
    expect(axiomRuns.beforeEffectiveDate.exit_code).not.toBe(0);
    expect(axiomRuns.beforeEffectiveDate.stderr).toContain('2019-11-01');
  });

  it('runs slide 3’s family at earnings where PolicyEngine US gives it Georgia SNAP', () => {
    const annual = axiomRuns.monthlyEarnings * 12;
    expect(spreads.map((spread) => spread.earnings)).toContain(annual);
    expect(family.states.GA.snap[family.earnings.indexOf(annual)]).toBeGreaterThan(0);
    expect(notes).toContain(`earning ${usd(annual)} a year`);
  });
});

describe('code printed on slides', () => {
  const python = (slide: string) => read(`slides/${slide}.tsx`).match(/const PYTHON = `([\s\S]*?)`;/)![1];
  // The check reads a copy of the sample saved under the survey's name, and runs two states, not 51.
  const RUN_DIFFERENTLY = ['people = pd.read_csv("your_survey.csv")', 'for fips in STATE_FIPS.values():  # all 51'];

  it('matches the check script line for line, apart from the sample file and the state loop', () => {
    const check = read('analysis/check_slide_code.py');
    for (const slide of ['MicrodataSlide', 'ReformSlide']) {
      const lines = python(slide)
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#') && !RUN_DIFFERENTLY.includes(line));
      expect(lines.length).toBeGreaterThan(3);
      for (const line of lines) expect(check, `${slide}: ${line}`).toContain(line);
    }
  });

  it('ends slide 6’s values at the amount slide 8 doubles', () => {
    const slide = read('slides/ParametersSlide.tsx');
    const values = [...slide.matchAll(/^ {2}(\d{4})-01-01: (\d+)$/gm)].map((match) => ({
      year: Number(match[1]),
      value: Number(match[2]),
    }));
    expect(values[values.length - 1].value).toBe(reformRun.current);
    expect(reformRun.reformed).toBe(2 * reformRun.current);
    for (const { year, value } of values.filter((entry) => entry.year >= 2023)) {
      for (const text of [slide, notes]) expect(text).toContain(`$${value} for ${year}`);
    }
  });

  it('shows the rate the Axiom engine applied', () => {
    const slide = read('slides/AxiomSlide.tsx');
    const rate = Number(slide.match(/formula: (\d+\.\d+)/)![1]);
    expect(axiomRuns.deduction).toBeCloseTo(axiomRuns.monthlyEarnings * rate, 6);
    expect(slide).toContain(`"${Math.round(rate * 100)}% earned income deduction"`);
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

  it('runs under the model version the slide prints', () => {
    const run = JSON.parse(read('data/simulated_instrument.json'));
    expect(run.policyengine_us_version).toBe(modelVersion);
  });

  it('matches what slide 7’s loop returns when run as printed', () => {
    expect(slideCode.policyengine_us_version).toBe(modelVersion);
    const states = Object.entries<number>(slideCode.slide_7_snap_eligible_share);
    expect(states.length).toBeGreaterThan(0);
    for (const [code, share] of states) {
      const row = instrument.rows.find((candidate) => candidate.state === code);
      expect(share).toBe(row?.snap_eligible_share);
    }
  });

  it('returns the same shares with the stored values it leaves out', () => {
    expect(sampleColumns.with_stored_values).toEqual(sampleColumns.inputs_only);
    expect(sampleColumns.draws).toBe(instrument.households);
    for (const [code, shares] of Object.entries<Record<string, number>>(sampleColumns.inputs_only)) {
      const row = instrument.rows.find((candidate) => candidate.state === code);
      expect(shares.snap_eligible_share).toBe(row?.snap_eligible_share);
      expect(shares.child_medicaid_chip_share).toBe(row?.child_medicaid_chip_share);
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

  it('matches what slide 8’s dictionary returns when run as printed', () => {
    expect(slideCode.slide_8_state_cost).toBe(massachusetts.cost);
  });

  it('compares the same records at the version policyengine.py pins', () => {
    expect(pinnedReform.policyengine_us_version).toBe('2.2.1');
    expect(pinnedReform.dataset).toBe(reformRun.dataset);
    expect(pinnedReform.household_records).toBe(reformRun.household_records);
    // We computed massachusetts_reform_221.json's Kish over records, not source households.
    expect(pinnedReform.effective_households).toBe(reformRun.effective_records);
  });

  it('computes its standard errors on the slide’s file, model version and parent-link fill', () => {
    expect(precision.dataset).toBe(reformRun.dataset);
    expect(precision.policyengine_us_version).toBe(modelVersion);
    expect(reformRun.parent_link_fill).toBe(0);
    expect(precision.parent_link_fill).toBe(reformRun.parent_link_fill);
    expect(precision.clusters).toBe('source household');
    expect(precision.child_rate_percent).toBeCloseTo(100 * reformRun.baseline_child_poverty, 4);
    expect(precision.child_rate_fall_points).toBeCloseTo(massachusetts.childRateChange, 4);
    expect(Math.abs(precision.poverty_gap_fall - massachusetts.gapReduction)).toBeLessThan(1e-4 * massachusetts.gapReduction);
    expect(Math.abs(precision.state_cost - massachusetts.cost)).toBeLessThan(1e-4 * massachusetts.cost);
    expect(precision.child_records_crossing).toBeLessThanOrEqual(massachusetts.peopleCrossingThreshold);
    expect(precision.households_with_a_child_crossing).toBeLessThanOrEqual(precision.child_records_crossing);
    expect(precision.source_households_with_a_child_crossing).toBeLessThanOrEqual(precision.households_with_a_child_crossing);
  });
});

describe('effective samples', () => {
  const files = [
    [samples.local_area, localBaseline],
    [samples.default, defaultBaseline],
  ];

  it('count each source household once, below the record-level samples', () => {
    for (const [file] of files) {
      expect(file.rows).toHaveLength(51);
      for (const row of file.rows as SampleRow[]) {
        expect(row.source_households).toBeLessThanOrEqual(row.records);
        expect(row.effective_households).toBeGreaterThanOrEqual(1);
        expect(row.effective_households).toBeLessThanOrEqual(row.source_households);
        expect(row.effective_households).toBeLessThanOrEqual(row.effective_records * (1 + 1e-9));
        expect(row.effective_households_with_children).toBeLessThanOrEqual(
          row.effective_records_with_children * (1 + 1e-9),
        );
      }
    }
  });

  it('reproduce the record-level samples of the simulation runs', () => {
    for (const [file, baseline] of files) {
      const runs = new Map<string, BaselineRow>(baseline.rows.map((row: BaselineRow) => [row.state, row]));
      for (const row of file.rows as SampleRow[]) {
        const run = runs.get(row.state);
        if (!run) throw new Error(`No simulation run for ${row.state}`);
        expect(row.records).toBe(run.records);
        expect(Math.abs(row.effective_records - run.effective_households)).toBeLessThan(
          1e-6 * run.effective_households,
        );
        expect(Math.abs(row.effective_records_with_children - run.effective_households_with_children)).toBeLessThan(
          1e-6 * run.effective_households_with_children,
        );
      }
    }
  });

  it('give slide 8 the Massachusetts figures of its own run', () => {
    const row = (samples.local_area.rows as SampleRow[]).find((sample) => sample.state === 'MA');
    if (!row) throw new Error('No Massachusetts sample');
    expect(samples.local_area.dataset).toBe(reformRun.dataset);
    expect(localBaseline.dataset).toBe(reformRun.dataset);
    expect(row.records).toBe(reformRun.household_records);
    expect(row.source_households).toBe(reformRun.source_households);
    for (const key of [
      'effective_records',
      'effective_records_with_children',
      'effective_households',
      'effective_households_with_children',
    ] as const) {
      expect(Math.abs(row[key] - reformRun[key])).toBeLessThan(1e-6 * reformRun[key]);
    }
  });
});

describe('state baselines', () => {
  it('covers every state, with rates in range and effective samples below records', () => {
    expect(new Set(stateBaseline.rows.map((row) => row.state)).size).toBe(51);
    for (const row of stateBaseline.rows) {
      expect(row.child_spm_percent).toBeGreaterThanOrEqual(0);
      expect(row.child_spm_percent).toBeLessThanOrEqual(100);
      expect(row.effective_households).toBeLessThanOrEqual(row.records);
      expect(row.effective_households_with_children).toBeLessThanOrEqual(row.records);
      expect(row.census_margin).toBeGreaterThan(0);
    }
  });

  it('matches microcosm#1445 outside the states its parent-link fill moves', () => {
    const rates = read('data/microcosm_1445_rates.csv')
      .trim()
      .split('\n')
      .slice(1)
      .map((line) => line.split(','));
    expect(rates).toHaveLength(51);
    const moves = new Map<string, number>();
    for (const [state, rate] of rates) {
      const row = stateBaseline.rows.find((candidate) => candidate.state === state);
      if (!row) throw new Error(`No baseline for ${state}`);
      const move = Math.abs(row.child_spm_percent - Number(rate));
      if (move >= 1e-6) moves.set(state, move);
    }
    expect([...moves.keys()].sort()).toEqual(['CA', 'DE', 'MO']);
    expect(ledger).toContain(`to within 0.000001 points in ${51 - moves.size} of 51 jurisdictions`);
    expect(ledger).toContain(`California moves by ${moves.get('CA')?.toFixed(2)} points`);
    expect(ledger).toContain(`Delaware by ${moves.get('DE')?.toFixed(3)}`);
    expect(ledger).toContain(`Missouri by ${moves.get('MO')?.toFixed(5)}`);
  });

  it('moves every rate by little when it leaves out group quarters', () => {
    expect(groupQuartersMoves).toHaveLength(51);
    expect(groupQuartersMoves[0].move).toBeLessThan(0.05);
    expect(groupQuartersMoves[0].move).toBeGreaterThan(0);
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
    `${subsidyDrivenCliffs} of 51 jurisdictions`,
    percent(medianRateAt(30_000)),
    percent(medianRateAt(60_000)),
    percent(massachusetts.gainingShare),
    millions(massachusetts.gapReduction),
    `${massachusetts.modelChildRate.toFixed(1)}%`,
    `${massachusetts.censusChildRate.toFixed(1)}%`,
    `${stateBaseline.beyondCensusMargin} of 51 jurisdictions`,
    `${stateBaseline.meanCensusGap.toFixed(1)} points`,
    `${massachusetts.childRateChange.toFixed(1)} points`,
    `about ${massachusetts.effectiveHouseholds} households, or ${massachusetts.effectiveHouseholdsWithChildren} among those with children`,
    ...endpoints,
  ];

  it('match the data in the speaker notes', () => {
    const drops = cliffs.map((cliff) => cliff.drop);
    for (const figure of [
      ...shared,
      `In ${cliffs[0].name}, ${cliffs[1].name} and ${cliffs[2].name}`,
      `after a ${usd(cliffs[0].after - cliffs[0].before)} raise`,
      `between ${usd(Math.min(...drops))} and ${usd(Math.max(...drops))}`,
      massachusetts.records.toLocaleString('en-US'),
      millions(massachusetts.cost),
      `about ${stateBaseline.medianEffective} effective households`,
      usd(axiomRuns.deduction),
    ]) {
      expect(notes).toContain(figure);
    }
  });

  it('match the data in the evidence ledger', () => {
    const onDefault = baselineSummary(defaultBaseline.rows);
    const localSamples: SampleRow[] = samples.local_area.rows;
    const defaultSamples: SampleRow[] = samples.default.rows;
    const [fewestWithChildren, mostWithChildren] = extreme(localSamples, 'effective_households_with_children');
    const [fewestAll, mostAll] = extreme(localSamples, 'effective_households');
    const bothSpines = localSamples.filter((row) => (row.source_ids_on_both_spines ?? 0) > 0).length;
    const pinnedChildRates = [pinnedReform.baseline_child_poverty, pinnedReform.reformed_child_poverty];
    const massachusettsMove = groupQuartersMoves.find((row) => row.state === 'MA');
    for (const figure of [
      ...shared,
      cliffs.map((cliff) => `${cliff.name} ${usd(-cliff.drop)} at ${usd(cliff.after)}`).join(', '),
      `${stateBaseline.modelExceedsCensus} of 51 jurisdictions`,
      `median of ${stateBaseline.medianEffective}`,
      massachusetts.records.toLocaleString('en-US'),
      `from ${percent(massachusetts.childPoverty[0])} to ${percent(massachusetts.childPoverty[1])}`,
      `${reformRun.source_households.toLocaleString('en-US')} source households`,
      `Massachusetts at about ${Math.round(reformRun.effective_records)}, or ${Math.round(reformRun.effective_records_with_children)} among those with children, and the median state at ${Math.round(medianOf(localSamples.map((row) => row.effective_records_with_children)))} households with children`,
      `spine in ${bothSpines} states`,
      `${massachusetts.peopleCrossingThreshold} person records`,
      `${precision.child_records_crossing} child records in ${precision.households_with_a_child_crossing} households`,
      `${precision.child_rate_fall_se_points.toFixed(2)} points on the fall`,
      `${precision.child_rate_se_points.toFixed(1)} points on the 2026 rate`,
      `${millions(precision.poverty_gap_fall_se)} on the fall in the poverty gap`,
      `${millions(precision.state_cost_se)} on the state cost`,
      millions(defaultReform.state_cost),
      percent(defaultReform.households_gaining_share),
      millions(defaultReform.baseline_poverty_gap - defaultReform.reformed_poverty_gap),
      sampleColumns.distinct_households.toLocaleString('en-US'),
      ...sampleColumns.computed_by_the_model,
      `${sampleColumns.undefined_in_this_version.length} names`,
      `from ${fewestWithChildren.value} in ${name(fewestWithChildren.state)} to ${mostWithChildren.value} in ${name(mostWithChildren.state)}`,
      `from ${fewestAll.value} in ${name(fewestAll.state)} to ${mostAll.value} in ${name(mostAll.state)}`,
      `median of ${Math.round(medianOf(localSamples.map((row) => row.effective_households)))}`,
      `${onDefault.meanGap.toFixed(1)} points`,
      `${onDefault.exceedsCensus} of 51 jurisdictions`,
      `its margin in ${onDefault.beyondMargin}`,
      `includes ${Math.round(medianOf(defaultSamples.map((row) => row.effective_households_with_children)))} households`,
      millions(pinnedReform.state_cost),
      percent(pinnedReform.households_gaining_share),
      `${(100 * (pinnedChildRates[0] - pinnedChildRates[1])).toFixed(1)} points`,
      `from ${percent(pinnedChildRates[0])} to ${percent(pinnedChildRates[1])}`,
      usd(wisconsin.child_care_subsidy['2021']),
      usd(wisconsin.child_care_subsidy['2023']),
      `${groupQuartersMoves[0].move.toFixed(3)} points (${name(groupQuartersMoves[0].state)})`,
      `Massachusetts's by ${massachusettsMove?.move.toFixed(2)}`,
    ]) {
      expect(ledger).toContain(figure);
    }
  });

  it('rank the size of Massachusetts’s gap from Census where the ledger says', () => {
    const gap = (row: BaselineRow) => Math.abs(row.child_spm_percent - row.census_percent);
    const order = [...stateBaseline.rows].sort((a, b) => gap(b) - gap(a));
    const rank = order.findIndex((row) => row.state === 'MA');
    const ahead = order.slice(0, rank).map((row) => name(row.state)).join(' and ');
    expect(ledger).toContain(`ranks ${['first', 'second', 'third', 'fourth'][rank]} in size among the 51 jurisdictions, after ${ahead}`);
  });

  it('keep every copy of a repeated figure right', () => {
    const copies = (text: string, figure: string) => text.split(figure).length - 1;
    for (const [text, figure, count] of [
      [notes, usd(largestCliff.drop), 2],
      [notes, millions(massachusetts.cost), 2],
      [ledger, massachusetts.records.toLocaleString('en-US'), 2],
      [ledger, `${stateBaseline.meanCensusGap.toFixed(1)} points`, 2],
      [ledger, `${massachusetts.childRateChange.toFixed(1)} points`, 2],
      [ledger, percent(massachusetts.childPoverty[0]), 2],
    ] as const) {
      expect(copies(text, figure), figure).toBe(count);
    }
  });

  it('take Wisconsin’s current subsidy from the family run', () => {
    const index = family.earnings.indexOf(wisconsin.earnings);
    expect(wisconsin.child_care_subsidy[String(reformRun.year)]).toBeCloseTo(
      family.states.WI.child_care_subsidy[index],
      2,
    );
  });
});
