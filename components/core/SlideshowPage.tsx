'use client';

import { getSlideshowById } from '@/lib/slideshows';
import SlideshowViewer from './SlideshowViewer';
import PasswordGate from './PasswordGate';
import { redirect } from 'next/navigation';

interface SlideshowPageProps {
  slideshowId: string;
}

export default function SlideshowPage({ slideshowId }: SlideshowPageProps) {
  const config = getSlideshowById(slideshowId);

  if (!config) {
    redirect('/');
  }

  if (config.private) {
    return (
      <PasswordGate>
        <SlideshowViewer config={config} />
      </PasswordGate>
    );
  }

  return <SlideshowViewer config={config} />;
}
