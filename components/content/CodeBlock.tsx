import React, { ReactNode } from 'react';

interface CodeBlockProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function CodeBlock({ title, children, className = '' }: CodeBlockProps) {
  return (
    <div className={`code-block ${className}`}>
      <div className="code-block-header">
        <div className="code-block-dot bg-red-500/80" />
        <div className="code-block-dot bg-yellow-500/80" />
        <div className="code-block-dot bg-green-500/80" />
        {title && (
          <span className="ml-3 text-sm text-gray-400 font-mono">{title}</span>
        )}
      </div>
      <div className="code-block-content">
        {children}
      </div>
    </div>
  );
}
