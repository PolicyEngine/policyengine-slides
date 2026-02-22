import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function WhatsNextSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What&apos;s next</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8 mt-4">
        <div className="content-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-pe-teal/20 text-pe-dark text-xs font-bold uppercase tracking-wider">In progress</span>
            <h3 className="text-xl font-bold text-gray-800">Cross-program validation</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Benefit programs form a connected system &mdash; SNAP benefits count as unearned income for TANF, Medicaid enrollment affects SSI calculations, and some programs are mutually exclusive.
          </p>
          <div className="p-3 bg-pe-teal/5 border border-pe-teal/20 rounded-lg">
            <p className="text-pe-dark text-sm">
              A cross-program validator would detect these interactions during implementation rather than in production.
            </p>
          </div>
        </div>

        <div className="content-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">Exploring</span>
            <h3 className="text-xl font-bold text-gray-800">Historical implementations</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Parameters support multiple effective dates, but program reforms often involve structural changes &mdash; eliminating deductions, adding eligibility categories, or restructuring formulas.
          </p>
          <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-purple-800 text-sm">
              Testing approaches to handle these reforms across time, not just updated values.
            </p>
          </div>
        </div>
      </div>

      <div className="content-card p-6 mt-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">Vision</span>
          <h3 className="text-xl font-bold text-gray-800">Expanding multi-agent workflows</h3>
        </div>
        <p className="text-gray-600">
          The same agent architecture can be applied beyond program implementation. We want to bring multi-agent workflows to <strong>reform scoring</strong> (automated policy impact analysis), <strong>report writing</strong> (generating research briefs from simulation results), and <strong>custom dashboard creation</strong> (building interactive tools for specific policy questions).
        </p>
      </div>
    </Slide>
  );
}
