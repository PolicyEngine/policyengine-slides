import React from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function HowPEWorksSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How PolicyEngine works</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">Legal text becomes executable code</p>
      </SlideHeader>

      <div className="flex gap-6 items-stretch mt-2">
        {/* Step 1 */}
        <div className="flex-1 content-card p-5">
          <div className="slide-tag mb-3">1. Parameters</div>
          <p className="text-gray-600 text-xs mb-2">
            <span className="font-mono text-[10px] text-gray-400">gov/usda/snap/max_allotment.yaml</span>
          </p>
          <div className="code-block mt-2">
            <div className="code-block-header">
              <div className="code-block-dot bg-red-500"></div>
              <div className="code-block-dot bg-yellow-500"></div>
              <div className="code-block-dot bg-green-500"></div>
              <span className="text-white/40 text-xs ml-2">max_allotment.yaml</span>
            </div>
            <div className="code-block-content text-xs">
              <pre>{`description: Maximum SNAP allotment by state group and household size.
main:
  CONTIGUOUS_US:
    1:
      2024-10-01: 292
      2025-10-01: 298
    2:
      2024-10-01: 536
      2025-10-01: 546
    3:
      2024-10-01: 768
      2025-10-01: 785
    4:
      2024-10-01: 975
      2025-10-01: 994
    ...
  AK_URBAN:
    1:
      2025-10-01: 385
    ...
  HI:
    1:
      2025-10-01: 506
    ...
metadata:
  unit: currency-USD
  period: month
  reference:
    - title: SNAP - Fiscal Year 2026 Cost-of-Living Adjustments
      href: https://fns-prod.azureedge.us/sites/default/files/
            resource-files/snap-cola-fy26memo.pdf#page=4
    - title: USDA Cost of Living Adjustments
      href: https://www.fns.usda.gov/snap/allotment/COLA`}</pre>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex-1 content-card p-5">
          <div className="slide-tag mb-3">2. Variables</div>
          <p className="text-gray-600 text-xs mb-2">
            <span className="font-mono text-[10px] text-gray-400">variables/gov/usda/snap/snap_normal_allotment.py</span>
          </p>
          <div className="code-block mt-2">
            <div className="code-block-header">
              <div className="code-block-dot bg-red-500"></div>
              <div className="code-block-dot bg-yellow-500"></div>
              <div className="code-block-dot bg-green-500"></div>
              <span className="text-white/40 text-xs ml-2">snap_normal_allotment.py</span>
            </div>
            <div className="code-block-content text-xs">
              <pre>{`class snap_normal_allotment(Variable):
    value_type = float
    entity = SPMUnit
    definition_period = MONTH
    documentation = "Normal SNAP benefit"
    label = "SNAP normal allotment"
    reference = (
      "https://www.law.cornell.edu"
      "/uscode/text/7/2017#a"
    )
    unit = USD
    defined_for = "is_snap_eligible"

    def formula(spm_unit, period, parameters):
        # U.S.C Title 7, Chapter 51
        expected_contribution = spm_unit(
            "snap_expected_contribution",
            period,
        )
        max_allotment = spm_unit(
            "snap_max_allotment", period
        )
        normal = max_allotment - expected_contribution
        min_allotment = spm_unit(
            "snap_min_allotment", period
        )
        return max_(min_allotment, normal)`}</pre>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex-1 content-card p-5">
          <div className="slide-tag mb-3">3. Tests</div>
          <p className="text-gray-600 text-xs mb-2">
            <span className="font-mono text-[10px] text-gray-400">tests/gov/usda/snap/snap_benefit.yaml</span>
          </p>
          <div className="code-block mt-2">
            <div className="code-block-header">
              <div className="code-block-dot bg-red-500"></div>
              <div className="code-block-dot bg-yellow-500"></div>
              <div className="code-block-dot bg-green-500"></div>
              <span className="text-white/40 text-xs ml-2">snap_benefit.yaml</span>
            </div>
            <div className="code-block-content text-xs">
              <pre>{`- name: Single person SNAP
  period: 2025
  input:
    people:
      person:
        employment_income: 12000
    spm_units:
      unit:
        members: [person]
  output:
    snap: 1_908`}</pre>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
