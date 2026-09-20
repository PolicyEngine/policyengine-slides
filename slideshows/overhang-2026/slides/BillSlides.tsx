'use client';

import { ReactNode, useState } from 'react';
import { IconArrowRight, IconArrowsMaximize, IconExternalLink, IconX } from '@tabler/icons-react';
import DeckFrame from './DeckFrame';

const billUrl = 'https://app.thesisinstitute.org/bills/s3596-119';
const statuteUrl = 'https://axiom.org/us/statute/26/24/d/1';
const congressUrl = 'https://www.congress.gov/bill/119th-congress/senate-bill/3596';
const graphUrl = 'https://axiom.org/app?compose=us%3Astatutes%2F26%2F24%2Fd&focus=us%3Astatutes%2F26%2F24%2Fd%23refundable_ctc';

function BillFrame({
  title,
  children,
  source,
  sourceUrl,
  prototype = false,
}: {
  title: string;
  children: ReactNode;
  source: string;
  sourceUrl: string;
  prototype?: boolean;
}) {
  return (
    <DeckFrame title={title} source={source} sourceUrl={sourceUrl} badge={prototype ? <span className="shrink-0 rounded-full bg-pe-light px-4 py-2 text-sm font-semibold text-pe-dark">Thesis · Prototype</span> : undefined}>
      {children}
    </DeckFrame>
  );
}

/** Live-app pattern from IARIW, with its controls kept within the slide. */
export function LivePanel({ url, title }: { url: string; title: string }) {
  const [expanded, setExpanded] = useState(false);

  const controls = (
    <div className="absolute right-3 top-3 z-10 flex gap-2">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-semibold text-gray-700 shadow-sm"
      >
        <IconExternalLink size={14} aria-hidden="true" /> Open
      </a>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-semibold text-gray-700 shadow-sm"
      >
        {expanded ? <IconX size={14} aria-hidden="true" /> : <IconArrowsMaximize size={14} aria-hidden="true" />}
        {expanded ? 'Close' : 'Expand'}
      </button>
    </div>
  );

  return (
    <>
      <div
        className="relative h-full min-h-0 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-lg pointer-events-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <iframe src={url} title={title} className="absolute inset-0 h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        {!expanded && controls}
      </div>
      {expanded && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-pe-dark/70 p-6 pointer-events-auto"
          onClick={(event) => {
            event.stopPropagation();
            setExpanded(false);
          }}
        >
          <div
            className="relative h-full w-full overflow-hidden rounded-2xl bg-white shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={`${title}, expanded`}
            onClick={(event) => event.stopPropagation()}
          >
            <iframe src={url} title={`${title}, expanded`} className="h-full w-full border-0" referrerPolicy="no-referrer-when-downgrade" />
            {controls}
          </div>
        </div>
      )}
    </>
  );
}

export function BillSlide() {
  return (
    <BillFrame title="S. 3596 moves one threshold from $2,500 to $1" source="Source: S. 3596, Stronger Start for Working Families Act · Congress.gov" sourceUrl={congressUrl}>
      <div className="flex h-full flex-col justify-center gap-7">
        <div>
          <p className="text-lg font-medium text-pe-teal">S. 3596 · Hassan and Young</p>
          <h2 className="mt-2 text-3xl font-semibold text-pe-dark">Stronger Start for Working Families Act</h2>
        </div>
        <div className="flex items-center gap-10 rounded-2xl bg-pe-light px-9 py-7">
          <div className="flex-1">
            <p className="mb-2 text-lg text-gray-600">Refundable child tax credit earnings threshold</p>
            <div className="flex items-center gap-6 text-6xl font-bold tracking-tight text-pe-dark">
              <span>$2,500</span><IconArrowRight size={44} className="text-pe-teal" aria-label="falls to" /><span>$1</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 text-xl leading-relaxed text-gray-700">
          <p className="content-card px-6 py-4">The <strong>15% phase-in rate</strong> and refundable cap stay the same.</p>
          <p className="content-card px-6 py-4">A family gains at most <strong>about $375</strong>.</p>
        </div>
      </div>
    </BillFrame>
  );
}

