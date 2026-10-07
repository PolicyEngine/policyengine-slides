'use client';

import { useState } from 'react';
import { IconCheck, IconCircleCheck, IconCopy } from '@tabler/icons-react';
import type { BlsSlideContent } from '../content';

type DropInData = NonNullable<BlsSlideContent['dropIn']>;

/** Renders `[[text]]` spans as the highlighted, changed part of the code. */
function Code({ code, highlight }: { code: string; highlight: boolean }) {
  const parts = code.split(/(\[\[.*?\]\])/g).filter(Boolean);
  return (
    <pre className="whitespace-pre-wrap break-words font-mono text-xs leading-relaxed lg:text-sm">
      {parts.map((part, index) =>
        part.startsWith('[[') ? (
          <span key={index} className={highlight ? 'font-bold text-teal-300' : ''}>{part.slice(2, -2)}</span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </pre>
  );
}

function CodeBlock({ label, lang, code, after }: { label: string; lang: string; code: string; after: boolean }) {
  const [copied, setCopied] = useState(false);
  const plain = code.replace(/\[\[|\]\]/g, '');
  return (
    <div className="flex min-w-0 flex-col">
      <p className={`mb-2 text-sm font-semibold uppercase tracking-wider ${after ? 'text-teal-600' : 'text-gray-500'}`}>{label}</p>
      <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-pe-darker">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
          <span>{lang}</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              void navigator.clipboard?.writeText(plain).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              });
            }}
            className="pointer-events-auto flex items-center gap-1.5 rounded px-1.5 py-0.5 hover:bg-white/10 hover:text-white"
          >
            {copied ? <IconCheck size={15} stroke={2} aria-hidden="true" /> : <IconCopy size={15} stroke={2} aria-hidden="true" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <div className={`flex-1 px-4 py-3 lg:py-4 ${after ? 'text-white' : 'text-white/70'}`}>
          <Code code={code} highlight={after} />
        </div>
      </div>
    </div>
  );
}

/** The TAXSIM site's Get started widget: one tab per environment, before and after code side by side. */
export default function DropInTabs({ dropIn }: { dropIn: DropInData }) {
  const [active, setActive] = useState(0);
  const tab = dropIn.tabs[active];
  return (
    <div
      className="mt-2 flex flex-col gap-3 lg:h-[min(calc(100vh-330px),32rem)] lg:justify-between"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center gap-4 self-center rounded-lg bg-pe-darker px-6 py-3 shadow-sm">
        <span className="text-sm font-semibold uppercase tracking-wider text-white/60">{dropIn.installLabel}</span>
        <code className="font-mono text-base text-white">
          <span className="text-white/50">$ </span>{dropIn.install}
        </code>
      </div>

      <div className="flex justify-center gap-2" role="tablist" aria-label="Environment">
        {dropIn.tabs.map((t, index) => (
          <button
            key={t.label}
            type="button"
            role="tab"
            aria-selected={index === active}
            onClick={(e) => {
              e.stopPropagation();
              setActive(index);
            }}
            className={`pointer-events-auto rounded-lg px-5 py-2 text-base font-medium transition-colors ${
              index === active ? 'bg-teal-600 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div>
        <div className="grid grid-cols-2 items-stretch gap-6" role="tabpanel">
          <CodeBlock label={dropIn.beforeLabel} lang={tab.lang} code={tab.before} after={false} />
          <CodeBlock label={dropIn.afterLabel} lang={tab.lang} code={tab.after} after />
        </div>
        {tab.note && <p className="mt-2 text-sm leading-snug text-gray-600">{tab.note}</p>}
      </div>

      <div className="flex items-center gap-4 rounded-lg border-l-4 border-pe-teal bg-pe-teal/10 px-5 py-3">
        <IconCircleCheck className="shrink-0 text-pe-teal" size={28} stroke={1.75} aria-hidden="true" />
        <p className="text-lg font-semibold leading-snug text-pe-dark lg:text-xl">{dropIn.takeaway}</p>
      </div>
    </div>
  );
}
