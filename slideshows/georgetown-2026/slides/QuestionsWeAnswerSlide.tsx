import React from 'react';
import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideContent from '@/components/content/SlideContent';

export default function QuestionsWeAnswerSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Questions we help answer</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-2xl font-medium text-pe-teal">"How does this affect my family?"</p>
                <p className="text-lg text-gray-600 mt-2">Household-by-household impacts</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-2xl font-medium text-pe-teal">"What does this cost?"</p>
                <p className="text-lg text-gray-600 mt-2">Budget scores over 10 years</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-2xl font-medium text-pe-teal">"Who wins and loses?"</p>
                <p className="text-lg text-gray-600 mt-2">Distributional analysis by income, age, race</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-2xl font-medium text-pe-teal">"How does this change inequality?"</p>
                <p className="text-lg text-gray-600 mt-2">Poverty rates, Gini coefficient, income shares</p>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
