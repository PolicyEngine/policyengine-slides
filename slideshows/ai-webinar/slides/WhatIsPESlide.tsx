import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function WhatIsPESlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What is PolicyEngine?</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">Free, open-source tools for tax and benefit policy analysis</p>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-8 mt-4">
        <div className="content-card p-6">
          <div className="icon-circle mb-4">
            <span className="text-2xl">&#128202;</span>
          </div>
          <h3 className="text-lg font-bold text-pe-dark mb-2">Microsimulation</h3>
          <p className="text-gray-600">
            Model the impact of tax and benefit reforms on households and the economy using representative survey data
          </p>
        </div>

        <div className="content-card p-6">
          <div className="icon-circle mb-4">
            <span className="text-2xl">&#128187;</span>
          </div>
          <h3 className="text-lg font-bold text-pe-dark mb-2">Open source</h3>
          <p className="text-gray-600">
            All code is public on GitHub. Python-based rules engine built on the OpenFisca framework
          </p>
        </div>

        <div className="content-card p-6">
          <div className="icon-circle mb-4">
            <span className="text-2xl">&#127758;</span>
          </div>
          <h3 className="text-lg font-bold text-pe-dark mb-2">US and UK coverage</h3>
          <p className="text-gray-600">
            Federal taxes, state programs, SNAP, TANF, Medicaid, SSI, and more across 50 states
          </p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
        <span className="text-emerald-800 text-lg">
          Used by researchers, nonprofits, and government agencies to analyze policy trade-offs
        </span>
      </div>
    </Slide>
  );
}
