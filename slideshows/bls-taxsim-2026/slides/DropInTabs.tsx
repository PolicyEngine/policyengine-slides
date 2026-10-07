'use client';

import { useState } from 'react';
import { IconCheck, IconCircleCheck, IconCopy } from '@tabler/icons-react';
import type { BlsSlideContent } from '../content';

type DropInData = NonNullable<BlsSlideContent['dropIn']>;

/** Renders `[[text]]` spans as the highlighted, changed part; `#` lines render as dim comments. */
function Code({ code, highlight }: { code: string; highlight: boolean }) {
  return (
    <pre className="whitespace-pre-wrap break-words font-mono text-xs leading-relaxed lg:text-[13px]">
      {code.split('\n').map((line, lineIndex) => (
        <span key={lineIndex} className={line.trimStart().startsWith('#') ? 'text-white/45' : undefined}>
          {line
            .split(/(\[\[.*?\]\])/g)
            .filter(Boolean)
            .map((part, index) =>
              part.startsWith('[[') ? (
                <span key={index} className={highlight ? 'font-bold text-teal-300' : ''}>{part.slice(2, -2)}</span>
              ) : (
                <span key={index}>{part}</span>
              ),
            )}
          {'\n'}
        </span>
      ))}
    </pre>
  );
}

function CodeBlock({ lang, code, highlight = false, dim = false }: { lang: string; code: string; highlight?: boolean; dim?: boolean }) {
  const [copied, setCopied] = useState(false);
  const plain = code.replace(/\[\[|\]\]/g, '');
  return (
    <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-pe-darker">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 lg:text-sm">
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
          {copied ? <IconCheck size={14} stroke={2} aria-hidden="true" /> : <IconCopy size={14} stroke={2} aria-hidden="true" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className={`flex-1 px-4 py-3 ${dim ? 'text-white/70' : 'text-white'}`}>
        <Code code={code} highlight={highlight} />
      </div>
    </div>
  );
}

function Tabs({ labels, active, onSelect, label }: { labels: string[]; active: number; onSelect: (index: number) => void; label: string }) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label={label}>
      {labels.map((text, index) => (
        <button
          key={text}
          type="button"
          role="tab"
          aria-selected={index === active}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(index);
          }}
          className={`pointer-events-auto rounded-lg px-3 py-1.5 text-sm font-medium transition-colors lg:px-4 ${
            index === active ? 'bg-teal-600 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

/** The TAXSIM site's Installation and Get started sections, side by side, with working tabs. */
export default function DropInTabs({ dropIn }: { dropIn: DropInData }) {
  const [os, setOs] = useState(0);
  const [env, setEnv] = useState(0);
  const tab = dropIn.tabs[env];
  return (
    <div
      className="mt-2 flex flex-col gap-4 lg:h-[min(calc(100vh-330px),32rem)] lg:justify-between"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-[0.72fr_1.28fr] items-stretch gap-8">
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-bold text-pe-dark lg:text-xl">{dropIn.installTitle}</h3>
            <Tabs labels={dropIn.installTabs.map((t) => t.label)} active={os} onSelect={setOs} label="Operating system" />
          </div>
          <CodeBlock lang={dropIn.installTabs[os].lang} code={dropIn.installTabs[os].code} />
        </section>

        <section className="flex flex-col gap-3">
          <div>
            <h3 className="text-lg font-bold text-pe-dark lg:text-xl">{dropIn.getStartedTitle}</h3>
            <p className="text-sm text-gray-600 lg:text-base">{dropIn.getStartedSubtitle}</p>
          </div>
          <Tabs labels={dropIn.tabs.map((t) => t.label)} active={env} onSelect={setEnv} label="Environment" />
          <div className="grid flex-1 grid-cols-2 items-stretch gap-4" role="tabpanel">
            <div className="flex flex-col">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">{dropIn.beforeLabel}</p>
              <CodeBlock lang={tab.lang} code={tab.before} dim />
            </div>
            <div className="flex flex-col">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-teal-600">{dropIn.afterLabel}</p>
              <CodeBlock lang={tab.lang} code={tab.after} highlight />
            </div>
          </div>
        </section>
      </div>

      <div className="flex items-center gap-4 rounded-lg border-l-4 border-pe-teal bg-pe-teal/10 px-5 py-3">
        <IconCircleCheck className="shrink-0 text-pe-teal" size={28} stroke={1.75} aria-hidden="true" />
        <p className="text-lg font-semibold leading-snug text-pe-dark lg:text-xl">{dropIn.takeaway}</p>
      </div>
    </div>
  );
}
