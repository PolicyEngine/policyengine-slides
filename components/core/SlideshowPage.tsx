'use client';

import { getSlideshowById } from '@/lib/slideshows';
import SlideshowViewer from './SlideshowViewer';
import { redirect } from 'next/navigation';

interface SlideshowPageProps {
  slideshowId: string;
}

export default function SlideshowPage({ slideshowId }: SlideshowPageProps) {
  const config = getSlideshowById(slideshowId);

  if (!config) {
    redirect('/');
  }

  return <SlideshowViewer config={config} />;
}
