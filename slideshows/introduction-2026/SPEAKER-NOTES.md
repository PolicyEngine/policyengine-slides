# Speaker notes: Analysing the UK Autumn Budget 2026 with PolicyEngine

Every analysis slide shows candidate measures, modelled before the Budget on
28 October. None is announced policy; say so when the analysis starts.

## 1. Title

Webinar, Wednesday 28 October 2026, 4:30pm UK time. Presenters: Vahid
Ahmadi, Max Ghenis, María Juaristi.

## 2. What PolicyEngine is

A brief view: the rules, the households and the results, and that all the
code is public.

## 3. How we prepared

- Four mock Budgets (28 September; 5, 12 and 19 October): drill issues #6
  (with the drill 1 retrospective), #8, #10 and #53 in the dashboard repo.
- The runbook is `docs/budget-day-runbook.md` (G0 to G5 checkpoints).
- The 8-minute parallel run (#112) and per-measure publishing (#106) are in
  review, not merged: the slide marks both "In review".

## 4. Past Budgets

- Six events from Spring Budget 2023 to Autumn Budget 2025, rerun on
  policyengine 6.10.2 and Microcosm UK 2024-25 (dashboard PR #107). Draft: no
  figures are published before 29 October. These are today's model and data,
  not what was known at the time.
- Autumn Budget 2025 in review is a separate dashboard (live).

## 5–8. Candidate measures

Figures come from the dashboard's `public/data` (commit in
`dashboardData.ts`). Totals are sums of the measures' separate runs, as on the
dashboard. Single-year charts are 2027-28, the dashboard's default year.
The lone parent and the higher earner show no change on the dashboard too;
check why before explaining it.

## 9–10. Living standards

The baseline only: current law and the OBR's March 2026 forecast. No Budget
measure is in these charts. 2031-32 is past the OBR forecast and uses
policyengine-uk's long-run assumptions.

## 11. Close

The dashboard link, with a QR code for phones, and how to reach us.
