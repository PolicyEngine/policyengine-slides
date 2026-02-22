import React, { ReactNode } from 'react';

interface StatNumberProps {
  value: string;
  label: string;
  sublabel?: string;
  className?: string;
}

export default function StatNumber({ value, label, sublabel, className = '' }: StatNumberProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="stat-number">{value}</div>
      <div className="text-xl font-semibold text-gray-800 mt-2">{label}</div>
      {sublabel && (
        <div className="text-lg text-gray-500 mt-1">{sublabel}</div>
      )}
    </div>
  );
}
