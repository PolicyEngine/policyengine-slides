# Speaker notes: Analysing the UK Autumn Budget 2026 with PolicyEngine

## 1. Title

Webinar, Wednesday 28 October 2026, 4:30pm UK time. Presenters: Vahid
Ahmadi, Max Ghenis, María Juaristi.

## 2. What PolicyEngine is

A brief view: the rules, the households and the results, and that all the
code is public.

## 3. How we prepared

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
Household impact) load that view into the frame; each click reloads it, so
measures or a household chosen in the frame are not kept. Its tabs:

- **Population impact**, with six sub-tabs: **Public finances** (the
  default: revenue by year and the OBR comparison), **All households** (the
  constituency map and households by income), **Young people**,
  **Pensioners**, **Living standards** (income by decile and inequality) and
  **Poverty**.
- **Household impact**: run one household live with Calculate, or pick an
  example card.
- **Pre-measures forecast**: the outlook before the Budget's measures, with
  the OBR forecast named on the tab.
- **Policies**: what each measure does.
- **Methodology**.

These are the tabs from dashboard PR #185 (merged 26 October): the Drill 5
build in the frame and the live site the closing slide links both have them.

## 5. Close

The dashboard link, with a QR code for phones, and how to reach us.