export function RulesSlide() {
  const [graph, setGraph] = useState(false);
  return (
    <BillFrame title="The Axiom Foundation encodes the section the bill amends" source="Source: the Axiom Foundation · axiom.org/us/statute/26/24/d/1 (statute beside its encoded rules) · axiom.org/app (rule graph, prototype); S. 3596" sourceUrl={graph ? graphUrl : statuteUrl}>
      <div className="grid h-full min-h-0 grid-cols-[0.9fr_1.7fr] gap-7">
        <div className="flex flex-col justify-center gap-6">
          <p className="text-2xl leading-snug text-gray-800">Read the statute beside the rules that encode it.</p>
          <div className="content-card p-5">
            <p className="mb-3 text-base text-gray-600">The bill changes this parameter</p>
            <p className="break-words font-mono text-lg leading-relaxed text-pe-dark">ctc_refundable_<wbr />phase_in_threshold</p>
            <p className="mt-4 text-3xl font-semibold text-pe-teal">$2,500 → $1</p>
          </div>
          <p className="text-base text-gray-500">Every rule traces to the sentence of statute that sets it.</p>
          <button
            type="button"
            onClick={(event) => { event.stopPropagation(); setGraph(!graph); }}
            className="self-start rounded-lg border border-pe-200 bg-white px-4 py-2 text-sm font-semibold text-pe-dark shadow-sm pointer-events-auto"
          >
            {graph ? 'Show the statute page' : 'Show the rule graph'}
          </button>
        </div>
        {graph ? (
          <LivePanel url={graphUrl} title="The Axiom Foundation: refundable child tax credit rule graph" />
        ) : (
          <LivePanel url={statuteUrl} title="The Axiom Foundation: child tax credit statute and encoded rules" />
        )}
      </div>
    </BillFrame>
  );
}

const appUrl = 'https://policyengine.org/us/policy?reform=98503&region=us&timePeriod=2026&baseline=2';

export function ModelSlide() {
  return (
    <BillFrame title="PolicyEngine computes what the change does to each household" source="Cost: PolicyEngine US 1.764.6 via the PolicyEngine API, run 19 Sep 2026, policy 98503 (refundable CTC phase-in threshold $1 from 2026) against current law, United States, 2026 · policyengine.org/us/policy?reform=98503 · Deficit interval: Thesis forecast of the May 2026 Monthly Treasury Statement deficit, $305B with 80% interval [$240B, $380B]; print $292.6B · app.thesisinstitute.org/us-mts-deficit-may-2026" sourceUrl={appUrl}>
      <div className="flex h-full flex-col justify-center gap-8">
        <p className="text-2xl text-gray-700">PolicyEngine produces the standard outputs, and cost is the usual one.</p>
        <div className="grid grid-cols-2 gap-6">
          <div className="content-card px-6 py-8">
            <p className="text-[48px] font-bold tracking-tight text-pe-teal">$1.83B</p>
            <p className="mt-4 text-xl font-medium text-pe-dark">Federal cost of the bill</p>
            <p className="mt-2 text-base text-gray-500">2026, behavior held fixed</p>
          </div>
          <div className="content-card px-6 py-8">
            <p className="text-[48px] font-bold tracking-tight text-pe-dark">$240B–$380B</p>
            <p className="mt-4 text-xl font-medium text-pe-dark">80% interval on one month’s federal deficit</p>
            <p className="mt-2 text-base text-gray-500">May 2026 forecast; the print came in at $293B</p>
          </div>
        </div>
        <div className="accent-block">
          <p className="text-xl leading-relaxed text-gray-700">Cost is the gap between two deficit forecasts whose bands overlap almost entirely. The deficit will never score this bill.</p>
          <p className="mt-2 text-sm text-gray-500">One outcome per run, no interval attached. The statistic that scores the bill stays an open choice.</p>
        </div>
      </div>
    </BillFrame>
  );
}

export function IndicatorSlide() {
  return (
    <BillFrame title="Which statistic would this bill move most?" source="S. 3596, Stronger Start for Working Families Act · Congress.gov" sourceUrl={congressUrl}>
      <div className="flex h-full flex-col justify-center gap-6">
        <p className="text-[30px] font-semibold leading-snug text-pe-dark">How would you measure whether this bill did its job?</p>
        <div className="grid grid-cols-[1fr_1.15fr] gap-6">
          <div className="content-card px-6 py-5">
            <p className="text-xl leading-relaxed text-gray-700">Name an official statistic, and say how far the bill would move it in standard deviations of that statistic’s own forecast.</p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">A useful statistic moves by more than its own forecast interval if the bill works.</p>
          </div>
          <div className="content-card px-6 py-5">
            <p className="text-sm uppercase tracking-wide text-gray-500">Shout them out · 60 seconds</p>
            <ol className="mt-3 space-y-3 text-2xl text-gray-400">
              <li>1. ________________</li>
              <li>2. ________________</li>
              <li>3. ________________</li>
            </ol>
          </div>
        </div>
      </div>
    </BillFrame>
  );
}

