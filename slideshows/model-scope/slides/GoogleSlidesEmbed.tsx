import React from 'react';
import Slide from '@/components/core/Slide';
import FullscreenButton from './FullscreenButton';

export default function GoogleSlidesEmbed() {
  return (
    <Slide>
      <div className="absolute inset-0 pt-8 pb-24 px-12 flex flex-col">
        <iframe
          id="model-scope-iframe"
          src="https://docs.google.com/presentation/d/1CHpg5393pttJP-s1NoEb-ME-MHlQozOdEJMHNKskNuc/embed?start=false&loop=false&delayms=3000"
          className="w-full flex-1 rounded-lg shadow-2xl mb-3"
          frameBorder="0"
          allowFullScreen={true}
          tabIndex={0}
        />
        <div className="flex justify-center">
          <FullscreenButton iframeId="model-scope-iframe" />
        </div>
      </div>
    </Slide>
  );
}
