import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { getSlideComponent } from '@/lib/types';
import { appam2026Config } from './config';
import {
  alaska,
  axiomRuns,
  childCareBill,
  cliffRanking,
  cliffs,
  coverage,
  crossSection,
  enrolledExit,
  familyLines,
  headlineEarnings,
  highest,
  idahoPostedLimit,
  instrument,
  interaction,
  largestCliff,
  lowest,
  massachusetts,
  massachusettsRow,
  medianRateAt,
  millions,
  modelAnswers,
  modelVersion,
  percent,
  policyBench,
  programLines,
  spreadAt,
  spreads,
  stateBaseline,
  subsidyDrivenCliffs,
  sweep,
  sweepEarnings,
  usd,
  waterfall,
} from './content';
import nationalCheck from './data/massachusetts_national_check.json';
import { SERIES } from './slides/FamilyChart';

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

  it('prints the sweep’s step on slide 7', () => {
    const slide = read('slides/CliffsSlide.tsx');
    const step = usd(sweepEarnings[1] - sweepEarnings[0]);
    for (const phrase of [`${step} more in earnings puts`, `on ${step} more in earnings`]) expect(slide).toContain(phrase);
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

  it('sorts every program line and covers 51 states', () => {
    for (const line of programLines) {
      const values = line.values.map((entry) => entry.value);
      expect(values).toHaveLength(51);
      expect(values).toEqual([...values].sort((a, b) => a - b));
    }
  });

  it('names both states that tie at the low end of slide 10’s SNAP range', () => {
    const page = renderToStaticMarkup(createElement(getSlideComponent(appam2026Config.slides[9])));
    const [snap] = instrument.lines.map((line) => line.values);
    expect(snap[0].value).toBe(snap[1].value);
    expect([snap[0].code, snap[1].code].sort()).toEqual(['AR', 'TN']);
    expect(percent(snap[0].value)).toBe('17.5%');
    expect(page).toContain('17.5% in Arkansas and Tennessee');
    expect(page).toContain('38.3% in Maryland');
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
  const slideSource = (name: string) => read(`slides/${name}.tsx`);
  const deck = finishPdf.match(/^DECK = "([^"]+)"$/m)![1];
  const deckAddress = deck.replace(/^https:\/\//, '');
  const table = finishPdf.match(/^LINKS = \[([\s\S]*?)^\]/m)![1];
  const entries = [...table.matchAll(/\(\s*(\d+),\s*\([\d.,\s]+\),\s*(?:"([^"]+)"|DECK),?\s*\)/g)].map((match) => ({
    page: Number(match[1]),
    target: match[2] ?? deck,
  }));

  it('reads every entry in the PDF link table', () => {
    expect(Number(finishPdf.match(/^SLIDES = (\d+)$/m)![1])).toBe(appam2026Config.slides.length);
    expect(entries).toHaveLength(table.match(/"(?:https|mailto):|\bDECK\b/g)!.length);
  });

  it('links each target on the page of the slide that renders an anchor to it, once for each anchor', () => {
    const anchors = appam2026Config.slides.flatMap((slide, i) => {
      const page = new DOMParser().parseFromString(renderToStaticMarkup(createElement(getSlideComponent(slide))), 'text/html');
      return [...page.querySelectorAll('a[href]')].map((anchor) => `${i + 1} ${anchor.getAttribute('href')}`);
    });
    const links = entries.map(({ page, target }) => `${page} ${target}`);
    expect(links.sort()).toEqual(anchors.sort());
  });

  it('prints each address the PDF links to, on the slide that links to it', () => {
    const printed: Record<string, string[]> = {
      EveryProgramSlide: ['policybench.org'],
      ParametersSlide: ['github.com/PolicyEngine/policyengine-us'],
      InterfacesSlide: [
        'policyengine.org/us/taxsim',
        'app.policyengine.org/us/build',
        'policyengine.org/us/cliffwatch',
        'policyengine.org/us/child-poverty-impact-dashboard',
        'github.com/PolicyEngine/policyengine-claude',
        'github.com/PolicyEngine/policyengine-us',
      ],
      WebAppsSlide: ['policyengine.org/us/cliffwatch', 'app.policyengine.org/us/build'],
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

describe('child care by month', () => {
  type MonthRow = { code: string; subsidy: number; net_resources: number; monthly: number[]; months_paid: number };
  type IndianaCheck = {
    rate_january: number;
    rate_may: number;
    poverty_guideline: number;
    monthly_limit_from_april: number;
    monthly_income: number;
    april_limit_all_year: { subsidy: number; net_resources: number };
  };
  const run: { policyengine_us_version: string; earnings: number; rows: MonthRow[]; indiana: IndianaCheck } = JSON.parse(
    read('data/subsidy_months.json'),
  );
  const at = family.earnings.indexOf(run.earnings);
  const row = (code: string) => run.rows.find((candidate) => candidate.code === code)!;

  it('covers all 51 jurisdictions at the deck’s model and earnings', () => {
    expect(run.policyengine_us_version).toBe(modelVersion);
    expect(run.earnings).toBe(headlineEarnings);
    expect(run.rows.map((candidate) => candidate.code).sort()).toEqual(Object.keys(family.states).sort());
  });

  it('adds up to the deck’s subsidy line in every jurisdiction', () => {
    for (const candidate of run.rows) {
      const total = candidate.monthly.reduce((sum, amount) => sum + amount, 0);
      expect(Math.abs(Math.min(total, childCareBill) - candidate.subsidy), candidate.code).toBeLessThan(0.1);
      expect(Math.abs(family.states[candidate.code].child_care_subsidy[at] - candidate.subsidy), candidate.code).toBeLessThan(0.02);
      expect(Math.abs(family.states[candidate.code].net_resources[at] - candidate.net_resources), candidate.code).toBeLessThan(0.02);
      expect(candidate.months_paid).toBe(candidate.monthly.filter((amount) => amount > 0).length);
    }
  });

  it('pays for part of the year only where slide 6 says so', () => {
    const partial = run.rows.filter((candidate) => candidate.months_paid > 0 && candidate.months_paid < 12);
    expect(partial.map((candidate) => [candidate.code, candidate.months_paid])).toEqual([
      ['IN', 4],
      ['SD', 5],
    ]);
    const none = run.rows.filter((candidate) => candidate.months_paid === 0).map((candidate) => candidate.code);
    expect(none.sort()).toEqual(['ID', 'NV']);
    const slide = read('slides/OneFamilySlide.tsx');
    expect(slide).toContain('Indiana lowered its limit for new applicants on April 5, so we count four months of its subsidy.');
    expect(slide).toContain('so we count five.');
    expect(row('IN').monthly.slice(0, 4).every((amount) => amount > 0)).toBe(true);
    expect(row('IN').monthly.slice(4).every((amount) => amount === 0)).toBe(true);
  });

  it('matches FSSA’s limit for a family of three, and puts the family over it', () => {
    const { indiana } = run;
    // Income to Get on CCDF, effective April 5, 2026.
    expect(Math.round(indiana.monthly_limit_from_april)).toBe(3_074);
    expect(indiana.rate_january).toBe(1.5);
    expect(indiana.rate_may).toBe(1.35);
    expect(indiana.monthly_income).toBeGreaterThan(indiana.monthly_limit_from_april);
    expect(indiana.monthly_income).toBeLessThan((indiana.poverty_guideline * indiana.rate_january) / 12);
  });

  it('backs what the notes and the ledger say about Indiana', () => {
    const { april_limit_all_year: april, monthly_income: income } = run.indiana;
    expect(april.subsidy).toBe(0);
    expect(april.net_resources).toBeLessThan(lowest.net_resources);
    for (const text of [notes, ledger]) {
      expect(text).toContain(`up with ${usd(april.net_resources)}`);
      expect(text).toContain(`below ${lowest.name}'s ${usd(lowest.net_resources)}`);
      expect(text).toContain(usd(income));
    }
    expect(ledger).toContain(`${usd(row('IN').monthly[0])} a month from January through April, ${usd(row('IN').subsidy)} in all`);
  });
});

describe('a family already enrolled', () => {
  type Lines = { subsidy: number[]; net_resources: number[] };
  const summary = JSON.parse(read('data/enrolled_cliffs.json'));
  const sweepRun: { earnings: number[]; states: Record<string, { new_applicant: Lines; enrolled: Lines }> } = JSON.parse(
    read('data/enrolled_sweep.json'),
  );
  const codes = Object.keys(sweepRun.states);

  it('runs at the deck’s model, for slide 7’s states and the others with a lower limit for new applicants', () => {
    expect(summary.policyengine_us_version).toBe(modelVersion);
    expect(codes.sort()).toEqual(['IA', 'ID', 'IN', 'MD', 'NV', 'OH']);
    for (const cliff of cliffs) expect(codes).toContain(cliff.code);
  });

  it('never draws less than a new applicant, at any earnings on the grid', () => {
    for (const code of codes) {
      const { new_applicant: fresh, enrolled } = sweepRun.states[code];
      sweepRun.earnings.forEach((earnings, i) => {
        // Ohio's first program charges a copay, and its voucher covers this family's bill, so
        // a new applicant draws more across the voucher's range. That gap is intended.
        if (code === 'OH' && earnings >= 39_000 && earnings <= 54_500) return;
        expect(enrolled.subsidy[i], `${code} ${earnings}`).toBeGreaterThanOrEqual(fresh.subsidy[i]);
      });
    }
  });

  it('reproduces the deck’s own sweep for a new applicant', () => {
    for (const code of codes) {
      const lines = family.states[code];
      family.earnings.forEach((earnings: number, i: number) => {
        const j = sweepRun.earnings.indexOf(earnings);
        expect(Math.abs(sweepRun.states[code].new_applicant.subsidy[j] - lines.child_care_subsidy[i])).toBeLessThan(0.02);
        expect(Math.abs(sweepRun.states[code].new_applicant.net_resources[j] - lines.net_resources[i])).toBeLessThan(0.02);
      });
    }
  });

  it('summarizes each state’s last step with a subsidy', () => {
    for (const { code, enrolled, new_applicant: fresh } of summary.rows) {
      const lines = sweepRun.states[code].enrolled;
      const last = sweepRun.earnings.reduce((found, _, i) => (lines.subsidy[i] > 0 ? i : found), -1);
      expect(enrolled.exit.before).toBe(sweepRun.earnings[last]);
      expect(enrolled.exit.after).toBe(sweepRun.earnings[last + 1]);
      expect(enrolled.exit.subsidy_before).toBe(Math.round(lines.subsidy[last]));
      expect(enrolled.exit.drop).toBe(Math.round(lines.net_resources[last] - lines.net_resources[last + 1]));
      const at = sweepRun.earnings.indexOf(summary.headline_earnings);
      expect(enrolled.subsidy_at_headline).toBe(Math.round(lines.subsidy[at]));
      expect(fresh.subsidy_at_headline).toBe(Math.round(sweepRun.states[code].new_applicant.subsidy[at]));
    }
  });

  it('lets a family keep the subsidy past each of slide 7’s cliffs', () => {
    for (const cliff of cliffs) {
      const row = summary.rows.find((candidate: { code: string }) => candidate.code === cliff.code);
      expect(row.new_applicant.largest_drop).toEqual({ before: cliff.before, after: cliff.after, drop: cliff.drop });
      expect(enrolledExit(cliff.code).before).toBeGreaterThan(cliff.after);
    }
  });

  it('prints each limit on slide 7, and each limit and cliff in the notes and the ledger', () => {
    const page = renderToStaticMarkup(
      createElement(getSlideComponent(appam2026Config.slides[6])),
    ).replace(/&#x27;/g, "'");
    expect(page).toContain(
      `keeps the subsidy to about ${usd(enrolledExit('MD').before)} in Maryland and ${usd(enrolledExit('IA').before)} in Iowa`,
    );
    expect(page).not.toContain(usd(enrolledExit('ID').before));
    expect(notes).toContain(`about ${usd(enrolledExit('MD').before)} in Maryland`);
    for (const [code, name] of [['MD', 'Maryland'], ['IA', 'Iowa']]) {
      const exit = enrolledExit(code);
      expect(notes).toContain(`${usd(exit.drop)} past about ${usd(exit.before)} in ${name}`);
      expect(ledger).toContain(usd(exit.drop));
      expect(ledger).toContain(usd(exit.before));
    }
  });

  it('gives the notes’ subsidies at $40,000 for the states that turn a new applicant down', () => {
    const at = (code: string) => summary.rows.find((row: { code: string }) => row.code === code).enrolled.subsidy_at_headline;
    expect(summary.headline_earnings).toBe(headlineEarnings);
    expect(notes).toContain(`${usd(at('NV'))} in Nevada, ${usd(at('IN'))} in Indiana and ${usd(at('OH'))} in Ohio`);
  });

  it('matches FSSA’s stay-on limit for a family of three', () => {
    // Income to Stay on CCDF, effective April 5, 2026: $6,400 a month.
    const exit = enrolledExit('IN');
    expect(exit.before).toBeLessThanOrEqual(6_400 * 12);
    expect(exit.after).toBeGreaterThan(6_400 * 12);
  });
});

describe('limits and programs the model does not carry', () => {
  const checks = JSON.parse(read('data/limit_checks.json'));
  const line = (code: string, key: string) => family.states[code][key] as number[];
  const at = (earnings: number) => family.earnings.indexOf(earnings);
  const slide = renderToStaticMarkup(createElement(getSlideComponent(appam2026Config.slides[5]))).replace(/&#x27;/g, "'");

  it('stops Idaho’s subsidy at the posted limit, on the deck’s grid', () => {
    const paying = family.earnings.filter((_: number, i: number) => line('ID', 'child_care_subsidy')[i] > 0);
    const last = Math.max(...paying);
    expect(last).toBeLessThanOrEqual(idahoPostedLimit * 12);
    expect(last + 500).toBeGreaterThan(idahoPostedLimit * 12);
    for (const text of [slide, notes, ledger]) expect(text).toContain(usd(idahoPostedLimit));
  });

  it('pays Ohio’s bill across the voucher’s range, and stops at its ceiling', () => {
    for (const earnings of [40_000, 45_000, 50_000, 53_000]) {
      expect(line('OH', 'child_care_subsidy')[at(earnings)], `${earnings}`).toBe(childCareBill);
    }
    // $4,442 a month from January through September, then $4,554.
    expect(line('OH', 'child_care_subsidy')[at(53_500)]).toBe(childCareBill / 4);
    expect(line('OH', 'child_care_subsidy')[at(55_000)]).toBe(0);
    expect(slide).toContain('Child Care Choice Voucher');
    expect(notes).toContain('**Why does Ohio pay this family?**');
    expect(ledger).toContain('PL_36.pdf');
    expect(ledger).toContain('PL_45.pdf');
  });

  it('prints each state’s row at the figure we do not apply', () => {
    const printed: [string, number, string][] = [
      ['Ohio', checks.ohio_without_voucher.net_resources, notes],
      ['Georgia', checks.georgia_without_caps.net_resources, notes],
      ['Missouri', checks.missouri_at_posted.net_resources, notes],
      ['Alabama', checks.alabama_at_posted.net_resources, notes],
      ['Ohio', checks.ohio_without_voucher.net_resources, ledger],
      ['Georgia', checks.georgia_without_caps.net_resources, ledger],
      ['Missouri', checks.missouri_at_posted.net_resources, ledger],
      ['Alabama', checks.alabama_at_posted.net_resources, ledger],
    ];
    for (const [name, net, text] of printed) expect(text, name).toContain(usd(net));
    expect(checks.alabama_at_posted.subsidy).toBe(6_070);
    expect(checks.missouri_at_posted.subsidy).toBe(0);
    expect(checks.georgia_without_caps.subsidy).toBe(0);
    expect(checks.ohio_without_voucher.subsidy).toBe(0);
    for (const text of [notes, ledger]) {
      expect(text).toContain(usd(checks.maryland_at_posted.drop));
      expect(text).toContain(usd(checks.maryland_at_posted.after));
    }
    // Lowest in the deck only because of what we keep, and the notes say so.
    for (const net of [checks.ohio_without_voucher, checks.georgia_without_caps, checks.missouri_at_posted]) {
      expect(net.net_resources).toBeLessThan(lowest.net_resources);
    }
    expect(notes.match(new RegExp(`below ${lowest.name}'s ${usd(lowest.net_resources).replace('$', '\\$')}`, 'g'))!.length).toBe(4);
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

  it('runs slide 6’s family at earnings where PolicyEngine US gives it Georgia SNAP', () => {
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
    for (const slide of ['InterfacesSlide', 'ReformSlide']) {
      const lines = python(slide)
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#') && !RUN_DIFFERENTLY.includes(line));
      expect(lines.length).toBeGreaterThan(3);
      for (const line of lines) expect(check, `${slide}: ${line}`).toContain(line);
    }
  });

  it('ends slide 8’s values at the amount slide 9 doubles', () => {
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

  it('matches what slide 10’s loop returns when run as printed', () => {
    expect(slideCode.policyengine_us_version).toBe(modelVersion);
    const states = Object.entries<number>(slideCode.loop_snap_eligible_share);
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

  it('matches what slide 9’s dictionary returns when run as printed', () => {
    expect(slideCode.reform_state_cost).toBe(massachusetts.cost);
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
  const massachusettsMargin = stateBaseline.rows.find((row) => row.state === 'MA')!.census_margin;
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
      `${usd(cliffs[0].after - cliffs[0].before)} more in earnings puts a new applicant over`,
      `between ${usd(Math.min(...drops))} and ${usd(Math.max(...drops))}`,
      massachusetts.records.toLocaleString('en-US'),
      millions(massachusetts.cost),
      `about ${stateBaseline.medianEffective} effective households`,
      usd(axiomRuns.deduction),
      `standard error of ${precision.child_rate_se_points.toFixed(1)} points on Massachusetts's 2026 child poverty rate`,
      `${massachusettsMargin.toFixed(1)}-point margin of error`,
      `about ${stateBaseline.medianEffective} against Massachusetts's ${massachusetts.effectiveHouseholdsWithChildren}`,
    ]) {
      expect(notes).toContain(figure);
    }
  });

  it('back the speaker notes’ answer on sampling error', () => {
    expect(precision.child_rate_se_points).toBeGreaterThan(2 * massachusettsMargin);
    // A normal error with Massachusetts's standard error misses by this much on average.
    expect(precision.child_rate_se_points * Math.sqrt(2 / Math.PI)).toBeGreaterThan(stateBaseline.meanCensusGap);
    expect(stateBaseline.medianEffective).toBeLessThan(massachusetts.effectiveHouseholdsWithChildren);
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

const render = (index: number) =>
  renderToStaticMarkup(createElement(getSlideComponent(appam2026Config.slides[index]))).replace(/&#x27;/g, "'");

describe('the family’s lines', () => {
  const { lines, detail, without_subsidy: without, doubled_credit: doubled } = familyLines;

  it('chains the waterfall from earnings to net resources, within rounding', () => {
    const steps = waterfall.slice(0, -1);
    steps.forEach((step, i) => expect(step.from).toBe(i === 0 ? 0 : steps[i - 1].to));
    expect(Math.abs(steps[steps.length - 1].to - lines.net_resources)).toBeLessThan(0.02);
    expect(waterfall[waterfall.length - 1].to).toBe(lines.net_resources);
  });

  it('matches slide 6’s Massachusetts row, at the deck’s model and earnings', () => {
    expect(familyLines.policyengine_us_version).toBe(modelVersion);
    expect(familyLines.earnings).toBe(headlineEarnings);
    expect(massachusettsRow.net_resources).toBe(Math.round(lines.net_resources));
  });

  it('splits payroll tax and the credits into the parts slide 5 prints', () => {
    const payroll = detail.employee_social_security_tax + detail.employee_medicare_tax + detail.employee_state_payroll_tax;
    expect(payroll).toBeCloseTo(-lines.payroll_tax, 1);
    expect(detail.eitc + detail.refundable_ctc).toBeCloseTo(lines.federal_refundable_credits, 1);
    expect(detail.ma_child_and_family_credit + detail.ma_eitc).toBeCloseTo(lines.state_refundable_credits, 1);
    const page = render(4);
    for (const amount of [detail.eitc, detail.refundable_ctc, detail.employee_social_security_tax, detail.employee_medicare_tax, detail.employee_state_payroll_tax, detail.ma_eitc]) {
      expect(page).toContain(usd(amount));
    }
  });

  it('lets the subsidy set SNAP’s dependent care deduction', () => {
    expect(detail.snap_dependent_care_deduction).toBeCloseTo(detail.childcare_expenses, 1);
    expect(Math.abs(lines.child_care_subsidy + detail.childcare_expenses + lines.child_care_bill)).toBeLessThan(0.02);
    expect(without.snap_dependent_care_deduction).toBe(childCareBill);
    expect(without.snap).toBeGreaterThan(lines.snap);
    for (const text of [render(2), notes]) {
      for (const amount of [lines.snap, without.snap, detail.childcare_expenses, childCareBill]) expect(text).toContain(usd(amount));
    }
  });

  it('states the subsidy assumption wherever a figure rests on it', () => {
    const assumption = 'any child care subsidy it qualifies for';
    expect(render(1)).toContain(assumption);
    expect(render(2)).toContain(assumption);
    expect(notes.match(new RegExp(assumption, 'g'))!.length).toBeGreaterThanOrEqual(2);
    expect(without.net_resources).toBeLessThan(lines.net_resources);
    for (const text of [render(4), notes, ledger]) expect(text).toContain(usd(without.net_resources));
  });

  it('moves only the state credit line when the credit doubles', () => {
    for (const [key, value] of Object.entries(lines)) {
      if (key === 'state_refundable_credits' || key === 'net_resources') continue;
      expect(doubled.lines[key as keyof typeof lines], key).toBe(value);
    }
    const gain = doubled.lines.net_resources - lines.net_resources;
    expect(gain).toBeCloseTo(doubled.lines.state_refundable_credits - lines.state_refundable_credits, 1);
    expect(gain).toBeCloseTo(detail.ma_child_and_family_credit, 1);
    expect(doubled.per_dependent).toBe(reformRun.reformed);
    expect(doubled.ma_child_and_family_credit).toBeCloseTo(2 * detail.ma_child_and_family_credit, 1);
    expect(notes).toContain(usd(doubled.lines.net_resources));
  });

  it('prints every line in the notes', () => {
    for (const step of waterfall) if (step.value !== 0) expect(notes, step.key).toContain(usd(Math.abs(step.value)));
  });

  it('keeps federal taxes and credits the narrowest line across states, as slide 6’s notes say', () => {
    const range = (key: string) => {
      const values = programLines.find((entry) => entry.key === key)!.values.map((entry) => entry.value);
      return Math.max(...values) - Math.min(...values);
    };
    for (const entry of programLines) {
      if (entry.key !== 'federal_taxes') expect(range('federal_taxes'), entry.key).toBeLessThan(range(entry.key));
    }
  });
});

describe('the models’ answers', () => {
  const NEWEST = ['GPT-6.1 Sol', 'GPT-6.1 Terra', 'GPT-6 Astra', 'GPT-6 Luna', 'Claude Opus 5.5', 'Claude Sonnet 5.5', 'Claude Haiku 5.5'];
  const amounts = (row: (typeof modelAnswers.rows)[number]) => row.amounts as Record<string, number>;

  it('keeps all ten in the data file and shows the newest in each family', () => {
    expect(modelAnswers.rows).toHaveLength(10);
    expect(modelAnswers.shownSnap.map((row) => row.name).sort()).toEqual([...NEWEST].sort());
    const snaps = modelAnswers.shownSnap.map((row) => row.snap);
    expect(snaps).toEqual([...snaps].sort((a, b) => a - b));
  });

  it('grades against the deck’s own run', () => {
    expect(modelAnswers.referenceSnap).toBe(familyLines.lines.snap);
    expect(modelAnswers.referenceSnapWithoutSubsidy).toBe(familyLines.without_subsidy.snap);
  });

  it('recounts every row of slide 4’s table from the answers', () => {
    const shown = modelAnswers.rows.filter((row) => row.shown && row.answered);
    for (const line of modelAnswers.table) {
      const values = shown.map((row) => amounts(row)[line.key]);
      expect(line.answers).toBe(values.length);
      expect(line.low).toBe(Math.min(...values));
      expect(line.high).toBe(Math.max(...values));
      expect(line.within_ten_percent, line.key).toBe(values.filter((value) => Math.abs(value - line.reference) <= 0.1 * Math.abs(line.reference)).length);
    }
  });

  it('says none of the seven came within 10%, and prints the range', () => {
    expect(modelAnswers.shownSnapWithinTenPercent).toBe(0);
    expect(render(2)).toContain('None of the seven came within 10%');
    expect(notes).toContain('none of the seven came within 10%');
    const snaps = modelAnswers.shownSnap.map((row) => row.snap);
    expect(notes).toContain(`from ${usd(snaps[0])} to ${usd(snaps[snaps.length - 1])}`);
  });

  it('names the older versions and their answers in the notes and the ledger', () => {
    const older = modelAnswers.rows.filter((row) => !row.shown);
    expect(older).toHaveLength(3);
    for (const row of older) {
      for (const text of [notes, ledger]) {
        expect(text, row.name).toContain(row.name);
        expect(text, row.name).toContain(usd(amounts(row).snap));
      }
    }
    expect(notes).toContain('data/model_answers.json');
  });

  it('holds the prompt the answers came from', () => {
    const digest = createHash('sha256').update(read('analysis/model_ask/prompt.txt')).digest('hex');
    expect(digest.startsWith(JSON.parse(read('data/model_answers.json')).prompt_sha256_prefix)).toBe(true);
  });
});

describe('PolicyBench’s figures', () => {
  it('pairs each right and wrong rate', () => {
    for (const card of policyBench.cards) {
      expect(card.positive_within_10 + card.positive_wrong_by_more_than_10).toBeCloseTo(100, 6);
    }
  });

  it('prints every bar on slide 4 and the three the notes name', () => {
    const page = render(3);
    for (const card of policyBench.cards) expect(page).toContain(`${card.positive_wrong_by_more_than_10.toFixed(1)}%`);
    const wrong = (key: string) => policyBench.cards.find((card) => card.key === key)!.positive_wrong_by_more_than_10;
    expect(notes).toContain(`${wrong('snap')}% of their SNAP answers`);
    expect(notes).toContain(`${wrong('state_refundable_credits')}% of their state refundable credit answers`);
    expect(notes).toContain(`${wrong('payroll_tax')}% of their payroll tax answers`);
  });

  it('names the leader and dates the comparison', () => {
    expect(policyBench.bestScore.model).toBe('gpt-6-sol');
    expect(policyBench.bestScore.exact).toBeGreaterThanOrEqual(policyBench.namedScores['claude-opus-5.5'].exact);
    expect(policyBench.bestScoreByApril.released <= '2026-04-30').toBe(true);
    const line = `from ${policyBench.bestScoreByApril.exact} among models released by April to ${policyBench.bestScore.exact} with GPT-6 Sol in September`;
    expect(notes).toContain(line);
    expect(render(3).replace(/\s+/g, ' ')).toContain(line);
  });

  it('says on slides 3 and 4 that PolicyBench grades against PolicyEngine', () => {
    for (const index of [2, 3]) expect(render(index)).toContain('PolicyBench grades against PolicyEngine');
  });
});

describe('coverage', () => {
  const { default_file: national, local_area_file: local, policyengine_us: model } = coverage;
  const page = () => render(11).replace(/&rsquo;/g, '’');

  it('counts all 51 jurisdictions one way or the other', () => {
    expect(model.jurisdictions_with_income_tax + model.jurisdictions_without_income_tax.length).toBe(51);
    expect(model.state_tanf_variables).toBe(51);
    expect(model.child_care_programs_latest).toBe(51);
  });

  it('adds the local file’s households and targets from their parts', () => {
    const spines = Object.values(local.households_by_spine);
    expect(spines.reduce((sum, count) => sum + count, 0)).toBe(local.households);
    expect(local.targets_by_family_and_level.reduce((sum, row) => sum + row.n_targets, 0)).toBe(local.targets);
    expect(local.households_by_spine.asec_puf).toBe(national.households);
  });

  it('leaves child poverty out of the local file’s targets', () => {
    for (const row of local.targets_by_family_and_level) expect(row.family).not.toMatch(/poverty|child/i);
  });

  it('prints the same counts on slide 12 and in the notes and the ledger', () => {
    for (const count of [national.households, national.targets, local.targets]) {
      for (const text of [page(), notes, ledger]) expect(text).toContain(count.toLocaleString('en-US'));
    }
    expect(page()).toContain('1.5 million ACS households');
    expect(notes).toContain('1.5 million American Community Survey households');
    for (const share of [national.share_within_10_percent, local.share_within_10_percent]) {
      for (const text of [notes, ledger]) expect(text).toContain(`${(share * 100).toFixed(2)}%`);
    }
  });
});
