# Speaker notes: Analysing the UK Autumn Budget 2026 with PolicyEngine

## 1. Title

Webinar, Wednesday 28 October 2026, 4:30pm UK time. Presenters: Vahid
Ahmadi, Max Ghenis, María Juaristi.

## 2. What PolicyEngine is

A brief view: PolicyEngine in one line (a nonprofit building free,
open-source tools, in policyengine.org's own words), then the rules, the
households and the results, and that all the code is public.

## 3 and 4. The Budget measures we model

Each measure's author introduces it, 30 to 60 seconds each, in slide order,
while Vahid keeps the screen:

- **Slide 3:** David Trimmer (zero VAT on domestic electricity and the
  Household Energy Payment), then Ziming Hua (property and savings income, and
  the trading allowance, which is on slide 4, bottom right).
- **Slide 4:** Pavel Makarchuk (the Pension Tax Allowance and fuel duty), then
  Anthony Volk (the Carer's Allowance taper).

The footer points to the dashboard's Policies tab for the full descriptions
and the measures we don't model.

## 5. How we prepared

The slide is for a general audience: the rehearsals and what they gave us.
The detail below is background, if asked.

- Last year's Budget (26 November 2025): the dashboard went live on Budget
  day, and the other measures and the household calculator followed by 28
  November (the 2025 dashboard repo's commit history).
- Five Budget-day rehearsals, the mock Budgets (28 September; 5, 12, 19 and
  26 October): drill issues #6 (with the drill 1 retrospective), #8, #10, #53
  and #144 in the dashboard repo.
- The model and data: the policyengine package 6.11.1, with policyengine-uk
  2.151.0 and the Microcosm UK 2024-25 households. The live dashboard's
  publication manifest records it for every measure and the package, and
  main's uv.lock pins it (28 October).
- National results run on Modal, one machine per measure: all ten units (nine
  measures and the package) took 8.1 minutes on 26 October (dashboard PR
  #178). The household calculator also runs on Modal and is kept warm.
- Mark anything still in review as such on the slide before presenting.

## 6. The analysis: live dashboard

The dashboard itself is on the slide; it loads while slide 5 is showing.
Press **Expand** to fill the screen with it and present from there. **Back to
the slide** returns to the deck with the same tab, measures and household
still open. **New tab** opens it in a browser tab, if the embedded copy ever
misbehaves.

While you are using the dashboard, the arrow keys, Space and a clicker go to
it, not to the deck (the arrows switch its tabs). Press **Back to the slide**,
or click the bar above the dashboard, before moving on.

The buttons in the bar (Public finances, Policies, Pensioners, Living
standards, Household calculator) load that view into the frame; each click reloads it,
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

## 7. Close

The dashboard link, with a QR code for phones, and how to reach us. Thank
the Nuffield Foundation, which funds our UK Budget analysis ("funded by",
not "supported by").
