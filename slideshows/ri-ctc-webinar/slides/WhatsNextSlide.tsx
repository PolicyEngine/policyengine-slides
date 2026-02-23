import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import SlideContent from '@/components/content/SlideContent';

export default function WhatsNextSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>What's next</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-6 text-left">
            <div>
              <p className="font-bold text-pe-teal text-4xl mb-3">Rhode Island</p>
              <ul className="list-disc list-inside ml-6 space-y-2 text-xl">
                <li>Track and analyze any CTC proposals from the legislature</li>
                <li>Model other proposals from the Governor's budget (high income surtax, Social Security exemption)</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-pe-teal text-4xl mb-3">Nationwide</p>
              <ul className="list-disc list-inside ml-6 space-y-2 text-xl">
                <li>Launch 2026 State Legislative Dashboard displaying impacts of bills and proposals we're tracking</li>
                <li>Partner with organizations interested in building policy exploration tools for their states</li>
                <li>Update 2025 individual income tax model for all 50 states by end of February</li>
              </ul>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
