# Speaker notes: Analysing the UK Autumn Budget 2026 with PolicyEngine

## 1. Title

Webinar, Wednesday 28 October 2026, 4:30pm UK time. Presenters: Vahid
Ahmadi, Max Ghenis, María Juaristi.

## 2. What PolicyEngine is

A brief view: PolicyEngine in one line (a nonprofit building free,
open-source tools, in policyengine.org's own words), then the rules, the
households and the results, and that all the code is public.

## 3. How we prepared

- Last year's Budget (26 November 2025): the dashboard went live on Budget
  day, and the other measures and the household calculator followed by 28
  November (the 2025 dashboard repo's commit history).
- Five mock Budgets (28 September; 5, 12, 19 and 26 October): drill issues
  #6 (with the drill 1 retrospective), #8, #10, #53 and #144 in the dashboard
  repo.
- National results run on Modal, one machine per measure: all ten units (nine
  measures and the package) took 8.1 minutes on 26 October (dashboard PR
  #178). The household calculator also runs on Modal and is kept warm.
- The runbook is `docs/budget-day-runbook.md` (G0 to G5 checkpoints).
- Mark anything still in review as such on the slide before presenting.

## 4. The analysis: live dashboard

The dashboard itself is on the slide; it loads while slide 3 is showing.
Press **Expand** to fill the screen with it and present from there. **Back to
the slide** returns to the deck with the same tab, measures and household
still open. **New tab** opens it in a browser tab, if the embedded copy ever
misbehaves.

While you are using the dashboard, the arrow keys, Space and a clicker go to
it, not to the deck (the arrows switch its tabs). Press **Back to the slide**,
or click the bar above the dashboard, before moving on.

The buttons in the bar (Public finances, Pensioners, Living standards,
Household calculator) load that view into the frame; each click reloads it,
so measures or a household chosen in the frame are not kept. Its tabs:

- **Population impact**, with five sub-tabs: **Public finances** (the
  default: revenue by year and the OBR comparison), **All households** (the
  constituency map and households by income), **By age** (the Pensioners
  button opens it at pensioners), **Living standards** (income by decile and
  inequality) and **Poverty**.
- **Household calculator**: run one household live with Calculate, or pick
  an example card.
- **Pre-measures forecast**: the outlook before the Budget's measures, with
  the OBR forecast named on the tab.
- **Policies**: what each measure does.
- **Methodology**.

These are the tabs at ab2026-local-preview.vercel.app/uk/autumn-budget-2026
on 28 October. The frame and the closing slide's link and QR code all open
that address.

## 5. Close

The dashboard link, with a QR code for phones, and how to reach us.