export function AudienceSlide() {
  return (
    <BillFrame title="The agent picked returns claiming the credit" source="Sources: IRS SOI Table 3.3, first prints for TY2020–TY2023; S. 3596 · Congress.gov" sourceUrl="https://www.irs.gov/statistics/soi-tax-stats-individual-income-tax-returns-complete-report-publication-1304">
      <div className="flex h-full flex-col justify-between gap-3">
        <p className="max-w-5xl text-[28px] font-medium leading-snug text-pe-dark">How many tax returns will claim the refundable child tax credit for tax year 2027 if this bill passes?</p>
        <div>
          <p className="mb-3 text-base text-gray-500">IRS first prints · Returns claiming the refundable child tax credit</p>
          <div className="grid grid-cols-4 gap-5">
            {[
              ['TY2020', '19.1M'],
              ['TY2021', '37.8M'],
              ['TY2022', '18.1M'],
              ['TY2023', '17.6M'],
            ].map(([year, count]) => (
              <div key={year} className="rounded-2xl bg-pe-light px-6 py-4">
                <p className="text-base font-medium text-gray-600">{year}</p>
                <p className="mt-2 text-4xl font-bold tracking-tight text-pe-dark">{count}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xl text-gray-700">Current earnings threshold <strong className="text-pe-dark">$2,500 → $1</strong></p>
        <div className="accent-block text-2xl font-medium text-pe-teal">Ninety seconds. Write a median and an 80% interval.</div>
      </div>
    </BillFrame>
  );
}

export function AgentSlide() {
  return (
    <BillFrame title="The agent forecast 27.2M returns if the bill passes" prototype source="Source: Thesis prototype, S. 3596 forecast and recorded reasoning trace · app.thesisinstitute.org/bills/s3596-119" sourceUrl={billUrl}>
      <div className="grid h-full min-h-0 grid-cols-[1.25fr_1fr] gap-6">
        <div className="flex min-h-0 flex-col justify-between gap-2">
          <p className="text-sm text-gray-600">TY2027 returns · Median [80% interval]</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-gray-100 p-4">
              <p className="text-base font-medium text-gray-600">Current law</p>
              <p className="mt-1 text-4xl font-bold text-pe-dark">17.6M</p>
              <p className="mt-2 text-lg text-gray-700">[5.1M, 30.1M]</p>
            </div>
            <div className="rounded-xl bg-pe-light p-4">
              <p className="text-base font-medium text-gray-600">If enacted</p>
              <p className="mt-1 text-4xl font-bold text-pe-dark">27.2M</p>
              <p className="mt-2 text-lg text-gray-700">[14.7M, 39.7M]</p>
            </div>
          </div>
          <p className="text-xl text-gray-700">Forecast gap <strong className="text-pe-teal">9.6M returns</strong></p>
          <p className="border-l-4 border-pe-teal pl-4 text-[15px] leading-relaxed text-gray-600">The agent took the last print and added half of 2021’s excess over its neighbours, an assumption it labels judgmental. Its interval spans 1.28 sample standard deviations of four prints.</p>
          <div className="space-y-1 text-xs leading-normal text-gray-500">
            <p>Forecast recorded 4 Aug 2026 · Condition judged 31 Dec 2027</p>
            <p>First-print resolution due by 31 Dec 2029</p>
          </div>
        </div>
        <LivePanel url={billUrl} title="Thesis prototype: S. 3596 bill forecast" />
      </div>
    </BillFrame>
  );
}

export function ClosingLoopSlide({ title = 'Scoring the forecast is the loop that ranks the other four' }: { title?: string }) {
  const [live, setLive] = useState(false);
  const calibrationUrl = 'https://app.thesisinstitute.org/calibration';
  return (
    <BillFrame title={title} prototype source="Source: Thesis prototype calibration scoreboard · app.thesisinstitute.org/calibration · Read 19 Sep 2026" sourceUrl={calibrationUrl}>
      <div className="relative h-full">
        <button
          type="button"
          onClick={(event) => { event.stopPropagation(); setLive(!live); }}
          className="absolute right-0 -top-16 z-20 rounded-lg border border-pe-200 bg-white px-4 py-2 text-sm font-semibold text-pe-dark shadow-sm pointer-events-auto"
        >
          {live ? 'Show the numbers' : 'Show the live scoreboard'}
        </button>
        {live ? (
          <LivePanel url={calibrationUrl} title="Thesis calibration scoreboard, live" />
        ) : (
          <div className="flex h-full flex-col justify-center gap-7">
            <p className="text-[28px] leading-snug text-gray-800">Publish the reasoning. Wait for the official number. <span className="font-semibold text-pe-teal">Score the forecast.</span></p>
            <div className="grid grid-cols-3 gap-6">
              <div className="content-card px-6 py-6">
                <p className="text-5xl font-bold tracking-tight text-pe-teal">45</p>
                <p className="mt-3 text-xl text-pe-dark">Witness-verified scores</p>
              </div>
              <div className="content-card px-6 py-6">
                <p className="text-5xl font-bold tracking-tight text-pe-teal">35 / 45</p>
                <p className="mt-3 text-xl text-pe-dark">Inside the stated 80% interval</p>
              </div>
              <div className="content-card px-6 py-6">
                <p className="text-5xl font-bold tracking-tight text-pe-teal">0.98</p>
                <p className="mt-3 text-xl text-pe-dark">CRPS ratio vs persistence</p>
                <p className="mt-2 text-sm text-gray-500">9 matched targets · Lower is better</p>
              </div>
            </div>
            <div className="accent-block">
              <p className="text-xl leading-relaxed text-gray-700">The record stays public. New evidence feeds back into the rules, the data, the model, and the next forecast.</p>
            </div>
          </div>
        )}
      </div>
    </BillFrame>
  );
}
