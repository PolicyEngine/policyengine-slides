import React from 'react';
import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';

export default function QuestionsSlide() {
  return (
    <Slide isEnd showFooter={false}>
      <div className="flex flex-col items-center justify-center">
        <SlideTitle className="text-white">Questions?</SlideTitle>
      </div>
    </Slide>
  );
}
