'use client';

import { useState } from 'react';
import { IconCheck, IconCircleCheck, IconCopy } from '@tabler/icons-react';
import type { BlsSlideContent } from '../content';

type DropInData = NonNullable<BlsSlideContent['dropIn']>;

/** Renders `[[text]]` spans as the highlighted, changed part; `#` lines render as dim comments. */
function Code({ code, highlight }: { code: string; highlight: boolean }) {
  return (
    <pre className="whitespace-pre-wrap break-words font-mono text-xs leading-normal lg:text-[13px] lg:[@media(min-height:880px)]:text-sm">
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

function CopyButton({ code, className = '' }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        void navigator.clipboard?.writeText(code.replace(/\[\[|\]\]/g, '')).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        });
      }}
      className={`pointer-events-auto flex items-center gap-1.5 rounded px-1.5 py-0.5 text-xs text-white/60 hover:bg-white/10 hover:text-white lg:text-sm ${className}`}
    >
      {copied ? <IconCheck size={14} stroke={2} aria-hidden="true" /> : <IconCopy size={14} stroke={2} aria-hidden="true" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

function CodeBlock({
  label,
  code,
  highlight = false,
  dim = false,
  labelClassName = 'text-white/60',
}: {
  label: string;
  code: string;
  highlight?: boolean;
  dim?: boolean;
  labelClassName?: string;
}) {
  return (
    <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-pe-darker">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-1 text-xs lg:text-sm">
        <span className={`font-semibold ${labelClassName}`}>{label}</span>
        <CopyButton code={code} />
      </div>
      <div className={`flex-1 px-4 py-2.5 ${dim ? 'text-white/70' : 'text-white'}`}>
        <Code code={code} highlight={highlight} />
      </div>
    </div>
  );
}

/**
 * Install commands, one step under the other. Every OS variant sits in the same grid cell (inactive ones
 * invisible), so the box keeps the size of the longest variant and the tabs do not move when clicked.
 */
function InstallBlock({ tabs, active }: { tabs: DropInData['installTabs']; active: number }) {
  return (
    <div className="relative max-w-full rounded-lg bg-pe-darker py-3 pl-5 pr-20 text-white">
      <div className="grid">
        {tabs.map((tab, index) => (
          <div
            key={tab.label}
            className={`col-start-1 row-start-1 flex flex-col gap-2 ${index === active ? '' : 'invisible'}`}
            aria-hidden={index !== active}
          >
            {tab.code.split('\n\n').map((step) => (
              <Code key={step} code={step} highlight={false} />
            ))}
          </div>
        ))}
      </div>
      <CopyButton code={tabs[active].code} className="absolute right-3 top-2" />
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
          className={`pointer-events-auto rounded-lg px-2.5 py-1 text-xs font-medium transition-colors lg:px-4 lg:py-1.5 lg:text-sm ${
            index === active ? 'bg-teal-600 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

/**
 * The TAXSIM site's Installation section (centered, on top: title and OS tabs above the commands) and its
 * Get started section below, with working tabs. Code boxes size to their code. On short screens the whole
 * widget scales down a little instead of squeezing the spacing.
 */
export default function DropInTabs({ dropIn }: { dropIn: DropInData }) {
  const [os, setOs] = useState(0);
  const [env, setEnv] = useState(0);
  const tab = dropIn.tabs[env];
  return (
    <div
      className="mt-2 flex flex-col gap-5 lg:gap-8 [@media(max-height:820px)]:gap-5 lg:[@media(min-height:741px)_and_(max-height:820px)]:[zoom:0.96] max-lg:[@media(max-height:820px)]:[zoom:0.88] [@media(max-height:740px)]:[zoom:0.88]"
      onClick={(e) => e.stopPropagation()}
    >
      <section className="flex flex-col items-center gap-3">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <h3 className="text-lg font-bold text-pe-dark lg:text-xl">{dropIn.installTitle}</h3>
          <Tabs labels={dropIn.installTabs.map((t) => t.label)} active={os} onSelect={setOs} label="Operating system" />
        </div>
        <InstallBlock tabs={dropIn.installTabs} active={os} />
      </section>

      <section className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <div className="flex flex-wrap items-baseline gap-x-3">
            <h3 className="text-lg font-bold text-pe-dark lg:text-xl">{dropIn.getStartedTitle}</h3>
            <p className="text-sm text-gray-600 lg:text-base">{dropIn.getStartedSubtitle}</p>
          </div>
          <Tabs labels={dropIn.tabs.map((t) => t.label)} active={env} onSelect={setEnv} label="Environment" />
        </div>
        <div className="grid grid-cols-2 items-stretch gap-4" role="tabpanel">
          <CodeBlock label={dropIn.beforeLabel} code={tab.before} dim />
          <CodeBlock label={dropIn.afterLabel} code={tab.after} highlight labelClassName="text-teal-300" />
        </div>
      </section>

      <div className="flex items-center gap-4 rounded-lg border-l-4 border-pe-teal bg-pe-teal/10 px-5 py-3">
        <IconCircleCheck className="shrink-0 text-pe-teal" size={28} stroke={1.75} aria-hidden="true" />
        <p className="text-lg font-semibold leading-snug text-pe-dark lg:text-xl">{dropIn.takeaway}</p>
      </div>
    </div>
  );
}
