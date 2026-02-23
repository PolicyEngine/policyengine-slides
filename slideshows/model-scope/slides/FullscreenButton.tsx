'use client';

import React from 'react';

interface FullscreenButtonProps {
  iframeId: string;
}

export default function FullscreenButton({ iframeId }: FullscreenButtonProps) {
  const handleFullscreen = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const iframe = document.getElementById(iframeId) as HTMLIFrameElement;
    if (iframe) {
      try {
        // Request fullscreen
        await iframe.requestFullscreen();

        // Focus the iframe after entering fullscreen
        iframe.focus();
      } catch (err) {
        console.error('Error entering fullscreen:', err);
      }
    }
  };

  return (
    <button
      onClick={handleFullscreen}
      className="mt-4 px-6 py-3 bg-pe-teal text-white rounded-lg hover:bg-pe-dark transition-colors text-lg font-semibold shadow-lg"
    >
      View Fullscreen
    </button>
  );
}
