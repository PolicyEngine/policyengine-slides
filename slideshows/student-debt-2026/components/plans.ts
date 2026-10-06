import type { Series } from './LineChart';

export const HOUSEHOLDS = [
  { id: 'single', label: 'Single, no children' },
  { id: 'single_parent', label: 'Single parent, two children' },
  { id: 'married', label: 'Married couple, two children, one borrower' },
] as const;

export type HouseholdId = (typeof HOUSEHOLDS)[number]['id'];

/** Plan labels as written by prelim/2026-10-07/household_charts.py, with chart styles. */
export const PLAN_STYLES: Record<string, Omit<Series, 'y' | 'label'> & { label: string }> = {
  RAP: { label: 'RAP', color: 'var(--pe-teal)', width: 4 },
  IBR: { label: 'IBR', color: 'var(--color-gray-700)', width: 2.5 },
  'IBR, new borrower': { label: 'IBR, new borrower', color: 'var(--color-gray-500)', width: 2.5, dash: '8 6' },
  'SAVE (if available)': { label: 'SAVE (if available)', color: 'var(--pe-amber)', width: 2.5 },
  'Standard 10-year': { label: 'Standard 10-year', color: 'var(--color-gray-400)', width: 2.5, dash: '2 5' },
};

export const usd0 = (v: number) => `$${Math.round(v).toLocaleString('en-US')}`;
export const usdK = (v: number) => (v === 0 ? '$0' : `$${Math.round(v / 1000)}k`);
export const usd2 = (v: number) =>
  `${v < 0 ? '−' : ''}$${Math.abs(v).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
