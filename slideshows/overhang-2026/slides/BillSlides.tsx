'use client';

import { ReactNode, useState } from 'react';
import { IconArrowRight, IconArrowsMaximize, IconExternalLink, IconX } from '@tabler/icons-react';
import Slide from '@/components/core/Slide';

const billUrl = 'https://app.thesisinstitute.org/bills/s3596-119';
const statuteUrl = 'https://axiom.org/us/statute/26/24/d/1';
const congressUrl = 'https://www.congress.gov/bill/119th-congress/senate-bill/3596';

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
    <Slide fullBleed>
      <div className="absolute inset-x-16 top-14 bottom-[104px] flex flex-col">
        <div className="mb-6 shrink-0">
          <div className="flex items-center justify-between gap-6">
            <h1 className="text-[44px] font-bold leading-tight tracking-tight text-pe-dark">{title}</h1>
            {prototype && <span className="rounded-full bg-pe-light px-4 py-2 text-sm font-semibold text-pe-dark">Thesis · Prototype</span>}
          </div>
          <div className="accent-bar mt-4 w-28" />
        </div>
        <div className="min-h-0 flex-1">{children}</div>
        <a
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
          onClick={(event) => event.stopPropagation()}
          className="mt-4 shrink-0 text-xs leading-snug text-gray-500 hover:text-pe-teal"
        >
          {source}
        </a>
      </div>
    </Slide>
  );
}

/** Live-app pattern from IARIW, with its controls kept within the slide. */
function LivePanel({ url, title }: { url: string; title: string }) {
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
    <BillFrame title="One bill through the stack" source="Source: S. 3596, Stronger Start for Working Families Act · Congress.gov" sourceUrl={congressUrl}>
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
  return (
    <BillFrame title="The rules" source="Source: the Axiom Foundation · axiom.org/us/statute/26/24/d/1; S. 3596" sourceUrl={statuteUrl}>
      <div className="grid h-full min-h-0 grid-cols-[0.9fr_1.7fr] gap-7">
        <div className="flex flex-col justify-center gap-6">
          <p className="text-2xl leading-snug text-gray-800">Read the statute beside the rules that encode it.</p>
          <div className="content-card p-5">
            <p className="mb-3 text-base text-gray-600">The bill changes this parameter</p>
            <p className="break-words font-mono text-lg leading-relaxed text-pe-dark">ctc_refundable_<wbr />phase_in_threshold</p>
            <p className="mt-4 text-3xl font-semibold text-pe-teal">$2,500 → $1</p>
          </div>
          <p className="text-base text-gray-500">The statute and its encoded rules provide a traceable starting point.</p>
        </div>
        <LivePanel url={statuteUrl} title="The Axiom Foundation: child tax credit statute and encoded rules" />
      </div>
    </BillFrame>
  );
}

export function ModelSlide() {
  return (
    <BillFrame title="The model" prototype source="Source: PolicyEngine impact displayed in the Thesis prototype · app.thesisinstitute.org/bills/s3596-119" sourceUrl={billUrl}>
      <div className="flex h-full flex-col justify-center gap-8">
        <div className="flex items-center justify-between gap-6">
          <p className="text-2xl text-gray-700">PolicyEngine estimates the impact of lowering the threshold.</p>
          <span className="shrink-0 rounded-full border border-pe-amber px-4 py-2 text-sm text-gray-700">Certification pending</span>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[
            ['−$1.83B', 'Federal budget impact', '2026'],
            ['−$17.1B', 'Federal budget impact', '2026–2035'],
            ['6.5%', 'People who gain', 'Under the modeled reform'],
          ].map(([value, label, period]) => (
            <div key={value} className="content-card px-6 py-8">
              <p className="text-[52px] font-bold tracking-tight text-pe-teal">{value}</p>
              <p className="mt-4 text-xl font-medium text-pe-dark">{label}</p>
              <p className="mt-2 text-base text-gray-500">{period}</p>
            </div>
          ))}
        </div>
        <div className="accent-block">
          <p className="text-xl leading-relaxed text-gray-700">A computed policy impact gives the forecast a mechanism to examine.</p>
          <p className="mt-2 text-sm text-gray-500">Published model uses a $0 threshold; the bill specifies $1.</p>
        </div>
      </div>
    </BillFrame>
  );
}

export function AudienceSlide() {
  return (
    <BillFrame title="Your number first" source="Sources: IRS SOI Table 3.3, first prints for TY2020–TY2023; S. 3596 · Congress.gov" sourceUrl="https://www.irs.gov/statistics/soi-tax-stats-individual-income-tax-returns-complete-report-publication-1304">
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
        <div className="accent-block text-2xl font-medium text-pe-teal">Two minutes. Write a median and an 80% interval.</div>
      </div>
    </BillFrame>
  );
}

export function AgentSlide() {
  return (
    <BillFrame title="The agent’s forecast" prototype source="Source: Thesis prototype, S. 3596 forecast and recorded reasoning trace · app.thesisinstitute.org/bills/s3596-119" sourceUrl={billUrl}>
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
          <p className="border-l-4 border-pe-teal pl-4 text-[15px] leading-relaxed text-gray-600">Last print + half of TY2021’s excess over its neighbours (a judgmental assumption); interval half-width = 1.28 sample standard deviations of four prints.</p>
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

export function ClosingLoopSlide() {
  return (
    <BillFrame title="The loop that matters most" prototype source="Source: Thesis prototype calibration scoreboard · app.thesisinstitute.org/calibration · Read 19 Sep 2026" sourceUrl="https://app.thesisinstitute.org/calibration">
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
    </BillFrame>
  );
}
