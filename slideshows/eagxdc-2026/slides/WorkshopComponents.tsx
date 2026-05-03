import { ReactNode } from 'react';
import Image from '@/components/core/BasePathImage';

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="text-sm font-bold uppercase tracking-[0.16em] text-pe-teal mb-3">
      {children}
    </div>
  );
}

export function BigStatement({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`text-5xl font-black leading-[1.08] tracking-tight text-pe-dark ${className}`}>
      {children}
    </div>
  );
}

export function FramedPanel({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`content-card p-6 ${className}`}>
      {children}
    </div>
  );
}

export function BrowserFrame({
  src,
  alt,
  caption,
  className = '',
  objectFit = 'contain',
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  objectFit?: 'contain' | 'cover';
}) {
  return (
    <div className={`h-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-xl ${className}`}>
      <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center gap-2 px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        {caption && (
          <span className="ml-3 text-xs font-mono text-gray-500 truncate">
            {caption}
          </span>
        )}
      </div>
      <div className="relative h-[calc(100%-2rem)] bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          className={objectFit === 'cover' ? 'object-cover' : 'object-contain'}
          sizes="900px"
        />
      </div>
    </div>
  );
}

export function TerminalBlock({
  lines,
  className = '',
}: {
  lines: string[];
  className?: string;
}) {
  return (
    <div className={`code-block ${className}`}>
      <div className="code-block-header">
        <div className="code-block-dot bg-red-500" />
        <div className="code-block-dot bg-yellow-500" />
        <div className="code-block-dot bg-green-500" />
        <span className="text-white/40 text-sm ml-2">terminal</span>
      </div>
      <div className="code-block-content">
        <pre className="text-lg whitespace-pre-wrap">{lines.join('\n')}</pre>
      </div>
    </div>
  );
}

export function StepPill({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-12 w-12 rounded-2xl bg-pe-teal text-white flex items-center justify-center font-black text-xl shrink-0">
        {number}
      </div>
      <div>
        <div className="text-2xl font-bold text-pe-dark">{title}</div>
        <div className="text-lg text-gray-600 leading-relaxed">{body}</div>
      </div>
    </div>
  );
}

export function OpenMetric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <div className="text-5xl font-black text-pe-teal tracking-tight">{value}</div>
      <div className="mt-1 text-sm uppercase tracking-[0.14em] text-gray-500 font-bold">
        {label}
      </div>
    </div>
  );
}
