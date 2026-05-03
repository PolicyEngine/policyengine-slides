import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function RulesAsCodeSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Legal text becomes executable, testable code</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">
          Every parameter has a citation; every formula has a test.
        </p>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-5 mt-4">
        <div className="content-card p-5">
          <div className="slide-tag mb-3">1. Parameters</div>
          <p className="text-gray-500 text-xs mb-2 font-mono">
            gov/usda/snap/max_allotment.yaml
          </p>
          <div className="code-block mt-2">
            <div className="code-block-header">
              <div className="code-block-dot bg-red-500" />
              <div className="code-block-dot bg-yellow-500" />
              <div className="code-block-dot bg-green-500" />
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
    ...
metadata:
  unit: currency-USD
  period: month
  reference:
    - title: SNAP FY2026 COLA memo
      href: fns-prod.azureedge.us/.../snap-cola-fy26memo.pdf`}</pre>
            </div>
          </div>
        </div>

        <div className="content-card p-5">
          <div className="slide-tag mb-3">2. Variables</div>
          <p className="text-gray-500 text-xs mb-2 font-mono">
            variables/gov/usda/snap/snap_normal_allotment.py
          </p>
          <div className="code-block mt-2">
            <div className="code-block-header">
              <div className="code-block-dot bg-red-500" />
              <div className="code-block-dot bg-yellow-500" />
              <div className="code-block-dot bg-green-500" />
              <span className="text-white/40 text-xs ml-2">snap_normal_allotment.py</span>
            </div>
            <div className="code-block-content text-xs">
              <pre>{`class snap_normal_allotment(Variable):
    value_type = float
    entity = SPMUnit
    definition_period = MONTH
    label = "SNAP normal allotment"
    reference = (
      "https://www.law.cornell.edu"
      "/uscode/text/7/2017#a"
    )
    unit = USD
    defined_for = "is_snap_eligible"

    def formula(spm_unit, period, parameters):
        expected = spm_unit(
            "snap_expected_contribution", period
        )
        max_a = spm_unit(
            "snap_max_allotment", period
        )
        normal = max_a - expected
        floor = spm_unit(
            "snap_min_allotment", period
        )
        return max_(floor, normal)`}</pre>
            </div>
          </div>
        </div>

        <div className="content-card p-5">
          <div className="slide-tag mb-3">3. Tests</div>
          <p className="text-gray-500 text-xs mb-2 font-mono">
            tests/.../snap/snap.yaml
          </p>
          <div className="code-block mt-2">
            <div className="code-block-header">
              <div className="code-block-dot bg-red-500" />
              <div className="code-block-dot bg-yellow-500" />
              <div className="code-block-dot bg-green-500" />
              <span className="text-white/40 text-xs ml-2">snap.yaml</span>
            </div>
            <div className="code-block-content text-xs">
              <pre>{`- name: North Carolina 2025, yearly
        integration test
  period: 2025
  absolute_error_margin: 0.3
  input:
    people:
      person1:
        age: 55
        is_blind: true
        employment_income: 30_600
    households:
      household:
        members: [person1]
        state_code: NC
  output:
    snap: 71.75`}</pre>
            </div>
          </div>
        </div>
      </div>

      <div className="accent-block mt-6 max-w-5xl">
        <p className="text-xl text-gray-700 leading-relaxed">
          Thousands of these triples — across federal and state programs —
          combine into the household and population calculator.
        </p>
      </div>
    </Slide>
  );
}
