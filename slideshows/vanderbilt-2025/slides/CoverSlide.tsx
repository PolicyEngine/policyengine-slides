import React from 'react';
import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';

export default function CoverSlide() {
  return (
    <Slide isCover showFooter={false}>
      <div className="flex flex-col justify-center space-y-16">
        <SlideTitle className="text-white text-7xl text-center">
          Modeling State Tax Policy<br />
          with PolicyEngine
        </SlideTitle>

        <div className="text-3xl text-white space-y-3 text-left">
          <p className="font-medium">Max Ghenis</p>
          <p>Vanderbilt Prenatal-to-3 Policy Impact Center</p>
          <p className="text-2xl">State Tax Policy Academy</p>
        </div>
      </div>
    </Slide>
  );
}
