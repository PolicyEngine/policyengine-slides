'use client';

import { createContext, useContext, ReactNode } from 'react';

export interface SlideshowContextValue {
  id: string;
  title: string;
  date: string;
  location?: string;
  footerText: string;
  currentSlide: number;
  buildStep: number;
  totalSteps: number;
}

const SlideshowContext = createContext<SlideshowContextValue | null>(null);

export function useSlideshowContext(): SlideshowContextValue {
  const ctx = useContext(SlideshowContext);
  if (!ctx) {
    throw new Error('useSlideshowContext must be used within a SlideshowProvider');
  }
  return ctx;
}

export function useSlideshowContextSafe(): SlideshowContextValue | null {
  return useContext(SlideshowContext);
}

interface SlideshowProviderProps {
  value: SlideshowContextValue;
  children: ReactNode;
}

export function SlideshowProvider({ value, children }: SlideshowProviderProps) {
  return (
    <SlideshowContext.Provider value={value}>
      {children}
    </SlideshowContext.Provider>
  );
}
